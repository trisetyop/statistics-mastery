import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserProgress, MasteryLevel } from '@/types';
interface UserProgressState {
  progress: UserProgress;
  updateQuestionMastery: (questionId: string, correct: boolean) => void;
  getTopicMastery: (questionIds: string[]) => number;
  getTotalMasteredCount: () => number;
}
export const useUserProgressStore = create<UserProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      updateQuestionMastery: (questionId, correct) => {
        set((state) => {
          const currentLevel = state.progress[questionId] || 0;
          let newLevel: MasteryLevel;
          if (correct) {
            newLevel = Math.min(2, currentLevel + 1) as MasteryLevel;
          } else {
            newLevel = Math.max(0, currentLevel - 1) as MasteryLevel;
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
        const totalPossibleMastery = questionIds.length * 2;
        const currentMastery = questionIds.reduce((sum, qId) => {
          return sum + (state.progress[qId] || 0);
        }, 0);
        return (currentMastery / totalPossibleMastery) * 100;
      },
      getTotalMasteredCount: () => {
        const state = get();
        return Object.values(state.progress).filter(level => level === 2).length;
      }
    }),
    {
      name: 'statquest-user-progress',
      storage: createJSONStorage(() => localStorage),
    }
  )
);