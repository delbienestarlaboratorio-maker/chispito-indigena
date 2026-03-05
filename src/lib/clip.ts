// Utilidades centrales para la API de Clip
// Documentación: https://developer.clip.mx/docs/getting-started
// Autenticación: Basic Auth con api_key:secret_key en base64

const CLIP_BASE_URL = process.env.CLIP_BASE_URL || "https://api.payclip.com";
const CLIP_API_KEY = process.env.CLIP_API_KEY!;
const CLIP_SECRET_KEY = process.env.CLIP_SECRET_KEY!;

/** Genera el header de autenticación Basic Auth para Clip
 *  Usa btoa() (Web Crypto API) en vez de Buffer para Cloudflare Workers */
function clipAuthHeader(): string {
    const credentials = `${CLIP_API_KEY}:${CLIP_SECRET_KEY}`;
    // btoa funciona en Cloudflare Workers Edge Runtime y en Node.js moderno
    const base64 = typeof btoa !== "undefined"
        ? btoa(credentials)
        : Buffer.from(credentials).toString("base64");
    return `Basic ${base64}`;
}

export type ClipCheckoutRequest = {
    amount: number;            // Monto en MXN (ej. 99.00)
    purchase_description: string;
    redirection_url: {
        success: string;
        error: string;
        default: string;
    };
    metadata?: {
        me_reference?: string;   // ID interno (user_id, plan, etc.)
        customer_id?: string;
        plan?: string;
        grado?: string;
    };
    webhook_url?: string;
};

export type ClipCheckoutResponse = {
    payment_request_id: string;
    status: "CREATED" | "PAID" | "CANCELLED" | "EXPIRED";
    payment_url: string;       // URL a la que redirigir al usuario
    amount: number;
    created_at: string;
};

export type ClipWebhookPayload = {
    id: string;               // payment_request_id
    origin: string;
    event_type: "UPDATE" | "CREATE";
};

/** Crea un link de pago (Checkout V2) en Clip */
export async function crearCheckoutClip(
    datos: ClipCheckoutRequest
): Promise<ClipCheckoutResponse> {
    const res = await fetch(`${CLIP_BASE_URL}/v2/checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: clipAuthHeader(),
            Accept: "application/json",
        },
        body: JSON.stringify(datos),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(`Clip API error ${res.status}: ${error}`);
    }

    return res.json();
}

/** Consulta el estado de un checkout por su ID */
export async function consultarCheckoutClip(
    paymentRequestId: string
): Promise<ClipCheckoutResponse> {
    const res = await fetch(
        `${CLIP_BASE_URL}/v2/checkout/${paymentRequestId}`,
        {
            method: "GET",
            headers: {
                Authorization: clipAuthHeader(),
                Accept: "application/json",
            },
        }
    );

    if (!res.ok) {
        const error = await res.text();
        throw new Error(`Clip API error ${res.status}: ${error}`);
    }

    return res.json();
}

/** Definición de los planes y sus precios */
export const PLANES = {
    v2_mensual: {
        id: "v2_mensual",
        nombre: "Chispito V2",
        precio: 99,           // MXN
        descripcion: "Acceso completo a todos los ejercicios de un grado",
        emoji: "⭐",
        color: "#3B82F6",
        features: [
            "Ejercicios ilimitados por grado/materia",
            "PDFs imprimibles a color",
            "Todos los bloques del año escolar",
            "Sin publicidad",
            "Progreso guardado",
        ],
    },
    v3_mensual: {
        id: "v3_mensual",
        nombre: "Chispito V3 Familia",
        precio: 249,          // MXN
        descripcion: "Acceso completo para toda la familia",
        emoji: "🚀",
        color: "#FFD60A",
        features: [
            "Todo de V2 para 3 hijos",
            "Todos los grados y materias",
            "Nico IA: profe virtual",
            "Reportes semanales para papás",
            "Gamificación: estrellas y medallas",
            "Descarga de PDFs sin límite",
        ],
    },
    cuadernillo: {
        id: "cuadernillo",
        nombre: "Cuadernillo PDF",
        precio: 10,           // MXN — pago único por módulo
        descripcion: "Cuadernillo de práctica PDF completo — pago único",
        emoji: "📄",
        color: "#22C55E",
        features: [
            "PDF completo de 10+ páginas",
            "Guía para papás incluida",
            "Vocabulario y ejemplos resueltos",
            "Actividades y autoevaluación",
            "Hoja de respuestas",
            "Tuyo para siempre",
        ],
    },
} as const;

export type PlanId = keyof typeof PLANES;

/** Metadata extra para cuadernillos (se incluye en checkout) */
export type CuadernilloCheckoutMeta = {
    grado: string;
    materia: string;
    bloqueNum: number;
    bloqueNombre: string;
    userId?: string;
};
