const fs = require('fs'), p = require('path');
const BASE = p.join(__dirname, '..', 'src', 'data', 'exercises');
function mc(id, t, q, ops, r, exp) { return { id, tema: t, tipo: 'multiple_choice', nivel: 'v1', pregunta: q, opciones: ops, respuestaCorrecta: r, explicacion: exp }; }
function tf(id, t, q, r, exp) { return { id, tema: t, tipo: 'true_false', nivel: 'v1', pregunta: q, opciones: ['Verdadero', 'Falso'], respuestaCorrecta: r, explicacion: exp }; }
function sv(g, m, b, n, mes, ts, ejs) {
    const d = p.join(BASE, g, m); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(p.join(d, 'bloque-' + b + '.json'), JSON.stringify({ grado: g, materia: m, bloque: b, nombre: n, meses: mes, temas: ts, totalEjercicios: ejs.length, ejercicios: { v1: ejs, v2: [], preview: ejs.slice(0, 2) } }, null, 2));
    console.log('  ✅ ' + g + '/' + m + '/bloque-' + b + ' (' + ejs.length + ' ejs)');
}
const G = 'primaria-3';

// ═══ INGLÉS ═══
console.log('\n🇬🇧 INGLÉS — ' + G);
sv(G, 'ingles', 1, 'Hello! Greetings and introductions', 'Ago-Sep', ['Greetings', 'Numbers', 'Colors'], [
    mc('p3en-b1-01', 'Saludos', 'How do you say "Hola" in English?', ['Hello', 'Goodbye', 'Thanks', 'Please'], 'Hello', 'Hello = Hola. Es el saludo más común en inglés.'),
    mc('p3en-b1-02', 'Números', 'How do you say "tres" in English?', ['Three', 'Tree', 'Free', 'Thee'], 'Three', 'Three = 3. One, Two, Three...'),
    tf('p3en-b1-03', 'Saludos', '"Goodbye" means Hola', 'Falso', 'Goodbye = Adiós. Hello = Hola.'),
    mc('p3en-b1-04', 'Verbo', 'Complete: My name ___ Pedro.', ['is', 'am', 'are', 'be'], 'is', 'Usamos "is" con nombres propios: My name is Pedro.'),
    mc('p3en-b1-05', 'Números', 'What number comes after five?', ['Six', 'Four', 'Seven', 'Eight'], 'Six', 'Five (5), Six (6), Seven (7)...'),
    tf('p3en-b1-06', 'Colores', 'Blue is the color of the sky', 'Verdadero', 'Blue = azul. The sky is blue = El cielo es azul.'),
    mc('p3en-b1-07', 'Colores', 'What color is the sun?', ['Yellow', 'Blue', 'Red', 'Green'], 'Yellow', 'Yellow = amarillo. The sun is yellow.'),
    mc('p3en-b1-08', 'Saludos', '"Thank you" means:', ['Gracias', 'Por favor', 'De nada', 'Hola'], 'Gracias', 'Thank you = Gracias.'),
    mc('p3en-b1-09', 'Presentación', '"What is your name?" means:', ['¿Cómo te llamas?', '¿Dónde vives?', '¿Cuántos años tienes?', '¿Qué haces?'], '¿Cómo te llamas?', 'What is your name? = ¿Cómo te llamas?'),
    tf('p3en-b1-10', 'Saludos', '"Good morning" means buenas noches', 'Falso', 'Good morning = Buenos días. Good night = Buenas noches.'),
]);
sv(G, 'ingles', 2, 'My family and home', 'Oct-Nov', ['Family members', 'Possessives'], [
    mc('p3en-b2-01', 'Familia', '"Mother" in Spanish is:', ['Mamá', 'Papá', 'Hermano', 'Tío'], 'Mamá', 'Mother = mamá, Father = papá.'),
    mc('p3en-b2-02', 'Familia', 'How do you say "hermano"?', ['Brother', 'Sister', 'Cousin', 'Uncle'], 'Brother', 'Brother = hermano. Sister = hermana.'),
    tf('p3en-b2-03', 'Familia', '"Grandmother" means prima', 'Falso', 'Grandmother = abuela. Cousin = prima/primo.'),
    mc('p3en-b2-04', 'Posesivos', '"My" means:', ['Mi / Mis', 'Tu / Tus', 'Su', 'Nuestro'], 'Mi / Mis', 'My = mi o mis (posesivo de primera persona).'),
    mc('p3en-b2-05', 'Familia', 'Father + Mother = ?', ['Parents', 'Brothers', 'Cousins', 'Friends'], 'Parents', 'Parents = padres (mamá y papá juntos).'),
    tf('p3en-b2-06', 'Familia', '"Uncle" means tío', 'Verdadero', 'Uncle = tío. Aunt = tía.'),
    mc('p3en-b2-07', 'Posesivos', '"Her name is Ana" — Her means:', ['Su (de ella)', 'Su (de él)', 'Mi', 'Tu'], 'Su (de ella)', 'Her = de ella. His = de él.'),
    mc('p3en-b2-08', 'Familia', '"Sister" means:', ['Hermana', 'Hermano', 'Tía', 'Abuela'], 'Hermana', 'Sister = hermana.'),
    mc('p3en-b2-09', 'Familia', '"Baby" in Spanish is:', ['Bebé', 'Niño', 'Adulto', 'Joven'], 'Bebé', 'Baby = bebé.'),
    tf('p3en-b2-10', 'Familia', '"Aunt" means tía', 'Verdadero', 'Aunt = tía. Uncle = tío.'),
]);
sv(G, 'ingles', 3, 'My school', 'Dic-Ene', ['Classroom objects', 'School verbs'], [
    mc('p3en-b3-01', 'Objetos', '"Pencil" means:', ['Lápiz', 'Pluma', 'Borrador', 'Regla'], 'Lápiz', 'Pencil = lápiz. Pen = pluma.'),
    mc('p3en-b3-02', 'Objetos', '"Book" means:', ['Libro', 'Cuaderno', 'Mochila', 'Mesa'], 'Libro', 'Book = libro. Notebook = cuaderno.'),
    tf('p3en-b3-03', 'Objetos', '"Eraser" means pluma', 'Falso', 'Eraser = borrador. Pen = pluma.'),
    mc('p3en-b3-04', 'Verbos', '"I read" means:', ['Yo leo', 'Yo escribo', 'Yo dibujo', 'Yo corro'], 'Yo leo', 'Read = leer. I read = yo leo.'),
    mc('p3en-b3-05', 'Objetos', '"Ruler" means:', ['Regla', 'Tijeras', 'Pegamento', 'Colores'], 'Regla', 'Ruler = regla (para medir y trazar líneas).'),
    mc('p3en-b3-06', 'Verbos', '"She writes" means:', ['Ella escribe', 'Ella corre', 'Él escribe', 'Ella come'], 'Ella escribe', 'Write = escribir. She writes = ella escribe.'),
    tf('p3en-b3-07', 'Objetos', '"Backpack" means mochila', 'Verdadero', 'Backpack = mochila.'),
    mc('p3en-b3-08', 'Verbos', '"We study" means:', ['Nosotros estudiamos', 'Ellos estudian', 'Yo estudio', 'Tú estudias'], 'Nosotros estudiamos', 'We = nosotros. Study = estudiar.'),
    mc('p3en-b3-09', 'Objetos', '"Scissors" means:', ['Tijeras', 'Pegamento', 'Colores', 'Papel'], 'Tijeras', 'Scissors = tijeras.'),
    mc('p3en-b3-10', 'Verbos', '"Open your book" means:', ['Abre tu libro', 'Cierra tu libro', 'Levanta la mano', 'Siéntate'], 'Abre tu libro', 'Open = abrir. Your book = tu libro.'),
]);
sv(G, 'ingles', 4, 'Animals and nature', 'Feb-Mar', ['Animals', 'Nature vocabulary'], [
    mc('p3en-b4-01', 'Animales', '"Dog" means:', ['Perro', 'Gato', 'Pájaro', 'Pez'], 'Perro', 'Dog = perro. Cat = gato.'),
    mc('p3en-b4-02', 'Animales', '"Bird" means:', ['Pájaro', 'Pez', 'Caballo', 'Vaca'], 'Pájaro', 'Bird = pájaro o ave.'),
    tf('p3en-b4-03', 'Animales', 'A "fish" lives in the water', 'Verdadero', 'Fish = pez. Los peces viven en el agua.'),
    mc('p3en-b4-04', 'Animales', '"Horse" means:', ['Caballo', 'Burro', 'Vaca', 'Cerdo'], 'Caballo', 'Horse = caballo.'),
    mc('p3en-b4-05', 'Naturaleza', '"Tree" means:', ['Árbol', 'Flor', 'Planta', 'Hoja'], 'Árbol', 'Tree = árbol. Flower = flor.'),
    mc('p3en-b4-06', 'Animales', 'Which animal says "meow"?', ['Cat', 'Dog', 'Cow', 'Bird'], 'Cat', 'Cats say meow. Los gatos hacen miau.'),
    tf('p3en-b4-07', 'Naturaleza', '"Sun" means luna', 'Falso', 'Sun = sol. Moon = luna.'),
    mc('p3en-b4-08', 'Colores', '"Green" is the color of:', ['Grass', 'The sky', 'The sun', 'A tomato'], 'Grass', 'Green = verde. La hierba (grass) es verde.'),
    mc('p3en-b4-09', 'Animales', '"Cow" means:', ['Vaca', 'Toro', 'Cerdo', 'Oveja'], 'Vaca', 'Cow = vaca. Bull = toro.'),
    mc('p3en-b4-10', 'Naturaleza', '"Rain" means:', ['Lluvia', 'Nieve', 'Sol', 'Viento'], 'Lluvia', 'Rain = lluvia. It rains = llueve.'),
]);
sv(G, 'ingles', 5, 'Food and body', 'Abr-Jun', ['Food vocabulary', 'Body parts'], [
    mc('p3en-b5-01', 'Comida', '"Apple" means:', ['Manzana', 'Naranja', 'Plátano', 'Uva'], 'Manzana', 'Apple = manzana.'),
    mc('p3en-b5-02', 'Comida', '"Water" means:', ['Agua', 'Leche', 'Jugo', 'Refresco'], 'Agua', 'Water = agua.'),
    tf('p3en-b5-03', 'Comida', '"Bread" means arroz', 'Falso', 'Bread = pan. Rice = arroz.'),
    mc('p3en-b5-04', 'Cuerpo', '"Head" means:', ['Cabeza', 'Mano', 'Pie', 'Rodilla'], 'Cabeza', 'Head = cabeza.'),
    mc('p3en-b5-05', 'Cuerpo', '"Hand" means:', ['Mano', 'Pie', 'Brazo', 'Pierna'], 'Mano', 'Hand = mano. Foot = pie.'),
    mc('p3en-b5-06', 'Comida', '"Milk" means:', ['Leche', 'Agua', 'Jugo', 'Té'], 'Leche', 'Milk = leche.'),
    tf('p3en-b5-07', 'Cuerpo', '"Eyes" are used to see', 'Verdadero', 'Eyes = ojos. Usamos los ojos para ver.'),
    mc('p3en-b5-08', 'Comida', '"I am hungry" means:', ['Tengo hambre', 'Tengo sed', 'Tengo sueño', 'Tengo frío'], 'Tengo hambre', 'Hungry = hambriento. I am hungry = tengo hambre.'),
    mc('p3en-b5-09', 'Cuerpo', '"Nose" means:', ['Nariz', 'Boca', 'Oído', 'Ojo'], 'Nariz', 'Nose = nariz.'),
    mc('p3en-b5-10', 'Comida', '"Orange" (fruit) in Spanish is:', ['Naranja', 'Manzana', 'Pera', 'Limón'], 'Naranja', 'Orange = naranja (fruta y color).'),
]);

