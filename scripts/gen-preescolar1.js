const fs = require('fs');
const path = require('path');
const EXERCISES_DIR = path.join(__dirname, '..', 'src', 'data', 'exercises');
const OUTPUT_FILE = path.join(__dirname, '..', 'src', 'data', 'content-preescolar1.ts');

const MATERIAS_CONFIG = {
    matematicas: { nombre: 'Matemáticas', emoji: '📐', color: '#3B82F6' },
    espanol: { nombre: 'Español', emoji: '📖', color: '#22C55E' },
    conocimiento: { nombre: 'Conocimiento del Medio', emoji: '🔍', color: '#EC4899' },
    artes: { nombre: 'Artes', emoji: '🎨', color: '#F43F5E' },
    educacion_fisica: { nombre: 'Educación Física', emoji: '🏃', color: '#F97316' },
};

function getMesesForBloque(b) {
    const meses = ['Agosto–Sept', 'Oct–Nov', 'Dic–Ene', 'Feb–Mar', 'Abr–Jun', 'Julio'];
    return meses[b - 1] || 'Mes';
}

const gradoDir = path.join(EXERCISES_DIR, 'preescolar-1');
const materias = {};
if (fs.existsSync(gradoDir)) {
    const materiaDirs = fs.readdirSync(gradoDir);

    for (const materiaSlug of materiaDirs) {
        const materiaConfig = MATERIAS_CONFIG[materiaSlug];
        if (!materiaConfig) continue;
        const materiaDir = path.join(gradoDir, materiaSlug);
        const bloqueFiles = fs.readdirSync(materiaDir).filter(f => f.endsWith('.json')).sort();
        const bloques = bloqueFiles.map((file, idx) => {
            const json = JSON.parse(fs.readFileSync(path.join(materiaDir, file), 'utf-8'));
            return {
                bloque: json.bloque || (idx + 1),
                nombre: json.nombre || ('Bloque ' + (idx + 1)),
                meses: getMesesForBloque(idx + 1),
                temas: json.temas || []
            };
        });
        materias[materiaSlug] = { ...materiaConfig, materia: materiaSlug, bloques };
    }
} else {
    console.log("No existe el directorio " + gradoDir);
}

const bloquesTS = (bloques) => bloques.map(b => `        {
            bloque: ${b.bloque},
            nombre: ${JSON.stringify(b.nombre)},
            meses: ${JSON.stringify(b.meses)},
            enClase: ${JSON.stringify(b.temas)},
            guiaPapa: { intro: "Explicación sencilla adaptada para niños de 3 a 5 años.", comoExplicar: ["Juega con ejemplos de la vida real.", "Usa objetos de la casa."], truco: "Paciencia y amor.", error_comun: "Apresurarlos.", actividad_casa: "Repasar jugando con movimiento y música." },
            guiaMaestro: { objetivo: "Desarrollo preescolar integral alineado a la Nueva Escuela Mexicana.", competencia: "Iniciación a saberes básicos." },
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

const output = `import type { GradoContenido } from './content-types';

export const PREESCOLAR_1_COMPLETE: GradoContenido = {
    grado: 'preescolar-1',
    nombre: '1° Preescolar',
    emoji: '🌱',
    materias: {
${materiasTS}
    },
};`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
console.log('Generado content-preescolar1.ts exitosamente');
