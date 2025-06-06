
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-gradient-to-br from-blue-50/30 via-purple-50/45 to-violet-50/35 relative overflow-hidden" id="showcase">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute top-1/4 right-1/6 w-88 h-88 bg-gradient-to-br from-purple-200/14 to-purple-400/7 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-gradient-to-tl from-blue-200/16 to-blue-400/5 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '3s', animationDuration: '24s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/11 to-purple-500/4 rounded-full blur-3xl animate-float opacity-38" style={{ animationDelay: '1.5s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-tl from-blue-300/12 to-blue-500/3 rounded-full blur-3xl animate-float opacity-35" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[70%] right-[60%] w-48 h-48 bg-gradient-to-br from-purple-400/13 to-purple-200/9 rounded-full blur-2xl animate-float opacity-42" style={{ animationDelay: '2s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[60%] left-[20%] w-56 h-56 bg-gradient-to-tl from-blue-400/10 to-blue-200/7 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '5s', animationDuration: '17s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[30%] right-[25%] w-3 h-3 bg-purple-600/55 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[50%] left-[35%] w-2 h-2 bg-blue-300/65 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[65%] left-[70%] w-2.5 h-2.5 bg-purple-400/45 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent tracking-tight">
            Experience the Future Today
          </h2>
          <p className="text-lg text-gray-700 font-medium">
            Our cutting-edge humanoid robot is designed to transform how we interact 
            with technology in everyday environments.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Advanced humanoid robot with orange and white design" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-8 border-t border-purple-100/50">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 text-purple-800">Next Generation Robotics</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with precision engineering and sophisticated AI, our robots seamlessly 
              integrate into various environments, from homes to hospitals, providing 
              assistance and enriching human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
