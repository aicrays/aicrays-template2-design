
import React from "react";

const HeroVisual = () => {
  return (
    <div className="relative lg:ml-8 xl:ml-16">
      {/* Main Visual Container */}
      <div className="robot-image-container relative bg-gradient-to-br from-pulse-100 via-white to-violet-100 p-8 rounded-3xl shadow-2xl">
        {/* Placeholder for robot/product image */}
        <div className="aspect-square bg-gradient-to-br from-pulse-200 to-violet-200 rounded-2xl flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-pulse-400 rounded-full mx-auto flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-gray-700">Modular Platform</h3>
              <p className="text-sm text-gray-600 font-sans">Built for Enterprise</p>
            </div>
          </div>
        </div>

        {/* Floating Feature Cards */}
        <div className="absolute -right-4 top-8 feature-item w-48 animate-float">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-pulse-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm font-display">Real-time Processing</p>
              <p className="text-xs text-gray-600 font-sans">Enterprise-grade speed</p>
            </div>
          </div>
        </div>

        <div className="absolute -left-4 bottom-8 feature-item w-44 animate-float" style={{ animationDelay: '1s' }}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm font-display">Secure by Design</p>
              <p className="text-xs text-gray-600 font-sans">Enterprise security</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Accent Elements */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-pulse-200/30 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-violet-200/40 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroVisual;
