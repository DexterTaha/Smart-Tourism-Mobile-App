import { useState } from 'react';
import { ArrowLeft, Plus, Heart, MessageCircle, Tag, TrendingUp } from 'lucide-react';
import type { Screen } from '../App';

interface CulturalExchangeProps {
  onNavigate: (screen: Screen) => void;
}

interface Post {
  id: number;
  author: string;
  authorType: 'tourist' | 'guide';
  question: string;
  answers: number;
  likes: number;
  tags: string[];
  timeAgo: string;
  hasAnswer: boolean;
}

const posts: Post[] = [
  {
    id: 1,
    author: 'Emma from UK',
    authorType: 'tourist',
    question: 'What is the proper way to greet locals in Tangier? I want to be respectful.',
    answers: 5,
    likes: 23,
    tags: ['culture', 'etiquette'],
    timeAgo: '2 hours ago',
    hasAnswer: true,
  },
  {
    id: 2,
    author: 'Marco from Italy',
    authorType: 'tourist',
    question: 'Best time to visit the fish market? And how to know if the price is fair?',
    answers: 8,
    likes: 34,
    tags: ['food', 'markets'],
    timeAgo: '5 hours ago',
    hasAnswer: true,
  },
  {
    id: 3,
    author: 'Sophie from France',
    authorType: 'tourist',
    question: 'Can someone explain the significance of the mint tea ceremony?',
    answers: 12,
    likes: 56,
    tags: ['culture', 'traditions'],
    timeAgo: '1 day ago',
    hasAnswer: true,
  },
  {
    id: 4,
    author: 'James from USA',
    authorType: 'tourist',
    question: 'What are the typical dishes I must try in Tangier? Any vegetarian options?',
    answers: 15,
    likes: 42,
    tags: ['food', 'cuisine'],
    timeAgo: '1 day ago',
    hasAnswer: true,
  },
  {
    id: 5,
    author: 'Lisa from Germany',
    authorType: 'tourist',
    question: 'Is it okay to take photos in the Medina? What are the rules?',
    answers: 3,
    likes: 18,
    tags: ['etiquette', 'photography'],
    timeAgo: '2 days ago',
    hasAnswer: true,
  },
];

const trendingTopics = [
  { name: 'Ramadan Tips', color: 'from-[#D4AF37] to-[#C8A055]' },
  { name: 'AFCON 2025', color: 'from-[#48BB78] to-[#38A169]' },
  { name: 'Local Markets', color: 'from-[#D97757] to-[#C86D47]' },
  { name: 'World Cup 2030', color: 'from-[#2B6CB0] to-[#4A90E2]' },
];

export function CulturalExchange({ onNavigate }: CulturalExchangeProps) {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredPosts = selectedTag === 'all' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

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
          <h2 className="text-white flex-1">Cultural Exchange</h2>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Plus className="w-6 h-6 text-white" />
          </button>
        </div>

        <p className="text-white/90">
          Ask questions, share experiences, and connect with local guides
        </p>
      </div>

      {/* Trending topics */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-[#D97757]" />
          <span className="text-gray-700">Trending Now</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {trendingTopics.map((topic, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${topic.color} text-white whitespace-nowrap shadow-md hover:shadow-lg transition-shadow`}
            >
              {topic.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filter tags */}
      <div className="px-6 pb-4 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setSelectedTag('all')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedTag === 'all'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedTag('culture')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedTag === 'culture'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Culture
        </button>
        <button
          onClick={() => setSelectedTag('food')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedTag === 'food'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Food
        </button>
        <button
          onClick={() => setSelectedTag('traditions')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedTag === 'traditions'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Traditions
        </button>
        <button
          onClick={() => setSelectedTag('etiquette')}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            selectedTag === 'etiquette'
              ? 'bg-[#2B6CB0] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          Etiquette
        </button>
      </div>

      {/* Posts feed */}
      <div className="px-6 pb-6 space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            {/* Author info */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4A90E2] to-[#2B6CB0] rounded-full"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900">{post.author}</span>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      post.authorType === 'tourist'
                        ? 'bg-[#E8DCC8] text-[#C86D47]'
                        : 'bg-[#48BB78]/20 text-[#38A169]'
                    }`}
                  >
                    {post.authorType === 'tourist' ? 'Tourist' : 'Guide'}
                  </span>
                </div>
                <span className="text-gray-500 text-sm">{post.timeAgo}</span>
              </div>
            </div>

            {/* Question */}
            <p className="text-gray-800 mb-3 leading-relaxed">{post.question}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-1 text-[#2B6CB0]">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">{tag}</span>
                </div>
              ))}
            </div>

            {/* Engagement */}
            <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#D97757] transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#2B6CB0] transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.answers} answers</span>
              </button>
              {post.hasAnswer && (
                <div className="ml-auto flex items-center gap-1 text-[#48BB78]">
                  <div className="w-2 h-2 bg-[#48BB78] rounded-full"></div>
                  <span className="text-sm">Answered</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating add button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#D97757] to-[#C86D47] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
