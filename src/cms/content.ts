interface PageContent {
  title: string;
  description?: string;
  sections: Record<string, any>;
}

interface CMSContent {
  home: PageContent;
  about: PageContent;
  projects: PageContent;
  contact: PageContent;
}

export const content: CMSContent = {
  home: {
    title: "Welcome to Dopatec",
    description: "Revolutionizing digital engagement through neuroscience",
    sections: {
      hero: {
        title: "Transforming Digital",
        highlight: "Engagement",
        subtitle: "Through the Power of Neuroscience",
        description: "We leverage cutting-edge neuroscience to create more engaging and effective digital experiences."
      },
      mission: {
        title: "Our Mission",
        description: "To revolutionize digital engagement by applying neuroscience principles to technology."
      }
    }
  },
  about: {
    title: "About Us",
    description: "Learn about our journey and mission",
    sections: {
      story: {
        title: "Our Story",
        description: "Founded on the principle of merging neuroscience with technology."
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Innovation",
            description: "Pushing boundaries in neuroscience and technology"
          },
          {
            title: "Impact",
            description: "Creating meaningful change in digital engagement"
          }
        ]
      }
    }
  },
  projects: {
    title: "Our Projects",
    description: "Discover our innovative solutions",
    sections: {
      dentaforce: {
        title: "Dentaforce",
        subtitle: "Revolutionizing dental education",
        description: "Revolutionizing dental education and practice management through neuroscience-backed technology.",
        features: [
          {
            title: "Comprehensive Curriculum",
            description: "Extensive range of courses covering dental science, practice, and management techniques."
          },
          {
            title: "Interactive Learning",
            description: "Gamified modules that make learning engaging and effective through dopamine-driven motivation."
          }
        ]
      }
    }
  },
  contact: {
    title: "Get in Touch",
    description: "We'd love to hear from you",
    sections: {
      hero: {
        title: "Get in Touch",
        description: "We would love to hear from you! Whether you're an investor interested in our innovative approach or a professional seeking cutting-edge learning solutions, don't hesitate to reach out.",
        subDescription: "We are committed to transforming digital engagement into positive learning experiences. Let's collaborate to unlock human potential through technology and neuroscience."
      },
      contact: {
        email: "info@dopatec.com",
        phone: "+1 (555) 123-4567",
        location: "Malmö, Sweden"
      },
      form: {
        title: "Send us a message",
        fields: {
          name: "Name",
          email: "Email",
          message: "Message"
        },
        button: "Send Message"
      }
    }
  }
};
