
import React from "react";
import { Check } from "lucide-react";

const features = [
  "Learns from human demonstrations and refines its approach over time",
  "Anticipates needs based on situational awareness and past interactions", 
  "Adapts to changing environments without explicit reprogramming",
  "Makes decisions with nuanced understanding of human preferences"
];

const FeatureList = () => {
  return (
    <ul className="space-y-4">
      {features.map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="mr-3 text-pulse-500">
            <Check className="w-6 h-6" />
          </div>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
