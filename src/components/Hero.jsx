import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-gradient" aria-hidden="true" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <span className="section-tag reveal">{t.hero.badge}</span>

          <h1 className="hero-headline reveal reveal-d1">
            {t.hero.headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i === 1 ? <span className="headline-accent">{line}</span> : line}
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p className="hero-sub reveal reveal-d2">{t.hero.sub}</p>

          <div className="hero-actions reveal reveal-d3">
            <a href="#contact" className="btn-hero-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {t.hero.cta}
            </a>
            <a href="tel:2817414838" className="btn-hero-phone">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.23 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              {t.hero.phone}
            </a>
          </div>

          <div className="hero-trust reveal reveal-d4">
            <div className="trust-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Medico certificado</span>
            </div>
            <div className="trust-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
              <span>Personal bilingue</span>
            </div>
            <div className="trust-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Desde 1985</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-d2">
          <div className="hero-card">
            <div className="hero-card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="hero-card-content">
              <div className="hero-card-stat">
                <span className="stat-num">15,000+</span>
                <span className="stat-label">Pacientes atendidos</span>
              </div>
              <div className="hero-card-divider"/>
              <div className="hero-card-stat">
                <span className="stat-num">40+</span>
                <span className="stat-label">Anos de experiencia</span>
              </div>
            </div>
          </div>

          <div className="hero-img-placeholder">
            <img
              src="https://img1.wsimg.com/isteam/ip/ae6a4dcd-8ecf-4c57-9e45-a37e71b46311/blob-41.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:600,cg:true"
              alt="Clinica Familiar Tidwell"
              loading="lazy"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div className="img-overlay-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>USCIS Authorized</span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label={t.hero.scroll}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </a>
    </section>
  );
}
