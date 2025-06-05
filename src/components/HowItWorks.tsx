
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
        "rounded-xl p-6 cursor-pointer transition-all duration-500 border",
        isActive 
          ? "bg-white shadow-elegant border-pulse-200" 
          : "bg-white/50 hover:bg-white/80 border-transparent"
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={cn(
          "flex items-center justify-center rounded-full w-10 h-10 mr-4 flex-shrink-0 transition-colors duration-300",
          isActive ? "bg-pulse-500 text-white" : "bg-gray-100 text-gray-500"
        )}>
          {number}
        </div>
        <div>
          <h3 className={cn(
            "text-lg font-semibold mb-2 transition-colors duration-300",
            isActive ? "text-pulse-600" : "text-gray-800"
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
    <section className="py-16 lg:py-20 min-h-screen flex items-center bg-gradient-to-br from-purple-50/40 via-violet-50/30 to-white relative overflow-hidden" id="how-it-works" ref={sectionRef}>
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-[20%] right-[15%] w-40 h-40 bg-purple-300/15 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[25%] left-[10%] w-48 h-48 bg-violet-400/12 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '3s', animationDuration: '16s' }}></div>
        
        {/* Medium floating orbs */}
        <div className="absolute top-[40%] left-[20%] w-28 h-28 bg-indigo-300/18 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '8s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[50%] right-[20%] w-36 h-36 bg-violet-300/15 rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '4s', animationDuration: '24s' }}></div>
        
        {/* Small floating orbs */}
        <div className="absolute top-[75%] left-[30%] w-20 h-20 bg-violet-400/18 rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>
        <div className="absolute top-[35%] right-[40%] w-24 h-24 bg-purple-300/16 rounded-full blur-xl animate-float opacity-55" style={{ animationDelay: '7s', animationDuration: '17s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[30%] left-[25%] w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[70%] right-[25%] w-1.5 h-1.5 bg-violet-400/45 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[50%] left-[70%] w-2.5 h-2.5 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '9s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-4 opacity-0 fade-in-stagger">
            <span>Process</span>
          </div>
          <h2 className="section-title mb-4 opacity-0 fade-in-stagger">How Atlas Integrates Into Your Life</h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-stagger">
            A seamless four-step process from request to full integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
          
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-elegant order-1 lg:order-2 opacity-0 fade-in-stagger">
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
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-pulse-400 font-medium mb-2 block">{step.number}</span>
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
