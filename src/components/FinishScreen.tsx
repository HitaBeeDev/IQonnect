import type { Dispatch, ReactNode } from 'react'
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
    <div>
      <h2 className="text-center mt-6 text-[#feffc2] font-semibold tracking-wide text-lg">
        Test Completed!
      </h2>

      <div className="mt-10 flex flex-col items-center">
        <p className="text-[0.8rem] md:text-lg text-[#e0e0e0]">
          Your highest-performing intelligence type is
        </p>

        <p className="text-[#ff9d32] mt-2 text-md md:text-lg font-bold capitalize">
          {bestIntelligence}
        </p>

        <p className="text-sm mt-5 text-[#c8c8c8] tracking-wide">
          {resultText}
        </p>

        <ScoreBreakdown scores={scores} />
      </div>

      <div className="w-full flex justify-end">
        <button
          className="mt-10 w-44 text-xs font-medium h-8 rounded-md bg-[#FF6600]
    text-center flex items-center justify-center text-[#FFFFFF] hover:bg-[#fe7511] transition-all duration-500"
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  )
}
