"use client";
import { useState } from "react";
import Link from "next/link";
import { K1MLA_PAGINAS, K1MLA_LIBRO_INFO, buscarPorPagina } from "@/data/k1mla-paginas";
import { K2MLA_PAGINAS, K2MLA_LIBRO_INFO, buscarPorPaginaK2 } from "@/data/k2mla-paginas";
import { K3MLA_PAGINAS, K3MLA_LIBRO_INFO, buscarPorPaginaK3 } from "@/data/k3mla-paginas";
import { P1MLA_PAGINAS, P1MLA_LIBRO_INFO, buscarPorPaginaP1 } from "@/data/p1mla-paginas";
import { P2MLA_PAGINAS, P2MLA_LIBRO_INFO, buscarPorPaginaP2 } from "@/data/p2mla-paginas";
import { P3MLA_PAGINAS, P3MLA_LIBRO_INFO, buscarPorPaginaP3 } from "@/data/p3mla-paginas";
import { P4MLA_PAGINAS, P4MLA_LIBRO_INFO, buscarPorPaginaP4 } from "@/data/p4mla-paginas";
import { P5MLA_PAGINAS, P5MLA_LIBRO_INFO, buscarPorPaginaP5 } from "@/data/p5mla-paginas";
import { P6MLA_PAGINAS, P6MLA_LIBRO_INFO, buscarPorPaginaP6 } from "@/data/p6mla-paginas";
import type { PaginaLibroEntry } from "@/data/k1mla-paginas";

// Mapa de libros por grado
const LIBROS_POR_GRADO: Record<string, {
    paginas: PaginaLibroEntry[];
    info: typeof K1MLA_LIBRO_INFO;
    buscar: (p: number) => PaginaLibroEntry | null;
}> = {
    "preescolar-1": { paginas: K1MLA_PAGINAS, info: K1MLA_LIBRO_INFO, buscar: buscarPorPagina },
    "preescolar-2": { paginas: K2MLA_PAGINAS, info: K2MLA_LIBRO_INFO, buscar: buscarPorPaginaK2 },
    "preescolar-3": { paginas: K3MLA_PAGINAS, info: K3MLA_LIBRO_INFO, buscar: buscarPorPaginaK3 },
    "kinder": { paginas: K3MLA_PAGINAS, info: K3MLA_LIBRO_INFO, buscar: buscarPorPaginaK3 },
    "primaria-1": { paginas: P1MLA_PAGINAS, info: P1MLA_LIBRO_INFO, buscar: buscarPorPaginaP1 },
    "primaria-2": { paginas: P2MLA_PAGINAS, info: P2MLA_LIBRO_INFO, buscar: buscarPorPaginaP2 },
    "primaria-3": { paginas: P3MLA_PAGINAS, info: P3MLA_LIBRO_INFO, buscar: buscarPorPaginaP3 },
    "primaria-4": { paginas: P4MLA_PAGINAS, info: P4MLA_LIBRO_INFO, buscar: buscarPorPaginaP4 },
    "primaria-5": { paginas: P5MLA_PAGINAS, info: P5MLA_LIBRO_INFO, buscar: buscarPorPaginaP5 },
    "primaria-6": { paginas: P6MLA_PAGINAS, info: P6MLA_LIBRO_INFO, buscar: buscarPorPaginaP6 },
};

const CAMPO_LABELS: Record<string, string> = {
    lenguaje: "📖 Lenguaje", artes: "🎨 Artes", conocimiento: "🔍 Exploración",
    matematicas: "📐 Matemáticas", educacion_fisica: "🏃 Ed. Física",
};

const MATERIA_LABELS: Record<string, string> = {
    espanol: "Español", artes: "Artes", conocimiento: "Conocimiento",
    matematicas: "Matemáticas", educacion_fisica: "Ed. Física",
};

