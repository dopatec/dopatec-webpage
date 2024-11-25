import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function Contact() {
  const navigate = useNavigate();

  const handleInterestClick = () => {
    navigate('/contact');
  };

  return (
    <section className="overflow-hidden relative py-32 bg-black/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-5 tech-grid" />
        
        {/* Circuit lines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${30 + i * 30}%`,
                animation: `slideRight ${10 + i}s linear infinite`,
                opacity: 0.1
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const size = 2 + Math.random() * 2;
            return (
              <div
                key={i}
                className="absolute bg-primary/20 rounded-full blur-[1px]"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `floatParticle ${8 + Math.random() * 8}s ease-in-out infinite`
                }}
              />
            );
          })}
        </div>

        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-32 h-32 to-transparent opacity-40 bg-gradient-radial from-primary/20" />
        <div className="absolute right-0 bottom-0 w-32 h-32 to-transparent opacity-40 bg-gradient-radial from-primary/20" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-left heading-xl glitch-text" data-text="Contact Us.">
          <span className="text-primary">Contact</span>
          {" "}
          <span className="text-white">Us</span>
          <span className="text-primary">.</span>
        </h2>
        <p className="mb-12 font-mono text-2xl leading-relaxed text-left text-gray-200">
          We would love to answer any of your questions.
        </p>
        <div className="flex justify-start">
          <button
            onClick={handleInterestClick}
            className="inline-flex overflow-hidden relative gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light group"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              Reach out
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover:translate-x-1" />
            <div className="absolute inset-0 transition-transform duration-500 transform origin-left scale-x-0 bg-white/10 group-hover:scale-x-100" />
          </button>
        </div>
      </div>
    </section>
  );
}
