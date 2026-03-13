// Contenido "masticado" para Kinder (Preescolar 3°) 
// Con referencias al libro SEP oficial CONALITEG 2025

import type { GradoContenido, MateriaContenido } from './content-types';

// Códigos de libros CONALITEG Kinder 2025
// P3PPA = Preescolar 3° Pensamiento Algebraico
// P3LYE = Preescolar 3° Lenguaje y Escritura  
// Nota: Para Kinder usamos materias simplificadas
const LIBRO_KINDER_MATH = "P3PPA"; // Pensamiento algebraico Preescolar 3
const LIBRO_KINDER_ESPANOL = "P3LYE"; // Lenguaje Preescolar 3

const MATEMATICAS_KINDER: MateriaContenido = {
    materia: "matematicas",
    nombre: "Números y Formas",
    emoji: "🔢",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Números del 1 al 5",
            meses: "Agosto – Septiembre",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 8,
                paginaFin: 22,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 8 a 22",
            },
            enClase: [
                "Contar objetos del 1 al 5",
                "Reconocer y escribir los números 1, 2, 3, 4 y 5",
                "Comparar cantidades: más, menos, igual",
                "Ordenar del 1 al 5",
                "Identificar el número en el nombre (uno, dos, tres...)",
            ],
            guiaPapa: {
                intro: "¡Tu hijo aprende a contar sus primeros 5 números! Esta es la base de toda la matemática.",
                comoExplicar: [
                    "Usa los dedos: 1 dedo → muéstrale el 1, 2 dedos → el 2, etc. LOS DEDOS NUNCA MIENTEN.",
                    "Cuenta objetos reales: uvas, galletas, juguetes. No abstracto, siempre con cosas.",
                    "En el baño: cuenta hasta 5 mientras le lavas las manos. Rutina + aprendizaje.",
                    "Enséñale el número escrito: dibuja en el vapor del espejo los números 1-5.",
                ],
                truco: "La regla de las 5 uvas: cada vez que tu hijo cuente bien un número nuevo, le das una uva. Cuando llegue al 5, celebran juntos. El premio hace memorable el aprendizaje.",
                error_comun: "Contar de memoria sin relacionarlo con objetos ('uno, dos, tres' pero sin apuntar). Siempre que diga un número, que apunte a UN objeto por número. Un dedo = un objeto.",
                actividad_casa: "La escalera de los calcetines: pon 1 calcetín en el primer escalón, 2 en el segundo, hasta el 5. Que suba contando en voz alta. Después los recoge contando al revés.",
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce, escribe y ordena los números del 1 al 5, relacionando el número con la cantidad.",
                competencia: "Piensa y razona matemáticamente — Número y álgebra — SEP Plan 2022 Preescolar",
            },
            keywords: ["numeros 1 al 5 kinder", "contar kinder SEP", "preescolar numeros Mexico kinder"],
        },
        {
            bloque: 2,
            nombre: "Números del 5 al 10",
            meses: "Octubre – Noviembre",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 23,
                paginaFin: 42,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 23 a 42",
            },
            enClase: [
                "Contar del 1 al 10 con objetos",
                "Reconocer los números 6, 7, 8, 9 y 10",
                "La decena: el número 10",
                "Mayor que / menor que hasta el 10",
                "Secuencias numéricas simples",
            ],
            guiaPapa: {
                intro: "El 10 es el número favorito de esta etapa — representa las dos manos completas, la primera 'decena'.",
                comoExplicar: [
                    "Dos manos = 10 dedos. Esa es la mejor representación del 10.",
                    "La línea del 10: dibuja 10 casitas en un papel y que las llene con pegatinas, una por una.",
                    "7 son los colores del arcoiris, 8 son las patas del pulpo, 10 son los bolos.",
                    "'¿Cuántas frutas necesitamos para que todos tengan 2?' → Matematicas en la cocina.",
                ],
                truco: "Los 10 dedos siempre disponibles: cuando dude entre 7 y 8, que cuente con dedos. '7... y uno más (dobla el dedo) = 8'. Los dedos nunca se olvidan en casa.",
                error_comun: "Saltar números al contar rápido: 1, 2, 3, 5... Practica conteo lento apuntando a cada objeto. La velocidad viene sola después.",
                actividad_casa: "El boliche de papel: enrolla 10 bolas de papel. Que las acomode en triángulo y derribe con una pelota. Cuenta cuántas cayeron y cuántas quedaron.",
            },
            guiaMaestro: {
                objetivo: "El alumno extiende el conteo hasta el 10, reconoce la decena y compara cantidades.",
                competencia: "Piensa y razona matemáticamente — Número y álgebra — SEP Plan 2022 Preescolar",
            },
            keywords: ["numeros del 5 al 10 kinder", "decena preescolar SEP", "contar hasta 10 kinder Mexico"],
        },
        {
            bloque: 3,
            nombre: "Figuras geométricas básicas",
            meses: "Diciembre – Enero",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 43,
                paginaFin: 60,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 43 a 60",
            },
            enClase: [
                "Círculo, cuadrado, triángulo y rectángulo",
                "Características: lados y esquinas",
                "Clasificar objetos por su forma",
                "Las formas en el mundo real",
                "Figuras grandes y pequeñas",
            ],
            guiaPapa: {
                intro: "Las formas geométricas están en TODAS partes — ventanas, pizzas, señales de tráfico. Kinder es el momento perfecto para descubrirlas.",
                comoExplicar: [
                    "Cacería de formas: ¿cuántos círculos ves en esta habitación? (platos, tapas, relojes...)",
                    "La pizza = círculo. El libro = rectángulo. El sandwich cortado = triángulo.",
                    "Traza las formas con el dedo en la espalda del niño. Que adivine cuál es.",
                    "Las esquinas son 'puntas'. El triángulo tiene 3 puntas. El cuadrado tiene 4.",
                ],
                truco: "La canción de las formas: '¡El círculo no tiene esquinas, rueda y rueda sin parar! El cuadrado tiene cuatro, ya lo puedes contar!' Inventar una canción hace que se quede grabado.",
                error_comun: "Confundir cuadrado con rectángulo. El cuadrado tiene todos los lados IGUALES. El rectángulo tiene 2 lados largos y 2 cortos. Una puerta es rectángulo, un dado es cuadrado.",
                actividad_casa: "El collage de formas: recorta círculos, cuadrados y triángulos de revistas o papel. Que construya un muñeco, un robot o una escena usando solo figuras geométricas.",
            },
            guiaMaestro: {
                objetivo: "El alumno identifica, nombra y describe las características de las figuras planas básicas.",
                competencia: "Piensa y razona matemáticamente — Forma, espacio y medida — SEP Plan 2022 Preescolar",
            },
            keywords: ["figuras geometricas kinder", "circulo cuadrado triangulo preescolar SEP", "formas geometricas kinder Mexico"],
        },
        {
            bloque: 4,
            nombre: "Comparación y clasificación",
            meses: "Febrero – Marzo",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 61,
                paginaFin: 78,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 61 a 78",
            },
            enClase: [
                "Grande, mediano y pequeño",
                "Largo y corto",
                "Pesado y ligero",
                "Agrupa objetos por color, tamaño y forma",
                "Patrones simples: rojo, azul, rojo, azul...",
            ],
            guiaPapa: {
                intro: "Clasificar es el primer paso del pensamiento científico. Tu hijo está aprendiendo a organizar el mundo.",
                comoExplicar: [
                    "Al guardar juguetes: 'Los rojos aquí, los azules allá'. Eso es clasificar por color.",
                    "Al guardar ropa: 'Los calcetines aquí, las camisas allá'. Clasificar por tipo.",
                    "Pesado vs. ligero: que cargue un libro y un lápiz. ¿Cuál pesa más? ¿Por qué?",
                    "Patrones con aplausos: clap-clap-pausa, clap-clap-pausa. '¿Qué sigue?' Patrón.",
                ],
                truco: "El juego de la tienda: pon 10 objetos en la mesa. Que los clasifique como quiera (por color, tamaño, material). Luego pregunta: '¿Por qué los pusiste juntos?' El razonamiento es más importante que la clasificación correcta.",
                error_comun: "No terminar el patrón: ROJO, AZUL, ROJO, AZUL... y el niño pone VERDE. Pregunta: '¿Qué estaba pasando antes? ¿Qué crees que sigue?' Que find el patrón antes de agregar algo nuevo.",
                actividad_casa: "La caja de los tesoros: mete en una caja 20 objetos variados (botones, monedas, clips, frijoles). Que los clasifique por categoría. Sin reglas — él decide cómo. Luego que te explique sus categorías.",
            },
            guiaMaestro: {
                objetivo: "El alumno clasifica objetos por atributos (color, tamaño, forma) e identifica patrones simples.",
                competencia: "Piensa y razona matemáticamente — Álgebra y pensamiento funcional — SEP Plan 2022 Preescolar",
            },
            keywords: ["clasificacion kinder", "patrones preescolar SEP", "comparacion tamanio kinder Mexico"],
        },
        {
            bloque: 5,
            nombre: "Suma con objetos",
            meses: "Abril – Junio",
            libroSep: {
                codigo: "P3PPA",
                paginaInicio: 79,
                paginaFin: 96,
                descripcion: "Libro SEP Pensamiento Algebraico Preescolar 3°, páginas 79 a 96",
            },
            enClase: [
                "Juntar grupos pequeños de objetos",
                "¿Cuántos hay en total? (suma concreta)",
                "Quitar objetos: ¿cuántos quedan?",
                "Situaciones de la vida cotidiana con sumas simples",
                "Números ordinales: primero, segundo, tercero",
            ],
            guiaPapa: {
                intro: "La suma empieza con objetos reales — no con números escritos. Tu hijo está listonpara su primera operación matemática.",
                comoExplicar: [
                    "Nunca uses el símbolo + todavía. Usa palabras: 'tengo 3 uvas y me dan 2 más'.",
                    "Junta con las manos: que ponga 3 bloques en la mano izquierda, 2 en la derecha. ¿Cuántos en total?",
                    "El cuento matemático: 'Había 4 hormiguitas. Llegaron 2 más. ¿Cuántas hormiguitas hay ahora?'",
                    "Ordinals en el desayuno: '¿Quién va primero? Tú. ¿Segundo? Papá. ¿Tercero? Yo.'",
                ],
                truco: "La regla del TOTAL: después de cada suma, que diga siempre '...EN TOTAL'. 3 + 2 = 5 EN TOTAL. La palabra 'en total' ancla el concepto de suma como unión.",
                error_comun: "Contar los dedos DOS veces en una suma (cuenta de nuevo los primeros). Enséñale a 'guardar' el primer número en la cabeza: '¿Cuántos teníamos? 3. No los cuentes de nuevo, ya sabes. Ahora cuenta los que llegan: 4, 5.'",
                actividad_casa: "El mercadito: dale 5 'monedas' de papel (fichas, botones). Que 'compre' objetos de casa: este vaso cuesta 2 fichas, esta cuchara 1. Que cuente su cambio. Primer contacto con transacciones.",
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve situaciones de suma y resta concreta usando objetos y situaciones de la vida cotidiana.",
                competencia: "Piensa y razona matemáticamente — Número, adición y sustracción — SEP Plan 2022 Preescolar",
            },
            keywords: ["suma kinder objetos", "sumar preescolar SEP", "matematicas kinder Mexico primero primaria"],
        },
    ],
};

