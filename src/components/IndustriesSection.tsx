
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Factory, Heart, Truck, ShoppingBag, Building, Zap } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production line monitoring, quality control, and predictive maintenance systems that optimize efficiency.",
      examples: ["Real-time OEE tracking", "Automated quality inspection", "Predictive maintenance alerts"],
      gradient: "from-purple-500 via-purple-600 to-blue-600"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient care coordination, compliance management, and workflow automation for medical facilities.",
      examples: ["Patient flow optimization", "HIPAA-compliant data handling", "Automated reporting systems"],
      gradient: "from-purple-600 via-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Fleet management, route optimization, and supply chain visibility platforms for transport companies.",
      examples: ["Real-time vehicle tracking", "Route optimization algorithms", "Inventory management systems"],
      gradient: "from-blue-500 via-purple-500 to-purple-600"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Inventory management, customer analytics, and omnichannel experience platforms for retail operations.",
      examples: ["Smart inventory tracking", "Customer behavior analytics", "Multi-channel integration"],
      gradient: "from-purple-600 via-blue-600 to-purple-700"
    },
    {
      icon: Building,
      title: "Construction",
      description: "Project management, safety monitoring, and resource tracking systems for construction projects.",
      examples: ["Project timeline tracking", "Safety compliance monitoring", "Resource allocation optimization"],
      gradient: "from-blue-600 via-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Grid management, consumption analytics, and sustainability reporting for energy providers.",
      examples: ["Smart grid monitoring", "Energy consumption analytics", "Sustainability reporting"],
      gradient: "from-purple-500 via-blue-500 to-purple-600"
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
              }, index * 120);
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
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50/40 via-blue-50/30 to-purple-50/50" id="industries">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs with varied positioning */}
        <div className="absolute top-[8%] right-[12%] w-54 h-54 bg-gradient-to-br from-purple-400/40 to-blue-400/35 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '24s' }}></div>
        <div className="absolute bottom-[12%] left-[8%] w-62 h-62 bg-gradient-to-br from-blue-500/35 to-purple-500/40 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '8s', animationDuration: '28s' }}></div>
        <div className="absolute top-[55%] right-[35%] w-46 h-46 bg-gradient-to-br from-purple-500/45 to-blue-400/35 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '4s', animationDuration: '20s' }}></div>
        <div className="absolute top-[25%] left-[60%] w-48 h-48 bg-gradient-to-br from-blue-400/40 to-purple-400/35 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '12s', animationDuration: '26s' }}></div>
        
        {/* Medium orbs with enhanced blue variations */}
        <div className="absolute top-[35%] left-[15%] w-36 h-36 bg-gradient-to-br from-blue-400/45 to-purple-300/40 rounded-full blur-2xl animate-float opacity-65" style={{ animationDelay: '6s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[35%] right-[15%] w-40 h-40 bg-gradient-to-br from-purple-400/40 to-blue-500/35 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        <div className="absolute top-[70%] left-[35%] w-32 h-32 bg-gradient-to-br from-blue-300/40 to-purple-400/45 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '10s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[60%] right-[60%] w-34 h-34 bg-gradient-to-br from-purple-300/35 to-blue-400/40 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '14s', animationDuration: '19s' }}></div>
        
        {/* Small floating elements for depth */}
        <div className="absolute top-[20%] right-[50%] w-24 h-24 bg-gradient-to-br from-purple-500/40 to-blue-400/45 rounded-full blur-xl animate-float opacity-55" style={{ animationDelay: '7s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[25%] left-[70%] w-28 h-28 bg-gradient-to-br from-blue-400/45 to-purple-300/40 rounded-full blur-xl animate-float opacity-65" style={{ animationDelay: '9s', animationDuration: '17s' }}></div>
        <div className="absolute top-[80%] right-[75%] w-22 h-22 bg-gradient-to-br from-purple-400/35 to-blue-500/40 rounded-full blur-lg animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '21s' }}></div>
        <div className="absolute top-[45%] left-[85%] w-26 h-26 bg-gradient-to-br from-blue-300/40 to-purple-400/35 rounded-full blur-lg animate-float opacity-60" style={{ animationDelay: '11s', animationDuration: '14s' }}></div>
        
        {/* Enhanced particle system */}
        <div className="absolute top-[30%] left-[25%] w-4 h-4 bg-purple-600/70 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[65%] right-[25%] w-3.5 h-3.5 bg-blue-500/65 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-4.5 h-4.5 bg-purple-500/60 rounded-full animate-pulse" style={{ animationDelay: '11s' }}></div>
        <div className="absolute bottom-[40%] right-[70%] w-3 h-3 bg-blue-400/70 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[85%] left-[40%] w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '13s' }}></div>
        <div className="absolute top-[15%] right-[80%] w-2 h-2 bg-blue-300/65 rounded-full animate-pulse" style={{ animationDelay: '9s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></span>
            <span>Industries We Serve</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Proven Across Sectors
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-medium mb-6" style={{ animationDelay: "0.5s" }}>
            From manufacturing floors to hospital wards, our platforms adapt to your industry's unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
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
              <div className="relative backdrop-blur-xl bg-white/85 border border-white/50 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-3 overflow-hidden h-full flex flex-col group-hover:scale-[1.02]">
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-purple-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Inner shimmer layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-purple-400/8 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Enhanced 3D icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden mb-4`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div>
                    <industry.icon className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm mb-4">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2">
                      {industry.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/40 via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.0s" }}>
          <p className="text-gray-600 mb-4 text-base">Don't see your industry? We adapt to any sector.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 font-medium text-sm"
          >
            Discuss Your Industry
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
