import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, LogOut } from 'lucide-react';
import Logo from '../assets/Dopatec-Logo-Navbar.png';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, profile, isAdmin, signOut } = useAuth();

  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <nav className="fixed z-50 w-full shadow-lg bg-dark">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Dopatec Logo" className="h-8" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>

            {/* Auth Links */}
            {user ? (
              <div className="flex items-center space-x-4">
                {isAdmin && (
                  <Link to="/admin" className="nav-link">
                    Admin
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-300">{profile?.full_name || user.email}</span>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center px-3 py-1 text-sm rounded-md text-white bg-primary/20 hover:bg-primary/30"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Sign Out
                  </button>
                </div>
              </div>
            ) : null}

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/impactneuro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-accent"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@impactneuro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-accent"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/impactneuro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-accent"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            <Link to="/" className="block px-3 py-2 nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link to="/about" className="block px-3 py-2 nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* Auth Links (Mobile) */}
            {user ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="block px-3 py-2 nav-link"
                    onClick={() => setIsOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 nav-link"
                >
                  Sign Out
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}
