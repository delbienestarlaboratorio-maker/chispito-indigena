const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');
const TARGET_MIN = 15; // Ejercicios mínimos por bloque

// ══════════════════════════════════════════════════════════════════════
// BANCO MASIVO DE EJERCICIOS EXTRA — para enriquecer todos los grados
// ══════════════════════════════════════════════════════════════════════

// Función que genera ejercicios extra inteligentes por materia
function generarEjerciciosExtra(grado, materia, temas, existentes = []) {
    const bancoPorMateria = {
        matematicas: generarMathExtra(grado, temas),
        espanol: generarEspanolExtra(grado, temas),
        ciencias: generarCienciasExtra(grado, temas),
        historia: generarHistoriaExtra(grado, temas),
        geografia: generarGeografiaExtra(grado, temas),
        formacion: generarFormacionExtra(grado, temas),
        conocimiento: generarConocimientoExtra(grado, temas),
        artes: generarArtesExtra(grado, temas),
    };

    return bancoPorMateria[materia] || [];
}

function generarMathExtra(grado, temas) {
    const nivel = grado.includes('kinder') ? 0 :
        grado.includes('primaria-1') || grado.includes('primaria-2') ? 1 :
            grado.includes('primaria-3') || grado.includes('primaria-4') ? 2 :
                grado.includes('primaria-5') || grado.includes('primaria-6') ? 3 : 4;

    const bancos = [
        // kinder
        [
            { tipo: 'visual_count', pregunta: '¿Cuántas estrellas hay? ⭐⭐⭐⭐', opciones: ['2', '3', '4', '5'], respuesta: '4', explicacion: 'Hay 4 estrellas. ¡Cuenta: 1, 2, 3, 4!' },
            { tipo: 'multiple_choice', pregunta: '¿Qué número es el más grande: 3, 7 o 5?', opciones: ['3', '5', '7', 'son iguales'], respuesta: '7', explicacion: 'El 7 es el más grande. En la recta numérica, el que va más a la derecha es mayor.' },
            { tipo: 'fill_blank', pregunta: '2 + 2 = ___', respuesta: '4', explicacion: '2 manzanas más 2 manzanas son 4 manzanas.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál figura tiene 4 lados iguales?', opciones: ['Círculo', 'Triángulo', 'Cuadrado', 'Rectángulo'], respuesta: 'Cuadrado', explicacion: 'El cuadrado tiene 4 lados iguales y 4 ángulos rectos.' },
            { tipo: 'fill_blank', pregunta: '1, 2, 3, ___, 5', respuesta: '4', explicacion: 'La secuencia es 1,2,3,4,5. El 4 está entre el 3 y el 5.' },
            { tipo: 'true_false', pregunta: '5 es mayor que 3', respuesta: 'true', explicacion: 'Sí, 5 es mayor que 3. Podemos ver esto contando.' },
        ],
        // P1-P2
        [
            { tipo: 'multiple_choice', pregunta: '¿Cuánto es 45 + 38?', opciones: ['73', '83', '93', '75'], respuesta: '83', explicacion: '45+38: sumamos unidades 5+8=13 (llevamos 1), decenas 4+3+1=8. Resultado: 83.' },
            { tipo: 'fill_blank', pregunta: '7 × 8 = ___', respuesta: '56', explicacion: '7 por 8 = 56. Truco: 7×8=7×4×2=28×2=56.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuánto es 100 - 37?', opciones: ['57', '63', '73', '67'], respuesta: '63', explicacion: '100-37=63. Podemos pensar: de 37 a 40 son 3, de 40 a 100 son 60. Total: 63.' },
            { tipo: 'true_false', pregunta: '4 × 6 = 6 × 4', respuesta: 'true', explicacion: 'La multiplicación es conmutativa. 4×6=24 y 6×4=24.' },
            { tipo: 'fill_blank', pregunta: '56 ÷ 8 = ___', respuesta: '7', explicacion: '56 ÷ 8 = 7. Verificamos: 8 × 7 = 56.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántos centímetros tiene 1 metro?', opciones: ['10', '100', '1000', '10000'], respuesta: '100', explicacion: '1 metro = 100 centímetros. ¡1 metro es como una regla muy larga!' },
            { tipo: 'visual_count', pregunta: 'Una semana tiene ___ días', opciones: ['5', '6', '7', '8'], respuesta: '7', explicacion: 'Una semana tiene 7 días: lunes, martes, miércoles, jueves, viernes, sábado y domingo.' },
        ],
        // P3-P4
        [
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el resultado de 234 × 3?', opciones: ['602', '702', '712', '642'], respuesta: '702', explicacion: '234×3: 4×3=12(llevo 1), 3×3+1=10(llevo 1), 2×3+1=7. Resultado: 702.' },
            { tipo: 'fill_blank', pregunta: '3/4 + 1/4 = ___', respuesta: '1', explicacion: '3/4 + 1/4 = 4/4 = 1 entero.' },
            { tipo: 'multiple_choice', pregunta: 'El perímetro de un cuadrado de lado 6cm es:', opciones: ['12 cm', '18 cm', '24 cm', '36 cm'], respuesta: '24 cm', explicacion: 'Perímetro = 4 × lado = 4 × 6 = 24 cm.' },
            { tipo: 'true_false', pregunta: '0.7 > 0.5', respuesta: 'true', explicacion: '0.7 tiene 7 décimas y 0.5 tiene 5. 7 > 5, entonces 0.7 > 0.5.' },
            { tipo: 'fill_blank', pregunta: '25% de 200 = ___', respuesta: '50', explicacion: '25% = 1/4. Un cuarto de 200 = 200÷4 = 50.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuánto es 12² (doce al cuadrado)?', opciones: ['24', '144', '121', '169'], respuesta: '144', explicacion: '12² = 12 × 12 = 144.' },
            { tipo: 'multiple_choice', pregunta: 'Si un rectángulo mide 8 de base y 5 de altura, su área es:', opciones: ['26 cm²', '40 cm²', '13 cm²', '52 cm²'], respuesta: '40 cm²', explicacion: 'Área = base × altura = 8 × 5 = 40 cm².' },
        ],
        // P5-P6
        [
            { tipo: 'multiple_choice', pregunta: 'Si 3x + 7 = 22, ¿cuánto es x?', opciones: ['3', '4', '5', '6'], respuesta: '5', explicacion: '3x = 22-7 = 15, x = 15÷3 = 5.' },
            { tipo: 'fill_blank', pregunta: '√144 = ___', respuesta: '12', explicacion: 'La raíz cuadrada de 144 es 12, porque 12×12=144.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el MCD de 12 y 18?', opciones: ['3', '4', '6', '9'], respuesta: '6', explicacion: 'Los factores de 12: 1,2,3,4,6,12. Los de 18: 1,2,3,6,9,18. El máximo común es 6.' },
            { tipo: 'true_false', pregunta: 'El número pi (π) es aproximadamente 3.14', respuesta: 'true', explicacion: 'Correcto. π ≈ 3.14159... Se usa para calcular circunferencias y áreas de círculos.' },
            { tipo: 'fill_blank', pregunta: '15% de 80 = ___', respuesta: '12', explicacion: '15% de 80 = 0.15 × 80 = 12.' },
            { tipo: 'multiple_choice', pregunta: 'La media de 4, 6, 8, 10 es:', opciones: ['5', '6', '7', '8'], respuesta: '7', explicacion: 'Media = (4+6+8+10)÷4 = 28÷4 = 7.' },
        ],
        // Secundaria
        [
            { tipo: 'multiple_choice', pregunta: 'Si f(x) = 2x + 3, ¿cuánto es f(5)?', opciones: ['10', '13', '15', '16'], respuesta: '13', explicacion: 'f(5) = 2(5) + 3 = 10 + 3 = 13.' },
            { tipo: 'fill_blank', pregunta: 'La pendiente de la recta y = 3x + 2 es ___', respuesta: '3', explicacion: 'En y = mx + b, m es la pendiente. Aquí m = 3.' },
            { tipo: 'multiple_choice', pregunta: 'Seno de 30° = ?', opciones: ['0.5', '0.707', '0.866', '1'], respuesta: '0.5', explicacion: 'sen(30°) = 1/2 = 0.5. Es uno de los valores trigonométricos fundamentales.' },
            { tipo: 'true_false', pregunta: 'En un triángulo rectángulo, la hipotenusa es el lado más largo', respuesta: 'true', explicacion: 'La hipotenusa (lado opuesto al ángulo recto) siempre es el lado más largo.' },
            { tipo: 'fill_blank', pregunta: 'x² - 9 = 0, entonces x = ___ o x = ___', respuesta: '3 o -3', explicacion: 'x² = 9, entonces x = ±√9 = ±3. Hay dos soluciones: 3 y -3.' },
            { tipo: 'multiple_choice', pregunta: 'La probabilidad de sacar cara en una moneda es:', opciones: ['1/4', '1/3', '1/2', '2/3'], respuesta: '1/2', explicacion: 'Una moneda tiene 2 caras iguales. P(cara) = 1 caso favorable / 2 posibles = 1/2.' },
        ],
    ];

    return bancos[nivel] || bancos[2];
}

