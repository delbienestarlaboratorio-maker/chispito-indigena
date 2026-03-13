/**
 * CONALITEG Expansion Downloader para Chispito.mx
 * ==============================================
 * Este script se encarga de probar y descargar los libros faltantes del catálogo
 * SEP (Lenguas indígenas, Cartografías, Regionales, etc) que no están en la ruta
 * estándar nacional.
 * 
 * Uso: node scripts/descargar-expansion-sep.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const AÑO = "2025";
const BASE_URL = `https://libros.conaliteg.gob.mx/${AÑO}/c`;
const DESTINO = path.join(__dirname, "..", "libros-sep");
const MAX_PAGINAS = 320;
const DELAY_MS = 250;
const PROGRESO_FILE = path.join(DESTINO, "progreso_expansion.json");

// ── CATÁLOGO EXPANDIDO (Códigos SEP Documentados) ─────────────────
const LIBROS_EXPANSION = [
    // ════ LA ENTIDAD DONDE VIVO (3ro de Primaria, 32 estados) ════
    { codigo: "P3AGA", nombre: "Aguascalientes", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3BCA", nombre: "Baja California", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3BSA", nombre: "Baja California Sur", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3CAA", nombre: "Campeche", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3COA", nombre: "Coahuila", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3CLA", nombre: "Colima", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3CHA", nombre: "Chiapas", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3HIA", nombre: "Chihuahua", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3CDA", nombre: "CDMX", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3DUA", nombre: "Durango", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3GUA", nombre: "Guanajuato", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3GEA", nombre: "Guerrero", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3HGA", nombre: "Hidalgo", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3JAL", nombre: "Jalisco", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3MEA", nombre: "Edomex", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3MIA", nombre: "Michoacán", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3MOA", nombre: "Morelos", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3NAA", nombre: "Nayarit", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3NLA", nombre: "Nuevo León", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3OAA", nombre: "Oaxaca", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3PUA", nombre: "Puebla", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3QUA", nombre: "Querétaro", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3QRA", nombre: "Quintana Roo", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3SLA", nombre: "San Luis Potosí", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3SIA", nombre: "Sinaloa", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3SOA", nombre: "Sonora", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3TAA", nombre: "Tabasco", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3TMA", nombre: "Tamaulipas", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3TLA", nombre: "Tlaxcala", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3VEA", nombre: "Veracruz", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3YUA", nombre: "Yucatán", grado: "primaria-3", materia: "entidad" },
    { codigo: "P3ZAA", nombre: "Zacatecas", grado: "primaria-3", materia: "entidad" },

    // ════ TEXTOS ESPECIALES / CARTOGRAFÍA ════
    { codigo: "P1TPA", nombre: "Trazos y Palabras", grado: "primaria-1", materia: "trazos" },
    { codigo: "P4CMA", nombre: "Cartografía de América", grado: "primaria-4", materia: "cartografia" },
    { codigo: "P5CMA", nombre: "Cartografía de México", grado: "primaria-5", materia: "cartografia" },
    { codigo: "P6CMA", nombre: "Cartografía del Mundo", grado: "primaria-6", materia: "cartografia" },

    // ════ INGLES (Preescolar y Primaria PRONI) ════
    { codigo: "K3INA", nombre: "Activity Book (Inglés)", grado: "preescolar-3", materia: "ingles" },
    { codigo: "P1INA", nombre: "Activity Book (Inglés)", grado: "primaria-1", materia: "ingles" },
    { codigo: "P2INA", nombre: "Activity Book (Inglés)", grado: "primaria-2", materia: "ingles" },
    { codigo: "P3INA", nombre: "Activity Book (Inglés)", grado: "primaria-3", materia: "ingles" },
    { codigo: "P4INA", nombre: "Activity Book (Inglés)", grado: "primaria-4", materia: "ingles" },
    { codigo: "P5INA", nombre: "Activity Book (Inglés)", grado: "primaria-5", materia: "ingles" },
    { codigo: "P6INA", nombre: "Activity Book (Inglés)", grado: "primaria-6", materia: "ingles" },

    // ════ LENGUAS INDÍGENAS (Múltiples Lenguajes adaptados) ════
    // Importados dinámicamente desde catalogo_indigenas_2024_completo.json
];

let catalogPath = path.join(__dirname, '..', 'catalogo_indigenas_2024_completo.json');
if (fs.existsSync(catalogPath)) {
    console.log("Cargando catálogo indígena dinámico...");
    const indigenas = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    LIBROS_EXPANSION.push(...indigenas);
}

// Opcional: Escáner fuerza bruta para encontrar dialectos que la SEP esconde en sufijos raros
const SUFIJOS_INDIGENAS = ["NA", "MY", "MA", "TS", "TZ", "MI", "OT", "ZA", "PU", "TL", "TO"];
const GRADOS_PRIMARIA = ["P1", "P2", "P3", "P4", "P5", "P6"];

// ── Funciones ─────────────────────────────────────────────────
const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function descargarImagen(url, destino) {
    return new Promise((resolve, reject) => {
        const archivo = fs.createWriteStream(destino);
        const req = https.get(url, { timeout: 15000 }, (res) => {
            if (res.statusCode === 404) {
                archivo.close();
                fs.unlink(destino, () => { });
                return resolve(false);
            }
            if (res.statusCode !== 200) {
                archivo.close();
                fs.unlink(destino, () => { });
                return reject(new Error(`HTTP ${res.statusCode}`));
            }
            res.pipe(archivo);
            archivo.on("finish", () => { archivo.close(); resolve(true); });
        });
        req.on("error", (err) => {
            archivo.close();
            fs.unlink(destino, () => { });
            reject(err);
        });
        req.on("timeout", () => {
            req.destroy();
            archivo.close();
            fs.unlink(destino, () => { });
            reject(new Error("Timeout"));
        });
    });
}

function cargarEstado() {
    if (fs.existsSync(PROGRESO_FILE)) {
        return JSON.parse(fs.readFileSync(PROGRESO_FILE, "utf8"));
    }
    return { completados: [], inexistentes: [], fallos: [] };
}

function guardarEstado(estado) {
    fs.writeFileSync(PROGRESO_FILE, JSON.stringify(estado, null, 2));
}

async function probarDescargarLibro(libro, estado) {
    if (estado.completados.includes(libro.codigo) || estado.inexistentes.includes(libro.codigo)) {
        return;
    }

    const dirLibro = path.join(DESTINO, libro.grado, libro.materia, libro.codigo);

    // Primero, probar si la página 000 o 001 existe para saber si el código es válido
    let paginaInvalida = false;
    let baseURL = libro.codigo.startsWith("EIP")
        ? "https://libros.conaliteg.gob.mx/2024/m"
        : BASE_URL;

    try {
        const urlPrueba = `${baseURL}/${libro.codigo}/000.jpg`;
        const testDest = path.join(DESTINO, "test.jpg");
        const exito0 = await descargarImagen(urlPrueba, testDest);
        if (!exito0) {
            const urlPrueba1 = `${baseURL}/${libro.codigo}/001.jpg`;
            const exito1 = await descargarImagen(urlPrueba1, testDest);
            if (!exito1) paginaInvalida = true;
        }
    } catch (e) {
        paginaInvalida = true;
    }

    if (paginaInvalida) {
        console.log(`❌ [404] No existe SEP en línea: ${libro.codigo}`);
        estado.inexistentes.push(libro.codigo);
        guardarEstado(estado);
        return;
    }

    // SI EXISTE, crear carpeta y descargar masivo
    console.log(`\n===========================================`)
    console.log(`✅ ¡LIBRO ENCONTRADO! Descargando: [${libro.codigo}] ${libro.nombre}`);
    fs.mkdirSync(dirLibro, { recursive: true });

    let paginasDescargadas = 0;
    let pag = 0;
    let perdidasConsecutivas = 0;

    while (pag <= MAX_PAGINAS && perdidasConsecutivas < 3) {
        const numStr = String(pag).padStart(3, "0");
        const url = `${baseURL}/${libro.codigo}/${numStr}.jpg`;
        const destArchivo = path.join(dirLibro, `pag-${numStr}.jpg`);

        if (fs.existsSync(destArchivo)) {
            paginasDescargadas++; pag++; perdidasConsecutivas = 0; continue;
        }

        try {
            const descargado = await descargarImagen(url, destArchivo);
            if (!descargado) {
                perdidasConsecutivas++;
            } else {
                perdidasConsecutivas = 0;
                paginasDescargadas++;
                process.stdout.write(`\r  Descargada pag ${numStr}... (${paginasDescargadas} págs)`);
            }
        } catch (e) {
            perdidasConsecutivas++;
        }

        pag++;
        await sleep(DELAY_MS);
    }

    if (paginasDescargadas > 5) {
        estado.completados.push(libro.codigo);
        // Guardar metadata local
        const indice = {
            codigo: libro.codigo,
            nombre: libro.nombre,
            grado: libro.grado,
            materia: libro.materia,
            paginas: paginasDescargadas,
            region: libro.codigo.includes("A") && libro.codigo.startsWith("P3") ? "regional" : "nacional"
        };
        fs.writeFileSync(path.join(dirLibro, "libro.json"), JSON.stringify(indice, null, 2));
    } else {
        estado.fallos.push({ codigo: libro.codigo, error: "Poco contenido" });
    }

    guardarEstado(estado);
}

async function main() {
    console.log("Iniciando escáner de expansión SEP...");
    const estado = cargarEstado();

    // 1. Probar la lista explícita
    for (const libro of LIBROS_EXPANSION) {
        await probarDescargarLibro(libro, estado);
    }

    // 2. Comentando fuerza bruta original porque ya extrajimos los códigos correctos (EIPXXX)
    // console.log("\nIniciando escáner de dialectos y lenguas indígenas...");
    // ... brute force removed for efficiency ...


    console.log("✅ Escaneo completo.");
}

main();
