import { PartyPopper } from 'lucide-react'
import { results } from '../data/results'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import type { Scores } from '../types/quiz'
import { getDominantIntelligence } from '../lib/utils'
import ScoreBreakdown from './ScoreBreakdown'

interface FinishScreenProps {
  scores: Scores
}

export default function FinishScreen({ scores }: FinishScreenProps) {
  const dispatch = useQuizDispatch()
  const bestIntelligenceKey = getDominantIntelligence(scores)
  const result = results[bestIntelligenceKey]

  return (
    <div className="pb-1">
      <div className="mt-3 flex items-center justify-center gap-2 text-[#feffc2] md:mt-6">
        <PartyPopper size={18} />
        <h2 className="text-center text-lg font-semibold tracking-wide">
          Test Completed!
        </h2>
      </div>

      <div
        className="mt-6 flex flex-col items-center md:mt-10"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="text-center text-[0.8rem] text-[#e0e0e0] md:text-lg">
          Your highest-performing intelligence type is
        </p>

        <p className="animate-fade-in mt-2 text-center text-2xl font-bold capitalize leading-tight text-[#ff9d32] md:text-3xl">
          {result.label}
        </p>

        <ScoreBreakdown scores={scores} />

        <p className="mt-6 text-[0.92rem] leading-7 tracking-wide text-[#c8c8c8]">
          {result.description}
        </p>
      </div>

      <div className="mt-8 h-px w-full bg-[#444648] sm:mt-10" />

      <div className="flex w-full justify-start">
        <button
          className="mt-6 flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] focus-visible:ring-2 focus-visible:ring-[#FF6600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c2e30] sm:w-44"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  )
}
