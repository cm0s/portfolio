'use client';

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsPage() {
    const { t, language } = useLanguage();

    return (
        <div className="container section">
            <header className="page-header">
                <h1 className="page-title">{t('projects.title')}</h1>
                <p className="page-desc">{t('projects.desc')}</p>
            </header>

            <div className="grid">
                {projects.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title[language]}
                        description={item.description[language]}
                        imageUrl={item.imageUrl}
                        tags={item.tags}
                        slug={item.slug}
                        basePath="/projects"
                    />
                ))}
            </div>
        </div>
    );
}
