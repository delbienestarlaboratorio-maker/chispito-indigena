const fs = require('fs'), p = require('path');
const BASE = p.join(__dirname, '..', 'src', 'data', 'exercises');
function mc(id, t, q, ops, r, exp) { return { id, tema: t, tipo: 'multiple_choice', nivel: 'v1', pregunta: q, opciones: ops, respuestaCorrecta: r, explicacion: exp }; }
function tf(id, t, q, r, exp) { return { id, tema: t, tipo: 'true_false', nivel: 'v1', pregunta: q, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp }; }
function sv(g, m, b, n, mes, ts, ejs) {
    const d = p.join(BASE, g, m); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(p.join(d, 'bloque-' + b + '.json'), JSON.stringify({ grado: g, materia: m, bloque: b, nombre: n, meses: mes, temas: ts, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    console.log('  ✅ ' + g + '/' + m + '/bloque-' + b + ' (' + ejs.length + ' ejs)');
}

const G = 'primaria-2';
console.log('\n🏃 ED. FÍSICA — ' + G);

sv(G, 'educacion_fisica', 1, 'Conozco mi cuerpo en movimiento', 'Ago-Sep', ['Lateralidad', 'Equilibrio'], [
    mc('p2ef-b1-01', 'Lateralidad', '¿Cuál es tu mano derecha?', ['La que usamos para saludar (la mayoría)', 'La izquierda', 'Las dos', 'Ninguna'], 'La que usamos para saludar (la mayoría)', 'La mayoría de las personas usan la mano derecha para saludar y escribir.'),
    mc('p2ef-b1-02', 'Equilibrio', '¿Qué es el equilibrio?', ['Mantenernos de pie sin caernos', 'Correr muy rápido', 'Saltar muy alto', 'Gritar fuerte'], 'Mantenernos de pie sin caernos', 'El equilibrio nos permite mantenernos estables al caminar, correr o pararnos en un pie.'),
    tf('p2ef-b1-03', 'Lateralidad', 'Tenemos un lado derecho y un lado izquierdo del cuerpo', 'Verdadero', 'Nuestro cuerpo tiene dos lados simétricos: derecho e izquierdo.'),
    mc('p2ef-b1-04', 'Equilibrio', '¿Puedes mantenerte parado en UN solo pie?', ['Sí, con práctica y equilibrio', 'No, es imposible', 'Solo los adultos pueden', 'Solo con los ojos cerrados'], 'Sí, con práctica y equilibrio', 'Pararse en un pie ejercita nuestro equilibrio. Con práctica mejoramos mucho.'),
    mc('p2ef-b1-05', 'Lateralidad', 'Si lanzo una pelota con la mano derecha, ¿qué pierna debo adelantar?', ['La izquierda', 'La derecha', 'Ninguna', 'Las dos'], 'La izquierda', 'Al lanzar con la derecha, adelantamos la pierna contraria (izquierda) para mejor equilibrio.'),
    tf('p2ef-b1-06', 'Cuerpo', 'Las articulaciones nos permiten doblar partes del cuerpo', 'Verdadero', 'Los codos, rodillas, muñecas y tobillos son articulaciones que permiten el movimiento.'),
    mc('p2ef-b1-07', 'Equilibrio', '¿Qué ejercicio mejora el equilibrio?', ['Caminar sobre una línea recta', 'Sentarse todo el día', 'Dormir mucho', 'Ver la televisión'], 'Caminar sobre una línea recta', 'Caminar sobre una línea requiere concentración y equilibrio. Es excelente práctica.'),
    mc('p2ef-b1-08', 'Cuerpo', '¿Cuántas rodillas tenemos?', ['2', '4', '1', '6'], '2', 'Tenemos 2 rodillas: una en cada pierna. Nos ayudan a doblar las piernas.'),
    tf('p2ef-b1-09', 'Lateralidad', 'Todos usamos la misma mano para escribir', 'Falso', 'Algunos son diestros (mano derecha) y otros zurdos (mano izquierda). Ambos está bien.'),
    mc('p2ef-b1-10', 'Cuerpo', '¿Para qué sirve el calentamiento antes del ejercicio?', ['Para preparar los músculos y evitar lesiones', 'Para cansarnos antes', 'Para perder tiempo', 'Para nada'], 'Para preparar los músculos y evitar lesiones', 'El calentamiento calienta los músculos y los hace más flexibles para no lastimarnos.'),
]);

sv(G, 'educacion_fisica', 2, 'Juegos cooperativos', 'Oct-Nov', ['Cooperación', 'Comunicación en el juego'], [
    mc('p2ef-b2-01', 'Cooperación', '¿Qué es un juego cooperativo?', ['Un juego donde TODOS trabajan juntos para ganar', 'Un juego donde solo uno gana', 'Un juego sin reglas', 'Un juego de computadora'], 'Un juego donde TODOS trabajan juntos para ganar', 'En los juegos cooperativos no hay un solo ganador: todos colaboran para lograr el objetivo.'),
    tf('p2ef-b2-02', 'Equipo', 'En un juego de equipo, es importante escuchar a los compañeros', 'Verdadero', 'Escuchar las ideas de los demás nos ayuda a jugar mejor y a resolver problemas juntos.'),
    mc('p2ef-b2-03', 'Cooperación', 'En la carrera de relevos, ¿qué se pasan los corredores?', ['Un bastón o testimonio', 'Una pelota', 'Un zapato', 'Nada'], 'Un bastón o testimonio', 'En los relevos, cada corredor pasa el bastón al siguiente. Es trabajo en equipo.'),
    mc('p2ef-b2-04', 'Comunicación', '¿Cómo avisamos a un compañero que le van a lanzar la pelota?', ['Gritándole su nombre o diciendo "¡va!"', 'Tirándosela sin avisar', 'No avisamos', 'Lanzándola al piso'], 'Gritándole su nombre o diciendo "¡va!"', 'Avisar antes de lanzar previene accidentes y mejora la coordinación del equipo.'),
    tf('p2ef-b2-05', 'Cooperación', 'En un juego cooperativo puedo ayudar a un compañero que le cuesta trabajo', 'Verdadero', 'Ayudar a los demás es la esencia de los juegos cooperativos.'),
    mc('p2ef-b2-06', 'Equipo', '¿Qué hacemos si no estamos de acuerdo con un compañero en el juego?', ['Hablamos con calma y buscamos una solución', 'Peleamos', 'Nos vamos', 'Le gritamos'], 'Hablamos con calma y buscamos una solución', 'Comunicar nuestras ideas con respeto es la mejor manera de resolver desacuerdos.'),
    mc('p2ef-b2-07', 'Juegos', '¿Qué juego necesita que todos formen una fila y pasen un objeto?', ['La cadena humana', 'El escondite', 'Piedra, papel o tijera', 'La lotería'], 'La cadena humana', 'En la cadena humana todos cooperan pasando objetos de mano en mano sin romper la fila.'),
    tf('p2ef-b2-08', 'Cooperación', 'Ganar es lo más importante en un juego cooperativo', 'Falso', 'En los juegos cooperativos lo más importante es divertirse y colaborar juntos.'),
    mc('p2ef-b2-09', 'Comunicación', '¿Por qué es bueno animar a los compañeros durante un juego?', ['Les da confianza y se sienten apoyados', 'Para distraerlos', 'Para que se enojen', 'No sirve de nada'], 'Les da confianza y se sienten apoyados', 'Animar con palabras positivas motiva a los demás y fortalece al equipo.'),
    mc('p2ef-b2-10', 'Equipo', '¿Cuál es una regla básica de convivencia en cualquier juego?', ['Respetar a todos los jugadores', 'Ganar a toda costa', 'Hacer trampa', 'Ignorar las reglas'], 'Respetar a todos los jugadores', 'El respeto hacia los demás es la base de cualquier convivencia deportiva.'),
]);

sv(G, 'educacion_fisica', 3, 'Habilidades motrices', 'Dic-Ene', ['Coordinación', 'Lanzar y atrapar'], [
    mc('p2ef-b3-01', 'Coordinación', '¿Qué es la coordinación?', ['Mover diferentes partes del cuerpo de forma ordenada', 'Quedarse quieto', 'Dormir bien', 'Comer rápido'], 'Mover diferentes partes del cuerpo de forma ordenada', 'La coordinación nos permite usar ojos, manos y pies juntos para hacer movimientos precisos.'),
    mc('p2ef-b3-02', 'Lanzar', 'Para lanzar una pelota lejos, ¿qué hacemos?', ['Echamos el brazo hacia atrás y lo lanzamos hacia adelante con fuerza', 'La dejamos caer', 'La empujamos con los dos pies', 'La soplamos'], 'Echamos el brazo hacia atrás y lo lanzamos hacia adelante con fuerza', 'El movimiento de lanzar empieza desde atrás del cuerpo y termina soltando hacia adelante.'),
    tf('p2ef-b3-03', 'Atrapar', 'Para atrapar una pelota debemos ver hacia dónde viene', 'Verdadero', 'Debemos seguir la pelota con los ojos y abrir las manos para recibirla.'),
    mc('p2ef-b3-04', 'Coordinación', '¿Qué ejercicio mejora la coordinación ojo-mano?', ['Rebotar y atrapar una pelota', 'Sentarse quieto', 'Ver televisión', 'Dormir'], 'Rebotar y atrapar una pelota', 'Rebotar y atrapar requiere que los ojos guíen las manos. Excelente para la coordinación.'),
    mc('p2ef-b3-05', 'Lanzar', '¿Con qué parte del pie pateamos un balón de futbol?', ['Con el empeine (parte de arriba del pie)', 'Con el talón', 'Con los dedos del pie', 'Con la planta'], 'Con el empeine (parte de arriba del pie)', 'El empeine da más control y potencia al patear un balón.'),
    tf('p2ef-b3-06', 'Coordinación', 'Brincar alternando las piernas (como trotar) es un ejercicio de coordinación', 'Verdadero', 'Alternar piernas requiere que el cerebro coordine ambos lados del cuerpo.'),
    mc('p2ef-b3-07', 'Atrapar', '¿Cómo ponemos las manos para atrapar una pelota que viene alto?', ['Arriba de la cabeza con las palmas abiertas', 'Cerradas y abajo', 'Detrás de la espalda', 'En los bolsillos'], 'Arriba de la cabeza con las palmas abiertas', 'Levantamos las manos con las palmas abiertas hacia la pelota para recibirla.'),
    mc('p2ef-b3-08', 'Coordinación', 'Saltar la cuerda ejercita:', ['La coordinación de piernas y el ritmo', 'Solo los brazos', 'Solo la voz', 'Solo los ojos'], 'La coordinación de piernas y el ritmo', 'Saltar la cuerda combina coordinación de piernas, brazos y ritmo. Es excelente ejercicio.'),
    tf('p2ef-b3-09', 'Lanzar', 'Podemos lanzar con la mano derecha y con la izquierda', 'Verdadero', 'Es bueno practicar lanzar con ambas manos para mejorar la coordinación bilateral.'),
    mc('p2ef-b3-10', 'Coordinación', '¿Cuál de estos movimientos necesita mucha coordinación?', ['Andar en bicicleta', 'Estar sentado', 'Dormir', 'Comer sentado'], 'Andar en bicicleta', 'La bicicleta requiere coordinar pedaleo, equilibrio, dirección y vista al mismo tiempo.'),
]);

sv(G, 'educacion_fisica', 4, 'Alimentación y actividad física', 'Feb-Mar', ['Nutrición deportiva', 'Hidratación'], [
    mc('p2ef-b4-01', 'Nutrición', '¿Qué debemos comer antes de hacer ejercicio?', ['Algo ligero como fruta, 1 hora antes', 'Una comida enorme', 'Nada', 'Solo dulces'], 'Algo ligero como fruta, 1 hora antes', 'Comer algo ligero 1 hora antes nos da energía sin sentirnos pesados.'),
    tf('p2ef-b4-02', 'Hidratación', 'Debemos tomar agua antes, durante y después del ejercicio', 'Verdadero', 'El agua mantiene nuestro cuerpo funcionando y evita la deshidratación.'),
    mc('p2ef-b4-03', 'Nutrición', '¿Cuál es un buen snack para después de hacer ejercicio?', ['Un plátano o manzana', 'Papas fritas', 'Refresco grande', 'Paleta de hielo'], 'Un plátano o manzana', 'La fruta nos da vitaminas, minerales y azúcares naturales para recuperarnos.'),
    mc('p2ef-b4-04', 'Hidratación', '¿Cuándo sabemos que nuestro cuerpo necesita agua?', ['Cuando sentimos sed o la boca seca', 'Nunca', 'Solo cuando lloramos', 'Solo en la noche'], 'Cuando sentimos sed o la boca seca', 'La sed es la señal de que el cuerpo necesita agua. Pero es mejor tomar agua aún sin sed.'),
    tf('p2ef-b4-05', 'Nutrición', 'Las verduras nos ayudan a tener huesos y músculos fuertes', 'Verdadero', 'Las verduras tienen vitaminas y minerales esenciales para que el cuerpo crezca fuerte.'),
    mc('p2ef-b4-06', 'Nutrición', '¿Qué grupo de alimentos nos da más energía rápida?', ['Frutas y cereales', 'Solo carne', 'Solo agua', 'Solo leche'], 'Frutas y cereales', 'Los carbohidratos de frutas y cereales son la fuente principal de energía para el ejercicio.'),
    mc('p2ef-b4-07', 'Hidratación', '¿Qué pasa si hacemos ejercicio sin tomar agua?', ['Nos deshidratamos y nos sentimos mal', 'Nada', 'Nos hacemos más fuertes', 'Es mejor así'], 'Nos deshidratamos y nos sentimos mal', 'Sin agua el cuerpo no puede regular su temperatura y nos cansamos más rápido.'),
    tf('p2ef-b4-08', 'Nutrición', 'Comer muchos dulces antes de hacer ejercicio es buena idea', 'Falso', 'Los dulces dan energía rápida pero después nos sentimos más cansados. Mejor comer fruta.'),
    mc('p2ef-b4-09', 'Nutrición', 'El Plato del Bien Comer nos enseña a:', ['Comer de todos los grupos de alimentos', 'Comer solo un tipo de comida', 'No comer nunca', 'Comer solo dulces'], 'Comer de todos los grupos de alimentos', 'El Plato del Bien Comer divide los alimentos en frutas/verduras, cereales y proteínas.'),
    mc('p2ef-b4-10', 'Descanso', '¿Por qué es importante descansar después de hacer ejercicio?', ['Para que los músculos se recuperen y crezcan', 'Para nunca volver a hacer ejercicio', 'No tiene importancia', 'Para quedarse dormido todo el día'], 'Para que los músculos se recuperen y crezcan', 'El descanso permite que el cuerpo repare los músculos y se fortalezca.'),
]);

sv(G, 'educacion_fisica', 5, 'Deportes y juegos tradicionales mexicanos', 'Abr-Jun', ['Deportes básicos', 'Juegos tradicionales'], [
    mc('p2ef-b5-01', 'Deportes', '¿Cuántos jugadores tiene un equipo de futbol en la cancha?', ['11', '5', '7', '15'], '11', 'Cada equipo tiene 11 jugadores en cancha, incluyendo el portero.'),
    mc('p2ef-b5-02', 'Tradicionales', '¿Qué es la "lotería mexicana"?', ['Un juego de mesa con cartas e imágenes típicas', 'Un deporte olímpico', 'Una clase de música', 'Una receta de cocina'], 'Un juego de mesa con cartas e imágenes típicas', 'La lotería mexicana es un juego tradicional con figuras como "El Sol", "La Luna", "El Nopal".'),
    tf('p2ef-b5-03', 'Deportes', 'En el basquetbol se mete la pelota en una canasta alta', 'Verdadero', 'El objetivo del basquetbol es encestar la pelota en la canasta que está alta.'),
    mc('p2ef-b5-04', 'Tradicionales', '¿Qué juego mexicano se hace con un trompo de madera?', ['El trompo: se enrolla un hilo y se lanza para que gire', 'Se come', 'Se pinta', 'Se rompe'], 'El trompo: se enrolla un hilo y se lanza para que gire', 'El trompo es un juguete tradicional que gira sobre su punta cuando lo lanzamos con un hilo.'),
    mc('p2ef-b5-05', 'Deportes', '¿Cuál de estos es un deporte de raqueta?', ['Tenis', 'Futbol', 'Natación', 'Ciclismo'], 'Tenis', 'El tenis usa una raqueta para golpear la pelota por encima de una red.'),
    tf('p2ef-b5-06', 'Tradicionales', 'Las canicas son un juego tradicional mexicano', 'Verdadero', 'Las canicas (bolitas de vidrio) se juegan en el piso tratando de golpear las de los demás.'),
    mc('p2ef-b5-07', 'Deportes', 'En la natación, ¿dónde se practica?', ['En una alberca o piscina', 'En una cancha de futbol', 'En un gimnasio seco', 'En la calle'], 'En una alberca o piscina', 'La natación se practica en agua: albercas, ríos o el mar con supervisión.'),
    mc('p2ef-b5-08', 'Tradicionales', '¿Qué es "la víbora de la mar"?', ['Una ronda infantil mexicana donde los niños pasan bajo un arco de brazos', 'Un animal peligroso', 'Un tipo de comida', 'Un deporte olímpico'], 'Una ronda infantil mexicana donde los niños pasan bajo un arco de brazos', 'En este juego se forma una fila y los niños pasan bajo los brazos de dos compañeros cantando.'),
    tf('p2ef-b5-09', 'Deportes', 'El atletismo incluye carreras, saltos y lanzamientos', 'Verdadero', 'El atletismo es el deporte más básico: correr, saltar y lanzar en diferentes modalidades.'),
    mc('p2ef-b5-10', 'Tradicionales', '¿Qué juego tradicional usa una cuerda larga que dos personas sostienen mientras otros saltan?', ['Saltar la cuerda', 'Dominó', 'Ajedrez', 'Memorama'], 'Saltar la cuerda', 'Saltar la cuerda es un juego activo excelente para la resistencia y coordinación.'),
]);

console.log('\n✅ PRIMARIA 2° — Educación Física COMPLETA (50 ejercicios)');
