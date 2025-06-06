
import React, { useEffect, useRef, useState } from "react";
import { Factory, Shield, Stethoscope, Truck, ArrowRight, Search, Zap, Building2 } from "lucide-react";

const IndustriesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [titleVisible, setTitleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Streamline production workflows and quality control processes with real-time monitoring",
      hoverInsight: "Reduced downtime by 40% through predictive maintenance systems",
      iconBg: "from-purple-500 to-purple-600",
      position: "stagger-1"
    },
    {
      icon: Shield,
      title: "Government",
      description: "Secure access in critical infrastructure environments with multi-level clearance",
      hoverInsight: "Successfully deployed in 15+ federal agencies with zero security incidents",
      iconBg: "from-purple-600 to-purple-700",
      position: "stagger-2"
    },
    {
      icon: Stethoscope,
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
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Smart grid management and renewable energy optimization solutions",
      hoverInsight: "Increased energy efficiency by 35% through AI-powered grid optimization",
      iconBg: "from-purple-600 to-purple-700",
      position: "stagger-5"
    },
    {
      icon: Building2,
      title: "Finance",
      description: "Secure trading platforms and risk management systems with real-time analytics",
      hoverInsight: "Reduced trading latency by 60% with advanced algorithmic solutions",
      iconBg: "from-purple-400 to-purple-600",
      position: "stagger-6"
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-purple-60/40 to-purple-70/60 py-20" 
      ref={sectionRef}
    >
      {/* Enhanced Dynamic Background with More Orbs and Color Splotches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers - slightly darker than hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-60/80 via-purple-100/60 to-purple-70/90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-100/80 via-purple-60/50 to-transparent"></div>
        
        {/* Extra Large floating orbs */}
        <div className="absolute top-[15%] right-[8%] w-96 h-96 bg-gradient-radial from-purple-300/50 to-transparent rounded-full blur-3xl animate-float-vertical opacity-90" style={{
          animationDelay: '2s',
          animationDuration: '28s'
        }}></div>
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-gradient-radial from-indigo-400/45 to-transparent rounded-full blur-3xl animate-float-vertical opacity-85" style={{
          animationDelay: '8s',
          animationDuration: '32s'
        }}></div>
        
        {/* Additional Large floating orbs */}
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-gradient-radial from-violet-400/40 to-transparent rounded-full blur-3xl animate-float-vertical opacity-75" style={{
          animationDelay: '12s',
          animationDuration: '25s'
        }}></div>
        <div className="absolute bottom-[15%] right-[40%] w-88 h-88 bg-gradient-radial from-purple-200/50 to-transparent rounded-full blur-3xl animate-float-vertical opacity-70" style={{
          animationDelay: '19s',
          animationDuration: '29s'
        }}></div>
        <div className="absolute top-[35%] left-[30%] w-64 h-64 bg-gradient-radial from-indigo-300/50 to-transparent rounded-full blur-3xl animate-float-vertical opacity-80" style={{
          animationDelay: '17s',
          animationDuration: '23s'
        }}></div>
        <div className="absolute bottom-[45%] right-[25%] w-56 h-56 bg-gradient-radial from-violet-300/55 to-transparent rounded-full blur-3xl animate-float-vertical opacity-90" style={{
          animationDelay: '24s',
          animationDuration: '28s'
        }}></div>
        
        {/* More Medium floating orbs */}
        <div className="absolute top-[50%] right-[40%] w-48 h-48 bg-purple-300/40 rounded-full blur-2xl animate-float-vertical opacity-70" style={{
          animationDelay: '7s',
          animationDuration: '18s'
        }}></div>
        <div className="absolute bottom-[60%] left-[35%] w-52 h-52 bg-indigo-400/35 rounded-full blur-2xl animate-float-vertical opacity-65" style={{
          animationDelay: '14s',
          animationDuration: '22s'
        }}></div>
        <div className="absolute top-[70%] right-[65%] w-40 h-40 bg-violet-400/45 rounded-full blur-2xl animate-float-vertical opacity-75" style={{
          animationDelay: '20s',
          animationDuration: '16s'
        }}></div>
        <div className="absolute top-[85%] left-[60%] w-44 h-44 bg-purple-300/40 rounded-full blur-2xl animate-float-vertical opacity-60" style={{
          animationDelay: '5s',
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-[75%] right-[15%] w-48 h-48 bg-indigo-300/38 rounded-full blur-2xl animate-float-vertical opacity-70" style={{
          animationDelay: '16s',
          animationDuration: '24s'
        }}></div>
        
        {/* Enhanced Color Splotches */}
        <div className="absolute top-[25%] left-[10%] w-60 h-60 bg-gradient-to-br from-purple-200/30 via-violet-200/25 to-transparent rounded-full blur-2xl opacity-65" style={{
          animationDelay: '3s',
          animationDuration: '35s'
        }}></div>
        <div className="absolute bottom-[30%] right-[20%] w-56 h-56 bg-gradient-to-br from-indigo-200/35 via-purple-200/30 to-transparent rounded-full blur-2xl opacity-55" style={{
          animationDelay: '15s',
          animationDuration: '40s'
        }}></div>
        <div className="absolute top-[40%] right-[5%] w-72 h-72 bg-gradient-to-br from-violet-200/28 via-purple-100/32 to-transparent rounded-full blur-3xl opacity-60" style={{
          animationDelay: '25s',
          animationDuration: '33s'
        }}></div>
        <div className="absolute bottom-[50%] left-[20%] w-64 h-64 bg-gradient-to-br from-purple-300/25 via-indigo-200/20 to-transparent rounded-full blur-2xl opacity-50" style={{
          animationDelay: '30s',
          animationDuration: '38s'
        }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        {/* Header Section - Matching Hero Style */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-sm mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "0.1s" }}>
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

        {/* Improved Grid Layout */}
        <div className="relative mb-16">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
              {/* Top Row - 3 cards */}
              <div className="col-span-1 transform rotate-[-0.5deg]">
                <IndustryCard 
                  industry={industries[0]} 
                  index={0} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              <div className="col-span-1 transform rotate-[0.5deg] translate-y-3">
                <IndustryCard 
                  industry={industries[1]} 
                  index={1} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              <div className="col-span-1 transform rotate-[-0.5deg] translate-y-1">
                <IndustryCard 
                  industry={industries[2]} 
                  index={2} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              <div className="col-span-1 transform rotate-[0.5deg] translate-y-4">
                <IndustryCard 
                  industry={industries[3]} 
                  index={3} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
            </div>
            
            {/* Bottom Row - 2 cards + CTA */}
            <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="col-span-1 transform rotate-[0.5deg] translate-y-2">
                <IndustryCard 
                  industry={industries[4]} 
                  index={4} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              <div className="col-span-1 flex items-center justify-center transform translate-y-4">
                <CTABlock />
              </div>
              
              <div className="col-span-1 transform rotate-[-0.5deg] translate-y-2">
                <IndustryCard 
                  industry={industries[5]} 
                  index={5} 
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

