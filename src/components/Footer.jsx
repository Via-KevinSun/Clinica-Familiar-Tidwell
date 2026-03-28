import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const { footer, nav } = t;
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#about', label: nav.about },
    { href: '#services', label: nav.services },
    { href: '#testimonials', label: nav.testimonials },
    { href: '#hours', label: nav.hours },
    { href: '#careers', label: nav.careers },
    { href: '#blog', label: nav.blog },
    { href: '#contact', label: nav.contact },
  ];

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg className="footer-ecg" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="0,16 14,16 18,4 22,28 26,10 30,22 34,16 80,16" stroke="#C21E23" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" fill="none"/>
            </svg>
            <div className="footer-logo-text">
              <span className="footer-logo-clinica">CLINICA FAMILIAR</span>
              <span className="footer-logo-tidwell">TIDWELL</span>
            </div>
          </div>
          <p className="footer-tagline">{footer.tagline}</p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/12817414838" target="_blank" rel="noreferrer" className="social-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-nav">
          <span className="footer-col-title">{footer.links}</span>
          <ul>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact-col">
          <span className="footer-col-title">Contacto</span>
          <address>
            <a href="https://maps.google.com/?q=13525+Tidwell+Rd+Suite+700+Houston+TX+77044" target="_blank" rel="noreferrer" className="footer-address-link">
              13525 Tidwell Rd Suite 700<br />Houston, TX 77044
            </a>
          </address>
          <a href="tel:2817414838" className="footer-link">281-741-4838</a>
          <a href="mailto:clinicafamiliartidwell@gmail.com" className="footer-link">clinicafamiliartidwell@gmail.com</a>

          <a href="#contact" className="btn-footer-cta">
            {nav.cta}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>Clinica Familiar Tidwell &copy; {year}. {footer.rights}</span>
          <div className="footer-legal">
            <button type="button" className="legal-link">{footer.privacy}</button>
            <button type="button" className="legal-link">{footer.terms}</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
