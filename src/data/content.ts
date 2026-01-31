import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import art1 from "@/assets/images/art1.jpg";
import projectStopMotion from "@/assets/images/project_stop_motion.png";
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
    imageUrl?: string | StaticImageData;
    videoUrl?: string;
    tags?: string[];
    slug: string;
}

export const projects: Item[] = [
    {
        id: 1,
        title: { en: "Stop Motion Animation", fr: "Animation Stop Motion" },
        description: {
            en: "A creative stop motion video animation.",
            fr: "Une vidéo d'animation créative en stop motion."
        },
        imageUrl: projectStopMotion,
        videoUrl: "/videos/stop-motion.mp4",
        tags: ["Video", "Stop Motion"],
        slug: "stop-motion"
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
