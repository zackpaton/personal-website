'use client'
import { useState, useRef, useEffect } from 'react'
import NavLink from './NavLink'
import DarkModeToggle from './DarkModeToggle'
import { Menu } from 'lucide-react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuContainerRef = useRef<HTMLDivElement>(null)
  const hiddenMenuRef = useRef<HTMLDivElement>(null)
  const [menuPosition, setMenuPosition] = useState({ left: 0, right: 0 })

  const handleToggleMenu = () => {
    if (!menuOpen && menuContainerRef.current) {
      const rect = menuContainerRef.current.getBoundingClientRect()
      setMenuPosition({ left: rect.left, right: window.innerWidth - rect.right })
    }
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (menuOpen && menuContainerRef.current) {
      const rect = menuContainerRef.current.getBoundingClientRect()
      setMenuPosition({ left: rect.left, right: window.innerWidth - rect.right })
    }
  }, [menuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuOpen) return
      const target = event.target as Node
      if (buttonRef.current?.contains(target) || hiddenMenuRef.current?.contains(target)) {
        return
      }
      setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  return (
    <div className="bg-primary shadow relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">

        <div ref={menuContainerRef} className="flex items-center space-x-4">
          <NavLink href="/" className="text-xl font-bold">Zack Paton</NavLink>
          <button
            ref={buttonRef}
            onClick={handleToggleMenu}
            className="group sm:hidden p-2 rounded bg-background text-foreground"
            aria-label="Toggle menu"
          >
            <Menu
              className={`w-5 h-5 transition-transform duration-200 ease-in-out group-hover:scale-105 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}
            />
          </button>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </div>

        <DarkModeToggle />
      </div>

      {menuOpen && (
        <div
          className="absolute z-50 top-full left-0 bg-background text-foreground border border-foreground/10 rounded shadow-lg mt-1"
          ref={hiddenMenuRef}
          style={{
            left: `${menuPosition.left}px`,
            right: `${menuPosition.right}px`
          }}
        >
          <div className="flex flex-col space-y-2 px-4 py-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/resume">Resume</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
