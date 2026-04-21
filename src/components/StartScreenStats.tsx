import { Brain, Clock3 } from 'lucide-react'

interface StartScreenStatsProps {
  numQuestions: number
  durationMinutes: number
}

export default function StartScreenStats({
  numQuestions,
  durationMinutes,
}: StartScreenStatsProps) {
  return (
    <div className="mt-8 grid gap-3 text-[#e0e0e0] sm:grid-cols-2">
      <div className="flex min-h-[3.5rem] items-center gap-3 rounded-xl border border-[#4a4d51] bg-[#343638] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6600]/15 text-[#FF6600]">
          <Brain size={18} />
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#969696]">
            Total Questions
          </p>
          <p className="text-sm font-medium text-[#F5F5F5]">{numQuestions}</p>
        </div>
      </div>

      <div className="flex min-h-[3.5rem] items-center gap-3 rounded-xl border border-[#4a4d51] bg-[#343638] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FF6600]/15 text-[#FF6600]">
          <Clock3 size={18} />
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-[#969696]">
            Duration
          </p>
          <p className="text-sm font-medium text-[#F5F5F5]">
            {durationMinutes} Minutes
          </p>
        </div>
      </div>
    </div>
  )
}
