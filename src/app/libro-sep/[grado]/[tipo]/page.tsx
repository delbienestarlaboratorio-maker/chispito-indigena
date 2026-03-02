"use client";
import { useState, useCallback, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, BookOpen, ZoomIn, ZoomOut } from "lucide-react";

// Mapa de libros locales descargados
// Formato: grado → tipo → { totalPaginas, descripcion }
const LIBROS_LOCALES: Record<string, Record<string, { paginas: number; titulo: string }>> = {
    "preescolar-1": { "saberes": { paginas: 256, titulo: "Nuestros Saberes 1°" } },
    "preescolar-2": { "saberes": { paginas: 256, titulo: "Nuestros Saberes 2°" } },
    "preescolar-3": { "saberes": { paginas: 256, titulo: "Nuestros Saberes 3°" } },
    "primaria-1": {
        "saberes": { paginas: 251, titulo: "Nuestros Saberes 1°" },
        "lenguaje": { paginas: 259, titulo: "Múltiples Lenguajes 1°" },
        "proyectos-aula": { paginas: 275, titulo: "Proyectos del Aula 1°" },
        "proyectos-comunitarios": { paginas: 275, titulo: "Proyectos Comunitarios 1°" },
        "proyectos-escolares": { paginas: 275, titulo: "Proyectos Escolares 1°" },
        "trazos-palabras": { paginas: 131, titulo: "Múltiples Lenguajes: Trazos y Palabras 1°" },
    },
    "primaria-2": {
        "saberes": { paginas: 259, titulo: "Nuestros Saberes 2°" },
        "lenguaje": { paginas: 259, titulo: "Múltiples Lenguajes 2°" },
        "proyectos-aula": { paginas: 267, titulo: "Proyectos del Aula 2°" },
        "proyectos-comunitarios": { paginas: 281, titulo: "Proyectos Comunitarios 2°" },
        "proyectos-escolares": { paginas: 275, titulo: "Proyectos Escolares 2°" },
    },
    "primaria-3": {
        "saberes": { paginas: 259, titulo: "Nuestros Saberes 3°" },
        "lenguaje": { paginas: 259, titulo: "Múltiples Lenguajes 3°" },
        "proyectos-aula": { paginas: 281, titulo: "Proyectos del Aula 3°" },
        "proyectos-comunitarios": { paginas: 281, titulo: "Proyectos Comunitarios 3°" },
        "proyectos-escolares": { paginas: 281, titulo: "Proyectos Escolares 3°" },
    },
    "primaria-4": {
        "saberes": { paginas: 259, titulo: "Nuestros Saberes 4°" },
        "lenguaje": { paginas: 259, titulo: "Múltiples Lenguajes 4°" },
        "proyectos-aula": { paginas: 281, titulo: "Proyectos del Aula 4°" },
        "proyectos-comunitarios": { paginas: 281, titulo: "Proyectos Comunitarios 4°" },
        "proyectos-escolares": { paginas: 281, titulo: "Proyectos Escolares 4°" },
    },
    "primaria-5": {
        "saberes": { paginas: 259, titulo: "Nuestros Saberes 5°" },
        "lenguaje": { paginas: 259, titulo: "Múltiples Lenguajes 5°" },
        "proyectos-aula": { paginas: 281, titulo: "Proyectos del Aula 5°" },
        "proyectos-comunitarios": { paginas: 281, titulo: "Proyectos Comunitarios 5°" },
        "proyectos-escolares": { paginas: 281, titulo: "Proyectos Escolares 5°" },
    },
    "primaria-6": {
        "saberes": { paginas: 259, titulo: "Nuestros Saberes 6°" },
        "lenguaje": { paginas: 259, titulo: "Múltiples Lenguajes 6°" },
        "proyectos-aula": { paginas: 281, titulo: "Proyectos del Aula 6°" },
        "proyectos-comunitarios": { paginas: 281, titulo: "Proyectos Comunitarios 6°" },
        "proyectos-escolares": { paginas: 281, titulo: "Proyectos Escolares 6°" },
    },
};

function padPage(n: number) {
    return String(n).padStart(3, "0");
}

