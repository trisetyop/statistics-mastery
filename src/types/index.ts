export type MasteryLevel = 0 | 1 | 2; // 0: Unseen, 1: Learning, 2: Mastered
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}
export interface QuizTopic {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  isAdvanced?: boolean;
}
export type UserProgress = {
  [questionId: string]: MasteryLevel;
};