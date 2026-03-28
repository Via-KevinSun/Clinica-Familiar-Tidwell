import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hours.css';

export default function Hours() {
  const { t } = useLanguage();
  const { hours } = t;

  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 Sun, 1-5 Mon-Fri, 6 Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeNum = hour * 100 + minute;

  let isOpen = false;
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && timeNum >= 900 && timeNum < 1800) isOpen = true;
  if (dayOfWeek === 6 && timeNum >= 900 && timeNum < 1400) isOpen = true;

  return (
    <section className="hours" id="hours">
      <div className="container hours-inner">
        <div className="hours-content">
          <span className="section-tag">{hours.tag}</span>
          <h2>{hours.headline}</h2>
          <p className="hours-sub">{hours.sub}</p>

          <div className="hours-status">
            <span className={`status-dot${isOpen ? ' open' : ' closed'}`} />
            <span className={`status-text${isOpen ? ' open' : ' closed'}`}>
              {isOpen ? (t.lang === 'en' ? 'Open Now' : 'Abierto ahora') : (t.lang === 'en' ? 'Closed' : 'Cerrado')}
            </span>
          </div>

          <div className="hours-table">
            {hours.schedule.map((row, i) => (
              <div className={`hours-row${i === 2 ? ' closed-day' : ''}`} key={i}>
                <span className="hours-day">{row.day}</span>
                <span className="hours-divider" />
                <span className={`hours-time${i === 2 ? ' closed' : ''}`}>{row.time}</span>
              </div>
            ))}
          </div>

          <p className="hours-note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {hours.note}
          </p>
        </div>

        <div className="hours-cta-col">
          <div className="hours-cta-card">
            <div className="cta-card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h3>{t.nav.cta}</h3>
            <p>Llame para reservar su cita medica hoy mismo. Atencion rapida y profesional.</p>
            <a href="tel:2817414838" className="btn-call">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.23 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              281-741-4838
            </a>
            <a href="#contact" className="btn-form-link">
              {t.contact?.form?.submit || 'Enviar mensaje'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
