import type { Dispatch } from 'react'
import type { OptionKey, Question as QuizQuestion, QuizAction } from '../types/quiz'
import Options from './Options'

interface QuestionProps {
  question: QuizQuestion
  dispatch: Dispatch<QuizAction>
  answer: OptionKey | null
}

export default function Question({ question, dispatch, answer }: QuestionProps) {
  return (
    <div className="mt-3 flex flex-col justify-center items-center">
      <p className="text-sm tracking-normal leading-6 text-[#F5F5F5]">
        {question.question}
      </p>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}
