import { useState } from 'react';
import { ArrowLeft, Map, List, Star, Users, Leaf, Camera, MapPin, Clock, Navigation } from 'lucide-react';
import type { Screen } from '../App';

interface DiscoverPlacesProps {
  onNavigate: (screen: Screen) => void;
}

interface Place {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  visitors: 'low' | 'medium' | 'high';
  distance: string;
  duration: string;
  description: string;
  sustainable: boolean;
  hidden: boolean;
}

const places: Place[] = [
  {
    id: 1,
    name: 'Perdicaris Park',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1694739880628-46f40d0a618e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwa2FzYmFoJTIwbWVkaW5hfGVufDF8fHx8MTc2NTk3MjE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    visitors: 'low',
    distance: '6 km',
    duration: '15 min drive',
    description: 'Peaceful forest park with walking trails and sea views',
    sustainable: true,
    hidden: true,
  },
  {
    id: 2,
    name: 'Café Hafa',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1675098950156-fa8325a89b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwc3RyZWV0fGVufDF8fHx8MTc2NTk3MjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    visitors: 'medium',
    distance: '2 km',
    duration: '5 min drive',
    description: 'Historic clifftop café, frequented by artists and writers',
    sustainable: true,
    hidden: false,
  },
  {
    id: 3,
    name: 'Achakkar Beach',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1749906939887-8be26f783207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwTW9yb2NjbyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    visitors: 'low',
    distance: '12 km',
    duration: '25 min drive',
    description: 'Secluded beach away from crowds, perfect for sunset',
    sustainable: true,
    hidden: true,
  },
  {
    id: 4,
    name: 'Marshan Palace Gardens',
    category: 'Historic',
    image: 'https://images.unsplash.com/photo-1694739880628-46f40d0a618e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwa2FzYmFoJTIwbWVkaW5hfGVufDF8fHx8MTc2NTk3MjE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    visitors: 'low',
    distance: '3 km',
    duration: '8 min drive',
    description: 'Tranquil gardens with traditional Moroccan architecture',
    sustainable: true,
    hidden: true,
  },
  {
    id: 5,
    name: 'American Legation Museum',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1675098950156-fa8325a89b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JvY2NvJTIwYXJjaGl0ZWN0dXJlJTIwc3RyZWV0fGVufDF8fHx8MTc2NTk3MjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    visitors: 'medium',
    distance: '1 km',
    duration: '3 min walk',
    description: 'First American public property outside USA',
    sustainable: false,
    hidden: false,
  },
  {
    id: 6,
    name: 'Cap Malabata',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1749906939887-8be26f783207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwTW9yb2NjbyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    visitors: 'low',
    distance: '15 km',
    duration: '30 min drive',
    description: 'Scenic cape with panoramic Mediterranean views',
    sustainable: true,
    hidden: true,
  },
];

export function DiscoverPlaces({ onNavigate }: DiscoverPlacesProps) {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => place.category.toLowerCase() === selectedCategory);

  const getVisitorColor = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return 'text-[#48BB78]';
      case 'medium': return 'text-[#D4AF37]';
      case 'high': return 'text-[#D97757]';
    }
  };

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
          <h2 className="text-white flex-1">Discover Places</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-colors ${
                viewMode === 'list' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <List className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-full transition-colors ${
                viewMode === 'map' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
            >
              <Map className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Info card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
          <p className="text-white">
            Explore authentic locations away from tourist crowds
          </p>
        </div>
      </div>

      {/* Category filters */}
      <div className="px-6 py-4 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          All Places
        </button>
        <button
          onClick={() => setSelectedCategory('nature')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors flex items-center gap-2 ${
            selectedCategory === 'nature'
              ? 'bg-[#48BB78] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Leaf className="w-4 h-4" />
          Nature
        </button>
        <button
          onClick={() => setSelectedCategory('culture')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === 'culture'
              ? 'bg-[#D97757] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Culture
        </button>
        <button
          onClick={() => setSelectedCategory('historic')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedCategory === 'historic'
              ? 'bg-[#D4AF37] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Historic
        </button>
      </div>

      {/* Places list */}
      {viewMode === 'list' && (
        <div className="px-6 pb-6 space-y-4">
          {/* Recommended section */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-5 h-5 text-[#D97757]" />
              <span className="text-gray-700">Recommended for you</span>
            </div>
          </div>

          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${place.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {place.hidden && (
                    <div className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Hidden Gem
                    </div>
                  )}
                  {place.sustainable && (
                    <div className="bg-[#48BB78] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Sustainable
                    </div>
                  )}
                </div>

                {/* Bottom info on image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <p className="text-white text-sm mb-1">{place.category}</p>
                    <h3 className="text-white">{place.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="text-white">{place.rating}</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-4">
                <p className="text-gray-600 mb-3">{place.description}</p>

                {/* Info grid */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Navigation className="w-4 h-4 text-[#2B6CB0]" />
                    <span>{place.distance}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Clock className="w-4 h-4 text-[#2B6CB0]" />
                    <span>{place.duration}</span>
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${getVisitorColor(place.visitors)}`}>
                    <Users className="w-4 h-4" />
                    <span className="capitalize">{place.visitors}</span>
                  </div>
                </div>

                {/* Action */}
                <button className="w-full bg-gradient-to-r from-[#2B6CB0] to-[#4A90E2] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Map view */}
      {viewMode === 'map' && (
        <div className="px-6 pb-6">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg" style={{ height: '60vh' }}>
            {/* Map placeholder */}
            <div className="w-full h-full bg-gray-200 relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1749906939887-8be26f783207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW5naWVyJTIwTW9yb2NjbyUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NjU5NzIxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080)',
                }}
              ></div>
              
              {/* Map pins */}
              <div className="absolute top-1/4 left-1/3">
                <div className="w-10 h-10 bg-[#D97757] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 right-1/4">
                <div className="w-10 h-10 bg-[#48BB78] rounded-full flex items-center justify-center shadow-lg animate-pulse-subtle">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-1/3 left-1/2">
                <div className="w-10 h-10 bg-[#2B6CB0] rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl max-w-xs">
                  <Map className="w-12 h-12 text-[#2B6CB0] mx-auto mb-3" />
                  <p className="text-gray-700 mb-2">Interactive Map View</p>
                  <p className="text-gray-600 text-sm">
                    Shows all nearby places with real-time crowd levels
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom sheet preview */}
          <div className="mt-4 bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-4">
              <div
                className="w-20 h-20 rounded-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${places[0].image})` }}
              ></div>
              <div className="flex-1">
                <h3 className="text-gray-900 mb-1">{places[0].name}</h3>
                <p className="text-gray-600 text-sm mb-2">{places[0].description}</p>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  <span className="text-gray-700">{places[0].rating}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600 text-sm">{places[0].distance}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
