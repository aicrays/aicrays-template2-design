
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <section className="relative bg-gradient-to-br from-white via-purple-50/30 to-violet-50/40 py-12 lg:py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-float-vertical opacity-70" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
        <div className="absolute bottom-[30%] left-[10%] w-40 h-40 bg-violet-400/18 rounded-full blur-3xl animate-float-vertical opacity-60" style={{ animationDelay: '8s', animationDuration: '24s' }}></div>
        <div className="absolute top-[60%] right-[35%] w-24 h-24 bg-indigo-400/22 rounded-full blur-3xl animate-float-vertical opacity-50" style={{ animationDelay: '5s', animationDuration: '18s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 bg-pulse-100/80 backdrop-blur-sm text-pulse-700 rounded-full text-sm font-medium mb-6">
          Stay Connected
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Let's build what's next - <span className="text-pulse-500">together</span>
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to know about our latest innovations and get exclusive access to cutting-edge solutions.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
