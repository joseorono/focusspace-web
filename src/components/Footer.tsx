const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/6 bg-night px-6 py-10">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="FocusSpace home">
            <img
              src="/icons/cubo1.svg"
              alt="FocusSpace logo"
              width={26}
              height={26}
              loading="lazy"
              decoding="async"
            />
            <span className="text-sm font-semibold text-ink-inverse">FocusSpace</span>
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
              {footerLinks.map((link) => (
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
        </div>

        <div className="mt-8 border-t border-white/6 pt-6 text-center text-xs text-ink-inverse-muted">
          <p>© {new Date().getFullYear()} FocusSpace. All rights reserved.</p>
          <p className="mt-1">
            Created with care by the{' '}
            <span className="font-semibold text-ink-inverse">Exologic</span> team.
          </p>
        </div>

      </div>
    </footer>
  )
}
