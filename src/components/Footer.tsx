import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Mission', href: '/mission' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/dopatec',
        icon: <Linkedin className="w-5 h-5" />,
      },
      {
        name: 'GitHub',
        href: 'https://github.com/dopatec',
        icon: <Github className="w-5 h-5" />,
      },
      {
        name: 'Email',
        href: 'mailto:info@dopatec.com',
        icon: <Mail className="w-5 h-5" />,
      },
    ],
  };

  return (
    <footer className="relative z-10 bg-dark-lighter/30 backdrop-blur-sm border-t border-primary/10">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center mb-8"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-gray-300 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="flex justify-center space-x-6 mb-8">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-primary transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col items-center">
          <img
            className="h-12 w-auto mb-4"
            src="/logo.svg"
            alt="DopaTec Logo"
          />
          <p className="text-base text-gray-400">
            &copy; {currentYear} DopaTec. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Malmö, Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}
