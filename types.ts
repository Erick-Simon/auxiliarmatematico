export enum Screen {
  MENU,
  THEORY,
  EXERCISES,
  FLASHCARDS,
}

export interface Question {
  id: number;
  text: string;
  graphData?: {
    labels: (string | number)[];
    data: number[];
    xLabel: string;
    yLabel: string;
  };
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}

export interface Flashcard {
  id: number;
  front: string;
  back: string;
}
