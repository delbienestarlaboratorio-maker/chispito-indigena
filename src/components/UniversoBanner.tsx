"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IMAGENES_MATERIA, getImagenMateria } from "@/data/imagenes-materia";

interface UniversoBannerProps {
    grado: string;   // e.g. "kinder", "primaria-1", "secundaria-3"
    materia: string; // e.g. "matematicas", "espanol", "ciencias"
    bloque?: number; // optional, for personalized messages
    className?: string;
}

export default function UniversoBanner({ grado, materia, bloque, className = "" }: UniversoBannerProps) {
    const imagen = getImagenMateria(grado, materia);

    // Si no hay imagen mapeada, usa un fallback genérico con Nico
    const fallback = {
        src: "/personajes/nico.png",
        compañero: "Nico",
        emojiCompañero: "🚀",
        fraseMotivadora: "¡Nico te acompaña en cada ejercicio! Tú puedes.",
        colorAccento: "#818CF8",
    };

    const data = imagen || fallback;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`relative rounded-2xl overflow-hidden mb-6 ${className}`}
            style={{
                border: `1px solid ${data.colorAccento}40`,
                background: `linear-gradient(135deg, rgba(10,10,30,0.95), rgba(20,10,50,0.9))`,
            }}
        >
            {/* Layout horizontal en desktop, vertical en mobile */}
            <div className="flex flex-col md:flex-row">
                {/* Imagen ilustración */}
                <div className="relative md:w-72 shrink-0" style={{ minHeight: 180 }}>
                    <Image
                        src={data.src}
                        alt={`${data.compañero} y Nico estudiando ${materia}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 288px"
                    />
                    {/* Gradiente lateral en desktop */}
                    <div
                        className="absolute inset-0 md:block hidden"
                        style={{ background: "linear-gradient(to right, transparent 70%, rgba(10,10,30,0.95) 100%)" }}
                    />
                </div>

                {/* Contenido */}
                <div className="flex-1 p-5 flex flex-col justify-center">
                    {/* Badge del compañero */}
                    <div className="flex items-center gap-2 mb-3">
                        <motion.span
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-2xl"
                        >
                            {data.emojiCompañero}
                        </motion.span>
                        <span
                            className="text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider"
                            style={{
                                background: `${data.colorAccento}20`,
                                border: `1px solid ${data.colorAccento}50`,
                                color: data.colorAccento,
                            }}
                        >
                            {data.compañero} te acompaña
                        </span>
                        {bloque && (
                            <span className="text-xs text-white/30 ml-1">
                                · Bloque {bloque}
                            </span>
                        )}
                    </div>

                    {/* Frase motivadora */}
                    <p
                        className="text-white/80 text-sm leading-relaxed italic mb-3"
                        style={{ maxWidth: 420 }}
                    >
                        &ldquo;{data.fraseMotivadora}&rdquo;
                    </p>

                    {/* CTA al universo */}
                    <Link href="/universo">
                        <motion.span
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-1 text-xs font-semibold cursor-pointer transition-colors"
                            style={{ color: `${data.colorAccento}CC` }}
                        >
                            🌌 Ver la historia completa en el Universo Chispito →
                        </motion.span>
                    </Link>
                </div>
            </div>

            {/* Barra de acento en la parte baja */}
            <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(to right, transparent, ${data.colorAccento}60, transparent)` }}
            />
        </motion.div>
    );
}
