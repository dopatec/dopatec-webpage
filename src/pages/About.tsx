import React, { useEffect } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import carl from '../assets/team/Calle.png';
import robertPlaceholder from '../assets/team/Robert.png';
import { useFadeIn } from '../hooks/useFadeIn';

export function About() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        if (speed) {
          const yPos = -(scrolled * parseFloat(speed));
          element.setAttribute('style', `transform: translate3d(0, ${yPos}px, 0)`);
        }
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
      social: [
        { url: "#", icon: <Linkedin className="w-6 h-6" /> },
        { url: `mailto:carl.pohl@impactneuro.org`, icon: <Mail className="w-6 h-6" /> }
      ]
    },
    {
      name: "Robert Hansson",
      role: "CEO",
      image: robertPlaceholder,
      social: [
        { url: "#", icon: <Linkedin className="w-6 h-6" /> },
        { url: `mailto:robert.hansson@impactneuro.org`, icon: <Mail className="w-6 h-6" /> }
      ]
    }
  ];

  return (
    <div className="overflow-hidden min-h-screen bg-dark">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b via-transparent from-black/50 to-black/50" />
        


        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 4 + 2;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 3;
            
            return (
              <div
                key={i}
                className="absolute bg-gradient-to-r to-transparent rounded-full from-primary/5"
                style={{
                  left: `${initialX}%`,
                  top: `${initialY}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `float ${duration}s ${delay}s linear infinite`
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Content */}
        <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="pt-20 mb-16 text-center">
            {/* Title Section */}
            {(() => {
              const [ref, isVisible] = useFadeIn();
              return (
                <div 
                  ref={ref}
                  className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                >
                  <h1 className="mb-8 text-center heading-xl parallax" data-speed="0.1" data-text="Om Impact Neuro Foundation">
                    <span className="text-primary">About</span>{" "}
                    <span className="text-white">DopaTec</span>
                  </h1>
                  <p className="mx-auto mb-12 max-w-4xl font-mono text-xl text-center text-gray-200 parallax" data-speed="0.15">
                    Dopatec is headquartered in Malmö, Sweden, 
                    and is dedicated to transforming the future of learning by merging neuroscience with technology.
                  </p>
                </div>
              );
            })()}
          </div>

          <div className="py-16 text-center">
            {(() => {
              const [ref, isVisible] = useFadeIn();
              return (
                <div
                  ref={ref}
                  className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                >
                  <h2 className="mb-12 text-center heading-xl parallax" data-speed="0.1" data-text="Vårt Team">
                    <span className="text-primary">Our</span>{" "}
                    <span className="text-white">Team</span>
                  </h2>
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16 max-w-5xl mx-auto">
                    {team.map((member, index) => {
                      const [memberRef, memberVisible] = useFadeIn();
                      return (
                        <div
                          key={index}
                          ref={memberRef}
                          className={`fade-in-section delay-${index + 1} ${memberVisible ? 'is-visible' : ''} p-6 backdrop-blur-sm rounded-xl bg-black/30 relative overflow-hidden h-[600px]`}
                        >
                          <div className="absolute inset-0 -z-10 px-8 pt-8">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="object-contain w-full h-full opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" style={{ backgroundImage: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0) 100%)' }} />
                          </div>
                          <div className="relative z-10 mt-auto flex flex-col h-full">
                            <div className="mt-auto">
                              <h3 className="mb-2 text-2xl font-bold text-primary">{member.name}</h3>
                              <p className="mb-4 font-mono text-gray-300">{member.role}</p>
                              <div className="flex gap-4 justify-center">
                                {member.social.map((link, i) => (
                                  <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 rounded-full transition-colors duration-300 hover:text-primary hover:bg-primary/10"
                                  >
                                    {link.icon}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}