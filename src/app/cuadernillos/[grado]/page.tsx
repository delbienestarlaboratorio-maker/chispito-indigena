export const dynamicParams = false;
import fs from "fs";
import path from "path";
import CuadernilloPDF from "@/components/CuadernilloPDF";
import type { CuadernilloData, Ejercicio, ContenidoPedagogico } from "@/components/CuadernilloPDF";
import { GRADOS, MATERIAS } from "@/data/curriculum";
import { PRIMARIA_1 } from "@/data/content-primaria";
import { PRIMARIA_3 } from "@/data/content-primaria3";
import { KINDER } from "@/data/content-kinder";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

// Map de contenido pedagógico disponible por grado
const CONTENIDO_GRADO: Record<string, any> = {
    "primaria-1": PRIMARIA_1,
    "primaria-3": PRIMARIA_3,
    "kinder": KINDER,
    "preescolar-2": KINDER, // reutilizar kinder como aproximación
};

function getBloqueContent(gradoId: string, materia: string, bloqueNum: number): ContenidoPedagogico | undefined {
    const gradoData = CONTENIDO_GRADO[gradoId];
    if (!gradoData) return undefined;
    const materiaData = gradoData.materias?.[materia];
    if (!materiaData) return undefined;
    const bloqueData = materiaData.bloques?.find((b: any) => b.bloque === bloqueNum);
    if (!bloqueData) return undefined;
    return {
        enClase: bloqueData.enClase || [],
        intro: bloqueData.guiaPapa?.intro || "",
        comoExplicar: bloqueData.guiaPapa?.comoExplicar || [],
        truco: bloqueData.guiaPapa?.truco || "",
        errorComun: bloqueData.guiaPapa?.error_comun || "",
        actividadCasa: bloqueData.guiaPapa?.actividad_casa || "",
        objetivo: bloqueData.guiaMaestro?.objetivo || "",
        competencia: bloqueData.guiaMaestro?.competencia || "",
    };
}

// Mapa de nombres de grados amigables
const NOMBRES_GRADOS: Record<string, { nombre: string; nivel: string; emoji: string }> = {
    "preescolar-1": { nombre: "Preescolar 1°", nivel: "Preescolar", emoji: "🌱" },
    "preescolar-2": { nombre: "Preescolar 2°", nivel: "Preescolar", emoji: "🌼" },
    "kinder": { nombre: "Kinder (Preescolar 3°)", nivel: "Preescolar", emoji: "🎈" },
    "primaria-1": { nombre: "1° Primaria", nivel: "Primaria", emoji: "🚀" },
    "primaria-2": { nombre: "2° Primaria", nivel: "Primaria", emoji: "⭐" },
    "primaria-3": { nombre: "3° Primaria", nivel: "Primaria", emoji: "🎯" },
    "primaria-4": { nombre: "4° Primaria", nivel: "Primaria", emoji: "🔬" },
    "primaria-5": { nombre: "5° Primaria", nivel: "Primaria", emoji: "🌍" },
    "primaria-6": { nombre: "6° Primaria", nivel: "Primaria", emoji: "🎓" },
    "secundaria-1": { nombre: "1° Secundaria", nivel: "Secundaria", emoji: "📐" },
    "secundaria-2": { nombre: "2° Secundaria", nivel: "Secundaria", emoji: "🏛️" },
    "secundaria-3": { nombre: "3° Secundaria", nivel: "Secundaria", emoji: "🎓" },
    "bachillerato-1": { nombre: "1° Bachillerato", nivel: "Bachillerato", emoji: "🔭" },
    "bachillerato-2": { nombre: "2° Bachillerato", nivel: "Bachillerato", emoji: "📊" },
    "bachillerato-3": { nombre: "3° Bachillerato", nivel: "Bachillerato", emoji: "🧪" },
    "bachillerato-4": { nombre: "4° Bachillerato", nivel: "Bachillerato", emoji: "💡" },
    "bachillerato-5": { nombre: "5° Bachillerato", nivel: "Bachillerato", emoji: "🌐" },
    "bachillerato-6": { nombre: "6° Bachillerato", nivel: "Bachillerato", emoji: "🏆" },
};

const COLORES_NIVEL: Record<string, string> = {
    "Preescolar": "#F59E0B",
    "Primaria": "#3B82F6",
    "Secundaria": "#8B5CF6",
    "Bachillerato": "#EF4444",
};

