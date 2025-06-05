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
    <section className="py-8 bg-gradient-to-b from-white via-gray-50/30 to-white relative" id="about" ref={sectionRef}>
      {/* Soft Abstract Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.06)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.04)_0%,transparent_60%)] pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-6">
          <h2 className="section-title mb-3">
            Not Templates. Not Theoretical.<br />
            <span className="text-pulse-500 relative">
              Just Built for You.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pulse-400 to-pulse-600 rounded-full"></div>
            </span>
          </h2>
          
          {/* Subtle Wave Divider */}
          <div className="flex items-center justify-center my-4">
            <svg width="120" height="8" viewBox="0 0 120 8" className="text-pulse-300">
              <path d="M0 4 Q30 0 60 4 T120 4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
            </svg>
          </div>
          
          <p className="section-subtitle mx-auto max-w-2xl">
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        {/* Unified 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6">
          {valuePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`value-pillar group p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-pulse-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Unified Purple Icon with Soft Glow */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-pulse-400 to-pulse-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Soft glow background */}
                  <div className="absolute -inset-1 bg-pulse-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pulse-700 transition-colors mb-2">
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

        {/* Compact Bottom CTA */}
        <div className="text-center mt-4">
          <div className="relative max-w-xl mx-auto">
            <div className="relative bg-white/70 backdrop-blur-sm border border-pulse-100/50 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
              <p className="text-pulse-600 font-medium text-sm mb-1">
                Still stuck with generic software?
              </p>
              <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-pulse-700 transition-colors">
                Let's Build What Your Current Platform Can't
              </h3>
              <p className="text-gray-600 text-sm leading-snug mb-4">
                Ready to transform your operations with a platform designed around your business?
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pulse-500 to-pulse-600 hover:from-pulse-600 hover:to-pulse-700 text-white font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
              >
                <span>Book Consultation</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