const ESPANOL_KINDER: MateriaContenido = {
    materia: "espanol",
    nombre: "Lenguaje y Letras",
    emoji: "📖",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "Vocales: A, E, I, O, U",
            meses: "Agosto – Septiembre",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 10,
                paginaFin: 28,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 10 a 28",
            },
            enClase: [
                "Las 5 vocales: A, E, I, O, U",
                "Sonido de cada vocal",
                "Identificar la vocal inicial de una palabra",
                "Palabras que empiezan con cada vocal",
                "Trazar las vocales en mayúscula y minúscula",
            ],
            guiaPapa: {
                intro: "Las vocales son el corazón del idioma — sin ellas no pOdRíAmOs HAbLAr. Es el primer paso de la lectura.",
                comoExplicar: [
                    "AEIOU con la boca bien abierta: que se mire en el espejo mientras las dice. La boca hace formas distintas.",
                    "Un objeto por vocal: A=abeja, E=elefante, I=iglú, O=oso, U=uva. Que dibuje los 5.",
                    "'¿Con qué vocal empieza ÁRBOL?' Que exagere el sonido inicial: ÁÁÁÁRBOL. La A!",
                    "Trazar en arena, harina o con el dedo en su espalda. Siempre que el cuerpo participa, se aprende mejor.",
                ],
                truco: "Las vocales son las únicas que puedes CANTAR solas. Prueba: 'Aaaaaaa' (puedes). 'Bbbbb' (no puedes). Eso es una vocal. Los niños lo entienden inmediatamente.",
                error_comun: "Confundir el nombre de la letra con el sonido. La vocal se llama 'a' y también suena 'a'. Pero cuando digan 'b', que recuerden que la letra se llama 'be' pero en las palabras suena corto.",
                actividad_casa: "La búsqueda secreta: esconde 5 tarjetitas en la casa, cada una con una vocal. Que las encuentre y diga un objeto que empieza con esa vocal al encontrarla. ¡Tesoro de letras!",
            },
            guiaMaestro: {
                objetivo: "El alumno identifica, pronuncia y escribe las 5 vocales, relacionándolas con su sonido y con palabras conocidas.",
                competencia: "Se comunica con eficaica — Lectura y escritura — SEP Plan 2022 Preescolar",
            },
            keywords: ["vocales kinder", "AEIOU preescolar SEP", "vocales kinder Mexico primero lectura"],
        },
        {
            bloque: 6,
            nombre: "Yo hablo sin voz (LSM)",
            meses: "Julio",
            libroSep: {
                codigo: "P3LSM",
                paginaInicio: 1,
                paginaFin: 15,
                descripcion: "Inclusión SEP: Lengua de Señas Mexicana para Preescolar 3",
            },
            enClase: [
                "El Abecedario final (K a la Z)",
                "Formando mis primeras sílabas",
                "Por favor y Gracias",
                "Oficios y mi comunidad",
            ],
            guiaPapa: {
                intro: "Llevamos la inclusión un paso más allá. Los niños aprenderán el abecedario completo en señas, cortesía indispensable y oficios.",
                comoExplicar: [
                    "Empiece deletreando letras simples con sus manos y pida que el niño adivine.",
                    "Hagan el juego del restaurante usando 'Por Favor' y 'Gracias' puramente en señas.",
                    "Repase las profesiones (Doctor, Bombero) actuándolas con las manos.",
                ],
                truco: "Unir letras para formar sílabas (como MA o PA) enseña a los niños que los movimientos fluidos crean palabras enteras, igual que la voz.",
                error_comun: "Hacer las señas muy rápido. Debe ser pausado para que el niño pueda imitar la motricidad fina de los dedos.",
                actividad_casa: "El noticiero del silencio: Jueguen a dar las noticias de la casa usando solo señas y deletreo de las letras nuevas aprendidas.",
            },
            guiaMaestro: {
                objetivo: "Desarrollar empatía profunda y psicomotricidad fina a través de la formación de sílabas y expresiones sociales mediante Lengua de Señas Mexicana (LSM).",
                competencia: "Integración Inclusiva Multimodal — Plan SEP Transversal",
            },
            keywords: ["LSM avanzado kinder", "abecedario señas", "inclusion preescolar 3"],
        },
        {
            bloque: 2,
            nombre: "Mi nombre y las letras",
            meses: "Octubre – Noviembre",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 29,
                paginaFin: 48,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 29 a 48",
            },
            enClase: [
                "Escribir el propio nombre",
                "Las letras de 'má' y 'pá'",
                "Reconocer letras en el entorno (carteles, etiquetas)",
                "El abecedario: las 27 letras",
                "Distinguir letras de números y dibujos",
            ],
            guiaPapa: {
                intro: "El nombre propio es la primera palabra que todo niño quiere aprender a escribir — es su identidad.",
                comoExplicar: [
                    "Escríbele su nombre en una tarjetita grande con colores. Que la cargue en su mochila.",
                    "Cuenta las letras de su nombre: '¿Cuántas letras tiene PEDRO? P-E-D-R-O = 5 letras.'",
                    "'¿Con qué letra empieza tu nombre? ¿Y el de papá? ¿Y el mío?' Conecte los nombres de la familia.",
                    "Busca su nombre impreso en cosas de la casa (etiquetas, cuadernos). '¡Ahí está tu inicial!'",
                ],
                truco: "El truco del nombre: cada letra de su nombre es un amigo. SOFIA = S de serpiente, O de oso, F de foca, I de iguana, A de abeja. Inventa la historia de los amigos que forman su nombre.",
                error_comun: "Escribir las letras al revés (especialmente la b, d, p, q). Es completamente normal hasta los 7 años. No corrijas con enojo — muéstrale la dirección correcta una vez suavemente.",
                actividad_casa: "El collage de mi nombre: corta revistas buscando las letras de su nombre. Péguelas en cartón y decórenlas con colores. Cuélgalo en su cuarto. Ver su nombre en la pared lo motiva.",
            },
            guiaMaestro: {
                objetivo: "El alumno escribe su nombre con las letras en el orden correcto y reconoce las letras en texto impreso.",
                competencia: "Se comunica con eficacia — Lectura y escritura — SEP Plan 2022 Preescolar",
            },
            keywords: ["mi nombre kinder", "escribir nombre preescolar SEP", "letras kinder Mexico abecedario"],
        },
        {
            bloque: 3,
            nombre: "Cuentos y narración oral",
            meses: "Diciembre – Enero",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 49,
                paginaFin: 68,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 49 a 68",
            },
            enClase: [
                "Estructura del cuento: inicio, desarrollo, final",
                "Personajes, lugar y problema",
                "Narrar cuentos con sus palabras",
                "Ilustraciones y su relación con el texto",
                "Inventar el final de un cuento",
            ],
            guiaPapa: {
                intro: "Los cuentos no son solo entretenimiento — son la herramienta más poderosa para desarrollar el lenguaje.",
                comoExplicar: [
                    "Al terminar un cuento, siempre pregunta: '¿Quién era? ¿Qué le pasó? ¿Cómo terminó?' Tres preguntas mágicas.",
                    "Cuento sin fin: empieza tú una historia y que él continúe. Turno a turno. Se vuelve muy divertido.",
                    "Los personajes favoritos: '¿Si Spiderman estuviera en este cuento, qué haría?' Conecta con sus intereses.",
                    "Que dibuje el cuento aunque no sepa escribir. Un dibujo + sus palabras = lectura emergente.",
                ],
                truco: "El cuento de 3 objetos: toma 3 objetos al azar de la casa (una llave, un zapato, una manzana). En 2 minutos inventen juntos un cuento que use los tres. Ejercicio de creatividad brutal.",
                error_comun: "Que cuente el cuento sin orden ('y luego... y luego... y luego'). Enséñale las palabras de secuencia: PRIMERO, DESPUÉS, LUEGO, AL FINAL. Que las use cuando cuenta.",
                actividad_casa: "El cuento de la cama: cada noche, 5 minutos antes de dormir, que EL sea el narrador. Que invente un cuento nuevo. Tú solo escucha y haz preguntas. Con el tiempo sus historias se vuelven increíbles.",
            },
            guiaMaestro: {
                objetivo: "El alumno narra cuentos con inicio, desarrollo y final, usando vocabulario variado y estructura secuencial.",
                competencia: "Se comunica con eficacia — Expresión oral — SEP Plan 2022 Preescolar",
            },
            keywords: ["cuentos kinder", "narracion oral preescolar SEP", "cuento estructura kinder Mexico"],
        },
        {
            bloque: 4,
            nombre: "Primeras sílabas y palabras",
            meses: "Febrero – Marzo",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 69,
                paginaFin: 86,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 69 a 86",
            },
            enClase: [
                "La sílaba: unidad de sonido",
                "Golpes de voz: se-ma-fo-ro (4 golpes = 4 sílabas)",
                "Palabras cortas y largas",
                "Sílabas MA, ME, MI, MO, MU (familia de la M)",
                "Sílabas PA, PE, PI, PO, PU (familia de la P)",
            ],
            guiaPapa: {
                intro: "Las sílabas son los 'bloques' de las palabras. Una vez que el niño las escucha, la lectura se vuelve posible.",
                comoExplicar: [
                    "Un golpe = una sílaba. Que palmee mientras separa: MA-MA (2 palmas), PA-PA (2 palmas), A-BUE-LA (3 palmas).",
                    "¿Es larga o corta? 'PEZ' es corta (1 sílaba). 'MA-RI-PO-SA' es larga (4 sílabas).",
                    "La familia de la M: MA-ME-MI-MO-MU. Que las cante seguido. MA-mamá, ME-mesa, MI-mío.",
                    "Practica en el carro: palmeen las sílabas de los nombres en los carteles.",
                ],
                truco: "El mentón nunca miente: pon la mano debajo del mentón y di una palabra. Cada vez que el mentón toca la mano, es una sílaba. CA-SA = 2 veces. MA-RI-PO-SA = 4 veces. ¡Infalible!",
                error_comun: "Separar mal las sílabas: 'CAR-RO' (correcto) vs 'CA-RRO' (también se acepta). Lo importante es que identifique los golpes. La perfección viene con práctica.",
                actividad_casa: "La carrera de sílabas: dí una palabra y que palmee las sílabas. Tú también palmas. ¿Quién palmea más rápido? Si tienen más de 3 en casa, que todos jueguen. El que palmea mal pierde un punto.",
            },
            guiaMaestro: {
                objetivo: "El alumno segmenta palabras en sílabas usando palmadas y reconoce las primeras familias silábicas.",
                competencia: "Se comunica con eficacia — Conciencia fonológica — SEP Plan 2022 Preescolar",
            },
            keywords: ["silabas kinder", "conciencia fonologica preescolar SEP", "primeras silabas kinder Mexico lectura"],
        },
        {
            bloque: 5,
            nombre: "Lectura emergente y escritura inicial",
            meses: "Abril – Junio",
            libroSep: {
                codigo: "P3LYE",
                paginaInicio: 87,
                paginaFin: 104,
                descripcion: "Libro SEP Lenguaje y Escritura Preescolar 3°, páginas 87 a 104",
            },
            enClase: [
                "Leer imágenes: qué cuenta un dibujo",
                "Primeras palabras completas: mamá, papá, casa, sol",
                "Diferencia entre dibujo, número y letra",
                "Mi primer 'libro': cuaderno con mis dibujos y letras",
                "Preparación para 1° primaria",
            ],
            guiaPapa: {
                intro: "La lectura emergente ocurre incluso antes de que el niño sepa leer. Todo lo que haces en casa con libros le prepara para Primaria 1°.",
                comoExplicar: [
                    "Señala con el dedo mientras lees. Que vea que el texto va de izquierda a derecha, de arriba a abajo.",
                    "'¿Qué crees que dice aquí?' (apunta a una palabra). Aunque no sepa, que intente. El intento activa el cerebro.",
                    "Palabras en post-its: etiqueta objetos de la casa. SILLA, PUERTA, CAMA. Las ve diario y las aprende sin darse cuenta.",
                    "El abecedario en la pared: un poster grande a su altura. Que lo toque mientras lo canta.",
                ],
                truco: "Las 5 palabras mágicas para antes de 1° primaria: MAMÁ, PAPÁ, CASA, SOL, MI. Si las reconoce de vista, llega adelantado a primero. Practícalas con tarjetitas de cartón.",
                error_comun: "Presionar para que lea completo antes de tiempo. En kinder, leer IMÁGENES ya es leer. La decodificación viene en 1°. Deja que el proceso fluya naturalmente.",
                actividad_casa: "El libro de mi familia: fabriquen juntos un mini libro de 8 páginas (papel doblado). En cada página, él pega una foto o hace un dibujo de algo de la familia y dictan juntos una oración. Tú escribes, él ilustra.",
            },
            guiaMaestro: {
                objetivo: "El alumno muestra comportamientos de lector emergente y escribe su nombre y palabras significativas.",
                competencia: "Se comunica con eficacia — Lectura emergente — SEP Plan 2022 Preescolar",
            },
            keywords: ["lectura emergente kinder", "escritura inicial preescolar SEP", "preparacion primero primaria kinder Mexico"],
        },
    ],
};

