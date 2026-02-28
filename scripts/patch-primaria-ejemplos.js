/**
 * patch-primaria-ejemplos.js
 * Añade campo "ejemplo" a ejercicios de P3-4
 * y "datoClave"+"formula" a ejercicios de P5-6
 * basado en las palabras clave de cada pregunta/tema
 */
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');

const GRADOS_TIER2 = ['primaria-3', 'primaria-4'];
const GRADOS_TIER3 = ['primaria-5', 'primaria-6'];

// ─── Banco de ejemplos por tema (Tier 2: P3-4) ────────────────
const EJEMPLOS = [
    // Matemáticas
    { keywords: ['fracción', 'fracciones'], ejemplo: 'Ejemplo: 1/2 de una pizza 🍕 = la mitad.\nSi la pizza tiene 8 rebanadas, 1/2 = 4 rebanadas.' },
    { keywords: ['división', 'dividir'], ejemplo: 'Ejemplo: 12 ÷ 3 = 4\nPiensa: ¿cuántas veces cabe 3 en 12? 3, 6, 9, 12 → 4 veces.' },
    { keywords: ['multiplicación', 'multiplicar', 'tabla'], ejemplo: 'Ejemplo: 6 × 7 = 42\nRecuerda: 6 × 7 = 6 + 6 + 6 + 6 + 6 + 6 + 6 = 42.' },
    { keywords: ['perímetro'], ejemplo: 'Ejemplo: Cuadrado de lado 5 cm\nPerímetro = 4 × 5 = 20 cm.\n(Suma todos los lados)' },
    { keywords: ['área'], ejemplo: 'Ejemplo: Rectángulo 6 cm × 4 cm\nÁrea = 6 × 4 = 24 cm²\n(base × altura)' },
    { keywords: ['ángulo'], ejemplo: 'Tipos de ángulo:\n- Agudo: menos de 90° (esquina de papel doblado)\n- Recto: exactamente 90° (esquina de libro)\n- Obtuso: más de 90° (reloj marcando las 2)' },
    { keywords: ['decimal', 'decimales'], ejemplo: 'Ejemplo: 3.5 = 3 unidades y 5 décimas.\n3.5 > 3.2 porque 5 décimas > 2 décimas.' },
    // Español
    { keywords: ['sustantivo', 'sustantivos'], ejemplo: 'Sustantivos: personas, animales, lugares y cosas.\nEjemplo: niño 👦, perro 🐶, escuela 🏫, pelota ⚽.' },
    { keywords: ['verbo', 'verbos'], ejemplo: 'Verbos = acciones o estados.\nEjemplo: correr, saltar, pensar, ser, estar.\nEn oración: "El niño CORRE muy rápido."' },
    { keywords: ['adjetivo', 'adjetivos'], ejemplo: 'Adjetivos describen al sustantivo.\nEjemplo: la pelota ROJA, el perro GRANDE.\nPregunta: ¿Cómo es? ¿De qué color? ¿De qué tamaño?' },
    { keywords: ['sílaba', 'sílabas'], ejemplo: 'Divide la palabra golpeando la mesa:\nCA-SA = 2 sílabas\nZA-PA-TO = 3 sílabas\nELE-FAN-TE = 4 sílabas' },
    { keywords: ['acento', 'tilde', 'acentuación'], ejemplo: 'Agudas: acento en última sílaba → ca-FÉ, ma-MÁ\nGraves: acento en penúltima → CA-sa, AR-bol\nEsdrújulas: siempre acento en antepenúltima → MÚ-si-ca' },
    // Ciencias / Conocimiento
    { keywords: ['célula', 'células'], ejemplo: 'La célula es la unidad básica de vida.\nAnimal 🐾: tiene membrana, citoplasma y núcleo.\nVegetal 🌱: además tiene pared celular y cloroplastos.' },
    { keywords: ['fotosíntesis'], ejemplo: 'Fórmula simplificada:\n☀️ Luz + 💧 Agua + CO₂ → 🍬 Glucosa + O₂\nLas plantas usan el Sol para fabricar su comida.' },
    { keywords: ['sistema solar', 'planeta', 'planetas'], ejemplo: 'Orden desde el Sol:\n☿ Mercurio → ♀ Venus → 🌍 Tierra → ♂ Marte → ♃ Júpiter → ♄ Saturno → ♅ Urano → ♆ Neptuno' },
    // Historia / Geografía
    { keywords: ['independencia', 'independencia de méxico'], ejemplo: 'Línea del tiempo:\n1810 → Inicio (Grito de Dolores - Hidalgo)\n1813 → Solemnes Actas de la Independencia\n1821 → Consumación (Agustín de Iturbide)' },
    { keywords: ['continente', 'continentes'], ejemplo: '7 continentes:\n🌎 América · 🌍 Europa · 🌍 África · 🌏 Asia · 🌏 Oceanía · 🌐 Antártida\nTruco: A-AAEO → Amé,Asia,África,Europa,Oceanía' },
];

