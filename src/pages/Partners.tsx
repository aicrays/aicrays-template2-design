
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 relative overflow-hidden">
      {/* Restored background splotches for dynamics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large decorative splotches */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-violet-400/25 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-bl from-indigo-300/35 to-purple-400/30 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-gradient-to-tr from-violet-300/40 to-blue-300/35 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-200/45 to-indigo-300/40 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
      </div>

      {/* Global floating orbs distributed across entire viewport */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Center-distributed orbs across the entire page width */}
        <div className="absolute top-[12%] left-[20%] w-2 h-2 bg-purple-400/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute top-[25%] left-[45%] w-3 h-3 bg-violet-500/25 rounded-full blur-sm animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        <div className="absolute top-[18%] left-[70%] w-2 h-2 bg-indigo-400/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '6s', animationDuration: '20s' }}></div>
        <div className="absolute top-[35%] left-[15%] w-4 h-4 bg-purple-600/20 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '9s', animationDuration: '25s' }}></div>
        <div className="absolute top-[28%] left-[60%] w-2 h-2 bg-blue-500/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '12s', animationDuration: '19s' }}></div>
        <div className="absolute top-[42%] left-[35%] w-3 h-3 bg-violet-300/40 rounded-full blur-sm animate-float opacity-80" style={{ animationDelay: '15s', animationDuration: '23s' }}></div>
        <div className="absolute top-[38%] left-[80%] w-2 h-2 bg-purple-500/25 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '18s', animationDuration: '21s' }}></div>
        
        {/* Middle section orbs */}
        <div className="absolute top-[55%] left-[25%] w-3 h-3 bg-indigo-600/35 rounded-full blur-sm animate-float opacity-75" style={{ animationDelay: '21s', animationDuration: '24s' }}></div>
        <div className="absolute top-[48%] left-[55%] w-2 h-2 bg-purple-400/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '24s', animationDuration: '17s' }}></div>
        <div className="absolute top-[62%] left-[75%] w-4 h-4 bg-violet-500/30 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '27s', animationDuration: '26s' }}></div>
        <div className="absolute top-[58%] left-[10%] w-2 h-2 bg-blue-400/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '30s', animationDuration: '18s' }}></div>
        <div className="absolute top-[72%] left-[40%] w-3 h-3 bg-purple-300/45 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '33s', animationDuration: '20s' }}></div>
        <div className="absolute top-[68%] left-[65%] w-2 h-2 bg-indigo-500/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '36s', animationDuration: '22s' }}></div>
        
        {/* Lower section orbs */}
        <div className="absolute top-[85%] left-[30%] w-2 h-2 bg-violet-600/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '39s', animationDuration: '19s' }}></div>
        <div className="absolute top-[78%] left-[50%] w-3 h-3 bg-purple-700/25 rounded-full blur-sm animate-float opacity-65" style={{ animationDelay: '42s', animationDuration: '25s' }}></div>
        <div className="absolute top-[92%] left-[20%] w-2 h-2 bg-blue-600/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '45s', animationDuration: '21s' }}></div>
        <div className="absolute top-[88%] left-[70%] w-4 h-4 bg-indigo-400/20 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '48s', animationDuration: '28s' }}></div>
        
        {/* Additional scattered micro orbs throughout */}
        <div className="absolute top-[15%] left-[85%] w-1 h-1 bg-purple-800/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '51s', animationDuration: '15s' }}></div>
        <div className="absolute top-[32%] left-[5%] w-1 h-1 bg-violet-700/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '54s', animationDuration: '16s' }}></div>
        <div className="absolute top-[52%] left-[90%] w-2 h-2 bg-blue-500/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '57s', animationDuration: '17s' }}></div>
        <div className="absolute top-[75%] left-[8%] w-1 h-1 bg-purple-600/55 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '60s', animationDuration: '14s' }}></div>
        <div className="absolute top-[95%] left-[85%] w-2 h-2 bg-indigo-300/35 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '63s', animationDuration: '18s' }}></div>
        
        {/* More scattered throughout center content area */}
        <div className="absolute top-[22%] left-[38%] w-1 h-1 bg-violet-800/60 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '66s', animationDuration: '13s' }}></div>
        <div className="absolute top-[45%] left-[48%] w-2 h-2 bg-purple-500/30 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '69s', animationDuration: '19s' }}></div>
        <div className="absolute top-[65%] left-[28%] w-1 h-1 bg-blue-700/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '72s', animationDuration: '16s' }}></div>
        <div className="absolute top-[82%] left-[58%] w-2 h-2 bg-indigo-600/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '75s', animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <PartnersHero />
        <OurPartners />
        <PartnerWithUs />
        <Footer />
      </div>
    </div>
  );
};

export default Partners;
