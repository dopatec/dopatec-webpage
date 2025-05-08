export function About() {
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

        {/* Dopamine particles */}
        <div className="absolute inset-0 dopamine-particles">
          {[...Array(20)].map((_, i) => {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 4;
            const duration = 3 + Math.random() * 3;

            return (
              <div
                key={i}
                className={`particle particle-${i + 1}`}
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="pt-20 mb-16 text-center">
          <h1 className="mb-8 text-center heading-xl">
            <span className="text-primary">About</span> <span className="text-white">DopaTec</span>
          </h1>
          <p className="mx-auto mb-12 max-w-4xl font-mono text-xl text-center text-gray-200">
            Dopatec is headquartered in Malmö, Sweden, and is dedicated to transforming the future
            of learning by merging neuroscience with technology.
          </p>
        </div>
      </div>
    </div>
  );
}
