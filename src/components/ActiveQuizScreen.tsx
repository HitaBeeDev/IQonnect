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
}

export default function ActiveQuizScreen({
  question,
  answer,
  index,
  numQuestions,
  secondsRemaining,
}: ActiveQuizScreenProps) {
  return (
    <>
      <Progress index={index} numQuestions={numQuestions} answer={answer} />

      <Question
        question={question}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />

      <Footer>
        <Timer secondsRemaining={secondsRemaining} />
      </Footer>

      <NextButton
        answer={answer}
        numQuestions={numQuestions}
        index={index}
      />
    </>
  )
}
