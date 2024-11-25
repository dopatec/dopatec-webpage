import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Project } from './pages/Project';
import { About } from './pages/About';
import { Mission } from './pages/Mission';
import ContactPage from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import { CMSProvider } from './cms/CMSContext';
import { CMSEditor } from './cms/CMSEditor';

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
    <CMSProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <CMSEditor isOpen={isCMSOpen} onClose={() => setIsCMSOpen(false)} />
        )}
      </Router>
    </CMSProvider>
  );
}

export default App;