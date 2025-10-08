import React, { useState, useMemo } from 'react';
import { EXERCISE_QUESTIONS } from '../constants';
import { Question } from '../types';
import StyledBox from './StyledBox';
import InteractiveChart from './InteractiveChart';

interface ExerciseSectionProps {
  onBack: () => void;
}

const ExerciseSection: React.FC<ExerciseSectionProps> = ({ onBack }) => {
  const [numQuestions, setNumQuestions] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const startChallenge = (count: number) => {
    setNumQuestions(count);
    const shuffled = [...EXERCISE_QUESTIONS].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, count));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setFeedback('');
    setCorrectAnswers(0);
    setShowResults(false);
  };

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const currentQuestion = questions[currentQuestionIndex];
    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setFeedback('🏆 Resposta correta!');
      setCorrectAnswers(prev => prev + 1);
    } else {
      setFeedback(`💡 Resposta incorreta. ${currentQuestion.feedback}`);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setFeedback('');
    } else {
      setShowResults(true);
    }
  };
  
  const currentQuestion = useMemo(() => {
    return questions[currentQuestionIndex];
  }, [questions, currentQuestionIndex]);

  if (showResults) {
    return (
      <div className="text-center animate-fade-in">
        <StyledBox title="🏆 RESULTADO FINAL 🏆">
          <p className="text-2xl mb-4">Desafio concluído!</p>
          <p className="text-4xl font-bold text-cyan-400 mb-6">
            Você acertou {correctAnswers} de {numQuestions} questões!
          </p>
          <button 
            onClick={onBack}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Voltar ao Menu Principal
          </button>
        </StyledBox>
      </div>
    );
  }

  if (!numQuestions) {
    return (
      <div className="animate-fade-in">
        <StyledBox title="🎯 HORA DO DESAFIO">
          <p className="text-center text-xl mb-6">Modo Desafio ativado! Quantas questões você quer encarar?</p>
          <div className="flex justify-center space-x-4">
            {[5, 10, 15].map(count => (
              <button 
                key={count}
                onClick={() => startChallenge(Math.min(count, EXERCISE_QUESTIONS.length))}
                className="bg-slate-700 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-2xl transition duration-300 transform hover:scale-110"
              >
                {count}
              </button>
            ))}
          </div>
        </StyledBox>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <StyledBox title={`🎯 QUESTÃO ${currentQuestionIndex + 1} de ${numQuestions}`}>
        <p className="text-lg mb-4 whitespace-pre-wrap">{currentQuestion.text}</p>
        {currentQuestion.graphData && (
          <InteractiveChart data={currentQuestion.graphData} />
        )}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = currentQuestion.correctAnswerIndex === index;
            let buttonClass = 'bg-slate-700 hover:bg-cyan-800/50';
            if (isSelected) {
              buttonClass = isCorrect ? 'bg-green-600' : 'bg-red-600';
            } else if (selectedAnswer !== null && isCorrect) {
              buttonClass = 'bg-green-600/70';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-3 rounded-lg transition duration-200 ${buttonClass} disabled:cursor-not-allowed`}
              >
                {String.fromCharCode(65 + index)}) {option}
              </button>
            );
          })}
        </div>
        {feedback && (
          <div className={`mt-4 p-3 rounded-lg text-white ${feedback.startsWith('🏆') ? 'bg-green-500/80' : 'bg-yellow-500/80'}`}>
            <p>{feedback}</p>
          </div>
        )}
        {selectedAnswer !== null && (
          <div className="text-center mt-6">
            <button 
              onClick={handleNext}
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-8 rounded-lg transition duration-300"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Ver Resultados'}
            </button>
          </div>
        )}
      </StyledBox>
    </div>
  );
};

export default ExerciseSection;