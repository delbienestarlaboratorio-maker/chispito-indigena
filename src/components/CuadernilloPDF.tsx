"use client";
/**
 * CuadernilloPDF v6 — Flujo continuo, cero hojas en blanco
 *
 * LÓGICA: Todo el contenido fluye en una sola corriente.
 * Nueva página SOLO cuando el contenido no cabe.
 * Espacios vacíos se rellenan con ejercicios extra o cuadros educativos.
 */

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import jsPDF from "jspdf";

/* ─── TIPOS ─── */
interface Ejercicio {
    id: string; tema: string; tipo: string; pregunta: string;
    opciones?: string[]; respuestaCorrecta: string; explicacion?: string;
}
interface ContenidoPedagogico {
    enClase: string[]; intro: string; comoExplicar: string[];
    truco: string; errorComun: string; actividadCasa: string;
    objetivo: string; competencia: string;
}
interface CuadernilloData {
    grado: string; gradoNombre: string; materia: string; materiaNombre: string;
    materiaEmoji: string; materiaColor: string; bloqueNum: number; bloqueNombre: string;
    meses: string; temas: string[]; ejerciciosV1: Ejercicio[]; ejerciciosV2: Ejercicio[];
    gratis?: boolean; contenidoPedagogico?: ContenidoPedagogico;
}

/* ─── UTILS ─── */
const rgb = (h: string): [number, number, number] => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
function L(t: string): string {
    return t
        .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu, "")
        .replace(/[⚡✅❌🎨🏃🧭📄📚📘🎓🌈🏫💡✓⭐🌟💪🎉🚀★☆●○►▶◀▼▲■□♦✦✧📐🔢📊🔬🎭🎵🎶🖌🎪🏆💯✨🔥💫🌍🌎🌏🏠📖🖊✏🗓⏰🔔📌🎯🔑🧩]/g, "")
        .replace(/\s+/g, " ").trim();
}
const W = 210, H = 297, ML = 18, MR = 18, MB = 22, CW = W - ML - MR;

/* ─── ESTADO DEL DOC ─── */
class Doc {
    pdf: jsPDF;
    y: number;
    pageNum: number;
    color: [number, number, number];
    gradoNombre: string;
    materiaNombre: string;
    maxY: number;

    constructor(color: [number, number, number], gradoNombre: string, materiaNombre: string) {
        this.pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
        this.y = 20;
        this.pageNum = 0;
        this.color = color;
        this.gradoNombre = gradoNombre;
        this.materiaNombre = materiaNombre;
        this.maxY = H - MB;
    }

    addFooter() {
        this.pageNum++;
        const d = this.pdf;
        d.setFontSize(7); d.setTextColor(160, 160, 160);
        d.text(`chispito.mx | SEP 2025-2026 | ${this.gradoNombre} | ${this.materiaNombre}`, ML, H - 9);
        d.text(`Pag. ${this.pageNum}`, W - MR, H - 9, { align: "right" });
        d.setDrawColor(...this.color); d.setLineWidth(0.3); d.line(ML, H - 13, W - MR, H - 13);
    }

    newPage() {
        this.pdf.addPage();
        this.addFooter();
        this.y = 20;
    }

    // Verifica si cabe, si no nueva página
    ensureSpace(needed: number) {
        if (this.y + needed > this.maxY) this.newPage();
    }

    seccion(titulo: string) {
        this.ensureSpace(14);
        this.pdf.setFillColor(...this.color);
        this.pdf.rect(ML, this.y, CW, 11, "F");
        this.pdf.setFont("helvetica", "bold"); this.pdf.setFontSize(10);
        this.pdf.setTextColor(255, 255, 255);
        this.pdf.text(`  ${titulo}`, ML + 2, this.y + 7);
        this.y += 14;
    }

    texto(t: string, sz = 9.5, bold = false, colorRGB: [number, number, number] = [40, 40, 40], indent = 4) {
        const d = this.pdf;
        d.setFont("helvetica", bold ? "bold" : "normal");
        d.setFontSize(sz); d.setTextColor(...colorRGB);
        const lines = d.splitTextToSize(L(t), CW - indent - 4);
        this.ensureSpace(lines.length * (sz * 0.36) + 2);
        d.text(lines, ML + indent, this.y);
        this.y += lines.length * (sz * 0.36) + 2.5;
    }

    caja(titulo: string, contenido: string[], bg: [number, number, number], borde: [number, number, number]) {
        const d = this.pdf;
        const lineas: string[] = [];
        contenido.forEach(p => d.splitTextToSize(L(p), CW - 14).forEach((l: string) => lineas.push(l)));
        const h = 11 + lineas.length * 4;
        this.ensureSpace(h + 3);
        d.setFillColor(...bg); d.roundedRect(ML, this.y, CW, h, 2, 2, "F");
        d.setDrawColor(...borde); d.setLineWidth(1.2); d.line(ML, this.y, ML, this.y + h);
        d.setFont("helvetica", "bold"); d.setFontSize(8.5); d.setTextColor(...borde);
        d.text(titulo, ML + 5, this.y + 7);
        d.setFont("helvetica", "normal"); d.setFontSize(8); d.setTextColor(50, 50, 50);
        lineas.forEach((l, i) => d.text(l, ML + 5, this.y + 13 + i * 4));
        this.y += h + 4;
    }

