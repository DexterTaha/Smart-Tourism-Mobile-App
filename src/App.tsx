import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { HomeScreen } from './components/HomeScreen';
import { ARExperienceScreen } from './components/ARExperienceScreen';
import { ChatbotScreen } from './components/ChatbotScreen';
import { GuidesMarketplace } from './components/GuidesMarketplace';
import { GuideProfile } from './components/GuideProfile';
import { CulturalExchange } from './components/CulturalExchange';
import { DiscoverPlaces } from './components/DiscoverPlaces';
import { ProfileSettings } from './components/ProfileSettings';

export type Screen = 
  | 'splash' 
  | 'onboarding' 
  | 'home' 
  | 'ar' 
  | 'chat' 
  | 'guides' 
  | 'guide-profile'
  | 'cultural'
  | 'discover'
  | 'profile';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  const navigateTo = (screen: Screen, guideId?: string) => {
    if (guideId) setSelectedGuideId(guideId);
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {currentScreen === 'splash' && <SplashScreen onComplete={() => navigateTo('onboarding')} />}
      {currentScreen === 'onboarding' && <OnboardingScreen onComplete={() => navigateTo('home')} />}
      {currentScreen === 'home' && <HomeScreen onNavigate={navigateTo} />}
      {currentScreen === 'ar' && <ARExperienceScreen onNavigate={navigateTo} />}
      {currentScreen === 'chat' && <ChatbotScreen onNavigate={navigateTo} />}
      {currentScreen === 'guides' && <GuidesMarketplace onNavigate={navigateTo} />}
      {currentScreen === 'guide-profile' && selectedGuideId && (
        <GuideProfile guideId={selectedGuideId} onNavigate={navigateTo} />
      )}
      {currentScreen === 'cultural' && <CulturalExchange onNavigate={navigateTo} />}
      {currentScreen === 'discover' && <DiscoverPlaces onNavigate={navigateTo} />}
      {currentScreen === 'profile' && <ProfileSettings onNavigate={navigateTo} />}
    </div>
  );
}

export default App;
