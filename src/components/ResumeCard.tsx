'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FastAverageColor } from 'fast-average-color'

type ResumeCardProps = {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
  type: string
  bullets: string[]
  imageSrc?: string
}

export default function ResumeCard({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  type,
  bullets,
  imageSrc,
}: ResumeCardProps) {
  const [shadowColor, setShadowColor] = useState<string | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imageSrc) return

    const fac = new FastAverageColor()
    if (imgRef.current?.complete) {
      // If already loaded, get color immediately
      fac
        .getColorAsync(imgRef.current)
        .then((color) => {
          setShadowColor(color.rgba)
        })
        .catch(() => {
          setShadowColor(null)
        })
    }
  }, [imageSrc])

  const onImgLoad = () => {
    if (imgRef.current) {
      const fac = new FastAverageColor()
      fac
        .getColorAsync(imgRef.current)
        .then((color) => {
          setShadowColor(color.rgba)
        })
        .catch(() => {
          setShadowColor(null)
        })
    }
  }

  return (
    <div className="min-w-[250px] sm:min-w-[300px] border border-foreground/10 rounded-xl shadow-sm shadow-foreground-second bg-background-second text-foreground p-4 m-2 flex-shrink-0 h-auto">
      
      {/* Left image + Right content */}
      <div className="flex items-center gap-3 mb-2">
        {/* Image with dynamic shadow */}
        {imageSrc && (
          <div
            className="relative w-7 h-7 edu:w-14 edu:h-14 flex-shrink-0 rounded-full overflow-hidden"
            style={{
              boxShadow: shadowColor
                ? `0 0 8px 2px ${shadowColor}`
                : '0 0 5px rgba(0,0,0,0.1)',
            }}
          >
            {/* Hidden normal img for color extraction */}
            <img
              ref={imgRef}
              src={imageSrc}
              alt=""
              onLoad={onImgLoad}
              style={{ display: 'none' }}
            />
            {/* Actual visible image */}
            <Image
              src={imageSrc}
              alt=""
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 730px) 28px, (max-width: 1024px) 48px, 56px"
              priority // optional for faster loading
            />
          </div>
        )}

        {/* Right content */}
        <div className="flex flex-col flex-1">
          {/* Top row */}
          <div className="flex flex-col edu:flex-row edu:justify-between edu:items-start text-md edu:text-lg">
            <div className="font-semibold">
              {topLeft}
              <span>
                <span className="font-normal hidden gdms:inline edu:hidden">, </span>
                <span className="font-normal hidden gdms:inline edu:hidden">{topRight}</span>
              </span>
            </div>
            <div className="text-muted-foreground pl-5 hidden edu:block">
              {topRight}
            </div>
          </div>

          {/* Bottom row */}
          <div className="hidden edu:flex edu:flex-row edu:justify-between edu:items-center text-sm edu:text-md">
            <div className="italic">{bottomLeft}</div>
            <div className="edu:text-right">{bottomRight}</div>
          </div>
        </div>
      </div>

      <div className="flex-row justify-between items-center text-sm mt-1 edu:hidden">
        <div className="italic">{bottomLeft}</div>
        <div className="edu:text-right">{bottomRight}</div>
      </div>

      {/* Bullet points — full width left-aligned */}
      <ul className="list-disc text-xs edu:text-sm pl-4">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="ml-0">{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
