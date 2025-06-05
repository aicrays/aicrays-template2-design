
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
    <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-br from-purple-100 via-violet-200 to-indigo-200 relative overflow-hidden min-h-screen flex items-center" id="contact">
      {/* Enhanced Background with More Vibrant Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated floating orbs with vibrant colors */}
        <div className="absolute top-[10%] right-[15%] w-40 h-40 bg-gradient-to-r from-purple-400/60 to-pink-400/50 rounded-full blur-3xl animate-float opacity-80" style={{ animationDelay: '0s', animationDuration: '12s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-gradient-to-r from-violet-500/50 to-purple-500/60 rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '4s', animationDuration: '15s' }}></div>
        <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-gradient-to-r from-indigo-400/55 to-blue-400/45 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
        <div className="absolute bottom-[10%] right-[20%] w-36 h-36 bg-gradient-to-r from-pink-400/50 to-purple-400/55 rounded-full blur-3xl animate-float opacity-65" style={{ animationDelay: '6s', animationDuration: '14s' }}></div>
        <div className="absolute top-[30%] left-[5%] w-28 h-28 bg-gradient-to-r from-violet-400/60 to-indigo-400/50 rounded-full blur-3xl animate-float opacity-55" style={{ animationDelay: '8s', animationDuration: '11s' }}></div>
        
        {/* Medium orbs with enhanced gradients */}
        <div className="absolute top-[45%] left-[70%] w-24 h-24 bg-gradient-to-r from-purple-300/60 to-pink-300/50 rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '1s', animationDuration: '13s' }}></div>
        <div className="absolute bottom-[45%] right-[60%] w-20 h-20 bg-gradient-to-r from-indigo-300/55 to-violet-300/60 rounded-full blur-2xl animate-float opacity-65" style={{ animationDelay: '5s', animationDuration: '16s' }}></div>
        
        {/* Colorful particle dots */}
        <div className="absolute top-[25%] left-[25%] w-3 h-3 bg-purple-500/80 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[75%] right-[25%] w-2.5 h-2.5 bg-pink-500/70 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[35%] left-[85%] w-4 h-4 bg-indigo-500/75 rounded-full animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute bottom-[60%] left-[60%] w-2 h-2 bg-violet-500/80 rounded-full animate-pulse" style={{ animationDelay: '7s' }}></div>
      </div>
      
      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Enhanced Section Header with Gradient Text */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
            Let's Build What's Next — Together
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Tell us about your goals, and we'll show you how our modular AI-powered platforms can make it real.
          </p>
        </div>

        {/* Enhanced Glassmorphism Container with Vibrant Colors */}
        <div className="relative">
          <div className="bg-white/50 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Enhanced inner glow with more color */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-pink-50/30 to-indigo-100/40 opacity-80"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Enhanced with More Vibrant Colors */}
              <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-purple-200/60 via-violet-200/50 to-indigo-200/60 backdrop-blur-lg relative overflow-hidden border-r border-white/30">
                {/* Enhanced decorative elements with gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300/20 via-pink-200/15 to-indigo-300/25"></div>
                <div className="absolute top-6 right-6 w-16 h-16 border-3 border-purple-400/40 rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/20"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 border-3 border-indigo-400/40 rounded-full bg-gradient-to-r from-indigo-300/20 to-violet-300/20"></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-sm"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 leading-tight bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 bg-clip-text text-transparent">
                    Why Choose Our<br />Modular Approach?
                  </h3>
                  
                  {/* Enhanced feature list with colorful check icons */}
                  <div className="space-y-3 mb-6">
                    {[
                      { text: "AI-powered, modular, secure", color: "from-purple-500 to-pink-500" },
                      { text: "Tailored for your workflows", color: "from-indigo-500 to-purple-500" }, 
                      { text: "Built to scale with your business", color: "from-violet-500 to-indigo-500" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className={`w-6 h-6 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-gray-800 font-semibold text-base lg:text-lg">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced trust badge with gradient */}
                  <div className="bg-gradient-to-r from-white/70 to-purple-50/70 backdrop-blur-sm border border-purple-300/50 rounded-xl p-4 shadow-lg">
                    <p className="text-sm text-gray-700 font-medium">
                      <span className="text-2xl">✨</span> Trusted by forward-thinking companies to deliver custom platforms that transform operations
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Form with More Color */}
              <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-white/80 to-purple-50/60 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="relative group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-1">
                        Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                          focusedField === 'name' ? 'text-purple-600 scale-110' : 'text-gray-500'
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="w-full pl-10 pr-3 py-3 border-2 border-purple-200/80 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-400 hover:shadow-lg text-sm shadow-sm"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                          focusedField === 'email' ? 'text-purple-600 scale-110' : 'text-gray-500'
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-3 py-3 border-2 border-purple-200/80 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-400 hover:shadow-lg text-sm shadow-sm"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-1">
                      Company
                    </label>
                    <div className="relative">
                      <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                        focusedField === 'company' ? 'text-purple-600 scale-110' : 'text-gray-500'
                      }`} />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Corporation"
                        className="w-full pl-10 pr-3 py-3 border-2 border-purple-200/80 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-400 hover:shadow-lg text-sm shadow-sm"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-1">
                      Project Details
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-3 top-3 w-4 h-4 transition-all duration-200 ${
                        focusedField === 'message' ? 'text-purple-600 scale-110' : 'text-gray-500'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full pl-10 pr-3 py-3 border-2 border-purple-200/80 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-500 resize-vertical transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-purple-400 hover:shadow-lg text-sm shadow-sm"
                        placeholder="Tell us about your project goals, timeline, and specific needs..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Enhanced CTA Button with Vibrant Gradient */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className={`w-full group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                        formState === 'submitting' ? 'scale-95 cursor-not-allowed' : ''
                      }`}
                    >
                      {/* Button content */}
                      <div className="relative z-10 flex items-center justify-center">
                        {formState === 'idle' && (
                          <>
                            <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                            Let's Start Building
                          </>
                        )}
                        {formState === 'submitting' && (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending Message...
                          </>
                        )}
                        {formState === 'success' && (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent Successfully!
                          </>
                        )}
                      </div>
                      
                      {/* Enhanced hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                    </button>
                  </div>
                  
                  {/* Enhanced footer contact */}
                  <div className="text-center pt-3 border-t border-purple-200/50">
                    <p className="text-sm text-gray-600">
                      Prefer email? Contact us at{' '}
                      <a 
                        href="mailto:hello@aicrays.com" 
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold transition-all duration-200 hover:underline hover:underline-offset-2"
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
