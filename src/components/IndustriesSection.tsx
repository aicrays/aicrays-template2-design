
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
      iconBg: "from-purple-600 via-purple-700 to-purple-800",
      position: "stagger-1"
    },
    {
      icon: Users,
      title: "Government",
      description: "Secure access in critical infrastructure environments with multi-level clearance",
      hoverInsight: "Successfully deployed in 15+ federal agencies with zero security incidents",
      iconBg: "from-blue-400 via-blue-500 to-purple-600",
      position: "stagger-2"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant systems for patient data and seamless care coordination",
      hoverInsight: "Improved patient outcomes by 25% through integrated data systems",
      iconBg: "from-purple-700 via-purple-800 to-blue-600",
      position: "stagger-3"
    },
    {
      icon: Globe,
      title: "Logistics",
      description: "Real-time tracking and supply chain optimization for global operations",
      hoverInsight: "Optimized delivery routes saving 30% in operational costs",
      iconBg: "from-blue-300 via-purple-500 to-purple-700",
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
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/35 via-purple-50/50 to-violet-50/40" ref={sectionRef}>
      {/* Enhanced Background with More Orbs */}
      <div className="absolute inset-0">
        {/* Large primary orbs */}
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-200/18 to-purple-400/12 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-blue-400/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '3s', animationDuration: '24s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-300/15 to-purple-500/8 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '1.5s', animationDuration: '18s' }}></div>
        
        {/* Medium secondary orbs */}
        <div className="absolute top-[35%] right-[25%] w-56 h-56 bg-gradient-to-br from-blue-300/16 to-purple-300/12 rounded-full blur-3xl animate-float opacity-52" style={{ animationDelay: '4s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[35%] left-[30%] w-64 h-64 bg-gradient-to-tl from-purple-400/14 to-blue-200/18 rounded-full blur-3xl animate-float opacity-48" style={{ animationDelay: '2s', animationDuration: '22s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[70%] right-[15%] w-40 h-40 bg-gradient-to-br from-blue-400/22 to-purple-200/16 rounded-full blur-2xl animate-float opacity-58" style={{ animationDelay: '5s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] left-[20%] w-48 h-48 bg-gradient-to-tl from-purple-500/18 to-blue-300/14 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '6s', animationDuration: '19s' }}></div>
        
        {/* Extra micro orbs */}
        <div className="absolute top-[20%] right-[40%] w-32 h-32 bg-gradient-to-br from-purple-600/20 to-purple-400/15 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '3.5s', animationDuration: '15s' }}></div>
        <div className="absolute bottom-[45%] right-[35%] w-36 h-36 bg-gradient-to-tl from-blue-500/16 to-purple-300/20 rounded-full blur-2xl animate-float opacity-47" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
      </div>
      
      <div className="section-container relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-purple-800 border border-purple-200/60 shadow-lg mb-6 hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-800 mr-3"></span>
            <span>Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              Trusted Across Sectors
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Our modular approach adapts to the unique requirements and regulations of different industries, 
            delivering intelligent solutions that scale with your needs.
          </p>
        </div>

        {/* Staggered Grid Layout */}
        <div className="relative">
          {/* Desktop Staggered Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              <div className="col-start-3 row-start-1 transform rotate-[1deg] translate-y-6">
                <IndustryCard 
                  industry={industries[1]} 
                  index={1} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* CTA Block - Center */}
              <div className="col-start-2 row-start-1 row-span-2 flex items-center justify-center transform translate-y-8">
                <CTABlock />
              </div>
              
              {/* Healthcare - Bottom Left */}
              <div className="col-start-1 row-start-2 transform rotate-[1deg] translate-y-12">
                <IndustryCard 
                  industry={industries[2]} 
                  index={2} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Logistics - Bottom Right */}
              <div className="col-start-3 row-start-2 transform rotate-[-1deg] translate-y-18">
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
          <div className="lg:hidden space-y-6">
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
            <div className="mt-8">
              <CTABlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Industry Card Component
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
      {/* Enhanced Card Background with Multiple Layers */}
      <div className="backdrop-blur-xl bg-white/90 border border-white/50 rounded-3xl p-6 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-3 hover:scale-105 overflow-hidden">
        {/* Enhanced Multi-layer glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/60 to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-400/8 via-transparent to-blue-400/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
        
        <div className="relative z-10">
          {/* Enhanced 3D Icon */}
          <div className={`w-14 h-14 bg-gradient-to-br ${industry.iconBg} rounded-2xl flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 group-hover:shadow-3xl group-hover:shadow-purple-400/30 transition-all duration-300 relative overflow-hidden`}>
            {/* Multiple inner glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/8 to-transparent rounded-b-2xl"></div>
            <industry.icon className="w-6 h-6 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-800 transition-colors">
            {industry.title}
          </h3>
          
          {/* Description or Hover Insight */}
          <div className="min-h-[3rem]">
            <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 text-sm ${
              hoveredCard === index ? 'opacity-0' : 'opacity-100'
            }`}>
              {industry.description}
            </p>
            
            <p className={`text-purple-800 font-medium leading-relaxed absolute inset-x-0 transition-opacity duration-300 text-sm ${
              hoveredCard === index ? 'opacity-100' : 'opacity-0'
            }`}>
              ✨ {industry.hoverInsight}
            </p>
          </div>
        </div>

        {/* Enhanced corner accents */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/40 via-blue-50/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-100/35 via-purple-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      </div>
    </div>
  </div>
);

// Enhanced CTA Block Component
const CTABlock = () => (
  <div className="relative group max-w-xs">
    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100/90 to-blue-100/70 border border-purple-200/60 rounded-3xl p-6 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 hover:scale-105 overflow-hidden">
      {/* Enhanced background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-blue-200/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      <div className="relative z-10 text-center">
        {/* Enhanced Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:shadow-purple-500/40 group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-full"></div>
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-full"></div>
          <Search className="w-6 h-6 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">
          Don't See Your Industry?
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          Our platform adapts to unique sector requirements. Let's discuss your specific needs.
        </p>
        
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/95 backdrop-blur-sm border border-purple-200/80 rounded-full text-purple-700 font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl text-sm">
          Let's Talk 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default IndustriesSection;
