const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');
const TARGET_MIN = 25; // Objetivo: 25 ejercicios por bloque

// ══════════════════════════════════════════════════════════════════════
// BANCO MASIVO AMPLIADO — Ejercicios por materia y nivel
// ══════════════════════════════════════════════════════════════════════

// Genera ejercicios extra por materia adaptados al nivel del grado
function getExtras(grado, materia, temas, currentCount) {
    const needed = Math.max(TARGET_MIN - currentCount, 0);
    if (needed <= 0) return [];

    const esKinder = grado === 'kinder';
    const gradoNum = parseInt(grado.replace('primaria-', '').replace('secundaria-', '')) || 1;
    const esSecundaria = grado.includes('secundaria');

    const pools = {
        matematicas: [
            ...getMathPool(gradoNum, esKinder, esSecundaria),
        ],
        espanol: [
            ...getEspanolPool(gradoNum, esKinder, esSecundaria),
        ],
        ciencias: getCienciasPool(temas),
        historia: getHistoriaPool(temas, gradoNum, esSecundaria),
        geografia: getGeografiaPool(temas),
        formacion: getFormacionPool(gradoNum, esSecundaria),
        civica: getFormacionPool(gradoNum, esSecundaria),
        conocimiento: getConocimientoPool(),
        artes: getArtesPool(),
    };

    const pool = pools[materia] || pools.historia;
    // Repetir el pool si es necesario para tener suficientes
    let result = [];
    while (result.length < needed + 5) result = [...result, ...pool];
    return result.slice(0, needed + 3);
}

