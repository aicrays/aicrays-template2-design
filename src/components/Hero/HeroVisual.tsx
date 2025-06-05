
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
        
        {/* Floating Module Bubbles - Enlarged */}
        {modules.map((module, index) => (
          <div
            key={`${module.icon.name}-${index}`}
            className={`absolute ${module.position} opacity-0 animate-fade-in group cursor-pointer`}
            style={{ animationDelay: module.delay }}
          >
            {/* Module Bubble - 25% larger */}
            <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 animate-float border border-white/60 relative overflow-hidden"
                 style={{ 
                   animationDelay: `${index * 0.6}s`,
                   boxShadow: '0 12px 32px rgba(168, 85, 247, 0.15), 0 4px 12px rgba(168, 85, 247, 0.08)'
                 }}>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex items-center justify-center">
                {/* Icon Container - Enlarged */}
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <module.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Enhanced Pulse Animation for Select Bubbles */}
              {(index === 0 || index === 5 || index === 9) && (
                <div 
                  className="absolute -inset-2 rounded-2xl opacity-20 animate-pulse-slow pointer-events-none"
                  style={{ 
                    animationDelay: `${index * 0.8}s`,
                    background: `conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.3), transparent)`
                  }}
                ></div>
              )}

              {/* Hover Tilt Effect */}
              <div className="absolute inset-0 rounded-2xl group-hover:rotate-1 transition-transform duration-300"></div>
            </div>
          </div>
        ))}

        {/* Enhanced Connection Lines Between Modules */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-6 overflow-visible">
          <defs>
            <linearGradient id="connection-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* More visible connection curves */}
          <path 
            d="M 150 60 Q 200 100 180 140" 
            stroke="url(#connection-line)" 
            strokeWidth="1.2" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M 200 200 Q 250 240 220 280" 
            stroke="url(#connection-line)" 
            strokeWidth="1.2" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '2.5s' }}
          />
          <path 
            d="M 120 350 Q 180 380 160 420" 
            stroke="url(#connection-line)" 
            strokeWidth="1.2" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '4s' }}
          />
        </svg>

        {/* Enhanced Ambient Floating Particles */}
        <div className="absolute top-[15%] right-[8%] w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-float opacity-70" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[40%] right-[85%] w-2 h-2 bg-purple-500/40 rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-[25%] right-[5%] w-1.5 h-1.5 bg-purple-600/45 rounded-full animate-float opacity-55" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[75%] right-[90%] w-2 h-2 bg-blue-400/35 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default HeroVisual;
