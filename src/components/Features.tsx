
import React, { useEffect, useRef, useState } from "react";
import { Shield, Zap, Users, Brain, ChevronRight } from "lucide-react";

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and multi-layered access controls protect your data and operations.",
      gradient: "from-purple-700 to-purple-800",
      iconBg: "from-purple-600 via-purple-700 to-purple-800"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times for critical business operations.",
      gradient: "from-blue-400 to-purple-600",
      iconBg: "from-blue-300 via-blue-400 to-purple-600"
    },
    {
      icon: Users,
      title: "Team Collaboration", 
      description: "Seamless workflows that enhance team productivity and cross-functional cooperation.",
      gradient: "from-purple-600 to-blue-500",
      iconBg: "from-purple-500 via-purple-600 to-blue-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms that adapt and improve with your business needs.",
      gradient: "from-purple-700 to-blue-600",
      iconBg: "from-purple-600 via-purple-700 to-blue-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
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
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/40 via-purple-50/60 to-violet-50/50 relative overflow-hidden" id="features" ref={sectionRef}>
      {/* Enhanced Background with Multiple Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[15%] left-[8%] w-96 h-96 bg-gradient-to-br from-purple-200/15 to-purple-400/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-blue-300/12 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[50%] right-[25%] w-64 h-64 bg-gradient-to-br from-purple-300/18 to-purple-500/8 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-[30%] right-[15%] w-48 h-48 bg-gradient-to-br from-blue-300/15 to-purple-300/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '6s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[35%] left-[20%] w-56 h-56 bg-gradient-to-tl from-purple-400/12 to-blue-200/18 rounded-full blur-3xl animate-float opacity-48" style={{ animationDelay: '8s', animationDuration: '22s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[70%] left-[30%] w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-200/15 rounded-full blur-2xl animate-float opacity-52" style={{ animationDelay: '1s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] right-[35%] w-40 h-40 bg-gradient-to-tl from-purple-500/15 to-blue-300/12 rounded-full blur-2xl animate-float opacity-47" style={{ animationDelay: '5s', animationDuration: '19s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[25%] left-[40%] w-3 h-3 bg-purple-400/60 rounded-full animate-pulse opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[30%] w-2 h-2 bg-blue-300/80 rounded-full animate-pulse opacity-65" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[45%] left-[70%] w-2.5 h-2.5 bg-purple-300/50 rounded-full animate-pulse opacity-58" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="section-container relative z-10 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-800 border border-purple-200/60 shadow-lg mb-6 hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-700 to-purple-800 mr-3"></span>
            <span>Core Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Built for Tomorrow's Challenges
          </h2>
          <p className="text-lg text-gray-700 mx-auto max-w-3xl font-medium">
            Enterprise-grade solutions designed to scale with your business and adapt to changing needs.
          </p>
        </div>

        {/* Enhanced Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={feature.title}
                className={`group cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Enhanced 3D Card with Multiple Shadows */}
                <div className="relative backdrop-blur-xl bg-white/85 border border-white/50 rounded-3xl p-6 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:bg-white/90 hover:border-purple-200/60 hover:-translate-y-4 hover:scale-105 overflow-hidden group-hover:shadow-purple-300/20">
                  {/* Enhanced Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/70 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/8 via-transparent to-blue-400/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Card Content */}
                  <div className="relative z-10">
                    {/* Enhanced 3D Icon with Multiple Gradients */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-2xl mb-5 group-hover:scale-110 group-hover:shadow-purple-400/40 transition-all duration-300 relative overflow-hidden`}>
                      {/* Multiple inner glow effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-2xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-2xl"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/10 to-transparent rounded-b-2xl"></div>
                      <feature.icon className="w-7 h-7 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-800 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-4">
                      {feature.description}
                    </p>

                    {/* Enhanced Hover Arrow */}
                    <div className="flex items-center text-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Enhanced Corner Accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/50 via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-100/40 via-purple-50/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
