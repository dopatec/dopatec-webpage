import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Solution } from '../components/Solution';
import { Contact } from '../components/Contact';
import { Projects } from '../components/Projects';
import { Dopamine } from '../components/Dopamine';

export function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      const heroSection = document.querySelector('.hero-section');

      parallaxElements.forEach(element => {
        if (element instanceof HTMLElement) {
          const speed = element.dataset.speed || '0.5';
          const yPos = -(scrolled * parseFloat(speed));
          element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });

      if (heroSection instanceof HTMLElement) {
        const opacity = Math.max(1 - scrolled / 500, 0);
        heroSection.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden min-h-screen bg-dark">
      {/* Hero Section */}
      <Hero />

      {/* Dopamine Section */}
      <Dopamine />

      {/* Solutions Section */}
      <Solution />

      {/* Projects section */}
      <Projects />

      {/* Mission Section */}
      <Contact />
    </div>
  );
}
