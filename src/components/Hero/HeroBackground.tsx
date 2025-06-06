
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced Background with Darker Tones */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-purple-100/50 to-purple-200/60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-300/40 via-purple-200/30 to-transparent"></div>
      
      {/* Darker Edge Gradients for More Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-transparent to-violet-400/25"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-300/20 via-transparent to-purple-400/25"></div>
      
      {/* Soft Violet Fog Behind Text Area */}
      <div className="absolute top-[20%] left-[10%] right-[10%] bottom-[30%] bg-gradient-radial from-violet-400/15 via-purple-300/10 to-transparent blur-3xl"></div>
      
      {/* Large Corner Orbs - Enhanced */}
      <div className="absolute top-[8%] left-[3%] w-64 h-64 bg-purple-500/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
      <div className="absolute top-[12%] right-[5%] w-72 h-72 bg-violet-500/35 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '6s', animationDuration: '24s' }}></div>
      <div className="absolute bottom-[15%] left-[6%] w-56 h-56 bg-indigo-600/45 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
      <div className="absolute bottom-[8%] right-[8%] w-52 h-52 bg-purple-700/40 rounded-full blur-3xl animate-float-vertical opacity-95" style={{ animationDelay: '12s', animationDuration: '16s' }}></div>
      
      {/* Additional Large Orbs for More Coverage */}
      <div className="absolute top-[35%] left-[2%] w-48 h-48 bg-violet-600/35 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
      <div className="absolute top-[50%] right-[3%] w-44 h-44 bg-purple-600/38 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '9s', animationDuration: '19s' }}></div>
      <div className="absolute bottom-[40%] left-[85%] w-40 h-40 bg-indigo-500/42 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '21s', animationDuration: '17s' }}></div>
      
      {/* Medium Orbs - More Distributed */}
      <div className="absolute top-[18%] left-[15%] w-40 h-40 bg-indigo-500/50 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[25%] right-[18%] w-36 h-36 bg-purple-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
      <div className="absolute top-[65%] right-[25%] w-32 h-32 bg-violet-600/48 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '5s', animationDuration: '15s' }}></div>
      <div className="absolute top-[5%] right-[40%] w-28 h-28 bg-indigo-600/43 rounded-full blur-2xl animate-float-vertical opacity-90" style={{ animationDelay: '8s', animationDuration: '21s' }}></div>
      <div className="absolute top-[45%] left-[20%] w-34 h-34 bg-purple-600/40 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '11s', animationDuration: '16s' }}></div>
      <div className="absolute bottom-[35%] right-[35%] w-30 h-30 bg-violet-500/45 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '13s', animationDuration: '18s' }}></div>
      <div className="absolute top-[75%] left-[45%] w-26 h-26 bg-indigo-500/48 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '17s', animationDuration: '20s' }}></div>
      
      {/* Small Corner Orbs - Enhanced Coverage */}
      <div className="absolute top-[5%] left-[8%] w-24 h-24 bg-purple-500/48 rounded-full blur-xl animate-float-vertical opacity-70" style={{ animationDelay: '1s', animationDuration: '11s' }}></div>
      <div className="absolute top-[75%] right-[12%] w-26 h-26 bg-blue-400/52 rounded-full blur-xl animate-float-vertical opacity-85" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      <div className="absolute bottom-[12%] left-[18%] w-22 h-22 bg-violet-600/45 rounded-full blur-xl animate-float-vertical opacity-65" style={{ animationDelay: '10s', animationDuration: '9s' }}></div>
      <div className="absolute top-[80%] left-[20%] w-18 h-18 bg-indigo-500/50 rounded-full blur-lg animate-float-vertical opacity-75" style={{ animationDelay: '14s', animationDuration: '8s' }}></div>
      <div className="absolute top-[25%] right-[8%] w-20 h-20 bg-purple-600/45 rounded-full blur-xl animate-float-vertical opacity-80" style={{ animationDelay: '19s', animationDuration: '13s' }}></div>
      <div className="absolute bottom-[50%] left-[12%] w-16 h-16 bg-violet-500/50 rounded-full blur-lg animate-float-vertical opacity-70" style={{ animationDelay: '22s', animationDuration: '10s' }}></div>
      
      {/* Extra Small Orbs for Depth */}
      <div className="absolute top-[35%] left-[45%] w-20 h-20 bg-purple-400/35 rounded-full blur-md animate-float-vertical opacity-55" style={{ animationDelay: '16s', animationDuration: '7s' }}></div>
      <div className="absolute top-[55%] right-[42%] w-18 h-18 bg-blue-400/38 rounded-full blur-md animate-float-vertical opacity-60" style={{ animationDelay: '18s', animationDuration: '6s' }}></div>
      <div className="absolute top-[20%] left-[70%] w-14 h-14 bg-violet-600/45 rounded-full blur-md animate-float-vertical opacity-65" style={{ animationDelay: '24s', animationDuration: '9s' }}></div>
      <div className="absolute bottom-[20%] right-[60%] w-12 h-12 bg-purple-500/50 rounded-full blur-sm animate-float-vertical opacity-70" style={{ animationDelay: '26s', animationDuration: '11s' }}></div>
      
      {/* Particle Dots - More Visible */}
      <div className="absolute top-[15%] left-[20%] w-4 h-4 bg-purple-700/60 rounded-full animate-float-vertical" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
      <div className="absolute top-[70%] right-[25%] w-3 h-3 bg-blue-600/65 rounded-full animate-float-vertical" style={{ animationDelay: '7s', animationDuration: '6s' }}></div>
      <div className="absolute bottom-[35%] left-[8%] w-2.5 h-2.5 bg-violet-700/55 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '5s' }}></div>
      <div className="absolute top-[90%] left-[30%] w-3.5 h-3.5 bg-purple-600/60 rounded-full animate-float-vertical" style={{ animationDelay: '20s', animationDuration: '7s' }}></div>
      <div className="absolute top-[40%] right-[10%] w-2 h-2 bg-indigo-700/55 rounded-full animate-float-vertical" style={{ animationDelay: '25s', animationDuration: '8s' }}></div>
      
      {/* Enhanced Curved Flow Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
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
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
