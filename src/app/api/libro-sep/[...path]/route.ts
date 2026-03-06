export const runtime = 'edge';
import { NextRequest, NextResponse } from "next/server";

/**
 * API Route: /api/libro-sep/[...path]
 * 
 * En DESARROLLO: sirve archivos desde libros-sep/ local
 * En PRODUCCIÓN: redirige a Cloudflare R2 (bucket público)
 * 
 * Ejemplo: /api/libro-sep/primaria-3/saberes/pag-008.jpg
 */
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ path: string[] }> }
) {
    const { path: segments } = await params;
    const r2Key = segments.join("/");

    // ── PRODUCCIÓN: redirigir a R2 público ──
    const r2PublicUrl = process.env.R2_PUBLIC_URL;
    if (r2PublicUrl) {
        const r2Url = `${r2PublicUrl}/libros-sep/${r2Key}`;
        return NextResponse.redirect(r2Url, {
            status: 301,
            headers: { "Cache-Control": "public, max-age=86400" },
        });
    }

    // ── DESARROLLO: servir desde sistema de archivos local ──
    try {
        const { default: fs } = await import("fs");
        const { default: path } = await import("path");

        const librosDir = path.join(process.cwd(), "libros-sep");
        const filePath = path.join(librosDir, ...segments);

        // Seguridad: evitar directory traversal
        if (!filePath.startsWith(librosDir)) {
            return new NextResponse("Forbidden", { status: 403 });
        }

        if (!fs.existsSync(filePath)) {
            return new NextResponse("Not Found — archivo no disponible localmente", { status: 404 });
        }

        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes: Record<string, string> = {
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".json": "application/json",
        };
        const contentType = mimeTypes[ext] || "application/octet-stream";
        const file = fs.readFileSync(filePath);

        return new NextResponse(file, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Cache-Control": "public, max-age=86400",
            },
        });
    } catch (err) {
        return new NextResponse("Error al leer el archivo", { status: 500 });
    }
}
