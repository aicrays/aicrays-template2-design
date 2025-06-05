
import React from "react";

const HeroBackground = () => {
  const bubbles = [
    { size: "w-24 h-24", position: "top-1/4 right-1/6", delay: "0s", opacity: "opacity-30" },
    { size: "w-16 h-16", position: "top-1/3 right-1/3", delay: "2s", opacity: "opacity-40" },
    { size: "w-32 h-32", position: "top-1/2 right-1/8", delay: "4s", opacity: "opacity-25" },
    { size: "w-20 h-20", position: "bottom-1/3 right-1/4", delay: "1s", opacity: "opacity-35" },
    { size: "w-28 h-28", position: "bottom-1/4 right-1/5", delay: "3s", opacity: "opacity-30" },
    { size: "w-14 h-14", position: "top-2/3 right-1/6", delay: "5s", opacity: "opacity-45" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora Gradient Motion Background */}
      <div className="absolute inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30"></div>
        
        {/* Animated gradient sweeps */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-transparent to-blue-100/40 animate-pulse-slow"
          style={{ animationDuration: '8s' }}
        ></div>
        
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-50/30 to-pink-50/20 animate-pulse-slow"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        ></div>
        
        {/* Flowing light zones */}
        <div 
          className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-radial from-purple-100/20 via-transparent to-transparent blur-3xl animate-float"
          style={{ animationDuration: '20s' }}
        ></div>
        
        <div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-blue-100/15 via-transparent to-transparent blur-2xl animate-float"
          style={{ animationDuration: '15s', animationDelay: '5s' }}
        ></div>
      </div>

      {/* Floating Bubbles - No Icons */}
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute ${bubble.position} ${bubble.size} ${bubble.opacity} animate-float z-10`}
          style={{ 
            animationDelay: bubble.delay, 
            animationDuration: `${6 + index}s`,
            animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
          }}
        >
          <div className="relative w-full h-full">
            {/* Main bubble */}
            <div className="w-full h-full bg-gradient-to-br from-purple-200/40 to-blue-200/30 rounded-full backdrop-blur-sm border border-white/20 shadow-lg"></div>
            
            {/* Inner glow */}
            <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
            
            {/* Outer glow */}
            <div className="absolute inset-0 bg-purple-300/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      ))}

      {/* Ambient particles */}
      <div className="absolute top-1/5 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-purple-500/50 rounded-full animate-pulse opacity-40" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/8 w-2 h-2 bg-pink-300/30 rounded-full animate-pulse opacity-45" style={{ animationDelay: '1s' }}></div>

      {/* Soft vignette corners */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-radial from-transparent to-white/40 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-transparent to-purple-50/60 blur-3xl"></div>
    </div>
  );
};

export default HeroBackground;
