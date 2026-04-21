import { useEffect, useRef } from 'react'
import type { Dispatch } from 'react'
import type { OptionKey, QuizAction } from '../types/quiz'

interface NextButtonProps {
  dispatch: Dispatch<QuizAction>
  answer: OptionKey | null
  index: number
  numQuestions: number
}

export default function NextButton({
  dispatch,
  answer,
  index,
  numQuestions,
}: NextButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (answer !== null) {
      buttonRef.current?.focus()
    }
  }, [answer])

  if (answer === null) return null

  const btnClass =
    'flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c2e30] sm:w-20'

  return (
    <div className="mt-9 flex justify-stretch sm:justify-end">
      {index < numQuestions - 1 ? (
        <button
          ref={buttonRef}
          className={btnClass}
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      ) : (
        <button
          ref={buttonRef}
          className={btnClass}
          onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
      )}
    </div>
  )
}
