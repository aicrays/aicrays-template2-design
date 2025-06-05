
import React, { useEffect, useRef, useState } from "react";
import { Search, Wrench, Code, Globe } from "lucide-react";

const ProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [progressWidth, setProgressWidth] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      icon: Search,
      title: "Discover",
      description: "Learn your goals, audit current systems, and identify opportunities for improvement and integration.",
      details: "1-2 week comprehensive analysis including stakeholder interviews and technical assessment.",
      saturation: "500"
    },
    {
      icon: Wrench,
      title: "Design",
      description: "Develop architecture and prototypes that align with your workflows and technical requirements.",
      details: "Interactive prototypes and detailed technical specifications with your team's feedback incorporated.",
      saturation: "600"
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your specifications.",
      details: "Agile development sprints with weekly demos and continuous integration/deployment.",
      saturation: "700"
    },
    {
      icon: Globe,
      title: "Deploy & Support",
      description: "Go live with comprehensive testing, then optimize and maintain for continued performance.",
      details: "24/7 monitoring, performance optimization, and ongoing feature enhancements.",
      saturation: "800"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all steps progressively
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
                setProgressWidth((index + 1) * 25);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-pulse-50/30 to-white relative overflow-hidden" id="process" ref={sectionRef}>
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pulse-400/50 to-transparent"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-pulse-200/20 to-pulse-400/10 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-pulse-300/15 to-pulse-500/10 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pulse-400/20 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-pulse-500/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pulse-600/25 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer shadow-lg">
            <span>Our Process</span>
          </div>
          <h2 className="section-title mb-6 bg-gradient-to-r from-gray-900 via-pulse-700 to-gray-900 bg-clip-text text-transparent">
            How We Build
          </h2>
          <p className="section-subtitle mx-auto text-gray-600">
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk and maximize customization.
          </p>
        </div>

        {/* Enhanced Timeline - Desktop Only */}
        <div className="hidden lg:block relative mb-16">
          {/* Curved timeline path */}
          <div className="absolute top-8 left-[8%] right-[8%] h-0.5">
            <svg className="w-full h-24" viewBox="0 0 800 96" preserveAspectRatio="none">
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                  <stop offset="25%" stopColor="rgb(147, 51, 234)" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="rgb(126, 34, 206)" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="rgb(107, 33, 168)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="rgb(88, 28, 135)" stopOpacity="1" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Curved path */}
              <path 
                d="M 50 48 Q 200 20, 400 48 Q 600 76, 750 48" 
                stroke="url(#timelineGradient)" 
                strokeWidth="3" 
                fill="none" 
                filter="url(#glow)"
                className="opacity-80"
              />
              
              {/* Animated progress line */}
              <path 
                d="M 50 48 Q 200 20, 400 48 Q 600 76, 750 48" 
                stroke="rgb(124, 58, 237)" 
                strokeWidth="4" 
                fill="none" 
                strokeDasharray="20 10"
                className="animate-pulse opacity-60"
                style={{
                  strokeDashoffset: visibleSteps.length > 0 ? '0' : '100',
                  transition: 'stroke-dashoffset 2s ease-out'
                }}
              />
              
              {/* Pulsing dots at step positions */}
              {[165, 335, 505, 675].map((x, index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={index % 2 === 0 ? 38 : 58}
                  r="4"
                  fill={`rgb(${index === 0 ? '168, 85, 247' : index === 1 ? '147, 51, 234' : index === 2 ? '126, 34, 206' : '107, 33, 168'})`}
                  className={`${visibleSteps.includes(index) ? 'animate-pulse opacity-100' : 'opacity-30'} transition-all duration-500`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className={`text-center group cursor-pointer transition-all duration-700 ${
                visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Enhanced Step Card */}
              <div className="relative mb-8 group">
                {/* Glassmorphism Main Circle */}
                <div className={`w-20 h-20 bg-gradient-to-br from-pulse-${step.saturation}/90 to-pulse-${step.saturation} backdrop-blur-xl border-2 border-white/40 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pulse-${step.saturation}/30 transition-all duration-500 relative overflow-hidden shadow-lg`}>
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  
                  <step.icon className="w-9 h-9 text-white relative z-10 drop-shadow-sm" />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-sm"></div>
                </div>
                
                {/* Step Number Badge */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-pulse-${step.saturation} to-pulse-${step.saturation} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300`}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Progress indicator line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 -translate-x-10 z-0">
                    <div className={`h-full transition-all duration-1000 ${
                      visibleSteps.includes(index + 1) 
                        ? 'bg-gradient-to-r from-pulse-500/60 to-pulse-400/30' 
                        : 'bg-gray-200'
                    }`}></div>
                  </div>
                )}
              </div>
              
              {/* Enhanced Content Card */}
              <div className="glass-morphism-card p-6 bg-white/80 backdrop-blur-sm border border-white/60 shadow-elegant hover:shadow-elegant-hover transition-all duration-500">
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  activeStep === index ? `text-pulse-${step.saturation}` : 'text-gray-900'
                }`}>
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {step.description}
                </p>

                {/* Enhanced Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeStep === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className={`bg-gradient-to-r from-pulse-50 to-pulse-100/50 rounded-lg p-4 text-sm text-pulse-${step.saturation} font-medium border-l-4 border-pulse-${step.saturation}/60 backdrop-blur-sm`}>
                    {step.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block relative">
            <a 
              href="#contact" 
              className="button-primary group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pulse-500/20 transition-all duration-500 px-8 py-4"
            >
              <span className="relative z-10 font-semibold">Schedule a Discovery Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full opacity-0 group-hover:opacity-100"></div>
            </a>
          </div>
        </div>

        {/* Enhanced Progress Dots */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-3">
            {processSteps.map((_, index) => (
              <div 
                key={index}
                className={`rounded-full transition-all duration-500 ${
                  visibleSteps.includes(index) 
                    ? `w-3 h-3 bg-gradient-to-r from-pulse-500 to-pulse-600 shadow-lg animate-pulse` 
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
