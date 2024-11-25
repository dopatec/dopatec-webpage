import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function Hero() {
  const navigate = useNavigate();

  const handleInterestClick = () => {
    navigate('/about');
  };

  return (
    <section className="flex relative justify-start items-center min-h-screen hero-section">
      <div className="absolute inset-0 z-0">
        {/* Neural network background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.95)_100%)]" />
        
        {/* Digital circuit patterns */}
        <div className="absolute inset-0 opacity-10 circuit-pattern" />
        
        {/* Neural connections */}
        <div className="absolute inset-0 neural-connections">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`neuron-path neuron-path-${i + 1}`}>
              <div className="signal-pulse" />
            </div>
          ))}
        </div>

        {/* Dopamine particles */}
        <div className="absolute inset-0 dopamine-particles">
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
        <div className="absolute inset-0 opacity-20 tech-grid" />
        
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
        <div className="flex flex-col gap-4">
          <h1 className="heading-xl parallax glitch-text" data-speed="0.1" data-text="DopaTec.">
            <span className="text-primary">Dopa</span>
            <span className="text-white">Tec</span>
            <span className="text-primary">.</span>
          </h1>
          <h1 className="heading-xl parallax glitch-text" data-speed="0.15" data-text="Dopamine Technologies">
            <span className="text-primary">Dopamine</span>
            {" "}
            <span className="text-white">Technologies</span>
          </h1>
        </div>
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
            Get to know us <ArrowRight className="ml-2" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 scroll-indicator-container">
          <div className="scroll-indicator">
            <div className="scroll-pulse"></div>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
