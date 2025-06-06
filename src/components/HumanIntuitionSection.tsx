
import React, { useRef } from "react";
import PulseChip from "./ui/pulse-chip";
import FeatureList from "./HumanIntuition/FeatureList";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50/30 via-purple-50/45 to-violet-50/35 relative overflow-hidden" id="human-intuition" ref={sectionRef}>
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-purple-200/16 to-purple-400/8 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-gradient-to-tl from-blue-200/18 to-blue-400/6 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '3s', animationDuration: '24s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/12 to-purple-500/5 rounded-full blur-3xl animate-float opacity-42" style={{ animationDelay: '1.5s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-tl from-blue-300/14 to-blue-500/4 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[70%] right-[60%] w-48 h-48 bg-gradient-to-br from-purple-400/15 to-purple-200/10 rounded-full blur-2xl animate-float opacity-48" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] left-[20%] w-40 h-40 bg-gradient-to-tl from-blue-400/12 to-blue-200/8 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '5s', animationDuration: '17s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[30%] right-[25%] w-3 h-3 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[50%] left-[35%] w-2 h-2 bg-blue-300/70 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[65%] left-[70%] w-2.5 h-2.5 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <PulseChip className="mb-6">
              <span>Human-Like Intuition</span>
            </PulseChip>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent">
              Beyond algorithms to true understanding
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Atlas goes beyond programmed responses to develop contextual awareness and
              adaptive learning patterns that mirror human intuition. This enables natural
              interactions that feel like working with a human colleague rather than a machine.
            </p>
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
