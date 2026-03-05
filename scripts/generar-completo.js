const fs = require('fs'), path = require('path');
const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');
let total = 0;

function mc(id, tema, p, ops, r, exp, vis = '') {
    return { id, tema, tipo: 'multiple_choice', nivel: 'v1', pregunta: p, opciones: ops, respuestaCorrecta: r, explicacion: exp, visual: vis };
}
function tf(id, tema, p, r, exp) {
    return { id, tema, tipo: 'true_false', nivel: 'v1', pregunta: p, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp };
}
function save(grado, mat, b, nombre, meses, temas, ejs) {
    const dir = path.join(BASE, grado, mat);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `bloque-${b}.json`), JSON.stringify({ grado, materia: mat, bloque: b, nombre, meses, temas, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    total += ejs.length;
    console.log(`  ✅ ${grado}/${mat}/bloque-${b} (${ejs.length} ejs)`);
}

// ══════════════════════════════════
// 1. EDUCACIÓN FÍSICA — KINDER
// ══════════════════════════════════
const EF_BLOQUES = [
    {
        b: 1, nombre: 'Mi cuerpo se mueve', meses: 'Ago-Sep', temas: ['Partes del cuerpo', 'Movimiento básico'], ejs: [
            mc('ef-b1-01', 'Cuerpo', '¿Qué parte usamos para correr?', ['Las piernas', 'Las manos', 'Los ojos', 'Los oídos'], 'Las piernas', 'Las piernas nos permiten caminar, correr y saltar.', '🦵'),
            mc('ef-b1-02', 'Cuerpo', '¿Cuántos dedos tenemos en total en las manos?', ['10', '5', '8', '6'], '10', '5 dedos en cada mano = 10 en total.', '🤲'),
            tf('ef-b1-03', 'Cuerpo', 'Podemos aplaudir con los pies', 'Falso', 'Aplaudimos con las manos, no con los pies.'),
            mc('ef-b1-04', 'Movimiento', '¿Qué es saltar?', ['Elevarnos del suelo con las piernas', 'Dormir', 'Comer', 'Reír'], 'Elevarnos del suelo con las piernas', 'Saltar es impulsarnos hacia arriba con fuerza en las piernas.', '⬆️'),
            mc('ef-b1-05', 'Movimiento', '¿Cómo nos movemos al gatear?', ['Con manos y rodillas', 'Solo con los pies', 'Con los codos', 'Con la cabeza'], 'Con manos y rodillas', 'Al gatear apoyamos las manos y las rodillas en el suelo.', '🐾'),
            tf('ef-b1-06', 'Salud', 'Hacer ejercicio nos da energía', 'Verdadero', 'El ejercicio activa el cuerpo y nos da más energía durante el día.'),
            mc('ef-b1-07', 'Cuerpo', '¿Qué usamos para atrapar una pelota?', ['Las manos', 'Los pies', 'La cabeza', 'La espalda'], 'Las manos', 'Con las manos y los dedos agarramos y atrapamos objetos.', '⚽'),
            mc('ef-b1-08', 'Cuerpo', '¿Qué parte protege el casco?', ['La cabeza', 'Los pies', 'Las manos', 'El cuello'], 'La cabeza', 'El casco protege nuestra cabeza de golpes al andar en bicicleta.', '⛑️'),
            tf('ef-b1-09', 'Movimiento', 'Correr y caminar son movimientos del cuerpo', 'Verdadero', 'Correr y caminar son formas de desplazarnos usando las piernas.'),
            mc('ef-b1-10', 'Salud', '¿Para qué sirve el ejercicio?', ['Para estar sanos y fuertes', 'Solo para cansarnos', 'Para no comer', 'Para dormir todo el día'], 'Para estar sanos y fuertes', 'El ejercicio fortalece músculos, huesos y el corazón.', '💪'),
        ]
    },
    {
        b: 2, nombre: 'Jugamos juntos', meses: 'Oct-Nov', temas: ['Juegos de grupo', 'Reglas del juego'], ejs: [
            mc('ef-b2-01', 'Juego', '¿Para qué sirven las reglas en un juego?', ['Para que todos jueguen bien', 'Para castigar', 'Para ganar siempre', 'Para no jugar'], 'Para que todos jueguen bien', 'Las reglas garantizan diversión justa para todos.', '🎮'),
            tf('ef-b2-02', 'Convivencia', 'Debemos respetar a los demás al jugar', 'Verdadero', 'Respetar a los compañero hace que todos se diviertan.'),
            mc('ef-b2-03', 'Juego', 'En las "traes", ¿qué hace quien la lleva?', ['Persigue a los demás', 'Se esconde', 'Se queda quieto', 'Canta'], 'Persigue a los demás', 'Quien "la lleva" corre para tocar a otro jugador.', '🏃'),
            mc('ef-b2-04', 'Convivencia', 'Si un amigo se cae jugando, ¿qué hago?', ['Lo ayudo', 'Lo ignoro', 'Me río', 'Sigo jugando'], 'Lo ayudo', 'Ayudar a un amigo lastimado es lo correcto. Avisa a un adulto si es necesario.', '🤝'),
            tf('ef-b2-05', 'Juego', 'Solo los niños grandes pueden jugar', 'Falso', 'Todos pueden jugar, adaptando las actividades a cada edad.'),
            mc('ef-b2-06', 'Juego', 'En "Simón dice", hacemos caso cuando:', ['Simón lo ordena', 'Cualquier niño lo diga', 'Nadie lo diga', 'Solo si queremos'], 'Simón lo ordena', 'Solo ejecutamos la acción si se dice "Simón dice...".', '👑'),
            tf('ef-b2-07', 'Juego', 'Jugar en equipo enseña a compartir', 'Verdadero', 'El juego en equipo fomenta cooperación y convivencia.'),
            mc('ef-b2-08', 'Juego', '¿Qué hacemos al terminar el juego?', ['Guardar materiales y agradecer', 'Tirar todo', 'Pelearnos', 'Nada'], 'Guardar materiales y agradecer', 'Al terminar guardamos todo y agradecemos a quienes jugaron.', '🙏'),
            mc('ef-b2-09', 'Juego', '¿Cuántas manos usamos para atrapar una pelota grande?', ['Dos', 'Una', 'Ninguna', 'Tres'], 'Dos', 'Con las dos manos sujetamos mejor una pelota grande.', '🏀'),
            tf('ef-b2-10', 'Convivencia', 'Podemos pelear si perdemos un juego', 'Falso', 'Perder forma parte del juego. Lo importante es disfrutar y aprender.'),
        ]
    },
    {
        b: 3, nombre: 'Me muevo con música', meses: 'Dic-Ene', temas: ['Ritmo', 'Danza básica'], ejs: [
            mc('ef-b3-01', 'Ritmo', 'El ritmo de una canción es como:', ['Su latido o pulso', 'Su nombre', 'Su color', 'Su volumen'], 'Su latido o pulso', 'El ritmo es el pulso regular de la música que podemos seguir.', '🎵'),
            tf('ef-b3-02', 'Danza', 'Podemos bailar con todo el cuerpo', 'Verdadero', 'Brazos, piernas, cabeza... todo el cuerpo puede bailar.'),
            mc('ef-b3-03', 'Ritmo', '¿Cómo podemos marcar el ritmo?', ['Aplaudiendo', 'Durmiendo', 'Comiendo', 'Leyendo'], 'Aplaudiendo', 'Aplaudir al compás de la música es marcar el ritmo.', '👏'),
            mc('ef-b3-04', 'Danza', '¿Qué danza es típica de México?', ['El Jarabe Tapatío', 'La Salsa', 'El Flamenco', 'El Tango'], 'El Jarabe Tapatío', 'El Jarabe Tapatío es el baile nacional de México, originario de Jalisco.', '🌮'),
            tf('ef-b3-05', 'Danza', 'Bailar es solo para niñas', 'Falso', '¡El baile es para todos! Es una forma de expresarse.'),
            mc('ef-b3-06', 'Movimiento', 'Si la música va rápido, nos movemos:', ['Rápido', 'Muy despacio', 'No nos movemos', 'Más despacio aún'], 'Rápido', 'El cuerpo sigue el tempo de la música.', '⚡'),
            tf('ef-b3-07', 'Salud', 'Cuando nos cansamos bailando, debemos descansar', 'Verdadero', 'El descanso y la hidratación son clave durante el ejercicio.'),
            mc('ef-b3-08', 'Danza', '¿Qué movemos cuando "agitamos los brazos"?', ['Los brazos', 'Las piernas', 'La cabeza', 'Los pies'], 'Los brazos', 'Agitar los brazos es un movimiento de las extremidades superiores.', '💃'),
            mc('ef-b3-09', 'Ritmo', '¿Con qué también marcamos el ritmo además de aplaudir?', ['Pisando el suelo', 'Con los ojos', 'Con la nariz', 'Con las orejas'], 'Pisando el suelo', 'Zapatear o pisar al compás es otra forma de marcar el ritmo.', '🦶'),
            mc('ef-b3-10', 'Danza', 'La danza nos ayuda a:', ['Expresarnos y hacer ejercicio', 'Solo comer', 'Dormir más', 'Estudiar matemáticas'], 'Expresarnos y hacer ejercicio', 'La danza combina expresión artística con actividad física.', '🎭'),
        ]
    },
    {
        b: 4, nombre: 'Soy saludable', meses: 'Feb-Mar', temas: ['Hábitos saludables', 'Higiene'], ejs: [
            mc('ef-b4-01', 'Salud', '¿Para qué lavamos las manos?', ['Para quitar gérmenes', 'Para que brillen', 'Para que no crezcan', 'Para dormir'], 'Para quitar gérmenes', 'Lavarse las manos con jabón elimina los gérmenes que nos enferman.', '🧼'),
            tf('ef-b4-02', 'Salud', 'Las frutas y verduras nos ayudan a crecer sanos', 'Verdadero', 'Tienen vitaminas y minerales esenciales para nuestro cuerpo.'),
            mc('ef-b4-03', 'Higiene', '¿Cuántas veces debemos lavarnos los dientes?', ['3 veces al día', '1 vez por semana', 'Nunca', 'Solo de noche'], '3 veces al día', 'Después de cada comida: desayuno, comida y cena.', '🦷'),
            mc('ef-b4-04', 'Salud', '¿Cuántas horas deben dormir niños de preescolar?', ['10 a 13 horas', '3 horas', '24 horas', '5 horas'], '10 a 13 horas', 'Los niños pequeños necesitan más horas de sueño para crecer y aprender.', '😴'),
            tf('ef-b4-05', 'Salud', 'Beber agua es importante cada día', 'Verdadero', 'El agua es esencial para que todo el cuerpo funcione bien.'),
            mc('ef-b4-06', 'Higiene', '¿Cuándo debemos lavarnos las manos?', ['Antes de comer y después del baño', 'Solo cuando están sucias', 'Una vez al día', 'Nunca'], 'Antes de comer y después del baño', 'Estos son los momentos más importantes para prevenir enfermedades.', '🚿'),
            tf('ef-b4-07', 'Salud', 'El ejercicio ayuda a dormir mejor', 'Verdadero', 'Activarse durante el día mejora la calidad del sueño nocturno.'),
            mc('ef-b4-08', 'Higiene', '¿Cómo cubrimos al estornudar?', ['Con el codo', 'Con la mano abierta', 'Con nada', 'Con la mano de otro'], 'Con el codo', 'El codo evita que los gérmenes queden en la mano y se propaguen.', '🤧'),
            mc('ef-b4-09', 'Salud', '¿Qué alimento da energía real y duradera?', ['Frutas y verduras', 'Dulces y refrescos', 'Solo agua', 'Frituras'], 'Frutas y verduras', 'Los azúcares naturales de frutas y verduras dan energía sostenida.', '🍎'),
            tf('ef-b4-10', 'Salud', 'Comer dulces en exceso es bueno para los dientes', 'Falso', 'El exceso de azúcar daña el esmalte dental y provoca caries.'),
        ]
    },
    {
        b: 5, nombre: 'Naturaleza activa', meses: 'Abr-Jun', temas: ['Aire libre', 'Cuidado del entorno'], ejs: [
            mc('ef-b5-01', 'Naturaleza', '¿Por qué es bueno jugar al aire libre?', ['Nos da sol y espacio para movernos', 'Porque está de moda', 'Para alejarse de casa', 'Para no estudiar'], 'Nos da sol y espacio para movernos', 'El sol nos da vitamina D y el espacio exterior invita a moverse más.', '🌞'),
            tf('ef-b5-02', 'Entorno', 'Debemos cuidar las plantas del parque', 'Verdadero', 'Las plantas son seres vivos que benefician al medio ambiente.'),
            mc('ef-b5-03', 'Salud', 'En un día caluroso debemos llevar al parque:', ['Agua y protector solar', 'Solo dulces', 'Un abrigo', 'Nada'], 'Agua y protector solar', 'El agua hidrata y el protector solar cuida la piel del sol.', '☀️'),
            mc('ef-b5-04', 'Entorno', '¿Dónde tiramos la basura?', ['En el bote', 'En el suelo', 'En el río', 'En el pasto'], 'En el bote', 'Tirar basura en su lugar mantiene los espacios limpios para todos.', '🗑️'),
            tf('ef-b5-05', 'Entorno', 'Los animales del parque merecen respeto', 'Verdadero', 'Los animales son parte del ecosistema y debemos respetarlos.'),
            mc('ef-b5-06', 'Actividad', '¿Qué hacemos en el parque?', ['Correr, saltar y jugar', 'Solo sentarse', 'Solo comer', 'Solo ver el celular'], 'Correr, saltar y jugar', 'El parque es el lugar ideal para actividades físicas variadas.', '🌳'),
            tf('ef-b5-07', 'Entorno', 'Arrancar flores del parque está bien', 'Falso', 'Las plantas necesitan sus flores para reproducirse. No las arranques.'),
            mc('ef-b5-08', 'Salud', '¿Qué hacemos si encontramos un animal lastimado?', ['Avisamos a un adulto', 'Lo dejamos solo', 'Lo asustamos', 'Lo cargamos y corremos'], 'Avisamos a un adulto', 'Un adulto sabrá cómo buscar ayuda veterinaria adecuada.', '🦮'),
            mc('ef-b5-09', 'Entorno', '¿Por qué cerramos la llave cuando no usamos agua?', ['Para no desperdiciarla', 'Para que no se moje el piso', 'Por costumbre', 'No la cerramos'], 'Para no desperdiciarla', 'El agua es un recurso valioso y debemos cuidarla.', '💧'),
            tf('ef-b5-10', 'Actividad', 'Caminar es un buen ejercicio', 'Verdadero', 'Caminar ejercita el corazón y los músculos de forma sencilla y efectiva.'),
        ]
    },
];

console.log('\n🏃 KINDER — Educación Física');
['preescolar-1', 'preescolar-2', 'kinder'].forEach(g => {
    console.log(`\n  📂 ${g}`);
    EF_BLOQUES.forEach(({ b, nombre, meses, temas, ejs }) => {
        const adapted = ejs.map(e => ({ ...e, id: e.id.replace('ef-', g.replace('-', '') + 'ef-') }));
        save(g, 'educacion_fisica', b, nombre, meses, temas, adapted);
    });
});
fs.appendFileSync('inventario.txt', '\n-- Educación Física Kinder OK --');
console.log(`\n  Subtotal Ed.Física Kinder: ${total} ejs`);
