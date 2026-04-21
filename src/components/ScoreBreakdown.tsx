import { useEffect, useState } from 'react'
import { intelligenceMeta, totalPossibleScore } from '../data/scoreBreakdown'
import { cn, getDominantIntelligence } from '../lib/utils'
import type { IntelligenceType, Scores } from '../types/quiz'

interface ScoreBreakdownProps {
  scores: Scores
}

export default function ScoreBreakdown({ scores }: ScoreBreakdownProps) {
  const dominantIntelligence = getDominantIntelligence(scores)
  const [animateBars, setAnimateBars] = useState(false)

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setAnimateBars(true)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="mt-8 w-full rounded-xl border border-[#444648] bg-[#242628] p-4">
      <h3 className="text-sm font-semibold tracking-wide text-[#f5f5f5]">
        Score Breakdown
      </h3>

      <div className="mt-4 space-y-4">
        {(Object.entries(scores) as [IntelligenceType, number][]).map(
          ([intelligence, score]) => {
            const percentage = Math.round((score / totalPossibleScore) * 100)
            const isDominant = intelligence === dominantIntelligence
            const meta = intelligenceMeta[intelligence]

            return (
              <div
                key={intelligence}
                className={cn(
                  'rounded-lg border border-transparent px-3 py-3 transition-colors',
                  isDominant ? 'border-[#6a6d70] bg-[#2b2e31]' : '',
                )}
              >
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <div className="flex min-w-0 flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-[#f5f5f5]">
                      {meta.label}
                    </span>
                    {isDominant ? (
                      <span className="text-xs font-semibold text-[#feffc2]">
                        ✓ Top
                      </span>
                    ) : null}
                  </div>

                  <span className="text-left text-xs font-medium text-[#c8c8c8] sm:text-right">
                    {percentage}% ({score}/{totalPossibleScore})
                  </span>
                </div>

                <div className={cn('h-3 w-full overflow-hidden rounded-full', meta.trackClass)}>
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-500',
                      meta.accentClass,
                      isDominant ? 'brightness-110 shadow-[0_0_12px_rgba(255,255,255,0.12)]' : '',
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
