
import React, { useState } from 'react';
import { FLASHCARDS_DATA } from '../constants';
import StyledBox from './StyledBox';

interface FlashcardSectionProps {
  onBack: () => void;
}

const FlashcardSection: React.FC<FlashcardSectionProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const card = FLASHCARDS_DATA[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FLASHCARDS_DATA.length);
  };
  
  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + FLASHCARDS_DATA.length) % FLASHCARDS_DATA.length);
  };

  return (
    <div className="animate-fade-in text-center">
      <StyledBox title="🃏 TREINO RÁPIDO">
        <p className="mb-6 text-lg">Vamos para um treino rápido de reflexos mentais.</p>

        <div className="relative h-64 w-full [transform-style:preserve-3d] transition-transform duration-500" style={{ transform: isFlipped ? 'rotateY(180deg)' : '' }}>
            {/* Front of the card */}
            <div className="absolute w-full h-full bg-slate-700 rounded-lg p-6 flex flex-col justify-center items-center [backface-visibility:hidden]">
              <div className="w-full text-center">
                  <p className="text-sm text-cyan-400 mb-2">{`FRENTE DO CARTÃO ${currentIndex + 1}/${FLASHCARDS_DATA.length}`}</p>
                  <p className="text-2xl font-semibold">{card.front}</p>
              </div>
            </div>

            {/* Back of the card */}
            <div className="absolute w-full h-full bg-cyan-800 rounded-lg p-6 flex flex-col justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="w-full text-center">
                  <p className="text-sm text-slate-300 mb-2">{`💡 VERSO DO CARTÃO ${currentIndex + 1}/${FLASHCARDS_DATA.length}`}</p>
                  <p className="text-xl" dangerouslySetInnerHTML={{ __html: card.back }}></p>
              </div>
            </div>
        </div>
        
        <button 
          onClick={() => setIsFlipped(!isFlipped)} 
          className="mt-6 bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          {isFlipped ? 'Ver Pergunta' : 'Virar Cartão'}
        </button>
      </StyledBox>

      <div className="mt-6 flex justify-between items-center">
        <button onClick={handlePrev} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg">Anterior</button>
        <span className="font-mono">{`${currentIndex + 1} / ${FLASHCARDS_DATA.length}`}</span>
        <button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg">Próximo</button>
      </div>

      <div className="text-center mt-8">
        <button 
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
        >
          Voltar ao Menu Principal
        </button>
      </div>
    </div>
  );
};

export default FlashcardSection;
