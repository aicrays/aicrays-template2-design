
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-gradient-to-br from-blue-50/25 via-purple-50/40 to-violet-50/30 py-8 relative overflow-hidden">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-purple-200/12 to-purple-400/6 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '0s', animationDuration: '22s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-tl from-blue-200/15 to-blue-400/4 rounded-full blur-3xl animate-float opacity-35" style={{ animationDelay: '3s', animationDuration: '26s' }}></div>
        
        {/* Medium orbs */}
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/10 to-purple-500/3 rounded-full blur-3xl animate-float opacity-32" style={{ animationDelay: '1.5s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tl from-blue-300/8 to-blue-500/2 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '4s', animationDuration: '20s' }}></div>
        
        {/* Small accent orbs */}
        <div className="absolute top-[70%] left-[60%] w-48 h-48 bg-gradient-to-br from-purple-400/12 to-purple-200/8 rounded-full blur-2xl animate-float opacity-38" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[60%] right-[20%] w-56 h-56 bg-gradient-to-tl from-blue-400/10 to-blue-200/6 rounded-full blur-2xl animate-float opacity-35" style={{ animationDelay: '5s', animationDuration: '19s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[35%] left-[30%] w-2.5 h-2.5 bg-purple-600/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[45%] right-[40%] w-2 h-2 bg-blue-300/60 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[60%] right-[60%] w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
      
      <div className="section-container opacity-0 animate-on-scroll pb-2 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 bg-clip-text text-transparent">
            Collaborative Innovation
          </h2>
        </div>
        
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8 shadow-2xl">
          <div className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between" style={{
            backgroundImage: "url('/background-section3.png')"
          }}>
            <div className="flex items-center text-white">
              <img src="/logo.svg" alt="Pulse Robot Logo" className="h-5 sm:h-6 w-auto mr-3 invert" />
              <span className="text-white text-xl font-medium"></span>
            </div>
            
            <div style={{
              overflow: "hidden",
              maxHeight: "80px",
              marginTop: "40px"
            }}>
              <h3 style={{
                marginBottom: "-30px",
                padding: "0px 0px 100px"
              }} className="sm:text-5xl font-playfair text-white italic mt-0 mx-0 font-thin text-6xl md:text-7xl py-0 px-0 text-center lg:text-7xl">
                Made By AI & Human
              </h3>
            </div>
            
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
