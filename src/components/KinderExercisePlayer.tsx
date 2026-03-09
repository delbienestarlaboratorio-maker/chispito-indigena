"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Lock, ChevronRight } from "lucide-react";

type KinderEjercicio = {
    id: string;
    tipo: "multiple_choice" | "visual_count" | "true_false" | "fill_blank";
    pregunta: string;
    visual?: string;          // emoji(s) a mostrar grande
    visualAnimado?: boolean;  // si el visual debe rebotar/pulsar
    opciones?: string[];
    respuestaCorrecta: string;
    explicacion: string;
    tema?: string;
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

// Extrae el visual del texto de pregunta si no hay uno explícito
function extraerVisual(pregunta: string, visual?: string): string | null {
    if (visual) return visual;
    // Detectar emojis de conteo en la pregunta (ej: "🐶🐶🐶")
    const emojiMatch = pregunta.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic}){2,}/u);
    if (emojiMatch) return emojiMatch[0];
    return null;
}

// Confeti de emojis al acertar
function Confeti({ activo }: { activo: boolean }) {
    const items = ["⭐", "🌟", "✨", "🎈", "🎉", "💫", "🌈", "❤️", "🦋", "🌸"];
    if (!activo) return null;
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 25 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        y: -60,
                        x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
                        opacity: 1, scale: Math.random() * 0.8 + 0.5,
                    }}
                    animate={{ y: 900, opacity: 0, rotate: Math.random() * 720 }}
                    transition={{ duration: 2 + Math.random() * 1.5, delay: Math.random() * 0.7, ease: "linear" }}
                    className="absolute text-4xl select-none"
                >
                    {items[Math.floor(Math.random() * items.length)]}
                </motion.div>
            ))}
        </div>
    );
}

