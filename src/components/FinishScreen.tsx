import type { Dispatch, ReactNode } from 'react'
import { PartyPopper } from 'lucide-react'
import type { IntelligenceType, QuizAction, Scores } from '../types/quiz'
import { getDominantIntelligence } from '../lib/utils'
import ScoreBreakdown from './ScoreBreakdown'

interface FinishScreenProps {
  dispatch: Dispatch<QuizAction>
  scores: Scores
}

export default function FinishScreen({
  dispatch,
  scores,
}: FinishScreenProps) {
  const intelligenceMapping: Record<IntelligenceType, string> = {
    logical: 'Logical-Mathematical Intelligence',
    emotional: 'Emotional intelligence (EI)',
    intrapersonal: 'Intrapersonal intelligence',
  }

  const resultTexts: Record<IntelligenceType, ReactNode> = {
    logical: (
      <>
        Your test results confirm it-you’re basically a{' '}
        <strong>Human Algorithm!</strong> Numbers, patterns, and logic bow
        before your mighty brain, while the rest of us are still trying to
        remember our WiFi passwords. You probably solve problems for fun,
        outsmart calculators, and find loopholes in board game rules just for
        the thrill of it. Whether it&rsquo;s cracking codes, predicting trends, or
        proving your friends wrong with undeniable logic, your brain was built
        for big things. So go ahead-conquer the stock market, invent time
        travel, or at least keep dazzling people with your ridiculously sharp
        reasoning skills!
      </>
    ),
    emotional: (
      <>
        Your test results confirm it-you’re basically a{' '}
        <strong>Human Emotion Decoder!</strong> Feelings, vibes, and unspoken
        tensions don’t stand a chance against your superpowered intuition, while
        the rest of us are still figuring out if that text was sarcastic. You
        probably read people like open books, sense drama before it explodes,
        and give advice so spot-on that even therapists would take notes.
        Whether it’s calming chaos, hyping up friends, or knowing exactly when
        someone needs chocolate, your emotional radar is next-level. So go
        ahead-become a world-class negotiator, start a kindness empire, or at
        least keep amazing people with your uncanny ability to know{" "}
        <em>exactly</em> what they’re thinking!
      </>
    ),
    intrapersonal: (
      <>
        Your test results confirm it-you’re basically a{' '}
        <strong>Human Introspection Machine!</strong> Self-awareness, deep
        thoughts, and personal growth are your playground, while the rest of us
        are still trying to figure out why we walked into the kitchen. You
        probably analyze your own emotions like a scientist, reflect on life
        like a philosopher, and have epiphanies in the shower that could change
        the world. Whether it’s setting meaningful goals, understanding yourself
        on a whole new level, or giving TED Talk-worthy life advice (even if
        just to yourself), your mind is your greatest asset. So go ahead-write
        that book, master mindfulness, or at least keep blowing your own mind
        with your next big realization!
      </>
    ),
  }

  const bestIntelligenceKey = getDominantIntelligence(scores)
  const bestIntelligence = intelligenceMapping[bestIntelligenceKey]
  const resultText = resultTexts[bestIntelligenceKey]

  return (
    <div className="pb-1">
      <div className="mt-3 flex items-center justify-center gap-2 text-[#feffc2] md:mt-6">
        <PartyPopper size={18} />
        <h2 className="text-center text-lg font-semibold tracking-wide">
          Test Completed!
        </h2>
      </div>

      <div className="mt-6 flex flex-col items-center md:mt-10">
        <p className="text-center text-[0.8rem] text-[#e0e0e0] md:text-lg">
          Your highest-performing intelligence type is
        </p>

        <p
          className="animate-fade-in mt-2 text-center text-2xl font-bold capitalize leading-tight text-[#ff9d32] md:text-3xl"
          aria-live="polite"
        >
          {bestIntelligence}
        </p>

        <ScoreBreakdown scores={scores} />

        <p className="mt-6 text-[0.92rem] leading-7 tracking-wide text-[#c8c8c8]">
          {resultText}
        </p>
      </div>

      <div className="mt-8 h-px w-full bg-[#444648] sm:mt-10" />

      <div className="flex w-full justify-start">
        <button
          className="mt-6 flex h-11 w-full items-center justify-center rounded-md bg-[#FF6600] text-center text-xs font-medium text-[#FFFFFF] transition-all duration-500 hover:bg-[#fe7511] focus-visible:ring-2 focus-visible:ring-[#FF6600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2c2e30] sm:w-44"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  )
}
