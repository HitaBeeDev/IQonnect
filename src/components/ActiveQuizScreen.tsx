import Footer from './Footer'
import NextButton from './NextButton'
import Progress from './Progress'
import Question from './Question'
import Timer from './Timer'
import type { OptionKey, Question as QuizQuestion } from '../types/quiz'

interface ActiveQuizScreenProps {
  question: QuizQuestion
  answer: OptionKey | null
  index: number
  numQuestions: number
  secondsRemaining: number
  progressPercent: number
  formattedTime: string | null
  isLastQuestion: boolean
}

export default function ActiveQuizScreen({
  question,
  answer,
  index,
  numQuestions,
  secondsRemaining,
  progressPercent,
  formattedTime,
  isLastQuestion,
}: ActiveQuizScreenProps) {
  return (
    <>
      <Progress
        index={index}
        numQuestions={numQuestions}
        progressPercent={progressPercent}
      />

      <Question
        question={question}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />

      <Footer>
        <Timer
          secondsRemaining={secondsRemaining}
          formattedTime={formattedTime}
        />
      </Footer>

      <NextButton
        answer={answer}
        isLastQuestion={isLastQuestion}
      />
    </>
  )
}
