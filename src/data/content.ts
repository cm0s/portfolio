export interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags?: string[];
}

export const projects: Item[] = [
    {
        id: 1,
        title: "Space Invaders Clone",
        description: "A classic arcade game recreation built with Python and Pygame. Features scoring, multiple levels, and sound effects.",
        imageUrl: "/images/project1.png",
        tags: ["Python", "Game Dev"]
    },
    {
        id: 2,
        title: "School Website",
        description: "A mockup website for my school's science club. Built with HTML and CSS.",
        imageUrl: "/images/project2.png",
        tags: ["Web", "HTML/CSS"]
    },
    {
        id: 3,
        title: "Weather Station",
        description: "Arduino-based weather station that tracks temperature and humidity.",
        imageUrl: "/images/project3.png",
        tags: ["Arduino", "Electronics"]
    }
];

export const artwork: Item[] = [
    {
        id: 1,
        title: "Sunset Valley",
        description: "Acrylic painting on canvas highlighting warm colors.",
        imageUrl: "/images/art1.png",
        tags: ["Painting", "Acrylic"]
    },
    {
        id: 2,
        title: "Cyberpunk City",
        description: "Digital concept art created in Blender.",
        imageUrl: "/images/art2.png",
        tags: ["3D", "Blender"]
    },
    {
        id: 3,
        title: "Character Sketch",
        description: "Pencil sketch of a fantasy character.",
        imageUrl: "/images/art3.png",
        tags: ["Sketch", "Traditional"]
    }
];
