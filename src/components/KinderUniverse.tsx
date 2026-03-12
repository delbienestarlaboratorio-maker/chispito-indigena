"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, Unlock, PlayCircle, BookOpen, Star } from "lucide-react";
import BuscadorPagina from "@/components/BuscadorPagina";

// Data Structure for the 12 Monthly Pipi Stories
const PIPI_STORIES = [
    { id: 1, mesNum: 8, mesNombre: "Septiembre", titulo: "El primer día de Pipi", desc: "Adaptación y Emociones", unlockState: "unlocked" },
    { id: 2, mesNum: 9, mesNombre: "Octubre", titulo: "El misterio del sándwich", desc: "Aprender a compartir", unlockState: "unlocked" },
    { id: 3, mesNum: 10, mesNombre: "Noviembre", titulo: "Los monstruos de colores", desc: "Arte y expresión", unlockState: "unlocked" },
    { id: 4, mesNum: 11, mesNombre: "Diciembre", titulo: "El regalo invisible", desc: "Familia y dar", unlockState: "unlocked" },
    { id: 5, mesNum: 0, mesNombre: "Enero", titulo: "La aventura del frío", desc: "Las estaciones", unlockState: "unlocked" },
    { id: 6, mesNum: 1, mesNombre: "Febrero", titulo: "El corazón de Pipi", desc: "Amistad sincera", unlockState: "unlocked" },
    { id: 7, mesNum: 2, mesNombre: "Marzo", titulo: "La semilla mágica", desc: "Naturaleza", unlockState: "locked" },
    { id: 8, mesNum: 3, mesNombre: "Abril", titulo: "Pipi en el espacio", desc: "Curiosidad y planetas", unlockState: "locked" },
    { id: 9, mesNum: 4, mesNombre: "Mayo", titulo: "El día de mamá", desc: "Agradecimiento", unlockState: "locked" },
    { id: 10, mesNum: 5, mesNombre: "Junio", titulo: "Las vocales perdidas", desc: "Pre-lectura", unlockState: "locked" },
    { id: 11, mesNum: 6, mesNombre: "Julio", titulo: "El verano de Pipi", desc: "Juego libre", unlockState: "locked" },
    { id: 12, mesNum: 7, mesNombre: "Agosto", titulo: "El gran descubrimiento", desc: "Cierre de ciclo", unlockState: "locked" }
];

