
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
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Design",
      description: "Develop architecture and prototypes that align with your workflows and technical requirements.",
      details: "Interactive prototypes and detailed technical specifications with your team's feedback incorporated.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Code,
      title: "Develop",
      description: "Build secure, scalable software using modular components tailored to your specifications.",
      details: "Agile development sprints with weekly demos and continuous integration/deployment.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      title: "Deploy & Support",
      description: "Go live with comprehensive testing, then optimize and maintain for continued performance.",
      details: "24/7 monitoring, performance optimization, and ongoing feature enhancements.",
      gradient: "from-orange-500 to-orange-600"
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
              }, index * 200);
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" id="process" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pulse-300 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pulse-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span>Our Process</span>
          </div>
          <h2 className="section-title mb-6">
            How We Build
          </h2>
          <p className="section-subtitle mx-auto">
            Our delivery approach balances speed with strategy, using modular frameworks to reduce risk and maximize customization.
          </p>
        </div>

        {/* Progress Line - Desktop Only */}
        <div className="hidden lg:block relative mb-12">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-pulse-400 to-pulse-600 rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, index) => (
            <div 
              key={step.title}
              className={`text-center group cursor-pointer transition-all duration-500 ${
                visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="relative mb-6">
                {/* Main Icon Circle */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} border-2 border-white rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg relative overflow-hidden`}>
                  <step.icon className="w-8 h-8 text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
                </div>
                
                {/* Step Number Badge */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${step.gradient} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md group-hover:scale-110 transition-transform`}>
                  {index + 1}
                </div>

                {/* Connection Line for Desktop - Only show between steps */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-x-8">
                    <div className={`h-full transition-all duration-1000 ${
                      visibleSteps.includes(index + 1) 
                        ? 'bg-gradient-to-r from-pulse-400 to-pulse-200' 
                        : 'bg-gray-300'
                    }`}></div>
                  </div>
                )}
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-pulse-700 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                {step.description}
              </p>

              {/* Expandable Details */}
              <div className={`overflow-hidden transition-all duration-500 ${
                activeStep === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="bg-pulse-50 rounded-lg p-3 text-sm text-pulse-700 font-medium border-l-3 border-pulse-400">
                  {step.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-block">
            <a 
              href="#contact" 
              className="button-primary group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Schedule a Discovery Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pulse-600 to-pulse-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {processSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  visibleSteps.includes(index) ? 'bg-pulse-500' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
