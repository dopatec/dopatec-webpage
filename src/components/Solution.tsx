import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Projects } from './Projects';

export function Solution() {
  return (
    <section className="relative py-20 bg-black">
      {/* Background effects */}
      <div className="overflow-hidden absolute inset-0">
        <div className="absolute inset-0 bg-black" />
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
        <h2 className="mb-4 text-left heading-xl glitch-text" data-text="Our Solutions.">
          <span className="text-primary">Our</span>
          {" "}
          <span className="text-white">Solutions</span>
          <span className="text-primary">.</span>
        </h2>
        <p className="text-2xl text-white whitespace-nowrap md:text-3xl">
          
        </p>
      </div>

      {/* Explanation of solutions */}

      {/* Projects */}
      
    </section>
  );
}
