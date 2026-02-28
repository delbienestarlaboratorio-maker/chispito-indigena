const fs = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..', 'src', 'data', 'exercises');

// ══════════════════════════════════════════════════════════════════════
// FORMACIÓN CÍVICA Y ÉTICA — todos los grados de Primaria
// FORMACION en Secundaria (ya existe como carpeta, solo añadir más ej.)
// ══════════════════════════════════════════════════════════════════════
const CIVICA_PRIMARIA = {
    'primaria-1': [
        { b: 'bloque-1', bNum: 1, nombre: 'Yo y mis emociones', meses: 'Agosto-Septiembre', temas: ['¿Qué siento?', 'Emociones básicas'] },
        { b: 'bloque-2', bNum: 2, nombre: 'Mis derechos y mi cuerpo', meses: 'Septiembre-Octubre', temas: ['Mi cuerpo me pertenece', 'Derechos del niño'] },
        { b: 'bloque-3', bNum: 3, nombre: 'Mis responsabilidades', meses: 'Octubre-Noviembre', temas: ['Responsabilidades en casa', 'Responsabilidades en la escuela'] },
        { b: 'bloque-4', bNum: 4, nombre: 'Vivir en comunidad', meses: 'Noviembre-Diciembre', temas: ['Reglas de convivencia', 'Respeto a los demás'] },
        { b: 'bloque-5', bNum: 5, nombre: 'Cuidar el entorno', meses: 'Enero-Junio', temas: ['Cuidado de la naturaleza', 'Reciclaje y limpieza'] },
    ],
    'primaria-2': [
        { b: 'bloque-1', bNum: 1, nombre: 'Mi identidad', meses: 'Agosto-Septiembre', temas: ['¿Quién soy yo?', 'Lo que me hace único'] },
        { b: 'bloque-2', bNum: 2, nombre: 'Honestidad y valores', meses: 'Septiembre-Octubre', temas: ['Decir la verdad', 'Valores en la amistad'] },
        { b: 'bloque-3', bNum: 3, nombre: 'Trabajo en equipo', meses: 'Octubre-Noviembre', temas: ['Colaboración', 'Respeto de opiniones'] },
        { b: 'bloque-4', bNum: 4, nombre: 'Mi comunidad', meses: 'Noviembre-Diciembre', temas: ['Personas de mi comunidad', 'Servicios públicos'] },
        { b: 'bloque-5', bNum: 5, nombre: 'México: mi país', meses: 'Enero-Junio', temas: ['Símbolos patrios', 'Tradiciones mexicanas'] },
    ],
    'primaria-3': [
        { b: 'bloque-1', bNum: 1, nombre: 'Derechos humanos básicos', meses: 'Agosto-Septiembre', temas: ['¿Qué son los derechos?', 'Mis derechos en la escuela'] },
        { b: 'bloque-2', bNum: 2, nombre: 'La democracia', meses: 'Septiembre-Octubre', temas: ['¿Qué es votar?', 'Tomar decisiones juntos'] },
        { b: 'bloque-3', bNum: 3, nombre: 'Justicia e igualdad', meses: 'Octubre-Noviembre', temas: ['Tratar a todos igual', 'No discriminación'] },
        { b: 'bloque-4', bNum: 4, nombre: 'Resolución de conflictos', meses: 'Noviembre-Diciembre', temas: ['Resolver problemas sin violencia', 'El diálogo'] },
        { b: 'bloque-5', bNum: 5, nombre: 'Ciudadanía activa', meses: 'Enero-Junio', temas: ['Participar en la comunidad', 'Voluntariado'] },
    ],
    'primaria-4': [
        { b: 'bloque-1', bNum: 1, nombre: 'La Constitución Mexicana', meses: 'Agosto-Septiembre', temas: ['Artículos principales', 'Garantías individuales'] },
        { b: 'bloque-2', bNum: 2, nombre: 'Formas de gobierno', meses: 'Septiembre-Octubre', temas: ['Democracia representativa', 'Poderes de la Unión'] },
        { b: 'bloque-3', bNum: 3, nombre: 'Diversidad cultural', meses: 'Octubre-Noviembre', temas: ['Pueblos indígenas de México', 'Respeto a la diversidad'] },
        { b: 'bloque-4', bNum: 4, nombre: 'Medio ambiente y ética', meses: 'Noviembre-Diciembre', temas: ['Desarrollo sustentable', 'Responsabilidad ambiental'] },
        { b: 'bloque-5', bNum: 5, nombre: 'Participación ciudadana', meses: 'Enero-Junio', temas: ['El voto', 'Organizaciones civiles'] },
    ],
    'primaria-5': [
        { b: 'bloque-1', bNum: 1, nombre: 'Identidad nacional', meses: 'Agosto-Septiembre', temas: ['México y su historia', 'Orgullo mexicano'] },
        { b: 'bloque-2', bNum: 2, nombre: 'Economía y trabajo', meses: 'Septiembre-Octubre', temas: ['El dinero y la economía', 'Derechos laborales'] },
        { b: 'bloque-3', bNum: 3, nombre: 'Globalización', meses: 'Octubre-Noviembre', temas: ['México en el mundo', 'Organismos internacionales'] },
        { b: 'bloque-4', bNum: 4, nombre: 'Tecnología y ética', meses: 'Noviembre-Diciembre', temas: ['Uso responsable de internet', 'Privacidad digital'] },
        { b: 'bloque-5', bNum: 5, nombre: 'Derechos humanos avanzados', meses: 'Enero-Junio', temas: ['DDHH internacionales', 'ONU y México'] },
    ],
    'primaria-6': [
        { b: 'bloque-1', bNum: 1, nombre: 'Transición a secundaria', meses: 'Agosto-Septiembre', temas: ['Nuevas responsabilidades', 'Proyecto de vida inicial'] },
        { b: 'bloque-2', bNum: 2, nombre: 'Sistema político mexicano', meses: 'Septiembre-Octubre', temas: ['Partidos políticos', 'Elecciones en México'] },
        { b: 'bloque-3', bNum: 3, nombre: 'Justicia social', meses: 'Octubre-Noviembre', temas: ['Pobreza y desigualdad', 'Acciones para un México justo'] },
        { b: 'bloque-4', bNum: 4, nombre: 'Violencia y paz', meses: 'Noviembre-Diciembre', temas: ['No violencia', 'Cultura de paz'] },
        { b: 'bloque-5', bNum: 5, nombre: 'Mi legado ciudadano', meses: 'Enero-Junio', temas: ['¿Qué dejaré al mundo?', 'Compromisos ciudadanos'] },
    ],
};

