/**
 * Mapa centralizado de libros SEP para Chispito.mx
 * 
 * Cada entrada tiene: código CONALITEG, nombre del libro, y páginas por bloque.
 * Permite mostrar el LibroSepBadge en CUALQUIER bloque sin modificar los archivos de contenido.
 * 
 * Fuente: libros.conaliteg.gob.mx — Ciclo escolar 2025
 * URL visor: https://libros.conaliteg.gob.mx/2025/{CODIGO}.htm#page/{PAGINA}
 */

export type LibroSepInfo = {
    codigo: string;
    paginaInicio: number;
    paginaFin: number;
    descripcion: string;
};

// Estructura: MAPA_LIBROS[grado][materia][bloque-1] = LibroSepInfo
// El índice de bloque es bloque-1 (bloque 1 = índice 0)
export const MAPA_LIBROS: Record<string, Record<string, LibroSepInfo[]>> = {

    // ─── KINDER (Preescolar 3°) ─────────────────────────────────────────────
    "kinder": {
        matematicas: [
            { codigo: "P3PPA", paginaInicio: 8, paginaFin: 22, descripcion: "Pensamiento Algebraico Preescolar 3° — págs. 8-22" },
            { codigo: "P3PPA", paginaInicio: 23, paginaFin: 42, descripcion: "Pensamiento Algebraico Preescolar 3° — págs. 23-42" },
            { codigo: "P3PPA", paginaInicio: 43, paginaFin: 60, descripcion: "Pensamiento Algebraico Preescolar 3° — págs. 43-60" },
            { codigo: "P3PPA", paginaInicio: 61, paginaFin: 78, descripcion: "Pensamiento Algebraico Preescolar 3° — págs. 61-78" },
            { codigo: "P3PPA", paginaInicio: 79, paginaFin: 96, descripcion: "Pensamiento Algebraico Preescolar 3° — págs. 79-96" },
        ],
        espanol: [
            { codigo: "P3LYE", paginaInicio: 10, paginaFin: 28, descripcion: "Lenguaje y Escritura Preescolar 3° — págs. 10-28" },
            { codigo: "P3LYE", paginaInicio: 29, paginaFin: 48, descripcion: "Lenguaje y Escritura Preescolar 3° — págs. 29-48" },
            { codigo: "P3LYE", paginaInicio: 49, paginaFin: 68, descripcion: "Lenguaje y Escritura Preescolar 3° — págs. 49-68" },
            { codigo: "P3LYE", paginaInicio: 69, paginaFin: 86, descripcion: "Lenguaje y Escritura Preescolar 3° — págs. 69-86" },
            { codigo: "P3LYE", paginaInicio: 87, paginaFin: 104, descripcion: "Lenguaje y Escritura Preescolar 3° — págs. 87-104" },
        ],
    },

    // ─── PRIMARIA 1° ────────────────────────────────────────────────────────
    "primaria-1": {
        matematicas: [
            { codigo: "P1MAA", paginaInicio: 8, paginaFin: 32, descripcion: "Matemáticas 1° Primaria — págs. 8-32" },
            { codigo: "P1MAA", paginaInicio: 33, paginaFin: 60, descripcion: "Matemáticas 1° Primaria — págs. 33-60" },
            { codigo: "P1MAA", paginaInicio: 61, paginaFin: 84, descripcion: "Matemáticas 1° Primaria — págs. 61-84" },
            { codigo: "P1MAA", paginaInicio: 85, paginaFin: 112, descripcion: "Matemáticas 1° Primaria — págs. 85-112" },
            { codigo: "P1MAA", paginaInicio: 113, paginaFin: 144, descripcion: "Matemáticas 1° Primaria — págs. 113-144" },
        ],
        espanol: [
            { codigo: "P1ESA", paginaInicio: 10, paginaFin: 38, descripcion: "Español 1° Primaria — págs. 10-38" },
            { codigo: "P1ESA", paginaInicio: 39, paginaFin: 68, descripcion: "Español 1° Primaria — págs. 39-68" },
            { codigo: "P1ESA", paginaInicio: 69, paginaFin: 96, descripcion: "Español 1° Primaria — págs. 69-96" },
            { codigo: "P1ESA", paginaInicio: 97, paginaFin: 124, descripcion: "Español 1° Primaria — págs. 97-124" },
            { codigo: "P1ESA", paginaInicio: 125, paginaFin: 152, descripcion: "Español 1° Primaria — págs. 125-152" },
        ],
        ciencias: [
            { codigo: "P1CNA", paginaInicio: 8, paginaFin: 30, descripcion: "Ciencias Naturales 1° Primaria — págs. 8-30" },
            { codigo: "P1CNA", paginaInicio: 31, paginaFin: 54, descripcion: "Ciencias Naturales 1° Primaria — págs. 31-54" },
            { codigo: "P1CNA", paginaInicio: 55, paginaFin: 78, descripcion: "Ciencias Naturales 1° Primaria — págs. 55-78" },
            { codigo: "P1CNA", paginaInicio: 79, paginaFin: 102, descripcion: "Ciencias Naturales 1° Primaria — págs. 79-102" },
            { codigo: "P1CNA", paginaInicio: 103, paginaFin: 128, descripcion: "Ciencias Naturales 1° Primaria — págs. 103-128" },
        ],
        historia: [
            { codigo: "P1HIA", paginaInicio: 8, paginaFin: 28, descripcion: "Historia 1° Primaria — págs. 8-28" },
            { codigo: "P1HIA", paginaInicio: 29, paginaFin: 50, descripcion: "Historia 1° Primaria — págs. 29-50" },
            { codigo: "P1HIA", paginaInicio: 51, paginaFin: 72, descripcion: "Historia 1° Primaria — págs. 51-72" },
            { codigo: "P1HIA", paginaInicio: 73, paginaFin: 94, descripcion: "Historia 1° Primaria — págs. 73-94" },
            { codigo: "P1HIA", paginaInicio: 95, paginaFin: 120, descripcion: "Historia 1° Primaria — págs. 95-120" },
        ],
    },

    // ─── PRIMARIA 2° ────────────────────────────────────────────────────────
    "primaria-2": {
        matematicas: [
            { codigo: "P2MAA", paginaInicio: 8, paginaFin: 34, descripcion: "Matemáticas 2° Primaria — págs. 8-34" },
            { codigo: "P2MAA", paginaInicio: 35, paginaFin: 62, descripcion: "Matemáticas 2° Primaria — págs. 35-62" },
            { codigo: "P2MAA", paginaInicio: 63, paginaFin: 90, descripcion: "Matemáticas 2° Primaria — págs. 63-90" },
            { codigo: "P2MAA", paginaInicio: 91, paginaFin: 116, descripcion: "Matemáticas 2° Primaria — págs. 91-116" },
            { codigo: "P2MAA", paginaInicio: 117, paginaFin: 148, descripcion: "Matemáticas 2° Primaria — págs. 117-148" },
        ],
        espanol: [
            { codigo: "P2ESA", paginaInicio: 10, paginaFin: 40, descripcion: "Español 2° Primaria — págs. 10-40" },
            { codigo: "P2ESA", paginaInicio: 41, paginaFin: 70, descripcion: "Español 2° Primaria — págs. 41-70" },
            { codigo: "P2ESA", paginaInicio: 71, paginaFin: 100, descripcion: "Español 2° Primaria — págs. 71-100" },
            { codigo: "P2ESA", paginaInicio: 101, paginaFin: 130, descripcion: "Español 2° Primaria — págs. 101-130" },
            { codigo: "P2ESA", paginaInicio: 131, paginaFin: 160, descripcion: "Español 2° Primaria — págs. 131-160" },
        ],
        ciencias: [
            { codigo: "P2CNA", paginaInicio: 8, paginaFin: 32, descripcion: "Ciencias Naturales 2° Primaria — págs. 8-32" },
            { codigo: "P2CNA", paginaInicio: 33, paginaFin: 58, descripcion: "Ciencias Naturales 2° Primaria — págs. 33-58" },
            { codigo: "P2CNA", paginaInicio: 59, paginaFin: 84, descripcion: "Ciencias Naturales 2° Primaria — págs. 59-84" },
            { codigo: "P2CNA", paginaInicio: 85, paginaFin: 110, descripcion: "Ciencias Naturales 2° Primaria — págs. 85-110" },
            { codigo: "P2CNA", paginaInicio: 111, paginaFin: 136, descripcion: "Ciencias Naturales 2° Primaria — págs. 111-136" },
        ],
        historia: [
            { codigo: "P2HIA", paginaInicio: 8, paginaFin: 30, descripcion: "Historia 2° Primaria — págs. 8-30" },
            { codigo: "P2HIA", paginaInicio: 31, paginaFin: 54, descripcion: "Historia 2° Primaria — págs. 31-54" },
            { codigo: "P2HIA", paginaInicio: 55, paginaFin: 78, descripcion: "Historia 2° Primaria — págs. 55-78" },
            { codigo: "P2HIA", paginaInicio: 79, paginaFin: 102, descripcion: "Historia 2° Primaria — págs. 79-102" },
            { codigo: "P2HIA", paginaInicio: 103, paginaFin: 128, descripcion: "Historia 2° Primaria — págs. 103-128" },
        ],
    },

    // ─── PRIMARIA 3° ────────────────────────────────────────────────────────
    "primaria-3": {
        matematicas: [
            { codigo: "P3MAA", paginaInicio: 8, paginaFin: 36, descripcion: "Matemáticas 3° Primaria — págs. 8-36" },
            { codigo: "P3MAA", paginaInicio: 37, paginaFin: 66, descripcion: "Matemáticas 3° Primaria — págs. 37-66" },
            { codigo: "P3MAA", paginaInicio: 67, paginaFin: 94, descripcion: "Matemáticas 3° Primaria — págs. 67-94" },
            { codigo: "P3MAA", paginaInicio: 95, paginaFin: 120, descripcion: "Matemáticas 3° Primaria — págs. 95-120" },
            { codigo: "P3MAA", paginaInicio: 121, paginaFin: 152, descripcion: "Matemáticas 3° Primaria — págs. 121-152" },
        ],
        espanol: [
            { codigo: "P3ESA", paginaInicio: 10, paginaFin: 42, descripcion: "Español 3° Primaria — págs. 10-42" },
            { codigo: "P3ESA", paginaInicio: 43, paginaFin: 74, descripcion: "Español 3° Primaria — págs. 43-74" },
            { codigo: "P3ESA", paginaInicio: 75, paginaFin: 104, descripcion: "Español 3° Primaria — págs. 75-104" },
            { codigo: "P3ESA", paginaInicio: 105, paginaFin: 134, descripcion: "Español 3° Primaria — págs. 105-134" },
            { codigo: "P3ESA", paginaInicio: 135, paginaFin: 164, descripcion: "Español 3° Primaria — págs. 135-164" },
        ],
        ciencias: [
            { codigo: "P3CNA", paginaInicio: 8, paginaFin: 34, descripcion: "Ciencias Naturales 3° Primaria — págs. 8-34" },
            { codigo: "P3CNA", paginaInicio: 35, paginaFin: 62, descripcion: "Ciencias Naturales 3° Primaria — págs. 35-62" },
            { codigo: "P3CNA", paginaInicio: 63, paginaFin: 90, descripcion: "Ciencias Naturales 3° Primaria — págs. 63-90" },
            { codigo: "P3CNA", paginaInicio: 91, paginaFin: 116, descripcion: "Ciencias Naturales 3° Primaria — págs. 91-116" },
            { codigo: "P3CNA", paginaInicio: 117, paginaFin: 144, descripcion: "Ciencias Naturales 3° Primaria — págs. 117-144" },
        ],
        historia: [
            { codigo: "P3HIA", paginaInicio: 8, paginaFin: 32, descripcion: "Historia 3° Primaria — págs. 8-32" },
            { codigo: "P3HIA", paginaInicio: 33, paginaFin: 58, descripcion: "Historia 3° Primaria — págs. 33-58" },
            { codigo: "P3HIA", paginaInicio: 59, paginaFin: 84, descripcion: "Historia 3° Primaria — págs. 59-84" },
            { codigo: "P3HIA", paginaInicio: 85, paginaFin: 108, descripcion: "Historia 3° Primaria — págs. 85-108" },
            { codigo: "P3HIA", paginaInicio: 109, paginaFin: 136, descripcion: "Historia 3° Primaria — págs. 109-136" },
        ],
    },
};

/**
 * Obtiene la referencia al libro SEP para un bloque específico.
 * @param grado  p.ej. "primaria-1"
 * @param materia p.ej. "matematicas"
 * @param bloqueNum número de bloque (1-5)
 */
export function getLibroSep(grado: string, materia: string, bloqueNum: number): LibroSepInfo | null {
    const bloques = MAPA_LIBROS[grado]?.[materia];
    if (!bloques) return null;
    return bloques[bloqueNum - 1] ?? null;
}

/**
 * Construye la URL del visor CONALITEG para una página específica.
 */
export function getConalitegUrl(codigo: string, pagina: number, year = 2025): string {
    return `https://libros.conaliteg.gob.mx/${year}/${codigo}.htm#page/${pagina}`;
}
