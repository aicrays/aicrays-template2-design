
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const StepCard = ({ number, title, description, isActive, onClick }: StepCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-2xl p-6 cursor-pointer transition-all duration-500 border relative overflow-hidden",
        isActive 
          ? "bg-white/95 shadow-2xl border-purple-200/80 scale-105" 
          : "bg-white/70 hover:bg-white/85 border-transparent hover:scale-102"
      )}
      onClick={onClick}
    >
      {/* Enhanced background glow */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-blue-50/40 rounded-2xl"></div>
      )}
      
      <div className="flex items-start relative z-10">
        <div className={cn(
          "flex items-center justify-center rounded-full w-12 h-12 mr-4 flex-shrink-0 transition-all duration-300 shadow-lg relative overflow-hidden",
          isActive 
            ? "bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white scale-110" 
            : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-500"
        )}>
          {/* Enhanced inner glow for active state */}
          {isActive && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent rounded-full"></div>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-full"></div>
            </>
          )}
          <span className="relative z-10 font-bold drop-shadow-sm">{number}</span>
        </div>
        <div>
          <h3 className={cn(
            "text-lg font-semibold mb-2 transition-colors duration-300",
            isActive ? "text-purple-800" : "text-gray-800"
          )}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      
      {/* Enhanced corner accent */}
      {isActive && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-100/50 via-blue-50/30 to-transparent opacity-60 rounded-2xl"></div>
      )}
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsData = [
    {
      number: "01",
      title: "Request Access",
      description: "Fill out the application form to join our early access program and secure your spot in line.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02",
      title: "Personalization",
      description: "We'll work with you to customize Atlas to your specific needs and preferences.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Integration",
      description: "Atlas arrives at your location and is integrated into your living or working environment.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "04",
      title: "Adaptation",
      description: "Through daily interaction, Atlas learns and adapts to your routines, preferences, and needs.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    // Auto-cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [stepsData.length]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/35 via-purple-50/50 to-violet-50/40 relative" id="how-it-works" ref={sectionRef}>
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute -top-20 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-purple-400/10 rounded-full opacity-60 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-gradient-to-tl from-blue-200/22 to-blue-400/8 rounded-full opacity-70 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-300/15 to-purple-500/8 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tl from-blue-300/12 to-blue-500/6 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/18 to-purple-200/12 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '2s' }}></div>
        
        {/* Particles */}
        <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-purple-600/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[40%] right-[15%] w-2 h-2 bg-blue-300/80 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span>Process</span>
          </div>
          <h2 className="section-title mb-4 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent">How Atlas Integrates Into Your Life</h2>
          <p className="section-subtitle mx-auto text-gray-700">
            A seamless four-step process from request to full integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1 opacity-0 fade-in-stagger">
            {stepsData.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
          
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-2xl order-1 lg:order-2 opacity-0 fade-in-stagger">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeStep === index ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-purple-300 font-medium mb-2 block">{step.number}</span>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
