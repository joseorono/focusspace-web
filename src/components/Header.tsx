import { useEffect, useRef, useState } from 'react'
import PlugConnectedIcon from '@/components/ui/plug-connected-icon'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isOpen) return
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-white/6 bg-night/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

        <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="FocusSpace home">
          <img
            src="/icons/cubo1.svg"
            alt="FocusSpace logo"
            width={32}
            height={32}
            fetchPriority="high"
            decoding="async"
          />
          <span className="text-base font-semibold tracking-tight text-ink-inverse">
            FocusSpace
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-inverse-muted transition-colors hover:text-ink-inverse"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href="#install"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:inline-flex"
        >
          <PlugConnectedIcon size={18} color="currentColor" strokeWidth={2} />
          Install Extension
        </a>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 text-ink-inverse-muted transition-colors hover:text-ink-inverse md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/6 px-6 pb-5 pt-2 md:hidden"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm text-ink-inverse-muted transition-colors hover:text-ink-inverse"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#install"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            <PlugConnectedIcon size={18} color="currentColor" strokeWidth={2} />
            Install Extension
          </a>
        </div>
      )}
    </header>
  )
}
