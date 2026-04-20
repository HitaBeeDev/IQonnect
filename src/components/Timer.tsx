import { useEffect } from 'react'
import type { Dispatch } from 'react'
import type { QuizAction } from '../types/quiz'
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

  return (
    <div className="text-xs font-medium mt-5 text-[#929292]">
      Your Remaining Time : {formatTime(secondsRemaining)}
    </div>
  )
}
