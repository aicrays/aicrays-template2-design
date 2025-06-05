
import React, { useState } from "react";
import { toast } from "sonner";
const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: ""
    });
  };
  return <section id="details" className="h-screen flex items-center justify-center bg-white py-0">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {/* Left Card - The Details */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-32 sm:h-40 p-4 sm:p-6 flex items-end" style={{
            backgroundImage: "url('/background-section3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <h2 className="text-xl sm:text-2xl font-display text-white font-bold">
                The details
              </h2>
            </div>
            
            {/* Card Content */}
            <div className="bg-white p-4 sm:p-6" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <h3 className="text-base sm:text-lg font-display mb-4 sm:mb-6">
                Precision engineering meets adaptive intelligence
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-dark-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-2.5 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-sm">Height:</span> 5'8"
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-dark-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-2.5 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-sm">Capacity:</span> 55lbs
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-dark-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-2.5 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-sm">Weight:</span> 140lbs
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-dark-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-2.5 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-sm">Uptime:</span> 6hr
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-dark-900 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg width="12" height="8" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="p-2.5 rounded-lg bg-gray-50/80 backdrop-blur-sm border border-gray-100">
                      <span className="font-semibold text-sm">Movement:</span> 1.5M/S
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
            {/* Card Header with background image instead of gradient */}
            <div className="relative h-32 sm:h-40 p-4 sm:p-6 flex flex-col items-start" style={{
            backgroundImage: "url('/background-section1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="inline-block px-3 sm:px-4 py-1.5 border border-white text-white rounded-full text-xs mb-3">
                Request a demo
              </div>
              <h2 className="text-xl sm:text-2xl font-display text-white font-bold mt-auto">
                See it for yourself
              </h2>
            </div>
            
            {/* Card Content - Form */}
            <div className="bg-white p-4 sm:p-6" style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #ECECEC"
          }}>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="Full name" 
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email address" 
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    placeholder="Company (optional)" 
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-sm" 
                  />
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="w-full px-4 py-2.5 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300 text-sm"
                  >
                    Request access
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default DetailsSection;
