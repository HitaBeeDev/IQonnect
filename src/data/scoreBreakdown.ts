import { questions } from './questions'
import type { IntelligenceType } from '../types/quiz'

export const intelligenceMeta: Record<
  IntelligenceType,
  { label: string; accentClass: string; trackClass: string }
> = {
  logical: {
    label: 'Logical',
    accentClass: 'bg-[#8b5cf6]',
    trackClass: 'bg-[#1c1c2e]',
  },
  emotional: {
    label: 'Emotional',
    accentClass: 'bg-[#a78bfa]',
    trackClass: 'bg-[#1c1c2e]',
  },
  intrapersonal: {
    label: 'Intrapersonal',
    accentClass: 'bg-[#c4b5fd]',
    trackClass: 'bg-[#1c1c2e]',
  },
}

export const totalPossibleScore = questions.reduce((total, question) => {
  const maxQuestionScore = Math.max(
    ...Object.values(question.options).map((option) => option.score),
  )

  return total + maxQuestionScore
}, 0)
