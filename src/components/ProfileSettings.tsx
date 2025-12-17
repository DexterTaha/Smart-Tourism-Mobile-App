import { ArrowLeft, User, Globe, Bell, Shield, HelpCircle, Heart, MapPin, Calendar, LogOut, ChevronRight } from 'lucide-react';
import type { Screen } from '../App';

interface ProfileSettingsProps {
  onNavigate: (screen: Screen) => void;
}

export function ProfileSettings({ onNavigate }: ProfileSettingsProps) {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B6CB0] to-[#4A90E2] pt-6 pb-12 px-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-white flex-1">Profile & Settings</h2>
        </div>

        {/* Profile card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-[#2B6CB0]" />
          </div>
          <h3 className="text-white mb-1">Sarah Johnson</h3>
          <p className="text-white/80">Tourist</p>
          <p className="text-white/70 text-sm mt-2">Member since Dec 2024</p>
        </div>
      </div>

      {/* Settings sections */}
      <div className="px-6 -mt-6 space-y-4">
        {/* Account */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="px-5 py-3 border-b border-gray-100">
            <p className="text-gray-500 text-sm">Account</p>
          </div>
          
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-[#2B6CB0]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Edit Profile</p>
              <p className="text-gray-600 text-sm">Name, photo, bio</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#48BB78]/10 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#48BB78]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Interests</p>
              <p className="text-gray-600 text-sm">Customize recommendations</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="px-5 py-3 border-b border-gray-100">
            <p className="text-gray-500 text-sm">Preferences</p>
          </div>
          
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Language</p>
              <p className="text-gray-600 text-sm">English</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-[#D97757]/10 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-[#D97757]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Notifications</p>
              <p className="text-gray-600 text-sm">Manage alerts</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#2B6CB0]/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#2B6CB0]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Location Services</p>
              <p className="text-gray-600 text-sm">For AR features</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Bookings */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="px-5 py-3 border-b border-gray-100">
            <p className="text-gray-500 text-sm">Bookings & History</p>
          </div>
          
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-[#48BB78]/10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#48BB78]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">My Bookings</p>
              <p className="text-gray-600 text-sm">View upcoming tours</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Visited Places</p>
              <p className="text-gray-600 text-sm">Your travel history</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Support & Safety */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <div className="px-5 py-3 border-b border-gray-100">
            <p className="text-gray-500 text-sm">Support & Safety</p>
          </div>
          
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-[#4A90E2]/10 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-[#2B6CB0]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Help Center</p>
              <p className="text-gray-600 text-sm">FAQs and support</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-[#48BB78]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#48BB78]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Safety Information</p>
              <p className="text-gray-600 text-sm">Travel safely in Tangier</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-[#D97757]/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#D97757]" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Privacy & Security</p>
              <p className="text-gray-600 text-sm">Manage your data</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-md">
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="flex-1 text-left">
              <p className="text-gray-600 text-sm">App Version</p>
              <p className="text-gray-900">1.0.0 (Beta)</p>
            </div>
          </button>
        </div>

        {/* Logout */}
        <button className="w-full bg-white rounded-2xl px-5 py-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-md">
          <LogOut className="w-5 h-5 text-[#D97757]" />
          <span className="text-[#D97757]">Log Out</span>
        </button>
      </div>

      {/* Bottom padding */}
      <div className="h-8"></div>
    </div>
  );
}
