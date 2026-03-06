// API Route: POST /api/clip/webhook
// Recibe notificaciones de Clip cuando un pago cambia de estado.
// Clip envía: { id, origin, event_type }
// Verificamos consultando GET /v2/checkout/{id} y procesamos según el status.

import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';
import { consultarCheckoutClip, type ClipWebhookPayload } from "@/lib/clip";

export async function POST(req: NextRequest) {
    try {
        const payload = (await req.json()) as ClipWebhookPayload;
        console.log("[Clip Webhook]", JSON.stringify(payload));

        if (!payload?.id) {
            return NextResponse.json({ ok: false, error: "Sin ID" }, { status: 400 });
        }

        // Verificar el estado real con Clip (nunca confiar solo en el webhook)
        const checkout = await consultarCheckoutClip(payload.id);
        console.log(`[Clip] Checkout ${checkout.payment_request_id} → status: ${checkout.status}`);

        if (checkout.status === "PAID") {
            // ✅ Pago confirmado — aquí activar el acceso del usuario
            // Por ahora: log + preparado para D1/base de datos
            const plan = checkout.metadata?.plan || "desconocido";
            const userId = checkout.metadata?.me_reference || "anonimo";
            const grado = checkout.metadata?.grado || "todos";

            console.log(`✅ Pago confirmado: user=${userId} plan=${plan} grado=${grado} monto=$${checkout.amount} MXN`);

            // TODO (siguiente sprint): guardar en D1/SQLite
            // await activarAcceso({ userId, plan, grado, paymentId: payload.id });
        }

        // Clip requiere respuesta 200 para confirmar recepción
        return NextResponse.json({ ok: true, status: checkout.status });
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Error";
        console.error("[Clip Webhook Error]", msg);
        // Devolvemos 200 igual para que Clip no reintente
        return NextResponse.json({ ok: false, error: msg }, { status: 200 });
    }
}