// ─── Banco de datos clave + fórmulas (Tier 3: P5-6) ──────────
const DATOS_CLAVE = [
    // Matemáticas avanzada
    { keywords: ['porcentaje', 'porcentajes', '%'], dato: 'Porcentaje: parte de 100. "25% de 80" = cuánto es 25 de cada 100 en 80.', formula: '% = (parte ÷ total) × 100' },
    { keywords: ['razón', 'proporción', 'proporcionalidad'], dato: 'Proporción: dos razones iguales. Si a/b = c/d, son proporcionales.', formula: 'a/b = c/d → a×d = b×c' },
    { keywords: ['interés', 'interés simple'], dato: 'Interés simple: ganancia constante sobre el capital inicial.', formula: 'I = C × r × t' },
    { keywords: ['volumen', 'cubo', 'prisma'], dato: 'Volumen del prisma recto = área de la base × altura.', formula: 'V = B × h' },
    { keywords: ['área del círculo', 'círculo'], dato: 'El área del círculo usa el número π ≈ 3.1416. El radio es la mitad del diámetro.', formula: 'A = π × r²' },
    { keywords: ['ecuación', 'ecuaciones'], dato: 'Ecuación: igualdad algebraica. Para resolver, aisla la variable haciendo lo mismo en ambos lados.', formula: 'ax + b = c → x = (c-b)/a' },
    { keywords: ['potencia', 'exponente'], dato: 'La potencia indica cuántas veces se multiplica la base por sí misma.', formula: 'aⁿ = a × a × ... × a (n veces)' },
    // Ciencias
    { keywords: ['velocidad', 'rapidez'], dato: 'Velocidad: relación entre distancia recorrida y tiempo empleado. Unidad: m/s o km/h.', formula: 'v = d / t' },
    { keywords: ['fuerza', 'newton'], dato: 'La Fuerza (Newton) = masa × aceleración. Ley de Newton.', formula: 'F = m × a' },
    { keywords: ['densidad'], dato: 'Densidad: cantidad de masa por unidad de volumen. El agua tiene densidad ≈ 1 g/cm³.', formula: 'ρ = m / V' },
    { keywords: ['fotosíntesis'], dato: 'La fotosíntesis convierte energía lumínica en energía química (glucosa). Ocurre en los cloroplastos.', formula: '6CO₂+ 6H₂O + luz → C₆H₁₂O₆+ 6O₂' },
    { keywords: ['ph', 'ácido', 'base', 'neutro'], dato: 'Escala de pH: 0-6 ácido, 7 neutro, 8-14 básico. El pH del estómago es ~2 (ácido).', formula: 'pH = -log[H⁺] · Agua pura = 7' },
    // Estadística
    { keywords: ['media', 'promedio', 'media aritmética'], dato: 'La media aritmética es la suma de todos los valores dividida entre el número de datos.', formula: 'x̄ = (x₁+x₂+...+xₙ) / n' },
    { keywords: ['probabilidad'], dato: 'Probabilidad: qué tan probable es un evento. Siempre entre 0 (imposible) y 1 (seguro).', formula: 'P = casos favorables / casos posibles' },
];

function buscarEjemplo(pregunta, tema) {
    const texto = ((pregunta || '') + ' ' + (tema || '')).toLowerCase();
    for (const { keywords, ejemplo } of EJEMPLOS) {
        if (keywords.some(k => texto.includes(k))) return ejemplo;
    }
    return null;
}

function buscarDatoClave(pregunta, tema) {
    const texto = ((pregunta || '') + ' ' + (tema || '')).toLowerCase();
    for (const { keywords, dato, formula } of DATOS_CLAVE) {
        if (keywords.some(k => texto.includes(k))) return { dato, formula };
    }
    return null;
}

function patchTier2(ejs) {
    return ejs.map(e => {
        if (e.ejemplo) return e;
        const ej = buscarEjemplo(e.pregunta, e.tema);
        if (ej) return { ...e, ejemplo: ej };
        return e;
    });
}

function patchTier3(ejs) {
    return ejs.map(e => {
        if (e.datoClave) return e;
        const dc = buscarDatoClave(e.pregunta, e.tema);
        if (dc) return { ...e, datoClave: dc.dato, formula: dc.formula };
        return e;
    });
}

let totalArchivos = 0;
let totalEjs = 0;

function procesarGrados(grados, patchFn) {
    grados.forEach(grado => {
        const gradoDir = path.join(BASE, grado);
        if (!fs.existsSync(gradoDir)) return;
        fs.readdirSync(gradoDir).forEach(materia => {
            const materiaDir = path.join(gradoDir, materia);
            if (!fs.statSync(materiaDir).isDirectory()) return;
            fs.readdirSync(materiaDir)
                .filter(f => f.endsWith('.json') && f !== 'indice.json')
                .forEach(archivo => {
                    const fp = path.join(materiaDir, archivo);
                    try {
                        const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
                        let modified = false;
                        (['v1', 'v2', 'preview']).forEach(tier => {
                            if (!data.ejercicios?.[tier]) return;
                            const antes = JSON.stringify(data.ejercicios[tier]);
                            data.ejercicios[tier] = patchFn(data.ejercicios[tier]);
                            if (JSON.stringify(data.ejercicios[tier]) !== antes) modified = true;
                        });
                        if (modified) {
                            fs.writeFileSync(fp, JSON.stringify(data, null, 2));
                            totalArchivos++;
                            totalEjs += (data.ejercicios.v1?.length || 0) + (data.ejercicios.v2?.length || 0);
                            console.log(`✅ ${grado}/${materia}/${archivo}`);
                        }
                    } catch (err) { console.error(`❌ ${fp}: ${err.message}`); }
                });
        });
    });
}

console.log('💡 Añadiendo ejemplos a P3-P4...');
procesarGrados(GRADOS_TIER2, patchTier2);

console.log('\n📖 Añadiendo datos clave a P5-P6...');
procesarGrados(GRADOS_TIER3, patchTier3);

console.log(`\n✨ COMPLETADO: ${totalArchivos} archivos, ~${totalEjs} ejercicios enriquecidos`);
