'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo">
          Portfolio
        </Link>
        <ul className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <li><Link href="/">{t('nav.home')}</Link></li>
          <li><Link href="/gallery">{t('nav.gallery')}</Link></li>
          <li><Link href="/projects">{t('nav.projects')}</Link></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
}
