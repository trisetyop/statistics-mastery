import { BookCopy, CheckCircle, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { quizData } from '@/data/quizData';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { useQuizSessionStore } from '@/stores/quizSessionStore';
import type { QuizTopic } from '@/types';
export function QuizDashboard() {
  const startQuiz = useQuizSessionStore((state) => state.startQuiz);
  const getTopicMastery = useUserProgressStore((state) => state.getTopicMastery);
  const totalMasteredCount = useUserProgressStore((state) => state.getTotalMasteredCount());
  const totalQuestions = quizData.reduce((acc, topic) => acc + topic.questions.length, 0);
  const handleStartQuiz = (topic: QuizTopic) => {
    startQuiz(topic.questions);
  };
  return (
    <div className="animate-fade-in space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">StatQuest Dashboard</h1>
        <p className="text-lg text-muted-foreground">Selamat datang! Pilih topik untuk memulai kuis dan tingkatkan pemahaman statistika Anda.</p>
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
              <span>Pencapaian</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold">Pemula</p>
            <p className="text-muted-foreground">Level berikutnya: Ahli</p>
          </CardContent>
        </Card>
      </div>
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Topik Kuis</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quizData.map((topic) => {
            const questionIds = topic.questions.map(q => q.id);
            const mastery = getTopicMastery(questionIds);
            return (
              <Card key={topic.id} className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <BookCopy className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{topic.title}</CardTitle>
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
                  <Button className="w-full" onClick={() => handleStartQuiz(topic)}>
                    Mulai Kuis
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}