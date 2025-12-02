import {useState} from 'react';

import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Image as ImageIcon,
  X
} from 'lucide-react';

import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';

export default function ProjectModal({project, onClose}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [
    project.image_url,
    ...(project.gallery_images || [])
  ].filter(Boolean);

  const toolColors = {
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

  const getToolColor = tool => toolColors[tool] || toolColors['default'];

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      prev => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-[#1a1d29] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-800 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#252837] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#4a90e2] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image Gallery */}
          <div className="relative h-64 md:h-80 bg-[#252837]">
            {allImages.length > 0 ? (
              <>
                <img
                  src={allImages[currentImageIndex]}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {allImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex
                              ? 'bg-[#4a90e2]'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <ImageIcon className="w-20 h-20 text-gray-700" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#e8eaed] mb-4">
                {project.name}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>
              {project.team && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-[#d4b896]">Team:</span>{' '}
                    <span className="text-gray-400">{project.team}</span>
                  </p>
                </div>
              )}
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#d4b896] uppercase tracking-wider mb-3">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool, index) => (
                  <Badge
                    key={index}
                    className={`${getToolColor(tool)} border-none`}
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#d4b896] uppercase tracking-wider mb-3">
                Project Details
              </h3>
              <div className="bg-[#252837] rounded-xl p-6">
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {project.detailed_description ? (
                    project.detailed_description
                      .split('\n\n')
                      .map((paragraph, index) => (
                        <div key={index}>
                          {paragraph.split('\n').map((line, lineIndex) => (
                            <div key={lineIndex} className="leading-relaxed">
                              {line.startsWith('•') ? (
                                <div className="flex items-start gap-2 ml-4">
                                  <span className="text-[#4a90e2] mt-2 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                                  <span>{line.substring(1).trim()}</span>
                                </div>
                              ) : (
                                <p>{line}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      ))
                  ) : (
                    <p>
                      A comprehensive project showcasing modern development
                      practices and innovative solutions.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Architecture Section */}
            {project.architecture && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-[#d4b896] uppercase tracking-wider mb-3">
                  Architecture Overview
                </h3>
                <div className="bg-[#252837] rounded-xl p-6">
                  <div className="text-gray-300 leading-relaxed space-y-4">
                    {project.architecture.split('\n').map((line, index) => (
                      <div key={index} className="leading-relaxed">
                        {line.startsWith('•') ? (
                          <div className="flex items-start gap-2 ml-4">
                            <span className="text-[#4a90e2] mt-2 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            <span>{line.substring(1).trim()}</span>
                          </div>
                        ) : (
                          <p>{line}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#4a90e2] hover:bg-[#3a7bc8] text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-[#252837]"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
