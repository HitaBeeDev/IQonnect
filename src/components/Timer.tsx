import { useEffect } from 'react'
import type { Dispatch } from 'react'
import type { QuizAction } from '../types/quiz'

interface TimerProps {
  dispatch: Dispatch<QuizAction>
  secondsRemaining: number
}

export default function Timer({ dispatch, secondsRemaining }: TimerProps) {
  const minutes = Math.floor(secondsRemaining / 60)
  const seconds = secondsRemaining % 60

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)

    return () => clearInterval(id)
  }, [dispatch])

  return (
    <div className="text-xs font-medium mt-5 text-[#929292]">
      Your Remaining Time : {minutes < 10 && '0'}
      {minutes}: {seconds < 10 && '0'}
      {seconds}
    </div>
  )
}
