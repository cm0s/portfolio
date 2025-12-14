'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container section">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '6rem 0' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          {t('home.greeting')} <br />
          <span style={{ color: 'var(--primary)' }}>{t('home.tagline')}</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '3rem', lineHeight: 1.6 }}>
          {t('home.intro')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
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
