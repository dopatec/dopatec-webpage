import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';
import { Brain, GraduationCap, Gauge, Users, Share2, Heart, BarChart, Sparkles, ArrowRight, 
         Code, Cpu, Database, Shield, Phone, Laptop, Monitor } from 'lucide-react';
import dentaforceLogo from '../assets/dentaforce-logo.png';
import dentaforceMockup from '../assets/dentaforce-mockup.png';
import dentaforceDashboard from '../assets/dentaforce-dashboard.png';

export function Projects() {
  const navigate = useNavigate();

  // Initialize fade-in refs for different sections
  const [headerRef, headerVisible] = useFadeIn();
  const [heroRef, heroVisible] = useFadeIn();
  const [featuresRef, featuresVisible] = useFadeIn();
  const [mockupsRef, mockupsVisible] = useFadeIn();
  const [techRef, techVisible] = useFadeIn();
  const [platformsRef, platformsVisible] = useFadeIn();

    // all the comprehensive features items of the project
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Extensive range of courses covering dental science, practice, and management techniques."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Gamified modules that make learning engaging and effective through dopamine-driven motivation."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Adaptive Content",
      description: "Personalized learning paths based on individual progress and performance."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Practice Metrics",
      description: "Measures 67 key metrics to maximize customer journey and optimize profitability."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff Excellence",
      description: "Keep staff updated with latest customer service management techniques."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Optimization",
      description: "Tools and strategies for enhanced online presence and patient engagement."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient Satisfaction",
      description: "Continuous monitoring of patient feedback to maintain high satisfaction levels."
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Real-time tracking of operational efficiency and financial performance metrics."
    }
  ];

   // all the tech specs items of the project
  const techSpecs = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Stack",
      description: "Built with React, Node.js, and TypeScript for robust performance"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered",
      description: "Advanced machine learning algorithms for personalized learning"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable",
      description: "Cloud-native architecture supporting millions of users"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure",
      description: "HIPAA compliant with end-to-end encryption"
    }
  ];
  // all the platforms items of the project
  const platforms = [
    {
      icon: <Phone className="w-12 h-12" />,
      name: "Mobile App",
      users: "50K+"
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      name: "Web Platform",
      users: "100K+"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      name: "Admin Dashboard",
      users: "10K+"
    }
  ];

  return (
    <div className="min-h-screen bg-black/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 tech-grid" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Projects Header */}
        <div 
          ref={headerRef}
          className={`px-4 pt-32 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-left">
            <h1 className="mb-8 heading-xl">
              <span className="text-primary">Our </span>
              <span className="text-white">Projects</span>
            </h1>
            <p className="mb-12 max-w-3xl font-mono text-xl leading-relaxed text-gray-300">
              Our Projects Showcase:
            </p>
          </div>
        </div>

        {/* Dentaforce Hero Section */}
        <div 
          ref={heroRef}
          className={`px-4 pt-32 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-12">
              <img src={dentaforceLogo} alt="Dentaforce Logo" className="mb-8 w-64" />
              <h1 className="mb-8 heading-xl">
                <span className="text-primary">Denta</span>
                <span className="text-white">force</span>
              </h1>
              <p className="mb-8 max-w-xl font-mono text-xl leading-relaxed text-gray-300">
                Revolutionizing dental education and practice management through neuroscience-backed technology.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light group"
                >
                  <span>Book Demo</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => navigate('/projects')}
                  className="inline-flex gap-2 items-center px-8 py-3 font-mono text-white border btn border-primary hover:bg-primary/10"
                >
                  View All Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <img src={dentaforceMockup} alt="Dentaforce App" className="relative z-10 rounded-xl shadow-2xl" />
              <div className="absolute inset-0 blur-3xl bg-primary/20" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className={`px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-1000 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="mb-16 text-3xl font-bold text-center">
            <span className="text-primary">Comprehensive</span>
            {" "}
            <span className="text-white">Features</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 rounded-2xl backdrop-blur-sm bg-black/30 group"
              >
                <div className="relative z-10">
                  <div className="p-3 mb-6 w-16 h-16 rounded-2xl text-primary bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary">{feature.title}</h3>
                  <p className="font-mono text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-primary/5" />
              </div>
            ))}
          </div>
        </div>

        {/* App Mockups Section */}
        <div 
          ref={mockupsRef}
          className={`px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 transition-all duration-1000 ${
            mockupsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="mb-16 text-3xl font-bold text-center">
            <span className="text-primary">App</span>
            {" "}
            <span className="text-white">Interface</span>
          </h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative group">
              <div className="overflow-hidden relative rounded-2xl backdrop-blur-sm bg-black/30">
                <img
                  src={dentaforceMockup}
                  alt="Dentaforce App Interface"
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/60">
                  <span className="px-6 py-3 font-mono text-lg text-white rounded-md border border-primary">Mobile Interface</span>
                </div>
              </div>
              <div className="absolute inset-0 blur-3xl bg-primary/10 -z-10" />
            </div>
            <div className="relative group">
              <div className="overflow-hidden relative rounded-2xl backdrop-blur-sm bg-black/30">
                <img
                  src={dentaforceDashboard}
                  alt="Dentaforce Dashboard"
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/60">
                  <span className="px-6 py-3 font-mono text-lg text-white rounded-md border border-primary">Dashboard View</span>
                </div>
              </div>
              <div className="absolute inset-0 blur-3xl bg-primary/10 -z-10" />
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="px-4 py-24 bg-gradient-to-b from-transparent to-black/30">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                <span className="text-primary">Powerful</span>
                {" "}
                <span className="text-white">Dashboard</span>
              </h2>
              <p className="mx-auto max-w-2xl font-mono text-gray-300">
                Comprehensive analytics and practice management tools at your fingertips
              </p>
            </div>
            <div className="relative">
              <img src={dentaforceDashboard} alt="Dentaforce Dashboard" className="rounded-xl shadow-2xl" />
              <div className="absolute inset-0 blur-3xl bg-primary/10" />
            </div>
          </div>
        </div>

        {/* Tech Specs */}
        <div 
          ref={techRef}
          className={`px-4 py-24 bg-black/30 transition-all duration-1000 ${
            techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-16 text-3xl font-bold text-center">
              <span className="text-primary">Technical</span>
              {" "}
              <span className="text-white">Specifications</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-4">
              {techSpecs.map((spec, index) => (
                <div key={index} className="p-6 text-center rounded-xl bg-black/30">
                  <div className="p-3 mx-auto mb-4 w-12 h-12 rounded-xl text-primary bg-primary/10">
                    {spec.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-primary">{spec.title}</h3>
                  <p className="font-mono text-sm text-gray-300">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div 
          ref={platformsRef}
          className={`px-4 py-24 bg-gradient-to-b to-transparent from-black/30 transition-all duration-1000 ${
            platformsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {platforms.map((platform, index) => (
                <div key={index} className="p-8 text-center rounded-xl bg-black/30">
                  <div className="p-4 mx-auto mb-4 w-20 h-20 rounded-full text-primary bg-primary/10">
                    {platform.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{platform.name}</h3>
                  <p className="text-2xl font-bold text-primary">{platform.users}</p>
                  <p className="font-mono text-sm text-gray-300">Active Users</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="px-4 py-24 bg-gradient-to-b from-transparent to-black/50">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-5xl font-bold text-primary">67+</div>
                <div className="font-mono text-gray-300">Key Metrics Tracked</div>
              </div>
              <div className="text-center">
                <div className="mb-4 text-5xl font-bold text-primary">100%</div>
                <div className="font-mono text-gray-300">Staff Training Coverage</div>
              </div>
              <div className="text-center">
                <div className="mb-4 text-5xl font-bold text-primary">24/7</div>
                <div className="font-mono text-gray-300">Performance Monitoring</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 py-24 text-center bg-black/50">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center heading-lg">
              <span className="text-primary">Ready to</span>
              {" "}
              <span className="text-white">Transform Your Practice?</span>
            </h2>
            <p className="mx-auto mb-12 font-mono text-xl text-center text-gray-300">
              Join the future of dental education and practice management.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="inline-flex gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light group"
            >
              <span>Book Demo</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}