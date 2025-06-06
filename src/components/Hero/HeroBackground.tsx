
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Brightened Purple-to-Blue Gradient Background with Softer Tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/60 to-lavender-100/70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-purple-100/40 via-lavender-50/30 to-transparent"></div>
      
      {/* Lighter Purple-Blue Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/12 via-violet-400/8 to-blue-300/15 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-400/8 via-indigo-300/6 to-blue-400/12 animate-gradient-shift" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-300/8 via-purple-200/6 to-indigo-300/10 animate-gradient-shift" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      
      {/* Reduced Density Corner Orbs - Larger and More Translucent */}
      <div className="absolute top-[8%] left-[3%] w-64 h-64 bg-purple-400/30 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
      <div className="absolute top-[12%] right-[5%] w-72 h-72 bg-violet-300/25 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '6s', animationDuration: '24s' }}></div>
      <div className="absolute bottom-[15%] left-[6%] w-56 h-56 bg-indigo-400/35 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
      <div className="absolute bottom-[8%] right-[8%] w-52 h-52 bg-purple-500/32 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
      
      {/* Medium Corner Orbs with Reduced Center Presence */}
      <div className="absolute top-[18%] left-[15%] w-40 h-40 bg-indigo-300/40 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[25%] right-[18%] w-36 h-36 bg-purple-300/35 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
      <div className="absolute top-[65%] right-[25%] w-32 h-32 bg-violet-400/38 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '5s', animationDuration: '15s' }}></div>
      <div className="absolute top-[5%] right-[40%] w-28 h-28 bg-indigo-400/33 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '8s', animationDuration: '21s' }}></div>
      
      {/* Small Corner Orbs for Depth */}
      <div className="absolute top-[5%] left-[8%] w-24 h-24 bg-purple-300/38 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '1s', animationDuration: '11s' }}></div>
      <div className="absolute top-[75%] right-[12%] w-26 h-26 bg-blue-200/42 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-[12%] left-[18%] w-22 h-22 bg-violet-400/35 rounded-full blur-xl animate-float-vertical opacity-45" style={{ animationDelay: '10s', animationDuration: '9s' }}></div>
      <div className="absolute top-[80%] left-[20%] w-18 h-18 bg-indigo-300/40 rounded-full blur-lg animate-float-vertical opacity-55" style={{ animationDelay: '14s', animationDuration: '8s' }}></div>
      
      {/* Minimal Center Orbs - Very Translucent */}
      <div className="absolute top-[35%] left-[45%] w-16 h-16 bg-purple-200/25 rounded-full blur-md animate-float-vertical opacity-35" style={{ animationDelay: '16s', animationDuration: '7s' }}></div>
      <div className="absolute top-[55%] right-[42%] w-14 h-14 bg-blue-200/28 rounded-full blur-md animate-float-vertical opacity-40" style={{ animationDelay: '18s', animationDuration: '6s' }}></div>
      
      {/* Subtle Particle Dots in Corners */}
      <div className="absolute top-[15%] left-[20%] w-4 h-4 bg-purple-500/45 rounded-full animate-float-vertical" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
      <div className="absolute top-[70%] right-[25%] w-3 h-3 bg-blue-400/50 rounded-full animate-float-vertical" style={{ animationDelay: '7s', animationDuration: '6s' }}></div>
      <div className="absolute bottom-[35%] left-[8%] w-2.5 h-2.5 bg-violet-500/40 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '5s' }}></div>
      
      {/* Enhanced Curved Flow Lines with Softer Purple-Blue Gradients */}
      <svg className="absolute inset-0 w-full h-full opacity-6" viewBox="0 0 1200 800">
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
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
