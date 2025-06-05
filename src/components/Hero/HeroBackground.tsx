
import React from "react";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/40 via-white to-pulse-100/30"></div>
      
      {/* Soft Radial Gradients */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[80%] bg-gradient-to-br from-pulse-200/20 to-pulse-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-blue-200/15 to-purple-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-pulse-400/40 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pulse-500/30 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-pulse-600/35 rounded-full animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-blue-400/25 rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default HeroBackground;
