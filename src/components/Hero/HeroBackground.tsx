
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Flowing Background Shapes */}
      <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[90%] bg-gradient-to-br from-pulse-200/30 to-pulse-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[60%] h-[70%] bg-gradient-to-tr from-blue-200/20 to-purple-300/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle Modular Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Enhanced Floating Particles with Better Distribution */}
      <div className="absolute top-1/4 left-1/5 w-3 h-3 bg-pulse-400 rounded-full animate-float opacity-40" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-pulse-500 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pulse-600 rounded-full animate-float opacity-35" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-25" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      
      {/* Enhanced Curved Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1200 800">
        <path 
          d="M0,400 Q300,200 600,400 T1200,400" 
          stroke="url(#gradient1)" 
          strokeWidth="1.5" 
          fill="none"
          className="animate-pulse-slow"
        />
        <path 
          d="M0,600 Q400,300 800,500 T1200,400" 
          stroke="url(#gradient2)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        <path 
          d="M0,200 Q600,100 1200,300" 
          stroke="url(#gradient3)" 
          strokeWidth="0.8" 
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '3s' }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
