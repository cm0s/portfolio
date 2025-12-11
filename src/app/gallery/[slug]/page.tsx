import { artwork } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return artwork.map((item) => ({
        slug: item.slug,
    }));
}

export default async function GalleryDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = artwork.find((p) => p.slug === slug);

    if (!item) {
        notFound();
    }

    return (
        <div className="container section">
            <Link href="/gallery" className="back-link">← Back to Gallery</Link>
            <article className="detail-view">
                <h1 className="detail-title">{item.title}</h1>
                <div className="detail-image-wrapper">
                    <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1200px) 100vw, 800px"
                    />
                </div>
                <div className="detail-content">
                    <p>{item.description}</p>
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
