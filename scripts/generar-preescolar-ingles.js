const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');

// ══════════════════════════════════════════════════════════════════════
// PREESCOLAR 1° y 2° — Materias iguales que Kinder (4 materias)
// INGLÉS — Secundaria 1°, 2° y 3°
// ══════════════════════════════════════════════════════════════════════

const PLAN = {
    'preescolar-1': {
        materias: {
            matematicas: {
                temas: ['Contar del 1 al 5', 'Figuras básicas', 'Más y menos', 'Ordena objetos', 'Patrones simples'],
                bloques: [
                    { b: 1, nombre: 'Mis primeros números', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'Figuras y colores', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Contar y agrupar', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Comparar cantidades', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Patrones y secuencias', meses: 'Abril-Junio' },
                ]
            },
            espanol: {
                temas: ['Mi nombre', 'Vocales A E I', 'Imágenes y palabras', 'Escuchar cuentos', 'Mis primeras letras'],
                bloques: [
                    { b: 1, nombre: 'Hablo y escucho', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'Las vocales', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Palabras e imágenes', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Cuentos y rimas', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Mis primeras palabras escritas', meses: 'Abril-Junio' },
                ]
            },
            conocimiento: {
                temas: ['Mi cuerpo', 'Los colores', 'Los animales', 'La familia', 'La naturaleza'],
                bloques: [
                    { b: 1, nombre: 'Soy yo', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'Colores y formas', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Los animales', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Mi familia', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'La naturaleza', meses: 'Abril-Junio' },
                ]
            },
            artes: {
                temas: ['Pintar con dedos', 'Cantar canciones', 'Bailar', 'Dibujar libremente', 'Hacer manualidades'],
                bloques: [
                    { b: 1, nombre: 'Me expreso con colores', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'La música y yo', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Bailo y me muevo', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Dibujo y creo', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Construyo con mis manos', meses: 'Abril-Junio' },
                ]
            }
        }
    },
    'preescolar-2': {
        materias: {
            matematicas: {
                temas: ['Números del 1 al 10', 'Formas geométricas', 'Más, menos, igual', 'Orden y secuencias', 'Medición básica'],
                bloques: [
                    { b: 1, nombre: 'Números del 1 al 10', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'Figuras y cuerpos', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Más y menos', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Ordenar y comparar', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Mido y comparo', meses: 'Abril-Junio' },
                ]
            },
            espanol: {
                temas: ['Las vocales', 'Consonantes M P S', 'Sílabas simples', 'Palabras cortas', 'Oraciones simples'],
                bloques: [
                    { b: 1, nombre: 'Las vocales A, E, I, O, U', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'Mis primeras consonantes', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Sílabas simples', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Palabras cortas', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Oración sencilla', meses: 'Abril-Junio' },
                ]
            },
            conocimiento: {
                temas: ['Los sentidos', 'El tiempo y clima', 'Plantas y animales', 'La comunidad', 'Cuidar el planeta'],
                bloques: [
                    { b: 1, nombre: 'Mis 5 sentidos', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'El clima y las estaciones', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Plantas y animales', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Mi comunidad y vecinos', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Cuidamos la Tierra', meses: 'Abril-Junio' },
                ]
            },
            artes: {
                temas: ['Modelado con plastilina', 'Canciones y ritmos', 'Danza creativa', 'Cuento ilustrado', 'Teatro simple'],
                bloques: [
                    { b: 1, nombre: 'Modelado y escultura', meses: 'Agosto-Septiembre' },
                    { b: 2, nombre: 'Música y ritmo', meses: 'Octubre-Noviembre' },
                    { b: 3, nombre: 'Danza y movimiento', meses: 'Diciembre-Enero' },
                    { b: 4, nombre: 'Ilustro cuentos', meses: 'Febrero-Marzo' },
                    { b: 5, nombre: 'Teatro y dramatización', meses: 'Abril-Junio' },
                ]
            }
        }
    }
};

// INGLÉS para Secundaria
const INGLES_SECUNDARIA = {
    'secundaria-1': {
        bloques: [
            { b: 1, nombre: 'Greetings and Introductions', meses: 'Agosto-Septiembre', temas: ['Hello/Goodbye', 'My name is...', 'Numbers 1-100', 'Colors and adjectives'] },
            { b: 2, nombre: 'My School and Daily Routine', meses: 'Octubre-Noviembre', temas: ['School subjects', 'What time is it?', 'Daily activities', 'Present simple tense'] },
            { b: 3, nombre: 'Family and Home', meses: 'Diciembre-Enero', temas: ['Family members', 'Describing people', 'Rooms of the house', 'Possessives'] },
            { b: 4, nombre: 'Food and Health', meses: 'Febrero-Marzo', temas: ['Food vocabulary', 'I like/I don\'t like', 'Eating habits', 'Parts of the body'] },
            { b: 5, nombre: 'Free Time and Hobbies', meses: 'Abril-Junio', temas: ['Sports and games', 'Present continuous', 'Likes and interests', 'Weekend activities'] },
        ]
    },
    'secundaria-2': {
        bloques: [
            { b: 1, nombre: 'Past Experiences', meses: 'Agosto-Septiembre', temas: ['Simple past regular verbs', 'Simple past irregular verbs', 'Time expressions', 'Telling stories'] },
            { b: 2, nombre: 'Future Plans', meses: 'Octubre-Noviembre', temas: ['Going to (future)', 'Will for predictions', 'Future time expressions', 'Plans and intentions'] },
            { b: 3, nombre: 'Comparing Things', meses: 'Diciembre-Enero', temas: ['Comparatives', 'Superlatives', 'Describing differences', 'Expressing opinions'] },
            { b: 4, nombre: 'Environment and Nature', meses: 'Febrero-Marzo', temas: ['Environmental problems', 'Modal verbs (should/must)', 'Passive voice introduction', 'Recycling and sustainability'] },
            { b: 5, nombre: 'Technology and Communication', meses: 'Abril-Junio', temas: ['Technology vocabulary', 'Conditionals type 1', 'Internet and social media', 'Communicating online'] },
        ]
    },
    'secundaria-3': {
        bloques: [
            { b: 1, nombre: 'Science and Discoveries', meses: 'Agosto-Septiembre', temas: ['Science vocabulary', 'Passive voice', 'Relative clauses', 'Reporting discoveries'] },
            { b: 2, nombre: 'Rights and Responsibilities', meses: 'Octubre-Noviembre', temas: ['Human rights vocabulary', 'Modal verbs (should/ought to)', 'Expressing obligation', 'Civic discourse'] },
            { b: 3, nombre: 'Arts and Culture', meses: 'Diciembre-Enero', temas: ['Art vocabulary', 'Present perfect', 'Mexican and world culture', 'Appreciation and critique'] },
            { b: 4, nombre: 'Global Issues', meses: 'Febrero-Marzo', temas: ['Global problems', 'Conditionals type 2', 'Expressing hypotheses', 'Climate and poverty'] },
            { b: 5, nombre: 'My Future Career', meses: 'Abril-Junio', temas: ['Career vocabulary', 'Future perfect', 'Describing ambitions', 'Job interviews'] },
        ]
    }
};

// ── Banco de ejercicios de inglés ──
function getInglesEjercicios(grado, bloque) {
    const gradoNum = parseInt(grado.replace('secundaria-', ''));
    const bancos = {
        1: [
            { tipo: 'multiple_choice', pregunta: '¿Cómo se dice "Hola" en inglés?', opciones: ['Goodbye', 'Hello', 'Thank you', 'Please'], respuesta: 'Hello', explicacion: '"Hello" is how we say "Hola" in English. Other greetings: Hi, Good morning, Good afternoon.' },
            { tipo: 'fill_blank', pregunta: 'My ___ is Carlos. (Mi nombre es Carlos)', respuesta: 'name', explicacion: '"My name is..." means "Mi nombre es..." — this is how we introduce ourselves.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuánto es "fifteen" en español?', opciones: ['5', '14', '15', '50'], respuesta: '15', explicacion: '"Fifteen" = 15. Numbers: thirteen=13, fourteen=14, fifteen=15, sixteen=16...' },
            { tipo: 'true_false', pregunta: '"Red" is a color', respuesta: 'true', explicacion: 'Yes! "Red" means rojo. Colors: red, blue, green, yellow, orange, purple...' },
            { tipo: 'multiple_choice', pregunta: '¿Qué significa "I am a student"?', opciones: ['Yo tengo un estudiante', 'Yo soy un estudiante', 'Mi estudiante', 'Estudiante mío'], respuesta: 'Yo soy un estudiante', explicacion: '"I am" = "Yo soy". "I am a student" = Soy un estudiante.' },
            { tipo: 'fill_blank', pregunta: '_____ is my favorite color. (Mi color favorito es azul)', respuesta: 'Blue', explicacion: '"Blue" = azul. Colors: red=rojo, blue=azul, green=verde, yellow=amarillo.' },
        ],
        2: [
            { tipo: 'multiple_choice', pregunta: '"Yesterday I ___ to school." (Ayer fui a la escuela.)', opciones: ['go', 'goes', 'went', 'going'], respuesta: 'went', explicacion: '"Went" is the past tense of "go". Irregular verb: go → went → gone.' },
            { tipo: 'fill_blank', pregunta: 'I am ___ to visit Paris next summer. (Voy a visitar París)', respuesta: 'going', explicacion: '"Going to + verb" expresses future plans. "I am going to visit Paris."' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el comparativo de "big"?', opciones: ['more big', 'biggest', 'bigger', 'most big'], respuesta: 'bigger', explicacion: 'For short adjectives: add -er for comparatives. Big → bigger. Ex: "Mexico is bigger than Canada."' },
            { tipo: 'true_false', pregunta: '"Will" se usa para hacer predicciones en inglés', respuesta: 'true', explicacion: 'Yes! "Will" expresses predictions and spontaneous decisions. "It will rain tomorrow."' },
            { tipo: 'fill_blank', pregunta: 'Mexico ___ bigger than Guatemala. (México ES más grande)', respuesta: 'is', explicacion: 'We use "is" for third person singular in present tense. Mexico + is (= es).' },
            { tipo: 'multiple_choice', pregunta: '"You should recycle" significa...', opciones: ['Reciclas', 'Deberías reciclar', 'Reciclé', 'Reciclando'], respuesta: 'Deberías reciclar', explicacion: '"Should" expresses advice/obligation: "You should..." = Deberías...' },
        ],
        3: [
            { tipo: 'multiple_choice', pregunta: '"The wheel was invented by humans." ¿Qué forma verbal usa?', opciones: ['Activa', 'Pasiva', 'Progresiva', 'Perfecta'], respuesta: 'Pasiva', explicacion: 'Passive voice: Subject + was/were + past participle. "Was invented" = voz pasiva.' },
            { tipo: 'fill_blank', pregunta: 'If I had more time, I ___ study more. (Condicional 2)', respuesta: 'would', explicacion: 'Conditional type 2: "If + past simple, would + infinitive". For hypothetical situations.' },
            { tipo: 'multiple_choice', pregunta: '"I have lived in Mexico for 15 years." ¿Qué tiempo es?', opciones: ['Past simple', 'Present perfect', 'Future', 'Past continuous'], respuesta: 'Present perfect', explicacion: '"Have/has + past participle" = Present perfect. It connects past to present: "I have lived here..."' },
            { tipo: 'true_false', pregunta: 'A job interview often starts with "Tell me about yourself"', respuesta: 'true', explicacion: '"Tell me about yourself" is a classic opener in English job interviews.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el significado de "career"?', opciones: ['Auto de carreras', 'Trayectoria profesional', 'Carretera', 'Correr'], respuesta: 'Trayectoria profesional', explicacion: '"Career" = carrera profesional/trayectoria. Not "carretera" (that\'s highway) or "carro" (car).' },
        ]
    };

    const banco = bancos[gradoNum] || bancos[1];
    return banco;
}

// ── Banco de ejercicios de Preescolar ──
function getPreescolarEjercicios(grado, materia, temas) {
    const gradoNum = grado === 'preescolar-1' ? 1 : 2;

    const bancos = {
        matematicas: [
            { tipo: 'visual_count', pregunta: '¿Cuántas ⭐ hay? ⭐⭐⭐', opciones: ['1', '2', '3', '4'], respuesta: '3', explicacion: 'Hay 3 estrellas. Contamos: 1, 2, 3.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál número es el 3?', opciones: ['2', '3', '4', '5'], respuesta: '3', explicacion: 'El 3 son tres objetos: 🍎🍎🍎' },
            { tipo: 'true_false', pregunta: 'El cuadrado tiene 4 lados', respuesta: 'true', explicacion: '¡Sí! El cuadrado tiene 4 lados iguales.' },
            { tipo: 'fill_blank', pregunta: '1, 2, ___, 4, 5', respuesta: '3', explicacion: 'La secuencia es 1,2,3,4,5. El 3 va entre el 2 y el 4.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué figura es redonda?', opciones: ['Cuadrado', 'Triángulo', 'Círculo', 'Rectángulo'], respuesta: 'Círculo', explicacion: 'El círculo es completamente redondo, sin esquinas.' },
            { tipo: 'fill_blank', pregunta: '2 + 1 = ___', respuesta: '3', explicacion: '2 manzanas más 1 manzana = 3 manzanas.' },
        ],
        espanol: [
            { tipo: 'multiple_choice', pregunta: '¿Cuál es una vocal?', opciones: ['B', 'M', 'A', 'T'], respuesta: 'A', explicacion: 'Las vocales son: A, E, I, O, U. La A es vocal.' },
            { tipo: 'fill_blank', pregunta: 'MAMÁ empieza con la letra ___', respuesta: 'M', explicacion: 'M-A-M-Á. La primera letra es la M.' },
            { tipo: 'true_false', pregunta: '"PERRO" tiene 5 letras', respuesta: 'true', explicacion: 'P-E-R-R-O. Sí, tiene 5 letras.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántas vocales hay en "CASA"?', opciones: ['1', '2', '3', '4'], respuesta: '2', explicacion: 'C-A-S-A. Las vocales son: A y A. Hay 2 vocales.' },
            { tipo: 'fill_blank', pregunta: 'Las vocales son: A, E, ___, O, U', respuesta: 'I', explicacion: 'Las 5 vocales son: A, E, I, O, U.' },
        ],
        conocimiento: [
            { tipo: 'multiple_choice', pregunta: '¿Con qué sentido huelo las flores?', opciones: ['La vista', 'El tacto', 'El olfato', 'El oído'], respuesta: 'El olfato', explicacion: 'El olfato es el sentido de la nariz. Con él olemos las flores.' },
            { tipo: 'fill_blank', pregunta: 'Tenemos ___ sentidos (cinco)', respuesta: '5', explicacion: 'Los 5 sentidos: vista, oído, olfato, gusto y tacto.' },
            { tipo: 'true_false', pregunta: 'Los peces viven en el agua', respuesta: 'true', explicacion: '¡Correcto! Los peces son animales acuáticos.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué necesitan las plantas para crecer?', opciones: ['Solo tierra', 'Agua y sol', 'Solo agua', 'Solo aire'], respuesta: 'Agua y sol', explicacion: 'Las plantas necesitan agua, luz del sol y tierra para crecer.' },
            { tipo: 'fill_blank', pregunta: 'El sol brilla de ___', respuesta: 'día', explicacion: 'El sol sale de día y de noche está la luna y las estrellas.' },
        ],
        artes: [
            { tipo: 'multiple_choice', pregunta: '¿Qué usamos para pintar?', opciones: ['Un cuchillo', 'Un pincel', 'Una regla', 'Un eraser'], respuesta: 'Un pincel', explicacion: 'El pincel se moja con pintura para crear belleza en el papel.' },
            { tipo: 'fill_blank', pregunta: 'La música tiene ___ y melodía', respuesta: 'ritmo', explicacion: 'La música tiene ritmo (el pulso) y melodía (las notas).' },
            { tipo: 'true_false', pregunta: 'Rojo y azul juntos forman morado', respuesta: 'true', explicacion: '¡Sí! Mezclar rojo + azul = morado (violeta).' },
            { tipo: 'multiple_choice', pregunta: '¿Con qué podemos hacer esculturas?', opciones: ['Agua', 'Plastilina', 'Luz', 'Aire'], respuesta: 'Plastilina', explicacion: 'La plastilina nos permite moldear y crear formas en 3D.' },
            { tipo: 'fill_blank', pregunta: 'Bailar es moverse al ritmo de la ___', respuesta: 'música', explicacion: 'La danza es el arte de moverse siguiendo la música.' },
        ]
    };

    return bancos[materia] || bancos.conocimiento;
}

// ── Generar archivo JSON ──
function generarBloque(grado, materia, b, nombre, meses, temas, getEjs) {
    const dir = path.join(BASE, grado, materia);
    const archivo = path.join(dir, `bloque-${b}.json`);

    if (fs.existsSync(archivo)) {
        console.log(`⏭️  Ya existe: ${grado}/${materia}/bloque-${b}`);
        return 0;
    }

    const ejs = getEjs();
    const mid = Math.ceil(ejs.length / 2);
    const pfx = `${grado}-${materia}-b${b}`;
    let c = 1;

    const fmt = (e, nivel) => ({
        id: `${pfx}-${String(c++).padStart(3, '0')}`,
        tema: Array.isArray(temas) ? temas[(c - 1) % temas.length] : temas,
        tipo: e.tipo,
        nivel,
        pregunta: e.pregunta,
        ...(e.opciones ? { opciones: e.opciones } : {}),
        respuestaCorrecta: e.respuesta,
        explicacion: e.explicacion,
    });

    const v1 = ejs.slice(0, mid).map(e => fmt(e, 'v1'));
    const v2 = ejs.slice(mid).map(e => fmt(e, 'v2'));

    const data = {
        grado, materia, bloque: b, nombre, meses, temas,
        totalEjercicios: v1.length + v2.length,
        ejercicios: { v1, v2, preview: [...v1.slice(0, 2), ...v2.slice(0, 1)] },
        generado: new Date().toISOString(),
        version: '2.0',
    };

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
    console.log(`✅ ${grado}/${materia}/bloque-${b} — ${data.totalEjercicios} ejs`);
    return data.totalEjercicios;
}

// ── Ejecutar Preescolar ──
let total = 0;
Object.entries(PLAN).forEach(([grado, config]) => {
    Object.entries(config.materias).forEach(([materia, mc]) => {
        mc.bloques.forEach(({ b, nombre, meses }) => {
            total += generarBloque(grado, materia, b, nombre, meses, mc.temas,
                () => getPreescolarEjercicios(grado, materia, mc.temas));
        });
    });
});

// ── Ejecutar Inglés Secundaria ──
Object.entries(INGLES_SECUNDARIA).forEach(([grado, config]) => {
    config.bloques.forEach(({ b, nombre, meses, temas }) => {
        total += generarBloque(grado, 'ingles', b, nombre, meses, temas,
            () => getInglesEjercicios(grado, b));
    });
});

console.log(`\n🎉 COMPLETADO: ${total} ejercicios nuevos generados`);

// Conteo final
let grandTotal = 0;
fs.readdirSync(BASE).forEach(g => {
    let gt = 0;
    const gDir = path.join(BASE, g);
    fs.readdirSync(gDir).forEach(m => {
        try {
            fs.readdirSync(path.join(gDir, m)).filter(f => f.endsWith('.json') && f !== 'indice.json').forEach(f => {
                try { gt += JSON.parse(fs.readFileSync(path.join(gDir, m, f))).totalEjercicios || 0; } catch { }
            });
        } catch { }
    });
    console.log(`  ${g}: ${gt} ejs`);
    grandTotal += gt;
});
console.log(`📊 TOTAL: ${grandTotal} ejercicios`);
