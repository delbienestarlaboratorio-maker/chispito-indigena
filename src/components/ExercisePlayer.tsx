"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Lock, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getMensajesGrado, getCompañero } from "@/data/personajes";

type Ejercicio = {
    id: string;
    tipo: "multiple_choice" | "fill_blank" | "true_false" | "visual_count";
    pregunta: string;
    opciones?: string[];
    respuestaCorrecta: string;
    explicacion: string;
    nivel: "v1" | "v2";
    tema?: string;
};

type EstadoRespuesta = "sin_responder" | "correcto" | "incorrecto";

interface Props {
    ejercicios: Ejercicio[];
    grado: string;
    materia: string;
    bloque: number;
    nombreBloque: string;
    meses: string;
}

// getMensaje ahora usa el sistema de personajes por grado
function getMensaje(estado: EstadoRespuesta, indice: number, grado: string) {
    const mensajes = getMensajesGrado(grado);
    const pool = estado === "sin_responder"
        ? mensajes.animando
        : estado === "correcto"
            ? mensajes.correcto
            : mensajes.incorrecto;
    return pool[indice % pool.length];
}


// ── CONFETTI COMPONENT ─────────────────────────────────────────────────────────
function Confetti() {
    const pieces = ["🌟", "⭐", "✨", "🎊", "🎉", "💫", "🥳", "🎈"];
    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: -50,
                        rotate: 0,
                        scale: 0.5 + Math.random(),
                    }}
                    animate={{
                        y: window.innerHeight + 100,
                        rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                        x: (Math.random() - 0.5) * 200 + Math.random() * window.innerWidth,
                    }}
                    transition={{
                        duration: 1.5 + Math.random() * 1.5,
                        delay: Math.random() * 0.5,
                        ease: "linear",
                    }}
                    style={{ position: "absolute", fontSize: 24 + Math.random() * 16 }}
                >
                    {pieces[Math.floor(Math.random() * pieces.length)]}
                </motion.div>
            ))}
        </div>
    );
}

// ── NICO MASCOT — muestra a Nico y a su compañero del grado ───────────────────
function NicoMascot({ estado, bounce, grado }: { estado: EstadoRespuesta; bounce: boolean; grado: string }) {
    const cara = estado === "correcto" ? "😄" : estado === "incorrecto" ? "😬" : "😊";
    const compañero = getCompañero(grado);

    return (
        <div className="flex items-end gap-3">
            {/* NICO */}
            <motion.div
                animate={
                    bounce
                        ? { y: [0, -18, 0, -10, 0], rotate: [0, -8, 8, -4, 0], scale: [1, 1.15, 1] }
                        : estado === "sin_responder"
                            ? { y: [0, -4, 0], rotate: [0, 2, -2, 0] }
                            : {}
                }
                transition={
                    bounce
                        ? { duration: 0.7, ease: "easeOut" }
                        : { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                }
                className="flex flex-col items-center"
                style={{ userSelect: "none" }}
            >
                <div style={{ fontSize: 52, lineHeight: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
                    🚀
                </div>
                <motion.div
                    key={estado}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                        background: "#FFD60A", borderRadius: "50%",
                        width: 28, height: 28,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 15, marginTop: -8,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    }}
                >
                    {cara}
                </motion.div>
                <span style={{ color: "white", fontSize: 10, fontWeight: 700, marginTop: 3, letterSpacing: 1 }}>NICO</span>
            </motion.div>

            {/* COMPAÑERO DEL GRADO */}
            {compañero && (
                <motion.div
                    initial={{ opacity: 0, scale: 0, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center"
                    style={{ userSelect: "none" }}
                >
                    <motion.div
                        animate={
                            bounce
                                ? { y: [0, -12, 0], rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }
                                : { y: [0, -3, 0] }
                        }
                        transition={
                            bounce
                                ? { duration: 0.6, delay: 0.15 }
                                : { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                        }
                    >
                        <div style={{ fontSize: 38, lineHeight: 1, filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.25))" }}>
                            {compañero.emoji}
                        </div>
                    </motion.div>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 9, fontWeight: 700, marginTop: 3, letterSpacing: 1 }}>
                        {compañero.nombre.toUpperCase()}
                    </span>
                </motion.div>
            )}
        </div>
    );
}


// ── VISUAL COUNTING GRID (para ejercicios de niños pequeños) ───────────────────
function VisualCountGrid({ pregunta }: { pregunta: string }) {
    // Extrae emojis del texto de la pregunta para mostrarlos grandes
    const emojiRegex = /\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu;
    const emojis = pregunta.match(emojiRegex) || [];
    // Extrae números del texto (cuántos objetos hay)
    const numMatch = pregunta.match(/\((\d+)\s+\w+\)/);
    const cantidad = numMatch ? parseInt(numMatch[1]) : emojis.length;

    if (emojis.length === 0) return null;

    const emoji = emojis[0];
    const items = Array.from({ length: Math.min(cantidad, 15) });

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-wrap gap-2 justify-center p-4 rounded-2xl mb-4"
            style={{ background: "linear-gradient(135deg, #FFF9C4, #FFF3E0)", border: "2px dashed #FFD60A" }}
        >
            {items.map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.06, type: "spring", stiffness: 300 }}
                    style={{ fontSize: 36, cursor: "default" }}
                >
                    {emoji}
                </motion.span>
            ))}
        </motion.div>
    );
}