export default function LibroSepVisorPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();

    const grado = params.grado as string;
    const tipo = params.tipo as string;
    const initialPage = parseInt(searchParams.get("pag") || "1");

    const libroInfo = LIBROS_LOCALES[grado]?.[tipo];
    const totalPaginas = libroInfo?.paginas || 260;

    const [pagina, setPagina] = useState(Math.max(1, Math.min(initialPage, totalPaginas)));
    const [zoom, setZoom] = useState(1);
    const [inputPag, setInputPag] = useState(String(pagina));
    const [cargando, setCargando] = useState(false);

    const irAPagina = useCallback((n: number) => {
        const clamp = Math.max(1, Math.min(n, totalPaginas));
        setPagina(clamp);
        setInputPag(String(clamp));
        router.replace(`?pag=${clamp}`, { scroll: false });
    }, [totalPaginas, router]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") irAPagina(pagina - 1);
            if (e.key === "ArrowRight") irAPagina(pagina + 1);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [pagina, irAPagina]);

    const imgUrl = `/api/libro-sep/${grado}/${tipo}/pag-${padPage(pagina - 1)}.jpg`;

    const gradoNombre = grado.replace("primaria-", "").replace("preescolar-", "Preescolar ").replace("secundaria-", "Secundaria ");
    const tipoNombre = tipo.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

    return (
        <div className="min-h-screen flex flex-col" style={{ background: "#0F172A" }}>
            {/* Header */}
            <header
                className="sticky top-0 z-50 flex items-center justify-between px-4 py-3"
                style={{ background: "rgba(15,23,42,0.95)", borderBottom: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
            >
                <div className="flex items-center gap-3">
                    <Link
                        href={`/${grado}`}
                        className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                    >
                        <X size={16} />
                        Cerrar
                    </Link>
                    <div className="w-px h-5 bg-white/20" />
                    <div className="flex items-center gap-2">
                        <BookOpen size={18} className="text-blue-400" />
                        <div>
                            <p className="text-white font-semibold text-sm leading-tight">
                                {libroInfo?.titulo || `Libro SEP ${tipoNombre}`}
                            </p>
                            <p className="text-white/40 text-xs">{gradoNombre} Primaria · SEP 2025</p>
                        </div>
                    </div>
                </div>

                {/* Controles */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setZoom(z => Math.max(0.5, z - 0.25))}
                        className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <ZoomOut size={16} />
                    </button>
                    <span className="text-white/40 text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
                    <button
                        onClick={() => setZoom(z => Math.min(3, z + 0.25))}
                        className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <ZoomIn size={16} />
                    </button>

                    {/* Logo Chispito */}
                    <div className="hidden sm:flex items-center gap-1 ml-3 px-3 py-1 rounded-full" style={{ background: "rgba(255,214,10,0.12)", border: "1px solid rgba(255,214,10,0.25)" }}>
                        <span className="text-yellow-400 font-bold text-sm">⚡ Chispito.mx</span>
                    </div>
                </div>
            </header>

            {/* Visor de página */}
            <main className="flex-1 flex flex-col items-center py-6 px-4 overflow-x-hidden">
                <div
                    className="relative shadow-2xl rounded-lg overflow-hidden transition-all duration-200"
                    style={{
                        width: `${Math.round(600 * zoom)}px`,
                        maxWidth: "100%",
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        key={imgUrl}
                        src={imgUrl}
                        alt={`Libro SEP — Página ${pagina}`}
                        className="w-full h-auto"
                        style={{ display: "block" }}
                        onLoadStart={() => setCargando(true)}
                        onLoad={() => setCargando(false)}
                        onError={() => setCargando(false)}
                    />
                    {cargando && (
                        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(15,23,42,0.7)" }}>
                            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full" />
                        </div>
                    )}
                </div>
            </main>

            {/* Navegación inferior */}
            <nav
                className="sticky bottom-0 flex items-center justify-center gap-4 px-4 py-3"
                style={{ background: "rgba(15,23,42,0.95)", borderTop: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
            >
                <button
                    onClick={() => irAPagina(pagina - 1)}
                    disabled={pagina <= 1}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-sm transition-all disabled:opacity-30"
                    style={{ background: "#2563EB", color: "white" }}
                >
                    <ChevronLeft size={18} /> Anterior
                </button>

                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        min={1}
                        max={totalPaginas}
                        value={inputPag}
                        onChange={e => setInputPag(e.target.value)}
                        onBlur={() => irAPagina(parseInt(inputPag) || pagina)}
                        onKeyDown={e => { if (e.key === "Enter") irAPagina(parseInt(inputPag) || pagina); }}
                        className="w-16 text-center py-2 rounded-xl font-bold text-sm outline-none"
                        style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.15)" }}
                    />
                    <span className="text-white/40 text-sm">/ {totalPaginas}</span>
                </div>

                <button
                    onClick={() => irAPagina(pagina + 1)}
                    disabled={pagina >= totalPaginas}
                    className="flex items-center gap-1 px-4 py-2 rounded-xl font-bold text-sm transition-all disabled:opacity-30"
                    style={{ background: "#2563EB", color: "white" }}
                >
                    Siguiente <ChevronRight size={18} />
                </button>
            </nav>

            {/* Nota legal */}
            <p className="text-center text-white/20 text-xs py-2 pb-3">
                Libros de texto gratuitos SEP México — Acceso público garantizado por ley 🇲🇽 · Chispito.mx los pone disponibles sin salir de la plataforma
            </p>
        </div>
    );
}
