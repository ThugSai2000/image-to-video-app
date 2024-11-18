import React, { useState } from 'react';
import { X, Image, Loader2 } from 'lucide-react';

const SAMPLE_PROMPTS = [
  "A serene mountain landscape at sunset",
  "Futuristic cityscape with flying cars",
  "Abstract digital art with neon colors",
  "Mystical forest with glowing mushrooms"
];

const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1520034475321-cbe63696469a",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401"
];

export default function ImageGenerator({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    
    setIsGenerating(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo, randomly select a sample image
    const randomImage = SAMPLE_IMAGES[Math.floor(Math.random() * SAMPLE_IMAGES.length)];
    setGeneratedImage(randomImage);
    setIsGenerating(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-3xl overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">AI Image Generation</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
                Enter your prompt
              </label>
              <textarea
                id="prompt"
                rows={3}
                className="w-full bg-black/50 border border-gray-800 rounded-lg p-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="Describe the image you want to generate..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {SAMPLE_PROMPTS.map((samplePrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(samplePrompt)}
                  className="text-sm bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full hover:bg-purple-500/20 transition-colors"
                >
                  {samplePrompt}
                </button>
              ))}
            </div>

            <button
              onClick={handleGenerate}
              disabled={!prompt || isGenerating}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Image className="w-5 h-5" />
                  Generate Image
                </>
              )}
            </button>
          </div>

          {generatedImage && (
            <div className="mt-6">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={generatedImage}
                  alt="Generated"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  onClick={() => window.open(generatedImage, '_blank')}
                  className="flex-1 bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Open Full Size
                </button>
                <button
                  onClick={() => {
                    setGeneratedImage(null);
                    setPrompt('');
                  }}
                  className="flex-1 bg-white/10 text-white py-2 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  Generate New
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}