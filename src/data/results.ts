import type { IntelligenceType } from '../types/quiz'

export type IntelligenceResult = {
  label: string
  description: string
}

export const results: Record<IntelligenceType, IntelligenceResult> = {
  logical: {
    label: 'Logical-Mathematical Intelligence',
    description:
      "Your test results confirm it-you’re basically a Human Algorithm! Numbers, patterns, and logic bow before your mighty brain, while the rest of us are still trying to remember our WiFi passwords. You probably solve problems for fun, outsmart calculators, and find loopholes in board game rules just for the thrill of it. Whether it’s cracking codes, predicting trends, or proving your friends wrong with undeniable logic, your brain was built for big things. So go ahead-conquer the stock market, invent time travel, or at least keep dazzling people with your ridiculously sharp reasoning skills!",
  },
  emotional: {
    label: 'Emotional intelligence (EI)',
    description:
      "Your test results confirm it-you’re basically a Human Emotion Decoder! Feelings, vibes, and unspoken tensions don’t stand a chance against your superpowered intuition, while the rest of us are still figuring out if that text was sarcastic. You probably read people like open books, sense drama before it explodes, and give advice so spot-on that even therapists would take notes. Whether it’s calming chaos, hyping up friends, or knowing exactly when someone needs chocolate, your emotional radar is next-level. So go ahead-become a world-class negotiator, start a kindness empire, or at least keep amazing people with your uncanny ability to know exactly what they’re thinking!",
  },
  intrapersonal: {
    label: 'Intrapersonal intelligence',
    description:
      "Your test results confirm it-you’re basically a Human Introspection Machine! Self-awareness, deep thoughts, and personal growth are your playground, while the rest of us are still trying to figure out why we walked into the kitchen. You probably analyze your own emotions like a scientist, reflect on life like a philosopher, and have epiphanies in the shower that could change the world. Whether it’s setting meaningful goals, understanding yourself on a whole new level, or giving TED Talk-worthy life advice (even if just to yourself), your mind is your greatest asset. So go ahead-write that book, master mindfulness, or at least keep blowing your own mind with your next big realization!",
  },
}
