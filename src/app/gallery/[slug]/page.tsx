import { artwork } from "@/data/content";
import { notFound } from "next/navigation";
import GalleryDetailClient from "@/components/GalleryDetailClient";

export function generateStaticParams() {
    return artwork.map((item) => ({
        slug: item.slug,
    }));
}

export default async function GalleryDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = artwork.find((p) => p.slug === slug);

    if (!item) {
        notFound();
    }

    return <GalleryDetailClient item={item} />;
}
