'use client';

import ProjectCard from "@/components/ProjectCard";
import { artwork } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
    const { t, language } = useLanguage();

    return (
        <div className="container section">
            <header className="page-header">
                <h1 className="page-title">{t('gallery.title')}</h1>
                <p className="page-desc">{t('gallery.desc')}</p>
            </header>

            <div className="grid">
                {artwork.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title[language]}
                        description={item.description[language]}
                        imageUrl={item.imageUrl}
                        tags={item.tags}
                        slug={item.slug}
                        basePath="/gallery"
                    />
                ))}
            </div>
        </div>
    );
}
