import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingCart, Truck, Heart, Cog, Zap } from "lucide-react";
const CaseStudiesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const solutions = [{
    icon: Building2,
    title: "Enterprise Resource Planning",
    description: "Unified dashboard for multi-location manufacturing operations with real-time analytics and predictive maintenance.",
    industry: "Manufacturing",
    status: "Live",
    gradient: "from-purple-500 to-purple-600"
  }, {
    icon: ShoppingCart,
    title: "Smart Retail Analytics",
    description: "AI-powered inventory management and customer behavior analysis platform for retail chains.",
    industry: "Retail",
    status: "Live",
    gradient: "from-purple-600 to-indigo-600"
  }, {
    icon: Truck,
    title: "Fleet Management System",
    description: "IoT-enabled logistics platform with route optimization and real-time vehicle tracking capabilities.",
    industry: "Logistics",
    status: "MVP",
    gradient: "from-indigo-500 to-purple-500"
  }, {
    icon: Heart,
    title: "Patient Care Coordination",
    description: "HIPAA-compliant platform connecting care teams with automated workflow management and reporting.",
    industry: "Healthcare",
    status: "Live",
    gradient: "from-purple-500 to-pink-500"
  }, {
    icon: Cog,
    title: "Production Line Intelligence",
    description: "Real-time monitoring and quality control system with machine learning-based anomaly detection.",
    industry: "Manufacturing",
    status: "In Progress",
    gradient: "from-indigo-600 to-purple-700"
  }, {
    icon: Zap,
    title: "Energy Management Portal",
    description: "Smart grid integration platform with consumption analytics and automated cost optimization.",
    industry: "Energy",
    status: "MVP",
    gradient: "from-purple-400 to-indigo-500"
  }];
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      case "MVP":
        return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
      case "In Progress":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100";
    }
  };
  const getIndustryColor = (industry: string) => {
    return "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100";
  };
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          solutions.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 150);
          });
        }
      });
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return;
};
export default CaseStudiesSection;