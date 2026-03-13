import Link from "next/link";
import Navbar from "@/components/Navbar";
import { GRADOS } from "@/data/curriculum";
import { PREESCOLAR_1_COMPLETE } from "@/data/content-preescolar1";
import type { GradoContenido } from "@/data/content-types";

const CONTENIDO_MAP: Record<string, GradoContenido> = {
    "preescolar-1": PREESCOLAR_1_COMPLETE,
};

export const metadata = {
    title: "Sección Maestros — Guías Pedagógicas SEP | Chispito.mx",
    description: "Fichas pedagógicas, secuencias didácticas y material descargable para maestros de preescolar y primaria, alineados al programa SEP.",
};

export default function MaestrosPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: "5rem", minHeight: "100vh", background: "linear-gradient(135deg,#0F172A 0%,#1E293B 50%,#0F172A 100%)" }}>
                {/* Hero */}
                <section style={{ textAlign: "center", padding: "3rem 1rem 2rem" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "0.5rem" }}>👩‍🏫</div>
                    <h1 style={{ fontFamily: "var(--font-fredoka)", fontSize: "clamp(2rem,5vw,3rem)", color: "#F8FAFC", marginBottom: "0.5rem" }}>
                        Sección Maestros
                    </h1>
                    <p style={{ color: "#94A3B8", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                        Fichas pedagógicas, secuencias didácticas y material descargable para tu planeación.<br />
                        Selecciona un grado para ver el plan de trabajo mensual.
                    </p>
                </section>

                {/* Grade cards */}
                <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem 4rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: "1rem" }}>
                        {GRADOS.map(g => {
                            const available = !!CONTENIDO_MAP[g.slug];
                            if (available) {
                                return (
                                    <Link key={g.slug} href={`/maestros/${g.slug}`}
                                        style={{
                                            padding: "1.5rem 1rem", borderRadius: "1rem", border: `2px solid ${g.color}50`,
                                            background: `linear-gradient(135deg,#1E293B,${g.color}15)`,
                                            textAlign: "center", textDecoration: "none", transition: "all .2s",
                                        }}>
                                        <div style={{ fontSize: "2.5rem" }}>{g.emoji}</div>
                                        <div style={{ fontFamily: "var(--font-fredoka)", color: g.color, fontSize: "1rem", marginTop: "0.4rem" }}>
                                            {g.nombre}
                                        </div>
                                        <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "0.2rem" }}>
                                            Ver plan mensual →
                                        </div>
                                    </Link>
                                );
                            }
                            return (
                                <div key={g.slug} style={{
                                    padding: "1.5rem 1rem", borderRadius: "1rem", border: "2px solid #1E293B",
                                    background: "#0F172A", textAlign: "center", opacity: 0.35,
                                }}>
                                    <div style={{ fontSize: "2.5rem" }}>{g.emoji}</div>
                                    <div style={{ color: "#475569", fontSize: "0.9rem", marginTop: "0.4rem" }}>{g.nombre}</div>
                                    <div style={{ fontSize: "0.65rem", color: "#334155" }}>Próximamente</div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}
