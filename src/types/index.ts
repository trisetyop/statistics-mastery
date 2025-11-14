import type { LucideIcon } from 'lucide-react';
export type MasteryLevel = 0 | 1 | 2 | 3 | 4 | 5; // 0: Unseen, 1-4: Learning, 5: Mastered
export type AnswerRating = 'again' | 'hard' | 'medium' | 'easy';
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
export type AchievementId = 
  | 'FIRST_QUIZ_COMPLETE'
  | 'PERFECT_SCORE'
  | 'FIRST_CARD_MASTERED'
  | 'TEN_CARDS_MASTERED'
  | 'ALL_INTRO_MASTERED'
  | 'ADVANCED_UNLOCKED'
  | 'ALL_CARDS_MASTERED';
export interface Achievement {
  id: AchievementId;
  title: string;
  description: string;
  icon: LucideIcon;
}