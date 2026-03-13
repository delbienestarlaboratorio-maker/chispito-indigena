const fs = require('fs');
const raw = JSON.parse(fs.readFileSync('catalogo_indigenas_2024.json', 'utf-8'));

const langBases = {};

// Find the minimum code for each language
raw.forEach(item => {
    const num = parseInt(item.code.replace('EIP', ''), 10);
    if (!langBases[item.lang] || num < langBases[item.lang]) {
        langBases[item.lang] = num;
    }
});

const FINAL_CATALOG = [];
raw.forEach(item => {
    const num = parseInt(item.code.replace('EIP', ''), 10);
    const grado = (num - langBases[item.lang]) + 1;

    // Only grade 1 to 6
    if (grado >= 1 && grado <= 6) {
        FINAL_CATALOG.push({
            codigo: item.code,
            nombre: `Proyecto en mi lengua: ${item.lang}`,
            grado: `primaria-${grado}`,
            materia: `indigena-${item.lang.toLowerCase().replace(/[\s\(\)']+/g, '-')}`
        });
    }
});

fs.writeFileSync('catalogo_indigenas_2024_completo.json', JSON.stringify(FINAL_CATALOG, null, 2));
console.log(`Generado catálogo final con ${FINAL_CATALOG.length} libros mapeados por grado.`);
