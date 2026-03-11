// Base de datos de contenido "masticado" para papás y maestros
// Primaria 1°, 2°, 3° y Kinder — Ciclo escolar 2025-2026 SEP México

import { PRIMARIA_3 } from "./content-primaria3-slim";
import { KINDER } from "./content-kinder-slim";
import { PREESCOLAR_1_COMPLETE } from "./content-preescolar1-slim";
import { PREESCOLAR_1, PREESCOLAR_2, PRIMARIA_4, PRIMARIA_5, PRIMARIA_6, SECUNDARIA_1, SECUNDARIA_2, SECUNDARIA_3 } from "./content-grados-superiores-slim";

export const LENGUAS_P1: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        {
            bloque: 1,
            nombre: "Proyecto en mi lengua: Ch'ol",
            meses: "Todo el ciclo"
        },
        {
            bloque: 2,
            nombre: "Proyecto en mi lengua: Chichimeco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 3,
            nombre: "Proyecto en mi lengua: Cora",
            meses: "Todo el ciclo"
        },
        {
            bloque: 4,
            nombre: "Proyecto en mi lengua: Huichol",
            meses: "Todo el ciclo"
        },
        {
            bloque: 5,
            nombre: "Proyecto en mi lengua: Maya",
            meses: "Todo el ciclo"
        },
        {
            bloque: 6,
            nombre: "Proyecto en mi lengua: Mayo",
            meses: "Todo el ciclo"
        },
        {
            bloque: 7,
            nombre: "Proyecto en mi lengua: Mazateco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 8,
            nombre: "Proyecto en mi lengua: Mixteco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 9,
            nombre: "Proyecto en mi lengua: Náhuatl",
            meses: "Todo el ciclo"
        },
        {
            bloque: 10,
            nombre: "Proyecto en mi lengua: Seri",
            meses: "Todo el ciclo"
        },
        {
            bloque: 11,
            nombre: "Proyecto en mi lengua: Tarahumara (Ralámuli)",
            meses: "Todo el ciclo"
        },
        {
            bloque: 12,
            nombre: "Proyecto en mi lengua: Totonaco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 13,
            nombre: "Proyecto en mi lengua: Tseltal",
            meses: "Todo el ciclo"
        },
        {
            bloque: 14,
            nombre: "Proyecto en mi lengua: Tsotsil",
            meses: "Todo el ciclo"
        },
        {
            bloque: 15,
            nombre: "Proyecto en mi lengua: Yaqui",
            meses: "Todo el ciclo"
        },
        {
            bloque: 16,
            nombre: "Proyecto en mi lengua: Zapoteco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 17,
            nombre: "Proyecto en mi lengua: Tojolabal",
            meses: "Todo el ciclo"
        }
    ]
};

export const LENGUAS_P2: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        {
            bloque: 1,
            nombre: "Proyecto en mi lengua: Ch'ol",
            meses: "Todo el ciclo"
        },
        {
            bloque: 2,
            nombre: "Proyecto en mi lengua: Chichimeco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 3,
            nombre: "Proyecto en mi lengua: Cora",
            meses: "Todo el ciclo"
        },
        {
            bloque: 4,
            nombre: "Proyecto en mi lengua: Huichol",
            meses: "Todo el ciclo"
        },
        {
            bloque: 5,
            nombre: "Proyecto en mi lengua: Maya",
            meses: "Todo el ciclo"
        },
        {
            bloque: 6,
            nombre: "Proyecto en mi lengua: Mayo",
            meses: "Todo el ciclo"
        },
        {
            bloque: 7,
            nombre: "Proyecto en mi lengua: Mazateco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 8,
            nombre: "Proyecto en mi lengua: Mixteco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 9,
            nombre: "Proyecto en mi lengua: Náhuatl",
            meses: "Todo el ciclo"
        },
        {
            bloque: 10,
            nombre: "Proyecto en mi lengua: Seri",
            meses: "Todo el ciclo"
        },
        {
            bloque: 11,
            nombre: "Proyecto en mi lengua: Tarahumara (Ralámuli)",
            meses: "Todo el ciclo"
        },
        {
            bloque: 12,
            nombre: "Proyecto en mi lengua: Totonaco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 13,
            nombre: "Proyecto en mi lengua: Tseltal",
            meses: "Todo el ciclo"
        },
        {
            bloque: 14,
            nombre: "Proyecto en mi lengua: Tsotsil",
            meses: "Todo el ciclo"
        },
        {
            bloque: 15,
            nombre: "Proyecto en mi lengua: Yaqui",
            meses: "Todo el ciclo"
        },
        {
            bloque: 16,
            nombre: "Proyecto en mi lengua: Zapoteco",
            meses: "Todo el ciclo"
        },
        {
            bloque: 17,
            nombre: "Proyecto en mi lengua: Tojolabal",
            meses: "Todo el ciclo"
        }
    ]
};


