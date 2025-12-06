import React from 'react';

interface LogoLoopProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // Duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({ 
  children, 
  direction = 'left', 
  speed = 30,
  pauseOnHover = true,
  className = ''
}) => {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className={`flex overflow-hidden group ${className}`}>
       <div 
         className={`flex shrink-0 min-w-full justify-around items-center gap-12 px-6 ${animationClass} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
         style={{ animationDuration: `${speed}s` }}
       >
         {children}
       </div>
       <div 
         className={`flex shrink-0 min-w-full justify-around items-center gap-12 px-6 ${animationClass} ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
         style={{ animationDuration: `${speed}s` }}
         aria-hidden="true"
       >
         {children}
       </div>
    </div>
  );
};

export default LogoLoop;