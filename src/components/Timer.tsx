import { useEffect } from 'react'
import type { Dispatch } from 'react'
import type { QuizAction } from '../types/quiz'
import { cn } from '../lib/utils'
import { formatTime } from '../lib/utils'

interface TimerProps {
  dispatch: Dispatch<QuizAction>
  secondsRemaining: number
}

export default function Timer({ dispatch, secondsRemaining }: TimerProps) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])

  const isWarning = secondsRemaining <= 30
  const isUrgent = secondsRemaining <= 10

  return (
    <div
      className={cn(
        'mt-5 text-xs font-medium text-[#929292] transition-colors duration-300',
        isWarning ? 'text-[#ff9d32]' : '',
        isUrgent ? 'animate-soft-pulse text-[#ff5c5c]' : '',
      )}
    >
      Your Remaining Time : {formatTime(secondsRemaining)}
    </div>
  )
}
