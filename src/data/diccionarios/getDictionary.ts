import { dicEs } from './es';
import { dicNah } from './nah';
import { nahMap } from './nahMap';

const getTranslationMap = (lang: string): [string, string][] => {
    switch (lang) {
        case 'nahuatl': return nahMap;
        default: return []; // Espanol has no map because it's the base
    }
};

const getBaseDictionary = (lang: string) => {
    switch (lang) {
        case 'nahuatl': return dicNah;
        // Case maya, etc.
        default: return dicEs;
    }
};

export const getDictionary = (lang: string) => {
    const dictionary = getBaseDictionary(lang);

    // Optimize performance: sort the map from longest to shortest to prevent partial replacements
    const tMap = getTranslationMap(lang).sort((a, b) => b[0].length - a[0].length);

    return {
        // Strict key translation (for UI elements)
        t: (key: keyof typeof dicEs) => {
            return dictionary[key] || key;
        },
        // Loose text block translation (for complex hardcoded data like in Universo page)
        translate: (text: string) => {
            if (!text || lang === 'espanol') return text;

            let result = text;
            for (const [es, tl] of tMap) {
                if (result.includes(es)) {
                    result = result.replaceAll(es, tl);
                }
            }
            return result;
        }
    };
};
