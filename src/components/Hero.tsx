import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

// Constant for interest form URL (if needed later)
const INTEREST_FORM_URL = 'https://forms.example.com/interest';

export function Hero() {
  // Use hooks outside callbacks
  const [heroRef, heroVisible] = useFadeIn();
  const [descriptionRef, descriptionVisible] = useFadeIn();
  const [ctaRef, ctaVisible] = useFadeIn();

  return (
    <section className="overflow-hidden relative pt-28 pb-20 min-h-screen bg-dark">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 tech-grid" />

        {/* Neural network animation */}
        <div className="neuron-container">
          <div className="neuron neuron-1">
            <div className="neuron-pulse" />
          </div>
          <div className="neuron neuron-2">
            <div className="neuron-pulse" />
          </div>
          <div className="neuron neuron-3">
            <div className="neuron-pulse" />
          </div>
          <div className="neuron-connection connection-1" />
          <div className="neuron-connection connection-2" />
        </div>

        {/* Synapses */}
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
        {/* Hero section with fade-in effect */}
        <div ref={heroRef} className={`fade-in-section ${heroVisible ? 'is-visible' : ''}`}>
          <div className="flex flex-col gap-4">
            <h1 className="heading-xl parallax glitch-text" data-speed="0.1" data-text="DopaTec.">
              <span className="text-primary">Dopa</span>
              <span className="text-white">Tec</span>
              <span className="text-primary">.</span>
            </h1>
            <h1 className="heading-xl parallax" data-speed="0.15" data-text="Dopamine Technologies">
              <span className="text-white">Dopamine Technologies</span>
            </h1>
          </div>
        </div>

        {/* Description with fade-in effect */}
        <div
          ref={descriptionRef}
          className={`mt-8 max-w-3xl fade-in-section ${descriptionVisible ? 'is-visible' : ''}`}
        >
          <p className="font-mono text-xl leading-relaxed text-gray-300">
            We revolutionize digital interaction by applying neuroscience principles to technology.
            Our solutions engage users' brains on deeper levels.
          </p>
        </div>

        {/* CTA buttons with fade-in effect */}
        <div
          ref={ctaRef}
          className={`flex flex-wrap gap-6 mt-12 fade-in-section ${ctaVisible ? 'is-visible' : ''}`}
        >
          <button className="inline-flex overflow-hidden relative gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light group">
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              Explore our solutions
            </span>
            <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover:translate-x-1" />
            <div className="absolute inset-0 transition-transform duration-500 transform origin-left scale-x-0 bg-white/10 group-hover:scale-x-100" />
          </button>

          <button className="inline-flex gap-2 items-center px-8 py-3 font-mono text-white border transition-colors border-white/20 hover:border-primary hover:text-primary">
            Learn more about us
          </button>
        </div>
      </div>
    </section>
  );
}
