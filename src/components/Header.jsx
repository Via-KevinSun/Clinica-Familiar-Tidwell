import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#hours', label: t.nav.hours },
    { href: '#careers', label: t.nav.careers },
    { href: '#blog', label: t.nav.blog },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span className="top-bar-phone">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.23 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            281-741-4838
          </span>
          <span className="top-bar-addr">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            13525 Tidwell Rd Suite 700, Houston TX
          </span>
        </div>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">
          {/* LOGO SLOT */}
          <a href="#hero" className="logo" aria-label="Clinica Familiar Tidwell">
            <div className="logo-placeholder">
              <div className="logo-icon-area">
                <svg className="logo-ecg" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="0,16 14,16 18,4 22,28 26,10 30,22 34,16 80,16" stroke="#C21E23" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="logo-text-block">
                <span className="logo-clinica">CLINICA FAMILIAR</span>
                <span className="logo-tidwell">TIDWELL</span>
              </div>
            </div>
          </a>

          <nav className={`nav${menuOpen ? ' open' : ''}`}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="lang-toggle"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              aria-label="Cambiar idioma / Switch language"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>

            <a href="#contact" className="btn-cta">
              {t.nav.cta}
            </a>

            <button
              className={`hamburger${menuOpen ? ' active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
