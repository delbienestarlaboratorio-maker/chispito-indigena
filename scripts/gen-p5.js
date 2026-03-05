const fs = require('fs'), p = require('path');
const BASE = p.join(__dirname, '..', 'src', 'data', 'exercises');
function mc(id, t, q, ops, r, exp) { return { id, tema: t, tipo: 'multiple_choice', nivel: 'v1', pregunta: q, opciones: ops, respuestaCorrecta: r, explicacion: exp }; }
function tf(id, t, q, r, exp) { return { id, tema: t, tipo: 'true_false', nivel: 'v1', pregunta: q, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp }; }
function sv(g, m, b, n, mes, ts, ejs) {
    const d = p.join(BASE, g, m); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(p.join(d, 'bloque-' + b + '.json'), JSON.stringify({ grado: g, materia: m, bloque: b, nombre: n, meses: mes, temas: ts, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    console.log('  ✅ ' + g + '/' + m + '/bloque-' + b + ' (' + ejs.length + ' ejs)');
}
const G = 'primaria-5';

// ═══ INGLÉS 5° ═══
console.log('\n🇬🇧 INGLÉS — ' + G);
sv(G, 'ingles', 1, 'Talking about myself', 'Ago-Sep', ['Present simple', 'Descriptions'], [
    mc('p5en-b1-01', 'Present simple', '"I play soccer every day" means:', ['Yo juego futbol todos los días', 'Yo jugué futbol ayer', 'Yo jugaré futbol', 'Yo estoy jugando futbol'], 'Yo juego futbol todos los días', 'El presente simple describe acciones habituales o rutinas.'),
    mc('p5en-b1-02', 'Descripción', '"She is tall and thin" means:', ['Ella es alta y delgada', 'Ella es baja y gorda', 'Él es alto', 'Ellas son altas'], 'Ella es alta y delgada', 'Tall = alto/a. Thin = delgado/a.'),
    tf('p5en-b1-03', 'Present simple', 'In present simple, we add -s to verbs with he/she/it', 'Verdadero', 'He plays, she reads, it rains — la 3a persona singular lleva -s.'),
    mc('p5en-b1-04', 'Descripción', '"He has brown eyes" means:', ['Él tiene ojos cafés', 'Él tiene ojos azules', 'Ella tiene ojos cafés', 'Ellos tienen ojos verdes'], 'Él tiene ojos cafés', 'Brown = café/marrón. Eyes = ojos. Has = tiene (3a persona).'),
    mc('p5en-b1-05', 'Present simple', 'Which sentence is correct?', ['She likes music', 'She like music', 'She liking music', 'She liked music'], 'She likes music', 'Con she/he/it se agrega -s al verbo: She likes = a ella le gusta.'),
    tf('p5en-b1-06', 'Descripción', '"Short" means alto', 'Falso', 'Short = bajo/a o corto/a. Tall = alto/a.'),
    mc('p5en-b1-07', 'Present simple', '"Do you speak English?" means:', ['¿Hablas inglés?', '¿Hablas español?', '¿Comes inglés?', '¿Escribes inglés?'], '¿Hablas inglés?', 'Do you...? se usa para preguntas en presente simple.'),
    mc('p5en-b1-08', 'Descripción', '"My hair is black and curly" means:', ['Mi cabello es negro y rizado', 'Mi cabello es rubio', 'Mi cabello es corto', 'Mi cabello es azul'], 'Mi cabello es negro y rizado', 'Black = negro. Curly = rizado. Straight = lacio.'),
    mc('p5en-b1-09', 'Present simple', '"I don\'t like spiders" means:', ['No me gustan las arañas', 'Me gustan las arañas', 'No como arañas', 'Soy una araña'], 'No me gustan las arañas', 'Don\'t = forma negativa. I don\'t like = no me gusta/n.'),
    tf('p5en-b1-10', 'Descripción', '"Old" is the opposite of "young"', 'Verdadero', 'Old = viejo. Young = joven. Son opuestos.'),
]);
sv(G, 'ingles', 2, 'Daily life and time', 'Oct-Nov', ['Telling time', 'Frequency adverbs'], [
    mc('p5en-b2-01', 'Hora', '"What time is it?" means:', ['¿Qué hora es?', '¿Qué día es?', '¿Cómo estás?', '¿Dónde estás?'], '¿Qué hora es?', 'What time is it? = ¿Qué hora es?'),
    mc('p5en-b2-02', 'Hora', '"It\'s three o\'clock" means:', ['Son las tres en punto', 'Son las trece', 'Son las treinta', 'Es de tres'], 'Son las tres en punto', 'Three o\'clock = las tres en punto.'),
    tf('p5en-b2-03', 'Frecuencia', '"Always" means siempre', 'Verdadero', 'Always = siempre. Never = nunca. Sometimes = a veces.'),
    mc('p5en-b2-04', 'Frecuencia', '"I usually eat at 2 PM" — usually means:', ['Generalmente', 'Nunca', 'A veces', 'Siempre'], 'Generalmente', 'Usually = generalmente, normalmente.'),
    mc('p5en-b2-05', 'Hora', '"Half past seven" means:', ['Siete y media', 'Siete en punto', 'Siete y cuarto', 'Ocho menos cuarto'], 'Siete y media', 'Half past = y media (30 minutos después de la hora).'),
    mc('p5en-b2-06', 'Frecuencia', 'Order from most to least: always, usually, sometimes, never', ['Always > Usually > Sometimes > Never', 'Never > Sometimes > Always', 'Usually > Never > Always', 'Sometimes > Always > Never'], 'Always > Usually > Sometimes > Never', 'Siempre > Generalmente > A veces > Nunca.'),
    tf('p5en-b2-07', 'Hora', '"Quarter past nine" means nueve y cuarto', 'Verdadero', 'Quarter past = y cuarto (15 minutos después de la hora).'),
    mc('p5en-b2-08', 'Días', '"Wednesday" is the ___ day of the week', ['Third', 'First', 'Fifth', 'Seventh'], 'Third', 'Monday (1), Tuesday (2), Wednesday (3)...'),
    mc('p5en-b2-09', 'Frecuencia', '"She never eats meat" means:', ['Ella nunca come carne', 'Ella siempre come carne', 'Ella a veces come carne', 'Ella come mucha carne'], 'Ella nunca come carne', 'Never = nunca.'),
    mc('p5en-b2-10', 'Meses', '"January" is the ___ month', ['First', 'Second', 'Last', 'Sixth'], 'First', 'January = enero, el primer mes del año.'),
]);
sv(G, 'ingles', 3, 'Shopping and money', 'Dic-Ene', ['Numbers 20-100', 'Prices', 'Can I have...?'], [
    mc('p5en-b3-01', 'Números', '"Fifty" means:', ['50', '15', '500', '5'], '50', 'Fifty = 50. Fifteen = 15.'),
    mc('p5en-b3-02', 'Compras', '"How much is it?" means:', ['¿Cuánto cuesta?', '¿Cuántos hay?', '¿Dónde está?', '¿Qué es?'], '¿Cuánto cuesta?', 'How much = cuánto (precio). How many = cuántos (cantidad).'),
    tf('p5en-b3-03', 'Números', '"One hundred" equals 100', 'Verdadero', 'One hundred = 100. Two hundred = 200.'),
    mc('p5en-b3-04', 'Compras', '"Can I have a glass of water, please?" means:', ['¿Puedo tener un vaso de agua, por favor?', '¿Dónde está el agua?', 'No quiero agua', 'Dame todo el agua'], '¿Puedo tener un vaso de agua, por favor?', 'Can I have...? es una forma educada de pedir algo en inglés.'),
    mc('p5en-b3-05', 'Números', '"Thirty-five" means:', ['35', '53', '305', '350'], '35', 'Thirty (30) + five (5) = thirty-five (35).'),
    mc('p5en-b3-06', 'Compras', '"It costs twenty pesos" means:', ['Cuesta veinte pesos', 'Cuesta doscientos pesos', 'Son dos pesos', 'Son doce pesos'], 'Cuesta veinte pesos', 'Twenty = 20.'),
    tf('p5en-b3-07', 'Compras', '"Expensive" means barato', 'Falso', 'Expensive = caro. Cheap = barato.'),
    mc('p5en-b3-08', 'Compras', '"I want to buy a book" means:', ['Quiero comprar un libro', 'Quiero leer un libro', 'Tengo un libro', 'No quiero libros'], 'Quiero comprar un libro', 'Buy = comprar. I want to buy = quiero comprar.'),
    mc('p5en-b3-09', 'Números', '"Seventy-eight" means:', ['78', '87', '708', '780'], '78', 'Seventy (70) + eight (8) = seventy-eight (78).'),
    mc('p5en-b3-10', 'Compras', '"Change" (in shopping) means:', ['Cambio (dinero que te devuelven)', 'Cambiar de ropa', 'Cambiar de opinión', 'Otra tienda'], 'Cambio (dinero que te devuelven)', 'En compras, change = el cambio/vuelta que te dan al pagar.'),
]);
sv(G, 'ingles', 4, 'Health and feelings', 'Feb-Mar', ['Feelings', 'Health problems', 'Should/shouldn\'t'], [
    mc('p5en-b4-01', 'Feelings', '"I am sad" means:', ['Estoy triste', 'Estoy feliz', 'Estoy enojado', 'Estoy cansado'], 'Estoy triste', 'Sad = triste. Happy = feliz. Angry = enojado.'),
    mc('p5en-b4-02', 'Salud', '"I have a headache" means:', ['Me duele la cabeza', 'Me duele el estómago', 'Tengo tos', 'Tengo fiebre'], 'Me duele la cabeza', 'Headache = dolor de cabeza. Head = cabeza. Ache = dolor.'),
    tf('p5en-b4-03', 'Feelings', '"Tired" means cansado', 'Verdadero', 'Tired = cansado/a. I am tired = estoy cansado/a.'),
    mc('p5en-b4-04', 'Consejo', '"You should drink water" means:', ['Deberías tomar agua', 'No tomes agua', 'Puedes tomar refresco', 'Nunca tomes agua'], 'Deberías tomar agua', 'Should = deberías (consejo). Should + verbo base.'),
    mc('p5en-b4-05', 'Salud', '"Stomachache" means:', ['Dolor de estómago', 'Dolor de cabeza', 'Dolor de oído', 'Dolor de garganta'], 'Dolor de estómago', 'Stomach = estómago. Stomachache = dolor de estómago.'),
    mc('p5en-b4-06', 'Feelings', '"Scared" means:', ['Asustado', 'Feliz', 'Aburrido', 'Hambriento'], 'Asustado', 'Scared = asustado/a, con miedo.'),
    tf('p5en-b4-07', 'Consejo', '"You shouldn\'t eat too much candy" means no deberías comer mucho dulce', 'Verdadero', 'Shouldn\'t = no deberías (consejo negativo).'),
    mc('p5en-b4-08', 'Salud', '"She has a fever" means:', ['Ella tiene fiebre', 'Ella tiene tos', 'Ella tiene sueño', 'Ella está bien'], 'Ella tiene fiebre', 'Fever = fiebre. She has = ella tiene.'),
    mc('p5en-b4-09', 'Feelings', '"Excited" means:', ['Emocionado', 'Triste', 'Cansado', 'Aburrido'], 'Emocionado', 'Excited = emocionado/a, entusiasmado/a.'),
    mc('p5en-b4-10', 'Salud', '"Go to the doctor" means:', ['Ir al doctor', 'Ir a la escuela', 'Ir a la tienda', 'Ir a dormir'], 'Ir al doctor', 'Doctor = doctor/médico. Go to the doctor = ir al doctor.'),
]);
sv(G, 'ingles', 5, 'Travel and transportation', 'Abr-Jun', ['Vehicles', 'Giving directions'], [
    mc('p5en-b5-01', 'Transporte', '"Car" means:', ['Carro/Auto', 'Camión', 'Bicicleta', 'Avión'], 'Carro/Auto', 'Car = carro, auto, coche.'),
    mc('p5en-b5-02', 'Transporte', '"Airplane" means:', ['Avión', 'Barco', 'Tren', 'Autobús'], 'Avión', 'Airplane = avión. Plane es la forma corta.'),
    tf('p5en-b5-03', 'Transporte', '"Bicycle" means bicicleta', 'Verdadero', 'Bicycle = bicicleta. Bike es la forma corta.'),
    mc('p5en-b5-04', 'Viaje', '"Where are you going?" means:', ['¿A dónde vas?', '¿De dónde vienes?', '¿Cómo te llamas?', '¿Qué hora es?'], '¿A dónde vas?', 'Where = dónde. Going = yendo. Where are you going = ¿a dónde vas?'),
    mc('p5en-b5-05', 'Transporte', '"Ship" means:', ['Barco', 'Submarino', 'Helicóptero', 'Bicicleta'], 'Barco', 'Ship = barco grande. Boat = bote o barco pequeño.'),
    mc('p5en-b5-06', 'Direcciones', '"Cross the street" means:', ['Cruza la calle', 'Sube las escaleras', 'Baja del autobús', 'Gira a la derecha'], 'Cruza la calle', 'Cross = cruzar. Street = calle.'),
    tf('p5en-b5-07', 'Transporte', '"Train" means tren', 'Verdadero', 'Train = tren. Train station = estación de tren.'),
    mc('p5en-b5-08', 'Viaje', '"I travel by plane" means:', ['Yo viajo en avión', 'Yo viajo en tren', 'Yo viajo en carro', 'Yo viajo caminando'], 'Yo viajo en avión', 'By plane = en avión. By car = en carro. By bus = en autobús.'),
    mc('p5en-b5-09', 'Transporte', '"Bus" means:', ['Autobús/Camión', 'Taxi', 'Tren', 'Metro'], 'Autobús/Camión', 'Bus = autobús. En México coloquialmente se dice camión.'),
    mc('p5en-b5-10', 'Viaje', '"Ticket" means:', ['Boleto', 'Mapa', 'Maleta', 'Pasaporte'], 'Boleto', 'Ticket = boleto (para viajar o entrar a un evento).'),
]);

// ═══ ED. FÍSICA 5° ═══
console.log('\n🏃 ED. FÍSICA — ' + G);
sv(G, 'educacion_fisica', 1, 'Entrenamiento y capacidades físicas', 'Ago-Sep', ['Circuitos', 'Fuerza', 'Resistencia'], [
    mc('p5ef-b1-01', 'Circuitos', '¿Qué es un circuito de entrenamiento?', ['Serie de estaciones con diferentes ejercicios que se hacen uno tras otro', 'Un camino para correr', 'Solo hacer abdominales', 'Un juego de mesa'], 'Serie de estaciones con diferentes ejercicios que se hacen uno tras otro', 'En un circuito se rotan por estaciones: lagartijas, abdominales, saltos, etc.'),
    mc('p5ef-b1-02', 'Fuerza', '¿Qué tipo de fuerza usamos al empujar a un compañero en un juego?', ['Fuerza de empuje', 'Fuerza de tracción', 'Fuerza de gravedad', 'Sin fuerza'], 'Fuerza de empuje', 'Empujar = aplicar fuerza alejando algo de nosotros.'),
    tf('p5ef-b1-03', 'Resistencia', 'La resistencia aeróbica se mejora con ejercicio continuo de baja-media intensidad', 'Verdadero', 'Trotar, nadar o pedalear de forma continua mejora la resistencia aeróbica.'),
    mc('p5ef-b1-04', 'Ejercicio', '¿Cuántas veces por semana se recomienda hacer ejercicio?', ['Al menos 5 días', 'Solo 1 día', 'Todos los días sin descanso', 'Solo fines de semana'], 'Al menos 5 días', 'La OMS recomienda al menos 5 días de actividad física moderada para niños.'),
    mc('p5ef-b1-05', 'Fuerza', 'Las sentadillas fortalecen principalmente:', ['Piernas y glúteos', 'Solo brazos', 'Solo abdomen', 'Solo espalda'], 'Piernas y glúteos', 'Las sentadillas trabajan cuádriceps, isquiotibiales, glúteos y pantorrillas.'),
    tf('p5ef-b1-06', 'Ejercicio', 'El descanso entre series de ejercicio es importante para la recuperación', 'Verdadero', 'El descanso permite que los músculos se recuperen y se preparen para la siguiente serie.'),
    mc('p5ef-b1-07', 'Resistencia', '¿Qué es la resistencia anaeróbica?', ['Esfuerzos intensos y cortos sin oxígeno suficiente', 'Ejercicio suave y largo', 'Dormir mucho', 'No hacer nada'], 'Esfuerzos intensos y cortos sin oxígeno suficiente', 'Sprints y levantamiento de pesas son anaeróbicos: intensos pero de corta duración.'),
    mc('p5ef-b1-08', 'Circuitos', 'En un circuito, ¿cuánto tiempo se queda en cada estación normalmente?', ['30 segundos a 1 minuto', '10 minutos', '1 hora', 'Todo el día'], '30 segundos a 1 minuto', 'Cada estación dura entre 30 segundos y 1 minuto, luego se rota a la siguiente.'),
    tf('p5ef-b1-09', 'Fuerza', 'Las lagartijas (push-ups) fortalecen pecho, brazos y hombros', 'Verdadero', 'Las lagartijas son uno de los mejores ejercicios de fuerza para la parte superior del cuerpo.'),
    mc('p5ef-b1-10', 'Ejercicio', '¿Por qué es importante variar los ejercicios?', ['Para trabajar diferentes músculos y no aburrirse', 'Solo para perder tiempo', 'No es importante', 'Para cansarse más rápido'], 'Para trabajar diferentes músculos y no aburrirse', 'La variedad trabaja todo el cuerpo y mantiene la motivación.'),
]);
sv(G, 'educacion_fisica', 2, 'Deportes alternativos', 'Oct-Nov', ['Frisbee', 'Juegos modificados', 'Inclusión'], [
    mc('p5ef-b2-01', 'Frisbee', '¿Qué es el Ultimate Frisbee?', ['Deporte de equipo con disco volador sin contacto', 'Un juego de mesa', 'Lanzar piedras', 'Un deporte acuático'], 'Deporte de equipo con disco volador sin contacto', 'El Ultimate se juega en equipos pasando un disco volador hasta anotar en la zona de gol.'),
    mc('p5ef-b2-02', 'Inclusión', '¿Qué son los deportes adaptados?', ['Deportes modificados para que todos puedan participar', 'Solo deportes para adultos', 'Deportes sin reglas', 'Deportes imposibles'], 'Deportes modificados para que todos puedan participar', 'Los deportes adaptados permiten que personas con diferentes capacidades jueguen juntas.'),
    tf('p5ef-b2-03', 'Alternativos', 'El kin-ball es un deporte que usa una pelota gigante', 'Verdadero', 'El kin-ball usa una pelota de 1.22 metros de diámetro. Participan 3 equipos a la vez.'),
    mc('p5ef-b2-04', 'Juegos', '¿Qué es un "juego modificado"?', ['Un deporte con reglas cambiadas para adaptarse al grupo', 'Un videojuego', 'Un juego tramposo', 'Un juego sin diversión'], 'Un deporte con reglas cambiadas para adaptarse al grupo', 'Los juegos modificados adaptan reglas, espacio o equipo para incluir a todos.'),
    mc('p5ef-b2-05', 'Frisbee', '¿Qué principio tiene el Ultimate Frisbee que lo hace especial?', ['El "Espíritu de Juego": no hay árbitro, los jugadores resuelven todo', 'Ganar a toda costa', 'Se permite el contacto físico', 'Solo pueden jugar 3 personas'], 'El "Espíritu de Juego": no hay árbitro, los jugadores resuelven todo', 'El Spirit of the Game es un valor central: honestidad, respeto y autoárbitraje.'),
    tf('p5ef-b2-06', 'Inclusión', 'Todos los niños, independientemente de su habilidad, tienen derecho a jugar', 'Verdadero', 'El deporte es un derecho de todos. Las reglas se pueden adaptar para incluir a cada persona.'),
    mc('p5ef-b2-07', 'Alternativos', '¿Qué deporte usa raquetas de madera y una pelota de goma en una pared?', ['Frontón / Pelota vasca', 'Tenis', 'Ping-pong', 'Bádminton'], 'Frontón / Pelota vasca', 'El frontón o pelota vasca es un deporte tradicional donde se golpea la pelota contra un muro.'),
    mc('p5ef-b2-08', 'Juegos', '¿Cuál es la ventaja de los deportes alternativos?', ['Son novedosos, inclusivos y divertidos para todos', 'Son más caros', 'Son aburridos', 'Nadie los conoce'], 'Son novedosos, inclusivos y divertidos para todos', 'Los deportes alternativos rompen la rutina y permiten que todos participen sin importar su nivel.'),
    tf('p5ef-b2-09', 'Inclusión', 'Podemos crear reglas nuevas para que un juego sea más justo e inclusivo', 'Verdadero', 'Modificar reglas es una forma creativa de hacer que todos disfruten del juego.'),
    mc('p5ef-b2-10', 'Alternativos', 'El flag football se diferencia del futbol americano porque:', ['Se quita una bandera (flag) en vez de derribar al rival', 'Usa más jugadores', 'Se juega en agua', 'No tiene reglas'], 'Se quita una bandera (flag) en vez de derribar al rival', 'El flag football elimina el contacto físico usando banderines que se jalan para detener al corredor.'),
]);
sv(G, 'educacion_fisica', 3, 'Vida activa y prevención de obesidad', 'Dic-Ene', ['Obesidad infantil', 'Actividad física diaria'], [
    mc('p5ef-b3-01', 'Obesidad', 'México ocupa uno de los primeros lugares mundiales en:', ['Obesidad infantil', 'Natación olímpica', 'Atletismo', 'Gimnasia'], 'Obesidad infantil', 'México tiene una de las tasas más altas de sobrepeso y obesidad infantil en el mundo.'),
    mc('p5ef-b3-02', 'Actividad', '¿Cuántas horas máximo recomienda la OMS de pantallas al día para niños?', ['2 horas', '8 horas', 'Sin límite', '6 horas'], '2 horas', 'La OMS recomienda limitar el tiempo de pantalla a máximo 2 horas diarias para niños.'),
    tf('p5ef-b3-03', 'Obesidad', 'La comida chatarra contribuye a la obesidad infantil', 'Verdadero', 'Los alimentos altos en grasa, azúcar y sal, con bajo valor nutricional, favorecen la obesidad.'),
    mc('p5ef-b3-04', 'Actividad', '¿Cuál es mejor forma de ir a la escuela si vives cerca?', ['Caminando o en bicicleta', 'Siempre en carro', 'En helicóptero', 'No ir a la escuela'], 'Caminando o en bicicleta', 'Caminar o andar en bici es ejercicio gratuito que se puede hacer todos los días.'),
    mc('p5ef-b3-05', 'Nutrición', '¿Qué es el IMC (Índice de Masa Corporal)?', ['Una medida que relaciona peso y estatura para evaluar si estamos en un peso saludable', 'Solo el peso', 'Solo la estatura', 'El color de piel'], 'Una medida que relaciona peso y estatura para evaluar si estamos en un peso saludable', 'IMC = peso(kg) / estatura(m)². Es una referencia básica de salud corporal.'),
    tf('p5ef-b3-06', 'Actividad', 'Jugar videojuegos activos (de movimiento) cuenta como actividad física', 'Verdadero', 'Los videojuegos de baile o deportes que requieren movimiento corporal sí generan actividad física.'),
    mc('p5ef-b3-07', 'Prevención', '¿Cuál es la mejor estrategia contra la obesidad?', ['Combinar actividad física diaria con alimentación saludable', 'Solo hacer dieta', 'Solo hacer ejercicio extremo', 'No comer nada'], 'Combinar actividad física diaria con alimentación saludable', 'La prevención de la obesidad requiere tanto movimiento como buena nutrición.'),
    mc('p5ef-b3-08', 'Nutrición', '¿Por qué son dañinos los refrescos azucarados?', ['Tienen exceso de azúcar que favorece obesidad y caries', 'Son nutritivos', 'Dan vitaminas', 'Son buenos para los huesos'], 'Tienen exceso de azúcar que favorece obesidad y caries', 'Un refresco puede tener hasta 10 cucharadas de azúcar, superando el límite diario.'),
    tf('p5ef-b3-09', 'Actividad', 'Los recreos activos (con juegos de movimiento) ayudan a la salud', 'Verdadero', 'Usar el recreo para jugar activamente contribuye a los 60 minutos diarios recomendados.'),
    mc('p5ef-b3-10', 'Prevención', '¿Qué hábito saludable debemos practicar TODOS los días?', ['Hacer al menos 60 minutos de actividad física', 'Comer solo dulces', 'Ver TV todo el día', 'Dormir solo 3 horas'], 'Hacer al menos 60 minutos de actividad física', '60 minutos diarios de ejercicio es el mínimo para mantener una vida activa y saludable.'),
]);
sv(G, 'educacion_fisica', 4, 'Deportes de conjunto avanzados', 'Feb-Mar', ['Voleibol', 'Handball', 'Estrategia'], [
    mc('p5ef-b4-01', 'Voleibol', '¿Cuántos jugadores tiene cada equipo de voleibol en cancha?', ['6', '5', '11', '7'], '6', 'Cada equipo de voleibol tiene 6 jugadores en cancha con rotaciones.'),
    mc('p5ef-b4-02', 'Handball', '¿Qué es el handball (balonmano)?', ['Deporte donde se lanza la pelota con las manos para anotar gol', 'Futbol con las manos', 'Solo atrapar pelotas', 'Un juego de mesa'], 'Deporte donde se lanza la pelota con las manos para anotar gol', 'El balonmano combina elementos de basquetbol y futbol, usando las manos para anotar en portería.'),
    tf('p5ef-b4-03', 'Voleibol', 'En voleibol, cada equipo puede tocar la pelota máximo 3 veces antes de pasarla', 'Verdadero', 'Las 3 touches: recepción, armado y remate, antes de devolver el balón al otro lado.'),
    mc('p5ef-b4-04', 'Estrategia', '¿Qué es una estrategia de juego?', ['Un plan organizado para ganar como equipo', 'Hacer trampa', 'Jugar sin pensar', 'Hacer todo solo'], 'Un plan organizado para ganar como equipo', 'La estrategia coordina las acciones de todos los jugadores para alcanzar el objetivo.'),
    mc('p5ef-b4-05', 'Voleibol', '¿Cómo se llama el golpe principal de ataque en voleibol?', ['Remate (spike)', 'Saque', 'Recepción', 'Bloqueo'], 'Remate (spike)', 'El remate es un golpe fuerte y hacia abajo para que la pelota caiga en el campo rival.'),
    tf('p5ef-b4-06', 'Handball', 'En balonmano NO se puede dar más de 3 pasos con la pelota', 'Verdadero', 'Después de 3 pasos se debe botar la pelota, pasarla o lanzar a portería.'),
    mc('p5ef-b4-07', 'Estrategia', '¿Qué posición defiende la portería en handball y futbol?', ['El portero/guardameta', 'El delantero', 'El mediocampista', 'El lateral'], 'El portero/guardameta', 'El portero es el último defensor y el único que puede usar todo su cuerpo para detener el balón.'),
    mc('p5ef-b4-08', 'Equipo', '¿Cuál es la diferencia entre ataque y defensa?', ['Ataque intenta anotar, defensa intenta impedirlo', 'Son lo mismo', 'No hay diferencia', 'Solo el capitán decide'], 'Ataque intenta anotar, defensa intenta impedirlo', 'En deportes de equipo se alterna entre atacar (buscar gol) y defender (evitar goles).'),
    tf('p5ef-b4-09', 'Voleibol', 'El saque es el golpe que inicia cada punto en voleibol', 'Verdadero', 'El saque (serve) se hace desde detrás de la línea final para poner la pelota en juego.'),
    mc('p5ef-b4-10', 'Equipo', '¿Por qué la comunicación es clave en deportes de equipo?', ['Para coordinar movimientos y anticipar jugadas del rival', 'Para gritar', 'Para pelear', 'No es necesaria'], 'Para coordinar movimientos y anticipar jugadas del rival', 'La comunicación permite que el equipo actúe como unidad y reaccione a las jugadas.'),
]);
sv(G, 'educacion_fisica', 5, 'Actividades recreativas y vida sana', 'Abr-Jun', ['Senderismo', 'Campismo', 'Actividades al aire libre'], [
    mc('p5ef-b5-01', 'Senderismo', '¿Qué es el senderismo?', ['Caminar por senderos naturales como montañas o bosques', 'Correr en pista', 'Nadar en alberca', 'Jugar en la cancha'], 'Caminar por senderos naturales como montañas o bosques', 'El senderismo combina ejercicio con contacto con la naturaleza.'),
    mc('p5ef-b5-02', 'Seguridad', '¿Qué debemos llevar siempre al hacer actividades al aire libre?', ['Agua, protector solar y un botiquín básico', 'Solo el celular', 'Solo dulces', 'Nada'], 'Agua, protector solar y un botiquín básico', 'La hidratación, protección solar y primeros auxilios son esenciales en actividades al aire libre.'),
    tf('p5ef-b5-03', 'Naturaleza', 'Las actividades al aire libre mejoran la salud mental y reducen el estrés', 'Verdadero', 'El contacto con la naturaleza reduce cortisol (hormona del estrés) y mejora el ánimo.'),
    mc('p5ef-b5-04', 'Campismo', '¿Qué principio debemos seguir al acampar en la naturaleza?', ['No dejar rastro: llevarse toda la basura', 'Tirar basura donde sea', 'Cortar árboles libremente', 'Hacer fogatas sin control'], 'No dejar rastro: llevarse toda la basura', 'El principio "Leave No Trace" protege el medio ambiente para futuras generaciones.'),
    mc('p5ef-b5-05', 'Recreación', '¿Cuál de estas es una actividad recreativa al aire libre?', ['Todas: ciclismo, excursionismo, natación en río', 'Solo ver televisión', 'Solo usar el celular', 'Solo jugar videojuegos'], 'Todas: ciclismo, excursionismo, natación en río', 'Las actividades recreativas al aire libre son variadas y benefician la salud integral.'),
    tf('p5ef-b5-06', 'Seguridad', 'Es importante avisar a un adulto antes de salir a hacer actividades en la naturaleza', 'Verdadero', 'Un adulto debe saber dónde estamos y cuándo volveremos por seguridad.'),
    mc('p5ef-b5-07', 'Vida sana', '¿Cuál es el beneficio más importante de una vida físicamente activa?', ['Prevenir enfermedades y tener mejor calidad de vida', 'Solo verse bien', 'Solo ganar competencias', 'Solo bajar de peso'], 'Prevenir enfermedades y tener mejor calidad de vida', 'La actividad física regular previene obesidad, diabetes, enfermedades del corazón y mejora la salud mental.'),
    mc('p5ef-b5-08', 'Naturaleza', '¿Qué hacemos si nos encontramos un animal silvestre?', ['Observarlo a distancia sin molestarlo', 'Correr hacia él', 'Intentar tocarlo', 'Darle comida humana'], 'Observarlo a distancia sin molestarlo', 'Los animales silvestres deben ser respetados y observados sin interferir.'),
    tf('p5ef-b5-09', 'Recreación', 'Andar en bicicleta es una excelente forma de ejercicio cardiovascular', 'Verdadero', 'El ciclismo fortalece el corazón, las piernas y es una forma de transporte ecológica.'),
    mc('p5ef-b5-10', 'Vida sana', '¿Cuáles son los 3 pilares de una vida saludable?', ['Ejercicio, nutrición y descanso', 'Solo dieta', 'Solo ejercicio', 'Solo descanso'], 'Ejercicio, nutrición y descanso', 'La salud integral requiere actividad física regular, alimentación balanceada y sueño suficiente.'),
]);

console.log('\n✅ PRIMARIA 5° — Inglés (50) + Ed. Física (50) = 100 ejercicios COMPLETOS');
