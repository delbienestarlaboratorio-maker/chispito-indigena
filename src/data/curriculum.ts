// Currículo SEP México - Plan 2022 (Nueva Escuela Mexicana)
// Fuente: CONALITEG / conaliteg.gob.mx
// Fuente: CONALITEG / conaliteg.gob.mx

export type Materia = {
    id: string;
    nombre: string;
    emoji: string;
    color: string;
    bgColor: string;
};

export type Bloque = {
    numero: number;
    nombre: string;
    meses: string;
    temas: string[];
};

export type Grado = {
    numero: number;
    nombre: string;
    nivel: "preescolar" | "primaria" | "secundaria" | "telesecundaria" | "bachillerato";
    slug: string;
    emoji: string;
    color: string;
    gradient: string;
    alumnos: number; // matrícula estimada
    materias: string[]; // IDs de materias
};

// === MATERIAS ===
export const MATERIAS: Record<string, Materia> = {
    matematicas: {
        id: "matematicas",
        nombre: "Matemáticas",
        emoji: "📐",
        color: "#3B82F6",
        bgColor: "#EFF6FF",
    },
    espanol: {
        id: "espanol",
        nombre: "Español",
        emoji: "📚",
        color: "#22C55E",
        bgColor: "#F0FDF4",
    },
    historia: {
        id: "historia",
        nombre: "Historia",
        emoji: "🌎",
        color: "#F97316",
        bgColor: "#FFF7ED",
    },
    ciencias: {
        id: "ciencias",
        nombre: "Ciencias",
        emoji: "🌿",
        color: "#8B5CF6",
        bgColor: "#F5F3FF",
    },
    geografia: {
        id: "geografia",
        nombre: "Geografía",
        emoji: "🗺️",
        color: "#14B8A6",
        bgColor: "#F0FDFA",
    },
    civica: {
        id: "civica",
        nombre: "Cívica y Ética",
        emoji: "⚖️",
        color: "#EAB308",
        bgColor: "#FEFCE8",
    },
    formacion: {
        id: "formacion",
        nombre: "Formación Cívica y Ética",
        emoji: "⚖️",
        color: "#EAB308",
        bgColor: "#FEFCE8",
    },
    conocimiento: {
        id: "conocimiento",
        nombre: "Conocimiento del Medio",
        emoji: "🔍",
        color: "#EC4899",
        bgColor: "#FDF2F8",
    },
    artes: {
        id: "artes",
        nombre: "Artes",
        emoji: "🎨",
        color: "#F43F5E",
        bgColor: "#FFF1F2",
    },
    ingles: {
        id: "ingles",
        nombre: "Inglés",
        emoji: "🗣️",
        color: "#6366F1",
        bgColor: "#EEF2FF",
    },
    tecnologia: {
        id: "tecnologia",
        nombre: "Tecnología",
        emoji: "💻",
        color: "#0EA5E9",
        bgColor: "#F0F9FF",
    },
    filosofia: {
        id: "filosofia",
        nombre: "Filosofía",
        emoji: "🏛️",
        color: "#7C3AED",
        bgColor: "#F5F3FF",
    },
    educacion_fisica: {
        id: "educacion_fisica",
        nombre: "Educación Física",
        emoji: "🏃",
        color: "#F97316",
        bgColor: "#FFF7ED",
    },
    orientacion: {
        id: "orientacion",
        nombre: "Orientación Vocacional",
        emoji: "🧭",
        color: "#0EA5E9",
        bgColor: "#F0F9FF",
    },
    lenguas: {
        id: "lenguas",
        nombre: "Lenguas Indígenas",
        emoji: "🗣️",
        color: "#9333EA",
        bgColor: "#F3E8FF",
    },
    // ── Materias NEM (Telesecundaria) ──
    etica_naturaleza: {
        id: "etica_naturaleza",
        nombre: "Ética, Naturaleza y Sociedades",
        emoji: "🌿",
        color: "#10B981",
        bgColor: "#ECFDF5",
    },
    humano_comunitario: {
        id: "humano_comunitario",
        nombre: "De lo Humano y lo Comunitario",
        emoji: "🤝",
        color: "#F59E0B",
        bgColor: "#FFFBEB",
    },
    lenguajes_nem: {
        id: "lenguajes_nem",
        nombre: "Lenguajes",
        emoji: "📖",
        color: "#3B82F6",
        bgColor: "#EFF6FF",
    },
    saberes_cientificos: {
        id: "saberes_cientificos",
        nombre: "Saberes y Pensamiento Científico",
        emoji: "🔬",
        color: "#8B5CF6",
        bgColor: "#F5F3FF",
    },
    multiples_lenguajes: {
        id: "multiples_lenguajes",
        nombre: "Múltiples Lenguajes",
        emoji: "🎭",
        color: "#EC4899",
        bgColor: "#FDF2F8",
    },
    proyectos_nem: {
        id: "proyectos_nem",
        nombre: "Proyectos",
        emoji: "📋",
        color: "#14B8A6",
        bgColor: "#F0FDFA",
    }
};

