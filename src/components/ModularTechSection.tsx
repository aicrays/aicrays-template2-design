
import React, { useEffect, useRef, useState } from "react";
import { Brain, Shield, Wifi, BarChart3, Cloud } from "lucide-react";

const ModularTechSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const components = [
    {
      icon: Brain,
      title: "AI/ML Intelligence",
      description: "Machine learning models and intelligent automation tailored to your business logic",
      hoverText: "Automates decision-making using AI + analytics",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security protocols with multi-layered access control built into every layer",
      hoverText: "Protects data with advanced threat detection",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Wifi,
      title: "IoT/RFID Systems",
      description: "Connected device networks and tracking systems for real-time operational visibility",
      hoverText: "Connects devices for seamless data flow",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Analytics and reporting tailored to your enterprise operations",
      hoverText: "Enables insights from real-time dashboards and workflows",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and seamless deployment pipelines",
      hoverText: "Delivers modular rollouts with performance monitoring",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.tech-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-pulse-50 relative overflow-hidden" id="solutions">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pulse-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Diagonal SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,50 350,50 600,20 C850,50 1050,50 1200,0 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>

      <div className="section-container relative z-10" ref={sectionRef}>
        <div className="text-center mb-12">
          <div 
            className="pulse-chip mx-auto mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span>Modular Technology</span>
          </div>
          <h2 className="section-title mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Built from Proven Components
          </h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Every platform we build combines these core technologies, tailored to your specific enterprise needs and integrated seamlessly with your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {components.map((component, index) => (
            <div
              key={component.title}
              className={`tech-card glass-card p-6 lg:p-8 group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] relative overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-pulse-50/20 group-hover:to-pulse-100/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${component.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <component.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="w-2 h-2 bg-pulse-400 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-pulse-700 transition-colors">
                  {component.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {component.description}
                </p>
                
                {/* Hover Text */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="text-sm text-pulse-600 font-medium bg-pulse-50 px-3 py-2 rounded-lg border border-pulse-200">
                    {component.hoverText}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pulse-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to see these components in action?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pulse-500 to-pulse-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule Discovery Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
