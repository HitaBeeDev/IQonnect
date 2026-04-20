import type { Dispatch } from 'react'
import type { QuizAction } from '../types/quiz'

interface StartScreenProps {
  numQuestions: number
  dispatch: Dispatch<QuizAction>
}

export default function StartScreen({
  numQuestions,
  dispatch,
}: StartScreenProps) {
  return (
    <div>
      <p className="mt-4 text-sm leading-6 tracking-normal text-[#F5F5F5] md:mt-7">
        IQonnect is an engaging and insightful test app designed to reveal which
        type of intelligence shines brightest within you. Whether it&rsquo;s
        Intrapersonal, Logical, or Emotional Intelligence (EQ), IQonnect guides
        you through thought-provoking questions to help you understand your
        mental strengths and how they shape your thinking, problem-solving, and
        interactions. Discover your unique cognitive edge and unlock your full
        potential!
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 text-[#e0e0e0] sm:flex-row sm:justify-center sm:gap-7">
        <p
          className="flex h-11 w-full max-w-48 items-center justify-center rounded-md bg-[#444648] text-center text-xs font-normal"
        >
          Total Questions: {numQuestions}
        </p>

        <p
          className="flex h-11 w-full max-w-48 items-center justify-center rounded-md bg-[#444648] text-center text-xs font-normal"
        >
          Duration: 10 Minutes
        </p>
      </div>

      <p className="mt-7 text-xs font-medium text-[#ff983f]">
        Note: You can select an option only once, and it cannot be changed.
        Additionally, please manage your time carefully.
      </p>

      <div className="mt-10 flex justify-stretch sm:mt-14 sm:justify-end">
        <button
          className="flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] sm:w-48"
          onClick={() => dispatch({ type: 'start' })}
        >
          Let’s Discover Together
        </button>
      </div>
    </div>
  )
}
