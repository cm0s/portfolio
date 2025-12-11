import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export default function ProjectsPage() {
    return (
        <div className="container section">
            <header className="page-header">
                <h1 className="page-title">My Projects</h1>
                <p className="page-desc">Showcase of my coding projects, school assignments, and experiments.</p>
            </header>

            <div className="grid">
                {projects.map((item) => (
                    <ProjectCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
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
