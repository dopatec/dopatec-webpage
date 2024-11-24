import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Project() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Projekt hittades inte</h1>
          <Link to="/projects" className="text-accent hover:text-accent-light">
            Tillbaka till alla projekt
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-dark-lighter rounded-lg shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2 flex items-center">
              {project.emoji} {project.name}
            </h1>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <div className="text-gray-200 space-y-4">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="font-mono">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Huvudfunktioner</h2>
            <ul className="space-y-2">
              {project.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-200 font-mono">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
            >
              ← Tillbaka till alla projekt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}