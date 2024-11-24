import React, { useEffect, useRef } from 'react';
import { Brain, Zap, Target } from 'lucide-react';

export function Dopamine() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
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
    <section ref={sectionRef} className="py-20 bg-dark dopamine-section">
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
              <div className="timeline-content">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 icon-wrapper">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl text-primary">
                      {step.title}
                    </h3>
                    <p className="font-mono text-base leading-relaxed text-gray-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
