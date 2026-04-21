import { results } from '../data/results'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import type { IntelligenceType, Scores } from '../types/quiz'
import ScoreBreakdown from './ScoreBreakdown'

interface FinishScreenProps {
  scores: Scores
  dominantIntelligence: IntelligenceType
}

export default function FinishScreen({
  scores,
  dominantIntelligence,
}: FinishScreenProps) {
  const dispatch = useQuizDispatch()
  const result = results[dominantIntelligence]

  return (
    <div className="flex flex-col gap-5 pb-1 pt-1">
      <div className="flex justify-center">
        <span className="rounded-full bg-[#8b5cf6]/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-[#8b5cf6]">
          Quiz Complete
        </span>
      </div>

      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="flex flex-col items-center gap-2 text-center"
      >
        <p className="text-xs text-[#5c5978]">Your dominant intelligence type</p>
        <h2 className="animate-fade-in text-2xl font-bold text-[#c4b5fd] md:text-3xl">
          {result.label}
        </h2>
      </div>

      <p className="text-center text-sm leading-relaxed text-[#9490b0]">
        {result.description}
      </p>

      <ScoreBreakdown
        scores={scores}
        dominantIntelligence={dominantIntelligence}
      />

      <div className="h-px w-full bg-[#252538]" />

      <button
        className="h-11 w-full rounded-xl bg-[#8b5cf6] text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#7c3aed] focus-visible:ring-2 focus-visible:ring-[#8b5cf6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f17] sm:w-44"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </div>
  )
}
