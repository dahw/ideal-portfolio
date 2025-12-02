import React from 'react';

import {Award} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';

export default function Summary() {
  const certifications = [
    {name: 'Responsive Web Design', org: 'freeCodeCamp', date: 'Aug 2025'},
    {
      name: 'Competency in AI Prompting Essentials',
      org: 'TestOut Corporation',
      date: 'Sep 2025'
    },
    {name: 'Certified ScrumMaster', org: 'Scrum Alliance', date: 'Sep 2025'}
  ];

  return (
    <section id="summary" className="py-24 px-6 bg-[#252837]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mb-12 text-center">
          Professional <span className="gradient-text">Summary</span>
        </h2>

        <Card className="bg-[#1a1d29] border-gray-800 mb-12">
          <div className="p-8 md:p-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              Software engineer and data-driven problem solver with experience in analytics, automation,
              and full-stack development across academic, corporate, and fellowship settings. 
              Builds reliable systems, interactive dashboards, and cloud-based workflows that support informed decision-making and optimized product performance.
              Brings strong fundamentals in programming, data modeling, and application development with a forward-looking approach to shipping clean, dependable code.
            </p>
          </div>
        </Card>

        <div>
          <h3 className="text-2xl font-bold text-[#d4b896] mb-6 flex items-center gap-3">
            <Award className="w-6 h-6" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-[#1a1d29] border-gray-800 hover:border-[#4a90e2] transition-all duration-300"
              >
                <div className="p-6">
                  <Badge className="bg-[#4a90e2]/20 text-[#4a90e2] border-[#4a90e2]/30 mb-3">
                    {cert.date}
                  </Badge>
                  <h4 className="text-lg font-semibold text-[#e8eaed] mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-400">{cert.org}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
