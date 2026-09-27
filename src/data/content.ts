import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
import art1 from "@/assets/images/art1.jpg";
import projectStopMotion from "@/assets/images/project_stop_motion.png";
import projectOnePiece from "@/assets/images/project_one_piece.jpg";
import art2 from "@/assets/images/art2.jpeg";
import art3 from "@/assets/images/art3.png";
import art4 from "@/assets/images/art4.jpg";
import art5 from "@/assets/images/art5.jpg";
import art6 from "@/assets/images/art6.jpg";
import art7 from "@/assets/images/art7.jpg";
import art8 from "@/assets/images/art8.jpg";
import art9 from "@/assets/images/art9.jpeg";
import art10 from "@/assets/images/art10.jpeg";
import { StaticImageData } from "next/image";

export interface Item {
    id: number;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
    imageUrl?: string | StaticImageData;
    videoUrl?: string;
    youtubeId?: string;
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
    },
    {
        id: 2,
        title: { en: "One Piece Fan Edit", fr: "Montage One Piece" },
        description: {
            en: "A fan-made video edit celebrating the legendary anime One Piece.",
            fr: "Un montage vidéo fait par fan célébrant le légendaire anime One Piece."
        },
        imageUrl: projectOnePiece,
        youtubeId: "3bM_cWnEDyo",
        tags: ["Video", "Anime", "One Piece"],
        slug: "one-piece-edit"
    }
];

export const artwork: Item[] = [
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
        id: 8,
        title: { en: "Chibi Deadpool", fr: "Chibi Deadpool" },
        description: {
             en: "Playful graffiti-style art featuring a mini Deadpool.",
            fr: "Art style graffiti ludique mettant en vedette un mini Deadpool."
        },
        imageUrl: art8,
        tags: ["Fan Art", "Graffiti", "Marvel"],
        slug: "chibi-deadpool"
    },
    {
        id: 9,
        title: { en: "Japanese Village", fr: "Village Japonais" },
        description: {
            en: "A quiet Japanese village at sunset, its river crossed by a stone bridge, created with Procreate.",
            fr: "Un paisible village japonais au coucher du soleil, sa rivière traversée par un pont de pierre, réalisé avec Procreate."
        },
        imageUrl: art9,
        tags: ["Illustration", "Procreate", "Landscape"],
        slug: "japanese-village"
    },
    {
        id: 10,
        title: { en: "Road Trip", fr: "Road Trip" },
        description: {
            en: "An overloaded bus speeding through the countryside at sunset, created with Procreate.",
            fr: "Un bus surchargé fonçant à travers la campagne au coucher du soleil, réalisé avec Procreate."
        },
        imageUrl: art10,
        tags: ["Illustration", "Procreate", "Cartoon"],
        slug: "road-trip"
    }
];
