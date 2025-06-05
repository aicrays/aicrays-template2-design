
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle Purple-tinted Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-violet-25/30 to-purple-50/20"></div>
      
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-400/8 to-blue-400/12 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/8 via-transparent to-violet-500/6 animate-gradient-shift" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      
      {/* Floating Glassmorphism Bubbles - Positioned away from text center */}
      <div className="absolute top-[8%] left-[8%] w-16 h-16 bg-white/4 backdrop-blur-sm rounded-full animate-float opacity-40" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
      <div className="absolute top-[15%] right-[10%] w-20 h-20 bg-purple-200/5 backdrop-blur-sm rounded-full animate-float opacity-35" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-[25%] left-[12%] w-12 h-12 bg-violet-300/4 backdrop-blur-sm rounded-full animate-float opacity-45" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
      <div className="absolute top-[35%] left-[85%] w-14 h-14 bg-blue-200/4 backdrop-blur-sm rounded-full animate-float opacity-30" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
      <div className="absolute bottom-[15%] right-[15%] w-18 h-18 bg-purple-300/4 backdrop-blur-sm rounded-full animate-float opacity-40" style={{ animationDelay: '3s', animationDuration: '11s' }}></div>
      <div className="absolute top-[65%] right-[8%] w-10 h-10 bg-violet-200/5 backdrop-blur-sm rounded-full animate-float opacity-25" style={{ animationDelay: '5s', animationDuration: '7s' }}></div>
      
      {/* Additional Corner Floating Elements for Depth */}
      <div className="absolute top-[5%] right-[85%] w-8 h-8 bg-white/3 backdrop-blur-sm rounded-full animate-float opacity-30" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[35%] left-[5%] w-22 h-22 bg-purple-100/3 backdrop-blur-sm rounded-full animate-float opacity-35" style={{ animationDelay: '7s', animationDuration: '13s' }}></div>
      <div className="absolute top-[80%] left-[85%] w-6 h-6 bg-violet-200/4 backdrop-blur-sm rounded-full animate-float opacity-25" style={{ animationDelay: '8s', animationDuration: '15s' }}></div>
      <div className="absolute bottom-[5%] right-[85%] w-9 h-9 bg-purple-300/3 backdrop-blur-sm rounded-full animate-float opacity-30" style={{ animationDelay: '9s', animationDuration: '16s' }}></div>
      
      {/* Enhanced Curved Flow Lines with Gradient Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1200 800">
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
          style={{ animationDelay: '3s' }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8f4bea" stopOpacity="0" />
            <stop offset="50%" stopColor="#8f4bea" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8f4bea" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c46cff" stopOpacity="0" />
            <stop offset="50%" stopColor="#c46cff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c46cff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
