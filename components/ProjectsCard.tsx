import {ArrowRight, Image as ImageIcon} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';

interface Project {
  id: number;
  name: string;
  description: string;
  tools: string[];
  image_url?: string;
  featured?: boolean;
  live_url?: string;
  github_url?: string;
  team?: string;
  detailed_description?: string;
  architecture?: string;
  gallery_images?: string[];
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

export default function ProjectCard({
  project,
  onViewDetails
}: ProjectCardProps) {
  const toolColors: Record<string, string> = {
    'Next.js': 'bg-black text-white',
    React: 'bg-[#61DAFB]/20 text-[#61DAFB]',
    TypeScript: 'bg-[#3178C6]/20 text-[#3178C6]',
    JavaScript: 'bg-[#F7DF1E]/20 text-[#F7DF1E]',
    Supabase: 'bg-[#3ECF8E]/20 text-[#3ECF8E]',
    PostgreSQL: 'bg-[#336791]/20 text-[#336791]',
    OpenAI: 'bg-[#10A37F]/20 text-[#10A37F]',
    'Tailwind CSS': 'bg-[#06B6D4]/20 text-[#06B6D4]',
    'shadcn ui': 'bg-white/10 text-white',
    Vercel: 'bg-white/10 text-white',
    Python: 'bg-[#3776AB]/20 text-[#3776AB]',
    Java: 'bg-[#ED8B00]/20 text-[#ED8B00]',
    'Spring Boot': 'bg-[#6DB33F]/20 text-[#6DB33F]',
    AWS: 'bg-[#FF9900]/20 text-[#FF9900]',
    'Node.js': 'bg-[#339933]/20 text-[#339933]',
    MongoDB: 'bg-[#47A248]/20 text-[#47A248]',
    default: 'bg-[#4a90e2]/20 text-[#4a90e2]'
  };

  const getToolColor = (tool: string) =>
    toolColors[tool] || toolColors['default'];

  return (
    <Card className="bg-[#252837] border-gray-800 hover:border-[#4a90e2] transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 bg-[#1a1d29] overflow-hidden">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-gray-700" />
          </div>
        )}
        {project.featured && (
          <Badge className="absolute top-4 right-4 bg-[#d4b896] text-[#1a1d29]">
            Featured
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#e8eaed] mb-3 group-hover:text-[#4a90e2] transition-colors">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools?.slice(0, 5).map((tool, index) => (
            <Badge
              key={index}
              className={`${getToolColor(tool)} border-none text-xs`}
            >
              {tool}
            </Badge>
          ))}
          {project.tools?.length > 5 && (
            <Badge className="bg-gray-700 text-gray-300 border-none text-xs">
              +{project.tools.length - 5}
            </Badge>
          )}
        </div>

        {/* View Details Button */}
        <Button
          onClick={onViewDetails}
          variant="ghost"
          className="w-full justify-between text-[#4a90e2] hover:text-[#d4b896] hover:bg-[#4a90e2]/10 group/btn"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}
