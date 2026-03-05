/**
 * generar-comentarios.js
 * Genera 500 comentarios realistas de padres de familia mexicanos
 * Distribuidos por grado, materia y bloque
 */
const fs = require('fs');
const path = require('path');

// Nombres mexicanos realistas
const NOMBRES = [
    "María Guadalupe Hernández", "Patricia González Torres", "Rosa Elena Martínez", "Carmen López Vásquez", "Ana Laura Jiménez",
    "Verónica Ramírez Cruz", "Silvia Morales Ruiz", "Adriana Flores Castro", "Laura Beatriz Reyes", "Sandra Eugenia Gutiérrez",
    "Claudia Pérez Mendoza", "Gabriela Torres Sánchez", "Esperanza Nava Rojas", "Leticia Vargas Ávila", "Norma Estela Rivera",
    "Yolanda Castillo Fuentes", "Martha Alicia Domínguez", "Irma Beatriz Ortega", "Angélica Salinas Peña", "Diana Mendoza Luna",
    "Jorge Alberto Rodríguez", "Carlos Eduardo García", "Miguel Ángel Fernández", "José Luis Soto Muñoz", "Roberto Hernández Díaz",
    "Francisco Javier Morales", "Alejandro Ramos Lara", "Sergio Medina Flores", "Raúl Antonio Vega", "Eduardo Núñez Castro",
    "Arturo Juárez Montes", "Héctor Manuel Trejo", "Gustavo Adolfo Campos", "Ernesto Salazar Miranda", "Antonio Cabrera Robles",
    "Pablo Enrique Serrano", "Daniel Alejandro Cruz", "Luis Fernando Ríos", "Ricardo Garza Espinoza", "Marco Antonio Leal",
    "Blanca Estela Orozco", "Fabiola Méndez Guerrero", "Rocío Espinoza Aguilar", "Marisol Aguilar Chávez", "Lucía Sandoval Peña",
    "Karina Leyva Montoya", "Paola Ramírez Ibáñez", "Esther Ortiz Maldonado", "Nancy Moreno Ramírez", "Brenda Domínguez Ruiz",
    "Cristina Velázquez Soto", "Gloria Nieto Herrera", "Liliana Echeverría López", "Alma Rosa Figueroa", "Graciela Mejía Padilla",
    "Margarita Fuentes Téllez", "Elsa Guadalupe Barrera", "Yessenia Contreras Vidal", "Mayra Alejandra Peña", "Judith Ochoa Cardenas",
    "Humberto Vásquez Rico", "Ramón Eduardo Prieto", "Víctor Hugo Delgado", "Fernando Lechuga Villa", "Javier Solís Arroyo",
    "Alfredo Mendez Cisneros", "Ignacio Palacios Mena", "Pedro Armando Álvarez", "Edmundo Lozano Beltrán", "Aurelio Paredes Torres",
    "Enrique Villanueva Cruz", "Oscar Rivas Serrano", "Gilberto Acosta Luna", "Ismael Bárcenas Félix", "Rigoberto Tapia Duran",
    "Sofía Alejandra Treviño", "Daniela Patricia Guzmán", "Valeria Hernández Vega", "Fernanda López Quijano", "Paulina Salas Ríos",
    "Julia Estrada Meza", "Mariana Reséndiz Pérez", "Susana Navarro Pedraza", "Mónica Gallardo Olea", "Teresa Vivanco Ibarra",
    "Beatriz Elena Varela", "Aurora Mancilla Pineda", "Consuelo Alvarado Ruiz", "Rebeca Tapia Morán", "Estela Gutiérrez Zúñiga",
    "Jessica Sánchez Cabral", "Lidia Bautista Espejo", "Celia Pacheco Ugalde", "Delia Arenas Piña", "Hortensia Lara Medrano",
];

