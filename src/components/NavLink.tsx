'use client'
import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

const NavLink = ({ href, children, className = '' }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`group inline-flex items-center px-2 py-1 rounded bg-background text-foreground
        ${isActive && className === '' ? 'ring-0 bg-background-second sm:bg-background sm:ring-3 sm:ring-foreground' : ''} ${className}`}
    >
      <span className="group-hover:scale-105">{children}</span>
    </Link>
  )
}

export default NavLink
