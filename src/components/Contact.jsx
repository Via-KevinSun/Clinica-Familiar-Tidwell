import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const { contact } = t;
  const f = contact.form;

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      // mailto fallback — open native email client with form data
      const subject = encodeURIComponent(`Consulta de ${form.name}`);
      const body = encodeURIComponent(
        `Nombre: ${form.name}\nEmail: ${form.email}\nTelefono: ${form.phone}\n\nMensaje:\n${form.message}`
      );
      window.location.href = `mailto:clinicafamiliartidwell@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-tag">{contact.tag}</span>
          <h2>{contact.headline}</h2>

          <div className="contact-details">
            <a href="https://maps.google.com/?q=13525+Tidwell+Rd+Suite+700+Houston+TX+77044" target="_blank" rel="noreferrer" className="contact-detail">
              <div className="detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="detail-label">Direccion</div>
                <div className="detail-value">{contact.address}</div>
              </div>
            </a>

            <a href="tel:2817414838" className="contact-detail">
              <div className="detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.1 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.23 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div className="detail-label">Telefono</div>
                <div className="detail-value">{contact.phone}</div>
              </div>
            </a>

            <a href={`mailto:${contact.email}`} className="contact-detail">
              <div className="detail-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <div className="detail-label">Email</div>
                <div className="detail-value">{contact.email}</div>
              </div>
            </a>
          </div>

          <div className="contact-map">
            <iframe
              title="Clinica Familiar Tidwell ubicacion"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.5!2d-95.2504!3d29.8196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b0b0b0b0b0b0%3A0x0!2s13525+Tidwell+Rd+Suite+700%2C+Houston%2C+TX+77044!5e0!3m2!1ses!2sus!4v1234567890"
              width="100%"
              height="220"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact-form-col">
          <div className="contact-form-card">
            {status === 'success' ? (
              <div className="form-success">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <p>{f.success}</p>
                <button className="btn-reset" onClick={() => { setStatus('idle'); setForm({ name:'',email:'',phone:'',message:'' }); }}>
                  Volver
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form">
                <h3>Enviar un mensaje</h3>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{f.name}</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Juan Garcia" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">{f.phone}</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="281-000-0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">{f.email}</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="correo@ejemplo.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{f.message}</label>
                  <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Escriba su mensaje aqui..." />
                </div>

                {status === 'error' && <p className="form-error">{f.error}</p>}

                <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? f.sending : f.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
