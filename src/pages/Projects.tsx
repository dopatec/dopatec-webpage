import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';
import { fetchProjects } from '../lib/projectService';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Load projects from database
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setIsLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <div className="inline-block w-8 h-8 border-t-2 border-primary rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-300">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen bg-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <p className="text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 text-white bg-primary/20 hover:bg-primary/30 rounded"
            >
              Try Again
            </button>
          </div>
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
        <div className="pt-20 mb-16 text-center">
          <h1 className="mb-8 text-center heading-xl">
            <span className="text-primary">Our</span> <span className="text-white">Projects</span>
          </h1>
          <p className="mx-auto mb-12 max-w-4xl font-mono text-xl text-center text-gray-200">
            Explore our innovative projects that combine neuroscience with technology to create
            engaging and effective learning experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30 cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
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
                    <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                    {project.emoji && <span>{project.emoji}</span>}
                  </div>
                  <p className="text-gray-300 line-clamp-3">{project.summary}</p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="text-sm text-primary/70 capitalize px-3 py-1 rounded-full border border-primary/20">
                    {project.status}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs text-gray-300 px-2 py-1 rounded-full bg-dark-lighter/50"
                        style={{ color: tech.color }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-6 right-6">
                  <span className="inline-flex items-center text-primary group-hover:text-primary-light transition-colors duration-200">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
