
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
        "rounded-2xl p-6 cursor-pointer transition-all duration-500 border group relative overflow-hidden",
        isActive 
          ? "bg-white/90 shadow-xl border-purple-200/50 backdrop-blur-xl" 
          : "bg-white/60 hover:bg-white/80 border-transparent backdrop-blur-sm hover:shadow-lg"
      )}
      onClick={onClick}
    >
      {/* Enhanced background glow */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-purple-50/60 opacity-0 transition-opacity duration-500 rounded-2xl",
        isActive && "opacity-100"
      )}></div>
      
      <div className="flex items-start relative z-10">
        <div className={cn(
          "flex items-center justify-center rounded-xl w-12 h-12 mr-4 flex-shrink-0 transition-all duration-300 shadow-lg relative overflow-hidden",
          isActive 
            ? "bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 text-white scale-110" 
            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
        )}>
          {isActive && (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-xl"></div>
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div>
            </>
          )}
          <span className="relative z-10 font-bold">{number}</span>
        </div>
        <div>
          <h3 className={cn(
            "text-lg font-semibold mb-2 transition-colors duration-300",
            isActive ? "text-purple-700" : "text-gray-800"
          )}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
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
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 relative overflow-hidden" id="how-it-works" ref={sectionRef}>
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] right-[10%] w-44 h-44 bg-gradient-to-br from-purple-400/30 to-blue-400/25 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[20%] left-[8%] w-52 h-52 bg-gradient-to-br from-blue-500/25 to-purple-500/30 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[40%] w-36 h-36 bg-gradient-to-br from-purple-500/35 to-blue-400/25 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
        
        {/* Additional medium orbs */}
        <div className="absolute top-[35%] left-[25%] w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-300/25 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '10s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[45%] right-[25%] w-28 h-28 bg-gradient-to-br from-purple-400/25 to-blue-500/30 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        
        {/* Particle effects */}
        <div className="absolute top-[25%] left-[40%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[75%] right-[30%] w-2.5 h-2.5 bg-blue-500/55 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[50%] left-[80%] w-4 h-4 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '11s' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 hover:scale-105 transition-transform cursor-pointer">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></span>
            <span>Process</span>
          </div>
          <h2 className="section-title mb-4 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent">How Atlas Integrates Into Your Life</h2>
          <p className="section-subtitle mx-auto">
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
          
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-xl order-1 lg:order-2 opacity-0 fade-in-stagger backdrop-blur-sm">
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-purple-400 font-medium mb-2 block">{step.number}</span>
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