function generarEspanolExtra(grado, temas) {
    const esKinder = grado.includes('kinder');
    const esSecundaria = grado.includes('secundaria');

    if (esKinder) return [
        { tipo: 'multiple_choice', pregunta: '¿Cuál de estas es una vocal?', opciones: ['B', 'S', 'E', 'T'], respuesta: 'E', explicacion: 'Las vocales son: A, E, I, O, U. La B, S y T son consonantes.' },
        { tipo: 'fill_blank', pregunta: 'MA-MA tiene ___ sílabas', respuesta: '2', explicacion: 'MA y MA son las dos sílabas de la palabra mamá.' },
        { tipo: 'true_false', pregunta: '"PERRO" empieza con la letra P', respuesta: 'true', explicacion: '¡Correcto! P-E-R-R-O. La primera letra es P.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuántas sílabas tiene "CASA"?', opciones: ['1', '2', '3', '4'], respuesta: '2', explicacion: 'CA-SA tiene 2 sílabas.' },
        { tipo: 'fill_blank', pregunta: 'Una oración termina con ___', respuesta: 'punto', explicacion: 'Las oraciones terminan con punto (.) para indicar que la idea terminó.' },
    ];

    if (esSecundaria) return [
        { tipo: 'multiple_choice', pregunta: 'El narrador omnisciente...', opciones: ['Solo narra lo que ve', 'Conoce los pensamientos de todos', 'Es el protagonista', 'No existe'], respuesta: 'Conoce los pensamientos de todos', explicacion: 'El narrador omnisciente sabe todo: pensamientos, sentimientos y eventos.' },
        { tipo: 'fill_blank', pregunta: 'La metáfora es una ___ que compara sin usar "como"', respuesta: 'figura retórica', explicacion: 'La metáfora es una figura que afirma que algo ES otra cosa: "Sus ojos son estrellas."' },
        { tipo: 'true_false', pregunta: 'El ensayo es siempre un texto de opinión personal', respuesta: 'true', explicacion: 'El ensayo expresa el punto de vista del autor sobre un tema, con argumentos.' },
        { tipo: 'multiple_choice', pregunta: 'En "El perro del hortelano": ¿es un texto...?', opciones: ['Lírico', 'Dramático', 'Narrativo', 'Científico'], respuesta: 'Dramático', explicacion: 'Es una obra de teatro de Lope de Vega — texto dramático escrito para representarse.' },
    ];

    return [
        { tipo: 'multiple_choice', pregunta: '¿Qué es un sustantivo?', opciones: ['Una acción', 'Un nombre de persona, lugar o cosa', 'Una descripción', 'Una unión de palabras'], respuesta: 'Un nombre de persona, lugar o cosa', explicacion: 'Los sustantivos nombran seres, cosas y lugares: "niño", "ciudad", "libro".' },
        { tipo: 'fill_blank', pregunta: 'La palabra "correr" es un ___', respuesta: 'verbo', explicacion: 'Los verbos expresan acciones: correr, saltar, estudiar, comer.' },
        { tipo: 'true_false', pregunta: 'Los sinónimos tienen significados similares', respuesta: 'true', explicacion: 'Correcto. Sinónimos: casa/hogar, grande/enorme, bonito/hermoso.' },
        { tipo: 'multiple_choice', pregunta: '"Rápidamente" es un...', opciones: ['Sustantivo', 'Verbo', 'Adjetivo', 'Adverbio'], respuesta: 'Adverbio', explicacion: 'Los adverbios modifican al verbo, adjetivo u otro adverbio. "Rápidamente" modifica cómo se hace algo.' },
        { tipo: 'fill_blank', pregunta: 'El opuesto de "alegre" es ___', respuesta: 'triste', explicacion: 'Los antónimos son palabras de significado opuesto: alegre/triste, grande/pequeño.' },
    ];
}

