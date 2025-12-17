import { useState } from 'react';
import { X, Volume2, Book, MessageCircle, MapPin, Clock, Users } from 'lucide-react';
import type { Screen } from '../App';

interface ARExperienceScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function ARExperienceScreen({ onNavigate }: ARExperienceScreenProps) {
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* AR Camera view */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1675098950156-fa8325a89b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwc3RyZWV0fGVufDF8fHx8MTc2NTk3MjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Top controls */}
      <div className="relative z-20 flex items-center justify-between p-6">
        <button
          onClick={() => onNavigate('home')}
          className="glass-dark rounded-full p-3 hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="glass-dark rounded-full px-4 py-2 flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse-subtle"></div>
          <span className="text-white text-sm">AR Active</span>
        </div>
      </div>

      {/* AR Scanning overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 border-2 border-[#4A90E2]/60 rounded-lg relative">
          {/* Corner indicators */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#4A90E2]"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#4A90E2]"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#4A90E2]"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#4A90E2]"></div>
          
          {/* Scanning line */}
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#4A90E2] to-transparent animate-pulse-subtle"></div>
        </div>
      </div>

      {/* 3D Avatar overlay (positioned in scene) */}
      <div className="absolute left-6 bottom-80 z-15 animate-fade-in">
        <div className="w-32 h-40 bg-gradient-to-br from-[#4A90E2]/70 to-[#2B6CB0]/70 rounded-2xl glass-dark flex flex-col items-center justify-center shadow-2xl ar-glow">
          <div className="w-12 h-12 bg-white/20 rounded-full mb-2 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <p className="text-white text-xs">Amina</p>
        </div>
        {/* Pointer line to monument */}
        <div className="absolute -top-4 left-1/2 w-0.5 h-8 bg-[#4A90E2]/50"></div>
      </div>

      {/* Info card for detected monument */}
      {showInfo && (
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 animate-slide-up">
          <div className="glass-dark rounded-3xl p-6 space-y-4">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#4A90E2]" />
                  <span className="text-white text-sm">Detected</span>
                </div>
                <h3 className="text-white mb-1">Kasbah Museum</h3>
                <p className="text-white/70 text-sm">17th Century Fortress</p>
              </div>
              <button
                onClick={() => setShowInfo(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white/80 text-sm">Built 1684</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white/80 text-sm">Public access</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed">
              Former sultan's palace, now houses Moroccan art and artifacts. A stunning example of traditional architecture with panoramic views of the Strait of Gibraltar.
            </p>

            {/* Cultural tip */}
            <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-xl p-3">
              <p className="text-[#D4AF37] text-sm">
                <strong>Tip:</strong> Remove shoes before entering prayer halls. Photography allowed in courtyards only.
              </p>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <button className="glass rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-white/20 transition-colors">
                <Volume2 className="w-5 h-5 text-white" />
                <span className="text-white text-xs">Listen</span>
              </button>
              <button className="glass rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-white/20 transition-colors">
                <Book className="w-5 h-5 text-white" />
                <span className="text-white text-xs">Read More</span>
              </button>
              <button 
                onClick={() => onNavigate('chat')}
                className="glass rounded-xl py-3 flex flex-col items-center gap-1 hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white text-xs">Ask More</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reopen info button when closed */}
      {!showInfo && (
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
          <button
            onClick={() => setShowInfo(true)}
            className="glass-dark rounded-full px-6 py-3 text-white flex items-center gap-2 shadow-lg"
          >
            <Book className="w-5 h-5" />
            <span>Show Info</span>
          </button>
        </div>
      )}
    </div>
  );
}