function getMathPool(nivel, esKinder, esSecundaria) {
    if (esKinder) return [
        { tipo: 'visual_count', pregunta: '¿Cuántos 🌟 hay? 🌟🌟🌟🌟🌟', opciones: ['3', '4', '5', '6'], respuesta: '5', explicacion: 'Hay 5 estrellas. Cuenta: 1,2,3,4,5.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué número viene ANTES del 8?', opciones: ['6', '7', '9', '10'], respuesta: '7', explicacion: '7 viene antes del 8 en la secuencia de números.' },
        { tipo: 'fill_blank', pregunta: '3 + 1 = ___', respuesta: '4', explicacion: '3 objetos más 1 objeto son 4 objetos.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuántos lados tiene un triángulo?', opciones: ['2', '3', '4', '5'], respuesta: '3', explicacion: 'El triángulo tiene 3 lados y 3 vértices.' },
        { tipo: 'true_false', pregunta: '4 es mayor que 2', respuesta: 'true', explicacion: 'Sí, 4 > 2. El 4 viene después del 2 en la recta de números.' },
        { tipo: 'fill_blank', pregunta: '2, 4, 6, 8, ___', respuesta: '10', explicacion: 'Contamos de 2 en 2. Después del 8 viene el 10.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué figura es redonda?', opciones: ['Cuadrado', 'Triángulo', 'Círculo', 'Rectángulo'], respuesta: 'Círculo', explicacion: 'El círculo es la figura perfectamente redonda, sin lados ni esquinas.' },
    ];

    if (esSecundaria) return [
        { tipo: 'multiple_choice', pregunta: '¿Cuál es la solución de 2x - 4 = 10?', opciones: ['5', '6', '7', '8'], respuesta: '7', explicacion: '2x = 14, x = 7.' },
        { tipo: 'fill_blank', pregunta: 'El volumen de un cubo de lado 3 es ___', respuesta: '27', explicacion: 'V = lado³ = 3³ = 27 unidades cúbicas.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué es el Teorema de Pitágoras?', opciones: ['a + b = c', 'a² + b² = c²', 'a × b = c²', 'a/b = c'], respuesta: 'a² + b² = c²', explicacion: 'En un triángulo rectángulo: la suma de los cuadrados de los catetos = cuadrado hipotenusa.' },
        { tipo: 'true_false', pregunta: 'Un número primo solo es divisible entre 1 y sí mismo', respuesta: 'true', explicacion: 'Correcto. Ejemplos de primos: 2, 3, 5, 7, 11, 13...' },
        { tipo: 'fill_blank', pregunta: 'La pendiente de y=5x-3 es ___', respuesta: '5', explicacion: 'En y=mx+b, m es la pendiente. Aquí m=5.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuánto es log₁₀(1000)?', opciones: ['2', '3', '4', '10'], respuesta: '3', explicacion: 'log₁₀(1000) = 3 porque 10³ = 1000.' },
        { tipo: 'fill_blank', pregunta: 'P(cara en moneda) = ___', respuesta: '0.5', explicacion: 'Hay 1 cara de 2 posibles: P = 1/2 = 0.5 = 50%.' },
    ];

    const byNivel = {
        1: [
            { tipo: 'fill_blank', pregunta: '5 + 3 = ___', respuesta: '8', explicacion: '5 más 3 son 8.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántos días tiene una semana?', opciones: ['5', '6', '7', '8'], respuesta: '7', explicacion: '7 días: lunes, martes, miércoles, jueves, viernes, sábado y domingo.' },
            { tipo: 'true_false', pregunta: '10 > 9', respuesta: 'true', explicacion: '10 es mayor que 9. En la recta, el 10 está más a la derecha.' },
            { tipo: 'fill_blank', pregunta: '20 - 8 = ___', respuesta: '12', explicacion: '20 minus 8: bajamos de 20 hasta 12 contando hacia atrás 8 veces.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántos meses tiene un año?', opciones: ['10', '11', '12', '13'], respuesta: '12', explicacion: '12 meses: enero a diciembre.' },
            { tipo: 'fill_blank', pregunta: '3 × 4 = ___', respuesta: '12', explicacion: '3 grupos de 4: 4+4+4 = 12.' },
        ],
        2: [
            { tipo: 'fill_blank', pregunta: '48 + 35 = ___', respuesta: '83', explicacion: '8+5=13 (llevo 1), 4+3+1=8. Resultado: 83.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuánto es la mitad de 60?', opciones: ['20', '30', '40', '50'], respuesta: '30', explicacion: 'La mitad de 60 = 60÷2 = 30.' },
            { tipo: 'true_false', pregunta: '7 × 8 = 56', respuesta: 'true', explicacion: 'Sí, 7 × 8 = 56. Tablas del 7!' },
            { tipo: 'fill_blank', pregunta: '100 ÷ 4 = ___', respuesta: '25', explicacion: '100 ÷ 4 = 25. Verificamos: 4 × 25 = 100.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántos cm tiene 1 km?', opciones: ['100', '1,000', '10,000', '100,000'], respuesta: '100,000', explicacion: '1 km = 1,000 m = 100,000 cm.' },
        ],
        3: [
            { tipo: 'fill_blank', pregunta: '1/2 + 1/4 = ___', respuesta: '3/4', explicacion: '2/4 + 1/4 = 3/4. Convertimos 1/2 a 2/4 para poder sumar.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el 50% de 80?', opciones: ['20', '30', '40', '50'], respuesta: '40', explicacion: '50% = 1/2. La mitad de 80 = 40.' },
            { tipo: 'true_false', pregunta: 'El área de un triángulo es base×altura÷2', respuesta: 'true', explicacion: 'Correcto. A = (b × h) / 2.' },
            { tipo: 'fill_blank', pregunta: '√36 = ___', respuesta: '6', explicacion: '6 × 6 = 36, entonces √36 = 6.' },
            { tipo: 'multiple_choice', pregunta: '123² es aproximadamente...', opciones: ['1000', '5000', '12000', '15000'], respuesta: '15000', explicacion: '123² = 15,129. ~15,000.' },
        ],
    };

    return byNivel[Math.min(nivel, 3)] || byNivel[2];
}

