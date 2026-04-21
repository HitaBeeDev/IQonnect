import ActiveQuizScreen from './ActiveQuizScreen'
import { useQuiz } from '../hooks/useQuiz'
import FinishScreen from './FinishScreen'
import Header from './Header'
import StartScreen from './StartScreen'

export default function App() {
  const { questions, status, index, answer, secondsRemaining, scores, numQuestions, dispatch } =
    useQuiz()
  const currentQuestion = questions[index]

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#1D1F21] px-3 py-4 md:items-center md:px-6 md:py-6">
      <div className="flex min-h-[calc(100vh-2rem)] w-full max-w-[40rem] flex-col overflow-hidden rounded-xl bg-[#2c2e30] p-4 shadow-lg sm:p-6 md:h-[35rem] md:min-h-0 md:w-[40rem] md:p-10">
        <Header />

        <main className="mt-4 flex-1 min-h-0 overflow-y-auto pr-1">
          {status === 'ready' && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}

          {status === 'active' && currentQuestion && secondsRemaining !== null && (
            <ActiveQuizScreen
              question={currentQuestion}
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
              secondsRemaining={secondsRemaining}
            />
          )}

          {status === 'finished' && (
            <FinishScreen dispatch={dispatch} scores={scores} />
          )}
        </main>
      </div>
    </div>
  )
}
