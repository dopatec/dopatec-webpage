import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFadeIn } from '../hooks/useFadeIn';

const INTEREST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd90WsNsKHNbxBCNe3speUkqxPhGenN4_DnE5Ik5hfy2TmAHg/viewform';

export function Contact() {
  const navigate = useNavigate();

  const handleInterestClick = () => {
    navigate('/contact');
  };

  return (
    <section className="overflow-hidden relative py-32 bg-black/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-5 tech-grid" />
        
        {/* Circuit lines */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${30 + i * 30}%`,
                animation: `slideRight ${10 + i}s linear infinite`,
                opacity: 0.1
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => {
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const size = 2 + Math.random() * 2;
            return (
              <div
                key={i}
                className="absolute bg-primary/20 rounded-full blur-[1px]"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animation: `floatParticle ${8 + Math.random() * 8}s ease-in-out infinite`
                }}
              />
            );
          })}
        </div>

        {/* Glowing corners */}
        <div className="absolute top-0 left-0 w-32 h-32 to-transparent opacity-40 bg-gradient-radial from-primary/20" />
        <div className="absolute right-0 bottom-0 w-32 h-32 to-transparent opacity-40 bg-gradient-radial from-primary/20" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
        {(() => {
          const [headerRef, headerVisible] = useFadeIn();
          return (
            <div
              ref={headerRef}
              className={`fade-in-section ${headerVisible ? 'is-visible' : ''}`}
            >
              <h2 className="mb-8 text-left heading-xl" data-text="Contact Us.">
                <span className="text-primary">Contact</span>
                {" "}
                <span className="text-white">Us</span>
                <span className="text-primary">.</span>
              </h2>
            </div>
          );
        })()}

        {/* Contact Form */}
        {(() => {
          const [formRef, formVisible] = useFadeIn();
          return (
            <div
              ref={formRef}
              className={`fade-in-section delay-1 ${formVisible ? 'is-visible' : ''}`}
            >
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block mb-2 font-mono text-sm text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full px-4 py-3 font-mono text-white bg-transparent border rounded-lg border-primary/50 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block mb-2 font-mono text-sm text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full px-4 py-3 font-mono text-white bg-transparent border rounded-lg border-primary/50 focus:border-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-mono text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 font-mono text-white bg-transparent border rounded-lg border-primary/50 focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-mono text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 font-mono text-white bg-transparent border rounded-lg border-primary/50 focus:border-primary focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