// ── MAIN COMPONENT ─────────────────────────────────────────────────────────────
export default function ExercisePlayer({ ejercicios, grado, materia, bloque, nombreBloque, meses }: Props) {
    const [indice, setIndice] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string>("");
    const [estado, setEstado] = useState<EstadoRespuesta>("sin_responder");
    const [puntaje, setPuntaje] = useState(0);
    const [estrellas, setEstrellas] = useState(0);
    const [mostrarPaywall, setMostrarPaywall] = useState(false);
    const [completado, setCompletado] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [nicoBounce, setNicoBounce] = useState(false);
    const [mensajeIndex, setMensajeIndex] = useState(0);

    const V1_LIMIT = 3;
    const ejercicioActual = ejercicios[indice];
    const esUltimoGratis = indice === V1_LIMIT - 1;
    const esV2Bloqueado = indice >= V1_LIMIT;

    // Grados "pequeños" -> mostrar más ayudas visuales
    const esGradoPequeno = grado === "kinder" || grado === "primaria-1" || grado === "primaria-2";

    useEffect(() => {
        if (esV2Bloqueado) setMostrarPaywall(true);
    }, [indice, esV2Bloqueado]);

    // Rotar el mensaje de Nico mientras espera
    useEffect(() => {
        if (estado !== "sin_responder") return;
        const t = setInterval(() => setMensajeIndex(i => i + 1), 4000);
        return () => clearInterval(t);
    }, [estado]);

    function verificarRespuesta() {
        if (!ejercicioActual) return;
        const esCorrecta =
            respuestaSeleccionada.trim().toLowerCase() ===
            String(ejercicioActual.respuestaCorrecta).trim().toLowerCase();

        setEstado(esCorrecta ? "correcto" : "incorrecto");
        if (esCorrecta) {
            setPuntaje(p => p + 1);
            setEstrellas(e => Math.min(e + 1, ejercicios.slice(0, V1_LIMIT).length));
            setShowConfetti(true);
            setNicoBounce(true);
            setTimeout(() => { setShowConfetti(false); setNicoBounce(false); }, 2000);
        } else {
            setNicoBounce(false);
        }
        setMensajeIndex(i => i + 1);
    }

    function siguiente() {
        if (indice + 1 >= V1_LIMIT) {
            if (!completado) setCompletado(true);
            setMostrarPaywall(true);
        } else {
            setIndice(i => i + 1);
            setRespuestaSeleccionada("");
            setEstado("sin_responder");
            setShowConfetti(false);
            setNicoBounce(false);
            setMensajeIndex(i => i + 1);
        }
    }

    // ── PAYWALL ────────────────────────────────────────────────────────────────
    if (mostrarPaywall) {
        return (
            <div className="max-w-2xl mx-auto">
                <div className="ejercicio-card text-center mb-6">
                    <div className="flex justify-center mb-4">
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ fontSize: 72 }}
                        >
                            🚀
                        </motion.div>
                    </div>
                    <h2 className="font-fredoka text-3xl mb-2" style={{ color: "var(--navy)" }}>
                        ¡Nico está orgulloso de ti! 🌟
                    </h2>
                    <div className="flex justify-center gap-1 mb-3">
                        {Array.from({ length: V1_LIMIT }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: i * 0.2, type: "spring" }}
                            >
                                <Star
                                    size={32}
                                    fill={i < estrellas ? "#FFD60A" : "none"}
                                    stroke={i < estrellas ? "#FFD60A" : "#ccc"}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-gray-600 mb-2">
                        Respondiste <strong>{puntaje}/{V1_LIMIT}</strong> ejercicios correctamente
                    </p>
                    <p className="text-gray-500 text-sm">
                        📅 {nombreBloque} · {meses}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-3xl overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #0D1B2A, #1A2E45)",
                        border: "2px solid var(--yellow)",
                    }}
                >
                    <div className="p-8 text-center">
                        <div className="flex justify-center mb-4">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                style={{ background: "var(--yellow)" }}
                            >
                                <Lock size={28} style={{ color: "var(--navy)" }} />
                            </div>
                        </div>
                        <h3 className="font-fredoka text-3xl text-white mb-2">
                            ¡Hay {ejercicios.length - V1_LIMIT} ejercicios más!
                        </h3>
                        <p className="text-white/70 mb-6">
                            Desbloquea todos los ejercicios de <strong className="text-white">{nombreBloque}</strong> con Chispito V2.
                            Más tipos de preguntas, mayor dificultad, y PDFs imprimibles a color.
                        </p>

                        <div className="relative mb-6">
                            <div className="space-y-2 filter blur-[3px] pointer-events-none select-none opacity-60">
                                {ejercicios.slice(V1_LIMIT, V1_LIMIT + 3).map(ej => (
                                    <div key={ej.id} className="glass rounded-xl p-3 text-left">
                                        <p className="text-white/80 text-sm">{ej.pregunta}</p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ background: "linear-gradient(to top, rgba(13,27,42,0.95) 30%, transparent)" }}
                            >
                                <div className="text-center">
                                    <Lock size={32} style={{ color: "var(--yellow)" }} className="mx-auto mb-2" />
                                    <p className="text-white font-fredoka text-lg">
                                        {ejercicios.length - V1_LIMIT} ejercicios bloqueados
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link href="/planes" className="btn-primary text-lg inline-flex items-center gap-2 mb-4">
                            🔓 Desbloquear con V2 — $99/mes <ChevronRight size={20} />
                        </Link>

                        <p className="text-white/40 text-xs mb-4">
                            OXXO • Tarjeta • Transferencia • Cancela cuando quieras
                        </p>

                        <button
                            onClick={() => {
                                setIndice(0);
                                setEstado("sin_responder");
                                setRespuestaSeleccionada("");
                                setMostrarPaywall(false);
                                setPuntaje(0);
                                setEstrellas(0);
                                setCompletado(false);
                                setMensajeIndex(0);
                            }}
                            className="text-white/50 hover:text-white text-sm underline transition-colors"
                        >
                            Volver a intentar los ejercicios gratis
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    if (!ejercicioActual) return null;

    const respondido = estado !== "sin_responder";
    const mensajeNico = getMensaje(estado, mensajeIndex, grado);

    return (
        <div className="max-w-2xl mx-auto">
            {/* Confetti al acertar */}
            {showConfetti && <Confetti />}

            {/* Header de progreso */}
            <div className="flex items-center justify-between mb-6 gap-4">
                <div className="flex gap-1 flex-1">
                    {Array.from({ length: V1_LIMIT }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-2 flex-1 rounded-full"
                            animate={{
                                background: i < indice
                                    ? "var(--mint)"
                                    : i === indice
                                        ? "#FFD60A"
                                        : "rgba(255,255,255,0.15)",
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-1 text-white/60 text-sm shrink-0">
                    <Star size={16} fill={puntaje > 0 ? "#FFD60A" : "none"} stroke="#FFD60A" />
                    <span>{puntaje}/{V1_LIMIT}</span>
                </div>
            </div>

            {/* NICO + Burbuja de diálogo */}
            <div className="flex items-end gap-4 mb-6">
                <NicoMascot estado={estado} bounce={nicoBounce} grado={grado} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={mensajeNico}
                        initial={{ opacity: 0, scale: 0.8, x: -10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="glass rounded-2xl rounded-bl-none p-4 flex-1 relative"
                        style={{
                            border: estado === "correcto"
                                ? "2px solid #4ECDC4"
                                : estado === "incorrecto"
                                    ? "2px solid #FF6B6B"
                                    : "2px solid rgba(255,214,10,0.3)",
                        }}
                    >
                        <p className="text-white font-fredoka text-lg leading-tight">{mensajeNico}</p>
                        {/* Puntaje tracking en el bubble */}
                        {puntaje > 0 && estado === "correcto" && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-3 -right-3 bg-yellow-400 text-navy font-fredoka text-xs px-2 py-1 rounded-full"
                            >
                                +1 ⭐
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Tarjeta de ejercicio */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={ejercicioActual.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                    className="ejercicio-card mb-4"
                    style={{
                        borderTop: estado === "correcto"
                            ? "4px solid #4ECDC4"
                            : estado === "incorrecto"
                                ? "4px solid #FF6B6B"
                                : "4px solid var(--yellow)",
                    }}
                >
                    {/* Tipo de ejercicio badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <span
                            className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                            style={{ background: "#EFF6FF", color: "#3B82F6" }}
                        >
                            {ejercicioActual.tipo === "multiple_choice" && "Selección múltiple"}
                            {ejercicioActual.tipo === "fill_blank" && "Completar"}
                            {ejercicioActual.tipo === "true_false" && "¿Verdadero o falso?"}
                            {ejercicioActual.tipo === "visual_count" && "🔢 Cuenta los objetos"}
                        </span>
                        <span className="text-xs text-gray-400">
                            {indice + 1} de {V1_LIMIT} (gratis)
                        </span>
                    </div>

                    {/* Pregunta */}
                    <p
                        className="font-fredoka text-gray-800 mb-5 leading-snug"
                        style={{ fontSize: esGradoPequeno ? "1.6rem" : "1.4rem" }}
                    >
                        {ejercicioActual.pregunta}
                    </p>

                    {/* Visual Grid para conteo (solo en ejercicios visuales de grados pequeños) */}
                    {ejercicioActual.tipo === "visual_count" && esGradoPequeno && (
                        <VisualCountGrid pregunta={ejercicioActual.pregunta} />
                    )}

                    {/* Opciones MULTIPLE CHOICE / VISUAL COUNT */}
                    {(ejercicioActual.tipo === "multiple_choice" || ejercicioActual.tipo === "visual_count") && (
                        <div className="grid grid-cols-2 gap-3">
                            {ejercicioActual.opciones?.map((op, opIdx) => {
                                const esEsta = respuestaSeleccionada === op;
                                const esCorrecta = respondido && op === ejercicioActual.respuestaCorrecta;
                                const esIncorrecta = respondido && esEsta && op !== ejercicioActual.respuestaCorrecta;

                                return (
                                    <motion.button
                                        key={op}
                                        whileHover={!respondido ? { scale: 1.04, y: -2 } : {}}
                                        whileTap={!respondido ? { scale: 0.96 } : {}}
                                        animate={
                                            esCorrecta
                                                ? { scale: [1, 1.08, 1], transition: { duration: 0.4 } }
                                                : {}
                                        }
                                        onClick={() => !respondido && setRespuestaSeleccionada(op)}
                                        disabled={respondido}
                                        className="p-4 rounded-2xl font-fredoka transition-all duration-200 border-2 text-left flex items-center gap-2"
                                        style={{
                                            fontSize: esGradoPequeno ? "1.4rem" : "1.2rem",
                                            borderColor: esCorrecta ? "#4ECDC4" : esIncorrecta ? "#FF6B6B" : esEsta ? "#FFD60A" : "#E5E7EB",
                                            background: esCorrecta ? "#F0FDFA" : esIncorrecta ? "#FFF1F2" : esEsta ? "#FFFDE7" : "white",
                                            color: "#1a1a1a",
                                            boxShadow: esEsta && !respondido ? "0 4px 12px rgba(255,214,10,0.4)" : "none",
                                        }}
                                    >
                                        {/* Letra de opción */}
                                        <span
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                                            style={{
                                                background: esCorrecta ? "#4ECDC4" : esIncorrecta ? "#FF6B6B" : esEsta ? "#FFD60A" : "#E5E7EB",
                                                color: esCorrecta || esIncorrecta || esEsta ? "white" : "#666",
                                            }}
                                        >
                                            {["A", "B", "C", "D"][opIdx]}
                                        </span>
                                        {esCorrecta && <CheckCircle className="text-teal-500 shrink-0" size={20} />}
                                        {esIncorrecta && <XCircle className="text-red-400 shrink-0" size={20} />}
                                        {op}
                                    </motion.button>
                                );
                            })}
                        </div>
                    )}

                    {/* FILL BLANK */}
                    {ejercicioActual.tipo === "fill_blank" && (
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                value={respuestaSeleccionada}
                                onChange={e => !respondido && setRespuestaSeleccionada(e.target.value)}
                                onKeyDown={e => e.key === "Enter" && !respondido && verificarRespuesta()}
                                placeholder="Escribe tu respuesta aquí..."
                                disabled={respondido}
                                className="w-full p-4 rounded-2xl border-2 font-fredoka text-center outline-none transition-all"
                                style={{
                                    fontSize: esGradoPequeno ? "1.6rem" : "1.4rem",
                                    borderColor: estado === "correcto" ? "#4ECDC4" : estado === "incorrecto" ? "#FF6B6B" : "#E5E7EB",
                                }}
                                autoFocus
                            />
                        </div>
                    )}

                    {/* TRUE/FALSE */}
                    {ejercicioActual.tipo === "true_false" && (
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { val: "true", label: "✅", texto: "Verdadero" },
                                { val: "false", label: "❌", texto: "Falso" },
                            ].map(({ val, label, texto }) => {
                                const esEsta = respuestaSeleccionada === val;
                                const esCorrecta = respondido && val === String(ejercicioActual.respuestaCorrecta);
                                const esIncorrecta = respondido && esEsta && val !== String(ejercicioActual.respuestaCorrecta);

                                return (
                                    <motion.button
                                        key={val}
                                        whileHover={!respondido ? { scale: 1.05, y: -2 } : {}}
                                        whileTap={!respondido ? { scale: 0.95 } : {}}
                                        onClick={() => !respondido && setRespuestaSeleccionada(val)}
                                        disabled={respondido}
                                        className="p-5 rounded-2xl font-fredoka border-2 transition-all flex flex-col items-center gap-1"
                                        style={{
                                            fontSize: esGradoPequeno ? "2rem" : "1.5rem",
                                            borderColor: esCorrecta ? "#4ECDC4" : esIncorrecta ? "#FF6B6B" : esEsta ? "#FFD60A" : "#E5E7EB",
                                            background: esCorrecta ? "#F0FDFA" : esIncorrecta ? "#FFF1F2" : esEsta ? "#FFFDE7" : "white",
                                            boxShadow: esEsta && !respondido ? "0 4px 12px rgba(255,214,10,0.4)" : "none",
                                        }}
                                    >
                                        <span>{label}</span>
                                        <span style={{ fontSize: "1rem" }}>{texto}</span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    )}

                    {/* Explicación */}
                    <AnimatePresence>
                        {respondido && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                                className="p-4 rounded-2xl"
                                style={{
                                    background: estado === "correcto" ? "#F0FDFA" : "#FFF1F2",
                                    borderLeft: `4px solid ${estado === "correcto" ? "#4ECDC4" : "#FF6B6B"}`,
                                }}
                            >
                                <p className="text-sm font-bold mb-1" style={{ color: estado === "correcto" ? "#0F766E" : "#B91C1C" }}>
                                    {estado === "correcto" ? "✅ ¡Correcto! 🎉" : "❌ Respuesta incorrecta"}
                                </p>
                                <p className="text-gray-700 text-sm">{ejercicioActual.explicacion}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>

            {/* Botones de acción */}
            <div className="flex gap-3">
                {!respondido ? (
                    <motion.button
                        whileHover={respuestaSeleccionada ? { scale: 1.02 } : {}}
                        whileTap={respuestaSeleccionada ? { scale: 0.98 } : {}}
                        onClick={verificarRespuesta}
                        disabled={!respuestaSeleccionada}
                        className="btn-primary flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ fontSize: esGradoPequeno ? "1.1rem" : "1rem" }}
                    >
                        Verificar respuesta ✓
                    </motion.button>
                ) : (
                    <motion.button
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={siguiente}
                        className="btn-primary flex-1 justify-center"
                        style={{ fontSize: esGradoPequeno ? "1.1rem" : "1rem" }}
                    >
                        {esUltimoGratis ? "Ver resultado y desbloquear más →" : "Siguiente ejercicio →"}
                    </motion.button>
                )}
            </div>

            {/* Nota gratis */}
            <p className="text-center text-white/30 text-xs mt-4">
                🆓 Ejercicio {indice + 1} de {V1_LIMIT} gratis · Desbloquea {ejercicios.length - V1_LIMIT} más con{" "}
                <Link href="/planes" className="underline hover:text-white/60">
                    Chispito V2
                </Link>
            </p>
        </div>
    );
}
