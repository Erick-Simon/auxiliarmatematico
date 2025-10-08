import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import TheorySection from './components/TheorySection';
import ExerciseSection from './components/ExerciseSection';
import FlashcardSection from './components/FlashcardSection';
import ThemeSelection from './components/ThemeSelection';
import { Screen, Theme } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>(Screen.MENU);
  const [theme, setTheme] = useState<Theme | null>(null);

  const handleThemeChange = () => {
    setTheme(null);
  };

  const renderScreen = () => {
    if (!theme) {
      return <ThemeSelection onThemeSelect={setTheme} />;
    }

    switch (screen) {
      case Screen.THEORY:
        return <TheorySection onBack={() => setScreen(Screen.MENU)} />;
      case Screen.EXERCISES:
        return <ExerciseSection theme={theme} onBack={() => setScreen(Screen.MENU)} />;
      case Screen.FLASHCARDS:
        return <FlashcardSection theme={theme} onBack={() => setScreen(Screen.MENU)} />;
      case Screen.MENU:
      default:
        return <MainMenu setScreen={setScreen} onThemeChange={handleThemeChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans bg-gradient-to-br from-slate-900 to-indigo-900">
      {theme && screen !== Screen.MENU && (
        <button
          onClick={() => setScreen(Screen.MENU)}
          className="fixed top-6 right-6 z-50 bg-slate-700/80 hover:bg-cyan-600/80 text-2xl rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg"
          aria-label="Voltar ao Menu Principal"
          title="Voltar ao Menu Principal"
        >
          🏠
        </button>
      )}
      <div className="w-full max-w-3xl mx-auto">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;