import type { BloqueContenido, MateriaContenido, GradoContenido } from "./content-types";

// ============================================================
// PRIMARIA 1° — Contenido completo masticado
// ============================================================
export const PRIMARIA_1: GradoContenido = {
    grado: "primaria-1",
    nombre: "1° Primaria",
    emoji: "🚀",
    materias: {
        matematicas: {
            materia: "matematicas",
            nombre: "Matemáticas",
            emoji: "📐",
            color: "#3B82F6",
            bloques: [
                {
                    bloque: 1,
                    nombre: "Números del 1 al 10",
                    meses: "Agosto – Septiembre"
                },
                {
                    bloque: 2,
                    nombre: "Sumas hasta 10",
                    meses: "Octubre – Noviembre"
                },
                {
                    bloque: 3,
                    nombre: "Figuras geométricas",
                    meses: "Diciembre – Enero"
                },
                {
                    bloque: 4,
                    nombre: "Restas hasta 10",
                    meses: "Febrero – Marzo"
                },
                {
                    bloque: 5,
                    nombre: "Números hasta 20 y dinero",
                    meses: "Abril – Junio"
                }
            ]
        },
        espanol: {
            materia: "espanol",
            nombre: "Español",
            emoji: "📚",
            color: "#22C55E",
            bloques: [
                {
                    bloque: 1,
                    nombre: "Vocales y primeras letras",
                    meses: "Agosto – Septiembre"
                },
                {
                    bloque: 2,
                    nombre: "Sílabas y palabras",
                    meses: "Octubre – Noviembre"
                },
                {
                    bloque: 3,
                    nombre: "Mis primeras oraciones",
                    meses: "Diciembre – Enero"
                },
                {
                    bloque: 4,
                    nombre: "Escritura y dictado",
                    meses: "Febrero – Marzo"
                },
                {
                    bloque: 5,
                    nombre: "Textos y comunicación",
                    meses: "Abril – Junio"
                }
            ]
        },
        lenguas: LENGUAS_P1
    }
};

// ============================================================
// PRIMARIA 2° — Contenido masticado
// ============================================================
export const PRIMARIA_2: GradoContenido = {
    grado: "primaria-2",
    nombre: "2° Primaria",
    emoji: "🌟",
    materias: {
        matematicas: {
            materia: "matematicas",
            nombre: "Matemáticas",
            emoji: "📐",
            color: "#3B82F6",
            bloques: [
                {
                    bloque: 1,
                    nombre: "Números hasta 100",
                    meses: "Agosto – Septiembre"
                },
                {
                    bloque: 2,
                    nombre: "Sumas y restas con 2 dígitos",
                    meses: "Octubre – Noviembre"
                },
                {
                    bloque: 3,
                    nombre: "Introducción a la multiplicación",
                    meses: "Diciembre – Enero"
                },
                {
                    bloque: 4,
                    nombre: "Medición y fracciones básicas",
                    meses: "Febrero – Marzo"
                },
                {
                    bloque: 5,
                    nombre: "Datos y tablas",
                    meses: "Abril – Junio"
                }
            ]
        },
        espanol: {
            materia: "espanol",
            nombre: "Español",
            emoji: "📚",
            color: "#22C55E",
            bloques: [
                {
                    bloque: 1,
                    nombre: "Lectura fluida",
                    meses: "Agosto – Septiembre"
                },
                {
                    bloque: 2,
                    nombre: "Ortografía y gramática básica",
                    meses: "Octubre – Noviembre"
                },
                {
                    bloque: 3,
                    nombre: "Tipos de texto",
                    meses: "Diciembre – Enero"
                },
                {
                    bloque: 4,
                    nombre: "Escritura creativa",
                    meses: "Febrero – Marzo"
                },
                {
                    bloque: 5,
                    nombre: "Comunicación oral",
                    meses: "Abril – Junio"
                }
            ]
        },
        lenguas: LENGUAS_P2
    }
};

// ============================================================
// CIENCIAS NATURALES — P1 y P2 (agregadas al objeto principal)
// ============================================================

