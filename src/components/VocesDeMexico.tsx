"use client";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getDictionary } from "@/data/diccionarios/getDictionary";

// Datos oficiales del Censo INEGI 2020 para lenguas indígenas
const LENGUAS_INEGI: Record<string, any> = {
    espanol: {
        nombre: "Español",
        hablantes: "116+ Millones",
        estados: "Todo el país",
        color: "#3B82F6", // Blue
        descripcion: "El idioma puente que conecta a casi todo México.",
        dots: [],
        personaje: "🚀 Nico"
    },
    nahuatl: {
        nombre: "Náhuatl",
        hablantes: "1,651,958",
        estados: "Puebla, Veracruz, Hidalgo, Guerrero...",
        color: "#10B981", // Emerald
        descripcion: "La lengua materna más hablada en México. Nos dio palabras como 'tomate', 'chocolate' y 'aguacate'.",
        dots: [
            { top: "55%", left: "55%", delay: 0 },
            { top: "52%", left: "58%", delay: 0.2 },
            { top: "58%", left: "53%", delay: 0.4 },
        ],
        personaje: "🌳 Quetzal"
    },
    maya: {
        nombre: "Maya (Maayat'aan)",
        hablantes: "774,755",
        estados: "Yucatán, Quintana Roo, Campeche",
        color: "#F59E0B", // Amber
        descripcion: "La lengua de los grandes matemáticos y astrónomos antiguos. Sigue muy viva en la península.",
        dots: [
            { top: "40%", left: "85%", delay: 0 },
            { top: "45%", left: "88%", delay: 0.3 }
        ],
        personaje: "🐆 Balam"
    },
    tzeltal: {
        nombre: "Tzeltal",
        hablantes: "589,144",
        estados: "Chiapas",
        color: "#EAB308", // Yellow
        descripcion: "La lengua de los Altos de Chiapas, familia de la lengua Maya.",
        dots: [
            { top: "67%", left: "77%", delay: 0.1 }
        ],
        personaje: "🐒 Batz"
    },
    tzotzil: {
        nombre: "Tzotzil",
        hablantes: "550,274",
        estados: "Chiapas",
        color: "#8B5CF6", // Violet
        descripcion: "Significa 'lengua verdadera' u 'hombres verdaderos'.",
        dots: [
            { top: "65%", left: "75%", delay: 0 }
        ],
        personaje: "🦅 Cuauhtli"
    },
    mixteco: {
        nombre: "Mixteco (Tu'un Savi)",
        hablantes: "526,593",
        estados: "Oaxaca, Puebla, Guerrero",
        color: "#EC4899", // Pink
        descripcion: "El 'Idioma de la Lluvia', cuenta con muchas variantes dependiendo de la región.",
        dots: [
            { top: "68%", left: "58%", delay: 0.2 },
            { top: "71%", left: "60%", delay: 0.5 }
        ],
        personaje: "🌧️ Savi"
    },
    zapoteco: {
        nombre: "Zapoteco (Diidxaza)",
        hablantes: "490,845",
        estados: "Oaxaca",
        color: "#14B8A6", // Teal
        descripcion: "La lengua de 'la gente de las nubes'. Tienen una tradición poética increíble.",
        dots: [
            { top: "70%", left: "62%", delay: 0.1 }
        ],
        personaje: "☁️ Za"
    },
    otomi: {
        nombre: "Otomí (Hñähñu)",
        hablantes: "298,861",
        estados: "Hidalgo, Edomex, Querétaro",
        color: "#A855F7", // Purple
        descripcion: "Una lengua con tonos, ¡la forma en que cantas la sílaba cambia el significado de la palabra!",
        dots: [
            { top: "48%", left: "50%", delay: 0.3 }
        ],
        personaje: "🦋 Pëhphä"
    },
    totonaco: {
        nombre: "Totonaco",
        hablantes: "256,344",
        estados: "Veracruz, Puebla",
        color: "#3B82F6", // Blue
        descripcion: "La lengua de los constructores del Tajín y los Voladores de Papantla.",
        dots: [
            { top: "50%", left: "62%", delay: 0 }
        ],
        personaje: "🌺 Tsi'yi"
    },
    chol: {
        nombre: "Ch'ol",
        hablantes: "254,715",
        estados: "Chiapas, Tabasco",
        color: "#F97316", // Orange
        descripcion: "Otra lengua de la gran familia Maya, hablada muy cerca de las ruinas de Palenque.",
        dots: [
            { top: "62%", left: "78%", delay: 0.4 }
        ],
        personaje: "🌴 Ch'u"
    },
    mazateco: {
        nombre: "Mazateco",
        hablantes: "237,212",
        estados: "Oaxaca, Veracruz",
        color: "#06B6D4", // Cyan
        descripcion: "Conocida como una 'lengua silbada'. En algunas montañas se comunican largas distancias chiflando.",
        dots: [
            { top: "65%", left: "60%", delay: 0.2 }
        ],
        personaje: "🍄 Na'en"
    }
};

