import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import carl from '../assets/team/Calle.png';
import robertPlaceholder from '../assets/team/Robert.png';

export function About() {
  const team = [
    {
      name: "Carl Pohl",
      role: "Founder and CTO",
      image: carl,
      social: [
        { url: "#", icon: <Linkedin className="w-6 h-6" /> },
        { url: `mailto:carl.pohl@impactneuro.org`, icon: <Mail className="w-6 h-6" /> }
      ]
    },
    {
      name: "Robert Hansson",
      role: "Co-founder",
      image: robertPlaceholder,
      social: [
        { url: "#", icon: <Linkedin className="w-6 h-6" /> },
        { url: `mailto:robert.hansson@impactneuro.org`, icon: <Mail className="w-6 h-6" /> }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-dark">
      {/* Hero-style background */}
      <div className="fixed inset-0 z-0">
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
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pt-20 mb-16 text-center">
          <h1 className="mb-8 text-center heading-xl">
            <span className="text-primary">About</span>{" "}
            <span className="text-white">DopaTec</span>
          </h1>
          <p className="mx-auto mb-12 max-w-4xl font-mono text-xl text-center text-gray-200">
            Dopatec is headquartered in Malmö, Sweden, 
            and is dedicated to transforming the future of learning by merging neuroscience with technology.
          </p>
        </div>

        <div className="py-16 text-center">
          <h2 className="mb-12 text-center heading-xl">
            <span className="text-primary">Our</span>{" "}
            <span className="text-white">Team</span>
          </h2>
          <div className="grid grid-cols-1 gap-12 mx-auto max-w-4xl md:grid-cols-2 lg:gap-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden relative p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="mb-8">
                  <div className="overflow-hidden mx-auto w-64 h-64 rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="relative">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}