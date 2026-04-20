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
  if (answer === null) return null

  return (
    <div className="mt-9 flex justify-stretch sm:justify-end">
      {index < numQuestions - 1 ? (
        <button
          className="flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] sm:w-20"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      ) : (
        <button
          className="flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] sm:w-20"
          onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
      )}
    </div>
  )
}
