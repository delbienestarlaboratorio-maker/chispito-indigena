/**
 * CONALITEG Escáner de Lenguas Indígenas
 * =====================================
 * Este script se conecta al catálogo histórico de la SEP para encontrar y descargar
 * los libros de texto gratuitos en las 37 lenguas indígenas oficiales de México.
 */
const https = require("https");
const fs = require("fs");
const path = require("path");

const URL_INDEX_INDIGENAS = [
    'https://libros.conaliteg.gob.mx/indigena.html',
    'https://conaliteg.sep.gob.mx/indigena.html',
    'https://libros.conaliteg.gob.mx/2023/indigena.html' // Archivos históricos
];

function fetchHTML(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ url, data, status: res.statusCode }));
        }).on('error', () => resolve({ url, data: '', status: 500 }));
    });
}

function parseHTMLParaCodigos(html) {
    // Buscar cualquier href que apunte a un libro de formato conaliteg (Ej. "2023/K1MAC.htm")
    const regex = /href=["']?(?:202[12345]\/|\/)?([A-Z0-9_]+)\.htm(?:l)?(.*?)["']/gi;
    const codes = new Set();
    let match;
    while ((match = regex.exec(html)) !== null) {
        if (match[1].length >= 4 && match[1].length <= 8) {
            codes.add(match[1]);
        }
    }
    return Array.from(codes);
}

async function start() {
    console.log("==========================================");
    console.log("🕵️  Módulo de Extracción de Lenguas Indígenas");
    console.log("==========================================");

    let codigosEncontrados = [];

    // 1. Escanear catálogos conocidos
    for (const url of URL_INDEX_INDIGENAS) {
        console.log(`Buscando en catálogo: ${url}`);
        const result = await fetchHTML(url);
        if (result.status === 200) {
            const extraidos = parseHTMLParaCodigos(result.data);
            console.log(`✅ ¡Enlace activo! Se descubrieron ${extraidos.length} posibles libros.`);
            codigosEncontrados = [...codigosEncontrados, ...extraidos];
        } else {
            console.log(`❌ Archivo inaccesible (${result.status})`);
        }
    }

    // Limpiar duplicados y basura
    codigosEncontrados = [...new Set(codigosEncontrados)].filter(c =>
        c !== "index" && c !== "primaria" && c !== "secundaria" && c !== "preescolar" && c !== "telesecundaria"
    );

    if (codigosEncontrados.length === 0) {
        console.log("\n⚠️ El catálogo web no arrojó resultados directos.");
        console.log("Procediendo con fuerza bruta de prefijos indígenas documentados por la DGEI...");
        // La DGEI (Dirección Gral. de Educación Indígena) usaba prefijos como "ML" (Múltiples Lenguajes) 
        // o "P1LA_" (Primaria 1 Lengua Adicional) seguido del idioma.

        const GRADOS = ["P1", "P2", "P3", "P4", "P5", "P6"];
        const LENGUAS = ["MAYA", "NAHU", "TSEL", "TSOT", "MIX", "ZAP", "TAR", "OTO", "TOT"]; // Códigos comunes SEP

        for (const g of GRADOS) {
            for (const l of LENGUAS) {
                codigosEncontrados.push(`${g}ML_${l}`);
                codigosEncontrados.push(`${g}MLA_${l}`);
                codigosEncontrados.push(`${g}LA_${l}`); // Lengua Adicional 
                codigosEncontrados.push(`${g}_${l}`);
            }
        }
    }

    console.log(`\n📚 Total de códigos a inspeccionar: ${codigosEncontrados.length}`);
    fs.writeFileSync(path.join(__dirname, '..', 'codigos_indigenas.json'), JSON.stringify(codigosEncontrados, null, 2));

    console.log(`Catálogo temporal guardado. Ejecutando el descargador intensivo sobre estos códigos...`);
}

start();
