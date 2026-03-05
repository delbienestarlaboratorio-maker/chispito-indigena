// Mapa completo de imágenes por grado+materia para el Universo Chispito
// Cada imagen muestra a Nico + el compañero del grado estudiando esa materia

export interface ImagenMateria {
    src: string;
    compañero: string;
    emojiCompañero: string;
    fraseMotivadora: string;
    colorAccento: string;
}

// Tipo de las claves del mapa
export type GradoMateriaKey = string; // formato: "kinder-matematicas", "primaria-1-espanol", etc.

export const IMAGENES_MATERIA: Record<GradoMateriaKey, ImagenMateria> = {
    // ── KINDER ── compañero: Luna 🌙
    "kinder-matematicas": {
        src: "/materias/kinder-matematicas.png",
        compañero: "Luna",
        emojiCompañero: "🌙",
        fraseMotivadora: "¡Luna y Nico cuentan contigo! Los números son tus amigos.",
        colorAccento: "#A78BFA",
    },
    "kinder-espanol": {
        src: "/materias/kinder-espanol.png",
        compañero: "Luna",
        emojiCompañero: "🌙",
        fraseMotivadora: "¡Cada letra que aprendes ilumina tu camino!",
        colorAccento: "#A78BFA",
    },
    "kinder-conocimiento": {
        src: "/materias/kinder-conocimiento.png",
        compañero: "Luna",
        emojiCompañero: "🌙",
        fraseMotivadora: "El mundo está lleno de maravillas por descubrir. ¡Vamos a explorar!",
        colorAccento: "#A78BFA",
    },
    "kinder-artes": {
        src: "/materias/kinder-artes.png",
        compañero: "Luna",
        emojiCompañero: "🌙",
        fraseMotivadora: "¡Tu creatividad no tiene límites, igual que el universo!",
        colorAccento: "#A78BFA",
    },

    // ── 1° PRIMARIA ── compañero: Pipo ⭐
    "primaria-1-matematicas": {
        src: "/materias/primaria1-matematicas.png",
        compañero: "Pipo",
        emojiCompañero: "⭐",
        fraseMotivadora: "¡Pipo dice que equivocarse es el cerebro haciendo ejercicio!",
        colorAccento: "#FCD34D",
    },
    "primaria-1-espanol": {
        src: "/materias/primaria1-espanol.png",
        compañero: "Pipo",
        emojiCompañero: "⭐",
        fraseMotivadora: "¡Las palabras son superpoderes! Escribe y conquista el mundo.",
        colorAccento: "#FCD34D",
    },
    "primaria-1-conocimiento": {
        src: "/materias/primaria1-conocimiento.png",
        compañero: "Pipo",
        emojiCompañero: "⭐",
        fraseMotivadora: "¡El que no pregunta no aprende! ¿Cuántas preguntas tienes hoy?",
        colorAccento: "#FCD34D",
    },
    "primaria-1-formacion": {
        src: "/materias/primaria1-formacion.png",
        compañero: "Pipo",
        emojiCompañero: "⭐",
        fraseMotivadora: "Ser amable y respetuoso es la habilidad más importante de todas.",
        colorAccento: "#FCD34D",
    },

    // ── 2° PRIMARIA ── compañero: Bruma ☁️
    "primaria-2-matematicas": {
        src: "/materias/primaria2-matematicas.png",
        compañero: "Bruma",
        emojiCompañero: "☁️",
        fraseMotivadora: "Piensa 3 segundos antes de responder. ¡Las mejores respuestas nacen en la calma!",
        colorAccento: "#94A3B8",
    },
    "primaria-2-espanol": {
        src: "/materias/primaria2-espanol.png",
        compañero: "Bruma",
        emojiCompañero: "☁️",
        fraseMotivadora: "Bruma dice: las mejores historias vienen de quien piensa profundo.",
        colorAccento: "#94A3B8",
    },
    "primaria-2-ciencias": {
        src: "/materias/primaria2-ciencias.png",
        compañero: "Bruma",
        emojiCompañero: "☁️",
        fraseMotivadora: "¡La naturaleza tiene sus propios secretos! ¿Puedes descubrirlos?",
        colorAccento: "#94A3B8",
    },
    "primaria-2-formacion": {
        src: "/materias/primaria2-formacion.png",
        compañero: "Bruma",
        emojiCompañero: "☁️",
        fraseMotivadora: "Ser honesto requiere valentía. ¡Esa valentía te hace más grande!",
        colorAccento: "#94A3B8",
    },

    // ── 3° PRIMARIA ── compañero: Eli 🌸
    "primaria-3-matematicas": {
        src: "/materias/primaria3-matematicas.png",
        compañero: "Eli",
        emojiCompañero: "🌸",
        fraseMotivadora: "Eli te recuerda: la práctica hace al maestro. ¡Tú puedes!",
        colorAccento: "#F472B6",
    },
    "primaria-3-espanol": {
        src: "/materias/primaria3-espanol.png",
        compañero: "Eli",
        emojiCompañero: "🌸",
        fraseMotivadora: "¡Las palabras son flores! Planta buenas palabras en cada texto.",
        colorAccento: "#F472B6",
    },
    "primaria-3-ciencias": {
        src: "/materias/primaria3-ciencias.png",
        compañero: "Eli",
        emojiCompañero: "🌸",
        fraseMotivadora: "Eli creció aprendiendo cómo crecen las plantas. ¡Tú también creces!",
        colorAccento: "#F472B6",
    },
    "primaria-3-historia": {
        src: "/materias/primaria3-historia.png",
        compañero: "Eli",
        emojiCompañero: "🌸",
        fraseMotivadora: "Conocer tu historia es conocerte a ti mismo. ¡Descúbrela!",
        colorAccento: "#F472B6",
    },

    // ── 4° PRIMARIA ── compañero: Rex 🦕
    "primaria-4-matematicas": {
        src: "/materias/primaria4-matematicas.png",
        compañero: "Rex",
        emojiCompañero: "🦕",
        fraseMotivadora: "Rex tiene 65 millones de años de experiencia. ¡Tú aprenderás geometría en minutos!",
        colorAccento: "#34D399",
    },
    "primaria-4-espanol": {
        src: "/materias/primaria4-espanol.png",
        compañero: "Rex",
        emojiCompañero: "🦕",
        fraseMotivadora: "¡Rex ha escrito sobre todos los tiempos! ¿Qué historia escribirás tú hoy?",
        colorAccento: "#34D399",
    },
    "primaria-4-ciencias": {
        src: "/materias/primaria4-ciencias.png",
        compañero: "Rex",
        emojiCompañero: "🦕",
        fraseMotivadora: "La naturaleza tiene millones de años de historia. Rex te la explica.",
        colorAccento: "#34D399",
    },
    "primaria-4-historia": {
        src: "/materias/primaria4-historia.png",
        compañero: "Rex",
        emojiCompañero: "🦕",
        fraseMotivadora: "¡Rex estuvo en la historia! Conocerla es parte de quien eres.",
        colorAccento: "#34D399",
    },
    "primaria-4-geografia": {
        src: "/materias/primaria4-geografia.png",
        compañero: "Rex",
        emojiCompañero: "🦕",
        fraseMotivadora: "Rex ha recorrido todos los continentes. ¿Cuántos conoces tú?",
        colorAccento: "#34D399",
    },

    // ── 5° PRIMARIA ── compañero: Nano 🔬
    "primaria-5-matematicas": {
        src: "/materias/primaria5-matematicas.png",
        compañero: "Nano",
        emojiCompañero: "⚛️",
        fraseMotivadora: "¡Nano dice que cada ecuación es un experimento por resolver!",
        colorAccento: "#38BDF8",
    },
    "primaria-5-espanol": {
        src: "/materias/primaria5-espanol.png",
        compañero: "Nano",
        emojiCompañero: "⚛️",
        fraseMotivadora: "Las palabras son como átomos — ¡juntos forman cosas increíbles!",
        colorAccento: "#38BDF8",
    },
    "primaria-5-ciencias": {
        src: "/materias/primaria5-ciencias.png",
        compañero: "Nano",
        emojiCompañero: "⚛️",
        fraseMotivadora: "¡Nano ha fallado 47 experimentos y aprendió de cada uno! Tú también puedes.",
        colorAccento: "#38BDF8",
    },
    "primaria-5-historia": {
        src: "/materias/primaria5-historia.png",
        compañero: "Nano",
        emojiCompañero: "⚛️",
        fraseMotivadora: "Los grandes científicos de la historia te esperan. ¡Conócelos!",
        colorAccento: "#38BDF8",
    },

    // ── 6° PRIMARIA ── compañero: Cali 📐
    "primaria-6-matematicas": {
        src: "/materias/primaria6-matematicas.png",
        compañero: "Cali",
        emojiCompañero: "📐",
        fraseMotivadora: "¡Cali dice: exactitud ante todo! Cada respuesta correcta vale doble.",
        colorAccento: "#A78BFA",
    },
    "primaria-6-espanol": {
        src: "/materias/primaria6-espanol.png",
        compañero: "Cali",
        emojiCompañero: "📐",
        fraseMotivadora: "¡Escribe con precisión! Las palabras exactas son las más poderosas.",
        colorAccento: "#A78BFA",
    },
    "primaria-6-ciencias": {
        src: "/materias/primaria6-ciencias.png",
        compañero: "Cali",
        emojiCompañero: "📐",
        fraseMotivadora: "La ciencia requiere precisión. ¡Cada detalle importa!",
        colorAccento: "#A78BFA",
    },
    "primaria-6-historia": {
        src: "/materias/primaria6-historia.png",
        compañero: "Cali",
        emojiCompañero: "📐",
        fraseMotivadora: "¡La historia también tiene fechas exactas! Cali te ayuda a recordarlas.",
        colorAccento: "#A78BFA",
    },
    "primaria-6-geografia": {
        src: "/materias/primaria6-geografia.png",
        compañero: "Cali",
        emojiCompañero: "📐",
        fraseMotivadora: "La geografía es matemáticas del planeta. ¡Mide el mundo!",
        colorAccento: "#A78BFA",
    },

    // ── 1° SECUNDARIA ── compañero: Volt ⚡
    "secundaria-1-matematicas": {
        src: "/materias/secundaria1-matematicas.png",
        compañero: "Volt",
        emojiCompañero: "⚡",
        fraseMotivadora: "¡Volt convierte el álgebra en energía! ¿Cuánta tienes tú hoy?",
        colorAccento: "#FCD34D",
    },
    "secundaria-1-espanol": {
        src: "/materias/secundaria1-espanol.png",
        compañero: "Volt",
        emojiCompañero: "⚡",
        fraseMotivadora: "¡Argumenta con la energía de un rayo! ¡Volt dice que tienes razón!",
        colorAccento: "#FCD34D",
    },
    "secundaria-1-ciencias": {
        src: "/materias/secundaria1-ciencias.png",
        compañero: "Volt",
        emojiCompañero: "⚡",
        fraseMotivadora: "La física es energía en movimiento. ¡Como tú, como Volt!",
        colorAccento: "#FCD34D",
    },
    "secundaria-1-historia": {
        src: "/materias/secundaria1-historia.png",
        compañero: "Volt",
        emojiCompañero: "⚡",
        fraseMotivadora: "¡El mundo cambió en un instante! Volt te muestra cómo.",
        colorAccento: "#FCD34D",
    },
    "secundaria-1-geografia": {
        src: "/materias/secundaria1-geografia.png",
        compañero: "Volt",
        emojiCompañero: "⚡",
        fraseMotivadora: "¡Las conexiones del mundo son como circuitos eléctricos!",
        colorAccento: "#FCD34D",
    },

    // ── 2° SECUNDARIA ── compañero: Pages 📖
    "secundaria-2-matematicas": {
        src: "/materias/secundaria2-matematicas.png",
        compañero: "Pages",
        emojiCompañero: "📖",
        fraseMotivadora: "Pages dice: cada ecuación tiene su historia. ¿Sabes la de ésta?",
        colorAccento: "#D97706",
    },
    "secundaria-2-espanol": {
        src: "/materias/secundaria2-espanol.png",
        compañero: "Pages",
        emojiCompañero: "📖",
        fraseMotivadora: "¡La literatura que lees hoy te cambia para siempre!",
        colorAccento: "#D97706",
    },
    "secundaria-2-ciencias": {
        src: "/materias/secundaria2-ciencias.png",
        compañero: "Pages",
        emojiCompañero: "📖",
        fraseMotivadora: "La química tiene capítulos fascinantes. ¡Pages los conoce todos!",
        colorAccento: "#D97706",
    },
    "secundaria-2-historia": {
        src: "/materias/secundaria2-historia.png",
        compañero: "Pages",
        emojiCompañero: "📖",
        fraseMotivadora: "México tiene la historia más rica del mundo. ¡Conócela!",
        colorAccento: "#D97706",
    },
    "secundaria-2-geografia": {
        src: "/materias/secundaria2-geografia.png",
        compañero: "Pages",
        emojiCompañero: "📖",
        fraseMotivadora: "El mundo entero espera en las páginas del atlas. ¡Ábrelo!",
        colorAccento: "#D97706",
    },

    // ── 3° SECUNDARIA ── compañero: Cosmos 🌌
    "secundaria-3-matematicas": {
        src: "/materias/secundaria3-matematicas.png",
        compañero: "Cosmos",
        emojiCompañero: "🌌",
        fraseMotivadora: "Cosmos dice: las matemáticas son el idioma del universo. ¡Ya casi lo dominas!",
        colorAccento: "#818CF8",
    },
    "secundaria-3-espanol": {
        src: "/materias/secundaria3-espanol.png",
        compañero: "Cosmos",
        emojiCompañero: "🌌",
        fraseMotivadora: "Las palabras que escribes hoy pueden cambiar el mañana del universo.",
        colorAccento: "#818CF8",
    },
    "secundaria-3-ciencias": {
        src: "/materias/secundaria3-ciencias.png",
        compañero: "Cosmos",
        emojiCompañero: "🌌",
        fraseMotivadora: "La biología es la historia del universo contada por la vida misma.",
        colorAccento: "#818CF8",
    },
    "secundaria-3-historia": {
        src: "/materias/secundaria3-historia.png",
        compañero: "Cosmos",
        emojiCompañero: "🌌",
        fraseMotivadora: "Cosmos ha visto toda la historia. La tuya apenas está empezando.",
        colorAccento: "#818CF8",
    },
    "secundaria-3-geografia": {
        src: "/materias/secundaria3-geografia.png",
        compañero: "Cosmos",
        emojiCompañero: "🌌",
        fraseMotivadora: "Ver la Tierra desde el espacio cambia todo. Hoy estudias ese planeta.",
        colorAccento: "#818CF8",
    },
};

/**
 * Obtiene la imagen de materia para un grado y materia dados.
 * Normaliza el grado (e.g. "kinder", "primaria-1", "secundaria-3")
 * y la materia (e.g. "matematicas", "espanol", "ciencias")
 */
export function getImagenMateria(grado: string, materia: string): ImagenMateria | null {
    // Normalizar: quitar acentos de materia
    const materiaLimpia = materia
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-");

    const key = `${grado}-${materiaLimpia}`;
    return IMAGENES_MATERIA[key] || null;
}
