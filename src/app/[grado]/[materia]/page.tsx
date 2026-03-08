import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { AdBannerHorizontal } from "@/components/AdBanner";
import { GRADOS_CONTENIDO } from "@/data/content-primaria";
import { GRADOS, MATERIAS } from "@/data/curriculum";

interface Props {
    params: Promise<{ grado: string; materia: string }>;
}

const GRADOS_PRE_RENDER = [
    "kinder", "preescolar-1", "preescolar-2",
    "primaria-1", "primaria-2", "primaria-3"
];
export const dynamicParams = true;

export async function generateStaticParams() {
    const params: { grado: string; materia: string }[] = [];
    for (const grado of Object.keys(GRADOS_CONTENIDO)) {
        if (!GRADOS_PRE_RENDER.includes(grado)) continue;
        for (const materia of Object.keys(GRADOS_CONTENIDO[grado].materias)) {
            params.push({ grado, materia });
        }
    }
    return params;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { grado, materia } = await params;
    const gradoData = GRADOS_CONTENIDO[grado];
    const materiaData = gradoData?.materias[materia];
    if (!gradoData || !materiaData) return {};
    const gradoInfo = GRADOS.find((g) => g.slug === grado);
    return {
        title: `${materiaData.nombre} ${gradoData.nombre} — Ejercicios SEP con guía para papás | Chispito.mx`,
        description: `Ejercicios interactivos de ${materiaData.nombre} para ${gradoData.nombre}, con guía paso a paso para que los papás expliquen en casa. Alineado al programa SEP 2025.`,
        alternates: { canonical: `https://chispito.mx/${grado}/${materia}` },
    };
}

const ICONOS_BLOQUE = ["📖", "🔥", "⭐", "🚀", "🏆"];

