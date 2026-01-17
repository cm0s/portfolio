import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import art1 from "@/assets/images/art1.png";
import art2 from "@/assets/images/art2.jpeg";
import art3 from "@/assets/images/art3.png";
import art4 from "@/assets/images/art4.jpg";
import art5 from "@/assets/images/art5.jpg";
import art6 from "@/assets/images/art6.jpg";
import art7 from "@/assets/images/art7.jpg";
import art8 from "@/assets/images/art8.jpg";
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
    },
    {
        id: 4,
        title: { en: "Artwork 4", fr: "Oeuvre 4" },
        description: {
            en: "A beautiful addition to the collection.",
            fr: "Une belle addition à la collection."
        },
        imageUrl: art4,
        tags: ["Art", "New"],
        slug: "artwork-4"
    },
    {
        id: 5,
        title: { en: "Artwork 5", fr: "Oeuvre 5" },
        description: {
            en: "Exploring new styles and techniques.",
            fr: "Exploration de nouveaux styles et techniques."
        },
        imageUrl: art5,
        tags: ["Experiment", "Abstract"],
        slug: "artwork-5"
    },
    {
        id: 6,
        title: { en: "Artwork 6", fr: "Oeuvre 6" },
        description: {
            en: "Vibrant colors and dynamic composition.",
            fr: "Couleurs vibrantes et composition dynamique."
        },
        imageUrl: art6,
        tags: ["Vibrant", "Composition"],
        slug: "artwork-6"
    },
    {
        id: 7,
        title: { en: "Artwork 7", fr: "Oeuvre 7" },
        description: {
            en: "A study of light and shadow.",
            fr: "Une étude de la lumière et de l'ombre."
        },
        imageUrl: art7,
        tags: ["Study", "Light"],
        slug: "artwork-7"
    },
    {
        id: 8,
        title: { en: "Artwork 8", fr: "Oeuvre 8" },
        description: {
            en: "Final piece of the current series.",
            fr: "Pièce finale de la série actuelle."
        },
        imageUrl: art8,
        tags: ["Series", "Final"],
        slug: "artwork-8"
    }
];
