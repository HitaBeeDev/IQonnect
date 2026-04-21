import { createContext } from 'react'
import type { Dispatch } from 'react'
import type { QuizAction } from '../types/quiz'

export const QuizDispatchContext = createContext<Dispatch<QuizAction> | null>(
  null,
)