// Bloque visual grande — el objeto que el niño ve (🖐️, 🐶🐶🐶, etc.)
function VisualGrande({ visual, animate: animado }: { visual: string; animate?: boolean }) {
    // Divide en caracteres individuales para animarlos
    const chars = [...visual]; // spread correcto para emojis unicode

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
                    style={{ fontSize: chars.length === 1 ? "9rem" : chars.length <= 3 ? "6rem" : "4rem", lineHeight: 1 }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}

// Botón de opción grande para niños
function OpcionBtn({ texto, onClick, estado, color }: {
    texto: string; onClick: () => void;
    estado: "idle" | "correcto" | "incorrecto"; color: string;
}) {
    const bg = estado === "correcto" ? "#22C55E" : estado === "incorrecto" ? "#EF4444" : "white";
    const icono = estado === "correcto" ? "✅ " : estado === "incorrecto" ? "❌ " : "";

    return (
        <motion.button
            whileHover={estado === "idle" ? { scale: 1.06, y: -2 } : {}}
            whileTap={estado === "idle" ? { scale: 0.94 } : {}}
            onClick={onClick}
            disabled={estado !== "idle"}
            animate={
                estado === "correcto" ? { scale: [1, 1.12, 1] } :
                    estado === "incorrecto" ? { x: [-6, 6, -6, 6, 0] } : {}
            }
            transition={{ duration: 0.35 }}
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

    const ejercicio = lista[indice] as KinderEjercicio;
    const esUltimo = indice >= lista.length - 1;
    const esUltimoGratis = indice >= FREE_LIMIT - 1;
    const visual = extraerVisual(ejercicio?.pregunta || "", ejercicio?.visual);

    // Pregunta limpia — sin emojis si el visual ya los extrae
    const preguntaLimpia = visual && !ejercicio?.visual
        ? ejercicio.pregunta.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic}){2,}/gu, "").trim()
        : ejercicio?.pregunta;

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
    }, [indice]);

    const responder = useCallback((respuesta: string) => {
        if (respondido || !ejercicio) return;
        const esCorrecta = respuesta.trim().toLowerCase() === ejercicio.respuestaCorrecta.trim().toLowerCase();
        setRespondido(true);
        setCorrecto(esCorrecta);
        setFeedbackIdx(Math.floor(Math.random() * (esCorrecta ? CELEBRACIONES.length : ERRORES.length)));

        const nuevoEstado = { ...estadoOps };
        if (ejercicio.opciones) {
            ejercicio.opciones.forEach(o => {
                if (o === ejercicio.respuestaCorrecta) nuevoEstado[o] = "correcto";
                else if (o === respuesta && !esCorrecta) nuevoEstado[o] = "incorrecto";
            });
        }
        setEstadoOps(nuevoEstado);

        if (esCorrecta) {
            setPuntaje(p => p + 1);
            setConfeti(true);
            setTimeout(() => setConfeti(false), 2200);
        }
    }, [respondido, ejercicio, estadoOps]);

    if (terminado || !ejercicio) {
        const total = FREE_LIMIT;
        const pct = Math.round((puntaje / total) * 100);
        const excelente = pct >= 70;
        return (
            <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center rounded-3xl p-8"
                style={{ background: excelente ? "#F0FDF4" : "#FFF7ED", border: `4px solid ${excelente ? "#22C55E" : "#F59E0B"}` }}
            >
                <div style={{ fontSize: "6rem" }}>{excelente ? "🏆" : "💪"}</div>
                <h2 className="text-3xl font-bold mt-2" style={{ color: excelente ? "#15803D" : "#92400E" }}>
                    {excelente ? "¡Lo lograste!" : "¡Sigue practicando!"}
                </h2>
                <p className="text-2xl font-bold my-3" style={{ color: excelente ? "#16A34A" : "#D97706" }}>
                    {puntaje} de {total} ⭐
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                    onClick={() => { setIndice(0); setTerminado(false); setPuntaje(0); setMostrarPaywall(false); }}
                    className="px-8 py-4 rounded-2xl font-bold text-white text-xl"
                    style={{ background: color }}
                >
                    🔄 ¡Jugar de nuevo!
                </motion.button>
            </motion.div>
        );
    }

    // ── PAYWALL ──────────────────────────────────────────────
    if (mostrarPaywall) {
        return (
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="text-center rounded-3xl p-8"
                style={{ background: "white", border: `4px solid ${color}40`, boxShadow: `0 8px 32px ${color}25` }}>
                <div style={{ fontSize: "5rem" }}>🌟</div>
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

            {/* Progreso */}
            <div className="mb-5">
                <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-gray-500 font-bold text-sm">{indice + 1} / {lista.length}</span>
                    <span className="font-bold text-sm" style={{ color: "#F59E0B" }}>⭐ {puntaje} pts</span>
                </div>
                <div className="flex gap-1.5">
                    {lista.map((_, i) => (
                        <motion.div key={i} className="h-3 rounded-full flex-1"
                            animate={{ backgroundColor: i < indice ? "#22C55E" : i === indice ? color : "rgba(0,0,0,0.1)" }}
                        />
                    ))}
                </div>
            </div>

            {/* Tarjeta ejercicio */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={ejercicio.id}
                    initial={{ opacity: 0, y: 25, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.28 }}
                    className="rounded-3xl p-6 mb-4"
                    style={{ background: "white", boxShadow: `0 8px 32px ${color}25`, border: `3px solid ${color}35` }}
                >
                    {/* Visual grande — emoji del objeto */}
                    {visual ? (
                        <VisualGrande visual={visual} animate />
                    ) : (
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

                    {/* Botones de opciones */}
                    {ejercicio.opciones && (
                        <div className="grid grid-cols-2 gap-3">
                            {ejercicio.opciones.map(op => (
                                <OpcionBtn
                                    key={op} texto={op}
                                    onClick={() => responder(op)}
                                    estado={estadoOps[op] || "idle"}
                                    color={color}
                                />
                            ))}
                        </div>
                    )}

                    {/* Fill blank */}
                    {ejercicio.tipo === "fill_blank" && !ejercicio.opciones && (
                        <div>
                            <input
                                type="text" value={inputVal}
                                onChange={e => setInputVal(e.target.value)}
                                disabled={respondido}
                                placeholder="Escribe tu respuesta..."
                                className="w-full text-center font-bold py-4 rounded-2xl border-4 outline-none"
                                style={{ borderColor: color, fontSize: "clamp(1.1rem, 4vw, 1.5rem)" }}
                                onKeyDown={e => { if (e.key === "Enter" && inputVal) responder(inputVal); }}
                            />
                            {!respondido && (
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => responder(inputVal)}
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

            {/* Feedback */}
            <AnimatePresence>
                {respondido && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="rounded-3xl p-5 mb-4 text-center"
                        style={{
                            background: correcto ? cel.bg : err.bg,
                            border: `3px solid ${correcto ? cel.borde : err.borde}`,
                        }}
                    >
                        <div style={{ fontSize: "3.5rem" }}>{correcto ? cel.emoji : err.emoji}</div>
                        <p className="font-bold text-xl mt-1" style={{ color: correcto ? cel.texto_color : "#92400E" }}>
                            {correcto ? cel.texto : err.texto}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">{ejercicio.explicacion}</p>
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
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}AA)` }}
                >
                    {esUltimoGratis ? "🔒 Ver más juegos" : esUltimo ? "🏆 Ver mi resultado" : "➡️ Siguiente"}
                </motion.button>
            )}
        </>
    );
}
