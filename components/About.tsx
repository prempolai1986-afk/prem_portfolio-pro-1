import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { ABOUT_CONTENT, EXPERIENCE_DATA } from '../constants';

const About: React.FC = () => {
  const [imgSrc, setImgSrc] = useState("https://i.postimg.cc/c4kg4LKS/Whats_App_Image_2025_12_01_at_00_02_38_(1).jpg");
  
  const handleImgError = () => {
    // Fallback to GitHub profile picture if the primary image fails
    setImgSrc("https://github.com/prempolai.png");
  };

  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Profile & Bio */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 border border-white/10">
                <img 
                  src={imgSrc}
                  alt="Prem Polai"
                  onError={handleImgError}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="mt-8 space-y-4">
              <h2 className="text-3xl font-display font-bold text-white">About Me</h2>
              <p className="text-gray-400 leading-relaxed">
                {ABOUT_CONTENT.bio}
              </p>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={18} className="text-primary" />
                <span>{ABOUT_CONTENT.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="w-full lg:w-2/3">
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-secondary rounded-full"></span>
              Experience & Education
            </h3>

            <div className="space-y-8">
              {EXPERIENCE_DATA.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative pl-8 border-l border-white/10 hover:border-accent transition-colors duration-300"
                >
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100" />
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:opacity-0 transition-opacity duration-300" />
                  
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h4 className="text-xl font-bold text-white flex items-center gap-2">
                        {item.type === 'work' ? <Briefcase size={18} className="text-primary" /> : <GraduationCap size={18} className="text-secondary" />}
                        {item.role}
                      </h4>
                      {item.period && (
                        <span className="text-sm font-mono text-gray-500 bg-black/30 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <div className="text-accent font-medium mb-3">{item.company}</div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;