export default function KinderUniverse({ grado }: { grado: any }) {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0-11

    // Calculate unlock logic based on real month (Simulated for Demo)
    const activeStories = PIPI_STORIES.map(s => {
        // En un sistema real, haríamos un cálculo complejo del ciclo escolar.
        // Para la demo, dejaremos algunos bloqueados para que el niño entienda la progresión.
        return s;
    });

    return (
        <div className="w-full text-white pb-20">
            {/* Cabecera del Cuarto de Pipi */}
            <div className="relative overflow-hidden rounded-3xl mx-4 mt-8 p-8" style={{ background: "linear-gradient(135deg, #FF6B6B, #FF8E53)" }}>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-sm mb-4">
                            Universo de Pipi ⚡
                        </div>
                        <h1 className="font-fredoka text-5xl md:text-6xl text-white mb-4">
                            ¡Bienvenido a {grado.nombre}!
                        </h1>
                        <p className="text-xl text-white/90 max-w-xl">
                            Acompaña a Pipi a descubrir el mundo. Cada mes se desbloquea una nueva historia mágica y videos nuevos.
                        </p>
                    </div>
                    {/* Placeholder de Pipi */}
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-white/40 shadow-2xl relative animate-bounce" style={{ animationDuration: '3s' }}>
                        <div className="text-8xl">👦🏽</div>
                        <div className="absolute -bottom-4 bg-white text-[#FF6B6B] px-4 py-1 rounded-full font-bold shadow-lg">
                            Soy Pipi
                        </div>
                    </div>
                </div>
                {/* Elementos decorativos */}
                <div className="absolute -top-10 -right-10 text-white/10 text-9xl">🎈</div>
                <div className="absolute bottom-10 left-20 text-white/20 text-6xl rotate-12">🖍️</div>
            </div>

            {/* Buscador por página del libro SEP */}
            <div className="max-w-2xl mx-auto px-4 mt-10">
                <BuscadorPagina gradoSlug={grado.slug} />
            </div>

            {/* Calendario de Historias */}
            <div className="max-w-6xl mx-auto px-4 mt-10">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-fredoka text-3xl md:text-4xl text-white flex items-center gap-3">
                        <BookOpen size={32} className="text-yellow-400" />
                        El Calendario de Pipi
                    </h2>
                    <div className="flex items-center gap-2 text-white/50 text-sm font-semibold">
                        <Star size={16} className="text-yellow-400" />
                        1 nueva aventura cada mes
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {activeStories.map((story) => {
                        const isLocked = story.unlockState === "locked";

                        return (
                            <div
                                key={story.id}
                                className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${isLocked ? 'opacity-60 grayscale-[50%]' : 'hover:-translate-y-2 hover:shadow-yellow-500/20'}`}
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                            >
                                {/* Thumbnail simulado */}
                                <div className="h-40 w-full flex items-center justify-center relative" style={{ background: isLocked ? "rgba(0,0,0,0.5)" : "linear-gradient(45deg, #4F46E5, #3B82F6)" }}>
                                    {isLocked ? (
                                        <Lock size={40} className="text-white/30" />
                                    ) : (
                                        <div className="text-6xl">{['🎒', '🥪', '🎨', '🎁', '⛄', '❤️'][story.id - 1] || '🎈'}</div>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`text-xs font-bold uppercase tracking-wider ${isLocked ? 'text-white/30' : 'text-blue-400'}`}>
                                            Mes {story.id}: {story.mesNombre}
                                        </span>
                                        {!isLocked && <Unlock size={14} className="text-green-400" />}
                                    </div>

                                    <h3 className="font-fredoka text-xl text-white mb-2 leading-tight">
                                        {isLocked ? "Aventura Bloqueada" : story.titulo}
                                    </h3>
                                    <p className="text-white/50 text-sm mb-6 line-clamp-2">
                                        {isLocked ? "Vuelve en este mes para descubrir qué aprenderá Pipi." : story.desc}
                                    </p>

                                    {/* Action Buttons */}
                                    {!isLocked ? (
                                        <div className="flex flex-col gap-2">
                                            <Link
                                                href={`/pipi-story/${grado.slug}/${story.id}?mode=comic`}
                                                className="w-full py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                                                style={{ background: "#FFD60A", color: "#000" }}
                                            >
                                                <BookOpen size={16} /> Ver Cuento / Cómic
                                            </Link>
                                            <button
                                                className="w-full py-2 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition-all hover:bg-white/10"
                                                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                                            >
                                                <PlayCircle size={16} /> Ver Videos
                                            </button>
                                        </div>
                                    ) : (
                                        <div
                                            className="w-full py-3 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                                            style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                                        >
                                            <Lock size={16} /> Disponible pronto
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Acceso a los libros oficiales SEP de Kínder */}
            <div className="max-w-6xl mx-auto px-4 mt-20 pt-10 border-t border-white/10">
                <h2 className="font-fredoka text-2xl text-white mb-6">📚 Libros Oficiales SEP</h2>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={`/libro-sep/${grado.slug}/saberes`}
                        className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all hover:bg-white/10"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                        <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <div className="text-white font-bold">Nuestros Saberes</div>
                            <div className="text-white/50 text-sm">Libro interactivo SEP</div>
                        </div>
                    </Link>
                    <Link
                        href={`/libro-sep/${grado.slug}/proyectos-aula`}
                        className="flex items-center gap-3 px-6 py-4 rounded-2xl transition-all hover:bg-white/10"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                        <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <div className="text-white font-bold">Proyectos Escolares</div>
                            <div className="text-white/50 text-sm">Libro interactivo SEP</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