    sepLine() {
        this.pdf.setDrawColor(240, 240, 240); this.pdf.setLineWidth(0.1);
        this.pdf.line(ML + 4, this.y, W - MR - 4, this.y);
        this.y += 4;
    }

    espacio(mm = 3) { this.y += mm; }
}

/* ─── GENERADOR ─── */
function generarCuadernilloPDF(data: CuadernilloData): jsPDF {
    const c = rgb(data.materiaColor);
    const doc = new Doc(c, L(data.gradoNombre), L(data.materiaNombre));
    const d = doc.pdf;
    const ejs = [...data.ejerciciosV1, ...data.ejerciciosV2];
    const ped = data.contenidoPedagogico;
    const gl = L(data.gradoNombre), ml = L(data.materiaNombre), bl = L(data.bloqueNombre);

    // ═══ PAG 1: PORTADA ═══
    d.setFillColor(...c); d.rect(0, 0, W, 80, "F");
    d.setFont("helvetica", "bold"); d.setFontSize(11); d.setTextColor(255, 255, 255);
    d.text("CUADERNILLO DE PRACTICA", W / 2, 22, { align: "center" });
    d.setFontSize(22); d.text("Chispito.mx", W / 2, 40, { align: "center" });
    d.setFontSize(9); d.setFont("helvetica", "normal");
    d.text(`${ml} | ${gl} | ${L(data.meses)}`, W / 2, 54, { align: "center" });
    d.text("Programa SEP Mexico 2025-2026", W / 2, 62, { align: "center" });

    d.setFontSize(13); d.setTextColor(70, 70, 70); d.text(`Modulo ${data.bloqueNum}`, W / 2, 98, { align: "center" });
    d.setFontSize(18); d.setFont("helvetica", "bold"); d.setTextColor(25, 25, 25);
    const tl = d.splitTextToSize(bl, CW - 16); d.text(tl, W / 2, 111, { align: "center" });

    let yp = 118 + tl.length * 7;
    if (ped?.objetivo) {
        d.setFontSize(7.5); d.setFont("helvetica", "italic"); d.setTextColor(90, 90, 90);
        const ol = d.splitTextToSize(`Objetivo: ${L(ped.objetivo)}`, CW - 30);
        d.text(ol, W / 2, yp, { align: "center" }); yp += ol.length * 3.5 + 3;
    }
    d.setFontSize(8); d.setTextColor(100, 100, 100); d.setFont("helvetica", "normal");
    data.temas.slice(0, 5).forEach((t, i) => d.text(`- ${L(t)}`, W / 2, yp + i * 5, { align: "center" }));

    // Datos alumno
    const yD = 202;
    d.setFontSize(8); d.setTextColor(130, 130, 130);
    d.text("NOMBRE:", ML + 4, yD); d.setDrawColor(190, 190, 190); d.setLineWidth(0.4);
    d.line(ML + 22, yD + 1, W - MR - 4, yD + 1);
    d.text("GRUPO:", ML + 4, yD + 10); d.line(ML + 22, yD + 11, ML + 60, yD + 11);
    d.text("FECHA:", ML + 68, yD + 10); d.line(ML + 85, yD + 11, W - MR - 45, yD + 11);
    d.text("CALIF:", W - MR - 40, yD + 10); d.setDrawColor(...c); d.setLineWidth(1.2);
    d.roundedRect(W - MR - 32, yD + 5, 28, 14, 2, 2, "S");

    d.setFontSize(9); d.setFont("helvetica", "italic"); d.setTextColor(...c);
    d.text("Tu puedes lograrlo!", W / 2, H - 28, { align: "center" });
    d.setFont("helvetica", "normal"); d.setFontSize(7); d.setTextColor(150, 150, 150);
    d.text(`${ejs.length} ejercicios | chispito.mx`, W / 2, H - 22, { align: "center" });
    doc.addFooter();

    // ═══ PAG 2+: TODO EL CONTENIDO EN FLUJO CONTINUO ═══
    doc.newPage();

    // ───── SECCIÓN 1: LO QUE APRENDERÁS ─────
    doc.seccion("LO QUE APRENDERAS EN CLASE");

    if (ped?.intro) {
        doc.texto(ped.intro, 9.5, false, [40, 40, 40], 4);
        doc.espacio(2);
    } else {
        doc.texto(`En este modulo de ${ml} estudiaremos el tema: "${bl}". Los contenidos estan alineados al programa SEP 2025-2026 de Mexico y disenados para ${gl}.`, 9.5, false, [40, 40, 40], 4);
        doc.espacio(2);
    }

    if (ped?.enClase?.length) {
        doc.texto("En clase tu hijo(a) vera:", 9, true, c, 4);
        ped.enClase.forEach(item => doc.texto(`- ${item}`, 9, false, [40, 40, 40], 8));
        doc.espacio(3);
    } else {
        const temsList = data.temas.map(t => `- ${L(t)}`);
        doc.texto("Contenidos del modulo:", 9, true, c, 4);
        temsList.forEach(t => doc.texto(t, 9, false, [40, 40, 40], 8));
        doc.espacio(3);
    }

    // ───── OBJETIVO + COMPETENCIA ─────
    if (ped?.objetivo) {
        doc.caja("OBJETIVO SEP OFICIAL:", [L(ped.objetivo)], [240, 248, 255], c);
    }
    if (ped?.competencia) {
        doc.texto(`Competencia: ${L(ped.competencia)}`, 7.5, false, [120, 120, 120], 4);
        doc.espacio(2);
    }

    // ───── SECCIÓN 2: GUÍA PARA PAPÁS ─────
    doc.ensureSpace(14);
    doc.seccion("GUIA PARA PAPAS: Como explicarle en casa");

    if (ped?.comoExplicar?.length) {
        ped.comoExplicar.forEach((paso, i) => {
            doc.ensureSpace(14);
            // Círculo numerado
            d.setFillColor(...c); d.circle(ML + 8, doc.y - 0.5, 3.5, "F");
            d.setFont("helvetica", "bold"); d.setFontSize(9); d.setTextColor(255, 255, 255);
            d.text(`${i + 1}`, ML + (i + 1 >= 10 ? 5.5 : 6.5), doc.y + 0.5);
            d.setFont("helvetica", "normal"); d.setFontSize(9); d.setTextColor(40, 40, 40);
            const pl = d.splitTextToSize(L(paso), CW - 20);
            d.text(pl, ML + 16, doc.y);
            doc.y += pl.length * 4.5 + 4;
        });
        doc.espacio(2);
    } else {
        doc.texto("Actividades para practicar en casa:", 9, true, c, 4);
        generateActCasa(data.materia, data.temas).forEach(a => doc.texto(`- ${a}`, 9, false, [40, 40, 40], 8));
        doc.espacio(3);
    }

    if (ped?.truco) doc.caja("TRUCO DEL MAESTRO:", [L(ped.truco)], [255, 248, 225], [230, 126, 34]);
    else doc.caja("TRUCO DEL MAESTRO:", [getTruco(data.materia)], [255, 248, 225], [230, 126, 34]);

    if (ped?.errorComun) doc.caja("ERROR FRECUENTE — Ponle atencion:", [L(ped.errorComun)], [255, 235, 238], [211, 47, 47]);
    if (ped?.actividadCasa) doc.caja("ACTIVIDAD EN CASA (sin materiales extra):", [L(ped.actividadCasa)], [232, 245, 233], [46, 125, 50]);
    else doc.caja("ACTIVIDAD EN CASA:", [getActCasa(data.materia, data.temas)], [232, 245, 233], [46, 125, 50]);

    // ───── SECCIÓN 3: VOCABULARIO Y CONCEPTOS ─────
    doc.ensureSpace(14);
    doc.seccion("VOCABULARIO Y CONCEPTOS CLAVE");

    const conceptos = getConceptos(data.materia);
    conceptos.forEach(([term, def]) => {
        doc.ensureSpace(10);
        d.setFont("helvetica", "bold"); d.setFontSize(8.5); d.setTextColor(...c);
        d.text(`${term}:`, ML + 4, doc.y);
        d.setFont("helvetica", "normal"); d.setFontSize(8.5); d.setTextColor(50, 50, 50);
        const dl = d.splitTextToSize(def, CW - 10 - d.getTextWidth(term + ": ") - 2);
        d.text(dl, ML + 5 + d.getTextWidth(term + ": "), doc.y);
        doc.y += Math.max(dl.length * 4, 4) + 3;
    });
    doc.espacio(2);

    // Reglas
    const reglas = getReglas(data.materia);
    d.setFillColor(248, 248, 252); d.roundedRect(ML, doc.y, CW, 6 + reglas.length * 5.5, 2, 2, "F");
    d.setFont("helvetica", "bold"); d.setFontSize(8.5); d.setTextColor(...c);
    d.text("REGLAS IMPORTANTES:", ML + 4, doc.y + 6);
    d.setFont("helvetica", "normal"); d.setFontSize(8); d.setTextColor(50, 50, 50);
    reglas.forEach((r, i) => d.text(`${i + 1}. ${r}`, ML + 4, doc.y + 13 + i * 5.5));
    doc.y += 8 + reglas.length * 5.5 + 4;

    // ───── SECCIÓN 4: EJERCICIOS ─────
    doc.ensureSpace(14);
    doc.seccion(`EJERCICIOS — ${ejs.length} en total`);
    d.setFont("helvetica", "normal"); d.setFontSize(7.5); d.setTextColor(110, 110, 110);
    d.text("Lee con calma | Piensa | Revisa al terminar", ML + 4, doc.y); doc.y += 7;

    let ejIdx = 0;
    let cajaC = 0;
    const datos = getDatos(data.materia);

    ejs.forEach((ej) => {
        ejIdx++;
        const alt = calcH(ej);
        if (doc.y + alt > doc.maxY) {
            doc.newPage();
            d.setFont("helvetica", "bold"); d.setFontSize(7.5); d.setTextColor(...c);
            d.text("EJERCICIOS (continuacion)", ML, doc.y); doc.y += 5;
            d.setDrawColor(235, 235, 235); d.setLineWidth(0.15); d.line(ML, doc.y, W - MR, doc.y); doc.y += 5;
        }
        doc.y = dibEj(d, ej, ejIdx, doc.y, c);

        // Caja educativa cada 4 ejercicios
        if (ejIdx % 4 === 0 && ejIdx < ejs.length) {
            if (doc.maxY - doc.y > 22) {
                const dato = datos[cajaC % datos.length];
                doc.caja("SABIAS QUE...", [dato], [227, 242, 253], c);
                cajaC++;
            }
        }
    });

    // ───── ACTIVIDAD INTEGRADORA ─────
    doc.ensureSpace(14);
    doc.seccion("ACTIVIDAD INTEGRADORA - Reto Final");
    getAct(data).forEach(p => doc.texto(p, 9.5, false, [40, 40, 40], 4));
    doc.espacio(4);
    // Líneas para escribir (solo las que quepan)
    d.setDrawColor(215, 215, 215); d.setLineWidth(0.2);
    let ly = doc.y;
    while (ly + 7 < doc.maxY) { d.line(ML + 4, ly, W - MR - 4, ly); ly += 7; }
    doc.y = doc.maxY - 1;

    // ───── AUTOEVALUACIÓN ─────
    doc.newPage();
    doc.seccion("AUTOEVALUACION");
    doc.texto("Marca con una X segun como te sientas con cada tema:", 9, false, [50, 50, 50], 4);
    doc.espacio(3);
    [
        "Entendi el tema principal",
        "Pude resolver los ejercicios basicos",
        "Pude resolver los ejercicios dificiles",
        "Aprendi palabras y conceptos nuevos",
        "Puedo explicar el tema a alguien mas",
    ].forEach(cr => {
        doc.ensureSpace(13);
        d.setFont("helvetica", "bold"); d.setFontSize(8.5); d.setTextColor(40, 40, 40);
        d.text(cr, ML + 4, doc.y);
        d.setFont("helvetica", "normal"); d.setFontSize(8); d.setTextColor(100, 100, 100);
        d.text("( ) Muy bien   ( ) Bien   ( ) Necesito repasar", ML + 4, doc.y + 5);
        doc.y += 13;
    });
    doc.espacio(4);
    d.setFont("helvetica", "bold"); d.setFontSize(8.5); d.setTextColor(...c);
    d.text("Lo que mas me gusto:", ML + 4, doc.y); doc.y += 5;
    d.setDrawColor(215, 215, 215); d.setLineWidth(0.2);
    d.line(ML + 4, doc.y + 3, W - MR - 4, doc.y + 3); d.line(ML + 4, doc.y + 11, W - MR - 4, doc.y + 11); doc.y += 16;
    d.text("Lo que quiero mejorar:", ML + 4, doc.y); doc.y += 5;
    d.line(ML + 4, doc.y + 3, W - MR - 4, doc.y + 3); d.line(ML + 4, doc.y + 11, W - MR - 4, doc.y + 11); doc.y += 16;

    if (ped?.actividadCasa && doc.maxY - doc.y > 25) {
        doc.caja("TAREA PARA CASA:", [L(ped.actividadCasa)], [232, 245, 233], [46, 125, 50]);
    }

    // ─── Rellena el resto con datos curiosos si quedan >30mm ───
    while (doc.maxY - doc.y > 30) {
        doc.caja("SABIAS QUE...", [datos[cajaC % datos.length]], [227, 242, 253], c);
        cajaC++;
    }

    // ───── HOJA DE RESPUESTAS ─────
    doc.newPage();
    d.setFillColor(35, 35, 35); d.rect(ML, doc.y - 4, CW, 11, "F");
    d.setFont("helvetica", "bold"); d.setFontSize(10); d.setTextColor(255, 255, 255);
    d.text("  HOJA DE RESPUESTAS", ML + 2, doc.y + 3);
    d.setFontSize(7); d.text("(Solo padres/maestros)", W - MR - 2, doc.y + 3, { align: "right" });
    doc.y += 10;
    d.setFontSize(7); d.setTextColor(120, 120, 120); d.setFont("helvetica", "normal");
    d.text("Corta o dobla esta pagina. Califica segun las respuestas correctas.", ML + 4, doc.y); doc.y += 7;

    ejs.forEach((ej, i) => {
        doc.ensureSpace(10);
        d.setFont("helvetica", "bold"); d.setFontSize(8); d.setTextColor(...c);
        d.text(`${i + 1}.`, ML + 4, doc.y);
        d.setTextColor(25, 25, 25); d.text(L(ej.respuestaCorrecta), ML + 13, doc.y);
        if (ej.explicacion) {
            d.setFont("helvetica", "normal"); d.setFontSize(6.5); d.setTextColor(130, 130, 130);
            const el = d.splitTextToSize(L(ej.explicacion), CW - 20);
            d.text(el.slice(0, 1), ML + 13, doc.y + 3.5);
            doc.y += 9;
        } else { doc.y += 7; }
    });

    doc.y = Math.max(doc.y + 8, doc.maxY - 14);
    d.setFont("helvetica", "bold"); d.setFontSize(11); d.setTextColor(...c);
    d.text("Felicidades por completar este cuadernillo!", W / 2, doc.y, { align: "center" });
    d.setFont("helvetica", "normal"); d.setFontSize(7.5); d.setTextColor(130, 130, 130);
    d.text("Descarga mas cuadernillos gratis en chispito.mx", W / 2, doc.y + 6, { align: "center" });

    return doc.pdf;
}

