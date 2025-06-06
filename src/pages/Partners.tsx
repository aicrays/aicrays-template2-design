
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersHero from "@/components/Partners/PartnersHero";
import OurPartners from "@/components/Partners/OurPartners";
import PartnerWithUs from "@/components/Partners/PartnerWithUs";

const Partners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 relative overflow-hidden">
      {/* Global background orbs for entire page - better distributed across viewport */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Small orbs distributed across the viewport */}
        <div className="absolute top-[8%] left-[15%] w-3 h-3 bg-purple-400/15 rounded-full blur-sm animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '25s' }}></div>
        <div className="absolute top-[22%] right-[30%] w-4 h-4 bg-violet-500/12 rounded-full blur-sm animate-float opacity-50" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute bottom-[35%] left-[45%] w-5 h-5 bg-indigo-400/18 rounded-full blur-md animate-float opacity-55" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
        <div className="absolute top-[55%] right-[20%] w-3 h-3 bg-purple-600/16 rounded-full blur-sm animate-float opacity-45" style={{ animationDelay: '5s', animationDuration: '28s' }}></div>
        <div className="absolute bottom-[18%] right-[8%] w-6 h-6 bg-violet-400/12 rounded-full blur-md animate-float opacity-40" style={{ animationDelay: '12s', animationDuration: '35s' }}></div>
        <div className="absolute top-[38%] left-[65%] w-4 h-4 bg-purple-300/20 rounded-full blur-sm animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[28%] left-[25%] w-5 h-5 bg-indigo-500/15 rounded-full blur-md animate-float opacity-50" style={{ animationDelay: '18s', animationDuration: '26s' }}></div>

        {/* Medium orbs in center areas */}
        <div className="absolute top-[15%] left-[80%] w-7 h-7 bg-blue-400/18 rounded-full blur-md animate-float opacity-60" style={{ animationDelay: '22s', animationDuration: '32s' }}></div>
        <div className="absolute bottom-[45%] left-[55%] w-8 h-8 bg-purple-500/15 rounded-full blur-md animate-float opacity-55" style={{ animationDelay: '7s', animationDuration: '28s' }}></div>
        <div className="absolute top-[68%] right-[45%] w-6 h-6 bg-violet-600/12 rounded-full blur-sm animate-float opacity-45" style={{ animationDelay: '14s', animationDuration: '24s' }}></div>
        <div className="absolute top-[42%] left-[12%] w-4 h-4 bg-indigo-300/22 rounded-full blur-sm animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '18s' }}></div>
        <div className="absolute bottom-[52%] right-[75%] w-5 h-5 bg-purple-400/18 rounded-full blur-sm animate-float opacity-65" style={{ animationDelay: '11s', animationDuration: '21s' }}></div>

        {/* Tiny orbs scattered throughout center */}
        <div className="absolute top-[25%] left-[35%] w-2 h-2 bg-blue-500/20 rounded-full blur-xs animate-float opacity-60" style={{ animationDelay: '9s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[62%] left-[70%] w-3 h-3 bg-violet-300/25 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '17s', animationDuration: '23s' }}></div>
        <div className="absolute top-[72%] left-[40%] w-3 h-3 bg-purple-600/28 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '6s', animationDuration: '19s' }}></div>
        <div className="absolute bottom-[85%] right-[60%] w-4 h-4 bg-indigo-400/20 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '13s', animationDuration: '27s' }}></div>
        <div className="absolute top-[18%] left-[50%] w-2 h-2 bg-blue-300/30 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '1s', animationDuration: '14s' }}></div>
        <div className="absolute bottom-[12%] right-[35%] w-3 h-3 bg-purple-200/35 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '19s', animationDuration: '17s' }}></div>

        {/* Very small accent orbs in center regions */}
        <div className="absolute top-[32%] left-[75%] w-2 h-2 bg-violet-400/40 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[75%] right-[25%] w-2 h-2 bg-indigo-200/28 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '21s', animationDuration: '15s' }}></div>
        <div className="absolute top-[85%] left-[30%] w-1 h-1 bg-purple-500/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '16s', animationDuration: '11s' }}></div>
        <div className="absolute bottom-[38%] right-[55%] w-3 h-3 bg-blue-400/32 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '2s', animationDuration: '13s' }}></div>
        <div className="absolute top-[58%] left-[85%] w-2 h-2 bg-violet-600/48 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '8s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[25%] right-[12%] w-3 h-3 bg-purple-300/40 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '20s', animationDuration: '9s' }}></div>

        {/* More center-distributed orbs */}
        <div className="absolute top-[48%] left-[22%] w-2 h-2 bg-indigo-500/52 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '5s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[88%] right-[42%] w-3 h-3 bg-blue-600/38 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '23s', animationDuration: '12s' }}></div>
        <div className="absolute top-[78%] left-[62%] w-1 h-1 bg-purple-700/35 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '15s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[68%] right-[78%] w-4 h-4 bg-violet-500/28 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '3s', animationDuration: '14s' }}></div>
        <div className="absolute top-[12%] left-[95%] w-1 h-1 bg-blue-800/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '12s', animationDuration: '7s' }}></div>
        <div className="absolute bottom-[95%] right-[85%] w-2 h-2 bg-purple-800/48 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '24s', animationDuration: '6s' }}></div>

        {/* Additional scattered throughout viewport center */}
        <div className="absolute top-[28%] left-[58%] w-1 h-1 bg-indigo-700/60 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '18s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[58%] right-[18%] w-2 h-2 bg-violet-700/42 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '6s', animationDuration: '9s' }}></div>
        <div className="absolute top-[65%] left-[48%] w-3 h-3 bg-purple-400/35 rounded-full blur-xs animate-float opacity-70" style={{ animationDelay: '25s', animationDuration: '16s' }}></div>
        <div className="absolute bottom-[42%] right-[68%] w-2 h-2 bg-blue-300/28 rounded-full blur-xs animate-float opacity-65" style={{ animationDelay: '11s', animationDuration: '18s' }}></div>
        <div className="absolute top-[52%] left-[18%] w-2 h-2 bg-indigo-600/45 rounded-full blur-xs animate-float opacity-80" style={{ animationDelay: '7s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[32%] right-[38%] w-3 h-3 bg-violet-400/25 rounded-full blur-xs animate-float opacity-60" style={{ animationDelay: '19s', animationDuration: '20s' }}></div>
        <div className="absolute top-[88%] left-[82%] w-1 h-1 bg-purple-600/52 rounded-full blur-xs animate-float opacity-85" style={{ animationDelay: '13s', animationDuration: '9s' }}></div>
        <div className="absolute bottom-[78%] right-[52%] w-2 h-2 bg-blue-500/38 rounded-full blur-xs animate-float opacity-75" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>
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
