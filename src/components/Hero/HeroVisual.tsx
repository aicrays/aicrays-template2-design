
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Brain, Shield, Wifi, BarChart3, Cloud } from "lucide-react";

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
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Wifi,
      title: "IoT/RFID Systems",
      benefit: "Real-time operational visibility",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      benefit: "Insights from real-time dashboards",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      benefit: "Scalable infrastructure deployment",
      gradient: "from-indigo-500 to-indigo-600"
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
        style={{ animationDelay: "1.5s" }}
      >
        {/* Enhanced Carousel Container */}
        <div className="relative transition-all duration-700 ease-out overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-pulse-500 to-pulse-700 p-6 lg:p-8 hover:shadow-3xl hover:scale-[1.02] transform">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-pulse-400/20 to-pulse-600/20 rounded-3xl blur-xl animate-pulse-slow"></div>
          
          {/* Carousel Implementation */}
          <div className="relative z-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {components.map((component, index) => (
                  <CarouselItem key={component.title}>
                    <div className="p-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group min-h-[280px] flex flex-col justify-center items-center text-center">
                        {/* Icon */}
                        <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${component.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 mb-6`}>
                          <component.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:animate-pulse" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-pulse-100 transition-colors">
                          {component.title}
                        </h3>
                        
                        {/* Benefit */}
                        <p className="text-lg text-white/90 mb-6 leading-relaxed group-hover:text-white transition-colors">
                          {component.benefit}
                        </p>
                        
                        {/* CTA Button */}
                        <button
                          onClick={handleCTAClick}
                          className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-pulse-700 bg-white/90 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 group-hover:translate-y-[-2px]"
                        >
                          See How We Use This →
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation Arrows */}
              <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white shadow-lg" />
              <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white shadow-lg" />
            </Carousel>
            
            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {components.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-white/40 rounded-full transition-all duration-300 hover:bg-white/70"
                ></div>
              ))}
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
