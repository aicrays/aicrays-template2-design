
import React, { useEffect, useRef, useState } from "react";
import { Code, Settings, Users, Wrench } from "lucide-react";

const WhyAicraysSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const valuePillars = [
    {
      icon: Code,
      title: "Custom-built for your systems",
      description: "No templates or one-size-fits-all solutions. Every platform is architected specifically for your workflows and requirements.",
    },
    {
      icon: Settings,
      title: "Modular, rapid development",
      description: "Proven components accelerate delivery while maintaining the flexibility to adapt and scale as your needs evolve.",
    },
    {
      icon: Users,
      title: "Designed for long-term impact",
      description: "Our platforms evolve with your business to avoid costly rebuilds and ensure future growth.",
    },
    {
      icon: Wrench,
      title: "Personalized to enterprise workflows",
      description: "Tailored to your exact roles, processes, and goals — we enhance without disrupting what works.",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.value-pillar');
            items.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])]);
              }, index * 150);
            });
            observer.unobserve(entry.target);
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
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-50/30 via-blue-50/20 to-purple-50/40 relative" id="about" ref={sectionRef}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[25%] left-[10%] w-48 h-48 bg-blue-300/15 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-32 h-32 bg-purple-400/25 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[25%] w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[45%] left-[75%] w-2.5 h-2.5 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
      </div>
      
      <div className="section-container relative z-10 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
            Not Templates. Not Theoretical.<br />
            <span className="text-purple-600 relative">
              Just Built for You.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
            </span>
          </h2>
          
          <div className="flex items-center justify-center my-4">
            <svg width="120" height="8" viewBox="0 0 120 8" className="text-purple-300">
              <path d="M0 4 Q30 0 60 4 T120 4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            </svg>
          </div>
          
          <p className="text-lg text-gray-600 mx-auto max-w-2xl font-medium">
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          {valuePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`value-pillar group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-purple-100/50 hover:border-purple-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-white/80 relative overflow-hidden ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-purple-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:border-purple-300 relative overflow-hidden"
          >
            <span className="text-gray-700 text-sm font-normal">
              Still stuck with generic software?
            </span>
            <span className="text-purple-600 text-sm font-semibold group-hover:text-purple-700 transition-colors">
              Let's talk
            </span>
            <svg 
              className="w-4 h-4 text-purple-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-purple-200/20 to-purple-100/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
