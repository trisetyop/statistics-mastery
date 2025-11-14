import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useQuizSessionStore } from '@/stores/quizSessionStore';
import { useUserProgressStore } from '@/stores/userProgressStore';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';
import type { AnswerRating } from '@/types';
export function QuizSession() {
  const questions = useQuizSessionStore((state) => state.questions);
  const currentQuestionIndex = useQuizSessionStore((state) => state.currentQuestionIndex);
  const answerQuestion = useQuizSessionStore((state) => state.answerQuestion);
  const nextQuestion = useQuizSessionStore((state) => state.nextQuestion);
  const updateQuestionMastery = useUserProgressStore((state) => state.updateQuestionMastery);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentQuestionIndex]);
  const handleAnswerClick = (answerIndex: number) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    answerQuestion(currentQuestion.id, answerIndex);
  };
  const isCorrect = selectedAnswer !== null && selectedAnswer === currentQuestion.correctAnswer;
  const handleRatingClick = (userRating: 'hard' | 'medium' | 'easy') => {
    const finalRating: AnswerRating = isCorrect ? userRating : 'again';
    updateQuestionMastery(currentQuestion.id, finalRating);
    nextQuestion();
  };
  const getOptionClass = (index: number) => {
    if (!isAnswered) {
      return 'border-border hover:bg-secondary';
    }
    if (index === currentQuestion.correctAnswer) {
      return 'bg-success/20 border-success text-success-foreground';
    }
    if (index === selectedAnswer) {
      return 'bg-danger/20 border-danger text-danger-foreground';
    }
    // For incorrect answers, also highlight the correct one
    return 'border-border';
  };
  const cardVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 1.05 },
  };
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
      <div className="w-full space-y-4 mb-8">
        <div className="flex justify-between text-lg font-medium text-muted-foreground">
          <span>Pertanyaan {currentQuestionIndex + 1} dari {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-full"
        >
          <Card className="shadow-pixel">
            <CardHeader>
              <CardTitle className="text-3xl leading-relaxed">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={cn(
                      'justify-start h-auto py-4 text-left whitespace-normal transition-all duration-300 relative text-xl shadow-pixel',
                      getOptionClass(index)
                    )}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isAnswered}
                  >
                    <span className="mr-4 font-bold">{String.fromCharCode(65 + index)}</span>
                    <span>{option}</span>
                    {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle className="absolute right-4 h-6 w-6 text-success" />}
                    {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && <XCircle className="absolute right-4 h-6 w-6 text-danger" />}
                  </Button>
                ))}
              </div>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-center"
                >
                  <div className="mb-4 text-lg">
                    {isCorrect ? (
                      <p className="font-bold text-success">Jawaban Benar!</p>
                    ) : (
                      <p className="font-bold text-danger">Jawaban Salah.</p>
                    )}
                    <p className="text-muted-foreground">Seberapa sulit pertanyaan ini?</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Button onClick={() => handleRatingClick('hard')} variant="outline" size="lg" className="text-lg shadow-pixel">Sulit</Button>
                    <Button onClick={() => handleRatingClick('medium')} size="lg" className="text-lg shadow-pixel">Sedang</Button>
                    <Button onClick={() => handleRatingClick('easy')} variant="secondary" size="lg" className="text-lg shadow-pixel">Mudah</Button>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}