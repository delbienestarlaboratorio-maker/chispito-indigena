/**
 * GENERADOR DE EJERCICIOS — Chispito.mx
 * ======================================
 * Genera ejercicios JSON por grado/materia/bloque
 * alineados al curriculo SEP Mexico (Plan 2022, Nueva Escuela Mexicana).
 *
 * Salida: src/data/exercises/[grado]/[materia]/bloque-[N].json
 *
 * USO:
 *   node scripts/generar-ejercicios.js
 *   node scripts/generar-ejercicios.js --grado=primaria-1
 *   node scripts/generar-ejercicios.js --grado=primaria-3 --materia=ciencias
 */

const fs = require("fs");
const path = require("path");

const DESTINO = path.join(__dirname, "..", "src", "data", "exercises");

// ===========================================================================
// BANCO DE EJERCICIOS POR MATERIA/TEMA
// ===========================================================================

const BANCOS = {
    matematicas: {
        "Numeros del 1 al 10": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantas estrellas hay? (5 estrellas)", opciones: ["3", "4", "5", "6"], respuestaCorrecta: "5", explicacion: "Contamos una por una: 1, 2, 3, 4, 5 = 5 estrellas." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que numero va despues del 7?", opciones: ["6", "7", "8", "9"], respuestaCorrecta: "8", explicacion: "Los numeros van en orden: ...6, 7, 8. Despues del 7 viene el 8." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cual es el numero mas grande entre estos?", opciones: ["3", "7", "5", "9"], respuestaCorrecta: "9", explicacion: "El 9 es el numero mas grande entre 3, 5, 7 y 9." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "Completa la serie: 1, 2, 3, ___, 5, 6", respuestaCorrecta: "4", explicacion: "Los numeros van en orden. Despues del 3 viene el 4." },
            { tipo: "true_false", nivel: "v2", pregunta: "El numero 6 es mayor que el numero 8.", respuestaCorrecta: "false", explicacion: "El 6 es MENOR que el 8. En la recta numerica, el 8 esta mas a la derecha." },
            { tipo: "visual_count", nivel: "v1", pregunta: "Cuantas manzanas hay? (7 manzanas dibujadas)", opciones: ["5", "6", "7", "8"], respuestaCorrecta: "7", explicacion: "Contamos: 1, 2, 3, 4, 5, 6, 7. Hay 7 manzanas." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que numero esta entre el 4 y el 6?", opciones: ["3", "5", "7", "8"], respuestaCorrecta: "5", explicacion: "En la secuencia 4, 5, 6 - el numero 5 esta en medio." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "Escribe el numero anterior al 9: ___", respuestaCorrecta: "8", explicacion: "Antes del 9 esta el 8: ...7, 8, 9." },
        ],
        "Sumas basicas hasta 10": [
            { tipo: "visual_count", nivel: "v1", pregunta: "3 manzanas + 2 manzanas = cuantas en total?", opciones: ["4", "5", "6", "7"], respuestaCorrecta: "5", explicacion: "3 manzanas + 2 manzanas = 5 manzanas en total." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuanto es 4 + 3?", opciones: ["5", "6", "7", "8"], respuestaCorrecta: "7", explicacion: "Si tienes 4 y agregas 3 mas, cuentas: 5, 6, 7. El resultado es 7!" },
            { tipo: "fill_blank", nivel: "v1", pregunta: "2 + ___ = 5", respuestaCorrecta: "3", explicacion: "Para llegar de 2 a 5 necesitas sumar 3. 2 + 3 = 5." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Juan tiene 3 canicas y le dan 5 mas. Cuantas tiene ahora?", opciones: ["6", "7", "8", "9"], respuestaCorrecta: "8", explicacion: "3 + 5 = 8 canicas en total." },
            { tipo: "true_false", nivel: "v2", pregunta: "5 + 4 = 10", respuestaCorrecta: "false", explicacion: "5 + 4 = 9, no 10. Cuenta: 6, 7, 8, 9." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "___ + 6 = 10", respuestaCorrecta: "4", explicacion: "Cuanto le falta al 6 para llegar a 10? Necesita 4 mas: 7, 8, 9, 10." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cual suma da el resultado 9?", opciones: ["4 + 4", "5 + 4", "3 + 5", "6 + 4"], respuestaCorrecta: "5 + 4", explicacion: "5 + 4 = 9. Las demas: 4+4=8, 3+5=8, 6+4=10." },
            { tipo: "visual_count", nivel: "v2", pregunta: "4 estrellas + 6 estrellas = cuantas?", opciones: ["8", "9", "10", "11"], respuestaCorrecta: "10", explicacion: "4 estrellas + 6 estrellas = 10 estrellas." },
        ],
        "Sumas hasta 20": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuanto es 8 + 7?", opciones: ["13", "14", "15", "16"], respuestaCorrecta: "15", explicacion: "8 + 7: primero sumamos 8 + 2 = 10, luego 10 + 5 = 15." },
            { tipo: "fill_blank", nivel: "v1", pregunta: "10 + ___ = 17", respuestaCorrecta: "7", explicacion: "A 10 le sumamos 7 para llegar a 17." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Ana tiene 9 lapices y compra 8 mas. Cuantos tiene?", opciones: ["15", "16", "17", "18"], respuestaCorrecta: "17", explicacion: "9 + 8 = 17. Pensamos: 9 + 1 = 10, y 10 + 7 = 17." },
            { tipo: "true_false", nivel: "v2", pregunta: "13 + 4 = 18", respuestaCorrecta: "false", explicacion: "13 + 4 = 17, no 18. Cuenta desde 13: 14, 15, 16, 17." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cuanto es 9 + 9?", opciones: ["16", "17", "18", "19"], respuestaCorrecta: "18", explicacion: "9 + 9 = 18. Podemos pensar: 9 + 1 = 10, 10 + 8 = 18." },
        ],
        "Restas simples": [
            { tipo: "visual_count", nivel: "v1", pregunta: "Habia 5 dulces. Comiste 2. Cuantos quedan?", opciones: ["2", "3", "4", "5"], respuestaCorrecta: "3", explicacion: "5 dulces - 2 dulces = 3 dulces quedan." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuanto es 9 - 4?", opciones: ["3", "4", "5", "6"], respuestaCorrecta: "5", explicacion: "9 - 4 = 5. Si tienes 9 y quitas 4, quedan 5." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "10 - ___ = 6", respuestaCorrecta: "4", explicacion: "Cuanto quitamos de 10 para que queden 6? Quitamos 4." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Maria tiene 15 monedas y gasta 7. Cuantas le quedan?", opciones: ["7", "8", "9", "10"], respuestaCorrecta: "8", explicacion: "15 - 7 = 8 monedas. Pensamos: 15 - 5 = 10, 10 - 2 = 8." },
        ],
        "Formas geometricas": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantos lados tiene un triangulo?", opciones: ["2", "3", "4", "5"], respuestaCorrecta: "3", explicacion: "El triangulo tiene exactamente 3 lados y 3 vertices (esquinas)." },
            { tipo: "true_false", nivel: "v1", pregunta: "Un cuadrado tiene 4 lados iguales.", respuestaCorrecta: "true", explicacion: "Correcto! El cuadrado tiene 4 lados y todos miden lo mismo." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que figura tiene forma redonda sin esquinas?", opciones: ["Cuadrado", "Triangulo", "Circulo", "Rectangulo"], respuestaCorrecta: "Circulo", explicacion: "El circulo es redondo, no tiene lados ni esquinas." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "Un rectangulo tiene ___ lados.", respuestaCorrecta: "4", explicacion: "El rectangulo tiene 4 lados: 2 lados largos y 2 lados cortos." },
        ],
        "Multiplicacion basica": [
            { tipo: "visual_count", nivel: "v1", pregunta: "Hay 3 grupos de 2 pizzas. Cuantas pizzas en total?", opciones: ["4", "5", "6", "7"], respuestaCorrecta: "6", explicacion: "3 grupos con 2 pizzas cada uno = 3 x 2 = 6 pizzas." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuanto es 5 x 2?", opciones: ["7", "8", "9", "10"], respuestaCorrecta: "10", explicacion: "5 x 2 significa sumar el 5 dos veces: 5 + 5 = 10." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "4 x ___ = 12", respuestaCorrecta: "3", explicacion: "4 x 3 = 12. Podemos sumar: 4 + 4 + 4 = 12." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cuanto es 6 x 7?", opciones: ["40", "42", "44", "48"], respuestaCorrecta: "42", explicacion: "6 x 7 = 42. Truco: 6 x 7 = 6 x 5 + 6 x 2 = 30 + 12 = 42." },
            { tipo: "true_false", nivel: "v2", pregunta: "3 x 4 = 4 x 3 (la multiplicacion es conmutativa)", respuestaCorrecta: "true", explicacion: "Correcto! 3 x 4 = 12 y 4 x 3 = 12. El orden de los factores no cambia el producto." },
        ],
    },
    espanol: {
        Vocales: [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuales son las vocales?", opciones: ["a, b, c, d, e", "a, e, i, o, u", "b, d, f, g, h", "p, q, r, s, t"], respuestaCorrecta: "a, e, i, o, u", explicacion: "Las vocales son: A, E, I, O, U. Las demas letras son consonantes." },
            { tipo: "true_false", nivel: "v1", pregunta: "La letra M es una vocal.", respuestaCorrecta: "false", explicacion: "La M es una consonante. Las vocales son: a, e, i, o, u." },
            { tipo: "fill_blank", nivel: "v1", pregunta: "La palabra SOL tiene la vocal: ___", respuestaCorrecta: "o", explicacion: "En S-O-L, la letra O es la vocal." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cuantas vocales tiene la palabra ESCUELA?", opciones: ["2", "3", "4", "5"], respuestaCorrecta: "4", explicacion: "ES-CUE-LA tiene 4 vocales: E, U, E, A." },
        ],
        "Consonantes basicas p,m,s,l": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Con que letra empieza la palabra MANO?", opciones: ["P", "M", "S", "L"], respuestaCorrecta: "M", explicacion: "MA-NO: la primera letra es la M de mama." },
            { tipo: "fill_blank", nivel: "v1", pregunta: "La palabra LUNA empieza con la letra: ___", respuestaCorrecta: "L", explicacion: "LU-NA empieza con L. L de luna, limon, libro." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cual de estas palabras empieza con P?", opciones: ["Mapa", "Lago", "Pato", "Silla"], respuestaCorrecta: "Pato", explicacion: "PA-TO empieza con P. P de papas, paloma, pelota." },
        ],
        "Silabas simples": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantas silabas tiene la palabra MA-ME-Y?", opciones: ["1", "2", "3", "4"], respuestaCorrecta: "3", explicacion: "MA-ME-Y tiene 3 silabas: MA, ME, Y." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantas silabas tiene CA-SA?", opciones: ["1", "2", "3", "4"], respuestaCorrecta: "2", explicacion: "CA-SA tiene 2 silabas: CA y SA." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "La palabra PA-LO-MA tiene ___ silabas.", respuestaCorrecta: "3", explicacion: "PA-LO-MA: PA, LO, MA = 3 silabas." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que silaba falta? MA-RI-___ (mariposa)", opciones: ["sa", "po", "ta", "la"], respuestaCorrecta: "po", explicacion: "MA-RI-PO-SA. La silaba que sigue a MA-RI es PO." },
        ],
        Sustantivos: [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cual de estas palabras es un SUSTANTIVO?", opciones: ["correr", "bonito", "mesa", "rapido"], respuestaCorrecta: "mesa", explicacion: "Los sustantivos son nombres de personas, animales o cosas. Mesa es el nombre de una cosa." },
            { tipo: "true_false", nivel: "v2", pregunta: "PERRO es un sustantivo.", respuestaCorrecta: "true", explicacion: "Si! PERRO es el nombre de un animal, por eso es un sustantivo." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cual es el sustantivo en: La nina corre rapido.", opciones: ["La", "nina", "corre", "rapido"], respuestaCorrecta: "nina", explicacion: "Nina es el nombre de una persona = sustantivo." },
        ],
        "Uso de la b y la v": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Como se escribe el verbo: 'el nino ju_a_a en el jardin'?", opciones: ["jugava", "jugaba", "jugaVa", "jugaBa"], respuestaCorrecta: "jugaba", explicacion: "JUGABA se escribe con B: los verbos terminados en -ABA llevan B." },
            { tipo: "true_false", nivel: "v2", pregunta: "La palabra VACA se escribe con V.", respuestaCorrecta: "true", explicacion: "Correcto. VACA se escribe con V. Las palabras de animales como vaca, vibora, venado llevan V." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El pez vive en el ___(agua/agva).", respuestaCorrecta: "agua", explicacion: "AGUA se escribe con GU. La V y B son distintas letras pero suenan igual en espanol." },
        ],
    },
    ciencias: {
        "Mi cuerpo y mis sentidos": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantos sentidos tiene el cuerpo humano?", opciones: ["3", "4", "5", "6"], respuestaCorrecta: "5", explicacion: "Los 5 sentidos son: vista, oido, olfato, gusto y tacto." },
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Con que sentido escuchamos la musica?", opciones: ["Vista", "Oido", "Olfato", "Tacto"], respuestaCorrecta: "Oido", explicacion: "El oido capta las vibraciones del aire que forman los sonidos." },
            { tipo: "true_false", nivel: "v1", pregunta: "Los ojos nos sirven para escuchar.", respuestaCorrecta: "false", explicacion: "Los ojos son para VER. Para escuchar usamos los oidos." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El sentido del ___ nos permite distinguir sabores dulces, salados y acidos.", respuestaCorrecta: "gusto", explicacion: "La lengua tiene papilas gustativas que detectan los sabores." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que organo del cuerpo nos da el sentido del tacto?", opciones: ["Los ojos", "La nariz", "La piel", "La lengua"], respuestaCorrecta: "La piel", explicacion: "La piel es el organo mas grande del cuerpo y nos permite sentir calor, frio, presion y dolor." },
        ],
        "Plantas y animales": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que necesitan las plantas para vivir?", opciones: ["Solo agua", "Luz, agua y tierra", "Solo luz", "Solo tierra"], respuestaCorrecta: "Luz, agua y tierra", explicacion: "Las plantas necesitan luz solar, agua y minerales del suelo para vivir y crecer." },
            { tipo: "true_false", nivel: "v1", pregunta: "Los perros son animales herbivoros.", respuestaCorrecta: "false", explicacion: "Los perros son carnivoros u omnivoros. Los herbivoros solo comen plantas, como las vacas." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Como se llama el animal que solo come plantas?", opciones: ["Carnivoro", "Omnivoro", "Herbivoro", "Depredador"], respuestaCorrecta: "Herbivoro", explicacion: "Herbivoro viene de herba (planta). Come solo vegetales: vaca, conejo, caballo." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "Las raices de la planta se encargan de absorber ___ del suelo.", respuestaCorrecta: "agua", explicacion: "Las raices absorben agua y nutrientes del suelo para alimentar a la planta." },
        ],
        "El agua y el clima": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "En que estado esta el agua de una nube?", opciones: ["Liquido", "Solido", "Gaseoso", "Plasma"], respuestaCorrecta: "Gaseoso", explicacion: "Las nubes estan formadas por gotitas microscopicas de agua en estado gaseoso (vapor)." },
            { tipo: "true_false", nivel: "v1", pregunta: "El hielo es agua en estado solido.", respuestaCorrecta: "true", explicacion: "Correcto. El hielo es agua que se enfrio por debajo de 0C y se solidifico." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que es el ciclo del agua?", opciones: ["El agua que se bebe", "Evaporacion, condensacion y precipitacion", "El agua del mar", "El agua que se usa en casa"], respuestaCorrecta: "Evaporacion, condensacion y precipitacion", explicacion: "El ciclo del agua: el sol calienta el agua (evaporacion), sube y forma nubes (condensacion), luego cae como lluvia (precipitacion)." },
        ],
        "La materia y los materiales": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantos estados de la materia existen?", opciones: ["2", "3", "4", "5"], respuestaCorrecta: "3", explicacion: "Los 3 estados de la materia son: solido, liquido y gaseoso." },
            { tipo: "true_false", nivel: "v2", pregunta: "El plastico es un material natural.", respuestaCorrecta: "false", explicacion: "El plastico es un material artificial (sintetico). Los naturales son: madera, piedra, lana, algodon." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que material natural se usa para hacer papel?", opciones: ["Plastico", "Metal", "Madera", "Vidrio"], respuestaCorrecta: "Madera", explicacion: "El papel se hace con celulosa de la madera de los arboles." },
        ],
        "La energia: luz y sonido": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cual es la principal fuente de luz natural?", opciones: ["La Luna", "El Sol", "Las estrellas", "El fuego"], respuestaCorrecta: "El Sol", explicacion: "El Sol es nuestra fuente principal de luz y calor. Sin el, no habria vida en la Tierra." },
            { tipo: "true_false", nivel: "v2", pregunta: "El sonido viaja mas rapido que la luz.", respuestaCorrecta: "false", explicacion: "La luz viaja 300,000 km/s. El sonido viaja 340 m/s. La luz es un millon de veces mas rapida." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El sonido necesita un ___ para viajar (no puede viajar en el vacio).", respuestaCorrecta: "medio", explicacion: "El sonido necesita un medio (aire, agua, solido) para propagarse." },
        ],
        "Los sistemas del cuerpo": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantos huesos tiene el cuerpo humano adulto?", opciones: ["106", "206", "306", "406"], respuestaCorrecta: "206", explicacion: "El cuerpo adulto tiene 206 huesos." },
            { tipo: "true_false", nivel: "v1", pregunta: "El sistema nervioso controla los movimientos y sensaciones.", respuestaCorrecta: "true", explicacion: "El sistema nervioso (cerebro, medula, nervios) controla todo el cuerpo." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que organo purifica la sangre del cuerpo?", opciones: ["El corazon", "Los pulmones", "Los rinones", "El estomago"], respuestaCorrecta: "Los rinones", explicacion: "Los rinones filtran la sangre y eliminan los desechos como orina." },
        ],
        "Los ecosistemas": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que es un ecosistema?", opciones: ["Solo los animales de un lugar", "Solo las plantas de un lugar", "Los seres vivos y su ambiente", "El clima de un lugar"], respuestaCorrecta: "Los seres vivos y su ambiente", explicacion: "Un ecosistema es la comunidad de seres vivos junto con su ambiente fisico." },
            { tipo: "true_false", nivel: "v2", pregunta: "El desierto es un ecosistema.", respuestaCorrecta: "true", explicacion: "Si. El desierto tiene sus propios seres vivos adaptados al calor y la escasez de agua." },
        ],
        "La Tierra y sus movimientos": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que movimiento de la Tierra causa el dia y la noche?", opciones: ["Traslacion", "Rotacion", "Precesion", "Gravitacion"], respuestaCorrecta: "Rotacion", explicacion: "La Tierra gira sobre su propio eje (rotacion) cada 24 horas." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "La Tierra tarda ___ dias en dar una vuelta alrededor del Sol.", respuestaCorrecta: "365", explicacion: "El movimiento de traslacion dura 365 dias (1 ano)." },
        ],
        "Fuerzas y movimiento": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que fuerza hace que los objetos caigan al suelo?", opciones: ["La electricidad", "La gravedad", "El magnetismo", "La friccion"], respuestaCorrecta: "La gravedad", explicacion: "La gravedad es la fuerza que atrae los objetos hacia el centro de la Tierra." },
            { tipo: "true_false", nivel: "v2", pregunta: "La friccion siempre es mala porque detiene el movimiento.", respuestaCorrecta: "false", explicacion: "La friccion tambien es util: nos permite caminar sin resbalar, los frenos del carro funcionan por friccion." },
        ],
        "La materia y sus cambios": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que es un cambio quimico?", opciones: ["El agua que se congela", "La madera que se quema", "El hielo que se derrite", "El azucar que se disuelve"], respuestaCorrecta: "La madera que se quema", explicacion: "Un cambio quimico crea nuevas sustancias. Quemar madera crea cenizas y gases, cosas diferentes a la madera." },
        ],
        "Reproduccion de seres vivos": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantas etapas tiene la metamorfosis completa de la mariposa?", opciones: ["2", "3", "4", "5"], respuestaCorrecta: "4", explicacion: "Metamorfosis completa: 1) huevo, 2) oruga (larva), 3) crisalida (pupa), 4) mariposa adulta." },
            { tipo: "true_false", nivel: "v2", pregunta: "Las plantas se pueden reproducir sin semillas.", respuestaCorrecta: "true", explicacion: "Si. Las plantas se pueden reproducir asexualmente por esquejes, bulbos o estolones." },
        ],
        "La nutricion de los seres vivos": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que produce la fotosintesis ademas de glucosa?", opciones: ["CO2", "Nitrogeno", "Oxigeno", "Hidrogeno"], respuestaCorrecta: "Oxigeno", explicacion: "La fotosintesis transforma CO2 + agua + luz en glucosa + OXIGENO. Las plantas nos dan el aire." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "Los nutrientes que nos dan energia rapida se llaman ___.", respuestaCorrecta: "carbohidratos", explicacion: "Los carbohidratos (pan, pasta, arroz, fruta) son la fuente de energia mas rapida para el cuerpo." },
        ],
        "Mezclas y soluciones": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que metodo usamos para separar el cafe del agua caliente?", opciones: ["Decantacion", "Filtracion", "Evaporacion", "Centrifugacion"], respuestaCorrecta: "Filtracion", explicacion: "El filtro de cafe retiene los solidos y deja pasar el liquido. Eso es filtracion." },
            { tipo: "true_false", nivel: "v2", pregunta: "El agua con sal es una mezcla heterogenea.", respuestaCorrecta: "false", explicacion: "El agua con sal es HOMOGENEA porque la sal se disuelve completamente. No se puede ver." },
        ],
        "La electricidad y el magnetismo": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Por que los cables electricos tienen cubierta de plastico?", opciones: ["Para que se vean bonitos", "Para que no se rompan", "Porque el plastico es aislante", "Para que conduzcan mejor"], respuestaCorrecta: "Porque el plastico es aislante", explicacion: "El plastico no conduce electricidad (aislante). Protege de recibir una descarga electrica." },
            { tipo: "true_false", nivel: "v2", pregunta: "Los polos iguales del iman se atraen.", respuestaCorrecta: "false", explicacion: "Los polos iguales se REPELEN. Norte-Norte = se empujan. Sur-Norte = se atraen." },
        ],
        "El ser humano y el medio ambiente": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que gas es el principal causante del calentamiento global?", opciones: ["Oxigeno", "Nitrogeno", "Dioxido de carbono CO2", "Vapor de agua"], respuestaCorrecta: "Dioxido de carbono CO2", explicacion: "El CO2 emitido por autos y fabricas es el principal gas de efecto invernadero." },
            { tipo: "true_false", nivel: "v2", pregunta: "El agujero en la capa de ozono es lo mismo que el calentamiento global.", respuestaCorrecta: "false", explicacion: "Son dos problemas distintos. El ozono protege de los rayos UV. El calentamiento global es por exceso de CO2." },
        ],
        "El cuerpo humano": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que organo bombea la sangre en nuestro cuerpo?", opciones: ["El pulmon", "El higado", "El corazon", "El estomago"], respuestaCorrecta: "El corazon", explicacion: "El corazon es el musculo que bombea sangre a todo el cuerpo. Late unas 100,000 veces al dia." },
            { tipo: "true_false", nivel: "v1", pregunta: "Los pulmones nos ayudan a respirar.", respuestaCorrecta: "true", explicacion: "Los pulmones toman el oxigeno del aire y eliminan el dioxido de carbono." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El sistema ___ esta formado por el cerebro, la medula espinal y los nervios.", respuestaCorrecta: "nervioso", explicacion: "El sistema nervioso coordina todo el cuerpo." },
        ],
        "Sistema solar": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cuantos planetas tiene nuestro Sistema Solar?", opciones: ["7", "8", "9", "10"], respuestaCorrecta: "8", explicacion: "El Sistema Solar tiene 8 planetas: Mercurio, Venus, Tierra, Marte, Jupiter, Saturno, Urano y Neptuno." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Cual es el planeta mas grande del Sistema Solar?", opciones: ["Saturno", "Tierra", "Jupiter", "Neptuno"], respuestaCorrecta: "Jupiter", explicacion: "Jupiter es el planeta mas grande. Caben mas de 1,300 Tierras dentro de el." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El planeta mas cercano al Sol es ___.", respuestaCorrecta: "Mercurio", explicacion: "Mercurio es el planeta mas pequeno y el mas cercano al Sol." },
        ],
    },
    historia: {
        "Mi familia y mi comunidad": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Como se llama el pais donde vivimos?", opciones: ["Guatemala", "Mexico", "Espana", "Argentina"], respuestaCorrecta: "Mexico", explicacion: "Vivimos en Mexico, cuyo nombre oficial es Estados Unidos Mexicanos." },
            { tipo: "true_false", nivel: "v1", pregunta: "La Ciudad de Mexico es la capital de nuestro pais.", respuestaCorrecta: "true", explicacion: "La Ciudad de Mexico (CDMX) es la capital de Mexico." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El lugar donde vive una persona con su familia y vecinos se llama ___.", respuestaCorrecta: "comunidad", explicacion: "La comunidad es el conjunto de personas que comparten un lugar y formas de vida." },
        ],
        "Los pueblos indigenas de Mexico": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Cuantas lenguas indigenas se hablan en Mexico?", opciones: ["10", "50", "68", "100"], respuestaCorrecta: "68", explicacion: "Mexico reconoce 68 lenguas indigenas. El nahuatl, maya y zapoteco son las mas habladas." },
            { tipo: "true_false", nivel: "v2", pregunta: "Los aztecas y los mexicas eran el mismo pueblo.", respuestaCorrecta: "true", explicacion: "Si. Los mexicas (aztecas) fundaron Tenochtitlan donde hoy es la Ciudad de Mexico." },
        ],
        "Mexico prehispanico": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "En que anio fundaron los mexicas Tenochtitlan?", opciones: ["1210", "1325", "1492", "1521"], respuestaCorrecta: "1325", explicacion: "Tenochtitlan fue fundada en 1325 en una isla del lago Texcoco." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "La civilizacion maya fue famosa por inventar el concepto del ___.", respuestaCorrecta: "cero", explicacion: "Los mayas desarrollaron el concepto matematico del cero." },
        ],
        "Los aztecas y los mayas": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Donde estaba ubicada Tenochtitlan?", opciones: ["En una montana", "En una isla en un lago", "En la costa del mar", "En el desierto"], respuestaCorrecta: "En una isla en un lago", explicacion: "Los aztecas construyeron Tenochtitlan sobre una isla en el lago Texcoco." },
            { tipo: "true_false", nivel: "v2", pregunta: "Los mayas desaparecieron completamente antes de la conquista espanola.", respuestaCorrecta: "false", explicacion: "Los mayas nunca desaparecieron. Hoy hay mas de 6 millones de personas mayas." },
        ],
        "La conquista y la Colonia": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "En que anio llego Hernan Cortes a Mexico?", opciones: ["1492", "1519", "1521", "1531"], respuestaCorrecta: "1519", explicacion: "Hernan Cortes desembarco en Veracruz en 1519 e inicio la conquista." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "El periodo de dominio espanol sobre Mexico (1521-1821) se llama ___.", respuestaCorrecta: "la Colonia", explicacion: "La Colonia o periodo colonial duro 300 anios." },
        ],
        "El siglo XIX mexicano": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "En que anio se consumo la Independencia de Mexico?", opciones: ["1810", "1821", "1857", "1910"], respuestaCorrecta: "1821", explicacion: "La independencia se consumo el 27 de septiembre de 1821." },
        ],
        "Mexico contemporaneo": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "En que anio fue la Revolucion Mexicana?", opciones: ["1810", "1857", "1910", "1940"], respuestaCorrecta: "1910", explicacion: "La Revolucion Mexicana comenzo en 1910, contra el gobierno de Porfirio Diaz." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "La Constitucion Politica de Mexico fue promulgada en ___.", respuestaCorrecta: "1917", explicacion: "La Constitucion de 1917 incluye derechos agrarios, laborales y educativos." },
        ],
        "Independencia de Mexico": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "En que anio comenzo la Independencia de Mexico?", opciones: ["1800", "1810", "1820", "1830"], respuestaCorrecta: "1810", explicacion: "La Guerra de Independencia comenzo en 1810, con el Grito de Dolores del padre Miguel Hidalgo." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Quien dio el Grito de Independencia?", opciones: ["Benito Juarez", "Emiliano Zapata", "Miguel Hidalgo", "Lazaro Cardenas"], respuestaCorrecta: "Miguel Hidalgo", explicacion: "El padre Miguel Hidalgo y Costilla dio el Grito de Dolores el 16 de septiembre de 1810." },
        ],
        "Las civilizaciones antiguas del mundo": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "Que civilizacion invento la primera escritura del mundo?", opciones: ["Egipto", "Grecia", "Mesopotamia", "China"], respuestaCorrecta: "Mesopotamia", explicacion: "En Mesopotamia se invento la escritura cuneiforme hace mas de 5,000 anios." },
            { tipo: "true_false", nivel: "v2", pregunta: "Los griegos inventaron la democracia.", respuestaCorrecta: "true", explicacion: "En Atenas, Grecia, se practico por primera vez la democracia hace 2,500 anios." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que famosa construccion hicieron los antiguos egipcios?", opciones: ["El Coliseo", "Las piramides", "El Partenon", "La Muralla China"], respuestaCorrecta: "Las piramides", explicacion: "Las piramides de Giza son una de las 7 maravillas del mundo antiguo." },
        ],
        "La Edad Media y el Renacimiento": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Como se llama el sistema politico medieval donde el rey daba tierras a los senores?", opciones: ["Capitalismo", "Feudalismo", "Socialismo", "Democracia"], respuestaCorrecta: "Feudalismo", explicacion: "El feudalismo organizaba la sociedad: rey, nobles, siervos." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "Leonardo da Vinci fue el artista y cientifico mas famoso del ___.", respuestaCorrecta: "Renacimiento", explicacion: "Da Vinci vivio en el Renacimiento (siglos XV-XVI)." },
        ],
        "Los grandes descubrimientos y la globalizacion temprana": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "En que anio llego Cristobal Colon a America?", opciones: ["1492", "1519", "1521", "1600"], respuestaCorrecta: "1492", explicacion: "El 12 de octubre de 1492, Colon llego a las islas del Caribe." },
            { tipo: "multiple_choice", nivel: "v2", pregunta: "Que alimento americano NO llegaba a Europa antes de 1492?", opciones: ["El trigo", "El maiz", "El arroz", "La cebolla"], respuestaCorrecta: "El maiz", explicacion: "El maiz es originario de America. Antes de 1492, Europa no lo conocia." },
        ],
        "Revoluciones que cambiaron el mundo": [
            { tipo: "multiple_choice", nivel: "v2", pregunta: "En que anio fue la Revolucion Francesa?", opciones: ["1776", "1789", "1810", "1848"], respuestaCorrecta: "1789", explicacion: "La Revolucion Francesa comenzo en 1789 con la toma de la Bastilla." },
            { tipo: "fill_blank", nivel: "v2", pregunta: "La Revolucion Industrial transformo la produccion de artesanal a ___.", respuestaCorrecta: "industrial", explicacion: "Las maquinas de vapor y las fabricas reemplazaron el trabajo artesanal." },
        ],
        "El mundo en el siglo XX": [
            { tipo: "multiple_choice", nivel: "v1", pregunta: "En que anio comenzo la Primera Guerra Mundial?", opciones: ["1905", "1914", "1918", "1939"], respuestaCorrecta: "1914", explicacion: "La Primera Guerra Mundial comenzo en 1914 y termino en 1918." },
            { tipo: "true_false", nivel: "v2", pregunta: "La ONU fue creada despues de la Segunda Guerra Mundial para promover la paz.", respuestaCorrecta: "true", explicacion: "La ONU fue fundada en 1945 para prevenir futuros conflictos." },
        ],
    },
};

