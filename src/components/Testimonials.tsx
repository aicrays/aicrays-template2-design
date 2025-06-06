
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Atlas transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months.",
    author: "Sarah Chen",
    role: "VP of Operations, Axion Manufacturing",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png"
  }, {
    content: "Implementing Atlas in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable.",
    author: "Michael Rodriguez",
    role: "Director of Logistics, GlobalShip",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png"
  }, {
    content: "Atlas adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
    author: "Dr. Amara Patel",
    role: "Lead Scientist, BioAdvance Research",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section3.png"
  }, {
    content: "As a mid-size business, we never thought advanced robotics would be accessible to us. Atlas changed that equation entirely with its versatility and ease of deployment.",
    author: "Jason Lee",
    role: "CEO, Innovative Solutions Inc.",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png"
  }
];

const TestimonialCard = ({ content, author, role, backgroundImage = "/background-section1.png" }: TestimonialProps) => {
  return (
    <div className="bg-cover bg-center rounded-2xl p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden shadow-xl" style={{
      backgroundImage: `url('${backgroundImage}')`
    }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 backdrop-blur-sm z-10 rounded-bl-2xl"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-purple-50/40 relative overflow-hidden" id="testimonials" ref={sectionRef}>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] right-[20%] w-40 h-40 bg-purple-300/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '1s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[30%] left-[15%] w-48 h-48 bg-blue-300/15 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '5s', animationDuration: '24s' }}></div>
        <div className="absolute top-[70%] right-[40%] w-32 h-32 bg-purple-400/25 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '3s', animationDuration: '18s' }}></div>
        
        {/* Particle dots */}
        <div className="absolute top-[20%] left-[25%] w-2 h-2 bg-purple-500/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[85%] right-[25%] w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute top-[55%] left-[70%] w-2.5 h-2.5 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '8s' }}></div>
      </div>

      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white mr-2">04</span>
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent text-left">
          What others say
        </h2>
        <p className="text-lg text-gray-600 mb-12 font-medium max-w-2xl">
          See how organizations are transforming their operations with Atlas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