function getEspanolPool(nivel, esKinder, esSecundaria) {
    if (esKinder) return [
        { tipo: 'multiple_choice', pregunta: '¿Con qué letra empieza "MAMÁ"?', opciones: ['A', 'M', 'P', 'S'], respuesta: 'M', explicacion: 'M-A-M-Á. La primera letra es M de mamá, mariposa, mago.' },
        { tipo: 'fill_blank', pregunta: 'PA-PÁ tiene ___ sílabas', respuesta: '2', explicacion: 'PA y PÁ son las 2 sílabas de la palabra PAPÁ.' },
        { tipo: 'true_false', pregunta: 'La "A" es una vocal', respuesta: 'true', explicacion: 'Sí! Las vocales son: A, E, I, O, U.' },
        { tipo: 'multiple_choice', pregunta: '"GATO" empieza con la letra...', opciones: ['C', 'G', 'J', 'K'], respuesta: 'G', explicacion: 'G-A-T-O. Primera letra G, de gato, globo, guitarra.' },
        { tipo: 'fill_blank', pregunta: 'La vocal que suena en "OSITO" al inicio es ___', respuesta: 'O', explicacion: 'O-SI-TO. La O es vocal y suena al principio.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuántas letras tiene la palabra CASA?', opciones: ['3', '4', '5', '6'], respuesta: '4', explicacion: 'C-A-S-A = 4 letras.' },
    ];

    if (esSecundaria) return [
        { tipo: 'multiple_choice', pregunta: 'Un oximorón es...', opciones: ['Sinónimos combinados', 'Palabras contrarias en unión', 'Una figura matemática', 'Un tipo de narrador'], respuesta: 'Palabras contrarias en unión', explicacion: 'Oximorón: unir conceptos contrarios. Ej: "silencio ensordecedor", "oscura claridad".' },
        { tipo: 'fill_blank', pregunta: 'El español es una lengua ___', respuesta: 'romance', explicacion: 'Las lenguas romances derivan del latín: español, francés, italiano, portugués.' },
        { tipo: 'multiple_choice', pregunta: 'En "habría comido", el tiempo verbal es...', opciones: ['Condicional perfecto', 'Subjuntivo imperfecto', 'Futuro perfecto', 'Indicativo'], respuesta: 'Condicional perfecto', explicacion: 'Habría comido = condicional perfecto, indica acción hipotética en el pasado.' },
        { tipo: 'true_false', pregunta: 'El texto argumentativo busca convencer al lector', respuesta: 'true', explicacion: 'Correcto. Presenta tesis, argumentos y conclusión para persuadir.' },
        { tipo: 'fill_blank', pregunta: 'Octavio Paz escribió el poemario "___" (1950)', respuesta: 'El laberinto de la soledad', explicacion: 'Obra cumbre de Octavio Paz, Premio Nobel Mexicano.' },
    ];

    return [
        { tipo: 'multiple_choice', pregunta: '¿Qué es un verbo?', opciones: ['Una cosa', 'Una acción o estado', 'Un nombre', 'Una descripción'], respuesta: 'Una acción o estado', explicacion: 'El verbo expresa acción (correr, saltar) o estado (ser, estar, tener).' },
        { tipo: 'fill_blank', pregunta: 'Las palabras con significados similares son ___', respuesta: 'sinónimos', explicacion: 'Sinónimos: bonito/hermoso, grande/enorme, rápido/veloz.' },
        { tipo: 'true_false', pregunta: 'La coma (,) se usa para separar ideas en una oración', respuesta: 'true', explicacion: 'Correcto. La coma separa elementos en una lista o ideas relacionadas.' },
        { tipo: 'multiple_choice', pregunta: '"¿Cómo estás?" lleva signo de interrogación porque es...', opciones: ['Una exclamación', 'Un enunciado', 'Una pregunta', 'Un mandato'], respuesta: 'Una pregunta', explicacion: 'Los signos ¿? se usan al inicio y al final de preguntas en español.' },
        { tipo: 'fill_blank', pregunta: 'La parte inicial de un cuento se llama ___', respuesta: 'introducción', explicacion: 'Todo cuento tiene: introducción (inicio), desarrollo (nudo) y desenlace (final).' },
        { tipo: 'multiple_choice', pregunta: 'Un antónimo de "alegre" es...', opciones: ['Feliz', 'Contento', 'Triste', 'Animado'], respuesta: 'Triste', explicacion: 'Antónimos son palabras de significado contrario. Alegre ↔ Triste.' },
    ];
}

function getCienciasPool(temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuántos huesos tiene el cuerpo humano adulto?', opciones: ['106', '206', '306', '406'], respuesta: '206', explicacion: 'El cuerpo humano adulto tiene 206 huesos. Los bebés tienen más (270) que se fusionan.' },
        { tipo: 'fill_blank', pregunta: 'La fotosíntesis produce ___ y oxígeno', respuesta: 'glucosa', explicacion: 'Fotosíntesis: CO₂ + H₂O + Luz → Glucosa + O₂.' },
        { tipo: 'true_false', pregunta: 'El corazón bombea sangre a todo el cuerpo', respuesta: 'true', explicacion: 'El corazón es una bomba muscular que circula la sangre por todo el cuerpo.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué tipo de energía usa una planta solar?', opciones: ['Eólica', 'Hidráulica', 'Solar', 'Nuclear'], respuesta: 'Solar', explicacion: 'Los paneles solares convierten luz solar en energía eléctrica.' },
        { tipo: 'fill_blank', pregunta: 'El agua en estado gaseoso se llama ___', respuesta: 'vapor', explicacion: 'H₂O puede ser sólido (hielo), líquido (agua) o gaseoso (vapor).' },
        { tipo: 'multiple_choice', pregunta: '¿Cuál gas es necesario para respirar?', opciones: ['CO₂', 'N₂', 'O₂', 'H₂'], respuesta: 'O₂', explicacion: 'El oxígeno (O₂) es esencial para la respiración celular en seres vivos.' },
        { tipo: 'true_false', pregunta: 'La Tierra tarda 365 días en girar alrededor del Sol', respuesta: 'true', explicacion: 'El año tiene 365 días (366 en año bisiesto) que dura la órbita de la Tierra.' },
    ];
}

