import { Question, Flashcard, Theme } from './types';

export const EXERCISE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: {
      [Theme.SPORTS]: 'Um ciclista inicia seu treino. O gráfico mostra sua distância (y) em função do tempo (x). Observe com atenção:',
      [Theme.GAMES]: 'Um personagem de um jogo de corrida inicia uma prova. O gráfico mostra sua distância percorrida (y) em função do tempo (x).',
      [Theme.SPACE]: 'Uma nave espacial parte de sua base. O gráfico mostra a distância (y) da base em função do tempo de viagem (x).'
    },
    graphData: {
      labels: [0, 1, 2],
      data: [0, 20, 40],
      xLabel: 'Tempo (horas)',
      yLabel: 'Distância (km)',
    },
    options: ['f(x) = 10x', 'f(x) = 40x', 'f(x) = 20x', 'f(x) = x + 20'],
    correctAnswerIndex: 2,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é a C) f(x) = 20x. No gráfico, vemos que em 1 hora (x=1) ele percorreu 20 km (y=20), mostrando uma velocidade ('a') de 20 km/h.",
      [Theme.GAMES]: "A resposta correta é a C) f(x) = 20x. No gráfico, vemos que em 1 hora (x=1) ele percorreu 20 km (y=20), indicando uma velocidade ('a') de 20 km/h.",
      [Theme.SPACE]: "A resposta correta é a C) f(x) = 20x. No gráfico, vemos que em 1 hora (x=1) a nave percorreu 20 km (y=20), o que significa uma velocidade ('a') de 20 km/h."
    }
  },
  {
    id: 2,
    text: {
      [Theme.SPORTS]: 'Uma nadadora está em uma piscina de 50m. Ela começa a 5m da borda e nada a 1.5 m/s. Qual função descreve sua distância (y) da borda em função do tempo (x)?',
      [Theme.GAMES]: 'Um personagem está em uma fase aquática de 50m. Ele começa a 5m do início e avança a 1.5 m/s. Qual função descreve sua posição (y) em função do tempo (x)?',
      [Theme.SPACE]: 'Uma sonda está a 50 unidades de um planeta. Ela começa seu movimento a 5 unidades de distância de um asteroide e viaja a 1.5 unidades/s. Qual função descreve sua distância (y) do asteroide em função do tempo (x)?'
    },
    graphData: {
      labels: [0, 2, 4, 6],
      data: [5, 8, 11, 14],
      xLabel: 'Tempo (segundos)',
      yLabel: 'Distância (m)',
    },
    options: ['f(x) = 50x + 1.5', 'f(x) = 1.5x + 5', 'f(x) = 5x + 1.5', 'f(x) = 50 - 1.5x'],
    correctAnswerIndex: 1,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é a B) f(x) = 1.5x + 5. O 'b' é o ponto de partida (5m) e o 'a' é a velocidade (1.5 m/s).",
      [Theme.GAMES]: "A resposta correta é a B) f(x) = 1.5x + 5. O 'b' é a posição inicial (5m) e o 'a' é a velocidade de avanço (1.5 m/s).",
      [Theme.SPACE]: "A resposta correta é a B) f(x) = 1.5x + 5. O 'b' é a distância inicial (5 unidades) e o 'a' é a velocidade da sonda (1.5 unidades/s)."
    }
  },
  {
    id: 3,
    text: {
        [Theme.SPORTS]: "Um atleta de corrida monitora sua energia. Ele começa com 100% e a cada quilômetro (x), perde 5%. Qual função representa sua energia restante (y)?",
        [Theme.GAMES]: "A barra de 'stamina' de um personagem começa em 100. A cada minuto (x) de corrida, ele gasta 5 de stamina. Qual função representa sua stamina restante (y)?",
        [Theme.SPACE]: "O combustível de um foguete começa em 100%. A cada ano-luz (x) viajado, ele consome 5%. Qual função representa o combustível restante (y)?"
    },
    graphData: {
        labels: [0, 5, 10, 20],
        data: [100, 75, 50, 0],
        xLabel: 'Distância / Tempo',
        yLabel: 'Recurso (%)',
    },
    options: ['f(x) = 100x - 5', 'f(x) = 5x + 100', 'f(x) = 100 - 5x', 'f(x) = 100 + 5x'],
    correctAnswerIndex: 2,
    feedback: {
        [Theme.SPORTS]: "A resposta correta é a C) f(x) = 100 - 5x. Ele começa com 100 ('b') e sua energia diminui, então a 'velocidade' ('a') é negativa (-5).",
        [Theme.GAMES]: "A resposta correta é a C) f(x) = 100 - 5x. Ele começa com 100 ('b') e a stamina diminui, então a taxa de variação ('a') é negativa (-5).",
        [Theme.SPACE]: "A resposta correta é a C) f(x) = 100 - 5x. Ele começa com 100 ('b') e o combustível diminui, então a taxa de consumo ('a') é negativa (-5)."
    }
  },
  {
    id: 4,
    text: {
        [Theme.SPORTS]: "Na função f(x) = 3x + 10, que representa a pontuação de um jogador de basquete, o que o número 10 (coeficiente 'b') simboliza?",
        [Theme.GAMES]: "Em um jogo, a pontuação final é f(x) = 3x + 10, onde 'x' são os inimigos derrotados. O que o número 10 ('b') simboliza?",
        [Theme.SPACE]: "A energia de um escudo de uma nave é f(x) = 3x + 10, onde 'x' é a energia coletada. O que o número 10 ('b') simboliza?"
    },
     graphData: {
        labels: [0, 1, 2, 3],
        data: [10, 13, 16, 19],
        xLabel: 'Ações (Cestas / Inimigos / Coletas)',
        yLabel: 'Pontuação / Energia',
    },
    options: ['Pontos por ação', 'Bônus de combo', 'Pontuação/Energia inicial', 'Total de vidas'],
    correctAnswerIndex: 2,
    feedback: {
        [Theme.SPORTS]: "A resposta correta é a C). O coeficiente 'b' é o valor inicial. Mesmo com 0 cestas (x=0), a pontuação (y) é 10.",
        [Theme.GAMES]: "A resposta correta é a C). O coeficiente 'b' é a pontuação base. Mesmo sem derrotar inimigos (x=0), o jogador já tem 10 pontos (y).",
        [Theme.SPACE]: "A resposta correta é a C). O coeficiente 'b' é a energia base do escudo. Antes de coletar qualquer energia (x=0), o escudo já tem 10 unidades (y)."
    }
  },
  {
    id: 5,
    text: {
        [Theme.SPORTS]: "A função f(x) = -2x + 8 representa a altitude de um alpinista descendo uma montanha. O que significa o '-2' (coeficiente 'a')?",
        [Theme.GAMES]: "A vida de um 'boss' é f(x) = -2x + 8, onde 'x' é o número de ataques. O que o '-2' ('a') significa?",
        [Theme.SPACE]: "A distância até um planeta é f(x) = -2x + 8, onde 'x' é o tempo de viagem. O que o '-2' ('a') significa?"
    },
    graphData: {
        labels: [0, 1, 2, 4],
        data: [8, 6, 4, 0],
        xLabel: 'Tempo / Ataques',
        yLabel: 'Altitude / Vida / Distância',
    },
    options: ['Ele sobe 2 metros por hora.', 'Ele começa com 2 de vida.', 'Ele se aproxima 8 unidades por hora.', 'A cada ação, o valor diminui em 2.'],
    correctAnswerIndex: 3,
    feedback: {
        [Theme.SPORTS]: "A resposta correta é a D). 'a' é a taxa de variação. Negativo representa uma descida de 2 metros por hora.",
        [Theme.GAMES]: "A resposta correta é a D). 'a' é o dano por ataque. Negativo significa que a vida do 'boss' diminui em 2 a cada ataque.",
        [Theme.SPACE]: "A resposta correta é a D). 'a' é a taxa de aproximação. Negativo significa que a distância diminui em 2 unidades por hora."
    }
  },
  {
    id: 6,
    text: {
        [Theme.SPORTS]: 'Um skatista parte do repouso e atinge uma velocidade constante. O gráfico mostra a distância percorrida. Qual a sua velocidade média em metros por segundo?',
        [Theme.GAMES]: 'Um avatar em um jogo de plataforma corre em velocidade constante. O gráfico mostra a distância percorrida. Qual a sua velocidade em pixels por segundo?',
        [Theme.SPACE]: 'Um rover em Marte se move a uma velocidade constante. O gráfico mostra a distância percorrida. Qual a sua velocidade média em metros por segundo?'
    },
    graphData: {
        labels: [0, 2, 4, 6],
        data: [0, 10, 20, 30],
        xLabel: 'Tempo (segundos)',
        yLabel: 'Distância (metros/pixels)',
    },
    options: ['10 m/s', '5 m/s', '2.5 m/s', '30 m/s'],
    correctAnswerIndex: 1,
    feedback: {
        [Theme.SPORTS]: "A resposta correta é B) 5 m/s. A cada 2 segundos, ele percorre 10 metros. Velocidade = Distância / Tempo = 10m / 2s = 5 m/s. Este é o 'a' da função f(x) = 5x.",
        [Theme.GAMES]: "A resposta correta é B) 5 pixels/s. A cada 2 segundos, ele percorre 10 pixels. Velocidade = 10px / 2s = 5 pixels/s. Este é o 'a' da função f(x) = 5x.",
        [Theme.SPACE]: "A resposta correta é B) 5 m/s. A cada 2 segundos, ele percorre 10 metros. Velocidade = 10m / 2s = 5 m/s. Este é o 'a' da função f(x) = 5x."
    }
  },
  {
    id: 7,
    text: {
        [Theme.SPORTS]: "Um levantador de peso já levantou 150 kg no total. Em sua próxima série, ele levanta 10 kg a cada repetição 'x'. Qual função representa o peso total 'y' levantado?",
        [Theme.GAMES]: "Um jogador já tem 150 moedas. Ele entra em uma fase bônus que dá 10 moedas a cada item 'x' coletado. Qual função representa o total de moedas 'y'?",
        [Theme.SPACE]: "Uma nave de carga já tem 150 toneladas de minério. A cada asteroide 'x' minerado, ela coleta 10 toneladas. Qual função representa a carga total 'y'?"
    },
    graphData: {
        labels: [0, 1, 2, 3],
        data: [150, 160, 170, 180],
        xLabel: 'Repetições / Itens / Asteroides',
        yLabel: 'Peso Total / Moedas / Carga',
    },
    options: ['f(x) = 150x + 10', 'f(x) = 150 - 10x', 'f(x) = 10x + 150', 'f(x) = 160x'],
    correctAnswerIndex: 2,
    feedback: {
        [Theme.SPORTS]: "A resposta correta é C) f(x) = 10x + 150. Ele começa com 150 kg ('b'), e adiciona 10 kg ('a') a cada repetição ('x').",
        [Theme.GAMES]: "A resposta correta é C) f(x) = 10x + 150. Ele começa com 150 moedas ('b'), e adiciona 10 ('a') a cada item ('x').",
        [Theme.SPACE]: "A resposta correta é C) f(x) = 10x + 150. A nave começa com 150 toneladas ('b'), e adiciona 10 ('a') a cada asteroide ('x')."
    }
  },
   {
    id: 8,
    text: {
      [Theme.SPORTS]: "Um remador está a 2000 metros da margem e rema em direção a ela a 100 m/min. Qual função descreve sua distância 'y' até a margem após 'x' minutos?",
      [Theme.GAMES]: "Um herói está a 2000 pixels do portal de saída e corre em direção a ele a 100 pixels/s. Qual função descreve sua distância 'y' até o portal após 'x' segundos?",
      [Theme.SPACE]: "Uma estação espacial está a 2000 km da Terra e viaja em direção a ela a 100 km/h. Qual função descreve a distância 'y' até a Terra após 'x' horas?"
    },
    graphData: {
        labels: [0, 5, 10, 20],
        data: [2000, 1500, 1000, 0],
        xLabel: 'Tempo (min/s/h)',
        yLabel: 'Distância Restante (m/pixels/km)',
    },
    options: ['f(x) = 100x', 'f(x) = 100x + 2000', 'f(x) = 2000 - 100x', 'f(x) = 2000x - 100'],
    correctAnswerIndex: 2,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é C) f(x) = 2000 - 100x. O ponto inicial 'b' é 2000. Como ele está se aproximando, a distância diminui, e o gráfico tem uma inclinação negativa.",
      [Theme.GAMES]: "A resposta correta é C) f(x) = 2000 - 100x. A posição inicial 'b' é 2000. Como ele se aproxima do portal, a distância diminui, então a taxa 'a' é negativa.",
      [Theme.SPACE]: "A resposta correta é C) f(x) = 2000 - 100x. A distância inicial 'b' é 2000. Como a estação se aproxima da Terra, a distância diminui, então a velocidade 'a' é negativa no cálculo da distância restante."
    }
  },
  {
    id: 9,
    text: {
      [Theme.SPORTS]: "A temperatura de uma bebida esportiva começa em 5°C e aumenta 2°C a cada hora. Qual é a função da temperatura 'y' em relação ao tempo 'x'?",
      [Theme.GAMES]: "O nível de 'perigo' de uma área no jogo começa em 5 e aumenta 2 pontos a cada minuto. Qual é a função do nível de perigo 'y' em relação ao tempo 'x'?",
      [Theme.SPACE]: "A radiação em uma nebulosa começa em 5 unidades e aumenta 2 unidades a cada hora que a nave passa nela. Qual é a função do nível de radiação 'y' em relação ao tempo 'x'?"
    },
    graphData: {
        labels: [0, 1, 2, 3],
        data: [5, 7, 9, 11],
        xLabel: 'Tempo (horas/minutos)',
        yLabel: 'Temperatura/Perigo/Radiação',
    },
    options: ['f(x) = 5x + 2', 'f(x) = 2x + 5', 'f(x) = 7x', 'f(x) = 5 - 2x'],
    correctAnswerIndex: 1,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é B) f(x) = 2x + 5. O valor inicial 'b' é 5°C, e a taxa de aumento 'a' é 2°C por hora.",
      [Theme.GAMES]: "A resposta correta é B) f(x) = 2x + 5. O nível inicial 'b' é 5, e a taxa de aumento 'a' é 2 pontos por minuto.",
      [Theme.SPACE]: "A resposta correta é B) f(x) = 2x + 5. O nível inicial 'b' é 5, e a taxa de aumento 'a' é 2 unidades por hora."
    }
  },
  {
    id: 10,
    text: {
      [Theme.SPORTS]: "A pontuação de um jogador de vôlei aumenta linearmente. Ele começa com 500 pontos. Após 3 minutos, tem 800. Qual a função que representa sua pontuação 'y' em função do tempo 'x'?",
      [Theme.GAMES]: "A pontuação de um jogador em um MMORPG aumenta linearmente. Ele começa com 500 de XP. Após 3 horas, tem 800 de XP. Qual a função que representa seu XP 'y' em função do tempo 'x'?",
      [Theme.SPACE]: "A energia coletada por um painel solar de um satélite aumenta linearmente. Ele começa com 500 unidades. Após 3 dias, tem 800. Qual a função que representa a energia 'y' em função do tempo 'x'?"
    },
    graphData: {
        labels: [0, 1, 2, 3],
        data: [500, 600, 700, 800],
        xLabel: 'Tempo (minutos/horas/dias)',
        yLabel: 'Pontuação / XP / Energia',
    },
    options: ['f(x) = 300x + 500', 'f(x) = 100x + 500', 'f(x) = 500x + 300', 'f(x) = 800x - 3'],
    correctAnswerIndex: 1,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é B) f(x) = 100x + 500. Ele ganhou 300 pontos em 3 minutos, então sua taxa 'a' é 300/3 = 100 pontos/min. O ponto inicial 'b' é 500.",
      [Theme.GAMES]: "A resposta correta é B) f(x) = 100x + 500. Ele ganhou 300 XP em 3 horas, então sua taxa 'a' é 300/3 = 100 XP/hora. O XP inicial 'b' é 500.",
      [Theme.SPACE]: "A resposta correta é B) f(x) = 100x + 500. Ele coletou 300 de energia em 3 dias, então sua taxa 'a' é 300/3 = 100 energia/dia. A energia inicial 'b' é 500."
    }
  },
  {
    id: 11,
    text: {
      [Theme.SPORTS]: "Corredor A: f(x) = 15x. Corredor B: f(x) = 12x + 30. O gráfico representa o Corredor A. Qual afirmação é a mais correta?",
      [Theme.GAMES]: "Jogador A: score f(x) = 15x. Jogador B: score f(x) = 12x + 30. O gráfico representa o Jogador A. Qual afirmação é a mais correta?",
      [Theme.SPACE]: "Nave A: distância f(x) = 15x. Nave B: distância f(x) = 12x + 30. O gráfico representa a Nave A. Qual afirmação é a mais correta?"
    },
    graphData: {
      labels: [0, 1, 2, 3],
      data: [0, 15, 30, 45],
      xLabel: 'Tempo',
      yLabel: 'Distância / Score',
    },
    options: ['B é mais rápido, mas A começou na frente.', 'A e B têm a mesma velocidade.', 'A é mais rápido, mas B começou na frente.', 'A começou na frente, mas B é mais rápido.'],
    correctAnswerIndex: 2,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é C). A velocidade de A ('a'=15) é maior que a de B ('a'=12). O ponto de partida de B ('b'=30) é maior que o de A ('b'=0), então B começou com vantagem.",
      [Theme.GAMES]: "A resposta correta é C). A taxa de pontuação de A ('a'=15) é maior que a de B ('a'=12). O score inicial de B ('b'=30) é maior que o de A ('b'=0), então B começou com mais pontos.",
      [Theme.SPACE]: "A resposta correta é C). A velocidade da Nave A ('a'=15) é maior que a da Nave B ('a'=12). A posição inicial da Nave B ('b'=30) é mais distante que a da Nave A ('b'=0)."
    }
  },
  {
    id: 12,
    text: {
      [Theme.SPORTS]: "Um jogador de futebol americano começa na linha de 20 jardas e corre a 8 jardas/segundo. Qual função descreve sua posição 'y' no campo após 'x' segundos?",
      [Theme.GAMES]: "Um personagem de plataforma começa na posição x=20 e corre para a direita a 8 pixels/segundo. Qual função descreve sua posição 'y' após 'x' segundos?",
      [Theme.SPACE]: "Uma sonda é lançada de uma nave-mãe a 20 km de um planeta e viaja a 8 km/segundo. Qual função descreve sua distância 'y' da nave-mãe após 'x' segundos?"
    },
    graphData: {
        labels: [0, 1, 2, 3],
        data: [20, 28, 36, 44],
        xLabel: 'Tempo (segundos)',
        yLabel: 'Posição (jardas/pixels/km)',
    },
    options: ['f(x) = 8x', 'f(x) = 20 - 8x', 'f(x) = 28x', 'f(x) = 8x + 20'],
    correctAnswerIndex: 3,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é D) f(x) = 8x + 20. O ponto de partida ('b') é a linha de 20 jardas e sua velocidade ('a') é 8 jardas por segundo.",
      [Theme.GAMES]: "A resposta correta é D) f(x) = 8x + 20. A posição inicial ('b') é 20 pixels e sua velocidade ('a') é 8 pixels por segundo.",
      [Theme.SPACE]: "A resposta correta é D) f(x) = 8x + 20. A distância inicial ('b') é 20 km e sua velocidade ('a') é 8 km por segundo."
    }
  },
  {
    id: 13,
    text: {
      [Theme.SPORTS]: "A função f(x) = -10x + 100 representa a energia de um lutador, onde 'x' é o número de rounds. Em qual round sua energia chegará a zero?",
      [Theme.GAMES]: "A função f(x) = -10x + 100 representa a vida de um chefão, onde 'x' é o número de golpes especiais. Após quantos golpes a vida dele chegará a zero?",
      [Theme.SPACE]: "A função f(x) = -10x + 100 representa o oxigênio de um tanque, onde 'x' é o número de horas. Em quantas horas o oxigênio chegará a zero?"
    },
    graphData: {
        labels: [0, 2, 5, 10],
        data: [100, 80, 50, 0],
        xLabel: 'Round / Golpes / Horas',
        yLabel: 'Energia / Vida / Oxigênio (%)',
    },
    options: ['Round 5', 'Round 100', '10', 'Round 20'],
    correctAnswerIndex: 2,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é C) 10. Para encontrar quando a energia é zero, fazemos f(x)=0. Então, 0 = -10x + 100, o que leva a 10x = 100, e x = 10.",
      [Theme.GAMES]: "A resposta correta é C) 10. Para encontrar quando a vida é zero, fazemos f(x)=0. Então, 0 = -10x + 100, o que leva a 10x = 100, e x = 10.",
      [Theme.SPACE]: "A resposta correta é C) 10. Para encontrar quando o oxigênio é zero, fazemos f(x)=0. Então, 0 = -10x + 100, o que leva a 10x = 100, e x = 10."
    }
  },
  {
    id: 14,
    text: {
      [Theme.SPORTS]: "Um ginasta recebe uma nota de partida de 9.5. Para cada erro ('x'), 0.1 ponto é deduzido. Qual função representa sua nota final 'y'?",
      [Theme.GAMES]: "Um jogador começa uma fase com 9.500 pontos. Para cada erro ('x'), 100 pontos são deduzidos. Qual função representa sua pontuação final 'y'?",
      [Theme.SPACE]: "A integridade do casco de uma nave é 95%. A cada colisão com um asteroide ('x'), 1% é perdido. Qual função representa a integridade final 'y'?"
    },
    graphData: {
        labels: [0, 1, 2, 5],
        data: [9.5, 9.4, 9.3, 9.0],
        xLabel: 'Número de Erros / Colisões',
        yLabel: 'Nota / Pontos / Integridade',
    },
    options: ['f(x) = 9.5 + 0.1x', 'f(x) = 0.1x - 9.5', 'f(x) = 9.4x', 'f(x) = 9.5 - 0.1x'],
    correctAnswerIndex: 3,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é D) f(x) = 9.5 - 0.1x. A nota inicial ('b') é 9.5 e a cada erro, a nota diminui ('a' = -0.1).",
      [Theme.GAMES]: "A resposta correta é D) f(x) = 9500 - 100x. A pontuação inicial ('b') é 9500 e a cada erro, a pontuação diminui ('a' = -100). A opção D é a única com a estrutura correta (b - ax).",
      [Theme.SPACE]: "A resposta correta é D) f(x) = 95 - 1x. A integridade inicial ('b') é 95 e a cada colisão, ela diminui ('a' = -1). A opção D é a única com a estrutura correta (b - ax)."
    }
  },
  {
    id: 15,
    text: {
      [Theme.SPORTS]: "Um ciclista de montanha sobe a 50m de altitude por minuto. Ele começa a 200m. Depois de quantos minutos 'x' ele atingirá 500m?",
      [Theme.GAMES]: "Um personagem ganha 50 de XP por minuto. Ele começa com 200 de XP. Depois de quantos minutos 'x' ele atingirá 500 de XP?",
      [Theme.SPACE]: "Uma nave coleta 50 unidades de energia por hora. Ela começa com 200. Depois de quantas horas 'x' ela terá 500 unidades?"
    },
    graphData: {
        labels: [0, 2, 4, 6],
        data: [200, 300, 400, 500],
        xLabel: 'Tempo (minutos/horas)',
        yLabel: 'Altitude / XP / Energia',
    },
    options: ['5 minutos', '6 minutos', '8 minutos', '10 minutos'],
    correctAnswerIndex: 1,
    feedback: {
      [Theme.SPORTS]: "A resposta correta é B) 6 minutos. A função é f(x) = 50x + 200. Queremos saber quando f(x) = 500. Então, 500 = 50x + 200. Isso nos dá 300 = 50x, e x = 6.",
      [Theme.GAMES]: "A resposta correta é B) 6 minutos. A função é f(x) = 50x + 200. Queremos saber quando f(x) = 500. Então, 500 = 50x + 200. Isso nos dá 300 = 50x, e x = 6.",
      [Theme.SPACE]: "A resposta correta é B) 6 horas. A função é f(x) = 50x + 200. Queremos saber quando f(x) = 500. Então, 500 = 50x + 200. Isso nos dá 300 = 50x, e x = 6."
    }
  },
];

