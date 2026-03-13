// Base de datos de contenido "masticado" para papás y maestros
// Primaria 3° — Ciclo escolar 2025-2026 SEP México

import type { GradoContenido, MateriaContenido } from './content-types';

const LENGUAS_P3: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Proyecto en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Proyecto en mi lengua: Chichimeco", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Proyecto en mi lengua: Cora", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Proyecto en mi lengua: Huichol", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Proyecto en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 6, nombre: "Proyecto en mi lengua: Mayo", meses: "Todo el ciclo" },
        { bloque: 7, nombre: "Proyecto en mi lengua: Mazateco", meses: "Todo el ciclo" },
        { bloque: 8, nombre: "Proyecto en mi lengua: Mixteco", meses: "Todo el ciclo" },
        { bloque: 9, nombre: "Proyecto en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 10, nombre: "Proyecto en mi lengua: Seri", meses: "Todo el ciclo" },
        { bloque: 11, nombre: "Proyecto en mi lengua: Tarahumara (Ralámuli)", meses: "Todo el ciclo" },
        { bloque: 12, nombre: "Proyecto en mi lengua: Totonaco", meses: "Todo el ciclo" },
        { bloque: 13, nombre: "Proyecto en mi lengua: Tseltal", meses: "Todo el ciclo" },
        { bloque: 14, nombre: "Proyecto en mi lengua: Tsotsil", meses: "Todo el ciclo" },
        { bloque: 15, nombre: "Proyecto en mi lengua: Yaqui", meses: "Todo el ciclo" },
        { bloque: 16, nombre: "Proyecto en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 17, nombre: "Proyecto en mi lengua: Tojolabal", meses: "Todo el ciclo" }
    ]
};

const MATEMATICAS_P3: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Multiplicación y tablas",
            meses: "Agosto – Septiembre"
        },
        {
            bloque: 2,
            nombre: "División exacta",
            meses: "Octubre – Noviembre"
        },
        {
            bloque: 3,
            nombre: "Fracciones simples",
            meses: "Diciembre – Enero"
        },
        {
            bloque: 4,
            nombre: "Geometría: perímetro y área",
            meses: "Febrero – Marzo"
        },
        {
            bloque: 5,
            nombre: "Estadística básica y resolución de problemas",
            meses: "Abril – Junio"
        }
    ]
};

const ESPANOL_P3: MateriaContenido = {
    materia: "espanol",
    nombre: "Español",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "Lectura comprensiva avanzada",
            meses: "Agosto – Septiembre"
        },
        {
            bloque: 2,
            nombre: "Ortografía y puntuación",
            meses: "Octubre – Noviembre"
        },
        {
            bloque: 3,
            nombre: "Producción de textos",
            meses: "Diciembre – Enero"
        },
        {
            bloque: 4,
            nombre: "Gramática y análisis oracional",
            meses: "Febrero – Marzo"
        },
        {
            bloque: 5,
            nombre: "Literatura y comunicación oral",
            meses: "Abril – Junio"
        }
    ]
};

const CIENCIAS_P3: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1, nombre: "Reproducción de seres vivos", meses: "Agosto – Septiembre"
        },
        {
            bloque: 2, nombre: "La nutrición de los seres vivos", meses: "Octubre – Noviembre"
        },
        {
            bloque: 3, nombre: "Mezclas y soluciones", meses: "Diciembre – Enero"
        },
        {
            bloque: 4, nombre: "La electricidad y el magnetismo", meses: "Febrero – Marzo"
        },
        {
            bloque: 5, nombre: "El ser humano y el medio ambiente", meses: "Abril – Junio"
        }
    ]
};

const HISTORIA_P3: MateriaContenido = {
    materia: "historia",
    nombre: "Historia",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1, nombre: "Las civilizaciones antiguas del mundo", meses: "Agosto – Septiembre"
        },
        {
            bloque: 2, nombre: "La Edad Media y el Renacimiento", meses: "Octubre – Noviembre"
        },
        {
            bloque: 3, nombre: "Los grandes descubrimientos y la globalización temprana", meses: "Diciembre – Enero"
        },
        {
            bloque: 4, nombre: "Revoluciones que cambiaron el mundo", meses: "Febrero – Marzo"
        },
        {
            bloque: 5, nombre: "El mundo en el siglo XX", meses: "Abril – Junio"
        }
    ]
};

export const PRIMARIA_3: GradoContenido = {
    grado: "primaria-3",
    nombre: "3° Primaria",
    emoji: "⭐",
    materias: {
        matematicas: MATEMATICAS_P3,
        espanol: ESPANOL_P3,
        ciencias: CIENCIAS_P3,
        historia: HISTORIA_P3,
        lenguas: LENGUAS_P3
    }
};
