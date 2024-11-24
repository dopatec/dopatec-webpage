import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function Home() {
  const handleInterestClick = () => {
    window.open(INTEREST_FORM_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl mb-6">
            Välkommen till{" "}
            <span className="text-primary">Impact Neuro Foundation</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-8">
            En stiftelse för förändring och stöd till individer med neuropsykiatriska funktionsnedsättningar (NPF).
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto font-mono">
            Vår stiftelse strävar efter att bli ljuset i slutet av tunneln för individer och familjer som lever med NPF. 
            Oavsett om du är eldsjäl, vårdpersonal, psykolog, politiker eller anhörig, är du en del av en större vision: 
            ett samhälle där individer med NPF blomstrar och bidrar med sina unika styrkor.
          </p>
          <button
            onClick={handleInterestClick}
            className="btn bg-primary hover:bg-primary-light text-white font-mono font-bold"
          >
            Bli en del av förändringen
          </button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Vår Vision</h2>
          <p className="text-xl text-gray-200 text-center max-w-4xl mx-auto mb-12 font-mono">
            Vi tror på en ljus framtid där varje individ har en plats och ett värde i samhället, 
            och där förståelse och acceptans blir hörnstenar för gemenskap och utveckling. 
            Vi arbetar för en värld där neuropsykiatriska funktionsnedsättningar ses som 
            katalysatorer för kreativitet och utveckling.
          </p>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading-lg text-center mb-12">Våra Projekt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-dark p-8 rounded-lg shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="heading-sm mb-4">{project.name}</h3>
                <p className="text-body mb-6 font-mono">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="btn bg-accent hover:bg-accent-light text-dark font-bold w-full inline-flex items-center justify-center"
                >
                  Läs mer <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg mb-8">Vår Mission</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-4xl mx-auto font-mono">
            Vår mission är att skapa en framtid där varje individ med NPF får chansen att uppfylla 
            sin potential och uppleva meningsfull inkludering. Genom tidig diagnos, utbildning och 
            innovation vill vi förbättra livskvaliteten och möjliggöra för individer med NPF att blomstra.
          </p>
          <button
            onClick={handleInterestClick}
            className="btn bg-primary hover:bg-primary-light text-white font-mono font-bold"
          >
            Engagera dig
          </button>
        </div>
      </section>
    </div>
  );
}