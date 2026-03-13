"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import TarjetasColeccionables from "@/components/TarjetasColeccionables";

// ══════════════════════════════════════════════════════════════════════
//  DATOS DEL UNIVERSO NICO — la historia completa grado a grado
// ══════════════════════════════════════════════════════════════════════

const CAPÍTULOS = [
    {
        grado: "kinder",
        gradoLink: "/kinder/matematicas/bloque-1",
        titulo: "El Primer Despegue",
        subtitulo: "Kinder — La aventura comienza",
        emoji: "🌙",
        colorFondo: "from-indigo-900 via-purple-900 to-blue-900",
        colorAcento: "#A78BFA",
        colorCard: "rgba(99,60,180,0.3)",
        personaje: "Luna",
        emojiPersonaje: "🌙",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nico_kinder.png",
        imagenEscena2: "/personajes/nico_kinder_contando.png",
        imagenPersonaje: "/personajes/luna_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "En el rincón más brillante del cosmos, vivía un pequeño cohete llamado NICO...",
                        emoji: "🌌",
                        color: "from-purple-800 to-indigo-900",
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🚀 Nico",
                        texto: "¡HOY ES MI PRIMER DÍA DE KINDER! ¡No sé nada de nada... pero voy a aprender TODO!",
                        color: "from-blue-700 to-purple-800",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "escena",
                        texto: "En el salón de la señorita Estrella, Nico conoce a LUNA — la más tranquila y brillante de todos...",
                        emoji: "🌙",
                        color: "from-slate-800 to-indigo-900",
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🌙 Luna",
                        texto: "¡Hola, Nico! No tengas miedo. En kinder aprendemos juntos. Yo always te voy a iluminar el camino.",
                        color: "from-indigo-800 to-purple-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "accion",
                        texto: "Juntos, Nico y Luna aprenden a contar hasta 5, a reconocer figuras y a escribir su nombre por primera vez.",
                        emoji: "⭐",
                        color: "from-purple-700 to-blue-900",
                    },
                    {
                        tipo: "cierre",
                        texto: "Nico llega a casa con la primera estrella dorada de su vida. 'El aprender es como despegar', piensa. 'Una vez que empiezas, ya no puedes parar.'",
                        emoji: "🌟",
                        color: "from-blue-800 to-indigo-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"El primer paso es siempre el más importante.\" — Nico, 5 años",
        colorFrase: "#C4B5FD",
    },
    {
        grado: "primaria-1",
        gradoLink: "/primaria-1/matematicas/bloque-1",
        titulo: "Las Estrellas Traviesas",
        subtitulo: "1° Primaria — Un nuevo amigo llega",
        emoji: "⭐",
        colorFondo: "from-yellow-900 via-orange-900 to-amber-900",
        colorAcento: "#FCD34D",
        colorCard: "rgba(180,120,0,0.3)",
        personaje: "Pipo",
        emojiPersonaje: "⭐",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nico_primaria1_pipo.png",
        imagenPersonaje: "/personajes/pipo_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "1° de primaria. Nico ya sabe contar, ya sabe su nombre. ¡Pero ahora viene lo bueno!",
                        emoji: "📚",
                        color: "from-amber-800 to-orange-900",
                    },
                    {
                        tipo: "accion",
                        texto: "El primer día, algo pequeño y brillante cae del techo del salón... ¡Era PIPO! La estrella más traviesa del universo.",
                        emoji: "⭐",
                        color: "from-yellow-800 to-amber-900",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "⭐ Pipo",
                        texto: "¡JAJAJA! ¡Me resbalo siempre que aprendo algo nuevo! Es que el conocimiento me pone nervioso... pero de emoción.",
                        color: "from-orange-700 to-yellow-900",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🚀 Nico",
                        texto: "¿Nervioso de emoción? ¡YO TAMBIÉN! ¡Somos iguales, Pipo!",
                        color: "from-amber-700 to-orange-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "escena",
                        texto: "Juntos aprendieron las sumas, las restas y las primeras palabras completas. Pipo hacía reír a todos — incluso cuando se equivocaba.",
                        emoji: "📝",
                        color: "from-yellow-900 to-amber-800",
                    },
                    {
                        tipo: "cierre",
                        texto: "\"Equivocarse no es malo\", le dijo Pipo a Nico, \"¡Es que tu cerebro está haciendo ejercicio!\"",
                        emoji: "💪",
                        color: "from-amber-800 to-yellow-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"¡El que no se ríe no aprende!\" — Pipo, la estrella más traviesa",
        colorFrase: "#FCD34D",
    },
    {
        grado: "primaria-2",
        gradoLink: "/primaria-2/matematicas/bloque-1",
        titulo: "La Nube Que Todo lo Piensa",
        subtitulo: "2° Primaria — Un misterio en el cielo",
        emoji: "☁️",
        colorFondo: "from-slate-900 via-gray-900 to-zinc-900",
        colorAcento: "#94A3B8",
        colorCard: "rgba(100,116,139,0.3)",
        personaje: "Bruma",
        emojiPersonaje: "☁️",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nico_primaria2_bruma.png",
        imagenPersonaje: "/personajes/bruma_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "En 2° de primaria, los problemas de matemáticas se volvieron más difíciles. Nico se forzaba los engranajes de la mente...",
                        emoji: "🤔",
                        color: "from-slate-800 to-gray-900",
                    },
                    {
                        tipo: "accion",
                        texto: "Un día, mirando por la ventana, vio una nube que tenía forma de ecuación. La nube... ¡parpadeó!",
                        emoji: "☁️",
                        color: "from-gray-800 to-slate-900",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "☁️ Bruma",
                        texto: "Yo soy Bruma. Lo veo todo desde aquí arriba. Tú, Nico, tienes la respuesta. Solo necesitas... silencio.",
                        color: "from-zinc-700 to-gray-900",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🚀 Nico",
                        texto: "¿Silencio? ¡Pero si a mí me gusta el ruido!",
                        color: "from-slate-700 to-zinc-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "escena",
                        texto: "Bruma le enseñó algo poderoso: pensar antes de contestar. \"Las mejores respuestas\", dijo, \"nacen en la calma.\"",
                        emoji: "💭",
                        color: "from-gray-700 to-slate-900",
                    },
                    {
                        tipo: "cierre",
                        texto: "Desde ese día, Nico cerraba los ojos 3 segundos antes de responder. Y su calificación pasó de 7 a 10.",
                        emoji: "✨",
                        color: "from-slate-800 to-gray-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"Las mejores respuestas nacen en la calma.\" — Bruma, la nube sabia",
        colorFrase: "#94A3B8",
    },
    {
        grado: "primaria-3",
        gradoLink: "/primaria-3/matematicas/bloque-1",
        titulo: "La Flor Más Lista del Salón",
        subtitulo: "3° Primaria — Nico conoce a Eli 🌸",
        emoji: "🌸",
        colorFondo: "from-pink-900 via-rose-900 to-fuchsia-900",
        colorAcento: "#F472B6",
        colorCard: "rgba(180,50,120,0.3)",
        personaje: "Eli",
        emojiPersonaje: "🌸",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nico_eli_encuentro.png",
        imagenEscena2: "/personajes/nico_eli_estudiando.png",
        imagenPersonaje: "/personajes/eli_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "3° de primaria. El día más importante en la historia de Nico. No por las multiplicaciones. No por la historia de México.",
                        emoji: "📅",
                        color: "from-pink-900 to-rose-900",
                    },
                    {
                        tipo: "accion",
                        texto: "Sino por lo que entró al salón ese martes por la mañana... una flor de color rosa con los ojos más brillantes del universo.",
                        emoji: "🌸",
                        color: "from-fuchsia-900 to-pink-900",
                        especial: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "Maestra",
                        texto: "Clase, les presento a su nueva compañera: ¡Eli! Viene de la galaxia Floral y es la mejor estudiante de ciencias.",
                        color: "from-rose-800 to-pink-900",
                        burbuja: true,
                    },
                    {
                        tipo: "accion",
                        texto: "🚀💥 Nico comenzó a emitir vapor por todas sus turbinas. Sus indicadores marcaron: SOBRECALENTAMIENTO EMOCIONAL DETECTADO.",
                        emoji: "❤️",
                        color: "from-pink-800 to-fuchsia-900",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "🌸 Eli",
                        texto: "Hola a todos. Mi pregunta favorita es: ¿Por qué? ¿Alguien más se la hace todo el tiempo?",
                        color: "from-fuchsia-800 to-pink-900",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🚀 Nico",
                        texto: "...y-y-YO. Yo también me la hago. T-todo el tiempo. ¡Somos iguales! ...casi.",
                        color: "from-pink-700 to-rose-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "escena",
                        texto: "Eli siempre llegaba con las respuestas perfectas. Nico empezó a esforzarse más que nunca — no por él. Por estar a su altura.",
                        emoji: "📚",
                        color: "from-rose-900 to-fuchsia-900",
                    },
                    {
                        tipo: "cierre",
                        texto: "\"¿Qué calificación sacaste?\", le preguntó Eli un día. Nico miró su 10. Luego la miró a ella. \"Lo que tú sacaste.\" Eli sonrió. 🌸🚀",
                        emoji: "💕",
                        color: "from-pink-800 to-rose-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"Las flores crecen lentamente, pero siempre llegan al sol.\" — Eli 🌸",
        colorFrase: "#F472B6",
    },
    {
        grado: "primaria-4",
        gradoLink: "/primaria-4/matematicas/bloque-1",
        titulo: "El Dinosaurio Que Lo Sabe Todo",
        subtitulo: "4° Primaria — Rex y los misterios del tiempo",
        emoji: "🦕",
        colorFondo: "from-green-900 via-emerald-900 to-teal-900",
        colorAcento: "#34D399",
        colorCard: "rgba(0,150,80,0.3)",
        personaje: "Rex",
        emojiPersonaje: "🦕",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nico_rex_historia.png",
        imagenPersonaje: "/personajes/rex_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "4° de primaria: Historia, Geografía y Ciencias Naturales. El grupo de Nico se enfrenta al mayor reto hasta ahora.",
                        emoji: "📜",
                        color: "from-green-900 to-emerald-900",
                    },
                    {
                        tipo: "accion",
                        texto: "Un día, al entrar al salón, encontraron sentado en el escritorio del maestro a un dinosaurio pequeño con lentes y un sombrero de explorador.",
                        emoji: "🦕",
                        color: "from-teal-900 to-green-900",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "🦕 Rex",
                        texto: "¡Buenos días! Soy Rex. Tengo 65 millones de años y he visto TODO en la historia. Y hoy... voy a contarles.",
                        color: "from-emerald-800 to-teal-900",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "⭐ Pipo",
                        texto: "¿65 MILLONES? ¡Rex, qué tan viejo eres! ¿Conociste a los Aztecas?",
                        color: "from-green-800 to-emerald-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "cierre",
                        texto: "Rex los llevó en un viaje mental por la historia de México, los continentes y los ecosistemas. Cuando terminó la clase, nadie quería que terminara.",
                        emoji: "🌍",
                        color: "from-teal-800 to-green-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"El que no sabe de dónde viene, no sabe a dónde va.\" — Rex 🦕",
        colorFrase: "#34D399",
    },
    {
        grado: "primaria-5",
        gradoLink: "/primaria-5/matematicas/bloque-1",
        titulo: "¡Experimento Exitoso!",
        subtitulo: "5° Primaria — Nano y la ciencia loca",
        emoji: "🔬",
        colorFondo: "from-cyan-900 via-sky-900 to-blue-900",
        colorAcento: "#38BDF8",
        colorCard: "rgba(0,120,180,0.3)",
        personaje: "Nano",
        emojiPersonaje: "🔬",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nano_experimento.png",
        imagenPersonaje: "/personajes/nano_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "5° de primaria: el año de los experimentos. Nico está emocionado. Eli también. Rex aburrido porque ya lo vivió.",
                        emoji: "🧪",
                        color: "from-cyan-900 to-sky-900",
                    },
                    {
                        tipo: "accion",
                        texto: "En el laboratorio, apareció una figura tan pequeña que casi no se ve: un átomo con cara de loco y una libreta llena de fórmulas.",
                        emoji: "⚛️",
                        color: "from-sky-800 to-cyan-900",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "🔬 Nano",
                        texto: "¡HIPÓTESIS CONFIRMADA! ¡Los niños sí pueden aprender ciencias sin aburrirse! Soy Nano y voy a PROBARLO.",
                        color: "from-blue-700 to-sky-900",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🌸 Eli",
                        texto: "¡Nano! ¡Eso de la fotosíntesis que explicaste es INCREÍBLE! ¿Podemos repetirlo?",
                        color: "from-cyan-700 to-blue-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "cierre",
                        texto: "El experimento que más le gustó a Nico fue el del volcán de bicarbonato... hasta que explotó en la cara de Pipo. Pipo dijo que fue \"educativo.\"",
                        emoji: "🌋",
                        color: "from-sky-900 to-cyan-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"¡En la vida todo es energía y transformación!\" — Nano ⚛️",
        colorFrase: "#38BDF8",
    },
    {
        grado: "primaria-6",
        gradoLink: "/primaria-6/matematicas/bloque-1",
        titulo: "El Último Año en el Planeta Primaria",
        subtitulo: "6° Primaria — ¿Están listos para lo que sigue?",
        emoji: "📐",
        colorFondo: "from-violet-900 via-purple-900 to-indigo-900",
        colorAcento: "#A78BFA",
        colorCard: "rgba(120,60,220,0.3)",
        personaje: "Cali",
        emojiPersonaje: "📐",
        emojiNico: "🚀",
        imagenEscena: "/personajes/cali_graduacion_primaria.png",
        imagenPersonaje: "/personajes/cali_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "6° de primaria. El último año antes de la gran aventura. El grupo de Nico ha crecido... y también las preguntas de matemáticas.",
                        emoji: "🎓",
                        color: "from-violet-900 to-purple-900",
                    },
                    {
                        tipo: "accion",
                        texto: "Apareció Cali — la regla más precisa del universo. Perfecta, exigente, pero con un corazón de oro escondido bajo su escala.",
                        emoji: "📐",
                        color: "from-purple-800 to-indigo-900",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "📐 Cali",
                        texto: "En 6° no hay espacio para errores descuidados. Cada problema tiene una respuesta exacta. ¿Están dispuestos a encontrarla?",
                        color: "from-indigo-700 to-violet-900",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🚀 Nico",
                        texto: "¡Sí, Cali! He practicado desde kinder para esto. Estoy listo. ...creo.",
                        color: "from-violet-700 to-purple-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "cierre",
                        texto: "Al graduarse de 6°, Cali le dio a cada uno algo especial: su primera tarea de secundaria. \"Guardénsela\", dijo. \"Pónganla donde puedan ver que ya lo lograron.\"",
                        emoji: "🏆",
                        color: "from-purple-900 to-violet-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"Las cosas bien hechas, hechas quedan.\" — Cali 📐",
        colorFrase: "#A78BFA",
    },
    {
        grado: "secundaria-1",
        gradoLink: "/secundaria-1/matematicas/bloque-1",
        titulo: "¡Bienvenido a la Secundaria, Nico!",
        subtitulo: "1° Secundaria — Todo cambió. Todo es mejor.",
        emoji: "⚡",
        colorFondo: "from-yellow-900 via-amber-900 to-orange-900",
        colorAcento: "#FCD34D",
        colorCard: "rgba(180,130,0,0.3)",
        personaje: "Volt",
        emojiPersonaje: "⚡",
        emojiNico: "🚀",
        imagenEscena: "/personajes/volt_secundaria.png",
        imagenPersonaje: "/personajes/volt_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "Secundaria. Nuevas materias, nuevos salones, nuevos maestros. Nico llega con su mochila nueva y los nervios a mil.",
                        emoji: "🏫",
                        color: "from-amber-900 to-yellow-900",
                    },
                    {
                        tipo: "dialogo",
                        personaje: "⚡ Volt",
                        texto: "¡NUEVA SANGRE! ¡Yo soy Volt! ¡Y la secundaria va a ser lo más ELECTRIZANTE de tu vida!",
                        color: "from-yellow-700 to-orange-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "accion",
                        texto: "Volt aparecía en cada clase difícil con la energía de mil relámpagos, convirtiendo los teoremas de álgebra en choreografías de luz.",
                        emoji: "⚡",
                        color: "from-orange-800 to-amber-900",
                    },
                    {
                        tipo: "cierre",
                        texto: "Nico descubrió algo en 1° secundaria: los problemas difíciles no son obstáculos. Son invitaciones a ser más inteligente.",
                        emoji: "🌟",
                        color: "from-amber-800 to-yellow-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"¡En la vida todo es energía y transformación!\" — Volt ⚡",
        colorFrase: "#FCD34D",
    },
    {
        grado: "secundaria-2",
        gradoLink: "/secundaria-2/matematicas/bloque-1",
        titulo: "La Biblioteca del Infinito",
        subtitulo: "2° Secundaria — Pages y los mundos de papel",
        emoji: "📖",
        colorFondo: "from-stone-900 via-amber-900 to-brown-900",
        colorAcento: "#D97706",
        colorCard: "rgba(140,80,0,0.3)",
        personaje: "Pages",
        emojiPersonaje: "📖",
        emojiNico: "🚀",
        imagenEscena: "/personajes/nico_eli_secundaria_biblioteca.png",
        imagenPersonaje: "/personajes/pages_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "2° de secundaria. Literatura, historia universal, química avanzada. Nico empieza a sentir que el universe es su salón de clases.",
                        emoji: "📚",
                        color: "from-stone-900 to-amber-900",
                    },
                    {
                        tipo: "dialogo",
                        personaje: "📖 Pages",
                        texto: "Bienvenidos al mundo de las ideas. Yo soy Pages. Cada libro que lean... es un universo completo esperando ser descubierto.",
                        color: "from-amber-800 to-stone-900",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "cierre",
                        texto: "Fue Pages quien le dijo a Eli que sus composiciones de español eran extraordinarias. Y fue esa semana cuando Nico por fin... le habló primero a Eli. 🌸🚀",
                        emoji: "💕",
                        color: "from-amber-900 to-stone-900",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"Cada libro que lees, es un mundo que descubres.\" — Pages 📖",
        colorFrase: "#D97706",
    },
    {
        grado: "secundaria-3",
        gradoLink: "/secundaria-3/matematicas/bloque-1",
        titulo: "El Fin Es Solo Otro Comienzo",
        subtitulo: "3° Secundaria — La graduación del cosmos",
        emoji: "🌌",
        colorFondo: "from-indigo-950 via-blue-950 to-violet-950",
        colorAcento: "#818CF8",
        colorCard: "rgba(60,40,160,0.4)",
        personaje: "Cosmos",
        emojiPersonaje: "🌌",
        emojiNico: "🚀",
        imagenEscena: "/personajes/graduacion_secundaria_cosmos.png",
        imagenPersonaje: "/personajes/cosmos_portrait.png",
        viñetas: [
            {
                panels: [
                    {
                        tipo: "narrador",
                        texto: "3° de secundaria. El último capítulo de esta historia. Nico mira atrás y ve a todos sus amigos — Luna, Pipo, Bruma, Eli, Rex, Nano, Cali, Volt, Pages.",
                        emoji: "👀",
                        color: "from-indigo-950 to-blue-950",
                    },
                    {
                        tipo: "accion",
                        texto: "En el último día de clases, apareció alguien que nunca habían visto. Una presencia inmensa, calmada, que brillaba como el mismo universo.",
                        emoji: "🌌",
                        color: "from-blue-950 to-violet-950",
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "🌌 Cosmos",
                        texto: "Yo soy Cosmos. He visto nacer estrellas y morir galaxias. Y puedo decirles con certeza: ninguna estrella brilla más que la que aprende.",
                        color: "from-violet-900 to-indigo-950",
                        burbuja: true,
                    },
                    {
                        tipo: "dialogo",
                        personaje: "🚀 Nico",
                        texto: "...¿Y qué sigue, Cosmos? ¿Qué hay después de graduarse?",
                        color: "from-indigo-800 to-blue-950",
                        burbuja: true,
                    },
                ],
            },
            {
                panels: [
                    {
                        tipo: "dialogo",
                        personaje: "🌌 Cosmos",
                        texto: "Lo que tú elijas, Nico. El aprendizaje no termina. El universo entero es tu siguiente salón.",
                        color: "from-blue-900 to-violet-950",
                        burbuja: true,
                        especial: true,
                    },
                    {
                        tipo: "cierre",
                        texto: "Nico miró a Eli. Eli lo miró a él. Luna brilló desde la ventana. Pipo hizo un chiste. Rex lloró. Y todos juntos... salieron al siguiente universo.",
                        emoji: "✨",
                        color: "from-violet-950 to-indigo-950",
                        especial: true,
                    },
                ],
            },
        ],
        fraseFinal: "\"El universo está hecho de átomos y de historias.\" — Cosmos 🌌",
        colorFrase: "#818CF8",
    },
];

