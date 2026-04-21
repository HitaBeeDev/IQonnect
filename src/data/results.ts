import type { IntelligenceType } from '../types/quiz'

export type IntelligenceResult = {
  label: string
  description: string
}

export const results: Record<IntelligenceType, IntelligenceResult> = {
  logical: {
    label: 'Logical Intelligence',
    description:
      'Your mind runs on logic. You break down complexity with precision and spot patterns others miss.',
  },
  emotional: {
    label: 'Emotional Intelligence',
    description:
      "You understand people at a deep level. Your empathy and social awareness let you navigate what pure logic can't.",
  },
  intrapersonal: {
    label: 'Intrapersonal Intelligence',
    description:
      'You know yourself deeply. Your capacity for self-reflection translates into clarity that guides every decision.',
  },
}
