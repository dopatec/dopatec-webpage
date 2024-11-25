import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section className="relative py-20">
      {/* Background effects */}
      <div className="overflow-hidden absolute inset-0">
        {/* Gradient background */}
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
            const rotation = Math.random() * 360;
            
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
                  transform: `scale(${scale}) rotate(${rotation}deg)`,
                  animation: `
                    float ${duration}s ease-in-out ${delay}s infinite,
                    pulse ${2 + Math.random() * 2}s ease-in-out ${delay}s infinite,
                    glow ${3 + Math.random() * 2}s ease-in-out ${delay}s infinite,
                    spin ${8 + Math.random() * 4}s linear infinite
                  `
                }}
              >
                {/* Inner glow effect */}
                <div 
                  className="absolute inset-0 rounded-full bg-primary/30"
                  style={{
                    filter: 'blur(2px)',
                    animation: `pulse ${2 + Math.random() * 2}s ease-in-out ${delay}s infinite alternate`
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Energy waves */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full rounded-full border border-primary/10"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `ripple ${6 + i * 2}s linear infinite`
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => {
            const size = 40 + Math.random() * 60;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
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
                  filter: 'blur(20px)',
                  animation: `
                    float ${10 + Math.random() * 5}s ease-in-out ${delay}s infinite,
                    pulse ${5 + Math.random() * 3}s ease-in-out ${delay}s infinite alternate
                  `
                }}
              />
            );
          })}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const delay = Math.random() * 5;
            const duration = 3 + Math.random() * 2;
            const size = 2 + Math.random() * 3;
            const initialX = Math.random() * 100;
            const initialY = Math.random() * 100;
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary"
                style={{
                  left: `${initialX}%`,
                  top: `${initialY}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `float ${duration}s ease-in-out ${delay}s infinite`
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}

      {/* Header */}
      <div className="container relative z-10 px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <h2 className="mb-4 text-left heading-xl" data-text="Projects.">
          <span className="text-primary">Projects</span>
          {" "}
          <span className="text-white"></span>
          <span className="text-primary">.</span>
        </h2>
        <p className="text-2xl text-white whitespace-nowrap md:text-3xl">
          
        </p>
      </div>


    <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex justify-center">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="relative p-8 w-full max-w-md backdrop-blur-sm transition-all duration-700 group bg-black/95 hover:transform hover:scale-105"
            style={{
              animation: `fadeInUp 0.6s ease-out forwards ${index * 0.2}s`
            }}
          >
            {/* Tech frame corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-50 transition-all duration-700 border-primary group-hover:opacity-100 group-hover:scale-110" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-50 transition-all duration-700 border-primary group-hover:opacity-100 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-50 transition-all duration-700 border-primary group-hover:opacity-100 group-hover:scale-110" />
            <div className="absolute right-0 bottom-0 w-4 h-4 border-r-2 border-b-2 opacity-50 transition-all duration-700 border-primary group-hover:opacity-100 group-hover:scale-110" />
            
            {/* Glowing line effect */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
            <h3 className="mb-4 heading-sm">{project.name}</h3>
            <p className="mb-6 font-mono text-body">{project.description}</p>
            <Link
              to={`/projects`}
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 group-hover:text-white"
            >
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
