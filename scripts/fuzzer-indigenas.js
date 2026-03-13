const https = require("https");
const fs = require("fs");
const path = require("path");

const BASE_URL = `https://libros.conaliteg.gob.mx/2024/c`;

// LENGUAS INDÍGENAS SEGÚN INALI (Catálogo 2022)
const LENGUAS = [
    "NAHU", "MAYA", "TSEL", "TSOT", "MIXE", "ZAPO", "TOTO", "MAZA", "CHOL", "HUAS",
    "PURE", "CHIN", "TLAP", "TARA", "MAYO", "AMUZ", "TOJO", "HUIC", "TEPE", "CORA",
    "POPO", "YAKI", "CUCA", "KILI", "PAIP", "SERI", "TRIQ", "CHAT", "PAME", "CHON",
    "NA", "MA", "TS", "TZ", "MI", "ZA", "TO", "MZ", "CH", "HU", "PU", "TL", "TA", "MY"
];

const GRADOS = ["K1", "K2", "K3", "P1", "P2", "P3", "P4", "P5", "P6", "S1", "S2", "S3"];
const MATERIAS = ["ML", "MLA", "LA", "LI", "LIT", "LEC"];

function probeUrl(url) {
    return new Promise((resolve) => {
        const req = https.get(url, { timeout: 3000 }, (res) => {
            if (res.statusCode === 200) resolve(true);
            else resolve(false);
            res.resume(); // consume response data to free up memory
        }).on('error', () => resolve(false));
        req.on('timeout', () => { req.destroy(); resolve(false); });
    });
}

function generateCodes() {
    const codes = new Set();
    for (const g of GRADOS) {
        for (const m of MATERIAS) {
            for (const l of LENGUAS) {
                codes.add(`${g}${m}${l}`);
                codes.add(`${g}${m}_${l}`);
            }
        }
    }
    return Array.from(codes);
}

async function runFuzzer() {
    const allCodes = generateCodes();
    console.log(`Iniciando fuzzer con ${allCodes.length} combinaciones posibles...`);

    let validCodes = [];
    const BATCH_SIZE = 100; // Paralelizar para velocidad

    for (let i = 0; i < allCodes.length; i += BATCH_SIZE) {
        const batch = allCodes.slice(i, i + BATCH_SIZE);
        process.stdout.write(`\rEscaneando batch ${i} a ${i + BATCH_SIZE}... `);

        const promises = batch.map(async (code) => {
            const url = `${BASE_URL}/${code}/000.jpg`;
            const urlAlt = `${BASE_URL}/${code}/001.jpg`;
            const ok = await probeUrl(url);
            if (ok) return code;
            else {
                const okAlt = await probeUrl(urlAlt);
                if (okAlt) return code;
            }
            return null;
        });

        const results = await Promise.all(promises);
        const foundInBatch = results.filter(r => r !== null);

        if (foundInBatch.length > 0) {
            console.log(`\n🎉 ENCONTRADOS: ${foundInBatch.join(", ")}`);
            validCodes.push(...foundInBatch);
            fs.writeFileSync("codigos_indigenas_validos.json", JSON.stringify(validCodes, null, 2));
        }
    }

    console.log(`\nFuzzer terminado. ${validCodes.length} libros indígenas encontrados.`);
}

runFuzzer();
