/**
 * generar-materias-faltantes.js
 * Genera: Formación Cívica (P1-6), Artes (P1-6)
 * para completar el currículo SEP de Primaria
 */
const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');
let total = 0;

function guardar(grado, materia, bloqueNum, nombre, meses, temas, ejercicios) {
    const dir = path.join(BASE, grado, materia);
    fs.mkdirSync(dir, { recursive: true });
    const archivo = path.join(dir, `bloque-${bloqueNum}.json`);
    const data = {
        grado, materia, bloque: bloqueNum, nombre, meses, temas,
        totalEjercicios: ejercicios.v1.length + ejercicios.v2.length,
        ejercicios,
    };
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
    total += ejercicios.v1.length + ejercicios.v2.length;
    console.log(`✅ ${grado}/${materia}/bloque-${bloqueNum} — ${data.totalEjercicios} ejs`);
}

function mcq(id, tema, p, ops, r, exp, visual) {
    const e = { id, tema, tipo: 'multiple_choice', nivel: 'v1', pregunta: p, opciones: ops, respuestaCorrecta: r, explicacion: exp };
    if (visual) e.visual = visual;
    return e;
}
function tf(id, tema, p, r, exp) {
    return { id, tema, tipo: 'true_false', nivel: 'v1', pregunta: p, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp };
}
function fill(id, tema, p, r, exp) {
    return { id, tema, tipo: 'fill_blank', nivel: 'v1', pregunta: p, respuestaCorrecta: r, explicacion: exp };
}

// ════════════════════════════════════════════════
// FORMACIÓN CÍVICA Y ÉTICA — PRIMARIA 1°-6°
// ════════════════════════════════════════════════

