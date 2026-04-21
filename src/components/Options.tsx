import { useEffect } from 'react'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import type {
  OptionKey,
  Question as QuizQuestion,
  QuizOption,
} from '../types/quiz'
import { cn } from '../lib/utils'

interface OptionsProps {
  question: QuizQuestion
  answer: OptionKey | null
  labelledBy: string
  isLastQuestion: boolean
}

export default function Options({
  question,
  answer,
  labelledBy,
  isLastQuestion,
}: OptionsProps) {
  const dispatch = useQuizDispatch()
  const selectedOptionText = answer === null ? null : question.options[answer].text

  useEffect(() => {
    if (answer === null) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      dispatch({ type: isLastQuestion ? 'finish' : 'nextQuestion' })
    }, 250)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [answer, dispatch, isLastQuestion])

  return (
    <>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {answer === null
          ? ''
          : `Selected option ${answer.toUpperCase()}: ${selectedOptionText}`}
      </p>

      <ul
        className="mt-4 flex w-full flex-col gap-2.5 list-none p-0"
        role="list"
        aria-labelledby={labelledBy}
      >
        {(Object.entries(question.options) as [OptionKey, QuizOption][]).map(([key, option]) => (
          <li key={key}>
            <button
              className={cn(
                'flex min-h-[2.75rem] w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm leading-relaxed text-[#f0eeff] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f17]',
                answer === key
                  ? 'border-[#8b5cf6] bg-[#1e1535]'
                  : 'border-[#252538] bg-transparent',
                answer !== null && answer !== key
                  ? 'cursor-not-allowed opacity-40'
                  : '',
                answer === null
                  ? 'cursor-pointer hover:border-[#38384f] hover:bg-[#161620]'
                  : '',
              )}
              onClick={() => dispatch({ type: 'newAnswer', payload: key })}
              disabled={answer !== null}
            >
              <span
                className={cn(
                  'flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[0.65rem] font-semibold uppercase',
                  answer === key
                    ? 'border-[#8b5cf6] bg-[#8b5cf6] text-white'
                    : 'border-[#38384f] bg-[#161620] text-[#9490b0]',
                )}
                aria-hidden="true"
              >
                {answer === key ? '✓' : key}
              </span>

              <span className="flex-1 text-left">{option.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
