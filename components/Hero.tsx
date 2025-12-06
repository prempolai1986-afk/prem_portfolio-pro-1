import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_CONTENT, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-accent/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        
        <div className="mb-8 animate-fade-in-up">
          <span className="py-2 px-6 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent tracking-widest uppercase hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
            Welcome to my world
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">{HERO_CONTENT.name}</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-gray-400 font-light mb-8 max-w-3xl mx-auto">
          {HERO_CONTENT.title}
        </h2>

        <p className="text-gray-500 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          {HERO_CONTENT.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a 
            href="#projects"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-300 p-2 hover:bg-white/5 rounded-full"
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ArrowDown size={24} />
      </div>

      {/* Animated Character Peeking from Right */}
      <div className="fixed right-0 bottom-0 z-40 flex flex-col items-end pointer-events-none">
        {/* Speech Bubble */}
        <div 
          className="mr-[30%] mb-4 bg-white text-black px-5 py-3 rounded-2xl rounded-br-none font-medium shadow-lg opacity-0 animate-pop-in-out relative text-lg transform -translate-x-1/2"
          style={{ animationDelay: '0.5s' }}
        >
          Hi to everyone! 👋
          <div className="absolute bottom-0 -right-2 w-4 h-4 bg-white transform skew-x-[20deg]"></div>
        </div>
        
        {/* 3D Character */}
        <div className="h-[50vh] min-h-[400px] md:h-[60vh] animate-peek-in-out transform translate-x-full origin-bottom">
           <div className="h-full animate-float">
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Raising%20Hand.png" 
              alt="Saying Hi" 
              className="h-full w-auto object-contain drop-shadow-2xl"
            />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;