/* ─── HELPERS DE DIBUJO ─── */
function calcH(e: Ejercicio): number {
    let h = 12;
    if (e.tipo === "multiple_choice" && e.opciones) h += e.opciones.length * 6.5 + 2;
    else if (e.tipo === "true_false") h += 8;
    else h += 10;
    return h;
}

function dibEj(d: jsPDF, e: Ejercicio, n: number, sy: number, c: [number, number, number]): number {
    let y = sy;
    d.setFont("helvetica", "bold"); d.setFontSize(10); d.setTextColor(...c); d.text(`${n}.`, ML, y);
    d.setFont("helvetica", "normal"); d.setFontSize(9.5); d.setTextColor(25, 25, 25);
    const pl = d.splitTextToSize(L(e.pregunta), CW - 12); d.text(pl, ML + 8, y); y += pl.length * 4.5 + 3;
    if (e.tipo === "multiple_choice" && e.opciones) {
        e.opciones.forEach((o, i) => {
            const l = String.fromCharCode(65 + i);
            d.setDrawColor(185, 185, 185); d.setLineWidth(0.35); d.circle(ML + 12, y - 1, 2, "S");
            d.setFont("helvetica", "bold"); d.setFontSize(8.5); d.setTextColor(...c); d.text(`${l})`, ML + 16, y);
            d.setFont("helvetica", "normal"); d.setTextColor(55, 55, 55);
            const ol = d.splitTextToSize(L(o), CW - 28); d.text(ol, ML + 23, y); y += ol.length * 4 + 2;
        });
    } else if (e.tipo === "true_false") {
        d.setDrawColor(185, 185, 185); d.setLineWidth(0.35);
        d.circle(ML + 12, y - 1, 2, "S"); d.setFontSize(8.5); d.setTextColor(55, 55, 55); d.text("Verdadero", ML + 16, y);
        d.circle(ML + 52, y - 1, 2, "S"); d.text("Falso", ML + 56, y); y += 7;
    } else {
        d.setDrawColor(185, 185, 185); d.setLineWidth(0.4);
        d.setFontSize(7.5); d.setTextColor(150, 150, 150); d.text("Resp:", ML + 8, y);
        d.line(ML + 20, y + 1, ML + 100, y + 1); y += 8;
    }
    y += 1; d.setDrawColor(242, 242, 242); d.setLineWidth(0.1); d.line(ML + 4, y, W - MR - 4, y); y += 4;
    return y;
}

