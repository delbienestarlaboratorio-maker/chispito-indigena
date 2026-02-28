/**
 * patch-kinder-visuals.js
 * Añade campo "visual" a los ejercicios de kinder y preescolar
 * para mostrar emojis gigantes en el KinderExercisePlayer
 */
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');
const GRADOS_PREESCOLAR = ['kinder', 'preescolar-1', 'preescolar-2'];

// Mapa de palabras clave → emoji visual
const VISUAL_MAP = [
    // Manos y dedos
    { keywords: ['mano', 'dedos', 'finger'], visual: '🖐️' },
    { keywords: ['dos manos', 'ambas manos'], visual: '🙌' },
    // Conteo de objetos
    { keywords: ['manzana', 'manzanas'], visual: '🍎' },
    { keywords: ['perro', 'perritos', 'perros'], visual: '🐶' },
    { keywords: ['gato', 'gatitos', 'gatos'], visual: '🐱' },
    { keywords: ['pez', 'peces', 'pescado'], visual: '🐟' },
    { keywords: ['pájaro', 'pájaros', 'ave', 'aves'], visual: '🐦' },
    { keywords: ['pelota', 'pelotas'], visual: '⚽' },
    { keywords: ['estrella', 'estrellas'], visual: '⭐' },
    { keywords: ['corazón', 'corazones'], visual: '❤️' },
    { keywords: ['flor', 'flores'], visual: '🌸' },
    { keywords: ['árbol', 'árboles'], visual: '🌳' },
    { keywords: ['sol', 'soles'], visual: '☀️' },
    { keywords: ['luna', 'lunas'], visual: '🌙' },
    { keywords: ['nube', 'nubes'], visual: '☁️' },
    { keywords: ['casa', 'casas'], visual: '🏠' },
    { keywords: ['libro', 'libros'], visual: '📚' },
    { keywords: ['lápiz', 'lápices'], visual: '✏️' },
    { keywords: ['auto', 'carro', 'carros', 'autos'], visual: '🚗' },
    { keywords: ['tren', 'trenes'], visual: '🚂' },
    // Colores
    { keywords: ['rojo', 'rojas', 'rojos'], visual: '🔴' },
    { keywords: ['azul', 'azules'], visual: '🔵' },
    { keywords: ['verde', 'verdes'], visual: '🟢' },
    { keywords: ['amarillo', 'amarillas'], visual: '🟡' },
    { keywords: ['naranja', 'naranjas'], visual: '🟠' },
    // Números y operaciones
    { keywords: ['suma', 'sumar', 'más', '+'], visual: '➕' },
    { keywords: ['resta', 'restar', 'menos', '-'], visual: '➖' },
    // Figuras geométricas
    { keywords: ['círculo', 'círculos'], visual: '⭕' },
    { keywords: ['triángulo', 'triángulos'], visual: '🔺' },
    { keywords: ['cuadrado', 'cuadrados', 'rectángulo'], visual: '🟦' },
    // Naturaleza
    { keywords: ['agua', 'lluvia'], visual: '💧' },
    { keywords: ['animal', 'animales', 'zoo'], visual: '🦁' },
    // ABC / letras
    { keywords: ['letra', 'letras', 'vocal', 'vocales', 'abc'], visual: '🔤' },
    { keywords: ['palabra', 'palabras'], visual: '📝' },
    // Emociones
    { keywords: ['feliz', 'alegre', 'contento', 'felicidad'], visual: '😊' },
    { keywords: ['triste', 'tristeza'], visual: '😢' },
    // Default por materia
    { keywords: ['número', 'números', 'contar', 'conteo', 'cuánto', 'cuántos'], visual: '🔢' },
    { keywords: ['grande', 'pequeño', 'mayor', 'menor', 'más grande', 'más pequeño'], visual: '📏' },
];

function detectarVisual(pregunta) {
    const p = pregunta.toLowerCase();
    for (const { keywords, visual } of VISUAL_MAP) {
        if (keywords.some(k => p.includes(k))) {
            return visual;
        }
    }
    return null;
}

// Función para añadir visual a cada ejercicio en un array
function patchEjercicios(ejs) {
    return ejs.map(e => {
        if (e.visual) return e; // ya tiene visual, saltar

        // Si ya tiene emojis en pregunta tipo 🐶🐶🐶 → detectar automáticamente
        const emojiMatch = (e.pregunta || '').match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic}){2,}/u);
        if (emojiMatch) return { ...e, visual: emojiMatch[0] };

        // Buscar por palabras clave
        const visual = detectarVisual(e.pregunta || '');
        if (visual) return { ...e, visual, visualAnimado: true };

        return e;
    });
}

let patchedFiles = 0;
let patchedEjercicios = 0;

GRADOS_PREESCOLAR.forEach(grado => {
    const gradoDir = path.join(BASE, grado);
    if (!fs.existsSync(gradoDir)) return;

    fs.readdirSync(gradoDir).forEach(materia => {
        const materiaDir = path.join(gradoDir, materia);
        if (!fs.statSync(materiaDir).isDirectory()) return;

        fs.readdirSync(materiaDir)
            .filter(f => f.endsWith('.json') && f !== 'indice.json')
            .forEach(archivo => {
                const filePath = path.join(materiaDir, archivo);
                try {
                    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

                    let modified = false;
                    if (data.ejercicios?.v1) {
                        const before = JSON.stringify(data.ejercicios.v1);
                        data.ejercicios.v1 = patchEjercicios(data.ejercicios.v1);
                        if (JSON.stringify(data.ejercicios.v1) !== before) modified = true;
                    }
                    if (data.ejercicios?.v2) {
                        const before = JSON.stringify(data.ejercicios.v2);
                        data.ejercicios.v2 = patchEjercicios(data.ejercicios.v2);
                        if (JSON.stringify(data.ejercicios.v2) !== before) modified = true;
                    }
                    if (data.ejercicios?.preview) {
                        data.ejercicios.preview = patchEjercicios(data.ejercicios.preview);
                    }

                    if (modified) {
                        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                        patchedFiles++;
                        const count = (data.ejercicios.v1?.length || 0) + (data.ejercicios.v2?.length || 0);
                        patchedEjercicios += count;
                        console.log(`✅ ${grado}/${materia}/${archivo} — ${count} ejs actualizados`);
                    }
                } catch (err) {
                    console.error(`❌ Error en ${filePath}: ${err.message}`);
                }
            });
    });
});

console.log(`\n🎨 PATCH COMPLETADO:`);
console.log(`  Archivos actualizados: ${patchedFiles}`);
console.log(`  Ejercicios con visual: ${patchedEjercicios}`);
