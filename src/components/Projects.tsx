import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects() {
  // Get featured projects - both ongoing and completed projects
  const featuredProjects = projects.filter(p => 
    p.status === 'ongoing' || p.status === 'completed'
  ).slice(0, 3);

  return (
    <section className="relative py-20">
      {/* Background effects */}
      <div className="overflow-hidden absolute inset-0">
        {/* Gradient background */}
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">
            <span className="text-primary">Our</span>{" "}
            <span className="text-white">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our innovative projects that combine neuroscience with technology
            to create engaging and effective learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-primary">
                      {project.title}
                    </h3>
                    {project.emoji && <span>{project.emoji}</span>}
                  </div>
                  <p className="text-gray-300 line-clamp-3">
                    {project.summary}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary/70 capitalize px-3 py-1 rounded-full border border-primary/20">
                    {project.status}
                  </span>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
                  >
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary border border-primary/20 rounded-full hover:bg-primary/10 transition-colors duration-200"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
