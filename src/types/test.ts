export interface Test {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}