function generarCienciasExtra(grado, temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuál es el planeta más cercano al Sol?', opciones: ['Venus', 'Mercurio', 'Marte', 'Tierra'], respuesta: 'Mercurio', explicacion: 'Mercurio es el planeta más cercano al Sol, a 57.9 millones de kilómetros.' },
        { tipo: 'fill_blank', pregunta: 'El oxígeno tiene símbolo químico ___', respuesta: 'O', explicacion: 'O es el símbolo del oxígeno en la tabla periódica. Con este respiramos.' },
        { tipo: 'true_false', pregunta: 'Los mamíferos son de sangre fría', respuesta: 'false', explicacion: 'Los mamíferos somos de sangre caliente (homeotérmicos). Los reptiles sí son de sangre fría.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué orgánulo produce energía en la célula?', opciones: ['Núcleo', 'Ribosoma', 'Mitocondria', 'Vacuola'], respuesta: 'Mitocondria', explicacion: 'Las mitocondrias son "las plantas de energía" de la célula. Producen ATP.' },
        { tipo: 'fill_blank', pregunta: 'La fotosíntesis convierte luz solar en ___', respuesta: 'glucosa', explicacion: 'Las plantas usan la luz del sol, CO₂ y agua para fabricar glucosa (azúcar) que les da energía.' },
        { tipo: 'multiple_choice', pregunta: 'El agua hierve a...', opciones: ['0°C', '50°C', '100°C', '150°C'], respuesta: '100°C', explicacion: 'A 100°C (a nivel del mar) el agua pasa de líquido a gas (vapor).' },
        { tipo: 'true_false', pregunta: 'La Luna produce su propia luz', respuesta: 'false', explicacion: 'La Luna refleja la luz del Sol. No tiene luz propia.' },
    ];
}

