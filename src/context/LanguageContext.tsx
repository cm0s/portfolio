'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '@/data/locales';

interface LanguageContextType {
    language: Locale;
    setLanguage: (lang: Locale) => void;
    t: (key: keyof typeof translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Locale>('en');

    useEffect(() => {
        const saved = localStorage.getItem('language') as Locale;
        if (saved && (saved === 'en' || saved === 'fr')) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = (lang: Locale) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: keyof typeof translations['en']) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
