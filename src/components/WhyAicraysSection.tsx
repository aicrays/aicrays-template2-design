
import React, { useEffect, useRef, useState } from "react";
import { Wrench, Settings, Users, Code, Plus } from "lucide-react";

const WhyAicraysSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const valuePillars = [
    {
      icon: Code,
      title: "Custom-built for your systems",
      description: "No templates or one-size-fits-all solutions. Every platform is architected specifically for your workflows and requirements.",
      expansion: "We analyze your existing tech stack, understand your pain points, and build solutions that integrate seamlessly.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      title: "Modular, rapid development",
      description: "Proven components accelerate delivery while maintaining the flexibility to adapt and scale as your needs evolve.",
      expansion: "Our modular approach reduces development time by 60% while ensuring enterprise-grade security and performance.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Designed for long-term impact",
      description: "Built with future growth in mind, our platforms evolve with your business rather than requiring costly replacements.",
      expansion: "We design architectures that scale from 100 to 100,000+ users without performance degradation or major rewrites.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Wrench,
      title: "Personalized to enterprise workflows",
      description: "We integrate with your existing systems and processes, enhancing rather than disrupting your current operations.",
      expansion: "Average integration time is 2-4 weeks with minimal downtime, preserving your team's productivity throughout deployment.",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.value-pillar');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative" id="about" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            Not Templates. Not Theoretical.<br />
            <span className="text-pulse-500 relative">
              Just Built for You.
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pulse-400 to-pulse-600 rounded-full"></div>
            </span>
          </h2>
          <p className="section-subtitle mx-auto">
            We don't sell off-the-shelf products. Every solution is personalized to the workflows, systems, and goals of the client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {valuePillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className={`value-pillar flex items-start space-x-4 group cursor-pointer transition-all duration-500 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              onClick={() => setExpandedItem(expandedItem === index ? null : index)}
            >
              <div className="flex-shrink-0">
                <div className={`w-14 h-14 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                  <pillar.icon className="w-7 h-7 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform rounded-xl"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pulse-700 transition-colors">
                    {pillar.title}
                  </h3>
                  <Plus 
                    className={`w-5 h-5 text-pulse-500 transition-transform duration-300 ${
                      expandedItem === index ? 'rotate-45' : 'rotate-0'
                    }`}
                  />
                </div>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {pillar.description}
                </p>
                
                {/* Expansion Area */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedItem === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-pulse-50 rounded-lg p-4 border-l-4 border-pulse-500">
                    <p className="text-sm text-pulse-700 font-medium">
                      💡 {pillar.expansion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-8 lg:p-10 max-w-3xl mx-auto relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/0 to-pulse-100/0 group-hover:from-pulse-50/30 group-hover:to-pulse-100/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-pulse-700 transition-colors">
                Let's Build What Your Current Platform Can't
              </h3>
              <p className="text-gray-600 mb-6">
                Ready to transform your operations with a platform designed around your business? Let's discuss what's possible.
              </p>
              <a 
                href="#contact" 
                className="button-primary group-hover:scale-105 transition-transform relative overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-pulse-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-pulse-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
