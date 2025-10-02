import React from 'react';

import {ChevronDown, Github, Linkedin, Mail, Phone} from 'lucide-react';

import {Button} from '@/components/ui/button';

export default function Hero({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#e8eaed] mb-4 tracking-tight">
            Dean Aldric Harrison
            <span className="block gradient-text mt-2">Walston</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#d4b896] font-light">
            Software Engineer & Data Scientist
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <a
            href="mailto:Dwalston252@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-[#4a90e2] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">Dwalston252@gmail.com</span>
          </a>
          <a
            href="tel:404-625-7717"
            className="flex items-center gap-2 text-gray-400 hover:text-[#4a90e2] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">404-625-7717</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dean-walston"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#4a90e2] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/deanwalston"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-[#4a90e2] transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>

        <Button
          onClick={() => scrollToSection('summary')}
          className="bg-[#4a90e2] hover:bg-[#3a7bc8] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore My Work
        </Button>
      </div>

      <button
        onClick={() => scrollToSection('summary')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-[#d4b896] animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
