"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Lock, ChevronRight } from "lucide-react";

// ─── Tipos ───────────────────────────────────────────
type Ejercicio = {
    id: string;
    tipo: "multiple_choice" | "true_false" | "fill_blank" | "visual_count";
    pregunta: string;
    visual?: string;
    ejemplo?: string;          // hint/ejemplo para P3-4
    datoClave?: string;        // concepto clave para P5-6
    formula?: string;          // fórmula para P5-6
    opciones?: string[];
    respuestaCorrecta: string;
    explicacion: string;
    tema?: string;
};

// ─── Tier por grado ──────────────────────────────────
export function getTier(grado: string): 1 | 2 | 3 {
    if (grado === "primaria-1" || grado === "primaria-2") return 1;
    if (grado === "primaria-3" || grado === "primaria-4") return 2;
    return 3; // primaria-5, primaria-6
}

// ─── Temas visuales por tier ─────────────────────────
const TIER_THEME = {
    1: {
        name: "Exploradores",
        bg: "linear-gradient(135deg, #FFF8E7 0%, #FEF3C7 50%, #FFF8E7 100%)",
        cardBg: "white",
        accent: "#F59E0B",
        accentLight: "#FEF9EC",
        btnRadius: "1.5rem",
        fontSize: "1.35rem",
        mascot: "🦊",
        celebraciones: [
            { emoji: "🌟", texto: "¡Genial!", color: "#F59E0B", bg: "#FFFBEB" },
            { emoji: "🎯", texto: "¡Exacto!", color: "#10B981", bg: "#F0FDF4" },
            { emoji: "🔥", texto: "¡Correcto!", color: "#EF4444", bg: "#FFF5F5" },
            { emoji: "🏅", texto: "¡Muy bien!", color: "#6366F1", bg: "#EEF2FF" },
        ],
    },
    2: {
        name: "Aventureros",
        bg: "linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 50%, #F0FDF4 100%)",
        cardBg: "white",
        accent: "#10B981",
        accentLight: "#F0FDF4",
        btnRadius: "0.875rem",
        fontSize: "1.15rem",
        mascot: "🦅",
        celebraciones: [
            { emoji: "✅", texto: "¡Correcto!", color: "#10B981", bg: "#F0FDF4" },
            { emoji: "💪", texto: "¡Vas muy bien!", color: "#06B6D4", bg: "#F0FDFA" },
            { emoji: "🎖️", texto: "¡Excelente!", color: "#8B5CF6", bg: "#F5F3FF" },
            { emoji: "⚡", texto: "¡Perfecto!", color: "#F59E0B", bg: "#FFFBEB" },
        ],
    },
    3: {
        name: "Maestros",
        bg: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 50%, #F5F3FF 100%)",
        cardBg: "white",
        accent: "#7C3AED",
        accentLight: "#F5F3FF",
        btnRadius: "0.625rem",
        fontSize: "1rem",
        mascot: "🦉",
        celebraciones: [
            { emoji: "✓", texto: "Correcto", color: "#7C3AED", bg: "#F5F3FF" },
            { emoji: "💡", texto: "¡Excelente razonamiento!", color: "#059669", bg: "#ECFDF5" },
            { emoji: "🏆", texto: "¡Dominas el tema!", color: "#B45309", bg: "#FFFBEB" },
            { emoji: "🎯", texto: "¡Precisión perfecta!", color: "#1D4ED8", bg: "#EFF6FF" },
        ],
    },
} as const;

// ─── Confeti solo para Tier 1 ────────────────────────
function Confeti({ activo }: { activo: boolean }) {
    if (!activo) return null;
    const items = ["⭐", "🌟", "🎉", "🎈", "💛", "✨"];
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
            {Array.from({ length: 18 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: -50, x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 500), opacity: 1 }}
                    animate={{ y: 900, opacity: 0, rotate: Math.random() * 540 }}
                    transition={{ duration: 1.8 + Math.random() * 1.2, delay: Math.random() * 0.5, ease: "linear" }}
                    className="absolute text-3xl select-none"
                >
                    {items[Math.floor(Math.random() * items.length)]}
                </motion.div>
            ))}
        </div>
    );
}

