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
  labelledBy: string
}

export default function Options({
  question,
  dispatch,
  answer,
  labelledBy,
}: OptionsProps) {
  const selectedOptionText = answer === null ? null : question.options[answer].text

  return (
    <>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {answer === null
          ? ''
          : `Selected option ${answer.toUpperCase()}: ${selectedOptionText}`}
      </p>

      <ul
        className="mt-4 flex w-full flex-col gap-3 list-none p-0"
        role="list"
        aria-labelledby={labelledBy}
      >
      {(Object.entries(question.options) as [OptionKey, QuizOption][]).map(([key, option]) => (
        <li key={key}>
          <button
            className={cn(
              'flex min-h-[2.75rem] w-full items-center gap-3 rounded-md border border-[#929292] px-3 py-2 text-left text-sm leading-6 tracking-normal text-[#F5F5F5] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#FF6600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c2e30]',
              answer === key
                ? 'border-[#FF6600] bg-[#929292] text-[#1D1F21]'
                : '',
              answer !== null
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer hover:scale-[1.01] hover:bg-[#444648]',
            )}
            onClick={() => dispatch({ type: 'newAnswer', payload: key })}
            disabled={answer !== null}
          >
            <span
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold uppercase',
                answer === key
                  ? 'border-[#FF6600] bg-[#FF6600] text-[#1D1F21]'
                  : 'border-[#7c7f84] bg-[#343638] text-[#d7d7d7]',
              )}
              aria-hidden="true"
            >
              {answer === key ? (
                <span className="text-sm">✓</span>
              ) : (
                key
              )}
            </span>

            <span className="flex-1 text-left">{option.text}</span>

            {answer === key ? (
              <span className="text-xs font-semibold text-[#1D1F21]" aria-hidden="true">
                Selected
              </span>
            ) : null}
          </button>
        </li>
      ))}
      </ul>
    </>
  )
}
