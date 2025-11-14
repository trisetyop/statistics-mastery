import { Sprout } from 'lucide-react';
import { useQuizSessionStore } from '@/stores/quizSessionStore';
import { QuizDashboard } from '@/components/QuizDashboard';
import { QuizSession } from '@/components/QuizSession';
import { QuizResult } from '@/components/QuizResult';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  const quizStatus = useQuizSessionStore((state) => state.status);
  const renderContent = () => {
    switch (quizStatus) {
      case 'active':
        return <QuizSession />;
      case 'completed':
        return <QuizResult />;
      case 'inactive':
      default:
        return <QuizDashboard />;
    }
  };
  return (
    <>
      <ThemeToggle className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8" />
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b bg-card shadow-pixel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <Sprout className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold text-foreground tracking-wider">StatQuest</h1>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-8 md:py-10 lg:py-12">
              {renderContent()}
            </div>
          </div>
        </main>
        <footer className="py-6 text-center text-lg text-muted-foreground">
          <p>Built with ❤️ at Cloudflare</p>
        </footer>
      </div>
    </>
  );
}