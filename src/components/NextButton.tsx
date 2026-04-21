import { useEffect, useRef } from 'react'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import type { OptionKey } from '../types/quiz'

interface NextButtonProps {
  answer: OptionKey | null
  isLastQuestion: boolean
}

export default function NextButton({
  answer,
  isLastQuestion,
}: NextButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dispatch = useQuizDispatch()

  useEffect(() => {
    if (answer !== null) {
      buttonRef.current?.focus()
    }
  }, [answer])

  if (answer === null) return null

  const btnClass =
    'flex h-11 w-full items-center justify-center rounded-xl bg-[#8b5cf6] text-center text-xs font-semibold text-white transition-colors duration-200 hover:bg-[#7c3aed] focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f17] sm:w-20'

  return (
    <div className="mt-9 flex justify-stretch sm:justify-end">
      {!isLastQuestion ? (
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
