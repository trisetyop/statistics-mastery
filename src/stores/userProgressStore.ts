import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserProgress, MasteryLevel, AnswerRating } from '@/types';
interface UserProgressState {
  progress: UserProgress;
  updateQuestionMastery: (questionId: string, rating: AnswerRating) => void;
  getTopicMastery: (questionIds: string[]) => number;
  getTotalMasteredCount: () => number;
  resetProgress: () => void;
}
export const useUserProgressStore = create<UserProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      updateQuestionMastery: (questionId, rating) => {
        set((state) => {
          const currentLevel = state.progress[questionId] || 0;
          let newLevel: MasteryLevel;
          switch (rating) {
            case 'again':
              newLevel = 1;
              break;
            case 'hard':
              newLevel = Math.min(5, currentLevel + 1) as MasteryLevel;
              break;
            case 'medium':
              newLevel = Math.min(5, currentLevel + 2) as MasteryLevel;
              break;
            case 'easy':
              newLevel = 5;
              break;
            default:
              newLevel = currentLevel;
          }
          return {
            progress: {
              ...state.progress,
              [questionId]: newLevel,
            },
          };
        });
      },
      getTopicMastery: (questionIds) => {
        const state = get();
        if (questionIds.length === 0) return 0;
        const totalPossibleMastery = questionIds.length * 5;
        const currentMastery = questionIds.reduce((sum, qId) => {
          return sum + (state.progress[qId] || 0);
        }, 0);
        return (currentMastery / totalPossibleMastery) * 100;
      },
      getTotalMasteredCount: () => {
        const state = get();
        return Object.values(state.progress).filter(level => level === 5).length;
      },
      resetProgress: () => {
        set({ progress: {} });
      }
    }),
    {
      name: 'statquest-user-progress',
      storage: createJSONStorage(() => localStorage),
    }
  )
);