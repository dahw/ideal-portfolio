import React from 'react';

import {Calendar, GraduationCap} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';

export default function Education() {
  const education = [
    {
      degree: 'AI-Powered Full Stack Software Engineering Bootcamp',
      institution: 'Code Differently',
      location: 'Wilmington, DE',
      period: 'Aug 2025 – Present',
      description:
      `Intensive 20-week full-stack software engineering program (50+ hours/week) focused on building technology solutions using Java, Spring Boot, Typescript, HTML, CSS, React, and AI tools.
      Gaining hands-on experience with Git, GitHub, and Visual Studio Code for version control, collaborative workflows, and project management, including branching, pull requests, and code reviews.
      Includes a 2-month externship and a capstone project that simulates real-world product development.`,

      current: true,
    },
    {
      degree: 'Bachelor of Arts in Data Science',
      institution: 'Fisk University',
      location: 'Nashville, TN',
      period: 'Graduated: May 2025',
      description: '',
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 px-6 bg-[#252837]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-[#1a1d29] border-gray-800 hover:border-[#4a90e2] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-[#4a90e2]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <GraduationCap className="w-6 h-6 text-[#4a90e2]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#e8eaed] mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-[#d4b896] font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {edu.current && (
                      <Badge className="bg-[#4a90e2]/20 text-[#4a90e2] border-[#4a90e2]/30">
                        Current
                      </Badge>
                    )}
                    <Badge className="bg-[#d4b896]/20 text-[#d4b896] border-[#d4b896]/30 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </Badge>
                  </div>
                </div>
                {edu.description && (
                  <p className="text-gray-300 leading-relaxed ml-0 md:ml-15">
                    {edu.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