// === GRADOS (matrícula ciclo 2024-2025 SEP) ===
const _TODOS_GRADOS: Grado[] = [
    // PREESCOLAR
    {
        numero: 1, nombre: "1° Preescolar", nivel: "preescolar", slug: "preescolar-1",
        emoji: "🌱", color: "#22C55E", gradient: "from-green-400 to-emerald-600",
        alumnos: 1096000, materias: ["matematicas", "espanol", "conocimiento", "artes", "educacion_fisica"],
    },
    {
        numero: 2, nombre: "2° Preescolar", nivel: "preescolar", slug: "preescolar-2",
        emoji: "🌸", color: "#EC4899", gradient: "from-pink-400 to-rose-600",
        alumnos: 1350000, materias: ["matematicas", "espanol", "conocimiento", "artes", "educacion_fisica"],
    },
    {
        numero: 3, nombre: "Kinder", nivel: "preescolar", slug: "kinder",
        emoji: "🌈", color: "#F97316", gradient: "from-orange-400 to-amber-600",
        alumnos: 1550000, materias: ["matematicas", "espanol", "conocimiento", "artes", "educacion_fisica"],
    },
    {
        numero: 3, nombre: "3° Preescolar", nivel: "preescolar", slug: "preescolar-3",
        emoji: "🌈", color: "#A855F7", gradient: "from-purple-400 to-violet-600",
        alumnos: 1550000, materias: ["matematicas", "espanol", "conocimiento", "educacion_fisica"],
    },
    // PRIMARIA
    {
        numero: 1, nombre: "1° Primaria", nivel: "primaria", slug: "primaria-1",
        emoji: "🚀", color: "#3B82F6", gradient: "from-blue-400 to-indigo-600",
        alumnos: 2140000, materias: ["matematicas", "espanol", "lenguas", "conocimiento", "formacion", "artes", "educacion_fisica"],
    },
    {
        numero: 2, nombre: "2° Primaria", nivel: "primaria", slug: "primaria-2",
        emoji: "🌟", color: "#22C55E", gradient: "from-green-400 to-teal-600",
        alumnos: 2138000, materias: ["matematicas", "espanol", "lenguas", "conocimiento", "formacion", "artes", "educacion_fisica"],
    },
    {
        numero: 3, nombre: "3° Primaria", nivel: "primaria", slug: "primaria-3",
        emoji: "🪐", color: "#8B5CF6", gradient: "from-violet-400 to-purple-600",
        alumnos: 2130000, materias: ["matematicas", "espanol", "lenguas", "historia", "ciencias", "formacion", "artes", "ingles", "educacion_fisica"],
    },
    {
        numero: 4, nombre: "4° Primaria", nivel: "primaria", slug: "primaria-4",
        emoji: "🧮", color: "#F97316", gradient: "from-orange-400 to-red-500",
        alumnos: 2120000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "artes", "ingles", "educacion_fisica"],
    },
    {
        numero: 5, nombre: "5° Primaria", nivel: "primaria", slug: "primaria-5",
        emoji: "🔬", color: "#14B8A6", gradient: "from-teal-400 to-cyan-600",
        alumnos: 2110000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "artes", "ingles", "educacion_fisica"],
    },
    {
        numero: 6, nombre: "6° Primaria", nivel: "primaria", slug: "primaria-6",
        emoji: "🌍", color: "#F43F5E", gradient: "from-rose-400 to-pink-600",
        alumnos: 2100000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "artes", "ingles", "educacion_fisica"],
    },
    // SECUNDARIA
    {
        numero: 1, nombre: "1° Secundaria", nivel: "secundaria", slug: "secundaria-1",
        emoji: "⚗️", color: "#6366F1", gradient: "from-indigo-400 to-violet-600",
        alumnos: 2200000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "ingles", "tecnologia", "artes", "educacion_fisica"],
    },
    {
        numero: 2, nombre: "2° Secundaria", nivel: "secundaria", slug: "secundaria-2",
        emoji: "📡", color: "#EAB308", gradient: "from-yellow-400 to-orange-500",
        alumnos: 2100000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "ingles", "tecnologia", "artes", "educacion_fisica"],
    },
    {
        numero: 3, nombre: "3° Secundaria", nivel: "secundaria", slug: "secundaria-3",
        emoji: "🎓", color: "#EC4899", gradient: "from-fuchsia-400 to-purple-600",
        alumnos: 1993000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "ingles", "tecnologia", "artes", "educacion_fisica", "orientacion"],
    },
    // TELESECUNDARIA (NEM — Nueva Escuela Mexicana)
    {
        numero: 1, nombre: "1° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-1",
        emoji: "📺", color: "#0EA5E9", gradient: "from-sky-400 to-cyan-600",
        alumnos: 500000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"],
    },
    {
        numero: 2, nombre: "2° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-2",
        emoji: "📺", color: "#06B6D4", gradient: "from-cyan-400 to-teal-600",
        alumnos: 480000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"],
    },
    {
        numero: 3, nombre: "3° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-3",
        emoji: "📺", color: "#0891B2", gradient: "from-teal-400 to-emerald-600",
        alumnos: 460000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"],
    },
    // BACHILLERATO — pendiente para fase futura, no expuesto aún
    { numero: 1, nombre: "1° Bachillerato", nivel: "bachillerato", slug: "bachillerato-1", emoji: "📐", color: "#6366F1", gradient: "from-indigo-500 to-purple-600", alumnos: 2100000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"] },
    { numero: 2, nombre: "2° Bachillerato", nivel: "bachillerato", slug: "bachillerato-2", emoji: "⚗️", color: "#8B5CF6", gradient: "from-violet-500 to-purple-700", alumnos: 1980000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"] },
    { numero: 3, nombre: "3° Bachillerato", nivel: "bachillerato", slug: "bachillerato-3", emoji: "🧬", color: "#A855F7", gradient: "from-purple-500 to-pink-600", alumnos: 1850000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
    { numero: 4, nombre: "4° Bachillerato", nivel: "bachillerato", slug: "bachillerato-4", emoji: "🔭", color: "#EC4899", gradient: "from-pink-500 to-rose-600", alumnos: 1720000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
    { numero: 5, nombre: "5° Bachillerato", nivel: "bachillerato", slug: "bachillerato-5", emoji: "💡", color: "#F59E0B", gradient: "from-amber-500 to-orange-600", alumnos: 1600000, materias: ["matematicas", "espanol", "ciencias", "ingles", "filosofia"] },
    { numero: 6, nombre: "6° Bachillerato", nivel: "bachillerato", slug: "bachillerato-6", emoji: "🏆", color: "#EF4444", gradient: "from-red-500 to-rose-600", alumnos: 1500000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
];

// Solo los grados activos en la plataforma (bachillerato pendiente para fase futura)
export const GRADOS: Grado[] = _TODOS_GRADOS.filter((g: Grado) => g.nivel !== "bachillerato");


// === BLOQUES por grado/materia (contenido SEP) ===
export const BLOQUES: Record<string, Record<string, Bloque[]>> = {
    "primaria-1": {
        matematicas: [
            {
                numero: 1, nombre: "Números del 1 al 10", meses: "Agosto-Septiembre",
                temas: ["Conteo de objetos", "Números del 1 al 10", "Mayor y menor", "Orden de números"],
            },
            {
                numero: 2, nombre: "Sumas básicas hasta 20", meses: "Octubre-Noviembre",
                temas: ["Suma con objetos", "Sumas hasta 10", "Sumas hasta 20", "Problemas de suma"],
            },
            {
                numero: 3, nombre: "Formas y patrones", meses: "Diciembre-Enero",
                temas: ["Figuras geométricas", "Patrones y secuencias", "Cuerpos geométricos"],
            },
            {
                numero: 4, nombre: "Restas simples", meses: "Febrero-Marzo",
                temas: ["Resta con objetos", "Restas hasta 10", "Restas hasta 20", "Problemas de resta"],
            },
            {
                numero: 5, nombre: "Medición y dinero", meses: "Abril-Junio",
                temas: ["Medición con unidades no convencionales", "Monedas de México", "Problemas de dinero"],
            },
        ],
        espanol: [
            {
                numero: 1, nombre: "Letras y sílabas", meses: "Agosto-Septiembre",
                temas: ["Vocales", "Consonantes básicas p,m,s,l", "Sílabas simples", "Mi nombre"],
            },
            {
                numero: 2, nombre: "Palabras y lectura", meses: "Octubre-Noviembre",
                temas: ["Palabras con b,d,f,g", "Lectura de palabras", "Mi familia", "Oraciones simples"],
            },
            {
                numero: 3, nombre: "Oraciones y cuentos", meses: "Diciembre-Enero",
                temas: ["Oraciones completas", "Punto final", "Cuentos cortos", "Personajes"],
            },
            {
                numero: 4, nombre: "Escritura y comprensión", meses: "Febrero-Marzo",
                temas: ["Escritura de palabras", "Comprensión lectora", "Mayúsculas", "Signos de interrogación"],
            },
            {
                numero: 5, nombre: "Textos y comunicación", meses: "Abril-Junio",
                temas: ["Tipos de texto", "Recados y cartas", "Poemas sencillos", "Dictado"],
            },
        ],
    },
    "primaria-2": {
        matematicas: [
            {
                numero: 1, nombre: "Números hasta 100", meses: "Agosto-Septiembre",
                temas: ["Números del 0 al 100", "Decenas", "Comparación de números", "Series numéricas"],
            },
            {
                numero: 2, nombre: "Sumas y restas con dos dígitos", meses: "Octubre-Noviembre",
                temas: ["Sumas con reagrupación", "Restas con reagrupación", "Problemas de suma y resta"],
            },
            {
                numero: 3, nombre: "Multiplicación básica", meses: "Diciembre-Enero",
                temas: ["Introducción a la multiplicación", "Tablas del 2 y 5", "Grupos iguales", "Arreglos"],
            },
            {
                numero: 4, nombre: "Medición y fracciones", meses: "Febrero-Marzo",
                temas: ["El metro y centímetro", "Mitades y cuartos", "El reloj: horas"],
            },
            {
                numero: 5, nombre: "Figuras y datos", meses: "Abril-Junio",
                temas: ["Perímetro de figuras", "Tablas de datos", "Pictogramas", "Problemas combinados"],
            },
        ],
        espanol: [
            {
                numero: 1, nombre: "Lectura fluida", meses: "Agosto-Septiembre",
                temas: ["Lectura en voz alta", "Comprensión de textos", "Vocabulario", "Sílabas complejas"],
            },
            {
                numero: 2, nombre: "Escritura correcta", meses: "Octubre-Noviembre",
                temas: ["Uso de la b y la v", "Uso del h", "Oraciones con sentido completo", "Párrafos"],
            },
            {
                numero: 3, nombre: "Tipos de texto", meses: "Diciembre-Enero",
                temas: ["Cuento: inicio, desarrollo, final", "Noticias", "Recetas", "Instructivos"],
            },
            {
                numero: 4, nombre: "Gramática básica", meses: "Febrero-Marzo",
                temas: ["Sustantivos", "Adjetivos", "Verbos", "Concordancia"],
            },
            {
                numero: 5, nombre: "Comunicación oral y escrita", meses: "Abril-Junio",
                temas: ["Exposición oral", "Escritura de cuentos", "Poemas", "Carta formal e informal"],
            },
        ],
    },
};

export type EjercicioTipo = "multiple_choice" | "fill_blank" | "true_false" | "match" | "order" | "visual_count";

export type Ejercicio = {
    id: string;
    tipo: EjercicioTipo;
    pregunta: string;
    opciones?: string[];
    respuestaCorrecta: string | number;
    explicacion: string;
    nivel: "v1" | "v2" | "v3"; // v1=gratis, v2=premium, v3=suscripcion
    imagenUrl?: string;
};
