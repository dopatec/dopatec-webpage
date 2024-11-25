import React, { useEffect } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import carl from '../assets/team/Calle.png';
import robertPlaceholder from '../assets/team/Robert.png';

export function About() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');

      parallaxElements.forEach((element: any) => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    {
      name: "Carl Pohl",
      role: "CEO",
      image: carl,
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Robert Hansson",
      role: "CEO",
      image: robertPlaceholder,
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="overflow-hidden min-h-screen bg-dark">
      <div className="relative pt-16">
        {/* Background effects */}
        <div className="overflow-hidden absolute inset-0">
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
            {[...Array(30)].map((_, i) => {
              const delay = Math.random() * 5;
              const duration = 3 + Math.random() * 2;
              const size = 2 + Math.random() * 4;
              const initialX = Math.random() * 100;
              const initialY = Math.random() * 100;
              const opacity = 0.1 + Math.random() * 0.3;
              const scale = 0.8 + Math.random() * 0.4;
              
              return (
                <div
                  key={i}
                  className="absolute rounded-full bg-primary/20 blur-[1px] transition-all duration-1000"
                  style={{
                    left: `${initialX}%`,
                    top: `${initialY}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    opacity: opacity,
                    transform: `scale(${scale})`,
                    animation: `
                      float ${duration}s ease-in-out ${delay}s infinite,
                      pulse ${2 + Math.random() * 2}s ease-in-out ${delay}s infinite,
                      glow ${3 + Math.random() * 2}s ease-in-out ${delay}s infinite
                    `
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-8 heading-xl glitch-text parallax" data-speed="0.1" data-text="Om Impact Neuro Foundation">
              <span className="text-primary">About</span>{" "}
              <span className="text-white">DopaTec</span>
            </h1>
            <p className="mx-auto mb-12 max-w-4xl font-mono text-xl text-gray-200 parallax" data-speed="0.15">
            Dopatec is headquartered in Malmö, Sweden, 
            and is dedicated to transforming the future of learning by merging neuroscience with technology.
            </p>
          </div>

          <div className="py-16 text-center">
            <h2 className="mb-12 text-center heading-xl glitch-text parallax" data-speed="0.1" data-text="Vårt Team">
              <span className="text-primary">Our</span>{" "}
              <span className="text-white">Team</span>
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
              {team.map((member, index) => (
                <div 
                  key={member.name}
                  className="relative p-8 backdrop-blur-sm transition-all duration-700 group bg-black/30 hover:transform hover:scale-105"
                  style={{
                    animation: `fadeInUp 0.6s ease-out forwards ${index * 0.2}s`
                  }}
                >
                  <div className="flex flex-col items-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover mb-6 w-48 h-48 rounded-full"
                    />
                    <h3 className="mb-2 text-2xl font-bold text-primary">{member.name}</h3>
                    <p className="mb-4 text-lg text-gray-300">{member.role}</p>
                    <div className="flex gap-4">
                      <a href={member.linkedin} className="text-gray-400 transition-colors hover:text-primary">
                        <Linkedin />
                      </a>
                      <a href={member.twitter} className="text-gray-400 transition-colors hover:text-primary">
                        <Twitter />
                      </a>
                      <a href={`mailto:${member.name.toLowerCase()}@impactneuro.org`} className="text-gray-400 transition-colors hover:text-primary">
                        <Mail />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}