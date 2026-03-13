/**
 * Mapa detallado de páginas del libro "Múltiples Lenguajes" (K2MLA) de 2° Preescolar.
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
// Rojo = Educación Física

export const K2MLA_PAGINAS: PaginaLibroEntry[] = [
    // Bloque 1 (Agosto-Sept) — Exploración inicial
    { paginaInicio: 7, paginaFin: 7, titulo: "Cómo leer este libro", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 8, paginaFin: 13, titulo: "Los colores de la playa", campoFormativo: "artes", bloqueChispito: 1, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 14, paginaFin: 17, titulo: "El pueblo de mamá", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 18, paginaFin: 21, titulo: "Héctor García", campoFormativo: "artes", bloqueChispito: 1, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 22, paginaFin: 27, titulo: "El pájaro ciclista", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },

    // Bloque 2 (Oct-Nov) — Expresión y exploración
    { paginaInicio: 28, paginaFin: 31, titulo: "Chapulín arcoíris", campoFormativo: "conocimiento", bloqueChispito: 2, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 32, paginaFin: 33, titulo: "Niños y su entorno", campoFormativo: "conocimiento", bloqueChispito: 2, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 34, paginaFin: 37, titulo: "La gatita Cutbertina", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 38, paginaFin: 41, titulo: "Filogonio Naxín: seres del mundo natural", campoFormativo: "conocimiento", bloqueChispito: 2, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 42, paginaFin: 47, titulo: "Quetzal y Kukul", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 48, paginaFin: 48, titulo: "Palabras en lengua", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },

    // Bloque 3 (Dic-Ene) — Cultura y tradiciones
    { paginaInicio: 49, paginaFin: 49, titulo: "El esqueleto", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#F97316" },
    { paginaInicio: 50, paginaFin: 51, titulo: "Fauna en pintura", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 52, paginaFin: 57, titulo: "Elizabeth Catlett", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 58, paginaFin: 59, titulo: "Pelota purépecha", campoFormativo: "educacion_fisica", bloqueChispito: 3, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 60, paginaFin: 63, titulo: "Luciérnagas", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 64, paginaFin: 65, titulo: "Animales, arte prehispánico", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 66, paginaFin: 69, titulo: "Retos matemáticos", campoFormativo: "matematicas", bloqueChispito: 3, materiaChispito: "matematicas", color: "#EC4899" },
    { paginaInicio: 70, paginaFin: 71, titulo: "Mercados", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#F97316" },

    // Bloque 4 (Feb-Mar) — México y naturaleza
    { paginaInicio: 72, paginaFin: 75, titulo: "Historias entretejidas", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 76, paginaFin: 81, titulo: "Un rebozo especial", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 82, paginaFin: 82, titulo: "Estampas de la sierra", campoFormativo: "conocimiento", bloqueChispito: 4, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 83, paginaFin: 83, titulo: "El ciclo del agua", campoFormativo: "conocimiento", bloqueChispito: 4, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 84, paginaFin: 89, titulo: "El sapo que quería ser pez", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 90, paginaFin: 91, titulo: "Soy", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 92, paginaFin: 93, titulo: "Pintura rupestre", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },

    // Bloque 5 (Abr-Jun) — Consolidación
    { paginaInicio: 94, paginaFin: 99, titulo: "Dormir temprano para soñar", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 100, paginaFin: 101, titulo: "Ronda de la sombra", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 102, paginaFin: 103, titulo: "Viaje poético", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 104, paginaFin: 105, titulo: "Melodía en el reino de los sonidos encantados", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 106, paginaFin: 109, titulo: "Los cardenales norteños", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 110, paginaFin: 111, titulo: "Pinturas de Mario Núñez", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 112, paginaFin: 119, titulo: "El rescate del alacrán", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 120, paginaFin: 123, titulo: "Pequeños y diferentes", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 124, paginaFin: 127, titulo: "Aves mensajeras", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 128, paginaFin: 129, titulo: "Pirámides", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#F97316" },
    { paginaInicio: 130, paginaFin: 135, titulo: "Mañas o de cómo Simón se salvó de una inyección", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 136, paginaFin: 137, titulo: "Escuelas con murales", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 138, paginaFin: 141, titulo: "El antílope saiga", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 142, paginaFin: 145, titulo: "Mi cabello", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 146, paginaFin: 149, titulo: "El \"baile de los diablos\"", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 150, paginaFin: 153, titulo: "A la hora de dormir...", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 154, paginaFin: 154, titulo: "Veo, veo ¿qué ves?", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 155, paginaFin: 155, titulo: "Caritas felices", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 159, paginaFin: 162, titulo: "¡Expresamos nuestras ideas para ejercer nuestros derechos!", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
];

export const K2MLA_LIBRO_INFO = {
    codigo: "K2MLA",
    nombre: "Múltiples Lenguajes",
    grado: "preescolar-2",
    totalPaginas: 163,
    urlVisor: "https://libros.conaliteg.gob.mx/2025/K2MLA.htm",
};

/**
 * Busca la actividad correspondiente a una página del libro K2MLA.
 */
export function buscarPorPaginaK2(pagina: number): PaginaLibroEntry | null {
    return K2MLA_PAGINAS.find(e => pagina >= e.paginaInicio && pagina <= e.paginaFin) ?? null;
}
