import React from 'react';
import type { Project } from './ProjectsList';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
        </div>

        <h1 className="text-4xl font-bold text-primary mb-4">{project.title}</h1>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary/70 capitalize px-3 py-1 rounded-full border border-primary/20">
            {project.status}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-gray-300 px-3 py-1 rounded-full bg-dark-lighter"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 text-lg mb-6">{project.summary}</p>
          <div className="text-gray-300">{project.description}</div>
        </div>
      </div>
    </div>
  );
}
