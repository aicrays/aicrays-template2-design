
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced base gradient background with more color */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-100/60 to-violet-100/70"></div>
      
      {/* Multiple colorful gradient overlays for more pop */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 via-violet-500/12 to-blue-500/18 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/12 via-pink-400/8 to-violet-500/10 animate-gradient-shift" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/10 via-purple-300/8 to-blue-400/12 animate-gradient-shift" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
      
      {/* Large floating orbs - much darker and more colorful */}
      <div className="absolute top-[12%] left-[8%] w-48 h-48 bg-purple-400/45 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '0s', animationDuration: '22s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-56 h-56 bg-violet-500/40 rounded-full blur-3xl animate-float-vertical opacity-75" style={{ animationDelay: '6s', animationDuration: '26s' }}></div>
      <div className="absolute bottom-[25%] left-[12%] w-44 h-44 bg-indigo-400/50 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '3s', animationDuration: '20s' }}></div>
      <div className="absolute top-[35%] right-[8%] w-52 h-52 bg-pink-400/35 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '9s', animationDuration: '24s' }}></div>
      <div className="absolute bottom-[15%] right-[15%] w-40 h-40 bg-violet-400/48 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '12s', animationDuration: '18s' }}></div>
      <div className="absolute top-[65%] right-[25%] w-36 h-36 bg-purple-500/42 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '15s', animationDuration: '28s' }}></div>
      
      {/* Medium floating orbs with enhanced visibility and more colors */}
      <div className="absolute top-[25%] left-[25%] w-32 h-32 bg-indigo-400/55 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
      <div className="absolute bottom-[40%] right-[30%] w-28 h-28 bg-violet-400/50 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
      <div className="absolute top-[50%] left-[20%] w-30 h-30 bg-pink-300/58 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '11s', animationDuration: '14s' }}></div>
      <div className="absolute top-[70%] right-[40%] w-26 h-26 bg-purple-500/54 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '5s', animationDuration: '17s' }}></div>
      <div className="absolute bottom-[30%] left-[35%] w-34 h-34 bg-indigo-500/48 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '13s', animationDuration: '21s' }}></div>
      <div className="absolute top-[15%] right-[55%] w-24 h-24 bg-violet-500/56 rounded-full blur-2xl animate-float-vertical opacity-85" style={{ animationDelay: '8s', animationDuration: '15s' }}></div>
      
      {/* Small floating orbs positioned away from center text area with better visibility */}
      <div className="absolute top-[10%] left-[15%] w-20 h-20 bg-purple-400/50 rounded-full blur-xl animate-float-vertical opacity-60" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
      <div className="absolute top-[80%] right-[20%] w-22 h-22 bg-violet-300/55 rounded-full blur-xl animate-float-vertical opacity-75" style={{ animationDelay: '4s', animationDuration: '13s' }}></div>
      <div className="absolute bottom-[20%] left-[25%] w-18 h-18 bg-indigo-500/48 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '10s', animationDuration: '11s' }}></div>
      <div className="absolute top-[40%] right-[15%] w-16 h-16 bg-pink-400/52 rounded-full blur-lg animate-float-vertical opacity-70" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[35%] right-[45%] w-14 h-14 bg-violet-400/50 rounded-full blur-lg animate-float-vertical opacity-65" style={{ animationDelay: '14s', animationDuration: '10s' }}></div>
      
      {/* Extra small orbs for depth with enhanced visibility */}
      <div className="absolute top-[30%] left-[10%] w-12 h-12 bg-purple-600/45 rounded-full blur-md animate-float-vertical opacity-50" style={{ animationDelay: '16s', animationDuration: '9s' }}></div>
      <div className="absolute top-[85%] left-[30%] w-10 h-10 bg-indigo-400/50 rounded-full blur-md animate-float-vertical opacity-60" style={{ animationDelay: '18s', animationDuration: '8s' }}></div>
      <div className="absolute bottom-[10%] right-[35%] w-8 h-8 bg-violet-500/55 rounded-full blur-sm animate-float-vertical opacity-55" style={{ animationDelay: '20s', animationDuration: '7s' }}></div>
      
      {/* Particle dots with better visibility */}
      <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-purple-600/60 rounded-full animate-float-vertical" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
      <div className="absolute top-[75%] right-[35%] w-2.5 h-2.5 bg-violet-600/65 rounded-full animate-float-vertical" style={{ animationDelay: '7s', animationDuration: '8s' }}></div>
      <div className="absolute top-[55%] left-[15%] w-4 h-4 bg-purple-500/55 rounded-full animate-float-vertical" style={{ animationDelay: '12s', animationDuration: '5s' }}></div>
      <div className="absolute bottom-[45%] right-[20%] w-2 h-2 bg-indigo-600/60 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '7s' }}></div>
      
      {/* Enhanced Curved Flow Lines with More Colorful Gradients */}
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
            <stop offset="0%" stopColor="#8f4bea" stopOpacity="0" />
            <stop offset="50%" stopColor="#8f4bea" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8f4bea" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c46cff" stopOpacity="0" />
            <stop offset="50%" stopColor="#c46cff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#c46cff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
