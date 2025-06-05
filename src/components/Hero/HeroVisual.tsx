
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const HeroVisual = () => {
  const components = [
    {
      icon: Brain,
      title: "AI/ML",
      subtitle: "Predictive Intelligence",
      position: "top-[15%] left-[65%]",
      size: "w-20 h-20", // Large
      delay: "1.2s",
      gradient: "from-purple-500 to-purple-600",
      orbitDelay: "0s"
    },
    {
      icon: Shield,
      title: "Security",
      subtitle: "Advanced Protection",
      position: "top-[8%] right-[8%]",
      size: "w-18 h-18", // Medium-large
      delay: "1.4s",
      gradient: "from-purple-600 to-purple-700",
      orbitDelay: "1s"
    },
    {
      icon: BarChart3,
      title: "Data",
      subtitle: "Real-time Analytics",
      position: "top-[45%] right-[5%]",
      size: "w-16 h-16", // Medium
      delay: "1.6s",
      gradient: "from-purple-500 to-purple-600",
      orbitDelay: "2s"
    },
    {
      icon: Cloud,
      title: "Cloud",
      subtitle: "Scalable DevOps",
      position: "bottom-[15%] right-[25%]",
      size: "w-18 h-18", // Medium-large
      delay: "1.8s",
      gradient: "from-purple-600 to-purple-700",
      orbitDelay: "3s"
    },
    {
      icon: Wifi,
      title: "IoT",
      subtitle: "Connected Systems",
      position: "bottom-[25%] left-[50%]",
      size: "w-14 h-14", // Small-medium
      delay: "2.0s",
      gradient: "from-purple-400 to-purple-500",
      orbitDelay: "4s"
    },
    {
      icon: Layout,
      title: "UX",
      subtitle: "Adaptive Interfaces",
      position: "top-[30%] left-[80%]",
      size: "w-14 h-14", // Small-medium
      delay: "2.2s",
      gradient: "from-purple-400 to-purple-500",
      orbitDelay: "5s"
    }
  ];

  return (
    <div className="w-full lg:w-1/2 relative">
      <div 
        className="relative h-96 lg:h-[500px] opacity-0 animate-fade-in overflow-visible" 
        style={{ animationDelay: "1.0s" }}
      >
        {/* Central Intelligence Core - Invisible Guide */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-pulse-400/30 to-pulse-600/30 rounded-full animate-pulse opacity-40"></div>
        
        {/* Orbital Ring Guides */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="100"
              fill="none"
              stroke="url(#orbital-inner)"
              strokeWidth="1"
              strokeDasharray="8,8"
              className="animate-pulse-slow"
            />
            <circle
              cx="200"
              cy="200"
              r="160"
              fill="none"
              stroke="url(#orbital-outer)"
              strokeWidth="0.5"
              strokeDasharray="4,6"
              className="animate-pulse-slow"
              style={{ animationDelay: '2s' }}
            />
            <defs>
              <linearGradient id="orbital-inner" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="orbital-outer" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/20 via-transparent to-pulse-100/10 rounded-3xl"></div>
        
        {/* Floating Modular Components */}
        {components.map((component, index) => (
          <div
            key={component.title}
            className={`absolute ${component.position} group cursor-pointer opacity-0 animate-fade-in`}
            style={{ animationDelay: component.delay }}
          >
            {/* Floating Component */}
            <div className={`${component.size} bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-3 animate-float border border-white/50 group relative overflow-hidden`}
                 style={{ 
                   animationDelay: `${index * 0.8}s`,
                   boxShadow: '0 8px 32px rgba(168, 85, 247, 0.1)'
                 }}>
              
              {/* Orbital Motion */}
              <div 
                className="absolute inset-0 animate-pulse-slow rounded-2xl"
                style={{ 
                  animationDelay: component.orbitDelay,
                  background: `linear-gradient(135deg, ${component.gradient.split(' ')[1]}/5, ${component.gradient.split(' ')[3]}/10)`
                }}
              ></div>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-sm`}></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${component.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <component.icon className="w-5 h-5 text-white" />
                </div>
                
                <div className="text-center">
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {component.title}
                  </h4>
                  <p className="text-xs text-gray-600 group-hover:text-purple-600 transition-colors font-medium mt-1">
                    {component.subtitle}
                  </p>
                </div>
              </div>

              {/* Enhanced Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
                <div className="font-semibold">{component.title}</div>
                <div className="text-gray-300">{component.subtitle}</div>
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
              </div>

              {/* Gentle Orbit Animation */}
              <div 
                className="absolute -inset-2 rounded-3xl opacity-20 animate-pulse-slow pointer-events-none"
                style={{ 
                  animationDelay: component.orbitDelay,
                  background: `conic-gradient(from 0deg, transparent, ${component.gradient.split(' ')[1]}/20, transparent)`
                }}
              ></div>
            </div>
          </div>
        ))}

        {/* Connection Lines Between Related Components */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 overflow-visible">
          <defs>
            <linearGradient id="connection" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Subtle connection lines between related components */}
          <path 
            d="M 280 100 Q 350 150 320 200" 
            stroke="url(#connection)" 
            strokeWidth="1" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M 200 180 Q 280 220 250 280" 
            stroke="url(#connection)" 
            strokeWidth="1" 
            fill="none" 
            className="animate-pulse-slow"
            style={{ animationDelay: '3s' }}
          />
        </svg>

        {/* Ambient Particles */}
        <div className="absolute top-[10%] right-[15%] w-1 h-1 bg-purple-400/40 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] left-[70%] w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[40%] right-[10%] w-1 h-1 bg-purple-600/35 rounded-full animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default HeroVisual;