const FORMACION = {
    'primaria-1': [
        {
            b: 1, nombre: 'Yo soy especial', meses: 'Agosto-Septiembre',
            temas: ['Mi identidad', 'Mis características', 'Me cuido y me quiero'],
            ejs: [
                mcq('p1fc-b1-01', 'Mi identidad', '¿Qué es la identidad?', ['Lo que nos hace únicos', 'Un juego', 'Una materia', 'Un color'], 'Lo que nos hace únicos', 'Tu identidad es todo lo que te hace ser TÚ: tu nombre, tu familia, tu forma de ser.', '🪞'),
                mcq('p1fc-b1-02', 'Mi identidad', '¿Cuál es una forma de cuidarte?', ['Lavarse las manos', 'No dormir', 'Comer solo dulces', 'No bañarse'], 'Lavarse las manos', 'Lavarse las manos nos protege de enfermedades. ¡Es muy importante!', '🙌'),
                tf('p1fc-b1-03', 'Mi identidad', 'Todos los niños son iguales', 'Falso', 'Cada persona es única y especial. Todos somos diferentes y eso es maravilloso.'),
                mcq('p1fc-b1-04', 'Mis características', '¿Qué hace a cada persona especial?', ['Sus características físicas y su personalidad', 'Solo su ropa', 'Su mochila', 'Su color favorito'], 'Sus características físicas y su personalidad', 'Cada persona tiene rasgos únicos: su cara, su voz, sus gustos, sus talentos.', '⭐'),
                mcq('p1fc-b1-05', 'Me cuido y me quiero', '¿Qué es el autocuidado?', ['Cuidar de uno mismo', 'Cuidar solo a los demás', 'Romper cosas', 'Dormir todo el día'], 'Cuidar de uno mismo', 'El autocuidado incluye: comer bien, descansar, limpiar tu cuerpo y cuidar tus emociones.', '❤️'),
            ]
        },
        {
            b: 2, nombre: 'Mi familia y yo', meses: 'Octubre-Noviembre',
            temas: ['Tipos de familia', 'Respeto en familia', 'Roles familiares'],
            ejs: [
                mcq('p1fc-b2-01', 'Tipos de familia', '¿Cuántos tipos de familia existen?', ['Muchos tipos', 'Solo uno', 'Exactamente tres', 'Dos'], 'Muchos tipos', 'Las familias pueden ser grandes, pequeñas, con mamá y papá, o con abuelos, tíos, etc. Todas son válidas.', '👨‍👩‍👧'),
                tf('p1fc-b2-02', 'Respeto en familia', 'Debemos respetar a todos los miembros de nuestra familia', 'Verdadero', 'El respeto es fundamental en la familia. Escuchamos, no agredimos y valoramos a cada integrante.'),
                mcq('p1fc-b2-03', 'Roles familiares', '¿Qué es un rol en la familia?', ['La tarea que cada quien realiza', 'Un jugo', 'Un tipo de juego', 'Una materia escolar'], 'La tarea que cada quien realiza', 'Cada miembro de la familia tiene responsabilidades: cocinar, trabajar, limpiar, estudiar, etc.', '🏠'),
            ]
        },
        {
            b: 3, nombre: 'Vivimos en comunidad', meses: 'Diciembre-Enero',
            temas: ['Mi comunidad', 'Reglas de convivencia', 'Trabajo en equipo'],
            ejs: [
                mcq('p1fc-b3-01', 'Mi comunidad', '¿Qué es una comunidad?', ['Grupo de personas que viven juntas', 'Una sola persona', 'Un animal', 'Una planta'], 'Grupo de personas que viven juntas', 'Una comunidad es un conjunto de personas que comparten un lugar y se ayudan mutuamente.', '🏘️'),
                mcq('p1fc-b3-02', 'Reglas de convivencia', '¿Para qué sirven las reglas?', ['Para que todos vivamos mejor', 'Para castigar', 'Para jugar', 'Para confundir'], 'Para que todos vivamos mejor', 'Las reglas de convivencia nos permiten vivir en armonía y resolver conflictos de forma pacífica.', '📋'),
                tf('p1fc-b3-03', 'Trabajo en equipo', 'El trabajo en equipo es mejor que trabajar solos siempre', 'Verdadero', 'El trabajo en equipo combina las fortalezas de cada persona y logra mejores resultados.'),
            ]
        },
        {
            b: 4, nombre: 'Mis emociones', meses: 'Febrero-Marzo',
            temas: ['¿Qué son las emociones?', 'Expresar emociones', 'Emociones positivas y negativas'],
            ejs: [
                mcq('p1fc-b4-01', 'Qué son las emociones', '¿Cuál de estas es una emoción?', ['Alegría', 'Mesa', 'Libro', 'Escuela'], 'Alegría', 'Las emociones como alegría, tristeza, miedo y enojo son respuestas naturales de nuestro cuerpo y mente.', '😊'),
                mcq('p1fc-b4-02', 'Expresar emociones', '¿Cómo podemos expresar nuestras emociones de manera sana?', ['Hablando con alguien de confianza', 'Gritando a los demás', 'Rompiendo cosas', 'Ignorando a todos'], 'Hablando con alguien de confianza', 'Expresar cómo nos sentimos con palabras es la forma más sana de manejar nuestras emociones.', '💬'),
                tf('p1fc-b4-03', 'Emociones', 'El enojo siempre está mal', 'Falso', 'El enojo es una emoción natural. Lo que importa es cómo lo manejamos: sin agredir a los demás.'),
            ]
        },
        {
            b: 5, nombre: 'Mis derechos y responsabilidades', meses: 'Abril-Junio',
            temas: ['Derechos de los niños', 'Responsabilidades', 'La participación'],
            ejs: [
                mcq('p1fc-b5-01', 'Derechos de los niños', '¿Cuál es un derecho de los niños?', ['Educación gratuita', 'Trabajar en fábricas', 'Vivir solos', 'No tener familia'], 'Educación gratuita', 'La Convención sobre los Derechos del Niño garantiza el derecho a la educación, salud, juego y protección.', '📚'),
                mcq('p1fc-b5-02', 'Responsabilidades', '¿Cuál es una responsabilidad de los niños en la escuela?', ['Hacer la tarea', 'No escuchar', 'Llegar tarde', 'No traer materiales'], 'Hacer la tarea', 'Los niños tienen responsabilidades como hacer tareas, llegar a tiempo y respetar a sus compañeros.', '✏️'),
                fill('p1fc-b5-03', 'Derechos', 'Los niños tienen derecho a la ___', 'educación', 'La educación es un derecho fundamental de todos los niños en México y el mundo.'),
            ]
        },
    ],
    'primaria-2': [
        {
            b: 1, nombre: 'Conozco mis emociones', meses: 'Agosto-Septiembre', temas: ['Gestión emocional', 'Empatía', 'Comunicación asertiva'],
            ejs: [mcq('p2fc-b1-01', 'Empatía', '¿Qué es la empatía?', ['Entender cómo se siente el otro', 'Ignorar a los demás', 'Competir siempre', 'Ganar siempre'], 'Entender cómo se siente el otro', 'La empatía nos permite ponernos en el lugar de otros y comprenderlos mejor.', '🤝'),
            tf('p2fc-b1-02', 'Gestión emocional', 'Respirar profundo ayuda a calmarse cuando estamos enojados', 'Verdadero', 'La respiración es una técnica efectiva para regular emociones intensas.'),
            mcq('p2fc-b1-03', 'Comunicación asertiva', 'Comunicación asertiva significa:', ['Hablar con respeto y claridad', 'Gritar siempre', 'Callar todo', 'Mentir'], 'Hablar con respeto y claridad', 'La comunicación asertiva expresa lo que pensamos y sentimos sin dañar a los demás.', '💬')]
        },
        {
            b: 2, nombre: 'Mi escuela, mi comunidad', meses: 'Octubre-Noviembre', temas: ['Convivencia escolar', 'Bullying', 'Normas escolares'],
            ejs: [mcq('p2fc-b2-01', 'Convivencia escolar', '¿Qué debemos hacer si alguien nos agrede en la escuela?', ['Decírselo a un adulto de confianza', 'Devolver el golpe', 'Ignorarlo siempre', 'Huir'],
                'Decírselo a un adulto de confianza', 'Ante situaciones de agresión, busca ayuda de un maestro, director o familiar. No estás solo.',
                '🏫'), tf('p2fc-b2-02', 'Bullying', 'El bullying solo es físico', 'Falso', 'El bullying puede ser físico, verbal, psicológico o cibernético (cyberbullying).'),
            mcq('p2fc-b2-03', 'Normas', 'Las normas escolares existen para:', ['Garantizar un ambiente seguro', 'Castigar a los alumnos', 'Hacer la vida difícil', 'Controlarnos'], 'Garantizar un ambiente seguro', 'Las normas escolares protegen a todos y crean un ambiente de aprendizaje positivo.', '📋')]
        },
        {
            b: 3, nombre: 'México, mi país', meses: 'Diciembre-Enero', temas: ['Símbolos patrios', 'Diversidad cultural', 'Orgullo nacional'],
            ejs: [mcq('p2fc-b3-01', 'Símbolos patrios', '¿Cuáles son los símbolos patrios de México?', ['Bandera, Himno y Escudo', 'Tacos, mariachi y sombrero', 'Pirámides y volcanes', 'Solo la bandera'], 'Bandera, Himno y Escudo', 'Los tres símbolos patrios de México son la Bandera Nacional, el Himno Nacional y el Escudo Nacional.', '🇲🇽'),
            tf('p2fc-b3-02', 'Diversidad', 'México es un país con mucha diversidad cultural', 'Verdadero', 'México tiene 68 grupos indígenas con lenguas y culturas propias. Es una riqueza enorme.'),
            mcq('p2fc-b3-03', 'Orgullo', '¿Por qué debemos cuidar nuestro país?', ['Porque es nuestro hogar y patrimonio de todos', 'Solo porque lo dicen los adultos', 'Por obligación', 'No es necesario'], 'Porque es nuestro hogar y patrimonio de todos', 'México es el patrimonio de todos sus ciudadanos. Cuidarlo es responsabilidad de cada uno.', '🦅')]
        },
        {
            b: 4, nombre: 'El cuidado del medio ambiente', meses: 'Febrero-Marzo', temas: ['Ecosistemas', 'Reciclaje', 'Acciones ecológicas'],
            ejs: [mcq('p2fc-b4-01', 'Ecosistemas', '¿Qué es un ecosistema?', ['Conjunto de seres vivos y su entorno', 'Solo los animales', 'Solo las plantas', 'Solo el agua'], 'Conjunto de seres vivos y su entorno', 'Un ecosistema incluye animales, plantas, suelo, agua y clima que interactúan entre sí.', '🌳'),
            mcq('p2fc-b4-02', 'Reciclaje', '¿Cuáles son los colores del reciclaje básico?', ['Verde, amarillo y azul', 'Rojo, negro y blanco', 'Rosa y gris', 'Solo azul'], 'Verde, amarillo y azul', 'Verde=vidrio, amarillo=plástico/latas, azul=papel. ¡Separar basura ayuda al planeta!', '♻️'),
            tf('p2fc-b4-03', 'Acciones', 'Apagar la luz cuando salimos de un cuarto ayuda al medio ambiente', 'Verdadero', 'Ahorra energía eléctrica, que suele producirse quemando combustibles que contaminan.')]
        },
        {
            b: 5, nombre: 'Ciudadanía digital', meses: 'Abril-Junio', temas: ['Uso responsable de internet', 'Privacidad', 'Huella digital'],
            ejs: [mcq('p2fc-b5-01', 'Internet', '¿Qué información NO debes compartir en internet?', ['Tu dirección y teléfono', 'Tu nombre', 'Tu color favorito', 'Tu animal preferido'], 'Tu dirección y teléfono', 'Nunca compartas datos personales como dirección, teléfono o contraseñas con desconocidos en línea.', '🔒'),
            tf('p2fc-b5-02', 'Privacidad', 'Cualquier persona puede ver todo lo que publicas en internet', 'Falso', 'Depende de la configuración de privacidad. Es importante revisar quién puede ver nuestras publicaciones.'),
            mcq('p2fc-b5-03', 'Huella digital', 'La huella digital es:', ['Lo que dejamos al usar internet', 'La huella de tu dedo', 'El diseño del teclado', 'Tu firma'], 'Lo que dejamos al usar internet', 'La huella digital son todos los datos y rastros que dejamos al navegar, publicar y usar apps en línea.', '💻')]
        },
    ],
};

