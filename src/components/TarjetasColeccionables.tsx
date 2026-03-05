"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Datos de todos los personajes con sus tarjetas coleccionables
const PERSONAJES_CARTAS = [
    {
        id: "nico",
        nombre: "Nico",
        subtitulo: "El Cohete Aventurero",
        emoji: "🚀",
        rareza: "LEGENDARIA",
        rarezaColor: "#FFD700",
        gradoAparece: "Kinder",
        descripcion: "El protagonista de la historia. Nico nació curioso y nunca dejó de serlo.",
        stats: [
            { nombre: "Curiosidad", valor: 5 },
            { nombre: "Valentía", valor: 4 },
            { nombre: "Amistad", valor: 5 },
        ],
        imagenPortrait: "/personajes/nico.png",
        imagenTarjeta: "/personajes/tarjeta_nico.png",
        gradiente: "from-blue-600 to-purple-700",
        border: "#818CF8",
        frase: "\"¿Por qué... y cómo?\"",
    },
    {
        id: "eli",
        nombre: "Eli",
        subtitulo: "La Flor Más Lista",
        emoji: "🌸",
        rareza: "ULTRA RARA",
        rarezaColor: "#F472B6",
        gradoAparece: "3° Primaria",
        descripcion: "La más inteligente del salón. Y lo que Nico no sabe... es que Eli también lo nota.",
        stats: [
            { nombre: "Inteligencia", valor: 5 },
            { nombre: "Bondad", valor: 5 },
            { nombre: "Curiosidad", valor: 5 },
        ],
        imagenPortrait: "/personajes/eli_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_eli.png",
        gradiente: "from-pink-600 to-rose-700",
        border: "#F472B6",
        frase: "\"Las flores crecen lento, pero llegan al sol.\"",
    },
    {
        id: "luna",
        nombre: "La Luna",
        subtitulo: "La Que Ilumina el Camino",
        emoji: "🌙",
        rareza: "RARA",
        rarezaColor: "#C4B5FD",
        gradoAparece: "Kinder",
        descripcion: "La primera amiga de Nico. Siempre tranquila, siempre brillando cuando más se necesita.",
        stats: [
            { nombre: "Sabiduría", valor: 5 },
            { nombre: "Calma", valor: 5 },
            { nombre: "Luz Interior", valor: 5 },
        ],
        imagenPortrait: "/personajes/luna_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_luna.png",
        gradiente: "from-indigo-700 to-purple-800",
        border: "#C4B5FD",
        frase: "\"La oscuridad no existe, solo falta un poco de luz.\"",
    },
    {
        id: "pipo",
        nombre: "Pipo",
        subtitulo: "La Estrella Traviesa",
        emoji: "⭐",
        rareza: "POCO COMÚN",
        rarezaColor: "#FCD34D",
        gradoAparece: "1° Primaria",
        descripcion: "El cómico del grupo. Cae mal a algunos maestros, pero lo quieren todos los alumnos.",
        stats: [
            { nombre: "Humor", valor: 5 },
            { nombre: "Alegría", valor: 5 },
            { nombre: "Picardía", valor: 5 },
        ],
        imagenPortrait: "/personajes/pipo_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_pipo.png",
        gradiente: "from-yellow-600 to-amber-700",
        border: "#FCD34D",
        frase: "\"¡El que no se ríe no aprende!\"",
    },
    {
        id: "bruma",
        nombre: "Bruma",
        subtitulo: "La Nube Que Todo lo Piensa",
        emoji: "☁️",
        rareza: "POCO COMÚN",
        rarezaColor: "#94A3B8",
        gradoAparece: "2° Primaria",
        descripcion: "Parece distraída pero está resolviendo los problemas más difíciles en su mente.",
        stats: [
            { nombre: "Reflexión", valor: 5 },
            { nombre: "Paciencia", valor: 5 },
            { nombre: "Profundidad", valor: 5 },
        ],
        imagenPortrait: "/personajes/bruma_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_bruma.png",
        gradiente: "from-slate-600 to-gray-700",
        border: "#94A3B8",
        frase: "\"Cuando pienso volar, ya estoy volando.\"",
    },
    {
        id: "rex",
        nombre: "Rex",
        subtitulo: "El Historiador Eterno",
        emoji: "🦕",
        rareza: "RARA",
        rarezaColor: "#34D399",
        gradoAparece: "4° Primaria",
        descripcion: "65 millones de años de experiencia. Ha vivido la historia que enseña.",
        stats: [
            { nombre: "Historia", valor: 5 },
            { nombre: "Sabiduría", valor: 5 },
            { nombre: "Memoria", valor: 5 },
        ],
        imagenPortrait: "/personajes/rex_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_rex.png",
        gradiente: "from-green-700 to-emerald-800",
        border: "#34D399",
        frase: "\"El que no sabe de dónde viene, no sabe a dónde va.\"",
    },
    {
        id: "nano",
        nombre: "Nano",
        subtitulo: "El Científico Loco",
        emoji: "⚛️",
        rareza: "RARA",
        rarezaColor: "#38BDF8",
        gradoAparece: "5° Primaria",
        descripcion: "Falló 47 experimentos antes de su gran descubrimiento. Aprendió de cada uno.",
        stats: [
            { nombre: "Ciencia", valor: 5 },
            { nombre: "Energía", valor: 5 },
            { nombre: "Creatividad", valor: 5 },
        ],
        imagenPortrait: "/personajes/nano_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_nano.png",
        gradiente: "from-cyan-700 to-blue-800",
        border: "#38BDF8",
        frase: "\"¡Cada error es un experimento exitoso!\"",
    },
    {
        id: "cali",
        nombre: "Cali",
        subtitulo: "La Perfeccionista",
        emoji: "📐",
        rareza: "POCO COMÚN",
        rarezaColor: "#A78BFA",
        gradoAparece: "6° Primaria",
        descripcion: "Estricta. Exigente. Y cuando acierta, celebra más que nadie.",
        stats: [
            { nombre: "Precisión", valor: 5 },
            { nombre: "Excelencia", valor: 5 },
            { nombre: "Rigor", valor: 5 },
        ],
        imagenPortrait: "/personajes/cali_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_cali.png",
        gradiente: "from-violet-700 to-purple-800",
        border: "#A78BFA",
        frase: "\"Las cosas bien hechas, hechas quedan.\"",
    },
    {
        id: "volt",
        nombre: "Volt",
        subtitulo: "El Rayo de Secundaria",
        emoji: "⚡",
        rareza: "RARA",
        rarezaColor: "#FCD34D",
        gradoAparece: "1° Secundaria",
        descripcion: "Convierte los teoremas de álgebra en coreografías de luz eléctrica.",
        stats: [
            { nombre: "Energía", valor: 5 },
            { nombre: "Velocidad", valor: 5 },
            { nombre: "Motivación", valor: 5 },
        ],
        imagenPortrait: "/personajes/volt_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_volt.png",
        gradiente: "from-yellow-600 to-orange-700",
        border: "#FCD34D",
        frase: "\"¡En la vida todo es energía y transformación!\"",
    },
    {
        id: "pages",
        nombre: "Pages",
        subtitulo: "La Biblioteca Viviente",
        emoji: "📖",
        rareza: "POCO COMÚN",
        rarezaColor: "#D97706",
        gradoAparece: "2° Secundaria",
        descripcion: "Tiene memorizados 10,000 libros. Entiende los memes... a veces.",
        stats: [
            { nombre: "Elocuencia", valor: 5 },
            { nombre: "Memoria", valor: 5 },
            { nombre: "Cultura", valor: 5 },
        ],
        imagenPortrait: "/personajes/pages_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_pages.png",
        gradiente: "from-amber-700 to-stone-800",
        border: "#D97706",
        frase: "\"Cada libro que lees, es un mundo que descubres.\"",
    },
    {
        id: "cosmos",
        nombre: "Cosmos",
        subtitulo: "El Sabio del Universo",
        emoji: "🌌",
        rareza: "ULTRA LEGENDARIA",
        rarezaColor: "#818CF8",
        gradoAparece: "3° Secundaria",
        descripcion: "Ha visto nacer estrellas. Y dice que ninguna brilla más que la que aprende.",
        stats: [
            { nombre: "Sabiduría", valor: 5 },
            { nombre: "Poder", valor: 5 },
            { nombre: "Misterio", valor: 5 },
        ],
        imagenPortrait: "/personajes/cosmos_portrait.png",
        imagenTarjeta: "/personajes/tarjeta_cosmos.png",
        gradiente: "from-indigo-800 to-violet-900",
        border: "#818CF8",
        frase: "\"El universo está hecho de átomos y de historias.\"",
    },
];