// Banco de preguntas de Formación Cívica
function getCivicaEjercicios(grado, temas) {
    const nivel = parseInt(grado.replace('primaria-', '')) || 1;

    const bancos = {
        1: [
            { tipo: 'multiple_choice', pregunta: '¿Cuál de estos es un derecho de los niños?', opciones: ['Trabajar', 'Ir a la escuela', 'Manejar autos', 'Votar'], respuesta: 'Ir a la escuela', explicacion: 'La educación es un derecho de todos los niños en México y en el mundo.' },
            { tipo: 'true_false', pregunta: 'Respetar a los demás es una responsabilidad', respuesta: 'true', explicacion: 'Correcto. Respetar a las personas y sus derechos es una responsabilidad de todos.' },
            { tipo: 'fill_blank', pregunta: 'El respeto y la honestidad son ___', respuesta: 'valores', explicacion: 'Los valores son principios que guían nuestro comportamiento.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué hacemos cuando hay un problema en el salón?', opciones: ['Gritar', 'Dialogar y buscar soluciones', 'Ignorarlo', 'Golpear'], respuesta: 'Dialogar y buscar soluciones', explicacion: 'El diálogo es la mejor herramienta para resolver conflictos pacíficamente.' },
            { tipo: 'fill_blank', pregunta: 'En casa y en la escuela tenemos ___ que cumplir', respuesta: 'reglas', explicacion: 'Las reglas nos ayudan a vivir mejor en comunidad.' },
        ],
        2: [
            { tipo: 'multiple_choice', pregunta: '¿Qué son los símbolos patrios de México?', opciones: ['La bandera, escudo e himno', 'El peso, el petróleo y el maíz', 'El chile, el nopal y la tortilla', 'El mariachi, la danza y el huipil'], respuesta: 'La bandera, escudo e himno', explicacion: 'Los 3 símbolos patrios de México son: la Bandera Nacional, el Escudo Nacional y el Himno Nacional.' },
            { tipo: 'fill_blank', pregunta: 'La bandera de México tiene 3 colores: verde, ___ y rojo', respuesta: 'blanco', explicacion: 'Verde, blanco y rojo son los colores de la Bandera Nacional de México.' },
            { tipo: 'true_false', pregunta: 'Decir la verdad aunque sea difícil es ser honesto', respuesta: 'true', explicacion: 'La honestidad es decir la verdad siempre, aunque nos cueste.' },
            { tipo: 'multiple_choice', pregunta: 'Trabajar en equipo significa...', opciones: ['Hacer todo solo', 'Colaborar y ayudarse mutuamente', 'Copiarle al compañero', 'Competir contra todos'], respuesta: 'Colaborar y ayudarse mutuamente', explicacion: 'En equipo todos contribuyen, se apoyan y comparten responsabilidades.' },
        ],
        3: [
            { tipo: 'multiple_choice', pregunta: '¿Qué es la discriminación?', opciones: ['Ayudar a todos por igual', 'Tratar mal a alguien por diferente', 'Respetar la diversidad', 'Votar en democracia'], respuesta: 'Tratar mal a alguien por diferente', explicacion: 'La discriminación es dar trato desigual a alguien por su origen, color, género u opinión.' },
            { tipo: 'true_false', pregunta: 'En México todos tenemos los mismos derechos sin importar nuestra raza o religión', respuesta: 'true', explicacion: 'La Constitución garantiza igualdad para todos los mexicanos.' },
            { tipo: 'fill_blank', pregunta: 'El ___ es una forma de expresar nuestra preferencia en democracia', respuesta: 'voto', explicacion: 'A través del voto elegimos a quienes nos gobiernan.' },
            { tipo: 'multiple_choice', pregunta: '¿Cuál es la mejor manera de resolver un conflicto?', opciones: ['Con violencia', 'Huyendo', 'Con diálogo y acuerdo', 'Ignorando el problema'], respuesta: 'Con diálogo y acuerdo', explicacion: 'El diálogo pacífico nos permite encontrar soluciones que beneficien a todos.' },
        ],
        4: [
            { tipo: 'multiple_choice', pregunta: '¿Cuántos poderes tiene el gobierno federal de México?', opciones: ['1', '2', '3', '4'], respuesta: '3', explicacion: 'Los 3 poderes son: Ejecutivo (Presidente), Legislativo (Congreso) y Judicial (SCJN).' },
            { tipo: 'fill_blank', pregunta: 'La Constitución de México se promulgó en el año ___', respuesta: '1917', explicacion: 'La Constitución Política de los Estados Unidos Mexicanos fue promulgada en 1917.' },
            { tipo: 'true_false', pregunta: 'México es una república federal democrática', respuesta: 'true', explicacion: 'Correcto. República = sin rey, Federal = con estados autónomos, Democrática = el pueblo elige.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué artículo de la Constitución establece el derecho a la educación?', opciones: ['Artículo 3°', 'Artículo 1°', 'Artículo 7°', 'Artículo 27°'], respuesta: 'Artículo 3°', explicacion: 'El Artículo 3° de la Constitución garantiza el derecho a la educación laica y gratuita.' },
            { tipo: 'fill_blank', pregunta: 'Los pueblos ___ son las comunidades originarias de México', respuesta: 'indígenas', explicacion: 'México tiene 68 pueblos indígenas con sus propias lenguas y culturas.' },
        ],
        5: [
            { tipo: 'multiple_choice', pregunta: '¿Qué es el INE?', opciones: ['Instituto Nacional Económico', 'Instituto Nacional Electoral', 'Instituto de Niños Educados', 'Instituto Nuclear Estatal'], respuesta: 'Instituto Nacional Electoral', explicacion: 'El INE organiza las elecciones en México y garantiza que sean libres y justas.' },
            { tipo: 'fill_blank', pregunta: 'La ONU es la ___ de las Naciones Unidas', respuesta: 'Organización', explicacion: 'La ONU fue fundada en 1945 para mantener la paz y la cooperación internacional.' },
            { tipo: 'true_false', pregunta: 'El uso responsable de las redes sociales incluye no compartir datos personales con extraños', respuesta: 'true', explicacion: 'En internet es importante proteger tu privacidad: no compartas dirección, teléfono o fotos íntimas.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué significa "globalización"?', opciones: ['Construir más globos', 'Interconexión económica y cultural del mundo', 'Viajes al espacio', 'Solo hablar inglés'], respuesta: 'Interconexión económica y cultural del mundo', explicacion: 'La globalización conecta países en economía, cultura, tecnología y comunicación.' },
        ],
        6: [
            { tipo: 'multiple_choice', pregunta: '¿Cada cuánto tiempo hay elecciones presidenciales en México?', opciones: ['3 años', '4 años', '6 años', '8 años'], respuesta: '6 años', explicacion: 'En México el Presidente gobierna por 6 años sin posibilidad de reelección.' },
            { tipo: 'fill_blank', pregunta: 'La "cultura de paz" busca resolver conflictos sin ___', respuesta: 'violencia', explicacion: 'La cultura de paz promueve el diálogo, el respeto y la cooperación.' },
            { tipo: 'true_false', pregunta: 'En México cualquier ciudadano mayor de 18 años puede votar', respuesta: 'true', explicacion: 'Correcto. El voto en México es universal desde los 18 años.' },
            { tipo: 'multiple_choice', pregunta: '¿Qué es la justicia social?', opciones: ['Castigar a criminales', 'Distribución justa de recursos y derechos', 'Solo dar dinero a los pobres', 'Imponer leyes'], respuesta: 'Distribución justa de recursos y derechos', explicacion: 'La justicia social busca que todos tengan acceso a educación, salud, trabajo y dignidad.' },
            { tipo: 'fill_blank', pregunta: 'Ser ciudadano activo significa ___ en la vida de la comunidad', respuesta: 'participar', explicacion: 'Un ciudadano activo vota, respeta leyes, cuida su entorno y participa en decisiones colectivas.' },
        ],
    };

    const ejsTema = bancos[nivel] || bancos[3];

    // Mezclar con variaciones por tema
    const resultado = [];
    temas.forEach((tema, ti) => {
        ejsTema.forEach((ej, ei) => {
            if ((ti + ei) % 2 === 0 || resultado.length < 6) resultado.push(ej);
        });
    });

    return resultado.slice(0, 8);
}

