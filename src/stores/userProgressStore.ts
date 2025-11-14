import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { UserProgress, MasteryLevel, AnswerRating, AchievementId } from '@/types';
import { quizData } from '@/data/quizData';
import { toast } from 'sonner';
import { achievements } from '@/data/achievementsData';
interface UserProgressState {
  progress: UserProgress;
  unlockedAchievements: Set<AchievementId>;
  updateQuestionMastery: (questionId: string, rating: AnswerRating) => void;
  getTopicMastery: (questionIds: string[]) => number;
  getTotalMasteredCount: () => number;
  resetProgress: () => void;
  unlockAchievement: (id: AchievementId) => void;
}
const allQuestionIds = quizData.flatMap(topic => topic.questions.map(q => q.id));
const introQuestionIds = quizData.filter(t => !t.isAdvanced).flatMap(topic => topic.questions.map(q => q.id));
export const useUserProgressStore = create<UserProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      unlockedAchievements: new Set(),
      unlockAchievement: (id) => {
        const state = get();
        if (!state.unlockedAchievements.has(id)) {
          const achievement = achievements.find(a => a.id === id);
          if (achievement) {
            toast.success(`Pencapaian Terbuka: ${achievement.title}`, {
              description: achievement.description,
            });
          }
          set(prevState => ({
            unlockedAchievements: new Set(prevState.unlockedAchievements).add(id),
          }));
        }
      },
      updateQuestionMastery: (questionId, rating) => {
        let newLevel: MasteryLevel = 0;
        set((state) => {
          const currentLevel = state.progress[questionId] || 0;
          switch (rating) {
            case 'again': newLevel = 1; break;
            case 'hard': newLevel = Math.min(5, currentLevel + 1) as MasteryLevel; break;
            case 'medium': newLevel = Math.min(5, currentLevel + 2) as MasteryLevel; break;
            case 'easy': newLevel = 5; break;
            default: newLevel = currentLevel;
          }
          return {
            progress: { ...state.progress, [questionId]: newLevel },
          };
        });
        // Post-update achievement checks
        const state = get();
        const masteredCount = Object.values(state.progress).filter(level => level === 5).length;
        if (newLevel === 5) {
          state.unlockAchievement('FIRST_CARD_MASTERED');
        }
        if (masteredCount >= 10) {
          state.unlockAchievement('TEN_CARDS_MASTERED');
        }
        const introMasteredCount = introQuestionIds.filter(id => state.progress[id] === 5).length;
        if (introMasteredCount === introQuestionIds.length) {
          state.unlockAchievement('ALL_INTRO_MASTERED');
        }
        if (masteredCount === allQuestionIds.length) {
          state.unlockAchievement('ALL_CARDS_MASTERED');
        }
      },
      getTopicMastery: (questionIds) => {
        const state = get();
        if (questionIds.length === 0) return 0;
        const totalPossibleMastery = questionIds.length * 5;
        const currentMastery = questionIds.reduce((sum, qId) => sum + (state.progress[qId] || 0), 0);
        const masteryPercent = (currentMastery / totalPossibleMastery) * 100;
        if (masteryPercent >= 75 && questionIds.every(id => introQuestionIds.includes(id))) {
          state.unlockAchievement('ADVANCED_UNLOCKED');
        }
        return masteryPercent;
      },
      getTotalMasteredCount: () => {
        const state = get();
        return Object.values(state.progress).filter(level => level === 5).length;
      },
      resetProgress: () => {
        set({ progress: {}, unlockedAchievements: new Set() });
      }
    }),
    {
      name: 'statquest-user-progress',
      storage: createJSONStorage(() => localStorage, {
        reviver: (key, value) => {
          if (key === 'unlockedAchievements' && value instanceof Array) {
            return new Set(value);
          }
          return value;
        },
        replacer: (key, value) => {
          if (key === 'unlockedAchievements' && value instanceof Set) {
            return Array.from(value);
          }
          return value;
        },
      }),
    }
  )
);