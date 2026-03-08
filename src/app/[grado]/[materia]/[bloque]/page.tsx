import { notFound } from "next/navigation";
import { GRADOS, MATERIAS } from "@/data/curriculum";
import { GRADOS_CONTENIDO } from "@/data/content-primaria";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ExercisePlayer from "@/components/ExercisePlayer";
import KinderExercisePlayer from "@/components/KinderExercisePlayer";
import PrimariaExercisePlayer from "@/components/PrimariaExercisePlayer";
import WorksheetGenerator from "@/components/WorksheetGenerator";
import LibroSepBadge from "@/components/LibroSepBadge";
import UniversoBanner from "@/components/UniversoBanner";
import { AdBannerHorizontal } from "@/components/AdBanner";
import Link from "next/link";
import ComentariosSection from "@/components/ComentariosSection";

const GRADOS_KINDER = ["kinder", "preescolar-1", "preescolar-2", "preescolar-3"];
const GRADOS_PRIMARIA = ["primaria-1", "primaria-2", "primaria-3", "primaria-4", "primaria-5", "primaria-6"];


interface Props {
    params: Promise<{ grado: string; materia: string; bloque: string }>;
}

type BloqueData = {
    grado: string; materia: string; bloque: number;
    nombre: string; meses: string; temas: string[]; totalEjercicios: number;
    ejercicios: { v1: unknown[]; v2: unknown[]; preview: unknown[] };
};

async function cargarBloque(grado: string, materia: string, bloque: string): Promise<BloqueData | null> {
    try {
        const data = await import(`@/data/exercises/${grado}/${materia}/${bloque}.json`);
        return data.default as BloqueData;
    } catch {
        return null;
    }
}


// Pre-generamos todos los grados básicos y medios para evitar problemas del dynamic import en Edge Runtime.
// El total de rutas (~450) está muy por debajo del límite que causa OOM.
const GRADOS_PRE_RENDER = [
    "kinder", "preescolar-1", "preescolar-2",
    "primaria-1", "primaria-2", "primaria-3", "primaria-4", "primaria-5", "primaria-6",
    "secundaria-1", "secundaria-2", "secundaria-3"
];
export const dynamicParams = true;

export async function generateStaticParams() {
    const params: { grado: string; materia: string; bloque: string }[] = [];
    for (const [grado, gradoData] of Object.entries(GRADOS_CONTENIDO)) {
        if (!GRADOS_PRE_RENDER.includes(grado)) continue;
        for (const [materia, materiaData] of Object.entries(gradoData.materias)) {
            for (let b = 1; b <= materiaData.bloques.length; b++) {
                params.push({ grado, materia, bloque: `bloque-${b}` });
            }
        }
    }
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { grado, materia, bloque } = await params;
    const datos = await cargarBloque(grado, materia, bloque);
    const gradoInfo = GRADOS.find((g) => g.slug === grado);
    const materiaInfo = MATERIAS[materia];
    if (!datos || !gradoInfo || !materiaInfo) return {};
    return {
        title: `Ejercicios ${datos.nombre} — ${gradoInfo.nombre} ${materiaInfo.nombre} SEP`,
        description: `Practica "${datos.nombre}" de ${gradoInfo.nombre} ${materiaInfo.nombre}. ${datos.totalEjercicios} ejercicios interactivos alineados al programa SEP México. Gratis para empezar.`,
        alternates: { canonical: `https://chispito.mx/${grado}/${materia}/${bloque}` },
    };
}

