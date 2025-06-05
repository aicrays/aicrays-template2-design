
import React, { useEffect, useRef, useState } from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud, Layout } from "lucide-react";

const ModularTechSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const components = [
    {
      icon: Brain,
      title: "AI/ML Intelligence",
      description: "Machine learning models and intelligent automation tailored to your business logic",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security protocols with multi-layered access control",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Wifi,
      title: "IoT/RFID Systems",
      description: "Connected device networks for real-time operational visibility",
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Analytics and reporting tailored to your enterprise operations",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and seamless deployment pipelines",
      gradient: "from-purple-600 to-purple-700"
    },
    {
      icon: Layout,
      title: "Human-Centered UX",
      description: "Intuitive interfaces designed to enhance productivity and user experience",
      gradient: "from-purple-400 to-purple-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.component-card');
            cards?.forEach((card, index) => {
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
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40 relative overflow-hidden" id="solutions">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-400/8 to-blue-400/12 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/8 via-transparent to-violet-500/6 animate-gradient-shift" style={{ animationDelay: '3s', animationDuration: '12s' }}></div>
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-purple-200/15 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute top-[60%] right-[15%] w-24 h-24 bg-violet-300/12 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[30%] left-[30%] w-40 h-40 bg-blue-200/10 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        
        {/* Micro Particles */}
        <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-[40%] right-[40%] w-1 h-1 bg-violet-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-35" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/60 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-3"></span>
            <span>Proven Capabilities</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Built from Proven Components
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed opacity-0 animate-fade-in max-w-4xl mx-auto font-light" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs and integrated seamlessly with your existing systems.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {components.map((component, index) => (
            <div
              key={component.title}
              className={`component-card group cursor-pointer transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Glassmorphic Card */}
              <div className="relative backdrop-blur-xl bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden">
                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${component.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <component.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">
                    {component.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {component.description}
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

        {/* Enhanced Call to Action */}
        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-10 lg:p-12 shadow-2xl max-w-4xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 via-white/30 to-violet-50/50 rounded-3xl"></div>
            
            <div className="relative z-10">
              <p className="text-xl lg:text-2xl text-gray-700 mb-8 font-light">
                Ready to see these components in action?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center px-10 py-4 text-lg lg:text-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden min-w-[280px]"
                >
                  <span className="relative z-10">Schedule Discovery Session</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></div>
                </a>
                
                <button 
                  onClick={() => {
                    const solutionsSection = document.querySelector('#case-studies');
                    if (solutionsSection) {
                      solutionsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg lg:text-xl font-medium text-purple-600 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-full hover:border-purple-400 hover:bg-white transition-all duration-300 hover:shadow-lg min-w-[280px] sm:min-w-[200px]"
                >
                  <span>See Examples</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