function generarHistoriaExtra(grado, temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Quién fue el "Benemérito de las Américas"?', opciones: ['Miguel Hidalgo', 'Benito Juárez', 'Emiliano Zapata', 'Porfirio Díaz'], respuesta: 'Benito Juárez', explicacion: 'Benito Juárez recibió el título "Benemérito de las Américas" por sus reformas liberales.' },
        { tipo: 'fill_blank', pregunta: 'El "Grito de Independencia" se celebra el 15 de ___ de cada año', respuesta: 'septiembre', explicacion: 'El 15 de septiembre se conmemora el Grito de Dolores de 1810 de Hidalgo.' },
        { tipo: 'true_false', pregunta: 'La Constitución de 1917 fue resultado de la Revolución Mexicana', respuesta: 'true', explicacion: 'Sí. La Constitución de 1917 es uno de los documentos más avanzados de su época.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué civilización construyó Tenochtitlan?', opciones: ['Los mayas', 'Los olmecas', 'Los aztecas', 'Los toltecas'], respuesta: 'Los aztecas', explicacion: 'Los mexicas (aztecas) fundaron Tenochtitlan en 1325 donde hoy es Ciudad de México.' },
        { tipo: 'fill_blank', pregunta: 'La Segunda Guerra Mundial terminó en el año ___', respuesta: '1945', explicacion: 'La Segunda Guerra Mundial terminó en 1945 con la rendición de Alemania y Japón.' },
        { tipo: 'multiple_choice', pregunta: '¿Quién escribió el Plan de Ayala?', opciones: ['Pancho Villa', 'Emiliano Zapata', 'Venustiano Carranza', 'Francisco Madero'], respuesta: 'Emiliano Zapata', explicacion: 'El Plan de Ayala (1911) fue escrito por Zapata para reclamar tierras para los campesinos.' },
    ];
}

