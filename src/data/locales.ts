import { getAge } from "@/utils/age";

export type Locale = 'en' | 'fr';

export const getTranslations = () => {
    const age = getAge();
    
    return {
        en: {
            "nav.home": "Home",
            "nav.gallery": "Gallery",
            "nav.projects": "Projects",
            "home.greeting": "Hi, I'm Alexis.",
            "home.tagline": "I draw and make stuff.",
            "home.intro": `Welcome to my portfolio. I'm a ${age}-year-old student who loves drawing and making video edits. Here you can check out some of my drawings and projects.`,
            "home.viewProjects": "View Projects",
            "home.seeArtwork": "See Drawings",
            "footer.copyright": "Alexis' Portfolio",
            "projects.title": "My Projects",
            "projects.desc": "Showcase of my diverse projects.",
            "gallery.title": "My Drawings",
            "gallery.desc": "A collection of my drawings and digital art.",
            "common.backToProjects": "← Back to Projects",
            "common.backToGallery": "← Back to Gallery",
        },
        fr: {
            "nav.home": "Accueil",
            "nav.gallery": "Galerie",
            "nav.projects": "Projets",
            "home.greeting": "Salut, je suis Alexis.",
            "home.tagline": "Je dessine et je crée des trucs.",
            "home.intro": `Bienvenue sur mon portfolio. Je suis un élève de ${age} ans j'adore le dessin et les montages vidéo. Ici vous pouvez explorer quelques-uns de mes dessins et projets.`,
            "home.viewProjects": "Voir les projets",
            "home.seeArtwork": "Voir mes dessins",
            "footer.copyright": "Alexis' Portfolio",
            "projects.title": "Mes Projets",
            "projects.desc": "Présentation de mes projets divers.",
            "gallery.title": "Mes dessins",
            "gallery.desc": "Une collection de mes dessins et arts numériques.",
            "common.backToProjects": "← Retour aux projets",
            "common.backToGallery": "← Retour à la galerie",
        }
    };
};

// Keep backwards compatibility
export const translations = getTranslations();
