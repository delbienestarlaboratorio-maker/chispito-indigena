// Base de datos de contenido "masticado" para papás y maestros
// Primaria 3° — Ciclo escolar 2025-2026 SEP México

import type { GradoContenido, MateriaContenido } from "./content-primaria";

const MATEMATICAS_P3: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Multiplicación y tablas",
            meses: "Agosto – Septiembre",
            enClase: [
                "Tablas de multiplicar del 2 al 9",
                "Propiedad conmutativa: 4×3 = 3×4",
                "Multiplicación como suma repetida",
                "Solución de problemas con multiplicación",
                "Números hasta 1,000",
            ],
            guiaPapa: {
                intro: "En 3° el gran reto son las tablas de multiplicar — si las domina aquí, todo lo demás será más fácil.",
                comoExplicar: [
                    "Las tablas no son para memorizar de golpe: aprende primero la del 2 y el 5 (ya las vio en 2°), luego la del 10, luego la del 4.",
                    "Practica una tabla diferente cada semana. Solo 7 días para cada una.",
                    "Usa el patrón: la tabla del 9 siempre suma 9 (1+8=9, 2+7=9, 3+6=9...)",
                    "Di las tablas en voz alta mientras lo llevas a la escuela: '3×1=3, 3×2=6...' Son solo 3 minutos.",
                    "El truco de los dedos del 9: dobla el dedo del número por el que multiplicas. Los de la izquierda son decenas, los de la derecha son unidades.",
                ],
                truco: "La tabla del 9 con los dedos: extiende las 10 manos. Para 9×3, dobla el tercer dedo. Tienes 2 dedos a la izquierda (= 2 decenas = 20) y 7 a la derecha (= 7 unidades). Resultado: 27.",
                error_comun: "Mezclar 6×7 con 7×6 creyendo que son diferentes. Recuérdale: la propiedad conmutativa dice que el orden de los factores no cambia el producto.",
                actividad_casa: "El bingo de las tablas: en una hoja escribe 9 resultados. Tú dices operaciones (4×6, 3×8...) y si tiene el resultado, lo tacha. El primero en tachar 3 en línea gana.",
            },
            guiaMaestro: {
                objetivo: "El alumno memoriza y aplica las tablas de multiplicar del 2 al 9 en situaciones problemáticas.",
                competencia: "Sentido numérico — Multiplicación y sus propiedades — SEP Plan 2022",
            },
            keywords: ["tablas de multiplicar tercero primaria", "multiplicacion 3er grado SEP", "tabla del 9 trucos primaria"],
        },
        {
            bloque: 2,
            nombre: "División exacta",
            meses: "Octubre – Noviembre",
            enClase: [
                "División como repartición equitativa",
                "División como operación inversa de la multiplicación",
                "División exacta (sin residuo)",
                "Términos de la división: dividendo, divisor, cociente",
                "Resolución de problemas",
            ],
            guiaPapa: {
                intro: "Dividir es simplemente repartir partes iguales — tu hijo ya lo hace cuando parte un pastel.",
                comoExplicar: [
                    "Usa 12 frijoles: 'Vamos a repartirlos en 3 grupos iguales. ¿Cuántos le toca a cada grupo?' (4)",
                    "Conecta con la multiplicación: si 3×4=12, entonces 12÷3=4. Son operaciones inversas.",
                    "'Dividendo' (el total), 'divisor' (cuántos grupos), 'cociente' (cuánto toca a cada uno).",
                    "Practica con la vida real: '¿Cómo repartimos estas 18 galletas entre 6 personas?'",
                ],
                truco: "División = multiplicación al revés. Si le preguntas 15÷3, dile: '¿Cuántas veces cabe el 3 en el 15?' Que piense en su tabla del 3: 3,6,9,12,15 → ¡5 veces!",
                error_comun: "Confundir dividendo con divisor. El dividendo es el número más grande (lo que dividimos). El divisor es por cuánto lo dividimos.",
                actividad_casa: "El repartidor: cuando compres algo para varios de la familia, que él calcule cuánto le toca a cada quien. Frutas, galletas, dinero — situaciones reales.",
            },
            guiaMaestro: {
                objetivo: "El alumno comprende y realiza divisiones exactas relacionándolas con la multiplicación.",
                competencia: "Sentido numérico — División exacta — SEP Plan 2022",
            },
            keywords: ["division tercer grado primaria", "division exacta 3er grado SEP", "aprender dividir tercero primaria"],
        },
        {
            bloque: 3,
            nombre: "Fracciones simples",
            meses: "Diciembre – Enero",
            enClase: [
                "Qué es una fracción: partes iguales del entero",
                "Numerador y denominador",
                "Fracciones equivalentes (1/2 = 2/4)",
                "Comparar fracciones",
                "Fracciones en la recta numérica",
            ],
            guiaPapa: {
                intro: "Las fracciones son la parte del programa que más miedo da, pero si usas comida real, tu hijo lo entenderá perfectamente.",
                comoExplicar: [
                    "Parte una naranja: '¿En cuántas partes la dividimos? En 4. ¿Cuántas tomamos? 1. Eso es 1/4.'",
                    "Numerador = cuántas partes tomamos (arriba). Denominador = en cuántas partes dividimos el todo (abajo).",
                    "Fracciones equivalentes: medio vaso = 2 cuartos de vaso. Misma cantidad, distintos nombres.",
                    "Comparar: '¿Quieres 1/2 de pizza o 1/4?' Siempre 1/2 — denominador más chico = parte más grande.",
                ],
                truco: "El denominador es 'cuántas partes tiene el pastel'. El numerador es 'cuántas te comiste'. 3/8 = te comiste 3 de las 8 partes. Siempre imagina un pastel.",
                error_comun: "Creer que 1/4 > 1/2 porque 4 > 2. ¡Al revés! Cuanto más grande el denominador, más pequeña la parte. Un pastel partido en 8 tiene rebanadas más chicas que uno partido en 4.",
                actividad_casa: "La pizzería de fracciones: dibuja un círculo (pizza). Pártelo en distintas fracciones y pídele que coloree la fracción que le dices: '3/8 de la pizza, por favor.'",
            },
            guiaMaestro: {
                objetivo: "El alumno comprende el concepto de fracción, identifica numerador y denominador y compara fracciones simples.",
                competencia: "Sentido numérico — Fracciones — SEP Plan 2022",
            },
            keywords: ["fracciones tercer grado primaria", "numerador denominador 3er grado", "fracciones equivalentes primaria SEP"],
        },
        {
            bloque: 4,
            nombre: "Geometría: perímetro y área",
            meses: "Febrero – Marzo",
            enClase: [
                "El perímetro: suma de todos los lados",
                "El área: superficie que ocupa una figura",
                "Área del rectángulo: largo × ancho",
                "Ángulos: recto, agudo, obtuso",
                "Cuerpos geométricos: cubo, esfera, cilindro, cono",
            ],
            guiaPapa: {
                intro: "Perímetro y área son conceptos que usan arquitectos, carpinteros y jardineros — ¡son súper prácticos!",
                comoExplicar: [
                    "Perímetro: mide los 4 lados de su cuaderno con regla y súmalos. Eso es el perímetro.",
                    "Área: imagina que vas a poner mosaicos en el cuarto. ¿Cuántos cuadros de 1m necesitas? Eso es el área.",
                    "Área del rectángulo: largo × ancho. Una habitación de 4m × 3m tiene 12m² de área.",
                    "Ángulo recto = esquina de cuaderno (90°). Agudo = más cerrado. Obtuso = más abierto.",
                ],
                truco: "Perímetro es el 'cerco' (rodeas la figura caminando). Área es el 'relleno' (cuántos cuadros caben adentro). Dos conceptos, dos imágenes distintas.",
                error_comun: "Confundir perímetro con área. Perímetro es la orilla (cm o m), área es la superficie (cm² o m²). Si hay un exponente 2, es área.",
                actividad_casa: "El arquitecto: que mida el largo y ancho de su cuarto y calcule el área. '¿Cuántos metros cuadrados tiene tu habitación?' Luego que compare con la sala.",
            },
            guiaMaestro: {
                objetivo: "El alumno calcula el perímetro de polígonos y el área de rectángulos e identifica tipos de ángulos.",
                competencia: "Forma, espacio y medida — SEP Plan 2022",
            },
            keywords: ["perimetro area tercer grado primaria", "geometria 3er grado SEP", "angulos primaria tercer grado Mexico"],
        },
        {
            bloque: 5,
            nombre: "Estadística básica y resolución de problemas",
            meses: "Abril – Junio",
            enClase: [
                "Recopilación y organización de datos",
                "Gráficas de barras",
                "La moda, la mediana y el promedio (introducción)",
                "Resolución de problemas de varios pasos",
                "Estimación y redondeo",
            ],
            guiaPapa: {
                intro: "Leer gráficas y sacar promedios son habilidades que tu hijo usará toda la vida en la escuela, trabajo y vida cotidiana.",
                comoExplicar: [
                    "Gráfica de barras: hagan una con los cumpleaños del salón (cada mes = una barra). '¿Cuál mes tiene más?'",
                    "Promedio: suman las calificaciones del bimestre y las dividen entre el número de materias. Así calculan su promedio.",
                    "La moda es el dato que más se repite. La mediana es el del medio cuando los ordenas.",
                    "Redondeo: el 47 se va al 50. El 42 se queda en 40. Si el dígito es ≥5, sube; si es <5, baja.",
                ],
                truco: "El promedio es la 'justicia matemática': si 5 amigos tienen 2, 3, 4, 5 y 6 dulces, el promedio (4) es lo que les tocaría si los repartieran igual. Suma y divide.",
                error_comun: "Sobre el redondeo: 'El 5 siempre sube' — es la regla estándar y hay que memorizarla. 35 redondeado a decenas = 40 (el 5 sube).",
                actividad_casa: "El promedio de la familia: que cada familiar registre cuántos vasos de agua tomó hoy. Luego que calcule el promedio de la familia. ¿Quién tomó más? ¿Menos?",
            },
            guiaMaestro: {
                objetivo: "El alumno organiza datos en gráficas de barras y calcula estadísticos básicos (moda, mediana, promedio).",
                competencia: "Análisis de datos — SEP Plan 2022",
            },
            keywords: ["estadistica tercer grado primaria", "graficas de barras 3er grado SEP", "promedio mediana moda primaria Mexico"],
        },
    ],
};

