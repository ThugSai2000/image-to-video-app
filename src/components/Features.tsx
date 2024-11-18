import React, { useState } from 'react';
import { Video, Image, Code, Wand2 } from 'lucide-react';
import ImageGenerator from './ImageGenerator';

const features = [
  {
    icon: Video,
    title: 'AI Video Editing',
    description: 'Edit and enhance videos automatically with our advanced AI algorithms.',
    comingSoon: true,
  },
  {
    icon: Image,
    title: 'Image Generation',
    description: 'Create stunning visuals from text descriptions in seconds.',
    comingSoon: false,
  },
  {
    icon: Code,
    title: 'API Integration',
    description: 'Seamlessly integrate AI capabilities into your applications.',
    comingSoon: true,
  },
  {
    icon: Wand2,
    title: 'Magic Effects',
    description: 'Apply stunning visual effects with one-click transformations.',
    comingSoon: true,
  },
];

export default function Features() {
  const [isImageGeneratorOpen, setIsImageGeneratorOpen] = useState(false);

  const handleFeatureClick = (index: number) => {
    if (features[index].comingSoon) {
      alert('This feature is coming soon!');
      return;
    }

    if (index === 1) { // Image Generation
      setIsImageGeneratorOpen(true);
    }
  };

  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Powerful Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleFeatureClick(index)}
              className="text-left relative group bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
                {feature.comingSoon && (
                  <span className="ml-2 text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </button>
          ))}
        </div>
      </div>

      <ImageGenerator 
        isOpen={isImageGeneratorOpen} 
        onClose={() => setIsImageGeneratorOpen(false)} 
      />
    </section>
  );
}