function getHistoriaPool(temas, nivel, esSecundaria) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuándo se firmó la Declaración de Independencia de EUA?', opciones: ['1773', '1776', '1783', '1800'], respuesta: '1776', explicacion: 'El 4 de julio de 1776 se firmó la Declaración de Independencia de Estados Unidos.' },
        { tipo: 'fill_blank', pregunta: 'La Revolución Industrial comenzó en ___', respuesta: 'Inglaterra', explicacion: 'La Revolución Industrial inició en Gran Bretaña (siglo XVIII) con el motor a vapor.' },
        { tipo: 'multiple_choice', pregunta: '¿Quién fue el primer Presidente de México?', opciones: ['Agustín de Iturbide', 'Guadalupe Victoria', 'Benito Juárez', 'Antonio López de Santa Anna'], respuesta: 'Guadalupe Victoria', explicacion: 'Guadalupe Victoria fue el primer presidente de México (1824-1829).' },
        { tipo: 'true_false', pregunta: 'Los mayas inventaron el concepto del cero en matemáticas', respuesta: 'true', explicacion: 'Correcto. Los mayas desarrollaron independientemente el concepto del cero.' },
        { tipo: 'fill_blank', pregunta: 'La caída del Imperio Romano de Occidente fue en el año ___', respuesta: '476', explicacion: 'En el año 476 d.C. cayó Roma, marcando el fin de la Edad Antigua.' },
        { tipo: 'multiple_choice', pregunta: '¿Quién fue Simón Bolívar?', opciones: ['Rey de España', 'Libertador de América del Sur', 'Presidente de México', 'Conquistador español'], respuesta: 'Libertador de América del Sur', explicacion: 'Bolívar liberó Venezuela, Colombia, Bolivia, Ecuador, Perú y Panamá.' },
        { tipo: 'fill_blank', pregunta: 'La ONU fue fundada en el año ___ tras la Segunda Guerra Mundial', respuesta: '1945', explicacion: 'La ONU nació en 1945 con el objetivo de mantener la paz mundial.' },
    ];
}

function getGeografiaPool(temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuál es el país más grande del mundo?', opciones: ['China', 'EUA', 'Rusia', 'Canadá'], respuesta: 'Rusia', explicacion: 'Rusia tiene 17.1 millones de km², más de dos veces el territorio de EUA.' },
        { tipo: 'fill_blank', pregunta: 'La capital de Japón es ___', respuesta: 'Tokio', explicacion: 'Tokio es la capital y mayor área metropolitana de Japón y del mundo.' },
        { tipo: 'true_false', pregunta: 'El Ecuador divide la Tierra en hemisferio Norte y Sur', respuesta: 'true', explicacion: 'Correcto. El Ecuador (latitud 0°) divide el planeta en mitades.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuál es el desierto más grande del mundo?', opciones: ['Sahara', 'Atacama', 'Gobi', 'Antartico'], respuesta: 'Antartico', explicacion: 'El desierto de la Antártida es el más grande (14.2 millones km²). El Sahara es el más grande caliente.' },
        { tipo: 'fill_blank', pregunta: 'México limita al sur con ___ y ___', respuesta: 'Guatemala y Belice', explicacion: 'Al sur de México están Guatemala y Belice, en América Central.' },
        { tipo: 'multiple_choice', pregunta: '¿En qué continente está Brasil?', opciones: ['Norteamérica', 'Europa', 'África', 'Sudamérica'], respuesta: 'Sudamérica', explicacion: 'Brasil es el país más grande de América del Sur.' },
        { tipo: 'fill_blank', pregunta: 'El Río Grande o Bravo es la frontera entre México y ___', respuesta: 'Estados Unidos', explicacion: 'El Río Bravo (o Grande en EUA) marca parte de la frontera norte de México.' },
    ];
}

