/**
 * CONALITEG Descarga Exacta
 * Descarga específicamente el libro P1TPA (Trazos y Palabras) y otros confirmados.
 */
const https = require("https");
const fs = require("fs");
const path = require("path");

const AÑO = "2025";
const BASE_URL = `https://libros.conaliteg.gob.mx/${AÑO}/c`;
const DESTINO = path.join(__dirname, "..", "libros-sep");
const DELAY_MS = 150;

const LIBROS_FALTANTES = [
    { codigo: "P1TPA", nombre: "Trazos y Palabras", grado: "primaria-1", materia: "trazos-palabras" }
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function descargarImagen(url, destino) {
    return new Promise((resolve) => {
        const archivo = fs.createWriteStream(destino);
        https.get(url, (res) => {
            if (res.statusCode !== 200) {
                archivo.close();
                fs.unlink(destino, () => { });
                return resolve(false);
            }
            res.pipe(archivo);
            archivo.on("finish", () => { archivo.close(); resolve(true); });
        }).on('error', () => resolve(false));
    });
}

async function run() {
    for (const l of LIBROS_FALTANTES) {
        const dir = path.join(DESTINO, l.grado, l.materia);
        fs.mkdirSync(dir, { recursive: true });
        console.log(`\nDescargando ${l.nombre}...`);
        let pag = 0;
        let descargados = 0;
        let p404 = 0;

        while (pag < 350 && p404 < 3) {
            const strPag = String(pag).padStart(3, "0");
            const dest = path.join(dir, `pag-${strPag}.jpg`);
            if (fs.existsSync(dest)) {
                descargados++; pag++; p404 = 0; continue;
            }
            const ok = await descargarImagen(`${BASE_URL}/${l.codigo}/${strPag}.jpg`, dest);
            if (ok) {
                descargados++; p404 = 0;
                process.stdout.write(`\r  > pag-${strPag}.jpg OK`);
            } else {
                p404++;
            }
            pag++;
            await sleep(DELAY_MS);
        }
        console.log(`\nCompletado! Total: ${descargados} páginas`);
    }
}

run();
