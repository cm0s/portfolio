import ProjectCard from "@/components/ProjectCard";
import { artwork } from "@/data/content";

export default function GalleryPage() {
    return (
        <div className="container section">
            <header className="page-header">
                <h1 className="page-title">My Artwork</h1>
                <p className="page-desc">A collection of my drawings, paintings, and digital art.</p>
            </header>

            <div className="grid">
                {artwork.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    );
}
