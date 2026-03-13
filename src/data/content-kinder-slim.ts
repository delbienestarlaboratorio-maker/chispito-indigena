// Contenido "masticado" para Kinder (Preescolar 3°) 
// Con referencias al libro SEP oficial CONALITEG 2025

import type { GradoContenido, MateriaContenido } from './content-types';

// Códigos de libros CONALITEG Kinder 2025
// P3PPA = Preescolar 3° Pensamiento Algebraico
// P3LYE = Preescolar 3° Lenguaje y Escritura  
// Nota: Para Kinder usamos materias simplificadas
const LIBRO_KINDER_MATH = "P3PPA"; // Pensamiento algebraico Preescolar 3
const LIBRO_KINDER_ESPANOL = "P3LYE"; // Lenguaje Preescolar 3

const MATEMATICAS_KINDER: MateriaContenido = {
    materia: "matematicas",
    nombre: "Números y Formas",
    emoji: "🔢",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Números del 1 al 5",
            meses: "Agosto – Septiembre",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 8,
                paginaFin: 22,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 8 a 22"
            }
        },
        {
            bloque: 2,
            nombre: "Números del 5 al 10",
            meses: "Octubre – Noviembre",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 23,
                paginaFin: 42,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 23 a 42"
            }
        },
        {
            bloque: 3,
            nombre: "Figuras geométricas básicas",
            meses: "Diciembre – Enero",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 43,
                paginaFin: 60,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 43 a 60"
            }
        },
        {
            bloque: 4,
            nombre: "Comparación y clasificación",
            meses: "Febrero – Marzo",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 61,
                paginaFin: 78,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 61 a 78"
            }
        },
        {
            bloque: 5,
            nombre: "Suma con objetos",
            meses: "Abril – Junio",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 79,
                paginaFin: 96,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 79 a 96"
            }
        }
    ]
};

const ESPANOL_KINDER: MateriaContenido = {
    materia: "espanol",
    nombre: "Lenguaje y Letras",
    emoji: "📖",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "Vocales: A, E, I, O, U",
            meses: "Agosto – Septiembre",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 10,
                paginaFin: 28,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 10 a 28"
            }
        },
        {
            bloque: 6,
            nombre: "Yo hablo sin voz (LSM)",
            meses: "Julio",
            libroSep: {
                codigo: "P3LSM",
                paginaInicio: 1,
                paginaFin: 15,
                descripcion: "Inclusión SEP: Lengua de Señas Mexicana para Preescolar 3"
            }
        },
        {
            bloque: 2,
            nombre: "Mi nombre y las letras",
            meses: "Octubre – Noviembre",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 29,
                paginaFin: 48,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 29 a 48"
            }
        },
        {
            bloque: 3,
            nombre: "Cuentos y narración oral",
            meses: "Diciembre – Enero",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 49,
                paginaFin: 68,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 49 a 68"
            }
        },
        {
            bloque: 4,
            nombre: "Primeras sílabas y palabras",
            meses: "Febrero – Marzo",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 69,
                paginaFin: 86,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 69 a 86"
            }
        },
        {
            bloque: 5,
            nombre: "Lectura emergente y escritura inicial",
            meses: "Abril – Junio",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 87,
                paginaFin: 104,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 87 a 104"
            }
        }
    ]
};

const CONOCIMIENTO_KINDER: MateriaContenido = {
    materia: "conocimiento",
    nombre: "Conocimiento del Medio",
    emoji: "🔍",
    color: "#EAB308",
    bloques: [
        {
            bloque: 6,
            nombre: "Mi ciudad habla (LSM)",
            meses: "Julio",
            libroSep: {
                codigo: "P3LSM",
                paginaInicio: 31,
                paginaFin: 45,
                descripcion: "Inclusión SEP: Conocimiento en Señas Preescolar 3"
            }
        }
    ]
};

const EDUCACION_FISICA_KINDER: MateriaContenido = {
    materia: "educacion_fisica",
    nombre: "Educación Física",
    emoji: "🏃",
    color: "#F97316",
    bloques: [
        {
            bloque: 6,
            nombre: "Mis deportes hablan (LSM)",
            meses: "Julio",
            libroSep: {
                codigo: "P3LSM",
                paginaInicio: 46,
                paginaFin: 60,
                descripcion: "Inclusión SEP: Deportes en Señas Preescolar 3"
            }
        }
    ]
};

export const KINDER: GradoContenido = {
    grado: "kinder",
    nombre: "Kinder (Preescolar 3°)",
    emoji: "🌈",
    materias: {
        matematicas: MATEMATICAS_KINDER,
        espanol: ESPANOL_KINDER,
        conocimiento: CONOCIMIENTO_KINDER,
        educacion_fisica: EDUCACION_FISICA_KINDER
    }
};
