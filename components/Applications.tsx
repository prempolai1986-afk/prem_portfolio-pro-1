import React from 'react';
import { APPLICATIONS_DATA } from '../constants';
import LogoLoop from './LogoLoop';

const Applications: React.FC = () => {
  return (
    <section id="applications" className="py-24 bg-surface/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4 text-center">Applications Used</h2>
          <p className="text-gray-400 text-center max-w-2xl">
            My daily drivers and essential tools for crafting digital experiences.
          </p>
        </div>

        <div className="relative">
          {/* Gradient Masks for smooth fade effect at edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#161b22] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#161b22] to-transparent z-10 pointer-events-none"></div>

          <LogoLoop speed={35} direction="left" className="py-8">
            {APPLICATIONS_DATA.map((app) => (
              <div 
                key={app.id}
                className="group flex flex-col items-center justify-center gap-3 min-w-[120px] transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                <div className="p-5 rounded-2xl bg-background border border-white/5 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300 shadow-lg">
                  <app.icon size={40} strokeWidth={1.5} className="text-gray-400 group-hover:text-accent transition-colors" />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white group-hover:text-accent transition-colors">{app.name}</h3>
                </div>
              </div>
            ))}
          </LogoLoop>
        </div>
      </div>
    </section>
  );
};

export default Applications;