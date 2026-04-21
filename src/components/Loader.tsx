export default function Loader() {
  return (
    <div className="flex min-h-[12rem] flex-col items-center justify-center gap-4 text-[#9490b0]">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-[#252538] border-t-[#8b5cf6]"
        aria-hidden="true"
      />
      <p className="text-sm">Loading questions...</p>
    </div>
  )
}
