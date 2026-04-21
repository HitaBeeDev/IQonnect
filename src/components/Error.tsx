export default function Error() {
  return (
    <div className="flex min-h-[12rem] items-center justify-center">
      <p className="rounded-xl border border-[#5f2735] bg-[#211319] px-4 py-3 text-sm text-[#ffd6df]">
        <span className="mr-2" aria-hidden="true">!</span>
        There was an error fetching questions.
      </p>
    </div>
  )
}
