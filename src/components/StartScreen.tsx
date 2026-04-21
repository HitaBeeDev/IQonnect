import { useEffect, useRef } from 'react'
import type { Dispatch } from 'react'
import { Brain, Clock3, Lightbulb, Sigma, UserRoundSearch } from 'lucide-react'
import { SECS_PER_QUESTION } from '../hooks/useQuiz'
import type { QuizAction } from '../types/quiz'

interface StartScreenProps {
  numQuestions: number
  dispatch: Dispatch<QuizAction>
}

export default function StartScreen({
  numQuestions,
  dispatch,
}: StartScreenProps) {
  const startButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    startButtonRef.current?.focus()
  }, [])

  const durationMinutes = Math.ceil((numQuestions * SECS_PER_QUESTION) / 60)
  const intelligenceTypes = [
    {
      icon: Sigma,
      label: 'Logical',
      description: 'Patterns, numbers, and sharp reasoning.',
    },
    {
      icon: Lightbulb,
      label: 'Emotional',
      description: 'Empathy, social awareness, and intuition.',
    },
    {
      icon: UserRoundSearch,
      label: 'Intrapersonal',
      description: 'Self-reflection, insight, and inner clarity.',
    },
  ]

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

      <div className="mt-8 grid gap-3 text-[#e0e0e0] sm:grid-cols-2">
        <div className="flex min-h-[3.5rem] items-center gap-3 rounded-xl border border-[#4a4d51] bg-[#343638] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6600]/15 text-[#FF6600]">
            <Brain size={18} />
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#929292]">
              Total Questions
            </p>
            <p className="text-sm font-medium text-[#F5F5F5]">{numQuestions}</p>
          </div>
        </div>

        <div className="flex min-h-[3.5rem] items-center gap-3 rounded-xl border border-[#4a4d51] bg-[#343638] px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6600]/15 text-[#FF6600]">
            <Clock3 size={18} />
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#929292]">
              Duration
            </p>
            <p className="text-sm font-medium text-[#F5F5F5]">
              {durationMinutes} Minutes
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 rounded-xl border border-[#444648] bg-[#2a2c2e] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#feffc2]">
          Intelligence Types
        </p>

        <div className="mt-4 grid gap-3">
          {intelligenceTypes.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg border border-[#3f4245] bg-[#303234] px-3 py-3"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FF6600]/12 text-[#FF6600]">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-[#F5F5F5]">{label}</p>
                <p className="mt-1 text-xs leading-5 text-[#b5b5b5]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-start gap-3 rounded-lg border border-[#5a4325] bg-[#3a2d1f]/55 px-3 py-3 text-[#ffb15c]">
        <div className="mt-0.5 shrink-0">
          <Lightbulb size={16} />
        </div>
        <p className="text-xs font-medium leading-5">
          You can select an option only once, and it cannot be changed.
          Additionally, please manage your time carefully.
        </p>
      </div>

      <div className="mt-10 flex justify-stretch sm:mt-14 sm:justify-end">
        <button
          ref={startButtonRef}
          className="flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] focus-visible:ring-2 focus-visible:ring-[#FF6600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c2e30] sm:w-48"
          onClick={() => dispatch({ type: 'start' })}
        >
          Let's Discover Together
        </button>
      </div>
    </div>
  )
}
