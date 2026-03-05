"use client";
// ComentariosSection — Muestra comentarios de padres de familia filtrados por grado/materia/bloque
// Incluye formulario para dejar nuevo comentario (guardado en localStorage)

import { useState, useEffect } from "react";
import comentariosData from "@/data/comentarios.json";

interface Comentario {
    id: number;
    grado: string | null;
    materia: string | null;
    bloque: number | null;
    nombre: string;
    inicial: string;
    color: string;
    texto: string;
    estrellas: number;
    fecha: string;
    verificado: boolean;
}

interface Props {
    grado?: string;
    materia?: string;
    bloque?: number;
    maxVisible?: number;
}

function Estrellas({ num }: { num: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map(s => (
                <span key={s} className="text-base">{s <= num ? "⭐" : "☆"}</span>
            ))}
        </div>
    );
}

function formatFecha(iso: string) {
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });
}

export default function ComentariosSection({ grado, materia, bloque, maxVisible = 6 }: Props) {
    const [mostrar, setMostrar] = useState(maxVisible);
    const [formAbierto, setFormAbierto] = useState(false);
    const [comentariosLocales, setComentariosLocales] = useState<Comentario[]>([]);
    const [form, setForm] = useState({ nombre: "", texto: "", estrellas: 5 });
    const [enviado, setEnviado] = useState(false);

    // Cargar comentarios guardados localmente
    useEffect(() => {
        try {
            const key = `chispito_comments_${grado}_${materia}_${bloque}`;
            const guardados = JSON.parse(localStorage.getItem(key) || "[]");
            setComentariosLocales(guardados);
        } catch { /* */ }
    }, [grado, materia, bloque]);

    // Filtrar del JSON principal
    const comentariosFiltrados = (comentariosData as Comentario[]).filter(c => {
        if (grado && c.grado !== grado) return false;
        if (materia && c.materia !== materia) return false;
        if (bloque !== undefined && c.bloque !== null && c.bloque !== bloque) return false;
        return true;
    });

    // Combinar: locales primero, luego del JSON
    const todos: Comentario[] = [
        ...comentariosLocales.map((c, i) => ({ ...c, id: -1 - i })),
        ...comentariosFiltrados,
    ];

    // Si no hay suficientes filtrados, completar con generales
    const generales = (comentariosData as Comentario[]).filter(c => c.grado === null).slice(0, 20);
    const combinados = todos.length >= 8 ? todos : [...todos, ...generales];

    function enviarComentario() {
        if (!form.nombre.trim() || !form.texto.trim()) return;
        const nuevo: Comentario = {
            id: Date.now(),
            grado: grado || null,
            materia: materia || null,
            bloque: bloque || null,
            nombre: form.nombre,
            inicial: form.nombre.charAt(0).toUpperCase(),
            color: "#3B82F6",
            texto: form.texto,
            estrellas: form.estrellas,
            fecha: new Date().toISOString().split("T")[0],
            verificado: false,
        };
        const key = `chispito_comments_${grado}_${materia}_${bloque}`;
        const guardados = [...comentariosLocales, nuevo];
        localStorage.setItem(key, JSON.stringify(guardados));
        setComentariosLocales(guardados);
        setForm({ nombre: "", texto: "", estrellas: 5 });
        setFormAbierto(false);
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000);
    }

    const visibles = combinados.slice(0, mostrar);
    const promedio = combinados.length > 0
        ? (combinados.slice(0, 20).reduce((s, c) => s + c.estrellas, 0) / Math.min(20, combinados.length)).toFixed(1)
        : "5.0";

    return (
        <section className="py-8">
            {/* Header de sección */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-black text-white">
                        💬 Opiniones de padres de familia
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-sm">⭐</span>)}
                        </div>
                        <span className="text-white font-bold">{promedio}</span>
                        <span className="text-white/40 text-sm">({combinados.length} opiniones)</span>
                    </div>
                </div>
                <button
                    onClick={() => setFormAbierto(!formAbierto)}
                    className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-90 flex-shrink-0"
                    style={{ background: "#FFD60A", color: "#0D1B2A" }}
                >
                    ✏️ Opinar
                </button>
            </div>

            {/* Toast de enviado */}
            {enviado && (
                <div className="rounded-xl p-3 mb-4 text-center font-bold text-sm"
                    style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#22C55E" }}>
                    ✅ ¡Gracias por tu opinión! Ya aparece arriba.
                </div>
            )}

            {/* Formulario */}
            {formAbierto && (
                <div className="rounded-2xl p-5 mb-6"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <h3 className="font-bold text-white mb-4">📝 Comparte tu experiencia</h3>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Tu nombre (ej. María Guadalupe H.)"
                            value={form.nombre}
                            onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                            maxLength={50}
                            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none"
                            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
                        />
                        <textarea
                            placeholder="Cuéntanos tu experiencia con Chispito.mx (mín. 20 caracteres)"
                            value={form.texto}
                            onChange={e => setForm(f => ({ ...f, texto: e.target.value }))}
                            rows={3}
                            maxLength={300}
                            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none resize-none"
                            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
                        />
                        <div className="flex items-center gap-3">
                            <span className="text-white/60 text-sm">Tu calificación:</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(s => (
                                    <button key={s} onClick={() => setForm(f => ({ ...f, estrellas: s }))}
                                        className="text-2xl transition-transform hover:scale-110">
                                        {s <= form.estrellas ? "⭐" : "☆"}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 justify-end">
                            <button onClick={() => setFormAbierto(false)}
                                className="px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white transition-colors">
                                Cancelar
                            </button>
                            <button
                                onClick={enviarComentario}
                                disabled={form.nombre.length < 3 || form.texto.length < 20}
                                className="px-5 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-90 disabled:opacity-40"
                                style={{ background: "#FFD60A", color: "#0D1B2A" }}>
                                Publicar opinión
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Lista de comentarios */}
            <div className="space-y-4">
                {visibles.map((c, i) => (
                    <div key={`${c.id}-${i}`}
                        className="rounded-2xl p-4 transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <div className="flex items-start gap-3">
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white text-sm"
                                style={{ background: c.color }}>
                                {c.inicial}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-bold text-white text-sm">{c.nombre}</span>
                                    {c.verificado && (
                                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                                            style={{ background: "rgba(34,197,94,0.15)", color: "#22C55E" }}>
                                            ✓ Verificado
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <Estrellas num={c.estrellas} />
                                    <span className="text-white/30 text-xs">{formatFecha(c.fecha)}</span>
                                </div>
                                <p className="text-white/70 text-sm mt-2 leading-relaxed">{c.texto}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Ver más */}
            {mostrar < combinados.length && (
                <button
                    onClick={() => setMostrar(m => m + 6)}
                    className="w-full mt-4 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    Ver más opiniones ({combinados.length - mostrar} más) ↓
                </button>
            )}
        </section>
    );
}
