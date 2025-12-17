import { useState } from 'react';
import { Scan, Shield, Compass, ChevronRight } from 'lucide-react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Scan,
    title: 'AR Virtual Guide',
    description: 'Experience Tangier through augmented reality with your personal 3D AI guide showing you hidden gems',
    color: 'from-[#4A90E2] to-[#2B6CB0]',
  },
  {
    icon: Shield,
    title: 'Safe Tourism',
    description: 'Connect with verified local guides. Transparent pricing, certified professionals, secure bookings',
    color: 'from-[#48BB78] to-[#38A169]',
  },
  {
    icon: Compass,
    title: 'Authentic Culture',
    description: 'Discover hidden places, local traditions, and authentic experiences beyond tourist traps',
    color: 'from-[#D97757] to-[#C86D47]',
  },
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-[#F5F1ED] flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="text-gray-500 px-4 py-2"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-12">
        {/* Icon with gradient background */}
        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${slide.color} flex items-center justify-center mb-12 animate-fade-in shadow-2xl`}>
          <Icon className="w-24 h-24 text-white" strokeWidth={1.5} />
        </div>

        {/* Text content */}
        <div className="text-center max-w-md animate-fade-in">
          <h2 className="text-gray-900 mb-4">{slide.title}</h2>
          <p className="text-gray-600 leading-relaxed">
            {slide.description}
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-8 pb-12">
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-[#2B6CB0]' 
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-[#2B6CB0] to-[#4A90E2] text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          <span>{currentSlide === slides.length - 1 ? 'Start Exploring' : 'Next'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
