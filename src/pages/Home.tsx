import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Dopamine } from '../components/Dopamine';

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
    <div className="min-h-screen bg-dark overflow-hidden">
      {/* Hero Section */}
      <section className="hero-section flex relative justify-start items-center min-h-screen">
        <div className="absolute inset-0 z-0">
          {/* Neural network background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.95)_100%)]" />
          
          {/* Digital circuit patterns */}
          <div className="circuit-pattern absolute inset-0 opacity-10" />
          
          {/* Neural connections */}
          <div className="neural-connections absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`neuron-path neuron-path-${i + 1}`}>
                <div className="signal-pulse" />
              </div>
            ))}
          </div>

          {/* Dopamine particles */}
          <div className="dopamine-particles absolute inset-0">
            {[...Array(20)].map((_, i) => {
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              const delay = Math.random() * 4;
              const duration = 3 + Math.random() * 3;
              
              return (
                <div
                  key={i}
                  className={`particle particle-${i + 1}`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>

          {/* Tech grid overlay */}
          <div className="tech-grid absolute inset-0 opacity-20" />
          
          {/* Glowing synapses */}
          <div className="parallax synapse synapse-1" data-speed="-0.2">
            <div className="synapse-glow" />
          </div>
          <div className="parallax synapse synapse-2" data-speed="0.3">
            <div className="synapse-glow" />
          </div>
          <div className="parallax synapse synapse-3" data-speed="-0.1">
            <div className="synapse-glow" />
          </div>
        </div>

        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 heading-xl parallax" data-speed="0.1">
            <span className="text-primary">Dopa</span>
            <span className="text-white">Tec</span>
            <span className="text-primary">.</span>
          </h1>
          <h1 className="mb-6 heading-xl parallax" data-speed="0.15">
            <span className="text-primary">Dopamine</span>
            {" "}
            <span className="text-white">Technologies</span>
            <span className="text-primary">.</span>
          </h1>
          <h2 className="mb-8 max-w-3xl text-2xl text-white md:text-3xl parallax" data-speed="0.2">
            We are a pioneering tech company transforming digital engagement into 
            empowered learning through neuroscience-driven solutions.
          </h2>
          <p className="mb-12 max-w-3xl font-mono text-xl text-gray-200">
          </p>
          <div className="text-left">
            <button
              onClick={handleInterestClick}
              className="font-mono text-black btn bg-primary hover:bg-primary-light"
            >
              Get to know us
            </button>
          </div>
        </div>
      </section>

      {/* Dopamine Section */}
      <Dopamine />

      {/* Projects Preview Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 heading-lg">Våra Projekt</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="p-8 transition-all duration-300 bg-dark hover:transform hover:scale-105">
                <h3 className="mb-4 heading-sm">{project.name}</h3>
                <p className="mb-6 font-mono text-body">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex justify-start items-center w-full font-bold btn bg-accent hover:bg-accent-light text-dark"
                >
                  Läs mer <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-8 heading-lg">Vår Mission</h2>
          <p className="mb-12 max-w-4xl font-mono text-xl text-gray-200">
            Vår mission är att skapa en framtid där varje individ med NPF får chansen att uppfylla 
            sin potential och uppleva meningsfull inkludering. Genom tidig diagnos, utbildning och 
            innovation vill vi förbättra livskvaliteten och möjliggöra för individer med NPF att blomstra.
          </p>
          <div className="text-left">
            <button
              onClick={handleInterestClick}
              className="font-mono text-black btn bg-primary hover:bg-primary-light"
            >
              Engagera dig
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}