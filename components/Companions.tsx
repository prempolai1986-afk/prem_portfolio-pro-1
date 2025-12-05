import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { COMPANIONS_DATA } from '../constants';

const Companions: React.FC = () => {
  return (
    <section id="companions" className="py-24 bg-surface/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">My Companions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Talented individuals I've had the pleasure of working and collaborating with.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {COMPANIONS_DATA.map((person) => (
            <div 
              key={person.id} 
              className="w-full max-w-[300px] group relative bg-background border border-white/5 rounded-2xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                {person.portfolioUrl ? (
                  <a 
                    href={person.portfolioUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative w-full h-full cursor-pointer"
                    title="View Portfolio"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <img 
                      src={person.imageUrl} 
                      alt={person.name} 
                      className="relative w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-accent transition-colors duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-white w-8 h-8 drop-shadow-lg" />
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <img 
                      src={person.imageUrl} 
                      alt={person.name} 
                      className="relative w-full h-full object-cover rounded-full border-2 border-white/10 group-hover:border-accent transition-colors duration-300"
                    />
                  </>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {person.name}
              </h3>
              <p className="text-sm text-gray-400 font-mono mb-4">{person.role}</p>
              
              {person.linkedinUrl && (
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a 
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companions;