import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    features: [
      'Basic AI image generation',
      '720p video editing',
      'Community support',
      '5 projects per month',
    ],
  },
  {
    name: 'Pro',
    price: '29',
    features: [
      'Advanced AI generation',
      '4K video editing',
      'Priority support',
      'Unlimited projects',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '99',
    features: [
      'Custom AI models',
      '8K video editing',
      'Dedicated support',
      'Unlimited everything',
      'Custom API integration',
      'Team collaboration',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Simple Pricing</h2>
          <p className="mt-4 text-xl text-gray-400">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-purple-900 to-blue-900 border-2 border-purple-500'
                  : 'bg-black/50 backdrop-blur-sm border border-gray-800'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold text-white">${plan.price}</span>
                  <span className="ml-1 text-xl text-gray-400">/month</span>
                </div>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}