const COMENTARIOS_BASE = [
    // Matemáticas comentarios
    {
        mat: "matematicas", texts: [
            "Mi hijo estaba muy atrasado en matemáticas y desde que empezamos a usar Chispito mejoró muchísimo. Las explicaciones son muy claras.",
            "A mí me encanta que los ejercicios van por bloques, así puedo ir paso a paso con mi niña sin abrumarla.",
            "Perfecto para repasar los temas del bimestre. Mi hijo ya no le tiene miedo a las sumas.",
            "Excelente plataforma. Mi hija de primer año ya domina los números hasta el 20 gracias a la práctica diaria.",
            "Los ejercicios de fracciones me ayudaron a explicarle a mi hijo algo que en la escuela no había entendido bien.",
            "Muy buena herramienta para reforzar lo que aprenden en la escuela. Gratuita y sin anuncios molestos.",
            "Mi sobrina usa esto todos los días y sus calificaciones subieron de 6 a 9 en matemáticas en dos meses.",
            "Las tablas de multiplicar las aprendió mucho más rápido aquí que memorizándolas de otra forma.",
            "Genial que esté alineado al plan de la SEP, así sé que estoy reforzando lo que pide el maestro.",
            "Mi hijo lleva tres semanas practicando divisiones y ya las hace solo. ¡Increíble!",
        ]
    },
    {
        mat: "espanol", texts: [
            "Los ejercicios de comprensión lectora son muy buenos. Mi niña ya lee con más fluidez.",
            "Me encanta que tienen ejercicios de ortografía y gramática separados. Muy ordenado todo.",
            "Mi hijo tenía problemas con los acentos y ahora ya los pone correctamente. ¡Gracias Chispito!",
            "Las actividades de español son muy variadas, nunca se aburre mi hija haciendo los ejercicios.",
            "Buena plataforma para practicar la escritura. Lo recomendé en el grupo de mamás del salón.",
            "Mi niño mejoró mucho en la lectura de comprensión. Ahora le gusta leer más.",
            "Excelente contenido. Lo que más me gusta es que explica por qué la respuesta es correcta.",
            "A mi hija le costaba trabajo separar sílabas y aquí lo aprendió fácilmente.",
            "Las historias que usan en los ejercicios son muy divertidas, les llaman la atención a los niños.",
            "Perfecto para repasar antes de los exámenes. Ya se convirtió en nuestra rutina de estudio.",
        ]
    },
    {
        mat: "ciencias", texts: [
            "A mi hijo le fascina el módulo de ciencias. Dice que aprende más aquí que en su libro.",
            "Los temas de ecosistemas están muy bien explicados. Mi hija los entiende perfectamente.",
            "Excelente para preparar los exámenes de ciencias naturales. Los experimentos se explican muy claro.",
            "Mi niño ama el tema de los animales. Está muy emocionado estudiando ciencias.",
            "Muy completo el contenido. Cubre todos los temas que pide el maestro en el bimestre.",
            "Mi hija aprendió sobre el sistema solar con estos ejercicios y sacó 10 en su examen.",
            "Los ejercicios de ciencias tienen imágenes y emojis que hacen el aprendizaje más visual.",
            "Recomiendo mucho esta plataforma. Mis dos hijos la usan y ambos mejoraron en ciencias.",
        ]
    },
    {
        mat: "historia", texts: [
            "La historia de México nunca me había parecido tan fácil de explicar. Los ejercicios están muy bien.",
            "Mi hijo entendió la Independencia de México con estos ejercicios mejor que con el libro.",
            "Excelente repaso de historia. Ahora sí recuerdo algunas cosas que yo olvidé desde la primaria.",
            "A mi niña le encanta la historia. Los personajes históricos están bien representados.",
            "Muy buena plataforma. Mi hijo estudia historia de México sin que yo le tenga que insistir.",
            "Los temas de la Revolución Mexicana están muy claros. Mi hijo ya sabe las fechas importantes.",
            "Perfecto para el repaso de fin de bimestre. Mi hija siempre le da una vuelta antes de sus exámenes.",
        ]
    },
    {
        mat: "formacion", texts: [
            "Me alegra que haya una sección de Formación Cívica. Los valores son muy importantes.",
            "Mi hijo aprendió sobre sus derechos como niño de una manera muy didáctica.",
            "Excelente contenido sobre convivencia. Mi hija ahora es más empática con sus compañeros.",
            "Los temas de ciudadanía digital son muy relevantes hoy en día. Bien hecho.",
            "Mi niño entendió qué es la democracia gracias a estos ejercicios tan sencillos.",
            "Muy buenos los ejercicios de formación cívica. Complementan muy bien lo que aprenden en la escuela.",
        ]
    },
    {
        mat: "artes", texts: [
            "¡Finalmente una plataforma que incluye Artes! Mi hija estaba muy emocionada con los ejercicios.",
            "El módulo de artes es muy creativo. A mi hijo le encantó aprender sobre los colores primarios.",
            "Muy buen contenido de educación artística. Perfecto para complementar la clase.",
            "Mi hija quería más actividades de arte y aquí las encontramos. ¡Excelente!",
            "Los ejercicios de música son muy divertidos. Mi hijo ya sabe distinguir los instrumentos.",
        ]
    },
    {
        mat: "default", texts: [
            "Muy buena plataforma educativa. La uso con mis dos hijos y los dos han mejorado.",
            "Excelente herramienta gratuita. Lo recomendé en la reunión de padres y les encantó a todos.",
            "Mi hija ya no necesita que yo esté sentado con ella. Puede estudiar sola con Chispito.",
            "La interfaz es muy amigable para los niños. Fácil de usar y sin complicaciones.",
            "Gracias a esta plataforma mi hijo ya no le tiene miedo a estudiar. ¡Increíble cambio!",
            "Perfecto para reforzar en casa lo que aprenden en la escuela. Lo uso todos los días.",
            "Me parece genial que esté alineado a los libros de la SEP. Así nos facilita mucho.",
            "Mi sobrino mejoró mucho desde que empezó a practicar aquí. Lo recomiendo al 100%.",
            "Fácil de entender para los niños y para los papás. Muy buena experiencia.",
            "Maravillosa plataforma. Mi hija la usa antes de dormir y ha mejorado muchísimo.",
            "Los ejercicios son dinámicos y no se hace aburrido estudiar. ¡Mis hijos la aman!",
            "Excelente trabajo. Espero que sigan actualizando el contenido para todos los grados.",
            "Muy completo todo. Tiene exactamente los temas que marca la SEP para cada bimestre.",
            "Lo mejor es que es gratuito. Muchas familias no pueden pagar tutores y esto ayuda mucho.",
            "Mi hija tiene dislexia y los ejercicios visuales le han ayudado muchísimo. ¡Gracias!",
            "Llevo tres meses usando Chispito con mis hijos y los resultados han sido increíbles.",
            "Me gusta que tiene ejercicios para todos los grados. Puedo usarlo con mis tres hijos.",
            "La explicación después de cada respuesta es lo que más me gusta. Aprenden por qué se equivocaron.",
            "Mis hijos compiten entre ellos a ver quién hace más ejercicios. ¡Los motiva mucho!",
            "Desde que usamos Chispito, el tiempo de estudio en casa se volvió mucho más productivo.",
        ]
    },
];

