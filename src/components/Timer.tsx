import { useEffect } from 'react'
import { useQuizDispatch } from '../hooks/useQuizDispatch'
import { cn } from '../lib/utils'

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

  const isWarning = secondsRemaining <= 30
  const isUrgent = secondsRemaining <= 10

  return (
    <div
      role="timer"
      aria-live={isWarning ? 'assertive' : 'polite'}
      aria-label={`Time remaining: ${formattedTime ?? '00:00'}`}
      className={cn(
        'mt-5 text-xs font-medium text-[#969696] transition-colors duration-300',
        isWarning ? 'text-[#ff9d32]' : '',
        isUrgent ? 'animate-soft-pulse text-[#ff5c5c]' : '',
      )}
    >
      Your Remaining Time : {formattedTime ?? '00:00'}
    </div>
  )
}
