import React, { useState } from 'react';
import { ArrowRight, FolderOpen } from 'lucide-react';
import ProjectCard from '@/components/ProjectsCard';
import ProjectModal from '@/components/ProjectsModal';

interface ProjectsProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Projects({ scrollToSection }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState(null);

  // Updated project data with real content
  const projects = [
    {
      id: 1,
      name: "Spud Munch Bunch",
      description: "A web app that allows customers to browse the menu, customize items, and place orders directly from their devices. Built to solve traditional in-person ordering limitations and increase customer convenience.",
      tools: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "OpenAI", "Lucide"],
      image_url: "/project/spud-munch-bunch.jpg",
      featured: true,
      live_url: "https://cs-25-2-team2.vercel.app",
      github_url: "https://github.com/code-differently/cs-25-2-team2",
      team: "· Dean Walston ·Brooklyn Harden · Trishtan Husser · Wayleom Vargas",
      detailed_description: `Problem: Traditional in-person ordering limits customer convenience and reduces potential sales. Our restaurant wants to get more customers by allowing them to order online.

Solution: Create a web app that allows customers to browse the menu, customize items, and place orders directly from their devices.

Key Features:

• Browse Menu Items - Users can view all available menu items with name, description, and price
• Add Items to Cart - Clicking an item adds it to the cart with immediate total updates
• Search Functionality - Search bar for finding items by name or description
• Edit Items in Cart - Modify items (quantity, toppings, size) before checkout
• Real-time Updates - Cart total and order details update immediately after any change
• Error Handling - Out of stock notifications and "No items available" messages
• Order Management - Orders become final and uneditable once checkout is complete`,
      architecture: `Frontend & Backend Architecture:
• React frontend framework for dynamic user interface
• Node.js & Express backend for server-side logic and API endpoints
• PostgreSQL database for storing menu items, orders, and customer data
• OpenAI integration for enhanced user experience features
• Tailwind CSS for responsive and modern styling
• Lucide icons for consistent UI elements

The application follows a full-stack architecture with clear separation between frontend and backend concerns, enabling scalable order management and real-time cart updates.`,
      gallery_images: ["/project/spud-munch-1.jpg", "/project/spud-munch-2.jpg", "/project/spud-munch-3.jpg"]
    },
    {
      id: 2,
      name: "Harvest Hub: Verified Community Food Sharing",
      description: "A small web app built during a 24 hour hackathon. People can list extra food, people nearby can quietly claim it, and after pickup we run a simple image check that compares the 'before' and 'after' photos using Supabase Storage and an OpenAI.",
      tools: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OpenAI", "Tailwind CSS", "shadcn ui", "Vercel"],
      image_url: "/project/hh-overview1.png",
      featured: true,
      live_url: "https://harvest-hub-orpin.vercel.app/",
      github_url: "https://github.com/dahw/harvest-hub",
      team: "Jadyn Worthington · Joseph Caballero · Dean Walston · Mercedes Mathews",
      detailed_description: `The goal was simple: move real food to real people and keep the system honest without a lot of manual oversight.

• People(the public) post listings with a photo of surplus cooked food and a pickup window.
• Community members claim portions from a feed of open listings.
• After pickup, users upload a proof photo. The backend compares it to the original image and marks the claim as verified if the similarity score is high enough.

The hackathon opened with three prompts: health advocacy, financial literacy, and food scarcity. We picked food scarcity and decided that if we were going to stay up all night, we wanted something that actually moved data end to end, not just a slide deck.`,
      architecture: `At a high level:
• Next.js on Vercel renders the UI and exposes API routes like /api/listings, /api/claims, and /api/verify.
• Supabase manages auth, Postgres tables, and private storage buckets.
• OpenAI provides the image similarity score when we need to verify a claim.

The Next.js app runs on Vercel and talks to Supabase and OpenAI only through server side API routes. Writes for listings, claims, and verifications all go through those routes, which keeps the database and storage in sync.`,
      gallery_images: ["/project/hh-overview1.png", "/project/hh-overview2.png", "/project/hh-overview3.png"]
    },
    {
      id: 3,
      name: "Portfolio Website",
      description: "A modern, responsive portfolio built with Next.js and TypeScript",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel Analytics"],
      image_url: "/project-placeholder-1.jpg",
      featured: false,
      live_url: "https://your-portfolio.vercel.app",
      github_url: "https://github.com/dahw/ideal-portfolio",
      detailed_description: "A comprehensive portfolio showcasing my development skills, built with modern web technologies and best practices. Features responsive design, smooth animations, and professional presentation of my work and experience."
    }
  ];

  const isLoading = false;

  return (
    <section className="py-24 px-6 bg-[#1a1d29]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 bg-[#4a90e2]/20 rounded-xl flex items-center justify-center">
              <FolderOpen className="w-7 h-7 text-[#4a90e2]" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e8eaed] mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in full-stack development, 
            problem-solving, and creating user-centric applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-12">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#252837] rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-20">
              <FolderOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No projects added yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button 
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#4a90e2] text-white rounded-lg hover:bg-[#3a7bc8] transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
