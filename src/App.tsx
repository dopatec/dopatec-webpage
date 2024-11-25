import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Project } from './pages/Project';
import { About } from './pages/About';
import { Mission } from './pages/Mission';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;