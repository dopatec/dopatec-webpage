import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'ongoing' | 'completed' | 'upcoming';
}

interface ProjectsListProps {
  projects: Project[];
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
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
              <h3 className="text-xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 line-clamp-3">
                {project.summary}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-primary/70 capitalize">
                {project.status}
              </span>
              <button
                onClick={() => navigate(`/projects/${project.id}`)}
                className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-200"
              >
                Read more
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
