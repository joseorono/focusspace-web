import { HiFire, HiNoSymbol } from 'react-icons/hi2'

export function NsfwIcon({ className }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className ?? ''}`} aria-hidden="true">
      <HiFire className="h-full w-full" />
      <span className="absolute -bottom-1 -right-1 inline-flex h-[58%] w-[58%] items-center justify-center rounded-full bg-night ring-1 ring-night">
        <HiNoSymbol className="h-full w-full" />
      </span>
    </span>
  )
}
