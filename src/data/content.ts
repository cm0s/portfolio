import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import art1 from "@/assets/images/art1.png";
import art2 from "@/assets/images/art2.jpeg";
import art3 from "@/assets/images/art3.png";
import { StaticImageData } from "next/image";

export interface Item {
    id: number;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
    imageUrl: string | StaticImageData;
    tags?: string[];
    slug: string;
}

export const projects: Item[] = [
    {
        id: 1,
        title: { en: "Space Invaders Clone", fr: "Clone de Space Invaders" },
        description: {
            en: "A classic arcade game recreation built with Python and Pygame. Features scoring, multiple levels, and sound effects.",
            fr: "Une recréation du jeu d'arcade classique construite avec Python et Pygame. Inclut scores, multiples niveaux et effets sonores."
        },
        imageUrl: project1,
        tags: ["Python", "Game Dev"],
        slug: "space-invaders"
    },
    {
        id: 2,
        title: { en: "School Website", fr: "Site Web de l'École" },
        description: {
            en: "A mockup website for my school's science club. Built with HTML and CSS.",
            fr: "Une maquette de site web pour le club de science de mon école. Construit avec HTML et CSS."
        },
        imageUrl: project2,
        tags: ["Web", "HTML/CSS"],
        slug: "school-website"
    },
    {
        id: 3,
        title: { en: "Weather Station", fr: "Station Météo" },
        description: {
            en: "Arduino-based weather station that tracks temperature and humidity.",
            fr: "Station météo basée sur Arduino qui suit la température et l'humidité."
        },
        imageUrl: project3,
        tags: ["Arduino", "Electronics"],
        slug: "weather-station"
    }
];

export const artwork: Item[] = [
    {
        id: 1,
        title: { en: "Sunset Valley", fr: "Valée au Coucher du Soleil" },
        description: {
            en: "Acrylic painting on canvas highlighting warm colors.",
            fr: "Peinture acrylique sur toile mettant en valeur les couleurs chaudes."
        },
        imageUrl: art1,
        tags: ["Painting", "Acrylic"],
        slug: "sunset-valley"
    },
    {
        id: 2,
        title: { en: "Cyberpunk City", fr: "Ville Cyberpunk" },
        description: {
            en: "Digital concept art created in Blender.",
            fr: "Concept art numérique créé dans Blender."
        },
        imageUrl: art2,
        tags: ["3D", "Blender"],
        slug: "cyberpunk-city"
    },
    {
        id: 3,
        title: { en: "Character Sketch", fr: "Croquis de Personnage" },
        description: {
            en: "Pencil sketch of a fantasy character.",
            fr: "Croquis au crayon d'un personnage fantastique."
        },
        imageUrl: art3,
        tags: ["Sketch", "Traditional"],
        slug: "character-sketch"
    }
];
