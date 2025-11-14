import { BookCopy, CheckCircle, Award, Lock, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { quizData } from '@/data/quizData';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { useQuizSessionStore } from '@/stores/quizSessionStore';
import type { QuizTopic } from '@/types';
import { cn } from '@/lib/utils';
export function QuizDashboard() {
  const startQuiz = useQuizSessionStore((state) => state.startQuiz);
  const getTopicMastery = useUserProgressStore((state) => state.getTopicMastery);
  const getTotalMasteredCount = useUserProgressStore((state) => state.getTotalMasteredCount);
  const progress = useUserProgressStore((state) => state.progress);
  const resetProgress = useUserProgressStore((state) => state.resetProgress);
  const totalMasteredCount = getTotalMasteredCount();
  const UNLOCK_THRESHOLD = 75;
  const introTopics = quizData.filter(topic => !topic.isAdvanced);
  const introQuestionIds = introTopics.flatMap(topic => topic.questions.map(q => q.id));
  const introMastery = getTopicMastery(introQuestionIds);
  const isAdvancedLocked = introMastery < UNLOCK_THRESHOLD;
  const totalQuestions = quizData.reduce((acc, topic) => acc + topic.questions.length, 0);
  const handleStartQuiz = (topic: QuizTopic) => {
    startQuiz(topic.questions, progress);
  };
  return (
    <div className="animate-fade-in space-y-10">
      <header className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">StatQuest Dashboard</h1>
            <p className="text-lg text-muted-foreground">Selamat datang! Pilih topik untuk memulai kuis.</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="shrink-0">
                <Trash2 className="mr-2 h-4 w-4" />
                Reset Progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
                <AlertDialogDescription>
                  Tindakan ini akan menghapus semua progres penguasaan kartu Anda secara permanen. Data yang sudah dihapus tidak dapat dikembalikan.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Batal</AlertDialogCancel>
                <AlertDialogAction onClick={resetProgress}>Ya, Hapus Progres</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <CheckCircle className="h-6 w-6 text-primary" />
              <span>Total Dikuasai</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">{totalMasteredCount}</p>
            <p className="text-muted-foreground">dari {totalQuestions} kartu</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Award className="h-6 w-6 text-accent" />
              <span>Penguasaan Awal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">{introMastery.toFixed(0)}%</p>
            <p className="text-muted-foreground">Target: {UNLOCK_THRESHOLD}% untuk membuka topik lanjutan</p>
          </CardContent>
        </Card>
      </div>
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Topik Kuis</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizData.map((topic) => {
            const questionIds = topic.questions.map(q => q.id);
            const mastery = getTopicMastery(questionIds);
            const isLocked = topic.isAdvanced && isAdvancedLocked;
            const cardContent = (
              <Card
                key={topic.id}
                className={cn(
                  "flex flex-col transition-all",
                  isLocked ? "filter grayscale" : "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <BookCopy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {topic.title}
                        {isLocked && <Lock className="h-4 w-4 text-muted-foreground" />}
                      </CardTitle>
                      <CardDescription>{topic.questions.length} Pertanyaan</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-muted-foreground">{topic.description}</p>
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Penguasaan</span>
                      <span className="font-semibold">{mastery.toFixed(0)}%</span>
                    </div>
                    <Progress value={mastery} />
                  </div>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button
                    className="w-full"
                    onClick={() => handleStartQuiz(topic)}
                    disabled={isLocked}
                  >
                    Mulai Kuis
                  </Button>
                </div>
              </Card>
            );
            if (isLocked) {
              return (
                <TooltipProvider key={topic.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>{cardContent}</TooltipTrigger>
                    <TooltipContent>
                      <p>Raih penguasaan {UNLOCK_THRESHOLD}% pada topik awal untuk membuka.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            }
            return cardContent;
          })}
        </div>
      </section>
    </div>
  );
}