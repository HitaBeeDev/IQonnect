import type { Dispatch, ReactNode } from 'react'
import { QuizDispatchContext } from '../context/quizDispatchContext'
import type { QuizAction } from '../types/quiz'

interface QuizDispatchProviderProps {
  children: ReactNode
  dispatch: Dispatch<QuizAction>
}

export default function QuizDispatchProvider({
  children,
  dispatch,
}: QuizDispatchProviderProps) {
  return (
    <QuizDispatchContext.Provider value={dispatch}>
      {children}
    </QuizDispatchContext.Provider>
  )
}
