
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingCart, Truck, Heart, Cog, Zap } from "lucide-react";

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
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      icon: Truck,
      title: "Fleet Management System",
      description: "IoT-enabled logistics platform with route optimization and real-time vehicle tracking capabilities.",
      industry: "Logistics",
      status: "MVP",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart,
      title: "Patient Care Coordination",
      description: "HIPAA-compliant platform connecting care teams with automated workflow management and reporting.",
      industry: "Healthcare",
      status: "Live",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cog,
      title: "Production Line Intelligence",
      description: "Real-time monitoring and quality control system with machine learning-based anomaly detection.",
      industry: "Manufacturing",
      status: "In Progress",
      gradient: "from-indigo-600 to-purple-700"
    },
    {
      icon: Zap,
      title: "Energy Management Portal",
      description: "Smart grid integration platform with consumption analytics and automated cost optimization.",
      industry: "Energy",
      status: "MVP",
      gradient: "from-purple-400 to-indigo-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      case "MVP":
        return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
      case "In Progress":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
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
              }, index * 150);
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
      {/* Background with Floating Orbs - matching hero style but slightly lighter */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient background - slightly lighter than hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/60 to-purple-100/70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-200/50 via-purple-100/40 to-transparent"></div>
        
        {/* Edge gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-transparent to-violet-300/35"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-200/30 via-transparent to-purple-300/35"></div>
        
        {/* Large floating orbs - matching hero animation with different positions */}
        <div className="absolute top-[12%] left-[8%] w-52 h-52 bg-purple-400/35 rounded-full blur-3xl animate-float-vertical opacity-85" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        <div className="absolute top-[25%] right-[10%] w-60 h-60 bg-violet-400/30 rounded-full blur-3xl animate-float-vertical opacity-80" style={{ animationDelay: '9s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-[30%] left-[15%] w-44 h-44 bg-indigo-500/40 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '6s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[18%] right-[18%] w-40 h-40 bg-purple-600/35 rounded-full blur-3xl animate-float-vertical opacity-90" style={{ animationDelay: '15s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[50%] left-[25%] w-32 h-32 bg-indigo-400/45 rounded-full blur-2xl animate-float-vertical opacity-75" style={{ animationDelay: '5s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[40%] right-[30%] w-28 h-28 bg-purple-400/40 rounded-full blur-2xl animate-float-vertical opacity-80" style={{ animationDelay: '10s', animationDuration: '19s' }}></div>
        <div className="absolute top-[70%] right-[40%] w-24 h-24 bg-violet-500/43 rounded-full blur-2xl animate-float-vertical opacity-70" style={{ animationDelay: '8s', animationDuration: '17s' }}></div>
        
        {/* Small orbs for depth */}
        <div className="absolute top-[35%] left-[65%] w-20 h-20 bg-purple-300/30 rounded-full blur-md animate-float-vertical opacity-50" style={{ animationDelay: '19s', animationDuration: '8s' }}></div>
        <div className="absolute top-[80%] right-[55%] w-16 h-16 bg-blue-300/33 rounded-full blur-md animate-float-vertical opacity-55" style={{ animationDelay: '21s', animationDuration: '7s' }}></div>
        <div className="absolute top-[20%] left-[80%] w-12 h-12 bg-violet-500/40 rounded-full blur-md animate-float-vertical opacity-60" style={{ animationDelay: '27s', animationDuration: '10s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto py-8" ref={sectionRef}>
        {/* Section Header - matching hero style */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 mr-3"></span>
            <span>Live Deployments</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Built and Running
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Explore the platforms we've already deployed—custom-built, scalable, and evolving.
          </p>
        </div>

        {/* Solutions Grid - matching hero visual style */}
        <div className="relative">
          {/* Desktop Layout - 3 columns */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {solutions.map((solution, index) => {
              return (
                <div
                  key={solution.title}
                  className={`group cursor-pointer transition-all duration-700 ${
                    visibleCards.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  {/* Card with glassmorphism - matching hero visual */}
                  <div className="relative backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header with icon and badges */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                          <solution.icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        
                        <div className="flex flex-col gap-2 items-end">
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
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                          {solution.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet Responsive Layout */}
          <div className="lg:hidden space-y-6 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`group cursor-pointer transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="relative backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                        <solution.icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      
                      <div className="flex flex-col gap-2 items-end">
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
                    
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - matching hero style */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.4s" }}>
          <p className="text-gray-600 mb-6 text-lg font-light">Let's build your custom platform next.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[280px] hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800"
          >
            <span className="relative z-10">Talk to Us</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
