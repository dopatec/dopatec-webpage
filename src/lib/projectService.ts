import { supabase } from './supabase';
import { Project } from '../data/projects';

// Hämta alla projekt från databasen
export async function fetchProjects(): Promise<Project[]> {
  try {
    // Hämta projekt
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (projectsError) {
      console.error('Error fetching projects:', projectsError);
      return [];
    }

    // För varje projekt, hämta teknologier och milstolpar
    const projectsWithDetails = await Promise.all(
      projects.map(async project => {
        // Hämta teknologier för projektet
        const { data: technologies, error: techError } = await supabase
          .from('project_technologies')
          .select('technologies(*)')
          .eq('project_id', project.id);

        if (techError) {
          console.error(`Error fetching technologies for project ${project.id}:`, techError);
        }

        // Hämta milstolpar för projektet
        const { data: milestones, error: milestonesError } = await supabase
          .from('project_milestones')
          .select('*')
          .eq('project_id', project.id)
          .order('date', { ascending: true });

        if (milestonesError) {
          console.error(`Error fetching milestones for project ${project.id}:`, milestonesError);
        }

        // Hämta punktlistor för projektet
        const { data: bulletPoints, error: bulletPointsError } = await supabase
          .from('project_bullet_points')
          .select('content')
          .eq('project_id', project.id)
          .order('display_order', { ascending: true });

        if (bulletPointsError) {
          console.error(
            `Error fetching bullet points for project ${project.id}:`,
            bulletPointsError
          );
        }

        // Formatera projektet med alla detaljer
        return {
          ...project,
          technologies: technologies
            ? technologies.map(
                (tech: { technologies?: { name?: string; icon?: string; color?: string }[] }) => ({
                  name:
                    tech.technologies && tech.technologies[0]?.name
                      ? tech.technologies[0].name
                      : 'Unknown Technology',
                  icon: tech.technologies && tech.technologies[0]?.icon,
                  color: tech.technologies && tech.technologies[0]?.color,
                })
              )
            : [],
          timeline: milestones?.length
            ? {
                start: project.start_date || '',
                end: project.end_date || undefined,
                milestones: milestones.map(milestone => ({
                  date: milestone.date,
                  title: milestone.title,
                  description: milestone.description,
                })),
              }
            : undefined,
          bulletPoints: bulletPoints ? bulletPoints.map(bp => bp.content) : undefined,
        } as Project;
      })
    );

    return projectsWithDetails;
  } catch (error) {
    console.error('Unexpected error fetching projects:', error);
    return [];
  }
}

// Hämta ett projekt med ID
export async function fetchProjectById(id: string): Promise<Project | null> {
  try {
    // Hämta projektet
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (projectError) {
      console.error(`Error fetching project with id ${id}:`, projectError);
      return null;
    }

    // Hämta teknologier för projektet
    const { data: technologies, error: techError } = await supabase
      .from('project_technologies')
      .select('technologies(*)')
      .eq('project_id', id);

    if (techError) {
      console.error(`Error fetching technologies for project ${id}:`, techError);
    }

    // Hämta milstolpar för projektet
    const { data: milestones, error: milestonesError } = await supabase
      .from('project_milestones')
      .select('*')
      .eq('project_id', id)
      .order('date', { ascending: true });

    if (milestonesError) {
      console.error(`Error fetching milestones for project ${id}:`, milestonesError);
    }

    // Hämta punktlistor för projektet
    const { data: bulletPoints, error: bulletPointsError } = await supabase
      .from('project_bullet_points')
      .select('content')
      .eq('project_id', id)
      .order('display_order', { ascending: true });

    if (bulletPointsError) {
      console.error(`Error fetching bullet points for project ${id}:`, bulletPointsError);
    }

    // Formatera projektet med alla detaljer
    return {
      ...project,
      technologies: technologies
        ? technologies.map(
            (tech: { technologies?: { name?: string; icon?: string; color?: string }[] }) => ({
              name:
                tech.technologies && tech.technologies[0]?.name
                  ? tech.technologies[0].name
                  : 'Unknown Technology',
              icon: tech.technologies && tech.technologies[0]?.icon,
              color: tech.technologies && tech.technologies[0]?.color,
            })
          )
        : [],
      timeline: milestones?.length
        ? {
            start: project.start_date || '',
            end: project.end_date || undefined,
            milestones: milestones.map(milestone => ({
              date: milestone.date,
              title: milestone.title,
              description: milestone.description,
            })),
          }
        : undefined,
      bulletPoints: bulletPoints ? bulletPoints.map(bp => bp.content) : undefined,
    } as Project;
  } catch (error) {
    console.error(`Unexpected error fetching project with id ${id}:`, error);
    return null;
  }
}
