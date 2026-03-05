"use client";
import React, { createContext, useContext, ReactNode } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { dicEs, LanguageDictionary } from '../data/diccionarios/es';
import { dicNah } from '../data/diccionarios/nah';

type LanguageCode = 'espanol' | 'nahuatl' | 'maya' | 'tzotzil' | string;

interface LanguageContextProps {
    lang: LanguageCode;
    setLang: (newLang: LanguageCode) => void;
    t: (key: keyof LanguageDictionary) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const lang = (params?.lang as LanguageCode) || 'espanol';

    const setLang = (newLang: LanguageCode) => {
        if (!pathname) return;
        // Reemplazar el idioma actual en la URL (asumiendo que está al principio de la ruta /lang/...)
        const segments = pathname.split('/');
        if (segments.length > 1) {
            segments[1] = newLang; // /nahuatl/xyz -> segments = ['', 'nahuatl', 'xyz']
        }
        const newPathname = segments.join('/');
        router.push(newPathname);
    };

    const t = (key: keyof LanguageDictionary): string => {
        const dic = lang === 'nahuatl' ? dicNah : dicEs;
        return (dic as any)[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