export default function VocesDeMexico() {
    const params = useParams();
    const lang = (params?.lang as string) || "espanol";
    const dict = getDictionary(lang);

    const activeData = LENGUAS_INEGI[lang] || LENGUAS_INEGI["espanol"];

    return (
        <section className="py-16 px-4" style={{ background: "linear-gradient(180deg, var(--navy) 0%, #050022 100%)" }}>
            <div className="max-w-6xl mx-auto">
                {/* Título de la sección */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full"
                        style={{ background: "rgba(16, 185, 129, 0.15)", color: "#10B981", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                        {dict.translate("Descubre tu país")} 🗺️
                    </div>
                    <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-4">
                        {dict.translate("Las Voces de México")}
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        {dict.translate("En México no solo se habla Español. Existen 68 lenguas indígenas completas, con su propia gramática, canciones y formas de ver el universo. ¡No son dialectos, son tesoros nacionales!")}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* El Cuento Educativo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl relative overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                        {/* Decoración abstracta */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: activeData.color }} />

                        <h3 className="font-fredoka text-2xl text-white mb-6 flex items-center gap-3">
                            <span className="text-3xl">📖</span>
                            {dict.translate("El Cuento de las Palabras")}
                        </h3>

                        <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                            <p>
                                {dict.translate("Un día, Nico estaba mirando las estrellas cuando se dio cuenta de algo: ¡El universo es enorme! Pero, ¿cómo le llaman a las estrellas las personas de otros lugares?")}
                            </p>
                            <div className="p-4 rounded-xl my-4" style={{ background: "rgba(0,0,0,0.3)", borderLeft: `4px solid ${activeData.color}` }}>
                                <p className="italic text-white">
                                    {dict.translate("«En Español se dice 'Estrella'», le explicó su maestro.")} <br />
                                    <span style={{ color: activeData.color }} className="font-bold">
                                        {lang === 'nahuatl' ? "«Pero en Náhuatl se dice Citlalli.»" :
                                            lang === 'maya' ? "«Pero en Maya se dice Eek'.»" :
                                                lang === 'tzeltal' ? "«Pero en Tzeltal se dice K'anal.»" :
                                                    lang === 'tzotzil' ? "«Pero en Tzotzil se dice K'anal.»" :
                                                        lang === 'mixteco' ? "«Pero en Mixteco se dice Tsimi.»" :
                                                            lang === 'zapoteco' ? "«Pero en Zapoteco se dice Belaa.»" :
                                                                lang === 'otomi' ? "«Pero en Otomí se dice Zäna.»" :
                                                                    lang === 'totonaco' ? "«Pero en Totonaco se dice Staku.»" :
                                                                        lang === 'chol' ? "«Pero en Ch'ol se dice Ek'.»" :
                                                                            lang === 'mazateco' ? "«Pero en Mazateco se dice Nchijó.»" :
                                                                                lang === 'chinanteco' ? "«Pero en Chinanteco se dice Nguixoo.»" :
                                                                                    lang === 'mixe' ? "«Pero en Mixe se dice Jëë.»" :
                                                                                        lang === 'purepecha' ? "«Pero en Purépecha se dice K'uan.»" :
                                                                                            lang === 'tlapaneco' ? "«Pero en Tlapaneco se dice Me'phaa.»" :
                                                                                                lang === 'tarahumara' ? "«Pero en Tarahumara se dice Rarámuri.»" :
                                                                                                    lang === 'mazahua' ? "«Pero en Mazahua se dice Jñatrjo.»" :
                                                                                                        lang === 'huasteco' ? "«Pero en Huasteco se dice Téenek.»" :
                                                                                                            lang === 'mame' ? "«Pero en Mam se dice Mam.»" :
                                                                                                                "«Pero en México tenemos 68 formas distintas de nombrar las cosas.»"}
                                    </span>
                                </p>
                            </div>
                            <p>
                                {dict.translate("Nico descubrió que cuando un idioma desaparece, perdemos toda la historia y la ciencia que guardaban esas palabras.")}
                            </p>
                            <p className="font-medium text-white/90">
                                {dict.translate("Por eso en Chispito, Nico y sus amigos están aprendiendo. ¡Tratando de salvar las Voces de México!")}
                            </p>
                        </div>
                    </motion.div>

                    {/* El Mapa y Datos del INEGI */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Tarjeta de Datos INEGI */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={lang}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="absolute -top-6 -left-6 z-10 p-5 rounded-2xl shadow-2xl backdrop-blur-md"
                                style={{
                                    background: "rgba(10, 15, 30, 0.85)",
                                    border: `1px solid ${activeData.color}50`,
                                    boxShadow: `0 10px 30px ${activeData.color}20`
                                }}
                            >
                                <div className="text-xs uppercase font-bold tracking-widest text-white/40 mb-1">
                                    {dict.translate("Censo INEGI 2020")}
                                </div>
                                <h4 className="font-fredoka text-2xl mb-1" style={{ color: activeData.color }}>
                                    {activeData.nombre}
                                </h4>
                                <div className="flex gap-4 mt-3">
                                    <div>
                                        <div className="text-xs text-white/40">{dict.translate("Hablantes:")}</div>
                                        <div className="font-bold text-white tracking-wide">{activeData.hablantes}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40">{dict.translate("Regiones:")}</div>
                                        <div className="font-medium text-white/80 text-sm max-w-[150px] leading-tight mt-1">{activeData.estados}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Contenedor del Mapa Representativo */}
                        <div className="w-full aspect-square md:aspect-video rounded-3xl relative overflow-hidden flex items-center justify-center p-8"
                            style={{ background: "#050B14", border: "1px solid rgba(255,255,255,0.05)" }}>

                            {/* Silueta Base de México (SVG simplificado genérico) */}
                            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20" preserveAspectRatio="xMidYMid meet">
                                <path
                                    d="M15,20 Q20,15 30,25 T40,40 Q50,45 60,50 T75,60 Q85,60 90,50 Q95,65 85,75 T60,70 Q50,80 40,75 T25,50 Q15,40 10,30 Z"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeLinejoin="round"
                                    strokeDasharray="4 4"
                                />
                                {/* Península Yucatán aproximada */}
                                <path d="M75,60 Q85,50 90,50 Q95,60 85,72 Z" fill="rgba(255,255,255,0.05)" />
                                {/* Centro/Sur aproximado */}
                                <path d="M40,50 Q55,50 65,70 Q50,80 40,70 Z" fill="rgba(255,255,255,0.05)" />
                            </svg>

                            {/* Puntos de Iluminación Interactivos */}
                            {activeData.dots.map((dot: any, i: number) => (
                                <motion.div
                                    key={`${lang}-dot-${i}`}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: dot.delay }}
                                    className="absolute rounded-full"
                                    style={{
                                        top: dot.top,
                                        left: dot.left,
                                        width: "20px",
                                        height: "20px",
                                        background: activeData.color,
                                        boxShadow: `0 0 20px 5px ${activeData.color}80`,
                                        transform: "translate(-50%, -50%)"
                                    }}
                                />
                            ))}

                            {/* Instrucción Flotante */}
                            <div className="absolute bottom-6 right-6 text-right">
                                <p className="text-white/30 text-xs uppercase tracking-widest font-bold mb-1">
                                    {dict.translate("Cambia el idioma arriba")} 🌐
                                </p>
                                <p className="text-white/50 text-sm">
                                    {dict.translate("Para ver interactuar el mapa")}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
