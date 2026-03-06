export const runtime = "edge";
import { GRADOS, MATERIAS, BLOQUES } from "@/data/curriculum";
import { GRADOS_CONTENIDO } from "@/data/content-primaria";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { AdBannerHorizontal, AdSidebar } from "@/components/AdBanner";
import { notFound } from "next/navigation";
import KinderUniverse from "@/components/KinderUniverse";

interface Props {
    params: Promise<{ grado: string }>;
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { grado: gradoSlug } = await params;
    const grado = GRADOS.find((g) => g.slug === gradoSlug);
    if (!grado) return {};
    return {
        title: `Ejercicios ${grado.nombre} SEP México — Chispito.mx`,
        description: `Ejercicios interactivos para ${grado.nombre} alineados al programa SEP México (Nueva Escuela Mexicana). Matemáticas, Español y más. ¡Gratis!`,
        alternates: { canonical: `https://chispito.mx/${gradoSlug}` },
        openGraph: {
            title: `${grado.emoji} Ejercicios ${grado.nombre} — Chispito.mx`,
            description: `Practica ${grado.nombre} con ejercicios interactivos SEP. Más de 100 ejercicios por materia.`,
        },
    };
}

export default async function GradoPage({ params }: Props) {
    const { grado: gradoSlug } = await params;
    const grado = GRADOS.find((g) => g.slug === gradoSlug);
    if (!grado) notFound();

    const materiasGrado = grado.materias.map((id) => MATERIAS[id]).filter(Boolean);
    const bloquesGrado = BLOQUES[grado.slug] || {};

    if (grado.nivel === "preescolar") {
        return (
            <main className="min-h-screen" style={{ background: "var(--navy)" }}>
                <Navbar />
                <div className="pt-20">
                    <KinderUniverse grado={grado} />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* Hero del grado */}
            <section
                className="pt-28 pb-16 px-4"
                style={{
                    background: `linear-gradient(135deg, ${grado.color}15, var(--navy))`,
                    borderBottom: `1px solid ${grado.color}30`,
                }}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <div className="text-8xl mb-4">{grado.emoji}</div>
                    <h1 className="font-fredoka text-5xl text-white mb-3">{grado.nombre}</h1>
                    <p className="text-white/60 text-lg mb-2">
                        Ejercicios interactivos alineados al programa SEP (Nueva Escuela Mexicana)
                    </p>
                    <p className="text-white/40 text-sm">
                        ~{(grado.alumnos / 1000000).toFixed(1)} millones de alumnos en México
                    </p>

                    {/* Botón guía mensual */}
                    <div className="mt-6">
                        <Link
                            href={`/guia-mensual/${grado.slug}`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                            style={{ background: `${grado.color}25`, color: grado.color, border: `1px solid ${grado.color}40` }}
                        >
                            📅 Ver guía de estudio mensual
                        </Link>
                    </div>

                    {/* Schema LearningResource */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LearningResource",
                                name: `Ejercicios ${grado.nombre} SEP México`,
                                educationalLevel: grado.nombre,
                                inLanguage: "es-MX",
                                isAccessibleForFree: true,
                                provider: { "@type": "Organization", name: "Chispito.mx" },
                                educationalFramework: "SEP México - Plan de Estudios 2022",
                            }),
                        }}
                    />
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Materias del grado */}
            <section className="py-12 px-4">
                <div className="max-w-6xl mx-auto flex gap-8">
                    {/* Contenido principal */}
                    <div className="flex-1">
                        <h2 className="font-fredoka text-3xl text-white mb-2">
                            ¿Qué quieres practicar hoy?
                        </h2>
                        <p className="text-white/40 text-sm mb-8">
                            📅 Mes actual: <span className="text-white/60">{new Date().toLocaleString('es-MX', { month: 'long', year: 'numeric' })}</span>
                        </p>

                        {/* Materias con contenido masticado (content-primaria.ts) */}
                        {(() => {
                            const gradoMasticado = GRADOS_CONTENIDO[grado.slug];
                            if (gradoMasticado) {
                                return (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                                        {Object.values(gradoMasticado.materias).map((mat) => {
                                            const mesActual = new Date().getMonth();
                                            const bloqueIdx = Math.min(Math.floor(mesActual / 2), mat.bloques.length - 1);
                                            const bloqueHoy = mat.bloques[bloqueIdx];
                                            return (
                                                <Link key={mat.materia} href={`/${grado.slug}/${mat.materia}`}>
                                                    <div className="grade-card p-6 h-full transition-all hover:scale-[1.02]"
                                                        style={{ background: `linear-gradient(135deg, ${mat.color}18, ${mat.color}08)`, borderColor: `${mat.color}30` }}>
                                                        <div className="flex items-start justify-between mb-3">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                                                                    style={{ background: `${mat.color}25` }}>
                                                                    {mat.emoji}
                                                                </div>
                                                                <div>
                                                                    <h3 className="font-fredoka text-xl" style={{ color: mat.color }}>{mat.nombre}</h3>
                                                                    <p className="text-white/40 text-xs">{mat.bloques.length} bloques · {mat.bloques.length * 8}+ ejercicios</p>
                                                                </div>
                                                            </div>
                                                            <span className="text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap"
                                                                style={{ background: "rgba(255,214,10,0.15)", color: "#FFD60A" }}>
                                                                👨‍👩‍👧 Guía papás
                                                            </span>
                                                        </div>
                                                        {bloqueHoy && (
                                                            <div className="mt-2 rounded-xl p-3" style={{ background: `${mat.color}10` }}>
                                                                <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">
                                                                    📋 Este mes en clase
                                                                </p>
                                                                <p className="text-sm font-semibold text-white/80">{bloqueHoy.nombre}</p>
                                                                <p className="text-xs text-white/40 mt-0.5">{bloqueHoy.meses}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                );
                            }
                            // Fallback para grados sin contenido masticado
                            return (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                                    {materiasGrado.map((materia) => {
                                        const bloquesList = bloquesGrado[materia.id] || [];
                                        const mesActual = new Date().getMonth();
                                        const bloqueActual = bloquesList[Math.min(Math.floor(mesActual / 2), bloquesList.length - 1)];
                                        return (
                                            <Link key={materia.id} href={`/${grado.slug}/${materia.id}`}>
                                                <div className="grade-card p-6 h-full"
                                                    style={{ background: `linear-gradient(135deg, ${materia.color}18, ${materia.color}08)`, borderColor: `${materia.color}30` }}>
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                                                            style={{ background: `${materia.color}25` }}>
                                                            {materia.emoji}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-fredoka text-xl mb-1" style={{ color: materia.color }}>{materia.nombre}</h3>
                                                            {bloqueActual && (
                                                                <p className="text-white/50 text-sm">📅 Ahora: <span className="text-white/80">{bloqueActual.nombre}</span></p>
                                                            )}
                                                            <p className="text-white/40 text-xs mt-1">{bloquesList.length} bloques · {bloquesList.length * 12}+ ejercicios</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            );
                        })()}

                        <AdBannerHorizontal />

                        {/* Bloques del mes */}
                        {Object.keys(bloquesGrado).length > 0 && (
                            <div className="mt-12">
                                <h2 className="font-fredoka text-3xl text-white mb-6">
                                    📅 Programa del año escolar
                                </h2>
                                {Object.entries(bloquesGrado).map(([materiaId, bloques]) => {
                                    const mat = MATERIAS[materiaId];
                                    if (!mat) return null;
                                    return (
                                        <div key={materiaId} className="mb-8">
                                            <h3
                                                className="font-fredoka text-xl mb-4 flex items-center gap-2"
                                                style={{ color: mat.color }}
                                            >
                                                {mat.emoji} {mat.nombre}
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {bloques.map((bloque) => (
                                                    <Link
                                                        key={bloque.numero}
                                                        href={`/${grado.slug}/${materiaId}/bloque-${bloque.numero}`}
                                                    >
                                                        <div
                                                            className="glass rounded-xl p-4 hover:border-white/30 transition-all group"
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span
                                                                    className="text-xs font-bold px-2 py-1 rounded-full"
                                                                    style={{
                                                                        background: `${mat.color}25`,
                                                                        color: mat.color,
                                                                    }}
                                                                >
                                                                    Bloque {bloque.numero}
                                                                </span>
                                                                <span className="text-xs text-white/30">
                                                                    {bloque.meses}
                                                                </span>
                                                            </div>
                                                            <h4 className="text-white font-semibold text-sm group-hover:text-white transition-colors">
                                                                {bloque.nombre}
                                                            </h4>
                                                            <p className="text-white/40 text-xs mt-1">
                                                                {bloque.temas.length} temas • {bloque.temas.length * 4}+ ejercicios
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Sidebar con anuncio */}
                    <AdSidebar />
                </div>
            </section>

            {/* Footer mini */}
            <footer className="py-8 text-center text-white/30 text-sm border-t border-white/06">
                <Link href="/" className="hover:text-white transition-colors">
                    ← Volver a Chispito.mx
                </Link>
            </footer>
        </main>
    );
}
