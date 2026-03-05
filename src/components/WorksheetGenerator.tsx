"use client";
// WorksheetGenerator v2 — Genera hoja imprimible con ejercicios reales del JSON
// Acceso libre (sin candado Premium). Logo Chispito + Info de contacto.

import { useState } from "react";
import { Printer, Download } from "lucide-react";

interface Props {
    grado: string;
    gradoNombre: string;
    materia: string;
    materiaNombre: string;
    materiaEmoji: string;
    materiaColor: string;
    bloqueNum: number;
    bloqueNombre: string;
    meses: string;
    // Ejercicios reales del JSON (ya cargados en el servidor)
    ejercicios: Array<{
        id: string;
        tipo: string;
        pregunta: string;
        opciones?: string[];
        respuestaCorrecta: string;
        explicacion?: string;
        visual?: string;
    }>;
}

function renderEjercicioHTML(ej: Props["ejercicios"][0], idx: number): string {
    const num = idx + 1;
    const visual = ej.visual ? `<span style="font-size:2.5rem;display:block;text-align:center;margin-bottom:6px">${ej.visual}</span>` : "";

    if (ej.tipo === "true_false") {
        return `
        <div class="ejercicio">
            <p class="num">${num}.</p>
            ${visual}
            <p class="pregunta">¿Verdadero o Falso? &nbsp;${ej.pregunta}</p>
            <div class="opciones-tf">
                <label class="opcion-tf"><span class="circulo"></span> Verdadero</label>
                <label class="opcion-tf"><span class="circulo"></span> Falso</label>
            </div>
        </div>`;
    }

    if (ej.tipo === "multiple_choice" && ej.opciones) {
        const opts = ej.opciones.map((op, i) =>
            `<label class="opcion"><span class="letra">${String.fromCharCode(65 + i)})</span> ${op}</label>`
        ).join("\n");
        return `
        <div class="ejercicio">
            <p class="num">${num}.</p>
            ${visual}
            <p class="pregunta">${ej.pregunta}</p>
            <div class="opciones">${opts}</div>
        </div>`;
    }

    if (ej.tipo === "fill_blank") {
        const pregWithBlank = ej.pregunta.replace(/___/g, '<span class="linea-resp"></span>');
        return `
        <div class="ejercicio">
            <p class="num">${num}.</p>
            ${visual}
            <p class="pregunta">${pregWithBlank}</p>
            <div class="linea-resp-larga"></div>
        </div>`;
    }

    // Default
    return `
    <div class="ejercicio">
        <p class="num">${num}.</p>
        ${visual}
        <p class="pregunta">${ej.pregunta}</p>
        <div class="linea-resp-larga"></div>
        <div class="linea-resp-larga"></div>
    </div>`;
}

