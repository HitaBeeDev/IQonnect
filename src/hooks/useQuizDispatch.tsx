import {
  createContext,
  useContext,
} from 'react'
import type { Dispatch, ReactNode } from 'react'
import type { QuizAction } from '../types/quiz'

const QuizDispatchContext = createContext<Dispatch<QuizAction> | null>(null)

interface QuizDispatchProviderProps {
  children: ReactNode
  dispatch: Dispatch<QuizAction>
}

export function QuizDispatchProvider({
  children,
  dispatch,
}: QuizDispatchProviderProps) {
  return (
    <QuizDispatchContext.Provider value={dispatch}>
      {children}
    </QuizDispatchContext.Provider>
  )
}

export function useQuizDispatch() {
  const dispatch = useContext(QuizDispatchContext)

  if (dispatch === null) {
    throw new Error('useQuizDispatch must be used within a QuizDispatchProvider')
  }

  return dispatch
}
