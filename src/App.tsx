import React, { useState, useEffect } from 'react';
import { Project } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { SignatureInteraction } from './components/SignatureInteraction';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  // Section observer to keep navigation active state in sync
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'education', 'services', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleInquireService = (serviceTitle?: string) => {
    setInquiryService(serviceTitle);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F3] text-[#121212] selection:bg-[#121212] selection:text-[#F5F5F3] antialiased font-sans">
      {/* Editorial Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* 01 // Hero */}
        <Hero 
          onExploreClick={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 02 // About */}
        <About />

        {/* 03 // Projects (Mini Case Studies) */}
        <Projects 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        {/* 04 // Experience (Interactive Career Journey) */}
        <Experience />

        {/* 05 // Skills & Technologies */}
        <Skills />

        {/* 06 // Education & Certifications */}
        <EducationCertifications />

        {/* 07 // Services */}
        <Services 
          onInquireClick={handleInquireService}
        />

        {/* 08 // Process */}
        <Process />

        {/* 09 // Contact */}
        <Contact 
          prefilledService={inquiryService}
        />
      </main>

      {/* Signature Interaction (Floating HUD Dock & Back to Top) */}
      <SignatureInteraction 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Project Deep-Dive Modal Drawer */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