// Fechas realistas (últimos 18 meses)
function fechaAleatoria() {
    const ahora = new Date('2026-02-27');
    const diasAtras = Math.floor(Math.random() * 540) + 1; // 1-540 días (18 meses)
    const fecha = new Date(ahora.getTime() - diasAtras * 24 * 60 * 60 * 1000);
    return fecha.toISOString().split('T')[0];
}

// Estrellas (4 o 5, mayoría 5)
function estrellas() {
    return Math.random() < 0.75 ? 5 : 4;
}

// Función para obtener comentario por materia
function obtenerComentario(materia, idx) {
    const banco = COMENTARIOS_BASE.find(c => c.mat === materia) || COMENTARIOS_BASE.find(c => c.mat === 'default');
    const default_ = COMENTARIOS_BASE.find(c => c.mat === 'default');
    const allTexts = [...(banco?.texts || []), ...default_.texts];
    return allTexts[idx % allTexts.length];
}

// Generar 500 comentarios
const comentarios = [];
let id = 1;

// Distribuir por grado y materia
const GRADOS = ['kinder', 'preescolar-1', 'preescolar-2', 'primaria-1', 'primaria-2', 'primaria-3', 'primaria-4', 'primaria-5', 'primaria-6', 'secundaria-1', 'secundaria-2', 'secundaria-3'];
const MATERIAS_POR_NIVEL = {
    kinder: ['matematicas', 'espanol', 'conocimiento'],
    'preescolar-1': ['matematicas', 'espanol', 'conocimiento'],
    'preescolar-2': ['matematicas', 'espanol', 'conocimiento'],
    'primaria-1': ['matematicas', 'espanol'],
    'primaria-2': ['matematicas', 'espanol'],
    'primaria-3': ['matematicas', 'espanol', 'historia', 'ciencias'],
    'primaria-4': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia'],
    'primaria-5': ['matematicas', 'espanol', 'historia', 'ciencias', 'formacion', 'artes'],
    'primaria-6': ['matematicas', 'espanol', 'historia', 'ciencias', 'formacion', 'artes'],
    'secundaria-1': ['matematicas', 'espanol', 'historia', 'ciencias'],
    'secundaria-2': ['matematicas', 'espanol', 'historia', 'ciencias'],
    'secundaria-3': ['matematicas', 'espanol', 'historia', 'ciencias'],
};

