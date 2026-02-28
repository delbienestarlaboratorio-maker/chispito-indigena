const fs = require('fs'), p = require('path');
const BASE = p.join(__dirname, '..', 'src', 'data', 'exercises');
function mc(id, t, q, ops, r, exp) { return { id, tema: t, tipo: 'multiple_choice', nivel: 'v1', pregunta: q, opciones: ops, respuestaCorrecta: r, explicacion: exp }; }
function tf(id, t, q, r, exp) { return { id, tema: t, tipo: 'true_false', nivel: 'v1', pregunta: q, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp }; }
function sv(g, m, b, n, mes, ts, ejs) {
    const d = p.join(BASE, g, m); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(p.join(d, 'bloque-' + b + '.json'), JSON.stringify({ grado: g, materia: m, bloque: b, nombre: n, meses: mes, temas: ts, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    console.log('  ✅ ' + g + '/' + m + '/bloque-' + b + ' (' + ejs.length + ' ejs)');
}

const G = 'primaria-1';
console.log('\n🏃 ED. FÍSICA — ' + G);

sv(G, 'educacion_fisica', 1, 'Mi cuerpo y sus movimientos', 'Ago-Sep', ['Partes del cuerpo', 'Movimientos básicos'], [
    mc('p1ef-b1-01', 'Cuerpo', '¿Qué partes del cuerpo usamos para CORRER?', ['Las piernas', 'Las manos', 'Los ojos', 'Las orejas'], 'Las piernas', 'Las piernas tienen músculos fuertes que nos permiten correr, saltar y caminar.'),
    mc('p1ef-b1-02', 'Cuerpo', '¿Cuántos brazos tenemos?', ['2', '4', '1', '3'], '2', 'Tenemos 2 brazos: el derecho y el izquierdo.'),
    tf('p1ef-b1-03', 'Movimiento', 'Saltar es un movimiento que hacemos con las piernas', 'Verdadero', 'Saltamos flexionando y estirando las piernas con fuerza hacia arriba.'),
    mc('p1ef-b1-04', 'Movimiento', '¿Qué es gatear?', ['Moverse con manos y rodillas en el piso', 'Correr muy rápido', 'Saltar alto', 'Dar vueltas'], 'Moverse con manos y rodillas en el piso', 'Gatear es un movimiento donde apoyamos manos y rodillas para desplazarnos.'),
    mc('p1ef-b1-05', 'Cuerpo', '¿Con qué parte del cuerpo aplaudimos?', ['Las manos', 'Los pies', 'La cabeza', 'Las rodillas'], 'Las manos', 'Aplaudimos juntando las palmas de las manos.'),
    tf('p1ef-b1-06', 'Salud', 'Hacer ejercicio nos ayuda a estar sanos', 'Verdadero', 'El ejercicio fortalece nuestros músculos, huesos y corazón.'),
    mc('p1ef-b1-07', 'Cuerpo', '¿Qué parte del cuerpo está encima del cuello?', ['La cabeza', 'Los pies', 'Las manos', 'La espalda'], 'La cabeza', 'La cabeza está en la parte superior del cuerpo, arriba del cuello.'),
    mc('p1ef-b1-08', 'Movimiento', '¿Cuál de estos es un movimiento?', ['Brincar', 'Dormir', 'Comer', 'Leer'], 'Brincar', 'Brincar o saltar es un movimiento físico que usa las piernas.'),
    tf('p1ef-b1-09', 'Cuerpo', 'Los pies nos sirven para caminar', 'Verdadero', 'Los pies sostienen nuestro cuerpo y nos permiten caminar, correr y saltar.'),
    mc('p1ef-b1-10', 'Cuerpo', '¿Para qué sirve el corazón cuando hacemos ejercicio?', ['Bombea sangre más rápido para dar energía', 'Se detiene', 'Se encoge', 'No hace nada'], 'Bombea sangre más rápido para dar energía', 'Cuando corremos, el corazón late más rápido para llevar oxígeno a los músculos.'),
]);

sv(G, 'educacion_fisica', 2, 'Juegos y reglas', 'Oct-Nov', ['Juegos organizados', 'Trabajo en equipo'], [
    mc('p1ef-b2-01', 'Juegos', '¿Para qué sirven las reglas en un juego?', ['Para que todos jueguen bien y se diviertan', 'Para castigar', 'Para ganar siempre', 'Para aburrirnos'], 'Para que todos jueguen bien y se diviertan', 'Las reglas hacen que el juego sea justo y divertido para todos.'),
    tf('p1ef-b2-02', 'Convivencia', 'Debemos respetar a nuestros compañeros cuando jugamos', 'Verdadero', 'El respeto hace que todos disfruten del juego sin peleas ni problemas.'),
    mc('p1ef-b2-03', 'Juegos', 'En el juego de "las traes", ¿qué hace el que la lleva?', ['Persigue a los demás para tocarlos', 'Se esconde', 'Se sienta', 'Canta'], 'Persigue a los demás para tocarlos', 'El jugador que "la lleva" corre para tocar a otro, quien pasa a ser el perseguidor.'),
    mc('p1ef-b2-04', 'Equipo', '¿Qué hacemos si un compañero se cae durante el juego?', ['Lo ayudamos a levantarse', 'Nos reímos', 'Lo ignoramos', 'Seguimos sin él'], 'Lo ayudamos a levantarse', 'Ayudar a un compañero es lo correcto. Si se lastimó, avisamos al profesor.'),
    tf('p1ef-b2-05', 'Juegos', 'Solo los niños grandes pueden jugar', 'Falso', 'Todos los niños pueden jugar, adaptando los juegos a su edad y capacidad.'),
    mc('p1ef-b2-06', 'Equipo', '¿Qué significa trabajar en equipo?', ['Colaborar juntos para lograr algo', 'Hacer todo solo', 'Pelear con los demás', 'No participar'], 'Colaborar juntos para lograr algo', 'Trabajar en equipo es unir esfuerzos para alcanzar una meta entre todos.'),
    mc('p1ef-b2-07', 'Juegos', '¿Qué hacemos al terminar un juego?', ['Guardar el material y agradecer', 'Tirar las cosas', 'Pelear', 'Irnos sin decir nada'], 'Guardar el material y agradecer', 'Al terminar guardamos el material y damos las gracias a quienes jugaron con nosotros.'),
    tf('p1ef-b2-08', 'Convivencia', 'Si perdemos un juego podemos enojarnos y pelear', 'Falso', 'Perder es parte del juego. Lo importante es divertirse y aprender.'),
    mc('p1ef-b2-09', 'Juegos', '¿Qué juego se hace con un balón grande que hay que meter en una portería?', ['Futbol', 'Ajedrez', 'Lotería', 'Memorama'], 'Futbol', 'En el futbol se patea un balón para meterlo en la portería del equipo contrario.'),
    mc('p1ef-b2-10', 'Equipo', '¿Cómo elegimos quién empieza un juego de forma justa?', ['Con piedra, papel o tijera', 'El más grande siempre', 'Peleando', 'El que llore más'], 'Con piedra, papel o tijera', 'Piedra, papel o tijera es una forma justa de decidir, porque depende de la suerte.'),
]);

sv(G, 'educacion_fisica', 3, 'Ritmo y expresión corporal', 'Dic-Ene', ['Expresión con el cuerpo', 'Movimiento rítmico'], [
    mc('p1ef-b3-01', 'Ritmo', '¿Qué es el ritmo?', ['El pulso o "tic-tac" de la música', 'El nombre de la canción', 'El volumen', 'El cantante'], 'El pulso o "tic-tac" de la música', 'El ritmo es el patrón regular que podemos seguir aplaudiendo o bailando.'),
    tf('p1ef-b3-02', 'Expresión', 'Podemos expresar emociones con nuestro cuerpo', 'Verdadero', 'Con gestos, movimientos y postura podemos mostrar alegría, tristeza o sorpresa.'),
    mc('p1ef-b3-03', 'Ritmo', '¿Cómo seguimos el ritmo de una canción?', ['Aplaudiendo con las palmas', 'Durmiendo', 'Comiendo', 'Leyendo'], 'Aplaudiendo con las palmas', 'Podemos aplaudir, zapatear o mover el cuerpo al compás de la música.'),
    mc('p1ef-b3-04', 'Expresión', 'Si la música es lenta, ¿cómo nos movemos?', ['Despacio y suave', 'Muy rápido', 'No nos movemos', 'Brincando fuerte'], 'Despacio y suave', 'Cuando la música es lenta, nuestros movimientos son lentos y suaves.'),
    tf('p1ef-b3-05', 'Expresión', 'Bailar es solo para niñas', 'Falso', 'Bailar es para todos. Es una forma de expresarse y hacer ejercicio.'),
    mc('p1ef-b3-06', 'Ritmo', '¿Con qué parte del cuerpo también podemos marcar el ritmo?', ['Con los pies, pisando fuerte', 'Con los ojos', 'Con la nariz', 'Con las orejas'], 'Con los pies, pisando fuerte', 'Zapatear o pisar al compás es otra forma de marcar el ritmo.'),
    mc('p1ef-b3-07', 'Expresión', 'Si quieres expresar ALEGRÍA con tu cuerpo, ¿qué haces?', ['Saltar, reír y abrir los brazos', 'Arrastrar los pies', 'Cruzar los brazos y fruncir el ceño', 'Quedarte quieto'], 'Saltar, reír y abrir los brazos', 'La alegría se expresa con movimientos abiertos, amplios y energéticos.'),
    tf('p1ef-b3-08', 'Ritmo', 'Una canción rápida necesita movimientos rápidos', 'Verdadero', 'El cuerpo sigue el tempo de la música: rápido con canciones rápidas y lento con lentas.'),
    mc('p1ef-b3-09', 'Expresión', '¿Qué es una ronda infantil?', ['Un juego donde los niños cantan y se mueven en círculo', 'Un deporte olímpico', 'Una clase de matemáticas', 'Una comida'], 'Un juego donde los niños cantan y se mueven en círculo', 'Las rondas como "La rueda de San Miguel" combinan canto y movimiento en grupo.'),
    mc('p1ef-b3-10', 'Ritmo', '¿Qué instrumentos nos ayudan a hacer ritmo?', ['Tambor, maracas, pandero', 'Libro, lápiz, borrador', 'Cuchara, tenedor, plato', 'Zapato, calcetín, moño'], 'Tambor, maracas, pandero', 'Los instrumentos de percusión como el tambor nos ayudan a marcar el ritmo.'),
]);

sv(G, 'educacion_fisica', 4, 'Hábitos de vida saludable', 'Feb-Mar', ['Alimentación', 'Higiene y descanso'], [
    mc('p1ef-b4-01', 'Alimentación', '¿Qué alimentos nos dan más energía para jugar?', ['Frutas y verduras', 'Solo dulces y refrescos', 'Solo papas fritas', 'Solo galletas'], 'Frutas y verduras', 'Las frutas y verduras tienen vitaminas y minerales que nos dan energía real y duradera.'),
    tf('p1ef-b4-02', 'Higiene', 'Es importante lavarse las manos antes de comer', 'Verdadero', 'Lavarse las manos con agua y jabón elimina los gérmenes que nos pueden enfermar.'),
    mc('p1ef-b4-03', 'Alimentación', '¿Cuántas comidas principales debemos hacer al día?', ['3: desayuno, comida y cena', 'Solo 1', 'Solo 2', '5 comidas grandes'], '3: desayuno, comida y cena', 'Las 3 comidas principales nos dan la energía que necesitamos durante todo el día.'),
    mc('p1ef-b4-04', 'Descanso', '¿Cuántas horas deben dormir los niños de primaria?', ['9 a 12 horas', '3 horas', 'Solo 5 horas', 'Todo el día'], '9 a 12 horas', 'Los niños de 6-7 años necesitan entre 9 y 12 horas de sueño para crecer bien.'),
    tf('p1ef-b4-05', 'Hidratación', 'Tomar agua es importante todos los días', 'Verdadero', 'El agua ayuda a que nuestro cuerpo funcione bien y no se deshidrate.'),
    mc('p1ef-b4-06', 'Higiene', '¿Cuántas veces al día debemos cepillarnos los dientes?', ['3 veces: después de cada comida', 'Solo 1 vez al año', 'Nunca', 'Solo cuando duelen'], '3 veces: después de cada comida', 'Cepillarnos después de cada comida previene las caries y mantiene los dientes sanos.'),
    mc('p1ef-b4-07', 'Alimentación', '¿Qué bebida es la más saludable?', ['Agua natural', 'Refresco', 'Jugo de caja', 'Café'], 'Agua natural', 'El agua natural es la mejor opción para hidratarnos sin azúcar añadida.'),
    tf('p1ef-b4-08', 'Descanso', 'Hacer ejercicio durante el día nos ayuda a dormir mejor', 'Verdadero', 'La actividad física durante el día nos ayuda a descansar mejor en la noche.'),
    mc('p1ef-b4-09', 'Higiene', '¿Cómo debemos cubrirnos al estornudar?', ['Con el codo, no con la mano', 'Con la mano abierta hacia los demás', 'No cubrirse', 'Con la mano del compañero'], 'Con el codo, no con la mano', 'Cubrirnos con el codo evita que los gérmenes queden en la mano y se contagien.'),
    mc('p1ef-b4-10', 'Alimentación', 'El Plato del Bien Comer tiene:', ['Frutas, verduras, cereales y alimentos de origen animal', 'Solo carne', 'Solo dulces', 'Solo leche'], 'Frutas, verduras, cereales y alimentos de origen animal', 'El Plato del Bien Comer nos enseña a comer de todos los grupos de alimentos.'),
]);

sv(G, 'educacion_fisica', 5, 'Juegos al aire libre y naturaleza', 'Abr-Jun', ['Actividades al aire libre', 'Cuidado del medio ambiente'], [
    mc('p1ef-b5-01', 'Aire libre', '¿Por qué es bueno jugar al aire libre?', ['Nos da sol, aire fresco y espacio para movernos', 'Solo porque sí', 'Para alejarnos de casa', 'Para no estudiar'], 'Nos da sol, aire fresco y espacio para movernos', 'El sol nos da vitamina D, el aire fresco nos oxigena y el espacio nos deja movernos libremente.'),
    tf('p1ef-b5-02', 'Naturaleza', 'Debemos cuidar los árboles y plantas del parque', 'Verdadero', 'Los árboles y plantas nos dan oxígeno, sombra y son hogar de animales.'),
    mc('p1ef-b5-03', 'Seguridad', '¿Qué debemos llevar al parque en un día de mucho sol?', ['Agua y gorra o sombrero', 'Solo dulces', 'Un abrigo de invierno', 'Nada'], 'Agua y gorra o sombrero', 'El agua nos hidrata y la gorra protege nuestra cabeza del sol.'),
    mc('p1ef-b5-04', 'Naturaleza', '¿Dónde debemos tirar la basura en el parque?', ['En el bote de basura', 'En el pasto', 'En la fuente de agua', 'Debajo de un árbol'], 'En el bote de basura', 'Tirar la basura en su lugar cuida el medio ambiente y los espacios para todos.'),
    tf('p1ef-b5-05', 'Naturaleza', 'No debemos arrancar las flores de los jardines', 'Verdadero', 'Las flores son parte de las plantas vivas y arrancarlas les hace daño.'),
    mc('p1ef-b5-06', 'Aire libre', '¿Qué actividades podemos hacer en el parque?', ['Correr, saltar, columpiarse, jugar pelota', 'Solo sentarse', 'Solo ver el celular', 'Solo comer'], 'Correr, saltar, columpiarse, jugar pelota', 'El parque es el lugar perfecto para muchas actividades físicas divertidas.'),
    mc('p1ef-b5-07', 'Seguridad', 'Si te lastimas jugando en el parque, ¿qué haces?', ['Aviso a un adulto', 'Me quedo callado', 'Sigo jugando', 'Me escondo'], 'Aviso a un adulto', 'Siempre debemos avisar a un adulto cuando nos lastimamos para que nos ayude.'),
    tf('p1ef-b5-08', 'Naturaleza', 'El agua de los ríos y lagos debemos cuidarla', 'Verdadero', 'El agua limpia es necesaria para las personas, los animales y las plantas.'),
    mc('p1ef-b5-09', 'Aire libre', '¿Qué juego se hace con una cuerda larga que se brinca?', ['Saltar la cuerda', 'Ajedrez', 'Dominó', 'Lotería'], 'Saltar la cuerda', 'Saltar la cuerda es un juego al aire libre excelente para las piernas y el corazón.'),
    mc('p1ef-b5-10', 'Naturaleza', '¿Por qué cerramos la llave del agua cuando no la usamos?', ['Para no desperdiciarla', 'Para que no se moje el piso', 'Por costumbre', 'No importa'], 'Para no desperdiciarla', 'El agua es un recurso limitado y debemos cuidarla cerrando la llave siempre.'),
]);

console.log('\n✅ PRIMARIA 1° — Educación Física COMPLETA (50 ejercicios)');
