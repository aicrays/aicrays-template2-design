import React, { useEffect, useRef, useState } from "react";
import { Wrench, Users, Heart, Globe, ArrowRight, Search } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Wrench,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes with real-time monitoring",
      hoverInsight: "Reduced downtime by 40% through predictive maintenance systems",
      iconBg: "from-purple-500 to-purple-600",
      position: "stagger-1"
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments with multi-level clearance",
      hoverInsight: "Successfully deployed in 15+ federal agencies with zero security incidents",
      iconBg: "from-purple-600 to-purple-700",
      position: "stagger-2"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and seamless care coordination",
      hoverInsight: "Improved patient outcomes by 25% through integrated data systems",
      iconBg: "from-purple-400 to-purple-500",
      position: "stagger-3"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization for global operations",
      hoverInsight: "Optimized delivery routes saving 30% in operational costs",
      iconBg: "from-purple-500 to-purple-600",
      position: "stagger-4"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, cardIndex]);
            }, cardIndex * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.industry-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center" ref={sectionRef}>
      {/* Dynamic Radial Gradient Background - No Grid Pattern */}
      <div className="absolute inset-0">
        {/* Main radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-50/40 via-white to-violet-50/30"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-purple-300/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-violet-200/8 to-purple-400/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-8 hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-3"></span>
            <span>Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
              Trusted Across Sectors
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Our modular approach adapts to the unique requirements and regulations of different industries, 
            delivering intelligent solutions that scale with your needs.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="relative">
          {/* Desktop Staggered Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Manufacturing - Top Left */}
              <div className="col-start-1 row-start-1 transform rotate-[-1deg]">
                <IndustryCard 
                  industry={industries[0]} 
                  index={0} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Government - Top Right */}
              <div className="col-start-3 row-start-1 transform rotate-[1deg] translate-y-8">
                <IndustryCard 
                  industry={industries[1]} 
                  index={1} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* CTA Block - Center */}
              <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center transform translate-y-12">
                <CTABlock />
              </div>
              
              {/* Healthcare - Bottom Left */}
              <div className="col-start-1 row-start-2 transform rotate-[1deg] translate-y-16">
                <IndustryCard 
                  industry={industries[2]} 
                  index={2} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Logistics - Bottom Right */}
              <div className="col-start-3 row-start-2 transform rotate-[-1deg] translate-y-24">
                <IndustryCard 
                  industry={industries[3]} 
                  index={3} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Responsive Layout */}
          <div className="lg:hidden space-y-8">
            {industries.map((industry, index) => (
              <IndustryCard 
                key={industry.title}
                industry={industry} 
                index={index} 
                visibleCards={visibleCards}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
              />
            ))}
            
            {/* Mobile CTA */}
            <div className="mt-12">
              <CTABlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Industry Card Component
const IndustryCard = ({ industry, index, visibleCards, hoveredCard, setHoveredCard }: any) => (
  <div 
    data-index={index}
    className={`industry-card transition-all duration-700 ${
      visibleCards.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`}
    onMouseEnter={() => setHoveredCard(index)}
    onMouseLeave={() => setHoveredCard(null)}
    style={{ animationDelay: `${index * 0.15}s` }}
  >
    <div className="relative group">
      {/* Card Background with Glassmorphism */}
      <div className="backdrop-blur-xl bg-white/85 border border-white/40 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/90 hover:border-purple-200/50 hover:-translate-y-2 overflow-hidden">
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/50 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
        
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-br ${industry.iconBg} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
            <industry.icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">
            {industry.title}
          </h3>
          
          {/* Description or Hover Insight */}
          <div className="min-h-[4rem]">
            <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 ${
              hoveredCard === index ? 'opacity-0' : 'opacity-100'
            }`}>
              {industry.description}
            </p>
            
            <p className={`text-purple-700 font-medium leading-relaxed absolute inset-x-0 transition-opacity duration-300 ${
              hoveredCard === index ? 'opacity-100' : 'opacity-0'
            }`}>
              ✨ {industry.hoverInsight}
            </p>
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      </div>
    </div>
  </div>
);

// CTA Block Component
const CTABlock = () => (
  <div className="relative group max-w-sm">
    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100/80 to-violet-100/60 border border-purple-200/50 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-violet-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
          <Search className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">
          Don't See Your Industry?
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our platform adapts to unique sector requirements. Let's discuss your specific needs.
        </p>
        
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full text-purple-600 font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group-hover:scale-105 shadow-sm hover:shadow-md">
          Let's Talk 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default IndustriesSection;
