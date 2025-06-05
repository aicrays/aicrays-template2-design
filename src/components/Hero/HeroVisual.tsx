
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout, Database, Cpu, Globe, Settings } from "lucide-react";

const HeroVisual = () => {
  const modules = [
    {
      icon: Brain,
      position: "top-[8%] right-[20%]",
      delay: "0.5s",
    },
    {
      icon: Shield,
      position: "top-[5%] right-[45%]",
      delay: "0.7s",
    },
    {
      icon: BarChart3,
      position: "top-[25%] right-[15%]",
      delay: "0.9s",
    },
    {
      icon: Cloud,
      position: "top-[35%] right-[50%]",
      delay: "1.1s",
    },
    {
      icon: Wifi,
      position: "top-[20%] right-[70%]",
      delay: "1.3s",
    },
    {
      icon: Layout,
      position: "top-[50%] right-[25%]",
      delay: "1.5s",
    },
    {
      icon: Database,
      position: "top-[45%] right-[65%]",
      delay: "1.7s",
    },
    {
      icon: Cpu,
      position: "top-[65%] right-[15%]",
      delay: "1.9s",
    },
    {
      icon: Globe,
      position: "top-[70%] right-[45%]",
      delay: "2.1s",
    },
    {
      icon: Settings,
      position: "top-[80%] right-[30%]",
      delay: "2.3s",
    },
    {
      icon: Brain,
      position: "top-[85%] right-[60%]",
      delay: "2.5s",
    },
    {
      icon: Shield,
      position: "top-[60%] right-[75%]",
      delay: "2.7s",
    }
  ];

  return (
    <div className="w-full lg:w-1/2 relative flex items-center justify-center">
      <div className="relative h-[500px] lg:h-[600px] w-full overflow-visible">
        {/* Soft Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/20 via-transparent to-pulse-100/15 rounded-3xl"></div>
        
        {/* Floating Module Bubbles - Icons Only */}
        {modules.map((module, index) => (
          <div
            key={`${module.icon.name}-${index}`}
            className={`absolute ${module.position} opacity-0 animate-fade-in group cursor-pointer`}
            style={{ animationDelay: module.delay }}
          >
            {/* Module Bubble */}
            <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 animate-float border border-white/60 relative overflow-hidden"
                 style={{ 
                   animationDelay: `${index * 0.6}s`,
                   boxShadow: '0 8px 24px rgba(168, 85, 247, 0.12)'
                 }}>
              
              {/* Soft Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 to-purple-600/12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex items-center justify-center">
                {/* Icon Container */}
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <module.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Gentle Pulse Animation for Select Bubbles */}
              {(index === 0 || index === 5) && (
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-15 animate-pulse-slow pointer-events-none"
                  style={{ 
                    animationDelay: `${index * 0.8}s`,
                    background: `conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.2), transparent)`
                  }}
                ></div>
              )}

              {/* Hover Tilt Effect */}
              <div className="absolute inset-0 rounded-2xl group-hover:rotate-1 transition-transform duration-300"></div>
            </div>
          </div>
        ))}

        {/* Subtle Connection Lines Between Modules */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-4 overflow-visible">
          <defs>
            <linearGradient id="connection-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Gentle connection curves between related modules */}
          <path 
            d="M 150 60 Q 200 100 180 140" 
            stroke="url(#connection-line)" 
            strokeWidth="0.8" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M 200 200 Q 250 240 220 280" 
            stroke="url(#connection-line)" 
            strokeWidth="0.8" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '2.5s' }}
          />
          <path 
            d="M 120 350 Q 180 380 160 420" 
            stroke="url(#connection-line)" 
            strokeWidth="0.8" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '4s' }}
          />
        </svg>

        {/* Ambient Floating Particles */}
        <div className="absolute top-[15%] right-[8%] w-1 h-1 bg-purple-400/40 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[40%] right-[85%] w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-[25%] right-[5%] w-1 h-1 bg-purple-600/35 rounded-full animate-float opacity-45" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[75%] right-[90%] w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default HeroVisual;
