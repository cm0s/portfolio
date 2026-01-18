'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo" onClick={closeMenu}>
          Alexis' Portfolio
        </Link>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>{t('nav.home')}</Link></li>
          <li><Link href="/gallery" onClick={closeMenu}>{t('nav.gallery')}</Link></li>
          <li><Link href="/projects" onClick={closeMenu}>{t('nav.projects')}</Link></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </nav>
  );
}
