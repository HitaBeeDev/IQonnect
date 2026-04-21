import { questions } from './questions'
import type { IntelligenceType } from '../types/quiz'

export const intelligenceMeta: Record<
  IntelligenceType,
  { label: string; accentClass: string; trackClass: string }
> = {
  logical: {
    label: 'Logical',
    accentClass: 'bg-[#ff9d32] text-[#ffe2c2]',
    trackClass: 'bg-[#4a3420]',
  },
  emotional: {
    label: 'Emotional',
    accentClass: 'bg-[#59c3c3] text-[#d9ffff]',
    trackClass: 'bg-[#1d4c4c]',
  },
  intrapersonal: {
    label: 'Intrapersonal',
    accentClass: 'bg-[#9ad05d] text-[#efffdc]',
    trackClass: 'bg-[#33461c]',
  },
}

export const totalPossibleScore = questions.reduce((total, question) => {
  const maxQuestionScore = Math.max(
    ...Object.values(question.options).map((option) => option.score),
  )

  return total + maxQuestionScore
}, 0)
