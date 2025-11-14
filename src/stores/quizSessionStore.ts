import { create } from 'zustand';
import type { Question } from '@/types';
type QuizStatus = 'inactive' | 'active' | 'completed';
interface QuizSessionState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: { [questionId: string]: number };
  status: QuizStatus;
  score: number;
  startTime: number | null;
  endTime: number | null;
  startQuiz: (questions: Question[]) => void;
  answerQuestion: (questionId: string, answerIndex: number) => void;
  nextQuestion: () => void;
  endQuiz: () => void;
  reset: () => void;
}
const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: {},
  status: 'inactive' as QuizStatus,
  score: 0,
  startTime: null,
  endTime: null,
};
export const useQuizSessionStore = create<QuizSessionState>((set, get) => ({
  ...initialState,
  startQuiz: (questions) => {
    // Simple logic: take first 10 questions or all if fewer
    const sessionQuestions = questions.slice(0, 10);
    set({
      questions: sessionQuestions,
      currentQuestionIndex: 0,
      userAnswers: {},
      status: 'active',
      score: 0,
      startTime: Date.now(),
      endTime: null,
    });
  },
  answerQuestion: (questionId, answerIndex) => {
    const state = get();
    if (state.status !== 'active') return;
    const question = state.questions[state.currentQuestionIndex];
    if (question.id !== questionId) return;
    const isCorrect = question.correctAnswer === answerIndex;
    set({
      userAnswers: { ...state.userAnswers, [questionId]: answerIndex },
      score: state.score + (isCorrect ? 1 : 0),
    });
  },
  nextQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex < state.questions.length - 1) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    } else {
      state.endQuiz();
    }
  },
  endQuiz: () => {
    set({ status: 'completed', endTime: Date.now() });
  },
  reset: () => {
    set(initialState);
  },
}));