export default async function MateriaPage({ params }: Props) {
    const { grado, materia } = await params;
    const gradoData = GRADOS_CONTENIDO[grado];
    const gradoInfo = GRADOS.find((g) => g.slug === grado);
    const materiaInfo = MATERIAS[materia];

    // Datos desde GRADOS_CONTENIDO
    const materiaData = gradoData?.materias[materia];

    if (!materiaData || !gradoInfo) {
        notFound();
    }

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org", "@type": "Course",
                    name: `${materiaData!.nombre} — ${gradoInfo.nombre}`,
                    description: `Curso interactivo de ${materiaData!.nombre} para ${gradoInfo.nombre} SEP México`,
                    provider: { "@type": "Organization", name: "Chispito.mx", url: "https://chispito.mx" },
                    educationalLevel: gradoInfo.nombre,
                    inLanguage: "es-MX",
                })
            }} />

            {/* Hero */}
            <section className="pt-28 pb-10 px-4 text-center" style={{ background: `linear-gradient(135deg, ${materiaData.color}15, transparent)` }}>
                <div className="text-white/40 text-sm mb-4 flex items-center justify-center gap-2">
                    <Link href="/" className="hover:text-white">Inicio</Link> <span>›</span>
                    <Link href={`/${grado}`} className="hover:text-white">{gradoInfo.nombre}</Link> <span>›</span>
                    <span className="text-white/80">{materiaData.nombre}</span>
                </div>
                <div className="text-6xl mb-3">{materiaData.emoji}</div>
                <h1 className="font-fredoka text-5xl text-white mb-2">{materiaData.nombre}</h1>
                <p className="text-white/60 text-lg mb-1">{gradoInfo.nombre} · SEP Ciclo 2025-2026</p>
                <p className="text-white/40 text-sm">{materiaData.bloques.length} bloques · {materiaData.bloques.length * 8}+ ejercicios · Guía para papás incluida</p>
            </section>

            {/* Alerta papás */}
            <section className="px-4 mb-2">
                <div className="max-w-4xl mx-auto rounded-2xl p-5" style={{ background: "rgba(255,214,10,0.07)", border: "1px solid rgba(255,214,10,0.2)" }}>
                    <p className="text-white/80 text-sm text-center">
                        💡 <strong className="text-yellow-300">Para papás:</strong> Cada bloque tiene una guía con pasos súper sencillos para que expliques el tema en casa, trucos y actividades sin materiales extras.
                    </p>
                </div>
            </section>

            {/* Bloques */}
            <section className="py-10 px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    {materiaData.bloques.map((bloque, idx) => (
                        <div key={bloque.bloque} className="ejercicio-card">
                            {/* Header del bloque */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl">{ICONOS_BLOQUE[idx] || "📘"}</span>
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">Bloque {bloque.bloque} · {bloque.meses}</p>
                                        <h2 className="font-fredoka text-2xl text-gray-800">{bloque.nombre}</h2>
                                    </div>
                                </div>
                                <Link
                                    href={`/${grado}/${materia}/bloque-${bloque.bloque}`}
                                    className="shrink-0 px-4 py-2 rounded-xl font-fredoka text-sm transition-all hover:scale-105"
                                    style={{ background: materiaData.color, color: "white" }}
                                >
                                    ▶ Practicar
                                </Link>
                            </div>

                            {/* Qué verá en clase */}
                            <div className="mb-5">
                                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: materiaData.color }}>📋 Qué aprenderá en clase</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                    {bloque.enClase.map((tema) => (
                                        <li key={tema} className="text-gray-600 text-sm flex items-start gap-2">
                                            <span className="text-green-500 mt-0.5">✓</span> {tema}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Guía papás — highlight */}
                            <div className="rounded-2xl p-4 mb-4" style={{ background: "rgba(255,214,10,0.08)", border: "1px dashed rgba(255,214,10,0.3)" }}>
                                <p className="font-fredoka text-base mb-2 text-gray-800">👨‍👩‍👧 Guía para papás: <span className="font-normal text-gray-600">{bloque.guiaPapa.intro}</span></p>
                                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="font-semibold text-gray-700 mb-1">💪 Truco fácil</p>
                                        <p className="text-gray-600">{bloque.guiaPapa.truco}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-700 mb-1">⚠️ Error más común</p>
                                        <p className="text-gray-600">{bloque.guiaPapa.error_comun}</p>
                                    </div>
                                </div>
                                <div className="mt-3 pt-3 border-t border-yellow-200/30">
                                    <p className="font-semibold text-gray-700 mb-1 text-sm">🏠 Actividad en casa (sin materiales extras)</p>
                                    <p className="text-gray-600 text-sm">{bloque.guiaPapa.actividad_casa}</p>
                                </div>

                                {/* CTA a guía completa — detrás de paywall V2 */}
                                <Link
                                    href={`/planes`}
                                    className="mt-3 flex items-center gap-2 text-sm font-semibold"
                                    style={{ color: materiaData.color }}
                                >
                                    🔒 Ver guía paso a paso completa (V2) →
                                </Link>
                            </div>

                            {/* Botón de ejercicios */}
                            <Link
                                href={`/${grado}/${materia}/bloque-${bloque.bloque}`}
                                className="flex items-center justify-between rounded-xl p-3 transition-all hover:opacity-90"
                                style={{ background: `${materiaData.color}15`, border: `1px solid ${materiaData.color}30` }}
                            >
                                <span className="text-sm font-semibold" style={{ color: materiaData.color }}>
                                    ▶ Practicar Bloque {bloque.bloque}: {bloque.nombre}
                                </span>
                                <span className="text-xs text-white/40">3 gratis · desbloquea más →</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <AdBannerHorizontal />

            {/* CTA suscripción */}
            <section className="py-12 px-4">
                <div className="max-w-2xl mx-auto rounded-3xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(255,214,10,0.1), rgba(59,130,246,0.1))", border: "1px solid rgba(255,214,10,0.2)" }}>
                    <div className="text-4xl mb-3">🚀</div>
                    <h2 className="font-fredoka text-3xl text-white mb-2">Desbloquea todos los ejercicios de {materiaData.nombre}</h2>
                    <p className="text-white/60 mb-6">
                        Con V2 tienes ejercicios ilimitados, guías completas para papás, PDFs imprimibles y sin publicidad.
                    </p>
                    <Link href="/planes" className="btn-primary text-lg">
                        Ver planes desde $99/mes →
                    </Link>
                    <p className="text-white/30 text-xs mt-4">Sin tarjeta para empezar · OXXO y SPEI disponibles</p>
                </div>
            </section>

            <footer className="py-6 text-center text-white/30 text-sm border-t border-white/06">
                <Link href={`/${grado}`} className="hover:text-white transition-colors">← Volver a {gradoInfo.nombre}</Link>
            </footer>
        </main>
    );
}
