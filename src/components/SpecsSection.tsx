
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-gradient-to-br from-blue-50/30 via-purple-50/40 to-violet-50/35 relative overflow-hidden" id="specifications">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-br from-purple-200/15 to-purple-400/8 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-tl from-blue-200/18 to-blue-400/6 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-br from-purple-300/12 to-purple-500/5 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '1.5s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-tl from-blue-300/10 to-blue-500/4 rounded-full blur-3xl animate-float opacity-38" style={{ animationDelay: '4s', animationDuration: '20s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[70%] left-[60%] w-40 h-40 bg-gradient-to-br from-purple-400/15 to-purple-200/10 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] right-[20%] w-48 h-48 bg-gradient-to-tl from-blue-400/12 to-blue-200/8 rounded-full blur-2xl animate-float opacity-42" style={{ animationDelay: '5s', animationDuration: '17s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[35%] left-[30%] w-2.5 h-2.5 bg-purple-600/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[45%] right-[40%] w-2 h-2 bg-blue-300/70 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[60%] right-[60%] w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-700 text-white mr-2">3</span>
              <span>Specifications</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-300 to-purple-500 opacity-60"></div>
        </div>
        
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent leading-tight">
            Technical Excellence Meets Human Focus
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-medium max-w-4xl">
            Atlas works with your team, not instead of it. By handling repetitive tasks, improving safety conditions, and learning from every interaction, Atlas helps humans focus on what they do best: create, solve, and innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
