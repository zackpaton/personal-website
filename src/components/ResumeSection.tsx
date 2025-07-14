'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

type ResumeSectionProps = {
  title: string
  children: React.ReactNode
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-foreground/20 rounded-xl overflow-hidden mb-2 sm:mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-full flex justify-between items-center px-4 py-3 bg-background-second cursor-pointer shadow-md shadow-primary"
      >
        <h2 className="text-lg font-semibold group-hover:scale-105">{title}</h2>
        <div className="group-hover:scale-105">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <div
        className={` duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-0 sm:px-1 py-2 sm:py-4">{children}</div>
      </div>
    </div>
  )
}
