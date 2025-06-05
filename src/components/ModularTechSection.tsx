
import React, { useEffect, useRef, useState } from "react";
import { Brain, Shield, Wifi, Database, Cloud, ArrowRight } from "lucide-react";

const ModularTechSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const techModules = [
    {
      icon: Brain,
      title: "AI / Machine Learning",
      description: "Intelligent automation and predictive analytics tailored to your business logic",
      useCase: "Automate quality control with 99.5% accuracy",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced threat detection and secure access control built into every layer",
      useCase: "Block 99.8% of security threats in real-time",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Wifi,
      title: "IoT / RFID",
      description: "Connected device management and real-time tracking solutions",
      useCase: "Track 10,000+ assets with meter-level precision",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Advanced analytics and reporting systems for actionable insights",
      useCase: "Generate insights from 1TB+ data in minutes",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Cloud,
      title: "Cloud DevOps",
      description: "Scalable infrastructure and continuous deployment pipelines",
      useCase: "Deploy updates with 99.9% uptime guarantee",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white" id="solutions" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(124,58,237,0.02)_25%,rgba(124,58,237,0.02)_26%,transparent_27%,transparent_74%,rgba(124,58,237,0.02)_75%,rgba(124,58,237,0.02)_76%,transparent_77%)] bg-[length:60px_60px]"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span>Modular Technology</span>
          </div>
          <h2 className="section-title mb-6">
            Built from Proven Components
          </h2>
          <p className="section-subtitle mx-auto">
            Every platform we create combines these foundational technologies, customized for your specific needs and integrated seamlessly with your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techModules.map((module, index) => (
            <div 
              key={module.title}
              className={`tech-card feature-card bg-white border border-gray-200 hover:border-pulse-200 hover:shadow-xl group relative overflow-hidden transition-all duration-500 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/0 to-pulse-100/0 group-hover:from-pulse-50/50 group-hover:to-pulse-100/30 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${module.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-pulse-500" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-pulse-700 transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {module.description}
                </p>
                
                {/* Use Case Reveal */}
                <div className="bg-pulse-50 rounded-lg p-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-sm text-pulse-700 font-medium">
                    ✨ {module.useCase}
                  </p>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-pulse-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section Divider */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pulse-200 to-transparent h-px"></div>
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-pulse-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ModularTechSection;
