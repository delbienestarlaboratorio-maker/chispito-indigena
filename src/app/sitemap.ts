import type { MetadataRoute } from "next";
import { GRADOS } from "@/data/curriculum";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://indigena.chispito.mx";
const LENGUAS = ["nahuatl", "maya", "tzotzil"]; // español nativo asume ruteo principal u omitido si chispito.mx lo cubre

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const urls: MetadataRoute.Sitemap = [];

    urls.push({ url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 });

    for (const lang of LENGUAS) {
        // Portada por idioma
        urls.push({ url: `${BASE_URL}/${lang}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 });
        
        // Secciones estáticas traducidas
        urls.push({ url: `${BASE_URL}/${lang}/planes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
        urls.push({ url: `${BASE_URL}/${lang}/universo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
        urls.push({ url: `${BASE_URL}/${lang}/cuadernillos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });

        // Grados Dinámicos Traducidos
        for (const grado of GRADOS) {
            urls.push({
                url: `${BASE_URL}/${lang}/${grado.slug}`,
                lastModified: now,
                changeFrequency: "weekly",
                priority: 0.85,
            });
        }
    }

    return urls;
}
