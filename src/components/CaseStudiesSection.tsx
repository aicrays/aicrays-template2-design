import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, Factory, ShoppingCart, Truck, Heart, Zap } from "lucide-react";

const CaseStudiesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Resource Planning",
      description: "Unified dashboard for multi-location manufacturing operations with real-time analytics and predictive maintenance.",
      industry: "Manufacturing",
      status: "Live",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Smart Retail Analytics",
      description: "AI-powered inventory management and customer behavior analysis platform for retail chains.",
      industry: "Retail",
      status: "Live",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Truck,
      title: "Fleet Management System",
      description: "IoT-enabled logistics platform with route optimization and real-time vehicle tracking capabilities.",
      industry: "Logistics",
      status: "MVP",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: Heart,
      title: "Patient Care Coordination",
      description: "HIPAA-compliant platform connecting care teams with automated workflow management and reporting.",
      industry: "Healthcare",
      status: "Live",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Factory,
      title: "Production Line Intelligence",
      description: "Real-time monitoring and quality control system with machine learning-based anomaly detection.",
      industry: "Manufacturing",
      status: "In Progress",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Zap,
      title: "Energy Management Portal",
      description: "Smart grid integration platform with consumption analytics and automated cost optimization.",
      industry: "Energy",
      status: "MVP",
      gradient: "from-purple-400 to-purple-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      case "MVP":
        return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
      case "In Progress":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";
    }
  };

  const getIndustryColor = (industry: string) => {
    return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            solutions.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden" id="case-studies">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 mr-3"></span>
            <span>Live Deployments</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent leading-tight tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Built and Running
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-medium mb-6" style={{ animationDelay: "0.5s" }}>
            Explore the platforms we've already deployed—custom-built, scalable, and evolving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-2xl p-4 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <solution.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    
                    <div className="flex flex-col gap-1 items-end">
                      <Badge 
                        variant="outline" 
                        className={`text-xs transition-colors ${getIndustryColor(solution.industry)}`}
                      >
                        {solution.industry}
                      </Badge>
                      <Badge 
                        className={`text-xs transition-colors ${getStatusColor(solution.status)}`}
                      >
                        {solution.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-xs">
                      {solution.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <p className="text-gray-600 mb-3 text-base">Let's build your custom platform next.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 font-medium text-sm"
          >
            Talk to Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
