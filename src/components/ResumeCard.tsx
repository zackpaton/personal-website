'use client'

import Image from 'next/image'

type ResumeCardProps = {
  topLeft: string
  topRight: string
  bottomLeft: string
  bottomRight: string
  bullets: string[]
  imageSrc: string
  imageShadow: string
}

export default function ResumeCard({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  bullets,
  imageSrc,
  imageShadow,
}: ResumeCardProps) {

  return (
    <div className="min-w-[250px] sm:min-w-[300px] border border-foreground/10 rounded-xl shadow-sm shadow-foreground-second bg-background-second text-foreground p-4 m-2 flex-shrink-0 h-auto">
      
      {/* Left image + Right content */}
      <div className="flex items-center gap-3 mb-2">
        {/* Image with dynamic shadow */}
        {imageSrc && (
          <div
            className="relative w-7 h-7 edu:w-14 edu:h-14 flex-shrink-0 rounded-full overflow-hidden"
            style={{
              boxShadow: `0 0 10px 3px ${imageShadow}`
            }}
          >

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

      <div className="flex-row justify-between items-center text-sm edu:text-md mt-1 edu:hidden">
        <div className="italic">{bottomLeft}</div>
        <div className="edu:text-right">{bottomRight}</div>
      </div>

      {/* Bullet points — full width left-aligned */}
      <ul className="list-disc text-xs edu:text-sm pl-4 mt-1">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="ml-0">{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
