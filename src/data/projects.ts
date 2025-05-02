// Project Types
export type ProjectStatus = 'ongoing' | 'completed' | 'upcoming';

export type ProjectTechnology = {
  name: string;
  icon?: string;
  color?: string;
};

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: ProjectTechnology[];
  status: ProjectStatus;
  bulletPoints?: string[];
  emoji?: string;
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
  team?: {
    name: string;
    role: string;
    image?: string;
  }[];
  timeline?: {
    start: string;
    end?: string;
    milestones?: {
      date: string;
      title: string;
      description: string;
    }[];
  };
}

// Technology definitions
export const technologies = {
  react: {
    name: 'React',
    icon: 'react-icon.svg',
    color: '#61DAFB',
  },
  typescript: {
    name: 'TypeScript',
    icon: 'typescript-icon.svg',
    color: '#3178C6',
  },
  python: {
    name: 'Python',
    icon: 'python-icon.svg',
    color: '#3776AB',
  },
  neuroscience: {
    name: 'Neuroscience',
    icon: 'brain-icon.svg',
    color: '#FF6B6B',
  },
  ml: {
    name: 'Machine Learning',
    icon: 'ml-icon.svg',
    color: '#00A67D',
  },
} as const;

// Project data
export const projects: Project[] = [
  {
    id: 'dentaforce',
    title: 'Dentaforce',
    summary:
      'Revolutionizing dental education and practice management through neuroscience-backed technology.',
    description:
      'Dentaforce is our flagship project aimed at revolutionizing dental education and practice management through neuroscience-backed technology.',
    fullDescription: `Dentaforce combines cutting-edge neuroscience research with modern educational technology to create an immersive learning experience for dental professionals. The platform adapts to individual learning patterns and provides real-time feedback based on cognitive load and engagement levels.

    Our system uses advanced algorithms to track learning progress and automatically adjusts the difficulty and pace of content delivery, ensuring optimal knowledge retention and skill development.`,
    image: '/projects/dentaforce.jpg',
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.neuroscience,
      technologies.ml,
    ],
    status: 'ongoing',
    bulletPoints: [
      'Adaptive learning algorithms',
      'Real-time cognitive load monitoring',
      'Personalized learning paths',
      'Interactive 3D visualizations',
    ],
    emoji: '🎓',
    timeline: {
      start: '2023-09',
      milestones: [
        {
          date: '2023-12',
          title: 'Beta Launch',
          description: 'Initial release to select dental schools',
        },
        {
          date: '2024-03',
          title: 'AI Integration',
          description: 'Implementation of advanced learning algorithms',
        },
      ],
    },
  },
  {
    id: 'neurostep',
    title: 'Neurostep',
    summary:
      'An innovative educational platform making neuropsychiatric learning accessible to everyone.',
    description:
      'Neurostep is an innovative educational platform that makes learning about neuropsychiatric conditions engaging and accessible for everyone.',
    fullDescription: `Neurostep är en innovativ utbildningsplattform som gör lärandet kring neuropsykiatriska funktionsnedsättningar (NPF) engagerande och tillgängligt för alla. Inspirerad av uttryck som "step up your game", "step up your learning" och Neil Armstrongs ikoniska citat "That's one small step for man, one giant leap for mankind", är Neurostep designad för att hjälpa dig att ta nästa steg i din kunskapsresa.

    Plattformen erbjuder skräddarsydda kurser för olika målgrupper, inklusive anhöriga, vårdpersonal, arbetsgivare och skolpersonal, med målet att förbättra förståelsen och stödet för individer med NPF.`,
    image: '/projects/neurostep.jpg',
    technologies: [technologies.react, technologies.typescript, technologies.neuroscience],
    status: 'completed',
    bulletPoints: [
      'Skräddarsydda kurser',
      'Expertkunskap',
      'Interaktivt lärande',
      'Kontinuerlig uppdatering',
    ],
    emoji: '🧠',
  },
] as const;

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter(project => project.status === status);
}

export function getProjectsByTechnology(techName: string): Project[] {
  return projects.filter(project =>
    project.technologies.some(tech => tech.name.toLowerCase() === techName.toLowerCase())
  );
}
