import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-dark shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-black tracking-wider">
                <span className="text-primary">INF</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Hem</Link>
            <Link to="/projects" className="nav-link">Projekt</Link>
            <Link to="/about" className="nav-link">Om Oss</Link>
            <Link to="/mission" className="nav-link">Mission</Link>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/impactneuro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@impactneuro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/impactneuro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="nav-link block px-3 py-2" onClick={() => setIsOpen(false)}>Hem</Link>
            <Link to="/projects" className="nav-link block px-3 py-2" onClick={() => setIsOpen(false)}>Projekt</Link>
            <Link to="/about" className="nav-link block px-3 py-2" onClick={() => setIsOpen(false)}>Om Oss</Link>
            <Link to="/mission" className="nav-link block px-3 py-2" onClick={() => setIsOpen(false)}>Mission</Link>
          </div>
        </div>
      )}
    </nav>
  );
}