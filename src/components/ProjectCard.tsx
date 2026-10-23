import Image from 'next/image';
import Link from 'next/link';

import { StaticImageData } from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string | StaticImageData;
    videoUrl?: string;
    isVideo?: boolean;
    tags?: string[];
    slug: string;
    basePath: string;
}

export default function ProjectCard({ title, description, imageUrl, videoUrl, isVideo, tags, slug, basePath }: ProjectCardProps) {
    return (
        <Link href={`${basePath}/${slug}`} className="card">
            <div className="card-image-wrapper">
                {imageUrl ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ) : videoUrl ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000' }}>
                        <video
                            src={videoUrl}
                            muted
                            loop
                            playsInline
                            autoPlay
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ) : (
                    <div style={{ width: '100%', height: '100%', background: '#eee' }} />
                )}
                {isVideo && (
                    <>
                        <span className="card-play-badge" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        </span>
                        <span className="card-video-label">Video</span>
                    </>
                )}
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                {tags && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        {tags.map(tag => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
