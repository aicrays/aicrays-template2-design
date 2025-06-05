
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Modern Gradient Foundation */}
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/60 via-white to-pulse-100/50"></div>
      
      {/* Diagonal Gradient Sweep */}
      <div className="absolute -top-[40%] -right-[20%] w-[80%] h-[100%] bg-gradient-to-br from-pulse-200/20 via-pulse-300/15 to-transparent rounded-full blur-3xl animate-pulse-slow transform rotate-12"></div>
      
      {/* Soft Glowing Accents */}
      <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-gradient-radial from-pulse-400/15 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-[15%] left-[10%] w-80 h-80 bg-gradient-radial from-blue-300/12 to-transparent rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      
      {/* Abstract Tech Lines - Very Subtle */}
      <svg className="absolute inset-0 w-full h-full opacity-6" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Flowing organic lines */}
        <path 
          d="M 50 100 Q 200 80 350 150 T 650 200" 
          stroke="url(#tech-gradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
          style={{ animationDelay: '0s' }}
        />
        <path 
          d="M 100 300 Q 300 280 500 350 T 750 400" 
          stroke="url(#tech-gradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <path 
          d="M 0 450 Q 200 430 400 480 T 600 520" 
          stroke="url(#tech-gradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
          style={{ animationDelay: '4s' }}
        />
      </svg>
      
      {/* Modular Geometric Accents */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-pulse-300/8 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-pulse-400/6 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      
      {/* Lens Flare Effect */}
      <div className="absolute top-[20%] right-[20%] w-2 h-2 bg-pulse-500/40 rounded-full shadow-lg shadow-pulse-500/20 animate-pulse-slow"></div>
      <div className="absolute bottom-[25%] left-[15%] w-1.5 h-1.5 bg-blue-400/35 rounded-full shadow-md shadow-blue-400/15 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroBackground;
