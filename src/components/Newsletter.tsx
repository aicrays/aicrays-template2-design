
import React, { useState } from "react";
import { User, Mail, Building, MessageSquare, Rocket, CheckCircle } from "lucide-react";

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
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 relative overflow-hidden" id="contact">
      {/* Enhanced Background with Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated floating orbs */}
        <div className="absolute top-[10%] right-[15%] w-32 h-32 bg-purple-200/20 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '0s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-40 h-40 bg-violet-300/15 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-24 h-24 bg-purple-300/25 rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[10%] right-[20%] w-28 h-28 bg-violet-200/20 rounded-full blur-3xl animate-float opacity-45" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
        
        {/* Micro particles */}
        <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[75%] right-[25%] w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[45%] left-[70%] w-2.5 h-2.5 bg-purple-300/30 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-gray-800 bg-clip-text text-transparent">
            Let's Build What's Next — Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your goals, and we'll show you how our modular AI-powered platforms can make it real.
          </p>
        </div>

        {/* Glassmorphism Container */}
        <div className="relative">
          <div className="bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 via-white/10 to-violet-50/20 opacity-60"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Glassmorphism Value Proposition */}
              <div className="p-8 md:p-10 lg:p-12 bg-white/30 backdrop-blur-lg relative overflow-hidden border-r border-white/20">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-violet-100/20"></div>
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-purple-200/30 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-purple-300/20 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-gray-800">
                    Why Choose Our<br />Modular Approach?
                  </h3>
                  
                  {/* Enhanced feature list with check icons */}
                  <div className="space-y-5 mb-8">
                    {[
                      "AI-powered, modular, secure",
                      "Tailored for your workflows", 
                      "Built to scale with your business"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trust badge */}
                  <div className="bg-white/50 backdrop-blur-sm border border-purple-200/50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 font-medium">
                      ✨ Trusted by forward-thinking companies to deliver custom platforms that transform operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Form */}
              <div className="p-8 md:p-10 lg:p-12 bg-white/60 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-all duration-200 ${
                          focusedField === 'name' ? 'text-purple-500 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
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
                          focusedField === 'email' ? 'text-purple-500 scale-110' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@company.com"
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
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
                        focusedField === 'company' ? 'text-purple-500 scale-110' : 'text-gray-400'
                      }`} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Corporation"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
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
                        focusedField === 'message' ? 'text-purple-500 scale-110' : 'text-gray-400'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200/80 rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 resize-vertical transition-all duration-300 bg-white/80 backdrop-blur-sm hover:border-purple-300 hover:shadow-sm"
                        placeholder="Tell us about your project goals, timeline, and specific needs..."
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
                      className={`w-full group relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                        formState === 'submitting' ? 'scale-95 cursor-not-allowed' : ''
                      }`}
                    >
                      {/* Button content */}
                      <div className="relative z-10 flex items-center justify-center">
                        {formState === 'idle' && (
                          <>
                            <Rocket className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                            Let's Start Building
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
                  
                  {/* Enhanced footer contact */}
                  <div className="text-center pt-4 border-t border-gray-200/50">
                    <p className="text-sm text-gray-500">
                      Prefer email? Contact us at{' '}
                      <a 
                        href="mailto:hello@aicrays.com" 
                        className="text-purple-600 hover:text-purple-700 font-medium transition-all duration-200 hover:underline hover:underline-offset-2"
                      >
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
