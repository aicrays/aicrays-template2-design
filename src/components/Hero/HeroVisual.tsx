
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const HeroVisual = () => {
  const components = [
    {
      icon: Brain,
      title: "AI/ML",
      subtitle: "Intelligence",
      position: "top-4 left-8",
      size: "w-16 h-16",
      delay: "1.2s",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Security",
      subtitle: "Protection",
      position: "top-1/3 right-4",
      size: "w-14 h-14",
      delay: "1.4s",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Wifi,
      title: "IoT",
      subtitle: "Connectivity",
      position: "bottom-1/3 left-4",
      size: "w-12 h-12",
      delay: "1.6s",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Data",
      subtitle: "Analytics",
      position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      size: "w-18 h-18",
      delay: "1.8s",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud",
      subtitle: "DevOps",
      position: "bottom-4 right-8",
      size: "w-14 h-14",
      delay: "2.0s",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Layout,
      title: "UX",
      subtitle: "Systems",
      position: "top-2/3 right-1/3",
      size: "w-12 h-12",
      delay: "2.2s",
      gradient: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <div className="w-full lg:w-1/2 relative">
      <div 
        className="relative h-96 lg:h-[500px] opacity-0 animate-fade-in" 
        style={{ animationDelay: "1.0s" }}
      >
        {/* Central Connection Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-pulse-400 to-pulse-600 rounded-full animate-pulse opacity-60"></div>
        
        {/* Floating Modular Components */}
        {components.map((component, index) => (
          <div
            key={component.title}
            className={`absolute ${component.position} group cursor-pointer opacity-0 animate-fade-in`}
            style={{ animationDelay: component.delay }}
          >
            {/* Connection Line to Center */}
            <svg 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ width: '400px', height: '400px', zIndex: -1 }}
            >
              <line 
                x1="200" 
                y1="200" 
                x2="200" 
                y2="200" 
                stroke="url(#gradient)" 
                strokeWidth="1" 
                className="animate-pulse-slow"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Component */}
            <div className={`${component.size} bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-float border border-white/40 group`}
                 style={{ animationDelay: `${index * 0.5}s` }}>
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-10 group-hover:opacity-20 transition-opacity rounded-2xl`}></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${component.gradient} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-md`}>
                  <component.icon className="w-4 h-4 text-white" />
                </div>
                
                <div className="text-center">
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {component.title}
                  </h4>
                  <p className="text-xs text-gray-600 group-hover:text-purple-600 transition-colors font-medium">
                    {component.subtitle}
                  </p>
                </div>
              </div>

              {/* Hover Tooltip */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {component.title} {component.subtitle}
              </div>
            </div>
          </div>
        ))}

        {/* Orbital Animation Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="url(#orbital)"
              strokeWidth="1"
              strokeDasharray="5,5"
              className="animate-pulse-slow"
            />
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#orbital)"
              strokeWidth="0.5"
              strokeDasharray="3,3"
              className="animate-pulse-slow"
              style={{ animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="orbital" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
