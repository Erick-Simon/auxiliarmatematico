export enum Screen {
  MENU,
  THEORY,
  EXERCISES,
  FLASHCARDS,
}

export enum Theme {
  SPORTS = 'SPORTS',
  GAMES = 'GAMES',
  SPACE = 'SPACE',
}

export interface Question {
  id: number;
  text: Record<Theme, string>;
  graphData?: {
    labels: (string | number)[];
    data: number[];
    xLabel: string;
    yLabel: string;
  };
  options: string[];
  correctAnswerIndex: number;
  feedback: Record<Theme, string>;
}

export interface Flashcard {
  id: number;
  front: Record<Theme, string>;
  back: Record<Theme, string>;
  graphData?: {
    labels: (string | number)[];
    data: number[];
    xLabel: string;
    yLabel: string;
  };
}