function generarBloqueFormacion(grado, bloqueData) {
    const { b, bNum, nombre, meses, temas } = bloqueData;
    const dir = path.join(BASE, grado, 'formacion');
    const archivo = path.join(dir, `${b}.json`);

    // También crear una carpeta 'civica' como alias para los que usan ese nombre
    const dirCivica = path.join(BASE, grado, 'civica');
    const archivoCivica = path.join(dirCivica, `${b}.json`);

    const ejs = getCivicaEjercicios(grado, temas);
    const mid = Math.ceil(ejs.length / 2);
    const pfx = `${grado}-formacion-b${bNum}`;
    let c = 1;

    const toFormatted = (e, nivel) => ({
        id: `${pfx}-${String(c++).padStart(3, '0')}`,
        tema: temas[0],
        tipo: e.tipo,
        nivel,
        pregunta: e.pregunta,
        ...(e.opciones ? { opciones: e.opciones } : {}),
        respuestaCorrecta: e.respuesta,
        explicacion: e.explicacion,
    });

    const v1 = ejs.slice(0, mid).map(e => toFormatted(e, 'v1'));
    const v2 = ejs.slice(mid).map(e => toFormatted(e, 'v2'));
    const preview = [...v1.slice(0, 2), ...v2.slice(0, 1)];

    const data = {
        grado, materia: 'formacion', bloque: bNum, nombre, meses, temas,
        totalEjercicios: v1.length + v2.length,
        ejercicios: { v1, v2, preview },
        generado: new Date().toISOString(),
        version: '2.0',
    };

    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(archivo, JSON.stringify(data, null, 2));

    // Copia como 'civica' también para compatibilidad con curriculum.ts
    fs.mkdirSync(dirCivica, { recursive: true });
    const dataCivica = { ...data, materia: 'civica' };
    fs.writeFileSync(archivoCivica, JSON.stringify(dataCivica, null, 2));

    return v1.length + v2.length;
}

// Ejecutar para todos los grados de primaria
let total = 0;
Object.entries(CIVICA_PRIMARIA).forEach(([grado, bloques]) => {
    bloques.forEach(bloque => {
        const count = generarBloqueFormacion(grado, bloque);
        total += count;
        console.log(`✅ ${grado}/formacion+civica/${bloque.b} — ${count} ejercicios`);
    });
});

// Verificar que secundaria también tiene formacion (ya generada)
['secundaria-1', 'secundaria-2', 'secundaria-3'].forEach(grado => {
    const dir = path.join(BASE, grado, 'formacion');
    if (fs.existsSync(dir)) {
        const count = fs.readdirSync(dir).length;
        console.log(`✅ ${grado}/formacion ya existe con ${count} bloques`);
    }
});

console.log(`\n🎉 Formación Cívica creada: ${total} ejercicios nuevos`);
