
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const HeroVisual = () => {
  const modules = [
    {
      icon: Brain,
      title: "AI/ML",
      subtitle: "Automation",
      position: "top-[15%] right-[25%]",
      delay: "0.5s",
    },
    {
      icon: Shield,
      title: "Security",
      subtitle: "Protection",
      position: "top-[8%] right-[50%]",
      delay: "0.7s",
    },
    {
      icon: BarChart3,
      title: "Data",
      subtitle: "Analytics",
      position: "top-[40%] right-[15%]",
      delay: "0.9s",
    },
    {
      icon: Cloud,
      title: "Cloud",
      subtitle: "DevOps",
      position: "bottom-[30%] right-[40%]",
      delay: "1.1s",
    },
    {
      icon: Wifi,
      title: "IoT",
      subtitle: "Connected",
      position: "bottom-[15%] right-[60%]",
      delay: "1.3s",
    },
    {
      icon: Layout,
      title: "UX",
      subtitle: "Interface",
      position: "top-[65%] right-[25%]",
      delay: "1.5s",
    }
  ];

  return (
    <div className="w-full lg:w-1/2 relative">
      <div className="relative h-96 lg:h-[500px] overflow-visible">
        {/* Soft Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/30 via-transparent to-pulse-100/20 rounded-3xl"></div>
        
        {/* Floating Module Bubbles */}
        {modules.map((module, index) => (
          <div
            key={module.title}
            className={`absolute ${module.position} opacity-0 animate-fade-in group cursor-pointer`}
            style={{ animationDelay: module.delay }}
          >
            {/* Module Bubble */}
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-float border border-white/50 relative overflow-hidden"
                 style={{ 
                   animationDelay: `${index * 0.8}s`,
                   boxShadow: '0 8px 32px rgba(168, 85, 247, 0.15)'
                 }}>
              
              {/* Soft Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-3">
                {/* Icon Container */}
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <module.icon className="w-4 h-4 text-white" />
                </div>
                
                {/* Text Content */}
                <div className="text-center">
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                    {module.title}
                  </h4>
                  <p className="text-[10px] text-gray-600 group-hover:text-purple-600 transition-colors font-medium">
                    {module.subtitle}
                  </p>
                </div>
              </div>

              {/* Enhanced Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-xs py-1.5 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/10 z-20">
                <div className="font-semibold">{module.title}</div>
                <div className="text-gray-300 text-[10px]">{module.subtitle}</div>
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
              </div>

              {/* Gentle Pulse Animation */}
              <div 
                className="absolute -inset-1 rounded-2xl opacity-20 animate-pulse-slow pointer-events-none"
                style={{ 
                  animationDelay: `${index * 0.5}s`,
                  background: `conic-gradient(from 0deg, transparent, rgba(168, 85, 247, 0.1), transparent)`
                }}
              ></div>
            </div>
          </div>
        ))}

        {/* Subtle Connection Lines Between Modules */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5 overflow-visible">
          <defs>
            <linearGradient id="connection-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Gentle connection curves between related modules */}
          <path 
            d="M 200 80 Q 250 120 180 160" 
            stroke="url(#connection-line)" 
            strokeWidth="0.5" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M 160 200 Q 220 240 180 280" 
            stroke="url(#connection-line)" 
            strokeWidth="0.5" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '2s' }}
          />
        </svg>

        {/* Ambient Floating Particles */}
        <div className="absolute top-[20%] right-[10%] w-1 h-1 bg-purple-400/40 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[70%] right-[80%] w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[40%] right-[5%] w-1 h-1 bg-purple-600/35 rounded-full animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default HeroVisual;