function getFormacionPool(nivel, esSecundaria) {
    if (esSecundaria) return [
        { tipo: 'multiple_choice', pregunta: '¿Qué es el bullying?', opciones: ['Un juego entre amigos', 'Acoso reiterado hacia alguien', 'Una forma de convivir', 'Una materia escolar'], respuesta: 'Acoso reiterado hacia alguien', explicacion: 'El bullying es el acoso sistemático hacia alguien más débil. Es un problema serio.' },
        { tipo: 'fill_blank', pregunta: 'El artículo 1° constitucional prohíbe toda ___', respuesta: 'discriminación', explicacion: 'La Constitución prohíbe discriminar a personas por raza, género, orientación u origen.' },
        { tipo: 'true_false', pregunta: 'Las ONG son organizaciones sin fines de lucro', respuesta: 'true', explicacion: 'Las ONG (Organizaciones No Gubernamentales) trabajan por causas sociales sin lucro.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué significa "sufragio efectivo"?', opciones: ['Votar muchas veces', 'Que el voto tenga valor real', 'Voto forzado', 'No reelección'], respuesta: 'Que el voto tenga valor real', explicacion: 'Madero en 1910: "Sufragio efectivo, no reelección" = que cada voto cuente y sin dictadores.' },
    ];

    return [
        { tipo: 'multiple_choice', pregunta: 'El respeto significa...', opciones: ['Ser obediente siempre', 'Reconocer y valorar a los demás', 'Callarse siempre', 'Hacer lo que uno quiere'], respuesta: 'Reconocer y valorar a los demás', explicacion: 'Respetar es reconocer el valor y los derechos de otras personas.' },
        { tipo: 'fill_blank', pregunta: 'El diálogo es la mejor forma de ___ un conflicto', respuesta: 'resolver', explicacion: 'Dialogar permite escuchar diferentes puntos de vista y encontrar soluciones.' },
        { tipo: 'true_false', pregunta: 'Los niños tienen derecho a la educación, salud y protección', respuesta: 'true', explicacion: 'La Convención de los Derechos del Niño (ONU, 1989) garantiza estos derechos.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué hacemos al reciclar?', opciones: ['Contaminar más', 'Reutilizar materiales y reducir basura', 'Gastar más dinero', 'Usar más energía'], respuesta: 'Reutilizar materiales y reducir basura', explicacion: 'Reciclar reduce la basura y la extracción de recursos naturales.' },
    ];
}

function getConocimientoPool() {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Qué animal da la leche que tomamos?', opciones: ['La gallina', 'La vaca', 'El cerdo', 'El caballo'], respuesta: 'La vaca', explicacion: 'La vaca es el animal que produce la leche que usamos para beber y hacer queso y yogurt.' },
        { tipo: 'fill_blank', pregunta: 'El sol sale por el ___ y se pone por el Oeste', respuesta: 'Este', explicacion: 'El Sol siempre sale por el Este (oriente) y se pone por el Oeste (poniente).' },
        { tipo: 'true_false', pregunta: 'Las plantas necesitan agua y luz para vivir', respuesta: 'true', explicacion: 'Correcto. Sin agua o sin luz, las plantas no pueden hacer fotosíntesis y mueren.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuál es el animal más grande del mundo?', opciones: ['El elefante', 'La ballena azul', 'El tiburón ballena', 'El hipopótamo'], respuesta: 'La ballena azul', explicacion: 'La ballena azul (hasta 30 m de longitud) es el animal más grande que ha existido.' },
        { tipo: 'fill_blank', pregunta: 'La primavera viene después del ___', respuesta: 'invierno', explicacion: 'Estaciones en México: otoño→invierno→primavera→verano.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué sentido usamos para oler?', opciones: ['La vista', 'El tacto', 'El olfato', 'El gusto'], respuesta: 'El olfato', explicacion: 'El olfato es el sentido de la nariz. Con él detectamos olores agradables o peligrosos.' },
    ];
}