// Primaria 3-6 de formación — versión condensada
['primaria-3', 'primaria-4', 'primaria-5', 'primaria-6'].forEach((grado, gi) => {
    const temas = [
        ['Derechos Humanos', 'Democracia y ciudadanía', 'Participación cívica', 'Paz y resolución de conflictos', 'Constitución Mexicana'],
        ['Estado de Derecho', 'Instituciones públicas', 'Bien común', 'Democracia participativa', 'Derechos y deberes ciudadanos'],
        ['Globalización y ciudadanía global', 'Justicia social', 'Medio ambiente y derechos', 'Diversidad y no discriminación', 'Cultura de paz'],
        ['Ética y filosofía moral', 'Derechos Humanos avanzados', 'Democracia representativa', 'México en el mundo', 'Proyecto de vida'],
    ];
    const nombres = [
        ['Mis derechos humanos', 'Democracia en mi comunidad', 'Yo participo', 'Resolver conflictos con diálogo', 'La Constitución nos protege'],
        ['El Estado y las leyes', 'Las instituciones y yo', 'El bien común', 'La democracia', 'Mis derechos y mis deberes'],
        ['Soy ciudadano global', 'Justicia para todos', 'Los derechos ambientales', 'Diversidad cultural', 'Una cultura de paz'],
        ['Ética y valores', 'Derechos universales', 'Representación democrática', 'México y el mundo', 'Mi proyecto de vida'],
    ];
    const mesesLista = ['Agosto-Septiembre', 'Octubre-Noviembre', 'Diciembre-Enero', 'Febrero-Marzo', 'Abril-Junio'];
    for (let b = 1; b <= 5; b++) {
        const temasBq = temas[gi];
        const nombreBq = nombres[gi][b - 1];
        const ejs = [
            mcq(`${grado}fc-b${b}-01`, temasBq[0], `¿Qué son los derechos humanos?`,
                ['Garantías que tienen todas las personas', 'Privilegios de unos pocos', 'Reglas del juego', 'Solo para adultos'],
                'Garantías que tienen todas las personas',
                'Los derechos humanos son universales, inalienables e indivisibles. Los tiene toda persona por el solo hecho de existir.', '⚖️'),
            tf(`${grado}fc-b${b}-02`, temasBq[1], `La democracia es solo votar cada seis años`,
                'Falso', 'La democracia es un sistema de participación continua: en la escuela, la comunidad y el país.'),
            mcq(`${grado}fc-b${b}-03`, temasBq[2], `¿Cómo se puede participar en la comunidad?`,
                ['Asistiendo a asambleas y proyectos comunes', 'Solo votando', 'Pagando impuestos', 'Viendo televisión'],
                'Asistiendo a asambleas y proyectos comunes',
                'La participación ciudadana incluye: votar, proponer proyectos, unirse a organizaciones sociales, asistir a cabildo.', '🗳️'),
            mcq(`${grado}fc-b${b}-04`, temasBq[3], `¿Qué es el diálogo en la resolución de conflictos?`,
                ['Comunicar puntos de vista para llegar a acuerdos', 'Ignorar al otro', 'Gritar más fuerte', 'Ganar siempre'],
                'Comunicar puntos de vista para llegar a acuerdos',
                'El diálogo pacífico busca acuerdos donde ambas partes se beneficien. Es la base de la convivencia democrática.', '🕊️'),
            fill(`${grado}fc-b${b}-05`, temasBq[4], `La ___ es la ley máxima de México`,
                'Constitución', 'La Constitución Política de los Estados Unidos Mexicanos (1917) es la ley fundamental del país.'),
        ];
        guardar(grado, 'formacion', b, nombreBq, mesesLista[b - 1], [temasBq[b - 1] || temasBq[0]], { v1: ejs, v2: [], preview: ejs.slice(0, 2) });
    }
});

