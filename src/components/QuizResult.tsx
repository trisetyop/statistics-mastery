import { Award, Repeat, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useQuizSessionStore } from '@/stores/quizSessionStore';
import { useUserProgressStore } from '@/stores/userProgressStore';
export function QuizResult() {
  const score = useQuizSessionStore((state) => state.score);
  const questions = useQuizSessionStore((state) => state.questions);
  const reset = useQuizSessionStore((state) => state.reset);
  const startQuiz = useQuizSessionStore((state) => state.startQuiz);
  const progress = useUserProgressStore((state) => state.progress);
  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const getFeedback = () => {
    if (percentage === 100) return "Sempurna! Anda menguasai materi ini.";
    if (percentage >= 80) return "Luar biasa! Terus pertahankan.";
    if (percentage >= 60) return "Bagus! Sedikit lagi untuk sempurna.";
    if (percentage >= 40) return "Cukup baik. Terus berlatih, ya!";
    return "Jangan menyerah! Coba lagi untuk hasil yang lebih baik.";
  };
  const handleRetry = () => {
    // Restart the quiz with the same set of questions, passing the current progress
    // to ensure the SRS logic can still apply if needed in future enhancements.
    startQuiz(questions, progress);
  };
  return (
    <div className="flex items-center justify-center animate-scale-in">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-4">
            <Award className="h-10 w-10 text-accent" />
          </div>
          <CardTitle className="text-3xl">Hasil Kuis Selesai!</CardTitle>
          <CardDescription className="text-lg">{getFeedback()}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-around items-baseline p-6 bg-secondary rounded-lg">
            <div>
              <p className="text-sm font-medium text-muted-foreground">SKOR</p>
              <p className="text-4xl font-bold text-primary">{percentage}%</p>
            </div>
            <div className="border-l h-12"></div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">BENAR</p>
              <p className="text-4xl font-bold text-primary">
                {score} <span className="text-xl text-muted-foreground">/ {totalQuestions}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={handleRetry} className="flex-1" size="lg">
              <Repeat className="mr-2 h-4 w-4" />
              Coba Lagi
            </Button>
            <Button onClick={reset} variant="outline" className="flex-1" size="lg">
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}