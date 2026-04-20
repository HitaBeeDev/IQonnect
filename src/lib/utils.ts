import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { IntelligenceType, Scores } from '../types/quiz'

export function cn(...classes: string[]) {
  return twMerge(clsx(classes))
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
}

export function getDominantIntelligence(scores: Scores): IntelligenceType {
  return (Object.entries(scores) as [IntelligenceType, number][])
    .reduce((highest, current) => (highest[1] > current[1] ? highest : current))[0]
}

export function calcProgressPercent(
  index: number,
  total: number,
  answered: boolean,
): number {
  if (total <= 0) {
    return 0
  }

  return ((index + Number(answered)) / total) * 100
}