const CIENCIAS_P1: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1, nombre: "Mi cuerpo y mis sentidos", meses: "Agosto – Septiembre"
        },
        {
            bloque: 2, nombre: "Plantas y animales", meses: "Octubre – Noviembre"
        },
        {
            bloque: 3, nombre: "El agua y el clima", meses: "Diciembre – Enero"
        },
        {
            bloque: 4, nombre: "La materia y los materiales", meses: "Febrero – Marzo"
        },
        {
            bloque: 5, nombre: "La energía: luz y sonido", meses: "Abril – Junio"
        }
    ]
};

const HISTORIA_P1: MateriaContenido = {
    materia: "historia",
    nombre: "Historia y Entorno",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1, nombre: "Mi familia y mi historia", meses: "Agosto – Septiembre"
        },
        {
            bloque: 2, nombre: "Mi comunidad y mi escuela", meses: "Octubre – Noviembre"
        },
        {
            bloque: 3, nombre: "México: mi país", meses: "Diciembre – Enero"
        },
        {
            bloque: 4, nombre: "Culturas indígenas de México", meses: "Febrero – Marzo"
        },
        {
            bloque: 5, nombre: "El pasado y el presente", meses: "Abril – Junio"
        }
    ]
};

const CIENCIAS_P2: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1, nombre: "El cuerpo humano: sistemas", meses: "Agosto – Septiembre"
        },
        {
            bloque: 2, nombre: "Ecosistemas y biodiversidad", meses: "Octubre – Noviembre"
        },
        {
            bloque: 3, nombre: "La Tierra y el universo", meses: "Diciembre – Enero"
        },
        {
            bloque: 4, nombre: "Fuerza, movimiento y máquinas simples", meses: "Febrero – Marzo"
        },
        {
            bloque: 5, nombre: "Cambios en la materia", meses: "Abril – Junio"
        }
    ]
};

const HISTORIA_P2: MateriaContenido = {
    materia: "historia",
    nombre: "Historia",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1, nombre: "Las primeras civilizaciones", meses: "Agosto – Septiembre"
        },
        {
            bloque: 2, nombre: "Mesoamérica: mayas y aztecas", meses: "Octubre – Noviembre"
        },
        {
            bloque: 3, nombre: "La Colonia y la Independencia", meses: "Diciembre – Enero"
        },
        {
            bloque: 4, nombre: "México en el siglo XIX y XX", meses: "Febrero – Marzo"
        },
        {
            bloque: 5, nombre: "México contemporáneo", meses: "Abril – Junio"
        }
    ]
};

