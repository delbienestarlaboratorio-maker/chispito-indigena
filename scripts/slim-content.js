/**
 * slim-content.js
 * Genera versiones "slim" de content-primaria.ts y content-grados-superiores.ts
 * eliminando los campos pesados (guiaPapa, guiaMaestro, enClase, keywords)
 * que solo se usan en páginas client-side (maestros, padres).
 *
 * Las páginas server-side solo necesitan: bloque, nombre, meses, color, materia, emoji
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');

// Archivos a procesar
const files = [
    'content-primaria.ts',
    'content-grados-superiores.ts',
    'content-kinder.ts',
    'content-preescolar1.ts',
    'content-primaria3.ts',
];

function stripHeavyFields(content) {
    let result = content;

    // Remove guiaPapa blocks (multi-line objects)
    result = result.replace(/\s*guiaPapa:\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\},?/g, '');

    // Remove guiaMaestro blocks
    result = result.replace(/\s*guiaMaestro:\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\},?/g, '');

    // Remove enClase arrays (multi-line)
    result = result.replace(/\s*enClase:\s*\[[^\]]*\],?/g, '');

    // Remove keywords arrays
    result = result.replace(/\s*keywords:\s*\[[^\]]*\],?/g, '');

    // Clean up double commas and trailing commas before closing braces
    result = result.replace(/,(\s*),/g, ',');
    result = result.replace(/,(\s*)\}/g, '$1}');
    result = result.replace(/,(\s*)\]/g, '$1]');

    // Remove excessive blank lines (more than 2 in a row)
    result = result.replace(/\n{3,}/g, '\n\n');

    return result;
}

let totalSaved = 0;

for (const file of files) {
    const filePath = path.join(dataDir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`⏭️  ${file} — no existe, saltando`);
        continue;
    }

    const original = fs.readFileSync(filePath, 'utf-8');
    const slim = stripHeavyFields(original);

    const slimName = file.replace('.ts', '-slim.ts');
    const slimPath = path.join(dataDir, slimName);
    fs.writeFileSync(slimPath, slim, 'utf-8');

    const savedKB = ((original.length - slim.length) / 1024).toFixed(1);
    const origKB = (original.length / 1024).toFixed(1);
    const slimKB = (slim.length / 1024).toFixed(1);
    totalSaved += original.length - slim.length;

    console.log(`✅ ${file}: ${origKB} KB → ${slimKB} KB (ahorrado: ${savedKB} KB)`);
}

console.log(`\n📦 Total ahorrado: ${(totalSaved / 1024).toFixed(1)} KB`);
console.log('\nAhora actualiza los imports en las páginas server-side para usar las versiones -slim.');
