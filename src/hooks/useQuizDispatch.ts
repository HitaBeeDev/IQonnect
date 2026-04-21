import { useContext } from 'react'
import { QuizDispatchContext } from '../context/quizDispatchContext'

export function useQuizDispatch() {
  const dispatch = useContext(QuizDispatchContext)

  if (dispatch === null) {
    throw new Error('useQuizDispatch must be used within a QuizDispatchProvider')
  }

  return dispatch
}
