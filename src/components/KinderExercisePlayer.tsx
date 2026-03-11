"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, ChevronRight, Volume2, VolumeX, Music, MusicIcon } from "lucide-react";
import ChispitoCompanion, { type CompanionState } from "./ChispitoCompanion";
import { useGameSounds } from "@/hooks/useGameSounds";
import { useBlockMusic } from "@/hooks/useBlockMusic";

type KinderEjercicio = {
    id: string;
    tipo: "multiple_choice" | "visual_count" | "true_false" | "fill_blank";
    pregunta: string;
    visual?: string;           // emoji(s) OR image path
    visualAnimado?: boolean;
    imagen?: string;           // NEW: path to image (from SEP book or generated)
    imagenAlt?: string;        // NEW: alt text for image
    opciones?: string[];
    respuestaCorrecta: string;
    explicacion: string;
    tema?: string;
    fuenteSEP?: boolean;       // NEW: whether this exercise is from real SEP book
    libroSep?: { codigo: string; pagina: number };  // NEW: specific book reference
};

const CELEBRACIONES = [
    { emoji: "⭐", texto: "¡Muy bien!", bg: "#FFF9C4", borde: "#F59E0B", texto_color: "#78350F" },
    { emoji: "🌟", texto: "¡Excelente!", bg: "#FEF3C7", borde: "#F97316", texto_color: "#7C2D12" },
    { emoji: "🎉", texto: "¡Fantástico!", bg: "#F0FDF4", borde: "#22C55E", texto_color: "#14532D" },
    { emoji: "🏆", texto: "¡Súper!", bg: "#EFF6FF", borde: "#6366F1", texto_color: "#1E1B4B" },
    { emoji: "🦁", texto: "¡Campeón!", bg: "#FDF4FF", borde: "#EC4899", texto_color: "#4A044E" },
    { emoji: "🚀", texto: "¡Increíble!", bg: "#F0F9FF", borde: "#0EA5E9", texto_color: "#082F49" },
];

const ERRORES = [
    { emoji: "💪", texto: "¡Inténtalo de nuevo!", bg: "#FFF7ED", borde: "#F59E0B" },
    { emoji: "🤔", texto: "¡Casi! Sigue intentando", bg: "#F0F9FF", borde: "#0EA5E9" },
    { emoji: "😊", texto: "¡Tú puedes!", bg: "#F0FDF4", borde: "#22C55E" },
];

// ── Visual grande — emoji o imagen ──────────────────────
function VisualGrande({ visual, imagen, imagenAlt, animate: animado }: {
    visual?: string | null; imagen?: string; imagenAlt?: string; animate?: boolean;
}) {
    // Si hay imagen real, mostrarla
    if (imagen) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mx-auto mb-4 rounded-2xl overflow-hidden"
                style={{
                    width: "min(280px, 85vw)",
                    height: "min(200px, 50vw)",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    border: "3px solid rgba(255,255,255,0.3)",
                }}
            >
                <Image
                    src={imagen}
                    alt={imagenAlt || "Imagen del ejercicio"}
                    fill
                    className="object-cover"
                    sizes="280px"
                />
            </motion.div>
        );
    }

    // Si hay emojis, animarlos
    if (!visual) return null;
    const chars = [...visual];

    return (
        <motion.div
            className="flex items-center justify-center flex-wrap gap-2 mb-4"
            style={{ minHeight: "100px" }}
        >
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                    whileHover={animado ? { scale: 1.3, rotate: 10 } : {}}
                    className="select-none cursor-default"
                    style={{
                        fontSize: chars.length === 1 ? "9rem" : chars.length <= 3 ? "6rem" : "4rem",
                        lineHeight: 1,
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}

// ── Botón de opción ──────────────────────────────────
function OpcionBtn({ texto, onClick, estado, color, delay }: {
    texto: string; onClick: () => void;
    estado: "idle" | "correcto" | "incorrecto"; color: string;
    delay?: number;
}) {
    const bg = estado === "correcto" ? "#22C55E" : estado === "incorrecto" ? "#EF4444" : "white";
    const icono = estado === "correcto" ? "✅ " : estado === "incorrecto" ? "❌ " : "";

    return (
        <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay || 0, type: "spring", stiffness: 400, damping: 25 }}
            whileHover={estado === "idle" ? { scale: 1.06, y: -2 } : {}}
            whileTap={estado === "idle" ? { scale: 0.94 } : {}}
            onClick={onClick}
            disabled={estado !== "idle"}
            className="w-full py-5 px-3 rounded-3xl font-bold shadow-md border-4 transition-colors"
            style={{
                background: estado === "idle" ? "white" : bg,
                borderColor: estado === "idle" ? color : bg,
                color: estado === "idle" ? "#1E293B" : "white",
                fontSize: "clamp(1.2rem, 5vw, 1.7rem)",
                boxShadow: estado === "idle" ? `0 4px 16px ${color}40` : "none",
            }}
        >
            {icono}{texto}
        </motion.button>
    );
}

