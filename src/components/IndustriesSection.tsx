
import React, { useEffect, useRef, useState } from "react";
import { Factory, Shield, Stethoscope, Truck, ArrowRight, Search } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-purple-50/30 to-purple-50/50" 
      ref={sectionRef}
    >
      {/* Enhanced Dynamic Background with More Orbs and Color Splotches */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/70 via-purple-100/50 to-purple-50/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-100/70 via-purple-50/40 to-transparent"></div>
        
        {/* Extra Large floating orbs */}
        <div className="absolute top-[15%] right-[8%] w-96 h-96 bg-gradient-radial from-purple-300/40 to-transparent rounded-full blur-3xl animate-float-vertical opacity-85" style={{
          animationDelay: '2s',
          animationDuration: '28s'
        }}></div>
        <div className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-gradient-radial from-indigo-400/35 to-transparent rounded-full blur-3xl animate-float-vertical opacity-75" style={{
          animationDelay: '8s',
          animationDuration: '32s'
        }}></div>
        
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[12%] w-72 h-72 bg-gradient-radial from-purple-300/35 to-transparent rounded-full blur-3xl animate-float-vertical opacity-80" style={{
          animationDelay: '4s',
          animationDuration: '26s'
        }}></div>
        <div className="absolute bottom-[25%] left-[8%] w-88 h-88 bg-gradient-radial from-purple-400/30 to-transparent rounded-full blur-3xl animate-float-vertical opacity-70" style={{
          animationDelay: '10s',
          animationDuration: '30s'
        }}></div>
        <div className="absolute top-[35%] left-[30%] w-64 h-64 bg-gradient-radial from-indigo-300/40 to-transparent rounded-full blur-3xl animate-float-vertical opacity-75" style={{
          animationDelay: '17s',
          animationDuration: '23s'
        }}></div>
        <div className="absolute bottom-[40%] right-[25%] w-56 h-56 bg-gradient-radial from-violet-300/45 to-transparent rounded-full blur-3xl animate-float-vertical opacity-85" style={{
          animationDelay: '24s',
          animationDuration: '28s'
        }}></div>
        
        {/* Additional Large Orbs */}
        <div className="absolute top-[10%] left-[15%] w-60 h-60 bg-gradient-radial from-violet-400/35 to-transparent rounded-full blur-3xl animate-float-vertical opacity-70" style={{
          animationDelay: '12s',
          animationDuration: '25s'
        }}></div>
        <div className="absolute bottom-[10%] right-[40%] w-72 h-72 bg-gradient-radial from-purple-200/40 to-transparent rounded-full blur-3xl animate-float-vertical opacity-65" style={{
          animationDelay: '19s',
          animationDuration: '29s'
        }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[50%] right-[40%] w-40 h-40 bg-purple-300/30 rounded-full blur-2xl animate-float-vertical opacity-65" style={{
          animationDelay: '7s',
          animationDuration: '18s'
        }}></div>
        <div className="absolute bottom-[55%] left-[35%] w-48 h-48 bg-indigo-400/25 rounded-full blur-2xl animate-float-vertical opacity-60" style={{
          animationDelay: '14s',
          animationDuration: '22s'
        }}></div>
        <div className="absolute top-[65%] right-[65%] w-32 h-32 bg-violet-400/35 rounded-full blur-2xl animate-float-vertical opacity-70" style={{
          animationDelay: '20s',
          animationDuration: '16s'
        }}></div>
        <div className="absolute top-[80%] left-[60%] w-36 h-36 bg-purple-300/30 rounded-full blur-2xl animate-float-vertical opacity-55" style={{
          animationDelay: '5s',
          animationDuration: '20s'
        }}></div>
        <div className="absolute bottom-[70%] right-[15%] w-44 h-44 bg-indigo-300/28 rounded-full blur-2xl animate-float-vertical opacity-65" style={{
          animationDelay: '16s',
          animationDuration: '24s'
        }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[30%] left-[75%] w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-float-vertical opacity-55" style={{
          animationDelay: '9s',
          animationDuration: '13s'
        }}></div>
        <div className="absolute bottom-[20%] right-[50%] w-28 h-28 bg-indigo-300/35 rounded-full blur-xl animate-float-vertical opacity-60" style={{
          animationDelay: '27s',
          animationDuration: '20s'
        }}></div>
        <div className="absolute top-[45%] left-[5%] w-32 h-32 bg-violet-400/25 rounded-full blur-xl animate-float-vertical opacity-50" style={{
          animationDelay: '11s',
          animationDuration: '17s'
        }}></div>
        <div className="absolute bottom-[60%] right-[75%] w-20 h-20 bg-purple-400/35 rounded-full blur-xl animate-float-vertical opacity-60" style={{
          animationDelay: '23s',
          animationDuration: '15s'
        }}></div>
        
        {/* Extra small floating elements for depth */}
        <div className="absolute top-[75%] left-[20%] w-16 h-16 bg-violet-400/25 rounded-full blur-lg animate-float-vertical opacity-50" style={{
          animationDelay: '12s',
          animationDuration: '10s'
        }}></div>
        <div className="absolute top-[90%] right-[30%] w-12 h-12 bg-purple-400/30 rounded-full blur-lg animate-float-vertical opacity-45" style={{
          animationDelay: '22s',
          animationDuration: '14s'
        }}></div>
        <div className="absolute top-[25%] left-[85%] w-18 h-18 bg-indigo-400/20 rounded-full blur-lg animate-float-vertical opacity-40" style={{
          animationDelay: '6s',
          animationDuration: '12s'
        }}></div>
        <div className="absolute bottom-[45%] left-[90%] w-14 h-14 bg-violet-300/30 rounded-full blur-lg animate-float-vertical opacity-55" style={{
          animationDelay: '18s',
          animationDuration: '11s'
        }}></div>
        
        {/* Color Splotches */}
        <div className="absolute top-[60%] left-[10%] w-52 h-52 bg-gradient-to-br from-purple-200/20 via-violet-200/15 to-transparent rounded-full blur-2xl opacity-60" style={{
          animationDelay: '3s',
          animationDuration: '35s'
        }}></div>
        <div className="absolute bottom-[35%] right-[20%] w-48 h-48 bg-gradient-to-br from-indigo-200/25 via-purple-200/20 to-transparent rounded-full blur-2xl opacity-50" style={{
          animationDelay: '15s',
          animationDuration: '40s'
        }}></div>
        <div className="absolute top-[40%] right-[5%] w-64 h-64 bg-gradient-to-br from-violet-200/18 via-purple-100/22 to-transparent rounded-full blur-3xl opacity-55" style={{
          animationDelay: '25s',
          animationDuration: '33s'
        }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl mx-auto py-12">
        {/* Header Section - Matching Hero Style */}
        <div className="text-center mb-12 lg:mb-16">
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

        {/* Fixed Grid Layout to prevent cut-off */}
        <div className="relative">
          {/* Desktop Layout - Adjusted positioning to prevent cut-off */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Manufacturing - Top Left */}
              <div className="transform rotate-[-1deg]">
                <IndustryCard 
                  industry={industries[0]} 
                  index={0} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Government - Top Right */}
              <div className="transform rotate-[1deg]">
                <IndustryCard 
                  industry={industries[1]} 
                  index={1} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Healthcare - Bottom Left */}
              <div className="transform rotate-[1deg]">
                <IndustryCard 
                  industry={industries[2]} 
                  index={2} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
              
              {/* Logistics - Bottom Right */}
              <div className="transform rotate-[-1deg]">
                <IndustryCard 
                  industry={industries[3]} 
                  index={3} 
                  visibleCards={visibleCards}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                />
              </div>
            </div>

            {/* CTA Block - Centered below the grid */}
            <div className="flex justify-center mt-12">
              <CTABlock />
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
      {/* Card Background with Enhanced Glassmorphism */}
      <div className="backdrop-blur-xl bg-white/90 border border-white/50 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-2 overflow-hidden min-h-[200px] flex flex-col">
        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-50/60 to-violet-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Icon */}
          <div className={`w-12 h-12 bg-gradient-to-br ${industry.iconBg} rounded-xl flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
            <industry.icon className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
            {industry.title}
          </h3>
          
          {/* Description or Hover Insight */}
          <div className="min-h-[3rem] flex-1">
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

// CTA Block Component
const CTABlock = () => (
  <div className="relative group max-w-xs">
    <div className="backdrop-blur-xl bg-gradient-to-br from-purple-100/90 to-violet-100/70 border border-purple-200/60 rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden min-h-[200px] flex flex-col">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/40 to-violet-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 text-center flex-1 flex flex-col">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-500/30 group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
          <Search className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-lg font-bold mb-3 text-gray-900 leading-tight">
          Don't See Your Industry?
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">
          Our platform adapts to unique sector requirements. Let's discuss your specific needs.
        </p>
        
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-purple-200 rounded-full text-purple-600 font-semibold hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 group-hover:scale-105 shadow-sm hover:shadow-md text-sm mt-auto">
          Let's Talk 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default IndustriesSection;
