// API Route: POST /api/clip/checkout
// Crea un link de pago en Clip y devuelve la URL de redirección

import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';
import { crearCheckoutClip, PLANES, type PlanId } from "@/lib/clip";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://chispito.mx";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { planId, gradoSlug, userId } = body as {
            planId: PlanId;
            gradoSlug?: string;
            userId?: string;
        };

        const plan = PLANES[planId];
        if (!plan) {
            return NextResponse.json({ error: "Plan no válido" }, { status: 400 });
        }

        const checkout = await crearCheckoutClip({
            amount: plan.precio,
            purchase_description: `Chispito.mx — ${plan.nombre}${gradoSlug ? ` (${gradoSlug})` : ""}`,
            redirection_url: {
                success: `${SITE_URL}/pago-exitoso?plan=${planId}&grado=${gradoSlug || ""}`,
                error: `${SITE_URL}/pago-error?plan=${planId}`,
                default: `${SITE_URL}/planes`,
            },
            metadata: {
                me_reference: userId || "anonimo",
                plan: planId,
                grado: gradoSlug || "todos",
            },
            webhook_url: `${SITE_URL}/api/clip/webhook`,
        });

        return NextResponse.json({
            payment_url: checkout.payment_url,
            payment_request_id: checkout.payment_request_id,
        });
    } catch (error: unknown) {
        const msg = error instanceof Error ? error.message : "Error desconocido";
        console.error("[Clip checkout]", msg);
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
