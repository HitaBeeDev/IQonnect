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
    <div className="flex gap-3">
      <div className="flex flex-1 items-center gap-3 rounded-xl bg-[#161620] px-4 py-3 ring-1 ring-[#252538]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8b5cf6]/10">
          <Brain size={16} className="text-[#8b5cf6]" />
        </div>
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-widest text-[#5c5978]">
            Questions
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[#f0eeff]">{numQuestions}</p>
        </div>
      </div>

      <div className="flex flex-1 items-center gap-3 rounded-xl bg-[#161620] px-4 py-3 ring-1 ring-[#252538]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8b5cf6]/10">
          <Clock3 size={16} className="text-[#8b5cf6]" />
        </div>
        <div>
          <p className="text-[0.65rem] font-medium uppercase tracking-widest text-[#5c5978]">
            Duration
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[#f0eeff]">
            {durationMinutes} min
          </p>
        </div>
      </div>
    </div>
  )
}
