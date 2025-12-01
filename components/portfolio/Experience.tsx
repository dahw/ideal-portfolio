import React from 'react';

import {Briefcase, Calendar, MapPin} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';

export default function Experience() {
  const experiences = [
    {
      title: 'Data & Analytics Extern',
      company: 'Innova Solutions',
      location: 'Wilmington, DE (Remote)',
      period: 'Nov 2025 – Dec 2025',
      achievements: [
        'Designed cloud-backed reports, data models, and workflow integrations that supported project architecture and improved data accessibility for internal users',
        'Analyzed statement of work (SOW) data from U.S. programs to identify process gaps, resulting in clearer visibility into workload distribution and contributing to faster production-level decision cycles',
        'Built and maintained Power BI dashboards that visualize KPIs for partners and stakeholders, helping increase reporting transparency and engagement across programs.',
        'Coordinated with engineering and platform teams to strengthen data accuracy, maintain reliable server connections, and improve system-health visibility',
        'Automated recurring reporting workflows using Python and Excel, reducing manual turnaround time and improving day-to-day accessibility for analysts.',
        'Collaborated across cross-functional teams of internal and external stakeholders to ensure support for data validation, compliance needs, and consistent reporting practices.',
      ]
    },{
      title: 'Data & Analytics Fellow',
      company: 'The Recycling Partnership',
      location: 'Nashville, TN (Remote)',
      period: 'Jan 2024 – Dec 2024',
      achievements: [
        'Selected as 1 of 4 students for a year-long remote professional program aimed at cultivating diverse leaders in the recycling and circular economy sector.',
        'Analyzed local and national community recycling data of 10,000+ community recycling programs, identifying trends and opportunities that enhanced program effectiveness by 20%.',
        'Developed interactive dashboards to visualize recycling metrics to stakeholders, improving engagement and access to critical data.',
        'Automated internal workflows, enabling faster access to critical data and reporting speed.',
      ],
    },
    {
      title: 'Research Analyst Intern',
      company: 'Fisk University',
      location: 'Nashville, TN',
      period: 'May 2023 – Aug 2023',
      achievements: [
        'Researched the NetsBlox Tool of Vanderbilt University, evaluating its effectiveness in teaching computer science concepts through visual programming, user engagement, and collaborative learning.',
        'Built course modules on Cloud APIs and networking; gained proficiency in AWS services (S3 and Lambda), Blocks, SQL.',
      ]
    },
    {
      title: 'Lead Coach – Summer of Invention & Innovation Program',
      company: '100 Scholars Robotics Alliance',
      location: 'Atlanta, GA',
      period: 'May 2022 – Aug 2022',
      achievements: [
        'Mentored 800+ scholars in robotics across FIRST (For Inspiration and Recognition of Science and Technology), guiding them in competition challenges and technical development.',
        'Taught young minority scholars ages 7+ in the programming languages of JavaScript and Blocks, improving robotics skills and inspired research on NASA\'s Space Exploration.',
      ]
    },
    {
      title: 'Software Engineer Intern – Rock Internship Program',
      company: 'Quicken Loans',
      location: 'Detroit, MI (Remote)',
      period: 'May 2021 – Aug 2021',
      achievements: [
        'Collaborated with Rocket Loans team of engineers to create, test, and improve quality and functionality of production systems.',
        'Designed and implemented unit and integration tests, enhancing reliability of loan service applications.',
      ]
    },
    {
      title: 'HBCU Computer Science Summer Institute Practitioner',
      company: 'Google',
      location: 'Huntsville, AL',
      period: 'Jun 2019 – Jul 2019',
      achievements: [
        '1 of 45 students selected nationwide for a 3-week coding program at Alabama A&M University.',
        'Completed Python training; configured Raspberry Pi; delivered final project to Google engineers.',
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#1a1d29]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mb-12 text-center">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-[#252837] border-gray-800 hover:border-[#4a90e2] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#d4b896]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="w-6 h-6 text-[#d4b896]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#e8eaed] mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-[#4a90e2] font-semibold text-lg mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 ml-0 md:ml-16">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="text-gray-300 leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-[#d4b896] mt-2 flex-shrink-0">
                        •
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
