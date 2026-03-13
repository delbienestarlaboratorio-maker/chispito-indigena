/**
 * Mapa detallado de páginas del libro "Múltiples Lenguajes" (K1MLA) de 1° Preescolar.
 * Extraído directamente del ÍNDICE del libro SEP CONALITEG 2025.
 * 
 * Cada entrada mapea un rango de páginas a una actividad/lectura del libro,
 * con el campo formativo SEP y el bloque correspondiente en Chispito.
 */

export type PaginaLibroEntry = {
    paginaInicio: number;
    paginaFin: number;
    titulo: string;
    campoFormativo: "lenguaje" | "artes" | "conocimiento" | "matematicas" | "educacion_fisica";
    bloqueChispito: number;
    materiaChispito: string;
    color: string;
};

// Colores del índice del libro (cada color = campo formativo diferente)
// Morado = Lenguaje y comunicación
// Verde = Saberes y pensamiento científico
// Naranja = De lo humano y comunitario / Ética, naturaleza, sociedades
// Azul = Artes / Expresión y apreciación
// Rosa = Pensamiento matemático

export const K1MLA_PAGINAS: PaginaLibroEntry[] = [
    // Bloque 1 (Agosto-Sept) — Exploración inicial
    { paginaInicio: 7, paginaFin: 7, titulo: "Cómo leer este libro", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 8, paginaFin: 13, titulo: "Malli y el baúl del arte", campoFormativo: "artes", bloqueChispito: 1, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 14, paginaFin: 15, titulo: "Todas son ranas, ¿pero son diferentes?", campoFormativo: "conocimiento", bloqueChispito: 1, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 16, paginaFin: 19, titulo: "Calcetín", campoFormativo: "lenguaje", bloqueChispito: 1, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 20, paginaFin: 23, titulo: "Animales, bichos, alimañas y otras bestias", campoFormativo: "conocimiento", bloqueChispito: 1, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 24, paginaFin: 25, titulo: "Naranja", campoFormativo: "artes", bloqueChispito: 1, materiaChispito: "artes", color: "#3B82F6" },

    // Bloque 2 (Oct-Nov) — Expresión y exploración
    { paginaInicio: 26, paginaFin: 29, titulo: "Chiras, pelas: ¡a jugar con las canicas!", campoFormativo: "educacion_fisica", bloqueChispito: 2, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 30, paginaFin: 35, titulo: "A bicho que no conozcas, ¡no le pises la cola!", campoFormativo: "conocimiento", bloqueChispito: 2, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 36, paginaFin: 37, titulo: "Títeres", campoFormativo: "artes", bloqueChispito: 2, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 38, paginaFin: 41, titulo: "Una palabra, un dibujo", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 42, paginaFin: 45, titulo: "Turu y Pompo", campoFormativo: "lenguaje", bloqueChispito: 2, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 46, paginaFin: 47, titulo: "Hermosas y misteriosas", campoFormativo: "artes", bloqueChispito: 2, materiaChispito: "artes", color: "#3B82F6" },

    // Bloque 3 (Dic-Ene) — Cultura y tradiciones
    { paginaInicio: 48, paginaFin: 51, titulo: "El sabor del chocolate", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 52, paginaFin: 55, titulo: "¿Qué frutas y verduras hay en tu región?", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 56, paginaFin: 57, titulo: "Pinturas de Mario Núñez", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 58, paginaFin: 61, titulo: "Animales raros, pero bellos: El murciélago diadema de Filipinas", campoFormativo: "conocimiento", bloqueChispito: 3, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 62, paginaFin: 63, titulo: "Pinturas rupestres", campoFormativo: "artes", bloqueChispito: 3, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 64, paginaFin: 70, titulo: "Un extraño paseo", campoFormativo: "lenguaje", bloqueChispito: 3, materiaChispito: "espanol", color: "#9333EA" },

    // Bloque 4 (Feb-Mar) — México y naturaleza
    { paginaInicio: 71, paginaFin: 71, titulo: "Veo, veo ¿qué ves?", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 72, paginaFin: 75, titulo: "El viaje musical de Estrella la Mariposa", campoFormativo: "artes", bloqueChispito: 4, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 76, paginaFin: 79, titulo: "Cabeza de mango", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 80, paginaFin: 83, titulo: "Papalotla no supo que existía la noche", campoFormativo: "lenguaje", bloqueChispito: 4, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 84, paginaFin: 87, titulo: "Retos matemáticos", campoFormativo: "matematicas", bloqueChispito: 4, materiaChispito: "matematicas", color: "#EC4899" },
    { paginaInicio: 88, paginaFin: 88, titulo: "Caritas felices", campoFormativo: "educacion_fisica", bloqueChispito: 4, materiaChispito: "educacion_fisica", color: "#F97316" },

    // Bloque 5 (Abr-Jun) — Consolidación
    { paginaInicio: 89, paginaFin: 89, titulo: "Árboles y raíces", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 90, paginaFin: 93, titulo: "Los bisontes americanos", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 94, paginaFin: 95, titulo: "Obras de niños", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 96, paginaFin: 101, titulo: "El peso de las nubes", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 102, paginaFin: 105, titulo: "Manu el cangrejo ermitaño", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 106, paginaFin: 107, titulo: "Soy", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 108, paginaFin: 115, titulo: "El sueño de Paula", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 116, paginaFin: 120, titulo: "La g busca a su familia", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 121, paginaFin: 121, titulo: "Animales, arte prehispánico", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 122, paginaFin: 123, titulo: "El terrestre más grande del mundo", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 124, paginaFin: 129, titulo: "Mariquita", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 130, paginaFin: 131, titulo: "Pelota mixteca", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 132, paginaFin: 135, titulo: "Manuel Álvarez Bravo", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 136, paginaFin: 136, titulo: "El cubo del mar y el ala", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 137, paginaFin: 137, titulo: "El cubo del pez y el oso", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 138, paginaFin: 141, titulo: "Abatuti", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 142, paginaFin: 145, titulo: "Animales raros, pero bellos: El picozapato", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 146, paginaFin: 147, titulo: "Maternidad", campoFormativo: "artes", bloqueChispito: 5, materiaChispito: "artes", color: "#3B82F6" },
    { paginaInicio: 148, paginaFin: 151, titulo: "Los nombres de los dedos", campoFormativo: "educacion_fisica", bloqueChispito: 5, materiaChispito: "educacion_fisica", color: "#F97316" },
    { paginaInicio: 152, paginaFin: 152, titulo: "Las estrellas", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 153, paginaFin: 153, titulo: "Palabras en lengua", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
    { paginaInicio: 154, paginaFin: 155, titulo: "El dragoncito azul", campoFormativo: "conocimiento", bloqueChispito: 5, materiaChispito: "conocimiento", color: "#22C55E" },
    { paginaInicio: 159, paginaFin: 162, titulo: "¡Expresamos nuestras ideas para ejercer nuestros derechos!", campoFormativo: "lenguaje", bloqueChispito: 5, materiaChispito: "espanol", color: "#9333EA" },
];

export const K1MLA_LIBRO_INFO = {
    codigo: "K1MLA",
    nombre: "Múltiples Lenguajes",
    grado: "preescolar-1",
    totalPaginas: 163,
    urlVisor: "https://libros.conaliteg.gob.mx/2025/K1MLA.htm",
};

/**
 * Busca la actividad correspondiente a una página del libro K1MLA.
 */
export function buscarPorPagina(pagina: number): PaginaLibroEntry | null {
    return K1MLA_PAGINAS.find(e => pagina >= e.paginaInicio && pagina <= e.paginaFin) ?? null;
}
