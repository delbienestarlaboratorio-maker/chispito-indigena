import { notFound } from "next/navigation";
import { GRADOS, MATERIAS } from "@/data/curriculum";
import type { Metadata } from "next";
import Link from "next/link";

// ─── Tipos ───────────────────────────────────────────
interface BloqueData {
    nombre: string;
    meses: string;
    temas: string[];
}

interface Props {
    params: Promise<{ grado: string }>;
}

// Meses del ciclo escolar SEP
const MESES_CICLO = [
    { num: 8, nombre: "Agosto", bloque: 1, inicio: true },
    { num: 9, nombre: "Septiembre", bloque: 1 },
    { num: 10, nombre: "Octubre", bloque: 2 },
    { num: 11, nombre: "Noviembre", bloque: 2 },
    { num: 12, nombre: "Diciembre", bloque: 3 },
    { num: 1, nombre: "Enero", bloque: 3 },
    { num: 2, nombre: "Febrero", bloque: 4 },
    { num: 3, nombre: "Marzo", bloque: 4 },
    { num: 4, nombre: "Abril", bloque: 5 },
    { num: 5, nombre: "Mayo", bloque: 5 },
    { num: 6, nombre: "Junio", bloque: 5, fin: true },
];

async function cargarBloqueDatos(grado: string, materia: string, bloqueNum: number): Promise<BloqueData | null> {
    try {
        const data = await import(`@/data/exercises/${grado}/${materia}/bloque-${bloqueNum}.json`);
        return { nombre: data.default.nombre, meses: data.default.meses, temas: data.default.temas || [] };
    } catch { return null; }
}

function getMesActual() {
    const m = new Date().getMonth() + 1; // 1-12
    return MESES_CICLO.find(mes => mes.num === m) || MESES_CICLO[0];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { grado } = await params;
    const gradoInfo = GRADOS.find(g => g.slug === grado);
    if (!gradoInfo) return {};
    return {
        title: `Guía de estudio mensual — ${gradoInfo.nombre} | Chispito.mx`,
        description: `Planificador mensual de estudio para ${gradoInfo.nombre}. Sabe exactamente qué temas estudiar cada mes del ciclo escolar SEP 2025-2026.`,
    };
}

export async function generateStaticParams() {
    return [];
}

