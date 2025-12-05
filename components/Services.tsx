import React from 'react';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
           <div>
            <h2 className="text-4xl font-display font-bold text-white mb-2">My Services</h2>
            <p className="text-gray-400">High-quality solutions tailored to your needs.</p>
           </div>
           <div className="h-[1px] bg-white/10 flex-grow ml-8 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div 
              key={service.id}
              className="group p-8 bg-background border border-white/5 hover:border-accent/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)]"
            >
              <div className="mb-6 p-4 rounded-xl bg-surface inline-block group-hover:bg-accent/10 transition-colors duration-300">
                <service.icon size={32} className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;