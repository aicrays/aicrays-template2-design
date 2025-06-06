
import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Shield, Zap, Brain, Rocket } from "lucide-react";

const WhyAicraysSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      icon: Building2,
      title: "Enterprise Experience",
      description: "10+ years building mission-critical systems for Fortune 500 companies across manufacturing, healthcare, and logistics.",
      status: "Proven",
      gradient: "from-purple-500 via-purple-600 to-blue-600"
    },
    {
      icon: Users,
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a vendor. Your success drives our platform development roadmap.",
      status: "Collaborative",
      gradient: "from-purple-600 via-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Security-First Design",
      description: "Every platform is built with enterprise-grade security, compliance frameworks, and data protection from day one.",
      status: "Compliant",
      gradient: "from-blue-500 via-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "From concept to production in weeks, not months. Our modular approach accelerates development without compromising quality.",
      status: "Fast",
      gradient: "from-purple-500 via-blue-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI-Native Architecture",
      description: "Built from the ground up for AI integration. Machine learning and automation aren't add-ons—they're core features.",
      status: "Intelligent",
      gradient: "from-blue-600 via-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Continuous Evolution",
      description: "Your platform grows with your business. Regular updates, new features, and scaling capabilities included.",
      status: "Scalable",
      gradient: "from-purple-600 via-purple-500 to-blue-500"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      "Proven": "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
      "Collaborative": "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
      "Compliant": "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
      "Fast": "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100",
      "Intelligent": "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100",
      "Scalable": "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100"
    };
    return colors[status as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reasons.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 120);
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
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50/40 via-blue-50/30 to-purple-50/50" id="why-aicrays">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute top-[10%] right-[15%] w-52 h-52 bg-gradient-to-br from-purple-400/40 to-blue-400/30 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-[15%] left-[10%] w-60 h-60 bg-gradient-to-br from-blue-500/35 to-purple-500/40 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '6s', animationDuration: '26s' }}></div>
        <div className="absolute top-[55%] right-[30%] w-44 h-44 bg-gradient-to-br from-purple-500/45 to-blue-400/35 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs with varied colors */}
        <div className="absolute top-[25%] left-[20%] w-36 h-36 bg-gradient-to-br from-blue-400/40 to-purple-300/35 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[40%] right-[20%] w-40 h-40 bg-gradient-to-br from-purple-400/40 to-blue-500/30 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        <div className="absolute top-[70%] left-[40%] w-32 h-32 bg-gradient-to-br from-blue-300/35 to-purple-400/40 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '10s', animationDuration: '16s' }}></div>
        
        {/* Small floating elements */}
        <div className="absolute top-[35%] right-[50%] w-24 h-24 bg-gradient-to-br from-purple-500/35 to-blue-400/40 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '5s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[25%] left-[60%] w-28 h-28 bg-gradient-to-br from-blue-400/40 to-purple-300/35 rounded-full blur-xl animate-float opacity-55" style={{ animationDelay: '7s', animationDuration: '19s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-purple-600/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[75%] right-[35%] w-2.5 h-2.5 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[45%] left-[75%] w-4 h-4 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '9s' }}></div>
        <div className="absolute bottom-[30%] right-[70%] w-2 h-2 bg-blue-400/65 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-8">
          <div 
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></span>
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent leading-tight tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Built by Experts Who Understand Enterprise
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed opacity-0 animate-fade-in max-w-3xl mx-auto font-medium mb-6" style={{ animationDelay: "0.5s" }}>
            We're not just developers—we're enterprise technology partners with deep industry expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group cursor-pointer transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative backdrop-blur-xl bg-white/85 border border-white/50 rounded-2xl p-5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:bg-white/95 hover:border-purple-200/60 hover:-translate-y-3 overflow-hidden h-full flex flex-col group-hover:scale-[1.02]">
                {/* Enhanced background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-purple-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-purple-400/8 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    {/* Enhanced 3D icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div>
                      <reason.icon className="w-6 h-6 text-white relative z-10" strokeWidth={2.5} />
                    </div>
                    
                    <Badge 
                      className={`text-xs transition-colors ${getStatusColor(reason.status)}`}
                    >
                      {reason.status}
                    </Badge>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors leading-tight">
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* Enhanced corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/40 via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <p className="text-gray-600 mb-4 text-base">Ready to work with a team that gets it?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 font-medium text-sm backdrop-blur-sm"
          >
            Schedule a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyAicraysSection;
