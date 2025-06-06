
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Purple-to-Blue Gradient Background with Deeper Lower Half */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/80 to-purple-100/90"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-200/60 via-purple-100/40 to-transparent"></div>
      
      {/* Multiple Purple-Blue Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 via-violet-500/12 to-blue-400/18 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/10 via-indigo-400/8 to-blue-500/15 animate-gradient-shift" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-400/10 via-purple-300/8 to-indigo-400/12 animate-gradient-shift" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      
      {/* Large Floating Orbs - Enhanced Purple-Blue Palette */}
      <div className="absolute top-[10%] left-[5%] w-56 h-56 bg-purple-600/45 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
      <div className="absolute top-[15%] right-[8%] w-64 h-64 bg-violet-500/40 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '6s', animationDuration: '24s' }}></div>
      <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-indigo-500/50 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
      <div className="absolute top-[30%] right-[5%] w-60 h-60 bg-blue-400/35 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '9s', animationDuration: '22s' }}></div>
      <div className="absolute bottom-[10%] right-[12%] w-44 h-44 bg-purple-700/47 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
      <div className="absolute top-[60%] right-[20%] w-40 h-40 bg-violet-600/43 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '15s', animationDuration: '26s' }}></div>
      
      {/* Medium Floating Orbs */}
      <div className="absolute top-[20%] left-[20%] w-36 h-36 bg-indigo-500/55 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[35%] right-[25%] w-32 h-32 bg-purple-500/50 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
      <div className="absolute top-[45%] left-[15%] w-34 h-34 bg-blue-300/57 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '11s', animationDuration: '13s' }}></div>
      <div className="absolute top-[65%] right-[35%] w-30 h-30 bg-violet-500/53 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '5s', animationDuration: '15s' }}></div>
      <div className="absolute bottom-[25%] left-[30%] w-38 h-38 bg-purple-600/51 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '13s', animationDuration: '19s' }}></div>
      <div className="absolute top-[12%] right-[50%] w-28 h-28 bg-indigo-600/49 rounded-full blur-2xl animate-float-vertical opacity-90" style={{ animationDelay: '8s', animationDuration: '21s' }}></div>
      
      {/* Small Floating Orbs */}
      <div className="absolute top-[8%] left-[12%] w-24 h-24 bg-purple-500/53 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '1s', animationDuration: '11s' }}></div>
      <div className="absolute top-[75%] right-[15%] w-26 h-26 bg-blue-300/57 rounded-full blur-xl animate-float-vertical opacity-80" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-[15%] left-[22%] w-22 h-22 bg-violet-600/50 rounded-full blur-xl animate-float-vertical opacity-60" style={{ animationDelay: '10s', animationDuration: '9s' }}></div>
      <div className="absolute top-[35%] right-[12%] w-20 h-20 bg-purple-400/55 rounded-full blur-lg animate-float-vertical opacity-75" style={{ animationDelay: '6s', animationDuration: '13s' }}></div>
      <div className="absolute bottom-[30%] right-[40%] w-18 h-18 bg-indigo-500/51 rounded-full blur-lg animate-float-vertical opacity-70" style={{ animationDelay: '14s', animationDuration: '8s' }}></div>
      
      {/* Extra Small Orbs for Depth */}
      <div className="absolute top-[25%] left-[8%] w-16 h-16 bg-purple-700/47 rounded-full blur-md animate-float-vertical opacity-55" style={{ animationDelay: '16s', animationDuration: '7s' }}></div>
      <div className="absolute top-[80%] left-[25%] w-14 h-14 bg-blue-400/53 rounded-full blur-md animate-float-vertical opacity-65" style={{ animationDelay: '18s', animationDuration: '6s' }}></div>
      <div className="absolute bottom-[8%] right-[30%] w-12 h-12 bg-violet-600/57 rounded-full blur-sm animate-float-vertical opacity-60" style={{ animationDelay: '20s', animationDuration: '5s' }}></div>
      
      {/* Particle Dots */}
      <div className="absolute top-[18%] left-[25%] w-4 h-4 bg-purple-700/60 rounded-full animate-float-vertical" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
      <div className="absolute top-[70%] right-[30%] w-3 h-3 bg-blue-600/65 rounded-full animate-float-vertical" style={{ animationDelay: '7s', animationDuration: '6s' }}></div>
      <div className="absolute top-[50%] left-[12%] w-5 h-5 bg-violet-600/55 rounded-full animate-float-vertical" style={{ animationDelay: '12s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-[40%] right-[18%] w-2.5 h-2.5 bg-purple-700/63 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '5s' }}></div>
      
      {/* Enhanced Curved Flow Lines with Purple-Blue Gradients */}
      <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1200 800">
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
          style={{ animationDelay: '3s' }}
        />
        <path 
          d="M0,200 Q500,600 1000,300 T1200,500" 
          stroke="url(#gradient3)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '6s' }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6b46c1" stopOpacity="0" />
            <stop offset="50%" stopColor="#6b46c1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6b46c1" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
