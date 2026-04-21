import type { OptionKey, Question as QuizQuestion } from '../types/quiz'
import Options from './Options'

interface QuestionProps {
  question: QuizQuestion
  answer: OptionKey | null
  index: number
  numQuestions: number
}

export default function Question({
  question,
  answer,
  index,
  numQuestions,
}: QuestionProps) {
  const questionId = `question-${question.id}`

  return (
    <div className="mt-3 flex flex-col items-center justify-center">
      <p className="w-full text-xs font-semibold uppercase tracking-[0.16em] text-[#969696]">
        Question {index + 1} / {numQuestions}
      </p>

      <p
        id={questionId}
        className="mt-2 text-sm leading-6 tracking-normal text-[#F5F5F5] md:text-base"
      >
        {question.question}
      </p>

      <Options
        question={question}
        answer={answer}
        labelledBy={questionId}
      />
    </div>
  )
}