/* ─── CONTENIDO PEDAGÓGICO POR MATERIA ─── */
function getConceptos(materia: string): string[][] {
    const m: Record<string, string[][]> = {
        matematicas: [
            ["Numero", "Simbolo que representa una cantidad: 1, 2, 3, 4, 5..."],
            ["Sumar (+)", "Juntar cantidades. Ej: 3 + 2 = 5"],
            ["Restar (-)", "Quitar una cantidad. Ej: 5 - 2 = 3"],
            ["Multiplicar (x)", "Sumar el mismo numero varias veces. Ej: 3 x 4 = 12"],
            ["Mayor (>)", "El numero mas grande. Ej: 8 > 3"],
            ["Menor (<)", "El numero mas chico. Ej: 2 < 7"],
            ["Decena", "Grupo de 10 unidades"],
            ["Centena", "Grupo de 10 decenas (100 unidades)"],
        ],
        espanol: [
            ["Oracion", "Palabras con sentido completo. Ej: 'El perro corre.'"],
            ["Sustantivo", "Nombre de personas, animales o cosas: mama, perro, mesa"],
            ["Verbo", "Accion: correr, saltar, leer, escribir"],
            ["Adjetivo", "Como es algo: grande, bonito, azul, rapido"],
            ["Mayuscula", "Letra grande. Va al inicio de oracion y en nombres propios"],
            ["Punto (.)", "Final de una oracion. Despues va mayuscula"],
            ["Parrafo", "Conjunto de oraciones sobre el mismo tema"],
            ["Sinonimo", "Palabras con el mismo significado: bonito = lindo"],
        ],
        ciencias: [
            ["Ser vivo", "Nace, crece, se reproduce y muere: plantas, animales, personas"],
            ["Ecosistema", "Lugar donde viven seres vivos con agua, suelo y aire"],
            ["Fotosintesis", "Las plantas hacen su alimento con luz del sol y agua"],
            ["Materia", "Todo lo que tiene peso y ocupa espacio"],
            ["Energia", "Capacidad de hacer un trabajo: luz, calor, movimiento"],
            ["Celula", "Unidad minima de vida. Todo ser vivo esta hecho de celulas"],
            ["Ecosistema", "Conjunto de seres vivos y su ambiente"],
            ["Cadena alimenticia", "Quienes se comen a quienes en la naturaleza"],
        ],
        historia: [
            ["Civilizacion", "Sociedad organizada con gobierno, leyes y cultura"],
            ["Mesoamerica", "Region de Mexico y Centroamerica donde vivieron mayas y aztecas"],
            ["Independencia", "Proceso por el que Mexico dejo de ser colonia (1810-1821)"],
            ["Revolucion", "Movimiento armado por justicia social (Mexico: 1910)"],
            ["Constitucion", "Ley suprema que protege los derechos de los mexicanos"],
            ["Patrimonio", "Bienes culturales e historicos que heredamos y debemos cuidar"],
            ["Cronica", "Texto que narra hechos en orden cronologico"],
            ["Democracia", "Sistema de gobierno donde el pueblo elige a sus representantes"],
        ],
        artes: [
            ["Arte visual", "Obras que se aprecian con la vista: pintura, escultura, fotografia"],
            ["Musica", "Arte de combinar sonidos con ritmo y armonia"],
            ["Teatro", "Arte dramatico donde actores representan una historia"],
            ["Danza", "Expresion artistica a traves del movimiento corporal"],
            ["Colores primarios", "Rojo, azul y amarillo. Con ellos se hacen todos los colores"],
            ["Ritmo", "Patron regular de sonidos fuertes y debiles en la musica"],
            ["Mural", "Pintura hecha directamente en una pared o techo"],
            ["Folclore", "Tradiciones, danzas y musica propias de un pueblo o region"],
        ],
        formacion: [
            ["Valores", "Principios que guian nuestra conducta: honestidad, respeto, solidaridad"],
            ["Ciudadania", "Condicion de pertenecer a una comunidad con derechos y deberes"],
            ["Democracia", "Sistema donde todos participan en las decisiones colectivas"],
            ["Derechos", "Lo que merecemos por ser personas: educacion, salud, seguridad"],
            ["Deberes", "Responsabilidades que tenemos con nuestra comunidad"],
            ["Constitucio", "Documento legal que protege los derechos de los mexicanos"],
            ["Sociedad", "Grupo de personas que conviven con normas y cultura en comun"],
            ["Diversidad", "Variedad de culturas, lenguas, formas de vida en Mexico y el mundo"],
        ],
    };
    return m[materia] || [
        ["Tema", `${materia} es una materia esencial en la educacion basica.`],
        ["Aprendizaje", "Proceso de adquirir conocimientos y habilidades nuevas"],
        ["Practica", "Repetir ejercicios para dominar el tema. La practica hace al maestro"],
        ["Evaluacion", "Forma de medir cuanto has aprendido"],
        ["Repaso", "Volver a estudiar para recordar mejor"],
    ];
}

