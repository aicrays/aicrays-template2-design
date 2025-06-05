
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
    // All industry badges use consistent purple theming
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-purple-50/30 via-violet-50/20 to-purple-50/40 relative overflow-hidden" id="case-studies">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs with vertical movement */}
        <div className="absolute top-[20%] right-[15%] w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '0s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[25%] left-[12%] w-48 h-48 bg-violet-400/15 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '5s', animationDuration: '20s' }}></div>
        <div className="absolute top-[50%] right-[8%] w-32 h-32 bg-purple-400/25 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[35%] left-[20%] w-28 h-28 bg-indigo-300/20 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '7s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[40%] right-[25%] w-36 h-36 bg-violet-300/18 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        <div className="absolute top-[15%] left-[50%] w-24 h-24 bg-purple-200/22 rounded-full blur-2xl animate-float-vertical opacity-45" style={{ animationDelay: '9s', animationDuration: '12s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[70%] left-[30%] w-20 h-20 bg-violet-400/20 rounded-full blur-xl animate-float-vertical opacity-50" style={{ animationDelay: '1s', animationDuration: '10s' }}></div>
        <div className="absolute top-[25%] right-[40%] w-18 h-18 bg-purple-300/18 rounded-full blur-xl animate-float-vertical opacity-55" style={{ animationDelay: '6s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[15%] right-[50%] w-22 h-22 bg-indigo-400/15 rounded-full blur-xl animate-float-vertical opacity-40" style={{ animationDelay: '4s', animationDuration: '17s' }}></div>
        
        {/* Additional orbs for depth */}
        <div className="absolute top-[60%] right-[70%] w-16 h-16 bg-violet-200/20 rounded-full blur-lg animate-float-vertical opacity-45" style={{ animationDelay: '8s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[50%] left-[5%] w-26 h-26 bg-purple-400/16 rounded-full blur-2xl animate-float-vertical opacity-50" style={{ animationDelay: '10s', animationDuration: '19s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-purple-500/50 rounded-full animate-float-vertical" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute top-[75%] right-[30%] w-2.5 h-2.5 bg-violet-500/45 rounded-full animate-float-vertical" style={{ animationDelay: '5s', animationDuration: '11s' }}></div>
        <div className="absolute top-[45%] right-[60%] w-4 h-4 bg-purple-400/40 rounded-full animate-float-vertical" style={{ animationDelay: '7s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-[30%] left-[65%] w-2 h-2 bg-indigo-500/35 rounded-full animate-float-vertical" style={{ animationDelay: '11s', animationDuration: '6s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 mr-3"></span>
            <span>Live Deployments</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Built and Running
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-4xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Explore the platforms we've already deployed—custom-built, scalable, and evolving.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              {/* Enhanced Glassmorphic Card */}
              <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Icon and Badges */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
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
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <p className="text-gray-600 mb-6 text-lg">Let's build your custom platform next.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 font-medium"
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
