
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
        return "bg-green-100 text-green-700 border-green-200";
      case "MVP":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-purple-50/20 to-violet-50/30 relative overflow-hidden" id="case-studies">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/8 via-violet-400/6 to-blue-400/10 animate-gradient-shift"></div>
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-[15%] right-[10%] w-28 h-28 bg-purple-200/12 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '0s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[20%] left-[15%] w-36 h-36 bg-violet-300/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '3s', animationDuration: '12s' }}></div>
        <div className="absolute top-[50%] left-[5%] w-20 h-20 bg-blue-200/8 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
        
        {/* Micro Particles */}
        <div className="absolute top-[30%] left-[30%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse opacity-25"></div>
        <div className="absolute bottom-[35%] right-[35%] w-1 h-1 bg-violet-500 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
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
                      <Badge variant="outline" className="text-xs border-purple-200 text-purple-700 bg-purple-50/50">
                        {solution.industry}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(solution.status)}`}>
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
