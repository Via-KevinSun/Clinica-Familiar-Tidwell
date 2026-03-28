import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <LanguageProvider>
      {/* SEO Meta Tags are in public/index.html */}
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Hours />
        <Contact />
        <Careers />
        <Blog />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
