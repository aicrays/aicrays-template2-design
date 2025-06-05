
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-violet-400/15 to-blue-400/20 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/15 via-transparent to-violet-500/10 animate-gradient-shift" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      
      {/* Floating Glassmorphism Bubbles */}
      <div className="absolute top-[10%] left-[15%] w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
      <div className="absolute top-[25%] right-[20%] w-20 h-20 bg-purple-200/8 backdrop-blur-sm rounded-full animate-float opacity-50" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-[30%] left-[25%] w-12 h-12 bg-violet-300/6 backdrop-blur-sm rounded-full animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
      <div className="absolute top-[40%] left-[45%] w-14 h-14 bg-blue-200/7 backdrop-blur-sm rounded-full animate-float opacity-55" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
      <div className="absolute bottom-[20%] right-[30%] w-18 h-18 bg-purple-300/6 backdrop-blur-sm rounded-full animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '11s' }}></div>
      <div className="absolute top-[60%] right-[15%] w-10 h-10 bg-violet-200/8 backdrop-blur-sm rounded-full animate-float opacity-45" style={{ animationDelay: '5s', animationDuration: '7s' }}></div>
      
      {/* Additional Floating Elements for Depth */}
      <div className="absolute top-[15%] right-[45%] w-8 h-8 bg-white/4 backdrop-blur-sm rounded-full animate-float opacity-40" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[40%] left-[35%] w-22 h-22 bg-purple-100/5 backdrop-blur-sm rounded-full animate-float opacity-60" style={{ animationDelay: '7s', animationDuration: '13s' }}></div>
      
      {/* Enhanced Curved Flow Lines with Gradient Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
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
            <stop offset="50%" stopColor="#8f4bea" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8f4bea" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c46cff" stopOpacity="0" />
            <stop offset="50%" stopColor="#c46cff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c46cff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
