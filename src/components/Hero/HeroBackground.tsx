
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing Background Shapes */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-gradient-to-br from-pulse-200/40 to-pulse-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-blue-200/30 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated Circuit Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-pulse-300 rounded-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-pulse-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-20 h-20 border border-pulse-300 rounded-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-pulse-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pulse-500 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pulse-600 rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      
      {/* Curved Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
        <path 
          d="M0,400 Q300,200 600,400 T1200,400" 
          stroke="url(#gradient1)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-slow"
        />
        <path 
          d="M0,600 Q400,300 800,500 T1200,400" 
          stroke="url(#gradient2)" 
          strokeWidth="1.5" 
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
