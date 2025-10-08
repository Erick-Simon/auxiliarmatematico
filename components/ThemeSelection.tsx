import React from 'react';
import { Theme } from '../types';
import StyledBox from './StyledBox';

interface ThemeSelectionProps {
  onThemeSelect: (theme: Theme) => void;
}

const ThemeButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-full text-left p-4 my-2 bg-slate-700/50 hover:bg-cyan-600/50 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-xl"
    >
      {children}
    </button>
);

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ onThemeSelect }) => {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-cyan-300">Boas-vindas ao Tutor Matemático Zen!</h1>
      <p className="text-lg mb-8 text-slate-400">Para começar, escolha um tema que você goste. Isso vai deixar o aprendizado mais divertido!</p>
      
      <StyledBox title="ESCOLHA SEU TEMA">
        <div className="space-y-4">
            <ThemeButton onClick={() => onThemeSelect(Theme.SPORTS)}>
                🏀 Esportes
            </ThemeButton>
            <ThemeButton onClick={() => onThemeSelect(Theme.GAMES)}>
                🎮 Games
            </ThemeButton>
            <ThemeButton onClick={() => onThemeSelect(Theme.SPACE)}>
                🚀 Aventura Espacial
            </ThemeButton>
        </div>
      </StyledBox>
    </div>
  );
};

export default ThemeSelection;