function generarGeografiaExtra(grado, temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuál es el río más largo del mundo?', opciones: ['Mississipi', 'Nilo', 'Amazonas', 'Yangtsé'], respuesta: 'Nilo', explicacion: 'El Nilo (6,650 km) compite con el Amazonas por ser el más largo. El Nilo está en África.' },
        { tipo: 'fill_blank', pregunta: 'El estado más grande de México es ___', respuesta: 'Chihuahua', explicacion: 'Chihuahua es el estado más grande de México con 247,455 km².' },
        { tipo: 'true_false', pregunta: 'Brasil es el país más grande de América del Sur', respuesta: 'true', explicacion: 'Brasil ocupa el 47% del territorio de América del Sur.' },
        { tipo: 'multiple_choice', pregunta: '¿En qué continente está Egipto?', opciones: ['Asia', 'Europa', 'África', 'América'], respuesta: 'África', explicacion: 'Egipto está en el noreste de África, aunque el Canal de Suez lo conecta con Asia.' },
        { tipo: 'fill_blank', pregunta: 'La capital de Francia es ___', respuesta: 'París', explicacion: 'París es la capital y ciudad más grande de Francia, conocida por la Torre Eiffel.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuántos estados tiene México?', opciones: ['28', '29', '31', '33'], respuesta: '31', explicacion: 'México tiene 31 estados y 1 entidad (Ciudad de México), total 32 entidades federativas.' },
    ];
}

function generarFormacionExtra(grado, temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Qué son los derechos humanos?', opciones: ['Privilegios para ricos', 'Derechos de solo los adultos', 'Derechos de todas las personas por igual', 'Reglas del gobierno'], respuesta: 'Derechos de todas las personas por igual', explicacion: 'Los derechos humanos son universales: aplican a todas las personas sin importar origen, género o edad.' },
        { tipo: 'fill_blank', pregunta: 'La democracia es el gobierno del ___, para el pueblo', respuesta: 'pueblo', explicacion: 'Democracia viene del griego "demos" (pueblo) y "kratos" (poder). El pueblo gobierna.' },
        { tipo: 'true_false', pregunta: 'En México el voto es secreto y universal', respuesta: 'true', explicacion: 'Correcto. Todos los ciudadanos mexicanos (+18 años) pueden votar en secreto.' },
        { tipo: 'multiple_choice', pregunta: '¿Cuál es una forma de participación ciudadana?', opciones: ['No votar', 'Ignorar las leyes', 'Votar y participar en comunidad', 'Solo obedecer sin opinar'], respuesta: 'Votar y participar en comunidad', explicacion: 'Ser ciudadano activo significa votar, participar en organizaciones y defender derechos.' },
    ];
}

function generarConocimientoExtra(grado, temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuál de los 5 sentidos usamos para oír?', opciones: ['La vista', 'El olfato', 'El oído', 'El tacto'], respuesta: 'El oído', explicacion: 'El oído nos permite escuchar sonidos. Las orejas son el órgano del oído.' },
        { tipo: 'fill_blank', pregunta: 'Los animales que viven en el agua se llaman ___', respuesta: 'acuáticos', explicacion: 'Los animales acuáticos viven en el agua: peces, delfines, pulpos.' },
        { tipo: 'true_false', pregunta: 'Los perros son animales domésticos', respuesta: 'true', explicacion: 'Los animales domésticos viven con el ser humano. El perro es el más común.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué necesitan las plantas para crecer?', opciones: ['Solo agua', 'Agua, sol y tierra', 'Solo luz', 'Solo abono'], respuesta: 'Agua, sol y tierra', explicacion: 'Las plantas necesitan agua, luz solar y nutrientes del suelo para crecer.' },
        { tipo: 'fill_blank', pregunta: 'En invierno hace ___ y en verano hace ___', respuesta: 'frío / calor', explicacion: 'Las estaciones cambian la temperatura. Invierno = frío, Verano = calor.' },
    ];
}

function generarArtesExtra(grado, temas) {
    return [
        { tipo: 'multiple_choice', pregunta: '¿Cuáles son los colores secundarios?', opciones: ['Rojo, azul, amarillo', 'Verde, naranja y morado', 'Negro, blanco, gris', 'Rosa, café, beige'], respuesta: 'Verde, naranja y morado', explicacion: 'Los colores secundarios se forman mezclando primarios: azul+amarillo=verde, etc.' },
        { tipo: 'fill_blank', pregunta: 'El instrumento de cuerdas más conocido es la ___', respuesta: 'guitarra', explicacion: 'La guitarra es el instrumento de cuerdas más popular del mundo, especialmente en México.' },
        { tipo: 'true_false', pregunta: 'El Piano es un instrumento de viento', respuesta: 'false', explicacion: 'El piano es de percusión (y cuerdas). Instrumentos de viento: flauta, trompeta, clarinete.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué artista mexicano es famoso por sus murales?', opciones: ['Picasso', 'Van Gogh', 'Diego Rivera', 'Leonardo da Vinci'], respuesta: 'Diego Rivera', explicacion: 'Diego Rivera es el muralista mexicano más famoso, esposo de Frida Kahlo.' },
        { tipo: 'fill_blank', pregunta: 'La danza tradicional más famosa de México es el ___', respuesta: 'jarabe tapatío', explicacion: 'El Jarabe Tapatío es el baile nacional de México, originario de Jalisco.' },
    ];
}

