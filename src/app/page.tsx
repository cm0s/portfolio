'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();


  return (
    <div className="container section">
      <div className="hero-container">
        <h1 className="hero-title">
          {t('home.greeting')} <br />
          <span className="hero-highlight">{t('home.tagline')}</span>
        </h1>
        <p className="hero-desc">
          {t('home.intro')}
        </p>
        <div className="hero-buttons">
          <Link href="/projects" className="btn">
            {t('home.viewProjects')}
          </Link>
          <Link href="/gallery" className="btn btn-secondary">
            {t('home.seeArtwork')}
          </Link>
        </div>
      </div>
    </div>
  );
}
