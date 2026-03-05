import fs from "fs";
import path from "path";
import CuadernilloPDF from "@/components/CuadernilloPDF";
import type { CuadernilloData, Ejercicio } from "@/components/CuadernilloPDF";
import { GRADOS, MATERIAS } from "@/data/curriculum";
import { PRIMARIA_1 } from "@/data/content-primaria";
import Link from "next/link";

export const dynamic = "force-static";

function cargarBloques(grado: string) {
    const baseDir = path.join(process.cwd(), "src", "data", "exercises", grado);
    if (!fs.existsSync(baseDir)) return [];

    const materias = fs.readdirSync(baseDir).filter(f =>
        fs.statSync(path.join(baseDir, f)).isDirectory()
    );

    const cuadernillos: CuadernilloData[] = [];
    const gradoInfo = GRADOS.find(g => g.id === grado);
    const gradoNombre = gradoInfo?.nombre ?? grado;

    // Contenido pedagógico real de content-primaria.ts
    const contenidoGrado = PRIMARIA_1;

    materias.forEach(materia => {
        const matDir = path.join(baseDir, materia);
        const archivos = fs.readdirSync(matDir)
            .filter(f => f.startsWith("bloque-") && f.endsWith(".json"))
            .sort();

        archivos.forEach(archivo => {
            try {
                const raw = JSON.parse(fs.readFileSync(path.join(matDir, archivo), "utf-8"));
                const materiaInfo = MATERIAS[materia as keyof typeof MATERIAS];
                const bloqueNum = raw.bloque || parseInt(archivo.replace("bloque-", "").replace(".json", ""));

                // Buscar contenido pedagógico real para esta materia y bloque
                const materiaContent = contenidoGrado?.materias?.[materia];
                const bloqueContent = materiaContent?.bloques?.find(b => b.bloque === bloqueNum);

                const cuadernillo: CuadernilloData = {
                    grado,
                    gradoNombre,
                    materia,
                    materiaNombre: materiaInfo?.nombre ?? materia,
                    materiaEmoji: materiaInfo?.emoji ?? "📘",
                    materiaColor: materiaInfo?.color ?? "#3B82F6",
                    bloqueNum,
                    bloqueNombre: raw.nombre || `Bloque ${bloqueNum}`,
                    meses: raw.meses || "",
                    temas: raw.temas || [],
                    ejerciciosV1: (raw.ejercicios?.v1 || []) as Ejercicio[],
                    ejerciciosV2: (raw.ejercicios?.v2 || []) as Ejercicio[],
                    // Inyectar contenido pedagógico real
                    contenidoPedagogico: bloqueContent ? {
                        enClase: bloqueContent.enClase || [],
                        intro: bloqueContent.guiaPapa?.intro || "",
                        comoExplicar: bloqueContent.guiaPapa?.comoExplicar || [],
                        truco: bloqueContent.guiaPapa?.truco || "",
                        errorComun: bloqueContent.guiaPapa?.error_comun || "",
                        actividadCasa: bloqueContent.guiaPapa?.actividad_casa || "",
                        objetivo: bloqueContent.guiaMaestro?.objetivo || "",
                        competencia: bloqueContent.guiaMaestro?.competencia || "",
                    } : undefined,
                };

                cuadernillos.push(cuadernillo);
            } catch (e) {
                console.error(`Error leyendo ${archivo}:`, e);
            }
        });
    });

    return cuadernillos;
}

export default function CuadernillosPage() {
    const grado = "primaria-1";
    const cuadernillos = cargarBloques(grado);

    const porMateria: Record<string, CuadernilloData[]> = {};
    cuadernillos.forEach(c => {
        if (!porMateria[c.materia]) porMateria[c.materia] = [];
        porMateria[c.materia].push(c);
    });

    const gradoInfo = GRADOS.find(g => g.id === grado);

    return (
        <main className="min-h-screen" style={{ background: "#0D1B2A" }}>
            <header className="pt-8 pb-6 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/" className="text-white/50 text-sm hover:text-white transition-colors">
                        Volver a Chispito.mx
                    </Link>
                    <h1 className="text-3xl font-black text-white mt-4">
                        Cuadernillos de Practica
                    </h1>
                    <p className="text-lg text-white/60 mt-2">
                        {gradoInfo?.nombre ?? grado} - Ciclo Escolar 2025-2026
                    </p>
                    <p className="text-sm text-white/40 mt-1">
                        PDFs profesionales listos para imprimir | Programa SEP Mexico
                    </p>
                    <div className="flex justify-center gap-6 mt-6">
                        <div className="text-center">
                            <p className="text-2xl font-black text-white">{cuadernillos.length}</p>
                            <p className="text-xs text-white/40">Cuadernillos</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-black text-green-400">{Object.keys(porMateria).length}</p>
                            <p className="text-xs text-white/40">Gratis</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-black text-white">
                                {cuadernillos.reduce((s, c) => s + c.ejerciciosV1.length + c.ejerciciosV2.length, 0)}
                            </p>
                            <p className="text-xs text-white/40">Ejercicios</p>
                        </div>
                    </div>
                </div>
            </header>
            <section className="px-4 pb-16">
                <div className="max-w-4xl mx-auto space-y-8">
                    {Object.entries(porMateria).map(([materia, items]) => {
                        const info = MATERIAS[materia as keyof typeof MATERIAS];
                        return (
                            <div key={materia}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                        style={{ background: info?.color ?? "#3B82F6" }}>
                                        {info?.emoji ?? "?"}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">{info?.nombre ?? materia}</h2>
                                        <p className="text-xs text-white/40">
                                            {items.length} cuadernillos | {items.reduce((s, c) => s + c.ejerciciosV1.length + c.ejerciciosV2.length, 0)} ejercicios
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-3 ml-2">
                                    {items.map((cuad, idx) => (
                                        <CuadernilloPDF key={cuad.bloqueNum} cuadernillo={cuad} gratis={idx === 0} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <footer className="py-8 text-center border-t border-white/10">
                <p className="text-white/30 text-sm">Chispito.mx - Cuadernillos de practica SEP 2025-2026</p>
            </footer>
        </main>
    );
}
