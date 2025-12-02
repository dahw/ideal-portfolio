import {useEffect, useState} from 'react';

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-enable @typescript-eslint/no-unused-vars */

import Education from '../components/portfolio/Education';
import Experience from '../components/portfolio/Experience';
import Hero from '../components/portfolio/Hero';
import Leadership from '../components/portfolio/Leadership';
import Navigation from '../components/portfolio/Navigation';
import Projects from '../components/portfolio/Projects';
import Skills from '../components/portfolio/Skills';
import Summary from '../components/portfolio/Summary';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'summary',
        'experience',
        'projects',
        'skills',
        'education',
        'leadership'
      ];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1d29]">
      <style>{`
        :root {
          --primary-bg: #1a1d29;
          --secondary-bg: #252837;
          --accent-blue: #4a90e2;
          --accent-tan: #d4b896;
          --text-primary: #e8eaed;
          --text-secondary: #9ca3af;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-tan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent-blue), transparent);
          opacity: 0.3;
        }
      `}</style>

      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <div className="pt-20">
        <Hero scrollToSection={scrollToSection} />
        <Summary />
        <Experience />
        <div id="projects">
          <Projects scrollToSection={scrollToSection} />
        </div>
        <Skills />
        <Education />
        <Leadership />
      </div>

      <footer className="bg-[#0f1117] border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Dean Aldric Harrison Walston. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
