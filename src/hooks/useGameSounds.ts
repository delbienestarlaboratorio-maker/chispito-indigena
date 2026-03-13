"use client";
import { useCallback, useRef, useEffect, useState } from "react";

/**
 * Genera sonidos usando Web Audio API — sin archivos externos.
 * Todos los sonidos son sintéticos: alegres y apropiados para niños.
 */

type SoundType = "correct" | "wrong" | "swoosh" | "fanfare" | "pop" | "star";

export function useGameSounds() {
    const ctxRef = useRef<AudioContext | null>(null);
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        // Lazy-init AudioContext on first user interaction
        const init = () => {
            if (!ctxRef.current) {
                ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            window.removeEventListener("click", init);
            window.removeEventListener("touchstart", init);
        };
        window.addEventListener("click", init);
        window.addEventListener("touchstart", init);
        return () => {
            window.removeEventListener("click", init);
            window.removeEventListener("touchstart", init);
        };
    }, []);

    const getCtx = useCallback(() => {
        if (!ctxRef.current) {
            ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return ctxRef.current;
    }, []);

    const playNote = useCallback((freq: number, duration: number, delay: number = 0, type: OscillatorType = "sine", volume: number = 0.15) => {
        if (muted) return;
        try {
            const ctx = getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(volume, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime + delay);
            osc.stop(ctx.currentTime + delay + duration);
        } catch { /* ignore audio errors */ }
    }, [muted, getCtx]);

    const play = useCallback((sound: SoundType) => {
        if (muted) return;
        switch (sound) {
            case "correct":
                // Happy rising arpeggio ✨
                playNote(523, 0.15, 0, "sine", 0.2);      // C5
                playNote(659, 0.15, 0.1, "sine", 0.2);    // E5
                playNote(784, 0.25, 0.2, "sine", 0.25);   // G5
                playNote(1047, 0.3, 0.3, "sine", 0.2);    // C6 ✨
                break;

            case "wrong":
                // Gentle "oops" — descending, soft
                playNote(350, 0.15, 0, "triangle", 0.12);
                playNote(280, 0.2, 0.12, "triangle", 0.1);
                break;

            case "swoosh":
                // Quick whoosh for transitions
                playNote(400, 0.08, 0, "sine", 0.08);
                playNote(600, 0.08, 0.04, "sine", 0.1);
                playNote(900, 0.06, 0.08, "sine", 0.06);
                break;

            case "fanfare":
                // Victory fanfare 🏆
                playNote(523, 0.2, 0, "square", 0.1);     // C5
                playNote(659, 0.2, 0.15, "square", 0.1);  // E5
                playNote(784, 0.2, 0.3, "square", 0.1);   // G5
                playNote(1047, 0.4, 0.45, "square", 0.12); // C6
                playNote(784, 0.15, 0.65, "sine", 0.08);  // G5
                playNote(1047, 0.5, 0.75, "sine", 0.15);  // C6 ✨
                break;

            case "pop":
                // Bubble pop for buttons
                playNote(800, 0.06, 0, "sine", 0.1);
                playNote(1200, 0.04, 0.03, "sine", 0.06);
                break;

            case "star":
                // Star collected ⭐
                playNote(880, 0.1, 0, "sine", 0.15);
                playNote(1100, 0.15, 0.08, "sine", 0.12);
                break;
        }
    }, [muted, playNote]);

    return { play, muted, setMuted, toggleMute: () => setMuted(m => !m) };
}
