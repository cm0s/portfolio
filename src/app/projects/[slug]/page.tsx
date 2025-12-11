import { projects } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container section">
            <Link href="/projects" className="back-link">← Back to Projects</Link>
            <article className="detail-view">
                <h1 className="detail-title">{project.title}</h1>
                <div className="detail-image-wrapper">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1200px) 100vw, 800px"
                    />
                </div>
                <div className="detail-content">
                    <p>{project.description}</p>
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
