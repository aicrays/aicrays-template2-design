
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Shield, Building2, Heart, Cpu, Factory, GraduationCap } from "lucide-react";

const PartnersHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const partners = [
    {
      icon: Shield,
      name: "SecureGuard Technologies",
      summary: "Co-developing an AI analytics module for healthcare.",
      tag: "Cybersecurity",
      gradient: "from-purple-500 to-purple-600",
      tagColor: "text-purple-600 bg-purple-50"
    },
    {
      icon: Building2,
      name: "Enterprise Solutions Corp",
      summary: "Building scalable cloud infrastructure platforms.",
      tag: "Enterprise",
      gradient: "from-purple-600 to-indigo-600",
      tagColor: "text-blue-600 bg-blue-50"
    },
    {
      icon: Heart,
      name: "HealthTech Innovations",
      summary: "Creating patient management systems with AI diagnostics.",
      tag: "Healthcare",
      gradient: "from-indigo-500 to-purple-500",
      tagColor: "text-green-600 bg-green-50"
    },
    {
      icon: Factory,
      name: "Industrial IoT Partners",
      summary: "Developing smart manufacturing optimization tools.",
      tag: "Manufacturing",
      gradient: "from-purple-500 to-pink-500",
      tagColor: "text-orange-600 bg-orange-50"
    },
    {
      icon: Cpu,
      name: "TechFlow Systems",
      summary: "Integrating embedded systems for aerospace applications.",
      tag: "In Progress",
      gradient: "from-indigo-600 to-purple-700",
      tagColor: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: GraduationCap,
      name: "EduTech Collaborative",
      summary: "Building personalized learning platforms with adaptive AI.",
      tag: "Education",
      gradient: "from-purple-400 to-indigo-500",
      tagColor: "text-purple-600 bg-purple-50"
    }
  ];

  return (
    <section className="overflow-hidden relative min-h-screen flex items-center justify-center pt-24 pb-16" id="partners-hero">
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 w-full" ref={containerRef}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
            
            {/* Left Section - Content */}
            <div className="w-full lg:w-1/2 text-left space-y-6 lg:space-y-8">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-4">
                  <h1 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl">
                    <div className="opacity-0 animate-fade-in mb-4" style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}>
                      <span className="block text-gray-900">Build Boldly.</span>
                    </div>
                    <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationDuration: "0.8s" }}>
                      <span className="block">
                        Partner{" "}
                        <span className="text-purple-700 relative inline-block">
                          Intentionally
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500/80 via-purple-600/90 to-blue-500/80 rounded-full animate-pulse-slow shadow-lg shadow-purple-500/30"></div>
                        </span>
                      </span>
                    </div>
                  </h1>
                </div>
                
                <div className="pt-2">
                  <p style={{ animationDelay: "0.6s", animationDuration: "0.8s" }} className="text-lg md:text-xl leading-relaxed text-gray-700 opacity-0 animate-fade-in max-w-2xl font-normal">
                    We collaborate with innovators, integrators, and engineering leaders to bring powerful ideas to life. Whether you're building a product, scaling a platform, or launching something new—we're ready to co-create the future with you.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in pt-6" style={{ animationDelay: "0.8s", animationDuration: "0.8s" }}>
                  <a href="#partner-with-us" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[200px] hover:shadow-purple-600/40 hover:from-purple-700 hover:to-purple-800">
                    <span className="relative z-10">Let's Partner</span>
                    <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </a>
                  
                  <a href="#built-and-delivered" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-700 bg-white/90 backdrop-blur-sm border-2 border-purple-300 rounded-full hover:border-purple-500 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg min-w-[200px] hover:shadow-blue-500/20">
                    <span className="relative z-10">Explore Our Work</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Partners Grid */}
            <div className="w-full lg:w-1/2 relative">
              <div 
                className="relative z-10 opacity-0 animate-fade-in" 
                style={{ animationDelay: "1.2s" }}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    Current Partners
                  </h3>
                  <p className="text-sm text-gray-600">
                    Building the future together with trusted collaborators
                  </p>
                </div>

                {/* Partners Grid - 2x3 layout matching Products style */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-2xl">
                  {partners.map((partner, index) => (
                    <div
                      key={partner.name}
                      className={`group bg-white/90 backdrop-blur-sm p-4 lg:p-5 rounded-xl lg:rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden opacity-0 animate-fade-in`}
                      style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl lg:rounded-2xl"></div>
                      
                      <div className="relative z-10">
                        {/* Icon and Tag */}
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300`}>
                            <partner.icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${partner.tagColor}`}>
                            {partner.tag}
                          </span>
                        </div>
                        
                        {/* Partner Name */}
                        <h4 className="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-purple-700 transition-colors leading-tight mb-2">
                          {partner.name}
                        </h4>
                        
                        {/* Partnership Summary */}
                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {partner.summary}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl lg:rounded-b-2xl"></div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-6 opacity-0 animate-fade-in" style={{ animationDelay: "2s" }}>
                  <a
                    href="#our-partners"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 transition-colors group text-sm"
                  >
                    <span className="font-medium mr-2">View All Partners</span>
                    <div className="w-4 h-4 rounded-full border-2 border-purple-400 flex items-center justify-center group-hover:border-purple-600 transition-colors">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:bg-purple-600 transition-colors"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersHero;
