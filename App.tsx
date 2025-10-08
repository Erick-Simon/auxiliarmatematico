
import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import TheorySection from './components/TheorySection';
import ExerciseSection from './components/ExerciseSection';
import FlashcardSection from './components/FlashcardSection';
import { Screen } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.MENU);

  const renderScreen = () => {
    switch (screen) {
      case Screen.THEORY:
        return <TheorySection onBack={() => setScreen(Screen.MENU)} />;
      case Screen.EXERCISES:
        return <ExerciseSection onBack={() => setScreen(Screen.MENU)} />;
      case Screen.FLASHCARDS:
        return <FlashcardSection onBack={() => setScreen(Screen.MENU)} />;
      case Screen.MENU:
      default:
        return <MainMenu setScreen={setScreen} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans bg-gradient-to-br from-slate-900 to-indigo-900">
      <div className="w-full max-w-3xl mx-auto">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