// Guardar P1 y P2 formación
Object.entries(FORMACION).forEach(([grado, bloques]) => {
    bloques.forEach(({ b, nombre, meses, temas, ejs }) => {
        guardar(grado, 'formacion', b, nombre, meses, temas, { v1: ejs, v2: [], preview: ejs.slice(0, 2) });
    });
});

// ════════════════════════════════════════════════
// ARTES — PRIMARIA 1°-6°
// ════════════════════════════════════════════════

const ARTES_POR_GRADO = {
    'primaria-1': [
        ['El color primario', 'Música y ritmo básico', 'Expresión corporal', 'El dibujo libre', 'Mi historia en imágenes'],
        ['Colores primarios: rojo, azul y amarillo', 'Ritmo: palmas y pies', 'Movimiento corporal', 'Trazos y formas', 'Dibujar mi familia'],
    ],
    'primaria-2': [
        ['Colores secundarios', 'Sonidos del entorno', 'Danza folclórica', 'Escultura con plastilina', 'Teatro de títeres'],
        ['Mezcla de colores', 'Percepción auditiva', 'Bailes regionales', 'Modelado 3D', 'Actuación básica'],
    ],
    'primaria-3': [
        ['El retrato', 'Instrumentos musicales', 'Danza contemporánea', 'Collage y textura', 'Cómic y narrativa visual'],
        ['Proporciones del rostro', 'Familia de instrumentos', 'Movimiento expresivo', 'Técnicas de collage', 'Secuencia narrativa'],
    ],
    'primaria-4': [
        ['Perspectiva básica', 'Armonía musical', 'Folclor mexicano', 'Cerámica y arcilla', 'Teatro escolar'],
        ['Punto de fuga', 'Acordes y melodía', 'Danzas de México', 'Técnica de raku', 'Guión y escenificación'],
    ],
    'primaria-5': [
        ['El arte como lenguaje', 'Historia de la música', 'Danza de tradición', 'Murales y arte público', 'Fotografía y cine básico'],
        ['Interpretación de obras', 'Grandes compositores', 'Patrimonio danzístico', 'Arte comunitario', 'Imagen y mensaje'],
    ],
    'primaria-6': [
        ['Arte y sociedad', 'Música del mundo', 'Danza y cultura', 'Arte conceptual', 'Producción multimedia'],
        ['Arte crítico', 'Diversidad musical', 'Identidad en la danza', 'Instalación artística', 'Video y animación'],
    ],
};

