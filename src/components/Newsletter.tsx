
import React, { useState } from "react";
import { User, Mail, Building, MessageSquare, Send, CheckCircle, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden" id="contact">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pulse-400 to-transparent"></div>
      <div className="absolute -top-32 right-0 w-96 h-96 bg-gradient-to-br from-pulse-200/40 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 left-0 w-80 h-80 bg-gradient-to-tr from-pulse-100/30 to-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100/20 rounded-full blur-2xl"></div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-pulse-100/80 border border-pulse-200/50 rounded-full text-sm font-medium text-pulse-700 mb-6">
            ✨ Ready to innovate together?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-pulse-600 to-gray-800 bg-clip-text text-transparent">
            Start Your Project
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your goals and we'll show you what's possible with cutting-edge robotics solutions.
          </p>
        </div>

        {/* Unified Card Container */}
        <div className="relative">
          {/* Glassmorphism container with unified design */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Ambient background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-pulse-50/30 via-white/20 to-purple-50/30 opacity-60"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Enhanced Value Proposition */}
              <div className="p-8 md:p-10 lg:p-12 bg-gradient-to-br from-pulse-500/90 to-purple-600/90 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-white/15 rounded-full"></div>
                
                <div className="relative z-10 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                    Partner with Aicrays to<br />Build What's Next
                  </h3>
                  <p className="text-lg mb-8 text-purple-100/90 leading-relaxed">
                    Join industry leaders who trust us to deliver custom robotics solutions that transform their operations.
                  </p>
                  
                  {/* Enhanced feature list */}
                  <div className="space-y-4">
                    {[
                      "Custom solutions, not templates",
                      "Built around your business processes", 
                      "Enterprise-grade security & scalability"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="w-3 h-3 text-pulse-500" />
                        </div>
                        <span className="text-purple-100 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Form */}
              <div className="p-8 md:p-10 lg:p-12 bg-white/80 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Compact name and email grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-200 ${
                          focusedField === 'name' ? 'text-pulse-500 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500/50 focus:border-pulse-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-sm"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-200 ${
                          focusedField === 'email' ? 'text-pulse-500 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@company.com"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500/50 focus:border-pulse-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-sm"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-200 ${
                        focusedField === 'company' ? 'text-pulse-500 scale-110' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Corporation"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500/50 focus:border-pulse-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-sm"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-all duration-200 ${
                        focusedField === 'message' ? 'text-pulse-500 scale-110' : 'text-gray-400'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-pulse-500/50 focus:border-pulse-500 resize-vertical transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-gray-300 hover:shadow-sm"
                        placeholder="Tell us about your project goals, timeline, and specific robotics needs..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className={`w-full group relative overflow-hidden bg-gradient-to-r from-pulse-500 to-purple-600 hover:from-pulse-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                        formState === 'submitting' ? 'scale-95 cursor-not-allowed' : ''
                      }`}
                    >
                      {/* Button content */}
                      <div className="relative z-10 flex items-center justify-center">
                        {formState === 'idle' && (
                          <>
                            <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                            Let's Start Building
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                        {formState === 'submitting' && (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                            Sending Message...
                          </>
                        )}
                        {formState === 'success' && (
                          <>
                            <CheckCircle className="w-5 h-5 mr-3" />
                            Message Sent Successfully!
                          </>
                        )}
                      </div>
                      
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    </button>
                  </div>
                  
                  {/* Secondary contact option */}
                  <div className="text-center pt-4 border-t border-gray-200/50">
                    <p className="text-sm text-gray-600">
                      Prefer email? Contact us at{' '}
                      <a href="mailto:hello@aicrays.com" className="text-pulse-600 hover:text-pulse-700 font-medium transition-colors duration-200">
                        hello@aicrays.com
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
