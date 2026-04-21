import { useEffect, useRef } from 'react'
import { intelligenceTypes, startScreenIntro, startScreenNote } from '../data/startScreen'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import { SECS_PER_QUESTION } from '../hooks/useQuiz'
import StartScreenStats from './StartScreenStats'

interface StartScreenProps {
  numQuestions: number
}

export default function StartScreen({ numQuestions }: StartScreenProps) {
  const startButtonRef = useRef<HTMLButtonElement>(null)
  const dispatch = useQuizDispatch()

  useEffect(() => {
    startButtonRef.current?.focus()
  }, [])

  const durationMinutes = Math.ceil((numQuestions * SECS_PER_QUESTION) / 60)

  return (
    <div className="flex flex-col gap-5 py-1">
      <p className="text-sm leading-relaxed text-[#9490b0]">
        {startScreenIntro}
      </p>

      <StartScreenStats
        numQuestions={numQuestions}
        durationMinutes={durationMinutes}
      />

      <div className="rounded-xl bg-[#161620] p-4 ring-1 ring-[#252538]">
        <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#5c5978]">
          Intelligence Types
        </p>

        <div className="mt-3 space-y-3">
          {intelligenceTypes.map(({ icon: Icon, label, description }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#8b5cf6]/10">
                <Icon size={14} className="text-[#8b5cf6]" />
              </div>
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2">
                <span className="text-sm font-medium text-[#f0eeff]">{label}</span>
                <span className="text-xs text-[#5c5978]">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-[#5c5978]">{startScreenNote}</p>

      <button
        ref={startButtonRef}
        className="h-11 w-full rounded-xl bg-[#8b5cf6] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#7c3aed] focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f17]"
        onClick={() => dispatch({ type: 'start' })}
      >
        Begin Quiz
      </button>
    </div>
  )
}