const CONOCIMIENTO_KINDER: MateriaContenido = {
    materia: "conocimiento",
    nombre: "Conocimiento del Medio",
    emoji: "🔍",
    color: "#EAB308",
    bloques: [
        {
            bloque: 6,
            nombre: "Mi ciudad habla (LSM)",
            meses: "Julio",
            libroSep: {
                codigo: "P3LSM",
                paginaInicio: 31,
                paginaFin: 45,
                descripcion: "Inclusión SEP: Conocimiento en Señas Preescolar 3",
            },
            enClase: [
                "Oficios y profesiones",
                "Medios de transporte",
                "Alimentos y la hora de comer",
                "Naturaleza y bichitos",
            ],
            guiaPapa: {
                intro: "Conectamos al niño con su entorno real usando un lenguaje universal y silencioso. Aprenderá cómo se comunican las profesiones y animales en LSM.",
                comoExplicar: [
                    "Jueguen a adivinar el animal o insecto imitando sus movimientos característicos adaptados a las señas.",
                    "Al salir a la calle, señalen los coches y hagan la seña de manejar.",
                ],
                truco: "Las señas de animales e insectos (como la mariposa) son muy visuales y casi actitudinales. Que el niño exagere el movimiento.",
                error_comun: "Hacer las señas de profesiones sin gesticulación facial. La cara debe acompañar la seña de 'doctor' o 'policía'.",
                actividad_casa: "El restaurante de mimos: A la hora de cenar, el niño debe pedir agua o describir la comida usando los movimientos aprendidos.",
            },
            guiaMaestro: {
                objetivo: "Fomentar la comprensión social y natural del entorno integrando un vocabulario de Señas referente a la comunidad y ecología.",
                competencia: "Exploración del Mundo Natural y Social Inclusivo — SEP",
            },
            keywords: ["oficios lsm", "animales señas", "inclusion kinder"],
        },
    ],
};