// ══════════════════════════════════════════════════════════════════════
// ENRIQUECER TODOS LOS ARCHIVOS EXISTENTES
// ══════════════════════════════════════════════════════════════════════
let enriquecidos = 0, yaBien = 0;

function procesarDirectorio(dir) {
    if (!fs.existsSync(dir)) return;

    fs.readdirSync(dir).forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            procesarDirectorio(fullPath);
        } else if (item.endsWith('.json')) {
            try {
                const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

                if (data.totalEjercicios >= TARGET_MIN) {
                    yaBien++;
                    return;
                }

                const grado = data.grado;
                const materia = data.materia;
                const temas = data.temas || [];

                const extras = generarEjerciciosExtra(grado, materia, temas);
                const faltantes = TARGET_MIN - (data.totalEjercicios || 0);
                const nuevos = extras.slice(0, Math.max(faltantes + 3, extras.length));

                if (nuevos.length === 0) return;

                let c = (data.ejercicios.v1?.length || 0) + (data.ejercicios.v2?.length || 0) + 1;
                const pfx = `${grado}-${materia}-b${data.bloque}`;

                const nuevosFormateados = nuevos.map((e, i) => ({
                    id: `${pfx}-extra-${String(c + i).padStart(3, '0')}`,
                    tema: temas[i % temas.length] || temas[0],
                    tipo: e.tipo,
                    nivel: i % 2 === 0 ? 'v1' : 'v2',
                    pregunta: e.pregunta,
                    ...(e.opciones ? { opciones: e.opciones } : {}),
                    respuestaCorrecta: e.respuesta,
                    explicacion: e.explicacion,
                }));

                // Agregar a v1 y v2 alternando
                const paraV1 = nuevosFormateados.filter((_, i) => i % 2 === 0).map(e => ({ ...e, nivel: 'v1' }));
                const paraV2 = nuevosFormateados.filter((_, i) => i % 2 !== 0).map(e => ({ ...e, nivel: 'v2' }));

                data.ejercicios.v1 = [...(data.ejercicios.v1 || []), ...paraV1];
                data.ejercicios.v2 = [...(data.ejercicios.v2 || []), ...paraV2];
                data.totalEjercicios = data.ejercicios.v1.length + data.ejercicios.v2.length;

                // Actualizar preview con los mejores 3
                data.ejercicios.preview = [
                    ...(data.ejercicios.v1.slice(0, 2)),
                    ...(data.ejercicios.v2.slice(0, 1)),
                ];

                fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
                enriquecidos++;
                console.log(`✅ ENRIQUECIDO: ${grado}/${materia}/bloque-${data.bloque} → ${data.totalEjercicios} ejercicios`);

            } catch (e) {
                console.error(`Error en ${fullPath}:`, e.message);
            }
        }
    });
}

procesarDirectorio(BASE);

console.log(`\n🎉 ENRIQUECIMIENTO COMPLETADO:`);
console.log(`  Archivos enriquecidos: ${enriquecidos}`);
console.log(`  Ya tenían suficientes: ${yaBien}`);

// Conteo final
let grandTotal = 0;
fs.readdirSync(BASE).forEach(g => {
    let gt = 0;
    const gDir = path.join(BASE, g);
    fs.readdirSync(gDir).forEach(m => {
        const mDir = path.join(gDir, m);
        fs.readdirSync(mDir).forEach(f => {
            try { gt += JSON.parse(fs.readFileSync(path.join(mDir, f), 'utf8')).totalEjercicios || 0; } catch { }
        });
    });
    console.log(`  ${g}: ${gt} ejercicios`);
    grandTotal += gt;
});
console.log(`\n📊 TOTAL PLATAFORMA: ${grandTotal} ejercicios`);