function cargarCuadernillos(gradoId: string): CuadernilloData[] {
    const baseDir = path.join(process.cwd(), "src", "data", "exercises", gradoId);
    if (!fs.existsSync(baseDir)) return [];

    const gradoInfo = NOMBRES_GRADOS[gradoId];
    const gradoNombre = gradoInfo?.nombre ?? gradoId;

    const materias = fs.readdirSync(baseDir).filter(f =>
        fs.statSync(path.join(baseDir, f)).isDirectory()
    );

    const cuadernillos: CuadernilloData[] = [];

    materias.forEach(materia => {
        const matDir = path.join(baseDir, materia);
        const archivos = fs.readdirSync(matDir)
            .filter(f => f.startsWith("bloque-") && f.endsWith(".json"))
            .sort();

        archivos.forEach(archivo => {
            try {
                const raw = JSON.parse(fs.readFileSync(path.join(matDir, archivo), "utf-8"));
                const materiaInfo = MATERIAS[materia as keyof typeof MATERIAS];
                const bloqueNum = raw.bloque || parseInt(archivo.replace("bloque-", "").replace(".json", ""));

                cuadernillos.push({
                    grado: gradoId,
                    gradoNombre,
                    materia,
                    materiaNombre: materiaInfo?.nombre ?? materia,
                    materiaEmoji: materiaInfo?.emoji ?? "📘",
                    materiaColor: materiaInfo?.color ?? "#3B82F6",
                    bloqueNum,
                    bloqueNombre: raw.nombre || `Bloque ${bloqueNum}`,
                    meses: raw.meses || "",
                    temas: raw.temas || [],
                    ejerciciosV1: (raw.ejercicios?.v1 || []) as Ejercicio[],
                    ejerciciosV2: (raw.ejercicios?.v2 || []) as Ejercicio[],
                    contenidoPedagogico: getBloqueContent(gradoId, materia, bloqueNum),
                });
            } catch { /* ignorar errores de lectura */ }
        });
    });

    return cuadernillos;
}

export async function generateStaticParams() {
    return Object.keys(NOMBRES_GRADOS).map(grado => ({ grado }));
}

export default async function CuadernillosGradoPage({
    params,
}: {
    params: Promise<{ grado: string }>;
}) {
    const { grado } = await params;
    const gradoInfo = NOMBRES_GRADOS[grado];
    if (!gradoInfo) notFound();

    const cuadernillos = cargarCuadernillos(grado);
    const porMateria: Record<string, CuadernilloData[]> = {};
    cuadernillos.forEach(c => {
        if (!porMateria[c.materia]) porMateria[c.materia] = [];
        porMateria[c.materia].push(c);
    });

    const nivelColor = COLORES_NIVEL[gradoInfo.nivel] ?? "#3B82F6";
    const totalEjs = cuadernillos.reduce((s, c) => s + c.ejerciciosV1.length + c.ejerciciosV2.length, 0);

    return (
        <main className="min-h-screen" style={{ background: "#0D1B2A" }}>
            {/* Header */}
            <header className="pt-8 pb-6 px-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-2">
                        <Link href="/cuadernillos"
                            className="text-white/40 text-sm hover:text-white/70 transition-colors">
                            ← Todos los grados
                        </Link>
                        <span className="text-white/20">/</span>
                        <span className="text-sm px-2 py-0.5 rounded-md font-medium"
                            style={{ background: nivelColor + "30", color: nivelColor }}>
                            {gradoInfo.nivel}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                            style={{ background: nivelColor + "30" }}>
                            {gradoInfo.emoji}
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-white">{gradoInfo.nombre}</h1>
                            <p className="text-white/40 text-sm mt-0.5">
                                Cuadernillos de Práctica SEP 2025-2026
                            </p>
                        </div>
                    </div>
                    {/* Stats */}
                    <div className="flex gap-6 mt-5">
                        {[
                            { v: cuadernillos.length, l: "Cuadernillos" },
                            { v: Object.keys(porMateria).length, l: "Materias" },
                            { v: totalEjs, l: "Ejercicios" },
                            { v: Object.keys(porMateria).length, l: "Gratis", color: "#22C55E" },
                        ].map(({ v, l, color }) => (
                            <div key={l} className="text-center">
                                <p className="text-xl font-black" style={{ color: color ?? "white" }}>{v}</p>
                                <p className="text-xs text-white/30">{l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Aviso freemium */}
            <div className="max-w-4xl mx-auto px-4 mt-5">
                <div className="rounded-2xl p-3 flex items-center gap-3"
                    style={{ background: "#22C55E18", border: "1px solid #22C55E30" }}>
                    <span className="text-green-400 font-bold text-sm">GRATIS</span>
                    <p className="text-white/60 text-sm">
                        El primer cuadernillo de cada materia es gratuito. Los demás cuestan $10 MXN.
                    </p>
                </div>
            </div>

            {/* Lista por materia */}
            <section className="px-4 pb-16 mt-6">
                <div className="max-w-4xl mx-auto space-y-8">
                    {Object.entries(porMateria).map(([materia, items]) => {
                        const info = MATERIAS[materia as keyof typeof MATERIAS];
                        const color = info?.color ?? "#3B82F6";
                        const totalMat = items.reduce((s, c) => s + c.ejerciciosV1.length + c.ejerciciosV2.length, 0);
                        return (
                            <div key={materia}>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                                        style={{ background: color + "25" }}>
                                        {info?.emoji ?? "📘"}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-base font-bold text-white">{info?.nombre ?? materia}</h2>
                                        <p className="text-xs text-white/30">
                                            {items.length} módulos · {totalMat} ejercicios · 1 gratis
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2 ml-1">
                                    {items.map((cuad, idx) => (
                                        <CuadernilloPDF
                                            key={`${materia}-${cuad.bloqueNum}`}
                                            cuadernillo={cuad}
                                            gratis={idx === 0}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {cuadernillos.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-white/30 text-lg">Sin cuadernillos disponibles para este grado.</p>
                        </div>
                    )}
                </div>
            </section>

            <footer className="py-6 text-center border-t border-white/5">
                <p className="text-white/20 text-xs">Chispito.mx · Cuadernillos SEP 2025-2026</p>
            </footer>
        </main>
    );
}
