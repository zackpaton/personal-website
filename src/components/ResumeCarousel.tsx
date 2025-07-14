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
  imageSrc?: string
}

type ResumeCarouselProps = {
  items: ResumeCardData[]
}

export default function ResumeCarousel({ items }: ResumeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)

  const prevCard = () => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextCard = () => {
    if (currentIndex < items.length - 1) {
      setDirection(1)
      setCurrentIndex(currentIndex + 1)
    }
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
    }
    if (diff < -50) {
        prevCard()
        setTouchStartX(null)
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
    }, [currentIndex])



  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <div className="flex items-center">
        {items.length > 1 && (
          <button
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="disabled:opacity-30 text-foreground cursor-pointer disabled:cursor-default"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <motion.div
        ref={containerRef}
        layout
        transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setTouchStartX(null)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full p-0 m-0"
            >
              <ResumeCard {...items[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {items.length > 1 && (
          <button
            onClick={nextCard}
            disabled={currentIndex === items.length - 1}
            className="disabled:opacity-30 text-foreground cursor-pointer disabled:cursor-default"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="flex gap-0 sm:gap-2 mt-0 sm:mt-2 text-foreground">
          {items.map((_, i) =>
            i === currentIndex ? (
              <CircleDot key={i} size={18} />
            ) : (
              <Circle
                key={i}
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1)
                  setCurrentIndex(i)
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  )
}
