import { useState, useEffect } from 'react'
import { IconGitHub } from '@/components/icons'
import PlugConnectedIcon from '@/components/ui/plug-connected-icon'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night/95 backdrop-blur-md border-b border-primary-light/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/icons/cubo1.svg"
            alt="FocusSpace logo"
            width={32}
            height={32}
            fetchPriority="high"
          />
          <span className="text-base font-semibold tracking-tight text-white">
            FocusSpace
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-anti-flash-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/joseorono/focus-space"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-anti-flash-muted transition-colors hover:text-white"
          >
            <IconGitHub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://chromewebstore.google.com/search/FocusSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <PlugConnectedIcon size={18} strokeWidth={2} />
            Install Extension
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-md p-2 text-anti-flash-muted transition-colors hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-primary-light/10 bg-night/95 backdrop-blur-md px-6 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-anti-flash-muted transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/joseorono/focus-space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-anti-flash-muted transition-colors hover:text-white"
            >
              <IconGitHub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://chromewebstore.google.com/search/FocusSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <PlugConnectedIcon size={18} strokeWidth={2} />
              Install Extension
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
