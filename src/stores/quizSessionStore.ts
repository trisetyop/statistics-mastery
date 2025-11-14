import { create } from 'zustand';
import type { Question, UserProgress } from '@/types';
type QuizStatus = 'inactive' | 'active' | 'completed';
interface QuizSessionState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: { [questionId: string]: number };
  status: QuizStatus;
  score: number;
  startTime: number | null;
  endTime: number | null;
  startQuiz: (questions: Question[], progress: UserProgress) => void;
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
// Helper to shuffle an array
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
export const useQuizSessionStore = create<QuizSessionState>((set, get) => ({
  ...initialState,
  startQuiz: (questions, progress) => {
    const dueQuestions = questions
      .filter(q => (progress[q.id] || 0) < 5)
      .sort((a, b) => (progress[a.id] || 0) - (progress[b.id] || 0));
    let sessionQuestions: Question[];
    if (dueQuestions.length > 0) {
      sessionQuestions = dueQuestions.slice(0, 10);
    } else {
      // All mastered, pick 5 random for review
      sessionQuestions = shuffleArray(questions).slice(0, 5);
    }
    set({
      questions: shuffleArray(sessionQuestions),
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