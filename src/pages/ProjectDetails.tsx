import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Project } from '../data/projects';
import { fetchProjectById } from '../lib/projectService';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProject = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const data = await fetchProjectById(id);

        if (!data) {
          setError('Project not found');
          return;
        }

        setProject(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load project:', err);
        setError('Failed to load project. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadProject();
  }, [id]);

  // Visa laddningsindikator
  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <div className="inline-block w-8 h-8 border-t-2 border-primary rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-300">Loading project...</p>
          </div>
        </div>
      </div>
    );
  }

  // Visa felmeddelande
  if (error || !project) {
    return (
      <div className="pt-20 min-h-screen bg-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-12 text-center">
            <p className="text-red-400">{error || 'Project not found'}</p>
            <button
              onClick={() => navigate('/projects')}
              className="mt-4 px-4 py-2 text-white bg-primary/20 hover:bg-primary/30 rounded"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-dark">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-12">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center mb-8 text-primary hover:text-primary-light transition-colors duration-200"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </button>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-primary">{project.title}</h1>
              <p className="mb-6 text-xl text-gray-300">{project.summary}</p>

              <div className="mb-8">
                <h2 className="mb-3 text-2xl font-bold text-white">Description</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>

              {project.bulletPoints && project.bulletPoints.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-3 text-2xl font-bold text-white">Key Features</h2>
                  <ul className="space-y-2 list-disc list-inside text-gray-300">
                    {project.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h2 className="mb-3 text-2xl font-bold text-white">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-dark-lighter text-gray-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-auto"
                />
              </div>

              {project.timeline && (
                <div className="mt-8">
                  <h2 className="mb-4 text-2xl font-bold text-white">Timeline</h2>
                  <div className="relative pl-8 border-l border-gray-700">
                    {project.timeline.milestones?.map((milestone, index) => (
                      <div key={index} className="mb-8 relative">
                        <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary"></div>
                        <div className="mb-1 text-sm text-gray-400">{milestone.date}</div>
                        <h3 className="mb-2 text-xl font-bold text-white">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {project.fullDescription && (
            <div className="mt-12">
              <h2 className="mb-4 text-2xl font-bold text-white">Full Description</h2>
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
