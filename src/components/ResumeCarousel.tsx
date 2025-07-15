'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react'
import ResumeCard from './ResumeCard'

type ResumeCardData = {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
  bullets: string[]
  imageSrc: string
  imageShadow: string
}

type ResumeCarouselProps = {
  items: ResumeCardData[]
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0
  })
}

export default function ResumeCarousel({ items }: ResumeCarouselProps) {
  const [state, setState] = useState({ index: 0, direction: 0 })
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const prevCard = () => {
    setState((prev) => ({
      index: Math.max(prev.index - 1, 0),
      direction: -1
    }))
  }

  const nextCard = () => {
    setState((prev) => ({
      index: Math.min(prev.index + 1, items.length - 1),
      direction: 1
    }))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchCurrentX = e.touches[0].clientX
    const diff = touchStartX - touchCurrentX
    if (diff > 50) {
      nextCard()
      setTouchStartX(null)
      return
    }
    if (diff < -50) {
      prevCard()
      setTouchStartX(null)
      return
    }
  }

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheelNative = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault()
        if (e.deltaX > 20) nextCard()
        if (e.deltaX < -20) prevCard()
      }
    }

    container.addEventListener('wheel', handleWheelNative, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheelNative)
    }
  }, [])

  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <div className="flex items-center">
        {items.length > 1 && (
          <button
            onClick={prevCard}
            disabled={state.index === 0}
            className="disabled:opacity-30 text-foreground cursor-pointer disabled:cursor-default hover:scale-105 disabled:hover:scale-100"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <motion.div
          layout
          transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setTouchStartX(null)}
        >
          <AnimatePresence initial={false} custom={state.direction} mode="wait">
            <motion.div
              key={state.index}
              custom={state.direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="w-full p-0 m-0"
            >
              <ResumeCard {...items[state.index]} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {items.length > 1 && (
          <button
            onClick={nextCard}
            disabled={state.index === items.length - 1}
            className="disabled:opacity-30 text-foreground cursor-pointer disabled:cursor-default hover:scale-105 disabled:hover:scale-100"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="flex gap-0 sm:gap-2 mt-0 sm:mt-2 text-foreground">
          {items.map((_, i) =>
            i === state.index ? (
              <CircleDot key={i} size={18} />
            ) : (
              <Circle
                key={i}
                size={18}
                className="cursor-pointer hover:scale-105"
                onClick={() =>
                  setState({
                    index: i,
                    direction: i > state.index ? 1 : -1
                  })
                }
              />
            )
          )}
        </div>
      )}
    </div>
  )
}
