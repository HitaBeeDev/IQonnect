import type { Dispatch } from 'react'
import type { OptionKey, Question as QuizQuestion, QuizAction } from '../types/quiz'
import Options from './Options'

interface QuestionProps {
  question: QuizQuestion
  dispatch: Dispatch<QuizAction>
  answer: OptionKey | null
  index: number
  numQuestions: number
}

export default function Question({
  question,
  dispatch,
  answer,
  index,
  numQuestions,
}: QuestionProps) {
  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <p className="w-full text-xs font-semibold uppercase tracking-[0.16em] text-[#929292]">
        Question {index + 1} / {numQuestions}
      </p>

      <p className="mt-2 text-sm leading-6 tracking-normal text-[#F5F5F5] md:text-base">
        {question.question}
      </p>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}