export default async function BloquePage({ params }: Props) {
    const { grado, materia, bloque } = await params;
    const datos = await cargarBloque(grado, materia, bloque);
    const gradoInfo = GRADOS.find((g) => g.slug === grado);
    const materiaInfo = MATERIAS[materia];
    if (!datos || !gradoInfo || !materiaInfo) notFound();

    // Todos los ejercicios (v1 + v2) para el player
    const todosEjercicios = [
        ...(datos.ejercicios.v1 as never[]),
        ...(datos.ejercicios.v2 as never[]),
    ];

    const esKinder = GRADOS_KINDER.includes(grado);

    return (
        <main
            className="min-h-screen"
            style={{
                background: esKinder
                    ? "linear-gradient(135deg, #FFF9C4 0%, #FCE4EC 25%, #E8F5E9 50%, #E3F2FD 75%, #F3E5F5 100%)"
                    : "var(--navy)",
            }}
        >
            {!esKinder && <Navbar />}
            {esKinder && (
                <nav className="sticky top-0 z-50 px-4 py-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "3px solid #F9A8D4" }}>
                    <Link href={`/${grado}`} className="flex items-center gap-2 font-bold text-lg" style={{ color: materiaInfo.color }}>
                        ← {gradoInfo.nombre}
                    </Link>
                    <span className="font-fredoka text-xl" style={{ color: materiaInfo.color }}>
                        {materiaInfo.emoji} {materiaInfo.nombre}
                    </span>
                </nav>
            )}

            {/* Header del bloque */}
            <section
                className="pt-28 pb-10 px-4 text-center"
                style={{ background: `linear-gradient(135deg, ${materiaInfo.color}12, var(--navy))` }}
            >
                {/* Schema LearningResource */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LearningResource",
                            name: `${datos.nombre} — ${gradoInfo.nombre} ${materiaInfo.nombre}`,
                            educationalLevel: gradoInfo.nombre,
                            about: datos.temas.join(", "),
                            teaches: datos.nombre,
                            learningResourceType: "Exercise",
                            inLanguage: "es-MX",
                            isAccessibleForFree: true,
                            educationalFramework: "SEP México - Plan de Estudios 2022",
                            provider: { "@type": "Organization", name: "Chispito.mx" },
                        }),
                    }}
                />

                {/* Breadcrumb */}
                <div className="text-white/40 text-sm mb-4 flex items-center justify-center gap-2">
                    <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                    <span>›</span>
                    <Link href={`/${grado}`} className="hover:text-white transition-colors">{gradoInfo.nombre}</Link>
                    <span>›</span>
                    <Link href={`/${grado}/${materia}`} className="hover:text-white transition-colors">{materiaInfo.nombre}</Link>
                    <span>›</span>
                    <span className="text-white/70">Bloque {datos.bloque}</span>
                </div>

                <div className="text-5xl mb-3">{materiaInfo.emoji}</div>
                <h1 className="font-fredoka text-4xl md:text-5xl text-white mb-2">{datos.nombre}</h1>
                <p className="text-white/60 mb-1">
                    {gradoInfo.nombre} · {materiaInfo.nombre} · Bloque {datos.bloque}
                </p>
                <p className="text-white/40 text-sm">📅 {datos.meses}</p>

                {/* Temas que cubre */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {datos.temas.map((tema) => (
                        <span
                            key={tema}
                            className="text-xs px-3 py-1 rounded-full font-semibold"
                            style={{ background: `${materiaInfo.color}20`, color: materiaInfo.color }}
                        >
                            {tema}
                        </span>
                    ))}
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Player de ejercicios */}
            <section className="py-10 px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Badge libro SEP — usa mapa centralizado sep-libros-map.ts */}
                    <LibroSepBadge
                        grado={grado}
                        materia={materia}
                        bloqueNum={datos!.bloque}
                    />


                    {/* Banner del Universo Chispito — Nico + compañero del grado */}
                    {!esKinder && (
                        <UniversoBanner
                            grado={grado}
                            materia={materia}
                            bloque={datos!.bloque}
                        />
                    )}

                    {esKinder ? (
                        <KinderExercisePlayer
                            ejercicios={todosEjercicios as never[]}
                            grado={grado}
                            materia={materia}
                            bloque={datos!.bloque}
                            nombreBloque={datos!.nombre}
                            color={materiaInfo.color}
                            emoji={materiaInfo.emoji}
                        />
                    ) : GRADOS_PRIMARIA.includes(grado) ? (
                        <PrimariaExercisePlayer
                            ejercicios={todosEjercicios as never[]}
                            grado={grado}
                            materia={materia}
                            bloque={datos!.bloque}
                            nombreBloque={datos!.nombre}
                            meses={datos!.meses}
                            color={materiaInfo.color}
                            emoji={materiaInfo.emoji}
                        />
                    ) : (
                        <ExercisePlayer
                            ejercicios={todosEjercicios}
                            grado={grado}
                            materia={materia}
                            bloque={datos!.bloque}
                            nombreBloque={datos!.nombre}
                            meses={datos!.meses}
                        />
                    )}
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Hoja de tarea imprimible */}
            <section className="py-4 px-4">
                <div className="max-w-2xl mx-auto">
                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold mb-3 text-center">
                        📄 Hoja de tarea imprimible — Bloque {datos.bloque}
                    </p>
                    <WorksheetGenerator
                        grado={grado}
                        gradoNombre={gradoInfo!.nombre}
                        materia={materia}
                        materiaNombre={materiaInfo.nombre}
                        materiaEmoji={materiaInfo.emoji}
                        materiaColor={materiaInfo.color}
                        bloqueNum={datos.bloque}
                        bloqueNombre={datos.nombre}
                        meses={datos.meses}
                        ejercicios={todosEjercicios.slice(0, 10) as never[]}
                    />
                </div>
            </section>

            {/* Comentarios de padres */}
            {!esKinder && (
                <section className="px-4 pb-6">
                    <div className="max-w-2xl mx-auto">
                        <ComentariosSection
                            grado={grado}
                            materia={materia}
                            bloque={datos.bloque}
                        />
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="py-8 text-center text-white/30 text-sm border-t border-white/06">
                <Link href={`/${grado}/${materia}`} className="hover:text-white transition-colors">
                    ← Ver todos los bloques de {materiaInfo.nombre}
                </Link>
            </footer>
        </main>
    );
}
