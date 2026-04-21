import { useEffect } from 'react'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import { cn } from '../lib/utils'

const TIMER_WARNING_SECS = 30
const TIMER_CRITICAL_SECS = 10

interface TimerProps {
  secondsRemaining: number
  formattedTime: string | null
}

export default function Timer({
  secondsRemaining,
  formattedTime,
}: TimerProps) {
  const dispatch = useQuizDispatch()
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])

  const isWarning = secondsRemaining <= TIMER_WARNING_SECS
  const isUrgent = secondsRemaining <= TIMER_CRITICAL_SECS

  return (
    <div
      role="timer"
      aria-live={isWarning ? 'assertive' : 'polite'}
      aria-label={`Time remaining: ${formattedTime ?? '00:00'}`}
      className={cn(
        'mt-5 text-xs font-medium text-[#5c5978] transition-colors duration-300',
        isWarning && !isUrgent ? 'text-[#f59e0b]' : '',
        isUrgent ? 'animate-soft-pulse text-[#ef4444]' : '',
      )}
    >
      Time remaining — {formattedTime ?? '00:00'}
    </div>
  )
}
