
import React from 'react';
import StyledBox from './StyledBox';

interface TheorySectionProps {
  onBack: () => void;
}

const TheorySection: React.FC<TheorySectionProps> = ({ onBack }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <StyledBox title="🧠 SEÇÃO 1: TEORIA NA PRÁTICA">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Ótima escolha. Vamos entender a 'mecânica' do movimento. Pense na função de primeiro grau como o plano de treino de um atleta: <strong className="text-cyan-400 font-mono">f(x) = ax + b</strong>.</p>
          
          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">O Ponto de Partida: `b` (Coeficiente Linear)</h3>
            <p>Imagine que você vai começar uma corrida. Onde você está na linha de largada? Isso é o <strong className="text-cyan-400 font-mono">b</strong>. Se você começa na linha de partida, <strong className="text-cyan-400 font-mono">b = 0</strong>. Se você já tem uma vantagem e começa 10 metros à frente, <strong className="text-cyan-400 font-mono">b = 10</strong>.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">O Ritmo do Treino: `a` (Coeficiente Angular)</h3>
            <p>O <strong className="text-cyan-400 font-mono">a</strong> é a sua velocidade, o seu ritmo. É quantos metros você avança a cada segundo.
            <br/>- Se <strong className="text-cyan-400 font-mono">a</strong> é positivo (ex: 5), você está avançando. A reta do gráfico sobe (crescente).
            <br/>- Se <strong className="text-cyan-400 font-mono">a</strong> é negativo (ex: -2), você está voltando para o início. A reta do gráfico desce (decrescente).</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">Variáveis em Jogo: `x` e `f(x)`</h3>
            <p>O <strong className="text-cyan-400 font-mono">x</strong> é o tempo que você treina (em segundos, minutos, etc.). O <strong className="text-cyan-400 font-mono">f(x)</strong> é o resultado final: sua distância total percorrida.</p>
          </div>

          <div className="p-4 border border-dashed border-cyan-700 rounded-lg bg-slate-900/50">
            <h4 className="font-bold text-cyan-300">Exemplo prático:</h4>
            <p>Um corredor começa 50 metros à frente da largada (<strong className="text-cyan-400 font-mono">b=50</strong>) e corre a 8 metros por segundo (<strong className="text-cyan-400 font-mono">a=8</strong>). A função é <strong className="text-cyan-400 font-mono">f(x) = 8x + 50</strong>.
            <br/>Qual será a distância dele após 10 segundos (x=10)?
            <br/><strong className="text-green-400 font-mono">f(10) = 8 * 10 + 50 = 80 + 50 = 130 metros.</strong></p>
          </div>
        </div>
      </StyledBox>

      <div className="text-center mt-6">
        <p className="mb-4">O que você gostaria de fazer agora?</p>
        <button 
          onClick={onBack}
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Voltar ao Menu Principal
        </button>
      </div>
    </div>
  );
};

export default TheorySection;
