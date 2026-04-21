import ActiveQuizScreen from './ActiveQuizScreen'
import QuizDispatchProvider from './QuizDispatchProvider'
import { useQuiz } from '../hooks/useQuiz'
import FinishScreen from './FinishScreen'
import Header from './Header'
import StartScreen from './StartScreen'

export default function App() {
  const {
    questions,
    status,
    index,
    answer,
    secondsRemaining,
    scores,
    numQuestions,
    progressPercent,
    formattedTime,
    dominantIntelligence,
    isLastQuestion,
    dispatch,
  } =
    useQuiz()
  const currentQuestion = questions[index]

  return (
    <div className="flex min-h-screen min-w-[320px] items-start justify-center bg-[#09090e] px-3 py-4 antialiased [font-family:'Montserrat',Arial,sans-serif] md:items-center md:px-6 md:py-6">
      <div className="flex w-full max-w-[44rem] flex-col overflow-hidden rounded-2xl bg-[#0f0f17] p-4 ring-1 ring-white/[0.05] sm:p-6 md:p-10">
        <Header />

        <QuizDispatchProvider dispatch={dispatch}>
          <main className="mt-4">
            {status === 'ready' && (
              <StartScreen numQuestions={numQuestions} />
            )}

            {status === 'active' && currentQuestion && secondsRemaining !== null && (
              <ActiveQuizScreen
                question={currentQuestion}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
                secondsRemaining={secondsRemaining}
                progressPercent={progressPercent}
                formattedTime={formattedTime}
                isLastQuestion={isLastQuestion}
              />
            )}

            {status === 'finished' && (
              <FinishScreen
                scores={scores}
                dominantIntelligence={dominantIntelligence}
              />
            )}
          </main>
        </QuizDispatchProvider>
      </div>
    </div>
  )
}
