import type { Dispatch } from 'react'
import type {
  OptionKey,
  Question as QuizQuestion,
  QuizAction,
  QuizOption,
} from '../types/quiz'

interface OptionsProps {
  question: QuizQuestion
  dispatch: Dispatch<QuizAction>
  answer: OptionKey | null
}

export default function Options({ question, dispatch, answer }: OptionsProps) {
  return (
    <div className="mt-4 flex flex-col gap-3 w-full">
      {(Object.entries(question.options) as [OptionKey, QuizOption][]).map(([key, option]) => (
        <button
          className={`text-sm tracking-normal leading-6 text-[#F5F5F5] p-2 md:p-0 h-[4rem] md:h-[2.2rem] w-full rounded-md border
            border-[#929292] 
        ${answer === key ? 'bg-[#929292] text-[#1D1F21]' : ''} 
        ${
          answer !== null
            ? 'cursor-not-allowed opacity-60'
            : 'hover:bg-[#444648] cursor-pointer transition-all duration-500'
        }
      `}
          key={key}
          onClick={() => dispatch({ type: 'newAnswer', payload: key })}
          disabled={answer !== null}
        >
          {option.text}
        </button>
      ))}
    </div>
  )
}
