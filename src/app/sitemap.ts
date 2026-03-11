import { MetadataRoute } from 'next';
import { GRADOS, MATERIAS } from '@/data/curriculum';
import { GRADOS_CONTENIDO as PRIMARIA } from '@/data/content-primaria-slim';
import { GRADOS_SUPERIORES as SECUNDARIA } from '@/data/content-grados-superiores-slim';
import { KINDER } from '@/data/content-kinder-slim';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://chispito.mx';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Rutas estáticas principales
    const staticRoutes = [
        '',
        '/planes',
        '/cuadernillos',
        '/universo',
        '/blog',
        '/login',
        '/privacidad',
        '/terminos',
    ].map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Rutas dinámicas de grados (ej. /primaria-1)
    const gradoRoutes = GRADOS.map((grado) => ({
        url: `${SITE_URL}/${grado.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Rutas dinámicas de materias y bloques
    const materiaRoutes: MetadataRoute.Sitemap = [];

    // Juntar todo el contenido
    const TODOS_LOS_GRADOS = { "kinder": KINDER, ...PRIMARIA, ...SECUNDARIA } as any;

    for (const grado of Object.keys(TODOS_LOS_GRADOS)) {
        for (const materia of Object.keys(TODOS_LOS_GRADOS[grado].materias)) {
            materiaRoutes.push({
                url: `${SITE_URL}/${grado}/${materia}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });

            // Rutas de bloques (ej. /primaria-1/matematicas/bloque-6)
            const bloques = TODOS_LOS_GRADOS[grado].materias[materia].bloques;
            bloques.forEach((bloque: any) => {
                materiaRoutes.push({
                    url: `${SITE_URL}/${grado}/${materia}/bloque-${bloque.bloque}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.7, // Los ejercicios individuales son importantes, pero menos que la página grado/materia
                });
            });
        }
    }

    return [...staticRoutes, ...gradoRoutes, ...materiaRoutes];
}
