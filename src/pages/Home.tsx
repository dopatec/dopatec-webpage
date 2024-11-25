import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Dopamine } from '../components/Dopamine';
import { DopamineMolecule } from '../components/DopamineMolecule';
import { Hero } from '../components/Hero';
import { Solution } from '../components/Solution';
import { Contact } from '../components/Contact';
import { Projects } from '../components/Projects';

const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      const heroSection = document.querySelector('.hero-section');

      parallaxElements.forEach((element: any) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });

      if (heroSection) {
        const opacity = Math.max(1 - scrolled / 500, 0);
        (heroSection as HTMLElement).style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInterestClick = () => {
    window.open(INTEREST_FORM_URL, '_blank');
  };

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