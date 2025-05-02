import { Smartphone, Brain, GraduationCap } from 'lucide-react';

export function Solution() {
  const timelineSteps = [
    {
      title: 'Research',
      description: 'Groundbreaking research in dopamine monitoring technologies',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: 'Development',
      description: 'Creating innovative biosensor solutions',
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: 'Application',
      description: 'Transforming healthcare and research with real-time dopamine monitoring',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="heading-lg">
            <span className="text-primary">Our</span> Solution
          </h2>
          <p className="mt-4 font-mono text-lg text-gray-300">
            Revolutionizing dopamine monitoring with cutting-edge technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Solution Card 1 */}
          <div className="p-6 transition-transform duration-300 rounded-xl bg-dark-light hover:scale-105">
            <div className="mb-4 w-12 h-12 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
              {timelineSteps[0].icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{timelineSteps[0].title}</h3>
            <p className="font-mono text-gray-300">{timelineSteps[0].description}</p>
          </div>

          {/* Solution Card 2 */}
          <div className="p-6 transition-transform duration-300 rounded-xl bg-dark-light hover:scale-105">
            <div className="mb-4 w-12 h-12 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
              {timelineSteps[1].icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{timelineSteps[1].title}</h3>
            <p className="font-mono text-gray-300">{timelineSteps[1].description}</p>
          </div>

          {/* Solution Card 3 */}
          <div className="p-6 transition-transform duration-300 rounded-xl bg-dark-light hover:scale-105">
            <div className="mb-4 w-12 h-12 text-primary bg-primary/10 rounded-lg flex items-center justify-center">
              {timelineSteps[2].icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-white">{timelineSteps[2].title}</h3>
            <p className="font-mono text-gray-300">{timelineSteps[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
