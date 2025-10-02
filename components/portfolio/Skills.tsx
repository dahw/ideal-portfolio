import React from 'react';

import {Brain, Code, Database, Wrench} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Web Development',
      icon: Code,
      skills: [
        'Python',
        'JavaScript',
        'C#',
        'HTML',
        'CSS',
        'Java',
        'TypeScript',
        'React',
        'Spring Boot',
      ],
    },
    {
      title: 'Data Analytics & Visualization',
      icon: Database,
      skills: [
        'Python (Pandas, NumPy, Matplotlib)',
        'Power BI',
        'SQL',
        'Jupyter Notebooks',
      ],
    },
    {
      title: 'Data Science & Machine Learning',
      icon: Brain,
      skills: [
        'Data Cleaning',
        'Data Analysis',
        'Predictive Modeling',
        'Machine Learning Algorithms',
        'AWS Services',
      ],
    },
    {
      title: 'Software & Tools',
      icon: Wrench,
      skills: [
        'Git',
        'Microsoft Office Suite',
        'AWS (S3, Lambda)',
        'Raspberry Pi',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#1a1d29]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="bg-[#252837] border-gray-800 hover:border-[#4a90e2] transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#4a90e2]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#4a90e2]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#e8eaed]">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className="bg-[#1a1d29] text-[#d4b896] border-[#d4b896]/30 hover:bg-[#d4b896]/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