Object.entries(ARTES_POR_GRADO).forEach(([grado, [nombres, subtemas]]) => {
    const mesesLista = ['Agosto-Septiembre', 'Octubre-Noviembre', 'Diciembre-Enero', 'Febrero-Marzo', 'Abril-Junio'];
    for (let b = 1; b <= 5; b++) {
        const nmb = nombres[b - 1] || nombres[0];
        const sub = subtemas[b - 1] || subtemas[0];
        const ejs = [
            mcq(`${grado}ar-b${b}-01`, nmb, `¿Cuál de estos es un elemento del arte visual?`,
                ['El color', 'La temperatura', 'El peso', 'El olor'], 'El color',
                'Los elementos del arte visual incluyen: color, forma, línea, textura, espacio y valor.', '🎨'),
            mcq(`${grado}ar-b${b}-02`, nmb, `¿Qué son los colores primarios?`,
                ['Rojo, azul y amarillo', 'Verde, naranja y morado', 'Negro, blanco y gris', 'Rosa, café y beige'],
                'Rojo, azul y amarillo',
                'Los colores primarios no se pueden crear mezclando otros. De ellos derivamos todos los demás colores.', '🔴'),
            tf(`${grado}ar-b${b}-03`, sub, `La música solo se puede escuchar, no sentir`,
                'Falso', 'La música se puede sentir físicamente: el ritmo, las vibraciones y las emociones que provoca son parte de la experiencia musical.'),
            mcq(`${grado}ar-b${b}-04`, sub, `¿Qué es el ritmo en música?`,
                ['La organización del tiempo en son ida', 'La letra de una canción', 'El instrumento principal', 'El volumen'],
                'La organización del tiempo en son ida',
                'El ritmo organiza los sonidos en el tiempo. Es el "pulso" de la música, como el latido del corazón.', '🎵'),
            mcq(`${grado}ar-b${b}-05`, nmb, `¿Para qué sirve el arte?`,
                ['Expresar emociones e ideas', 'Solo decorar paredes', 'Para gastar pintura', 'Solo para artistas famosos'],
                'Expresar emociones e ideas',
                'El arte es un lenguaje universal que nos permite expresar ideas, emociones, culturas e historias de forma creativa.', '✨'),
        ];
        guardar(grado, 'artes', b, nmb, mesesLista[b - 1], [sub], { v1: ejs, v2: [], preview: ejs.slice(0, 2) });
    }
});

console.log(`\n🎨 Materias generadas. Total: ${total} ejercicios nuevos`);
