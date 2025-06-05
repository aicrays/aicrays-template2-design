
import React from "react";
import CTAContent from "./CTA/CTAContent";
import { useIntersectionAnimation } from "@/hooks/useAnimations";

const CTA = () => {
  const ctaRef = useIntersectionAnimation("animate-fade-in", 0.1);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative" id="get-access" ref={ctaRef}>
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6">
        <CTAContent />
      </div>
    </section>
  );
};

export default CTA;
