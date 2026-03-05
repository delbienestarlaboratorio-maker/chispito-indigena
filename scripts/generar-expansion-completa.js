/**
 * generar-expansion-completa.js
 * 
 * Genera:
 * 1. Tecnología para Secundaria 1°, 2°, 3° (5 bloques c/u)
 * 2. Bachillerato semestres 1-6 con 6-7 materias por semestre
 *    Materias: matematicas, espanol, ciencias, historia, ingles, tecnologia, filosofia
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');

// ══════════════════════════════════════════════════════
// 1. TECNOLOGÍA PARA SECUNDARIA 1°-3°
// ══════════════════════════════════════════════════════
const TECNOLOGIA_SEC = {
    'secundaria-1': [
        {
            b: 1, nombre: 'Tecnología y sociedad', meses: 'Agosto-Septiembre',
            temas: ['¿Qué es la tecnología?', 'Historia de las herramientas', 'Tecnología en la vida diaria', 'Impacto social de la tecnología']
        },
        {
            b: 2, nombre: 'Computación básica', meses: 'Octubre-Noviembre',
            temas: ['Hardware y software', 'Sistema operativo Windows', 'Teclado y ratón', 'Archivos y carpetas']
        },
        {
            b: 3, nombre: 'Internet y comunicación', meses: 'Diciembre-Enero',
            temas: ['¿Qué es internet?', 'Navegadores web', 'Correo electrónico', 'Seguridad en línea básica']
        },
        {
            b: 4, nombre: 'Procesador de textos', meses: 'Febrero-Marzo',
            temas: ['Microsoft Word / Google Docs', 'Formato de texto', 'Tablas e imágenes', 'Guardar e imprimir']
        },
        {
            b: 5, nombre: 'Presentaciones digitales', meses: 'Abril-Junio',
            temas: ['PowerPoint / Google Slides', 'Diseño de diapositivas', 'Insertar imágenes y gráficos', 'Presentación oral']
        },
    ],
    'secundaria-2': [
        {
            b: 1, nombre: 'Hojas de cálculo', meses: 'Agosto-Septiembre',
            temas: ['Excel / Google Sheets', 'Fórmulas básicas (suma, promedio)', 'Gráficas simples', 'Bases de datos pequeñas']
        },
        {
            b: 2, nombre: 'Programación inicial', meses: 'Octubre-Noviembre',
            temas: ['¿Qué es un algoritmo?', 'Scratch: bloques de código', 'Secuencias y ciclos', 'Condiciones (si/entonces)']
        },
        {
            b: 3, nombre: 'Diseño gráfico básico', meses: 'Diciembre-Enero',
            temas: ['Canva', 'Colores y tipografía', 'Crear un cartel digital', 'Edición de imágenes']
        },
        {
            b: 4, nombre: 'Ciudadanía digital', meses: 'Febrero-Marzo',
            temas: ['Huella digital', 'Derechos de autor', 'Fake news: cómo identificarlas', 'Privacidad en redes sociales']
        },
        {
            b: 5, nombre: 'Proyecto tecnológico', meses: 'Abril-Junio',
            temas: ['Identificar un problema', 'Diseñar una solución tecnológica', 'Prototipar', 'Presentar el proyecto']
        },
    ],
    'secundaria-3': [
        {
            b: 1, nombre: 'Pensamiento computacional', meses: 'Agosto-Septiembre',
            temas: ['Descomposición de problemas', 'Abstracción', 'Reconocimiento de patrones', 'Algoritmos complejos']
        },
        {
            b: 2, nombre: 'Programación con Python', meses: 'Octubre-Noviembre',
            temas: ['Variables y tipos de datos', 'Entrada y salida (input/print)', 'Bucles for y while', 'Funciones básicas']
        },
        {
            b: 3, nombre: 'Bases de datos', meses: 'Diciembre-Enero',
            temas: ['¿Qué es una base de datos?', 'Tablas y registros', 'Consultas simples', 'Aplicaciones reales']
        },
        {
            b: 4, nombre: 'Redes e Internet avanzado', meses: 'Febrero-Marzo',
            temas: ['Protocolo TCP/IP básico', 'Dirección IP', 'Nube (Cloud)', 'Internet de las Cosas (IoT)']
        },
        {
            b: 5, nombre: 'Proyecto final tecnológico', meses: 'Abril-Junio',
            temas: ['Metodología de proyectos', 'Prototipo funcional', 'Presentación profesional', 'Retroalimentación y mejora']
        },
    ],
};

// ══════════════════════════════════════════════════════
// 2. BACHILLERATO — Semestres 1-6
// ══════════════════════════════════════════════════════
const BACHILLERATO = {
    'bachillerato-1': {
        matematicas: [
            { b: 1, nombre: 'Conjuntos y números reales', meses: 'Agosto', temas: ['Conjuntos: unión e intersección', 'Números reales', 'Fracciones y decimales', 'Propiedades aritméticas'] },
            { b: 2, nombre: 'Ecuaciones de primer grado', meses: 'Septiembre', temas: ['Ecuación lineal', 'Despejar variable', 'Problemas con ecuaciones', 'Inecuaciones lineales'] },
            { b: 3, nombre: 'Polinomios', meses: 'Octubre', temas: ['Monomios y polinomios', 'Suma y resta de polinomios', 'Multiplicación', 'Factor común'] },
            { b: 4, nombre: 'Sistemas de ecuaciones', meses: 'Noviembre', temas: ['Método de sustitución', 'Método de igualación', 'Método de suma y resta', 'Interpretación geométrica'] },
            { b: 5, nombre: 'Geometría analítica I', meses: 'Diciembre-Enero', temas: ['Plano cartesiano', 'Distancia entre dos puntos', 'Punto medio', 'Recta: pendiente e intercepción'] },
        ],
        espanol: [
            { b: 1, nombre: 'Taller de lectura I', meses: 'Agosto', temas: ['Comprensión lectora', 'Tipos de texto', 'Idea principal y secundaria', 'Resumen'] },
            { b: 2, nombre: 'Redacción básica', meses: 'Septiembre', temas: ['Ortografía y puntuación', 'Párrafo: estructura', 'Coherencia y cohesión', 'Tipos de oraciones'] },
            { b: 3, nombre: 'Texto argumentativo', meses: 'Octubre', temas: ['Argumento y contraargumento', 'Tesis', 'Ensayo sencillo', 'Fuentes y citas'] },
            { b: 4, nombre: 'Comunicación oral', meses: 'Noviembre', temas: ['Exposición oral', 'Debate', 'Lenguaje corporal', 'Recursos retóricos'] },
            { b: 5, nombre: 'Géneros textuales', meses: 'Diciembre-Enero', temas: ['Cuento y novela', 'Poesía', 'Noticia y reportaje', 'Carta formal'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Química I: materia y energía', meses: 'Agosto', temas: ['Estados de la materia', 'Propiedades físicas y químicas', 'Átomos y moléculas', 'Tabla periódica básica'] },
            { b: 2, nombre: 'Enlace químico', meses: 'Septiembre', temas: ['Enlace iónico', 'Enlace covalente', 'Fórmulas químicas', 'Nomenclatura básica'] },
            { b: 3, nombre: 'Reacciones químicas', meses: 'Octubre', temas: ['Tipos de reacciones', 'Balanceo de ecuaciones', 'Ley de conservación de masa', 'Estequiometría básica'] },
            { b: 4, nombre: 'Soluciones', meses: 'Noviembre', temas: ['Soluto y solvente', 'Concentración molar', 'pH ácidos y bases', 'Soluciones en la vida diaria'] },
            { b: 5, nombre: 'Química orgánica I', meses: 'Diciembre-Enero', temas: ['Carbono y sus propiedades', 'Hidrocarburos', 'Grupos funcionales', 'Polímeros básicos'] },
        ],
        historia: [
            { b: 1, nombre: 'Introducción a las Ciencias Sociales', meses: 'Agosto', temas: ['¿Qué son las ciencias sociales?', 'Tiempo histórico', 'Fuentes primarias y secundarias', 'Línea del tiempo'] },
            { b: 2, nombre: 'Civilizaciones antiguas', meses: 'Septiembre', temas: ['Mesopotamia y Egipto', 'Grecia clásica', 'Roma', 'Civilizaciones mesoamericanas'] },
            { b: 3, nombre: 'Edad Media y Renacimiento', meses: 'Octubre', temas: ['Feudalismo', 'Iglesia medieval', 'Renacimiento italiano', 'Humanismo'] },
            { b: 4, nombre: 'Conquista y Colonia', meses: 'Noviembre', temas: ['Conquista de México', 'Virreinato', 'Economía colonial', 'Sincretismo cultural'] },
            { b: 5, nombre: 'Ilustración e Independencia', meses: 'Diciembre-Enero', temas: ['La Ilustración', 'Revolución francesa', 'Independencia de México', 'Los héroes insurgentes'] },
        ],
        ingles: [
            { b: 1, nombre: 'Review: Present Tenses', meses: 'Agosto', temas: ['Present simple vs continuous', 'State verbs', 'Frequency adverbs', 'Daily routines'] },
            { b: 2, nombre: 'Past Tenses', meses: 'Septiembre', temas: ['Simple past regular/irregular', 'Past continuous', 'Time expressions', 'Narrating stories'] },
            { b: 3, nombre: 'Future Expressions', meses: 'Octubre', temas: ['Will vs going to', 'Present continuous for future', 'Making plans', 'Predictions'] },
            { b: 4, nombre: 'Modals and Conditionals', meses: 'Noviembre', temas: ['Modal verbs (can/could/should/must)', 'Zero conditional', 'First conditional', 'Real situations'] },
            { b: 5, nombre: 'Perfect Tenses', meses: 'Diciembre-Enero', temas: ['Present perfect', 'Past perfect', 'Already/just/yet/since/for', 'Life experiences'] },
        ],
        tecnologia: [
            { b: 1, nombre: 'Informática I', meses: 'Agosto', temas: ['Sistema operativo avanzado', 'Gestión de archivos', 'Red local', 'Seguridad informática'] },
            { b: 2, nombre: 'Hoja de cálculo avanzada', meses: 'Septiembre', temas: ['Funciones estadísticas', 'Tablas dinámicas', 'Macros básicas', 'Análisis de datos'] },
            { b: 3, nombre: 'Diseño web básico', meses: 'Octubre', temas: ['HTML básico', 'CSS básico', 'Estructura de página web', 'Publicar en internet'] },
            { b: 4, nombre: 'Programación I', meses: 'Noviembre', temas: ['Variables y tipos', 'Condicionales', 'Ciclos', 'Funciones en Python'] },
            { b: 5, nombre: 'Proyecto digital I', meses: 'Diciembre-Enero', temas: ['Diseño de proyecto', 'Desarrollo', 'Pruebas', 'Presentación'] },
        ],
    },
    'bachillerato-2': {
        matematicas: [
            { b: 1, nombre: 'Trigonometría I', meses: 'Enero-Feb', temas: ['Ángulos y medida', 'Razones trigonométricas', 'Funciones seno y coseno', 'Identidades básicas'] },
            { b: 2, nombre: 'Trigonometría II', meses: 'Febrero', temas: ['Ley de senos', 'Ley de cosenos', 'Resolución de triángulos', 'Aplicaciones'] },
            { b: 3, nombre: 'Funciones', meses: 'Marzo', temas: ['Concepto de función', 'Dominio y rango', 'Función lineal', 'Función cuadrática'] },
            { b: 4, nombre: 'Función cuadrática', meses: 'Abril', temas: ['Parábola', 'Vértice', 'Discriminante', 'Problemas de optimización'] },
            { b: 5, nombre: 'Probabilidad básica', meses: 'Mayo-Junio', temas: ['Espacio muestral', 'Probabilidad clásica', 'Combinatoria', 'Permutaciones'] },
        ],
        espanol: [
            { b: 1, nombre: 'Literatura I: narrativa', meses: 'Enero-Feb', temas: ['El cuento literario', 'Estructura narrativa', 'Personajes y narrador', 'Análisis literario'] },
            { b: 2, nombre: 'Poesía', meses: 'Febrero', temas: ['Verso y prosa', 'Figuras retóricas', 'Métrica y rima', 'Poetas mexicanos'] },
            { b: 3, nombre: 'Teatro y drama', meses: 'Marzo', temas: ['Estructura del texto dramático', 'Actos y escenas', 'Análisis de obra', 'Teatro mexicano'] },
            { b: 4, nombre: 'Ensayo literario', meses: 'Abril', temas: ['El ensayo: características', 'Estructura', 'Argumentación con citas', 'Bibliografía APA'] },
            { b: 5, nombre: 'Literatura universal', meses: 'Mayo-Junio', temas: ['Épica clásica', 'Literatura medieval', 'Barroco', 'Romanticismo'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Física I: cinemática', meses: 'Enero-Feb', temas: ['Movimiento rectilíneo uniforme', 'Aceleración', 'Caída libre', 'Gráficas de movimiento'] },
            { b: 2, nombre: 'Dinámica', meses: 'Febrero', temas: ['Leyes de Newton', 'Fricción', 'Diagrama de cuerpo libre', 'Fuerza y aceleración'] },
            { b: 3, nombre: 'Trabajo y energía', meses: 'Marzo', temas: ['Trabajo mecánico', 'Energía cinética', 'Energía potencial', 'Conservación de la energía'] },
            { b: 4, nombre: 'Electricidad básica', meses: 'Abril', temas: ['Carga eléctrica', 'Ley de Coulomb', 'Circuito eléctrico básico', 'Ley de Ohm'] },
            { b: 5, nombre: 'Ondas y sonido', meses: 'Mayo-Junio', temas: ['Movimiento ondulatorio', 'Sonido y velocidad', 'Luz y espectro', 'Óptica básica'] },
        ],
        historia: [
            { b: 1, nombre: 'Historia de México I', meses: 'Enero-Feb', temas: ['México independiente', 'Primer Imperio', 'Reforma liberal', 'Juárez y las Leyes de Reforma'] },
            { b: 2, nombre: 'Porfiriato y Revolución', meses: 'Febrero', temas: ['El Porfiriato', 'Causas de la Revolución', 'Madero y el Plan de San Luis', 'Villa y Zapata'] },
            { b: 3, nombre: 'México moderno', meses: 'Marzo', temas: ['Constitución de 1917', 'Cárdenas y la expropiación', 'PRI y el siglo XX', 'Movimiento estudiantil 1968'] },
            { b: 4, nombre: 'Historia universal I', meses: 'Abril', temas: ['Revolución industrial', 'Imperialismo', 'Primera Guerra Mundial', 'Revolución rusa'] },
            { b: 5, nombre: 'Segunda Guerra y Guerra Fría', meses: 'Mayo-Junio', temas: ['Fascismo y nazismo', 'Segunda Guerra Mundial', 'Guerra Fría', 'ONU y derechos humanos'] },
        ],
        ingles: [
            { b: 1, nombre: 'Academic Reading', meses: 'Enero-Feb', temas: ['Reading strategies', 'Main idea and details', 'Inference', 'Vocabulary in context'] },
            { b: 2, nombre: 'Writing Paragraphs', meses: 'Febrero', temas: ['Topic sentence', 'Supporting details', 'Concluding sentence', 'Transition words'] },
            { b: 3, nombre: 'Passive Voice', meses: 'Marzo', temas: ['Present passive', 'Past passive', 'Perfect passive', 'Causative'] },
            { b: 4, nombre: 'Reported Speech', meses: 'Abril', temas: ['Direct vs indirect speech', 'Reporting verbs', 'Questions indirect', 'Time expressions'] },
            { b: 5, nombre: 'Research Skills in English', meses: 'Mayo-Junio', temas: ['Finding sources', 'APA citations in English', 'Summarizing', 'Academic writing basics'] },
        ],
        tecnologia: [
            { b: 1, nombre: 'Programación II', meses: 'Enero-Feb', temas: ['Listas y diccionarios', 'Manejo de archivos', 'POO básica', 'Módulos populares'] },
            { b: 2, nombre: 'Base de datos II', meses: 'Febrero', temas: ['SQL básico', 'CREATE TABLE', 'SELECT / WHERE', 'JOIN básico'] },
            { b: 3, nombre: 'Desarrollo web', meses: 'Marzo', temas: ['HTML5 semántico', 'CSS Flexbox', 'JavaScript básico', 'Formularios web'] },
            { b: 4, nombre: 'Redes avanzado', meses: 'Abril', temas: ['Modelos OSI y TCP/IP', 'Configuración de red', 'Firewall', 'VPN básico'] },
            { b: 5, nombre: 'Proyecto digital II', meses: 'Mayo-Junio', temas: ['Aplicación web', 'Base de datos conectada', 'Pruebas de usuario', 'Despliegue'] },
        ],
    },
    'bachillerato-3': {
        matematicas: [
            { b: 1, nombre: 'Geometría analítica II', meses: 'Ago', temas: ['Circunferencia', 'Parábola (cónica)', 'Elipse básica', 'Hipérbola básica'] },
            { b: 2, nombre: 'Estadística descriptiva', meses: 'Sep', temas: ['Media, mediana, moda', 'Desviación estándar', 'Histogramas', 'Distribución normal'] },
            { b: 3, nombre: 'Combinatoria avanzada', meses: 'Oct', temas: ['Permutaciones con repetición', 'Combinaciones', 'Binomio de Newton', 'Triángulo de Pascal'] },
            { b: 4, nombre: 'Sucesiones y series', meses: 'Nov', temas: ['Sucesión aritmética', 'Sucesión geométrica', 'Suma de series finitas', 'Interés compuesto'] },
            { b: 5, nombre: 'Límites (Introducción al Cálculo)', meses: 'Dic-Ene', temas: ['Concepto de límite', 'Límites laterales', 'Límites al infinito', 'Continuidad'] },
        ],
        espanol: [
            { b: 1, nombre: 'Literatura mexicana', meses: 'Ago', temas: ['Literatura prehispánica', 'Sor Juana Inés de la Cruz', 'Modernismo mexicano', 'Juan Rulfo'] },
            { b: 2, nombre: 'Narrativa latinoamericana', meses: 'Sep', temas: ['Boom latinoamericano', 'García Márquez', 'Vargas Llosa', 'El realismo mágico'] },
            { b: 3, nombre: 'Periodismo y medios', meses: 'Oct', temas: ['Noticias vs opinión', 'Reportaje de investigación', 'Podcast y blog', 'Ética periodística'] },
            { b: 4, nombre: 'Protocolo académico', meses: 'Nov', temas: ['Normas APA', 'Plagio y originalidad', 'Presentación académica', 'Mapa conceptual avanzado'] },
            { b: 5, nombre: 'Proyecto de comunicación', meses: 'Dic-Ene', temas: ['Diseño de campaña', 'Texto persuasivo', 'Multimodalidad', 'Presentación final'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Biología I', meses: 'Ago', temas: ['Célula procariota y eucariota', 'Mitosis y meiosis', 'ADN y replicación', 'Síntesis de proteínas'] },
            { b: 2, nombre: 'Ecología', meses: 'Sep', temas: ['Ecosistemas', 'Cadenas alimentarias', 'Biodiversidad', 'Cambio climático'] },
            { b: 3, nombre: 'Genética', meses: 'Oct', temas: ['Leyes de Mendel', 'Herencia', 'Mutaciones', 'Biotecnología básica'] },
            { b: 4, nombre: 'Cuerpo humano', meses: 'Nov', temas: ['Sistema nervioso', 'Sistema endócrino', 'Sistema inmune', 'Salud y enfermedad'] },
            { b: 5, nombre: 'Química avanzada', meses: 'Dic-Ene', temas: ['Termodinámica química', 'Electroquímica básica', 'Cinética química', 'Polímeros y plásticos'] },
        ],
        historia: [
            { b: 1, nombre: 'México contemporáneo', meses: 'Ago', temas: ['Milagro mexicano', 'Crisis de 1982', 'Tratado TLCAN', 'Alternancia política 2000'] },
            { b: 2, nombre: 'Globalización', meses: 'Sep', temas: ['¿Qué es la globalización?', 'OMC y libre comercio', 'Migración global', 'Desigualdad mundial'] },
            { b: 3, nombre: 'Derechos humanos', meses: 'Oct', temas: ['Declaración Universal', 'Organismos internacionales (ONU)', 'Feminismo y género', 'Movimientos sociales actuales'] },
            { b: 4, nombre: 'Conflictos del siglo XXI', meses: 'Nov', temas: ['Terrorismo internacional', 'Medio Oriente', 'Crisis de refugiados', 'Ciberguerra'] },
            { b: 5, nombre: 'México en el mundo', meses: 'Dic-Ene', temas: ['Política exterior mexicana', 'T-MEC', 'Relaciones con EUA', 'México en organismos internacionales'] },
        ],
        ingles: [
            { b: 1, nombre: 'Advanced Grammar', meses: 'Ago', temas: ['Mixed conditionals', 'Subjunctive mood', 'Inversions', 'Cleft sentences'] },
            { b: 2, nombre: 'Discourse Analysis', meses: 'Sep', temas: ['Cohesion devices', 'Register and style', 'Formal vs informal', 'Identifying bias'] },
            { b: 3, nombre: 'Listening Strategies', meses: 'Oct', temas: ['Listening for gist', 'Note-taking', 'Pop culture listening', 'Academic lectures'] },
            { b: 4, nombre: 'Speaking Fluency', meses: 'Nov', temas: ['Discussion techniques', 'Expressing opinion fluently', 'Negotiation language', 'Formal presentations'] },
            { b: 5, nombre: 'Exam Preparation', meses: 'Dic-Ene', temas: ['TOEFL/IELTS structure', 'Reading comprehension test', 'Writing essays exam-style', 'Vocabulary for exams'] },
        ],
        filosofia: [
            { b: 1, nombre: 'Introducción a la Filosofía', meses: 'Ago', temas: ['¿Qué es la filosofía?', 'Los presocráticos', 'Sócrates y el método mayéutico', 'Platón: el mundo de las ideas'] },
            { b: 2, nombre: 'Ética', meses: 'Sep', temas: ['¿Qué es la moral?', 'Utilitarismo', 'Ética kantiana', 'Ética aplicada: dilemas reales'] },
            { b: 3, nombre: 'Lógica', meses: 'Oct', temas: ['Proposiciones y conectivos', 'Silogismo', 'Falacias lógicas', 'Argumentación válida'] },
            { b: 4, nombre: 'Epistemología', meses: 'Nov', temas: ['¿Qué es el conocimiento?', 'Racionalismo vs empirismo', 'Método científico', 'Ciencia y pseudociencia'] },
            { b: 5, nombre: 'Filosofía contemporánea', meses: 'Dic-Ene', temas: ['Existencialismo', 'Marxismo básico', 'Hermenéutica', 'Bioética'] },
        ],
    },
    'bachillerato-4': {
        matematicas: [
            { b: 1, nombre: 'Cálculo Diferencial I', meses: 'Ene', temas: ['Derivada: definición', 'Regla de la potencia', 'Derivada de funciones trigonométricas', 'Regla de la cadena'] },
            { b: 2, nombre: 'Aplicaciones de la derivada', meses: 'Feb', temas: ['Máximos y mínimos', 'Problemas de optimización', 'Razón de cambio', 'Linealización'] },
            { b: 3, nombre: 'Integrales I', meses: 'Mar', temas: ['Antiderivada', 'Integral indefinida', 'Reglas de integración', 'Integral definida'] },
            { b: 4, nombre: 'Aplicaciones de la integral', meses: 'Abr', temas: ['Área bajo la curva', 'Área entre curvas', 'Volumen de revolución', 'Trabajo y física'] },
            { b: 5, nombre: 'Ecuaciones diferenciales básicas', meses: 'May-Jun', temas: ['Concepto de EDO', 'Variables separables', 'EDO lineales de primer orden', 'Aplicaciones: crecimiento/decaimiento'] },
        ],
        espanol: [
            { b: 1, nombre: 'Literatura universal II', meses: 'Ene', temas: ['Vanguardias literarias', 'Existencialismo en literatura', 'Posmodernismo', 'Literatura distópica'] },
            { b: 2, nombre: 'Lingüística', meses: 'Feb', temas: ['Signo lingüístico', 'Fonética y fonología', 'Morfología', 'Sintaxis avanzada'] },
            { b: 3, nombre: 'Semiótica y comunicación', meses: 'Mar', temas: ['Signos y símbolos', 'Publicidad y persuasión', 'Lenguaje visual', 'Análisis del discurso'] },
            { b: 4, nombre: 'Escritura creativa', meses: 'Abr', temas: ['Microrrelato', 'Escritura de guión', 'Poesía experimental', 'Blog literario'] },
            { b: 5, nombre: 'Proyecto escritura final', meses: 'May-Jun', temas: ['Portafolio de escritos', 'Corrección estilística', 'Publicación digital', 'Presentación'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Física II: termodinámica', meses: 'Ene', temas: ['Temperatura y calor', 'Leyes de la termodinámica', 'Máquinas térmicas', 'Entropía'] },
            { b: 2, nombre: 'Electromagnetismo', meses: 'Feb', temas: ['Campo eléctrico', 'Capacitores', 'Campo magnético', 'Inducción electromagnética'] },
            { b: 3, nombre: 'Física moderna', meses: 'Mar', temas: ['Relatividad especial (E=mc²)', 'Dualidad onda-partícula', 'Modelo atómico de Bohr', 'Radiactividad'] },
            { b: 4, nombre: 'Biología II: evolución', meses: 'Abr', temas: ['Teoría de Darwin', 'Selección natural', 'Especiación', 'Evidencias de la evolución'] },
            { b: 5, nombre: 'Astronomía y cosmología', meses: 'May-Jun', temas: ['Sistema solar', 'Estrellas y galaxias', 'Big Bang', 'Cosmología moderna'] },
        ],
        historia: [
            { b: 1, nombre: 'Economía política', meses: 'Ene', temas: ['Capitalismo y socialismo', 'Supply and demand', 'Inflación y desempleo', 'Banco de México'] },
            { b: 2, nombre: 'Ciencias políticas', meses: 'Feb', temas: ['Estados y gobiernos', 'Democracia', 'Partidos políticos', 'Sistema político mexicano'] },
            { b: 3, nombre: 'Geopolítica', meses: 'Mar', temas: ['Potencias mundiales', 'BRICS', 'Organismos internacionales', 'México en el mundo'] },
            { b: 4, nombre: 'Sociología', meses: 'Abr', temas: ['Clases sociales', 'Cultura y subcultura', 'Movimientos sociales', 'Redes sociales y sociedad'] },
            { b: 5, nombre: 'Filosofía del derecho', meses: 'May-Jun', temas: ['Derecho natural vs positivo', 'Constitución Mexicana', 'Derechos fundamentales', 'Estado de derecho'] },
        ],
        ingles: [
            { b: 1, nombre: 'Academic Writing', meses: 'Ene', temas: ['Essay structure', 'Thesis development', 'Evidence and analysis', 'Academic vocabulary'] },
            { b: 2, nombre: 'Literature in English', meses: 'Feb', temas: ['Shakespeare basics', '19th century novels', '20th century short stories', 'Poetry analysis'] },
            { b: 3, nombre: 'Business English', meses: 'Mar', temas: ['Business vocabulary', 'Writing emails', 'Meetings and negotiations', 'Presentations'] },
            { b: 4, nombre: 'Media English', meses: 'Abr', temas: ['News analysis', 'Debate and discussion', 'Critical reading', 'Social media English'] },
            { b: 5, nombre: 'English for Higher Education', memes: 'May-Jun', temas: ['University vocabulary', 'Academic reading advanced', 'Research in English', 'Personal statement'] },
        ],
        filosofia: [
            { b: 1, nombre: 'Filosofía política', meses: 'Ene', temas: ['Contrato social (Rousseau)', 'Estado: Hobbes y Locke', 'Democracia liberal', 'Anarquismo y socialismo'] },
            { b: 2, nombre: 'Estética', meses: 'Feb', temas: ['¿Qué es el arte?', 'Lo bello y lo sublime', 'Arte y política', 'Estética contemporánea'] },
            { b: 3, nombre: 'Metafísica y ontología', meses: 'Mar', temas: ['¿Qué es el ser?', 'Realismo vs idealismo', 'Tiempo y espacio', 'Libertad vs determinismo'] },
            { b: 4, nombre: 'Filosofía de la ciencia', meses: 'Abr', temas: ['Falsabilidad (Popper)', 'Paradigmas (Kuhn)', 'Inteligencia artificial ética', 'Transhumanismo'] },
            { b: 5, nombre: 'Proyecto filosófico final', meses: 'May-Jun', temas: ['Elegir problema filosófico', 'Investigación', 'Defensa de tesis', 'Diálogo socrático'] },
        ],
    },
    'bachillerato-5': {
        matematicas: [
            { b: 1, nombre: 'Estadística inferencial', meses: 'Ago', temas: ['Distribuciones de probabilidad', 'Teorema del límite central', 'Intervalos de confianza', 'Prueba de hipótesis básica'] },
            { b: 2, nombre: 'Álgebra lineal I', meses: 'Sep', temas: ['Matrices', 'Operaciones con matrices', 'Determinantes', 'Sistema de ecuaciones matricial'] },
            { b: 3, nombre: 'Álgebra lineal II', meses: 'Oct', temas: ['Vectores en R²/R³', 'Producto punto y cruz', 'Transformaciones lineales', 'Eigenvalores básicos'] },
            { b: 4, nombre: 'Matemáticas financieras', meses: 'Nov', temas: ['Interés simple y compuesto', 'Anualidades', 'Amortización', 'VPN y TIR básico'] },
            { b: 5, nombre: 'Preparación EXANI', meses: 'Dic-Ene', temas: ['Razonamiento matemático', 'Problemas de velocidad y porcentajes', 'Series numéricas', 'Geometría EXANI'] },
        ],
        espanol: [
            { b: 1, nombre: 'Expresión escrita avanzada', meses: 'Ago', temas: ['Redacción académica avanzada', 'Tesis doctoral: estructura', 'Peer review', 'Estilo Chicago'] },
            { b: 2, nombre: 'Oratoria y retórica', meses: 'Sep', temas: ['Discurso político', 'Técnicas de persuasión', 'Debate académico', 'TED Talk: estructura'] },
            { b: 3, nombre: 'Literatura comparada', meses: 'Oct', temas: ['Comparar obras literarias', 'Motivos y arquetipos', 'Literatura y cine', 'Intertextualidad'] },
            { b: 4, nombre: 'Semiótica avanzada', meses: 'Nov', temas: ['Mito y símbolo', 'Lenguaje publicitario', 'Análisis de medios', 'Cultura popular'] },
            { b: 5, nombre: 'Proyecto integrador', meses: 'Dic-Ene', temas: ['Investigación interdisciplinar', 'Redacción de tesis corta', 'Presentación oral formal', 'Publicación'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Bioquímica', meses: 'Ago', temas: ['Carbohidratos', 'Lípidos', 'Proteínas y enzimas', 'Ácidos nucleicos'] },
            { b: 2, nombre: 'Biotecnología', meses: 'Sep', temas: ['Ingeniería genética', 'CRISPR básico', 'Alimentos transgénicos', 'Ética en biotecnología'] },
            { b: 3, nombre: 'Nanotecnología', meses: 'Oct', temas: ['¿Qué es la nanotecnología?', 'Materiales nanoestructurados', 'Aplicaciones médicas', 'Retos y ética'] },
            { b: 4, nombre: 'Energías renovables', meses: 'Nov', temas: ['Energía solar', 'Eólica', 'Hidrógeno verde', 'Transición energética México'] },
            { b: 5, nombre: 'Proyecto STEM', meses: 'Dic-Ene', temas: ['Método científico aplicado', 'Experimento propio', 'Informe científico', 'Presentación tipo congreso'] },
        ],
        ingles: [
            { b: 1, nombre: 'TOEFL Preparation I', meses: 'Ago', temas: ['TOEFL Reading strategies', 'Integrated writing task', 'Note-taking for lectures', 'Vocabulary: academic wordlist'] },
            { b: 2, nombre: 'TOEFL Preparation II', meses: 'Sep', temas: ['Speaking task types', 'Independent essay', 'TOEFL Listening', 'Test-taking strategies'] },
            { b: 3, nombre: 'English for Science', meses: 'Oct', temas: ['Scientific vocabulary', 'Reading research papers', 'Lab reports in English', 'Graphs and figures description'] },
            { b: 4, nombre: 'English for Technology', meses: 'Nov', temas: ['Tech vocabulary', 'Programming concepts in English', 'Tech news reading', 'Presenting tech projects'] },
            { b: 5, nombre: 'Global Issues in English', meses: 'Dic-Ene', temas: ['Climate change vocabulary', 'Human rights English', 'Globalization debate', 'UN model simulation'] },
        ],
        filosofia: [
            { b: 1, nombre: 'Filosofía latinoamericana', meses: 'Ago', temas: ['Pensamiento indígena', 'Positivismo en México', 'Filosofía de la liberación', 'Pensamiento decolonial'] },
            { b: 2, nombre: 'Filosofía de la mente', meses: 'Sep', temas: ['¿Qué es la conciencia?', 'Inteligencia artificial y mente', 'Problema mente-cuerpo', 'Neurociencia y libre albedrío'] },
            { b: 3, nombre: 'Bioética', meses: 'Oct', temas: ['Ética médica', 'Aborto: debate filosófico', 'Eutanasia', 'Derechos de los animales'] },
            { b: 4, nombre: 'Filosofía del lenguaje', meses: 'Nov', temas: ['Lenguaje y realidad', 'Juegos de lenguaje (Wittgenstein)', 'Metáfora y verdad', 'Hechos vs interpretaciones'] },
            { b: 5, nombre: 'Síntesis filosófica', meses: 'Dic-Ene', temas: ['Mi sistema filosófico', 'Diálogo con autores', 'Ensayo final', 'Defensa oral'] },
        ],
    },
    'bachillerato-6': {
        matematicas: [
            { b: 1, nombre: 'Repaso integral universitario', meses: 'Feb', temas: ['Cálculo diferencial e integral', 'Álgebra lineal', 'Probabilidad y estadística', 'Geometría analítica'] },
            { b: 2, nombre: 'EXANI-II Matemáticas', meses: 'Mar', temas: ['Habilidad matemática', 'Álgebra', 'Geometría y trigonometría', 'Cálculo básico EXANI'] },
            { b: 3, nombre: 'Matemáticas actuariales', meses: 'Abr', temas: ['Seguros y riesgo', 'Valor del dinero en el tiempo', 'Modelos probabilísticos', 'Tablas actuariales'] },
            { b: 4, nombre: 'Introducción a la economía', meses: 'May', temas: ['Microeconomía', 'Macroeconomía', 'PIB e inflación', 'Política económica México'] },
            { b: 5, nombre: 'Proyecto matemático integrador', meses: 'Jun', temas: ['Modelado matemático', 'Simulación', 'Presentación a expertos', 'Publicación o competencia'] },
        ],
        espanol: [
            { b: 1, nombre: 'Escritura creativa avanzada', meses: 'Feb', temas: ['Novela corta', 'Guión cinematográfico', 'Escritura colaborativa', 'Edición profesional'] },
            { b: 2, nombre: 'EXANI-II Español', meses: 'Mar', temas: ['Comprensión lectora EXANI', 'Razonamiento verbal', 'Ortografía avanzada', 'Redacción evaluada'] },
            { b: 3, nombre: 'Literatura y cine', meses: 'Abr', temas: ['Adaptaciones cinematográficas', 'Lenguaje fílmico', 'Comparar libro y película', 'Crítica de cine'] },
            { b: 4, nombre: 'Comunicación profesional', meses: 'May', temas: ['CV y carta de presentación', 'Entrevista de trabajo', 'Comunicación empresarial', 'LinkedIn y marca personal'] },
            { b: 5, nombre: 'Proyecto literario final', meses: 'Jun', temas: ['Obra propia completa', 'Peer workshop', 'Edición final', 'Presentación pública'] },
        ],
        ciencias: [
            { b: 1, nombre: 'Medicina y salud pública', meses: 'Feb', temas: ['Sistema de salud México (IMSS/ISSSTE)', 'Enfermedades crónicas', 'Salud mental', 'Epidemiología básica'] },
            { b: 2, nombre: 'Ingeniería y tecnología', meses: 'Mar', temas: ['Ramas de la ingeniería', 'Proceso de diseño', 'Manufactura', 'Sustentabilidad en ingeniería'] },
            { b: 3, nombre: 'Medio ambiente y sustentabilidad', meses: 'Abr', temas: ['Desarrollo sostenible', 'Agenda 2030 ONU', 'Economía circular', 'Proyecto ambiental local'] },
            { b: 4, nombre: 'Ciencias de datos básico', meses: 'May', temas: ['Big Data', 'Machine learning (concepto)', 'Visualización de datos', 'Aplicaciones en México'] },
            { b: 5, nombre: 'Proyecto científico senior', meses: 'Jun', temas: ['Investigación original', 'Metodología', 'Informe final', 'Feria de ciencias nivel bachillerato'] },
        ],
        historia: [
            { b: 1, nombre: 'Análisis político actual', meses: 'Feb', temas: ['Estructura del gobierno mexicano', 'Poderes de la Unión', 'Proceso electoral', 'Participación ciudadana'] },
            { b: 2, nombre: 'Economía global', meses: 'Mar', temas: ['Mercado de valores', 'Crisis económicas globales', 'Criptomonedas', 'Economía digital'] },
            { b: 3, nombre: 'Geopolítica siglo XXI', meses: 'Abr', temas: ['EEUU-China', 'Europa y OTAN', 'Rusia y Ucrania', 'América Latina: panorama actual'] },
            { b: 4, nombre: 'Derechos humanos avanzado', meses: 'May', temas: ['Sistema interamericano', 'Corte Penal Internacional', 'Crímenes de guerra', 'Defensa de DDHH en México'] },
            { b: 5, nombre: 'Proyecto social integrador', meses: 'Jun', temas: ['Diagnóstico comunitario', 'Propuesta de mejora', 'Presentación a autoridades', 'Impacto social'] },
        ],
        ingles: [
            { b: 1, nombre: 'University Entrance English', meses: 'Feb', temas: ['University application essays', 'Scholarship essays', 'Interview in English', 'Campus life vocabulary'] },
            { b: 2, nombre: 'Professional English', meses: 'Mar', temas: ['Job market vocabulary', 'LinkedIn in English', 'Cover letter', 'Virtual interview'] },
            { b: 3, nombre: 'English Capstone Reading', meses: 'Abr', temas: ['Novel analysis', 'Article critique', 'Cross-cultural texts', 'Synthesis writing'] },
            { b: 4, nombre: 'English Capstone Speaking', meses: 'May', temas: ['Symposium presentation', 'Debate final', 'Storytelling', 'Reflective portfolio'] },
            { b: 5, nombre: 'English Exit Exam', meses: 'Jun', temas: ['Full mock exam', 'Portfolio review', 'Oral examination', 'Certificate preparation'] },
        ],
        filosofia: [
            { b: 1, nombre: 'Filosofía y vida', meses: 'Feb', temas: ['¿Cómo vivir bien?', 'Estoicismo práctico', 'Mindfulness y filosofía', 'Felicidad: perspectivas filosóficas'] },
            { b: 2, nombre: 'Filosofía y tecnología', meses: 'Mar', temas: ['Ética de la IA', 'Privacidad digital', 'Singularidad tecnológica', '¿Las máquinas pueden pensar?'] },
            { b: 3, nombre: 'Filosofía política aplicada', meses: 'Abr', temas: ['Democracia directa', 'Desobediencia civil', 'Movimientos contemporáneos', 'Filosofía y activismo'] },
            { b: 4, nombre: 'Mi proyecto de vida', meses: 'May', temas: ['Valores personales', 'Proyecto de vida filosófico', 'Vocación y sentido', 'Filosofía como camino'] },
            { b: 5, nombre: 'Examen recepcional filosófico', meses: 'Jun', temas: ['Síntesis de 3 años', 'Defensa de tesis filosófica', 'Diálogo con el jurado', 'Graduación reflexiva'] },
        ],
    },
};

// ══════════════════════════════════════════════════════
// BANCO DE EJERCICIOS POR MATERIA/NIVEL
// ══════════════════════════════════════════════════════
function getEjercicios(materia, gradoSlug, temas) {
    const isBachillerato = gradoSlug.startsWith('bachillerato');
    const nivel = isBachillerato ? 'bachillerato' : 'secundaria';

    const bancos = {
        matematicas: [
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el resultado de 3² + 4²?', opciones: ['25', '20', '15', '30'], respuesta: '25', explicacion: '3²=9 y 4²=16, sumados dan 25. (Teorema de Pitágoras: 3-4-5).' },
            { tipo: 'fill_blank', pregunta: 'La derivada de f(x) = x³ es f\'(x) = ___', respuesta: '3x²', explicacion: 'Regla de la potencia: d/dx(xⁿ) = n·xⁿ⁻¹. Aquí n=3, entonces 3x².' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántas soluciones tiene x² + 4 = 0 en los reales?', opciones: ['0', '1', '2', 'Infinitas'], respuesta: '0', explicacion: 'x²= -4 no tiene solución real porque un cuadrado nunca es negativo en ℝ.' },
            { tipo: 'true_false', pregunta: 'log₁₀(100) = 2', respuesta: 'true', explicacion: 'log₁₀(100) = 2 porque 10² = 100.' },
            { tipo: 'fill_blank', pregunta: 'La pendiente de la recta y = 3x + 5 es ___', respuesta: '3', explicacion: 'En la forma y = mx + b, m es la pendiente. Aquí m = 3.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el factorial de 5 (5!)?', opciones: ['25', '60', '120', '720'], respuesta: '120', explicacion: '5! = 5×4×3×2×1 = 120.' },
        ],
        espanol: [
            { tipo: 'multiple_choice', pregunta: '¿Qué es un sinónimo?', opciones: ['Palabra de significado opuesto', 'Palabra de significado similar', 'Figura retórica', 'Tipo de oración'], respuesta: 'Palabra de significado similar', explicacion: 'Sinónimos son palabras con significado igual o muy parecido. Ej: alegre/contento.' },
            { tipo: 'fill_blank', pregunta: 'En el verso "rojo como el fuego", la comparación es una ___', respuesta: 'símil', explicacion: 'El símil compara usando "como": "rojo como el fuego".' },
            { tipo: 'true_false', pregunta: 'El sujeto siempre debe aparecer explícito en la oración', respuesta: 'false', explicacion: 'Existen oraciones con sujeto tácito (omitido). Ej: "Corrí mucho" — el sujeto "yo" está implícito.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál de estos es un texto argumentativo?', opciones: ['Un cuento', 'Una receta', 'Un ensayo de opinión', 'Un manual de instrucciones'], respuesta: 'Un ensayo de opinión', explicacion: 'El ensayo argumentativo defiende una tesis con argumentos y evidencias.' },
            { tipo: 'fill_blank', pregunta: 'Juan Rulfo escribió la novela "___"', respuesta: 'Pedro Páramo', explicacion: '"Pedro Páramo" (1955) de Juan Rulfo es la obra cumbre de la literatura mexicana del siglo XX.' },
        ],
        ciencias: [
            { tipo: 'multiple_choice', pregunta: '¿Cuál es la fórmula del agua?', opciones: ['CO₂', 'H₂O', 'O₂', 'NaCl'], respuesta: 'H₂O', explicacion: 'El agua tiene 2 átomos de Hidrógeno y 1 de Oxígeno: H₂O.' },
            { tipo: 'true_false', pregunta: 'La velocidad de la luz en el vacío es aproximadamente 300,000 km/s', respuesta: 'true', explicacion: 'c ≈ 299,792 km/s. Se redondea a 300,000 km/s.' },
            { tipo: 'fill_blank', pregunta: 'E = mc² es la ecuación de ___ de Einstein', respuesta: 'relatividad', explicacion: 'E = mc² es la fórmula de equivalencia masa-energía de la Teoría de la Relatividad Especial (1905).' },
            { tipo: 'multiple_choice', pregunta: '¿Cuántos cromosomas tiene una célula humana normal?', opciones: ['23', '46', '48', '92'], respuesta: '46', explicacion: 'Las células humanas diploides tienen 46 cromosomas (23 pares). Solo los gametos tienen 23.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué ley relaciona voltaje, corriente y resistencia?', opciones: ['Ley de Newton', 'Ley de Ohm', 'Ley de Faraday', 'Ley de Avogadro'], respuesta: 'Ley de Ohm', explicacion: 'Ley de Ohm: V = I × R (Voltaje = Corriente × Resistencia).' },
        ],
        historia: [
            { tipo: 'multiple_choice', pregunta: '¿En qué año comenzó la Revolución Mexicana?', opciones: ['1900', '1905', '1910', '1921'], respuesta: '1910', explicacion: 'La Revolución Mexicana inició el 20 de noviembre de 1910 con el Plan de San Luis.' },
            { tipo: 'fill_blank', pregunta: 'La Constitución Mexicana vigente data de ___', respuesta: '1917', explicacion: 'La Constitución de 1917 fue promulgada en Querétaro el 5 de febrero de 1917.' },
            { tipo: 'true_false', pregunta: 'La ONU fue fundada después de la Segunda Guerra Mundial', respuesta: 'true', explicacion: 'La ONU se fundó el 24 de octubre de 1945 para mantener la paz internacional tras la WWII.' },
            { tipo: 'multiple_choice', pregunta: '¿Quién fue el primer presidente de México?', opciones: ['Agustín de Iturbide', 'Guadalupe Victoria', 'Benito Juárez', 'Santa Anna'], respuesta: 'Guadalupe Victoria', explicacion: 'Guadalupe Victoria (1824-1829) fue el primer presidente de los Estados Unidos Mexicanos.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué evento detonó la Primera Guerra Mundial?', opciones: ['Caída del Muro de Berlín', 'Asesinato del Archiduque Francisco Fernando', 'Revolución Rusa', 'Tratado de Versalles'], respuesta: 'Asesinato del Archiduque Francisco Fernando', explicacion: 'El asesinato en Sarajevo (28 junio 1914) detonó la Primera Guerra Mundial.' },
        ],
        ingles: [
            { tipo: 'multiple_choice', pregunta: '"She ___ to school every day." (Present simple)', opciones: ['go', 'goes', 'going', 'gone'], respuesta: 'goes', explicacion: 'Third person singular (she/he/it) adds -s or -es. "She goes" ✓.' },
            { tipo: 'fill_blank', pregunta: '"I _____ (live) here for 5 years." (Present Perfect)', respuesta: 'have lived', explicacion: '"I have lived here for 5 years" uses Present Perfect for actions that started in the past and continue to present.' },
            { tipo: 'true_false', pregunta: '"Despite" is a conjunction that means "aunque" in Spanish', respuesta: 'true', explicacion: '"Despite" = "a pesar de" (preposition) / "although/even though" are conjunctions. Both express contrast.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué tipo de oración es: "If I had studied, I would have passed"?', opciones: ['Type 0', 'Type 1', 'Type 2', 'Type 3'], respuesta: 'Type 3', explicacion: 'Type 3 conditional uses "If + past perfect, would have + past participle". Hypothetical past.' },
            { tipo: 'fill_blank', pregunta: '"The book ___ written by Gabriel García Márquez." (Passive)', respuesta: 'was', explicacion: '"Was written" is past passive voice. Subject + was/were + past participle.' },
        ],
        tecnologia: [
            { tipo: 'multiple_choice', pregunta: '¿Qué lenguaje de programación es más usado en ciencia de datos?', opciones: ['Java', 'C++', 'Python', 'COBOL'], respuesta: 'Python', explicacion: 'Python es el lenguaje dominante en ciencia de datos, machine learning e inteligencia artificial.' },
            { tipo: 'fill_blank', pregunta: 'HTML significa HyperText Markup ___', respuesta: 'Language', explicacion: 'HTML = HyperText Markup Language. Es el lenguaje base de todas las páginas web.' },
            { tipo: 'true_false', pregunta: 'SQL se usa para consultar bases de datos', respuesta: 'true', explicacion: 'SQL (Structured Query Language) permite crear, consultar y modificar bases de datos relacionales.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué significa CPU?', opciones: ['Central Processing Unit', 'Computer Power Usage', 'Core Processing Utility', 'Central Power Unit'], respuesta: 'Central Processing Unit', explicacion: 'CPU = Central Processing Unit. Es el "cerebro" del computador que ejecuta instrucciones.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es el protocolo seguro de navegación web?', opciones: ['HTTP', 'FTP', 'HTTPS', 'SMTP'], respuesta: 'HTTPS', explicacion: 'HTTPS (HTTP Secure) cifra la comunicación entre el navegador y el servidor usando SSL/TLS.' },
        ],
        filosofia: [
            { tipo: 'multiple_choice', pregunta: '¿Quién dijo "Cogito, ergo sum" (Pienso, luego existo)?', opciones: ['Platón', 'Aristóteles', 'Descartes', 'Kant'], respuesta: 'Descartes', explicacion: 'René Descartes (1596-1650) escribió "Cogito, ergo sum" en el "Discurso del Método" (1637).' },
            { tipo: 'fill_blank', pregunta: 'El imperativo categórico de Kant dice: "Actúa solo según aquella máxima que puedas querer que sea una ___ universal"', respuesta: 'ley', explicacion: 'El imperativo categórico de Kant: actúa como si tu acción debiera ser una ley universal: ética deontológica.' },
            { tipo: 'true_false', pregunta: '"El fin justifica los medios" es una máxima de Maquiavelo', respuesta: 'true', explicacion: 'Aunque no es cita textual, resume el pensamiento de Maquiavelo en "El Príncipe" (1532): el poder político justifica cualquier medio.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué filósofo está asociado con el existencialismo?', opciones: ['Platón', 'Jean-Paul Sartre', 'Santo Tomás', 'Leibniz'], respuesta: 'Jean-Paul Sartre', explicacion: 'Sartre (1905-1980) es el mayor exponente del existencialismo: "la existencia precede a la esencia".' },
            { tipo: 'multiple_choice', pregunta: 'La falacia "Ad Hominem" consiste en...', opciones: ['Atacar el argumento', 'Atacar a la persona en vez del argumento', 'Apelar a la autoridad', 'Generalizar casos aislados'], respuesta: 'Atacar a la persona en vez del argumento', explicacion: 'Ad hominem = ataque personal que ignora el argumento. Es una falacia porque no refuta la idea.' },
        ],
    };

    return bancos[materia] || bancos.matematicas;
}

// ══════════════════════════════════════════════════════
// GENERAR BLOQUE JSON
// ══════════════════════════════════════════════════════
function generarBloque(grado, materia, b, nombre, meses, temas) {
    const dir = path.join(BASE, grado, materia);
    const archivo = path.join(dir, `bloque-${b}.json`);

    if (fs.existsSync(archivo)) {
        console.log(`⏭️  Existe: ${grado}/${materia}/bloque-${b}`);
        return 0;
    }

    const ejs = getEjercicios(materia, grado, temas);
    const mid = Math.ceil(ejs.length / 2);
    const pfx = `${grado}-${materia}-b${b}`;
    let c = 1;

    const fmt = (e, nivel) => ({
        id: `${pfx}-${String(c++).padStart(3, '0')}`,
        tema: temas[c % temas.length] || temas[0],
        tipo: e.tipo,
        nivel,
        pregunta: e.pregunta,
        ...(e.opciones ? { opciones: e.opciones } : {}),
        respuestaCorrecta: e.respuesta,
        explicacion: e.explicacion,
    });

    const v1 = ejs.slice(0, mid).map(e => fmt(e, 'v1'));
    const v2 = ejs.slice(mid).map(e => fmt(e, 'v2'));

    const data = {
        grado, materia, bloque: b, nombre, meses, temas,
        totalEjercicios: v1.length + v2.length,
        ejercicios: { v1, v2, preview: [...v1.slice(0, 2), ...v2.slice(0, 1)] },
        generado: new Date().toISOString(),
        version: '3.0',
    };

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));
    console.log(`✅ ${grado}/${materia}/bloque-${b} — ${data.totalEjercicios} ejs`);
    return data.totalEjercicios;
}

// ══════════════════════════════════════════════════════
// EJECUTAR TODO
// ══════════════════════════════════════════════════════
let total = 0;

// 1. Tecnología Secundaria 1-3
console.log('\n🔧 TECNOLOGÍA SECUNDARIA');
Object.entries(TECNOLOGIA_SEC).forEach(([grado, bloques]) => {
    bloques.forEach(({ b, nombre, meses, temas }) => {
        total += generarBloque(grado, 'tecnologia', b, nombre, meses, temas);
    });
});

// 2. Bachillerato semestres 1-6
console.log('\n🎓 BACHILLERATO (6 semestres × 6 materias)');
Object.entries(BACHILLERATO).forEach(([grado, materias]) => {
    Object.entries(materias).forEach(([materia, bloques]) => {
        bloques.forEach(({ b, nombre, meses, temas }) => {
            total += generarBloque(grado, materia, b, nombre, meses, temas);
        });
    });
});

console.log(`\n🎉 COMPLETADO: ${total} ejercicios nuevos`);

// Conteo final
let grandTotal = 0;
const resumen = {};
fs.readdirSync(BASE).forEach(g => {
    let gt = 0;
    const gDir = path.join(BASE, g);
    try {
        fs.readdirSync(gDir).forEach(m => {
            try {
                fs.readdirSync(path.join(gDir, m)).filter(f => f.endsWith('.json') && f !== 'indice.json').forEach(f => {
                    try { gt += JSON.parse(fs.readFileSync(path.join(gDir, m, f))).totalEjercicios || 0; } catch { }
                });
            } catch { }
        });
    } catch { }
    resumen[g] = gt;
    grandTotal += gt;
});

console.log('\n📊 EJERCICIOS POR GRADO:');
Object.entries(resumen).forEach(([g, n]) => console.log(`  ${g}: ${n}`));
console.log(`\n🏆 TOTAL PLATAFORMA: ${grandTotal} ejercicios`);
