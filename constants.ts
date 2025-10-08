import { Question, Flashcard } from './types';

export const EXERCISE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Um ciclista inicia seu treino. O gráfico mostra sua distância (y) em função do tempo (x). Observe com atenção:',
    graphData: {
      labels: [0, 1, 2],
      data: [0, 20, 40],
      xLabel: 'Tempo (horas)',
      yLabel: 'Distância (km)',
    },
    options: ['f(x) = 10x', 'f(x) = 40x', 'f(x) = 20x', 'f(x) = x + 20'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é a C) f(x) = 20x. No gráfico, vemos que em 1 hora (x=1) ele percorreu 20 km (y=20), e em 2 horas (x=2) percorreu 40 km (y=40). Isso mostra uma velocidade ('a') de 20 km/h.",
  },
  {
    id: 2,
    text: 'Uma nadadora está em uma piscina de 50m. Ela começa a 5m da borda de partida e nada a uma velocidade constante de 1.5 m/s em direção à borda oposta. Qual função descreve sua distância (y) da borda de partida em função do tempo (x) em segundos?',
    graphData: {
      labels: [0, 2, 4, 6],
      data: [5, 8, 11, 14],
      xLabel: 'Tempo (segundos)',
      yLabel: 'Distância (m)',
    },
    options: ['f(x) = 50x + 1.5', 'f(x) = 1.5x + 5', 'f(x) = 5x + 1.5', 'f(x) = 50 - 1.5x'],
    correctAnswerIndex: 1,
    feedback: "A resposta correta é a B) f(x) = 1.5x + 5. O 'b' é o ponto de partida (5m) e o 'a' é a velocidade (1.5 m/s). O gráfico ilustra essa partida do ponto 5 e a subida constante.",
  },
  {
    id: 3,
    text: "Um atleta de corrida de longa distância está monitorando sua energia. Ele começa com 100% de energia e a cada quilômetro (x), ele perde 5% de sua energia. Qual função representa sua energia restante (y) após 'x' quilômetros?",
    graphData: {
        labels: [0, 5, 10, 20],
        data: [100, 75, 50, 0],
        xLabel: 'Distância (km)',
        yLabel: 'Energia (%)',
    },
    options: ['f(x) = 100x - 5', 'f(x) = 5x + 100', 'f(x) = 100 - 5x', 'f(x) = 100 + 5x'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é a C) f(x) = 100 - 5x. Ele começa com 100 ('b') e sua energia diminui, então a 'velocidade' ('a') é negativa (-5). O gráfico mostra claramente a linha decrescente.",
  },
  {
    id: 4,
    text: "Na função f(x) = 3x + 10, que representa a pontuação de um jogador de basquete, o que o número 10 (coeficiente 'b') simboliza? O gráfico mostra a pontuação (y) por número de cestas (x).",
     graphData: {
        labels: [0, 1, 2, 3],
        data: [10, 13, 16, 19],
        xLabel: 'Número de Cestas',
        yLabel: 'Pontuação Total',
    },
    options: ['Pontos por cesta de 3', 'Pontos por lance livre', 'Pontuação inicial antes de começar a marcar', 'Total de faltas'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é a C). O coeficiente 'b' é o valor inicial. Note no gráfico que mesmo com 0 cestas (x=0), a pontuação inicial (y) é 10.",
  },
  {
    id: 5,
    text: "A função f(x) = -2x + 8 representa a altitude de um alpinista descendo uma montanha, onde 'x' é o tempo em horas. O que significa o '-2' (coeficiente 'a')?",
    graphData: {
        labels: [0, 1, 2, 4],
        data: [8, 6, 4, 0],
        xLabel: 'Tempo (horas)',
        yLabel: 'Altitude (unidades)',
    },
    options: ['Ele sobe 2 metros por hora.', 'Ele começa a 2 metros de altura.', 'Ele desce 8 metros por hora.', 'Ele desce 2 metros por hora.'],
    correctAnswerIndex: 3,
    feedback: "A resposta correta é a D). O coeficiente 'a' é a taxa de variação. Como é negativo, representa uma descida, o que é visualizado no gráfico como uma linha que desce.",
  },
  {
    id: 6,
    text: 'Um skatista parte do repouso e atinge uma velocidade constante. O gráfico mostra a distância percorrida. Qual a sua velocidade média em metros por segundo?',
    graphData: {
        labels: [0, 2, 4, 6],
        data: [0, 10, 20, 30],
        xLabel: 'Tempo (segundos)',
        yLabel: 'Distância (metros)',
    },
    options: ['10 m/s', '5 m/s', '2.5 m/s', '30 m/s'],
    correctAnswerIndex: 1,
    feedback: "A resposta correta é B) 5 m/s. A cada 2 segundos, ele percorre 10 metros. Velocidade = Distância / Tempo = 10m / 2s = 5 m/s. Este é o coeficiente 'a' da função f(x) = 5x.",
  },
  {
    id: 7,
    text: "Um levantador de peso já levantou 150 kg no total do dia. Em sua próxima série, ele levanta 10 kg a cada repetição 'x'. Qual função representa o peso total 'y' levantado no dia?",
    graphData: {
        labels: [0, 1, 2, 3],
        data: [150, 160, 170, 180],
        xLabel: 'Repetições',
        yLabel: 'Peso Total Levantado (kg)',
    },
    options: ['f(x) = 150x + 10', 'f(x) = 150 - 10x', 'f(x) = 10x + 150', 'f(x) = 160x'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é C) f(x) = 10x + 150. Ele começa com um total de 150 kg ('b'), e adiciona 10 kg ('a') a cada repetição ('x'), como mostra o gráfico partindo de 150.",
  },
  {
    id: 8,
    text: "Um remador está a 2000 metros da margem e rema em direção a ela a uma velocidade de 100 metros por minuto. Qual função descreve sua distância 'y' até a margem após 'x' minutos?",
    graphData: {
        labels: [0, 5, 10, 20],
        data: [2000, 1500, 1000, 0],
        xLabel: 'Tempo (minutos)',
        yLabel: 'Distância até a Margem (m)',
    },
    options: ['f(x) = 100x', 'f(x) = 100x + 2000', 'f(x) = 2000 - 100x', 'f(x) = 2000x - 100'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é C) f(x) = 2000 - 100x. O ponto inicial 'b' é 2000. Como ele está se aproximando, a distância diminui, e o gráfico tem uma inclinação negativa.",
  },
  {
    id: 9,
    text: "A temperatura de uma bebida esportiva começa em 5°C e aumenta 2°C a cada hora fora da geladeira. Qual é a função da temperatura 'y' em relação ao tempo 'x' em horas?",
    graphData: {
        labels: [0, 1, 2, 3],
        data: [5, 7, 9, 11],
        xLabel: 'Tempo (horas)',
        yLabel: 'Temperatura (°C)',
    },
    options: ['f(x) = 5x + 2', 'f(x) = 2x + 5', 'f(x) = 7x', 'f(x) = 5 - 2x'],
    correctAnswerIndex: 1,
    feedback: "A resposta correta é B) f(x) = 2x + 5. O valor inicial 'b' é 5°C, e a taxa de aumento 'a' é 2°C por hora. O gráfico parte de 5 e sobe constantemente.",
  },
  {
    id: 10,
    text: "A pontuação de um jogador em um game de esporte aumenta de forma linear. Ele começa com 500 pontos. Após 3 minutos, ele tem 800 pontos. Qual a função que representa sua pontuação 'y' em função do tempo 'x' em minutos?",
    graphData: {
        labels: [0, 1, 2, 3],
        data: [500, 600, 700, 800],
        xLabel: 'Tempo (minutos)',
        yLabel: 'Pontuação',
    },
    options: ['f(x) = 300x + 500', 'f(x) = 100x + 500', 'f(x) = 500x + 300', 'f(x) = 800x - 3'],
    correctAnswerIndex: 1,
    feedback: "A resposta correta é B) f(x) = 100x + 500. Ele ganhou 300 pontos em 3 minutos, então sua taxa 'a' é 300/3 = 100 pontos/min. O ponto inicial 'b' é 500.",
  },
  {
    id: 11,
    text: "Dois corredores, A e B. Corredor A: f(x) = 15x. Corredor B: f(x) = 12x + 30. O gráfico abaixo representa o Corredor A. Qual afirmação é a mais correta?",
    graphData: {
      labels: [0, 1, 2, 3],
      data: [0, 15, 30, 45],
      xLabel: 'Tempo',
      yLabel: 'Distância do Corredor A',
    },
    options: ['B é mais rápido, mas A começou na frente.', 'A e B têm a mesma velocidade.', 'A é mais rápido, mas B começou na frente.', 'A começou na frente, mas B é mais rápido.'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é C). A velocidade de A ('a'=15) é maior que a de B ('a'=12). O ponto de partida de B ('b'=30) é maior que o de A ('b'=0), então B começou com vantagem.",
  },
  {
    id: 12,
    text: "Um jogador de futebol americano corre com a bola. Ele começa na linha de 20 jardas do seu campo e corre a uma velocidade de 8 jardas por segundo. Qual função descreve sua posição 'y' no campo após 'x' segundos?",
    graphData: {
        labels: [0, 1, 2, 3],
        data: [20, 28, 36, 44],
        xLabel: 'Tempo (segundos)',
        yLabel: 'Posição no Campo (jardas)',
    },
    options: ['f(x) = 8x', 'f(x) = 20 - 8x', 'f(x) = 28x', 'f(x) = 8x + 20'],
    correctAnswerIndex: 3,
    feedback: "A resposta correta é D) f(x) = 8x + 20. O ponto de partida ('b') é a linha de 20 jardas e sua velocidade ('a') é 8 jardas por segundo.",
  },
  {
    id: 13,
    text: "A função f(x) = -10x + 100 representa a energia de um lutador durante uma luta, onde 'x' é o número de rounds. Em qual round sua energia chegará a zero?",
    graphData: {
        labels: [0, 2, 5, 10],
        data: [100, 80, 50, 0],
        xLabel: 'Round',
        yLabel: 'Energia (%)',
    },
    options: ['Round 5', 'Round 100', 'Round 10', 'Round 20'],
    correctAnswerIndex: 2,
    feedback: "A resposta correta é C) Round 10. Para encontrar quando a energia é zero, fazemos f(x)=0. Então, 0 = -10x + 100, o que leva a 10x = 100, e x = 10. O gráfico mostra a energia chegando a 0 no eixo x=10.",
  },
  {
    id: 14,
    text: "Um ginasta recebe uma nota de partida de 9.5. Para cada pequeno erro ('x') que ele comete, 0.1 ponto é deduzido. Qual função representa sua nota final 'y'?",
    graphData: {
        labels: [0, 1, 2, 5],
        data: [9.5, 9.4, 9.3, 9.0],
        xLabel: 'Número de Erros',
        yLabel: 'Nota Final',
    },
    options: ['f(x) = 9.5 + 0.1x', 'f(x) = 0.1x - 9.5', 'f(x) = 9.4x', 'f(x) = 9.5 - 0.1x'],
    correctAnswerIndex: 3,
    feedback: "A resposta correta é D) f(x) = 9.5 - 0.1x. A nota inicial ('b') é 9.5 e a cada erro, a nota diminui, então a taxa de variação ('a') é -0.1.",
  },
  {
    id: 15,
    text: "Um ciclista de montanha sobe a uma taxa de 50 metros de altitude por minuto. Ele começa a uma altitude de 200 metros. Depois de quantos minutos 'x' ele atingirá 500 metros de altitude?",
    graphData: {
        labels: [0, 2, 4, 6],
        data: [200, 300, 400, 500],
        xLabel: 'Tempo (minutos)',
        yLabel: 'Altitude (metros)',
    },
    options: ['5 minutos', '6 minutos', '8 minutos', '10 minutos'],
    correctAnswerIndex: 1,
    feedback: "A resposta correta é B) 6 minutos. A função é f(x) = 50x + 200. Queremos saber quando f(x) = 500. Então, 500 = 50x + 200. Isso nos dá 300 = 50x, e x = 6. O gráfico mostra que no tempo 6, a altitude é 500.",
  },
];

