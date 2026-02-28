"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, Search } from "lucide-react";
import Link from "next/link";

// Mapa: grado+materia → carpeta local del libro descargado
const MAPA_LOCAL: Record<string, Record<string, { tipo: string; paginas: number }[]>> = {
    "primaria-1": {
        matematicas: [
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
        ],
        espanol: [
            { tipo: "lenguaje", paginas: 259 },
            { tipo: "lenguaje", paginas: 259 },
            { tipo: "lenguaje", paginas: 259 },
            { tipo: "lenguaje", paginas: 259 },
            { tipo: "lenguaje", paginas: 259 },
        ],
        ciencias: [
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
            { tipo: "saberes", paginas: 251 },
        ],
    },
    "primaria-2": {
        matematicas: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        espanol: Array(5).fill({ tipo: "lenguaje", paginas: 259 }),
        ciencias: Array(5).fill({ tipo: "saberes", paginas: 259 }),
    },
    "primaria-3": {
        matematicas: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        espanol: Array(5).fill({ tipo: "lenguaje", paginas: 259 }),
        ciencias: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        historia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
    },
    "primaria-4": {
        matematicas: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        espanol: Array(5).fill({ tipo: "lenguaje", paginas: 259 }),
        ciencias: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        historia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        geografia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
    },
    "primaria-5": {
        matematicas: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        espanol: Array(5).fill({ tipo: "lenguaje", paginas: 259 }),
        ciencias: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        historia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        geografia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
    },
    "primaria-6": {
        matematicas: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        espanol: Array(5).fill({ tipo: "lenguaje", paginas: 259 }),
        ciencias: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        historia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
        geografia: Array(5).fill({ tipo: "saberes", paginas: 259 }),
    },
    "kinder": {
        matematicas: Array(5).fill({ tipo: "saberes", paginas: 256 }),
        espanol: Array(5).fill({ tipo: "lenguaje", paginas: 256 }),
        conocimiento: Array(5).fill({ tipo: "saberes", paginas: 256 }),
        artes: Array(5).fill({ tipo: "saberes", paginas: 256 }),
    },
};

// Páginas iniciales por bloque (aproximado para cada materia)
const PAGINAS_INICIO: Record<string, number[]> = {
    matematicas: [8, 55, 100, 145, 190],
    espanol: [8, 60, 110, 155, 200],
    ciencias: [8, 58, 105, 150, 195],
    historia: [8, 55, 100, 145, 190],
    geografia: [8, 58, 105, 150, 195],
    conocimiento: [8, 55, 100, 145, 190],
    artes: [8, 55, 100, 145, 190],
};

interface Props {
    grado: string;
    materia: string;
    bloqueNum: number;
}

export default function LibroSepBadge({ grado, materia, bloqueNum }: Props) {
    const [expandido, setExpandido] = useState(false);
    const [paginaBuscada, setPaginaBuscada] = useState<string>("");

    // Buscar libro local
    const libroLocal = MAPA_LOCAL[grado]?.[materia]?.[bloqueNum - 1];
    if (!libroLocal) return null;

    const { tipo, paginas } = libroLocal;
    const paginaInicio = PAGINAS_INICIO[materia]?.[bloqueNum - 1] ?? 8;
    const paginaFin = Math.min(paginaInicio + 44, paginas);

    const urlVisorInterno = `/libro-sep/${grado}/${tipo}?pag=${paginaInicio}`;

    const paginaNum = parseInt(paginaBuscada);
    const paginaValida = !isNaN(paginaNum) && paginaNum >= 1 && paginaNum <= paginas;

    return (
        <div className="mb-6">
            {/* Badge principal */}
            <motion.button
                onClick={() => setExpandido(!expandido)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center gap-3 p-4 rounded-2xl text-left"
                style={{
                    background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
                    border: "2px solid #93C5FD",
                }}
            >
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#2563EB" }}
                >
                    <BookOpen size={22} color="white" />
                </div>

                <div className="flex-1 text-left">
                    <p className="text-blue-800 font-bold text-sm">
                        📚 Libro SEP — ver dentro de Chispito
                    </p>
                    <p className="text-blue-600 text-xs mt-0.5">
                        Págs. {paginaInicio}–{paginaFin} · Sin salir de la plataforma ✓
                    </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <span
                        className="text-xs font-bold px-2 py-1 rounded-full hidden sm:block"
                        style={{ background: "#2563EB", color: "white" }}
                    >
                        SEP ✓
                    </span>
                    {expandido
                        ? <ChevronUp size={18} className="text-blue-600" />
                        : <ChevronDown size={18} className="text-blue-600" />}
                </div>
            </motion.button>

            {/* Panel expandido */}
            <AnimatePresence>
                {expandido && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div
                            className="mt-2 p-5 rounded-2xl"
                            style={{ background: "white", border: "2px solid #BFDBFE" }}
                        >
                            {/* Explicación */}
                            <div
                                className="p-3 rounded-xl mb-4"
                                style={{ background: "#F0F9FF", border: "1px solid #BAE6FD" }}
                            >
                                <p className="text-sm text-sky-800">
                                    <strong>👨‍👩‍👧 Para papás:</strong> Este tema viene del libro SEP oficial.{" "}
                                    Puedes verlo aquí mismo en Chispito — <strong>sin salir a otros sitios</strong>.
                                </p>
                            </div>

                            {/* Botón principal: visor interno */}
                            <Link
                                href={urlVisorInterno}
                                className="flex items-center justify-center gap-2 p-3 rounded-xl font-bold mb-4 transition-all hover:opacity-90"
                                style={{ background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "white" }}
                            >
                                <BookOpen size={18} />
                                📖 Ver págs. {paginaInicio}–{paginaFin} en Chispito
                            </Link>

                            {/* Buscador por página */}
                            <div
                                className="p-4 rounded-xl"
                                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                            >
                                <p className="text-sm font-bold text-gray-700 mb-1 flex items-center gap-2">
                                    <Search size={16} />
                                    ¿En qué página va tu hijo hoy?
                                </p>
                                <p className="text-xs text-gray-500 mb-3">
                                    Escribe el número de página para ir directo:
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        min={1}
                                        max={paginas}
                                        placeholder="Ej: 20"
                                        value={paginaBuscada}
                                        onChange={e => setPaginaBuscada(e.target.value)}
                                        className="flex-1 px-4 py-2 rounded-xl border-2 font-bold text-center text-lg outline-none transition-colors"
                                        style={{
                                            borderColor: paginaValida ? "#2563EB" : "#E2E8F0",
                                            fontSize: "1.2rem",
                                        }}
                                    />
                                    <Link
                                        href={paginaValida ? `/libro-sep/${grado}/${tipo}?pag=${paginaNum}` : "#"}
                                        onClick={e => { if (!paginaValida) e.preventDefault(); }}
                                        className="px-5 py-2 rounded-xl font-bold flex items-center gap-1 transition-all"
                                        style={{
                                            background: paginaValida ? "#2563EB" : "#E5E7EB",
                                            color: paginaValida ? "white" : "#9CA3AF",
                                            cursor: paginaValida ? "pointer" : "not-allowed",
                                        }}
                                    >
                                        <BookOpen size={16} />
                                        Ir
                                    </Link>
                                </div>
                                {paginaValida && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-xs text-blue-600 mt-2"
                                    >
                                        → Abrirá la página {paginaNum} dentro de Chispito
                                    </motion.p>
                                )}
                            </div>

                            <p className="text-xs text-gray-400 mt-3 text-center">
                                📚 Libros de texto gratuitos SEP México · Disponibles en Chispito sin salir de la plataforma
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
