import type { Dispatch } from 'react'
import Footer from './Footer'
import NextButton from './NextButton'
import Progress from './Progress'
import Question from './Question'
import Timer from './Timer'
import type { OptionKey, Question as QuizQuestion, QuizAction } from '../types/quiz'

interface ActiveQuizScreenProps {
  question: QuizQuestion
  dispatch: Dispatch<QuizAction>
  answer: OptionKey | null
  index: number
  numQuestions: number
  secondsRemaining: number
}

export default function ActiveQuizScreen({
  question,
  dispatch,
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
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
      />

      <Footer>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
      </Footer>

      <NextButton
        dispatch={dispatch}
        answer={answer}
        numQuestions={numQuestions}
        index={index}
      />
    </>
  )
}
