const https = require('https');
const fs = require('fs');

function fetchHTML(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve({ url, data, status: res.statusCode }));
        }).on('error', () => resolve({ url, data: '', status: 500 }));
    });
}

async function run() {
    console.log("Escaneando primaria_2024.html...");
    const { data } = await fetchHTML('https://libros.conaliteg.gob.mx/primaria_2024.html');

    const regex = /href=["']?(?:202[345]\/|\/)?([A-Z0-9_]+)\.htm(?:l)?(.*?)["']/gi;
    const codes = new Set();
    let match;
    while ((match = regex.exec(data)) !== null) {
        // Ignorar basura HTML o de jQuery
        if (match[1].length === 5 || match[1].length === 4) {
            codes.add(match[1]);
        }
    }

    // Buscar también lenguas indígenas directas
    const regex2 = /https:\/\/libros\.conaliteg\.gob\.mx\/202[345]\/(.*?)\.htm/g;
    let m2;
    while ((m2 = regex2.exec(data)) !== null) {
        codes.add(m2[1]);
    }

    console.log(`Encontrados en primaria_2024: ${codes.size}`);
    fs.writeFileSync("codigos_primaria.json", JSON.stringify(Array.from(codes), null, 2));

    // Y probemos primaria.html también
    const res2 = await fetchHTML('https://libros.conaliteg.gob.mx/primaria.html');
    const codes2 = new Set();
    let m3;
    while ((m3 = regex.exec(res2.data)) !== null) {
        codes2.add(m3[1]);
    }
    fs.writeFileSync("codigos_primaria_old.json", JSON.stringify(Array.from(codes2), null, 2));
}

run();
