import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="rounded-full bg-pulse-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-pulse-500 mb-4 sm:mb-5">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-purple-50/20 to-violet-50/30 overflow-hidden" id="features" ref={sectionRef}>
      {/* ... keep existing code (background elements) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] right-[20%] w-36 h-36 bg-purple-200/22 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[15%] left-[15%] w-44 h-44 bg-violet-300/18 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '6s', animationDuration: '22s' }}></div>
        <div className="absolute top-[70%] right-[40%] w-28 h-28 bg-purple-300/25 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '4s', animationDuration: '16s' }}></div>
        
        {/* Particle dots with better visibility */}
        <div className="absolute top-[35%] left-[30%] w-2 h-2 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[80%] right-[30%] w-1.5 h-1.5 bg-violet-400/60 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
        <div className="absolute top-[50%] left-[80%] w-2.5 h-2.5 bg-purple-300/40 rounded-full animate-pulse" style={{ animationDelay: '9s' }}></div>
      </div>
      
      <div className="section-container relative z-10 py-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="pulse-chip mx-auto mb-6 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent opacity-0 fade-in-element">
            Advanced Intelligence, <br className="hidden sm:block" />Human-Like Intuition
          </h2>
          <p className="text-lg text-gray-600 mx-auto opacity-0 fade-in-element font-medium max-w-2xl">
            Built with cutting-edge technology to understand, learn, and adapt to your unique needs.
          </p>
        </div>
        
        {/* ... keep existing code (feature cards grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path><path d="M12 8a4 4 0 1 0 4 4"></path><circle cx="12" cy="12" r="1"></circle></svg>}
            title="Adaptive Learning"
            description="Atlas learns from your interactions, continuously improving its responses and actions to better serve your needs."
            index={0}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 13v-1h6v1"></path><path d="M11 18.5l-.5-1 1-.5.5 1.5-1 .5-.5-1 1-.5"></path><path d="M9.5 12 9 11H4"></path></svg>}
            title="Natural Interaction"
            description="Communicate using natural language and gestures. Atlas understands context and responds appropriately."
            index={1}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><rect width="18" height="11" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="8" y1="16" y2="16"></line><line x1="16" x2="16" y1="16" y2="16"></line></svg>}
            title="Precise Movement"
            description="Advanced motorized joints provide fluid, human-like movement with exceptional balance and coordination."
            index={2}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>}
            title="Spatial Awareness"
            description="Advanced sensors and mapping technology allow Atlas to navigate complex environments with ease."
            index={3}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>}
            title="Enhanced Security"
            description="Built-in protocols protect your data and privacy, while physical safeguards ensure safe operation."
            index={4}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M16 6H3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"></path><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path><line x1="12" x2="12" y1="11" y2="15"></line><line x1="10" x2="14" y1="13" y2="13"></line></svg>}
            title="Task Assistance"
            description="From simple reminders to complex multi-step tasks, Atlas can assist with a wide range of activities."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