const ESPANOL_P3: MateriaContenido = {
    materia: "espanol",
    nombre: "Español",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "Lectura comprensiva avanzada",
            meses: "Agosto – Septiembre",
            enClase: [
                "Tipos de lectura: informativa, literaria, instructiva",
                "Idea principal e ideas secundarias",
                "Inferencias: lo que el texto no dice pero implica",
                "Vocabulario por contexto",
                "Resumen y síntesis",
            ],
            guiaPapa: {
                intro: "En 3° ya no se trata solo de leer — se trata de entender, analizar e inferir. Este es el salto más grande del ciclo.",
                comoExplicar: [
                    "Después de leer 2 páginas, pregunta: '¿Cuál es la idea más importante de lo que leímos?' Si no puede, relean y subrayan juntos.",
                    "Inferencia: 'El texto dice que salió con paraguas. ¿Qué nos dice eso sobre el clima?' Respuesta lógica = lluvia.",
                    "Vocabulario: Busca la palabra perseverar en el diccionario. Leamos la oracion completa... Que crees que significa por el contexto?",
                    "Resumen regla de oro: una sola oración por párrafo. Si el texto tiene 4 párrafos, el resumen tiene 4 oraciones.",
                ],
                truco: "Las 3 preguntas mágicas de la comprensión: ¿Quién? (personajes o tema), ¿Qué? (idea principal), ¿Para qué? (propósito del texto). Aplican a cualquier lectura.",
                error_comun: "Confundir resumen con copia. El resumen usa tus propias palabras. Si está copiando del texto, detente: cierra el libro y que diga con sus palabras de qué trató.",
                actividad_casa: "El reportero: después de leer un artículo o cuento, que haga como si fuera reportero y te contara la noticia en 3 oraciones. '¿Qué pasó? ¿Quién estaba? ¿Qué significa?'",
            },
            guiaMaestro: {
                objetivo: "El alumno distingue tipos de texto, identifica ideas principales y realiza inferencias básicas.",
                competencia: "Comprensión lectora — Lectura crítica — SEP Plan 2022",
            },
            keywords: ["comprension lectora tercer grado", "lectura critica 3er grado SEP", "inferencias primaria Mexico"],
        },
        {
            bloque: 2,
            nombre: "Ortografía y puntuación",
            meses: "Octubre – Noviembre",
            enClase: [
                "Reglas de acentuación: agudas, graves, esdrújulas",
                "Uso de G y J",
                "Uso de C, S y Z",
                "La coma en listas y oraciones",
                "Los dos puntos y punto y coma",
            ],
            guiaPapa: {
                intro: "Las reglas de acentuación son la parte que más cuesta de la ortografía — pero tienen una lógica perfecta que ayuda a aprenderlas.",
                comoExplicar: [
                    "Tilde es el acento escrito. Acento es la sílaba que suena más fuerte. Toda palabra tiene acento pero no todas tienen tilde.",
                    "Agudas: el acento está en la ÚLTIMA sílaba. Llevan tilde si terminan en n, s o vocal. Ca-FÉ ✓, a-MOR (no tilde).",
                    "Graves: acento en la PENÚLTIMA. Llevan tilde si NO terminan en n, s o vocal. ÁR-bol ✓, CA-sa (no tilde).",
                    "Esdrújulas: acento en la ANTEPENÚLTIMA. SIEMPRE llevan tilde. MÚ-si-ca, MÉ-di-co.",
                ],
                truco: "Las esdrújulas SIEMPRE llevan tilde, sin excepción. Si un alumno duda si una palabra lleva tilde, que cuente las sílabas y marque cuál suena más fuerte. Si es la tercera empezando del final, siempre lleva tilde.",
                error_comun: "Escribir 'musica' sin tilde o 'árbol' sin tilde. Las esdrújulas llevan TILDE SIEMPRE. Las graves sin n/s/vocal también. Haz una lista de las 10 palabras que más usa sin tilde.",
                actividad_casa: "El cazadorés de tildes: coge un periódico o revista. Que busque 5 palabras agudas con tilde, 5 graves con tilde y 5 esdrújulas. Las copia y clasifica.",
            },
            guiaMaestro: {
                objetivo: "El alumno aplica las reglas de acentuación gráfica (palabras agudas, graves y esdrújulas) y usa correctamente signos de puntuación.",
                competencia: "Reflexión sobre el lenguaje — ortografía — SEP Plan 2022",
            },
            keywords: ["acentuacion tercer grado primaria", "agudas graves esdrujulas 3er grado SEP", "ortografia tercero primaria Mexico"],
        },
        {
            bloque: 3,
            nombre: "Producción de textos",
            meses: "Diciembre – Enero",
            enClase: [
                "El cuento: estructura y elementos literarios",
                "El texto argumentativo: dar razones",
                "Descripción detallada de personas y lugares",
                "Carta formal e informal",
                "El proceso de escritura: borrador, revisión, edición",
            ],
            guiaPapa: {
                intro: "Tu hijo aprenderá a escribir textos con propósito — convencer, narrar, describir — habilidades que usará en secundaria y más allá.",
                comoExplicar: [
                    "Para el cuento: '¿Quién es el personaje? ¿Cuál es su problema? ¿Cómo lo intenta resolver? ¿Qué pasa al final?' Cuatro preguntas, cuatro partes.",
                    "Argumento: 'Creo que debería existir recreo de 30 minutos PORQUE... y ADEMÁS... y FINALMENTE.' Conectores de argumento.",
                    "Carta formal: encabezado, saludo formal ('Estimado señor'), cuerpo, despedida formal ('Atentamente'), firma.",
                    "El borrador es sagrado: nadie escribe perfecto a la primera. Todos los escritores hacen borradores. Eso es normal.",
                ],
                truco: "El cuento de 5 párrafos: 1=presentación (quién y dónde), 2=problema, 3=intento de solución, 4=clímax (el punto de tensión), 5=desenlace. Uno por uno, sin saltarse ninguno.",
                error_comun: "Escribir el cuento sin conflicto: 'Había una niña que era feliz y punto'. Sin problema no hay cuento. Pregunta: '¿Qué le pasa al personaje? ¿Qué quiere y no puede tener?'",
                actividad_casa: "El intercambio de cartas: que le escriba una carta real a un familiar que no ve seguido. Que use el formato con encabezado, saludo, cuerpo y despedida. Y que la manden de verdad.",
            },
            guiaMaestro: {
                objetivo: "El alumno produce textos narrativos, descriptivos y argumentativos básicos aplicando el proceso de escritura.",
                competencia: "Producción escrita — SEP Plan 2022",
            },
            keywords: ["produccion de textos tercer grado", "cuento argumentativo 3er grado SEP", "carta formal tercero primaria Mexico"],
        },
        {
            bloque: 4,
            nombre: "Gramática y análisis oracional",
            meses: "Febrero – Marzo",
            enClase: [
                "Sujeto y predicado (profundización)",
                "El verbo: tiempo, persona y número",
                "Conjugación de verbos regulares",
                "Adverbios: modo, tiempo, lugar",
                "Sinónimos, antónimos y homónimos",
            ],
            guiaPapa: {
                intro: "La gramática parece árida pero es el 'manual de instrucciones' del idioma. Quien entiende gramática, escribe mejor.",
                comoExplicar: [
                    "Sujeto: quién hace la acción. Predicado: qué hace y todo lo demás. 'La niña / corrió por el parque.'",
                    "Verbo en tiempo: pasado (corrió), presente (corre), futuro (correrá). Que conjugue el mismo verbo en los 3 tiempos.",
                    "Adverbio: palabra que modifica al verbo. '¿Cómo corre? Rápido.' (adv. de modo). '¿Dónde? Aquí.' (lugar). '¿Cuándo? Ayer.' (tiempo).",
                    "Sinónimos = misma idea (feliz/contento). Antónimos = idea contraria (grande/pequeño). Homónimos = igual escritura, diferente significado (banco para sentarse / banco para dinero).",
                ],
                truco: "Para encontrar el sujeto: haz la pregunta '¿Quién + verbo?' A 'Los niños jugaron': ¿Quién jugó? Los niños. Ese es el sujeto. El resto es predicado.",
                error_comun: "Conjugar mal los verbos irregulares: 'yo sabo' en lugar de 'yo sé'. Los verbos irregulares hay que memorizarlos. Haz flashcards de los 10 más comunes: ser, tener, ir, hacer, decir...",
                actividad_casa: "El verbo del día: cada día elige un verbo. Toda la familia lo conjuga en los 3 tiempos durante la cena. 'Hoy toca: REÍR. Yo reí, yo río, yo reiré...'",
            },
            guiaMaestro: {
                objetivo: "El alumno analiza oraciones identificando sujeto, predicado, tiempos verbales y clases de palabras.",
                competencia: "Reflexión sobre el lenguaje — gramática — SEP Plan 2022",
            },
            keywords: ["gramatica tercer grado primaria", "sujeto predicado 3er grado SEP", "conjugacion verbos tercero primaria"],
        },
        {
            bloque: 5,
            nombre: "Literatura y comunicación oral",
            meses: "Abril – Junio",
            enClase: [
                "Género lírico: poesía, rima, verso",
                "Género narrativo: cuento, novela, fábula",
                "Figuras retóricas: metáfora y símil",
                "El debate escolar: argumentar y escuchar",
                "Presentación oral con apoyo visual",
            ],
            guiaPapa: {
                intro: "El final del año escolar consolida la expresión oral y el amor por la literatura — dos herramientas de vida.",
                comoExplicar: [
                    "Poesía: no tiene que rimar, pero sí tiene ritmo. Que lea un poema en voz alta marcando las pausas con gestos.",
                    "Metáfora: 'Tus ojos son estrellas' — no dice que SE PARECEN, dice que SON. Simil dice 'son COMO estrellas'.",
                    "Debate: que elija un tema (¿perros o gatos?) y defienda su postura con 3 razones. Sin ofender. Escuchar al contrario.",
                    "Presentación: esquema con 3 puntos clave, una imagen o dibujo de apoyo, y práctica frente al espejo.",
                ],
                truco: "La diferencia metáfora/símil es el 'como': con 'como' = símil ('rápido COMO el viento'). Sin 'como' = metáfora ('eres un torbellino'). Solo busca la palabra 'como'.",
                error_comun: "En el debate, hablar sin escuchar al otro. Enséñale que el buen debatiente primero repite el argumento del otro ('Lo que dices es X...') y luego responde. Eso se llama 'escucha activa'.",
                actividad_casa: "El festival de poesía en casa: que elija un poema favorito (o lo escriba) y lo recite en la cena con voz, gestos y emoción. Toda la familia aplaude y hace preguntas.",
            },
            guiaMaestro: {
                objetivo: "El alumno distingue géneros literarios, identifica figuras retóricas básicas y participa en debates y presentaciones orales.",
                competencia: "Literatura y expresión oral — SEP Plan 2022",
            },
            keywords: ["literatura tercer grado primaria", "poesia metafora simil 3er grado SEP", "debate primaria tercero Mexico"],
        },
    ],
};

