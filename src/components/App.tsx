import { useEffect, useReducer } from 'react'
import data from '../data/questions.json'
import type {
  IntelligenceType,
  OptionKey,
  Question as QuizQuestion,
  QuizAction,
  QuizState,
} from '../types/quiz'
import FinishScreen from './FinishScreen'
import Footer from './Footer'
import Header from './Header'
import NextButton from './NextButton'
import Progress from './Progress'
import Question from './Question'
import StartScreen from './StartScreen'
import Timer from './Timer'

const SECS_PER_QUESTION = 20

type RawQuestion = {
  id: number
  question: string
  options: Record<
    OptionKey,
    {
      text: string
      intelligence: string
      score: number
    }
  >
}

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

function normalizeQuestions(rawQuestions: RawQuestion[]): QuizQuestion[] {
  return rawQuestions.map((question) => ({
    ...question,
    options: Object.fromEntries(
      (Object.entries(question.options) as [OptionKey, RawQuestion['options'][OptionKey]][]).map(
        ([key, option]) => [
          key,
          {
            ...option,
            intelligence: option.intelligence.toLowerCase() as IntelligenceType,
          },
        ],
      ),
    ) as QuizQuestion['options'],
  }))
}

function reducer(state: QuizState, action: QuizAction): QuizState {
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

export default function App() {
  const [{ questions, status, index, answer, secondsRemaining, scores }, dispatch] =
    useReducer(reducer, initialState)

  const numQuestions = questions.length
  const currentQuestion = questions[index]

  useEffect(() => {
    const normalizedQuestions = normalizeQuestions((data as { questions: RawQuestion[] }).questions)
    dispatch({ type: 'dataReceived', payload: normalizedQuestions })
  }, [])

  return (
    <div
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className="flex h-screen items-center justify-center bg-[#1D1F21]"
    >
      <div className="h-full w-full rounded-xl bg-[#2c2e30] p-10 shadow-lg md:h-[35rem] md:w-[40rem]">
        <Header />

        <div>
          {status === 'ready' && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}

          {status === 'active' && currentQuestion && secondsRemaining !== null && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />

              <Question
                question={currentQuestion}
                dispatch={dispatch}
                answer={answer}
              />

              <Footer>
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
              </Footer>

              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </>
          )}

          {status === 'finished' && (
            <FinishScreen dispatch={dispatch} scores={scores} />
          )}
        </div>
      </div>
    </div>
  )
}