function getReglas(materia: string): string[] {
    const r: Record<string, string[]> = {
        matematicas: ["Lee el problema dos veces antes de resolverlo.", "Muestra tu procedimiento, no solo el resultado.", "Verifica tu respuesta contando de nuevo.", "El orden en la suma no importa: 3+5 = 5+3."],
        espanol: ["Toda oracion: mayuscula al inicio, punto al final.", "Los nombres propios siempre llevan mayuscula.", "Lee en voz alta para detectar errores.", "Antes de escribir, piensa que quieres decir."],
        ciencias: ["Observa primero, luego saca conclusiones.", "Una hipotesis debe poder comprobarse.", "Anota tus observaciones con precision."],
        historia: ["Las fechas: dia, mes y ano.", "Los hechos tienen causas y consecuencias.", "Compara el pasado con el presente."],
        artes: ["Observa la obra antes de opinar.", "El arte no tiene una sola respuesta correcta.", "Respeta el trabajo creativo de los demas."],
    };
    return r[materia] || ["Lee con atencion antes de contestar.", "Piensa en tu respuesta antes de escribirla.", "Revisa tu trabajo al terminar."];
}

function getDatos(materia: string): string[] {
    const d: Record<string, string[]> = {
        matematicas: ["Los mayas inventaron el cero antes que en Europa.", "La piramide de Kukulkan tiene 365 escalones (1 por dia del ano).", "El ajedrez requiere que los jugadores calculen millones de posibilidades.", "Las matematicas estan en la naturaleza: flores de girasol, caracoles, colmenas.", "Mexico fue pionero en el uso del cero en el mundo."],
        espanol: ["Mexico tiene 68 lenguas indigenas, como nahuatl, maya y zapoteco.", "El nahuatl nos dio: chocolate, tomate, aguacate, chile, elote.", "El primer libro impreso en America fue en Mexico (Ciudad de Mexico, 1539).", "Sor Juana Ines de la Cruz escribio poesia en el siglo XVII siendo autodidacta.", "Gabriel Garcia Marquez, cuyas obras se estudian en Mexico, gano el Nobel de Literatura."],
        ciencias: ["El ajolote mexicano puede regenerar patas, corazon y partes del cerebro.", "Mexico tiene mas de 200,000 especies. Es megadiverso.", "El maiz fue domesticado en Mexico hace 9,000 anos.", "El cacao (chocolate) es originario de Mexico. Los aztecas lo usaban como moneda.", "Tu cuerpo tiene 206 huesos y 600 musculos trabajando todo el tiempo."],
        historia: ["Tenochtitlan era mas grande que cualquier ciudad europea en 1500.", "La primera universidad de America se fundo en Mexico en 1551 (UNAM).", "El himno nacional mexicano fue adoptado en 1943.", "La Revolucion Mexicana (1910-1920) fue la primera del siglo XX en el mundo.", "La Constitucion de 1917 fue la primera en el mundo en incluir derechos sociales."],
        artes: ["Diego Rivera pinto mas de 4,000 m2 de murales en su vida.", "Frida Kahlo pinto 55 autorretratos de sus 143 obras totales.", "Mexico tiene 35 sitios Patrimonio de la Humanidad (UNESCO).", "El Palacio de Bellas Artes tardo 30 anos en construirse (1904-1934).", "La musica de mariachi fue declarada Patrimonio de la Humanidad en 2011."],
    };
    return d[materia] || ["Tu cerebro crea conexiones nuevas cada vez que aprendes algo.", "Estudiar 20 minutos al dia es mas efectivo que 3 horas una vez por semana.", "La UNAM es considerada la mejor universidad de habla hispana en America Latina.", "Mexico es el pais con mas sitios Patrimonio de la Humanidad en America.", "Leer 15 minutos al dia te permite leer aproximadamente 20 libros al ano."];
}

