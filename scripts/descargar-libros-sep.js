/**
 * CONALITEG Book Downloader para Chispito.mx
 * ==========================================
 * Descarga todos los libros de texto gratuitos de la SEP (CONALITEG)
 * como imágenes JPG organizadas por grado y materia.
 *
 * Los libros se sirven página a página desde:
 * https://libros.conaliteg.gob.mx/[AÑO]/c/[CODIGO]/[PAG].jpg
 *
 * USO:
 *   node scripts/descargar-libros-sep.js
 *   node scripts/descargar-libros-sep.js --grado=primaria-1
 *   node scripts/descargar-libros-sep.js --grado=primaria-1 --libro=P1MLA
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// ── Configuración ──────────────────────────────────────────────
const AÑO = "2025";
const BASE_URL = `https://libros.conaliteg.gob.mx/${AÑO}/c`;
const DESTINO = path.join(__dirname, "..", "libros-sep");
const MAX_PAGINAS = 280; // Máximo número de páginas por libro (el scraper para al primer 404)
const DELAY_MS = 200;    // Pausa entre requests (para no saturar el servidor)
const MAX_PARALELO = 3;  // Descargas simultáneas de páginas

// ── Catálogo completo de libros CONALITEG 2025 ─────────────────
// Formato: { codigo, nombre, grado, nivel, materia }
const LIBROS = [
    // ════ PREESCOLAR — Libros de apoyo (Fase 2, todos los grados) ════
    { codigo: "K0CFA", nombre: "Crianza para la libertad (Familias)", grado: "preescolar-apoyo", nivel: "preescolar", materia: "familias" },
    { codigo: "K0LPM", nombre: "Un libro sin recetas (Maestros)", grado: "preescolar-apoyo", nivel: "preescolar", materia: "maestros" },
    { codigo: "K0MTM", nombre: "Modalidades de trabajo (codiseño)", grado: "preescolar-apoyo", nivel: "preescolar", materia: "modalidades" },
    { codigo: "K0TAM", nombre: "Ficheros de acción transformadora", grado: "preescolar-apoyo", nivel: "preescolar", materia: "ficheros" },

    // ════ PREESCOLAR 1° ════
    { codigo: "K1MLA", nombre: "Múltiples Lenguajes", grado: "preescolar-1", nivel: "preescolar", materia: "lenguaje" },
    { codigo: "K1LPA", nombre: "Explorar e imaginar", grado: "preescolar-1", nivel: "preescolar", materia: "explorar" },
    { codigo: "K1LMA", nombre: "Jugar e imaginar (Material Manipulable)", grado: "preescolar-1", nivel: "preescolar", materia: "material-manipulable" },
    { codigo: "K1LDG", nombre: "Láminas de diálogo", grado: "preescolar-1", nivel: "preescolar", materia: "laminas-dialogo" },
    { codigo: "K1SDA", nombre: "Nuestros Saberes", grado: "preescolar-1", nivel: "preescolar", materia: "saberes" },
    { codigo: "K2MLA", nombre: "Múltiples Lenguajes", grado: "preescolar-2", nivel: "preescolar", materia: "lenguaje" },
    { codigo: "K2SDA", nombre: "Nuestros Saberes", grado: "preescolar-2", nivel: "preescolar", materia: "saberes" },
    { codigo: "K3MLA", nombre: "Múltiples Lenguajes", grado: "preescolar-3", nivel: "preescolar", materia: "lenguaje" },
    { codigo: "K3SDA", nombre: "Nuestros Saberes", grado: "preescolar-3", nivel: "preescolar", materia: "saberes" },
    { codigo: "K3PCA", nombre: "Proyectos Comunitarios", grado: "preescolar-3", nivel: "preescolar", materia: "proyectos" },

    // ════ PRIMARIA 1° ════
    { codigo: "P1MLA", nombre: "Múltiples Lenguajes", grado: "primaria-1", nivel: "primaria", materia: "lenguaje" },
    { codigo: "P1PAA", nombre: "Proyectos de Aula", grado: "primaria-1", nivel: "primaria", materia: "proyectos-aula" },
    { codigo: "P1PCA", nombre: "Proyectos Comunitarios", grado: "primaria-1", nivel: "primaria", materia: "proyectos-comunitarios" },
    { codigo: "P1PEA", nombre: "Proyectos Escolares", grado: "primaria-1", nivel: "primaria", materia: "proyectos-escolares" },
    { codigo: "P1SDA", nombre: "Nuestros Saberes", grado: "primaria-1", nivel: "primaria", materia: "saberes" },

    // ════ PRIMARIA 2° ════
    { codigo: "P2MLA", nombre: "Múltiples Lenguajes", grado: "primaria-2", nivel: "primaria", materia: "lenguaje" },
    { codigo: "P2PAA", nombre: "Proyectos de Aula", grado: "primaria-2", nivel: "primaria", materia: "proyectos-aula" },
    { codigo: "P2PCA", nombre: "Proyectos Comunitarios", grado: "primaria-2", nivel: "primaria", materia: "proyectos-comunitarios" },
    { codigo: "P2PEA", nombre: "Proyectos Escolares", grado: "primaria-2", nivel: "primaria", materia: "proyectos-escolares" },
    { codigo: "P2SDA", nombre: "Nuestros Saberes", grado: "primaria-2", nivel: "primaria", materia: "saberes" },

    // ════ PRIMARIA 3° ════
    { codigo: "P3MLA", nombre: "Múltiples Lenguajes", grado: "primaria-3", nivel: "primaria", materia: "lenguaje" },
    { codigo: "P3PAA", nombre: "Proyectos de Aula", grado: "primaria-3", nivel: "primaria", materia: "proyectos-aula" },
    { codigo: "P3PCA", nombre: "Proyectos Comunitarios", grado: "primaria-3", nivel: "primaria", materia: "proyectos-comunitarios" },
    { codigo: "P3PEA", nombre: "Proyectos Escolares", grado: "primaria-3", nivel: "primaria", materia: "proyectos-escolares" },
    { codigo: "P3SDA", nombre: "Nuestros Saberes", grado: "primaria-3", nivel: "primaria", materia: "saberes" },

    // ════ PRIMARIA 4° ════
    { codigo: "P4MLA", nombre: "Múltiples Lenguajes", grado: "primaria-4", nivel: "primaria", materia: "lenguaje" },
    { codigo: "P4PAA", nombre: "Proyectos de Aula", grado: "primaria-4", nivel: "primaria", materia: "proyectos-aula" },
    { codigo: "P4PCA", nombre: "Proyectos Comunitarios", grado: "primaria-4", nivel: "primaria", materia: "proyectos-comunitarios" },
    { codigo: "P4PEA", nombre: "Proyectos Escolares", grado: "primaria-4", nivel: "primaria", materia: "proyectos-escolares" },
    { codigo: "P4SDA", nombre: "Nuestros Saberes", grado: "primaria-4", nivel: "primaria", materia: "saberes" },

    // ════ PRIMARIA 5° ════
    { codigo: "P5MLA", nombre: "Múltiples Lenguajes", grado: "primaria-5", nivel: "primaria", materia: "lenguaje" },
    { codigo: "P5PAA", nombre: "Proyectos de Aula", grado: "primaria-5", nivel: "primaria", materia: "proyectos-aula" },
    { codigo: "P5PCA", nombre: "Proyectos Comunitarios", grado: "primaria-5", nivel: "primaria", materia: "proyectos-comunitarios" },
    { codigo: "P5PEA", nombre: "Proyectos Escolares", grado: "primaria-5", nivel: "primaria", materia: "proyectos-escolares" },
    { codigo: "P5SDA", nombre: "Nuestros Saberes", grado: "primaria-5", nivel: "primaria", materia: "saberes" },

    // ════ PRIMARIA 6° ════
    { codigo: "P6MLA", nombre: "Múltiples Lenguajes", grado: "primaria-6", nivel: "primaria", materia: "lenguaje" },
    { codigo: "P6PAA", nombre: "Proyectos de Aula", grado: "primaria-6", nivel: "primaria", materia: "proyectos-aula" },
    { codigo: "P6PCA", nombre: "Proyectos Comunitarios", grado: "primaria-6", nivel: "primaria", materia: "proyectos-comunitarios" },
    { codigo: "P6PEA", nombre: "Proyectos Escolares", grado: "primaria-6", nivel: "primaria", materia: "proyectos-escolares" },
    { codigo: "P6SDA", nombre: "Nuestros Saberes", grado: "primaria-6", nivel: "primaria", materia: "saberes" },

    // ════ SECUNDARIA 1° ════
    { codigo: "S1ESA", nombre: "Español", grado: "secundaria-1", nivel: "secundaria", materia: "espanol" },
    { codigo: "S1MAA", nombre: "Matemáticas", grado: "secundaria-1", nivel: "secundaria", materia: "matematicas" },
    { codigo: "S1HSA", nombre: "Historia", grado: "secundaria-1", nivel: "secundaria", materia: "historia" },
    { codigo: "S1CNA", nombre: "Ciencias Naturales", grado: "secundaria-1", nivel: "secundaria", materia: "ciencias" },
    { codigo: "S1GEA", nombre: "Geografía", grado: "secundaria-1", nivel: "secundaria", materia: "geografia" },

    // ════ SECUNDARIA 2° ════
    { codigo: "S2ESA", nombre: "Español", grado: "secundaria-2", nivel: "secundaria", materia: "espanol" },
    { codigo: "S2MAA", nombre: "Matemáticas", grado: "secundaria-2", nivel: "secundaria", materia: "matematicas" },
    { codigo: "S2HSA", nombre: "Historia Universal", grado: "secundaria-2", nivel: "secundaria", materia: "historia" },
    { codigo: "S2FQA", nombre: "Física y Química", grado: "secundaria-2", nivel: "secundaria", materia: "fisica-quimica" },

    // ════ SECUNDARIA 3° ════
    { codigo: "S3ESA", nombre: "Español", grado: "secundaria-3", nivel: "secundaria", materia: "espanol" },
    { codigo: "S3MAA", nombre: "Matemáticas", grado: "secundaria-3", nivel: "secundaria", materia: "matematicas" },
    { codigo: "S3HSA", nombre: "Historia México", grado: "secundaria-3", nivel: "secundaria", materia: "historia" },
];

// ── Utilidades ─────────────────────────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function descargarImagen(url, destino) {
    return new Promise((resolve, reject) => {
        const archivo = fs.createWriteStream(destino);
        const req = https.get(url, { timeout: 15000 }, (res) => {
            if (res.statusCode === 404) {
                archivo.close();
                fs.unlink(destino, () => { });
                return resolve(false); // Fin del libro
            }
            if (res.statusCode !== 200) {
                archivo.close();
                fs.unlink(destino, () => { });
                return reject(new Error(`HTTP ${res.statusCode} para ${url}`));
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
            reject(new Error(`Timeout: ${url}`));
        });
    });
}

function log(msg, tipo = "info") {
    const colores = { info: "\x1b[36m", ok: "\x1b[32m", warn: "\x1b[33m", error: "\x1b[31m" };
    const reset = "\x1b[0m";
    const tiempo = new Date().toLocaleTimeString("es-MX");
    console.log(`${colores[tipo]}[${tiempo}] ${msg}${reset}`);
}

function guardarEstado(estado) {
    fs.writeFileSync(
        path.join(DESTINO, "progreso.json"),
        JSON.stringify(estado, null, 2),
        "utf8"
    );
}

function cargarEstado() {
    const archivo = path.join(DESTINO, "progreso.json");
    if (fs.existsSync(archivo)) {
        return JSON.parse(fs.readFileSync(archivo, "utf8"));
    }
    return { completados: [], fallos: [] };
}

// ── Descarga de un libro completo ──────────────────────────────
async function descargarLibro(libro) {
    const dirLibro = path.join(DESTINO, libro.grado, libro.materia);
    fs.mkdirSync(dirLibro, { recursive: true });

    log(`📖 Descargando: [${libro.codigo}] ${libro.grado} — ${libro.nombre}`, "info");

    let paginasDescargadas = 0;
    let continuar = true;
    let pag = 0;

    while (continuar && pag <= MAX_PAGINAS) {
        const numStr = String(pag).padStart(3, "0");
        const url = `${BASE_URL}/${libro.codigo}/${numStr}.jpg`;
        const destArchivo = path.join(dirLibro, `pag-${numStr}.jpg`);

        // Skip si ya existe
        if (fs.existsSync(destArchivo)) {
            paginasDescargadas++;
            pag++;
            continue;
        }

        try {
            const descargado = await descargarImagen(url, destArchivo);
            if (!descargado) {
                continuar = false; // 404 = fin del libro
            } else {
                paginasDescargadas++;
                process.stdout.write(`\r  Página ${numStr}... ${paginasDescargadas} descargadas`);
            }
        } catch (e) {
            log(`  ⚠ Error página ${numStr}: ${e.message}`, "warn");
            // Reintentar una vez
            await sleep(1000);
        }

        pag++;
        await sleep(DELAY_MS);
    }

    console.log(""); // Nueva línea
    log(`✅ ${libro.codigo}: ${paginasDescargadas} páginas → ${dirLibro}`, "ok");

    // Guardar índice del libro
    const indice = {
        codigo: libro.codigo,
        nombre: libro.nombre,
        grado: libro.grado,
        materia: libro.materia,
        año: AÑO,
        paginas: paginasDescargadas,
        directorio: dirLibro,
        url_visor: `https://libros.conaliteg.gob.mx/${AÑO}/${libro.codigo}.htm`,
        descargado: new Date().toISOString(),
    };
    fs.writeFileSync(
        path.join(dirLibro, "libro.json"),
        JSON.stringify(indice, null, 2)
    );

    return paginasDescargadas;
}

// ── Función principal ──────────────────────────────────────────
async function main() {
    console.log(`
╔═══════════════════════════════════════════════╗
║   CONALITEG Downloader — Chispito.mx          ║
║   Ciclo escolar: ${AÑO}                         ║
║   Total libros: ${LIBROS.length.toString().padEnd(30)}║
╚═══════════════════════════════════════════════╝
  `);

    // Filtro por args
    const args = process.argv.slice(2);
    const gradoFiltro = args.find((a) => a.startsWith("--grado="))?.split("=")[1];
    const libroFiltro = args.find((a) => a.startsWith("--libro="))?.split("=")[1];

    let librosPendientes = LIBROS;
    if (gradoFiltro) {
        librosPendientes = LIBROS.filter((l) => l.grado === gradoFiltro);
        log(`🔍 Filtrando por grado: ${gradoFiltro} (${librosPendientes.length} libros)`, "info");
    }
    if (libroFiltro) {
        librosPendientes = LIBROS.filter((l) => l.codigo === libroFiltro);
        log(`🔍 Filtrando por libro: ${libroFiltro}`, "info");
    }

    // Crear directorio raíz
    fs.mkdirSync(DESTINO, { recursive: true });

    // Cargar progreso previo (reanudable)
    const estado = cargarEstado();
    librosPendientes = librosPendientes.filter(
        (l) => !estado.completados.includes(l.codigo)
    );

    if (librosPendientes.length === 0) {
        log("🎉 Todos los libros ya están descargados", "ok");
        return;
    }

    log(`📚 Libros a descargar: ${librosPendientes.length}`, "info");
    log(`📁 Destino: ${DESTINO}`, "info");
    log(`⏱  Delay entre páginas: ${DELAY_MS}ms`, "info");
    console.log("");

    let totalPaginas = 0;
    let librosCompletados = 0;

    for (const libro of librosPendientes) {
        try {
            const paginas = await descargarLibro(libro);
            totalPaginas += paginas;
            librosCompletados++;
            estado.completados.push(libro.codigo);
            guardarEstado(estado);
        } catch (e) {
            log(`❌ Error descargando ${libro.codigo}: ${e.message}`, "error");
            estado.fallos.push({ codigo: libro.codigo, error: e.message });
            guardarEstado(estado);
        }

        // Pausa entre libros
        if (librosPendientes.indexOf(libro) < librosPendientes.length - 1) {
            await sleep(500);
        }
    }

    console.log(`
╔═══════════════════════════════════════════════╗
║   ✅ DESCARGA COMPLETADA                      ║
║   Libros: ${librosCompletados.toString().padEnd(35)}║
║   Páginas: ${totalPaginas.toString().padEnd(34)}║
║   Destino: libros-sep/                        ║
╚═══════════════════════════════════════════════╝
  `);
    log(`📊 Progreso guardado en: ${path.join(DESTINO, "progreso.json")}`, "ok");
}

main().catch((e) => {
    console.error("Error fatal:", e);
    process.exit(1);
});
