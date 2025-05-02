import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

// Create separate fade-in refs for different sections
export function Contact() {
  // Use hooks outside callbacks
  const [infoRef, infoVisible] = useFadeIn();
  const [formRef, formVisible] = useFadeIn();
  const [socialRef, socialVisible] = useFadeIn();

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div ref={infoRef} className={`fade-in-section ${infoVisible ? 'is-visible' : ''}`}>
            <h2 className="mb-8 heading-lg">Get in Touch</h2>
            <p className="mb-10 font-mono text-lg text-gray-300">
              Have questions about our technology or interested in a partnership? We'd love to hear
              from you.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <Mail className="w-6 h-6 text-primary" />
                <a
                  href="mailto:info@dopatec.com"
                  className="font-mono text-lg text-gray-300 hover:text-primary"
                >
                  info@dopatec.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-6 h-6 text-primary" />
                <span className="font-mono text-lg text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-4 items-center">
                <MapPin className="w-6 h-6 text-primary" />
                <span className="font-mono text-lg text-gray-300">
                  123 Neuroscience Way, San Francisco, CA 94107
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div
              ref={socialRef}
              className={`flex gap-6 mt-12 fade-in-section ${socialVisible ? 'is-visible' : ''}`}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors hover:bg-primary/10"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className={`fade-in-section ${formVisible ? 'is-visible' : ''}`}>
            <form className="p-8 rounded-xl bg-dark-light">
              <h3 className="mb-6 text-2xl font-bold text-white">Send us a message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-mono text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-4 py-3 w-full font-mono text-gray-300 rounded-lg border border-gray-700 transition-colors bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-mono text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-4 py-3 w-full font-mono text-gray-300 rounded-lg border border-gray-700 transition-colors bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-mono text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="px-4 py-3 w-full font-mono text-gray-300 rounded-lg border border-gray-700 transition-colors bg-black/50 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex gap-2 items-center px-8 py-3 font-mono text-black btn bg-primary hover:bg-primary-light"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