const CIENCIAS_P3: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1, nombre: "Reproducción de seres vivos", meses: "Agosto – Septiembre",
            enClase: ["Reproducción sexual y asexual", "El ciclo de vida de los animales", "Metamorfosis: completa e incompleta", "La polinización", "Semillas y germinación"],
            guiaPapa: {
                intro: "Tu hijo aprenderá cómo nacen, crecen y se reproducen los seres vivos — desde las plantas hasta los mamíferos.",
                comoExplicar: [
                    "Ciclo de vida con fotos: busquen juntos en Google la metamorfosis de la mariposa (huevo→oruga→crisálida→mariposa). ¿Cuánto cambia?",
                    "Polinización: '¿Por qué las flores tienen colores brillantes?' Para atraer abejas que llevan el polen.",
                    "Germina un frijol: ponlo en papel húmedo y observa 5 días. ¿Qué sale primero? (raíz), ¿qué sale después? (tallo).",
                    "Compara: 'Un perro da a luz cachorros (reproducción sexual). Una papa crece de un trozo de papa (asexual).'",
                ],
                truco: "Metamorfosis completa = 4 etapas (huevo, larva, pupa, adulto). Mariposa, mosca, escarabajo. Metamorfosis incompleta = 3 etapas (huevo, ninfa, adulto). Chapulín, cucaracha.",
                error_comun: "Confundir crisálida con capullo. La crisálida la forma la mariposa. El capullo lo forma el gusano de seda. Ambas son pupas, pero de animales distintos.",
                actividad_casa: "La mariposa en casa: consigan una oruga (busquen en jardín o compren en tienda de mascotas). Críenla y observen su metamorfosis. Es el experimento más impactante que puede hacer un niño.",
            },
            guiaMaestro: { objetivo: "El alumno describe los procesos de reproducción en seres vivos y los ciclos de vida básicos.", competencia: "La vida: reproducción y ciclos de vida — SEP Plan 2022" },
            keywords: ["reproduccion seres vivos tercer grado", "metamorfosis 3er grado SEP", "ciclo de vida primaria Mexico"],
        },
        {
            bloque: 2, nombre: "La nutrición de los seres vivos", meses: "Octubre – Noviembre",
            enClase: ["Fotosíntesis: cómo comen las plantas", "Nutrientes: proteínas, carbohidratos, grasas, vitaminas", "El sistema digestivo completo", "La dieta equilibrada", "Enfermedades por mala nutrición"],
            guiaPapa: {
                intro: "Tu hijo entenderá por qué comemos lo que comemos y cómo el cuerpo convierte la comida en energía.",
                comoExplicar: [
                    "Fotosíntesis simplificada: las plantas 'comen' luz solar + agua + CO2 y producen glucosa + oxígeno. Son las únicas que hacen su propio alimento.",
                    "Nutrientes como herramientas: proteínas=ladrillos (músculos), carbohidratos=gasolina (energía), grasas=colchón (reservas), vitaminas=chispas (funcionamiento).",
                    "El sistema digestivo: boca (masticar+saliva) → estómago (ácidos) → intestino delgado (absorber) → intestino grueso (desechar).",
                    "Dieta equilibrada: el plato del bien comer dividido en 3 zonas. ¿Qué grupo falta en su plato del almuerzo de hoy?",
                ],
                truco: "Fotosíntesis = la planta hace su propia comida con 3 ingredientes: luz (del sol), agua (de la tierra) y CO2 (del aire). El resultado: glucosa para la planta + oxígeno para nosotros. Gana-gana.",
                error_comun: "Pensar que las plantas 'respiran' CO2 y nosotros O2. Las plantas TAMBIÉN respiran O2 (como nosotros) pero ADEMÁS hacen fotosíntesis con CO2. Son cosas distintas.",
                actividad_casa: "El experimento de la hoja: cubre la mitad de una hoja de planta con papel aluminio durante 3 días. La parte tapada se pondrá amarilla. ¿Por qué? Sin luz, no hay fotosíntesis.",
            },
            guiaMaestro: { objetivo: "El alumno explica el proceso de la fotosíntesis y la función de los nutrientes en el organismo humano.", competencia: "La vida: nutrición y metabolismo — SEP Plan 2022" },
            keywords: ["fotosintesis tercer grado primaria", "nutrientes 3er grado SEP", "sistema digestivo tercero primaria"],
        },
        {
            bloque: 3, nombre: "Mezclas y soluciones", meses: "Diciembre – Enero",
            enClase: ["Métodos de separación de mezclas", "Filtración, decantación, evaporación", "Soluciones: soluto y solvente", "Concentración: diluida vs. concentrada", "Soluciones en la vida cotidiana"],
            guiaPapa: {
                intro: "Tu hijo aprenderá a separar mezclas — una habilidad que usan los ingenieros, cocineros y médicos todos los días.",
                comoExplicar: [
                    "Mezcla de arena y agua: ¿cómo separarlas? Con un filtro (papel de cocina). Eso es filtración.",
                    "Mezcla de aceite y agua: se sepolan solos porque no se mezclan. Eso es decantación.",
                    "Agua con sal: ¿cómo recuperar la sal? Hiérvela hasta que el agua se evapore. Eso es evaporación.",
                    "En la solución: el que se disuelve = soluto (sal). En lo que se disuelve = solvente (agua). Juntos = solución solución.",
                ],
                truco: "Los 3 métodos como 3 superpoderes: Filtración separa el sólido del líquido (lo atrapa el papel). Decantación separa líquidos que no se mezclan (el más denso cae). Evaporación separa el soluto del solvente (el líquido vuela).",
                error_comun: "Creer que toda mezcla es una solución. No todas — solo cuando una sustancia se disuelve totalmente en otra. En la mezcla de arena y agua, ves las dos: no es solución. En agua con sal, no ves la sal: sí es solución.",
                actividad_casa: "El filtro casero: corta una botella de plástico por la mitad. Pon en la parte de arriba: algodón, arena, grava. Vierte agua sucia y observa cómo sale (casi) limpia. Así trabajan las plantas de tratamiento.",
            },
            guiaMaestro: { objetivo: "El alumno aplica métodos de separación de mezclas y comprende el concepto de solución.", competencia: "Materia, energía e interacciones — SEP Plan 2022" },
            keywords: ["mezclas soluciones tercer grado", "filtracion decantacion 3er grado SEP", "separacion mezclas primaria Mexico"],
        },
        {
            bloque: 4, nombre: "La electricidad y el magnetismo", meses: "Febrero – Marzo",
            enClase: ["Cargas eléctricas: positiva y negativa", "Conductor vs. aislante", "Circuito eléctrico simple", "El imán: polos y campo magnético", "Electricidad estática"],
            guiaPapa: {
                intro: "Tu hijo descubrirá la electricidad y el magnetismo — las fuerzas invisibles que hacen funcionar sus aparatos favoritos.",
                comoExplicar: [
                    "Electricidad estática: frota un globo en tu cabello y acércalo a papelitos. Los atrae. Eso es carga eléctrica estática.",
                    "Circuito simple: pila + cable + foco. Si se rompe el circuito en cualquier punto, el foco se apaga. Por eso se llama 'circuito' (tiene que ser un ciclo cerrado).",
                    "Conductor vs. aislante: los metales conducen electricidad. La madera, el plástico y el hule la aíslan (por eso los cables tienen cubierta de plástico).",
                    "Imán: polos iguales se rechazan, polos distintos se atraen. Sur-Norte = atracción. Norte-Norte = repulsión.",
                ],
                truco: "Los polos del imán como amigos y enemigos: Norte y Sur son amigos (se atraen). Norte y Norte son enemigos (se repelen). SI son iguales, se pelean.",
                error_comun: "Pensar que todos los metales son magnéticos. Solo el hierro, el cobalto y el níquel son magnéticos. El aluminio (papel de aluminio) NO es magnético. Pruébalo con un imán.",
                actividad_casa: "La brújula de agua: magnetiza una aguja (frotándola con un imán). Ponla sobre un trozo de corcho flotando en agua. Siempre apuntará al norte. Han hecho una brújula casera.",
            },
            guiaMaestro: { objetivo: "El alumno identifica propiedades de la electricidad y el magnetismo y construye circuitos simples.", competencia: "Materia, energía e interacciones — SEP Plan 2022" },
            keywords: ["electricidad magnetismo tercer grado", "circuito electrico 3er grado SEP", "iman magnetismo primaria Mexico"],
        },
        {
            bloque: 5, nombre: "El ser humano y el medio ambiente", meses: "Abril – Junio",
            enClase: ["El impacto humano en el medio ambiente", "Contaminación: aire, agua, suelo", "Calentamiento global y efecto invernadero", "Soluciones sustentables", "Proyectos ecológicos escolares"],
            guiaPapa: {
                intro: "Tu hijo aprenderá que sus acciones diarias afectan al planeta — y que también tiene el poder de hacer la diferencia.",
                comoExplicar: [
                    "Contaminación del aire: los carros, fábricas y basura quemada sueltan gases que respiramos. Ciudad de México es un ejemplo cercano.",
                    "Efecto invernadero: los gases (CO2, metano) atrapan el calor del sol. Es como si la Tierra tuviera una cobija que no puede quitarse.",
                    "Calentamiento global: la temperatura promedio del planeta aumenta. Consecuencias: deshielo, huracanes más fuertes, sequías.",
                    "Soluciones que SÍ puede hacer él: reciclar, no desperdiciar agua, comer menos carne, usar transporte público o bicicleta.",
                ],
                truco: "El efecto invernadero en un frasco: pon un termómetro en un frasco cerrado al sol vs. uno abierto. El cerrado sube más temperatura. Ese es el efecto invernadero en miniatura.",
                error_comun: "Confundir el agujero en la capa de ozono con el calentamiento global. Son dos problemas distintos: el ozono protege de los rayos UV. El calentamiento global es por exceso de CO2 que atrapa calor.",
                actividad_casa: "El proyecto ecológico familiar: elijan UN cambio de hábito esta semana y mídanlo. ¿Cuántos litros de agua ahorraron? ¿Cuánta basura separaron? Documenten en un cuaderno.",
            },
            guiaMaestro: { objetivo: "El alumno analiza el impacto humano en el medio ambiente y propone acciones sustentables.", competencia: "El ambiente: sustentabilidad y ciudadanía ambiental — SEP Plan 2022" },
            keywords: ["medio ambiente tercer grado primaria", "contaminacion calentamiento global 3er grado SEP", "sustentabilidad primaria Mexico"],
        },
    ],
};