export default function BuscadorPagina({ gradoSlug = "preescolar-1" }: { gradoSlug?: string }) {
    const [pagina, setPagina] = useState("");
    const [resultado, setResultado] = useState<PaginaLibroEntry | null>(null);
    const [buscado, setBuscado] = useState(false);

    // Seleccionar el libro correcto según el grado
    const libro = LIBROS_POR_GRADO[gradoSlug];
    if (!libro) return null; // Sin libro para este grado

    const handleBuscar = () => {
        const num = parseInt(pagina);
        if (isNaN(num)) { setResultado(null); setBuscado(true); return; }
        setResultado(libro.buscar(num));
        setBuscado(true);
    };

    return (
        <div style={{
            background: "#0F172A", border: "2px solid #FBBF2440", borderRadius: "1rem",
            padding: "1.25rem", marginBottom: "2rem",
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "1.5rem" }}>📖</span>
                <div>
                    <div style={{ fontFamily: "var(--font-fredoka)", color: "#FBBF24", fontSize: "1rem" }}>
                        ¿En qué página vas del libro?
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B" }}>
                        {libro.info.nombre} · {libro.info.totalPaginas} págs.
                    </div>
                </div>
                <Link href="/buscar-pagina" style={{ marginLeft: "auto", fontSize: "0.65rem", color: "#FBBF24", textDecoration: "none", opacity: 0.7 }}>
                    Ver índice completo →
                </Link>
            </div>

            <div style={{ display: "flex", gap: "0.4rem", marginBottom: buscado ? "0.75rem" : 0 }}>
                <input type="number" min={1} max={libro.info.totalPaginas} placeholder="# página..."
                    value={pagina}
                    onChange={e => { setPagina(e.target.value); setBuscado(false); }}
                    onKeyDown={e => e.key === "Enter" && handleBuscar()}
                    style={{
                        flex: 1, padding: "0.6rem 0.8rem", borderRadius: "0.5rem", border: "2px solid #334155",
                        background: "#1E293B", color: "#F8FAFC", fontSize: "1rem", textAlign: "center",
                        fontFamily: "var(--font-fredoka)", outline: "none",
                    }}
                />
                <button onClick={handleBuscar} style={{
                    padding: "0.6rem 1rem", borderRadius: "0.5rem", border: "none",
                    background: "linear-gradient(135deg,#FBBF24,#F59E0B)", color: "#0F172A",
                    fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
                }}>
                    🔍
                </button>
            </div>

            {buscado && resultado && (
                <div style={{
                    background: `${resultado.color}10`, border: `1px solid ${resultado.color}30`,
                    borderRadius: "0.75rem", padding: "0.8rem",
                }}>
                    <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Página {pagina}</div>
                    <div style={{ fontFamily: "var(--font-fredoka)", color: resultado.color, fontSize: "1rem", margin: "0.1rem 0 0.4rem" }}>
                        {resultado.titulo}
                    </div>
                    <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                        <span style={{ fontSize: "0.65rem", background: `${resultado.color}20`, color: resultado.color, padding: "0.15rem 0.4rem", borderRadius: "0.3rem" }}>
                            {CAMPO_LABELS[resultado.campoFormativo]}
                        </span>
                        <span style={{ fontSize: "0.65rem", background: "#1E293B", color: "#94A3B8", padding: "0.15rem 0.4rem", borderRadius: "0.3rem" }}>
                            Bloque {resultado.bloqueChispito} · {MATERIA_LABELS[resultado.materiaChispito]}
                        </span>
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem" }}>
                        <Link href={`/${gradoSlug}/${resultado.materiaChispito}/bloque-${resultado.bloqueChispito}`}
                            style={{
                                flex: 1, padding: "0.5rem", borderRadius: "0.4rem", textDecoration: "none",
                                background: `linear-gradient(135deg,${resultado.color},${resultado.color}AA)`,
                                color: "white", fontSize: "0.75rem", fontWeight: 700, textAlign: "center",
                            }}>
                            🎮 Practicar
                        </Link>
                        <a href={`${libro.info.urlVisor}#page/${resultado.paginaInicio}`}
                            target="_blank" rel="noopener noreferrer"
                            style={{
                                flex: 1, padding: "0.5rem", borderRadius: "0.4rem", textDecoration: "none",
                                background: "#1E293B", border: `1px solid ${resultado.color}30`,
                                color: resultado.color, fontSize: "0.75rem", fontWeight: 700, textAlign: "center",
                            }}>
                            📗 Ver libro
                        </a>
                    </div>
                </div>
            )}

            {buscado && !resultado && (
                <div style={{ textAlign: "center", padding: "0.5rem", color: "#F9A8D4", fontSize: "0.8rem" }}>
                    😕 Página no encontrada. Intenta entre 7 y {libro.info.totalPaginas}.
                </div>
            )}
        </div>
    );
}

