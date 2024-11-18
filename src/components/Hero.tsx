import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30" />
      </div>
      
      <div className="relative min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Revolutionizing AI Creation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Create Stunning AI Content in Minutes
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            Transform your creative vision into reality with our powerful AI tools. Edit videos, generate images, and bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors">
              Start Creating
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}