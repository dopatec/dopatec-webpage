import React, { useEffect, useRef } from 'react';
import { Brain, Zap, Target } from 'lucide-react';
import { DopamineMolecule } from './DopamineMolecule';

export function Dopamine() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (rect.top / window.innerHeight);
      
      // Fade section based on scroll position
      if (scrollProgress >= 0 && scrollProgress <= 2) {
        sectionRef.current.style.opacity = Math.min(1, Math.max(0, scrollProgress)).toString();
      }

      // Trigger timeline animations sequentially
      timelineRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const itemRect = ref.getBoundingClientRect();
        const itemVisible = itemRect.top < window.innerHeight * 0.8;
        
        if (itemVisible) {
          ref.classList.add('timeline-item-visible');
          // Add delay for sequential activation
          setTimeout(() => {
            ref.classList.add('timeline-item-active');
          }, index * 800);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineSteps = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "The Brain's Reward System",
      description: "Dopamine is a neurotransmitter essential for motivation, pleasure, and learning. It reinforces behaviors by rewarding us with feelings of satisfaction."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "From Discovery to Application",
      description: "Discovered by Swedish Nobel laureate Arvid Carlsson, dopamine's role in conditions like ADHD and Parkinson's disease highlights its significance in learning and motor functions."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Turning Addiction into Education",
      description: "While social media exploits dopamine to create addictive behaviors through instant gratification, we harness its power to foster positive learning experiences."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 min-h-screen dopamine-section">
      <div className="neural-network-bg"></div>
      <div className="dopamine-particles">
        {/* Particles will be added dynamically */}
      </div>
      
      {/* Header and Brief Story */}
      <div className="container relative z-10 px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <div className="mb-4">
          <DopamineMolecule />
        </div>
        <div className="relative">
          <h2 className="mb-2 heading-xl text-primary glitch-text" data-text="Dopamine.">
            Dopamine.
          </h2>
          <p className="text-2xl text-white whitespace-nowrap md:text-3xl">
            A brief story about dopamine
          </p>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        <div className="section-header">
          <h1 className="mb-6 heading-xl fade-up">
            <span className="text-primary">Dopamine</span>
            <span className="text-primary">.</span>
          </h1>
          <p className="mb-12 font-mono text-xl text-gray-200 fade-up-delay">
            Harnessing the power of neuroscience to revolutionize digital learning.
          </p>
        </div>

        <div className="mt-16 timeline">
          {timelineSteps.map((step, index) => (
            <div 
              key={index} 
              ref={el => timelineRefs.current[index] = el}
              className="timeline-item fade-in-slide"
              style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
            >
              <div className="timeline-icon">
                {step.icon}
              </div>
              <div className="timeline-content">
                <h3 className="mb-2 heading-sm">{step.title}</h3>
                <p className="text-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
