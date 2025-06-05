
import React from "react";

const HeroVisual = () => {
  return (
    <div className="w-full lg:w-1/2 relative">
      <div 
        className="relative z-10 opacity-0 animate-fade-in" 
        style={{ animationDelay: "1.5s" }}
      >
        {/* Main Platform Visual */}
        <div className="relative transition-all duration-700 ease-out overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-pulse-500 to-pulse-700 p-8 lg:p-12 hover:shadow-3xl hover:scale-[1.02] transform">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-pulse-400/20 to-pulse-600/20 rounded-3xl blur-xl animate-pulse-slow"></div>
          
          {/* Modular Components Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-6 text-white">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-5 h-5 bg-white rounded-sm animate-pulse"></div>
                </div>
                <div>
                  <div className="text-lg font-bold">AI/ML</div>
                  <div className="text-sm opacity-90">Intelligence</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-5 h-5 border-2 border-white rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-lg font-bold">Security</div>
                  <div className="text-sm opacity-90">Protection</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-5 h-5 border border-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">IoT</div>
                  <div className="text-sm opacity-90">Connectivity</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 lg:p-6 transition-all duration-500 hover:bg-white/30 hover:scale-105 cursor-pointer group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="space-y-1">
                    <div className="w-4 h-0.5 bg-white animate-pulse"></div>
                    <div className="w-3 h-0.5 bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-0.5 bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">Data</div>
                  <div className="text-sm opacity-90">Analytics</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Central Connection Point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-pulse shadow-lg"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