// ─── Botón de opción ─────────────────────────────────
function OpcionBtn({ texto, onClick, estado, color, radius, fontSize }: {
    texto: string; onClick: () => void;
    estado: "idle" | "correcto" | "incorrecto";
    color: string; radius: string; fontSize: string;
}) {
    const bg = estado === "correcto" ? "#22C55E" : estado === "incorrecto" ? "#EF4444" : "white";
    const icono = estado === "correcto" ? "✓ " : estado === "incorrecto" ? "✗ " : "";
    return (
        <motion.button
            whileHover={estado === "idle" ? { scale: 1.03, y: -1 } : {}}
            whileTap={estado === "idle" ? { scale: 0.97 } : {}}
            animate={
                estado === "correcto" ? { scale: [1, 1.08, 1] } :
                    estado === "incorrecto" ? { x: [-4, 4, -4, 4, 0] } : {}
            }
            transition={{ duration: 0.3 }}
            disabled={estado !== "idle"}
            onClick={onClick}
            className="w-full text-left px-4 py-3 font-semibold border-2 transition-colors"
            style={{
                borderRadius: radius,
                background: estado === "idle" ? "white" : bg,
                borderColor: estado === "idle" ? color + "50" : bg,
                color: estado === "idle" ? "#1E293B" : "white",
                fontSize,
                boxShadow: estado === "idle" ? `0 2px 12px ${color}20` : "none",
            }}
        >
            {icono}{texto}
        </motion.button>
    );
}

