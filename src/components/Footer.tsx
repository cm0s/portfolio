'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            </div>
        </footer>
    );
}
