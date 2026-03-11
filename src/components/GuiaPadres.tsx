"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GuiaPapaData = {
    intro: string;
    comoExplicar: string[];
    truco: string;
    error_comun: string;
    actividad_casa: string;
};

export default function GuiaPadres({ data, color }: { data: GuiaPapaData; color?: string }) {
    const [open, setOpen] = useState(false);
    const accent = color || "#F59E0B";

    return (
        <div style={{
            margin: "1.5rem auto", maxWidth: "800px",
            borderRadius: "1rem", overflow: "hidden",
            border: `1px solid ${accent}30`,
            background: "rgba(255,255,255,0.03)",
        }}>
            {/* Header — always visible */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    width: "100%", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1rem 1.25rem", border: "none",
                    background: `linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%)`,
                    color: "#F1F5F9", fontFamily: "var(--font-fredoka)",
                    fontSize: "1.1rem", fontWeight: 600,
                }}
            >
                <span>👨‍👩‍👧 Guía para Papás</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ fontSize: "1.2rem" }}
                >
                    ▼
                </motion.span>
            </button>

            {/* Content — collapsible */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                    >
                        <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {/* Intro */}
                            <div style={{
                                background: `${accent}10`, borderRadius: "0.75rem",
                                padding: "1rem", borderLeft: `4px solid ${accent}`,
                            }}>
                                <div style={{ fontSize: "0.7rem", color: accent, textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem" }}>
                                    📘 ¿De qué trata este bloque?
                                </div>
                                <p style={{ color: "#CBD5E1", margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>
                                    {data.intro}
                                </p>
                            </div>

                            {/* Cómo explicar */}
                            <div style={{
                                background: "rgba(34, 197, 94, 0.08)", borderRadius: "0.75rem",
                                padding: "1rem", borderLeft: "4px solid #22C55E",
                            }}>
                                <div style={{ fontSize: "0.7rem", color: "#22C55E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.5rem" }}>
                                    💡 Cómo explicárselo a tu hijo/a
                                </div>
                                <ul style={{ margin: 0, paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                    {data.comoExplicar.map((tip, i) => (
                                        <li key={i} style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.5 }}>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Row: Truco + Error común */}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                {/* Truco */}
                                <div style={{
                                    background: "rgba(99, 102, 241, 0.08)", borderRadius: "0.75rem",
                                    padding: "0.85rem", borderLeft: "4px solid #6366F1",
                                }}>
                                    <div style={{ fontSize: "0.65rem", color: "#818CF8", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem" }}>
                                        🎯 Truco
                                    </div>
                                    <p style={{ color: "#CBD5E1", margin: 0, fontSize: "0.85rem", lineHeight: 1.5 }}>
                                        {data.truco}
                                    </p>
                                </div>

                                {/* Error común */}
                                <div style={{
                                    background: "rgba(239, 68, 68, 0.08)", borderRadius: "0.75rem",
                                    padding: "0.85rem", borderLeft: "4px solid #EF4444",
                                }}>
                                    <div style={{ fontSize: "0.65rem", color: "#F87171", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem" }}>
                                        ⚠️ Error Común
                                    </div>
                                    <p style={{ color: "#CBD5E1", margin: 0, fontSize: "0.85rem", lineHeight: 1.5 }}>
                                        {data.error_comun}
                                    </p>
                                </div>
                            </div>

                            {/* Actividad en casa */}
                            <div style={{
                                background: "rgba(251, 191, 36, 0.08)", borderRadius: "0.75rem",
                                padding: "1rem", borderLeft: `4px solid #FBBF24`,
                                border: "1px dashed rgba(251, 191, 36, 0.3)",
                            }}>
                                <div style={{ fontSize: "0.7rem", color: "#FBBF24", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.3rem" }}>
                                    🏠 Actividad en Casa
                                </div>
                                <p style={{ color: "#CBD5E1", margin: 0, fontSize: "0.9rem", lineHeight: 1.6 }}>
                                    {data.actividad_casa}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
