import type { Achievement } from '@/types';
import { BookOpen, CheckCircle, Star, Target, BrainCircuit, Gem, Crown } from 'lucide-react';
export const achievements: Achievement[] = [
  {
    id: 'FIRST_QUIZ_COMPLETE',
    title: 'Langkah Pertama',
    description: 'Selesaikan kuis pertamamu.',
    icon: BookOpen,
  },
  {
    id: 'PERFECT_SCORE',
    title: 'Ahli Statistik',
    description: 'Dapatkan skor sempurna dalam sebuah kuis.',
    icon: Star,
  },
  {
    id: 'FIRST_CARD_MASTERED',
    title: 'Mulai Menguasai',
    description: 'Kuasai kartu pertamamu (mencapai level 5).',
    icon: CheckCircle,
  },
  {
    id: 'TEN_CARDS_MASTERED',
    title: 'Pembelajar Tekun',
    description: 'Kuasai 10 kartu.',
    icon: Target,
  },
  {
    id: 'ALL_INTRO_MASTERED',
    title: 'Pondasi Kuat',
    description: 'Kuasai semua kartu di topik pengantar.',
    icon: BrainCircuit,
  },
  {
    id: 'ADVANCED_UNLOCKED',
    title: 'Siap untuk Tantangan',
    description: 'Buka kunci topik-topik lanjutan.',
    icon: Gem,
  },
  {
    id: 'ALL_CARDS_MASTERED',
    title: 'Master StatQuest',
    description: 'Kuasai semua kartu yang tersedia.',
    icon: Crown,
  },
];