import type { Dispatch } from 'react'
import type {
  OptionKey,
  Question as QuizQuestion,
  QuizAction,
  QuizOption,
} from '../types/quiz'
import { cn } from '../lib/utils'

interface OptionsProps {
  question: QuizQuestion
  dispatch: Dispatch<QuizAction>
  answer: OptionKey | null
}

export default function Options({ question, dispatch, answer }: OptionsProps) {
  return (
    <div className="mt-4 flex w-full flex-col gap-3">
      {(Object.entries(question.options) as [OptionKey, QuizOption][]).map(([key, option]) => (
        <button
          className={cn(
            'min-h-[2.75rem] w-full rounded-md border border-[#929292] px-3 py-2 text-left text-xs leading-5 tracking-normal text-[#F5F5F5] sm:text-sm md:text-center',
            answer === key ? 'bg-[#929292] text-[#1D1F21]' : '',
            answer !== null
              ? 'cursor-not-allowed opacity-60'
              : 'cursor-pointer transition-all duration-500 hover:bg-[#444648]',
          )}
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
