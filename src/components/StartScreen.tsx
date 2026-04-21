import { useEffect, useRef } from 'react'
import type { Dispatch } from 'react'
import { Lightbulb } from 'lucide-react'
import { intelligenceTypes, startScreenIntro, startScreenNote } from '../data/startScreen'
import { SECS_PER_QUESTION } from '../hooks/useQuiz'
import type { QuizAction } from '../types/quiz'
import StartScreenStats from './StartScreenStats'

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

  return (
    <div>
      <p className="mt-4 text-sm leading-6 tracking-normal text-[#F5F5F5] md:mt-7">
        {startScreenIntro}
      </p>

      <StartScreenStats
        numQuestions={numQuestions}
        durationMinutes={durationMinutes}
      />

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
          {startScreenNote}
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
