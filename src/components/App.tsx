import { useQuiz } from '../hooks/useQuiz'
import FinishScreen from './FinishScreen'
import Footer from './Footer'
import Header from './Header'
import NextButton from './NextButton'
import Progress from './Progress'
import Question from './Question'
import StartScreen from './StartScreen'
import Timer from './Timer'

export default function App() {
  const { questions, status, index, answer, secondsRemaining, scores, numQuestions, dispatch } =
    useQuiz()
  const currentQuestion = questions[index]

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#1D1F21] px-3 py-4 md:items-center md:px-6 md:py-6">
      <div className="flex min-h-[calc(100vh-2rem)] w-full max-w-[40rem] flex-col overflow-hidden rounded-xl bg-[#2c2e30] p-4 shadow-lg sm:p-6 md:h-[35rem] md:min-h-0 md:w-[40rem] md:p-10">
        <Header />

        <div className="mt-4 flex-1 min-h-0 overflow-y-auto pr-1">
          {status === 'ready' && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}

          {status === 'active' && currentQuestion && secondsRemaining !== null && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />

              <Question
                question={currentQuestion}
                dispatch={dispatch}
                answer={answer}
              />

              <Footer>
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
              </Footer>

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </>
          )}

          {status === 'finished' && (
            <FinishScreen dispatch={dispatch} scores={scores} />
          )}
        </div>
      </div>
    </div>
  )
}
