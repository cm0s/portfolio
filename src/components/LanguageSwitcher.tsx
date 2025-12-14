'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
                onClick={() => setLanguage('en')}
                style={{
                    opacity: language === 'en' ? 1 : 0.5,
                    fontWeight: language === 'en' ? 'bold' : 'normal',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem'
                }}
            >
                EN
            </button>
            <span>|</span>
            <button
                onClick={() => setLanguage('fr')}
                style={{
                    opacity: language === 'fr' ? 1 : 0.5,
                    fontWeight: language === 'fr' ? 'bold' : 'normal',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.25rem'
                }}
            >
                FR
            </button>
        </div>
    );
}
