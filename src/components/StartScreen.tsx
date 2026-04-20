import type { Dispatch } from 'react'
import type { QuizAction } from '../types/quiz'

type StartScreenProps = {
  numQuestions: number
  dispatch: Dispatch<QuizAction>
}

export default function StartScreen({
  numQuestions,
  dispatch,
}: StartScreenProps) {
  return (
    <div className="">
      <p className="mt-7 text-sm tracking-normal leading-6 text-[#F5F5F5]">
        IQonnect is an engaging and insightful test app designed to reveal which
        type of intelligence shines brightest within you. Whether it&rsquo;s
        Intrapersonal, Logical, or Emotional Intelligence (EQ), IQonnect guides
        you through thought-provoking questions to help you understand your
        mental strengths and how they shape your thinking, problem-solving, and
        interactions. Discover your unique cognitive edge and unlock your full
        potential!
      </p>

      <div className="flex flex-row justify-center items-center gap-7 text-[#e0e0e0] mt-8">
        <p
          className="w-48 text-xs font-normal h-8 rounded-md bg-[#444648]
        text-center flex items-center justify-center"
        >
          Total Questions: {numQuestions}
        </p>

        <p
          className="w-48 text-xs font-normal h-8 rounded-md bg-[#444648]
        text-center flex items-center justify-center"
        >
          Duration: 10 Minutes
        </p>
      </div>

      <p className="text-[#ff983f] text-xs font-medium mt-7">
        Note: You can select an option only once, and it cannot be changed.
        Additionally, please manage your time carefully.
      </p>

      <div className="flex justify-end mt-[6rem]">
        <button
          className="w-48 text-xs font-medium h-8 rounded-md bg-[#FF6600]
        text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
          onClick={() => dispatch({ type: 'start' })}
        >
          Let’s Discover Together
        </button>
      </div>
    </div>
  )
}
