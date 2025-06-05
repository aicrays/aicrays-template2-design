
import React, { useEffect, useRef, useState } from "react";
import { Brain, Shield, Wifi, Database, Cloud, ArrowRight, BarChart3, Zap } from "lucide-react";

const ModularTechSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const techModules = [
    {
      icon: Brain,
      title: "AI / Machine Learning",
      description: "Intelligent automation and predictive analytics tailored to your business logic",
      useCase: "Automates quote approvals using AI + analytics",
      gradient: "from-violet-500 to-purple-600",
      hoverGlow: "group-hover:shadow-violet-500/25"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat detection and secure access control built into every layer",
      useCase: "Blocks 99.8% of security threats in real-time",
      gradient: "from-blue-500 to-indigo-600",
      hoverGlow: "group-hover:shadow-blue-500/25"
    },
    {
      icon: Wifi,
      title: "IoT / RFID",
      description: "Connected device management and real-time tracking solutions",
      useCase: "Tracks 10,000+ assets with meter-level precision",
      gradient: "from-emerald-500 to-teal-600",
      hoverGlow: "group-hover:shadow-emerald-500/25"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Analytics and reporting tailored to your enterprise operations",
      useCase: "Enables insights from real-time dashboards and workflows",
      gradient: "from-orange-500 to-red-600",
      hoverGlow: "group-hover:shadow-orange-500/25"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and seamless deployment pipelines",
      useCase: "Delivers modular rollouts with performance monitoring",
      gradient: "from-cyan-500 to-blue-600",
      hoverGlow: "group-hover:shadow-cyan-500/25"
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
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.tech-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden" id="solutions" ref={sectionRef}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(139,92,246,0.03)_25%,rgba(139,92,246,0.03)_26%,transparent_27%,transparent_74%,rgba(139,92,246,0.03)_75%,rgba(139,92,246,0.03)_76%,transparent_77%)] bg-[length:60px_60px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
      </div>
      
      {/* Top Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-8 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in">
            <Zap className="w-4 h-4 mr-2 text-violet-600" />
            <span>Modular Technology</span>
          </div>
          <h2 className="section-title mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Built from Proven Components
          </h2>
          <p className="section-subtitle mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Every platform we create combines these foundational technologies, customized for your specific needs and integrated seamlessly with your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {techModules.map((module, index) => (
            <div 
              key={module.title}
              className={`tech-card group relative overflow-hidden transition-all duration-700 cursor-pointer ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background with Enhanced Hover */}
              <div className={`relative p-8 bg-white border border-gray-200 rounded-3xl transition-all duration-500 transform group-hover:scale-[1.03] group-hover:border-violet-200 shadow-lg group-hover:shadow-2xl ${module.hoverGlow}`}>
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-purple-50/0 group-hover:from-violet-50/60 group-hover:to-purple-50/40 rounded-3xl transition-all duration-500"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[24px] border-l-transparent border-t-[24px] border-t-violet-100 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-tr-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${module.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                      <module.icon className="w-7 h-7 text-white group-hover:animate-pulse" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ArrowRight className="w-5 h-5 text-violet-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-violet-700 transition-colors duration-300">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {module.description}
                  </p>
                  
                  {/* Enhanced Use Case Reveal */}
                  <div className={`bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-100 transition-all duration-500 transform ${
                    hoveredCard === index ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                  }`}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-violet-700 font-medium leading-relaxed">
                        {module.useCase}
                      </p>
                    </div>
                    <button className="mt-3 text-xs text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1 transition-colors">
                      See real-world use
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                
                {/* Hover Ripple Effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/0 via-violet-400/10 to-violet-400/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-200/50 to-transparent h-px"></div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full shadow-lg"></div>
          <div className="text-center pt-12">
            <p className="text-sm text-gray-500 mb-4">Ready to see these components in action?</p>
            <button className="button-primary group">
              Schedule Discovery Session
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
