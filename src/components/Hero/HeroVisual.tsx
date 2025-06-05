
import React from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const HeroVisual = () => {
  const components = [
    {
      icon: Brain,
      title: "AI/ML Intelligence",
      benefit: "Automated decisioning and forecasting",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      benefit: "Enterprise-grade threat protection",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Wifi,
      title: "IoT/RFID Systems",
      benefit: "Real-time operational visibility",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      benefit: "Insights from real-time dashboards",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      benefit: "Scalable infrastructure deployment",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Layout,
      title: "UX Systems",
      benefit: "Human-centered design interfaces",
      gradient: "from-purple-400 to-purple-500"
    }
  ];

  const handleCTAClick = () => {
    const solutionsSection = document.getElementById('solutions');
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full lg:w-1/2 relative">
      <div 
        className="relative z-10 opacity-0 animate-fade-in" 
        style={{ animationDelay: "1.2s" }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* 2x3 Modular Components Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-4xl">
          {components.map((component, index) => (
            <div
              key={component.title}
              className={`group glass-card p-4 lg:p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] relative overflow-hidden opacity-0 animate-fade-in`}
              style={{ animationDelay: `${1.4 + index * 0.1}s` }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-purple-50/20 group-hover:to-purple-100/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${component.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <component.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
                </div>
                
                <h3 className="text-sm lg:text-base font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                  {component.title}
                </h3>
                
                <p className="text-xs lg:text-sm text-gray-600 mb-3 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {component.benefit}
                </p>
                
                {/* CTA Link */}
                <button
                  onClick={handleCTAClick}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="text-xs font-medium text-purple-600 hover:text-purple-700 transition-colors flex items-center">
                    Explore This →
                  </div>
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors group"
          >
            <span className="text-sm font-medium mr-2">See How We Build These</span>
            <div className="w-5 h-5 rounded-full border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-600 transition-colors">
              <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-600 transition-colors animate-pulse"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
