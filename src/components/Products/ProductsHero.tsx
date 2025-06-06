
import React from "react";

const ProductsHero = () => {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '25s' }}></div>
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-violet-600/18 rounded-full blur-3xl animate-float-vertical opacity-65" style={{ animationDelay: '8s', animationDuration: '30s' }}></div>
        <div className="absolute top-[60%] left-[70%] w-32 h-32 bg-blue-500/22 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '15s', animationDuration: '20s' }}></div>
      </div>

      <div className="section-container relative z-10 text-center">
        <h1 className="section-title bg-gradient-to-r from-gray-800 via-purple-700 to-purple-900 bg-clip-text text-transparent mb-6">
          Our Products
        </h1>
        <p className="section-subtitle mx-auto">
          Explore our flagship platforms and solutions—custom-built with precision and performance. 
          Each solution is engineered using our modular components, designed for industry-specific outcomes.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
