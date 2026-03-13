"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import BuscadorPagina from "@/components/BuscadorPagina";
import { GRADOS } from "@/data/curriculum";
import { PREESCOLAR_1_COMPLETE } from "@/data/content-preescolar1";
import type { GradoContenido } from "@/data/content-types";

const CONTENIDO_MAP: Record<string, GradoContenido> = {
    "preescolar-1": PREESCOLAR_1_COMPLETE,
};

const MATERIA_ICONS: Record<string, string> = {
    artes: "🎨", conocimiento: "🔍", educacion_fisica: "🏃",
    espanol: "📖", matematicas: "📐", lenguaje: "🗣️",
};

// SEP school calendar months (ciclo 2024-2025)
const MESES_SEP = [
    { mes: "Agosto", icon: "🏫", nota: "Inicio de clases · Diagnóstico" },
    { mes: "Septiembre", icon: "🇲🇽", nota: "Fiestas patrias · Identidad" },
    { mes: "Octubre", icon: "🎃", nota: "Día de Muertos · Tradiciones" },
    { mes: "Noviembre", icon: "🍂", nota: "Revolución · Participación social" },
    { mes: "Diciembre", icon: "🎄", nota: "Posadas · Convivencia" },
    { mes: "Enero", icon: "⭐", nota: "Constitución · Derechos" },
    { mes: "Febrero", icon: "❤️", nota: "Día de la Bandera · Amor y amistad" },
    { mes: "Marzo", icon: "🌸", nota: "Primavera · Benito Juárez" },
    { mes: "Abril", icon: "📚", nota: "Día del Niño · Día del Libro" },
    { mes: "Mayo", icon: "👩‍🏫", nota: "Día del Maestro · Batalla de Puebla" },
    { mes: "Junio", icon: "☀️", nota: "Día del Padre · Cierre evaluación" },
    { mes: "Julio", icon: "🎉", nota: "Cierre de ciclo escolar" },
];

function mesMatchesBloque(mesSep: string, bloquesMeses: string): boolean {
    const m = mesSep.toLowerCase();
    const bm = bloquesMeses.toLowerCase()
        .replace("agosto–sept", "agosto,septiembre")
        .replace("oct–nov", "octubre,noviembre")
        .replace("dic–ene", "diciembre,enero")
        .replace("feb–mar", "febrero,marzo")
        .replace("abr–jun", "abril,mayo,junio")
        .replace("julio", "julio");
    return bm.includes(m);
}

