import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Project() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="flex justify-center items-center pt-16 min-h-screen bg-dark">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-primary">Project was not found.</h1>
          <Link to="/projects" className="text-accent hover:text-accent-light">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-dark">
      <div className="px-4 py-12 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="p-8 rounded-lg shadow-xl bg-dark-lighter">
          <div className="mb-8">
            <h1 className="flex items-center mb-2 text-4xl font-bold text-primary">
              {project.emoji} {project.name}
            </h1>
          </div>

          <div className="mb-8 max-w-none prose prose-invert">
            <div className="space-y-4 text-gray-200">
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="font-mono">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold text-primary">Huvudfunktioner</h2>
            <ul className="space-y-2">
              {project.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-secondary">•</span>
                  <span className="font-mono text-gray-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center transition-colors text-accent hover:text-accent-light"
            >
              ← Back to projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}