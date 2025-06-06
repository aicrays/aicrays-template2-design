
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
      iconBg: "from-purple-600 via-purple-700 to-purple-800"
    },
    {
      icon: Settings,
      title: "Modular, rapid development",
      description: "Proven components accelerate delivery while maintaining the flexibility to adapt and scale as your needs evolve.",
      iconBg: "from-blue-400 via-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Designed for long-term impact",
      description: "Our platforms evolve with your business to avoid costly rebuilds and ensure future growth.",
      iconBg: "from-purple-700 via-purple-800 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Personalized to enterprise workflows",
      description: "Tailored to your exact roles, processes, and goals — we enhance without disrupting what works.",
      iconBg: "from-blue-300 via-purple-500 to-purple-700"
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
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/35 via-purple-50/50 to-violet-50/45 relative" id="about" ref={sectionRef}>
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large primary orbs */}
        <div className="absolute top-[20%] right-[15%] w-80 h-80 bg-gradient-to-br from-purple-300/18 to-purple-500/12 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[25%] left-[10%] w-96 h-96 bg-gradient-to-tl from-blue-200/20 to-blue-400/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-64 h-64 bg-gradient-to-br from-purple-400/22 to-purple-600/8 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        
        {/* Medium secondary orbs */}
        <div className="absolute top-[40%] left-[25%] w-48 h-48 bg-gradient-to-br from-blue-300/16 to-purple-300/12 rounded-full blur-3xl animate-float opacity-52" style={{ animationDelay: '7s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[50%] right-[20%] w-56 h-56 bg-gradient-to-tl from-purple-500/14 to-blue-300/18 rounded-full blur-3xl animate-float opacity-48" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[75%] left-[40%] w-32 h-32 bg-gradient-to-br from-blue-400/25 to-purple-200/20 rounded-full blur-2xl animate-float opacity-58" style={{ animationDelay: '4s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[15%] right-[45%] w-40 h-40 bg-gradient-to-tl from-purple-600/18 to-blue-200/22 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '6s', animationDuration: '19s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-purple-600/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[25%] w-1.5 h-1.5 bg-blue-300/80 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[45%] left-[75%] w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
      </div>
      
      <div className="section-container relative z-10 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Not Templates. Not Theoretical.<br />
            <span className="text-purple-700 relative">
              Just Built for You.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full"></div>
            </span>
          </h2>
          
          <div className="flex items-center justify-center my-4">
            <svg width="120" height="8" viewBox="0 0 120 8" className="text-purple-400">
              <path d="M0 4 Q30 0 60 4 T120 4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            </svg>
          </div>
          
          <p className="text-lg text-gray-700 mx-auto max-w-2xl font-medium">
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          {valuePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`value-pillar group p-6 bg-white/80 backdrop-blur-xl rounded-2xl border border-purple-100/60 hover:border-purple-200/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/90 relative overflow-hidden ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Enhanced Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/6 via-transparent to-blue-400/4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="relative">
                  {/* Enhanced 3D Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${pillar.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl relative overflow-hidden`}>
                    {/* Multiple inner glow effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-xl"></div>
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-xl"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/8 to-transparent rounded-b-xl"></div>
                    <pillar.icon className="w-6 h-6 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -inset-1 bg-purple-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-800 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
              
              {/* Enhanced Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/40 via-blue-50/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-purple-300/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:border-purple-400 relative overflow-hidden"
          >
            <span className="text-gray-700 text-sm font-normal">
              Still stuck with generic software?
            </span>
            <span className="text-purple-700 text-sm font-semibold group-hover:text-purple-800 transition-colors">
              Let's talk
            </span>
            <svg 
              className="w-4 h-4 text-purple-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-800" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-blue-100/20 to-purple-100/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