// ─── Caja de ejemplo (Tier 2) ─────────────────────────
function EjemploBox({ ejemplo, color }: { ejemplo: string; color: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-4 rounded-xl border-2 overflow-hidden" style={{ borderColor: color + "40" }}>
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm font-bold text-left"
                style={{ background: color + "12", color }}
            >
                <span>💡 Ver ejemplo</span>
                <span className="ml-auto">{open ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-4 py-3 text-sm text-gray-700 whitespace-pre-wrap"
                        style={{ background: color + "08" }}
                    >
                        {ejemplo}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ─── Caja de dato clave (Tier 3) ─────────────────────
function DatoClaveBox({ dato, formula, color }: { dato: string; formula?: string; color: string }) {
    return (
        <div className="mb-4 rounded-lg border-l-4 p-3" style={{ borderColor: color, background: color + "0D" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color }}>📖 Dato clave</p>
            <p className="text-sm text-gray-700">{dato}</p>
            {formula && (
                <div className="mt-2 px-3 py-1.5 rounded-md font-mono text-sm font-bold text-center"
                    style={{ background: color + "18", color }}>
                    {formula}
                </div>
            )}
        </div>
    );
}

// ─── Racha (Tier 2 y 3) ──────────────────────────────
function RachaDisplay({ racha, color }: { racha: number; color: string }) {
    if (racha < 2) return null;
    return (
        <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full"
            style={{ background: color + "20", color }}
        >
            🔥 Racha ×{racha}
        </motion.div>
    );
}

// ─── Props ───────────────────────────────────────────
interface Props {
    ejercicios: (Ejercicio & Record<string, unknown>)[];
    grado: string;
    materia: string;
    bloque: number;
    nombreBloque: string;
    meses: string;
    color: string;
    emoji: string;
}

// ═══════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL
// ═══════════════════════════════════════════════════════
export default function PrimariaExercisePlayer({ ejercicios, grado, materia, bloque, nombreBloque, meses, color, emoji }: Props) {
    const tier = getTier(grado);
    const theme = TIER_THEME[tier];
    const accentColor = color || theme.accent; // usa color de materia o theme default

    const FREE_LIMIT = 3;
    const lista = ejercicios.slice(0, tier === 1 ? 10 : tier === 2 ? 12 : 15);
    const [indice, setIndice] = useState(0);
    const [estadoOps, setEstadoOps] = useState<Record<string, "idle" | "correcto" | "incorrecto">>({});
    const [respondido, setRespondido] = useState(false);
    const [correcto, setCorrecto] = useState<boolean | null>(null);
    const [puntaje, setPuntaje] = useState(0);
    const [racha, setRacha] = useState(0);
    const [confeti, setConfeti] = useState(false);
    const [feedIdx, setFeedIdx] = useState(0);
    const [inputVal, setInputVal] = useState("");
    const [terminado, setTerminado] = useState(false);
    const [mostrarPaywall, setMostrarPaywall] = useState(false);

    const ejercicio = lista[indice] as Ejercicio;
    const esUltimo = indice >= lista.length - 1;
    const esUltimoGratis = indice >= FREE_LIMIT - 1;

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

    const responder = useCallback((resp: string) => {
        if (respondido || !ejercicio) return;
        const ok = resp.trim().toLowerCase() === ejercicio.respuestaCorrecta.trim().toLowerCase();
        setRespondido(true);
        setCorrecto(ok);
        setFeedIdx(Math.floor(Math.random() * theme.celebraciones.length));

        const nuevoEstado = { ...estadoOps };
        const claves = ejercicio.opciones ?? (ejercicio.tipo === "true_false" ? ["true", "false"] : []);
        claves.forEach(o => {
            if (o === ejercicio.respuestaCorrecta) nuevoEstado[o] = "correcto";
            else if (o === resp && !ok) nuevoEstado[o] = "incorrecto";
        });
        setEstadoOps(nuevoEstado);

        if (ok) {
            setPuntaje(p => p + 1);
            setRacha(r => r + 1);
            if (tier === 1) { setConfeti(true); setTimeout(() => setConfeti(false), 2000); }
        } else {
            setRacha(0);
        }
    }, [respondido, ejercicio, estadoOps, tier, theme]);

    if (terminado || !ejercicio) {
        const total = FREE_LIMIT;
        const pct = Math.round((puntaje / total) * 100);
        const msgs = [
            pct >= 90 ? "¡Maestro! Dominas el tema" :
                pct >= 70 ? "¡Muy bien! Sigue así" :
                    "¡Sigue practicando! Puedes mejorar"
        ];
        return (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl p-8 text-center"
                style={{ background: pct >= 70 ? "#F0FDF4" : "#FFF7ED", border: `3px solid ${pct >= 70 ? "#22C55E" : "#F59E0B"}` }}>
                <div className="text-6xl mb-3">{theme.mascot}</div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: pct >= 70 ? "#15803D" : "#92400E" }}>{msgs[0]}</h2>
                <div className="text-4xl font-bold my-3" style={{ color: accentColor }}>{puntaje}/{total}</div>
                <div className="text-sm text-gray-500 mb-6">{pct}% correcto · Bloque {bloque} · {meses}</div>
                <button onClick={() => { setIndice(0); setTerminado(false); setPuntaje(0); setRacha(0); setMostrarPaywall(false); }}
                    className="px-8 py-3 rounded-xl font-bold text-white"
                    style={{ background: accentColor }}>
                    🔄 Intentar de nuevo
                </button>
            </motion.div>
        );
    }

    // ── PAYWALL ──────────────────────────────────────────────
    if (mostrarPaywall) {
        return (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl p-8 text-center"
                style={{ background: "white", border: `3px solid ${accentColor}40`, boxShadow: `0 8px 32px ${accentColor}20` }}>
                <div className="text-6xl mb-3">{theme.mascot}</div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: "#0F172A" }}>
                    ¡Completaste los ejercicios gratis!
                </h2>
                <p className="text-gray-500 mb-2">
                    Respondiste <strong>{puntaje}/{FREE_LIMIT}</strong> correctamente
                </p>
                <p className="text-lg font-bold mb-6" style={{ color: accentColor }}>
                    ¡Hay {lista.length - FREE_LIMIT} ejercicios más en este bloque!
                </p>

                {/* Preview borrosa de ejercicios bloqueados */}
                <div className="relative mb-6">
                    <div className="space-y-2 filter blur-[3px] pointer-events-none select-none opacity-50">
                        {lista.slice(FREE_LIMIT, FREE_LIMIT + 3).map(ej => (
                            <div key={ej.id} className="rounded-xl p-3 text-left" style={{ background: `${accentColor}10`, border: `1px solid ${accentColor}20` }}>
                                <p className="text-gray-700 text-sm truncate">{ej.pregunta}</p>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "linear-gradient(to top, white 30%, transparent)" }}>
                        <div className="text-center">
                            <Lock size={28} style={{ color: accentColor }} className="mx-auto mb-1" />
                            <p className="font-bold text-sm" style={{ color: accentColor }}>{lista.length - FREE_LIMIT} ejercicios bloqueados</p>
                        </div>
                    </div>
                </div>

                <Link href="/planes"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-lg transition-all hover:scale-105"
                    style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}CC)` }}>
                    🔓 Desbloquear con V2 — $99/mes <ChevronRight size={20} />
                </Link>
                <p className="text-gray-400 text-xs mt-3">OXXO · Tarjeta · Transferencia · Cancela cuando quieras</p>

                <button onClick={() => { setIndice(0); setMostrarPaywall(false); setPuntaje(0); setRacha(0); }}
                    className="mt-4 text-gray-400 hover:text-gray-600 text-sm underline transition-colors">
                    Volver a intentar los ejercicios gratis
                </button>
            </motion.div>
        );
    }

    const cel = theme.celebraciones[feedIdx % theme.celebraciones.length];

    return (
        <>
            {tier === 1 && <Confeti activo={confeti} />}

            {/* ─── Barra de progreso ─── */}
            <div className="mb-5">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-xs font-bold">{indice + 1} / {lista.length}</span>
                    <div className="flex items-center gap-3">
                        <RachaDisplay racha={racha} color={accentColor} />
                        <span className="font-bold text-xs" style={{ color: accentColor }}>
                            ⭐ {puntaje} pts
                        </span>
                    </div>
                </div>
                <div className="flex gap-1">
                    {lista.map((_, i) => (
                        <motion.div key={i} className="h-2 rounded-full flex-1"
                            animate={{ backgroundColor: i < indice ? "#22C55E" : i === indice ? accentColor : "rgba(0,0,0,0.08)" }}
                        />
                    ))}
                </div>
            </div>

            {/* ─── Tarjeta principal ─── */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={ejercicio.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.22 }}
                    className="rounded-2xl p-5 md:p-6 mb-4"
                    style={{ background: "white", boxShadow: `0 4px 24px ${accentColor}20`, border: `2px solid ${accentColor}25` }}
                >
                    {/* Tier 1: emoji visual grande */}
                    {tier === 1 && ejercicio.visual && (
                        <div className="text-center mb-3 text-7xl leading-none select-none">
                            {ejercicio.visual}
                        </div>
                    )}

                    {/* Tier 2: caja de ejemplo colapsable */}
                    {tier === 2 && ejercicio.ejemplo && (
                        <EjemploBox ejemplo={ejercicio.ejemplo} color={accentColor} />
                    )}

                    {/* Tier 3: dato clave + fórmula */}
                    {tier === 3 && ejercicio.datoClave && (
                        <DatoClaveBox dato={ejercicio.datoClave} formula={ejercicio.formula} color={accentColor} />
                    )}

                    {/* Pregunta */}
                    <p className="font-bold mb-4 leading-snug" style={{
                        fontSize: theme.fontSize,
                        color: "#0F172A",
                        textAlign: tier === 1 ? "center" : "left",
                    }}>
                        {tier === 1 && <span className="mr-2">{emoji}</span>}
                        {ejercicio.pregunta}
                    </p>

                    {/* Opciones */}
                    {ejercicio.opciones && (
                        <div className={tier === 1 ? "grid grid-cols-2 gap-3" : "flex flex-col gap-2"}>
                            {ejercicio.opciones.map(op => (
                                <OpcionBtn
                                    key={op} texto={op}
                                    onClick={() => responder(op)}
                                    estado={estadoOps[op] || "idle"}
                                    color={accentColor}
                                    radius={theme.btnRadius}
                                    fontSize={theme.fontSize}
                                />
                            ))}
                        </div>
                    )}

                    {/* True / False — cuando no vienen opciones en el JSON */}
                    {ejercicio.tipo === "true_false" && !ejercicio.opciones && (
                        <div className={tier === 1 ? "grid grid-cols-2 gap-3" : "flex flex-col gap-2"}>
                            {[
                                { val: "true", label: tier === 1 ? "✅ Verdadero" : "Verdadero" },
                                { val: "false", label: tier === 1 ? "❌ Falso" : "Falso" },
                            ].map(({ val, label }) => {
                                const estaRespuesta =
                                    respondido && val === ejercicio.respuestaCorrecta
                                        ? "correcto"
                                        : respondido && estadoOps[val] === "incorrecto"
                                            ? "incorrecto"
                                            : estadoOps[val] || "idle";
                                return (
                                    <OpcionBtn
                                        key={val}
                                        texto={label}
                                        onClick={() => {
                                            if (!respondido) {
                                                // marca el estado para feedback visual
                                                const next = { ...estadoOps };
                                                next["true"] = "idle";
                                                next["false"] = "idle";
                                                setEstadoOps(next);
                                                responder(val);
                                            }
                                        }}
                                        estado={estaRespuesta}
                                        color={accentColor}
                                        radius={theme.btnRadius}
                                        fontSize={theme.fontSize}
                                    />
                                );
                            })}
                        </div>
                    )}

                    {/* Fill blank */}
                    {ejercicio.tipo === "fill_blank" && !ejercicio.opciones && (
                        <div className="flex gap-2 mt-2">
                            <input
                                type="text" value={inputVal}
                                onChange={e => setInputVal(e.target.value)}
                                disabled={respondido}
                                placeholder="Tu respuesta..."
                                className="flex-1 px-4 py-3 border-2 outline-none font-semibold"
                                style={{ borderRadius: theme.btnRadius, borderColor: accentColor + "60", fontSize: theme.fontSize }}
                                onKeyDown={e => { if (e.key === "Enter" && inputVal.trim()) responder(inputVal); }}
                            />
                            {!respondido && (
                                <button onClick={() => responder(inputVal)}
                                    disabled={!inputVal.trim()}
                                    className="px-5 py-3 font-bold text-white"
                                    style={{ borderRadius: theme.btnRadius, background: inputVal.trim() ? accentColor : "#94A3B8" }}>
                                    OK
                                </button>
                            )}
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* ─── Feedback ─── */}
            <AnimatePresence>
                {respondido && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="rounded-xl p-4 mb-4"
                        style={{ background: correcto ? cel.bg : "#FFF7ED", border: `2px solid ${correcto ? cel.color : "#F59E0B"}` }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <span style={{ fontSize: tier === 1 ? "1.8rem" : "1.3rem" }}>{correcto ? cel.emoji : "💡"}</span>
                            <span className="font-bold text-sm" style={{ color: correcto ? cel.color : "#92400E" }}>
                                {correcto ? cel.texto : "La respuesta correcta es: " + ejercicio.respuestaCorrecta}
                            </span>
                        </div>
                        <p className="text-xs text-gray-500 ml-1">{ejercicio.explicacion}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ─── Botón siguiente ─── */}
            {respondido && (
                <motion.button
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        if (esUltimoGratis) {
                            setMostrarPaywall(true);
                        } else if (esUltimo) {
                            setTerminado(true);
                        } else {
                            setIndice(i => i + 1);
                        }
                    }}
                    className="w-full py-4 font-bold text-white text-lg"
                    style={{ borderRadius: theme.btnRadius, background: `linear-gradient(135deg, ${accentColor}, ${accentColor}CC)` }}
                >
                    {esUltimoGratis ? "🔒 Ver más ejercicios" : esUltimo ? `${theme.mascot} Ver resultado` : "Siguiente →"}
                </motion.button>
            )}
        </>
    );
}