// ══════════════════════════════════════════════════════════════════════
//  COMPONENTES VISUALES
// ══════════════════════════════════════════════════════════════════════

function PanelViñeta({ panel, index }: {
    panel: {
        tipo: string; texto: string; emoji?: string; color: string;
        burbuja?: boolean; personaje?: string; especial?: boolean;
    };
    index: number;
}) {
    const esDialogo = panel.tipo === "dialogo" || panel.burbuja;
    const esCierre = panel.tipo === "cierre";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
            className={`relative rounded-2xl overflow-hidden ${esCierre || panel.especial ? "col-span-2" : ""}`}
            style={{
                border: panel.especial ? "3px solid rgba(255,255,255,0.4)" : "2px solid rgba(255,255,255,0.12)",
                boxShadow: panel.especial ? "0 0 30px rgba(255,255,255,0.15)" : "none",
            }}
        >
            <div className={`bg-gradient-to-br ${panel.color} p-5 h-full min-h-[120px] flex flex-col justify-between`}>
                {/* Tipo label */}
                <div className="flex items-center gap-2 mb-3">
                    {panel.emoji && (
                        <span className="text-2xl" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}>
                            {panel.emoji}
                        </span>
                    )}
                    {esDialogo && panel.personaje && (
                        <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                            {panel.personaje} dice:
                        </span>
                    )}
                    {panel.tipo === "narrador" && (
                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider italic">Narrador</span>
                    )}
                </div>

                {/* Texto */}
                <p
                    className="text-white leading-snug"
                    style={{
                        fontSize: panel.especial ? "1.1rem" : "0.92rem",
                        fontWeight: esDialogo ? 600 : 400,
                        fontStyle: panel.tipo === "narrador" ? "italic" : "normal",
                        textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                    }}
                >
                    {panel.texto}
                </p>

                {/* Decoración panel especial */}
                {panel.especial && (
                    <div className="absolute top-2 right-2 opacity-20">
                        <span className="text-4xl">⭐</span>
                    </div>
                )}

                {/* Borde viñeta */}
                {esDialogo && (
                    <div
                        className="absolute -left-1 top-1/2 w-3 h-3 rotate-45"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "2px solid rgba(255,255,255,0.15)",
                            transform: "translateY(-50%) rotate(45deg)",
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
}

function CapituloCard({ cap, isOpen, onClick, index }: {
    cap: (typeof CAPÍTULOS)[0];
    isOpen: boolean;
    onClick: () => void;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            className="mb-6"
        >
            {/* Cabecera del capítulo — siempre visible */}
            <motion.button
                onClick={onClick}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full bg-gradient-to-r ${cap.colorFondo} rounded-3xl p-6 text-left relative overflow-hidden`}
                style={{ border: isOpen ? `2px solid ${cap.colorAcento}` : "2px solid rgba(255,255,255,0.1)" }}
            >
                {/* Fondo decorativo */}
                <div className="absolute inset-0 opacity-5">
                    <div className="text-[200px] leading-none absolute -right-8 -top-8 select-none">
                        {cap.emoji}
                    </div>
                </div>

                <div className="relative flex items-center gap-5">
                    {/* Personajes */}
                    <div className="flex flex-col items-center shrink-0">
                        <motion.span
                            animate={isOpen ? { y: [0, -5, 0] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-5xl block"
                            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
                        >
                            {cap.emojiNico}
                        </motion.span>
                        <motion.span
                            animate={isOpen ? { y: [0, -3, 0] } : {}}
                            transition={{ duration: 1.3, repeat: Infinity, delay: 0.3 }}
                            className="text-3xl block -mt-2"
                            style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.4))" }}
                        >
                            {cap.emojiPersonaje}
                        </motion.span>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">
                            {cap.subtitulo}
                        </p>
                        <h2 className="text-white font-fredoka text-2xl md:text-3xl leading-tight">
                            {cap.titulo}
                        </h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span
                                className="text-xs font-bold px-3 py-1 rounded-full"
                                style={{ background: cap.colorAcento + "40", color: cap.colorAcento, border: `1px solid ${cap.colorAcento}40` }}
                            >
                                {cap.personaje} {cap.emojiPersonaje}
                            </span>
                            <span className="text-white/30 text-xs">{isOpen ? "▲ cerrar" : "▼ leer historia"}</span>
                        </div>
                    </div>
                </div>
            </motion.button>

            {/* Historia desplegable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div
                            className={`bg-gradient-to-b ${cap.colorFondo} rounded-b-3xl px-6 pb-8 pt-4`}
                            style={{ borderLeft: `2px solid ${cap.colorAcento}50`, borderRight: `2px solid ${cap.colorAcento}50`, borderBottom: `2px solid ${cap.colorAcento}50` }}
                        >
                            {/* Imagen de escena principal */}
                            {cap.imagenEscena && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="mb-6 rounded-2xl overflow-hidden"
                                    style={{ border: `2px solid ${cap.colorAcento}40` }}
                                >
                                    <Image
                                        src={cap.imagenEscena}
                                        alt={`Escena: ${cap.titulo}`}
                                        width={800}
                                        height={450}
                                        className="w-full object-cover"
                                    />
                                </motion.div>
                            )}

                            {/* Viñetas por sección */}
                            {cap.viñetas.map((viñeta, vi) => (
                                <div key={vi} className="mb-6">
                                    {/* Separador de escena */}
                                    {vi > 0 && (
                                        <div className="flex items-center gap-3 my-5 opacity-40">
                                            <div className="flex-1 h-px" style={{ background: cap.colorAcento }} />
                                            <span className="text-xs" style={{ color: cap.colorAcento }}>• • •</span>
                                            <div className="flex-1 h-px" style={{ background: cap.colorAcento }} />
                                        </div>
                                    )}
                                    <div className="grid grid-cols-2 gap-3">
                                        {viñeta.panels.map((panel, pi) => (
                                            <PanelViñeta key={pi} panel={panel} index={vi * 4 + pi} />
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Segunda imagen de escena si existe */}
                            {cap.imagenEscena2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-4 rounded-2xl overflow-hidden"
                                    style={{ border: `2px solid ${cap.colorAcento}30` }}
                                >
                                    <Image
                                        src={cap.imagenEscena2}
                                        alt={`Escena 2: ${cap.titulo}`}
                                        width={800}
                                        height={450}
                                        className="w-full object-cover"
                                    />
                                </motion.div>
                            )}

                            {/* Frase final */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 p-4 rounded-2xl text-center"
                                style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${cap.colorAcento}40` }}
                            >
                                <p className="text-sm italic font-medium" style={{ color: cap.colorFrase }}>
                                    {cap.fraseFinal}
                                </p>
                            </motion.div>

                            {/* CTA */}
                            <Link href={cap.gradoLink}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-4 p-4 rounded-2xl text-center cursor-pointer font-bold text-white"
                                    style={{ background: `linear-gradient(135deg, ${cap.colorAcento}60, ${cap.colorAcento}30)`, border: `2px solid ${cap.colorAcento}60` }}
                                >
                                    ¡Practica con {cap.emojiNico} y {cap.emojiPersonaje} en {cap.subtitulo.split("—")[0].trim()} →
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ══════════════════════════════════════════════════════════════════════
//  PÁGINA PRINCIPAL
// ══════════════════════════════════════════════════════════════════════

export default function UniversoPage() {
    const [capituloAbierto, setCapituloAbierto] = useState<number | null>(0);
    const [estrellasVolando, setEstrellasVolando] = useState(false);

    useEffect(() => {
        setEstrellasVolando(true);
    }, []);

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* ── HERO ÉPICO ─────────────────────────────────────────────── */}
            <section
                className="relative pt-24 pb-16 px-4 overflow-hidden text-center"
                style={{
                    background: "linear-gradient(180deg, #0a0015 0%, #050022 40%, var(--navy) 100%)",
                    minHeight: "60vh",
                }}
            >
                {/* Estrellas de fondo animadas */}
                {estrellasVolando && Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `hsl(${Math.random() * 60 + 200}, 80%, ${70 + Math.random() * 30}%)`,
                        }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                        transition={{ duration: 1 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
                    />
                ))}

                {/* Ilustración del universo completo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative mx-auto mb-8"
                    style={{ maxWidth: 600 }}
                >
                    <div
                        className="rounded-3xl overflow-hidden mx-auto"
                        style={{
                            border: "3px solid rgba(167,139,250,0.4)",
                            boxShadow: "0 0 60px rgba(167,139,250,0.3), 0 0 120px rgba(99,60,180,0.2)",
                            maxWidth: 560,
                        }}
                    >
                        <Image
                            src="/personajes/universo.png"
                            alt="El universo completo de Chispito — Nico y todos sus amigos"
                            width={560}
                            height={320}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Personajes flotando alrededor */}
                    {["🚀", "🌸", "⭐", "🌙", "☁️", "🦕"].map((emoji, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-3xl"
                            style={{
                                top: `${[10, 20, -10, 80, 90, 50][i]}%`,
                                left: `${[-8, 95, 50, -8, 90, 100][i]}%`,
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
                            }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, i % 2 === 0 ? 10 : -10, 0],
                            }}
                            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {emoji}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Título épico */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)", color: "#A78BFA" }}
                    >
                        ⚡ UNIVERSO CHISPITO — Las historias que cambian todo
                    </div>
                    <h1 className="font-fredoka text-5xl md:text-7xl text-white mb-4 leading-tight">
                        🚀 La Historia de{" "}
                        <span style={{ color: "#FFD60A", textShadow: "0 0 30px #FFD60A80" }}>Nico</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Desde su primer día en Kinder hasta graduarse de 3° Secundaria.<br />
                        <strong className="text-white/80">10 grados. 10 amigos. Una historia que crece contigo.</strong>
                    </p>
                </motion.div>

                {/* Stats del universo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-6 mt-8 flex-wrap"
                >
                    {[
                        { num: "10", label: "Personajes", emoji: "👥" },
                        { num: "9", label: "Años de historia", emoji: "📅" },
                        { num: "Eli 🌸", label: "Amor de Nico", emoji: "❤️" },
                        { num: "∞", label: "Aventuras por vivir", emoji: "🌌" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-fredoka text-2xl text-white">{stat.emoji} {stat.num}</div>
                            <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ── PRESENTACIÓN DE NICO ──────────────────────────────────── */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div
                                className="rounded-3xl overflow-hidden"
                                style={{ border: "3px solid rgba(59,130,246,0.5)", boxShadow: "0 0 40px rgba(59,130,246,0.2)" }}
                            >
                                <Image
                                    src="/personajes/nico.png"
                                    alt="Nico — el pequeño cohete aventurero"
                                    width={500}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="inline-block mb-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                style={{ background: "rgba(59,130,246,0.2)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.3)" }}
                            >
                                El protagonista
                            </div>
                            <h2 className="font-fredoka text-4xl text-white mb-4">
                                🚀 Nico, el Cohete Más Curioso del Universo
                            </h2>
                            <p className="text-white/70 leading-relaxed mb-4">
                                Nico nació en el rincón más tranquilo del cosmos, entre nebulosas azules y estrellas que cantan. Desde pequeño, tuvo una pregunta favorita que nunca deja de hacerse:
                            </p>
                            <div
                                className="p-4 rounded-2xl mb-4"
                                style={{ background: "rgba(59,130,246,0.15)", border: "2px solid rgba(59,130,246,0.3)" }}
                            >
                                <p className="text-blue-300 font-bold text-xl text-center">"¿Por qué... y cómo?"</p>
                            </div>
                            <p className="text-white/60 leading-relaxed">
                                A lo largo de los años, Nico encontró amigos increíbles que lo acompañaron en cada etapa. Juntos, demostraron que aprender no es una obligación — es la aventura más grande del universo.
                            </p>
                        </motion.div>
                    </div>

                    {/* Eli presentación especial */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-16"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-block mb-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                    style={{ background: "rgba(244,114,182,0.2)", color: "#F472B6", border: "1px solid rgba(244,114,182,0.3)" }}
                                >
                                    ❤️ El personaje especial
                                </div>
                                <h2 className="font-fredoka text-4xl text-white mb-4">
                                    🌸 Eli, la Flor Más Lista del Salón
                                </h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Eli llegó a la vida de Nico en 3° primaria, y nada volvió a ser igual. Es la estudiante más brillante del salón, apasionada de las ciencias y con una curiosidad que no cabe en un libro.
                                </p>
                                <div
                                    className="p-4 rounded-2xl"
                                    style={{ background: "rgba(244,114,182,0.1)", border: "2px solid rgba(244,114,182,0.3)" }}
                                >
                                    <p className="text-pink-300 text-sm italic">
                                        "Lo que Eli no sabe es que cada vez que responde en clase, Nico sus turbinas se calientan un poco más." 🚀🌸
                                    </p>
                                </div>
                            </div>
                            <div
                                className="rounded-3xl overflow-hidden"
                                style={{ border: "3px solid rgba(244,114,182,0.4)", boxShadow: "0 0 40px rgba(244,114,182,0.2)" }}
                            >
                                <Image
                                    src="/personajes/eli.png"
                                    alt="Eli — la flor más lista de la clase"
                                    width={500}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Instrucción */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-center mb-10"
                    >
                        <h2 className="font-fredoka text-3xl text-white mb-2">📖 Lee su Historia Grado a Grado</h2>
                        <p className="text-white/50">Haz click en cada capítulo para leer la historia completa en estilo cómic</p>
                    </motion.div>

                    {/* Capítulos */}
                    <div>
                        {CAPÍTULOS.map((cap, i) => (
                            <CapituloCard
                                key={cap.grado}
                                cap={cap}
                                index={i}
                                isOpen={capituloAbierto === i}
                                onClick={() => setCapituloAbierto(capituloAbierto === i ? null : i)}
                            />
                        ))}
                    </div>

                    {/* Sección de tarjetas coleccionables */}
                    <TarjetasColeccionables />

                    {/* Final épico */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-16 p-10 rounded-3xl"
                        style={{
                            background: "linear-gradient(135deg, rgba(99,60,180,0.3), rgba(30,10,80,0.6))",
                            border: "2px solid rgba(167,139,250,0.3)",
                        }}
                    >
                        <div className="text-6xl mb-4">🚀🌸⭐🌙☁️🦕🔬📐⚡📖🌌</div>
                        <h2 className="font-fredoka text-4xl text-white mb-4">¿Y tú, en qué grado estás?</h2>
                        <p className="text-white/60 mb-6 text-lg">
                            Nico y sus amigos te están esperando en cada ejercicio.<br />
                            Tu historia también está empezando.
                        </p>
                        <Link href="/#grados">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-fredoka text-xl text-white cursor-pointer"
                                style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)", boxShadow: "0 0 30px rgba(99,60,180,0.5)" }}
                            >
                                ⚡ ¡Empezar mi aventura con Nico! →
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/20 text-sm border-t border-white/5">
                <p>🚀 El Universo Chispito crece con cada niño que aprende.</p>
            </footer>
        </main>
    );
}
