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
    <div className="flex h-screen items-center justify-center bg-[#1D1F21]">
      <div className="h-full w-full rounded-xl bg-[#2c2e30] p-10 shadow-lg md:h-[35rem] md:w-[40rem]">
        <Header />

        <div>
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
