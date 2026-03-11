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

export async function generateStaticParams() {
    return GRADOS.map((g) => ({ grado: g.slug }));
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

    if (grado.slug === "kinder") {
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

                        {/* BANNER DESTACADO LSM - Preescolar 1 */}
                        {grado.slug === 'preescolar-1' && (
                            <div className="mb-10 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)", border: "1px solid rgba(34, 197, 94, 0.3)", boxShadow: "0 10px 40px -10px rgba(34, 197, 94, 0.15)" }}>
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl opacity-5 pointer-events-none">🤟</div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#22C55E25", color: "#4ADE80" }}>
                                            ✨ Nueva Sección
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#3B82F625", color: "#60A5FA" }}>
                                            Inclusión SEP
                                        </span>
                                    </div>
                                    <h3 className="font-fredoka text-3xl sm:text-4xl text-white mb-3">
                                        Aprende Lenguaje de Señas <span className="text-green-400">(LSM)</span> 🤟
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
                                        Hemos integrado un programa inicial de Lengua de Señas Mexicana adaptado a niños. Aprende desde el abecedario, colores y la familia, hasta los nombres de los deportes más comunes.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        <Link href="/preescolar-1/espanol/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                                            <span className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-green-300">📖 Español</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Vocales y Saludos →</span>
                                        </Link>
                                        <Link href="/preescolar-1/conocimiento/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                                            <span className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-pink-300">🔍 Conocimiento</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Familia y Colores →</span>
                                        </Link>
                                        <Link href="/preescolar-1/educacion_fisica/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(249, 115, 22, 0.1)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                            <span className="text-orange-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-orange-300">🏃 Edu. Física</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Deportes y Cuerpo →</span>
                                        </Link>
                                        <Link href="/preescolar-1/matematicas/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                            <span className="text-blue-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-blue-300">📐 Matemáticas</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Números 1 al 10 →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BANNER DESTACADO LSM - Preescolar 2 */}
                        {grado.slug === 'preescolar-2' && (
                            <div className="mb-10 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)", border: "1px solid rgba(34, 197, 94, 0.3)", boxShadow: "0 10px 40px -10px rgba(34, 197, 94, 0.15)" }}>
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl opacity-5 pointer-events-none">🤟</div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#22C55E25", color: "#4ADE80" }}>
                                            ✨ Nueva Sección
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#3B82F625", color: "#60A5FA" }}>
                                            Inclusión SEP
                                        </span>
                                    </div>
                                    <h3 className="font-fredoka text-3xl sm:text-4xl text-white mb-3">
                                        Avanza en Lenguaje de Señas <span className="text-green-400">(LSM)</span> 🤟
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
                                        Continuamos con la misión de la Lengua de Señas Mexicana. Explora el abecedario intermedio, los números del 6 al 10, y aprende a describir emociones y el clima.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        <Link href="/preescolar-2/espanol/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                                            <span className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-green-300">📖 Español</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Mis manos expresan →</span>
                                        </Link>
                                        <Link href="/preescolar-2/conocimiento/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                                            <span className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-pink-300">🔍 Conocimiento</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Mi entorno habla →</span>
                                        </Link>
                                        <Link href="/preescolar-2/educacion_fisica/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(249, 115, 22, 0.1)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                            <span className="text-orange-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-orange-300">🏃 Edu. Física</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Mi cuerpo habla →</span>
                                        </Link>
                                        <Link href="/preescolar-2/matematicas/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                            <span className="text-blue-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-blue-300">📐 Matemáticas</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Conteo del 6 al 10 →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BANNER DESTACADO LSM - Preescolar 3 */}
                        {grado.slug === 'preescolar-3' && (
                            <div className="mb-10 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%)", border: "1px solid rgba(168, 85, 247, 0.3)", boxShadow: "0 10px 40px -10px rgba(168, 85, 247, 0.15)" }}>
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl opacity-5 pointer-events-none">🤟</div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#A855F725", color: "#C084FC" }}>
                                            ✨ Nivel Avanzado
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#3B82F625", color: "#60A5FA" }}>
                                            Inclusión SEP
                                        </span>
                                    </div>
                                    <h3 className="font-fredoka text-3xl sm:text-4xl text-white mb-3">
                                        Dominando la Lengua de Señas <span className="text-purple-400">(LSM)</span> 🤟
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
                                        ¡El reto final de Preescolar! Gradúate dominando las últimas letras del Abecedario (K-Z), formaremos sílabas, oficios de la comunidad y el conteo superior hasta el 20 con tus manos.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        <Link href="/preescolar-3/espanol/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.2)" }}>
                                            <span className="text-purple-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-purple-300">📖 Español</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Sílabas y Cortesía →</span>
                                        </Link>
                                        <Link href="/preescolar-3/conocimiento/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                                            <span className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-pink-300">🔍 Conocimiento</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Oficios y Transportes →</span>
                                        </Link>
                                        <Link href="/preescolar-3/educacion_fisica/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(249, 115, 22, 0.1)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                            <span className="text-orange-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-orange-300">🏃 Edu. Física</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Olimpiadas Silenciosas →</span>
                                        </Link>
                                        <Link href="/preescolar-3/matematicas/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                            <span className="text-blue-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-blue-300">📐 Matemáticas</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Conteo avanzado 11-20 →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BANNER DESTACADO LSM - Primaria 1 */}
                        {grado.slug === 'primaria-1' && (
                            <div className="mb-10 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.1) 100%)", border: "1px solid rgba(59, 130, 246, 0.3)", boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.15)" }}>
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl opacity-5 pointer-events-none">🤟</div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#3B82F625", color: "#60A5FA" }}>
                                            🚀 Primaria LSM
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#22C55E25", color: "#4ADE80" }}>
                                            Inclusión SEP
                                        </span>
                                    </div>
                                    <h3 className="font-fredoka text-3xl sm:text-4xl text-white mb-3">
                                        Lengua de Señas en <span className="text-blue-400">Primaria</span> 🤟
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
                                        ¡Bienvenido a Primaria! Ahora deletrearás palabras completas, harás sumas con las manos, conocerás los animales de México en señas y darás instrucciones deportivas en LSM.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        <Link href="/primaria-1/espanol/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                            <span className="text-blue-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-blue-300">📖 Español</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Deletreo y Emociones →</span>
                                        </Link>
                                        <Link href="/primaria-1/conocimiento/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                                            <span className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-pink-300">🔍 Conocimiento</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Animales y Estaciones →</span>
                                        </Link>
                                        <Link href="/primaria-1/educacion_fisica/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(249, 115, 22, 0.1)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                            <span className="text-orange-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-orange-300">🏃 Edu. Física</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Juego y Comunico →</span>
                                        </Link>
                                        <Link href="/primaria-1/matematicas/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                                            <span className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-green-300">📐 Matemáticas</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Números 20-50 →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BANNER DESTACADO LSM - Primaria 2 */}
                        {grado.slug === 'primaria-2' && (
                            <div className="mb-10 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(217, 70, 239, 0.1) 100%)", border: "1px solid rgba(168, 85, 247, 0.3)", boxShadow: "0 10px 40px -10px rgba(168, 85, 247, 0.15)" }}>
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl opacity-5 pointer-events-none">🤟</div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#A855F725", color: "#C084FC" }}>
                                            🚀 Primaria LSM Nivel 2
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#22C55E25", color: "#4ADE80" }}>
                                            Inclusión SEP
                                        </span>
                                    </div>
                                    <h3 className="font-fredoka text-3xl sm:text-4xl text-white mb-3">
                                        Lengua de Señas en <span className="text-purple-400">2° Primaria</span> 🤟
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
                                        ¡Sube de nivel! Forma oraciones completas, suma y resta con señas, ubícate en el espacio (derecha e izquierda) y aprende las señas para el clima, profesiones y la ciudad.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        <Link href="/primaria-2/espanol/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.2)" }}>
                                            <span className="text-purple-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-purple-300">📖 Español</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Oraciones y Tiempos →</span>
                                        </Link>
                                        <Link href="/primaria-2/conocimiento/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                                            <span className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-pink-300">🔍 Conocimiento</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Ciudad y Profesiones →</span>
                                        </Link>
                                        <Link href="/primaria-2/educacion_fisica/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(249, 115, 22, 0.1)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                            <span className="text-orange-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-orange-300">🏃 Edu. Física</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Direcciones y Espacio →</span>
                                        </Link>
                                        <Link href="/primaria-2/matematicas/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                                            <span className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-green-300">📐 Matemáticas</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Cien, Restas y Mitad →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BANNER DESTACADO LSM - Primaria 3 */}
                        {grado.slug === 'primaria-3' && (
                            <div className="mb-10 rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all hover:scale-[1.01]" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)", border: "1px solid rgba(16, 185, 129, 0.3)", boxShadow: "0 10px 40px -10px rgba(16, 185, 129, 0.15)" }}>
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl opacity-5 pointer-events-none">🤟</div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#10B98125", color: "#6EE7B7" }}>
                                            🚀 Primaria LSM Nivel 3
                                        </span>
                                        <span className="inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider" style={{ background: "#22C55E25", color: "#4ADE80" }}>
                                            Inclusión SEP
                                        </span>
                                    </div>
                                    <h3 className="font-fredoka text-3xl sm:text-4xl text-white mb-3">
                                        Lengua de Señas en <span className="text-emerald-400">3° Primaria</span> 🤟
                                    </h3>
                                    <p className="text-white/70 text-sm sm:text-base max-w-2xl mb-6 leading-relaxed">
                                        ¡Aprende conceptos increíbles! Descubre el Sistema Solar, explora la anatomía humana, maneja números hasta el 1000 y aprende a hablar de la paz y la inclusión en LSM.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                        <Link href="/primaria-3/espanol/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                            <span className="text-emerald-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-emerald-300">📖 Español</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Adverbios y Cuentos →</span>
                                        </Link>
                                        <Link href="/primaria-3/ciencias/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
                                            <span className="text-pink-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-pink-300">🔭 C. Naturales</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Sistema Solar y Órganos →</span>
                                        </Link>
                                        <Link href="/primaria-3/formacion/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(249, 115, 22, 0.1)", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                            <span className="text-orange-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-orange-300">🤝 Formación</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">Inclusión y Respeto →</span>
                                        </Link>
                                        <Link href="/primaria-3/matematicas/bloque-6" className="flex flex-col p-3 rounded-xl transition-colors group" style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                                            <span className="text-green-400 text-xs font-bold mb-1 uppercase tracking-wide group-hover:text-green-300">📐 Matemáticas</span>
                                            <span className="text-white/90 text-sm font-semibold group-hover:text-white">El 1000 y Geometría →</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

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

                        {/* Programa del año escolar (Bloques) */}
                        {(() => {
                            const gradoMasticado = GRADOS_CONTENIDO[grado.slug];

                            // Si tenemos gradoMasticado, usamos sus materias y bloques
                            if (gradoMasticado) {
                                const materias = Object.values(gradoMasticado.materias);
                                if (materias.length === 0) return null;

                                return (
                                    <div className="mt-12">
                                        <h2 className="font-fredoka text-3xl text-white mb-6">
                                            📅 Programa del año escolar
                                        </h2>
                                        {materias.map((mat) => (
                                            <div key={mat.materia} className="mb-8">
                                                <h3
                                                    className="font-fredoka text-xl mb-4 flex items-center gap-2"
                                                    style={{ color: mat.color }}
                                                >
                                                    {mat.emoji} {mat.nombre}
                                                </h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                    {mat.bloques.map((bloque) => (
                                                        <Link
                                                            key={bloque.bloque}
                                                            href={`/${grado.slug}/${mat.materia}/bloque-${bloque.bloque}`}
                                                        >
                                                            <div className="glass rounded-xl p-4 hover:border-white/30 transition-all group">
                                                                <div className="flex items-center justify-between mb-2">
                                                                    <span
                                                                        className="text-xs font-bold px-2 py-1 rounded-full"
                                                                        style={{ background: `${mat.color}25`, color: mat.color }}
                                                                    >
                                                                        Bloque {bloque.bloque}
                                                                    </span>
                                                                    <span className="text-xs text-white/30">{bloque.meses}</span>
                                                                </div>
                                                                <h4 className="text-white font-semibold text-sm group-hover:text-white transition-colors">
                                                                    {bloque.nombre}
                                                                </h4>
                                                                <p className="text-white/40 text-xs mt-1">
                                                                    {bloque.enClase?.length || 0} temas • {(bloque.enClase?.length || 0) * 4}+ ejercicios
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }

                            // Fallback para grados legacy que usan BLOQUES
                            if (Object.keys(bloquesGrado).length > 0) {
                                return (
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
                                                                <div className="glass rounded-xl p-4 hover:border-white/30 transition-all group">
                                                                    <div className="flex items-center justify-between mb-2">
                                                                        <span
                                                                            className="text-xs font-bold px-2 py-1 rounded-full"
                                                                            style={{ background: `${mat.color}25`, color: mat.color }}
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
                                );
                            }

                            return null;
                        })()}
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
