export type IntelligenceType = 'logical' | 'emotional' | 'intrapersonal'

export type OptionKey = 'a' | 'b' | 'c' | 'd'

export type QuizOption = {
  text: string
  intelligence: IntelligenceType
  score: number
}

export type Question = {
  id: number
  question: string
  options: Record<OptionKey, QuizOption>
}

export type Scores = Record<IntelligenceType, number>

export type QuizStatus = 'ready' | 'active' | 'finished'

export type QuizState = {
  questions: Question[]
  index: number
  answer: OptionKey | null
  secondsRemaining: number | null
  scores: Scores
  status: QuizStatus
}

export type QuizAction =
  | { type: 'dataReceived'; payload: Question[] }
  | { type: 'start' }
  | { type: 'newAnswer'; payload: OptionKey }
  | { type: 'restart' }
  | { type: 'nextQuestion' }
  | { type: 'finish' }
  | { type: 'tick' }
