
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Factory, Building2, MapPin, MessageSquare, Shield, Users } from "lucide-react";

const CaseStudiesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleDevCards, setVisibleDevCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const devSectionRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      title: "Manufacturing Efficiency System",
      category: "Manufacturing",
      description: "Automated quality control and predictive maintenance reduced downtime by 40% and increased output quality scores.",
      status: "Deployed",
      metrics: "40% reduction in downtime",
      icon: Factory,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Smart City Infrastructure",
      category: "Smart Cities", 
      description: "Integrated IoT sensors and AI analytics optimized traffic flow and reduced energy consumption across municipal systems.",
      status: "Deployed",
      metrics: "25% energy savings",
      icon: Building2,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Healthcare Data Platform",
      category: "Healthcare",
      description: "Secure patient data management with real-time analytics improved care coordination and compliance reporting.",
      status: "Deployed", 
      metrics: "99.9% uptime achieved",
      icon: Users,
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const developmentSolutions = [
    {
      title: "Fleet Management Platform",
      category: "Logistics",
      description: "Real-time dispatch, field visibility, and location tracking for enterprise fleet operations.",
      status: "In Development",
      timeline: "Q3 2025",
      icon: MapPin,
      cta: "Get Early Access"
    },
    {
      title: "AI Quote Assistant", 
      category: "Sales Automation",
      description: "Predictive quote generator using NLP and business logic for rapid proposal creation.",
      status: "Pilot Available",
      timeline: "Accepting Clients",
      icon: MessageSquare,
      cta: "Request Demo"
    },
    {
      title: "IAM + RFID Integration",
      category: "Security",
      description: "Hybrid access control with physical + digital components for enterprise security.",
      status: "Partner Build",
      timeline: "Q4 2025",
      icon: Shield,
      cta: "Learn More"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.solution-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleDevCards(prev => [...prev, index]);
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = devSectionRef.current?.querySelectorAll('.dev-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden" id="case-studies">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Diagonal SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,50 350,50 600,20 C850,50 1050,50 1200,0 L1200,120 L0,120 Z" fill="white"/>
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className="pulse-chip mx-auto mb-6 opacity-0 animate-fade-in hover:scale-105 transition-transform cursor-pointer"
            style={{ animationDelay: "0.1s" }}
          >
            <span>Real Solutions, Real Impact</span>
          </div>
          <h2 className="section-title mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            What We've Delivered
          </h2>
          <p className="section-subtitle mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            See how our modular technology platforms drive measurable results across industries.
          </p>
        </div>

        {/* Deployed Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" ref={sectionRef}>
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`solution-card glass-card p-6 lg:p-8 group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] relative overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                {solution.status}
              </div>

              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-purple-50/20 group-hover:to-purple-100/10 transition-all duration-500"></div>
              
              <div className="relative z-10 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    <solution.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-200">
                    <Factory className="w-3 h-3 inline mr-1" />
                    {solution.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {solution.description}
                </p>

                {/* Metrics */}
                <div className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-200 mb-4">
                  <p className="text-sm font-semibold text-purple-700">{solution.metrics}</p>
                </div>
                
                {/* CTA */}
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                  <span className="mr-2">View Full Solution</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Section Divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1 max-w-xs"></div>
          <div className="px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mx-4">
            What We're Building Next
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1 max-w-xs"></div>
        </div>

        {/* In Development Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Solutions in Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={devSectionRef}>
            {developmentSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`dev-card glass-card p-6 lg:p-8 group cursor-pointer transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] relative overflow-hidden ${
                  visibleDevCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {solution.status}
                </div>

                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 group-hover:from-purple-50/20 group-hover:to-purple-100/10 transition-all duration-500"></div>
                
                <div className="relative z-10 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <solution.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </div>
                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-200">
                      {solution.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {solution.description}
                  </p>

                  {/* Timeline */}
                  <div className="bg-purple-50 px-4 py-2 rounded-lg border border-purple-200 mb-4">
                    <p className="text-sm font-semibold text-purple-700">{solution.timeline}</p>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                    <span className="mr-2">{solution.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Banner */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Want to see your results here?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join the companies already benefiting from our modular technology platform. 
            Let's build something impactful together.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Start Building With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
