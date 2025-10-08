import React from 'react';
import { Screen } from '../types';
import StyledBox from './StyledBox';

interface MainMenuProps {
  setScreen: (screen: Screen) => void;
  onThemeChange: () => void;
}

const MenuItem: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-full text-left p-4 my-2 bg-slate-700/50 hover:bg-cyan-600/50 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      {children}
    </button>
);

const MainMenu: React.FC<MainMenuProps> = ({ setScreen, onThemeChange }) => {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-cyan-300">Tutor Matemático Zen 🧘‍♂️</h1>
      <p className="text-lg mb-8 text-slate-400">Vamos usar a matemática para entender o movimento e a estratégia.</p>
      
      <StyledBox title="MENU PRINCIPAL">
        <p className="mb-4">Escolha seu treino de hoje:</p>
        <div className="space-y-4 text-xl">
            <MenuItem onClick={() => setScreen(Screen.THEORY)}>
                🧠  Teoria na Prática
            </MenuItem>
            <MenuItem onClick={() => setScreen(Screen.EXERCISES)}>
                🎯  Hora do Desafio (Exercícios)
            </MenuItem>
            <MenuItem onClick={() => setScreen(Screen.FLASHCARDS)}>
                🃏  Treino Rápido (Flashcards)
            </MenuItem>
        </div>
        <div className="mt-6 border-t border-slate-600 pt-4">
          <button
            onClick={onThemeChange}
            className="w-full text-center p-3 bg-slate-800 hover:bg-indigo-700/60 rounded-lg transition-colors duration-300 text-slate-400 hover:text-cyan-300 text-base"
            aria-label="Trocar de tema"
            title="Voltar para a tela de seleção de tema"
          >
            🎨 Trocar Tema
          </button>
        </div>
      </StyledBox>
    </div>
  );
};

export default MainMenu;