
import React from 'react';
import { Screen } from '../types';
import StyledBox from './StyledBox';

interface MainMenuProps {
  setScreen: (screen: Screen) => void;
}

const MenuItem: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="w-full text-left p-4 my-2 bg-slate-700/50 hover:bg-cyan-600/50 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      {children}
    </button>
);

const MainMenu: React.FC<MainMenuProps> = ({ setScreen }) => {
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
      </StyledBox>
    </div>
  );
};

export default MainMenu;
