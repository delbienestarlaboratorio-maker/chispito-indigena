"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * Compañero Chispito — personaje animado que acompaña al niño en los ejercicios.
 * Se muestra al lado de la pregunta (desktop) o arriba (mobile).
 * Reacciona al estado del ejercicio: idle, correcto, incorrecto.
 */

export type CompanionState = "idle" | "thinking" | "correct" | "wrong" | "celebrating";

interface Props {
    state: CompanionState;
    characterName?: string;
    showBubble?: boolean;
    bubbleText?: string;
}

// Personaje por defecto para preescolar
const CHARACTER = {
    name: "Nico",
    idle: "/personajes/nico_kinder.png",
    correct: "/personajes/nico_feliz_correcto.png",
    wrong: "/personajes/nico_pensando.png",
    celebrating: "/personajes/nico_feliz_correcto.png",
    emoji: "🚀",
};

// Frases aleatorias por estado
const FRASES: Record<CompanionState, string[]> = {
    idle: [
        "¡Vamos a jugar! 🎮",
        "¿Cuál será la respuesta? 🤔",
        "¡Tú puedes! 💪",
        "¡Piensa bien! 🧠",
        "¡Esta es divertida! 🌟",
    ],
    thinking: [
        "Mmm... ¡piénsalo bien! 🤔",
        "¡Tómate tu tiempo! ⏳",
    ],
    correct: [
        "¡Síííí! ¡Lo lograste! 🎉",
        "¡Eres genial! ⭐",
        "¡Muy bien hecho! 🏆",
        "¡Increíble! ¡Sigue así! 🚀",
        "¡Súper campeón! 🦁",
        "¡Bravo, bravo! 👏",
    ],
    wrong: [
        "¡Casi! Intenta otra vez 💪",
        "¡No te preocupes! Tú puedes 😊",
        "¡Sigue intentando! 🌈",
        "¡A la próxima lo logras! ✨",
    ],
    celebrating: [
        "¡Terminaste! ¡Eres increíble! 🎊",
        "¡Fiesta de estrellas! ⭐🌟✨",
    ],
};

function getRandomPhrase(state: CompanionState): string {
    const phrases = FRASES[state];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

function getCharacterImage(state: CompanionState): string {
    switch (state) {
        case "correct":
        case "celebrating":
            return CHARACTER.correct;
        case "wrong":
            return CHARACTER.wrong;
        default:
            return CHARACTER.idle;
    }
}

// Animaciones por estado
const stateAnimations: Record<CompanionState, { y?: number[]; x?: number[]; rotate?: number[]; scale?: number[] }> = {
    idle: { y: [0, -5, 0] },
    thinking: { rotate: [-3, 3, -3] },
    correct: { y: [0, -20, 0], scale: [1, 1.15, 1] },
    wrong: { x: [-3, 3, -3, 0] },
    celebrating: { y: [0, -25, 0], rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] },
};

const stateTransitions = {
    idle: { duration: 2, repeat: Infinity, ease: "easeInOut" as const },
    thinking: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const },
    correct: { duration: 0.5, ease: "easeOut" as const },
    wrong: { duration: 0.4, ease: "easeOut" as const },
    celebrating: { duration: 0.6, ease: "easeOut" as const },
};

export default function ChispitoCompanion({ state, showBubble = true, bubbleText }: Props) {
    const phrase = bubbleText || getRandomPhrase(state);
    const imageSrc = getCharacterImage(state);

    return (
        <div className="flex flex-col items-center gap-2 select-none" style={{ minWidth: 120 }}>
            {/* Globo de diálogo */}
            <AnimatePresence mode="wait">
                {showBubble && (
                    <motion.div
                        key={phrase}
                        initial={{ opacity: 0, y: 8, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -5, scale: 0.9 }}
                        transition={{ duration: 0.25 }}
                        className="relative px-3 py-2 rounded-2xl text-center"
                        style={{
                            background: "white",
                            border: "2px solid #E2E8F0",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            maxWidth: 180,
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            lineHeight: 1.3,
                            color: "#334155",
                        }}
                    >
                        {phrase}
                        {/* Flecha del globo */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                                bottom: -8,
                                width: 0,
                                height: 0,
                                borderLeft: "8px solid transparent",
                                borderRight: "8px solid transparent",
                                borderTop: "8px solid white",
                                filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.06))",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Personaje Animado */}
            <motion.div
                animate={stateAnimations[state]}
                transition={stateTransitions[state]}
                className="relative"
                style={{ width: 110, height: 110 }}
            >
                <Image
                    src={imageSrc}
                    alt={`${CHARACTER.name} — tu compañero Chispito`}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="110px"
                    priority
                />

                {/* Partículas de estrellas al acertar */}
                {(state === "correct" || state === "celebrating") && (
                    <>
                        {[...Array(5)].map((_, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
                                animate={{
                                    opacity: 0,
                                    scale: 1.5,
                                    x: (Math.random() - 0.5) * 80,
                                    y: -40 - Math.random() * 40,
                                }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="absolute text-xl pointer-events-none"
                                style={{ left: "50%", top: "20%" }}
                            >
                                {["⭐", "✨", "🌟", "💫", "❤️"][i]}
                            </motion.span>
                        ))}
                    </>
                )}
            </motion.div>
        </div>
    );
}
