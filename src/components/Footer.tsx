import { HiStar } from 'react-icons/hi2'

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Report Issue', href: 'https://github.com/joseorono/focus-space/issues' },
  { label: 'GitHub', href: 'https://github.com/joseorono/focus-space' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-night px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="FocusSpace home">
              <img
                src="/icons/cubo1.svg"
                alt="FocusSpace logo"
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
              <span className="text-base font-bold text-ink-inverse tracking-tight">FocusSpace</span>
            </a>
            <p className="text-sm text-ink-inverse-muted max-w-xs text-center md:text-left">
              The privacy-first browser extension that surgically removes digital clutter.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-ink-inverse-muted transition-colors hover:text-ink-inverse"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/6 pt-8 gap-6 md:flex-row text-xs text-ink-inverse-muted">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p>© {new Date().getFullYear()} All rights reserved. MIT Licensed.</p>
            <p>
              Created with care by{' '}
              <a href="https://exologic.agency/" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-inverse hover:text-primary-light transition-colors">
                Exologic
              </a>
              {' '}and{' '}
              <a href="https://elacreativa.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-ink-inverse hover:text-primary-light transition-colors">
                Ela Creativa
              </a>.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://github.com/joseorono/focus-space" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors hover:bg-white/10 hover:text-ink-inverse"
            >
              <HiStar className="h-3.5 w-3.5 text-butter" />
              <span>Star on GitHub</span>
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" aria-hidden="true" />
            <a 
              href="https://github.com/joseorono/focus-space" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:text-ink-inverse transition-colors"
            >
              Open for Contributions
            </a>
          </div>
        </div>

      </div>

      {/* Decorative: lines + arrow — represents movement / action */}
      <img
        src="/icons/lineasyflecha.svg"
        alt=""
        aria-hidden="true"
        width={200}
        height={137}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -bottom-4 right-0 hidden select-none opacity-[0.05] md:block"
      />
    </footer>
  )
}
