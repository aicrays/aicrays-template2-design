
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
    <section className="py-16 bg-gradient-to-b from-white via-gray-50/30 to-white relative" id="about" ref={sectionRef}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.04)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.04)_0%,transparent_50%)] pointer-events-none"></div>
      
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="tech-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">
            Not Templates. Not Theoretical.<br />
            <span className="text-pulse-500 relative">
              Just Built for You.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pulse-400 to-pulse-600 rounded-full"></div>
            </span>
          </h2>
          
          {/* Subtle Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px bg-gradient-to-r from-transparent via-pulse-200 to-transparent w-32"></div>
            <div className="mx-4 w-2 h-2 bg-pulse-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-pulse-200 to-transparent w-32"></div>
          </div>
          
          <p className="section-subtitle mx-auto max-w-2xl">
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {valuePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`value-pillar group p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/0 to-pulse-100/0 group-hover:from-pulse-50/50 group-hover:to-pulse-100/20 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pulse-400 to-pulse-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden">
                    <pillar.icon className="w-7 h-7 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
                    {/* Soft glow background */}
                    <div className="absolute -inset-2 bg-pulse-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pulse-700 transition-colors mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-pulse-400 rounded-full animate-pulse opacity-30"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            {/* Curved Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/50 to-pulse-100/30 rounded-3xl blur-xl transform scale-105"></div>
            
            <div className="glass-card p-8 lg:p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/0 to-pulse-100/0 group-hover:from-pulse-50/30 group-hover:to-pulse-100/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <p className="text-pulse-600 font-medium text-lg mb-3">
                  Still stuck with generic software?
                </p>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-pulse-700 transition-colors">
                  Let's Build What Your Current Platform Can't
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Ready to transform your operations with a platform designed around your business? Let's discuss what's possible.
                </p>
                <a 
                  href="#contact" 
                  className="button-primary group-hover:scale-105 transition-all relative overflow-hidden inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  <span className="relative z-10">Book Consultation</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-pulse-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-pulse-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
