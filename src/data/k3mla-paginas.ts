/**
 * Mapa detallado de páginas del libro "Múltiples Lenguajes" (K3MLA) de 3° Preescolar (Kinder).
 * Extraído directamente del ÍNDICE del libro SEP CONALITEG 2025.
 * 
 * Cada entrada mapea un rango de páginas a una actividad/lectura del libro,
 * con el campo formativo SEP y el bloque correspondiente en Chispito.
 */

import type { PaginaLibroEntry } from "./k1mla-paginas";

// Colores del índice del libro (cada color = campo formativo diferente)
// Morado = Lenguaje y comunicación
// Verde = Saberes y pensamiento científico
// Naranja = De lo humano y comunitario / Ética, naturaleza, sociedades
// Azul = Artes / Expresión y apreciación
// Rosa = Pensamiento matemático

export const K3MLA_PAGINAS: PaginaLibroEntry[] = [
    // Bloque 1 (Agosto-Sept) — Exploración inicial
    { paginaInicio: 7, paginaFin: 7, titulo: "Cómo leer este libro", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 8, paginaFin: 12, titulo: "Un baúl del arte en casa de Malli", campoFormativo: "artes", bloqueChispito: 1, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 13, paginaFin: 13, titulo: "Las horas muertas", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 14, paginaFin: 17, titulo: "Un rostro para cada ocasión", campoFormativo: "artes", bloqueChispito: 1, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 18, paginaFin: 21, titulo: "Animales raros, pero bellos: La iguana marina de Galápagos", campoFormativo: "conocimiento", bloqueChispito: 1, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 22, paginaFin: 25, titulo: "La canción del bosque", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },

    // Bloque 2 (Oct-Nov) — Expresión y exploración
    { paginaInicio: 26, paginaFin: 27, titulo: "Vida cotidiana", campoFormativo: "artes", bloqueChispito: 2, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 28, paginaFin: 29, titulo: "La niña tímida", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 30, paginaFin: 33, titulo: "La carrera ralámuli", campoFormativo: "educacion_fisica", bloqueChispito: 2, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 34, paginaFin: 35, titulo: "Animales, arte prehispánico", campoFormativo: "artes", bloqueChispito: 2, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 36, paginaFin: 39, titulo: "Postales del tiempo: Olga Costa", campoFormativo: "artes", bloqueChispito: 2, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 40, paginaFin: 40, titulo: "Gira, girasol, corazón", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 41, paginaFin: 41, titulo: "El gato robón", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },

    // Bloque 3 (Dic-Ene) — Cultura y tradiciones
    { paginaInicio: 42, paginaFin: 46, titulo: "Retos matemáticos", campoFormativo: "matematicas", bloqueChispito: 3, materiaChispito: "matematicas", color: "#EC4899" },
    { paginaInicio: 47, paginaFin: 47, titulo: "Palabras en lengua", campoFormativo: "lenguaje", bloqueChispito: 3, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 48, paginaFin: 49, titulo: "Maternidad", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 50, paginaFin: 53, titulo: "Criaturas con luz propia", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 54, paginaFin: 59, titulo: "Niña jaguar", campoFormativo: "lenguaje", bloqueChispito: 3, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 60, paginaFin: 61, titulo: "Pinturas de Mario Núñez", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 62, paginaFin: 67, titulo: "Un invierno, mi amiga Vini y las bugambilias", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 68, paginaFin: 71, titulo: "Los pulpos maya", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#F97316" },

    // Bloque 4 (Feb-Mar) — México y naturaleza
    { paginaInicio: 72, paginaFin: 79, titulo: "Lu y la nube de curiosidad", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 80, paginaFin: 85, titulo: "Lourdes Grobet", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 86, paginaFin: 91, titulo: "¿Cuándo se gana la lucha? Flamencos, hermosos bailarines alados", campoFormativo: "conocimiento", bloqueChispito: 4, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 92, paginaFin: 95, titulo: "El más deseado", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 96, paginaFin: 99, titulo: "Pirámides", campoFormativo: "conocimiento", bloqueChispito: 4, materiaChispito: "conocimiento", color: "#F97316" },
    { paginaInicio: 100, paginaFin: 103, titulo: "El viaje melódico del Sol y la Luna", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 104, paginaFin: 105, titulo: "Vistas de paisajes", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },

    // Bloque 5 (Abr-Jun) — Consolidación
    { paginaInicio: 106, paginaFin: 111, titulo: "Ernesto y Andrea en el País de las Cosas Perdidas", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 112, paginaFin: 115, titulo: "Pedalea a través del tiempo", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 116, paginaFin: 123, titulo: "Los colores de María", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 124, paginaFin: 127, titulo: "De paseo en Cuicuilco", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 128, paginaFin: 129, titulo: "Comidas en el arte prehispánico", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 130, paginaFin: 131, titulo: "Números en el arte prehispánico", campoFormativo: "matematicas", bloqueChispito: 5, materiaChispito: "matematicas", color: "#EC4899" },
    { paginaInicio: 132, paginaFin: 137, titulo: "El despertar de un cántico", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 138, paginaFin: 141, titulo: "Un mundo mágico", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 142, paginaFin: 145, titulo: "Ulama", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 146, paginaFin: 153, titulo: "Cuellito el dinosaurio", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 154, paginaFin: 154, titulo: "Veo, veo ¿qué ves?", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 155, paginaFin: 155, titulo: "Caritas felices", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 159, paginaFin: 162, titulo: "¡Expresamos nuestras ideas para ejercer nuestros derechos!", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
];

export const K3MLA_LIBRO_INFO = {
    codigo: "K3MLA",
    nombre: "Múltiples Lenguajes",
    grado: "preescolar-3",
    totalPaginas: 163,
    urlVisor: "https://libros.conaliteg.gob.mx/2025/K3MLA.htm",
};

/**
 * Busca la actividad correspondiente a una página del libro K3MLA.
 */
export function buscarPorPaginaK3(pagina: number): PaginaLibroEntry | null {
    return K3MLA_PAGINAS.find(e => pagina >= e.paginaInicio && pagina <= e.paginaFin) ?? null;
}
