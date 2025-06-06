
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Specifications</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent leading-tight">
            Technical Excellence Meets Human Focus
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-medium max-w-4xl">
            Atlas works with your team, not instead of it. By handling repetitive tasks, improving safety conditions, and learning from every interaction, Atlas helps humans focus on what they do best: create, solve, and innovate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