// ===========================================================================
// CURRICULUM P1 - P3 COMPLETO
// ===========================================================================

const CURRICULUM = {
    "primaria-1": {
        matematicas: [
            { bloque: 1, nombre: "Numeros del 1 al 10", meses: "Agosto-Septiembre", temas: ["Numeros del 1 al 10", "Sumas basicas hasta 10"] },
            { bloque: 2, nombre: "Sumas basicas hasta 10", meses: "Octubre-Noviembre", temas: ["Sumas basicas hasta 10", "Sumas hasta 20"] },
            { bloque: 3, nombre: "Formas geometricas", meses: "Diciembre-Enero", temas: ["Formas geometricas"] },
            { bloque: 4, nombre: "Restas simples", meses: "Febrero-Marzo", temas: ["Restas simples"] },
            { bloque: 5, nombre: "Medicion y dinero", meses: "Abril-Junio", temas: ["Numeros del 1 al 10", "Sumas basicas hasta 10"] },
        ],
        espanol: [
            { bloque: 1, nombre: "Vocales y primeras letras", meses: "Agosto-Septiembre", temas: ["Vocales", "Consonantes basicas p,m,s,l"] },
            { bloque: 2, nombre: "Silabas y palabras", meses: "Octubre-Noviembre", temas: ["Silabas simples"] },
            { bloque: 3, nombre: "Oraciones sencillas", meses: "Diciembre-Enero", temas: ["Vocales", "Silabas simples"] },
            { bloque: 4, nombre: "Lectura inicial", meses: "Febrero-Marzo", temas: ["Consonantes basicas p,m,s,l", "Silabas simples"] },
            { bloque: 5, nombre: "Escritura basica", meses: "Abril-Junio", temas: ["Vocales", "Silabas simples"] },
        ],
        ciencias: [
            { bloque: 1, nombre: "Mi cuerpo y mis sentidos", meses: "Agosto-Septiembre", temas: ["Mi cuerpo y mis sentidos"] },
            { bloque: 2, nombre: "Plantas y animales", meses: "Octubre-Noviembre", temas: ["Plantas y animales"] },
            { bloque: 3, nombre: "El agua y el clima", meses: "Diciembre-Enero", temas: ["El agua y el clima"] },
            { bloque: 4, nombre: "La materia y los materiales", meses: "Febrero-Marzo", temas: ["La materia y los materiales"] },
            { bloque: 5, nombre: "La energia: luz y sonido", meses: "Abril-Junio", temas: ["La energia: luz y sonido"] },
        ],
        historia: [
            { bloque: 1, nombre: "Mi familia y mi historia", meses: "Agosto-Septiembre", temas: ["Mi familia y mi comunidad"] },
            { bloque: 2, nombre: "Mi comunidad", meses: "Octubre-Noviembre", temas: ["Los pueblos indigenas de Mexico"] },
            { bloque: 3, nombre: "Mexico diverso", meses: "Diciembre-Enero", temas: ["Mi familia y mi comunidad"] },
            { bloque: 4, nombre: "Culturas prehispanicas", meses: "Febrero-Marzo", temas: ["Los aztecas y los mayas"] },
            { bloque: 5, nombre: "Mexico pasado y presente", meses: "Abril-Junio", temas: ["Mexico contemporaneo"] },
        ],
    },
    "primaria-2": {
        matematicas: [
            { bloque: 1, nombre: "Numeros hasta 100", meses: "Agosto-Septiembre", temas: ["Numeros del 1 al 10", "Sumas basicas hasta 10"] },
            { bloque: 2, nombre: "Sumas y restas", meses: "Octubre-Noviembre", temas: ["Sumas hasta 20", "Restas simples"] },
            { bloque: 3, nombre: "Multiplicacion basica", meses: "Diciembre-Enero", temas: ["Multiplicacion basica"] },
            { bloque: 4, nombre: "Figuras planas", meses: "Febrero-Marzo", temas: ["Formas geometricas"] },
            { bloque: 5, nombre: "Medidas y fracciones basicas", meses: "Abril-Junio", temas: ["Sumas hasta 20", "Multiplicacion basica"] },
        ],
        espanol: [
            { bloque: 1, nombre: "Lectura fluida", meses: "Agosto-Septiembre", temas: ["Vocales", "Silabas simples"] },
            { bloque: 2, nombre: "Escritura correcta", meses: "Octubre-Noviembre", temas: ["Uso de la b y la v", "Sustantivos"] },
            { bloque: 3, nombre: "El sustantivo y el verbo", meses: "Diciembre-Enero", temas: ["Sustantivos"] },
            { bloque: 4, nombre: "Ortografia basica", meses: "Febrero-Marzo", temas: ["Uso de la b y la v"] },
            { bloque: 5, nombre: "Comprension lectora", meses: "Abril-Junio", temas: ["Silabas simples", "Sustantivos"] },
        ],
        ciencias: [
            { bloque: 1, nombre: "Los sistemas del cuerpo", meses: "Agosto-Septiembre", temas: ["Los sistemas del cuerpo"] },
            { bloque: 2, nombre: "Los ecosistemas", meses: "Octubre-Noviembre", temas: ["Los ecosistemas"] },
            { bloque: 3, nombre: "La Tierra y sus movimientos", meses: "Diciembre-Enero", temas: ["La Tierra y sus movimientos"] },
            { bloque: 4, nombre: "Fuerzas y movimiento", meses: "Febrero-Marzo", temas: ["Fuerzas y movimiento"] },
            { bloque: 5, nombre: "La materia y sus cambios", meses: "Abril-Junio", temas: ["La materia y sus cambios"] },
        ],
        historia: [
            { bloque: 1, nombre: "Los primeros mexicanos", meses: "Agosto-Septiembre", temas: ["Mexico prehispanico"] },
            { bloque: 2, nombre: "Los aztecas y los mayas", meses: "Octubre-Noviembre", temas: ["Los aztecas y los mayas"] },
            { bloque: 3, nombre: "La Conquista y la Colonia", meses: "Diciembre-Enero", temas: ["La conquista y la Colonia"] },
            { bloque: 4, nombre: "Mexico en el siglo XIX", meses: "Febrero-Marzo", temas: ["El siglo XIX mexicano", "Independencia de Mexico"] },
            { bloque: 5, nombre: "Mexico hoy", meses: "Abril-Junio", temas: ["Mexico contemporaneo"] },
        ],
    },
    "primaria-3": {
        matematicas: [
            { bloque: 1, nombre: "Multiplicacion y tablas", meses: "Agosto-Septiembre", temas: ["Multiplicacion basica"] },
            { bloque: 2, nombre: "Division exacta", meses: "Octubre-Noviembre", temas: ["Restas simples", "Multiplicacion basica"] },
            { bloque: 3, nombre: "Fracciones simples", meses: "Diciembre-Enero", temas: ["Sumas hasta 20", "Multiplicacion basica"] },
            { bloque: 4, nombre: "Geometria: perimetro y area", meses: "Febrero-Marzo", temas: ["Formas geometricas"] },
            { bloque: 5, nombre: "Estadistica basica", meses: "Abril-Junio", temas: ["Sumas hasta 20", "Restas simples"] },
        ],
        espanol: [
            { bloque: 1, nombre: "Lectura comprensiva avanzada", meses: "Agosto-Septiembre", temas: ["Sustantivos", "Silabas simples"] },
            { bloque: 2, nombre: "Ortografia y puntuacion", meses: "Octubre-Noviembre", temas: ["Uso de la b y la v"] },
            { bloque: 3, nombre: "Produccion de textos", meses: "Diciembre-Enero", temas: ["Sustantivos", "Uso de la b y la v"] },
            { bloque: 4, nombre: "Gramatica y analisis oracional", meses: "Febrero-Marzo", temas: ["Sustantivos"] },
            { bloque: 5, nombre: "Literatura y comunicacion oral", meses: "Abril-Junio", temas: ["Sustantivos", "Vocales"] },
        ],
        ciencias: [
            { bloque: 1, nombre: "Reproduccion de seres vivos", meses: "Agosto-Septiembre", temas: ["Reproduccion de seres vivos"] },
            { bloque: 2, nombre: "Nutricion de los seres vivos", meses: "Octubre-Noviembre", temas: ["La nutricion de los seres vivos"] },
            { bloque: 3, nombre: "Mezclas y soluciones", meses: "Diciembre-Enero", temas: ["Mezclas y soluciones"] },
            { bloque: 4, nombre: "Electricidad y magnetismo", meses: "Febrero-Marzo", temas: ["La electricidad y el magnetismo"] },
            { bloque: 5, nombre: "Ser humano y medio ambiente", meses: "Abril-Junio", temas: ["El ser humano y el medio ambiente"] },
        ],
        historia: [
            { bloque: 1, nombre: "Civilizaciones antiguas", meses: "Agosto-Septiembre", temas: ["Las civilizaciones antiguas del mundo"] },
            { bloque: 2, nombre: "Edad Media y Renacimiento", meses: "Octubre-Noviembre", temas: ["La Edad Media y el Renacimiento"] },
            { bloque: 3, nombre: "Los grandes descubrimientos", meses: "Diciembre-Enero", temas: ["Los grandes descubrimientos y la globalizacion temprana"] },
            { bloque: 4, nombre: "Revoluciones modernas", meses: "Febrero-Marzo", temas: ["Revoluciones que cambiaron el mundo"] },
            { bloque: 5, nombre: "El mundo en el siglo XX", meses: "Abril-Junio", temas: ["El mundo en el siglo XX"] },
        ],
    },
    "primaria-4": {
        matematicas: [
            { bloque: 1, nombre: "Numeros grandes y operaciones", meses: "Agosto-Septiembre", temas: ["Sumas hasta 20", "Multiplicacion basica"] },
        ],
        historia: [
            { bloque: 1, nombre: "Mexico prehispanico", meses: "Agosto-Septiembre", temas: ["Los aztecas y los mayas"] },
        ],
        ciencias: [
            { bloque: 1, nombre: "El cuerpo humano", meses: "Agosto-Septiembre", temas: ["El cuerpo humano"] },
        ],
    },
    "primaria-5": {
        matematicas: [
            { bloque: 1, nombre: "Fracciones y decimales", meses: "Agosto-Septiembre", temas: ["Restas simples", "Multiplicacion basica"] },
        ],
        historia: [
            { bloque: 1, nombre: "La Independencia", meses: "Agosto-Septiembre", temas: ["Independencia de Mexico"] },
        ],
        ciencias: [
            { bloque: 1, nombre: "Sistema solar", meses: "Agosto-Septiembre", temas: ["Sistema solar"] },
        ],
    },
    "primaria-6": {
        matematicas: [
            { bloque: 1, nombre: "Algebra basica", meses: "Agosto-Septiembre", temas: ["Sumas hasta 20", "Multiplicacion basica"] },
        ],
        historia: [
            { bloque: 1, nombre: "La Revolucion Mexicana", meses: "Agosto-Septiembre", temas: ["Mexico contemporaneo"] },
        ],
    },
};