// ── Barra de progreso con estrellas ──────────────────
function StarProgress({ current, total, puntaje, color }: {
    current: number; total: number; puntaje: number; color: string;
}) {
    return (
        <div className="mb-5">
            <div className="flex justify-between items-center mb-2 px-1">
                <span className="font-bold text-sm" style={{ color: "#64748B" }}>
                    Juego {current + 1} de {total}
                </span>
                <motion.span
                    key={puntaje}
                    initial={{ scale: 1.4 }}
                    animate={{ scale: 1 }}
                    className="font-bold text-sm flex items-center gap-1"
                    style={{ color: "#F59E0B" }}
                >
                    {[...Array(puntaje)].map((_, i) => (
                        <motion.span
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.05, type: "spring" }}
                        >
                            ⭐
                        </motion.span>
                    ))}
                    {puntaje === 0 && <span style={{ color: "#CBD5E1" }}>☆☆☆</span>}
                </motion.span>
            </div>
            <div className="flex gap-1.5">
                {Array.from({ length: total }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-3 rounded-full flex-1"
                        initial={false}
                        animate={{
                            backgroundColor: i < current ? "#22C55E" : i === current ? color : "rgba(0,0,0,0.08)",
                            scale: i === current ? 1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>
        </div>
    );
}

// ── Confeti mejorado ──────────────────────────────────
function Confeti({ activo }: { activo: boolean }) {
    const items = ["⭐", "🌟", "✨", "🎈", "🎉", "💫", "🌈", "❤️", "🦋", "🌸"];
    if (!activo) return null;
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        y: -60,
                        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
                        opacity: 1,
                        scale: Math.random() * 0.8 + 0.6,
                    }}
                    animate={{ y: 900, opacity: 0, rotate: Math.random() * 720 }}
                    transition={{ duration: 2.5 + Math.random() * 1.5, delay: Math.random() * 0.5, ease: "linear" }}
                    className="absolute text-4xl select-none"
                >
                    {items[Math.floor(Math.random() * items.length)]}
                </motion.div>
            ))}
        </div>
    );
}

// ══════════════════════════════════════════════════════
// ██  COMPONENTE PRINCIPAL  ████████████████████████████
// ══════════════════════════════════════════════════════

interface Props {
    ejercicios: (KinderEjercicio & Record<string, unknown>)[];
    grado: string;
    materia: string;
    bloque: number;
    nombreBloque: string;
    color: string;
    emoji: string;
}

