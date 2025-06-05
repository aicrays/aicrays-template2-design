
import React from "react";

const HeroBackground = () => {
  const floatingOrbs = [
    { size: "w-20 h-20", position: "top-1/6 right-1/4", delay: "0s", opacity: "opacity-10", blur: "blur-sm" },
    { size: "w-16 h-16", position: "top-1/3 right-1/6", delay: "3s", opacity: "opacity-8", blur: "blur-md" },
    { size: "w-28 h-28", position: "top-1/2 right-1/8", delay: "6s", opacity: "opacity-12", blur: "blur-lg" },
    { size: "w-12 h-12", position: "bottom-1/3 right-1/3", delay: "2s", opacity: "opacity-15", blur: "blur-sm" },
    { size: "w-24 h-24", position: "bottom-1/5 right-1/5", delay: "4s", opacity: "opacity-10", blur: "blur-md" },
    { size: "w-14 h-14", position: "top-3/4 right-1/7", delay: "8s", opacity: "opacity-12", blur: "blur-lg" },
    { size: "w-32 h-32", position: "top-1/5 right-1/12", delay: "1s", opacity: "opacity-8", blur: "blur-xl" },
    { size: "w-18 h-18", position: "bottom-2/5 right-1/4", delay: "7s", opacity: "opacity-10", blur: "blur-md" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Mesh Base Layer */}
      <div className="absolute inset-0">
        {/* Primary gradient mesh */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-violet-100/40 via-purple-50/30 to-blue-100/40"
          style={{
            animation: 'gradientShift 20s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Secondary flowing gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-purple-100/30 via-pink-50/20 to-indigo-100/35"
          style={{
            animation: 'gradientFlow 25s ease-in-out infinite alternate-reverse'
          }}
        ></div>
        
        {/* Tertiary mesh overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-50/25 to-transparent"
          style={{
            animation: 'gradientSweep 30s linear infinite'
          }}
        ></div>
      </div>

      {/* Floating Bubble Orbs - Mid Layer */}
      {floatingOrbs.map((orb, index) => (
        <div
          key={index}
          className={`absolute ${orb.position} ${orb.size} ${orb.opacity} ${orb.blur}`}
          style={{ 
            animationDelay: orb.delay,
            animation: `orbFloat ${8 + index * 2}s ease-in-out infinite, orbGlow ${6 + index}s ease-in-out infinite alternate`
          }}
        >
          <div className="relative w-full h-full">
            {/* Main orb with gradient */}
            <div className="w-full h-full bg-gradient-radial from-purple-200/60 via-violet-100/40 to-transparent rounded-full"></div>
            
            {/* Inner glow effect */}
            <div className="absolute inset-2 bg-gradient-radial from-white/40 to-transparent rounded-full"></div>
            
            {/* Ambient shadow glow */}
            <div className="absolute inset-0 bg-purple-300/30 rounded-full blur-2xl scale-150 -z-10"></div>
          </div>
        </div>
      ))}

      {/* Radial Ambient Glow Zones - Accent Layer */}
      {/* Headline glow zone */}
      <div 
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-1/3 bg-gradient-radial from-violet-200/20 via-purple-100/10 to-transparent blur-3xl"
        style={{
          animation: 'pulseGlow 8s ease-in-out infinite alternate'
        }}
      ></div>
      
      {/* CTA buttons glow zone */}
      <div 
        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-2/3 h-1/4 bg-gradient-radial from-blue-200/15 via-indigo-100/8 to-transparent blur-2xl"
        style={{
          animation: 'pulseGlow 10s ease-in-out infinite alternate-reverse'
        }}
      ></div>

      {/* Ambient Particles - Micro Layer */}
      <div className="absolute inset-0">
        {/* Corner particles */}
        <div className="absolute top-1/6 right-1/5 w-1 h-1 bg-violet-400/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/8 w-0.5 h-0.5 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-1.5 h-1.5 bg-blue-400/25 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/12 w-0.5 h-0.5 bg-indigo-500/35 rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/5 right-1/4 w-1 h-1 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}></div>
        
        {/* Edge shimmer particles */}
        <div className="absolute top-2/3 right-1/7 w-2 h-2 bg-gradient-radial from-violet-300/20 to-transparent rounded-full" style={{ animation: 'shimmer 8s ease-in-out infinite' }}></div>
        <div className="absolute bottom-2/5 right-1/9 w-1.5 h-1.5 bg-gradient-radial from-purple-300/25 to-transparent rounded-full" style={{ animation: 'shimmer 10s ease-in-out infinite reverse' }}></div>
      </div>

      {/* Soft vignette overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default HeroBackground;
