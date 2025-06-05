
import React from "react";
import { ArrowRight } from "lucide-react";
import PulseChip from "../ui/pulse-chip";

const CTAContent = () => {
  return (
    <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-pulse-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gray-100/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
      
      <PulseChip className="mx-auto mb-4 sm:mb-6">
        <span>Limited Availability</span>
      </PulseChip>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
        Be Among the First to <br className="hidden sm:inline" />
        <span className="text-pulse-500">Experience Atlas</span>
      </h2>
      
      <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
        We're accepting a limited number of early adopters. Submit your application today to secure your place in the future of robotics.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#contact" className="button-primary group flex items-center justify-center w-full sm:w-auto">
          Request Early Access
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a href="#" className="button-secondary w-full sm:w-auto text-center">
          Join Waitlist
        </a>
      </div>
    </div>
  );
};

export default CTAContent;