export default function KinderExercisePlayer({ ejercicios, grado, materia, bloque, nombreBloque, color, emoji }: Props) {
    const FREE_LIMIT = 3;
    const lista = ejercicios.slice(0, 10);
    const [indice, setIndice] = useState(0);
    const [estadoOps, setEstadoOps] = useState<Record<string, "idle" | "correcto" | "incorrecto">>({});
    const [respondido, setRespondido] = useState(false);
    const [correcto, setCorrecto] = useState<boolean | null>(null);
    const [confeti, setConfeti] = useState(false);
    const [puntaje, setPuntaje] = useState(0);
    const [terminado, setTerminado] = useState(false);
    const [inputVal, setInputVal] = useState("");
    const [feedbackIdx, setFeedbackIdx] = useState(0);
    const [mostrarPaywall, setMostrarPaywall] = useState(false);
    const [companionState, setCompanionState] = useState<CompanionState>("idle");

    const { play, muted, toggleMute } = useGameSounds();
    const { playMelody, musicMuted, toggleMusicMute } = useBlockMusic(materia);
    const musicPlayedRef = useRef(false);

    const ejercicio = lista[indice] as KinderEjercicio;
    const esUltimo = indice >= lista.length - 1;
    const esUltimoGratis = indice >= FREE_LIMIT - 1;

    // Extraer visual del texto si no hay uno explícito
    const visual = ejercicio?.visual || (() => {
        const match = ejercicio?.pregunta?.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic}){2,}/u);
        return match ? match[0] : null;
    })();

    const preguntaLimpia = visual && !ejercicio?.visual
        ? ejercicio.pregunta.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic}){2,}/gu, "").trim()
        : ejercicio?.pregunta;

    // Reset al cambiar de ejercicio
    useEffect(() => {
        if (!ejercicio) return;
        const ops: Record<string, "idle" | "correcto" | "incorrecto"> = {};
        if (ejercicio.opciones) {
            ejercicio.opciones.forEach(o => { ops[o] = "idle"; });
        } else if (ejercicio.tipo === "true_false") {
            ops["true"] = "idle";
            ops["false"] = "idle";
        }
        setEstadoOps(ops);
        setRespondido(false);
        setCorrecto(null);
        setInputVal("");
        setConfeti(false);
        setCompanionState("idle");
        play("swoosh");
    }, [indice]);

    // Play melody on first user interaction (needs user gesture for AudioContext)
    const triggerMusicOnce = useCallback(() => {
        if (!musicPlayedRef.current && !musicMuted) {
            musicPlayedRef.current = true;
            playMelody();
        }
    }, [playMelody, musicMuted]);

    const responder = useCallback((respuesta: string) => {
        triggerMusicOnce();
        if (respondido || !ejercicio) return;
        const esCorrecta = respuesta.trim().toLowerCase() === String(ejercicio.respuestaCorrecta).trim().toLowerCase();
        setRespondido(true);
        setCorrecto(esCorrecta);
        setFeedbackIdx(Math.floor(Math.random() * (esCorrecta ? CELEBRACIONES.length : ERRORES.length)));

        const nuevoEstado = { ...estadoOps };
        if (ejercicio.opciones) {
            ejercicio.opciones.forEach(o => {
                if (String(o).toLowerCase() === String(ejercicio.respuestaCorrecta).toLowerCase()) nuevoEstado[o] = "correcto";
                else if (String(o).toLowerCase() === respuesta.toLowerCase() && !esCorrecta) nuevoEstado[o] = "incorrecto";
            });
        } else if (ejercicio.tipo === "true_false") {
            const correctaStr = String(ejercicio.respuestaCorrecta).trim().toLowerCase();
            nuevoEstado[correctaStr] = "correcto";
            if (!esCorrecta) {
                nuevoEstado[respuesta.trim().toLowerCase()] = "incorrecto";
            }
        }
        setEstadoOps(nuevoEstado);

        if (esCorrecta) {
            setPuntaje(p => p + 1);
            setConfeti(true);
            setCompanionState("correct");
            play("correct");
            play("star");
            setTimeout(() => setConfeti(false), 2500);
        } else {
            setCompanionState("wrong");
            play("wrong");
        }
    }, [respondido, ejercicio, estadoOps, play]);

    // Play fanfare when game ends
    useEffect(() => {
        if (terminado) play("fanfare");
    }, [terminado]);

    // ── PANTALLA FINAL ─────────────────────────────────
    if (terminado || !ejercicio) {
        const total = FREE_LIMIT;
        const pct = Math.round((puntaje / total) * 100);
        const excelente = pct >= 70;

        return (
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center rounded-3xl p-8"
                style={{
                    background: excelente ? "linear-gradient(135deg, #F0FDF4, #DCFCE7)" : "linear-gradient(135deg, #FFF7ED, #FEF3C7)",
                    border: `4px solid ${excelente ? "#22C55E" : "#F59E0B"}`,
                    boxShadow: `0 12px 40px ${excelente ? "#22C55E" : "#F59E0B"}30`,
                }}
            >
                <ChispitoCompanion state="celebrating" bubbleText={excelente ? "¡Eres una estrella! 🌟" : "¡Buen intento! Sigue practicando 💪"} />

                <h2 className="text-3xl font-bold mt-4" style={{ color: excelente ? "#15803D" : "#92400E" }}>
                    {excelente ? "¡Lo lograste!" : "¡Sigue practicando!"}
                </h2>
                <p className="text-2xl font-bold my-3" style={{ color: excelente ? "#16A34A" : "#D97706" }}>
                    {puntaje} de {total} ⭐
                </p>

                {/* Estrellas ganadas */}
                <div className="flex justify-center gap-2 mb-4">
                    {[...Array(total)].map((_, i) => (
                        <motion.span
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 + i * 0.15, type: "spring" }}
                            style={{ fontSize: "2.5rem" }}
                        >
                            {i < puntaje ? "⭐" : "☆"}
                        </motion.span>
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                    onClick={() => { setIndice(0); setTerminado(false); setPuntaje(0); setMostrarPaywall(false); }}
                    className="px-8 py-4 rounded-2xl font-bold text-white text-xl"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}CC)`, boxShadow: `0 6px 20px ${color}40` }}
                >
                    🔄 ¡Jugar de nuevo!
                </motion.button>
            </motion.div>
        );
    }

    // ── PAYWALL ─────────────────────────────────────────
    if (mostrarPaywall) {
        return (
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-center rounded-3xl p-8"
                style={{ background: "white", border: `4px solid ${color}40`, boxShadow: `0 8px 32px ${color}25` }}>

                <ChispitoCompanion state="idle" bubbleText="¡Hay muchos juegos más esperándote! 🎮" />

                <h2 className="text-2xl font-bold mt-2 mb-1" style={{ color: "#1E293B" }}>
                    ¡Terminaste los juegos gratis!
                </h2>
                <p className="text-gray-500 mb-2">
                    Acertaste <strong>{puntaje}/{FREE_LIMIT}</strong> ⭐
                </p>
                <p className="text-lg font-bold mb-6" style={{ color }}>
                    ¡Hay {lista.length - FREE_LIMIT} juegos más esperando!
                </p>

                {/* Preview borrosa */}
                <div className="relative mb-6">
                    <div className="space-y-2 filter blur-[3px] pointer-events-none select-none opacity-50">
                        {lista.slice(FREE_LIMIT, FREE_LIMIT + 3).map(ej => (
                            <div key={ej.id} className="rounded-2xl p-3 text-left" style={{ background: `${color}10`, border: `2px solid ${color}20` }}>
                                <p className="text-gray-700 text-sm truncate">{ej.pregunta}</p>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(to top, white 30%, transparent)" }}>
                        <div className="text-center">
                            <Lock size={32} style={{ color }} className="mx-auto mb-1" />
                            <p className="font-bold text-sm" style={{ color }}>{lista.length - FREE_LIMIT} juegos bloqueados</p>
                        </div>
                    </div>
                </div>

                <Link href="/planes"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-xl shadow-lg transition-all hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}AA)` }}>
                    🔓 Desbloquear todo — $99/mes <ChevronRight size={20} />
                </Link>
                <p className="text-gray-400 text-xs mt-3">OXXO · Tarjeta · Transferencia</p>

                <motion.button whileTap={{ scale: 0.95 }}
                    onClick={() => { setIndice(0); setMostrarPaywall(false); setPuntaje(0); }}
                    className="mt-4 text-gray-400 hover:text-gray-600 text-sm underline transition-colors">
                    🔄 Jugar los juegos gratis otra vez
                </motion.button>
            </motion.div>
        );
    }

    const cel = CELEBRACIONES[feedbackIdx % CELEBRACIONES.length];
    const err = ERRORES[feedbackIdx % ERRORES.length];

    return (
        <>
            <Confeti activo={confeti} />

            {/* Botones de sonido y música */}
            <div className="flex justify-end mb-2 gap-1.5">
                {/* Botón mute música */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMusicMute}
                    className="p-2 rounded-full transition-colors flex items-center gap-1"
                    style={{ background: musicMuted ? "#F1F5F9" : `${color}15`, color: musicMuted ? "#94A3B8" : color, fontSize: "0.7rem", fontWeight: 600 }}
                    aria-label={musicMuted ? "Activar música" : "Silenciar música"}
                    title={musicMuted ? "Activar música 🎵" : "Silenciar música"}
                >
                    {musicMuted ? "🔇" : "🎵"}
                </motion.button>
                {/* Botón mute sonidos del juego */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className="p-2 rounded-full transition-colors"
                    style={{ background: muted ? "#F1F5F9" : `${color}15`, color: muted ? "#94A3B8" : color }}
                    aria-label={muted ? "Activar sonido" : "Silenciar"}
                >
                    {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </motion.button>
            </div>

            {/* Progreso con estrellas */}
            <StarProgress current={indice} total={lista.length} puntaje={puntaje} color={color} />

            {/* ── Layout principal: Companion + Ejercicio ──────── */}
            <div className="flex flex-col md:flex-row gap-4 items-start">

                {/* Companion — a la izquierda en desktop, arriba en mobile */}
                <div className="w-full md:w-auto flex justify-center md:sticky md:top-4">
                    <ChispitoCompanion state={companionState} />
                </div>

                {/* Tarjeta del ejercicio */}
                <div className="flex-1 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={ejercicio.id}
                            initial={{ opacity: 0, y: 25, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.28 }}
                            className="rounded-3xl p-6 mb-4"
                            style={{
                                background: "white",
                                boxShadow: `0 8px 32px ${color}20`,
                                border: `3px solid ${color}30`,
                            }}
                        >
                            {/* Tema badge */}
                            {ejercicio.tema && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-2 mb-3"
                                >
                                    <span
                                        className="text-xs font-bold px-3 py-1 rounded-full"
                                        style={{
                                            background: `${color}15`,
                                            color: color,
                                            border: `1px solid ${color}30`,
                                        }}
                                    >
                                        📖 {ejercicio.tema}
                                    </span>
                                    {ejercicio.fuenteSEP && (
                                        <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600 border border-green-200 font-bold">
                                            ✅ SEP
                                        </span>
                                    )}
                                </motion.div>
                            )}

                            {/* Visual: imagen del libro o emojis */}
                            <VisualGrande
                                visual={typeof visual === "string" ? visual : undefined}
                                imagen={ejercicio.imagen}
                                imagenAlt={ejercicio.imagenAlt}
                                animate
                            />

                            {/* Si no hay visual ni imagen, mostrar el emoji de la materia */}
                            {!visual && !ejercicio.imagen && (
                                <div className="text-center mb-3" style={{ fontSize: "5rem" }}>{emoji}</div>
                            )}

                            {/* Pregunta */}
                            <motion.p
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="text-center font-bold mb-6 leading-snug"
                                style={{ fontSize: "clamp(1.3rem, 4.5vw, 1.8rem)", color: "#1E293B" }}
                            >
                                {preguntaLimpia}
                            </motion.p>

                            {/* Opciones con entrada escalonada */}
                            {ejercicio.opciones ? (
                                <div className="grid grid-cols-2 gap-3">
                                    {ejercicio.opciones.map((op, idx) => (
                                        <OpcionBtn
                                            key={op} texto={op}
                                            onClick={() => { play("pop"); responder(op); }}
                                            estado={estadoOps[op] || "idle"}
                                            color={color}
                                            delay={0.05 + idx * 0.08}
                                        />
                                    ))}
                                </div>
                            ) : ejercicio.tipo === "true_false" ? (
                                <div className="grid grid-cols-2 gap-3">
                                    <OpcionBtn
                                        texto="Verdadero"
                                        onClick={() => { play("pop"); responder("true"); }}
                                        estado={estadoOps["true"] || "idle"}
                                        color="#22C55E" delay={0.05}
                                    />
                                    <OpcionBtn
                                        texto="Falso"
                                        onClick={() => { play("pop"); responder("false"); }}
                                        estado={estadoOps["false"] || "idle"}
                                        color="#EF4444" delay={0.12}
                                    />
                                </div>
                            ) : null}

                            {/* Fill blank */}
                            {ejercicio.tipo === "fill_blank" && !ejercicio.opciones && (
                                <div>
                                    <input
                                        type="text" value={inputVal}
                                        onChange={e => setInputVal(e.target.value)}
                                        disabled={respondido}
                                        placeholder="Escribe tu respuesta..."
                                        className="w-full text-center font-bold py-4 rounded-2xl border-4 outline-none"
                                        style={{ borderColor: color, fontSize: "clamp(1.1rem, 4vw, 1.5rem)", color: "#1E293B", background: "white" }}
                                        onKeyDown={e => { if (e.key === "Enter" && inputVal) { play("pop"); responder(inputVal); } }}
                                    />
                                    {!respondido && (
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => { play("pop"); responder(inputVal); }}
                                            disabled={!inputVal.trim()}
                                            className="mt-3 w-full py-4 rounded-2xl font-bold text-white text-xl"
                                            style={{ background: inputVal.trim() ? color : "#94A3B8" }}
                                        >
                                            ✅ Comprobar
                                        </motion.button>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* ── Feedback ──────────────────────────────── */}
                    <AnimatePresence>
                        {respondido && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="rounded-3xl p-5 mb-4 text-center"
                                style={{
                                    background: correcto
                                        ? `linear-gradient(135deg, ${cel.bg}, ${cel.bg}CC)`
                                        : `linear-gradient(135deg, ${err.bg}, ${err.bg}CC)`,
                                    border: `3px solid ${correcto ? cel.borde : err.borde}`,
                                    boxShadow: `0 4px 16px ${correcto ? cel.borde : err.borde}25`,
                                }}
                            >
                                <motion.div
                                    animate={correcto ? { scale: [1, 1.3, 1] } : { rotate: [-5, 5, 0] }}
                                    transition={{ duration: 0.4 }}
                                    style={{ fontSize: "3.5rem" }}
                                >
                                    {correcto ? cel.emoji : err.emoji}
                                </motion.div>
                                <p className="font-bold text-xl mt-1" style={{ color: correcto ? cel.texto_color : "#92400E" }}>
                                    {correcto ? cel.texto : err.texto}
                                </p>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{ejercicio.explicacion}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Botón siguiente */}
                    {respondido && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                if (esUltimoGratis) {
                                    setMostrarPaywall(true);
                                } else if (esUltimo) {
                                    setTerminado(true);
                                } else {
                                    setIndice(i => i + 1);
                                }
                            }}
                            className="w-full py-5 rounded-3xl font-bold text-white text-2xl shadow-xl"
                            style={{ background: `linear-gradient(135deg, ${color}, ${color}AA)`, boxShadow: `0 6px 24px ${color}35` }}
                        >
                            {esUltimoGratis ? "🔒 Ver más juegos" : esUltimo ? "🏆 Ver mi resultado" : "➡️ ¡Siguiente!"}
                        </motion.button>
                    )}
                </div>
            </div>
        </>
    );
}
