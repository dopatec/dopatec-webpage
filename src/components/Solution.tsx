import React from 'react';
import { ArrowRight, Smartphone, Brain, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Solution() {
  const timelineSteps = [
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Transforming Digital Engagement",
      description: "We convert destructive digital behaviors into empowering educational experiences by redirecting dopamine-driven engagement towards meaningful learning."
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Neuroscience-Driven Technology",
      description: "By integrating neuroscience principles, we develop software solutions, UX designs, and adaptive Learning Management Systems (LMS) that stimulate motivation and enhance retention."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Research-Backed Methodologies",
      description: "Our approaches are grounded in extensive research and white papers, ensuring that our solutions are effective and scientifically validated."
    }
  ];

  return (
    <section className="relative py-20 bg-black">
      {/* Background effects */}
      <div className="overflow-hidden absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        {/* Neural network background */}
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
              className="absolute w-full h-full border border-primary/10 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `ripple ${6 + i * 2}s linear infinite`
              }}
            />
          ))}
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

      {/* Timeline */}
      <div className="container relative z-10 px-4 mx-auto mt-16 max-w-3xl sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
          
          {/* Timeline items */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div 
                key={index}
                className="relative pl-24 group"
                style={{
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 0.3}s`
                }}
              >
                {/* Icon container */}
                <div className="absolute left-0 p-2 -translate-y-1/2 top-8 bg-black">
                  <div className="relative p-4 transition-all duration-500 border border-primary/50 group-hover:border-primary">
                    {/* Glowing corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 transition-all duration-500 -translate-x-1 -translate-y-1 bg-primary/50 group-hover:bg-primary" />
                    <div className="absolute top-0 right-0 w-2 h-2 transition-all duration-500 translate-x-1 -translate-y-1 bg-primary/50 group-hover:bg-primary" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 transition-all duration-500 -translate-x-1 translate-y-1 bg-primary/50 group-hover:bg-primary" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 transition-all duration-500 translate-x-1 translate-y-1 bg-primary/50 group-hover:bg-primary" />
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 transition-all duration-500 border border-primary/10 backdrop-blur-sm group-hover:border-primary/30">
                  {/* Glowing line */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  <h3 className="mb-4 text-2xl font-bold text-primary">{step.title}</h3>
                  <p className="font-mono text-base text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
