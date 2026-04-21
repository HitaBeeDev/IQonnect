import type { OptionKey } from '../types/quiz'
import { calcProgressPercent } from '../lib/utils'

interface ProgressProps {
  index: number
  numQuestions: number
  answer: OptionKey | null
}

export default function Progress({
  index,
  numQuestions,
  answer,
}: ProgressProps) {
  const progressPercentage = calcProgressPercent(
    index,
    numQuestions,
    answer !== null,
  )

  return (
    <div className="w-full mt-4 flex flex-col justify-start items-start">
      <div className="w-full bg-[#444648] rounded-full h-[0.6rem] overflow-hidden">
        <div
          className="h-full bg-[#FF6600]/70 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
          role="progressbar"
          aria-valuenow={progressPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Quiz progress"
        ></div>
      </div>

      <p className="text-xs text-left text-[#929292] mt-2">
        Question {index + 1} of {numQuestions}
      </p>
    </div>
  )
}