// ===========================================================================
// GENERADOR
// ===========================================================================

function obtenerEjercicios(materia, tema) {
    const banco = BANCOS[materia] || {};
    return banco[tema] || [];
}

function shuffleArray(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function generarBloque(grado, materia, bloque, info) {
    const ejerciciosTodos = [];
    let idCounter = 0;

    for (const tema of info.temas) {
        const ejerciciosTema = obtenerEjercicios(materia, tema);
        for (const ej of ejerciciosTema) {
            idCounter++;
            ejerciciosTodos.push({
                id: `${grado}-${materia}-b${bloque}-${String(idCounter).padStart(3, "0")}`,
                tema,
                ...ej,
            });
        }
    }

    return {
        grado,
        materia,
        bloque,
        nombre: info.nombre,
        meses: info.meses,
        temas: info.temas,
        totalEjercicios: ejerciciosTodos.length,
        ejercicios: {
            v1: ejerciciosTodos.filter((e) => e.nivel === "v1").slice(0, 3),
            v2: ejerciciosTodos.filter((e) => e.nivel === "v2"),
            preview: ejerciciosTodos.slice(0, 3),
        },
        generado: new Date().toISOString(),
        version: "2.0",
    };
}

function main() {
    const args = process.argv.slice(2);
    const gradoFiltro = args.find((a) => a.startsWith("--grado="))?.split("=")[1];
    const materiaFiltro = args.find((a) => a.startsWith("--materia="))?.split("=")[1];

    let grados = Object.keys(CURRICULUM);
    if (gradoFiltro) grados = grados.filter((g) => g === gradoFiltro);

    let totalArch = 0;
    let totalEj = 0;

    console.log("\n Generador de ejercicios v2.0 — Chispito.mx");
    console.log("=".repeat(55));

    for (const grado of grados) {
        const materias = CURRICULUM[grado];
        console.log(`\n ${grado.toUpperCase()}`);

        for (const [materia, bloques] of Object.entries(materias)) {
            if (materiaFiltro && materia !== materiaFiltro) continue;

            const dirMateria = path.join(DESTINO, grado, materia);
            fs.mkdirSync(dirMateria, { recursive: true });

            for (const info of bloques) {
                const datos = generarBloque(grado, materia, info.bloque, info);
                const archivo = path.join(dirMateria, `bloque-${info.bloque}.json`);
                fs.writeFileSync(archivo, JSON.stringify(datos, null, 2), "utf8");

                const total = datos.totalEjercicios;
                totalEj += total;
                totalArch++;

                const icono = total > 5 ? "OK" : total > 0 ? "OK" : "SIN";
                console.log(`  [${icono}] ${materia}/bloque-${info.bloque}: ${total} ejercicios`);
            }

            // Indice de materia
            const indice = {
                grado,
                materia,
                bloques: bloques.map((b) => ({
                    bloque: b.bloque,
                    nombre: b.nombre,
                    meses: b.meses,
                    url: `/${grado}/${materia}/bloque-${b.bloque}`,
                })),
            };
            fs.writeFileSync(path.join(dirMateria, "indice.json"), JSON.stringify(indice, null, 2));
        }
    }

    console.log("\n" + "=".repeat(55));
    console.log("GENERACION COMPLETA");
    console.log(`  Archivos JSON : ${totalArch}`);
    console.log(`  Ejercicios    : ${totalEj}`);
    console.log(`  Destino       : src/data/exercises/`);
    console.log("=".repeat(55) + "\n");
}

main();
