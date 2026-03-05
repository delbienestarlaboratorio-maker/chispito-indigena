// API Route: POST /api/clip/cuadernillo
// Crea un link de pago de $10 MXN para desbloquear un módulo de cuadernillo

import { NextRequest, NextResponse } from "next/server";
import { crearCheckoutClip, type CuadernilloCheckoutMeta } from "@/lib/clip";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://chispito.mx";
const PRECIO_CUADERNILLO = 10; // MXN

export async function POST(req: NextRequest) {
    try {
        const body = await req.json() as CuadernilloCheckoutMeta;
        const { grado, materia, bloqueNum, bloqueNombre, userId } = body;

        if (!grado || !materia || !bloqueNum) {
            return NextResponse.json(
                { error: "Faltan datos: grado, materia, bloqueNum requeridos" },
                { status: 400 }
            );
        }

        // ID único del cuadernillo para rastreo
        const cuadernilloId = `${grado}_${materia}_mod${bloqueNum}`;

        const checkout = await crearCheckoutClip({
            amount: PRECIO_CUADERNILLO,
            purchase_description: `Chispito.mx — Cuadernillo ${grado} ${materia} Módulo ${bloqueNum}: ${bloqueNombre}`,
            redirection_url: {
                success: `${SITE_URL}/cuadernillos/${grado}?pago=ok&cuadernillo=${cuadernilloId}`,
                error: `${SITE_URL}/pago-error?cuadernillo=${cuadernilloId}`,
                default: `${SITE_URL}/cuadernillos/${grado}`,
            },
            metadata: {
                me_reference: userId || "anonimo",
                plan: "cuadernillo",
                grado,
                // materia y bloque en me_reference para trazabilidad
            },
            webhook_url: `${SITE_URL}/api/clip/webhook`,
        });

        return NextResponse.json({
            payment_url: checkout.payment_url,
            payment_request_id: checkout.payment_request_id,
            cuadernilloId,
        });
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Error desconocido";
        console.error("[Clip cuadernillo]", msg);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
