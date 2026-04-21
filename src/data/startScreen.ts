import { Lightbulb, Sigma, UserRoundSearch } from 'lucide-react'

export const startScreenIntro =
  'IQonnect is an engaging and insightful test app designed to reveal which type of intelligence shines brightest within you. Whether it’s Intrapersonal, Logical, or Emotional Intelligence (EQ), IQonnect guides you through thought-provoking questions to help you understand your mental strengths and how they shape your thinking, problem-solving, and interactions. Discover your unique cognitive edge and unlock your full potential!'

export const startScreenNote =
  'You can select an option only once, and it cannot be changed. Additionally, please manage your time carefully.'

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
