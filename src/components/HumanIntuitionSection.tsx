
import React, { useRef } from "react";
import PulseChip from "./ui/pulse-chip";
import FeatureList from "./HumanIntuition/FeatureList";

const HumanIntuitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gray-50" id="human-intuition" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <PulseChip className="mb-4">
              <span>Human-Like Intuition</span>
            </PulseChip>
            <h2 className="section-title mb-6">Beyond algorithms to true understanding</h2>
            <p className="text-lg text-gray-700 mb-6">
              Atlas goes beyond programmed responses to develop contextual awareness and
              adaptive learning patterns that mirror human intuition. This enables natural
              interactions that feel like working with a human colleague rather than a machine.
            </p>
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanIntuitionSection;
