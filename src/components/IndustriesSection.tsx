
import React, { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, Factory, ShoppingCart, Truck, Heart, Zap, Shield, Database, Cpu, Globe } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Building2,
      title: "Manufacturing",
      description: "Smart production systems with AI-driven quality control and predictive maintenance.",
      badge: "Active Deployments",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Inventory optimization and customer analytics platforms for enhanced shopping experiences.",
      badge: "Growing Sector",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Real-time tracking and route optimization with IoT integration for fleet management.",
      badge: "High Demand",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant patient care platforms with secure data management and workflow automation.",
      badge: "Mission Critical",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Factory,
      title: "Energy & Utilities",
      description: "Smart grid solutions and consumption analytics for sustainable energy management.",
      badge: "Emerging Tech",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat detection and response systems with real-time monitoring capabilities.",
      badge: "High Priority",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: Database,
      title: "Financial Services",
      description: "Secure transaction processing and fraud detection with compliance automation.",
      badge: "Regulated Industry",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Agriculture",
      description: "IoT-enabled crop monitoring and precision farming solutions for sustainable agriculture.",
      badge: "Innovation Hub",
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            industries.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 50);
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
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40" id="industries">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[20%] left-[8%] w-40 h-40 bg-violet-400/15 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '8s', animationDuration: '25s' }}></div>
        <div className="absolute top-[60%] right-[25%] w-28 h-28 bg-purple-400/25 rounded-full blur-2xl animate-float-vertical opacity-55" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        <div className="absolute top-[30%] left-[15%] w-24 h-24 bg-indigo-300/20 rounded-full blur-2xl animate-float-vertical opacity-65" style={{ animationDelay: '12s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[40%] right-[15%] w-36 h-36 bg-violet-300/18 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '6s', animationDuration: '24s' }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 mr-3"></span>
            <span>Trusted Across Sectors</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Industries We Serve
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-4xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            From manufacturing floors to healthcare facilities, our AI-powered platforms adapt to your industry's unique challenges.
          </p>
        </div>

        {/* Industries List - Removed Grid Layout */}
        <div className="space-y-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Industry Card */}
              <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden flex items-center gap-8">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                  <industry.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                
                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {industry.title}
                    </h3>
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 transition-colors"
                    >
                      {industry.badge}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {industry.description}
                  </p>
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
          <p className="text-gray-600 mb-6 text-lg">Ready to transform your industry with custom AI solutions?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 hover:scale-105 font-medium"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
