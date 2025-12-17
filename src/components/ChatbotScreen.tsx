import { useState } from 'react';
import { ArrowLeft, Send, Mic, MapPin, DollarSign, Coffee, Camera } from 'lucide-react';
import type { Screen } from '../App';

interface ChatbotScreenProps {
  onNavigate: (screen: Screen) => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const quickQuestions = [
  { icon: MapPin, text: 'What is this place?', color: 'from-[#4A90E2] to-[#2B6CB0]' },
  { icon: DollarSign, text: 'Is this price fair?', color: 'from-[#48BB78] to-[#38A169]' },
  { icon: Coffee, text: 'Local traditions?', color: 'from-[#D97757] to-[#C86D47]' },
  { icon: Camera, text: 'Photo spots nearby?', color: 'from-[#D4AF37] to-[#C8A055]' },
];

export function ChatbotScreen({ onNavigate }: ChatbotScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Amina, your AI guide. Ask me anything about Tangier, local culture, prices, or where to go next! 🌟",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(messageText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('price') || lowerQuestion.includes('fair')) {
      return "In the Medina, expect to pay 50-100 MAD for handmade crafts. A fair taxi ride from city center to beach is 15-20 MAD. Always negotiate politely - start at 60% of asking price. 💰";
    }
    if (lowerQuestion.includes('tradition') || lowerQuestion.includes('culture')) {
      return "Key customs: Greet with 'Salam Alaikum', accept mint tea offers (it's hospitality!), dress modestly in religious areas. Friday is prayer day. Ramadan is sacred - respect fasting times. 🕌";
    }
    if (lowerQuestion.includes('photo') || lowerQuestion.includes('spot')) {
      return "Best spots: Cap Spartel lighthouse at sunset, Hercules Caves, colorful doors in the Medina, and rooftop cafés overlooking the port. Always ask permission before photographing people. 📸";
    }
    if (lowerQuestion.includes('place') || lowerQuestion.includes('where')) {
      return "You're near the historic Kasbah! Must-sees: Grand Socco square, American Legation Museum, Petit Socco for cafés, and the beach promenade. Each tells a unique story! 🗺️";
    }
    
    return "Great question! I recommend visiting the Kasbah Museum for history, or connecting with a certified local guide for deeper insights. Would you like me to show you verified guides nearby? 🌟";
  };

  return (
    <div className="min-h-screen bg-[#F5F1ED] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B6CB0] to-[#4A90E2] pt-6 pb-8 px-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h2 className="text-white flex-1">Ask Your Guide</h2>
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full"></div>
          </div>
          <div>
            <p className="text-white">Amina - AI Guide</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 bg-[#48BB78] rounded-full"></div>
              <span className="text-white/80 text-sm">Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-[#2B6CB0] to-[#4A90E2] text-white rounded-br-sm'
                  : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
              }`}
            >
              <p className="leading-relaxed">{message.text}</p>
              <p
                className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {/* Quick questions */}
        {messages.length === 1 && (
          <div className="space-y-3 pt-4">
            <p className="text-gray-600 text-sm px-2">Quick questions:</p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => {
                const Icon = question.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question.text)}
                    className="bg-white rounded-xl p-4 flex flex-col items-start gap-2 hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${question.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 text-left">{question.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="flex items-center gap-3">
          <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
            <Mic className="w-6 h-6 text-[#2B6CB0]" />
          </button>
          
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask anything..."
            className="flex-1 bg-gray-100 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#4A90E2]"
          />
          
          <button
            onClick={() => handleSendMessage()}
            className="p-3 bg-gradient-to-br from-[#2B6CB0] to-[#4A90E2] rounded-full hover:shadow-lg transition-shadow disabled:opacity-50"
            disabled={!inputText.trim()}
          >
            <Send className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
