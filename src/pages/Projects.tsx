import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="heading-xl mb-6">Våra Projekt</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-mono">
            Genom innovation och teknologi skapar vi lösningar som förbättrar vardagen för individer med NPF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-dark-lighter rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                  <span className="mr-2">{project.emoji}</span>
                  {project.name}
                </h2>
                <p className="text-gray-200 mb-6 font-mono">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block w-full bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Läs mer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}