function getArtesPool() {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Quién pintó la Mona Lisa?', opciones: ['Picasso', 'Leonardo da Vinci', 'Miguel Ángel', 'Rafael'], respuesta: 'Leonardo da Vinci', explicacion: 'La Mona Lisa fue pintada por Leonardo da Vinci (1503-1519). Está en el Louvre, París.' },
        { tipo: 'fill_blank', pregunta: 'El color verde se obtiene mezclando azul y ___', respuesta: 'amarillo', explicacion: 'Azul + Amarillo = Verde. Es uno de los colores secundarios.' },
        { tipo: 'true_false', pregunta: 'La flauta es un instrumento de viento', respuesta: 'true', explicacion: 'Correcto. La flauta suena al soplar aire. Otros de viento: trompeta, clarinete.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué muralista mexicano pintó en la SEP?', opciones: ['Frida Kahlo', 'Diego Rivera', 'Rufino Tamayo', 'David Siqueiros'], respuesta: 'Diego Rivera', explicacion: 'Diego Rivera pintó los murales del edificio de la SEP entre 1923 y 1928.' },
        { tipo: 'fill_blank', pregunta: 'Una obra de teatro se llama también ___', respuesta: 'drama', explicacion: 'Drama, comedia y tragedia son los géneros del teatro.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuántas notas tiene la escala musical?', opciones: ['5', '6', '7', '8'], respuesta: '7', explicacion: 'Las 7 notas: Do, Re, Mi, Fa, Sol, La, Si.' },
        { tipo: 'fill_blank', pregunta: 'En la danza folclórica de Jalisco se usa el traje llamado ___', respuesta: 'charro', explicacion: 'El traje de charro (hombres) y china poblana (mujeres) se usan en el Jarabe Tapatío.' },
    ];
}

// ══════════════════════════════════════════════════════════════════════
// PROCESAR TODOS LOS ARCHIVOS
// ══════════════════════════════════════════════════════════════════════
let enriquecidos = 0, yaBien = 0, total = 0;

function procesarDir(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(item => {
        const fp = path.join(dir, item);
        if (fs.statSync(fp).isDirectory()) {
            procesarDir(fp);
        } else if (item.endsWith('.json') && item !== 'indice.json') {
            try {
                const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
                if (!data.grado || !data.materia || !data.ejercicios) return;

                const current = data.ejercicios.v1?.length + data.ejercicios.v2?.length || 0;
                if (current >= TARGET_MIN) { yaBien++; return; }

                const extras = getExtras(data.grado, data.materia, data.temas || [], current);
                if (!extras.length) return;

                let c = current + 1;
                const pfx = `${data.grado}-${data.materia}-b${data.bloque}-x`;

                const formatEj = (e, idx) => ({
                    id: `${pfx}-${String(c + idx).padStart(3, '0')}`,
                    tema: (data.temas || ['General'])[idx % (data.temas?.length || 1)],
                    tipo: e.tipo,
                    nivel: idx % 2 === 0 ? 'v1' : 'v2',
                    pregunta: e.pregunta,
                    ...(e.opciones ? { opciones: e.opciones } : {}),
                    respuestaCorrecta: e.respuesta,
                    explicacion: e.explicacion,
                });

                const paraV1 = extras.filter((_, i) => i % 2 === 0).map((e, i) => ({ ...formatEj(e, i), nivel: 'v1' }));
                const paraV2 = extras.filter((_, i) => i % 2 !== 0).map((e, i) => ({ ...formatEj(e, i), nivel: 'v2' }));

                data.ejercicios.v1 = [...(data.ejercicios.v1 || []), ...paraV1];
                data.ejercicios.v2 = [...(data.ejercicios.v2 || []), ...paraV2];
                data.totalEjercicios = data.ejercicios.v1.length + data.ejercicios.v2.length;
                data.ejercicios.preview = [
                    ...data.ejercicios.v1.slice(0, 2),
                    ...data.ejercicios.v2.slice(0, 1),
                ];

                fs.writeFileSync(fp, JSON.stringify(data, null, 2));
                enriquecidos++;
                total += data.totalEjercicios;
            } catch (e) {
                console.error(`Error ${fp}: ${e.message}`);
            }
        }
    });
}

procesarDir(BASE);

console.log(`\n🎉 ENRIQUECIMIENTO MASIVO COMPLETADO:`);
console.log(`  ✅ Archivos enriquecidos: ${enriquecidos}`);
console.log(`  ✅ Ya cumplían el mínimo: ${yaBien}`);

// Conteo final detallado
let grandTotal = 0;
fs.readdirSync(BASE).forEach(g => {
    let gt = 0;
    const gDir = path.join(BASE, g);
    fs.readdirSync(gDir).forEach(m => {
        const mDir = path.join(gDir, m);
        try {
            fs.readdirSync(mDir).filter(f => f.endsWith('.json') && f !== 'indice.json').forEach(f => {
                try { gt += JSON.parse(fs.readFileSync(path.join(mDir, f))).totalEjercicios || 0; } catch { }
            });
        } catch { }
    });
    console.log(`  ${g}: ${gt} ejercicios`);
    grandTotal += gt;
});
console.log(`\n📊 TOTAL PLATAFORMA: ${grandTotal} ejercicios`);