const HISTORIA_P3: MateriaContenido = {
    materia: "historia",
    nombre: "Historia",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1, nombre: "Las civilizaciones antiguas del mundo", meses: "Agosto – Septiembre",
            enClase: ["Mesopotamia: cunas de la civilización", "El Antiguo Egipto: faraones y pirámides", "La antigua Grecia: democracia y filosofía", "El Imperio Romano: leyes y construcciones", "Legado de las culturas antiguas"],
            guiaPapa: {
                intro: "Tu hijo se conectará con las civilizaciones que inventaron la escritura, las leyes y la democracia — cosas que usamos hoy.",
                comoExplicar: [
                    "Mesopotamia: la primera escritura del mundo (cuneiforme) y las primeras leyes (Código de Hammurabi). '¿Cómo sería el mundo sin leyes?'",
                    "Egipto: pirámides como rascacielos del mundo antiguo. '¿Cómo las construyeron sin grúas?' Rampas, agua y miles de trabajadores.",
                    "Grecia: inventaron la democracia ('demos' = pueblo, 'kratos' = poder). '¿Cómo deciden cosas en tu escuela?'",
                    "Roma: los romanos costruyeron acueductos que todavía existen. Sus leyes son la base del derecho mexicano actual.",
                ],
                truco: "Las 4 civilizaciones como cuatro 'primeros en algo': Mesopotamia=primera escritura, Egipto=primeras pirámides, Grecia=primera democracia, Roma=primer derecho. Cuatro 'primeros', cuatro civilizaciones.",
                error_comun: "Pensar que las civilizaciones antiguas eran 'primitivas'. Los romanos tenían plomería, calefacción y sistemas de agua corriente. Más avanzados que muchos lugares del mundo siglos después.",
                actividad_casa: "El detective de la herencia clásica: busquen en su casa 10 cosas que provengan de las civilizaciones antiguas. El calendario (Roma), la geometría (Grecia), el pan (Egipto), las palabras con raíz latina (Español).",
            },
            guiaMaestro: { objetivo: "El alumno identifica las características principales de las civilizaciones antiguas y su legado en el mundo actual.", competencia: "Pensamiento histórico — Civilizaciones del mundo antiguo — SEP Plan 2022" },
            keywords: ["civilizaciones antiguas tercer grado", "Egipto Grecia Roma 3er grado SEP", "historia universal primaria Mexico tercero"],
        },
        {
            bloque: 2, nombre: "La Edad Media y el Renacimiento", meses: "Octubre – Noviembre",
            enClase: ["El feudalismo: señores y siervos", "La Iglesia en la Edad Media", "Los castillos y las cruzadas", "El Renacimiento: arte y ciencia", "Leonardo da Vinci y sus inventos"],
            guiaPapa: {
                intro: "Del castillo medieval al Renacimiento — tu hijo verá cómo Europa cambió completamente en 500 años.",
                comoExplicar: [
                    "Feudalismo: el rey daba tierras a los señores (vasallos) a cambio de protección y lealtad. Una cadena de poder de arriba abajo.",
                    "Cruzadas: guerras religiosas donde europeos fueron a 'rescatar' Tierra Santa. '¿Cuánto duraron? Siglos. ¿Para qué sirvieron? También para intercambiar conocimiento con el mundo árabe.'",
                    "El Renacimiento como 'renacimiento de ideas': Europa redescubrió la filosofía y arte de Grecia y Roma, que había olvidado.",
                    "Da Vinci: artista, científico, ingeniero, músico. En sus cuadernos hay diseños de helicópteros y tanques — en el siglo XV.",
                ],
                truco: "La diferencia Edad Media/Renacimiento: Edad Media = fe primero, razón después. Renacimiento = razón primero, observar el mundo con los ojos propios. Copérnico, Galileo, Da Vinci — todos cuestionaron lo que les dijeron.",
                error_comun: "Pensar que la Edad Media fue 'oscura' y mala. Fue el período en que se construyeron las catedrales, las universidades europeas y se preservó el conocimiento en monasterios. No todo fue guerra.",
                actividad_casa: "El artista del Renacimiento: que copie (dibuje) la Mona Lisa o el Hombre de Vitruvio de Da Vinci. Que note los detalles. Luego busquen juntos qué inventos diseñó Da Vinci que nunca se construyeron en vida.",
            },
            guiaMaestro: { objetivo: "El alumno describe las características del feudalismo medieval y los cambios culturales del Renacimiento.", competencia: "Pensamiento histórico — Edad Media y Modernidad — SEP Plan 2022" },
            keywords: ["edad media tercer grado primaria", "renacimiento da vinci 3er grado SEP", "feudalismo historia tercero primaria"],
        },
        {
            bloque: 3, nombre: "Los grandes descubrimientos y la globalización temprana", meses: "Diciembre – Enero",
            enClase: ["Los grandes viajes de exploración", "Colón y el encuentro de dos mundos", "La vuelta al mundo de Magallanes", "El intercambio colombino: alimentos, animales, enfermedades", "El inicio de la globalización"],
            guiaPapa: {
                intro: "Tu hijo entenderá cómo el mundo se hizo 'más pequeño' a partir de 1492 — y cómo eso cambió la comida, las enfermedades y las culturas.",
                comoExplicar: [
                    "El 'descubrimiento': los europeos no sabían que América existía. Los americanos no sabían que Europa existía. ¿Quién descubrió a quién?",
                    "El intercambio colombino: América le dio al mundo el maíz, el cacao, el tomate, la papa, el chile. Europa dio el trigo, el caballo, el azúcar (y las enfermedades que mataron millones de nativos).",
                    "Magallanes: primer viaje alrededor del mundo (1519-1522). Demostró que la Tierra es redonda de forma práctica.",
                    "Globalización temprana: por primera vez en la historia, todos los continentes empezaron a estar conectados.",
                ],
                truco: "La cocina como historia: pregunta a tu hijo qué comería si no existiera el intercambio colombino. Sin América: no hay tomate (pizza italiana), no hay papa (puré francés), no hay chocolate, no hay chile. Sin Europa: no hay trigo, no hay vacas, no hay caballos en América.",
                error_comun: "Creer que Colón 'descubrió' América. América ya estaba habitada por millones de personas. El contacto de 1492 fue un 'encuentro de dos mundos', no un descubrimiento para quienes ya vivían aquí.",
                actividad_casa: "El menú del intercambio: hagan dos menús: uno solo con alimentos de origen americano, otro solo con europeos/asiáticos. Verán qué incompleta sería la cocina mundial sin el intercambio.",
            },
            guiaMaestro: { objetivo: "El alumno explica los viajes de exploración y el intercambio colombino y sus efectos globales.", competencia: "Pensamiento histórico — Era de los Descubrimientos — SEP Plan 2022" },
            keywords: ["descubrimientos geograficos tercer grado", "intercambio colombino 3er grado SEP", "Colon Magallanes primaria Mexico"],
        },
        {
            bloque: 4, nombre: "Revoluciones que cambiaron el mundo", meses: "Febrero – Marzo",
            enClase: ["La Revolución Industrial: de la mano a la máquina", "La Revolución Francesa: libertad, igualdad, fraternidad", "La Revolución Americana: primera democracia moderna", "Los derechos humanos: historia y evolución", "El siglo XIX: nacionalismos y colonialismo"],
            guiaPapa: {
                intro: "Tu hijo aprenderá que las revoluciones no son solo violencia — son cambios profundos en cómo las personas piensan y organizan la sociedad.",
                comoExplicar: [
                    "Revolución Industrial: máquinas de vapor reemplazaron trabajo a mano. Ciudades, fábricas, trenes. Cambió todo en 50 años.",
                    "Revolución Francesa: 'Liberté, Égalité, Fraternité.' Los ciudadanos derrocaron al rey. Crearon los derechos del cidadano. Influyó en la Independencia de México.",
                    "Revolución Americana: 13 colonias que se independizaron de Inglaterra en 1776. Primera constitución democrática moderna.",
                    "Derechos humanos: después de la Segunda Guerra Mundial, la ONU creó la Declaración Universal (1948). 30 derechos para todas las personas.",
                ],
                truco: "Las 3 grandes 'R' del siglo XVIII-XIX: R. Americana (1776, independencia política), R. Francesa (1789, derechos ciudadanos), R. Industrial (1760-1840, cambio económico). Tres revoluciones que crearon el mundo moderno.",
                error_comun: "Pensar que la Revolución Industrial fue buena para todos. Para los obreros significó jornadas de 16 horas, trabajo infantil y condiciones terribles. Luego vinieron los sindicatos para mejorar eso.",
                actividad_casa: "El periodista histórico: que escriba un 'diario personal' de una semana como si fuera un niño de 10 años en la Revolución Francesa o Industrial. '¿Qué veo en las calles? ¿Qué me preocupa? ¿Qué espero?'",
            },
            guiaMaestro: { objetivo: "El alumno comprende las revoluciones del s. XVIII-XIX y su impacto en los derechos humanos y las democracias modernas.", competencia: "Pensamiento histórico — Revoluciones modernas — SEP Plan 2022" },
            keywords: ["revolucion industrial francesa americana tercer grado", "derechos humanos 3er grado SEP", "historia universal tercero primaria Mexico"],
        },
        {
            bloque: 5, nombre: "El mundo en el siglo XX", meses: "Abril – Junio",
            enClase: ["Las Guerras Mundiales: causas y consecuencias", "La ONU: organización para la paz", "La Guerra Fría: dos mundos enfrentados", "La conquista del espacio", "México en el contexto mundial"],
            guiaPapa: {
                intro: "El siglo XX fue el más violento y el más innovador de la historia humana — tu hijo entenderá cómo llegamos al mundo de hoy.",
                comoExplicar: [
                    "Primera Guerra Mundial (1914-1918): rivalidad entre potencias europeas. 20 millones de muertos. Terminó con el Imperio Austro-Húngaro y el Ruso.",
                    "Segunda Guerra Mundial (1939-1945): Hitler y el fascismo en Europa. El Holocausto. La bomba atómica en Japón. 70 millones de muertos.",
                    "ONU: creada en 1945 para evitar otra guerra mundial. 193 países miembros. México es fundador.",
                    "Guerra Fría: EEUU (capitalismo) vs. URSS (comunismo). Sin guerra directa, pero con carrera armamentística y espacial.",
                ],
                truco: "El siglo XX en 4 décadas clave: 1910s=1GM, 1930-40s=2GM+Holocausto, 1950-80s=Guerra Fría, 1990s=caída del muro+internet. Cuatro momentos bisagra que explican el mundo actual.",
                error_comun: "Confundir la 1GM con la 2GM. Tip: La Primera fue por rivalidad entre imperios (sin un villano claro). La Segunda fue por el fascismo de Hitler (con un causante identificable). Son 21 años de diferencia.",
                actividad_casa: "La línea del siglo XX: hagan juntos una línea del tiempo del siglo XX en papel. Cada 10 años (1910, 1920...) ponen el evento más importante. Al final tendrán un mapa del siglo completo.",
            },
            guiaMaestro: { objetivo: "El alumno interpreta los grandes conflictos del siglo XX y comprende el papel de organismos internacionales como la ONU.", competencia: "Pensamiento histórico — Historia contemporánea — SEP Plan 2022" },
            keywords: ["guerras mundiales tercer grado primaria", "ONU guerra fria 3er grado SEP", "siglo XX historia tercero primaria Mexico"],
        },
    ],
};

export const PRIMARIA_3: GradoContenido = {
    grado: "primaria-3",
    nombre: "3° Primaria",
    emoji: "⭐",
    materias: {
        matematicas: MATEMATICAS_P3,
        espanol: ESPANOL_P3,
        ciencias: CIENCIAS_P3,
        historia: HISTORIA_P3,
    },
};
