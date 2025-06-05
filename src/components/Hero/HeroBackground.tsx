
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background consistent with website */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/40 to-violet-50/50"></div>
      
      {/* Hero-specific enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-violet-400/6 to-blue-400/10 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/6 via-transparent to-violet-500/4 animate-gradient-shift" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
      
      {/* Large floating orbs - hero specific with enhanced visibility */}
      <div className="absolute top-[12%] left-[8%] w-48 h-48 bg-purple-300/18 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '0s', animationDuration: '22s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-56 h-56 bg-violet-400/15 rounded-full blur-3xl animate-float-vertical opacity-55" style={{ animationDelay: '6s', animationDuration: '26s' }}></div>
      <div className="absolute bottom-[25%] left-[12%] w-44 h-44 bg-indigo-300/20 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '3s', animationDuration: '20s' }}></div>
      <div className="absolute top-[35%] right-[8%] w-52 h-52 bg-purple-200/16 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '9s', animationDuration: '24s' }}></div>
      <div className="absolute bottom-[15%] right-[15%] w-40 h-40 bg-violet-300/22 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '12s', animationDuration: '18s' }}></div>
      <div className="absolute top-[65%] right-[25%] w-36 h-36 bg-purple-400/17 rounded-full blur-3xl animate-float-vertical opacity-45" style={{ animationDelay: '15s', animationDuration: '28s' }}></div>
      
      {/* Medium floating orbs */}
      <div className="absolute top-[25%] left-[25%] w-32 h-32 bg-indigo-300/25 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
      <div className="absolute bottom-[40%] right-[30%] w-28 h-28 bg-violet-300/23 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
      <div className="absolute top-[50%] left-[20%] w-30 h-30 bg-purple-200/28 rounded-full blur-2xl animate-float-vertical opacity-45" style={{ animationDelay: '11s', animationDuration: '14s' }}></div>
      <div className="absolute top-[70%] right-[40%] w-26 h-26 bg-purple-400/24 rounded-full blur-2xl animate-float-vertical opacity-60" style={{ animationDelay: '5s', animationDuration: '17s' }}></div>
      <div className="absolute bottom-[30%] left-[35%] w-34 h-34 bg-indigo-400/21 rounded-full blur-2xl animate-float-vertical opacity-40" style={{ animationDelay: '13s', animationDuration: '21s' }}></div>
      <div className="absolute top-[15%] right-[55%] w-24 h-24 bg-violet-400/26 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '8s', animationDuration: '15s' }}></div>
      
      {/* Small floating orbs positioned away from center text area */}
      <div className="absolute top-[10%] left-[15%] w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-float-vertical opacity-40" style={{ animationDelay: '1s', animationDuration: '12s' }}></div>
      <div className="absolute top-[80%] right-[20%] w-22 h-22 bg-violet-200/25 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '4s', animationDuration: '13s' }}></div>
      <div className="absolute bottom-[20%] left-[25%] w-18 h-18 bg-indigo-400/18 rounded-full blur-xl animate-float-vertical opacity-35" style={{ animationDelay: '10s', animationDuration: '11s' }}></div>
      <div className="absolute top-[40%] right-[15%] w-16 h-16 bg-purple-400/22 rounded-full blur-lg animate-float-vertical opacity-50" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
      <div className="absolute bottom-[35%] right-[45%] w-14 h-14 bg-violet-300/20 rounded-full blur-lg animate-float-vertical opacity-45" style={{ animationDelay: '14s', animationDuration: '10s' }}></div>
      
      {/* Extra small orbs for depth */}
      <div className="absolute top-[30%] left-[10%] w-12 h-12 bg-purple-500/15 rounded-full blur-md animate-float-vertical opacity-30" style={{ animationDelay: '16s', animationDuration: '9s' }}></div>
      <div className="absolute top-[85%] left-[30%] w-10 h-10 bg-indigo-300/20 rounded-full blur-md animate-float-vertical opacity-40" style={{ animationDelay: '18s', animationDuration: '8s' }}></div>
      <div className="absolute bottom-[10%] right-[35%] w-8 h-8 bg-violet-400/25 rounded-full blur-sm animate-float-vertical opacity-35" style={{ animationDelay: '20s', animationDuration: '7s' }}></div>
      
      {/* Particle dots */}
      <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-purple-500/30 rounded-full animate-float-vertical" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
      <div className="absolute top-[75%] right-[35%] w-2.5 h-2.5 bg-violet-500/35 rounded-full animate-float-vertical" style={{ animationDelay: '7s', animationDuration: '8s' }}></div>
      <div className="absolute top-[55%] left-[15%] w-4 h-4 bg-purple-400/25 rounded-full animate-float-vertical" style={{ animationDelay: '12s', animationDuration: '5s' }}></div>
      <div className="absolute bottom-[45%] right-[20%] w-2 h-2 bg-indigo-500/30 rounded-full animate-float-vertical" style={{ animationDelay: '15s', animationDuration: '7s' }}></div>
      
      {/* Enhanced Curved Flow Lines with Gradient Animation */}
      <svg className="absolute inset-0 w-full h-full opacity-6" viewBox="0 0 1200 800">
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
            <stop offset="50%" stopColor="#8f4bea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#8f4bea" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c46cff" stopOpacity="0" />
            <stop offset="50%" stopColor="#c46cff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#c46cff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroBackground;