export default function MaestrosGradoPage() {
    const params = useParams();
    const gradoSlug = params.grado as string;
    const gradoData = CONTENIDO_MAP[gradoSlug];
    const gradoInfo = GRADOS.find(g => g.slug === gradoSlug);

    if (!gradoData || !gradoInfo) {
        return (
            <>
                <Navbar />
                <main style={{ paddingTop: "6rem", minHeight: "100vh", background: "#0F172A", textAlign: "center", color: "#94A3B8" }}>
                    <div style={{ fontSize: "4rem" }}>🔒</div>
                    <h1 style={{ fontFamily: "var(--font-fredoka)", fontSize: "2rem", color: "#F8FAFC" }}>Grado no disponible aún</h1>
                    <p>Estamos trabajando en el contenido para este grado.</p>
                    <Link href="/maestros" style={{ color: "#FBBF24", textDecoration: "none" }}>← Volver a Maestros</Link>
                </main>
            </>
        );
    }

    const materias = Object.entries(gradoData.materias);

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: "5rem", minHeight: "100vh", background: "linear-gradient(135deg,#0F172A 0%,#1E293B 50%,#0F172A 100%)" }}>
                {/* Header */}
                <section style={{ textAlign: "center", padding: "2rem 1rem 1.5rem" }}>
                    <Link href="/maestros" style={{ fontSize: "0.85rem", color: "#FBBF24", textDecoration: "none" }}>← Todos los grados</Link>
                    <div style={{ fontSize: "3rem", margin: "0.5rem 0 0.3rem" }}>{gradoInfo.emoji}</div>
                    <h1 style={{ fontFamily: "var(--font-fredoka)", fontSize: "clamp(1.8rem,4vw,2.5rem)", color: "#F8FAFC", margin: 0 }}>
                        {gradoInfo.nombre}
                    </h1>
                    <p style={{ color: "#94A3B8", fontSize: "0.9rem", maxWidth: "550px", margin: "0.5rem auto 0" }}>
                        Plan de trabajo mensual · Calendario SEP ciclo 2024-2025
                    </p>
                </section>

                {/* Page search */}
                <section style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
                    <BuscadorPagina gradoSlug={gradoSlug} />
                </section>

                {/* Monthly calendar */}
                <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1rem 4rem" }}>
                    {MESES_SEP.map(({ mes, icon, nota }) => {
                        // Find all bloques that belong to this month
                        const bloquesDelMes: { slug: string; materia: typeof materias[0][1]; bloque: typeof materias[0][1]['bloques'][0] }[] = [];
                        materias.forEach(([slug, materia]) => {
                            materia.bloques.forEach(bloque => {
                                if (mesMatchesBloque(mes, bloque.meses)) {
                                    bloquesDelMes.push({ slug, materia, bloque });
                                }
                            });
                        });

                        if (bloquesDelMes.length === 0) return null;

                        return (
                            <div key={mes} style={{ marginBottom: "2.5rem" }}>
                                {/* Month header */}
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "0.75rem",
                                    marginBottom: "1rem", paddingBottom: "0.6rem",
                                    borderBottom: "2px solid #334155",
                                }}>
                                    <span style={{ fontSize: "2rem" }}>{icon}</span>
                                    <div>
                                        <h2 style={{ fontFamily: "var(--font-fredoka)", fontSize: "1.5rem", color: "#F8FAFC", margin: 0 }}>
                                            {mes}
                                        </h2>
                                        <span style={{ fontSize: "0.75rem", color: "#64748B" }}>{nota}</span>
                                    </div>
                                    <span style={{
                                        marginLeft: "auto", fontSize: "0.7rem", color: "#94A3B8",
                                        background: "#1E293B", padding: "0.2rem 0.5rem", borderRadius: "0.5rem",
                                    }}>
                                        {bloquesDelMes.length} {bloquesDelMes.length === 1 ? 'tema' : 'temas'}
                                    </span>
                                </div>

                                {/* Cards for this month */}
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "0.75rem" }}>
                                    {bloquesDelMes.map(({ slug, materia, bloque }) => {
                                        const gm = bloque.guiaMaestro;
                                        return (
                                            <div key={`${slug}-${bloque.bloque}`} style={{
                                                background: "linear-gradient(135deg,#1E293B,#0F172A)",
                                                border: `1px solid ${materia.color}30`, borderRadius: "1rem",
                                                padding: "1.1rem", display: "flex", flexDirection: "column", gap: "0.6rem",
                                            }}>
                                                {/* Card header */}
                                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                        <span style={{ fontSize: "1.3rem" }}>{MATERIA_ICONS[slug] || materia.emoji}</span>
                                                        <div>
                                                            <div style={{ fontSize: "0.6rem", color: "#64748B", textTransform: "uppercase" }}>
                                                                {materia.nombre} · Bloque {bloque.bloque}
                                                            </div>
                                                            <h3 style={{ fontFamily: "var(--font-fredoka)", fontSize: "0.95rem", color: "#F1F5F9", margin: "0.1rem 0 0" }}>
                                                                {bloque.nombre}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <Link href={`/${gradoSlug}/${slug}/bloque-${bloque.bloque}`}
                                                        style={{ fontSize: "0.65rem", color: materia.color, background: `${materia.color}15`, padding: "0.25rem 0.5rem", borderRadius: "0.4rem", textDecoration: "none", whiteSpace: "nowrap" }}>
                                                        Ejercicios →
                                                    </Link>
                                                </div>

                                                {/* Objetivo */}
                                                <div style={{ background: "#FBBF2410", borderLeft: `3px solid #FBBF24`, padding: "0.4rem 0.6rem", borderRadius: "0 0.4rem 0.4rem 0" }}>
                                                    <div style={{ fontSize: "0.55rem", color: "#FBBF24", textTransform: "uppercase", fontWeight: 700 }}>🎯 Objetivo</div>
                                                    <p style={{ fontSize: "0.78rem", color: "#E2E8F0", margin: "0.1rem 0 0", lineHeight: 1.4 }}>{gm.objetivo}</p>
                                                </div>

                                                {/* Competencia */}
                                                <div style={{ background: `${materia.color}10`, borderLeft: `3px solid ${materia.color}`, padding: "0.4rem 0.6rem", borderRadius: "0 0.4rem 0.4rem 0" }}>
                                                    <div style={{ fontSize: "0.55rem", color: materia.color, textTransform: "uppercase", fontWeight: 700 }}>📋 Competencia SEP</div>
                                                    <p style={{ fontSize: "0.78rem", color: "#E2E8F0", margin: "0.1rem 0 0", lineHeight: 1.4 }}>{gm.competencia}</p>
                                                </div>

                                                {/* Aprendizajes */}
                                                {gm.aprendizajesEsperados && (
                                                    <div>
                                                        <div style={{ fontSize: "0.55rem", color: "#22C55E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>✅ Aprendizajes Esperados</div>
                                                        <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                                                            {gm.aprendizajesEsperados.map((a, i) => (
                                                                <li key={i} style={{ fontSize: "0.75rem", color: "#CBD5E1", lineHeight: 1.5 }}>{a}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {/* Secuencia */}
                                                {gm.secuenciaDidactica && (
                                                    <div>
                                                        <div style={{ fontSize: "0.55rem", color: "#818CF8", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>📝 Secuencia Didáctica</div>
                                                        {gm.secuenciaDidactica.map((s, i) => (
                                                            <div key={i} style={{ fontSize: "0.75rem", color: "#CBD5E1", lineHeight: 1.5, paddingLeft: "0.4rem", borderLeft: "2px solid #818CF830", marginBottom: "0.15rem" }}>{s}</div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Preguntas */}
                                                {gm.preguntasDetonadoras && (
                                                    <div>
                                                        <div style={{ fontSize: "0.55rem", color: "#F59E0B", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>💡 Preguntas Detonadoras</div>
                                                        {gm.preguntasDetonadoras.map((p, i) => (
                                                            <div key={i} style={{ fontSize: "0.75rem", color: "#FDE68A", fontStyle: "italic", lineHeight: 1.5 }}>&ldquo;{p}&rdquo;</div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Materiales + Evaluación */}
                                                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                                                    {gm.materialesSugeridos && (
                                                        <div style={{ flex: 1, minWidth: "120px" }}>
                                                            <div style={{ fontSize: "0.55rem", color: "#F97316", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>📦 Materiales</div>
                                                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
                                                                {gm.materialesSugeridos.map((m, i) => (
                                                                    <span key={i} style={{ fontSize: "0.65rem", background: "#F9731615", color: "#FDBA74", padding: "0.1rem 0.35rem", borderRadius: "0.3rem" }}>{m}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {gm.evaluacion && (
                                                        <div style={{ flex: 1, minWidth: "120px" }}>
                                                            <div style={{ fontSize: "0.55rem", color: "#EC4899", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>📊 Evaluación</div>
                                                            <p style={{ fontSize: "0.72rem", color: "#F9A8D4", margin: 0 }}>{gm.evaluacion}</p>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Actividades */}
                                                <div>
                                                    <div style={{ fontSize: "0.55rem", color: "#22C55E", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.2rem" }}>📌 Actividades en Clase</div>
                                                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.2rem" }}>
                                                        {bloque.enClase.map((act, i) => (
                                                            <span key={i} style={{ fontSize: "0.65rem", background: "#22C55E15", color: "#86EFAC", padding: "0.1rem 0.35rem", borderRadius: "0.3rem" }}>{act}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* PDF button */}
                                                <button onClick={() => {
                                                    const w = window.open('', '_blank', 'width=800,height=900');
                                                    if (!w) return;
                                                    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ficha - ${bloque.nombre}</title>
                                                    <style>body{font-family:system-ui,sans-serif;max-width:700px;margin:2rem auto;color:#1E293B;padding:0 1rem}
                                                    h1{font-size:1.4rem;border-bottom:3px solid ${materia.color};padding-bottom:0.5rem;color:${materia.color}}
                                                    h2{font-size:1rem;margin:1.2rem 0 0.4rem;color:#334155}
                                                    .badge{display:inline-block;background:#F1F5F9;padding:0.2rem 0.5rem;border-radius:0.3rem;font-size:0.8rem;margin:0.15rem}
                                                    .box{background:#F8FAFC;border-left:3px solid ${materia.color};padding:0.6rem 0.8rem;border-radius:0 0.4rem 0.4rem 0;margin:0.5rem 0}
                                                    ul{margin:0.3rem 0;padding-left:1.2rem}li{margin:0.2rem 0;font-size:0.9rem}
                                                    .meta{color:#64748B;font-size:0.8rem}
                                                    .footer{margin-top:2rem;padding-top:1rem;border-top:1px solid #E2E8F0;font-size:0.75rem;color:#94A3B8;text-align:center}
                                                    @media print{body{margin:1rem}}</style></head><body>
                                                    <div class="meta">${MATERIA_ICONS[slug] || materia.emoji} ${materia.nombre} · Bloque ${bloque.bloque} · ${bloque.meses} · ${gradoData.nombre}</div>
                                                    <h1>${bloque.nombre}</h1>
                                                    <div class="box"><strong>🎯 Objetivo:</strong> ${gm.objetivo}</div>
                                                    <div class="box"><strong>📋 Competencia SEP:</strong> ${gm.competencia}</div>
                                                    ${gm.aprendizajesEsperados ? `<h2>✅ Aprendizajes Esperados</h2><ul>${gm.aprendizajesEsperados.map(a => `<li>${a}</li>`).join('')}</ul>` : ''}
                                                    ${gm.secuenciaDidactica ? `<h2>📝 Secuencia Didáctica</h2><ul>${gm.secuenciaDidactica.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
                                                    ${gm.preguntasDetonadoras ? `<h2>💡 Preguntas Detonadoras</h2><ul>${gm.preguntasDetonadoras.map(p => `<li><em>"${p}"</em></li>`).join('')}</ul>` : ''}
                                                    ${gm.materialesSugeridos ? `<h2>📦 Materiales</h2><div>${gm.materialesSugeridos.map(m => `<span class="badge">${m}</span>`).join(' ')}</div>` : ''}
                                                    ${gm.evaluacion ? `<h2>📊 Evaluación</h2><p>${gm.evaluacion}</p>` : ''}
                                                    <h2>📌 Actividades en Clase</h2><div>${bloque.enClase.map(a => `<span class="badge">${a}</span>`).join(' ')}</div>
                                                    <div class="footer">Chispito.mx — Ficha pedagógica · ${gradoData.nombre}</div>
                                                    <script>setTimeout(()=>window.print(),400)<\/script>
                                                    </body></html>`);
                                                    w.document.close();
                                                }}
                                                    style={{
                                                        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                                                        padding: "0.5rem", borderRadius: "0.5rem", border: "none", cursor: "pointer",
                                                        background: `linear-gradient(135deg,${materia.color},${materia.color}AA)`,
                                                        color: "white", fontSize: "0.75rem", fontWeight: 700, width: "100%",
                                                    }}>
                                                    📥 Descargar PDF
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </section>
            </main>
        </>
    );
}
