import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { About } from './pages/About';
import { ContactPage } from './pages/Contact';
import { Auth } from './pages/Auth';
import { Admin } from './pages/Admin';
import ScrollToTop from './components/ScrollToTop';
import { CMSProvider } from './cms/CMSContext';
import { CMSEditor } from './cms/CMSEditor';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  // Toggle CMS editor with Ctrl + Shift + E
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        setIsCMSOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <AuthProvider>
      <CMSProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-dark">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </main>
            <Footer />
          </div>
          {process.env.NODE_ENV === 'development' && (
            <CMSEditor isOpen={isCMSOpen} onClose={() => setIsCMSOpen(false)} />
          )}
        </Router>
      </CMSProvider>
    </AuthProvider>
  );
}

export default App;
