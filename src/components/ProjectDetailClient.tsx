'use client';

import { useLanguage } from "@/context/LanguageContext";
import { Item } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailClient({ project }: { project: Item }) {
    const { t, language } = useLanguage();

    return (
        <div className="container section">
            <Link href="/projects" className="back-link">{t('common.backToProjects')}</Link>
            <article className="detail-view">
                <h1 className="detail-title">{project.title[language]}</h1>
                <div className="detail-image-wrapper">
                    {project.imageUrl ? (
                        <Image
                            src={project.imageUrl}
                            alt={project.title[language]}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 1200px) 100vw, 800px"
                        />
                    ) : project.videoUrl ? (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
                            <video
                                src={project.videoUrl}
                                controls
                                style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                            />
                        </div>
                    ) : null}
                </div>
                <div className="detail-content">
                    <p>{project.description[language]}</p>
                    {project.tags && (
                        <div className="tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
}
