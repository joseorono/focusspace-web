import { IconGitHub } from '@/components/icons'

const GITHUB_URL = 'https://github.com/joseorono/focus-space'

const PRODUCT_LINKS = [
  { label: 'Install for Chrome', href: 'https://chromewebstore.google.com/search/FocusSpace' },
  { label: 'GitHub Repository', href: GITHUB_URL },
  { label: 'Report an Issue', href: `${GITHUB_URL}/issues` },
  { label: 'Contribute', href: `${GITHUB_URL}/pulls` },
]

const FEATURE_LINKS = [
  { label: 'Session Cleaner', href: '#features' },
  { label: 'Browser Cleaner', href: '#features' },
  { label: 'Focus Mode', href: '#features' },
  { label: 'Privacy by Design', href: '#features' },
]

const COMMUNITY_LINKS = [
  { label: 'Open Source \u00b7 GPLv3', href: GITHUB_URL },
  { label: 'Issues & Feedback', href: `${GITHUB_URL}/issues` },
  { label: 'Made by Exologic', href: 'https://exologic.agency/' },
  { label: 'Ela Creativa', href: 'https://elacreativa.vercel.app/' },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-anti-flash-muted">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm text-anti-flash-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-primary-light/8 px-4 pt-16 pb-8 sm:px-6">
      {/* Decorative */}
      <img
        src="/icons/lineasyflecha.svg"
        alt=""
        width={140}
        height={140}
        className="pointer-events-none absolute bottom-8 right-8 hidden opacity-[0.05] select-none lg:block"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <img
        src="/icons/lineas.svg"
        alt=""
        width={120}
        height={100}
        className="pointer-events-none absolute left-4 top-20 opacity-[0.04] select-none"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />

      <div className="mx-auto max-w-5xl">
        {/* Main footer grid */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="/icons/cubo1.svg"
                alt="FocusSpace logo"
                width={28}
                height={28}
                loading="lazy"
                decoding="async"
              />
              <span className="text-base font-semibold tracking-tight text-white">
                FocusSpace
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-anti-flash-muted">
              The privacy-first browser extension that surgically removes
              digital clutter.
            </p>
            {/* Social icons */}
            <nav aria-label="Social links" className="mt-4 flex gap-2.5">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-light/15 bg-primary-light/5 text-anti-flash-muted transition-colors hover:border-primary-light/35 hover:bg-primary-light/12 hover:text-white"
                aria-label="GitHub"
              >
                <IconGitHub className="h-4 w-4" />
              </a>
              <a
                href={`${GITHUB_URL}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-light/15 bg-primary-light/5 text-anti-flash-muted transition-colors hover:border-primary-light/35 hover:bg-primary-light/12 hover:text-white"
                aria-label="Report issues"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
              </a>
            </nav>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            <FooterColumn title="Product" links={PRODUCT_LINKS} />
            <FooterColumn title="Features" links={FEATURE_LINKS} />
            <FooterColumn title="Community" links={COMMUNITY_LINKS} />
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-primary-light/8 pt-6 text-xs text-anti-flash-muted sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              Created with care by{' '}
              <a
                href="https://exologic.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-primary-light"
              >
                Exologic
              </a>{' '}
              and{' '}
              <a
                href="https://elacreativa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-primary-light"
              >
                Ela Creativa
              </a>
              .
            </span>
            <span>&copy; 2026 All rights reserved. GPLv3 Licensed.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-3.5 w-3.5 text-butter" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
              </svg>
              Star on GitHub
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" aria-hidden="true" />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium transition-colors hover:text-white"
            >
              Open for Contributions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