function generarHTML(p: Props): string {
    const ejerciciosHTML = p.ejercicios
        .slice(0, 10)
        .map((e, i) => renderEjercicioHTML(e, i))
        .join("\n");

    const fecha = new Date().toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });

    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Hoja de práctica — ${p.materiaNombre} ${p.gradoNombre} · Bloque ${p.bloqueNum} | Chispito.mx</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      padding: 15mm 18mm 12mm;
      font-size: 11pt;
      color: #111;
      background: white;
    }

    /* ─── ENCABEZADO ─── */
    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding-bottom: 10px;
      margin-bottom: 14px;
      border-bottom: 4px solid ${p.materiaColor};
    }
    .logo-area { display: flex; align-items: center; gap: 12px; }
    .logo-symbol {
      font-size: 2.8rem;
      line-height: 1;
      background: ${p.materiaColor};
      color: white;
      border-radius: 12px;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
    }
    .logo-text .marca { font-size: 20pt; font-weight: 900; color: #0D1B2A; letter-spacing: -0.5px; }
    .logo-text .marca em { color: ${p.materiaColor}; font-style: normal; }
    .logo-text .tagline { font-size: 8pt; color: #888; margin-top: 2px; }
    .meta { text-align: right; font-size: 9pt; color: #555; line-height: 1.7; }
    .meta strong { color: #111; }

    /* ─── CAJA DE DATOS ─── */
    .datos-alumno {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }
    .campo { border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; }
    .campo label { font-size: 8pt; color: #888; display: block; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
    .campo .calificacion-box {
      border: 3px solid ${p.materiaColor};
      border-radius: 50%;
      width: 54px;
      height: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 9pt;
      font-weight: bold;
      color: ${p.materiaColor};
      margin-top: -10px;
    }

    /* ─── TÍTULO DEL BLOQUE ─── */
    .bloque-header {
      background: ${p.materiaColor}15;
      border-left: 5px solid ${p.materiaColor};
      padding: 10px 14px;
      border-radius: 0 8px 8px 0;
      margin-bottom: 18px;
    }
    .bloque-header .emoji { font-size: 1.4rem; }
    .bloque-header h1 { font-size: 14pt; font-weight: 800; color: #0D1B2A; }
    .bloque-header p { font-size: 9pt; color: #666; margin-top: 2px; }

    /* ─── EJERCICIOS ─── */
    .ejercicio {
      margin-bottom: 18px;
      padding-bottom: 16px;
      border-bottom: 1px dashed #e2e8f0;
      display: grid;
      grid-template-columns: 26px 1fr;
      gap: 6px;
      align-items: start;
    }
    .ejercicio:last-child { border-bottom: none; }
    .num { font-weight: 800; color: ${p.materiaColor}; font-size: 11pt; padding-top: 1px; }
    .pregunta { font-size: 11pt; line-height: 1.5; font-weight: 600; color: #1a1a1a; }

    .opciones { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; }
    .opcion {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10pt;
      color: #333;
      padding: 4px 0;
    }
    .letra { font-weight: 700; color: ${p.materiaColor}; min-width: 20px; }

    .opciones-tf { display: flex; gap: 24px; margin-top: 8px; }
    .opcion-tf { display: flex; align-items: center; gap: 8px; font-size: 10pt; }
    .circulo {
      display: inline-block;
      width: 18px; height: 18px;
      border: 2px solid #aaa;
      border-radius: 50%;
    }

    .linea-resp {
      display: inline-block;
      min-width: 80px;
      border-bottom: 1.5px solid #333;
      margin: 0 4px;
      vertical-align: bottom;
    }
    .linea-resp-larga {
      border-bottom: 1.5px solid #ccc;
      margin-top: 8px;
      height: 20px;
    }

    /* ─── FOOTER ─── */
    .footer {
      margin-top: 20px;
      padding-top: 10px;
      border-top: 2px solid ${p.materiaColor}40;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 8pt;
      color: #aaa;
    }
    .footer .site { color: ${p.materiaColor}; font-weight: 700; }

    @media print {
      body { padding: 10mm 14mm; }
      .ejercicio { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- ENCABEZADO -->
  <div class="header">
    <div class="logo-area">
      <div class="logo-symbol">${p.materiaEmoji}</div>
      <div class="logo-text">
        <div class="marca">⚡ Chispito<em>.mx</em></div>
        <div class="tagline">Ejercicios SEP México · Ciclo Escolar 2025-2026</div>
      </div>
    </div>
    <div class="meta">
      <strong>${p.gradoNombre}</strong><br>
      ${p.materiaNombre} · Módulo ${p.bloqueNum}<br>
      ${p.meses}<br>
      ${fecha}
    </div>
  </div>

  <!-- DATOS DEL ALUMNO -->
  <div class="datos-alumno">
    <div class="campo">
      <label>Nombre del alumno</label>
      &nbsp;
    </div>
    <div class="campo">
      <label>Fecha</label>
      &nbsp;
    </div>
    <div class="campo">
      <label>Calificación</label>
      <div class="calificacion-box">___</div>
    </div>
  </div>

  <!-- TÍTULO -->
  <div class="bloque-header">
    <div style="display:flex;align-items:center;gap:8px">
      <span class="emoji">${p.materiaEmoji}</span>
      <div>
        <h1>Módulo ${p.bloqueNum}: ${p.bloqueNombre}</h1>
        <p>${p.materiaNombre} · ${p.gradoNombre} · ${p.meses}</p>
      </div>
    </div>
  </div>

  <!-- EJERCICIOS -->
  <div class="ejercicios-lista">
    ${ejerciciosHTML}
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <span>
      <span class="site">chispito.mx</span> · Ejercicios gratuitos alineados al programa SEP 2025-2026 · México
    </span>
    <span>¡Tú puedes lograrlo! ⚡ Bloque ${p.bloqueNum} de 5</span>
  </div>

</body>
</html>`;
}

export default function WorksheetGenerator({
    grado, gradoNombre, materia, materiaNombre, materiaEmoji, materiaColor,
    bloqueNum, bloqueNombre, meses, ejercicios
}: Props) {
    const [generando, setGenerando] = useState(false);

    // Si no hay ejercicios reales, no mostrar
    if (!ejercicios || ejercicios.length === 0) return null;

    function imprimir() {
        setGenerando(true);
        const html = generarHTML({
            grado, gradoNombre, materia, materiaNombre, materiaEmoji, materiaColor,
            bloqueNum, bloqueNombre, meses, ejercicios
        });
        const ventana = window.open("", "_blank");
        if (ventana) {
            ventana.document.write(html);
            ventana.document.close();
            setTimeout(() => { ventana.print(); setGenerando(false); }, 600);
        } else {
            setGenerando(false);
        }
    }

    return (
        <button
            onClick={imprimir}
            disabled={generando}
            className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all hover:opacity-90 active:scale-98"
            style={{
                background: `${materiaColor}12`,
                border: `2px solid ${materiaColor}30`,
            }}
        >
            <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: materiaColor }}
            >
                {generando
                    ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    : <Printer size={20} color="white" />
                }
            </div>
            <div className="text-left flex-1">
                <p className="font-bold text-gray-800">
                    {generando ? "Preparando hoja..." : "📄 Imprimir hoja de práctica"}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                    10 ejercicios reales · Módulo {bloqueNum} · Con logo Chispito · Gratis
                </p>
            </div>
            <span
                className="text-xs px-3 py-1.5 rounded-lg font-bold flex-shrink-0"
                style={{ background: materiaColor, color: "white" }}
            >
                <Download size={12} className="inline mr-1" />
                PDF
            </span>
        </button>
    );
}
