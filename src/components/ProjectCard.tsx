import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    tags?: string[];
}

export default function ProjectCard({ title, description, imageUrl, tags }: ProjectCardProps) {
    return (
        <div className="card">
            <div className="card-image-wrapper">
                {imageUrl ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        {/* Using a simple div instead of Image for now if src is missing to avoid errors, or standard Image */}
                        <div style={{ width: '100%', height: '100%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc' }}>
                            {/* Fallback visual */}
                            Image: {imageUrl}
                        </div>
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
        </div>
    );
}
