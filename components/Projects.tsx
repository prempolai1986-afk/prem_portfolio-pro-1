import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Featured Works</h2>

        <div className="space-y-20">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-xl hover:shadow-primary/10 transition-all duration-500">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full aspect-video object-cover transform scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="text-accent text-sm font-bold tracking-widest uppercase">{project.category}</div>
                <h3 className="text-3xl font-display font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors">
                    View Project <ExternalLink size={18} />
                  </button>
                  <button className="p-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;