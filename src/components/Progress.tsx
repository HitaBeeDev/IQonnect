interface ProgressProps {
  progressPercent: number
}

export default function Progress({ progressPercent }: ProgressProps) {
  return (
    <div className="mt-4 w-full">
      <div className="h-1 w-full overflow-hidden rounded-full bg-[#252538]">
        <div
          className="h-full rounded-full bg-[#8b5cf6]/70 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercent}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progressPercent)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Quiz progress"
        />
      </div>
    </div>
  )
}
