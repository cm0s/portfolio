'use client';

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { Item } from "@/data/content";
import Image from "next/image";
import Link from "next/link";

export default function GalleryDetailClient({ item }: { item: Item }) {
    const { t, language } = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="container section">
            <Link href="/gallery" className="back-link">{t('common.backToGallery')}</Link>
            <article className="detail-view">
                <h1 className="detail-title">{item.title[language]}</h1>
                <div className="detail-image-wrapper" style={{ aspectRatio: 'auto', height: 'auto', overflow: 'hidden' }}>
                    <Image
                        src={item.imageUrl}
                        alt={item.title[language]}
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            opacity: isLoaded ? 1 : 0,
                            filter: isLoaded ? 'blur(0px)' : 'blur(20px)',
                            transform: isLoaded ? 'scale(1)' : 'scale(1.02)',
                            transition: 'opacity 0.7s ease-out, filter 0.7s ease-out, transform 0.7s ease-out'
                        }}
                        priority
                        sizes="(max-width: 1200px) 100vw, 800px"
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
                <div className="detail-content">
                    <p>{item.description[language]}</p>
                    {item.tags && (
                        <div className="tags">
                            {item.tags.map(tag => (
                                <span key={tag} className="tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
}
