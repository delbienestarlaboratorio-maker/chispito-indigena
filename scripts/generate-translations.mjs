/**
 * Generador de diccionarios para lenguas indígenas
 * Usa Google Translate (gratuito) para traducir del español al Maya Yucateco
 * 
 * Uso: node scripts/generate-translations.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ── Google Translate (free, no API key needed) ──
async function translateText(text, targetLang) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        // Google returns array of arrays: [[["translated text","original text",...],...],...]
        let translated = '';
        if (data && data[0]) {
            for (const part of data[0]) {
                if (part[0]) translated += part[0];
            }
        }
        return translated || text;
    } catch (e) {
        console.error(`  ⚠ Error translating "${text.substring(0, 30)}...": ${e.message}`);
        return text; // Return original on error
    }
}

// Rate limit: wait between requests to avoid being blocked
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ── Read Spanish dictionary ──
function readSpanishDict() {
    const content = readFileSync(
        join(__dirname, '../src/data/diccionarios/es.ts'), 'utf-8'
    );

    const entries = {};
    const regex = /"([^"]+)":\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        entries[match[1]] = match[2];
    }
    return entries;
}

// ── Read nahMap to get text blocks to translate ──
function readNahMap() {
    const content = readFileSync(
        join(__dirname, '../src/data/diccionarios/nahMap.ts'), 'utf-8'
    );

    const pairs = [];
    const regex = /\[\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        pairs.push([match[1], match[2]]); // [spanish, nahuatl]
    }
    return pairs;
}

// ── Generate dictionary TS file ──
function generateDictFile(langCode, langName, translations) {
    const lines = [`import { LanguageDictionary } from "./es";`, '',
        `export const dic${langCode.charAt(0).toUpperCase() + langCode.slice(1)}: LanguageDictionary = {`];

    let currentSection = '';
    for (const [key, value] of Object.entries(translations)) {
        const section = key.split('.')[0];
        if (section !== currentSection) {
            if (currentSection) lines.push('');
            currentSection = section;
            const sectionNames = {
                nav: 'Navbar', btn: 'Botones', tag: 'Etiquetas', hero: 'Hero',
                stats: 'Stats', feat: 'Features', materias: 'Materias', materia: 'Materias',
                why: 'Why', cta: 'CTA Final', footer: 'Footer', grades: 'GradeSelector',
                nivel: 'Niveles'
            };
            lines.push(`    // ── ${sectionNames[section] || section} ──`);
        }
        const escaped = value.replace(/"/g, '\\"');
        lines.push(`    "${key}": "${escaped}",`);
    }

    lines.push('};');
    lines.push('');
    return lines.join('\n');
}

// ── Generate Map TS file ──
function generateMapFile(langCode, pairs) {
    const lines = [
        `// Text block translations: [Spanish, ${langCode.toUpperCase()}]`,
        `export const ${langCode}Map: [string, string][] = [`
    ];

    for (const [es, translated] of pairs) {
        const escapedEs = es.replace(/"/g, '\\"');
        const escapedTl = translated.replace(/"/g, '\\"');
        lines.push(`    ["${escapedEs}", "${escapedTl}"],`);
    }

    lines.push('];');
    lines.push('');
    return lines.join('\n');
}

// ── Main ──
async function main() {
    const targetLang = process.argv[2] || 'yua'; // yua = Maya Yucateco, nah = Náhuatl
    const langCodeMap = {
        'yua': { code: 'maya', name: 'Maya Yucateco', gtCode: 'yua' },
        'nah': { code: 'nah', name: 'Náhuatl', gtCode: 'nah' },
    };

    const langInfo = langCodeMap[targetLang];
    if (!langInfo) {
        console.error(`Unknown language: ${targetLang}. Use: yua (Maya) or nah (Náhuatl)`);
        process.exit(1);
    }

    console.log(`\n🌍 Generando traducciones al ${langInfo.name}...\n`);

    // 1. Translate UI dictionary
    const esDict = readSpanishDict();
    const translatedDict = {};
    const keys = Object.keys(esDict);

    console.log(`📋 Traduciendo ${keys.length} cadenas de UI...`);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const esText = esDict[key];
        const translated = await translateText(esText, langInfo.gtCode);
        translatedDict[key] = translated;
        console.log(`  [${i + 1}/${keys.length}] "${esText}" → "${translated}"`);
        await sleep(300); // Rate limit
    }

    // 2. Translate text blocks (from nahMap as source for Spanish text)
    const nahPairs = readNahMap();
    const translatedPairs = [];

    console.log(`\n📝 Traduciendo ${nahPairs.length} bloques de texto...`);
    for (let i = 0; i < nahPairs.length; i++) {
        const [esText] = nahPairs[i];
        const translated = await translateText(esText, langInfo.gtCode);
        translatedPairs.push([esText, translated]);
        if (i % 10 === 0) {
            console.log(`  [${i + 1}/${nahPairs.length}] Progreso...`);
        }
        await sleep(300);
    }

    // 3. Write files
    const dictPath = join(__dirname, `../src/data/diccionarios/${langInfo.code}.ts`);
    const mapPath = join(__dirname, `../src/data/diccionarios/${langInfo.code}Map.ts`);

    writeFileSync(dictPath, generateDictFile(langInfo.code, langInfo.name, translatedDict));
    writeFileSync(mapPath, generateMapFile(langInfo.code, translatedPairs));

    console.log(`\n✅ Archivos generados:`);
    console.log(`   📄 ${dictPath}`);
    console.log(`   📄 ${mapPath}`);
    console.log(`\n⚠️  Revisa las traducciones — Google Translate no es perfecto para lenguas indígenas.\n`);
}

main().catch(console.error);
