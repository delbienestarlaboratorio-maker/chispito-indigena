"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Users, BookOpen, Download, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import { AdBannerHorizontal } from "@/components/AdBanner";
import Link from "next/link";

const PLANES = [
    {
        id: "gratis",
        nombre: "V1 Gratis",
        precio: 0,
        emoji: "🆓",
        color: "#4ECDC4",
        gradient: "from-teal-500/20 to-cyan-500/10",
        popular: false,
        features: [
            "3 ejercicios gratis por bloque",
            "Todos los grados y materias (preview)",
            "Seguimiento básico de progreso",
            "Con publicidad no invasiva",
        ],
        noFeatures: [
            "PDFs descargables",
            "Ejercicios ilimitados",
            "Sin publicidad",
        ],
        cta: "Empezar Gratis",
        href: "/#grados",
        apiPlanId: null,
    },
    {
        id: "v2_mensual",
        nombre: "V2 Premium",
        precio: 99,
        emoji: "⭐",
        color: "#3B82F6",
        gradient: "from-blue-500/20 to-indigo-500/10",
        popular: true,
        features: [
            "Ejercicios ilimitados por grado",
            "PDFs imprimibles a color",
            "Todos los bloques del año escolar",
            "Sin publicidad",
            "Progreso guardado",
            "1 hijo • 1 grado",
        ],
        noFeatures: [],
        cta: "Activar por $99/mes",
        href: null,
        apiPlanId: "v2_mensual",
    },
    {
        id: "v3_mensual",
        nombre: "V3 Familia 🚀",
        precio: 249,
        emoji: "🚀",
        color: "#FFD60A",
        gradient: "from-yellow-500/20 to-orange-500/10",
        popular: false,
        features: [
            "Todo lo de V2",
            "Hasta 3 hijos",
            "TODOS los grados y materias",
            "Nico IA — profe virtual",
            "Reportes semanales para papás",
            "Gamificación: estrellas y medallas",
            "PDFs ilimitados sin marca de agua",
        ],
        noFeatures: [],
        cta: "Activar por $249/mes",
        href: null,
        apiPlanId: "v3_mensual",
    },
];

const METODOS = [
    { icon: "💳", nombre: "Tarjeta de crédito/débito" },
    { icon: "🏪", nombre: "Pago en OXXO" },
    { icon: "🏦", nombre: "Transferencia SPEI" },
];

const FAQ = [
    { q: "¿Cuándo se hace el cobro?", a: "El cobro es mensual desde el día que activas tu plan. Puedes cancelar en cualquier momento." },
    { q: "¿Puedo cambiar de plan?", a: "Sí, puedes subir o bajar de plan cuando quieras. El cambio aplica en tu próximo ciclo." },
    { q: "¿Qué pasa si cancelo?", a: "Mantienes acceso hasta el fin del período pagado. Sin cobros adicionales." },
    { q: "¿Es seguro el pago?", a: "Sí. Los pagos se procesan por Clip, plataforma certificada PCI-DSS para México." },
];

