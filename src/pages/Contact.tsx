import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const ContactPage = () => {
  // Initialize fade-in refs for different sections
  const [headerRef, headerVisible] = useFadeIn();
  const [contactInfoRef, contactInfoVisible] = useFadeIn();
  const [socialRef, socialVisible] = useFadeIn();
  const [formRef, formVisible] = useFadeIn();

  return (
    <div className="relative min-h-screen bg-black/95">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-5 tech-grid" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Contact Information */}
          <div>
            {/* Header Section */}
            <div
              ref={headerRef}
              className={`transition-all duration-1000 ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="mb-8 heading-xl glitch-text" data-text="Get in Touch.">
                <span className="text-primary">Get in</span>
                {" "}
                <span className="text-white">Touch</span>
                <span className="text-primary">.</span>
              </h1>
              <p className="mb-12 font-mono text-xl leading-relaxed text-gray-300">
                We would love to hear from you! Whether you're an investor interested in our
                innovative approach or a professional seeking cutting-edge learning solutions, don't hesitate to reach out.
              </p>
              <p className="mb-12 font-mono text-xl leading-relaxed text-gray-300">
                We are committed to transforming digital engagement into positive learning experiences.
                Let's collaborate to unlock human potential through technology and neuroscience.
              </p>
            </div>

            {/* Contact Details */}
            <div
              ref={contactInfoRef}
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                contactInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex gap-4 items-center">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:contact@dopatec.com" className="font-mono text-lg text-gray-300 hover:text-primary">
                  info@dopatec.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-6 h-6 text-primary" />
                <span className="font-mono text-lg text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-mono text-lg text-gray-300">Malmö, Sweden</span>
              </div>
            </div>

            {/* Social Links */}
            <div
              ref={socialRef}
              className={`flex gap-6 mt-12 transition-all duration-1000 delay-500 ${
                socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors hover:bg-primary/10">
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors hover:bg-primary/10">
                <Twitter className="w-6 h-6 text-primary" />
              </a> */}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            ref={formRef}
            className={`p-8 rounded-2xl backdrop-blur-sm bg-white/5 transition-all duration-1000 delay-200 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form className="mx-auto space-y-6 max-w-xl">
              <div className="w-full">
                <label htmlFor="name" className="block mb-2 font-mono text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="px-4 py-3 w-full font-mono text-gray-300 rounded-lg border border-gray-700 transition-colors bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 font-mono text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-3 w-full font-mono text-gray-300 rounded-lg border border-gray-700 transition-colors bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block mb-2 font-mono text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="px-4 py-3 w-full font-mono text-gray-300 rounded-lg border border-gray-700 transition-colors bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="inline-flex overflow-hidden relative gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light group"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                  Send Message
                </span>
                <ArrowRight className="relative z-10 w-5 h-5 transition-all duration-500 group-hover:translate-x-1" />
                <div className="absolute inset-0 transition-transform duration-500 transform origin-left scale-x-0 bg-white/10 group-hover:scale-x-100" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
