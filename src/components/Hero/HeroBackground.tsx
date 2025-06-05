
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const HeroBackground = () => {
  const techIcons = [
    { icon: Brain, position: "top-1/4 right-1/4", delay: "0s", scale: "scale-100" },
    { icon: Shield, position: "top-1/2 right-1/6", delay: "2s", scale: "scale-90" },
    { icon: Wifi, position: "top-1/3 right-1/3", delay: "1s", scale: "scale-110" },
    { icon: BarChart3, position: "bottom-1/3 right-1/4", delay: "3s", scale: "scale-95" },
    { icon: Cloud, position: "bottom-1/4 right-1/6", delay: "1.5s", scale: "scale-105" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        {/* Left side - Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pulse-50/30 to-pulse-100/20"></div>
        
        {/* Right side - Diagonal glowing section */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-pulse-200/20 to-pulse-300/30"
          style={{
            clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 40% 100%)'
          }}
        ></div>
        
        {/* Enhanced diagonal glow overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-pulse-400/10 to-purple-500/15"
          style={{
            clipPath: 'polygon(65% 0%, 100% 0%, 100% 100%, 35% 100%)'
          }}
        ></div>
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.scale} opacity-60 animate-float z-10`}
          style={{ animationDelay: item.delay, animationDuration: '6s' }}
        >
          <div className="relative w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pulse-200/30 flex items-center justify-center group hover:scale-110 transition-all duration-300">
            <item.icon className="w-8 h-8 text-pulse-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-pulse-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-pulse-500/20 rounded-2xl blur-xl -z-10 opacity-50"></div>
          </div>
        </div>
      ))}

      {/* Ambient Particles */}
      <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-pulse-400/60 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 right-1/8 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-pulse-500/40 rounded-full animate-pulse opacity-35" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse opacity-25" style={{ animationDelay: '3s' }}></div>

      {/* Subtle connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
        <path 
          d="M800,200 Q1000,300 900,500" 
          stroke="url(#connectionGradient)" 
          strokeWidth="1" 
          fill="none"
          className="animate-pulse-slow"
        />
        <path 
          d="M900,150 Q1100,250 950,400" 
          stroke="url(#connectionGradient)" 
          strokeWidth="0.8" 
          fill="none"
          className="animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Ambient glow spots */}
      <div className="absolute top-1/6 right-1/5 w-32 h-32 bg-pulse-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-300/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default HeroBackground;
