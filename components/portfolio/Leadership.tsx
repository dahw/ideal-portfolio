import React from 'react';

import {Award, Users} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';

export default function Leadership() {
  const activities = [
    {
      role: 'Vice Basileus',
      organization: 'Omega Psi Phi Fraternity, Inc. – Eta Psi Chapter',
      period: '2022–2023',
    },
    {
      role: 'Participant',
      organization: 'Fisk Executive Leadership Program',
      period: '2022–2023',
    },
    {
      role: 'Scholar',
      organization: 'Center for Financial Advancement, Home Free-USA',
      period: '2021–2023',
    },
    {
      role: 'Mentor',
      organization: 'Breakthrough Atlanta',
      period: '2012–2023',
    },
    {
      role: 'STEM Coach',
      organization: 'Johnson STEM Activity Center',
      period: '2022–2023',
    },
  ];

  return (
    <section id="leadership" className="py-24 px-6 bg-[#252837]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mb-12 text-center">
          Leadership & <span className="gradient-text">Activities</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="bg-[#1a1d29] border-gray-800 hover:border-[#d4b896] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#d4b896]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {index === 0 ? (
                      <Award className="w-5 h-5 text-[#d4b896]" />
                    ) : (
                      <Users className="w-5 h-5 text-[#d4b896]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#e8eaed] mb-2">
                      {activity.role}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {activity.organization}
                    </p>
                    <Badge className="bg-[#4a90e2]/20 text-[#4a90e2] border-[#4a90e2]/30">
                      {activity.period}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
