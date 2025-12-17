import { useState } from 'react';
import { ArrowLeft, Filter, Star, MapPin, Languages, DollarSign, Shield, Clock } from 'lucide-react';
import type { Screen } from '../App';

interface GuidesMarketplaceProps {
  onNavigate: (screen: Screen, guideId?: string) => void;
}

interface Guide {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  languages: string[];
  pricePerHour: number;
  specialties: string[];
  verified: boolean;
  responseTime: string;
  available: boolean;
}

const guides: Guide[] = [
  {
    id: '1',
    name: 'Hassan El Amrani',
    image: 'https://images.unsplash.com/photo-1760727752017-729732a296e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGd1aWRlJTIwdG91cmlzbXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 127,
    languages: ['English', 'French', 'Arabic', 'Spanish'],
    pricePerHour: 25,
    specialties: ['History', 'Architecture', 'Food Tours'],
    verified: true,
    responseTime: '< 1 hour',
    available: true,
  },
  {
    id: '2',
    name: 'Fatima Bennani',
    image: 'https://images.unsplash.com/photo-1760727752017-729732a296e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGd1aWRlJTIwdG91cmlzbXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviews: 89,
    languages: ['English', 'French', 'Arabic'],
    pricePerHour: 30,
    specialties: ['Culture', 'Local Markets', 'Artisan Workshops'],
    verified: true,
    responseTime: '< 30 min',
    available: true,
  },
  {
    id: '3',
    name: 'Omar Tazi',
    image: 'https://images.unsplash.com/photo-1760727752017-729732a296e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGd1aWRlJTIwdG91cmlzbXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 156,
    languages: ['English', 'Arabic', 'German'],
    pricePerHour: 20,
    specialties: ['Nature', 'Photography', 'Hidden Gems'],
    verified: true,
    responseTime: '< 2 hours',
    available: false,
  },
  {
    id: '4',
    name: 'Aicha Alami',
    image: 'https://images.unsplash.com/photo-1760727752017-729732a296e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NhbiUyMGd1aWRlJTIwdG91cmlzbXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 203,
    languages: ['English', 'French', 'Arabic', 'Italian'],
    pricePerHour: 28,
    specialties: ['Culinary', 'Traditional Crafts', 'Family Tours'],
    verified: true,
    responseTime: '< 1 hour',
    available: true,
  },
];

export function GuidesMarketplace({ onNavigate }: GuidesMarketplaceProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredGuides = selectedFilter === 'available' 
    ? guides.filter(g => g.available)
    : guides;

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B6CB0] to-[#4A90E2] pt-6 pb-8 px-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-white flex-1">Certified Guides</h2>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Filter className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Trust badge */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#48BB78]" />
          </div>
          <div className="flex-1">
            <p className="text-white">All guides are verified</p>
            <p className="text-white/80 text-sm">Background checked & licensed</p>
          </div>
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setSelectedFilter('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedFilter === 'all'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Guides
        </button>
        <button
          onClick={() => setSelectedFilter('available')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedFilter === 'available'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Available Now
        </button>
        <button className="px-4 py-2 rounded-full whitespace-nowrap bg-white text-gray-700 hover:bg-gray-100">
          Top Rated
        </button>
        <button className="px-4 py-2 rounded-full whitespace-nowrap bg-white text-gray-700 hover:bg-gray-100">
          Food Tours
        </button>
      </div>

      {/* Guides list */}
      <div className="px-6 pb-6 space-y-4">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            onClick={() => onNavigate('guide-profile', guide.id)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div className="flex gap-4 p-4">
              {/* Guide photo */}
              <div className="relative flex-shrink-0">
                <div
                  className="w-24 h-24 rounded-xl bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${guide.image})` }}
                ></div>
                {guide.verified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#48BB78] rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                )}
                {guide.available && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#48BB78] rounded-full border-2 border-white"></div>
                )}
              </div>

              {/* Guide info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-gray-900 truncate">{guide.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                        <span className="text-gray-900">{guide.rating}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({guide.reviews})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900">${guide.pricePerHour}</p>
                    <p className="text-gray-500 text-sm">/hour</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="w-4 h-4 text-[#2B6CB0]" />
                  <span className="text-gray-600 text-sm truncate">
                    {guide.languages.slice(0, 3).join(', ')}
                    {guide.languages.length > 3 && ' +'}
                  </span>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {guide.specialties.slice(0, 2).map((specialty, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#E8DCC8] text-[#C86D47] text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                  {guide.specialties.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{guide.specialties.length - 2}
                    </span>
                  )}
                </div>

                {/* Response time */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Clock className="w-3 h-3" />
                  <span>Responds {guide.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Bottom action */}
            <div className="border-t border-gray-100 px-4 py-3 flex items-center justify-between">
              <span className="text-gray-600 text-sm">Tap to view profile</span>
              {guide.available ? (
                <span className="text-[#48BB78] text-sm">Available now</span>
              ) : (
                <span className="text-gray-400 text-sm">Busy</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom info */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-xl p-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D97757] to-[#C86D47] rounded-full flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">Transparent Pricing</p>
              <p className="text-gray-600 text-sm">All prices are fixed & fair</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
