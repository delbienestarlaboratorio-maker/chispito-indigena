const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');

// ══════════════════════════════════════════════════════════════════════
// CURRICULUM COMPLETO P4, P5, P6
// ══════════════════════════════════════════════════════════════════════
const CURRICULUM = {
    'primaria-4': {
        matematicas: [
            { b: 1, nombre: 'Números grandes y operaciones', meses: 'Agosto-Septiembre', temas: ['Números hasta un millón', 'Valor posicional'] },
            { b: 2, nombre: 'Multiplicación y división', meses: 'Septiembre-Octubre', temas: ['Multiplicación de 2 dígitos', 'División exacta'] },
            { b: 3, nombre: 'Fracciones y decimales', meses: 'Octubre-Noviembre', temas: ['Fracciones equivalentes', 'Decimales simples'] },
            { b: 4, nombre: 'Geometría plana', meses: 'Noviembre-Diciembre', temas: ['Ángulos', 'Perímetro y área'] },
            { b: 5, nombre: 'Medidas y estadística', meses: 'Enero-Febrero', temas: ['Unidades de medida', 'Gráficas de barras'] },
            { b: 6, nombre: 'Repaso y problemas', meses: 'Febrero-Junio', temas: ['Problemas mixtos', 'Estimación'] },
        ],
        espanol: [
            { b: 1, nombre: 'Lectura y comprensión', meses: 'Agosto-Septiembre', temas: ['Idea principal', 'Tipos de texto'] },
            { b: 2, nombre: 'Narración y descripción', meses: 'Septiembre-Octubre', temas: ['Descripción de lugares', 'Narración secuencial'] },
            { b: 3, nombre: 'Gramática y ortografía', meses: 'Octubre-Noviembre', temas: ['Sustantivos y adjetivos', 'Uso de b y v'] },
            { b: 4, nombre: 'Textos informativos', meses: 'Noviembre-Diciembre', temas: ['Artículos informativos', 'Fichas bibliográficas'] },
            { b: 5, nombre: 'Poesía y teatro', meses: 'Enero-Febrero', temas: ['Recursos poéticos', 'Diálogos teatrales'] },
            { b: 6, nombre: 'Escritura y producción', meses: 'Febrero-Junio', temas: ['Párrafos argumentativos', 'Corrección de textos'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Los seres vivos', meses: 'Agosto-Septiembre', temas: ['Células', 'Clasificación de seres vivos'] },
            { b: 2, nombre: 'El cuerpo humano', meses: 'Septiembre-Octubre', temas: ['Sistema digestivo', 'Sistema respiratorio'] },
            { b: 3, nombre: 'Ecosistemas', meses: 'Octubre-Noviembre', temas: ['Cadenas alimentarias', 'Ecosistemas de México'] },
            { b: 4, nombre: 'Materia y energía', meses: 'Noviembre-Diciembre', temas: ['Estados de la materia', 'Calor y temperatura'] },
            { b: 5, nombre: 'Tecnología y medio ambiente', meses: 'Enero-Febrero', temas: ['Máquinas simples', 'Contaminación'] },
            { b: 6, nombre: 'La Tierra y el universo', meses: 'Febrero-Junio', temas: ['Movimientos de la Tierra', 'Sistema solar'] },
        ],
        historia: [
            { b: 1, nombre: 'Mesoamérica', meses: 'Agosto-Septiembre', temas: ['Culturas prehispánicas', 'Los mayas'] },
            { b: 2, nombre: 'Los aztecas', meses: 'Septiembre-Octubre', temas: ['Tenochtitlan', 'Sociedad azteca'] },
            { b: 3, nombre: 'La Conquista', meses: 'Octubre-Noviembre', temas: ['Hernán Cortés', 'Caída de Tenochtitlan'] },
            { b: 4, nombre: 'La Nueva España', meses: 'Noviembre-Diciembre', temas: ['Virreinato', 'Evangelización'] },
            { b: 5, nombre: 'Independencia de México', meses: 'Enero-Febrero', temas: ['Miguel Hidalgo', 'Héroes de la Independencia'] },
            { b: 6, nombre: 'México independiente', meses: 'Febrero-Junio', temas: ['Primer México libre', 'Reforma liberal'] },
        ],
        geografia: [
            { b: 1, nombre: 'México: territorio y relieve', meses: 'Agosto-Septiembre', temas: ['División política', 'Regiones geográficas'] },
            { b: 2, nombre: 'Clima y vegetación', meses: 'Septiembre-Octubre', temas: ['Zonas climáticas de México', 'Biomas mexicanos'] },
            { b: 3, nombre: 'Recursos naturales', meses: 'Octubre-Noviembre', temas: ['Agua y minerales', 'Bosques de México'] },
            { b: 4, nombre: 'Población y ciudades', meses: 'Noviembre-Diciembre', temas: ['Distribución de la población', 'Ciudades principales'] },
            { b: 5, nombre: 'Economía de México', meses: 'Enero-Febrero', temas: ['Actividades económicas', 'Comercio exterior'] },
            { b: 6, nombre: 'Continente americano', meses: 'Febrero-Junio', temas: ['América del Norte', 'América Latina'] },
        ],
    },
    'primaria-5': {
        matematicas: [
            { b: 1, nombre: 'Números negativos y decimales', meses: 'Agosto-Septiembre', temas: ['Números negativos', 'Operaciones con decimales'] },
            { b: 2, nombre: 'Fracciones avanzadas', meses: 'Septiembre-Octubre', temas: ['Suma y resta de fracciones', 'Fracciones mixtas'] },
            { b: 3, nombre: 'Proporcionalidad', meses: 'Octubre-Noviembre', temas: ['Razones y proporciones', 'Regla de tres'] },
            { b: 4, nombre: 'Geometría espacial', meses: 'Noviembre-Diciembre', temas: ['Cuerpos geométricos', 'Volumen'] },
            { b: 5, nombre: 'Porcentajes y estadística', meses: 'Enero-Febrero', temas: ['Porcentaje', 'Media y moda'] },
            { b: 6, nombre: 'Álgebra básica', meses: 'Febrero-Junio', temas: ['Ecuaciones sencillas', 'Patrones numéricos'] },
        ],
        espanol: [
            { b: 1, nombre: 'Textos literarios', meses: 'Agosto-Septiembre', temas: ['Cuento literario', 'Figuras retóricas'] },
            { b: 2, nombre: 'Argumentación', meses: 'Septiembre-Octubre', temas: ['Párrafo argumentativo', 'Texto de opinión'] },
            { b: 3, nombre: 'Gramática avanzada', meses: 'Octubre-Noviembre', temas: ['Verbos: tiempos y modos', 'Concordancia'] },
            { b: 4, nombre: 'Periodismo y medios', meses: 'Noviembre-Diciembre', temas: ['Nota periodística', 'Reportaje'] },
            { b: 5, nombre: 'Investigación y fuentes', meses: 'Enero-Febrero', temas: ['Búsqueda de información', 'Citas y referencias'] },
            { b: 6, nombre: 'Producción de textos', meses: 'Febrero-Junio', temas: ['Ensayo breve', 'Revisión y edición'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Célula y vida', meses: 'Agosto-Septiembre', temas: ['Tipos de células', 'Reproducción celular'] },
            { b: 2, nombre: 'Sistemas del cuerpo', meses: 'Septiembre-Octubre', temas: ['Sistema nervioso', 'Sistema endócrino'] },
            { b: 3, nombre: 'Física básica', meses: 'Octubre-Noviembre', temas: ['Movimiento y velocidad', 'Fuerzas y fricción'] },
            { b: 4, nombre: 'Química en la vida', meses: 'Noviembre-Diciembre', temas: ['Mezclas y soluciones', 'Reacciones cotidianas'] },
            { b: 5, nombre: 'Electricidad y magnetismo', meses: 'Enero-Febrero', temas: ['Circuitos eléctricos', 'Imanes'] },
            { b: 6, nombre: 'Astronomía', meses: 'Febrero-Junio', temas: ['Estrellas y constelaciones', 'Exploración espacial'] },
        ],
        historia: [
            { b: 1, nombre: 'Civilizaciones del mundo antiguo', meses: 'Agosto-Septiembre', temas: ['Egipto', 'Mesopotamia y Grecia'] },
            { b: 2, nombre: 'Roma y la Edad Media', meses: 'Septiembre-Octubre', temas: ['Imperio Romano', 'Feudalismo'] },
            { b: 3, nombre: 'El Renacimiento', meses: 'Octubre-Noviembre', temas: ['Arte renacentista', 'Humanismo'] },
            { b: 4, nombre: 'Exploración y conquista', meses: 'Noviembre-Diciembre', temas: ['Grandes exploradores', 'Choque de culturas'] },
            { b: 5, nombre: 'Independencias americanas', meses: 'Enero-Febrero', temas: ['Revolución Francesa', 'Independencias en América'] },
            { b: 6, nombre: 'El México del siglo XIX', meses: 'Febrero-Junio', temas: ['Reforma y Juárez', 'Intervención francesa'] },
        ],
        geografia: [
            { b: 1, nombre: 'Continentes y océanos', meses: 'Agosto-Septiembre', temas: ['Mapas del mundo', 'Coordenadas geográficas'] },
            { b: 2, nombre: 'Relieve del mundo', meses: 'Septiembre-Octubre', temas: ['Montañas y valles', 'Volcanes y sismos'] },
            { b: 3, nombre: 'Climas del mundo', meses: 'Octubre-Noviembre', temas: ['Zonas climáticas', 'El Niño y La Niña'] },
            { b: 4, nombre: 'Población mundial', meses: 'Noviembre-Diciembre', temas: ['Densidad de población', 'Migración'] },
            { b: 5, nombre: 'Recursos naturales del mundo', meses: 'Enero-Febrero', temas: ['Petróleo y minerales', 'Agua potable'] },
            { b: 6, nombre: 'Desarrollo sustentable', meses: 'Febrero-Junio', temas: ['Cambio climático', 'Energías renovables'] },
        ],
    },
    'primaria-6': {
        matematicas: [
            { b: 1, nombre: 'Números y operaciones avanzadas', meses: 'Agosto-Septiembre', temas: ['Potencias y raíces', 'Orden de operaciones'] },
            { b: 2, nombre: 'Álgebra introductoria', meses: 'Septiembre-Octubre', temas: ['Variables y expresiones', 'Ecuaciones lineales'] },
            { b: 3, nombre: 'Geometría analítica', meses: 'Octubre-Noviembre', temas: ['Plano cartesiano', 'Coordenadas y gráficas'] },
            { b: 4, nombre: 'Probabilidad', meses: 'Noviembre-Diciembre', temas: ['Experimentos aleatorios', 'Probabilidad simple'] },
            { b: 5, nombre: 'Estadística descriptiva', meses: 'Enero-Febrero', temas: ['Media, mediana y moda', 'Gráficas estadísticas'] },
            { b: 6, nombre: 'Preparación para secundaria', meses: 'Febrero-Junio', temas: ['Repaso integral', 'Resolución de problemas'] },
        ],
        espanol: [
            { b: 1, nombre: 'Literatura mexicana', meses: 'Agosto-Septiembre', temas: ['Cuentos y leyendas mexicanas', 'Autores nacionales'] },
            { b: 2, nombre: 'Escritura académica', meses: 'Septiembre-Octubre', temas: ['Ensayo', 'Texto expositivo'] },
            { b: 3, nombre: 'Lengua y comunicación', meses: 'Octubre-Noviembre', temas: ['Comunicación formal e informal', 'Registros del lenguaje'] },
            { b: 4, nombre: 'Medios digitales', meses: 'Noviembre-Diciembre', temas: ['Noticias digitales', 'Redes sociales y lenguaje'] },
            { b: 5, nombre: 'Gramática de 6°', meses: 'Enero-Febrero', temas: ['Subjuntivo', 'Conectores lógicos'] },
            { b: 6, nombre: 'Producción final', meses: 'Febrero-Junio', temas: ['Proyecto editorial', 'Corrección y estilo'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Evolución y adaptación', meses: 'Agosto-Septiembre', temas: ['Teoría de la evolución', 'Selección natural'] },
            { b: 2, nombre: 'Genética básica', meses: 'Septiembre-Octubre', temas: ['ADN y herencia', 'Enfermedades hereditarias'] },
            { b: 3, nombre: 'Energía y sus transformaciones', meses: 'Octubre-Noviembre', temas: ['Tipos de energía', 'Conservación de energía'] },
            { b: 4, nombre: 'Tecnología y ciencia', meses: 'Noviembre-Diciembre', temas: ['Inventos que cambiaron el mundo', 'Biotecnología'] },
            { b: 5, nombre: 'Salud y cuerpo humano', meses: 'Enero-Febrero', temas: ['Enfermedades prevenibles', 'Vacunas e inmunización'] },
            { b: 6, nombre: 'Medio ambiente global', meses: 'Febrero-Junio', temas: ['Crisis ambiental', 'Acciones sustentables'] },
        ],
        historia: [
            { b: 1, nombre: 'México en el siglo XX', meses: 'Agosto-Septiembre', temas: ['Revolución Mexicana', 'Venustiano Carranza'] },
            { b: 2, nombre: 'Las guerras mundiales', meses: 'Septiembre-Octubre', temas: ['Primera Guerra Mundial', 'Segunda Guerra Mundial'] },
            { b: 3, nombre: 'México posrevolucionario', meses: 'Octubre-Noviembre', temas: ['Desarrollo económico', 'PRI y democracia'] },
            { b: 4, nombre: 'La Guerra Fría', meses: 'Noviembre-Diciembre', temas: ['EUA vs URSS', 'Movimiento estudiantil 1968'] },
            { b: 5, nombre: 'México contemporáneo', meses: 'Enero-Febrero', temas: ['Transición democrática', 'Globalización'] },
            { b: 6, nombre: 'Mundo actual', meses: 'Febrero-Junio', temas: ['Retos globales', 'México en el mundo'] },
        ],
        geografia: [
            { b: 1, nombre: 'Geografía política mundial', meses: 'Agosto-Septiembre', temas: ['Países y capitales', 'Fronteras y conflictos'] },
            { b: 2, nombre: 'Economía mundial', meses: 'Septiembre-Octubre', temas: ['PIB y desarrollo', 'Países ricos y pobres'] },
            { b: 3, nombre: 'Cultura y diversidad', meses: 'Octubre-Noviembre', temas: ['Lenguas del mundo', 'Religiones principales'] },
            { b: 4, nombre: 'Problemas ambientales', meses: 'Noviembre-Diciembre', temas: ['Deforestación', 'Contaminación de mares'] },
            { b: 5, nombre: 'Urbanización y ruralidad', meses: 'Enero-Febrero', temas: ['Megaciudades', 'Zonas rurales en crisis'] },
            { b: 6, nombre: 'México en la globalización', meses: 'Febrero-Junio', temas: ['Tratados comerciales', 'México y sus socios'] },
        ],
    },
};

// ══════════════════════════════════════════════════════════════════════
// BANCO DE EJERCICIOS POR TEMA
// ══════════════════════════════════════════════════════════════════════
function generarEjercicios(grado, materia, bloque, temas) {
    const g = grado.replace('primaria-', 'p');
    const m = materia.substring(0, 3);
    const b = bloque;
    const pfx = `${grado}-${materia}-b${b}`;

    const bancoEjercicios = {
        matematicas: {
            'Fracciones equivalentes': [
                { tipo: 'multiple_choice', pregunta: '¿Cuál es equivalente a 1/2?', opciones: ['2/4', '2/5', '3/7', '4/9'], respuesta: '2/4', explicacion: '1/2 = 2/4 porque multiplicamos numerador y denominador por 2.' },
                { tipo: 'true_false', pregunta: '3/6 = 1/2 (son fracciones equivalentes)', respuesta: 'true', explicacion: '3/6 simplificado = 1/2. Son la misma cantidad.' },
                { tipo: 'fill_blank', pregunta: '2/3 = ___/9', respuesta: '6', explicacion: 'Multiplicamos 2×3=6 y 3×3=9. Entonces 2/3 = 6/9.' },
            ],
            'Decimales simples': [
                { tipo: 'multiple_choice', pregunta: '¿Cuánto es 0.5 + 0.3?', opciones: ['0.7', '0.8', '0.9', '1.0'], respuesta: '0.8', explicacion: '0.5 + 0.3 = 0.8. Sumamos las décimas: 5+3=8.' },
                { tipo: 'fill_blank', pregunta: '1.5 + ___ = 2.0', respuesta: '0.5', explicacion: 'Para llegar de 1.5 a 2.0 necesitamos 0.5 más.' },
                { tipo: 'true_false', pregunta: '0.25 es mayor que 0.3', respuesta: 'false', explicacion: '0.25 < 0.30. En décimas: 0.25 tiene 2, 0.30 tiene 3.' },
            ],
            'Ángulos': [
                { tipo: 'multiple_choice', pregunta: '¿Cuántos grados tiene un ángulo recto?', opciones: ['45°', '90°', '120°', '180°'], respuesta: '90°', explicacion: 'Un ángulo recto mide exactamente 90° — como la esquina de un cuaderno.' },
                { tipo: 'multiple_choice', pregunta: 'Un ángulo de 150° es...', opciones: ['Agudo', 'Recto', 'Obtuso', 'Llano'], respuesta: 'Obtuso', explicacion: 'Los ángulos obtusos miden más de 90° pero menos de 180°.' },
                { tipo: 'fill_blank', pregunta: 'Un ángulo llano mide ___ grados', respuesta: '180', explicacion: 'Un ángulo llano forma una línea recta y mide 180°.' },
            ],
            'Perímetro y área': [
                { tipo: 'multiple_choice', pregunta: '¿Cuál es el área de un cuadrado de 5cm de lado?', opciones: ['10 cm²', '20 cm²', '25 cm²', '30 cm²'], respuesta: '25 cm²', explicacion: 'Área = lado × lado = 5 × 5 = 25 cm².' },
                { tipo: 'fill_blank', pregunta: 'El perímetro de un triángulo con lados 3, 4 y 5 es ___ cm', respuesta: '12', explicacion: 'Perímetro = suma de todos los lados = 3+4+5 = 12 cm.' },
                { tipo: 'true_false', pregunta: 'El área de un rectángulo es base × altura', respuesta: 'true', explicacion: 'Correcto. Para un rectángulo de 6×4: área = 6×4 = 24 cm².' },
            ],
            'Multiplicación de 2 dígitos': [
                { tipo: 'multiple_choice', pregunta: '¿Cuánto es 23 × 4?', opciones: ['82', '92', '96', '102'], respuesta: '92', explicacion: '23 × 4 = 20×4 + 3×4 = 80 + 12 = 92.' },
                { tipo: 'fill_blank', pregunta: '15 × ___ = 90', respuesta: '6', explicacion: '15 × 6 = 90. Verificamos: 10×6=60, 5×6=30, 60+30=90.' },
                { tipo: 'multiple_choice', pregunta: '¿Cuánto es 32 × 3?', opciones: ['86', '96', '106', '116'], respuesta: '96', explicacion: '32 × 3 = 30×3 + 2×3 = 90 + 6 = 96.' },
            ],
            'Potencias y raíces': [
                { tipo: 'multiple_choice', pregunta: '¿Cuánto es 3²?', opciones: ['6', '9', '12', '16'], respuesta: '9', explicacion: '3² = 3 × 3 = 9. La potencia indica cuántas veces se multiplica la base.' },
                { tipo: 'multiple_choice', pregunta: '¿Cuál es la raíz cuadrada de 64?', opciones: ['6', '7', '8', '9'], respuesta: '8', explicacion: '√64 = 8, porque 8 × 8 = 64.' },
                { tipo: 'fill_blank', pregunta: '2⁴ = ___', respuesta: '16', explicacion: '2⁴ = 2×2×2×2 = 4×4 = 16.' },
            ],
            'default': [
                { tipo: 'multiple_choice', pregunta: `Problema de ${temas[0]}: ¿Cuál opción es correcta?`, opciones: ['Opción A', 'Opción B', 'Opción C', 'Opción D'], respuesta: 'Opción A', explicacion: `Esta es la respuesta correcta relacionada con ${temas[0]}.` },
                { tipo: 'fill_blank', pregunta: `Completa: ___ es la clave en ${temas[0]}`, respuesta: 'Correcto', explicacion: `En ${temas[0]} siempre debemos aplicar el método correcto.` },
                { tipo: 'true_false', pregunta: `${temas[0]} es parte de las matemáticas de ${grado.replace('primaria-', '')}° Primaria`, respuesta: 'true', explicacion: `Sí, ${temas[0]} es un tema central en este grado.` },
            ],
        },
        espanol: {
            'default': (tema) => [
                { tipo: 'multiple_choice', pregunta: `¿Cuál es la función principal de la ${tema.toLowerCase()}?`, opciones: ['Informar', 'Entretener', 'Convencer', 'Describir'], respuesta: 'Informar', explicacion: `En ${tema} el objetivo principal suele ser ${tema.includes('argument') ? 'convencer' : 'comunicar'}.` },
                { tipo: 'true_false', pregunta: `Un texto de ${tema.toLowerCase()} tiene introducción, desarrollo y conclusión`, respuesta: 'true', explicacion: 'La estructura básica de cualquier texto incluye estas tres partes.' },
                { tipo: 'fill_blank', pregunta: `El ___ de un texto es la idea que lo organiza`, respuesta: 'tema principal', explicacion: 'El tema principal es el hilo conductor de todo el texto.' },
            ],
            'Idea principal': [
                { tipo: 'multiple_choice', pregunta: 'En un texto, la idea principal es...', opciones: ['El detalle más curioso', 'El mensaje central', 'El último párrafo', 'Los ejemplos'], respuesta: 'El mensaje central', explicacion: 'La idea principal es el mensaje más importante que el autor quiere transmitir.' },
                { tipo: 'true_false', pregunta: 'Las ideas secundarias apoyan y explican la idea principal', respuesta: 'true', explicacion: 'Correcto. Las ideas secundarias dan detalles y ejemplos de la idea principal.' },
                { tipo: 'fill_blank', pregunta: 'La idea ___ es la más importante del texto', respuesta: 'principal', explicacion: 'La idea principal resume el tema central del texto.' },
            ],
            'Tipos de texto': [
                { tipo: 'multiple_choice', pregunta: 'Una receta de cocina es un texto...', opciones: ['Literario', 'Científico', 'Instructivo', 'Periodístico'], respuesta: 'Instructivo', explicacion: 'Los textos instructivos dan pasos o instrucciones para hacer algo.' },
                { tipo: 'multiple_choice', pregunta: '¿Qué tipo de texto es una novela?', opciones: ['Informativo', 'Literario', 'Científico', 'Jurídico'], respuesta: 'Literario', explicacion: 'Las novelas son texto literario de ficción con narración extensa.' },
                { tipo: 'fill_blank', pregunta: 'Un artículo de periódico es un texto ___', respuesta: 'periodístico', explicacion: 'Los textos periodísticos informan sobre hechos actuales de manera objetiva.' },
            ],
            'Sustantivos y adjetivos': [
                { tipo: 'multiple_choice', pregunta: '¿Cuál es el adjetivo en "el perro peludo"?', opciones: ['el', 'perro', 'peludo', 'ninguno'], respuesta: 'peludo', explicacion: '"Peludo" es el adjetivo que describe cómo es el perro.' },
                { tipo: 'true_false', pregunta: '"Libro" es un sustantivo común', respuesta: 'true', explicacion: 'Correcto. "Libro" nombra una cosa común, no un lugar o persona específica.' },
                { tipo: 'fill_blank', pregunta: '"México" es un sustantivo ___', respuesta: 'propio', explicacion: 'Los nombres de lugares, personas y marcas son sustantivos propios.' },
            ],
            'Verbos: tiempos y modos': [
                { tipo: 'multiple_choice', pregunta: '"Corrí al parque" está en tiempo...', opciones: ['Presente', 'Pasado', 'Futuro', 'Condicional'], respuesta: 'Pasado', explicacion: '"Corrí" es pretérito indefinido, indica una acción terminada en el pasado.' },
                { tipo: 'fill_blank', pregunta: '"Voy a ir mañana" usa el tiempo ___', respuesta: 'futuro', explicacion: 'Cuando hay una acción que aún no ha ocurrido, usamos el futuro.' },
                { tipo: 'true_false', pregunta: '"Come" está en tiempo presente', respuesta: 'true', explicacion: '"Come" describe una acción que ocurre ahora o habitualmente.' },
            ],
        },
        ciencias: {
            'Cadenas alimentarias': [
                { tipo: 'multiple_choice', pregunta: '¿Quién está al inicio de toda cadena alimentaria?', opciones: ['Los carnívoros', 'Los herbívoros', 'Los productores (plantas)', 'Los descomponedores'], respuesta: 'Los productores (plantas)', explicacion: 'Las plantas fabrican su propio alimento con la luz solar — son los productores.' },
                { tipo: 'true_false', pregunta: 'El sol es la fuente de energía de todas las cadenas alimentarias', respuesta: 'true', explicacion: 'Correcto. Las plantas capturan la energía del sol, que pasa a los herbívoros y carnívoros.' },
                { tipo: 'fill_blank', pregunta: 'Los animales que comen solo plantas se llaman ___', respuesta: 'herbívoros', explicacion: 'Herbívoro viene de "herba" (hierba) y "vorare" (comer).' },
            ],
            'Materia y energía': [
                { tipo: 'multiple_choice', pregunta: '¿En qué estado del agua las moléculas están más separadas?', opciones: ['Sólido', 'Líquido', 'Gaseoso', 'Plasma'], respuesta: 'Gaseoso', explicacion: 'En el estado gaseoso (vapor), las moléculas tienen más energía y se separan más.' },
                { tipo: 'multiple_choice', pregunta: 'El punto de ebullición del agua es...', opciones: ['0°C', '50°C', '100°C', '120°C'], respuesta: '100°C', explicacion: 'A 100°C el agua pasa de líquido a gas (vapor). A 0°C se congela.' },
                { tipo: 'fill_blank', pregunta: 'La materia tiene tres estados: sólido, líquido y ___', respuesta: 'gaseoso', explicacion: 'El gas es el estado donde la materia ocupa más espacio y no tiene forma propia.' },
            ],
            'Sistema nervioso': [
                { tipo: 'multiple_choice', pregunta: '¿Cuál es la "central de control" del sistema nervioso?', opciones: ['El corazón', 'El cerebro', 'Los pulmones', 'El estómago'], respuesta: 'El cerebro', explicacion: 'El cerebro controla todo el cuerpo: movimiento, pensamiento, emociones y sensaciones.' },
                { tipo: 'true_false', pregunta: 'Las neuronas son las células del sistema nervioso', respuesta: 'true', explicacion: 'Correcto. Las neuronas transmiten señales eléctricas a través del cuerpo.' },
                { tipo: 'fill_blank', pregunta: 'La médula ___ conecta el cerebro con el resto del cuerpo', respuesta: 'espinal', explicacion: 'La médula espinal es como el cable principal que conecta cerebro y nervios.' },
            ],
            'default': [
                { tipo: 'multiple_choice', pregunta: `¿Qué estudia el tema "${temas[0]}"?`, opciones: ['Fenómenos naturales', 'Historia humana', 'Matemáticas avanzadas', 'Arte'], respuesta: 'Fenómenos naturales', explicacion: `${temas[0]} es parte de las ciencias naturales que explican el mundo que nos rodea.` },
                { tipo: 'true_false', pregunta: `${temas[0]} es importante para entender el mundo natural`, respuesta: 'true', explicacion: `Las ciencias nos ayudan a comprender y explicar fenómenos como ${temas[0]}.` },
                { tipo: 'fill_blank', pregunta: `El método ___ es la base de las ciencias`, respuesta: 'científico', explicacion: 'El método científico: observar, hipótesis, experimento, conclusión.' },
            ],
        },
        historia: {
            'Los mayas': [
                { tipo: 'multiple_choice', pregunta: '¿En qué región vivió la civilización maya?', opciones: ['Zona andina', 'Caribe y Mesoamérica', 'Valle del Mississippi', 'Patagonia'], respuesta: 'Caribe y Mesoamérica', explicacion: 'Los mayas habitaron principalmente el sureste de México, Guatemala, Belice y Honduras.' },
                { tipo: 'true_false', pregunta: 'Los mayas desarrollaron un sistema de escritura jeroglífica', respuesta: 'true', explicacion: 'Los jeroglíficos mayas son uno de los sistemas de escritura más elaborados de América.' },
                { tipo: 'fill_blank', pregunta: 'El calendario maya tenía ___ días en su cuenta corta', respuesta: '260', explicacion: 'El Tzolkin (calendario ritual maya) tenía 260 días combinando 13 números y 20 signos.' },
            ],
            'Hernán Cortés': [
                { tipo: 'multiple_choice', pregunta: '¿En qué año llegó Hernán Cortés a México?', opciones: ['1492', '1519', '1521', '1492'], respuesta: '1519', explicacion: 'Cortés desembarcó en 1519. La caída de Tenochtitlan fue en 1521.' },
                { tipo: 'true_false', pregunta: 'Tenochtitlan cayó en manos españolas en 1521', respuesta: 'true', explicacion: 'Correcto. Después de difíciles batallas, Tenochtitlan cayó el 13 de agosto de 1521.' },
                { tipo: 'fill_blank', pregunta: 'La alianza de Cortés con los ___ fue clave para vencer a los aztecas', respuesta: 'tlaxcaltecas', explicacion: 'Los tlaxcaltecas eran enemigos de los aztecas y aliados estratégicos de los españoles.' },
            ],
            'Revolución Mexicana': [
                { tipo: 'multiple_choice', pregunta: '¿En qué año comenzó la Revolución Mexicana?', opciones: ['1900', '1905', '1910', '1915'], respuesta: '1910', explicacion: 'La Revolución inició el 20 de noviembre de 1910 con el Plan de San Luis de Madero.' },
                { tipo: 'multiple_choice', pregunta: '¿Quién encabezó el movimiento del sur "Tierra y Libertad"?', opciones: ['Pancho Villa', 'Emiliano Zapata', 'Venustiano Carranza', 'Álvaro Obregón'], respuesta: 'Emiliano Zapata', explicacion: 'Zapata luchó para devolver las tierras a los campesinos con el Plan de Ayala.' },
                { tipo: 'fill_blank', pregunta: 'La Constitución de ___ es resultado de la Revolución Mexicana', respuesta: '1917', explicacion: 'La Constitución de 1917 estableció derechos laborales, agrarios y educativos.' },
            ],
            'default': [
                { tipo: 'multiple_choice', pregunta: `¿Cuál fue la importancia de "${temas[0]}" en la historia?`, opciones: ['Cambió al sociedad', 'No tuvo impacto', 'Solo afectó a un país', 'Fue un mito'], respuesta: 'Cambió al sociedad', explicacion: `${temas[0]} fue un evento fundamental que transformó la historia.` },
                { tipo: 'fill_blank', pregunta: `${temas[0]} ocurrió durante la época ___`, respuesta: 'histórica correspondiente', explicacion: `Estudiar la cronología nos ayuda a entender el contexto de ${temas[0]}.` },
                { tipo: 'true_false', pregunta: `Conocer ${temas[0]} nos ayuda a entender el presente`, respuesta: 'true', explicacion: 'La historia siempre tiene lecciones que aplican al mundo de hoy.' },
            ],
        },
        geografia: {
            'División política': [
                { tipo: 'multiple_choice', pregunta: '¿Cuántos estados tiene México?', opciones: ['28', '30', '31', '32'], respuesta: '31', explicacion: 'México tiene 31 estados y 1 Ciudad de México (antes DF), para un total de 32 entidades federativas.' },
                { tipo: 'multiple_choice', pregunta: '¿Cuál es la capital de México?', opciones: ['Guadalajara', 'Monterrey', 'Puebla', 'Ciudad de México'], respuesta: 'Ciudad de México', explicacion: 'Ciudad de México (CDMX) es la capital y la ciudad más grande del país.' },
                { tipo: 'fill_blank', pregunta: 'México comparte frontera norte con ___', respuesta: 'Estados Unidos', explicacion: 'La frontera norte de México con EUA tiene más de 3,000 km de longitud.' },
            ],
            'Zonas climáticas de México': [
                { tipo: 'multiple_choice', pregunta: '¿Qué tipo de clima predomina en el norte de México?', opciones: ['Tropical', 'Árido/Seco', 'Húmedo', 'Polar'], respuesta: 'Árido/Seco', explicacion: 'El norte de México incluye el Desierto de Sonora y Chihuahua — clima árido y seco.' },
                { tipo: 'true_false', pregunta: 'El sur de México (Chiapas, Tabasco) tiene clima tropical húmedo', respuesta: 'true', explicacion: 'Correcto. El sureste recibe mucha lluvia durante todo el año por su posición tropical.' },
                { tipo: 'fill_blank', pregunta: 'Las sierras Madre Occidental y Oriental son parte del ___ de México', respuesta: 'relieve montañoso', explicacion: 'Las Sierras Madre rodean la meseta central de México.' },
            ],
            'Continentes y océanos': [
                { tipo: 'multiple_choice', pregunta: '¿Cuántos continentes hay en el mundo?', opciones: ['5', '6', '7', '8'], respuesta: '7', explicacion: 'Los 7 continentes: África, América del Norte, América del Sur, Antártida, Asia, Europa, Oceanía.' },
                { tipo: 'multiple_choice', pregunta: '¿Cuál es el océano más grande del mundo?', opciones: ['Atlántico', 'Índico', 'Ártico', 'Pacífico'], respuesta: 'Pacífico', explicacion: 'El Océano Pacífico cubre más de 165 millones de km² — más grande que todos los continentes juntos.' },
                { tipo: 'fill_blank', pregunta: 'El continente más grande del mundo es ___', respuesta: 'Asia', explicacion: 'Asia tiene 44.5 millones de km² y el 60% de la población mundial.' },
            ],
            'default': [
                { tipo: 'multiple_choice', pregunta: `¿Qué estudia "${temas[0]}" en geografía?`, opciones: ['La distribución en el espacio', 'La historia antigua', 'Las ciencias exactas', 'La literatura'], respuesta: 'La distribución en el espacio', explicacion: `La geografía estudia cómo se distribuyen ${temas[0]} en el espacio terrestre.` },
                { tipo: 'fill_blank', pregunta: `Los mapas nos ayudan a ubicar ___`, respuesta: 'lugares y fenómenos', explicacion: 'Los mapas son herramientas clave de la geografía para representar el espacio.' },
                { tipo: 'true_false', pregunta: `La geografía estudia tanto el espacio físico como el humano`, respuesta: 'true', explicacion: 'Geografía física: relieve, clima, etc. Geografía humana: población, economía, etc.' },
            ],
        },
    };

    function getEjercicios(materia, tema) {
        const banco = bancoEjercicios[materia];
        if (!banco) return bancoEjercicios.historia.default;

        if (banco[tema]) return banco[tema];
        if (typeof banco.default === 'function') return banco.default(tema);
        return banco.default || [];
    }

    const todos = [];
    let contador = 1;

    temas.forEach(tema => {
        const ejsTema = getEjercicios(materia, tema);
        ejsTema.forEach(ej => {
            const id = `${pfx}-${String(contador).padStart(3, '0')}`;
            contador++;
            todos.push({ id, tema, ...ej });
        });
    });

    // Dividir en v1/v2/preview
    const midpoint = Math.ceil(todos.length / 2);
    const v1 = todos.slice(0, midpoint).map(e => ({ ...e, nivel: 'v1', tipo: e.tipo, pregunta: e.pregunta, ...(e.opciones ? { opciones: e.opciones } : {}), respuestaCorrecta: e.respuesta, explicacion: e.explicacion }));
    const v2 = todos.slice(midpoint).map(e => ({ ...e, nivel: 'v2', tipo: e.tipo, pregunta: e.pregunta, ...(e.opciones ? { opciones: e.opciones } : {}), respuestaCorrecta: e.respuesta, explicacion: e.explicacion }));
    const preview = todos.slice(0, 3).map(e => ({ ...e, nivel: 'v1', tipo: e.tipo, pregunta: e.pregunta, ...(e.opciones ? { opciones: e.opciones } : {}), respuestaCorrecta: e.respuesta, explicacion: e.explicacion }));

    // Limpiar propiedades extras
    [...v1, ...v2, ...preview].forEach(e => { delete e.respuesta; });

    return { v1, v2, preview };
}

// ══════════════════════════════════════════════════════════════════════
// GENERAR TODOS LOS ARCHIVOS
// ══════════════════════════════════════════════════════════════════════
let generados = 0;
let saltados = 0;

Object.entries(CURRICULUM).forEach(([grado, materias]) => {
    Object.entries(materias).forEach(([materia, bloques]) => {
        const dirMateria = path.join(BASE, grado, materia);
        fs.mkdirSync(dirMateria, { recursive: true });

        bloques.forEach(({ b, nombre, meses, temas }) => {
            const archivo = path.join(dirMateria, `bloque-${b}.json`);

            // Saltar si ya existe y tiene buen contenido
            if (fs.existsSync(archivo)) {
                try {
                    const existing = JSON.parse(fs.readFileSync(archivo, 'utf8'));
                    if (existing.totalEjercicios >= 5) {
                        saltados++;
                        return;
                    }
                } catch { }
            }

            const { v1, v2, preview } = generarEjercicios(grado, materia, b, temas);
            const totalEjercicios = v1.length + v2.length;

            const data = {
                grado, materia,
                bloque: b,
                nombre, meses, temas,
                totalEjercicios,
                ejercicios: { v1, v2, preview },
                generado: new Date().toISOString(),
                version: '2.0',
            };

            fs.writeFileSync(archivo, JSON.stringify(data, null, 2), 'utf8');
            generados++;
            console.log(`✅ ${grado}/${materia}/bloque-${b} — ${totalEjercicios} ejercicios`);
        });
    });
});

console.log(`\n🎉 COMPLETADO: ${generados} archivos generados, ${saltados} ya existían`);

// Resumen final
Object.keys(CURRICULUM).forEach(grado => {
    const materias = Object.keys(CURRICULUM[grado]);
    let total = 0;
    materias.forEach(materia => {
        const dirMateria = path.join(BASE, grado, materia);
        if (fs.existsSync(dirMateria)) {
            const bloques = fs.readdirSync(dirMateria).filter(f => f.endsWith('.json'));
            bloques.forEach(b => {
                try { total += JSON.parse(fs.readFileSync(path.join(dirMateria, b), 'utf8')).totalEjercicios; } catch { }
            });
        }
    });
    console.log(`  📚 ${grado}: ${total} ejercicios totales`);
});
