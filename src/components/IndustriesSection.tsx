
import React, { useEffect, useRef, useState } from "react";
import { Building2, ShieldCheck, Heart, Truck, ArrowRight, Search } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Building2,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes with real-time monitoring",
      hoverInsight: "Reduced downtime by 40% through predictive maintenance systems",
      iconBg: "from-purple-500 to-purple-600",
      position: "stagger-1"
    },
    {
      icon: ShieldCheck,
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
      icon: Truck,
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
            setTitleVisible(true);
            industries.forEach((_, index) => {
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
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50/20 via-white/90 to-purple-50/30" 
      ref={sectionRef}
    >
      {/* Smooth Transition Background with Subtle Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-white/95 to-purple-50/40"></div>
        
        {/* Subtle floating orbs for continuity */}
        <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl animate-float-vertical opacity-60" style={{
          animationDelay: '2s',
          animationDuration: '25s'
        }}></div>
        <div className="absolute bottom-[25%] left-[8%] w-48 h-48 bg-gradient-radial from-purple-300/20 to-transparent rounded-full blur-3xl animate-float-vertical opacity-50" style={{
          animationDelay: '8s',
          animationDuration: '30s'
        }}></div>
        <div className="absolute top-[40%] left-[15%] w-40 h-40 bg-gradient-radial from-violet-200/30 to-transparent rounded-full blur-2xl animate-float-vertical opacity-45" style={{
          animationDelay: '12s',
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-[40%] right-[20%] w-56 h-56 bg-gradient-radial from-purple-200/25 to-transparent rounded-full blur-3xl animate-float-vertical opacity-55" style={{
          animationDelay: '18s',
          animationDuration: '28s'
        }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto py-20">
        {/* Header Section - Matching Hero Typography */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-8 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mr-2"></span>
            <span>Industries</span>
          </div>
          
          <div className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="font-bold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-700 to-gray-900 bg-clip-text text-transparent">
                Trusted Across Sectors
              </span>
            </h2>
          </div>
          
          <p className={`text-lg md:text-xl leading-relaxed text-gray-700 mx-auto max-w-3xl font-normal transition-all duration-1000 delay-300 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Our modular approach adapts to the unique requirements and regulations of different industries, 
            delivering intelligent solutions that scale with your needs.
          </p>
        </div>

        {/* Centered Cross Layout */}
        <div className="relative">
          {/* Desktop Cross Layout with CTA in center */}
          <div className="hidden lg:block">
            <div className="relative max-w-5xl mx-auto">
              {/* Manufacturing - Top Left */}
              <div className="absolute top-0 left-0 transform rotate-[-0.5deg] w-72">
                <IndustryCard 
                  industry={industries[0]} 
                  index={0} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Government - Top Right */}
              <div className="absolute top-0 right-0 transform rotate-[0.5deg] w-72">
                <IndustryCard 
                  industry={industries[1]} 
                  index={1} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* CTA Block - Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72">
                <CTABlock />
              </div>
              
              {/* Healthcare - Bottom Left */}
              <div className="absolute bottom-0 left-0 transform rotate-[0.5deg] w-72">
                <IndustryCard 
                  industry={industries[2]} 
                  index={2} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Logistics - Bottom Right */}
              <div className="absolute bottom-0 right-0 transform rotate-[-0.5deg] w-72">
                <IndustryCard 
                  industry={industries[3]} 
                  index={3} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Spacer to ensure proper height */}
              <div className="h-[500px]"></div>
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

// Industry Card Component - Enhanced to match Hero styling
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
      {/* Card Background with Enhanced Glassmorphism matching Hero */}
      <div className="backdrop-blur-xl bg-white/95 border border-white/60 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/98 hover:border-purple-200/70 hover:-translate-y-3 overflow-hidden min-h-[220px] flex flex-col">
        {/* Subtle hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/40 to-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Icon with enhanced styling */}
          <div className={`w-14 h-14 bg-gradient-to-br ${industry.iconBg} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
            <industry.icon className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          
          {/* Content with Hero-style typography */}
          <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
            {industry.title}
          </h3>
          
          {/* Description or Hover Insight */}
          <div className="min-h-[4rem] flex-1">
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
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </div>
    </div>
  </div>
);

// CTA Block Component - Enhanced to match Hero styling
const CTABlock = () => (
  <div className="relative group max-w-xs">
    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100/95 to-violet-100/80 border border-purple-200/70 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden min-h-[220px] flex flex-col">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-violet-200/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 text-center flex-1 flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
          <Search className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">
          Don't See Your Industry?
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">
          Our platform adapts to unique sector requirements. Let's discuss your specific needs.
        </p>
        
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-sm border border-purple-200 rounded-full text-purple-600 font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group-hover:scale-105 shadow-sm hover:shadow-md mt-auto">
          Let's Talk 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default IndustriesSection;
