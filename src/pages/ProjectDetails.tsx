import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectById } from '../data/projects';

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = getProjectById(projectId || '');

  if (!project) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-6 py-3 text-primary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-dark">
      {/* Hero-style background */}
      <div className="fixed inset-0 z-0">
        {/* Neural network background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.95)_100%)]" />
        
        {/* Digital circuit patterns */}
        <div className="absolute inset-0 opacity-10 circuit-pattern" />
        
        {/* Neural connections */}
        <div className="absolute inset-0 neural-connections">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`neuron-path neuron-path-${i + 1}`}>
              <div className="signal-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pt-20">
          {/* Back button */}
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-4 py-2 text-primary hover:text-primary-light transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>

          {/* Project header */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-white">
                  {project.title}
                </h1>
                {project.emoji && (
                  <span className="text-3xl">{project.emoji}</span>
                )}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-primary/70 capitalize px-3 py-1 rounded-full border border-primary/20">
                  {project.status}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-300 px-3 py-1 rounded-full bg-dark-lighter/50 backdrop-blur-sm"
                      style={{ color: tech.color }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Main content */}
              <div className="prose prose-invert max-w-none">
                <div className="text-xl text-gray-300 mb-8">
                  {project.summary}
                </div>
                <div className="text-gray-300 whitespace-pre-wrap">
                  {project.fullDescription || project.description}
                </div>
              </div>

              {/* Timeline if available */}
              {project.timeline && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-primary mb-6">Timeline</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-primary">Started:</span>
                      <span className="text-gray-300">{project.timeline.start}</span>
                    </div>
                    {project.timeline.milestones?.map((milestone, index) => (
                      <div key={index} className="pl-6 border-l border-primary/20">
                        <div className="text-primary mb-2">{milestone.date}</div>
                        <div className="font-bold text-gray-200 mb-1">
                          {milestone.title}
                        </div>
                        <div className="text-gray-300">
                          {milestone.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Key features */}
              {project.bulletPoints && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {project.bulletPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-primary mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Team members if available */}
              {project.team && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Team
                  </h2>
                  <div className="space-y-4">
                    {project.team.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg bg-dark-lighter/50 backdrop-blur-sm"
                      >
                        {member.image && (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <div className="font-bold text-gray-200">
                            {member.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {member.role}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
