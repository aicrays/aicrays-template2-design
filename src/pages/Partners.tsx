
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 relative overflow-hidden">
      {/* Enhanced background splotches for maximum dynamics */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large primary splotches */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-300/30 to-violet-400/25 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute top-1/6 -right-32 w-80 h-80 bg-gradient-to-bl from-indigo-300/35 to-purple-400/30 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-tr from-violet-300/40 to-blue-300/35 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        
        {/* Middle section splotches */}
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-gradient-to-br from-purple-200/45 to-indigo-300/40 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-88 h-88 bg-gradient-to-tl from-violet-400/30 to-purple-300/35 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '8s', animationDuration: '28s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-56 h-56 bg-gradient-to-bl from-blue-300/40 to-indigo-400/35 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '18s', animationDuration: '24s' }}></div>
        
        {/* Lower section splotches */}
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-tr from-violet-300/40 to-blue-300/35 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        <div className="absolute -bottom-32 -right-24 w-80 h-80 bg-gradient-to-tl from-purple-400/35 to-violet-300/30 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '12s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-1/6 left-1/6 w-64 h-64 bg-gradient-to-br from-indigo-300/40 to-purple-200/35 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '20s', animationDuration: '32s' }}></div>
        
        {/* Additional scattered medium splotches */}
        <div className="absolute top-1/4 left-3/4 w-48 h-48 bg-gradient-to-bl from-violet-200/35 to-purple-300/30 rounded-full blur-2xl animate-float opacity-40" style={{ animationDelay: '7s', animationDuration: '35s' }}></div>
        <div className="absolute top-3/4 left-1/8 w-52 h-52 bg-gradient-to-tr from-blue-200/40 to-indigo-300/35 rounded-full blur-2xl animate-float opacity-45" style={{ animationDelay: '22s', animationDuration: '27s' }}></div>
        <div className="absolute top-5/6 right-1/3 w-44 h-44 bg-gradient-to-bl from-purple-300/30 to-violet-200/40 rounded-full blur-2xl animate-float opacity-50" style={{ animationDelay: '14s', animationDuration: '29s' }}></div>
        
        {/* Small accent splotches for texture */}
        <div className="absolute top-1/8 left-1/2 w-32 h-32 bg-gradient-to-br from-indigo-200/25 to-blue-300/30 rounded-full blur-xl animate-float opacity-35" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        <div className="absolute top-3/8 right-1/8 w-36 h-36 bg-gradient-to-tl from-violet-300/25 to-purple-200/30 rounded-full blur-xl animate-float opacity-40" style={{ animationDelay: '16s', animationDuration: '21s' }}></div>
        <div className="absolute top-5/8 left-1/10 w-40 h-40 bg-gradient-to-tr from-purple-200/30 to-indigo-300/25 rounded-full blur-xl animate-float opacity-35" style={{ animationDelay: '11s', animationDuration: '23s' }}></div>
        <div className="absolute top-7/8 right-1/6 w-28 h-28 bg-gradient-to-bl from-blue-300/30 to-violet-200/35 rounded-full blur-xl animate-float opacity-45" style={{ animationDelay: '25s', animationDuration: '19s' }}></div>
      </div>

      {/* Global floating orbs distributed across entire viewport */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top section orbs - distributed across full width */}
        <div className="absolute top-[8%] left-[15%] w-1 h-1 bg-purple-400/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute top-[12%] left-[35%] w-2 h-2 bg-violet-500/25 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        <div className="absolute top-[16%] left-[55%] w-1 h-1 bg-indigo-400/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '6s', animationDuration: '20s' }}></div>
        <div className="absolute top-[20%] left-[75%] w-2 h-2 bg-purple-600/20 rounded-full blur-xs animate-float opacity-60" style={{ animationDelay: '9s', animationDuration: '25s' }}></div>
        <div className="absolute top-[10%] left-[85%] w-1 h-1 bg-blue-500/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '12s', animationDuration: '19s' }}></div>
        
        {/* Upper-middle section orbs */}
        <div className="absolute top-[28%] left-[20%] w-2 h-2 bg-violet-300/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '15s', animationDuration: '23s' }}></div>
        <div className="absolute top-[32%] left-[45%] w-1 h-1 bg-purple-500/25 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '18s', animationDuration: '21s' }}></div>
        <div className="absolute top-[36%] left-[65%] w-2 h-2 bg-indigo-600/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '21s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] left-[10%] w-1 h-1 bg-blue-400/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '24s', animationDuration: '17s' }}></div>
        <div className="absolute top-[30%] left-[80%] w-2 h-2 bg-violet-500/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '27s', animationDuration: '26s' }}></div>
        
        {/* Middle section orbs */}
        <div className="absolute top-[45%] left-[25%] w-1 h-1 bg-purple-300/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '30s', animationDuration: '18s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-indigo-500/30 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '33s', animationDuration: '22s' }}></div>
        <div className="absolute top-[55%] left-[15%] w-1 h-1 bg-violet-600/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '36s', animationDuration: '19s' }}></div>
        <div className="absolute top-[48%] left-[70%] w-2 h-2 bg-purple-700/25 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '39s', animationDuration: '25s' }}></div>
        <div className="absolute top-[52%] left-[90%] w-1 h-1 bg-blue-600/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '42s', animationDuration: '21s' }}></div>
        
        {/* Lower-middle section orbs */}
        <div className="absolute top-[65%] left-[30%] w-2 h-2 bg-indigo-400/20 rounded-full blur-xs animate-float opacity-60" style={{ animationDelay: '45s', animationDuration: '28s' }}></div>
        <div className="absolute top-[70%] left-[60%] w-1 h-1 bg-purple-800/50 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '48s', animationDuration: '15s' }}></div>
        <div className="absolute top-[68%] left-[12%] w-2 h-2 bg-violet-700/45 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '51s', animationDuration: '16s' }}></div>
        <div className="absolute top-[72%] left-[85%] w-1 h-1 bg-blue-500/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '54s', animationDuration: '17s' }}></div>
        <div className="absolute top-[75%] left-[40%] w-2 h-2 bg-purple-600/55 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '57s', animationDuration: '14s' }}></div>
        
        {/* Bottom section orbs */}
        <div className="absolute top-[85%] left-[25%] w-1 h-1 bg-indigo-300/35 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '60s', animationDuration: '18s' }}></div>
        <div className="absolute top-[88%] left-[55%] w-2 h-2 bg-violet-800/60 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '63s', animationDuration: '13s' }}></div>
        <div className="absolute top-[92%] left-[15%] w-1 h-1 bg-purple-500/30 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '66s', animationDuration: '19s' }}></div>
        <div className="absolute top-[90%] left-[75%] w-2 h-2 bg-blue-700/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '69s', animationDuration: '16s' }}></div>
        <div className="absolute top-[95%] left-[45%] w-1 h-1 bg-indigo-600/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '72s', animationDuration: '20s' }}></div>
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
