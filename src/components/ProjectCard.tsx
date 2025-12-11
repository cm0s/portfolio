import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    tags?: string[];
    slug: string;
    basePath: string;
}

export default function ProjectCard({ title, description, imageUrl, tags, slug, basePath }: ProjectCardProps) {
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
                ) : (
                    <div style={{ width: '100%', height: '100%', background: '#eee' }} />
                )}
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                {tags && (
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                        {tags.map(tag => (
                            <span key={tag} style={{ fontSize: '0.75rem', background: '#f0f0f0', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#555' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
