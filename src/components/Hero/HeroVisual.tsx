
import React from "react";

const HeroVisual = () => {
  return (
    <div className="w-full lg:w-1/2 relative flex items-center justify-center">
      {/* Clean visual space - no bubbles, just elegant background elements */}
      <div className="relative h-[500px] lg:h-[600px] w-full overflow-visible">
        {/* Soft atmospheric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/30 via-transparent to-pulse-100/20 rounded-3xl"></div>
        
        {/* Subtle floating accent elements */}
        <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-pulse-400/30 rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-pulse-500/25 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-[30%] right-[40%] w-2.5 h-2.5 bg-blue-400/20 rounded-full animate-float opacity-45" style={{ animationDelay: '5s' }}></div>
      </div>
    </div>
  );
};

export default HeroVisual;