export const FLASHCARDS_DATA: Flashcard[] = [
    {
        id: 1,
        front: "Na função `f(x) = -10x + 100`, a reta é crescente ou decrescente?",
        back: "**Decrescente**, porque o 'a' (-10) é negativo. Pense em um atleta voltando para a linha de partida."
    },
    {
        id: 2,
        front: "Na função `f(x) = 5x + 20`, o que o número 20 representa?",
        back: "O **ponto de partida** (coeficiente linear 'b'). É onde a reta 'corta' o eixo y. Imagine começar uma corrida 20 metros à frente da linha de largada."
    },
    {
        id: 3,
        front: "O que o coeficiente 'a' na função `f(x) = ax + b` nos diz sobre o 'atleta'?",
        back: "A **velocidade ou ritmo** (coeficiente angular). Se 'a' > 0, ele está avançando (crescente). Se 'a' < 0, ele está recuando (decrescente)."
    },
    {
        id: 4,
        front: "Se um corredor começa na marca de 0km e corre a 12 km/h, qual é a função que descreve sua distância?",
        back: "`f(x) = 12x`. O ponto de partida 'b' é 0, e a velocidade 'a' é 12."
    },
    {
        id: 5,
        front: "Duas funções: Atleta A: `f(x) = 15x` e Atleta B: `f(x) = 12x + 5`. Quem é mais rápido?",
        back: "O **Atleta A** é mais rápido. Sua velocidade ('a') é 15, que é maior que a velocidade do Atleta B, que é 12. O Atleta B apenas começou na frente."
    },
    {
        id: 6,
        front: "O que acontece em `f(x) = ax + b` se o 'a' (velocidade) for igual a zero?",
        back: "A função se torna `f(x) = b`. Isso representa um atleta parado na posição 'b'. A distância não muda com o tempo. O gráfico é uma linha horizontal."
    },
    {
        id: 7,
        front: "Um atleta está na posição 10m no tempo x=2s e na posição 20m no tempo x=4s. Como encontrar sua velocidade ('a')?",
        back: "Velocidade ('a') é a variação da distância dividida pela variação do tempo. `a = (20 - 10) / (4 - 2) = 10 / 2 = 5 m/s`."
    },
    {
        id: 8,
        front: "Na função `f(x) = 5x + 10` que descreve uma corrida, o que `f(3) = 25` significa?",
        back: "Significa que **após 3 segundos (x=3)**, o corredor estará na **posição de 25 metros (f(x)=25)**."
    },
    {
        id: 9,
        front: "Duas pistas de corrida são descritas por `y = 2x + 5` e `y = 2x + 10`. O que essas retas têm em comum?",
        back: "Elas são **paralelas**. Isso acontece porque a velocidade ('a') de ambas é 2. Elas nunca se cruzam, como dois corredores na mesma velocidade em raias diferentes."
    },
    {
        id: 10,
        front: "A função `f(x) = x² + 2`, que pode descrever a trajetória de uma bola arremessada, é uma função de primeiro grau?",
        back: "**Não**. Por causa do `x²`, ela é uma função de segundo grau (quadrática). Funções de primeiro grau têm o 'x' elevado apenas à primeira potência."
    }
];