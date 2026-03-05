/**
 * 🚀 UNIVERSO DE PERSONAJES DE CHISPITO.MX
 * 
 * Nico es el personaje principal — un cohete que crece con el niño
 * desde Kinder hasta 3° Secundaria. Conforme sube de grado, 
 * aparecen nuevos amigos con sus propias personalidades e historias.
 * 
 * Los personajes se usan en el ExercisePlayer y en las páginas de grado.
 */

export type Personaje = {
    id: string;
    nombre: string;
    emoji: string;
    tipo: string;          // Descripción del personaje (ej: "Un cohete aventurero")
    color: string;
    grado_aparece: string; // Primer grado donde aparece este personaje
    descripcion: string;   // Historia / personalidad
    frase_favorita: string;
};

// ══════════════════════════════════════════════════════
//   NICO — El protagonista principal 🚀
//   Nico es un pequeño cohete que ama aprender y explorar.
//   Crece de bloque en bloque, de kinder a secundaria.
// ══════════════════════════════════════════════════════

export const NICO: Personaje = {
    id: "nico",
    nombre: "Nico",
    emoji: "🚀",
    tipo: "Cohete aventurero",
    color: "#3B82F6",
    grado_aparece: "kinder",
    descripcion: "Nico es un pequeño cohete con curiosidad infinita. Le encanta explorar nuevas ideas y nunca se rinde cuando algo está difícil. Cada respuesta correcta lo impulsa más lejos hacia las estrellas.",
    frase_favorita: "¡A las estrellas siempre se llega paso a paso!",
};

// ══════════════════════════════════════════════════════
//   PERSONAJES POR GRADO — aparecen conforme el niño avanza
// ══════════════════════════════════════════════════════

