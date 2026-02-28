const fs = require('fs'), p = require('path');
const BASE = p.join(__dirname, '..', 'src', 'data', 'exercises');
function mc(id, t, q, ops, r, exp) { return { id, tema: t, tipo: 'multiple_choice', nivel: 'v1', pregunta: q, opciones: ops, respuestaCorrecta: r, explicacion: exp }; }
function tf(id, t, q, r, exp) { return { id, tema: t, tipo: 'true_false', nivel: 'v1', pregunta: q, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp }; }
function sv(g, m, b, n, mes, ts, ejs) {
    const d = p.join(BASE, g, m); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(p.join(d, 'bloque-' + b + '.json'), JSON.stringify({ grado: g, materia: m, bloque: b, nombre: n, meses: mes, temas: ts, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    console.log('  ✅ ' + g + '/' + m + '/bloque-' + b + ' (' + ejs.length + ' ejs)');
}
const G = 'primaria-6';

// ═══ INGLÉS 6° ═══
console.log('\n🇬🇧 INGLÉS — ' + G);
sv(G, 'ingles', 1, 'Past simple: what happened?', 'Ago-Sep', ['Past simple regular', 'Irregular verbs'], [
    mc('p6en-b1-01', 'Pasado', '"I played soccer yesterday" means:', ['Yo jugué futbol ayer', 'Yo juego futbol hoy', 'Yo jugaré futbol mañana', 'Yo estoy jugando futbol'], 'Yo jugué futbol ayer', 'Played = jugué (pasado de play). Yesterday = ayer.'),
    mc('p6en-b1-02', 'Pasado', '"She went to school" — went is past of:', ['Go', 'See', 'Eat', 'Run'], 'Go', 'Go → went (pasado irregular). Fui/fue a la escuela.'),
    tf('p6en-b1-03', 'Pasado', 'Regular verbs in past tense end in -ed', 'Verdadero', 'Played, walked, cooked — los verbos regulares agregan -ed en pasado.'),
    mc('p6en-b1-04', 'Pasado', '"He ate pizza" — ate is past of:', ['Eat', 'Be', 'Have', 'Make'], 'Eat', 'Eat → ate (pasado irregular). He ate = él comió.'),
    mc('p6en-b1-05', 'Pasado', '"Did you study?" means:', ['¿Estudiaste?', '¿Estudias?', '¿Estudiarás?', '¿Estás estudiando?'], '¿Estudiaste?', 'Did + sujeto + verbo base = pregunta en pasado simple.'),
    tf('p6en-b1-06', 'Pasado', '"Saw" is the past of "see"', 'Verdadero', 'See → saw. I saw a movie = vi una película.'),
    mc('p6en-b1-07', 'Pasado', '"I didn\'t go" means:', ['Yo no fui', 'Yo fui', 'Yo iré', 'Yo voy'], 'Yo no fui', 'Didn\'t + verbo base = negación en pasado. Didn\'t go = no fui.'),
    mc('p6en-b1-08', 'Pasado', '"They visited their grandma" — visited means:', ['Visitaron', 'Visitan', 'Visitarán', 'Están visitando'], 'Visitaron', 'Visited = visitaron (pasado de visit, verbo regular).'),
    mc('p6en-b1-09', 'Pasado', 'Which is the past of "write"?', ['Wrote', 'Writed', 'Writing', 'Writes'], 'Wrote', 'Write → wrote (irregular). I wrote a letter = escribí una carta.'),
    tf('p6en-b1-10', 'Pasado', '"Last week" means la semana pasada', 'Verdadero', 'Last = pasado/a. Last week = la semana pasada. Last year = el año pasado.'),
]);
sv(G, 'ingles', 2, 'Comparatives and superlatives', 'Oct-Nov', ['Comparatives', 'Superlatives'], [
    mc('p6en-b2-01', 'Comparativo', '"Bigger" means:', ['Más grande', 'Más pequeño', 'El más grande', 'Grande'], 'Más grande', 'Big → bigger (comparativo). Bigger = más grande.'),
    mc('p6en-b2-02', 'Superlativo', '"The tallest" means:', ['El más alto', 'Más alto', 'Alto', 'Menos alto'], 'El más alto', 'Tall → taller (comparativo) → the tallest (superlativo).'),
    tf('p6en-b2-03', 'Comparativo', 'To compare two things we use comparative adjectives', 'Verdadero', 'Para comparar 2 cosas: This is bigger THAN that.'),
    mc('p6en-b2-04', 'Comparativo', '"Faster than" means:', ['Más rápido que', 'Más lento que', 'El más rápido', 'Rápido'], 'Más rápido que', 'Faster than = más rápido que (comparando dos cosas).'),
    mc('p6en-b2-05', 'Superlativo', '"The most beautiful" means:', ['La más hermosa', 'Más hermosa', 'Hermosa', 'Menos hermosa'], 'La más hermosa', 'Para adjetivos largos: more beautiful (comparativo), the most beautiful (superlativo).'),
    tf('p6en-b2-06', 'Comparativo', 'For short adjectives, we add -er for comparative', 'Verdadero', 'Tall → taller, fast → faster, small → smaller.'),
    mc('p6en-b2-07', 'Superlativo', '"The smallest animal is..." — smallest means:', ['El más pequeño', 'Más pequeño', 'Pequeño', 'Grande'], 'El más pequeño', 'Small → smaller → the smallest.'),
    mc('p6en-b2-08', 'Comparativo', '"Better" is the comparative of:', ['Good', 'Bad', 'Big', 'Well'], 'Good', 'Good → better → the best (formas irregulares).'),
    mc('p6en-b2-09', 'Superlativo', '"The worst" is the superlative of:', ['Bad', 'Good', 'Big', 'Small'], 'Bad', 'Bad → worse → the worst (formas irregulares).'),
    tf('p6en-b2-10', 'Comparativo', '"More interesting than" compares two things', 'Verdadero', 'Para adjetivos largos: more + adjetivo + than.'),
]);
sv(G, 'ingles', 3, 'Future: going to', 'Dic-Ene', ['Going to', 'Future plans'], [
    mc('p6en-b3-01', 'Futuro', '"I am going to study" means:', ['Voy a estudiar', 'Estoy estudiando', 'Estudié', 'Estudio'], 'Voy a estudiar', 'Going to + verbo = voy a (futuro planeado).'),
    mc('p6en-b3-02', 'Futuro', '"She is going to travel" means:', ['Ella va a viajar', 'Ella viajó', 'Ella viaja', 'Ella está viajando'], 'Ella va a viajar', 'Is going to + verbo = va a hacer algo (futuro).'),
    tf('p6en-b3-03', 'Futuro', '"Tomorrow" means mañana (el día siguiente)', 'Verdadero', 'Tomorrow = mañana. Yesterday = ayer. Today = hoy.'),
    mc('p6en-b3-04', 'Futuro', '"We are going to play" means:', ['Vamos a jugar', 'Estamos jugando', 'Jugamos ayer', 'No jugamos'], 'Vamos a jugar', 'We are going to = nosotros vamos a.'),
    mc('p6en-b3-05', 'Futuro', '"Are you going to eat?" means:', ['¿Vas a comer?', '¿Estás comiendo?', '¿Comiste?', '¿Comes?'], '¿Vas a comer?', 'Are you going to...? = ¿Vas a...? (pregunta sobre planes futuros).'),
    tf('p6en-b3-06', 'Futuro', '"Next year" means el próximo año', 'Verdadero', 'Next = próximo/siguiente. Next week, next month, next year.'),
    mc('p6en-b3-07', 'Futuro', '"They are NOT going to come" means:', ['Ellos no van a venir', 'Ellos van a venir', 'Ellos vinieron', 'Ellos vienen'], 'Ellos no van a venir', 'Not going to = no va/van a (negación del futuro planeado).'),
    mc('p6en-b3-08', 'Futuro', '"What are you going to do?" means:', ['¿Qué vas a hacer?', '¿Qué hiciste?', '¿Qué haces?', '¿Qué estás haciendo?'], '¿Qué vas a hacer?', 'What are you going to do = ¿qué vas a hacer? (futuro).'),
    mc('p6en-b3-09', 'Futuro', '"I am going to be a doctor" means:', ['Voy a ser doctor', 'Soy doctor', 'Fui doctor', 'Era doctor'], 'Voy a ser doctor', 'Going to be = voy a ser (aspiración futura).'),
    tf('p6en-b3-10', 'Futuro', 'We use "going to" for planned future actions', 'Verdadero', 'Going to se usa para acciones futuras que ya planeamos o decidimos hacer.'),
]);
sv(G, 'ingles', 4, 'The world around us', 'Feb-Mar', ['Countries', 'Nationalities', 'Languages'], [
    mc('p6en-b4-01', 'Países', '"Mexico" in English is:', ['Mexico', 'Mejico', 'Mexiko', 'Meksyk'], 'Mexico', 'Mexico se escribe igual en inglés pero se pronuncia diferente: /ˈmeksɪkoʊ/.'),
    mc('p6en-b4-02', 'Nacionalidades', '"I am Mexican" means:', ['Soy mexicano/a', 'Soy americano/a', 'Soy español/a', 'Soy canadiense'], 'Soy mexicano/a', 'Mexican = mexicano/a (nacionalidad de México).'),
    tf('p6en-b4-03', 'Idiomas', '"Spanish" refers both to the language and nationality of Spain', 'Verdadero', 'Spanish = español (idioma) y español/a (persona de España).'),
    mc('p6en-b4-04', 'Países', '"The United States" in Spanish is:', ['Estados Unidos', 'Reino Unido', 'Unión Europea', 'Naciones Unidas'], 'Estados Unidos', 'United States = Estados Unidos. USA = EUA.'),
    mc('p6en-b4-05', 'Nacionalidades', 'A person from Brazil is:', ['Brazilian', 'Brazilan', 'Brasilian', 'Brezilian'], 'Brazilian', 'Brazil → Brazilian = brasileño/a.'),
    mc('p6en-b4-06', 'Idiomas', 'In Japan, people speak:', ['Japanese', 'Chinese', 'Korean', 'Thai'], 'Japanese', 'En Japón se habla japonés = Japanese.'),
    tf('p6en-b4-07', 'Países', '"Canada" is north of the United States', 'Verdadero', 'Canadá está al norte de Estados Unidos e incluye dos idiomas oficiales: inglés y francés.'),
    mc('p6en-b4-08', 'Nacionalidades', '"French" means:', ['Francés/francesa', 'Holandés', 'Alemán', 'Italiano'], 'Francés/francesa', 'French = francés (de Francia). France = Francia.'),
    mc('p6en-b4-09', 'Idiomas', 'How many official languages does Mexico have?', ['68 indigenous languages plus Spanish', 'Only Spanish', 'Only English', 'Two'], '68 indigenous languages plus Spanish', 'México reconoce 68 lenguas indígenas además del español como lenguas nacionales.'),
    mc('p6en-b4-10', 'Países', 'Which continent is Africa?', ['A continent with 54 countries', 'A country', 'A city', 'An island'], 'A continent with 54 countries', 'África es un continente enorme con 54 países diferentes.'),
]);
sv(G, 'ingles', 5, 'Review and goodbye', 'Abr-Jun', ['Grammar review', 'Farewell'], [
    mc('p6en-b5-01', 'Repaso', 'Which is correct: "She go" or "She goes"?', ['She goes', 'She go', 'She going', 'She goed'], 'She goes', '3a persona singular en presente simple: he/she/it + verbo + s.'),
    mc('p6en-b5-02', 'Repaso', '"There are five books" means:', ['Hay cinco libros', 'Hay un libro', 'No hay libros', 'Hubo cinco libros'], 'Hay cinco libros', 'There are = hay (plural). There is = hay (singular).'),
    tf('p6en-b5-03', 'Repaso', '"Can" is used to express ability', 'Verdadero', 'I can swim = puedo/sé nadar. Can expresa habilidad o capacidad.'),
    mc('p6en-b5-04', 'Despedida', '"See you in secondary school!" means:', ['¡Nos vemos en la secundaria!', '¡Adiós para siempre!', '¡Hola!', '¡Buenos días!'], '¡Nos vemos en la secundaria!', 'See you = nos vemos. Secondary school = escuela secundaria.'),
    mc('p6en-b5-05', 'Repaso', 'Complete: "I ___ to the park yesterday"', ['went', 'go', 'going', 'goes'], 'went', 'Go → went (pasado). Yesterday requiere pasado simple.'),
    tf('p6en-b5-06', 'Repaso', '"Must" is stronger than "should"', 'Verdadero', 'Must = debes (obligación). Should = deberías (consejo). Must es más fuerte.'),
    mc('p6en-b5-07', 'Repaso', '"Would you like some water?" means:', ['¿Te gustaría un poco de agua?', '¿Tienes agua?', '¿Dónde está el agua?', 'No quiero agua'], '¿Te gustaría un poco de agua?', 'Would you like = ¿Te gustaría? Es una forma educada de ofrecer.'),
    mc('p6en-b5-08', 'Despedida', '"Good luck in secondary!" means:', ['¡Buena suerte en la secundaria!', '¡Mala suerte!', '¡Adiós escuela!', '¡No quiero ir!'], '¡Buena suerte en la secundaria!', 'Good luck = buena suerte. Un deseo positivo para el futuro.'),
    mc('p6en-b5-09', 'Repaso', 'Which sentence is in future tense?', ['I will study English', 'I study English', 'I studied English', 'I am studying English'], 'I will study English', 'Will + verbo = futuro. I will study = estudiaré.'),
    tf('p6en-b5-10', 'Despedida', '"I learned a lot this year" is in past tense', 'Verdadero', 'Learned = aprendí (pasado). This year = este año.'),
]);

// ═══ ED. FÍSICA 6° ═══
console.log('\n🏃 ED. FÍSICA — ' + G);
sv(G, 'educacion_fisica', 1, 'Planificación del ejercicio', 'Ago-Sep', ['Rutinas personales', 'Frecuencia e intensidad'], [
    mc('p6ef-b1-01', 'Planificación', '¿Qué es un plan de entrenamiento personal?', ['Programa organizado de ejercicios adaptado a nuestras capacidades', 'Hacer lo que sea sin orden', 'Solo correr todos los días', 'No hacer nada'], 'Programa organizado de ejercicios adaptado a nuestras capacidades', 'Un buen plan de entrenamiento varía los ejercicios, la intensidad y los descansos.'),
    mc('p6ef-b1-02', 'Frecuencia', '¿Qué significa la frecuencia del ejercicio?', ['Cuántas veces por semana hacemos ejercicio', 'Qué tan rápido corremos', 'Cuánto peso levantamos', 'A qué hora entrenamos'], 'Cuántas veces por semana hacemos ejercicio', 'La frecuencia ideal para niños es al menos 5 días por semana.'),
    tf('p6ef-b1-03', 'Intensidad', 'La intensidad del ejercicio se puede medir por la frecuencia cardíaca', 'Verdadero', 'A mayor intensidad, más rápido late el corazón. Es una forma fácil de medir esfuerzo.'),
    mc('p6ef-b1-04', 'Rutina', 'Una rutina de ejercicio completa incluye:', ['Calentamiento, parte principal y vuelta a la calma', 'Solo correr', 'Solo estirar', 'Solo abdominales'], 'Calentamiento, parte principal y vuelta a la calma', 'Las 3 fases son indispensables para un entrenamiento seguro y efectivo.'),
    mc('p6ef-b1-05', 'Planificación', '¿Por qué es importante registrar nuestro progreso?', ['Para ver mejoras y ajustar el plan', 'No es importante', 'Para presumir', 'Solo para el maestro'], 'Para ver mejoras y ajustar el plan', 'El registro permite evaluar avances y modificar ejercicios según sea necesario.'),
    tf('p6ef-b1-06', 'Ejercicio', 'Es mejor hacer ejercicio todos los días sin descanso', 'Falso', 'El cuerpo necesita días de descanso para recuperar los músculos y evitar lesiones por sobreuso.'),
    mc('p6ef-b1-07', 'Intensidad', '¿Cómo sabemos si la intensidad del ejercicio es adecuada?', ['Podemos hablar pero no cantar mientras lo hacemos', 'No podemos respirar', 'No sentimos nada', 'Podemos dormir mientras lo hacemos'], 'Podemos hablar pero no cantar mientras lo hacemos', 'La "prueba del habla" indica intensidad moderada: puedes hablar pero no cantar cómodamente.'),
    mc('p6ef-b1-08', 'Rutina', '¿Cuánto debe durar mínimo la parte principal del ejercicio?', ['20 a 40 minutos', '2 minutos', 'Solo 5 minutos', '3 horas'], '20 a 40 minutos', 'La parte principal es donde se obtienen los mayores beneficios del ejercicio.'),
    tf('p6ef-b1-09', 'Planificación', 'Cada persona puede tener un plan de ejercicio diferente según sus necesidades', 'Verdadero', 'Los planes se adaptan a la edad, condición física y objetivos de cada persona.'),
    mc('p6ef-b1-10', 'Ejercicio', '¿Qué tipo de ejercicio combina fuerza y resistencia?', ['Entrenamiento funcional o CrossFit adaptado', 'Solo correr', 'Solo levantar pesas', 'Solo yoga'], 'Entrenamiento funcional o CrossFit adaptado', 'El entrenamiento funcional combina ejercicios variados que trabajan todo el cuerpo.'),
]);
sv(G, 'educacion_fisica', 2, 'Deportes de competencia', 'Oct-Nov', ['Atletismo avanzado', 'Deportes individuales y colectivos'], [
    mc('p6ef-b2-01', 'Atletismo', '¿Qué es el decatlón?', ['Competencia que combina 10 pruebas de atletismo', 'Una carrera de 10 km', 'Solo lanzamiento de disco', 'Un deporte acuático'], 'Competencia que combina 10 pruebas de atletismo', 'El decatlón incluye carreras, saltos y lanzamientos: el atleta más completo gana.'),
    mc('p6ef-b2-02', 'Deportes', '¿Qué diferencia un deporte individual de uno colectivo?', ['En el individual compites solo; en el colectivo, en equipo', 'No hay diferencia', 'El individual es más fácil', 'El colectivo no tiene reglas'], 'En el individual compites solo; en el colectivo, en equipo', 'Natación y atletismo son individuales; futbol y basquetbol son colectivos.'),
    tf('p6ef-b2-03', 'Atletismo', 'El salto de altura mide qué tan alto podemos saltar por encima de una barra', 'Verdadero', 'En el salto de altura se debe pasar por encima de una barra horizontal sin tirarla.'),
    mc('p6ef-b2-04', 'Competencia', '¿Qué actitud debemos tener al competir?', ['Dar nuestro mejor esfuerzo con respeto', 'Ganar a cualquier precio', 'Hacer trampa si es necesario', 'No esforzarnos'], 'Dar nuestro mejor esfuerzo con respeto', 'La competencia sana se basa en el esfuerzo personal y el respeto al rival.'),
    mc('p6ef-b2-05', 'Deportes', '¿Qué deporte combina natación, ciclismo y carrera?', ['Triatlón', 'Maratón', 'Pentatlón', 'Decatlón'], 'Triatlón', 'El triatlón prueba tres disciplinas: nadar, pedalear y correr.'),
    tf('p6ef-b2-06', 'Competencia', 'En el deporte, perder también enseña lecciones valiosas', 'Verdadero', 'La derrota enseña humildad, perseverancia y a identificar áreas de mejora.'),
    mc('p6ef-b2-07', 'Atletismo', '¿Cuánto mide un maratón?', ['42.195 km', '10 km', '21 km', '100 metros'], '42.195 km', 'El maratón tiene 42.195 km, inspirado en la leyenda griega de Filípides.'),
    mc('p6ef-b2-08', 'Deportes', '¿Qué deportista mexicana ganó oro olímpico en caminata?', ['Una marchista/caminante mexicana', 'Un nadador', 'Un futbolista', 'Un boxeador'], 'Una marchista/caminante mexicana', 'México ha tenido medallistas olímpicos en marcha/caminata como deporte de pista.'),
    tf('p6ef-b2-09', 'Competencia', 'El dopaje (usar sustancias prohibidas) es trampa en el deporte', 'Verdadero', 'El dopaje es antiético, peligroso para la salud y está prohibido por todas las federaciones deportivas.'),
    mc('p6ef-b2-10', 'Deportes', '¿Qué valor nos enseña más el deporte?', ['Disciplina, superación y trabajo en equipo', 'Solo a ganar trofeos', 'Solo a ser famosos', 'A ser agresivos'], 'Disciplina, superación y trabajo en equipo', 'El deporte forma personas con valores que van más allá de la cancha.'),
]);
sv(G, 'educacion_fisica', 3, 'Primeros auxilios y seguridad avanzada', 'Dic-Ene', ['RCP básico', 'Prevención de lesiones graves'], [
    mc('p6ef-b3-01', 'RCP', '¿Qué significan las siglas RCP?', ['Reanimación Cardio Pulmonar', 'Respuesta Corporal Parcial', 'Revisión Cardíaca Preventiva', 'Recuperación Con Protección'], 'Reanimación Cardio Pulmonar', 'La RCP combina compresiones en el pecho y respiración de rescate para salvar vidas.'),
    mc('p6ef-b3-02', 'Emergencia', '¿Cuál es el número de emergencias en México?', ['911', '066', '112', '999'], '911', 'El 911 es el número único de emergencias en México desde 2017.'),
    tf('p6ef-b3-03', 'Primeros auxilios', 'Ante una fractura, NO debemos mover la parte lesionada', 'Verdadero', 'Mover un hueso roto puede empeorar la lesión. Hay que inmovilizar y esperar ayuda médica.'),
    mc('p6ef-b3-04', 'Prevención', '¿Cuál es el equipo de protección más importante al andar en bicicleta?', ['Casco', 'Guantes', 'Lentes de sol', 'Rodilleras'], 'Casco', 'El casco puede prevenir lesiones cerebrales graves en caso de caída.'),
    mc('p6ef-b3-05', 'Primeros auxilios', '¿Qué hacemos si alguien tiene un golpe de calor?', ['Llevar a la sombra, refrescar con agua y llamar ayuda', 'Dejarlo al sol', 'Darle bebida caliente', 'Hacerlo correr'], 'Llevar a la sombra, refrescar con agua y llamar ayuda', 'El golpe de calor es una emergencia: bajar la temperatura corporal es prioritario.'),
    tf('p6ef-b3-06', 'Prevención', 'Usar protector solar previene quemaduras durante actividades al aire libre', 'Verdadero', 'El protector solar bloquea los rayos UV que dañan la piel y causan quemaduras.'),
    mc('p6ef-b3-07', 'RCP', '¿Cuántas compresiones por minuto se hacen en RCP?', ['100 a 120', '10 a 20', '200 a 300', 'Solo 50'], '100 a 120', 'El ritmo de compresiones debe ser de 100-120 por minuto (como el ritmo de Stayin Alive).'),
    mc('p6ef-b3-08', 'Emergencia', '¿Qué es la posición lateral de seguridad?', ['Colocar a una persona inconsciente de lado para que no se ahogue', 'Sentarla', 'Ponerla boca abajo', 'Pararla'], 'Colocar a una persona inconsciente de lado para que no se ahogue', 'La posición lateral evita que la lengua o el vómito obstruyan las vías respiratorias.'),
    tf('p6ef-b3-09', 'Prevención', 'Hidratarse adecuadamente previene calambres durante el ejercicio', 'Verdadero', 'Los calambres suelen deberse a deshidratación y falta de minerales como potasio y sodio.'),
    mc('p6ef-b3-10', 'Primeros auxilios', '¿Qué debe contener un botiquín escolar básico?', ['Gasas, vendas, antiséptico, guantes y lista de teléfonos de emergencia', 'Solo dulces', 'Solo agua', 'Solo termómetro'], 'Gasas, vendas, antiséptico, guantes y lista de teléfonos de emergencia', 'Un botiquín básico tiene lo necesario para atender heridas menores hasta que llegue ayuda.'),
]);
sv(G, 'educacion_fisica', 4, 'Liderazgo y organización deportiva', 'Feb-Mar', ['Liderazgo', 'Arbitraje', 'Organización de torneos'], [
    mc('p6ef-b4-01', 'Liderazgo', '¿Qué es un líder deportivo?', ['Alguien que motiva y guía al equipo con el ejemplo', 'El que grita más', 'El más fuerte', 'El más alto'], 'Alguien que motiva y guía al equipo con el ejemplo', 'Un buen líder inspira, comunica y da el ejemplo con su actitud y esfuerzo.'),
    mc('p6ef-b4-02', 'Arbitraje', '¿Cuál es la función principal del árbitro?', ['Hacer cumplir las reglas del deporte con imparcialidad', 'Ayudar a un equipo a ganar', 'Solo pitar', 'Jugar también'], 'Hacer cumplir las reglas del deporte con imparcialidad', 'El árbitro es imparcial: no favorece a ningún equipo y aplica las reglas para todos.'),
    tf('p6ef-b4-03', 'Organización', 'Un torneo necesita reglas claras, horarios y equipos organizados', 'Verdadero', 'La organización previa es fundamental para que un torneo sea exitoso y justo.'),
    mc('p6ef-b4-04', 'Liderazgo', 'Un buen capitán de equipo debe:', ['Motivar, comunicar y dar el ejemplo', 'Solo regañar', 'Jugar mejor que todos', 'No hablar con nadie'], 'Motivar, comunicar y dar el ejemplo', 'El capitán es el puente entre el equipo y el entrenador, y lidera con su actitud.'),
    mc('p6ef-b4-05', 'Organización', '¿Qué es un "rol de juegos" en un torneo?', ['La tabla con fechas, horarios y enfrentamientos', 'El nombre del trofeo', 'La lista de comidas', 'El reglamento completo'], 'La tabla con fechas, horarios y enfrentamientos', 'El rol de juegos organiza qué equipos juegan, cuándo y dónde.'),
    tf('p6ef-b4-06', 'Arbitraje', 'El árbitro puede equivocarse y debemos respetar su decisión', 'Verdadero', 'Aunque el árbitro cometa errores, debemos respetar sus decisiones. Es parte del juego.'),
    mc('p6ef-b4-07', 'Liderazgo', '¿Qué hace un buen líder cuando el equipo pierde?', ['Analiza qué se puede mejorar y motiva al equipo', 'Culpa a los demás', 'Se rinde', 'Se enoja con todos'], 'Analiza qué se puede mejorar y motiva al equipo', 'El liderazgo se demuestra más en la derrota que en la victoria.'),
    mc('p6ef-b4-08', 'Organización', '¿Qué aprendemos al organizar un evento deportivo?', ['Planificación, trabajo en equipo y responsabilidad', 'Nada', 'Solo a jugar', 'Solo a ganar'], 'Planificación, trabajo en equipo y responsabilidad', 'Organizar eventos desarrolla habilidades de gestión y colaboración.'),
    tf('p6ef-b4-09', 'Arbitraje', 'Conocer las reglas del deporte nos hace mejores jugadores y jueces', 'Verdadero', 'Saber las reglas permite jugar limpio y comprender las decisiones arbitrales.'),
    mc('p6ef-b4-10', 'Liderazgo', 'El respeto entre compañeros se construye con:', ['Comunicación, apoyo mutuo y fair play', 'Solo ganando', 'Solo siendo el mejor', 'Ignorando a los demás'], 'Comunicación, apoyo mutuo y fair play', 'El respeto se gana con acciones consistentes de apoyo y juego limpio.'),
]);
sv(G, 'educacion_fisica', 5, 'Transición a la secundaria: deporte para la vida', 'Abr-Jun', ['Deporte para toda la vida', 'Preparación para secundaria'], [
    mc('p6ef-b5-01', 'Vida sana', '¿Cuáles son los 3 pilares de una vida saludable?', ['Actividad física, alimentación balanceada y descanso', 'Solo dieta', 'Solo ejercicio', 'Solo dormir'], 'Actividad física, alimentación balanceada y descanso', 'La salud integral requiere equilibrio entre movimiento, nutrición y recuperación.'),
    mc('p6ef-b5-02', 'Secundaria', 'En la secundaria, ¿qué cambia en Educación Física?', ['Se practican deportes más complejos y se aprende más sobre salud', 'Ya no hay ejercicio', 'Solo se corre', 'Se elimina la materia'], 'Se practican deportes más complejos y se aprende más sobre salud', 'La Ed. Física de secundaria profundiza en deportes, salud y acondicionamiento físico.'),
    tf('p6ef-b5-03', 'Vida sana', 'El ejercicio regular durante la infancia crea hábitos para toda la vida', 'Verdadero', 'Los hábitos de actividad física establecidos de niño tienden a mantenerse en la adultez.'),
    mc('p6ef-b5-04', 'Deporte', '¿Qué deporte o actividad puedes practicar toda tu vida?', ['Caminar, nadar, yoga, ciclismo', 'Solo futbol profesional', 'Solo atletismo olímpico', 'Solo gimnasia de competencia'], 'Caminar, nadar, yoga, ciclismo', 'Algunas actividades se pueden practicar a cualquier edad con adaptaciones.'),
    mc('p6ef-b5-05', 'Vida sana', '¿Por qué es importante el ejercicio para la salud mental?', ['Reduce estrés, ansiedad y mejora el ánimo', 'No afecta la mente', 'Solo afecta los músculos', 'Causa más estrés'], 'Reduce estrés, ansiedad y mejora el ánimo', 'El ejercicio libera endorfinas y serotonina, sustancias que generan bienestar mental.'),
    tf('p6ef-b5-06', 'Secundaria', 'En secundaria se pueden elegir actividades deportivas extracurriculares', 'Verdadero', 'La mayoría de secundarias ofrecen clubes o talleres deportivos como actividades extra.'),
    mc('p6ef-b5-07', 'Deporte', '¿Qué aprendiste en 6 años de Educación Física en primaria?', ['Capacidades físicas, deportes, salud, trabajo en equipo y valores', 'Solo a correr', 'Nada', 'Solo a saltar'], 'Capacidades físicas, deportes, salud, trabajo en equipo y valores', 'La Ed. Física desarrolla el cuerpo, la mente y los valores a lo largo de toda la primaria.'),
    mc('p6ef-b5-08', 'Vida sana', '¿Cuál es la mejor razón para hacer ejercicio?', ['Sentirse bien, estar sano y disfrutarlo', 'Solo para verse delgado', 'Solo para ganar medallas', 'Solo porque obligan'], 'Sentirse bien, estar sano y disfrutarlo', 'La motivación intrínseca (disfrutar) es la que mantiene el hábito a largo plazo.'),
    tf('p6ef-b5-09', 'Deporte', 'El deporte enseña valores que sirven en la escuela, el trabajo y la vida', 'Verdadero', 'Disciplina, perseverancia, trabajo en equipo y respeto son valores universales del deporte.'),
    mc('p6ef-b5-10', 'Transición', '¿Cuál es tu compromiso al entrar a secundaria?', ['Mantenerme activo/a, comer sano y cuidar mi salud', 'Dejar el ejercicio', 'Solo estudiar sin moverse', 'No me importa la salud'], 'Mantenerme activo/a, comer sano y cuidar mi salud', 'El compromiso con la salud es para toda la vida. ¡La secundaria es el siguiente paso! 🚀'),
]);

console.log('\n✅ PRIMARIA 6° — Inglés (50) + Ed. Física (50) = 100 ejercicios COMPLETOS');
console.log('🎉 ¡TODA LA PRIMARIA COMPLETADA AL 100%!');
