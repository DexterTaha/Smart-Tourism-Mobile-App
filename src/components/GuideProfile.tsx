import { ArrowLeft, Star, Languages, MapPin, Award, Shield, Calendar, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import type { Screen } from '../App';

interface GuideProfileProps {
  guideId: string;
  onNavigate: (screen: Screen) => void;
}

// Mock data - in real app would fetch by ID
const guideData = {
  name: 'Hassan El Amrani',
  image: 'https://images.unsplash.com/photo-1760727752017-729732a296e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGd1aWRlJTIwdG91cmlzbXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  rating: 4.9,
  reviews: 127,
  languages: ['English', 'French', 'Arabic', 'Spanish'],
  pricePerHour: 25,
  bio: "Born and raised in Tangier, I've been sharing my city's rich history and culture with visitors for over 10 years. My passion is showing you the authentic Tangier - from hidden cafés to ancient stories.",
  specialties: ['History', 'Architecture', 'Food Tours', 'Local Markets'],
  certifications: [
    'Licensed Tour Guide - Morocco Tourism Board',
    'First Aid Certified',
    'Cultural Heritage Specialist',
  ],
  tours: [
    { name: 'Medina Walking Tour', duration: '3 hours', price: 70 },
    { name: 'Food & Spice Experience', duration: '4 hours', price: 90 },
    { name: 'Sunset at Cap Spartel', duration: '2 hours', price: 50 },
    { name: 'Full Day Cultural Immersion', duration: '8 hours', price: 180 },
  ],
  reviews: [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: 'Dec 2024',
      text: 'Hassan was incredible! His knowledge of Tangier history is amazing. Showed us places we would never have found alone.',
    },
    {
      name: 'Marco Bianchi',
      rating: 5,
      date: 'Nov 2024',
      text: 'Best guide ever! Very professional, friendly, and the food tour was outstanding. Worth every dirham!',
    },
    {
      name: 'Emma Laurent',
      rating: 5,
      date: 'Oct 2024',
      text: 'Hassan made our trip unforgettable. He respects local culture and ensures you have an authentic experience.',
    },
  ],
};

export function GuideProfile({ onNavigate }: GuideProfileProps) {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header with image */}
      <div className="relative h-64 bg-gray-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${guideData.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </div>

        {/* Back button */}
        <button
          onClick={() => onNavigate('guides')}
          className="absolute top-6 left-6 p-3 glass-dark rounded-full hover:bg-black/70 transition-colors z-10"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Verified badge */}
        <div className="absolute top-6 right-6 flex items-center gap-2 glass-dark rounded-full px-4 py-2">
          <Shield className="w-5 h-5 text-[#48BB78]" />
          <span className="text-white text-sm">Verified</span>
        </div>

        {/* Name and rating */}
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="text-white mb-2">{guideData.name}</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="text-white">{guideData.rating}</span>
            </div>
            <span className="text-white/80">({guideData.reviews} reviews)</span>
            <div className="flex items-center gap-1 text-white/80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Tangier</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Quick info cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <Languages className="w-6 h-6 text-[#2B6CB0] mb-2" />
            <p className="text-gray-900">4 Languages</p>
            <p className="text-gray-600 text-sm">Multilingual</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <Clock className="w-6 h-6 text-[#D97757] mb-2" />
            <p className="text-gray-900">${guideData.pricePerHour}/hr</p>
            <p className="text-gray-600 text-sm">Fixed rate</p>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="text-gray-900 mb-3">About</h3>
          <p className="text-gray-600 leading-relaxed mb-4">{guideData.bio}</p>
          
          {/* Languages */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Languages className="w-5 h-5 text-[#2B6CB0]" />
              <span className="text-gray-900">Languages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {guideData.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#E8DCC8] text-[#C86D47] rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-gray-900">Specialties</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {guideData.specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#4A90E2]/10 text-[#2B6CB0] rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-6 h-6 text-[#48BB78]" />
            <h3 className="text-gray-900">Certifications</h3>
          </div>
          <div className="space-y-3">
            {guideData.certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#48BB78] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tours offered */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-[#D97757]" />
            <h3 className="text-gray-900">Tours Offered</h3>
          </div>
          <div className="space-y-3">
            {guideData.tours.map((tour, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:border-[#2B6CB0] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-gray-900">{tour.name}</p>
                  <p className="text-[#2B6CB0]">${tour.price}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{tour.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900">Reviews</h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="text-gray-900">{guideData.rating}</span>
            </div>
          </div>
          <div className="space-y-4">
            {guideData.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-gray-900">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom action buttons */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 shadow-lg">
        <div className="grid grid-cols-5 gap-3">
          <button className="col-span-1 p-4 border-2 border-[#2B6CB0] rounded-xl hover:bg-gray-50 transition-colors">
            <MessageCircle className="w-6 h-6 text-[#2B6CB0] mx-auto" />
          </button>
          <button className="col-span-4 bg-gradient-to-r from-[#2B6CB0] to-[#4A90E2] text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
            <Calendar className="w-5 h-5" />
            <span>Book Securely</span>
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm mt-3">
          Secure payment • Cancel anytime • Money-back guarantee
        </p>
      </div>
    </div>
  );
}
