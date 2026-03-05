const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');

// ══════════════════════════════════════════════════════════════════════
// CURRICULUM KINDER Y SECUNDARIA
// ══════════════════════════════════════════════════════════════════════
const CURRICULUM = {
    'kinder': {
        matematicas: [
            { b: 'bloque-1', bNum: 1, nombre: 'Números del 1 al 10', meses: 'Agosto-Septiembre', temas: ['Contar del 1 al 10', 'Reconocer números'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Figuras geométricas', meses: 'Septiembre-Octubre', temas: ['Círculo, cuadrado, triángulo', 'Colores y formas'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Números del 10 al 20', meses: 'Octubre-Noviembre', temas: ['Contar del 10 al 20', 'Comparar cantidades'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Suma básica', meses: 'Noviembre-Diciembre', temas: ['Sumas con objetos', 'Juntar grupos'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Patrones y medidas', meses: 'Enero-Junio', temas: ['Patrones simples', 'Más grande, más pequeño'] },
        ],
        espanol: [
            { b: 'bloque-1', bNum: 1, nombre: 'Las vocales', meses: 'Agosto-Septiembre', temas: ['Vocales A, E, I', 'Vocal O y U'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Primeras consonantes', meses: 'Septiembre-Octubre', temas: ['Letras M, P, S', 'Sílabas simples'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Palabras simples', meses: 'Octubre-Noviembre', temas: ['Leer mi nombre', 'Palabras de 2 sílabas'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Cuentos cortos', meses: 'Noviembre-Diciembre', temas: ['Comprensión oral', 'Personajes de cuentos'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Escritura inicial', meses: 'Enero-Junio', temas: ['Escribir mi nombre', 'Letras mayúsculas y minúsculas'] },
        ],
        conocimiento: [
            { b: 'bloque-1', bNum: 1, nombre: 'Mi cuerpo', meses: 'Agosto-Septiembre', temas: ['Partes del cuerpo', 'Los sentidos'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Mi familia y mi casa', meses: 'Septiembre-Octubre', temas: ['Miembros de la familia', 'La casa y sus espacios'] },
            { b: 'bloque-3', bNum: 3, nombre: 'La naturaleza', meses: 'Octubre-Noviembre', temas: ['Plantas y animales', 'El sol y la lluvia'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Mi comunidad', meses: 'Noviembre-Diciembre', temas: ['El vecindario', 'Lugares del pueblo'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Las estaciones', meses: 'Enero-Junio', temas: ['Primavera y verano', 'Otoño e invierno'] },
        ],
        artes: [
            { b: 'bloque-1', bNum: 1, nombre: 'Colores primarios', meses: 'Agosto-Septiembre', temas: ['Rojo, azul y amarillo', 'Mezcla de colores'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Dibujo libre', meses: 'Septiembre-Octubre', temas: ['Mi familia', 'Mi animal favorito'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Música y ritmo', meses: 'Octubre-Noviembre', temas: ['Instrumentos musicales', 'Canciones y rimas'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Teatro y expresión', meses: 'Noviembre-Diciembre', temas: ['Expresiones del rostro', 'Dramatización simple'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Manualidades', meses: 'Enero-Junio', temas: ['Papel y tijeras', 'Figuras con plastilina'] },
        ],
    },
    'secundaria-1': {
        matematicas: [
            { b: 'bloque-1', bNum: 1, nombre: 'Números enteros y racionales', meses: 'Agosto-Septiembre', temas: ['Números enteros negativos', 'Fracciones y decimales'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Álgebra: expresiones', meses: 'Septiembre-Octubre', temas: ['Variables y constantes', 'Expresiones algebraicas'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Ecuaciones lineales', meses: 'Octubre-Noviembre', temas: ['Resolver ecuaciones', 'Problemas con ecuaciones'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Geometría y proporciones', meses: 'Noviembre-Diciembre', temas: ['Triángulos y pitágoras', 'Semejanza y escala'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Estadística básica', meses: 'Enero-Junio', temas: ['Media y mediana', 'Gráficas estadísticas'] },
        ],
        espanol: [
            { b: 'bloque-1', bNum: 1, nombre: 'Narrativa y cuento', meses: 'Agosto-Septiembre', temas: ['Estructura del cuento', 'Narrador y personajes'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Argumentación', meses: 'Septiembre-Octubre', temas: ['Texto argumentativo', 'Debate y discusión'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Gramática secundaria', meses: 'Octubre-Noviembre', temas: ['Oraciones compuestas', 'Conjunciones y preposiciones'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Literatura mexicana', meses: 'Noviembre-Diciembre', temas: ['Autores mexicanos', 'Leyendas y mitos'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Textos académicos', meses: 'Enero-Junio', temas: ['Resumen y síntesis', 'Reseña bibliográfica'] },
        ],
        ciencias: [
            { b: 'bloque-1', bNum: 1, nombre: 'Física: movimiento', meses: 'Agosto-Septiembre', temas: ['Velocidad y aceleración', 'Gravedad'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Física: fuerzas', meses: 'Septiembre-Octubre', temas: ['Leyes de Newton', 'Fricción y presión'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Química: átomos', meses: 'Octubre-Noviembre', temas: ['Estructura del átomo', 'Tabla periódica'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Química: mezclas', meses: 'Noviembre-Diciembre', temas: ['Mezclas y soluciones', 'Reacciones químicas'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Biología: células', meses: 'Enero-Junio', temas: ['Célula eucariota y procariota', 'Mitosis'] },
        ],
        historia: [
            { b: 'bloque-1', bNum: 1, nombre: 'Mundo antiguo', meses: 'Agosto-Septiembre', temas: ['Mesopotamia y Egipto', 'Grecia clásica'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Roma y Edad Media', meses: 'Septiembre-Octubre', temas: ['Imperio Romano', 'Caída de Roma y feudalismo'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Renacimiento e ilustración', meses: 'Octubre-Noviembre', temas: ['Renacimiento italiano', 'Revolución científica'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Revoluciones modernas', meses: 'Noviembre-Diciembre', temas: ['Revolución Francesa', 'Revolución Industrial'] },
            { b: 'bloque-5', bNum: 5, nombre: 'México: Independencia', meses: 'Enero-Junio', temas: ['Grito de Independencia', 'Consumación'] },
        ],
        formacion: [
            { b: 'bloque-1', bNum: 1, nombre: 'Identidad y adolescencia', meses: 'Agosto-Septiembre', temas: ['¿Quién soy?', 'Cambios en la adolescencia'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Derechos humanos', meses: 'Septiembre-Octubre', temas: ['Derechos del niño', 'Igualdad y no discriminación'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Vida democrática', meses: 'Octubre-Noviembre', temas: ['Democracia y ciudadanía', 'Participación social'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Sexualidad y salud', meses: 'Noviembre-Diciembre', temas: ['Educación sexual básica', 'Respeto al cuerpo'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Comunidad y convivencia', meses: 'Enero-Junio', temas: ['Resolución de conflictos', 'Trabajo en equipo'] },
        ],
        geografia: [
            { b: 'bloque-1', bNum: 1, nombre: 'El mundo en mapas', meses: 'Agosto-Septiembre', temas: ['Proyecciones cartográficas', 'Coordenadas geográficas'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Relieve y tectónica', meses: 'Septiembre-Octubre', temas: ['Placas tectónicas', 'Terremotos y volcanes'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Climas y biomas', meses: 'Octubre-Noviembre', temas: ['Climas del mundo', 'Selvas y desiertos'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Agua en el planeta', meses: 'Noviembre-Diciembre', temas: ['Océanos y mares', 'Ríos y cuencas'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Población mundial', meses: 'Enero-Junio', temas: ['Distribución mundial', 'Países desarrollados vs en desarrollo'] },
        ],
    },
    'secundaria-2': {
        matematicas: [
            { b: 'bloque-1', bNum: 1, nombre: 'Álgebra avanzada', meses: 'Agosto-Septiembre', temas: ['Sistemas de ecuaciones', 'Polinomios'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Geometría analítica', meses: 'Septiembre-Octubre', temas: ['Plano cartesiano', 'Rectas y pendientes'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Funciones', meses: 'Octubre-Noviembre', temas: ['Función lineal', 'Función cuadrática'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Probabilidad', meses: 'Noviembre-Diciembre', temas: ['Espacio muestral', 'Probabilidad clásica'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Estadística inferencial', meses: 'Enero-Junio', temas: ['Distribución de frecuencias', 'Desviación estándar'] },
        ],
        espanol: [
            { b: 'bloque-1', bNum: 1, nombre: 'Literatura universal', meses: 'Agosto-Septiembre', temas: ['Don Quijote', 'Literatura latinoamericana'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Ensayo y crónica', meses: 'Septiembre-Octubre', temas: ['Estructura del ensayo', 'Crónica periodística'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Ortografía y estilo', meses: 'Octubre-Noviembre', temas: ['Signos de puntuación avanzados', 'Estilo y registro'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Investigación documental', meses: 'Noviembre-Diciembre', temas: ['Fuentes primarias y secundarias', 'Citar en formato APA'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Comunicación digital', meses: 'Enero-Junio', temas: ['Lenguaje en redes sociales', 'Fake news y verificación'] },
        ],
        ciencias: [
            { b: 'bloque-1', bNum: 1, nombre: 'Química: reacciones', meses: 'Agosto-Septiembre', temas: ['Tipos de reacciones químicas', 'Balanceo de ecuaciones'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Química: compuestos', meses: 'Septiembre-Octubre', temas: ['Ácidos y bases', 'Sales y óxidos'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Biología: organismos', meses: 'Octubre-Noviembre', temas: ['Clasificación de seres vivos', 'Reinos naturales'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Biología: ecología', meses: 'Noviembre-Diciembre', temas: ['Ecosistemas complejos', 'Cadenas tróficas'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Energía y ambiente', meses: 'Enero-Junio', temas: ['Fuentes de energía', 'Calentamiento global'] },
        ],
        historia: [
            { b: 'bloque-1', bNum: 1, nombre: 'México: Reforma y República', meses: 'Agosto-Septiembre', temas: ['Benito Juárez', 'Las Leyes de Reforma'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Porfiriato', meses: 'Septiembre-Octubre', temas: ['Porfirio Díaz', 'Modernización y desigualdad'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Revolución Mexicana', meses: 'Octubre-Noviembre', temas: ['Causas de la Revolución', 'Principales revolucionarios'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Guerras Mundiales', meses: 'Noviembre-Diciembre', temas: ['Primera Guerra Mundial', 'La Gran Depresión'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Segunda Guerra y posguerra', meses: 'Enero-Junio', temas: ['Segunda Guerra Mundial', 'ONU y Derechos Humanos'] },
        ],
        formacion: [
            { b: 'bloque-1', bNum: 1, nombre: 'Proyecto de vida', meses: 'Agosto-Septiembre', temas: ['Metas personales', 'Habilidades y valores'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Legalidad y justicia', meses: 'Septiembre-Octubre', temas: ['La ley y su importancia', 'Derechos y obligaciones'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Equidad de género', meses: 'Octubre-Noviembre', temas: ['Igualdad entre géneros', 'Violencia de género'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Sustentabilidad', meses: 'Noviembre-Diciembre', temas: ['Responsabilidad ambiental', 'Consumo responsable'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Participación ciudadana', meses: 'Enero-Junio', temas: ['Voto y proceso electoral', 'Sociedad civil'] },
        ],
        geografia: [
            { b: 'bloque-1', bNum: 1, nombre: 'América Latina', meses: 'Agosto-Septiembre', temas: ['Países de América del Sur', 'Recursos naturales'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Europa', meses: 'Septiembre-Octubre', temas: ['Unión Europea', 'Diversidad cultural'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Asia', meses: 'Octubre-Noviembre', temas: ['China e India', 'Japón y los tigres asiáticos'] },
            { b: 'bloque-4', bNum: 4, nombre: 'África y Oceanía', meses: 'Noviembre-Diciembre', temas: ['Diversidad africana', 'Australia y el Pacífico'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Globalización', meses: 'Enero-Junio', temas: ['Comercio global', 'Migraciones internacionales'] },
        ],
    },
    'secundaria-3': {
        matematicas: [
            { b: 'bloque-1', bNum: 1, nombre: 'Funciones avanzadas', meses: 'Agosto-Septiembre', temas: ['Función exponencial', 'Función logarítmica'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Trigonometría básica', meses: 'Septiembre-Octubre', temas: ['Seno, coseno y tangente', 'Triángulo rectángulo'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Probabilidad avanzada', meses: 'Octubre-Noviembre', temas: ['Permutaciones y combinaciones', 'Probabilidad condicional'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Pensamiento algebraico', meses: 'Noviembre-Diciembre', temas: ['Factorización', 'Ecuaciones cuadráticas'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Precálculo', meses: 'Enero-Junio', temas: ['Límites intuitivos', 'Preparación para bachillerato'] },
        ],
        espanol: [
            { b: 'bloque-1', bNum: 1, nombre: 'Literatura del siglo XX', meses: 'Agosto-Septiembre', temas: ['Octavio Paz', 'Carlos Fuentes y García Márquez'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Disertación y oratoria', meses: 'Septiembre-Octubre', temas: ['Discurso formal', 'Técnicas de oratoria'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Análisis literario', meses: 'Octubre-Noviembre', temas: ['Estructura narrativa', 'Análisis de poemas'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Proyecto editorial final', meses: 'Noviembre-Diciembre', temas: ['Revista escolar', 'Corrección de pruebas'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Preparación para bachillerato', meses: 'Enero-Junio', temas: ['Redacción formal', 'Examen de admisión: lectura'] },
        ],
        ciencias: [
            { b: 'bloque-1', bNum: 1, nombre: 'Biología: genética', meses: 'Agosto-Septiembre', temas: ['Leyes de Mendel', 'Herencia genética'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Biología: evolución', meses: 'Septiembre-Octubre', temas: ['Darwin y la selección natural', 'Fósiles y evidencias'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Física: ondas y luz', meses: 'Octubre-Noviembre', temas: ['Ondas mecánicas', 'Luz y óptica'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Física: electricidad', meses: 'Noviembre-Diciembre', temas: ['Carga eléctrica', 'Ley de Ohm'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Ciencias integradas', meses: 'Enero-Junio', temas: ['Método científico avanzado', 'Proyectos de investigación'] },
        ],
        historia: [
            { b: 'bloque-1', bNum: 1, nombre: 'Guerra Fría', meses: 'Agosto-Septiembre', temas: ['EUA vs. URSS', 'Carrera espacial y armamentista'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Descolonización', meses: 'Septiembre-Octubre', temas: ['África y Asia independientes', 'Mandela y Gandhi'] },
            { b: 'bloque-3', bNum: 3, nombre: 'México: segundo siglo', meses: 'Octubre-Noviembre', temas: ['México en los 70-90', 'Crisis económicas'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Mundo globalizado', meses: 'Noviembre-Diciembre', temas: ['Caída del Muro de Berlín', 'Internet y el siglo XXI'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Retos del mundo actual', meses: 'Enero-Junio', temas: ['Cambio climático', 'Democracia y autoritarismo'] },
        ],
        formacion: [
            { b: 'bloque-1', bNum: 1, nombre: 'Proyecto de vida final', meses: 'Agosto-Septiembre', temas: ['Opciones de bachillerato', 'Vocación y profesión'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Derechos avanzados', meses: 'Septiembre-Octubre', temas: ['Derechos económicos y sociales', 'Defensa de derechos'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Economía personal', meses: 'Octubre-Noviembre', temas: ['Finanzas básicas', 'Emprendimiento juvenil'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Paz y no violencia', meses: 'Noviembre-Diciembre', temas: ['Cultura de paz', 'Bullying y ciberbullying'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Ciudadanía global', meses: 'Enero-Junio', temas: ['ONG y organizaciones', 'Ser ciudadano del mundo'] },
        ],
        geografia: [
            { b: 'bloque-1', bNum: 1, nombre: 'Geopolítica mundial', meses: 'Agosto-Septiembre', temas: ['Conflictos geopolíticos', 'Zonas de conflicto'] },
            { b: 'bloque-2', bNum: 2, nombre: 'Economía global', meses: 'Septiembre-Octubre', temas: ['G7 y G20', 'Países emergentes'] },
            { b: 'bloque-3', bNum: 3, nombre: 'Crisis ambiental', meses: 'Octubre-Noviembre', temas: ['Acuerdo de París', 'Energías verdes'] },
            { b: 'bloque-4', bNum: 4, nombre: 'Megaciudades', meses: 'Noviembre-Diciembre', temas: ['Urbanización extrema', 'Problemas de las megaciudades'] },
            { b: 'bloque-5', bNum: 5, nombre: 'Futuro del planeta', meses: 'Enero-Junio', temas: ['Recursos en 2050', 'Soluciones globales'] },
        ],
    },
};

// ══════════════════════════════════════════════════════════════════════
// BANCO DE EJERCICIOS
// ══════════════════════════════════════════════════════════════════════
const BANCO = {
    // KINDER
    'Contar del 1 al 10': [
        { tipo: 'multiple_choice', pregunta: '¿Cuántos dedos tienes en una mano?', opciones: ['3', '4', '5', '6'], respuesta: '5', explicacion: 'Tenemos 5 dedos en cada mano. ¡Cuéntalos tú mismo!' },
        { tipo: 'visual_count', pregunta: 'Hay 🐶🐶🐶 perritos. ¿Cuántos son?', opciones: ['1', '2', '3', '4'], respuesta: '3', explicacion: 'Hay 3 perritos. ¡Uno, dos, tres!' },
        { tipo: 'fill_blank', pregunta: 'Después del 6 viene el ___', respuesta: '7', explicacion: '1,2,3,4,5,6... ¡7! Sigue contando.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué número sigue después del 9?', opciones: ['8', '10', '11', '7'], respuesta: '10', explicacion: 'El 10 viene después del 9. ¡Muy bien!' },
    ],
    'Vocales A, E, I': [
        { tipo: 'multiple_choice', pregunta: '¿Cuál es la primera vocal del abecedario?', opciones: ['E', 'I', 'A', 'O'], respuesta: 'A', explicacion: '¡La A es la primera vocal! A de avión, árbol, abeja.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué vocal suena en "elefante"?', opciones: ['A', 'E', 'I', 'O'], respuesta: 'E', explicacion: 'Eeee-lefante. La E es la vocal que escuchamos al inicio.' },
        { tipo: 'fill_blank', pregunta: 'La palabra "iguana" empieza con la vocal ___', respuesta: 'I', explicacion: 'I de iguana, imán, iglesia. La I es la tercera vocal.' },
    ],
    'Partes del cuerpo': [
        { tipo: 'multiple_choice', pregunta: '¿Con qué vemos?', opciones: ['La nariz', 'Las orejas', 'Los ojos', 'La boca'], respuesta: 'Los ojos', explicacion: 'Los ojos son los órganos de la vista. ¡Con ellos ves este ejercicio!' },
        { tipo: 'multiple_choice', pregunta: '¿Con qué escuchamos?', opciones: ['Los ojos', 'Las manos', 'Las orejas', 'Los pies'], respuesta: 'Las orejas', explicacion: 'Las orejas son el órgano del oído. ¡Escucha los sonidos a tu alrededor!' },
        { tipo: 'fill_blank', pregunta: 'Tenemos ___ manos', respuesta: '2', explicacion: 'Dos manos: la derecha y la izquierda. ¡Levántalas!' },
    ],
    'Rojo, azul y amarillo': [
        { tipo: 'multiple_choice', pregunta: '¿Cuáles son los colores primarios?', opciones: ['Verde, morado, naranja', 'Rojo, azul y amarillo', 'Negro, blanco y gris', 'Rosa, café, beige'], respuesta: 'Rojo, azul y amarillo', explicacion: 'Los 3 colores primarios son el rojo, azul y amarillo. ¡Con ellos hacemos todos los demás colores!' },
        { tipo: 'multiple_choice', pregunta: 'Si mezclas rojo y azul, obtienes...', opciones: ['Verde', 'Naranja', 'Morado', 'Café'], respuesta: 'Morado', explicacion: 'Rojo + Azul = Morado (violeta). ¡Pruébalo con pinturas!' },
        { tipo: 'fill_blank', pregunta: 'El color del sol es ___', respuesta: 'amarillo', explicacion: 'El sol es amarillo. ¿Qué más es amarillo? ¡El plátano, el limón!' },
    ],
    // SECUNDARIA
    'Números enteros negativos': [
        { tipo: 'multiple_choice', pregunta: '¿Cuál número es mayor: -3 o -7?', opciones: ['-7', '-3', 'Son iguales', 'No se puede comparar'], respuesta: '-3', explicacion: 'En la recta numérica, -3 está más cerca del 0 que -7. ¡-3 > -7!' },
        { tipo: 'fill_blank', pregunta: '-5 + 8 = ___', respuesta: '3', explicacion: 'De -5 sumamos 8: pasamos por 0 y llegamos a 3.' },
        { tipo: 'true_false', pregunta: '-10 es menor que -2', respuesta: 'true', explicacion: 'Correcto. En la recta numérica, -10 está más a la izquierda (más negativo) que -2.' },
        { tipo: 'multiple_choice', pregunta: '(-3) × (-4) = ?', opciones: ['-12', '12', '-7', '7'], respuesta: '12', explicacion: 'Negativo × Negativo = Positivo. (-3)×(-4) = +12.' },
    ],
    'Variables y constantes': [
        { tipo: 'multiple_choice', pregunta: 'En "3x + 5", ¿cuál es la variable?', opciones: ['3', 'x', '5', '+'], respuesta: 'x', explicacion: 'La variable es la letra (x) que puede tomar diferentes valores.' },
        { tipo: 'fill_blank', pregunta: 'Si x = 4, entonces 2x = ___', respuesta: '8', explicacion: '2x = 2 × 4 = 8.' },
        { tipo: 'true_false', pregunta: 'Una constante puede cambiar de valor', respuesta: 'false', explicacion: 'Las constantes tienen valor fijo. Las variables pueden cambiar.' },
    ],
    'Resolver ecuaciones': [
        { tipo: 'fill_blank', pregunta: 'Si x + 3 = 7, entonces x = ___', respuesta: '4', explicacion: 'x + 3 = 7 → x = 7 - 3 = 4. ¡Comprueba: 4+3=7!' },
        { tipo: 'multiple_choice', pregunta: 'Si 2x = 10, ¿cuánto vale x?', opciones: ['2', '4', '5', '8'], respuesta: '5', explicacion: '2x = 10 → x = 10 ÷ 2 = 5.' },
        { tipo: 'fill_blank', pregunta: '3x - 6 = 9, entonces x = ___', respuesta: '5', explicacion: '3x = 9+6 = 15, x = 15÷3 = 5.' },
    ],
    'Leyes de Newton': [
        { tipo: 'multiple_choice', pregunta: '¿Qué ley dice que un objeto en reposo permanece en reposo?', opciones: ['1a ley (inercia)', '2a ley (F=ma)', '3a ley (acción-reacción)', 'Ley de Hooke'], respuesta: '1a ley (inercia)', explicacion: 'La 1a ley de Newton dice: un cuerpo en reposo (o movimiento uniforme) sigue así si no hay fuerza neta.' },
        { tipo: 'fill_blank', pregunta: 'La 2a ley de Newton: F = ___ × a', respuesta: 'm', explicacion: 'Fuerza = masa × aceleración. A mayor masa, se necesita más fuerza para el mismo movimiento.' },
        { tipo: 'true_false', pregunta: 'La 3a ley dice que a toda acción le corresponde una reacción igual pero opuesta', respuesta: 'true', explicacion: 'Correcto. Cuando empujas una pared, la pared te empuja con la misma fuerza.' },
    ],
    'Tipos de reacciones químicas': [
        { tipo: 'multiple_choice', pregunta: '¿Cuál es el producto de combinar hidrógeno y oxígeno?', opciones: ['CO₂', 'H₂O', 'NaCl', 'H₂SO₄'], respuesta: 'H₂O', explicacion: '2H₂ + O₂ → 2H₂O. El agua se forma por la combinación de hidrógeno y oxígeno.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué tipo de reacción ocurre cuando el hierro se oxida?', opciones: ['Síntesis', 'Descomposición', 'Oxidación', 'Neutralización'], respuesta: 'Oxidación', explicacion: 'La oxidación del hierro (herrumbre) es Fe + O₂ → Fe₂O₃.' },
        { tipo: 'fill_blank', pregunta: 'En toda reacción química, la materia se ___ (no se crea ni destruye)', respuesta: 'conserva', explicacion: 'Ley de conservación de la materia: el total de átomos es el mismo antes y después.' },
    ],
    'Leyes de Mendel': [
        { tipo: 'multiple_choice', pregunta: '¿Qué es un gen dominante?', opciones: ['El que desaparece', 'El que siempre se expresa', 'El recesivo', 'El que muta'], respuesta: 'El que siempre se expresa', explicacion: 'Un gen dominante se expresa aunque solo esté presente en uno de los dos cromosomas.' },
        { tipo: 'fill_blank', pregunta: 'Si AA y aa se cruzan, los hijos serán ___', respuesta: 'Aa', explicacion: 'El genotipo Aa combina el alelo dominante (A) del padre y el recesivo (a) del otro padre.' },
        { tipo: 'true_false', pregunta: 'Un individuo con genotipo Aa muestra el carácter recesivo', respuesta: 'false', explicacion: 'No. Con Aa, el alelo dominante A se expresa y oculta al recesivo a.' },
    ],
    'Guerra Fría EUA vs URSS': [
        { tipo: 'multiple_choice', pregunta: '¿Cuándo terminó la Guerra Fría?', opciones: ['1975', '1985', '1991', '2000'], respuesta: '1991', explicacion: 'La Guerra Fría terminó en 1991 con la disolución de la Unión Soviética.' },
        { tipo: 'multiple_choice', pregunta: '¿Qué fue el "Muro de Berlín"?', opciones: ['Un puente', 'Una barrera que dividía Alemania', 'Una fortaleza militar', 'Un estadio'], respuesta: 'Una barrera que dividía Alemania', explicacion: 'El Muro de Berlín (1961-1989) dividía Alemania del Este (soviética) del Oeste (capitalista).' },
        { tipo: 'fill_blank', pregunta: 'La "carrera espacial" fue una competencia entre EUA y ___', respuesta: 'la URSS', explicacion: 'Ambas potencias querían ser las primeras en el espacio. EUA llegó a la Luna en 1969.' },
    ],
    'Proyecto de vida': [
        { tipo: 'multiple_choice', pregunta: '¿Qué es un proyecto de vida?', opciones: ['Una tarea escolar', 'Un plan personal de metas y valores', 'Un empleo', 'Una obligación legal'], respuesta: 'Un plan personal de metas y valores', explicacion: 'El proyecto de vida es un plan para alcanzar lo que quieres ser y lograr en tu vida.' },
        { tipo: 'fill_blank', pregunta: 'Las metas a corto plazo son aquellas que quieres lograr en ___ tiempo', respuesta: 'poco', explicacion: 'Metas corto plazo: días o meses. Largo plazo: años o décadas.' },
        { tipo: 'true_false', pregunta: 'Los valores como honestidad y respeto son parte de un proyecto de vida', respuesta: 'true', explicacion: 'Correcto. Los valores son el fundamento de las decisiones en tu proyecto de vida.' },
    ],
    'default': (tema) => [
        { tipo: 'multiple_choice', pregunta: `¿Qué estudia el tema "${tema}"?`, opciones: ['El desarrollo humano', 'Conocimiento especializado', 'Historia básica', 'Arte y cultura'], respuesta: 'Conocimiento especializado', explicacion: `${tema} es un tema que nos ayuda a comprender el mundo con mayor profundidad.` },
        { tipo: 'true_false', pregunta: `${tema} es parte del currículo oficial de la SEP`, respuesta: 'true', explicacion: 'Este tema está incluido en los planes y programas de estudio oficiales de México.' },
        { tipo: 'fill_blank', pregunta: `En ${tema}, la práctica constante nos lleva al ___`, respuesta: 'aprendizaje', explicacion: 'La práctica y la reflexión son claves para aprender cualquier materia.' },
    ],
};

function getEjecicioPorTema(tema) {
    if (BANCO[tema]) return BANCO[tema];
    if (typeof BANCO.default === 'function') return BANCO.default(tema);
    return BANCO.default;
}

function generarEjercicios(grado, materia, bloqueNum, temas) {
    const pfx = `${grado}-${materia}-b${bloqueNum}`;
    const todos = [];
    let c = 1;

    temas.forEach(tema => {
        const ejs = getEjecicioPorTema(tema);
        ejs.forEach(e => {
            todos.push({
                id: `${pfx}-${String(c).padStart(3, '0')}`,
                tema,
                tipo: e.tipo,
                nivel: 'v1',
                pregunta: e.pregunta,
                ...(e.opciones ? { opciones: e.opciones } : {}),
                respuestaCorrecta: e.respuesta,
                explicacion: e.explicacion,
            });
            c++;
        });
    });

    const mid = Math.ceil(todos.length / 2);
    const v1 = todos.slice(0, mid).map(e => ({ ...e, nivel: 'v1' }));
    const v2 = todos.slice(mid).map(e => ({ ...e, nivel: 'v2' }));
    const preview = todos.slice(0, 3);
    return { v1, v2, preview };
}

let generados = 0, saltados = 0;

Object.entries(CURRICULUM).forEach(([grado, materias]) => {
    Object.entries(materias).forEach(([materia, bloques]) => {
        const dir = path.join(BASE, grado, materia);
        fs.mkdirSync(dir, { recursive: true });

        bloques.forEach(({ b, bNum, nombre, meses, temas }) => {
            const archivo = path.join(dir, `${b}.json`);
            if (fs.existsSync(archivo)) {
                try {
                    const ex = JSON.parse(fs.readFileSync(archivo, 'utf8'));
                    if (ex.totalEjercicios >= 4) { saltados++; return; }
                } catch { }
            }

            const { v1, v2, preview } = generarEjercicios(grado, materia, bNum, temas);
            const data = {
                grado, materia, bloque: bNum, nombre, meses, temas,
                totalEjercicios: v1.length + v2.length,
                ejercicios: { v1, v2, preview },
                generado: new Date().toISOString(),
                version: '2.0',
            };
            fs.writeFileSync(archivo, JSON.stringify(data, null, 2), 'utf8');
            generados++;
            console.log(`✅ ${grado}/${materia}/${b} — ${data.totalEjercicios} ejercicios`);
        });
    });
});

console.log(`\n🎉 COMPLETADO: ${generados} archivos generados, ${saltados} ya existían`);

// Conteo global
let grandTotal = 0;
const gradoStats = {};
if (fs.existsSync(BASE)) {
    fs.readdirSync(BASE).forEach(g => {
        let gt = 0;
        const gDir = path.join(BASE, g);
        fs.readdirSync(gDir).forEach(m => {
            fs.readdirSync(path.join(gDir, m)).forEach(f => {
                try { gt += JSON.parse(fs.readFileSync(path.join(gDir, m, f), 'utf8')).totalEjercicios || 0; } catch { }
            });
        });
        gradoStats[g] = gt;
        grandTotal += gt;
    });
}
Object.entries(gradoStats).sort().forEach(([g, t]) => console.log(`  ${g}: ${t} ejercicios`));
console.log(`\n📊 TOTAL PLATAFORMA: ${grandTotal} ejercicios`);