const EDUCACION_FISICA_KINDER: MateriaContenido = {
    materia: "educacion_fisica",
    nombre: "Educación Física",
    emoji: "🏃",
    color: "#F97316",
    bloques: [
        {
            bloque: 6,
            nombre: "Mis deportes hablan (LSM)",
            meses: "Julio",
            libroSep: {
                codigo: "P3LSM",
                paginaInicio: 46,
                paginaFin: 60,
                descripcion: "Inclusión SEP: Deportes en Señas Preescolar 3",
            },
            enClase: [
                "Deportes olímpicos básicos",
                "Partes del cuerpo avanzadas",
                "Rutinas de estiramiento",
                "Juego en equipo",
            ],
            guiaPapa: {
                intro: "Combinamos la actividad aeróbica con el aprendizaje motriz fino de las manos. Desde nombrar la espalda hasta jugar vóleibol en señas.",
                comoExplicar: [
                    "Hagan una rutina de estiramiento donde cada posición clave se nombre solo haciendo la seña ('Relajarse').",
                    "Simulen jugar los deportes (natación, básquetbol) y luego hagan la seña oficial de LSM.",
                ],
                truco: "Enseñar que los deportes en LSM son recreaciones en miniatura de los movimientos reales.",
                error_comun: "Hacer los movimientos deportivos reales en lugar de la seña pactada por la comunidad sorda.",
                actividad_casa: "Las Olimpiadas Silenciosas: Organicen competencias de adivinanzas donde uno hace la seña del deporte y el otro adivina cuál es corriendo a la meta.",
            },
            guiaMaestro: {
                objetivo: "Coordinar la expresión motora rítmica y el esquema corporal total mediante el vocabulario deportivo de la Lengua de Señas.",
                competencia: "Desarrollo Físico y Salud Inclusiva — SEP",
            },
            keywords: ["deportes señas", "cuerpo humano lsm", "motricidad kínder"],
        },
    ],
};

export const KINDER: GradoContenido = {
    grado: "kinder",
    nombre: "Kinder (Preescolar 3°)",
    emoji: "🌈",
    materias: {
        matematicas: MATEMATICAS_KINDER,
        espanol: ESPANOL_KINDER,
        conocimiento: CONOCIMIENTO_KINDER,
        educacion_fisica: EDUCACION_FISICA_KINDER,
    },
};
