import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Careers.css';

export default function Careers() {
  const { t } = useLanguage();
  const { careers } = t;

  return (
    <section className="careers" id="careers">
      <div className="container careers-inner">
        <div className="careers-text">
          <span className="section-tag">{careers.tag}</span>
          <h2>{careers.headline}</h2>
          <p>{careers.sub}</p>
          <a
            href={`mailto:clinicafamiliartidwell@gmail.com?subject=Solicitud de empleo&body=Adjunto mi CV para consideracion.`}
            className="btn-careers"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {careers.cta}
          </a>
        </div>

        <div className="positions-list">
          {careers.positions.map((pos, i) => (
            <div className="position-card" key={i}>
              <div className="position-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
              </div>
              <div className="position-details">
                <span className="position-title">{pos.title}</span>
                <span className="position-type">{pos.type}</span>
              </div>
              <a href={`mailto:clinicafamiliartidwell@gmail.com?subject=Solicitud: ${pos.title}`} className="position-apply">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