export const FLASHCARDS_DATA: Flashcard[] = [
    {
        id: 1,
        front: {
            [Theme.SPORTS]: "Na função `f(x) = -10x + 100`, a reta é crescente ou decrescente?",
            [Theme.GAMES]: "Na vida de um inimigo, `Vida = -10 * (ataques) + 100`, a vida aumenta ou diminui a cada ataque?",
            [Theme.SPACE]: "Na função de combustível `C(t) = -10t + 100`, o combustível aumenta ou diminui com o tempo `t`?"
        },
        back: {
            [Theme.SPORTS]: "**Decrescente**, porque o 'a' (-10) é negativo. Pense em um atleta voltando para a linha de partida.",
            [Theme.GAMES]: "**Diminui**, porque o coeficiente de 'ataques' (-10) é negativo. A cada ataque, a vida do inimigo cai.",
            [Theme.SPACE]: "**Diminui**, porque o coeficiente de 't' (-10) é negativo. É o consumo de combustível ao longo do tempo."
        },
        graphData: {
          labels: [0, 5, 10],
          data: [100, 50, 0],
          xLabel: 'Tempo / Ataques',
          yLabel: 'Energia / Vida / Combustível'
        }
    },
    {
        id: 2,
        front: {
            [Theme.SPORTS]: "Na função `f(x) = 5x + 20`, o que o número 20 representa?",
            [Theme.GAMES]: "Na pontuação `P(i) = 5i + 20`, o que o 20 representa?",
            [Theme.SPACE]: "Na distância `D(t) = 5t + 20`, o que o 20 representa?"
        },
        back: {
            [Theme.SPORTS]: "O **ponto de partida** ('b'). Começar uma corrida 20 metros à frente da linha de largada.",
            [Theme.GAMES]: "A **pontuação inicial** ('b'). Você já começa a fase com 20 pontos.",
            [Theme.SPACE]: "A **distância inicial** ('b'). A nave já estava a 20km de distância quando começou a medir o tempo."
        },
        graphData: {
            labels: [0, 2, 4, 6],
            data: [20, 30, 40, 50],
            xLabel: 'Tempo / Itens',
            yLabel: 'Distância / Pontuação'
        }
    },
    {
        id: 3,
        front: {
            [Theme.SPORTS]: "O que o coeficiente 'a' na função `f(x) = ax + b` nos diz sobre o 'atleta'?",
            [Theme.GAMES]: "O que o coeficiente 'a' em `Score = a*tempo + b` nos diz sobre o jogador?",
            [Theme.SPACE]: "O que o coeficiente 'a' em `Distância = a*tempo + b` nos diz sobre a nave?"
        },
        back: {
            [Theme.SPORTS]: "A **velocidade ou ritmo**. Se 'a' > 0, ele avança (crescente). Se 'a' < 0, ele recua (decrescente).",
            [Theme.GAMES]: "A **taxa de pontuação**. Quantos pontos o jogador ganha por segundo/minuto.",
            [Theme.SPACE]: "A **velocidade da nave**. Quantos km ela percorre por hora/segundo."
        }
    },
    {
        id: 4,
        front: {
            [Theme.SPORTS]: "Se um corredor parte do 0km e corre a 12 km/h, qual a função da sua distância?",
            [Theme.GAMES]: "Se um jogador começa com 0 pontos e ganha 12 pontos por segundo, qual a função da sua pontuação?",
            [Theme.SPACE]: "Se uma nave parte da base (0km) e viaja a 12 km/s, qual a função da sua distância?"
        },
        back: {
            [Theme.SPORTS]: "`f(x) = 12x`. Ponto de partida 'b' é 0, velocidade 'a' é 12.",
            [Theme.GAMES]: "`P(t) = 12t`. Pontuação inicial 'b' é 0, taxa de pontos 'a' é 12.",
            [Theme.SPACE]: "`D(t) = 12t`. Posição inicial 'b' é 0, velocidade 'a' é 12."
        },
        graphData: {
            labels: [0, 1, 2, 3],
            data: [0, 12, 24, 36],
            xLabel: 'Tempo',
            yLabel: 'Distância / Pontuação'
        }
    },
    {
        id: 5,
        front: {
            [Theme.SPORTS]: "Atleta A: `f(x) = 15x`. Atleta B: `f(x) = 12x + 5`. Quem é mais rápido?",
            [Theme.GAMES]: "Jogador A: `score = 15t`. Jogador B: `score = 12t + 500`. Quem pontua mais rápido?",
            [Theme.SPACE]: "Nave A: `dist = 15t`. Nave B: `dist = 12t + 5000`. Qual nave é mais veloz?"
        },
        back: {
            [Theme.SPORTS]: "**Atleta A** é mais rápido. Sua velocidade ('a') é 15, maior que a de B (12). B apenas começou na frente.",
            [Theme.GAMES]: "**Jogador A** pontua mais rápido. Sua taxa ('a') é 15, maior que a de B (12). B apenas começou com mais pontos.",
            [Theme.SPACE]: "**Nave A** é mais veloz. Sua velocidade ('a') é 15, maior que a de B (12). B apenas começou mais longe."
        },
         graphData: {
            labels: [0, 1, 2, 3],
            data: [0, 15, 30, 45],
            xLabel: 'Tempo',
            yLabel: 'Distância / Pontuação'
        }
    },
    {
        id: 6,
        front: {
            [Theme.SPORTS]: "O que acontece em `f(x) = ax + b` se 'a' (velocidade) for zero?",
            [Theme.GAMES]: "O que acontece em `Score = at + b` se 'a' (pontos/seg) for zero?",
            [Theme.SPACE]: "O que acontece em `Dist = at + b` se 'a' (velocidade) for zero?"
        },
        back: {
            [Theme.SPORTS]: "A função vira `f(x) = b`. É um atleta parado na posição 'b'. O gráfico é uma linha horizontal.",
            [Theme.GAMES]: "A função vira `Score = b`. O jogador não ganha mais pontos, sua pontuação fica fixa em 'b'.",
            [Theme.SPACE]: "A função vira `Dist = b`. A nave está parada na posição 'b', flutuando no espaço."
        },
        graphData: {
            labels: [0, 5, 10, 15],
            data: [10, 10, 10, 10],
            xLabel: 'Tempo',
            yLabel: 'Posição / Score (f(x) = 10)'
        }
    },
    {
        id: 7,
        front: {
            [Theme.SPORTS]: "Atleta está em 10m no t=2s e 20m no t=4s. Como achar a velocidade ('a')?",
            [Theme.GAMES]: "Jogador tem 10 moedas no t=2min e 20 no t=4min. Como achar a taxa de coleta ('a')?",
            [Theme.SPACE]: "Nave está na posição 10km no t=2h e 20km no t=4h. Como achar a velocidade ('a')?"
        },
        back: {
            [Theme.SPORTS]: "Velocidade ('a') = (variação distância) / (variação tempo). `a = (20 - 10) / (4 - 2) = 10 / 2 = 5 m/s`.",
            [Theme.GAMES]: "Taxa ('a') = (variação moedas) / (variação tempo). `a = (20 - 10) / (4 - 2) = 10 / 2 = 5 moedas/min`.",
            [Theme.SPACE]: "Velocidade ('a') = (variação distância) / (variação tempo). `a = (20 - 10) / (4 - 2) = 10 / 2 = 5 km/h`."
        },
        graphData: {
            labels: [0, 2, 4, 6],
            data: [0, 10, 20, 30],
            xLabel: 'Tempo (s/min/h)',
            yLabel: 'Posição / Moedas'
        }
    },
    {
        id: 8,
        front: {
            [Theme.SPORTS]: "Na função `f(x) = 5x + 10`, o que `f(3) = 25` significa?",
            [Theme.GAMES]: "Na função de score `P(t) = 5t + 10`, o que `P(3) = 25` significa?",
            [Theme.SPACE]: "Na função de energia `E(t) = 5t + 10`, o que `E(3) = 25` significa?"
        },
        back: {
            [Theme.SPORTS]: "Que **após 3 segundos (x=3)**, o corredor estará na **posição de 25 metros (f(x)=25)**.",
            [Theme.GAMES]: "Que **após 3 minutos (t=3)**, o jogador terá **25 pontos (P(t)=25)**.",
            [Theme.SPACE]: "Que **após 3 horas (t=3)**, a nave terá **25 unidades de energia (E(t)=25)**."
        },
         graphData: {
            labels: [0, 1, 2, 3],
            data: [10, 15, 20, 25],
            xLabel: 'Tempo',
            yLabel: 'Posição / Pontos / Energia'
        }
    },
    {
        id: 9,
        front: {
            [Theme.SPORTS]: "Duas pistas: `y = 2x + 5` e `y = 2x + 10`. O que têm em comum?",
            [Theme.GAMES]: "Dois jogadores pontuam: `P1 = 2t + 5` e `P2 = 2t + 10`. O que têm em comum?",
            [Theme.SPACE]: "Duas naves se movem: `D1 = 2t + 5` e `D2 = 2t + 10`. O que têm em comum?"
        },
        back: {
            [Theme.SPORTS]: "São **paralelas**. A velocidade ('a') de ambas é 2. Como dois corredores na mesma velocidade em raias diferentes.",
            [Theme.GAMES]: "A **taxa de pontuação** ('a') é a mesma (2). O Jogador 2 apenas começou com mais pontos.",
            [Theme.SPACE]: "A **velocidade** ('a') é a mesma (2). Elas viajam à mesma velocidade, mas a Nave 2 começou mais longe. Suas trajetórias são paralelas."
        },
        graphData: {
            labels: [0, 2, 4, 6],
            data: [5, 9, 13, 17],
            xLabel: 'Tempo',
            yLabel: 'Posição (para y = 2x + 5)'
        }
    },
    {
        id: 10,
        front: {
            [Theme.SPORTS]: "A trajetória de uma bola arremessada, `y = x² + 2`, é uma função de primeiro grau?",
            [Theme.GAMES]: "O dano de uma magia, `dano = nível² + 2`, é uma função de primeiro grau?",
            [Theme.SPACE]: "A força gravitacional, `F = G/d²`, é uma função de primeiro grau em relação à distância `d`?"
        },
        back: {
            [Theme.SPORTS]: "**Não**. Por causa do `x²`, é uma função de segundo grau (quadrática).",
            [Theme.GAMES]: "**Não**. Por causa do `nível²`, o dano não aumenta de forma linear, mas quadrática.",
            [Theme.SPACE]: "**Não**. O `d²` no denominador a torna uma função inversa quadrática, não de primeiro grau."
        }
    }
];