// Industry Card Component with improved sizing
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
      {/* Card Background with Enhanced Glassmorphism */}
      <div className="backdrop-blur-xl bg-white/90 border border-white/50 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-2 overflow-hidden h-[220px] flex flex-col">
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Icon */}
          <div className={`w-11 h-11 bg-gradient-to-br ${industry.iconBg} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
            <industry.icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
            {industry.title}
          </h3>
          
          {/* Description or Hover Insight */}
          <div className="min-h-[3.5rem] flex-1">
            <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 text-sm ${
              hoveredCard === index ? 'opacity-0' : 'opacity-100'
            }`}>
              {industry.description}
            </p>
            
            <p className={`text-purple-700 font-medium leading-relaxed absolute inset-x-0 transition-opacity duration-300 text-sm ${
              hoveredCard === index ? 'opacity-100' : 'opacity-0'
            }`}>
              ✨ {industry.hoverInsight}
            </p>
          </div>
        </div>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </div>
    </div>
  </div>
);

// CTA Block Component with consistent sizing
const CTABlock = () => (
  <div className="relative group max-w-sm w-full">
    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100/90 to-violet-100/70 border border-purple-200/60 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden h-[220px] flex flex-col">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-violet-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 text-center flex-1 flex flex-col">
        {/* Icon */}
        <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
          <Search className="w-5 h-5 text-white" />
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">
          Don't See Your Industry?
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
          Our platform adapts to unique sector requirements. Let's discuss your specific needs.
        </p>
        
        {/* Centralized badges section with smaller sizing */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4 px-2">
          <span className="inline-block px-2 py-1 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full text-xs text-purple-600 font-medium">
            Education
          </span>
          <span className="inline-block px-2 py-1 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full text-xs text-purple-600 font-medium">
            Legal
          </span>
          <span className="inline-block px-2 py-1 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full text-xs text-purple-600 font-medium">
            Real Estate
          </span>
          <span className="inline-block px-2 py-1 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full text-xs text-purple-600 font-medium">
            Agriculture
          </span>
          <span className="inline-block px-2 py-1 bg-white/60 backdrop-blur-sm border border-purple-200/50 rounded-full text-xs text-purple-600 font-medium">
            Media
          </span>
        </div>
        
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full text-purple-600 font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group-hover:scale-105 shadow-sm hover:shadow-md text-sm">
          Let's Talk 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default IndustriesSection;
