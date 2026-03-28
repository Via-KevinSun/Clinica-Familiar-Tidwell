import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-img-col">
          <div className="about-img-wrap">
            <img
              src="https://img1.wsimg.com/isteam/ip/ae6a4dcd-8ecf-4c57-9e45-a37e71b46311/blob-41.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,h:600,cg:true"
              alt="Clinica Familiar Tidwell equipo medico"
              loading="lazy"
              onError={e => { e.target.parentElement.classList.add('img-fallback'); }}
            />
            <div className="about-img-accent" />
          </div>
          <div className="about-badge">
            <span className="badge-year">1985</span>
            <span className="badge-label">Fundada en</span>
          </div>
        </div>

        <div className="about-text-col">
          <span className="section-tag">{about.tag}</span>
          <h2>{about.headline}</h2>
          <p>{about.p1}</p>
          <p>{about.p2}</p>

          <div className="about-stats">
            {about.stats.map((s, i) => (
              <div className="about-stat" key={i}>
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
