import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Dopamine } from '../components/Dopamine';

const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function Home() {
  const handleInterestClick = () => {
    window.open(INTEREST_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="flex relative justify-start items-center min-h-screen">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 heading-xl">
            <span className="text-primary">Dopa</span>
            <span className="text-white">Tec</span>
            <span className="text-primary">.</span>
          </h1>
          <h1 className="mb-6 heading-xl">
            <span className="text-primary">Dopamine</span>
            {" "}
            <span className="text-white">Technologies</span>
            <span className="text-primary">.</span>
          </h1>
          <h2 className="mb-8 max-w-3xl text-2xl text-white md:text-3xl">
          We are a pioneering tech company transforming digital engagement into 
          empowered learning through neuroscience-driven solutions.
          </h2>
          <p className="mb-12 max-w-3xl font-mono text-xl text-gray-200">
          </p>
          <div className="text-left">
            <button
              onClick={handleInterestClick}
              className="font-mono text-black btn bg-primary hover:bg-primary-light"
            >
              Get to know us
            </button>
          </div>
        </div>
      </section>

      {/* Dopamine Section */}
      <Dopamine />

      {/* Projects Preview Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-12 heading-lg">Våra Projekt</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="p-8 transition-all duration-300 bg-dark hover:transform hover:scale-105">
                <h3 className="mb-4 heading-sm">{project.name}</h3>
                <p className="mb-6 font-mono text-body">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex justify-start items-center w-full font-bold btn bg-accent hover:bg-accent-light text-dark"
                >
                  Läs mer <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-8 heading-lg">Vår Mission</h2>
          <p className="mb-12 max-w-4xl font-mono text-xl text-gray-200">
            Vår mission är att skapa en framtid där varje individ med NPF får chansen att uppfylla 
            sin potential och uppleva meningsfull inkludering. Genom tidig diagnos, utbildning och 
            innovation vill vi förbättra livskvaliteten och möjliggöra för individer med NPF att blomstra.
          </p>
          <div className="text-left">
            <button
              onClick={handleInterestClick}
              className="font-mono text-black btn bg-primary hover:bg-primary-light"
            >
              Engagera dig
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}