// ═══ EDUCACIÓN FÍSICA ═══
console.log('\n🏃 ED. FÍSICA — ' + G);
sv(G, 'educacion_fisica', 1, 'Capacidades físicas básicas', 'Ago-Sep', ['Fuerza', 'Velocidad', 'Resistencia'], [
    mc('p3ef-b1-01', 'Capacidades', '¿Cuáles son las capacidades físicas básicas?', ['Fuerza, velocidad, resistencia y flexibilidad', 'Solo correr', 'Comer bien', 'Dormir mucho'], 'Fuerza, velocidad, resistencia y flexibilidad', 'Estas 4 capacidades son la base de todo movimiento deportivo.'),
    mc('p3ef-b1-02', 'Fuerza', '¿Qué ejercicio nos ayuda a tener más fuerza en los brazos?', ['Lagartijas (push-ups)', 'Saltar la cuerda', 'Correr', 'Nadar'], 'Lagartijas (push-ups)', 'Las lagartijas ejercitan los músculos de los brazos, pecho y hombros.'),
    tf('p3ef-b1-03', 'Velocidad', 'La velocidad es la capacidad de movernos rápido', 'Verdadero', 'La velocidad nos permite desplazarnos a gran rapidez en poco tiempo.'),
    mc('p3ef-b1-04', 'Resistencia', '¿Qué es la resistencia física?', ['Poder hacer ejercicio durante mucho tiempo sin cansarse tanto', 'Ser muy fuerte', 'Ser muy rápido', 'Ser muy flexible'], 'Poder hacer ejercicio durante mucho tiempo sin cansarse tanto', 'La resistencia nos permite mantener la actividad física durante períodos largos.'),
    mc('p3ef-b1-05', 'Flexibilidad', '¿Qué es la flexibilidad?', ['La capacidad de estirar nuestro cuerpo', 'La velocidad máxima', 'La fuerza de los brazos', 'El peso del cuerpo'], 'La capacidad de estirar nuestro cuerpo', 'La flexibilidad permite que articulaciones y músculos se muevan con amplitud.'),
    tf('p3ef-b1-06', 'Capacidades', 'El calentamiento previo evita lesiones', 'Verdadero', 'Calentar prepara los músculos, tendones y articulaciones para el ejercicio intenso.'),
    mc('p3ef-b1-07', 'Velocidad', '¿En qué deporte es muy importante la velocidad?', ['Carreras de 100 metros', 'Ajedrez', 'Dominó', 'Lectura'], 'Carreras de 100 metros', 'Los velocistas necesitan máxima velocidad para ganar la carrera.'),
    mc('p3ef-b1-08', 'Fuerza', '¿Qué ejercicio fortalece las piernas?', ['Sentadillas', 'Lagartijas', 'Abdominales', 'Estiramientos de brazos'], 'Sentadillas', 'Las sentadillas ejercitan los cuádriceps, glúteos y pantorrillas.'),
    tf('p3ef-b1-09', 'Resistencia', 'Correr durante 20 minutos seguidos requiere resistencia', 'Verdadero', 'La carrera continua es un ejercicio aeróbico que desarrolla la resistencia.'),
    mc('p3ef-b1-10', 'Capacidades', '¿Qué debemos hacer al terminar el ejercicio?', ['Estiramientos suaves (vuelta a la calma)', 'Detenernos de golpe', 'Comer inmediatamente', 'Correr más rápido'], 'Estiramientos suaves (vuelta a la calma)', 'La vuelta a la calma reduce el ritmo cardíaco y previene lesiones.'),
]);
sv(G, 'educacion_fisica', 2, 'Deportes de equipo', 'Oct-Nov', ['Futbol', 'Basquetbol', 'Trabajo en equipo'], [
    mc('p3ef-b2-01', 'Futbol', '¿Cuántos jugadores tiene un equipo de futbol en cancha?', ['11', '9', '7', '5'], '11', 'Cada equipo tiene 11 jugadores incluyendo al portero.'),
    tf('p3ef-b2-02', 'Equipo', 'En los deportes de equipo es importante la cooperación', 'Verdadero', 'La cooperación y comunicación entre compañeros son clave para el éxito del equipo.'),
    mc('p3ef-b2-03', 'Basquetbol', '¿Cuántos puntos vale una canasta normal en basquetbol?', ['2 puntos', '1 punto', '3 puntos', '5 puntos'], '2 puntos', 'Una canasta dentro del área vale 2 puntos. Fuera del arco vale 3.'),
    mc('p3ef-b2-04', 'Futbol', '¿Quién es el único jugador que puede usar las manos en futbol?', ['El portero', 'El delantero', 'El mediocampista', 'El defensa'], 'El portero', 'Solo el portero puede tocar el balón con las manos, y solo dentro del área.'),
    mc('p3ef-b2-05', 'Equipo', '¿Qué significa "fair play"?', ['Juego limpio: respetar reglas y al rival', 'Ganar a toda costa', 'Hacer trampa', 'No jugar'], 'Juego limpio: respetar reglas y al rival', 'Fair play es la deportividad: jugar respetando las reglas y a los demás.'),
    tf('p3ef-b2-06', 'Basquetbol', 'En basquetbol se puede correr con la pelota sin botarla', 'Falso', 'En basquetbol hay que botar (driblar) la pelota mientras caminas o corres.'),
    mc('p3ef-b2-07', 'Equipo', 'Si un compañero comete un error, ¿qué hacemos?', ['Lo animamos y ayudamos a mejorar', 'Lo regañamos', 'No le volvemos a pasar la pelota', 'Lo sacamos del equipo'], 'Lo animamos y ayudamos a mejorar', 'Los buenos compañeros se apoyan mutuamente, especialmente ante los errores.'),
    mc('p3ef-b2-08', 'Futbol', '¿Qué es un "penalti" en futbol?', ['Un tiro libre desde un punto cerca de la portería', 'Un gol', 'Un saque de banda', 'Una falta lejana'], 'Un tiro libre desde un punto cerca de la portería', 'El penalti se cobra por una falta dentro del área. El tirador queda frente al portero.'),
    tf('p3ef-b2-09', 'Equipo', 'Felicitar al equipo contrario al final del partido es buena deportividad', 'Verdadero', 'Reconocer el esfuerzo del rival es parte del juego limpio y el respeto deportivo.'),
    mc('p3ef-b2-10', 'Deportes', '¿Cuál de estos NO es un deporte de equipo?', ['Natación individual', 'Futbol', 'Basquetbol', 'Volibol'], 'Natación individual', 'La natación individual es un deporte donde compites solo, no en equipo.'),
]);
sv(G, 'educacion_fisica', 3, 'Gimnasia y acrobacia básica', 'Dic-Ene', ['Rollos', 'Equilibrio', 'Coordinación'], [
    mc('p3ef-b3-01', 'Gimnasia', '¿Qué es un rollo hacia adelante?', ['Girar sobre la espalda rodando hacia enfrente', 'Saltar muy alto', 'Correr en círculos', 'Sentarse en el piso'], 'Girar sobre la espalda rodando hacia enfrente', 'El rollo adelante se hace agachándose, metiendo la cabeza y rodando sobre la espalda.'),
    tf('p3ef-b3-02', 'Seguridad', 'Debemos hacer acrobacias solo con supervisión del maestro', 'Verdadero', 'La supervisión del profesor evita accidentes y nos enseña la técnica correcta.'),
    mc('p3ef-b3-03', 'Equilibrio', '¿Qué es una viga de equilibrio?', ['Una barra estrecha donde caminamos manteniendo el balance', 'Un balón', 'Una portería', 'Una red'], 'Una barra estrecha donde caminamos manteniendo el balance', 'La viga de equilibrio mide 10 cm de ancho y prueba nuestra capacidad de balance.'),
    mc('p3ef-b3-04', 'Coordinación', '¿Qué significa coordinación en gimnasia?', ['Mover el cuerpo de forma armoniosa y controlada', 'Correr muy rápido', 'Ser el más fuerte', 'Ganar la competencia'], 'Mover el cuerpo de forma armoniosa y controlada', 'La coordinación permite movimientos fluidos, precisos y elegantes en gimnasia.'),
    tf('p3ef-b3-05', 'Gimnasia', 'La gimnasia solo la practican los olímpicos', 'Falso', 'Cualquier persona puede practicar gimnasia básica para mejorar flexibilidad y coordinación.'),
    mc('p3ef-b3-06', 'Seguridad', '¿Sobre qué superficie debemos practicar rodadas y rollos?', ['Sobre colchonetas o pasto suave', 'Sobre concreto', 'Sobre piedras', 'Sobre el escritorio'], 'Sobre colchonetas o pasto suave', 'Las colchonetas protegen el cuerpo al hacer rollos, caídas y acrobacias.'),
    mc('p3ef-b3-07', 'Equilibrio', '¿Qué ejercicio mejora el equilibrio estático?', ['Pararse en un solo pie con los ojos cerrados', 'Correr a máxima velocidad', 'Levantar pesas', 'Nadar'], 'Pararse en un solo pie con los ojos cerrados', 'El equilibrio estático es mantenerse estable sin moverse. Los ojos cerrados lo hace más difícil.'),
    tf('p3ef-b3-08', 'Gimnasia', 'Los estiramientos son parte importante de la gimnasia', 'Verdadero', 'La flexibilidad es fundamental en gimnasia. Los estiramientos la desarrollan.'),
    mc('p3ef-b3-09', 'Coordinación', 'Saltar la cuerda mejora:', ['La coordinación y el ritmo', 'Solo la fuerza', 'Solo la velocidad', 'Solo la flexibilidad'], 'La coordinación y el ritmo', 'Saltar la cuerda combina coordinación de piernas, brazos y ritmo visual.'),
    mc('p3ef-b3-10', 'Gimnasia', '¿Qué debemos hacer si sentimos dolor al hacer un ejercicio?', ['Parar y avisar al maestro', 'Seguir aunque duela', 'Ignorar el dolor', 'Hacerlo más fuerte'], 'Parar y avisar al maestro', 'El dolor es señal de que algo no está bien. Siempre debemos avisar al profesor.'),
]);
sv(G, 'educacion_fisica', 4, 'Nutrición y rendimiento', 'Feb-Mar', ['Grupos alimenticios', 'Hidratación deportiva'], [
    mc('p3ef-b4-01', 'Nutrición', '¿Cuáles son los 3 grupos del Plato del Bien Comer?', ['Frutas/verduras, cereales/tubérculos, leguminosas/alimentos de origen animal', 'Solo carne', 'Solo frutas', 'Solo pan'], 'Frutas/verduras, cereales/tubérculos, leguminosas/alimentos de origen animal', 'El Plato del Bien Comer mexicano organiza los alimentos en 3 grupos para una dieta balanceada.'),
    tf('p3ef-b4-02', 'Hidratación', 'Debemos tomar agua aunque no tengamos sed durante el ejercicio', 'Verdadero', 'La sed aparece cuando ya estamos algo deshidratados. Es mejor tomar agua regularmente.'),
    mc('p3ef-b4-03', 'Nutrición', '¿Qué nutriente nos da energía rápida para correr?', ['Carbohidratos (pan, tortilla, fruta)', 'Solo proteína', 'Solo grasa', 'Solo agua'], 'Carbohidratos (pan, tortilla, fruta)', 'Los carbohidratos son la fuente principal de energía para la actividad física.'),
    mc('p3ef-b4-04', 'Nutrición', '¿Qué alimento ayuda a construir músculos fuertes?', ['Proteína (huevo, pollo, frijoles)', 'Dulces', 'Refrescos', 'Papas fritas'], 'Proteína (huevo, pollo, frijoles)', 'Las proteínas son los "ladrillos" que construyen y reparan los músculos.'),
    tf('p3ef-b4-05', 'Nutrición', 'Las vitaminas de las frutas fortalecen nuestro sistema inmune', 'Verdadero', 'Las vitaminas (especialmente C y D) ayudan a las defensas del cuerpo contra enfermedades.'),
    mc('p3ef-b4-06', 'Hidratación', '¿Cuántos vasos de agua debe tomar un niño al día aproximadamente?', ['6 a 8 vasos', 'Solo 1 vaso', 'Ninguno', '20 vasos'], '6 a 8 vasos', 'Los niños de 8-9 años necesitan aproximadamente 6-8 vasos de agua al día.'),
    mc('p3ef-b4-07', 'Nutrición', '¿Qué bebida es más recomendable para los niños?', ['Agua natural', 'Refresco', 'Jugo industrializado', 'Café'], 'Agua natural', 'El agua natural es la mejor opción de hidratación, sin azúcar ni aditivos.'),
    tf('p3ef-b4-08', 'Nutrición', 'Desayunar antes de ir a la escuela es muy importante', 'Verdadero', 'El desayuno proporciona la energía necesaria para concentrarse y aprender durante la mañana.'),
    mc('p3ef-b4-09', 'Nutrición', '¿Cuándo es el mejor momento para comer antes de hacer deporte?', ['1 a 2 horas antes', 'Justo antes', 'Inmediatamente después', '5 horas antes'], '1 a 2 horas antes', 'Comer 1-2 horas antes da tiempo para la digestión y proporciona energía disponible.'),
    mc('p3ef-b4-10', 'Nutrición', '¿Qué pasa si solo comemos dulces y no frutas ni verduras?', ['Nos faltarán vitaminas y nos enfermaremos más', 'Estaremos más fuertes', 'Correremos más rápido', 'No pasa nada'], 'Nos faltarán vitaminas y nos enfermaremos más', 'Los dulces no tienen los nutrientes que el cuerpo necesita para crecer sano.'),
]);
sv(G, 'educacion_fisica', 5, 'Juegos predeportivos y atletismo', 'Abr-Jun', ['Mini atletismo', 'Juegos predeportivos'], [
    mc('p3ef-b5-01', 'Atletismo', '¿Qué incluye el atletismo?', ['Carreras, saltos y lanzamientos', 'Solo natación', 'Solo futbol', 'Solo gimnasia'], 'Carreras, saltos y lanzamientos', 'El atletismo es el deporte base que incluye correr, saltar y lanzar objetos.'),
    mc('p3ef-b5-02', 'Carreras', '¿Cómo se llama la posición para arrancar en una carrera?', ['Posición de salida o arrancada', 'Posición de dormir', 'Posición de sentarse', 'Posición de comer'], 'Posición de salida o arrancada', 'En las carreras, los corredores se colocan agachados listos para salir al dar la señal.'),
    tf('p3ef-b5-03', 'Atletismo', 'El salto de longitud mide qué tan lejos podemos saltar', 'Verdadero', 'En el salto de longitud se corre y se salta lo más lejos posible hacia un foso de arena.'),
    mc('p3ef-b5-04', 'Juegos', '¿Qué es un juego predeportivo?', ['Un juego que nos prepara para practicar un deporte real', 'Un videojuego', 'Un juego de mesa', 'Un juego sin reglas'], 'Un juego que nos prepara para practicar un deporte real', 'Los juegos predeportivos enseñan habilidades que después se usan en deportes formales.'),
    mc('p3ef-b5-05', 'Lanzamiento', '¿Con qué parte del cuerpo lanzamos una pelota en atletismo?', ['Con el brazo y la mano', 'Con los pies', 'Con la cabeza', 'Con las rodillas'], 'Con el brazo y la mano', 'En atletismo se lanza impulsando el brazo desde atrás hacia adelante con fuerza.'),
    tf('p3ef-b5-06', 'Atletismo', 'En los relevos, el equipo que pasa más rápido el testimonio gana', 'Verdadero', 'En las carreras de relevos, la velocidad individual Y la coordinación al pasar el testimonio son clave.'),
    mc('p3ef-b5-07', 'Carreras', '¿Qué tipo de carrera es la de obstáculos?', ['Correr saltando vallas o pasando obstáculos', 'Correr en línea recta solamente', 'Nadar', 'Andar en bicicleta'], 'Correr saltando vallas o pasando obstáculos', 'La carrera de obstáculos combina velocidad con habilidad para saltar barreras.'),
    mc('p3ef-b5-08', 'Juegos', '¿Qué juego predeportivo nos prepara para el basquetbol?', ['Juegos de pases y tiro a un aro', 'Juegos con los pies', 'Juegos de nadar', 'Juegos de ajedrez'], 'Juegos de pases y tiro a un aro', 'Pasar la pelota con las manos y encestar en un aro son habilidades básicas del basquetbol.'),
    tf('p3ef-b5-09', 'Atletismo', 'Las Olimpiadas incluyen pruebas de atletismo', 'Verdadero', 'El atletismo es uno de los deportes principales de los Juegos Olímpicos desde la antigüedad.'),
    mc('p3ef-b5-10', 'Juegos', 'Al final de una competencia deportiva, ¿qué es lo más importante?', ['Haber dado lo mejor de uno mismo y divertirse', 'Solo ganar', 'El premio', 'La medalla'], 'Haber dado lo mejor de uno mismo y divertirse', 'Más allá de ganar, lo valioso es el esfuerzo, la diversión y lo que aprendimos.'),
]);

console.log('\n✅ PRIMARIA 3° — Inglés (50) + Ed. Física (50) = 100 ejercicios COMPLETOS');
