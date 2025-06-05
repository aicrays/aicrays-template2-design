
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/50 via-white to-pulse-100/40"></div>
      
      {/* Fluid Wave Gradients */}
      <div className="absolute -top-[30%] -right-[15%] w-[70%] h-[90%] bg-gradient-to-br from-pulse-200/25 to-pulse-400/15 rounded-full blur-3xl animate-pulse-slow transform rotate-12"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[70%] bg-gradient-to-tr from-blue-200/20 to-purple-300/15 rounded-full blur-3xl animate-pulse-slow transform -rotate-6" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Organic flowing lines */}
        <path 
          d="M 100 150 Q 300 100 500 200 T 700 250" 
          stroke="url(#neural-gradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        <path 
          d="M 50 300 Q 250 250 450 350 T 750 400" 
          stroke="url(#neural-gradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
          style={{ animationDelay: '3s' }}
        />
        <path 
          d="M 150 450 Q 350 400 550 500 T 650 550" 
          stroke="url(#neural-gradient)" 
          strokeWidth="1" 
          fill="none" 
          className="animate-pulse-slow"
          style={{ animationDelay: '5s' }}
        />
      </svg>
      
      {/* Enhanced Floating Elements with more presence */}
      <div className="absolute top-1/4 left-1/5 w-2.5 h-2.5 bg-pulse-400/50 rounded-full animate-float opacity-70" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-3.5 h-3.5 bg-pulse-500/40 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pulse-600/45 rounded-full animate-float opacity-55" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-blue-400/35 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
      
      {/* Modular orbit rings - very subtle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-pulse-300/10 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-pulse-400/8 rounded-full animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default HeroBackground;