function getTruco(materia: string): string {
    const t: Record<string, string> = {
        matematicas: "Usa tus 10 dedos para contar y sumar. Cuando sumes 6+3, pon 6 en tu mente y cuenta 3 mas con los dedos: 7, 8, 9.",
        espanol: "Truco de la 'pregunta': pregunta 'que?' para encontrar el sustantivo, 'como es?' para el adjetivo, y 'que hace?' para el verbo.",
        ciencias: "Regla de los 3 estados: Hielo = solido (rigido), Agua = liquido (fluye), Vapor = gas (invisible). H2O en 3 formas.",
        historia: "Memoriza fechas con una historia: '1810 Mexico grito con Hidalgo, 1910 Mexico lucho con Zapata'.",
        artes: "Mezcla de colores: azul + amarillo = verde, rojo + azul = morado, rojo + amarillo = naranja.",
        formacion: "Los derechos y deberes van juntos: tienes derecho a la educacion, y el deber de asistir y aprender.",
    };
    return t[materia] || "Lee el enunciado completo antes de contestar. Muchos errores son por prisa, no por no saber.";
}

function generateActCasa(materia: string, temas: string[]): string[] {
    const ts = temas.slice(0, 3).map(t => L(t)).join(", ");
    const a: Record<string, string[]> = {
        matematicas: [`Cuenta objetos de tu casa (cucharas, calcetines, monedas) para practicar ${ts}.`, "Inventa problemas usando frutas o juguetes y resuelvelos con tu hijo."],
        espanol: ["Lee un cuento corto en voz alta con tu hijo. Preguntale de que trato y que le gusto.", "Pide a tu hijo que escriba 3 oraciones sobre su dia. Revisa mayusculas y puntos."],
        ciencias: [`Busca en tu casa o jardin ejemplos de ${ts}. Observen y describan lo que ven.`, "Haz un experimento: pon un vaso con agua al sol y otro en la sombra. Que pasa?"],
        historia: ["Busca en internet o libros una imagen historica y conversen sobre lo que ven.", "Pregunta a un abuelo o familiar mayor sobre como era su vida de nino."],
        artes: ["Dibujen juntos algo de la naturaleza o de su casa. Usen colores y creatividad.", "Escuchen musica de diferentes estilos (clasica, mariachi, pop) y conversen sobre como los hace sentir."],
    };
    return a[materia] || [`Practica en casa los temas: ${ts}. Usa objetos cotidianos para hacer mas facil el aprendizaje.`, "Dediquen 15 minutos diarios a repasar el cuadernillo juntos."];
}

