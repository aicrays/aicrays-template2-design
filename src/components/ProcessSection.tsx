
import React, { useEffect, useRef, useState } from "react";
import { Search, Wrench, Code, Globe } from "lucide-react";

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Learn your goals, audit current systems, and identify opportunities for improvement and integration.",
      stat: "90% faster onboarding",
      position: { desktop: { x: 15, y: 20 }, mobile: { x: 50, y: 10 } }
    },
    {
      icon: Wrench,
      title: "Design",
      description: "Develop architecture and prototypes that align with your workflows and technical requirements.",
      stat: "3x faster iteration cycles",
      position: { desktop: { x: 35, y: 5 }, mobile: { x: 50, y: 35 } }
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your specifications.",
      stat: "50% reduced development time",
      position: { desktop: { x: 65, y: 8 }, mobile: { x: 50, y: 60 } }
    },
    {
      icon: Globe,
      title: "Deploy & Support",
      description: "Go live with comprehensive testing, then optimize and maintain for continued performance.",
      stat: "99.9% uptime guaranteed",
      position: { desktop: { x: 85, y: 25 }, mobile: { x: 50, y: 85 } }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps progressively based on scroll
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 400);
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

  const TimelineNode = ({ step, index, isVisible }: { step: any, index: number, isVisible: boolean }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const isActive = scrollProgress > (index + 1) / (processSteps.length + 1);
    
    return (
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          left: `${window.innerWidth >= 768 ? step.position.desktop.x : step.position.mobile.x}%`,
          top: `${window.innerWidth >= 768 ? step.position.desktop.y : step.position.mobile.y}%`,
          animationDelay: `${index * 0.2}s`
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm border border-purple-200 rounded-lg px-3 py-2 text-sm font-medium text-purple-700 shadow-xl z-20 whitespace-nowrap animate-fade-in">
            {step.stat}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-200"></div>
          </div>
        )}
        
        {/* Glowing Node */}
        <div className={`relative w-20 h-20 rounded-full transition-all duration-500 ${
          isActive 
            ? 'bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl shadow-purple-500/40 animate-pulse-glow' 
            : 'bg-gradient-to-br from-purple-200 to-purple-300 shadow-lg'
        } hover:scale-110 cursor-pointer`}>
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm"></div>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <step.icon className={`w-8 h-8 transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-purple-600'
            }`} strokeWidth={2.5} />
          </div>
          
          {/* Outer ring animation */}
          {isActive && (
            <div className="absolute inset-0 rounded-full border-2 border-purple-300 animate-ping opacity-75"></div>
          )}
        </div>
        
        {/* Step Card */}
        <div className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-64 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="glass-morphism-card p-4 bg-white/90 backdrop-blur-sm border border-white/60 text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                Step {index + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden" 
      id="process" 
      ref={sectionRef}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/15 to-purple-400/10 rounded-full blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-purple-300/10 to-purple-500/5 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-purple-400/30 rounded-full animate-float"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-purple-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-600/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer shadow-lg">
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            How We Build
          </h2>
          <p className="section-subtitle mx-auto text-gray-600 max-w-2xl">
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk and maximize customization.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative h-96 lg:h-80 mb-16">
          {/* Curved Timeline Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(196, 181, 253)" stopOpacity="0.4" />
                <stop offset="25%" stopColor="rgb(167, 139, 250)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(139, 92, 246)" stopOpacity="0.8" />
                <stop offset="75%" stopColor="rgb(124, 58, 237)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="rgb(109, 40, 217)" stopOpacity="1" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Curved path */}
            <path 
              d="M 15 20 Q 35 5, 65 8 Q 85 12, 85 25" 
              stroke="url(#timelineGradient)" 
              strokeWidth="0.8" 
              fill="none" 
              filter="url(#glow)"
              className="opacity-90"
              strokeDasharray={scrollProgress > 0.3 ? "none" : "2,2"}
              style={{
                strokeDashoffset: scrollProgress > 0.3 ? 0 : 100,
                transition: 'stroke-dashoffset 2s ease-out'
              }}
            />
            
            {/* Mobile vertical path */}
            <path 
              d="M 50 10 L 50 85" 
              stroke="url(#timelineGradient)" 
              strokeWidth="0.8" 
              fill="none" 
              filter="url(#glow)"
              className="opacity-90 lg:hidden"
              strokeDasharray={scrollProgress > 0.3 ? "none" : "2,2"}
            />
          </svg>

          {/* Timeline Nodes */}
          {processSteps.map((step, index) => (
            <TimelineNode
              key={step.title}
              step={step}
              index={index}
              isVisible={visibleSteps.includes(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block relative">
            <a 
              href="#contact" 
              className="button-primary group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold"
            >
              <span className="relative z-10">Schedule a Discovery Session</span>
              
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-3">
            {processSteps.map((_, index) => (
              <div 
                key={index}
                className={`rounded-full transition-all duration-500 ${
                  visibleSteps.includes(index) 
                    ? 'w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg animate-pulse' 
                    : 'w-2 h-2 bg-gray-300'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
