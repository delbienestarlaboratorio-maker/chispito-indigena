// Script para generar las entradas GRADOS_CONTENIDO desde los JSON de ejercicios
// node scripts/generar-grados-contenido.js

const fs = require('fs');
const path = require('path');

const EXERCISES_DIR = path.join(__dirname, '..', 'src', 'data', 'exercises');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'content-grados-superiores.ts');

const GRADOS_CONFIG = {
    'preescolar-1': { nombre: '1° Preescolar', emoji: '🌱', nivel: 'preescolar' },
    'preescolar-2': { nombre: '2° Preescolar', emoji: '🌼', nivel: 'preescolar' },
    'primaria-4': { nombre: '4° Primaria', emoji: '🚀', nivel: 'primaria' },
    'primaria-5': { nombre: '5° Primaria', emoji: '⭐', nivel: 'primaria' },
    'primaria-6': { nombre: '6° Primaria', emoji: '🌟', nivel: 'primaria' },
    'secundaria-1': { nombre: '1° Secundaria', emoji: '📘', nivel: 'secundaria' },
    'secundaria-2': { nombre: '2° Secundaria', emoji: '📗', nivel: 'secundaria' },
    'secundaria-3': { nombre: '3° Secundaria', emoji: '🎓', nivel: 'secundaria' },
};

const MATERIAS_CONFIG = {
    matematicas: { nombre: 'Matemáticas', emoji: '📐', color: '#3B82F6' },
    espanol: { nombre: 'Español', emoji: '📚', color: '#22C55E' },
    ciencias: { nombre: 'Ciencias', emoji: '🔬', color: '#10B981' },
    historia: { nombre: 'Historia', emoji: '🏛️', color: '#F59E0B' },
    geografia: { nombre: 'Geografía', emoji: '🌎', color: '#06B6D4' },
    civica: { nombre: 'Cívica y Ética', emoji: '⚖️', color: '#8B5CF6' },
    artes: { nombre: 'Educación Artística', emoji: '🎨', color: '#EC4899' },
    educacion_fisica: { nombre: 'Educación Física', emoji: '⚽', color: '#F97316' },
    formacion: { nombre: 'Formación y Valores', emoji: '🤝', color: '#14B8A6' },
    ingles: { nombre: 'Inglés', emoji: '🇺🇸', color: '#6366F1' },
    tecnologia: { nombre: 'Tecnología', emoji: '💻', color: '#64748B' },
};

function getMesesForBloque(bloque, totalBloques) {
    const meses = [
        'Agosto – Septiembre',
        'Octubre – Noviembre',
        'Diciembre – Enero',
        'Febrero – Marzo',
        'Abril – Junio',
        'Mayo – Junio',
        'Junio',
    ];
    return meses[bloque - 1] || `Bloque ${bloque}`;
}

let output = `// ============================================================
// GRADOS SUPERIORES — Contenido generado automáticamente
// Generado desde los JSON de ejercicios de src/data/exercises
// ============================================================
import type { GradoContenido } from './content-primaria';

`;

const gradosExport = {};

for (const [gradoSlug, gradoMeta] of Object.entries(GRADOS_CONFIG)) {
    const gradoDir = path.join(EXERCISES_DIR, gradoSlug);
    if (!fs.existsSync(gradoDir)) {
        console.warn(`⚠️  No existe directorio para ${gradoSlug}`);
        continue;
    }

    const materias = {};
    const materiaDirs = fs.readdirSync(gradoDir).filter(f => fs.statSync(path.join(gradoDir, f)).isDirectory());

    for (const materiaSlug of materiaDirs) {
        const materiaConfig = MATERIAS_CONFIG[materiaSlug];
        if (!materiaConfig) continue;

        const materiaDir = path.join(gradoDir, materiaSlug);
        const bloqueFiles = fs.readdirSync(materiaDir)
            .filter(f => f.endsWith('.json'))
            .sort((a, b) => {
                const numA = parseInt(a.replace(/\D/g, ''));
                const numB = parseInt(b.replace(/\D/g, ''));
                return numA - numB;
            });

        const bloques = bloqueFiles.map((file, idx) => {
            const bloque = idx + 1;
            const json = JSON.parse(fs.readFileSync(path.join(materiaDir, file), 'utf-8'));
            return {
                bloque,
                nombre: json.nombre || `Bloque ${bloque}`,
                meses: getMesesForBloque(bloque, bloqueFiles.length),
                totalEjercicios: json.totalEjercicios || (json.ejercicios ? json.ejercicios.length : 8),
            };
        });

        if (bloques.length > 0) {
            materias[materiaSlug] = {
                ...materiaConfig,
                materia: materiaSlug,
                bloques,
            };
        }
    }

    const varName = gradoSlug.replace(/-(\d)/g, '_$1').toUpperCase().replace(/-/g, '_');
    gradosExport[gradoSlug] = varName;

    const bloquesTS = (bloques) => bloques.map(b => `        {
            bloque: ${b.bloque},
            nombre: ${JSON.stringify(b.nombre)},
            meses: ${JSON.stringify(b.meses)},
            enClase: [],
            guiaPapa: { intro: "", comoExplicar: [], truco: "", error_comun: "", actividad_casa: "" },
            guiaMaestro: { objetivo: "", competencia: "" },
            keywords: [],
        }`).join(',\n');

    const materiasTS = Object.entries(materias).map(([mat, m]) => `    ${mat}: {
        materia: ${JSON.stringify(m.materia)},
        nombre: ${JSON.stringify(m.nombre)},
        emoji: ${JSON.stringify(m.emoji)},
        color: ${JSON.stringify(m.color)},
        bloques: [
${bloquesTS(m.bloques)}
        ],
    }`).join(',\n');

    output += `export const ${varName}: GradoContenido = {
    grado: ${JSON.stringify(gradoSlug)},
    nombre: ${JSON.stringify(gradoMeta.nombre)},
    emoji: ${JSON.stringify(gradoMeta.emoji)},
    materias: {\n${materiasTS}\n    },
};\n\n`;

    console.log(`✅ ${gradoSlug}: ${Object.keys(materias).length} materias generadas`);
}

// Append to GRADOS_CONTENIDO export
output += `// Exportación para agregar a GRADOS_CONTENIDO
export const GRADOS_SUPERIORES: Record<string, GradoContenido> = {\n`;
for (const [slug, varName] of Object.entries(gradosExport)) {
    output += `    "${slug}": ${varName},\n`;
}
output += `};\n`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
console.log(`\n✅ Escrito en: ${OUTPUT_FILE}`);
