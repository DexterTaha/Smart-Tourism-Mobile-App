import { useState } from 'react';
import { Camera, MessageCircle, MapPin, Globe, User, Scan, Compass, Users, MessageSquare } from 'lucide-react';
import type { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const [language, setLanguage] = useState('EN');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* AR Camera Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1749906939887-8be26f783207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwTW9yb2NjbyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      {/* Top bar */}
      <div className="relative z-20 flex items-center justify-between p-6">
        <div className="flex items-center gap-3 glass rounded-full px-4 py-2">
          <Globe className="w-5 h-5 text-[#2B6CB0]" />
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-transparent border-none outline-none cursor-pointer"
          >
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="AR">AR</option>
            <option value="ES">ES</option>
          </select>
        </div>

        <button 
          onClick={() => onNavigate('profile')}
          className="glass rounded-full p-3 hover:bg-white transition-colors"
        >
          <User className="w-5 h-5 text-[#2B6CB0]" />
        </button>
      </div>

      {/* 3D Virtual Avatar Guide */}
      <div className="relative z-10 flex flex-col items-center mt-12 animate-fade-in">
        {/* Avatar placeholder with glow effect */}
        <div className="relative mb-6">
          <div className="w-48 h-64 bg-gradient-to-br from-[#4A90E2]/80 to-[#2B6CB0]/80 rounded-3xl glass-dark flex flex-col items-center justify-center ar-glow">
            <div className="w-24 h-24 bg-white/20 rounded-full mb-4 flex items-center justify-center">
              <User className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <div className="text-white text-center px-4">
              <p className="mb-1">Amina</p>
              <p className="text-sm text-white/80">Your AI Guide</p>
            </div>
          </div>
          {/* Floating indicator */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#48BB78] rounded-full animate-pulse-subtle shadow-lg"></div>
        </div>

        {/* Speech bubble */}
        <div className="glass rounded-2xl px-6 py-4 max-w-xs mx-6 animate-slide-up shadow-xl">
          <p className="text-gray-700 text-center">
            Welcome to Tangier! Ready to explore authentic experiences?
          </p>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 space-y-4">
        {/* Main CTAs */}
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => onNavigate('ar')}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white transition-colors shadow-lg group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#2B6CB0] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Scan className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Scan Place</p>
              <p className="text-sm text-gray-600">Point camera at monuments</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('chat')}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white transition-colors shadow-lg group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#D97757] to-[#C86D47] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Ask the Guide</p>
              <p className="text-sm text-gray-600">Get instant local advice</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('discover')}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white transition-colors shadow-lg group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#48BB78] to-[#38A169] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Nearby Experiences</p>
              <p className="text-sm text-gray-600">Hidden gems near you</p>
            </div>
          </button>
        </div>

        {/* Secondary navigation */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('guides')}
            className="glass rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <Users className="w-5 h-5 text-[#2B6CB0]" />
            <span className="text-gray-900">Guides</span>
          </button>

          <button
            onClick={() => onNavigate('cultural')}
            className="glass rounded-xl px-4 py-3 flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-[#2B6CB0]" />
            <span className="text-gray-900">Community</span>
          </button>
        </div>
      </div>
    </div>
  );
}
