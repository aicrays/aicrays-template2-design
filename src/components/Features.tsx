
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
        "feature-card opacity-0 p-6 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:bg-white/95 hover:border-purple-200/60 group relative overflow-hidden",
        "hover:scale-[1.02]"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Enhanced background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-blue-50/40 to-violet-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Soft inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        {/* Enhanced 3D icon with gradient */}
        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative overflow-hidden shadow-lg">
          {/* Inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-2xl"></div>
          {/* Top shine */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl"></div>
          <div className="relative z-10 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-purple-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
          {description}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-100/40 via-blue-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
    <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 overflow-hidden" id="features" ref={sectionRef}>
      {/* Enhanced Floating Background Elements with more variety */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute top-[15%] right-[10%] w-48 h-48 bg-purple-400/35 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[20%] left-[8%] w-56 h-56 bg-blue-400/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-40 h-40 bg-purple-500/40 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '2s', animationDuration: '18s' }}></div>
        
        {/* Medium orbs with blue tones */}
        <div className="absolute top-[35%] left-[20%] w-32 h-32 bg-blue-300/35 rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '7s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[45%] right-[15%] w-36 h-36 bg-purple-300/40 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        <div className="absolute top-[25%] left-[60%] w-28 h-28 bg-blue-400/30 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '9s', animationDuration: '14s' }}></div>
        
        {/* Small orbs for depth */}
        <div className="absolute top-[70%] left-[25%] w-20 h-20 bg-purple-400/45 rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        <div className="absolute top-[45%] right-[40%] w-24 h-24 bg-blue-300/40 rounded-full blur-xl animate-float opacity-65" style={{ animationDelay: '8s', animationDuration: '17s' }}></div>
        <div className="absolute bottom-[15%] left-[70%] w-18 h-18 bg-purple-500/35 rounded-full blur-xl animate-float opacity-55" style={{ animationDelay: '6s', animationDuration: '19s' }}></div>
        
        {/* Tiny particles */}
        <div className="absolute top-[30%] left-[40%] w-3 h-3 bg-purple-600/70 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[80%] right-[25%] w-2.5 h-2.5 bg-blue-500/60 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[50%] left-[85%] w-4 h-4 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '10s' }}></div>
        <div className="absolute bottom-[35%] right-[60%] w-2 h-2 bg-blue-400/65 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="section-container relative z-10 py-8">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white/70 backdrop-blur-sm text-purple-700 border border-purple-200/50 shadow-lg mb-6 opacity-0 fade-in-element hover:scale-105 transition-transform cursor-pointer">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mr-3"></span>
            <span>Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-700 bg-clip-text text-transparent opacity-0 fade-in-element">
            Advanced Intelligence, <br className="hidden sm:block" />Human-Like Intuition
          </h2>
          <p className="text-lg text-gray-600 mx-auto opacity-0 fade-in-element font-medium max-w-2xl">
            Built with cutting-edge technology to understand, learn, and adapt to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path><path d="M12 8a4 4 0 1 0 4 4"></path><circle cx="12" cy="12" r="1"></circle></svg>}
            title="Adaptive Learning"
            description="Atlas learns from your interactions, continuously improving its responses and actions to better serve your needs."
            index={0}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 13v-1h6v1"></path><path d="M11 18.5l-.5-1 1-.5.5 1.5-1 .5-.5-1 1-.5"></path><path d="M9.5 12 9 11H4"></path></svg>}
            title="Natural Interaction"
            description="Communicate using natural language and gestures. Atlas understands context and responds appropriately."
            index={1}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="18" height="11" x="3" y="11" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" x2="8" y1="16" y2="16"></line><line x1="16" x2="16" y1="16" y2="16"></line></svg>}
            title="Precise Movement"
            description="Advanced motorized joints provide fluid, human-like movement with exceptional balance and coordination."
            index={2}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="16.5 14.6 16.5 19.79 21 12"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>}
            title="Spatial Awareness"
            description="Advanced sensors and mapping technology allow Atlas to navigate complex environments with ease."
            index={3}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>}
            title="Enhanced Security"
            description="Built-in protocols protect your data and privacy, while physical safeguards ensure safe operation."
            index={4}
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 6H3v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2"></path><path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"></path><line x1="12" x2="12" y1="11" y2="15"></line><line x1="10" x2="14" y1="13" y2="13"></line></svg>}
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
