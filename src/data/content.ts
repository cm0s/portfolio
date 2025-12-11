export interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags?: string[];
    slug: string;
}

export const projects: Item[] = [
    {
        id: 1,
        title: "Space Invaders Clone",
        description: "A classic arcade game recreation built with Python and Pygame. Features scoring, multiple levels, and sound effects.",
        imageUrl: "/portfolio/images/project1.png",
        tags: ["Python", "Game Dev"],
        slug: "space-invaders"
    },
    {
        id: 2,
        title: "School Website",
        description: "A mockup website for my school's science club. Built with HTML and CSS.",
        imageUrl: "/portfolio/images/project2.png",
        tags: ["Web", "HTML/CSS"],
        slug: "school-website"
    },
    {
        id: 3,
        title: "Weather Station",
        description: "Arduino-based weather station that tracks temperature and humidity.",
        imageUrl: "/portfolio/images/project3.png",
        tags: ["Arduino", "Electronics"],
        slug: "weather-station"
    }
];

export const artwork: Item[] = [
    {
        id: 1,
        title: "Sunset Valley",
        description: "Acrylic painting on canvas highlighting warm colors.",
        imageUrl: "/portfolio/images/art1.png",
        tags: ["Painting", "Acrylic"],
        slug: "sunset-valley"
    },
    {
        id: 2,
        title: "Cyberpunk City",
        description: "Digital concept art created in Blender.",
        imageUrl: "/portfolio/images/art2.png",
        tags: ["3D", "Blender"],
        slug: "cyberpunk-city"
    },
    {
        id: 3,
        title: "Character Sketch",
        description: "Pencil sketch of a fantasy character.",
        imageUrl: "/portfolio/images/art3.png",
        tags: ["Sketch", "Traditional"],
        slug: "character-sketch"
    }
];
