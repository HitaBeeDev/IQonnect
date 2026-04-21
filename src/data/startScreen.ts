import { Lightbulb, Sigma, UserRoundSearch } from 'lucide-react'

export const startScreenIntro =
  'Scenario-based questions across three intelligence domains — no tricks, just honest situations that reveal how you think.'

export const startScreenNote =
  'Each answer is final and cannot be changed. Manage your time carefully.'

export const intelligenceTypes = [
  {
    icon: Sigma,
    label: 'Logical',
    description: 'Patterns, numbers, and sharp reasoning.',
  },
  {
    icon: Lightbulb,
    label: 'Emotional',
    description: 'Empathy, social awareness, and intuition.',
  },
  {
    icon: UserRoundSearch,
    label: 'Intrapersonal',
    description: 'Self-reflection, insight, and inner clarity.',
  },
] as const
