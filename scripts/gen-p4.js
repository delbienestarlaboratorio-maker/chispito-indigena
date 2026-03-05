const fs = require('fs'), p = require('path');
const BASE = p.join(__dirname, '..', 'src', 'data', 'exercises');
function mc(id, t, q, ops, r, exp) { return { id, tema: t, tipo: 'multiple_choice', nivel: 'v1', pregunta: q, opciones: ops, respuestaCorrecta: r, explicacion: exp }; }
function tf(id, t, q, r, exp) { return { id, tema: t, tipo: 'true_false', nivel: 'v1', pregunta: q, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp }; }
function sv(g, m, b, n, mes, ts, ejs) {
    const d = p.join(BASE, g, m); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(p.join(d, 'bloque-' + b + '.json'), JSON.stringify({ grado: g, materia: m, bloque: b, nombre: n, meses: mes, temas: ts, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    console.log('  ✅ ' + g + '/' + m + '/bloque-' + b + ' (' + ejs.length + ' ejs)');
}
const G = 'primaria-4';

// ═══ INGLÉS 4° ═══
console.log('\n🇬🇧 INGLÉS — ' + G);
sv(G, 'ingles', 1, 'Daily routines', 'Ago-Sep', ['Verb to be', 'Daily actions'], [
    mc('p4en-b1-01', 'Verb To Be', '"I am happy" means:', ['Yo estoy feliz', 'Yo tengo feliz', 'Él es feliz', 'Ella está feliz'], 'Yo estoy feliz', 'I am = yo soy / yo estoy. Happy = feliz.'),
    mc('p4en-b1-02', 'Rutinas', '"I wake up" means:', ['Me despierto', 'Me duermo', 'Como', 'Corro'], 'Me despierto', 'Wake up = despertar(se). I wake up at 7 am.'),
    tf('p4en-b1-03', 'Verb To Be', '"He are tall" is correct English', 'Falso', 'Lo correcto es "He IS tall". Con he/she/it usamos is.'),
    mc('p4en-b1-04', 'Rutinas', '"I brush my teeth" means:', ['Me cepillo los dientes', 'Me peino', 'Me baño', 'Como'], 'Me cepillo los dientes', 'Brush teeth = cepillarse los dientes.'),
    mc('p4en-b1-05', 'Verb To Have', '"I have a dog" means:', ['Yo tengo un perro', 'Yo soy un perro', 'Yo quiero un perro', 'Yo veo un perro'], 'Yo tengo un perro', 'Have = tener. I have = yo tengo.'),
    tf('p4en-b1-06', 'Rutinas', '"Go to school" means ir a la escuela', 'Verdadero', 'Go = ir. School = escuela. Go to school = ir a la escuela.'),
    mc('p4en-b1-07', 'Tiempo', '"In the morning" means:', ['En la mañana', 'En la tarde', 'En la noche', 'Al mediodía'], 'En la mañana', 'Morning = mañana (parte del día).'),
    mc('p4en-b1-08', 'Rutinas', '"I eat breakfast" means:', ['Yo desayuno', 'Yo como', 'Yo ceno', 'Yo meriendo'], 'Yo desayuno', 'Breakfast = desayuno. Lunch = comida. Dinner = cena.'),
    mc('p4en-b1-09', 'Verb To Be', '"They are students" means:', ['Ellos son estudiantes', 'Ella es estudiante', 'Yo soy estudiante', 'Tú eres estudiante'], 'Ellos son estudiantes', 'They are = ellos/ellas son/están.'),
    tf('p4en-b1-10', 'Rutinas', '"I go to bed" means me voy a dormir', 'Verdadero', 'Go to bed = irse a la cama = irse a dormir.'),
]);
sv(G, 'ingles', 2, 'My house and prepositions', 'Oct-Nov', ['Rooms', 'Prepositions of place'], [
    mc('p4en-b2-01', 'Casa', '"Kitchen" means:', ['Cocina', 'Sala', 'Baño', 'Recámara'], 'Cocina', 'Kitchen = cocina, donde se preparan los alimentos.'),
    mc('p4en-b2-02', 'Casa', '"Bedroom" means:', ['Recámara', 'Sala', 'Cocina', 'Jardín'], 'Recámara', 'Bedroom = recámara, habitación o cuarto para dormir.'),
    tf('p4en-b2-03', 'Casa', '"Bathroom" means comedor', 'Falso', 'Bathroom = baño. Dining room = comedor.'),
    mc('p4en-b2-04', 'Preposiciones', '"The cat is ON the table" — on means:', ['Encima de', 'Debajo de', 'Dentro de', 'Junto a'], 'Encima de', 'On = sobre, encima de.'),
    mc('p4en-b2-05', 'Preposiciones', '"The ball is IN the box" — in means:', ['Dentro de', 'Encima de', 'Detrás de', 'Frente a'], 'Dentro de', 'In = dentro de, en el interior.'),
    mc('p4en-b2-06', 'Casa', '"Living room" means:', ['Sala', 'Jardín', 'Garaje', 'Cuarto'], 'Sala', 'Living room = sala de estar.'),
    tf('p4en-b2-07', 'Preposiciones', '"Under" means debajo de', 'Verdadero', 'Under = debajo de. The cat is under the bed = El gato está debajo de la cama.'),
    mc('p4en-b2-08', 'Casa', '"Garden" means:', ['Jardín', 'Cuarto', 'Cocina', 'Baño'], 'Jardín', 'Garden = jardín.'),
    mc('p4en-b2-09', 'Preposiciones', '"Next to" means:', ['Al lado de', 'Encima de', 'Dentro de', 'Lejos de'], 'Al lado de', 'Next to = al lado de, junto a.'),
    mc('p4en-b2-10', 'Preposiciones', '"Behind the door" means:', ['Detrás de la puerta', 'Frente a la puerta', 'Encima de la puerta', 'Dentro de la puerta'], 'Detrás de la puerta', 'Behind = detrás de.'),
]);
sv(G, 'ingles', 3, 'My community', 'Dic-Ene', ['Places in town', 'Asking directions'], [
    mc('p4en-b3-01', 'Lugares', '"Hospital" in Spanish is:', ['Hospital', 'Escuela', 'Mercado', 'Parque'], 'Hospital', 'Hospital se dice igual en ambos idiomas.'),
    mc('p4en-b3-02', 'Lugares', '"School" means:', ['Escuela', 'Hospital', 'Tienda', 'Iglesia'], 'Escuela', 'School = escuela.'),
    tf('p4en-b3-03', 'Lugares', '"Park" means mercado', 'Falso', 'Park = parque. Market = mercado.'),
    mc('p4en-b3-04', 'Direcciones', '"Turn left" means:', ['Gira a la izquierda', 'Gira a la derecha', 'Sigue derecho', 'Para'], 'Gira a la izquierda', 'Left = izquierda. Right = derecha.'),
    mc('p4en-b3-05', 'Direcciones', '"Go straight" means:', ['Sigue derecho', 'Gira', 'Para', 'Regresa'], 'Sigue derecho', 'Straight = recto, derecho.'),
    mc('p4en-b3-06', 'Lugares', '"Library" means:', ['Biblioteca', 'Librería', 'Tienda', 'Cafetería'], 'Biblioteca', 'Library = biblioteca (no librería; bookstore = librería).'),
    tf('p4en-b3-07', 'Direcciones', '"Where is the bank?" asks for a location', 'Verdadero', 'Where = dónde. Se usa para preguntar la ubicación de algo.'),
    mc('p4en-b3-08', 'Lugares', '"Supermarket" means:', ['Supermercado', 'Restaurante', 'Hospital', 'Banco'], 'Supermercado', 'Supermarket = supermercado.'),
    mc('p4en-b3-09', 'Direcciones', '"Turn right" means:', ['Gira a la derecha', 'Gira a la izquierda', 'Sigue recto', 'Da la vuelta'], 'Gira a la derecha', 'Right = derecha.'),
    mc('p4en-b3-10', 'Lugares', '"Church" means:', ['Iglesia', 'Escuela', 'Hospital', 'Museo'], 'Iglesia', 'Church = iglesia.'),
]);
sv(G, 'ingles', 4, 'Sports and hobbies', 'Feb-Mar', ['Sports', 'Like + verb-ing'], [
    mc('p4en-b4-01', 'Deportes', '"Soccer" means:', ['Futbol', 'Basquetbol', 'Béisbol', 'Tenis'], 'Futbol', 'Soccer = futbol (inglés americano). Football = futbol (inglés británico).'),
    mc('p4en-b4-02', 'Gustos', '"I like swimming" means:', ['Me gusta nadar', 'Me gusta correr', 'Me gusta comer', 'Me gusta bailar'], 'Me gusta nadar', 'Like + verb-ing = gustar + infinitivo.'),
    tf('p4en-b4-03', 'Deportes', '"Basketball" means futbol', 'Falso', 'Basketball = basquetbol. Soccer = futbol.'),
    mc('p4en-b4-04', 'Gustos', '"I like reading" means:', ['Me gusta leer', 'Me gusta escribir', 'Me gusta correr', 'Me gusta pintar'], 'Me gusta leer', 'Reading = leyendo/leer. I like reading = me gusta leer.'),
    mc('p4en-b4-05', 'Deportes', '"He plays tennis" means:', ['Él juega tenis', 'Ella juega tenis', 'Yo juego tenis', 'Ellos juegan tenis'], 'Él juega tenis', 'He plays = él juega (3a persona singular con -s).'),
    mc('p4en-b4-06', 'Pasatiempos', '"Drawing" means:', ['Dibujar', 'Pintar', 'Escribir', 'Bailar'], 'Dibujar', 'Drawing = dibujar, hacer dibujos.'),
    tf('p4en-b4-07', 'Deportes', '"Running" can be a sport and a hobby', 'Verdadero', 'Running = correr. Puede ser deporte competitivo o pasatiempo recreativo.'),
    mc('p4en-b4-08', 'Deportes', '"Team" means:', ['Equipo', 'Jugador', 'Árbitro', 'Campo'], 'Equipo', 'Team = equipo de jugadores.'),
    mc('p4en-b4-09', 'Gustos', '"She likes dancing" — dancing means:', ['Bailar', 'Correr', 'Nadar', 'Cantar'], 'Bailar', 'Dancing = bailar.'),
    mc('p4en-b4-10', 'Deportes', '"Win" means:', ['Ganar', 'Perder', 'Empatar', 'Jugar'], 'Ganar', 'Win = ganar. Lose = perder. Draw/Tie = empatar.'),
]);
sv(G, 'ingles', 5, 'Weather and seasons', 'Abr-Jun', ['Seasons', 'Weather'], [
    mc('p4en-b5-01', 'Estaciones', '"Summer" means:', ['Verano', 'Invierno', 'Primavera', 'Otoño'], 'Verano', 'Summer = verano, la estación más calurosa.'),
    mc('p4en-b5-02', 'Estaciones', '"Winter" means:', ['Invierno', 'Verano', 'Otoño', 'Primavera'], 'Invierno', 'Winter = invierno, la estación más fría.'),
    tf('p4en-b5-03', 'Clima', '"It is raining" means está lloviendo', 'Verdadero', 'It is raining = está lloviendo (presente continuo).'),
    mc('p4en-b5-04', 'Clima', '"It is sunny" means:', ['Hace sol', 'Está lloviendo', 'Hace frío', 'Está nublado'], 'Hace sol', 'Sunny = soleado. It is sunny = hace sol.'),
    mc('p4en-b5-05', 'Estaciones', '"Spring" means:', ['Primavera', 'Verano', 'Otoño', 'Invierno'], 'Primavera', 'Spring = primavera.'),
    mc('p4en-b5-06', 'Clima', '"Cold" means:', ['Frío', 'Calor', 'Tibio', 'Húmedo'], 'Frío', 'Cold = frío. Hot = caliente/caluroso.'),
    tf('p4en-b5-07', 'Estaciones', '"Fall" and "Autumn" both mean otoño', 'Verdadero', 'Fall (americano) y Autumn (británico) = otoño.'),
    mc('p4en-b5-08', 'Clima', '"Cloudy" means:', ['Nublado', 'Lluvioso', 'Soleado', 'Ventoso'], 'Nublado', 'Cloudy = nublado, con muchas nubes en el cielo.'),
    mc('p4en-b5-09', 'Clima', '"Wind" means:', ['Viento', 'Lluvia', 'Nieve', 'Sol'], 'Viento', 'Wind = viento. Windy = ventoso.'),
    mc('p4en-b5-10', 'Clima', '"It is hot" means:', ['Hace calor', 'Hace frío', 'Está lloviendo', 'Hay niebla'], 'Hace calor', 'Hot = caliente/caluroso.'),
]);

// ═══ EDUCACIÓN FÍSICA 4° ═══
console.log('\n🏃 ED. FÍSICA — ' + G);
sv(G, 'educacion_fisica', 1, 'Acondicionamiento físico', 'Ago-Sep', ['Calentamiento', 'Enfriamiento', 'Frecuencia cardíaca'], [
    mc('p4ef-b1-01', 'Calentamiento', '¿Para qué sirve el calentamiento antes del ejercicio?', ['Preparar músculos y articulaciones para evitar lesiones', 'Para cansarnos antes', 'Para perder tiempo', 'No sirve de nada'], 'Preparar músculos y articulaciones para evitar lesiones', 'El calentamiento aumenta la temperatura muscular y reduce el riesgo de lesiones.'),
    mc('p4ef-b1-02', 'Frecuencia', '¿Dónde podemos sentir nuestro pulso?', ['En el cuello o la muñeca', 'En la rodilla', 'En el codo', 'En el pie'], 'En el cuello o la muñeca', 'El pulso se siente donde las arterias están cerca de la piel: cuello (carótida) y muñeca (radial).'),
    tf('p4ef-b1-03', 'Ejercicio', 'Después de correr, nuestro corazón late más rápido', 'Verdadero', 'El corazón bombea más rápido para llevar más oxígeno a los músculos en movimiento.'),
    mc('p4ef-b1-04', 'Enfriamiento', '¿Qué hacemos al terminar el ejercicio intenso?', ['Estiramientos suaves y caminar lento', 'Parar de golpe', 'Comer inmediatamente', 'Dormir en el piso'], 'Estiramientos suaves y caminar lento', 'La vuelta a la calma reduce gradualmente la frecuencia cardíaca y previene mareos.'),
    mc('p4ef-b1-05', 'Ejercicio', '¿Cuántos minutos de ejercicio diario recomienda la OMS para niños?', ['60 minutos', '10 minutos', '5 minutos', '120 minutos'], '60 minutos', 'La OMS recomienda al menos 60 minutos diarios de actividad moderada-vigorosa para niños.'),
    tf('p4ef-b1-06', 'Calentamiento', 'El calentamiento debe durar entre 5 y 10 minutos', 'Verdadero', 'Un buen calentamiento incluye movimientos articulares y ejercicio suave durante 5-10 minutos.'),
    mc('p4ef-b1-07', 'Ejercicio', '¿Qué tipo de ejercicio mejora la resistencia cardiovascular?', ['Correr distancias largas a ritmo moderado', 'Levantar pesas muy pesadas', 'Solo estirar', 'Solo sentadillas'], 'Correr distancias largas a ritmo moderado', 'El ejercicio aeróbico continuo (correr, nadar, bicicleta) fortalece el corazón.'),
    mc('p4ef-b1-08', 'Frecuencia', '¿Por qué respiramos más rápido al hacer ejercicio?', ['Porque el cuerpo necesita más oxígeno', 'Porque estamos enfermos', 'No hay razón', 'Porque hace calor'], 'Porque el cuerpo necesita más oxígeno', 'Los músculos en movimiento requieren más oxígeno, así que respiramos más para conseguirlo.'),
    tf('p4ef-b1-09', 'Ejercicio', 'El sedentarismo (no hacer ejercicio) puede causar enfermedades', 'Verdadero', 'La falta de actividad física aumenta el riesgo de obesidad, diabetes y enfermedades del corazón.'),
    mc('p4ef-b1-10', 'Ejercicio', '¿Cuál es un ejercicio aeróbico?', ['Trotar', 'Levantar pesas', 'Solo estirar', 'Abdominales quietos'], 'Trotar', 'El ejercicio aeróbico usa oxígeno de forma continua: trotar, nadar, andar en bici.'),
]);
sv(G, 'educacion_fisica', 2, 'Deportes con implementos', 'Oct-Nov', ['Raqueta', 'Bastón', 'Coordinación ojo-mano'], [
    mc('p4ef-b2-01', 'Raqueta', '¿Qué deporte usa una raqueta y una pelota pequeña?', ['Tenis', 'Futbol', 'Natación', 'Atletismo'], 'Tenis', 'El tenis se juega con raqueta y pelota sobre una cancha con red.'),
    mc('p4ef-b2-02', 'Coordinación', '¿Qué habilidad se necesita para golpear una pelota con un bat?', ['Coordinación ojo-mano', 'Solo fuerza', 'Solo velocidad', 'Solo resistencia'], 'Coordinación ojo-mano', 'Para batear necesitamos que los ojos guíen las manos al momento exacto del golpe.'),
    tf('p4ef-b2-03', 'Deportes', 'El bádminton se juega con un "gallito" (shuttlecock)', 'Verdadero', 'El bádminton usa una plumilla o gallito en lugar de una pelota convencional.'),
    mc('p4ef-b2-04', 'Deportes', '¿Con qué se juega el hockey?', ['Un bastón curvo y un disco o pelota', 'Una raqueta', 'Las manos', 'Los pies'], 'Un bastón curvo y un disco o pelota', 'El hockey usa un bastón (stick) para golpear un disco (puck) o pelota.'),
    mc('p4ef-b2-05', 'Coordinación', 'Rebotar una pelota con una raqueta sin que se caiga ejercita:', ['La coordinación y el control', 'Solo la fuerza', 'Solo la velocidad', 'Solo la resistencia'], 'La coordinación y el control', 'Mantener la pelota rebotando requiere precisión, ritmo y control motriz.'),
    tf('p4ef-b2-06', 'Deportes', 'El ping-pong (tenis de mesa) se juega sobre una mesa con raquetas pequeñas', 'Verdadero', 'El tenis de mesa es un deporte olímpico con raquetas pequeñas y pelota ligera.'),
    mc('p4ef-b2-07', 'Seguridad', '¿Por qué debemos usar los implementos deportivos correctamente?', ['Para evitar lesiones propias y de los demás', 'Porque son bonitos', 'Para presumir', 'No es necesario'], 'Para evitar lesiones propias y de los demás', 'El mal uso de bastones o raquetas puede causar golpes accidentales.'),
    mc('p4ef-b2-08', 'Deportes', '¿Qué deporte usa un bastón largo para lanzar una pelota?', ['Lacrosse', 'Natación', 'Ciclismo', 'Ajedrez'], 'Lacrosse', 'El lacrosse usa un bastón con red para atrapar y lanzar la pelota.'),
    tf('p4ef-b2-09', 'Coordinación', 'Practicar con implementos deportivos mejora nuestras habilidades motrices', 'Verdadero', 'Cuanto más practicamos con raquetas y bastones, mejor coordinación desarrollamos.'),
    mc('p4ef-b2-10', 'Deportes', '¿Cuál de estos deportes NO usa un implemento (herramienta)?', ['Carrera de velocidad', 'Tenis', 'Béisbol', 'Golf'], 'Carrera de velocidad', 'En la carrera de velocidad solo se usa el cuerpo, sin ningún implemento.'),
]);
sv(G, 'educacion_fisica', 3, 'Expresión corporal y danza', 'Dic-Ene', ['Danzas folclóricas', 'Ritmo y creatividad'], [
    mc('p4ef-b3-01', 'Danza', '"La Bamba" es una danza tradicional de:', ['Veracruz', 'Jalisco', 'Oaxaca', 'Guerrero'], 'Veracruz', 'La Bamba es un son jarocho tradicional del estado de Veracruz.'),
    mc('p4ef-b3-02', 'Expresión', '¿Qué es la expresión corporal?', ['Comunicar ideas y emociones con el movimiento del cuerpo', 'Solo hablar', 'Solo cantar', 'Solo escribir'], 'Comunicar ideas y emociones con el movimiento del cuerpo', 'Sin palabras podemos expresar alegría, tristeza, miedo y más con nuestro cuerpo.'),
    tf('p4ef-b3-03', 'Danza', 'El Jarabe Tapatío es el baile nacional de México', 'Verdadero', 'El Jarabe Tapatío, originario de Jalisco, es el baile folclórico más representativo de México.'),
    mc('p4ef-b3-04', 'Ritmo', '¿Qué es el compás en la danza?', ['La medida del tiempo que organiza los pasos', 'El color del vestuario', 'El nombre de la canción', 'La cantidad de bailarines'], 'La medida del tiempo que organiza los pasos', 'El compás organiza los movimientos de la danza con el ritmo de la música.'),
    mc('p4ef-b3-05', 'Danza', 'La Danza del Venado es tradicional de:', ['Los pueblos yaqui y mayo de Sonora', 'La Ciudad de México', 'Jalisco', 'Puebla'], 'Los pueblos yaqui y mayo de Sonora', 'Esta danza representa la cacería del venado por los pueblos originarios del noroeste.'),
    tf('p4ef-b3-06', 'Expresión', 'La mímica es expresión corporal sin usar la voz', 'Verdadero', 'En la mímica solo se usan gestos y movimientos del cuerpo, sin palabras.'),
    mc('p4ef-b3-07', 'Creatividad', '¿Qué podemos crear en una clase de expresión corporal?', ['Coreografías y secuencias de movimientos', 'Solo ecuaciones', 'Solo mapas', 'Solo textos'], 'Coreografías y secuencias de movimientos', 'La expresión corporal permite crear coreografías originales combinando movimientos.'),
    mc('p4ef-b3-08', 'Danza', 'El "zapateado" es característico de danzas de:', ['México, España y otros países latinos', 'Solo Japón', 'Solo Inglaterra', 'Solo Rusia'], 'México, España y otros países latinos', 'El zapateado usa el golpeteo rítmico de los pies contra el suelo.'),
    tf('p4ef-b3-09', 'Danza', 'Las danzas folclóricas representan la cultura de un pueblo', 'Verdadero', 'Cada danza folclórica cuenta historias, tradiciones y la identidad de su región.'),
    mc('p4ef-b3-10', 'Expresión', '¿Qué partes del cuerpo usamos en la expresión corporal?', ['Todo el cuerpo: cara, brazos, piernas, torso', 'Solo las manos', 'Solo los pies', 'Solo la cara'], 'Todo el cuerpo: cara, brazos, piernas, torso', 'La expresión corporal usa cada parte del cuerpo para comunicar.'),
]);
sv(G, 'educacion_fisica', 4, 'Primeros auxilios básicos', 'Feb-Mar', ['Prevención de accidentes', 'Primeros auxilios'], [
    mc('p4ef-b4-01', 'Prevención', '¿Cuál es la mejor forma de evitar accidentes deportivos?', ['Calentar bien, usar equipo adecuado y seguir las reglas', 'Jugar sin reglas', 'No calentar nunca', 'Usar zapatos viejos'], 'Calentar bien, usar equipo adecuado y seguir las reglas', 'La prevención es siempre mejor que el tratamiento.'),
    mc('p4ef-b4-02', 'Primeros auxilios', 'Si un compañero se tuerce el tobillo, ¿qué hacemos primero?', ['Avisar al profesor y aplicar hielo si hay', 'Correr a casa', 'Mover el pie para todos lados', 'Ignorarlo'], 'Avisar al profesor y aplicar hielo si hay', 'Lo primero es avisar a un adulto. El hielo reduce la hinchazón (método RICE).'),
    tf('p4ef-b4-03', 'Prevención', 'Usar calzado deportivo adecuado previene lesiones en los pies', 'Verdadero', 'El calzado deportivo amortigua impactos y da estabilidad al pie durante el ejercicio.'),
    mc('p4ef-b4-04', 'Primeros auxilios', '¿Qué significan las siglas R.I.C.E.?', ['Reposo, Hielo, Compresión, Elevación', 'Rápido, Intenso, Continuo, Exigente', 'Relajar, Impulsar, Correr, Estabilizar', 'No existen'], 'Reposo, Hielo, Compresión, Elevación', 'RICE es el método básico para tratar lesiones leves como esguinces y golpes.'),
    mc('p4ef-b4-05', 'Prevención', '¿Cuándo debemos usar casco?', ['Al andar en bicicleta, patines o patineta', 'Solo en la escuela', 'Al caminar', 'Nunca'], 'Al andar en bicicleta, patines o patineta', 'El casco protege la cabeza de golpes graves en actividades con velocidad.'),
    tf('p4ef-b4-06', 'Primeros auxilios', 'Si alguien sangra por la nariz, debemos inclinar su cabeza hacia atrás', 'Falso', 'Lo correcto es inclinar la cabeza ligeramente HACIA ADELANTE y presionar la nariz.'),
    mc('p4ef-b4-07', 'Primeros auxilios', '¿Qué hacemos si alguien se desmaya?', ['Recostarlo, elevar sus piernas y avisar a un adulto', 'Sacudirlo fuerte', 'Echarle agua en la cara', 'Dejarlo solo'], 'Recostarlo, elevar sus piernas y avisar a un adulto', 'Elevar las piernas ayuda a que la sangre fluya al cerebro. Siempre avisar a un adulto.'),
    mc('p4ef-b4-08', 'Prevención', '¿Por qué NO debemos correr dentro del salón de clases?', ['Porque podemos chocar con muebles y lastimarnos', 'Porque es divertido', 'Porque es obligatorio correr', 'Porque el maestro no nos ve'], 'Porque podemos chocar con muebles y lastimarnos', 'Los espacios cerrados con muebles no son seguros para correr.'),
    tf('p4ef-b4-09', 'Primeros auxilios', 'Es importante tener un botiquín de primeros auxilios en la escuela', 'Verdadero', 'El botiquín contiene materiales básicos para atender heridas menores.'),
    mc('p4ef-b4-10', 'Prevención', 'Antes de nadar, ¿qué regla de seguridad es la más importante?', ['Nunca nadar solo, siempre con supervisión de un adulto', 'Saltar de cabeza en aguas desconocidas', 'No calentarse antes', 'Nadar sin flotador en agua profunda'], 'Nunca nadar solo, siempre con supervisión de un adulto', 'La supervisión adulta es la regla #1 de seguridad en el agua.'),
]);
sv(G, 'educacion_fisica', 5, 'Mini olimpiadas y competencias', 'Abr-Jun', ['Deportes olímpicos', 'Espíritu deportivo'], [
    mc('p4ef-b5-01', 'Olimpiadas', '¿Cada cuántos años se celebran los Juegos Olímpicos de verano?', ['Cada 4 años', 'Cada año', 'Cada 2 años', 'Cada 10 años'], 'Cada 4 años', 'Los JJOO de verano se celebran cada 4 años en una ciudad diferente del mundo.'),
    mc('p4ef-b5-02', 'Deportes', '¿Cuántas pruebas tiene el atletismo olímpico?', ['Más de 40 pruebas diferentes', 'Solo 3', 'Solo 10', 'Solo 1'], 'Más de 40 pruebas diferentes', 'El atletismo incluye carreras, saltos, lanzamientos y pruebas combinadas.'),
    tf('p4ef-b5-03', 'Espíritu', 'El lema olímpico es: Más rápido, más alto, más fuerte - Juntos', 'Verdadero', 'Citius, Altius, Fortius - Communiter es el lema actualizado del Comité Olímpico Internacional.'),
    mc('p4ef-b5-04', 'Olimpiadas', '¿Cuántos aros tiene el símbolo olímpico?', ['5 aros de colores', '3 aros', '7 aros', '10 aros'], '5 aros de colores', 'Los 5 aros representan los 5 continentes del mundo unidos por el deporte.'),
    mc('p4ef-b5-05', 'Espíritu', '¿Qué valor es el más importante en una competencia deportiva?', ['El respeto y la deportividad', 'Solo ganar', 'Solo el premio', 'El uniforme'], 'El respeto y la deportividad', 'Competir con respeto es más valioso que ganar a toda costa.'),
    tf('p4ef-b5-06', 'Olimpiadas', 'México ha participado en los Juegos Olímpicos', 'Verdadero', 'México ha participado desde 1900 y fue sede de los JJOO de 1968 en la Ciudad de México.'),
    mc('p4ef-b5-07', 'Deportes', '¿Qué deporte olímpico se practica en agua?', ['Natación', 'Atletismo', 'Gimnasia', 'Ciclismo'], 'Natación', 'La natación incluye varias pruebas olímpicas: libre, espalda, pecho, mariposa.'),
    mc('p4ef-b5-08', 'Espíritu', 'Si perdemos una competencia, ¿cuál es la mejor actitud?', ['Felicitar al ganador y buscar mejorar', 'Enojarse y pelear', 'No volver a competir nunca', 'Culpar al árbitro'], 'Felicitar al ganador y buscar mejorar', 'Perder con dignidad y aprender de la experiencia nos hace mejores deportistas.'),
    tf('p4ef-b5-09', 'Olimpiadas', 'Los Juegos Paralímpicos son para deportistas con discapacidad', 'Verdadero', 'Los Paralímpicos demuestran que el deporte es para TODOS sin importar las capacidades.'),
    mc('p4ef-b5-10', 'Espíritu', '¿Qué aprendemos al organizar unas mini olimpiadas en la escuela?', ['Organización, trabajo en equipo y competencia sana', 'Solo a ganar', 'Solo a pelear', 'Nada'], 'Organización, trabajo en equipo y competencia sana', 'Las mini olimpiadas enseñan valores deportivos y habilidades organizativas.'),
]);

console.log('\n✅ PRIMARIA 4° — Inglés (50) + Ed. Física (50) = 100 ejercicios COMPLETOS');