function getActCasa(materia: string, temas: string[]): string {
    const lines = generateActCasa(materia, temas);
    return lines.join(" ");
}

function getAct(data: CuadernilloData): string[] {
    const ts = data.temas.slice(0, 3).map(t => L(t)).join(" y ");
    const a: Record<string, string[]> = {
        matematicas: [`RETO FINAL: Pon a prueba todo lo que aprendiste sobre ${ts}.`,
            "1. Escribe un problema de la vida real qu use lo que aprendiste:",
            "", "2. Resuelvelo mostrando tu procedimiento:",
            "", "3. Pide a alguien de tu familia que lo resuelva tambien y comparen:",
            "", "Quien lo resolvio diferente? Los dos resultados son iguales?"],
        espanol: [`RETO FINAL: Usa lo que aprendiste sobre "${L(data.bloqueNombre)}".`,
            "Escribe un texto de AL MENOS 5 oraciones sobre algo que te importe.",
            "Puede ser: un cuento, una carta a un amigo, o tu opinion sobre un tema.",
            "Recuerda: mayusculas, puntos y expresarte con tus propias palabras."],
        default: [`RETO FINAL: Demuestra lo que sabes sobre "${L(data.bloqueNombre)}".`,
            "1. Escribe 3 cosas importantes que aprendiste:",
            "", "2. Explica con tus palabras el concepto mas importante del modulo:",
            "", "3. Escribe una pregunta que te gustaria investigar mas sobre este tema:"],
    };
    return a[data.materia] || a.default;
}

