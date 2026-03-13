import Link from "next/link";

export const metadata = {
    title: "Cuadernillos de Práctica SEP | Chispito.mx",
    description: "Descarga gratis cuadernillos de práctica PDF para todos los grados: Preescolar, Primaria, Secundaria y Bachillerato. Alineados al programa SEP México 2025-2026.",
};

const NIVELES = [
    {
        id: "preescolar",
        nombre: "Preescolar",
        emoji: "🌱",
        color: "#F59E0B",
        descripcion: "Actividades lúdicas para el desarrollo inicial",
        grados: [
            { id: "preescolar-1", nombre: "Preescolar 1°", materias: 5, modulos: 25 },
            { id: "preescolar-2", nombre: "Preescolar 2°", materias: 5, modulos: 25 },
            { id: "kinder", nombre: "Kinder (3°)", materias: 5, modulos: 25 },
        ],
    },
    {
        id: "primaria",
        nombre: "Primaria",
        emoji: "📚",
        color: "#3B82F6",
        descripcion: "Contenido SEP completo, ejercicios por dificultad",
        grados: [
            { id: "primaria-1", nombre: "1° Primaria", materias: 8, modulos: 40 },
            { id: "primaria-2", nombre: "2° Primaria", materias: 8, modulos: 40 },
            { id: "primaria-3", nombre: "3° Primaria", materias: 9, modulos: 45 },
            { id: "primaria-4", nombre: "4° Primaria", materias: 10, modulos: 54 },
            { id: "primaria-5", nombre: "5° Primaria", materias: 10, modulos: 54 },
            { id: "primaria-6", nombre: "6° Primaria", materias: 10, modulos: 54 },
        ],
    },
    {
        id: "secundaria",
        nombre: "Secundaria",
        emoji: "🔬",
        color: "#8B5CF6",
        descripcion: "Ejercicios avanzados con razonamiento crítico",
        grados: [
            { id: "secundaria-1", nombre: "1° Secundaria", materias: 10, modulos: 50 },
            { id: "secundaria-2", nombre: "2° Secundaria", materias: 10, modulos: 50 },
            { id: "secundaria-3", nombre: "3° Secundaria", materias: 11, modulos: 55 },
        ],
    },
    {
        id: "bachillerato",
        nombre: "Bachillerato",
        emoji: "🎓",
        color: "#EF4444",
        descripcion: "Preparación para educación superior",
        grados: [
            { id: "bachillerato-1", nombre: "1° Bachillerato", materias: 6, modulos: 30 },
            { id: "bachillerato-2", nombre: "2° Bachillerato", materias: 6, modulos: 30 },
            { id: "bachillerato-3", nombre: "3° Bachillerato", materias: 7, modulos: 35 },
            { id: "bachillerato-4", nombre: "4° Bachillerato", materias: 6, modulos: 30 },
            { id: "bachillerato-5", nombre: "5° Bachillerato", materias: 5, modulos: 25 },
            { id: "bachillerato-6", nombre: "6° Bachillerato", materias: 6, modulos: 30 },
        ],
    },
];