export default function PlanesPage() {
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handlePago(planId: string) {
        setLoadingPlan(planId);
        setError(null);

        try {
            const res = await fetch("/api/clip/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ planId }),
            });

            const data = await res.json();

            if (!res.ok || !data.payment_url) {
                throw new Error(data.error || "No se pudo crear el link de pago");
            }

            // Redirigir a la página de pago de Clip
            window.location.href = data.payment_url;
        } catch (e: unknown) {
            const msg = e instanceof Error ? e.message : "Error al procesar el pago";
            setError(msg);
            setLoadingPlan(null);
        }
    }

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* Hero */}
            <section className="pt-28 pb-12 px-4 text-center hero-gradient">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <p className="text-white/50 uppercase tracking-widest text-sm font-semibold mb-3">
                        Planes y Precios
                    </p>
                    <h1 className="font-fredoka text-5xl md:text-6xl text-white mb-4">
                        Aprende{" "}
                        <span style={{ color: "var(--yellow)" }}>sin límites</span> 📚
                    </h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto mb-4">
                        Empieza gratis y desbloquea ejercicios ilimitados cuando quieras.
                        Sin contratos, cancela en cualquier momento.
                    </p>
                    <div className="flex justify-center gap-6 text-white/40 text-sm">
                        {METODOS.map((m) => (
                            <span key={m.nombre} className="flex items-center gap-1">
                                {m.icon} {m.nombre}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Error */}
            {error && (
                <div className="max-w-2xl mx-auto px-4 mb-4">
                    <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 text-red-300 text-sm text-center">
                        ⚠️ {error}
                    </div>
                </div>
            )}

            {/* Cards de planes */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PLANES.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            {/* Badge Popular */}
                            {plan.popular && (
                                <div
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-fredoka z-10"
                                    style={{ background: "var(--yellow)", color: "var(--navy)" }}
                                >
                                    ⭐ Más popular
                                </div>
                            )}

                            <div
                                className={`h-full rounded-3xl p-7 border transition-all ${plan.popular ? "border-yellow-400/60" : "border-white/10"} bg-gradient-to-br ${plan.gradient}`}
                                style={plan.popular ? { background: "rgba(255,214,10,0.06)", boxShadow: "0 0 40px rgba(255,214,10,0.15)" } : {}}
                            >
                                {/* Encabezado */}
                                <div className="text-4xl mb-2">{plan.emoji}</div>
                                <h2 className="font-fredoka text-2xl mb-1" style={{ color: plan.color }}>
                                    {plan.nombre}
                                </h2>

                                {/* Precio */}
                                <div className="flex items-end gap-1 mb-6">
                                    {plan.precio === 0 ? (
                                        <span className="font-fredoka text-4xl text-white">Gratis</span>
                                    ) : (
                                        <>
                                            <span className="font-fredoka text-5xl text-white">${plan.precio}</span>
                                            <span className="text-white/50 mb-1">/mes MXN</span>
                                        </>
                                    )}
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-white/80 text-sm">
                                            <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                                            {f}
                                        </li>
                                    ))}
                                    {plan.noFeatures.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-white/25 text-sm line-through">
                                            <span className="mt-0.5 flex-shrink-0 w-4 text-center">✗</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                {plan.href ? (
                                    <Link
                                        href={plan.href}
                                        className="block text-center py-4 px-6 rounded-2xl font-fredoka text-lg transition-all"
                                        style={{ background: `${plan.color}22`, color: plan.color, border: `2px solid ${plan.color}44` }}
                                    >
                                        {plan.cta}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => plan.apiPlanId && handlePago(plan.apiPlanId)}
                                        disabled={loadingPlan === plan.apiPlanId}
                                        className="w-full py-4 px-6 rounded-2xl font-fredoka text-lg transition-all disabled:opacity-70"
                                        style={plan.popular
                                            ? { background: "var(--yellow)", color: "var(--navy)" }
                                            : { background: `${plan.color}22`, color: plan.color, border: `2px solid ${plan.color}44` }
                                        }
                                    >
                                        {loadingPlan === plan.apiPlanId ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Generando link...
                                            </span>
                                        ) : plan.cta}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Métodos de pago */}
                <div className="max-w-2xl mx-auto mt-10 text-center">
                    <p className="text-white/40 text-sm mb-3">Pagos procesados por Clip • Seguro y certificado</p>
                    <div className="flex justify-center gap-4 text-white/50 text-sm">
                        <span>💳 Visa / Mastercard / Amex</span>
                        <span>•</span>
                        <span>🏪 OXXO</span>
                        <span>•</span>
                        <span>🏦 SPEI</span>
                    </div>
                    <div className="flex justify-center gap-2 mt-3 items-center">
                        <Shield size={14} className="text-white/30" />
                        <span className="text-white/30 text-xs">Tus datos de pago nunca tocan nuestros servidores</span>
                    </div>
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Comparativa */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-fredoka text-4xl text-white text-center mb-10">
                        ¿Qué incluye cada plan?
                    </h2>
                    <div className="glass rounded-3xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr style={{ background: "rgba(255,255,255,0.05)" }}>
                                    <th className="p-4 text-left text-white/60 font-semibold">Característica</th>
                                    <th className="p-4 text-center text-teal-400 font-fredoka text-base">V1 Gratis</th>
                                    <th className="p-4 text-center text-blue-400 font-fredoka text-base">V2 $99</th>
                                    <th className="p-4 text-center font-fredoka text-base" style={{ color: "var(--yellow)" }}>V3 $249</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/05">
                                {[
                                    ["Ejercicios", "3 por bloque", "Ilimitados", "Ilimitados"],
                                    ["Grados incluidos", "Vista previa", "1 grado", "Todos"],
                                    ["Número de hijos", "1", "1", "Hasta 3"],
                                    ["PDFs descargables", "❌", "✅ Color", "✅ Sin marca de agua"],
                                    ["Sin publicidad", "❌", "✅", "✅"],
                                    ["Nico IA", "❌", "❌", "✅"],
                                    ["Reportes para papás", "❌", "❌", "✅"],
                                    ["Gamificación", "❌", "Básica", "Completa"],
                                ].map(([feat, v1, v2, v3]) => (
                                    <tr key={feat} className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 text-white/70">{feat}</td>
                                        <td className="p-4 text-center text-white/50">{v1}</td>
                                        <td className="p-4 text-center text-white/80">{v2}</td>
                                        <td className="p-4 text-center text-white/80">{v3}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 px-4 max-w-3xl mx-auto">
                <h2 className="font-fredoka text-3xl text-white text-center mb-8">Preguntas frecuentes</h2>
                <div className="space-y-4">
                    {FAQ.map((item) => (
                        <div key={item.q} className="glass rounded-2xl p-5">
                            <p className="font-semibold text-white mb-2">❓ {item.q}</p>
                            <p className="text-white/60 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/30 text-sm border-t border-white/06">
                <Link href="/" className="hover:text-white transition-colors">← Regresar al inicio</Link>
            </footer>
        </main>
    );
}
