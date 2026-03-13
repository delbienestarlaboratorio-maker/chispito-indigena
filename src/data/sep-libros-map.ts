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
        lenguas: [
            { codigo: "EIP097", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Ch'ol — 1° Primaria" },
            { codigo: "EIP115", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Chichimeco — 1° Primaria" },
            { codigo: "EIP061", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Cora — 1° Primaria" },
            { codigo: "EIP031", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Huichol — 1° Primaria" },
            { codigo: "EIP001", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Maya — 1° Primaria" },
            { codigo: "EIP103", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mayo — 1° Primaria" },
            { codigo: "EIP073", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mazateco — 1° Primaria" },
            { codigo: "EIP037", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mixteco — 1° Primaria" },
            { codigo: "EIP007", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Náhuatl — 1° Primaria" },
            { codigo: "EIP085", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Seri — 1° Primaria" },
            { codigo: "EIP067", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tarahumara — 1° Primaria" },
            { codigo: "EIP049", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Totonaco — 1° Primaria" },
            { codigo: "EIP013", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tseltal — 1° Primaria" },
            { codigo: "EIP019", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tsotsil — 1° Primaria" },
            { codigo: "EIP043", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Yaqui — 1° Primaria" },
            { codigo: "EIP025", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Zapoteco — 1° Primaria" },
            { codigo: "EIP070", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tojolabal — 1° Primaria" },
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
        lenguas: [
            { codigo: "EIP098", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Ch'ol — 2° Primaria" },
            { codigo: "EIP116", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Chichimeco — 2° Primaria" },
            { codigo: "EIP062", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Cora — 2° Primaria" },
            { codigo: "EIP032", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Huichol — 2° Primaria" },
            { codigo: "EIP002", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Maya — 2° Primaria" },
            { codigo: "EIP104", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mayo — 2° Primaria" },
            { codigo: "EIP074", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mazateco — 2° Primaria" },
            { codigo: "EIP038", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mixteco — 2° Primaria" },
            { codigo: "EIP008", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Náhuatl — 2° Primaria" },
            { codigo: "EIP086", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Seri — 2° Primaria" },
            { codigo: "EIP068", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tarahumara — 2° Primaria" },
            { codigo: "EIP050", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Totonaco — 2° Primaria" },
            { codigo: "EIP014", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tseltal — 2° Primaria" },
            { codigo: "EIP020", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tsotsil — 2° Primaria" },
            { codigo: "EIP044", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Yaqui — 2° Primaria" },
            { codigo: "EIP026", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Zapoteco — 2° Primaria" },
            { codigo: "EIP071", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tojolabal — 2° Primaria" },
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
        lenguas: [
            { codigo: "EIP099", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Ch'ol — 3° Primaria" },
            { codigo: "EIP117", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Chichimeco — 3° Primaria" },
            { codigo: "EIP063", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Cora — 3° Primaria" },
            { codigo: "EIP033", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Huichol — 3° Primaria" },
            { codigo: "EIP003", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Maya — 3° Primaria" },
            { codigo: "EIP105", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mayo — 3° Primaria" },
            { codigo: "EIP075", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mazateco — 3° Primaria" },
            { codigo: "EIP039", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Mixteco — 3° Primaria" },
            { codigo: "EIP009", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Náhuatl — 3° Primaria" },
            { codigo: "EIP087", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Seri — 3° Primaria" },
            { codigo: "EIP069", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tarahumara — 3° Primaria" },
            { codigo: "EIP051", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Totonaco — 3° Primaria" },
            { codigo: "EIP015", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tseltal — 3° Primaria" },
            { codigo: "EIP021", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tsotsil — 3° Primaria" },
            { codigo: "EIP045", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Yaqui — 3° Primaria" },
            { codigo: "EIP027", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Zapoteco — 3° Primaria" },
            { codigo: "EIP072", paginaInicio: 1, paginaFin: 200, descripcion: "Proyecto en mi lengua: Tojolabal — 3° Primaria" },
        ],
    },

    // ─── TELESECUNDARIA 1° (Colección Ximhai) ────────────────────────────
    "telesecundaria-1": {
        lenguajes_nem: [
            { codigo: "T1LEA", paginaInicio: 8, paginaFin: 56, descripcion: "Lenguajes Telesecundaria 1° (Ximhai) — págs. 8-56" },
            { codigo: "T1LEA", paginaInicio: 57, paginaFin: 112, descripcion: "Lenguajes Telesecundaria 1° (Ximhai) — págs. 57-112" },
            { codigo: "T1LEA", paginaInicio: 113, paginaFin: 168, descripcion: "Lenguajes Telesecundaria 1° (Ximhai) — págs. 113-168" },
            { codigo: "T1LEA", paginaInicio: 169, paginaFin: 224, descripcion: "Lenguajes Telesecundaria 1° (Ximhai) — págs. 169-224" },
            { codigo: "T1LEA", paginaInicio: 225, paginaFin: 281, descripcion: "Lenguajes Telesecundaria 1° (Ximhai) — págs. 225-281" },
        ],
        saberes_cientificos: [
            { codigo: "T1SAA", paginaInicio: 8, paginaFin: 56, descripcion: "Saberes y Pensamiento Científico 1° (Ximhai) — págs. 8-56" },
            { codigo: "T1SAA", paginaInicio: 57, paginaFin: 112, descripcion: "Saberes y Pensamiento Científico 1° (Ximhai) — págs. 57-112" },
            { codigo: "T1SAA", paginaInicio: 113, paginaFin: 168, descripcion: "Saberes y Pensamiento Científico 1° (Ximhai) — págs. 113-168" },
            { codigo: "T1SAA", paginaInicio: 169, paginaFin: 224, descripcion: "Saberes y Pensamiento Científico 1° (Ximhai) — págs. 169-224" },
            { codigo: "T1SAA", paginaInicio: 225, paginaFin: 281, descripcion: "Saberes y Pensamiento Científico 1° (Ximhai) — págs. 225-281" },
        ],
        etica_naturaleza: [
            { codigo: "T1ETA", paginaInicio: 8, paginaFin: 56, descripcion: "Ética, Naturaleza y Sociedades 1° (Ximhai) — págs. 8-56" },
            { codigo: "T1ETA", paginaInicio: 57, paginaFin: 112, descripcion: "Ética, Naturaleza y Sociedades 1° (Ximhai) — págs. 57-112" },
            { codigo: "T1ETA", paginaInicio: 113, paginaFin: 168, descripcion: "Ética, Naturaleza y Sociedades 1° (Ximhai) — págs. 113-168" },
            { codigo: "T1ETA", paginaInicio: 169, paginaFin: 224, descripcion: "Ética, Naturaleza y Sociedades 1° (Ximhai) — págs. 169-224" },
            { codigo: "T1ETA", paginaInicio: 225, paginaFin: 281, descripcion: "Ética, Naturaleza y Sociedades 1° (Ximhai) — págs. 225-281" },
        ],
        humano_comunitario: [
            { codigo: "T1HUA", paginaInicio: 8, paginaFin: 52, descripcion: "De lo Humano y lo Comunitario 1° (Ximhai) — págs. 8-52" },
            { codigo: "T1HUA", paginaInicio: 53, paginaFin: 104, descripcion: "De lo Humano y lo Comunitario 1° (Ximhai) — págs. 53-104" },
            { codigo: "T1HUA", paginaInicio: 105, paginaFin: 156, descripcion: "De lo Humano y lo Comunitario 1° (Ximhai) — págs. 105-156" },
            { codigo: "T1HUA", paginaInicio: 157, paginaFin: 208, descripcion: "De lo Humano y lo Comunitario 1° (Ximhai) — págs. 157-208" },
            { codigo: "T1HUA", paginaInicio: 209, paginaFin: 259, descripcion: "De lo Humano y lo Comunitario 1° (Ximhai) — págs. 209-259" },
        ],
        multiples_lenguajes: [
            { codigo: "T1MLA", paginaInicio: 8, paginaFin: 40, descripcion: "Múltiples Lenguajes 1° (Ximhai) — págs. 8-40" },
            { codigo: "T1MLA", paginaInicio: 41, paginaFin: 72, descripcion: "Múltiples Lenguajes 1° (Ximhai) — págs. 41-72" },
            { codigo: "T1MLA", paginaInicio: 73, paginaFin: 104, descripcion: "Múltiples Lenguajes 1° (Ximhai) — págs. 73-104" },
            { codigo: "T1MLA", paginaInicio: 105, paginaFin: 136, descripcion: "Múltiples Lenguajes 1° (Ximhai) — págs. 105-136" },
            { codigo: "T1MLA", paginaInicio: 137, paginaFin: 163, descripcion: "Múltiples Lenguajes 1° (Ximhai) — págs. 137-163" },
        ],
        proyectos_nem: [
            { codigo: "T1LP1", paginaInicio: 1, paginaFin: 281, descripcion: "Proyectos Tomo I — 1° Telesecundaria (Ximhai)" },
            { codigo: "T1LP2", paginaInicio: 1, paginaFin: 267, descripcion: "Proyectos Tomo II — 1° Telesecundaria (Ximhai)" },
            { codigo: "T1LP3", paginaInicio: 1, paginaFin: 275, descripcion: "Proyectos Tomo III — 1° Telesecundaria (Ximhai)" },
            { codigo: "T1LP1", paginaInicio: 1, paginaFin: 281, descripcion: "Proyecto Integrador — Telesecundaria 1°" },
        ],
        ingles: [
            { codigo: "T1INA", paginaInicio: 8, paginaFin: 44, descripcion: "Projects and Readings (Inglés) 1° — págs. 8-44" },
            { codigo: "T1INA", paginaInicio: 45, paginaFin: 82, descripcion: "Projects and Readings (Inglés) 1° — págs. 45-82" },
            { codigo: "T1INA", paginaInicio: 83, paginaFin: 120, descripcion: "Projects and Readings (Inglés) 1° — págs. 83-120" },
            { codigo: "T1INA", paginaInicio: 121, paginaFin: 154, descripcion: "Projects and Readings (Inglés) 1° — págs. 121-154" },
            { codigo: "T1INA", paginaInicio: 155, paginaFin: 187, descripcion: "Projects and Readings (Inglés) 1° — págs. 155-187" },
        ],
    },

    // ─── TELESECUNDARIA 2° (Colección Sk'asolil) ─────────────────────────
    "telesecundaria-2": {
        lenguajes_nem: [
            { codigo: "T2LEA", paginaInicio: 8, paginaFin: 56, descripcion: "Lenguajes Telesecundaria 2° (Sk'asolil) — págs. 8-56" },
            { codigo: "T2LEA", paginaInicio: 57, paginaFin: 112, descripcion: "Lenguajes Telesecundaria 2° (Sk'asolil) — págs. 57-112" },
            { codigo: "T2LEA", paginaInicio: 113, paginaFin: 168, descripcion: "Lenguajes Telesecundaria 2° (Sk'asolil) — págs. 113-168" },
            { codigo: "T2LEA", paginaInicio: 169, paginaFin: 224, descripcion: "Lenguajes Telesecundaria 2° (Sk'asolil) — págs. 169-224" },
            { codigo: "T2LEA", paginaInicio: 225, paginaFin: 281, descripcion: "Lenguajes Telesecundaria 2° (Sk'asolil) — págs. 225-281" },
        ],
        saberes_cientificos: [
            { codigo: "T2SAA", paginaInicio: 8, paginaFin: 56, descripcion: "Saberes y Pensamiento Científico 2° (Sk'asolil) — págs. 8-56" },
            { codigo: "T2SAA", paginaInicio: 57, paginaFin: 112, descripcion: "Saberes y Pensamiento Científico 2° (Sk'asolil) — págs. 57-112" },
            { codigo: "T2SAA", paginaInicio: 113, paginaFin: 168, descripcion: "Saberes y Pensamiento Científico 2° (Sk'asolil) — págs. 113-168" },
            { codigo: "T2SAA", paginaInicio: 169, paginaFin: 224, descripcion: "Saberes y Pensamiento Científico 2° (Sk'asolil) — págs. 169-224" },
            { codigo: "T2SAA", paginaInicio: 225, paginaFin: 281, descripcion: "Saberes y Pensamiento Científico 2° (Sk'asolil) — págs. 225-281" },
        ],
        etica_naturaleza: [
            { codigo: "T2ETA", paginaInicio: 8, paginaFin: 40, descripcion: "Ética, Naturaleza y Sociedades 2° (Sk'asolil) — págs. 8-40" },
            { codigo: "T2ETA", paginaInicio: 41, paginaFin: 78, descripcion: "Ética, Naturaleza y Sociedades 2° (Sk'asolil) — págs. 41-78" },
            { codigo: "T2ETA", paginaInicio: 79, paginaFin: 112, descripcion: "Ética, Naturaleza y Sociedades 2° (Sk'asolil) — págs. 79-112" },
            { codigo: "T2ETA", paginaInicio: 113, paginaFin: 140, descripcion: "Ética, Naturaleza y Sociedades 2° (Sk'asolil) — págs. 113-140" },
            { codigo: "T2ETA", paginaInicio: 141, paginaFin: 156, descripcion: "Ética, Naturaleza y Sociedades 2° (Sk'asolil) — págs. 141-156" },
        ],
        humano_comunitario: [
            { codigo: "T2HUA", paginaInicio: 8, paginaFin: 56, descripcion: "De lo Humano y lo Comunitario 2° (Sk'asolil) — págs. 8-56" },
            { codigo: "T2HUA", paginaInicio: 57, paginaFin: 112, descripcion: "De lo Humano y lo Comunitario 2° (Sk'asolil) — págs. 57-112" },
            { codigo: "T2HUA", paginaInicio: 113, paginaFin: 168, descripcion: "De lo Humano y lo Comunitario 2° (Sk'asolil) — págs. 113-168" },
            { codigo: "T2HUA", paginaInicio: 169, paginaFin: 224, descripcion: "De lo Humano y lo Comunitario 2° (Sk'asolil) — págs. 169-224" },
            { codigo: "T2HUA", paginaInicio: 225, paginaFin: 259, descripcion: "De lo Humano y lo Comunitario 2° (Sk'asolil) — págs. 225-259" },
        ],
        multiples_lenguajes: [
            { codigo: "T2MLA", paginaInicio: 8, paginaFin: 40, descripcion: "Múltiples Lenguajes 2° (Sk'asolil) — págs. 8-40" },
            { codigo: "T2MLA", paginaInicio: 41, paginaFin: 72, descripcion: "Múltiples Lenguajes 2° (Sk'asolil) — págs. 41-72" },
            { codigo: "T2MLA", paginaInicio: 73, paginaFin: 104, descripcion: "Múltiples Lenguajes 2° (Sk'asolil) — págs. 73-104" },
            { codigo: "T2MLA", paginaInicio: 105, paginaFin: 136, descripcion: "Múltiples Lenguajes 2° (Sk'asolil) — págs. 105-136" },
            { codigo: "T2MLA", paginaInicio: 137, paginaFin: 163, descripcion: "Múltiples Lenguajes 2° (Sk'asolil) — págs. 137-163" },
        ],
        proyectos_nem: [
            { codigo: "T2LP1", paginaInicio: 1, paginaFin: 281, descripcion: "Proyectos Tomo I — 2° Telesecundaria (Sk'asolil)" },
            { codigo: "T2LP2", paginaInicio: 1, paginaFin: 267, descripcion: "Proyectos Tomo II — 2° Telesecundaria (Sk'asolil)" },
            { codigo: "T2LP3", paginaInicio: 1, paginaFin: 275, descripcion: "Proyectos Tomo III — 2° Telesecundaria (Sk'asolil)" },
            { codigo: "T2LP1", paginaInicio: 1, paginaFin: 281, descripcion: "Proyecto Integrador — Telesecundaria 2°" },
        ],
        ingles: [
            { codigo: "T2INA", paginaInicio: 8, paginaFin: 42, descripcion: "Projects and Readings (Inglés) 2° — págs. 8-42" },
            { codigo: "T2INA", paginaInicio: 43, paginaFin: 78, descripcion: "Projects and Readings (Inglés) 2° — págs. 43-78" },
            { codigo: "T2INA", paginaInicio: 79, paginaFin: 114, descripcion: "Projects and Readings (Inglés) 2° — págs. 79-114" },
            { codigo: "T2INA", paginaInicio: 115, paginaFin: 146, descripcion: "Projects and Readings (Inglés) 2° — págs. 115-146" },
            { codigo: "T2INA", paginaInicio: 147, paginaFin: 171, descripcion: "Projects and Readings (Inglés) 2° — págs. 147-171" },
        ],
    },

    // ─── TELESECUNDARIA 3° (Colección Nanahuatzin) ───────────────────────
    "telesecundaria-3": {
        lenguajes_nem: [
            { codigo: "T3LEA", paginaInicio: 8, paginaFin: 56, descripcion: "Lenguajes Telesecundaria 3° (Nanahuatzin) — págs. 8-56" },
            { codigo: "T3LEA", paginaInicio: 57, paginaFin: 112, descripcion: "Lenguajes Telesecundaria 3° (Nanahuatzin) — págs. 57-112" },
            { codigo: "T3LEA", paginaInicio: 113, paginaFin: 168, descripcion: "Lenguajes Telesecundaria 3° (Nanahuatzin) — págs. 113-168" },
            { codigo: "T3LEA", paginaInicio: 169, paginaFin: 224, descripcion: "Lenguajes Telesecundaria 3° (Nanahuatzin) — págs. 169-224" },
            { codigo: "T3LEA", paginaInicio: 225, paginaFin: 281, descripcion: "Lenguajes Telesecundaria 3° (Nanahuatzin) — págs. 225-281" },
        ],
        saberes_cientificos: [
            { codigo: "T3SAA", paginaInicio: 8, paginaFin: 56, descripcion: "Saberes y Pensamiento Científico 3° (Nanahuatzin) — págs. 8-56" },
            { codigo: "T3SAA", paginaInicio: 57, paginaFin: 112, descripcion: "Saberes y Pensamiento Científico 3° (Nanahuatzin) — págs. 57-112" },
            { codigo: "T3SAA", paginaInicio: 113, paginaFin: 168, descripcion: "Saberes y Pensamiento Científico 3° (Nanahuatzin) — págs. 113-168" },
            { codigo: "T3SAA", paginaInicio: 169, paginaFin: 224, descripcion: "Saberes y Pensamiento Científico 3° (Nanahuatzin) — págs. 169-224" },
            { codigo: "T3SAA", paginaInicio: 225, paginaFin: 281, descripcion: "Saberes y Pensamiento Científico 3° (Nanahuatzin) — págs. 225-281" },
        ],
        etica_naturaleza: [
            { codigo: "T3ETA", paginaInicio: 8, paginaFin: 56, descripcion: "Ética, Naturaleza y Sociedades 3° (Nanahuatzin) — págs. 8-56" },
            { codigo: "T3ETA", paginaInicio: 57, paginaFin: 112, descripcion: "Ética, Naturaleza y Sociedades 3° (Nanahuatzin) — págs. 57-112" },
            { codigo: "T3ETA", paginaInicio: 113, paginaFin: 168, descripcion: "Ética, Naturaleza y Sociedades 3° (Nanahuatzin) — págs. 113-168" },
            { codigo: "T3ETA", paginaInicio: 169, paginaFin: 224, descripcion: "Ética, Naturaleza y Sociedades 3° (Nanahuatzin) — págs. 169-224" },
            { codigo: "T3ETA", paginaInicio: 225, paginaFin: 281, descripcion: "Ética, Naturaleza y Sociedades 3° (Nanahuatzin) — págs. 225-281" },
        ],
        humano_comunitario: [
            { codigo: "T3HUA", paginaInicio: 8, paginaFin: 52, descripcion: "De lo Humano y lo Comunitario 3° (Nanahuatzin) — págs. 8-52" },
            { codigo: "T3HUA", paginaInicio: 53, paginaFin: 104, descripcion: "De lo Humano y lo Comunitario 3° (Nanahuatzin) — págs. 53-104" },
            { codigo: "T3HUA", paginaInicio: 105, paginaFin: 156, descripcion: "De lo Humano y lo Comunitario 3° (Nanahuatzin) — págs. 105-156" },
            { codigo: "T3HUA", paginaInicio: 157, paginaFin: 208, descripcion: "De lo Humano y lo Comunitario 3° (Nanahuatzin) — págs. 157-208" },
            { codigo: "T3HUA", paginaInicio: 209, paginaFin: 259, descripcion: "De lo Humano y lo Comunitario 3° (Nanahuatzin) — págs. 209-259" },
        ],
        multiples_lenguajes: [
            { codigo: "T3MLA", paginaInicio: 8, paginaFin: 40, descripcion: "Múltiples Lenguajes 3° (Nanahuatzin) — págs. 8-40" },
            { codigo: "T3MLA", paginaInicio: 41, paginaFin: 72, descripcion: "Múltiples Lenguajes 3° (Nanahuatzin) — págs. 41-72" },
            { codigo: "T3MLA", paginaInicio: 73, paginaFin: 104, descripcion: "Múltiples Lenguajes 3° (Nanahuatzin) — págs. 73-104" },
            { codigo: "T3MLA", paginaInicio: 105, paginaFin: 136, descripcion: "Múltiples Lenguajes 3° (Nanahuatzin) — págs. 105-136" },
            { codigo: "T3MLA", paginaInicio: 137, paginaFin: 163, descripcion: "Múltiples Lenguajes 3° (Nanahuatzin) — págs. 137-163" },
        ],
        proyectos_nem: [
            { codigo: "T3LP1", paginaInicio: 1, paginaFin: 281, descripcion: "Proyectos Tomo I — 3° Telesecundaria (Nanahuatzin)" },
            { codigo: "T3LP2", paginaInicio: 1, paginaFin: 267, descripcion: "Proyectos Tomo II — 3° Telesecundaria (Nanahuatzin)" },
            { codigo: "T3LP3", paginaInicio: 1, paginaFin: 275, descripcion: "Proyectos Tomo III — 3° Telesecundaria (Nanahuatzin)" },
            { codigo: "T3LP1", paginaInicio: 1, paginaFin: 281, descripcion: "Proyecto Integrador — Telesecundaria 3°" },
        ],
        ingles: [
            { codigo: "T3INA", paginaInicio: 8, paginaFin: 42, descripcion: "Projects and Readings (Inglés) 3° — págs. 8-42" },
            { codigo: "T3INA", paginaInicio: 43, paginaFin: 78, descripcion: "Projects and Readings (Inglés) 3° — págs. 43-78" },
            { codigo: "T3INA", paginaInicio: 79, paginaFin: 114, descripcion: "Projects and Readings (Inglés) 3° — págs. 79-114" },
            { codigo: "T3INA", paginaInicio: 115, paginaFin: 146, descripcion: "Projects and Readings (Inglés) 3° — págs. 115-146" },
            { codigo: "T3INA", paginaInicio: 147, paginaFin: 171, descripcion: "Projects and Readings (Inglés) 3° — págs. 147-171" },
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
