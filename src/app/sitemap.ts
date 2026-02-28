import { MetadataRoute } from 'next';
import { GRADOS, MATERIAS } from '@/data/curriculum';
import { GRADOS_CONTENIDO } from '@/data/content-primaria';
import * as fs from 'fs';
import * as path from 'path';

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

    // 3. Rutas dinámicas de materias (ej. /primaria-1/matematicas)
    const materiaRoutes: MetadataRoute.Sitemap = [];

    // Desde GRADOS_CONTENIDO (primaria)
    for (const grado of Object.keys(GRADOS_CONTENIDO)) {
        for (const materia of Object.keys(GRADOS_CONTENIDO[grado].materias)) {
            materiaRoutes.push({
                url: `${SITE_URL}/${grado}/${materia}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });

            // Rutas de bloques (ej. /primaria-1/matematicas/bloque-1)
            const bloques = GRADOS_CONTENIDO[grado].materias[materia].bloques;
            bloques.forEach((bloque) => {
                materiaRoutes.push({
                    url: `${SITE_URL}/${grado}/${materia}/bloque-${bloque.bloque}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly',
                    priority: 0.7,
                });
            });
        }
    }

    // Desde el sistema de archivos (preescolar, secundaria, etc.)
    try {
        const ejerciciosDir = path.join(process.cwd(), 'src', 'data', 'exercises');
        if (fs.existsSync(ejerciciosDir)) {
            const gradosFS = fs.readdirSync(ejerciciosDir);
            for (const grado of gradosFS) {
                const gradoDir = path.join(ejerciciosDir, grado);
                if (!fs.statSync(gradoDir).isDirectory()) continue;

                const materiasFS = fs.readdirSync(gradoDir);
                for (const materia of materiasFS) {
                    // Evitar duplicados si ya están en GRADOS_CONTENIDO
                    if (!materiaRoutes.some(r => r.url === `${SITE_URL}/${grado}/${materia}`)) {
                        materiaRoutes.push({
                            url: `${SITE_URL}/${grado}/${materia}`,
                            lastModified: new Date(),
                            changeFrequency: 'weekly',
                            priority: 0.8,
                        });
                    }
                }
            }
        }
    } catch (e) {
        console.error("Error reading FS for sitemap", e);
    }

    return [...staticRoutes, ...gradoRoutes, ...materiaRoutes];
}
