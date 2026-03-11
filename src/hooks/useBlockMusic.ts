"use client";
import { useCallback, useRef, useState, useEffect } from "react";

/**
 * useBlockMusic — synthesizes cheerful pentatonic melodies per-materia.
 * Each materia has a unique melody, played softly once when the block loads.
 * Has its own mute state (separate from game sounds).
 */

// Cheerful pentatonic melodies per materia (frequencies in Hz)
const MELODIES: Record<string, { notes: number[]; durations: number[]; tempo: number }> = {
    // C major pentatonic lullaby — lenguaje
    lenguaje: {
        notes: [523, 587, 659, 784, 880, 784, 659, 587, 523, 587, 659, 784, 1047, 880, 784, 659],
        durations: [0.2, 0.2, 0.2, 0.2, 0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.2, 0.2, 0.3],
        tempo: 1,
    },
    // G major bright — matemáticas
    matematicas: {
        notes: [392, 440, 494, 587, 659, 587, 494, 440, 392, 494, 587, 659, 784, 659, 587, 494],
        durations: [0.15, 0.15, 0.15, 0.15, 0.25, 0.15, 0.15, 0.15, 0.2, 0.15, 0.15, 0.15, 0.35, 0.15, 0.15, 0.25],
        tempo: 1.1,
    },
    // D major playful — español
    espanol: {
        notes: [587, 659, 740, 880, 988, 880, 740, 659, 587, 740, 880, 988, 1175, 988, 880, 740],
        durations: [0.18, 0.18, 0.18, 0.18, 0.28, 0.18, 0.18, 0.18, 0.22, 0.18, 0.18, 0.18, 0.38, 0.18, 0.18, 0.28],
        tempo: 1,
    },
    // A major gentle — artes
    artes: {
        notes: [440, 494, 554, 659, 740, 659, 554, 494, 440, 554, 659, 740, 880, 740, 659, 554],
        durations: [0.2, 0.2, 0.25, 0.2, 0.3, 0.2, 0.25, 0.2, 0.2, 0.25, 0.2, 0.2, 0.4, 0.2, 0.25, 0.3],
        tempo: 0.9,
    },
    // F major bouncy — educacion_fisica
    educacion_fisica: {
        notes: [349, 392, 440, 523, 587, 523, 440, 392, 349, 440, 523, 587, 698, 587, 523, 440],
        durations: [0.12, 0.12, 0.12, 0.12, 0.2, 0.12, 0.12, 0.12, 0.15, 0.12, 0.12, 0.12, 0.3, 0.12, 0.12, 0.2],
        tempo: 1.3,
    },
    // E major warm — conocimiento
    conocimiento: {
        notes: [330, 370, 415, 494, 554, 494, 415, 370, 330, 415, 494, 554, 659, 554, 494, 415],
        durations: [0.22, 0.22, 0.22, 0.22, 0.32, 0.22, 0.22, 0.22, 0.22, 0.22, 0.22, 0.22, 0.42, 0.22, 0.22, 0.32],
        tempo: 0.85,
    },
};

// Default melody for unknown materias
const DEFAULT_MELODY = MELODIES.lenguaje;

export function useBlockMusic(materia: string) {
    const [musicMuted, setMusicMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const ctxRef = useRef<AudioContext | null>(null);
    const hasPlayedRef = useRef(false);
    const scheduledRef = useRef<OscillatorNode[]>([]);

    const getMelody = useCallback(() => {
        return MELODIES[materia] || DEFAULT_MELODY;
    }, [materia]);

    const stopMusic = useCallback(() => {
        scheduledRef.current.forEach((osc) => {
            try { osc.stop(); } catch { /* already stopped */ }
        });
        scheduledRef.current = [];
        setIsPlaying(false);
    }, []);

    const playMelody = useCallback(() => {
        if (musicMuted || hasPlayedRef.current) return;

        // Get or create AudioContext
        if (!ctxRef.current) {
            ctxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        }
        const ctx = ctxRef.current;
        if (ctx.state === "suspended") ctx.resume();

        const melody = getMelody();
        const volume = 0.06; // Very quiet — background music
        let offset = 0;

        hasPlayedRef.current = true;
        setIsPlaying(true);

        melody.notes.forEach((freq, i) => {
            const dur = melody.durations[i] / melody.tempo;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, ctx.currentTime + offset);
            gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + offset + 0.03);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + offset + dur - 0.03);
            osc.connect(gain).connect(ctx.destination);
            osc.start(ctx.currentTime + offset);
            osc.stop(ctx.currentTime + offset + dur);
            scheduledRef.current.push(osc);
            offset += dur;
        });

        // Mark as not playing when done
        setTimeout(() => {
            setIsPlaying(false);
            scheduledRef.current = [];
        }, offset * 1000 + 200);
    }, [musicMuted, getMelody]);

    const toggleMusicMute = useCallback(() => {
        setMusicMuted((prev) => {
            if (!prev) {
                // Muting — stop any playing music
                stopMusic();
            }
            return !prev;
        });
    }, [stopMusic]);

    // Allow replaying after unmute
    useEffect(() => {
        if (!musicMuted) {
            hasPlayedRef.current = false;
        }
    }, [musicMuted]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopMusic();
        };
    }, [stopMusic]);

    return {
        playMelody,
        stopMusic,
        musicMuted,
        isPlaying,
        toggleMusicMute,
    };
}
