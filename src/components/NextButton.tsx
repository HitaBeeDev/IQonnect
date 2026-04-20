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
    <div className="flex justify-end mt-9">
      {index < numQuestions - 1 ? (
        <button
          className="w-20 text-xs font-medium h-8 rounded-md bg-[#FF6600]
        text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      ) : (
        <button
          className="w-20 text-xs font-medium h-8 rounded-md bg-[#FF6600]
        text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
          onClick={() => dispatch({ type: 'finish' })}
        >
          Finish
        </button>
      )}
    </div>
  )
}
