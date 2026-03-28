import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Testimonials.css';

function StarRating() {
  return (
    <div className="stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" strokeWidth="1"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const { testimonials } = t;
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-tag">{testimonials.tag}</span>
          <h2>{testimonials.headline}</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.items.map((item, i) => (
            <div
              className={`testimonial-card${active === i ? ' active' : ''}`}
              key={i}
              onClick={() => setActive(i)}
            >
              <StarRating />
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