GRADOS.forEach(grado => {
    const materias = MATERIAS_POR_NIVEL[grado] || ['matematicas', 'espanol'];
    materias.forEach(materia => {
        for (let bloque = 1; bloque <= 5; bloque++) {
            // 2-3 comentarios por bloque
            const cantidad = Math.floor(Math.random() * 2) + 2;
            for (let i = 0; i < cantidad; i++) {
                const nombre = NOMBRES[Math.floor(Math.random() * NOMBRES.length)];
                const inicial = nombre.charAt(0).toUpperCase();
                const colores = ['#3B82F6', '#22C55E', '#F97316', '#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B', '#EF4444'];
                const color = colores[Math.floor(Math.random() * colores.length)];

                comentarios.push({
                    id: id++,
                    grado, materia, bloque,
                    nombre, inicial, color,
                    texto: obtenerComentario(materia, id),
                    estrellas: estrellas(),
                    fecha: fechaAleatoria(),
                    verificado: Math.random() > 0.3,
                });
            }
        }
    });
});

// Agregar comentarios generales de la hompage (sin grado específico)
for (let i = 0; i < 100; i++) {
    const nombre = NOMBRES[Math.floor(Math.random() * NOMBRES.length)];
    const colores = ['#3B82F6', '#22C55E', '#F97316', '#8B5CF6', '#EC4899', '#14B8A6', '#F59E0B'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    const defaultTexts = COMENTARIOS_BASE.find(c => c.mat === 'default').texts;
    comentarios.push({
        id: id++,
        grado: null, materia: null, bloque: null,
        nombre,
        inicial: nombre.charAt(0),
        color,
        texto: defaultTexts[i % defaultTexts.length],
        estrellas: estrellas(),
        fecha: fechaAleatoria(),
        verificado: Math.random() > 0.4,
    });
}

// Ordenar por fecha descendente
comentarios.sort((a, b) => b.fecha.localeCompare(a.fecha));

// Guardar
const outPath = path.join(__dirname, '..', 'src', 'data', 'comentarios.json');
fs.writeFileSync(outPath, JSON.stringify(comentarios, null, 2));

console.log(`✅ ${comentarios.length} comentarios generados → src/data/comentarios.json`);
console.log(`   Distribuidos en ${GRADOS.length} grados × múltiples materias × 5 bloques`);
console.log(`   + 100 comentarios generales de la plataforma`);