// Componente de tarjeta individual tipo Pokémon
function TarjetaPersonaje({ personaje, index }: { personaje: typeof PERSONAJES_CARTAS[0]; index: number }) {
    const [volteada, setVolteada] = useState(false);
    const [hovering, setHovering] = useState(false);

    const rarezaDots: Record<string, number> = {
        "POCO COMÚN": 2, "RARA": 3, "ULTRA RARA": 4, "LEGENDARIA": 5, "ULTRA LEGENDARIA": 6,
    };
    const dots = rarezaDots[personaje.rareza] || 2;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.08, type: "spring", stiffness: 150 }}
            className="cursor-pointer"
            style={{ perspective: 1000, height: 420 }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={() => setVolteada(!volteada)}
        >
            <motion.div
                animate={{
                    rotateY: volteada ? 180 : 0,
                    scale: hovering ? 1.05 : 1,
                }}
                transition={{ duration: 0.5, type: "spring" }}
                style={{ transformStyle: "preserve-3d", position: "relative", height: "100%" }}
            >
                {/* FRENTE DE LA TARJETA */}
                <div
                    className="absolute inset-0 rounded-3xl overflow-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        background: `linear-gradient(135deg, var(--color-from, #2a2a4a), var(--color-to, #1a1a3a))`,
                        border: `2px solid ${personaje.border}60`,
                        boxShadow: hovering
                            ? `0 20px 60px ${personaje.border}40, 0 0 0 1px ${personaje.border}30`
                            : `0 8px 30px rgba(0,0,0,0.4)`,
                    }}
                >
                    {/* Fondo con imagen tarjeta */}
                    <div className="relative h-52 overflow-hidden">
                        <Image
                            src={personaje.imagenTarjeta}
                            alt={`Tarjeta de ${personaje.nombre}`}
                            fill
                            className="object-cover"
                        />
                        {/* Overlay gradiente */}
                        <div
                            className="absolute inset-0"
                            style={{ background: `linear-gradient(to bottom, transparent 60%, rgba(10,10,30,0.95) 100%)` }}
                        />
                        {/* Rareza badge */}
                        <div
                            className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-black tracking-widest"
                            style={{
                                background: `${personaje.rarezaColor}30`,
                                border: `1px solid ${personaje.rarezaColor}`,
                                color: personaje.rarezaColor,
                                fontSize: "0.6rem",
                            }}
                        >
                            {personaje.rareza}
                        </div>
                        {/* Emoji flotante */}
                        <motion.div
                            animate={hovering ? { y: [0, -5, 0] } : {}}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute top-3 left-3 text-3xl"
                            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))" }}
                        >
                            {personaje.emoji}
                        </motion.div>
                    </div>

                    {/* Contenido texto */}
                    <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-fredoka text-xl text-white leading-tight">{personaje.nombre}</h3>
                                <p className="text-xs font-medium" style={{ color: personaje.border }}>
                                    {personaje.subtitulo}
                                </p>
                            </div>
                            {/* Estrellas de rareza */}
                            <div className="flex gap-0.5 mt-1">
                                {Array.from({ length: dots }).map((_, i) => (
                                    <motion.span
                                        key={i}
                                        animate={{ opacity: hovering ? [1, 0.5, 1] : 1 }}
                                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                                        className="text-xs"
                                        style={{ color: personaje.rarezaColor }}
                                    >
                                        ✦
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="space-y-1.5">
                            {personaje.stats.map(stat => (
                                <div key={stat.nombre}>
                                    <div className="flex justify-between text-xs mb-0.5">
                                        <span className="text-white/50">{stat.nombre}</span>
                                        <span style={{ color: personaje.border }}>{stat.valor}/5</span>
                                    </div>
                                    <div className="h-1 rounded-full bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${stat.valor * 20}%` }}
                                            transition={{ delay: index * 0.08 + 0.4, duration: 0.8 }}
                                            className="h-full rounded-full"
                                            style={{ background: `linear-gradient(90deg, ${personaje.border}80, ${personaje.border})` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-white/30 text-xs mt-3 text-center">Toca para ver más →</p>
                    </div>
                </div>

                {/* REVERSO DE LA TARJETA */}
                <div
                    className="absolute inset-0 rounded-3xl overflow-hidden p-5 flex flex-col justify-between"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        background: `linear-gradient(135deg, #0a0020, #150030)`,
                        border: `2px solid ${personaje.border}60`,
                    }}
                >
                    {/* Header reverso */}
                    <div className="text-center mb-4">
                        <div className="text-4xl mb-2" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}>
                            {personaje.emoji}
                        </div>
                        <h3 className="font-fredoka text-2xl text-white">{personaje.nombre}</h3>
                        <p className="text-xs" style={{ color: personaje.border }}>{personaje.subtitulo}</p>
                    </div>

                    {/* Descripción */}
                    <div
                        className="p-3 rounded-xl mb-4 flex-1"
                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${personaje.border}30` }}
                    >
                        <p className="text-white/80 text-sm text-center leading-relaxed">
                            {personaje.descripcion}
                        </p>
                    </div>

                    {/* Frase célebre */}
                    <div className="text-center">
                        <p className="text-xs italic" style={{ color: personaje.border }}>
                            {personaje.frase}
                        </p>
                        <p className="text-white/20 text-xs mt-2">
                            Aparece desde: {personaje.gradoAparece}
                        </p>
                    </div>

                    {/* Universidad Chispito watermark */}
                    <div className="text-center mt-3">
                        <span className="text-xs text-white/20 tracking-widest uppercase font-bold">
                            Universo Chispito
                        </span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Componente de filtro por rareza
type Rareza = "TODOS" | "POCO COMÚN" | "RARA" | "ULTRA RARA" | "LEGENDARIA" | "ULTRA LEGENDARIA";

const FILTROS: { label: string; valor: Rareza; color: string }[] = [
    { label: "Todos", valor: "TODOS", color: "rgba(255,255,255,0.15)" },
    { label: "Poco Común", valor: "POCO COMÚN", color: "#64748B" },
    { label: "Rara", valor: "RARA", color: "#34D399" },
    { label: "Ultra Rara", valor: "ULTRA RARA", color: "#F472B6" },
    { label: "Legendaria", valor: "LEGENDARIA", color: "#FFD700" },
    { label: "Ultra Legendaria", valor: "ULTRA LEGENDARIA", color: "#818CF8" },
];

export default function TarjetasColeccionables() {
    const [filtroActivo, setFiltroActivo] = useState<Rareza>("TODOS");

    const tarjetasFiltradas = filtroActivo === "TODOS"
        ? PERSONAJES_CARTAS
        : PERSONAJES_CARTAS.filter(p => p.rareza === filtroActivo);

    return (
        <section className="py-20 px-4" id="tarjetas">
            {/* Header de la sección */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div
                        className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{ background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700" }}
                    >
                        🃏 Colección Exclusiva
                    </div>
                    <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-4">
                        Tarjetas Coleccionables del Universo Chispito
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        11 personajes. 3 rarezas. 1 universo. Toca cada tarjeta para descubrir su historia secreta.
                    </p>
                </motion.div>
            </div>

            {/* Filtros */}
            <div className="flex gap-3 flex-wrap justify-center mb-10">
                {FILTROS.map(filtro => (
                    <motion.button
                        key={filtro.valor}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFiltroActivo(filtro.valor)}
                        className="px-4 py-2 rounded-full text-sm font-bold transition-all"
                        style={{
                            background: filtroActivo === filtro.valor ? filtro.color : "rgba(255,255,255,0.05)",
                            border: `1px solid ${filtro.valor === filtroActivo ? filtro.color : "rgba(255,255,255,0.1)"}`,
                            color: filtroActivo === filtro.valor ? "white" : "rgba(255,255,255,0.5)",
                        }}
                    >
                        {filtro.label}
                    </motion.button>
                ))}
            </div>

            {/* Grid de tarjetas */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <AnimatePresence mode="popLayout">
                    {tarjetasFiltradas.map((personaje, i) => (
                        <TarjetaPersonaje key={personaje.id} personaje={personaje} index={i} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Contador */}
            <p className="text-center text-white/20 text-sm mt-8">
                Mostrando {tarjetasFiltradas.length} de {PERSONAJES_CARTAS.length} personajes · Colección completa desbloqueada
            </p>
        </section>
    );
}
