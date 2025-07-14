'use client'
import { useState, useEffect, useRef } from 'react'
import { Settings, Sun, Moon } from 'lucide-react'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleModeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'))
      if (isDark) {
        const favicon = document.getElementById('favicon')
        if (favicon instanceof HTMLLinkElement) {
          favicon.href = '/favicon-dark.ico'
        }
      }
    }
  }, [ isDark ])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!open) return
      const target = event.target as Node
      if (menuRef.current?.contains(target) || toggleModeRef.current?.contains(target)) {
        return
      }
      setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
      const favicon = document.getElementById('favicon')
      if (favicon instanceof HTMLLinkElement) {
        favicon.href = '/favicon-light.ico'
      }
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
      const favicon = document.getElementById('favicon')
      if (favicon instanceof HTMLLinkElement) {
        favicon.href = '/favicon-dark.ico'
      }
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`group cursor-pointer bg-background text-foreground p-2 rounded-full transition-transform duration-300 ease-in-out ${open ? 'rotate-90' : 'rotate-0'
          }`}
        aria-label="Theme Settings"
      >
        <Settings className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
      </button>

      {open && (
        <div
          className="absolute z-50 top-full right-0 mt-4 w-28 bg-background border border-foreground/20 rounded shadow-xs shadow-foreground-second p-3 space-y-3"
          ref={toggleModeRef}
        >
          <div className="flex items-center justify-between">
            <Sun className="w-4 h-4" />
            <div
              onClick={toggleDarkMode}
              className="relative w-10 h-5 flex items-center bg-foreground/20 rounded-full cursor-pointer transition"
            >
              <div
                className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-foreground transition-all duration-300 ${isDark ? 'translate-x-5' : 'translate-x-0'
                  }`}
              />
            </div>
            <Moon className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  )
}

export default DarkModeToggle
