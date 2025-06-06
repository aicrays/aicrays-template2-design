
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/Products/ProductsHero";
import BuiltAndDelivered from "@/components/Products/BuiltAndDelivered";
import CurrentlyInDevelopment from "@/components/Products/CurrentlyInDevelopment";
import ProductInquiry from "@/components/Products/ProductInquiry";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200/60 to-purple-300/40 relative overflow-hidden">
      {/* Enhanced background splotches for maximum dynamics - significantly more visible */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large primary splotches - dramatically increased opacity and size */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-300/85 to-violet-400/80 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute top-1/6 -right-32 w-[650px] h-[650px] bg-gradient-to-bl from-indigo-300/90 to-purple-400/85 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '10s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-violet-300/95 to-blue-300/90 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        
        {/* Middle section splotches - enhanced visibility */}
        <div className="absolute top-1/2 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-purple-200/95 to-indigo-300/90 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '15s', animationDuration: '22s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-[680px] h-[680px] bg-gradient-to-tl from-violet-400/85 to-purple-300/90 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '8s', animationDuration: '28s' }}></div>
        <div className="absolute top-1/2 left-2/3 w-[520px] h-[520px] bg-gradient-to-bl from-blue-300/95 to-indigo-400/90 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '18s', animationDuration: '24s' }}></div>
        
        {/* Lower section splotches - more prominent */}
        <div className="absolute bottom-1/4 left-1/3 w-[620px] h-[620px] bg-gradient-to-tr from-violet-300/95 to-blue-300/90 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '5s', animationDuration: '30s' }}></div>
        <div className="absolute -bottom-32 -right-24 w-[660px] h-[660px] bg-gradient-to-tl from-purple-400/90 to-violet-300/85 rounded-full blur-3xl animate-float opacity-90" style={{ animationDelay: '12s', animationDuration: '26s' }}></div>
        <div className="absolute bottom-1/6 left-1/6 w-[580px] h-[580px] bg-gradient-to-br from-indigo-300/95 to-purple-200/90 rounded-full blur-3xl animate-float opacity-85" style={{ animationDelay: '20s', animationDuration: '32s' }}></div>
        
        {/* Additional scattered medium splotches - increased prominence */}
        <div className="absolute top-1/4 left-3/4 w-[480px] h-[480px] bg-gradient-to-bl from-violet-200/90 to-purple-300/85 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '7s', animationDuration: '35s' }}></div>
        <div className="absolute top-3/4 left-1/8 w-[520px] h-[520px] bg-gradient-to-tr from-blue-200/95 to-indigo-300/90 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '22s', animationDuration: '27s' }}></div>
        <div className="absolute top-5/6 right-1/3 w-[460px] h-[460px] bg-gradient-to-bl from-purple-300/85 to-violet-200/95 rounded-full blur-2xl animate-float opacity-90" style={{ animationDelay: '14s', animationDuration: '29s' }}></div>
        
        {/* Small accent splotches for texture - more visible */}
        <div className="absolute top-1/8 left-1/2 w-[380px] h-[380px] bg-gradient-to-br from-indigo-200/80 to-blue-300/85 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        <div className="absolute top-3/8 right-1/8 w-[420px] h-[420px] bg-gradient-to-tl from-violet-300/80 to-purple-200/85 rounded-full blur-xl animate-float opacity-80" style={{ animationDelay: '16s', animationDuration: '21s' }}></div>
        <div className="absolute top-5/8 left-1/10 w-[440px] h-[440px] bg-gradient-to-tr from-purple-200/85 to-indigo-300/80 rounded-full blur-xl animate-float opacity-75" style={{ animationDelay: '11s', animationDuration: '23s' }}></div>
        <div className="absolute top-7/8 right-1/6 w-[360px] h-[360px] bg-gradient-to-bl from-blue-300/85 to-violet-200/90 rounded-full blur-xl animate-float opacity-85" style={{ animationDelay: '25s', animationDuration: '19s' }}></div>

        {/* Additional mid-size splotches for more coverage */}
        <div className="absolute top-[15%] right-[45%] w-[500px] h-[500px] bg-gradient-to-br from-purple-400/80 to-violet-300/85 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '6s', animationDuration: '33s' }}></div>
        <div className="absolute top-[45%] left-[75%] w-[480px] h-[480px] bg-gradient-to-tl from-indigo-400/85 to-blue-300/80 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '13s', animationDuration: '31s' }}></div>
        <div className="absolute top-[75%] left-[45%] w-[540px] h-[540px] bg-gradient-to-bl from-violet-200/90 to-purple-400/85 rounded-full blur-2xl animate-float opacity-90" style={{ animationDelay: '19s', animationDuration: '28s' }}></div>

        {/* Extra coverage splotches */}
        <div className="absolute top-[35%] right-[15%] w-[420px] h-[420px] bg-gradient-to-tr from-purple-500/75 to-violet-400/80 rounded-full blur-2xl animate-float opacity-75" style={{ animationDelay: '9s', animationDuration: '34s' }}></div>
        <div className="absolute top-[55%] left-[5%] w-[460px] h-[460px] bg-gradient-to-bl from-indigo-500/80 to-blue-400/75 rounded-full blur-2xl animate-float opacity-80" style={{ animationDelay: '17s', animationDuration: '29s' }}></div>
        <div className="absolute bottom-[35%] right-[65%] w-[400px] h-[400px] bg-gradient-to-br from-violet-400/85 to-purple-500/80 rounded-full blur-2xl animate-float opacity-85" style={{ animationDelay: '21s', animationDuration: '26s' }}></div>
      </div>

      {/* Enhanced floating orbs with varied sizes and colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large orbs - varied sizes */}
        <div className="absolute top-[8%] left-[15%] w-6 h-6 bg-purple-400/60 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '0s', animationDuration: '18s' }}></div>
        <div className="absolute top-[12%] left-[35%] w-8 h-8 bg-violet-500/55 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '3s', animationDuration: '22s' }}></div>
        <div className="absolute top-[16%] left-[55%] w-4 h-4 bg-indigo-400/65 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '6s', animationDuration: '20s' }}></div>
        <div className="absolute top-[20%] left-[75%] w-10 h-10 bg-purple-600/50 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '9s', animationDuration: '25s' }}></div>
        <div className="absolute top-[10%] left-[85%] w-5 h-5 bg-blue-500/60 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '12s', animationDuration: '19s' }}></div>
        
        {/* Upper-middle section orbs - more variety */}
        <div className="absolute top-[28%] left-[20%] w-7 h-7 bg-violet-300/70 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '15s', animationDuration: '23s' }}></div>
        <div className="absolute top-[32%] left-[45%] w-3 h-3 bg-purple-500/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '18s', animationDuration: '21s' }}></div>
        <div className="absolute top-[36%] left-[65%] w-9 h-9 bg-indigo-600/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '21s', animationDuration: '24s' }}></div>
        <div className="absolute top-[25%] left-[10%] w-4 h-4 bg-blue-400/70 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '24s', animationDuration: '17s' }}></div>
        <div className="absolute top-[30%] left-[80%] w-8 h-8 bg-violet-500/60 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '27s', animationDuration: '26s' }}></div>
        
        {/* Middle section orbs - enhanced variety */}
        <div className="absolute top-[45%] left-[25%] w-5 h-5 bg-purple-300/75 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '30s', animationDuration: '18s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-11 h-11 bg-indigo-500/60 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '33s', animationDuration: '22s' }}></div>
        <div className="absolute top-[55%] left-[15%] w-6 h-6 bg-violet-600/70 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '36s', animationDuration: '19s' }}></div>
        <div className="absolute top-[48%] left-[70%] w-4 h-4 bg-purple-700/55 rounded-full blur-xs animate-float opacity-90" style={{ animationDelay: '39s', animationDuration: '25s' }}></div>
        <div className="absolute top-[52%] left-[90%] w-7 h-7 bg-blue-600/65 rounded-full blur-sm animate-float opacity-95" style={{ animationDelay: '42s', animationDuration: '21s' }}></div>
        
        {/* Lower-middle section orbs - varied colors */}
        <div className="absolute top-[65%] left-[30%] w-9 h-9 bg-indigo-400/50 rounded-full blur-sm animate-float opacity-85" style={{ animationDelay: '45s', animationDuration: '28s' }}></div>
        <div className="absolute top-[70%] left-[60%] w-3 h-3 bg-purple-800/80 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '48s', animationDuration: '15s' }}></div>
        <div className="absolute top-[68%] left-[12%] w-10 h-10 bg-violet-700/75 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '51s', animationDuration: '16s' }}></div>
        <div className="absolute top-[72%] left-[85%] w-5 h-5 bg-blue-500/70 rounded-full blur-xs animate-float opacity-100" style={{ animationDelay: '54s', animationDuration: '17s' }}></div>
        <div className="absolute top-[75%] left-[40%] w-8 h-8 bg-purple-600/85 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '57s', animationDuration: '14s' }}></div>
        
        {/* Bottom section orbs - large variety */}
        <div className="absolute top-[85%] left-[25%] w-6 h-6 bg-indigo-300/65 rounded-full blur-sm animate-float opacity-90" style={{ animationDelay: '60s', animationDuration: '18s' }}></div>
        <div className="absolute top-[88%] left-[55%] w-12 h-12 bg-violet-800/90 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '63s', animationDuration: '13s' }}></div>
        <div className="absolute top-[92%] left-[15%] w-4 h-4 bg-purple-500/60 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '66s', animationDuration: '19s' }}></div>
        <div className="absolute top-[90%] left-[75%] w-9 h-9 bg-blue-700/75 rounded-full blur-sm animate-float opacity-100" style={{ animationDelay: '69s', animationDuration: '16s' }}></div>
        <div className="absolute top-[95%] left-[45%] w-5 h-5 bg-indigo-600/65 rounded-full blur-xs animate-float opacity-95" style={{ animationDelay: '72s', animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <ProductsHero />
        <BuiltAndDelivered />
        <CurrentlyInDevelopment />
        <ProductInquiry />
        <Footer />
      </div>
    </div>
  );
};

export default Products;