export default async function GuiaMensualPage({ params }: Props) {
    const { grado } = await params;
    const gradoInfo = GRADOS.find(g => g.slug === grado);
    if (!gradoInfo) notFound();

    const mesActual = getMesActual();

    // Cargar datos de todas las materias × todos los bloques
    const materiasDataRaw = await Promise.all(gradoInfo.materias.map(async (materiaId) => {
        const materiaInfo = MATERIAS[materiaId];
        if (!materiaInfo) return null;
        const bloquesPromises = [];
        for (let b = 1; b <= 6; b++) {
            bloquesPromises.push(cargarBloqueDatos(grado, materiaId, b));
        }
        const bloquesCargados = await Promise.all(bloquesPromises);
        return { materiaInfo, bloques: bloquesCargados.filter(Boolean) as BloqueData[] };
    }));
    const materiasData = materiasDataRaw.filter(Boolean);

    return (
        <main className="min-h-screen" style={{ background: "var(--navy, #0D1B2A)" }}>
            {/* Navbar simple */}
            <nav className="sticky top-0 z-50 border-b border-white/10" style={{ background: "rgba(13,27,42,0.95)", backdropFilter: "blur(12px)" }}>
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href={`/${grado}`} className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors">
                        ← {gradoInfo.nombre}
                    </Link>
                    <div className="flex items-center gap-2 text-white font-bold">
                        <span className="text-lg">{gradoInfo.emoji}</span>
                        <span>Guía mensual</span>
                    </div>
                    <Link href="/" className="text-white/40 hover:text-white text-xs transition-colors">🏠 Inicio</Link>
                </div>
            </nav>

            {/* Header */}
            <section className="pt-10 pb-6 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-5xl mb-3">{gradoInfo.emoji}</div>
                    <h1 className="text-3xl font-black text-white mb-2">
                        Guía de estudio mensual
                    </h1>
                    <p className="text-white/60 text-lg">
                        {gradoInfo.nombre} · Ciclo 2025-2026
                    </p>
                    <div
                        className="inline-block mt-3 px-4 py-2 rounded-full text-sm font-bold"
                        style={{ background: `${gradoInfo.color}25`, color: gradoInfo.color, border: `1px solid ${gradoInfo.color}40` }}
                    >
                        📅 Mes actual: {mesActual.nombre} → Módulo {mesActual.bloque}
                    </div>
                </div>
            </section>

            {/* Selector de mes */}
            <section className="px-4 mb-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {MESES_CICLO.map(mes => (
                            <a
                                key={mes.num}
                                href={`#mes-${mes.nombre.toLowerCase()}`}
                                className="px-3 py-1.5 rounded-full text-sm font-semibold transition-all"
                                style={{
                                    background: mes.num === mesActual.num ? gradoInfo.color : "rgba(255,255,255,0.08)",
                                    color: mes.num === mesActual.num ? "white" : "rgba(255,255,255,0.6)",
                                    border: mes.num === mesActual.num ? "none" : "1px solid rgba(255,255,255,0.15)"
                                }}
                            >
                                {mes.nombre}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guía por mes */}
            <section className="px-4 pb-16">
                <div className="max-w-4xl mx-auto space-y-10">
                    {MESES_CICLO.map(mes => (
                        <div key={mes.num} id={`mes-${mes.nombre.toLowerCase()}`}>
                            {/* Cabecera del mes */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="rounded-2xl px-5 py-3"
                                    style={{
                                        background: mes.num === mesActual.num ? gradoInfo.color : "rgba(255,255,255,0.08)",
                                    }}
                                >
                                    <h2 className="text-xl font-black text-white">{mes.nombre}</h2>
                                    <p className="text-white/70 text-xs font-semibold">Módulo {mes.bloque}</p>
                                </div>
                                {mes.num === mesActual.num && (
                                    <span className="text-xs font-bold px-3 py-1 rounded-full animate-pulse"
                                        style={{ background: `${gradoInfo.color}30`, color: gradoInfo.color }}>
                                        ← Este mes
                                    </span>
                                )}
                            </div>

                            {/* Cards de materias */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {materiasData.map(md => {
                                    if (!md) return null;
                                    const bloque = md.bloques[mes.bloque - 1];
                                    if (!bloque) return null;
                                    const { materiaInfo } = md;

                                    return (
                                        <Link
                                            key={materiaInfo.id}
                                            href={`/${grado}/${materiaInfo.id}/bloque-${mes.bloque}`}
                                            className="block rounded-2xl p-4 transition-all hover:scale-[1.02]"
                                            style={{
                                                background: "rgba(255,255,255,0.05)",
                                                border: `1px solid ${materiaInfo.color}30`,
                                            }}
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-2xl">{materiaInfo.emoji}</span>
                                                <div>
                                                    <p className="font-bold text-white text-sm">{materiaInfo.nombre}</p>
                                                    <p className="text-white/50 text-xs">{bloque.nombre}</p>
                                                </div>
                                                <span className="ml-auto text-xs font-semibold px-2 py-1 rounded-lg"
                                                    style={{ background: `${materiaInfo.color}20`, color: materiaInfo.color }}>
                                                    Mód. {mes.bloque}
                                                </span>
                                            </div>

                                            {/* Temas del bloque */}
                                            {bloque.temas && bloque.temas.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5 mt-2">
                                                    {bloque.temas.slice(0, 3).map(tema => (
                                                        <span key={tema} className="text-xs px-2 py-0.5 rounded-md font-medium"
                                                            style={{ background: `${materiaInfo.color}18`, color: materiaInfo.color }}>
                                                            {tema}
                                                        </span>
                                                    ))}
                                                    {bloque.temas.length > 3 && (
                                                        <span className="text-xs px-2 py-0.5 rounded-md text-white/40">
                                                            +{bloque.temas.length - 3} más
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            <p className="text-xs text-white/40 mt-3">
                                                📅 {bloque.meses} · Clic para practicar →
                                            </p>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Botón imprimir guía del mes */}
                            <div className="mt-4 flex justify-end">
                                <a
                                    href={`/guia-mensual/${grado}/imprimir?bloque=${mes.bloque}&mes=${mes.nombre}`}
                                    className="text-xs flex items-center gap-1.5 px-3 py-2 rounded-xl font-semibold transition-all hover:opacity-80"
                                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
                                >
                                    🖨️ Imprimir guía de {mes.nombre}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8 px-4 text-center">
                <p className="text-white/30 text-sm">
                    ⚡ <strong className="text-white/50">Chispito.mx</strong> · Ejercicios gratuitos alineados al programa SEP · Ciclo 2025-2026
                </p>
                <Link href={`/${grado}`} className="text-white/40 hover:text-white text-xs mt-2 inline-block transition-colors">
                    ← Volver a {gradoInfo.nombre}
                </Link>
            </footer>
        </main>
    );
}