// Agregar las nuevas materias a los grados existentes
PRIMARIA_1.materias["ciencias"] = CIENCIAS_P1;
PRIMARIA_1.materias["historia"] = HISTORIA_P1;
PRIMARIA_2.materias["ciencias"] = CIENCIAS_P2;
PRIMARIA_2.materias["historia"] = HISTORIA_P2;

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 1 ===
// Inyectamos un bloque 6 extra en cada materia para ofrecer contenido de inclusión
if (PRIMARIA_1.materias["espanol"]) {
    PRIMARIA_1.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Mis palabras en señas (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_1.materias["matematicas"]) {
    PRIMARIA_1.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "Números que hablan (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_1.materias["conocimiento"]) {
    PRIMARIA_1.materias["conocimiento"].bloques.push({
        bloque: 6,
        nombre: "Mi mundo en señas (LSM)",
        meses: "Julio"
    });
}
// Agregar educacion_fisica LSM si no existe como materia formal en PRIMARIA_1
if (!PRIMARIA_1.materias["educacion_fisica"]) {
    PRIMARIA_1.materias["educacion_fisica"] = {
        materia: "educacion_fisica",
        nombre: "Educación Física",
        emoji: "🏃",
        color: "#F97316",
        bloques: []
    };
}
PRIMARIA_1.materias["educacion_fisica"].bloques.push({
    bloque: 6,
    nombre: "Juego y me comunico (LSM)",
    meses: "Julio"
});

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 2 ===
if (PRIMARIA_2.materias["espanol"]) {
    PRIMARIA_2.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Conecto mis palabras (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_2.materias["matematicas"]) {
    PRIMARIA_2.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "Cálculo en mis manos (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_2.materias["conocimiento"]) {
    PRIMARIA_2.materias["conocimiento"].bloques.push({
        bloque: 6,
        nombre: "Mi entorno se comunica (LSM)",
        meses: "Julio"
    });
}
// Agregar educacion_fisica LSM si no existe como materia formal en PRIMARIA_2
if (!PRIMARIA_2.materias["educacion_fisica"]) {
    PRIMARIA_2.materias["educacion_fisica"] = {
        materia: "educacion_fisica",
        nombre: "Educación Física",
        emoji: "🏃",
        color: "#F97316",
        bloques: []
    };
}
PRIMARIA_2.materias["educacion_fisica"].bloques.push({
    bloque: 6,
    nombre: "Cuerpo en movimiento (LSM)",
    meses: "Julio"
});

// Índice de todos los grados disponibles

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 3 ===
if (PRIMARIA_3.materias["espanol"]) {
    PRIMARIA_3.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Palabras precisas (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_3.materias["matematicas"]) {
    PRIMARIA_3.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "Mis manos calculan (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_3.materias["ciencias"]) {
    PRIMARIA_3.materias["ciencias"].bloques.push({
        bloque: 6,
        nombre: "Explorando la Naturaleza (LSM)",
        meses: "Julio"
    });
}
// 3° Primaria usa "formacion" como materia cívica fundamental.
if (!PRIMARIA_3.materias["formacion"]) {
    PRIMARIA_3.materias["formacion"] = {
        materia: "formacion",
        nombre: "Formación",
        emoji: "🤝",
        color: "#10B981",
        bloques: []
    };
}
PRIMARIA_3.materias["formacion"].bloques.push({
    bloque: 6,
    nombre: "Valores en mis manos (LSM)",
    meses: "Julio"
});

// === Bloque 7: Lengua de Señas Mexicana (LSM) para Primaria 4 ===
// Nota: Primaria 4 ya tiene bloque-6 regular, por lo que LSM va como bloque 7.
if (PRIMARIA_4.materias["espanol"]) {
    PRIMARIA_4.materias["espanol"].bloques.push({
        bloque: 7,
        nombre: "Mi lengua tiene forma (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_4.materias["matematicas"]) {
    PRIMARIA_4.materias["matematicas"].bloques.push({
        bloque: 7,
        nombre: "Números que vuelan (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_4.materias["ciencias"]) {
    PRIMARIA_4.materias["ciencias"].bloques.push({
        bloque: 7,
        nombre: "México natural (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_4.materias["historia"]) {
    PRIMARIA_4.materias["historia"].bloques.push({
        bloque: 7,
        nombre: "México en mis manos (LSM)",
        meses: "Julio"
    });
}

// === Bloque 7: Lengua de Señas Mexicana (LSM) para Primaria 5 ===
if (PRIMARIA_5.materias["espanol"]) {
    PRIMARIA_5.materias["espanol"].bloques.push({
        bloque: 7,
        nombre: "Expresiones con alma (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_5.materias["matematicas"]) {
    PRIMARIA_5.materias["matematicas"].bloques.push({
        bloque: 7,
        nombre: "El lenguaje del porcentaje (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_5.materias["ciencias"]) {
    PRIMARIA_5.materias["ciencias"].bloques.push({
        bloque: 7,
        nombre: "Mi cuerpo por dentro (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_5.materias["historia"]) {
    PRIMARIA_5.materias["historia"].bloques.push({
        bloque: 7,
        nombre: "La Revolución habla (LSM)",
        meses: "Julio"
    });
}

// === Bloque 7: Lengua de Señas Mexicana (LSM) para Primaria 6 (FINAL) ===
if (PRIMARIA_6.materias["espanol"]) {
    PRIMARIA_6.materias["espanol"].bloques.push({
        bloque: 7,
        nombre: "Pensamiento en señas (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_6.materias["matematicas"]) {
    PRIMARIA_6.materias["matematicas"].bloques.push({
        bloque: 7,
        nombre: "Álgebra en el aire (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_6.materias["ciencias"]) {
    PRIMARIA_6.materias["ciencias"].bloques.push({
        bloque: 7,
        nombre: "Planeta en nuestras manos (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_6.materias["historia"]) {
    PRIMARIA_6.materias["historia"].bloques.push({
        bloque: 7,
        nombre: "México y el mundo (LSM)",
        meses: "Julio"
    });
}

// Nota: PRIMARIA_3 y KINDER se importan al comienzo del archivo

export const GRADOS_CONTENIDO: Record<string, GradoContenido> = {
    "kinder": KINDER,
    "preescolar-3": KINDER,
    "preescolar-1": PREESCOLAR_1_COMPLETE,
    "preescolar-2": PREESCOLAR_2,
    "primaria-1": PRIMARIA_1,
    "primaria-2": PRIMARIA_2,
    "primaria-3": PRIMARIA_3,
    "primaria-4": PRIMARIA_4,
    "primaria-5": PRIMARIA_5,
    "primaria-6": PRIMARIA_6,
    "secundaria-1": SECUNDARIA_1,
    "secundaria-2": SECUNDARIA_2,
    "secundaria-3": SECUNDARIA_3
};