export const PERSONAJES: Personaje[] = [

    // ── KINDER ─────────────────────────────────────────
    {
        id: "luna",
        nombre: "Luna",
        emoji: "🌙",
        tipo: "La luna brillante",
        color: "#8B5CF6",
        grado_aparece: "kinder",
        descripcion: "La mejor amiga de Nico desde el primer día de kinder. Luna siempre ilumina el camino cuando Nico tiene dudas. Es muy tranquila y paciente — perfecta cuando los ejercicios se ponen difíciles.",
        frase_favorita: "La oscuridad no existe, solo falta un poco de luz.",
    },

    // ── PRIMARIA 1° ────────────────────────────────────
    {
        id: "pipo",
        nombre: "Pipo",
        emoji: "⭐",
        tipo: "La estrella traviesa",
        color: "#F59E0B",
        grado_aparece: "primaria-1",
        descripcion: "Pipo es una estrella pequeñita, muy traviesa y divertida, que conoció a Nico en 1° de primaria. Siempre hace reír al grupo y aunque a veces distrae, cuando se concentra es increíblemente inteligente.",
        frase_favorita: "¡El que no se ríe no aprende!",
    },

    // ── PRIMARIA 2° ────────────────────────────────────
    {
        id: "bruma",
        nombre: "Bruma",
        emoji: "☁️",
        tipo: "La nube soñadora",
        color: "#64748B",
        grado_aparece: "primaria-2",
        descripcion: "Bruma es una nube que siempre está pensando en todo. Se unió al grupo en 2° primaria. A veces parece distraída mirando el cielo, pero en realidad está resolviendo los problemas más difíciles en su mente.",
        frase_favorita: "Cuando pienso volar, ya estoy volando.",
    },

    // ── PRIMARIA 3° ────────────────────────────────────
    {
        id: "eli",
        nombre: "Eli",
        emoji: "🌸",
        tipo: "La flor más lista de la clase",
        color: "#EC4899",
        grado_aparece: "primaria-3",
        descripcion: "Eli es una flor rosa que llegó a la clase de Nico en 3° de primaria. Es la más inteligente del salón, le encantan las ciencias y siempre sabe la respuesta correcta. Lo que Eli no sabe es que Nico se pone rojo cada que ella habla. 🚀❤️🌸",
        frase_favorita: "Las flores crecen lentamente, pero llegan al sol.",
    },

    // ── PRIMARIA 4° ────────────────────────────────────
    {
        id: "rex",
        nombre: "Rex",
        emoji: "🦕",
        tipo: "El dinosaurio historiador",
        color: "#16A34A",
        grado_aparece: "primaria-4",
        descripcion: "Rex es un dinosaurio pequeño muy culto que se unió en 4°. Sabe todo sobre historia y geografía. Le encanta contar historias largas y a veces Nico tiene que pedirle que vaya al grano.",
        frase_favorita: "¡El que no sabe de dónde viene, no sabe a dónde va!",
    },

    // ── PRIMARIA 5° ────────────────────────────────────
    {
        id: "nano",
        nombre: "Nano",
        emoji: "🔬",
        tipo: "El científico loco",
        color: "#0EA5E9",
        grado_aparece: "primaria-5",
        descripcion: "Nano es un átomo con vida propia que apareció en el laboratorio de 5°. Le apasionan las ciencias naturales y físicas. Sus experimentos a veces salen mal, pero siempre aprende algo nuevo.",
        frase_favorita: "¡Cada error es un experimento exitoso!",
    },

    // ── PRIMARIA 6° ────────────────────────────────────
    {
        id: "cali",
        nombre: "Cali",
        emoji: "📐",
        tipo: "La regla perfeccionista",
        color: "#7C3AED",
        grado_aparece: "primaria-6",
        descripcion: "Cali es una regla que ama la precisión. En 6° se vuelve el apoyo de todo el grupo para matemáticas. Es muy estricta con los errores, pero cuando alguien acierta, celebra más que nadie.",
        frase_favorita: "Las cosas bien hechas, hechas quedan.",
    },

    // ── SECUNDARIA 1° ──────────────────────────────────
    {
        id: "volt",
        nombre: "Volt",
        emoji: "⚡",
        tipo: "El rayo energético",
        color: "#EAB308",
        grado_aparece: "secundaria-1",
        descripcion: "Volt apareció en 1° de secundaria y tiene una energía imparable. Le fascina la física y las matemáticas avanzadas. Habla muy rápido y a veces hay que pedirle que repita. Nico y él se llevan de maravilla.",
        frase_favorita: "¡En la vida todo es energía y transformación!",
    },

    // ── SECUNDARIA 2° ──────────────────────────────────
    {
        id: "pages",
        nombre: "Pages",
        emoji: "📖",
        tipo: "La biblioteca viviente",
        color: "#B45309",
        grado_aparece: "secundaria-2",
        descripcion: "Pages es una página de libro que tomó vida en 2° secundaria. Tiene memorizada toda la literatura universal y el español avanzado. A veces le cuesta entender los memes que hace Pipo, pero lo intenta.",
        frase_favorita: "Cada libro que lees, es un mundo que descubres.",
    },

    // ── SECUNDARIA 3° ──────────────────────────────────
    {
        id: "cosmos",
        nombre: "Cosmos",
        emoji: "🌌",
        tipo: "El universo sabio",
        color: "#1D4ED8",
        grado_aparece: "secundaria-3",
        descripcion: "Cosmos es el maestro y mentor del grupo en 3° secundaria. Ha visto nacer estrellas y sabe que el conocimiento no tiene límite. Cuando Nico está por graduarse, Cosmos le dice: 'Tú siempre fuiste la estrella más brillante'.",
        frase_favorita: "El universo está hecho de átomos y de historias.",
    },
];

// ══════════════════════════════════════════════════════
//   MENSAJES DE NICO POR GRADO
//   Nico cambia cómo habla según el grado — más simple en kinder,
//   más maduro en secundaria. Y en 3° primaria, menciona a Eli 🌸
// ══════════════════════════════════════════════════════

