import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OrganizationChart } from './components/OrganizationChart';
import { Documentation } from './components/Documentation';
import { HelpSection } from './components/HelpSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentSection, setCurrentSection] = useState('workflow');

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'workflow':
        return <OrganizationChart />;
      case 'help':
        return <HelpSection />;
      case 'pricing':
        return <PricingSection />;
      case 'faq':
        return <FAQSection />;
      default:
        return <OrganizationChart />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header 
        onSectionChange={setCurrentSection} 
        currentSection={currentSection} 
      />
      {renderCurrentSection()}
      {currentSection === 'workflow' && <Documentation />}
    </div>
  );
}

export default App;