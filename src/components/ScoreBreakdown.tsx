import { useEffect, useState } from 'react'
import { intelligenceMeta, totalPossibleScore } from '../data/scoreBreakdown'
import { cn } from '../lib/utils'
import type { IntelligenceType, Scores } from '../types/quiz'

interface ScoreBreakdownProps {
  scores: Scores
  dominantIntelligence: IntelligenceType
}

export default function ScoreBreakdown({
  scores,
  dominantIntelligence,
}: ScoreBreakdownProps) {
  const [animateBars, setAnimateBars] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimateBars(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="mt-2 w-full rounded-xl bg-[#161620] p-4 ring-1 ring-[#252538]">
      <h3 className="text-[0.65rem] font-semibold uppercase tracking-widest text-[#5c5978]">
        Score Breakdown
      </h3>

      <div className="mt-3 space-y-3">
        {(Object.entries(scores) as [IntelligenceType, number][]).map(
          ([intelligence, score]) => {
            const percentage = Math.round((score / totalPossibleScore) * 100)
            const isDominant = intelligence === dominantIntelligence
            const meta = intelligenceMeta[intelligence]

            return (
              <div
                key={intelligence}
                className={cn(
                  'rounded-lg px-3 py-2.5 transition-colors',
                  isDominant
                    ? 'bg-[#1e1535] ring-1 ring-[#8b5cf6]/30'
                    : 'bg-transparent',
                )}
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#f0eeff]">
                      {meta.label}
                    </span>
                    {isDominant && (
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#a78bfa]">
                        Top
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#5c5978]">
                    {percentage}%
                  </span>
                </div>

                <div className={cn('h-2 w-full overflow-hidden rounded-full', meta.trackClass)}>
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-700 ease-out',
                      meta.accentClass,
                    )}
                    style={{ width: animateBars ? `${percentage}%` : '0%' }}
                  />
                </div>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}