/* ─── MODAL DE PAGO ─── */
function ModalPago({
    cuadernillo,
    onClose,
    onConfirm,
    pagando,
}: {
    cuadernillo: CuadernilloData;
    onClose: () => void;
    onConfirm: () => void;
    pagando: boolean;
}) {
    const col = cuadernillo.materiaColor;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
            onClick={onClose}>
            <div className="w-full max-w-sm rounded-3xl p-6 relative"
                style={{ background: "#0D1B2A", border: `2px solid ${col}40` }}
                onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: col + "30" }}>
                        📄
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Cuadernillo Módulo {cuadernillo.bloqueNum}</p>
                        <p className="text-white/40 text-xs">{L(cuadernillo.bloqueNombre)}</p>
                    </div>
                    <button onClick={onClose} className="ml-auto text-white/30 hover:text-white transition-colors text-xl">✕</button>
                </div>

                {/* Precio */}
                <div className="rounded-2xl p-4 mb-4 text-center"
                    style={{ background: col + "15", border: `1px solid ${col}25` }}>
                    <p className="text-4xl font-black text-white">$10 <span className="text-2xl text-white/60">MXN</span></p>
                    <p className="text-white/40 text-xs mt-1">Pago único · Tuyo para siempre</p>
                </div>

                {/* Qué incluye */}
                <div className="mb-5">
                    <p className="text-white/50 text-xs font-semibold mb-2">INCLUYE:</p>
                    <div className="grid grid-cols-2 gap-1.5">
                        {[
                            "PDF 10+ páginas imprimibles",
                            "Guía paso a paso para papás",
                            "Vocabulario con definiciones",
                            "Ejemplos resueltos",
                            "Autoevaluación con rúbrica",
                            "Hoja de respuestas",
                        ].map(f => (
                            <div key={f} className="flex items-start gap-1.5">
                                <span className="text-green-400 text-xs mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-white/70 text-xs">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón pago */}
                <button
                    onClick={onConfirm}
                    disabled={pagando}
                    className="w-full py-3.5 rounded-2xl font-black text-white text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                    style={{ background: `linear-gradient(135deg, ${col}, ${col}cc)` }}>
                    {pagando ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader2 size={16} className="animate-spin" /> Redirigiendo a pago...
                        </span>
                    ) : (
                        "Pagar $10 MXN con Clip →"
                    )}
                </button>
                <p className="text-center text-white/20 text-xs mt-3">
                    🔒 Pago seguro · Certificado PCI-DSS · Acepta tarjetas y OXXO
                </p>
            </div>
        </div>
    );
}

/* ─── COMPONENTE PRINCIPAL ─── */
export default function CuadernilloPDF({ cuadernillo, gratis = true }: { cuadernillo: CuadernilloData; gratis?: boolean }) {
    const [gen, setGen] = useState(false);
    const [modal, setModal] = useState(false);
    const [pagando, setPagando] = useState(false);

    // Descarga directa (módulo gratuito)
    async function descargar() {
        setGen(true);
        try {
            const doc = generarCuadernilloPDF(cuadernillo);
            doc.save(`Chispito_${cuadernillo.gradoNombre.replace(/[^a-zA-Z0-9]/g, "_")}_${cuadernillo.materiaNombre.replace(/[^a-zA-Z0-9]/g, "_")}_Mod${cuadernillo.bloqueNum}.pdf`);
        } catch (e) { console.error(e); } finally { setGen(false); }
    }

    // Pago con Clip (módulo pagado)
    async function pagarConClip() {
        setPagando(true);
        try {
            const res = await fetch("/api/clip/cuadernillo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    grado: cuadernillo.grado,
                    materia: cuadernillo.materia,
                    bloqueNum: cuadernillo.bloqueNum,
                    bloqueNombre: cuadernillo.bloqueNombre,
                }),
            });
            const data = await res.json();
            if (data.payment_url) {
                window.location.href = data.payment_url;
            } else {
                throw new Error(data.error || "No se pudo crear el link de pago");
            }
        } catch (e) {
            console.error("[Clip cuadernillo]", e);
            alert("Error al procesar el pago. Intenta de nuevo.");
            setPagando(false);
        }
    }

    const col = cuadernillo.materiaColor;
    const tot = cuadernillo.ejerciciosV1.length + cuadernillo.ejerciciosV2.length;

    return (
        <>
            {/* Modal de pago */}
            {modal && (
                <ModalPago
                    cuadernillo={cuadernillo}
                    onClose={() => setModal(false)}
                    onConfirm={pagarConClip}
                    pagando={pagando}
                />
            )}

            {/* Botón principal */}
            <button
                onClick={gratis ? descargar : () => setModal(true)}
                disabled={gen}
                className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all hover:scale-[1.01] active:scale-[0.98]"
                style={{ background: `linear-gradient(135deg,${col}15,${col}08)`, border: `2px solid ${col}30` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: col }}>
                    {gen
                        ? <Loader2 size={22} color="white" className="animate-spin" />
                        : gratis
                            ? <Download size={22} color="white" />
                            : <span className="text-white text-lg">📄</span>
                    }
                </div>
                <div className="text-left flex-1">
                    <p className="font-bold text-white text-sm">
                        {gen ? "Generando PDF..." : `Cuadernillo Módulo ${cuadernillo.bloqueNum}`}
                    </p>
                    <p className="text-xs text-white/50 mt-0.5">
                        {L(cuadernillo.bloqueNombre)} · {tot} ejercicios · PDF completo SEP
                    </p>
                </div>
                <span
                    className="text-xs px-3 py-1.5 rounded-lg font-bold flex-shrink-0"
                    style={{ background: gratis ? "#22C55E" : col, color: "white" }}>
                    {gratis ? "GRATIS" : "$10 MXN"}
                </span>
            </button>
        </>
    );
}

export { generarCuadernilloPDF };
export type { CuadernilloData, Ejercicio, ContenidoPedagogico };