export default function CuadernillosHubPage() {
    const totalCuadernillos = NIVELES.reduce((s, n) => s + n.grados.reduce((gs, g) => gs + g.modulos, 0), 0);

    return (
        <main className="min-h-screen" style={{ background: "#0D1B2A" }}>
            {/* Hero */}
            <header className="pt-12 pb-8 px-4 text-center"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="max-w-3xl mx-auto">
                    <Link href="/" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                        ← Chispito.mx
                    </Link>
                    <h1 className="text-4xl font-black text-white mt-6">
                        Cuadernillos de Práctica
                    </h1>
                    <p className="text-white/50 mt-3 text-lg max-w-xl mx-auto">
                        PDFs profesionales para todos los grados. Alineados al programa
                        <span className="text-white font-semibold"> SEP México 2025-2026</span>.
                    </p>

                    {/* Stats globales */}
                    <div className="flex justify-center gap-8 mt-8">
                        {[
                            { v: `${totalCuadernillos}+`, l: "Cuadernillos" },
                            { v: "20+", l: "Grados" },
                            { v: "1er módulo", l: "Siempre gratis" },
                            { v: "$10 MXN", l: "Módulos extra" },
                        ].map(({ v, l }) => (
                            <div key={l} className="text-center">
                                <p className="text-2xl font-black text-white">{v}</p>
                                <p className="text-xs text-white/30 mt-0.5">{l}</p>
                            </div>
                        ))}
                    </div>

                    {/* Badge freemium */}
                    <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full"
                        style={{ background: "#22C55E18", border: "1px solid #22C55E40" }}>
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-sm font-medium">
                            El primer cuadernillo de cada materia es gratuito
                        </span>
                    </div>
                </div>
            </header>

            {/* Niveles */}
            <section className="px-4 py-10">
                <div className="max-w-4xl mx-auto space-y-10">
                    {NIVELES.map(nivel => (
                        <div key={nivel.id}>
                            {/* Header nivel */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                    style={{ background: nivel.color + "25" }}>
                                    {nivel.emoji}
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-white">{nivel.nombre}</h2>
                                    <p className="text-xs text-white/30">{nivel.descripcion}</p>
                                </div>
                            </div>

                            {/* Grid de grados */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {nivel.grados.map(grado => (
                                    <Link key={grado.id} href={`/cuadernillos/${grado.id}`}
                                        className="group rounded-2xl p-4 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                        style={{
                                            background: `linear-gradient(135deg, ${nivel.color}18, ${nivel.color}08)`,
                                            border: `1.5px solid ${nivel.color}25`,
                                        }}>
                                        <p className="font-bold text-white text-sm group-hover:text-white transition-colors">
                                            {grado.nombre}
                                        </p>
                                        <p className="text-xs text-white/30 mt-1">
                                            {grado.materias} materias · {grado.modulos} módulos
                                        </p>
                                        <div className="flex items-center gap-1 mt-3">
                                            <span className="text-xs px-2 py-0.5 rounded-md font-medium"
                                                style={{ background: "#22C55E25", color: "#22C55E" }}>
                                                1 Gratis
                                            </span>
                                            <span className="text-xs px-2 py-0.5 rounded-md"
                                                style={{ background: nivel.color + "25", color: nivel.color }}>
                                                Ver
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Preguntas frecuentes */}
            <section className="px-4 pb-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl font-bold text-white mb-4">Preguntas frecuentes</h2>
                    <div className="space-y-3">
                        {[
                            ["¿Los cuadernillos son de calidad?",
                                "Sí. Cada cuadernillo incluye: explicación del tema, vocabulario clave, guía paso a paso para papás, truco mnemotécnico, el error más común con su corrección, actividad en casa, ejercicios por nivel de dificultad, autoevaluación y hoja de respuestas con explicaciones."],
                            ["¿Están alineados al SEP?",
                                "Completamente. Todos los cuadernillos siguen el Plan de Estudios 2022 (Nueva Escuela Mexicana) y referencian los libros CONALITEG para que los papás puedan verificar."],
                            ["¿Cómo funciona el modelo gratuito?",
                                "El primer módulo de cada materia es siempre gratuito, sin registro. Las demás se desbloquean con un pago único de $10 MXN por módulo, válido para siempre."],
                            ["¿Puedo imprimirlos?",
                                "Sí, son PDFs en formato A4 optimizados para imprimir. Quedan perfectos en impresoras de casa o en cualquier copistería."],
                        ].map(([q, a]) => (
                            <div key={q} className="rounded-xl p-4"
                                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <p className="font-semibold text-white text-sm">{q}</p>
                                <p className="text-white/40 text-sm mt-1">{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-6 text-center border-t border-white/5">
                <p className="text-white/20 text-xs">Chispito.mx · Cuadernillos de práctica SEP · México 2025-2026</p>
            </footer>
        </main>
    );
}
