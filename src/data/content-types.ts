export type BloqueContenido = {
    bloque: number;
    nombre: string;
    meses: string;
    enClase?: string[];
    libroSep?: {
        codigo: string;
        paginaInicio: number;
        paginaFin: number;
        descripcion: string;
    };
    guiaPapa?: {
        intro: string;
        comoExplicar: string[];
        truco: string;
        error_comun: string;
        actividad_casa: string;
    };
    guiaMaestro?: {
        objetivo: string;
        competencia: string;
        aprendizajesEsperados?: string[];
        secuenciaDidactica?: string[];
        preguntasDetonadoras?: string[];
        materialesSugeridos?: string[];
        evaluacion?: string;
        libroSepMaestro?: string;
    };
    keywords?: string[];
};

export type MateriaContenido = {
    materia: string;
    nombre: string;
    emoji: string;
    color: string;
    bloques: BloqueContenido[];
};

export type GradoContenido = {
    grado: string;
    nombre: string;
    emoji: string;
    materias: Record<string, MateriaContenido>;
};
