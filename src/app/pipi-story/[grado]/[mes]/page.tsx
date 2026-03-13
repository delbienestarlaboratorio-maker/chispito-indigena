"use client";

import { useState, Suspense } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, Layout, BookOpenText } from "lucide-react";

import Image from "next/image";

// Placeholder data for narratives
// En un sistema real, esto vendría de una base de datos o un CMS (Sanity/Supabase)
const STORY_DATA: Record<number, any> = {
    1: {
        titulo: "El primer día de Pipi",
        comicPanels: [
            { text: "¡Hola! Soy Pipi. Hoy es mi primer día de kínder y mi mochila es ENORME.", emoji: "🎒", img: "/pipi-comic-1.png" },
            { text: "Tenía un poco de miedo en la puerta...", emoji: "🥺" },
            { text: "Pero adentro conocí a Burbuja y jugamos con bloques mágicos.", emoji: "🧩" },
            { text: "¡La escuela es súper divertida!", emoji: "🎉" }
        ],
        cuentoLargo: [
            "Era una mañana muy soleada cuando Pipi se despertó. Hoy no era un día normal, ¡hoy era su primer día en la escuela de grandes!",
            "Pipi miró su mochila nueva. Era roja, brillante y casi de su tamaño. '¿Qué llevaré adentro?', se preguntó Pipi. Metió sus crayolas favoritas, un juguito de manzana y a su oso de peluche 'Gomita' (solo por si acaso).",
            "Al llegar a la gran puerta amarilla del kínder, Pipi sintió mariposas en la panza. Las mariposas volaban muy rápido. Su mamá le dio un beso en la frente y le dijo: 'Te prometo que adentro hay mucha magia, solo tienes que buscarla'.",
            "Pipi dio un pasito, luego otro. Y de pronto... ¡PUM! Chocó con una niña que traía un peinado con burbujas de colores. 'Hola, soy Burbuja', le dijo sonriendo. Juntos entraron al salón, construyeron una torre gigante y Pipi descubrió que las mariposas de su panza ahora estaban felices."
        ]
    }
};

function PipiStoryViewerInner() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const grado = params.grado as string;
    const mesId = parseInt(params.mes as string);
    const initialMode = searchParams.get("mode") || "comic"; // 'comic' or 'story'

    const [mode, setMode] = useState<"comic" | "story">(initialMode as "comic" | "story");
    const [pageIndex, setPageIndex] = useState(0);

    const story = STORY_DATA[mesId] || STORY_DATA[1]; // Fallback to 1 for demo

    const changeMode = (newMode: "comic" | "story") => {
        setMode(newMode);
        setPageIndex(0); // Reset page when switching formats
        router.replace(`?mode=${newMode}`, { scroll: false });
    };

    return (
        <div className="min-h-screen flex flex-col" style={{ background: "#0F172A" }}>
            {/* Cabecera */}
            <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3" style={{ background: "rgba(15,23,42,0.95)", borderBottom: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
                <div className="flex items-center gap-3">
                    <Link href={`/${grado}`} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                        <X size={16} /> Cerrar Historia
                    </Link>
                    <div className="w-px h-5 bg-white/20" />
                    <p className="text-white font-bold text-sm tracking-wide">
                        Mes {mesId}: {story.titulo}
                    </p>
                </div>

                {/* Formato Toggle */}
                <div className="flex items-center bg-white/10 rounded-xl p-1">
                    <button
                        onClick={() => changeMode("comic")}
                        className={`px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'comic' ? 'bg-[#FFD60A] text-black shadow-lg' : 'text-white/60 hover:text-white'}`}
                    >
                        <Layout size={16} /> Cómic (Rápido)
                    </button>
                    <button
                        onClick={() => changeMode("story")}
                        className={`px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${mode === 'story' ? 'bg-blue-500 text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                    >
                        <BookOpenText size={16} /> Cuento Largo
                    </button>
                </div>
            </header>

            {/* Contenedor Principal */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 py-8">

                {mode === "comic" && (
                    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                        {story.comicPanels.map((panel: any, idx: number) => (
                            <div
                                key={idx}
                                className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center transform transition-transform hover:scale-105 relative overflow-hidden"
                                style={{ border: `4px solid ${['#FF6B6B', '#4ECDC4', '#FFD166', '#118AB2'][idx % 4]}` }}
                            >
                                {panel.img ? (
                                    <div className="w-full h-48 relative mb-4 rounded-xl overflow-hidden shadow-inner">
                                        <Image src={panel.img} alt="Comic Panel" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                ) : (
                                    <div className="text-8xl mb-6">{panel.emoji}</div>
                                )}
                                <p className="font-fredoka text-2xl text-slate-800 leading-snug">
                                    {panel.text}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {mode === "story" && (
                    <div className="w-full max-w-2xl bg-[#FFF9E6] rounded-3xl p-8 md:p-12 shadow-2xl mt-4 relative">
                        <div className="absolute top-0 right-0 p-4 text-3xl opacity-20">📖</div>
                        <h2 className="font-fredoka text-3xl text-slate-800 mb-8 border-b-2 border-slate-200 pb-4">
                            {story.titulo}
                        </h2>

                        <div className="min-h-[250px] flex items-center">
                            <p className="text-2xl text-slate-700 leading-relaxed font-serif">
                                {story.cuentoLargo[pageIndex]}
                            </p>
                        </div>

                        {/* Paginación del Cuento */}
                        <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-200">
                            <button
                                onClick={() => setPageIndex(p => Math.max(0, p - 1))}
                                disabled={pageIndex === 0}
                                className="px-6 py-3 rounded-xl font-bold bg-slate-200 text-slate-600 disabled:opacity-30 flex items-center gap-2"
                            >
                                <ChevronLeft size={20} /> Atrás
                            </button>
                            <span className="text-slate-400 font-bold">
                                {pageIndex + 1} de {story.cuentoLargo.length}
                            </span>
                            <button
                                onClick={() => setPageIndex(p => Math.min(story.cuentoLargo.length - 1, p + 1))}
                                disabled={pageIndex === story.cuentoLargo.length - 1}
                                className="px-6 py-3 rounded-xl font-bold bg-blue-500 text-white disabled:opacity-30 disabled:bg-slate-200 disabled:text-slate-400 flex items-center gap-2"
                            >
                                Sig. <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

export default function PipiStoryPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center" style={{ background: "#0F172A" }}>
                <div className="text-white text-2xl font-bold animate-pulse">Cargando historia de Pipi...</div>
            </div>
        }>
            <PipiStoryViewerInner />
        </Suspense>
    );
}
