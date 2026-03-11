"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { K1MLA_PAGINAS, K1MLA_LIBRO_INFO, buscarPorPagina } from "@/data/k1mla-paginas";

const CAMPO_LABELS: Record<string, string> = {
    lenguaje: "📖 Lenguaje y comunicación",
    artes: "🎨 Artes",
    conocimiento: "🔍 Exploración del mundo",
    matematicas: "📐 Pensamiento matemático",
    educacion_fisica: "🏃 Desarrollo corporal",
};

const MATERIA_LABELS: Record<string, string> = {
    espanol: "Español", artes: "Artes", conocimiento: "Conocimiento",
    matematicas: "Matemáticas", educacion_fisica: "Ed. Física",
};

export default function BuscarPaginaPage() {
    const [pagina, setPagina] = useState<string>("");
    const [resultado, setResultado] = useState<ReturnType<typeof buscarPorPagina>>(null);
    const [buscado, setBuscado] = useState(false);

    const handleBuscar = () => {
        const num = parseInt(pagina);
        if (isNaN(num) || num < 1 || num > K1MLA_LIBRO_INFO.totalPaginas) {
            setResultado(null);
            setBuscado(true);
            return;
        }
        setResultado(buscarPorPagina(num));
        setBuscado(true);
    };

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: "5rem", minHeight: "100vh", background: "linear-gradient(135deg,#0F172A 0%,#1E293B 50%,#0F172A 100%)" }}>
                {/* Hero */}
                <section style={{ textAlign: "center", padding: "3rem 1rem 2rem" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>📖</div>
                    <h1 style={{ fontFamily: "var(--font-fredoka)", fontSize: "clamp(1.8rem,4vw,2.5rem)", color: "#F8FAFC", marginBottom: "0.5rem" }}>
                        Busca por Página del Libro SEP
                    </h1>
                    <p style={{ color: "#94A3B8", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6, fontSize: "0.95rem" }}>
                        ¿En qué página del libro vas? Escribe el número y te decimos qué actividad es y dónde practicar.
                    </p>
                </section>

                {/* Book info */}
                <section style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
                    <div style={{
                        background: "#1E293B", border: "1px solid #334155", borderRadius: "1rem",
                        padding: "1rem", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem",
                    }}>
                        <div style={{ fontSize: "2.5rem" }}>📗</div>
                        <div>
                            <div style={{ fontFamily: "var(--font-fredoka)", color: "#F8FAFC", fontSize: "1.1rem" }}>
                                {K1MLA_LIBRO_INFO.nombre}
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "#64748B" }}>
                                1° Preescolar · {K1MLA_LIBRO_INFO.totalPaginas} páginas · Código: {K1MLA_LIBRO_INFO.codigo}
                            </div>
                            <a href={K1MLA_LIBRO_INFO.urlVisor} target="_blank" rel="noopener noreferrer"
                                style={{ fontSize: "0.7rem", color: "#FBBF24", textDecoration: "none" }}>
                                Ver en CONALITEG →
                            </a>
                        </div>
                    </div>

                    {/* Search input */}
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                        <input
                            type="number"
                            min={1}
                            max={K1MLA_LIBRO_INFO.totalPaginas}
                            placeholder="Escribe el # de página..."
                            value={pagina}
                            onChange={e => { setPagina(e.target.value); setBuscado(false); }}
                            onKeyDown={e => e.key === "Enter" && handleBuscar()}
                            style={{
                                flex: 1, padding: "1rem", borderRadius: "0.75rem", border: "2px solid #334155",
                                background: "#0F172A", color: "#F8FAFC", fontSize: "1.2rem", textAlign: "center",
                                fontFamily: "var(--font-fredoka)", outline: "none",
                            }}
                        />
                        <button onClick={handleBuscar}
                            style={{
                                padding: "1rem 1.5rem", borderRadius: "0.75rem", border: "none",
                                background: "linear-gradient(135deg,#FBBF24,#F59E0B)", color: "#0F172A",
                                fontSize: "1rem", fontWeight: 700, cursor: "pointer",
                            }}>
                            🔍 Buscar
                        </button>
                    </div>

                    {/* Result */}
                    {buscado && resultado && (
                        <div style={{
                            background: `${resultado.color}10`, border: `2px solid ${resultado.color}50`,
                            borderRadius: "1rem", padding: "1.5rem", marginBottom: "2rem",
                        }}>
                            <div style={{ fontSize: "0.65rem", color: "#64748B", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                                Página {pagina} del libro
                            </div>
                            <h2 style={{ fontFamily: "var(--font-fredoka)", fontSize: "1.4rem", color: resultado.color, margin: "0 0 0.5rem" }}>
                                {resultado.titulo}
                            </h2>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                                <span style={{ fontSize: "0.75rem", background: `${resultado.color}20`, color: resultado.color, padding: "0.25rem 0.6rem", borderRadius: "0.4rem" }}>
                                    {CAMPO_LABELS[resultado.campoFormativo]}
                                </span>
                                <span style={{ fontSize: "0.75rem", background: "#1E293B", color: "#94A3B8", padding: "0.25rem 0.6rem", borderRadius: "0.4rem" }}>
                                    Bloque {resultado.bloqueChispito} · {MATERIA_LABELS[resultado.materiaChispito]}
                                </span>
                                <span style={{ fontSize: "0.75rem", background: "#1E293B", color: "#94A3B8", padding: "0.25rem 0.6rem", borderRadius: "0.4rem" }}>
                                    Págs. {resultado.paginaInicio}-{resultado.paginaFin}
                                </span>
                            </div>

                            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                <Link href={`/preescolar-1/${resultado.materiaChispito}/bloque-${resultado.bloqueChispito}`}
                                    style={{
                                        flex: 1, minWidth: "180px", padding: "0.75rem", borderRadius: "0.6rem", textDecoration: "none",
                                        background: `linear-gradient(135deg,${resultado.color},${resultado.color}AA)`,
                                        color: "white", fontSize: "0.85rem", fontWeight: 700, textAlign: "center",
                                    }}>
                                    🎮 Practicar ejercicios
                                </Link>
                                <a href={`${K1MLA_LIBRO_INFO.urlVisor}#page/${resultado.paginaInicio}`}
                                    target="_blank" rel="noopener noreferrer"
                                    style={{
                                        flex: 1, minWidth: "180px", padding: "0.75rem", borderRadius: "0.6rem", textDecoration: "none",
                                        background: "#1E293B", border: `1px solid ${resultado.color}50`,
                                        color: resultado.color, fontSize: "0.85rem", fontWeight: 700, textAlign: "center",
                                    }}>
                                    📗 Ver en libro SEP
                                </a>
                            </div>
                        </div>
                    )}

                    {buscado && !resultado && (
                        <div style={{
                            background: "#F43F5E10", border: "2px solid #F43F5E30", borderRadius: "1rem",
                            padding: "1.5rem", textAlign: "center", marginBottom: "2rem",
                        }}>
                            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>😕</div>
                            <p style={{ color: "#F9A8D4", fontSize: "0.9rem", margin: 0 }}>
                                No encontramos esa página. Intenta con un número entre 7 y {K1MLA_LIBRO_INFO.totalPaginas}.
                            </p>
                        </div>
                    )}
                </section>

                {/* Full index */}
                <section style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem 4rem" }}>
                    <h2 style={{ fontFamily: "var(--font-fredoka)", fontSize: "1.3rem", color: "#F8FAFC", marginBottom: "1rem", textAlign: "center" }}>
                        📋 Índice completo del libro
                    </h2>
                    <div style={{ display: "grid", gap: "0.4rem" }}>
                        {K1MLA_PAGINAS.map((entry, i) => (
                            <button key={i}
                                onClick={() => { setPagina(String(entry.paginaInicio)); setResultado(entry); setBuscado(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                style={{
                                    display: "flex", alignItems: "center", gap: "0.75rem",
                                    padding: "0.6rem 0.8rem", borderRadius: "0.5rem", border: "none",
                                    background: resultado === entry ? `${entry.color}20` : "#1E293B",
                                    cursor: "pointer", textAlign: "left", transition: "all .15s",
                                }}>
                                <span style={{
                                    fontSize: "0.7rem", color: "#64748B", minWidth: "50px", textAlign: "right",
                                }}>
                                    p. {entry.paginaInicio}{entry.paginaFin !== entry.paginaInicio ? `-${entry.paginaFin}` : ""}
                                </span>
                                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: entry.color, flexShrink: 0 }} />
                                <span style={{ fontSize: "0.82rem", color: "#E2E8F0", flex: 1 }}>{entry.titulo}</span>
                                <span style={{ fontSize: "0.6rem", color: "#64748B" }}>B{entry.bloqueChispito}</span>
                            </button>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
