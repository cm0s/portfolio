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
        title: { en: "Masked Guardian", fr: "Gardien Masqué" },
        description: {
            en: "A character with a metal box mask holding a magical staff.",
            fr: "Un personnage avec un masque en boîte métallique tenant un bâton magique."
        },
        imageUrl: art1,
        tags: ["Fantasy", "Illustration"],
        slug: "masked-guardian"
    },
    {
        id: 2,
        title: { en: "Pink Gunner", fr: "Tireur Rose" },
        description: {
            en: "Stylized character in pink attire holding a futuristic weapon.",
            fr: "Personnage stylisé en tenue rose tenant une arme futuriste."
        },
        imageUrl: art2,
        tags: ["Digital Art", "Stylized"],
        slug: "pink-gunner"
    },
    {
        id: 3,
        title: { en: "Coffee Gojo", fr: "Gojo au Café" },
        description: {
            en: "Fan art of Gojo Satoru created with coffee painting techniques.",
            fr: "Fan art de Gojo Satoru créé avec des techniques de peinture au café."
        },
        imageUrl: art3,
        tags: ["Fan Art", "Coffee Painting", "Jujutsu Kaisen"],
        slug: "coffee-gojo"
    },
    {
        id: 4,
        title: { en: "Urban Duo", fr: "Duo Urbain" },
        description: {
            en: "Two stylized characters in streetwear, featuring a jersey with number 10.",
            fr: "Deux personnages stylisés en streetwear, avec un maillot portant le numéro 10."
        },
        imageUrl: art4,
        tags: ["Streetwear", "Character Design"],
        slug: "urban-duo"
    },
    {
        id: 5,
        title: { en: "Zenitsu Agatsuma", fr: "Zenitsu Agatsuma" },
        description: {
            en: "Fan art of Zenitsu from Demon Slayer dealing a thunderous strike.",
            fr: "Fan art de Zenitsu de Demon Slayer portant un coup de tonnerre."
        },
        imageUrl: art5,
        tags: ["Fan Art", "Anime", "Demon Slayer"],
        slug: "zenitsu-agatsuma"
    },
    {
        id: 6,
        title: { en: "Striker Number 10", fr: "Attaquant Numéro 10" },
        description: {
            en: "A vibrant character portrait wearing a green vest and pink shorts.",
            fr: "Un portrait de personnage vibrant portant un gilet vert et un short rose."
        },
        imageUrl: art6,
        tags: ["Sports", "Character Art"],
        slug: "striker-number-10"
    },
    {
        id: 7,
        title: { en: "Ronin Sketch", fr: "Croquis de Ronin" },
        description: {
            en: "Dynamic pencil sketch of a swordsman with blue ink accents.",
            fr: "Croquis dynamique au crayon d'un épéiste avec des accents d'encre bleue."
        },
        imageUrl: art7,
        tags: ["Sketch", "Ink"],
        slug: "ronin-sketch"
    },
    {
        id: 8,
        title: { en: "Chibi Deadpool", fr: "Chibi Deadpool" },
        description: {
            en: "Playful graffiti-style art featuring a mini Deadpool.",
            fr: "Art style graffiti ludique mettant en vedette un mini Deadpool."
        },
        imageUrl: art8,
        tags: ["Fan Art", "Graffiti", "Marvel"],
        slug: "chibi-deadpool"
    }
];
