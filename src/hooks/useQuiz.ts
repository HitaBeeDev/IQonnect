import { useEffect, useReducer } from 'react'
import type { Reducer } from 'react'
import { questions as quizQuestions } from '../data/questions'
import {
  calcProgressPercent,
  formatTime,
  getDominantIntelligence,
} from '../lib/utils'
import type { QuizAction, QuizState } from '../types/quiz'

export const SECS_PER_QUESTION = 40

const initialState: QuizState = {
  questions: [],
  index: 0,
  answer: null,
  secondsRemaining: null,
  scores: {
    logical: 0,
    emotional: 0,
    intrapersonal: 0,
  },
  status: 'ready',
}

const reducer: Reducer<QuizState, QuizAction> = (
  state: QuizState,
  action: QuizAction,
): QuizState => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      }

    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }

    case 'newAnswer': {
      const selectedKey = action.payload
      const currentQuestion = state.questions[state.index]

      if (!currentQuestion) {
        return state
      }

      const selectedOption = currentQuestion.options[selectedKey]

      if (!selectedOption) {
        return state
      }

      const updatedScores = { ...state.scores }
      updatedScores[selectedOption.intelligence] += selectedOption.score

      return {
        ...state,
        answer: selectedKey,
        scores: updatedScores,
      }
    }

    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
      }

    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null }

    case 'finish':
      return {
        ...state,
        status: 'finished',
      }

    case 'tick':
      if (state.secondsRemaining === null) {
        return state
      }

      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining <= 1 ? 'finished' : state.status,
      }

    default:
      throw new Error('Action Unrecognized')
  }
}

export function useQuiz() {
  const [{ questions, status, index, answer, secondsRemaining, scores }, dispatch] =
    useReducer<Reducer<QuizState, QuizAction>>(reducer, initialState)

  const numQuestions = questions.length
  const progressPercent = calcProgressPercent(index, numQuestions, answer !== null)
  const formattedTime =
    secondsRemaining === null ? null : formatTime(secondsRemaining)
  const dominantIntelligence = getDominantIntelligence(scores)
  const isLastQuestion = index === numQuestions - 1

  useEffect(() => {
    dispatch({ type: 'dataReceived', payload: quizQuestions })
  }, [dispatch])

  return {
    questions,
    status,
    index,
    answer,
    secondsRemaining,
    scores,
    numQuestions,
    progressPercent,
    formattedTime,
    dominantIntelligence,
    isLastQuestion,
    dispatch,
  }
}
