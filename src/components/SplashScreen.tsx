import { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2B6CB0] via-[#4A90E2] to-[#D97757] moroccan-pattern relative overflow-hidden">
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Logo and content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8 relative">
          {/* Geometric Moroccan-inspired icon */}
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-white/20 rounded-3xl rotate-45 backdrop-blur-sm"></div>
            <div className="absolute inset-4 bg-white/30 rounded-2xl rotate-45 backdrop-blur-sm"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="text-white mb-3">Tangier Guide</h1>
          <p className="text-white/90 text-lg max-w-xs mx-auto">
            Discover Tangier, authentically and safely
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}