export const MENSAJES_POR_GRADO: Record<string, {
    animando: string[];
    correcto: string[];
    incorrecto: string[];
    compañero?: string; // Quién acompaña a Nico en este grado
}> = {
    "kinder": {
        compañero: "luna",
        animando: [
            "¡Tú puedes! 🌟",
            "¡Mira bien la pregunta! 👀",
            "¡Yo creo en ti! 🚀",
            "¡Vamos, campeón! 💪",
            "¡Concéntrate! 🎯",
        ],
        correcto: [
            "¡WOOOO! ¡LO LOGRASTE! 🎉🎉",
            "¡INCREÍBLE! ¡Eres muy listo! ⭐",
            "¡PERFECTO! ¡Luna y yo te aplaudimos! 🌙🚀",
            "¡GENIAL! ¡Eres una estrella! 🌟",
            "¡BRAVO! ¡Muy bien! 🎊",
        ],
        incorrecto: [
            "¡Casi! ¡Inténtalo de nuevo! 💪",
            "¡No te rindas! ¡Tú puedes! 🚀",
            "¡Ese error te hace más listo! 🌟",
            "¡Sigue intentando! ¡Ya casi! 🎯",
        ],
    },

    "primaria-1": {
        compañero: "pipo",
        animando: [
            "¡Tú puedes, amiguito! 🌟",
            "¡Lee bien la pregunta! 👀",
            "¡Pipo y yo te apoyamos! ⭐🚀",
            "¡Concéntrate un momento! 🎯",
            "¡Estoy seguro que sabes esto! 💪",
        ],
        correcto: [
            "¡WOOOO! ¡GENIAL, AMIGUITO! 🎉🎊",
            "¡INCREÍBLE! ¡Lo sabías! 🌟⭐",
            "¡PERFECTO! ¡Pipo está brincando de emoción! ⭐⭐⭐",
            "¡SÚPER BIEN! ¡Eres una estrella! 🌠",
            "¡EXCELENTE! ¡Eres el más listo! 🧠✨",
        ],
        incorrecto: [
            "¡Casi! A la próxima lo logras 💪",
            "¡No te rindas! Lee la pista 📖",
            "¡Ese error te enseña! 🌱",
            "¡Pipo tampoco lo sabía al principio! ⭐",
        ],
    },

    "primaria-2": {
        compañero: "bruma",
        animando: [
            "¡Tú puedes! Lee bien la pregunta 🌟",
            "¡Bruma está pensando junto contigo! ☁️",
            "¡Concéntrate, casi lo tienes! 🎯",
            "¡Piénsalo bien, ya casi! 💭",
            "¡Estoy contigo en esto! 🚀",
        ],
        correcto: [
            "¡GENIAL! ¡Bruma ya lo sabía que podías! ☁️🎉",
            "¡INCREÍBLE! ¡Eres muy listo! 🌟⭐",
            "¡PERFECTO! ¡Todos juntos lo logramos! 🎊",
            "¡EXCELENTE! ¡Qué inteligente eres! 🧠",
            "¡SÚPER BIEN! ¡Eso es estudiar! 📚✨",
        ],
        incorrecto: [
            "¡Casi! Bruma dice: lee la explicación ☁️",
            "¡No te rindas! Todos nos equivocamos 💪",
            "¡El error es parte de aprender! 🌱",
            "¡Vuelve a intentarlo, ya mero! 🎯",
        ],
    },

    "primaria-3": {
        compañero: "eli",
        animando: [
            "¡Tú puedes! ¡Lee bien la pregunta! 🌟",
            "¡Eli esta segura de que sabes esto! 🌸",
            "¡Concéntrate! A ver si le impresionas a Eli... 🚀🌸",
            "¡Piénsalo bien! ¡Sí se puede! 💪",
            "¡Eli y yo te estamos apoyando! 🌸🚀",
        ],
        correcto: [
            "¡WOOOO! ¡ELI TAMBIÉEN LO LOGRÓ! 🌸🎉🚀",
            "¡INCREÍBLE! ¡Eli te está aplaudiendo! 🌸👏",
            "¡PERFECTO! ¡Ves que sí sabías? Eli no se equivoca! 🌸⭐",
            "¡GENIAL! ¡Eso es lo que yo llamo estudiar! 🌟",
            "¡EXCELENTE! ¡Este bloque lo dominamos! 🚀🌸",
        ],
        incorrecto: [
            "¡Casi! Eli dice: lee la explicación con cuidado 🌸",
            "¡No te rindas! Hasta Eli tiene que repasar a veces 🌸💪",
            "¡El error nos hace crecer! Sigue intentando 🌱",
            "¡Vuelve a intentarlo! Eli confía en ti 🌸",
        ],
    },

    "primaria-4": {
        compañero: "rex",
        animando: [
            "¡Tú puedes! Rex dice que esto lo estudiamos la semana pasada 🦕",
            "¡Concéntrate! ¡Rex confía en ti! 🦕💪",
            "¡Lee bien la pregunta antes de contestar! 🎯",
            "¡Juntos lo podemos! ¡Vamos! 🚀🦕",
            "¡Piénsalo bien! ¡Ya casi! 🌟",
        ],
        correcto: [
            "¡GENIAL! ¡Rex ya sabía que podías! 🦕🎉",
            "¡INCREÍBLE! ¡Eso es estudiar historia! 📚✨",
            "¡PERFECTO! ¡Rex está bailando de emoción! 🦕🎊",
            "¡EXCELENTE! ¡Eres un historiador nato! 🌟",
            "¡SÚPER! ¡Rex te da una medalla imaginaria! 🏅🦕",
        ],
        incorrecto: [
            "¡Casi! Rex dice: revisa tus apuntes 🦕📖",
            "¡No te rindas! La historia se aprende repasando 💪",
            "¡Sigue intentando! Todos los expertos se equivocan 🌱",
            "¡Rex pasó miles de años aprendiendo! Tú puedes en minutos 🦕",
        ],
    },

    "primaria-5": {
        compañero: "nano",
        animando: [
            "¡Según mis cálculos, TÚ puedes! — Nano 🔬",
            "¡Nano está haciendo un experimento para darte la respuesta! 🔬😂",
            "¡Lee bien! ¡Este es el tipo de problema que Nano adora! 🔬",
            "¡Concéntrate! ¡Piénsalo como un científico! 🧪",
            "¡Vamos! ¡La ciencia no se rinde! 🔬💪",
        ],
        correcto: [
            "¡EXPERIMENTO EXITOSO! ¡Lo lograste! 🔬🎉",
            "¡INCREÍBLE! ¡Nano está tomando nota de tu respuesta! 🔬⭐",
            "¡PERFECTO! ¡Eso es pensar como científico! 🧪✨",
            "¡GENIAL! ¡Nano quiere trabajar contigo! 🔬🌟",
            "¡EXCELENTE! ¡Hipótesis confirmada: eres muy listo! 🎊",
        ],
        incorrecto: [
            "¡Casi! Nano dice: cada error trae datos nuevos 🔬",
            "¡No te rindas! En ciencias se intenta hasta lograrlo 💪",
            "¡Ese error es el camino a la respuesta correcta! 🌱",
            "¡Nano falló 47 veces antes de triunfar! Tú vas bien 🔬",
        ],
    },

    "primaria-6": {
        compañero: "cali",
        animando: [
            "¡Cali dice: precisión ante todo! ¡Tú puedes! 📐",
            "¡Lee la pregunta con cuidado! ¡Cali te observa! 📐👀",
            "¡Concéntrate! ¡6° grado requiere concentración! 💪",
            "¡Ya casi acabas primaria! ¡No te detengas ahora! 🚀",
            "¡Cali confía en tu exactitud! 📐🌟",
        ],
        correcto: [
            "¡EXACTO! ¡Cali aprueba tu respuesta! 📐✅",
            "¡PERFECTO! ¡Eso es lo que se espera de 6°! 📐🎉",
            "¡INCREÍBLE! ¡Cali rara vez dice esto: GENIAL! 📐⭐",
            "¡EXCELENTE! ¡Listo para la secundaria! 🚀🎊",
            "¡BRAVO! ¡Ese es el nivel de 6° primaria! 📐🌟",
        ],
        incorrecto: [
            "¡Cali dice: revisa tu procedimiento 📐",
            "¡No te rindas! Un error no define tu nivel 💪",
            "¡En 6° grado, los errores se corrigen! ¡Vuelve a intentar! 🎯",
            "¡Cali ya lo superó 100 veces! Tú también puedes 📐",
        ],
    },

    "secundaria-1": {
        compañero: "volt",
        animando: [
            "¡VOLT DICE QUE PUEDES! ⚡💪 ¡Concéntrate!",
            "¡Secundaria es fuerte pero tú eres más fuerte! ⚡🚀",
            "¡Lee la pregunta 2 veces! ¡Volt lo jura! ⚡👀",
            "¡Ya llegaste hasta aquí! ¡No pares! 🌟",
            "¡Volt y yo apostamos por ti! ⚡🚀",
        ],
        correcto: [
            "⚡ ¡CHISPAZO DE GENIALIDAD! ¡Exacto! 🎉",
            "⚡ ¡VOLT EXPLOTA DE EMOCIÓN! ¡Lo lograste! ⭐",
            "¡INCREÍBLE! ¡Secundaria te queda perfecto! ⚡🌟",
            "⚡ ¡CORRECTO! ¡Eso llevaba voltaje en la respuesta! 🎊",
            "¡EXCELENTE! ¡Volt dice que eres el más listo! ⚡",
        ],
        incorrecto: [
            "¡Casi! ⚡ Volt dice: revisa el concepto clave",
            "¡No te rindas! En secundaria hay que perseverar ⚡💪",
            "¡Cada error carga energía para el siguiente intento! ⚡🌱",
            "¡Volt falló en su primer circuito! Tú ya llevas ventaja ⚡",
        ],
    },

    "secundaria-2": {
        compañero: "pages",
        animando: [
            "¡Pages dice que la respuesta está en tus apuntes! 📖",
            "¡Cada pregunta es una historia con respuesta! 📖🚀",
            "¡Concéntrate! ¡Pages confía en tu criterio! 📖💪",
            "¡Lee bien! ¡Pages siempre lee dos veces! 📖👀",
            "¡Vamos! ¡Ya casi terminas este bloque! 🌟",
        ],
        correcto: [
            "¡PÁGINAS DE GLORIA! ¡Respuesta correcta! 📖🎉",
            "¡Pages agrega esto a sus memorias! ¡INCREÍBLE! 📖⭐",
            "¡PERFECTO! ¡Pages dice que tienes talento literario! 📖🌟",
            "¡EXCELENTE! ¡Esa respuesta merece un capítulo propio! 📖🎊",
        ],
        incorrecto: [
            "¡Casi! Pages dice: busca la respuesta en el contexto 📖",
            "¡No te rindas! Cada error es un capítulo de aprendizaje 📖💪",
            "¡Pages tuvo que leer 1,000 libros para saber! Tú vas bien 📖",
        ],
    },

    "secundaria-3": {
        compañero: "cosmos",
        animando: [
            "¡Cosmos dice: el universo espera tu respuesta! 🌌",
            "¡Concéntrate! ¡Es tu último año! ¡No pares ahora! 🚀🌌",
            "¡Ya llegaste hasta las estrellas! ¡Una pregunta más! 🌟",
            "¡Cosmos confía en ti desde el principio del tiempo! 🌌💪",
            "¡Respira. Piensa. Responde. ¡Tú puedes! 🌌",
        ],
        correcto: [
            "🌌 ¡CÓSMICO! ¡Una respuesta digna del universo! 🎉",
            "¡INCREÍBLE! ¡Cosmos dice que llegarás lejos! 🌌⭐",
            "¡PERFECTO! ¡El universo entero te aplaude! 🌌🎊",
            "🌌 ¡BRILLANTE! ¡Como una estrella recién nacida! 🌟",
            "¡EXCELENTE! ¡Nico, ya eres ready para el bachillerato! 🚀",
        ],
        incorrecto: [
            "¡Casi! Cosmos dice: las estrellas también se forman con tiempo 🌌",
            "¡No te rindas! ¡El universo tiene paciencia infinita! 🌌💪",
            "¡Los grandes sabios erraron antes de triunfar! Sigue 🌌🌱",
        ],
    },
};

/**
 * Obtiene el personaje compañero para un grado específico.
 */
export function getCompañero(grado: string): Personaje | null {
    const datos = MENSAJES_POR_GRADO[grado];
    if (!datos?.compañero) return null;
    return PERSONAJES.find(p => p.id === datos.compañero) ?? null;
}

/**
 * Obtiene los mensajes de Nico para un grado específico.
 * Si el grado no existe en el mapa, usa los mensajes default de P1.
 */
export function getMensajesGrado(grado: string) {
    return MENSAJES_POR_GRADO[grado] ?? MENSAJES_POR_GRADO["primaria-1"];
}
