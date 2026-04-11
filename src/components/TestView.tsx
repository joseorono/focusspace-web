const brandColors = [
  { name: 'primary', hex: '#1976d2', bg: 'bg-primary', fg: 'text-ink-inverse' },
  { name: 'primary-light', hex: '#60a5fa', bg: 'bg-primary-light', fg: 'text-ink' },
  { name: 'primary-dark', hex: '#2563eb', bg: 'bg-primary-dark', fg: 'text-ink-inverse' },
  { name: 'secondary', hex: '#8b5cf6', bg: 'bg-secondary', fg: 'text-ink-inverse' },
  { name: 'secondary-light', hex: '#a78bfa', bg: 'bg-secondary-light', fg: 'text-ink' },
  { name: 'secondary-dark', hex: '#7c3aed', bg: 'bg-secondary-dark', fg: 'text-ink-inverse' },
  { name: 'ink', hex: '#1f2937', bg: 'bg-ink', fg: 'text-ink-inverse' },
  { name: 'ink-muted', hex: '#6b7280', bg: 'bg-ink-muted', fg: 'text-ink-inverse' },
  { name: 'night', hex: '#030e18', bg: 'bg-night', fg: 'text-ink-inverse' },
  { name: 'destructive', hex: '#d32f2f', bg: 'bg-destructive', fg: 'text-ink-inverse' },
  { name: 'lilac', hex: '#c084fc', bg: 'bg-lilac', fg: 'text-ink' },
  { name: 'sky-pale', hex: '#bfdbfe', bg: 'bg-sky-pale', fg: 'text-ink' },
  { name: 'butter', hex: '#fef08a', bg: 'bg-butter', fg: 'text-ink' },
] as const

type IconEntry = { file: string; label: string; note?: string }

const icons: readonly IconEntry[] = [
  { file: 'cubo1.svg', label: 'cubo1', note: 'Official logo' },
  { file: 'cubo2.svg', label: 'cubo2' },
  { file: 'circulo.svg', label: 'circulo' },
  { file: 'flecha.svg', label: 'flecha' },
  { file: 'lineas.svg', label: 'lineas' },
  { file: 'lineasyflecha.svg', label: 'lineasyflecha' },
  { file: 'persona.svg', label: 'persona' },
]

export function TestView() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-left font-sans text-ink-inverse">
      <header className="mb-12 flex items-center gap-5">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-primary-light/40 bg-primary-dark/25 p-4 shadow-lg shadow-primary-dark/20">
          <img
            src="/icons/cubo1.svg"
            alt="FocusSpace logo"
            width={80}
            height={80}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div>
          <h1 className="my-0 font-serif text-5xl font-bold leading-none text-primary-light">
            FocusSpace
          </h1>
          <p className="mt-2 text-sm text-ink-inverse-muted">
            Brand theme test view — colors, icons, fonts
          </p>
        </div>
      </header>

      <section className="mb-12" aria-labelledby="typography-heading">
        <h2
          id="typography-heading"
          className="mb-4 text-xl font-bold text-ink-inverse"
        >
          Typography
        </h2>
        <div className="space-y-3 rounded-xl border border-primary-light/15 bg-primary-dark/10 p-6">
          <p className="font-sans text-3xl font-bold">
            Roboto Bold — 700 · FocusSpace
          </p>
          <p className="font-sans text-xl font-medium">
            Roboto Medium — 500 · The quick brown fox
          </p>
          <p className="font-sans text-base font-normal">
            Roboto Regular — 400 · The quick brown fox jumps over the lazy dog.
          </p>
          <hr className="border-primary-light/15" />
          <p className="font-serif text-3xl font-semibold text-primary-light">
            Cormorant Semibold — 600
          </p>
          <p className="font-serif text-2xl">
            Cormorant Regular — 400 · elegant display accent
          </p>
          <p className="font-serif text-2xl italic">
            Cormorant Italic — 400 · <em>per aspera ad astra</em>
          </p>
        </div>
        <p className="mt-3 text-xs text-ink-inverse-muted">
          If any of the above falls back to a generic sans-serif or Times-like
          serif, the Google Fonts stylesheet failed to load.
        </p>
      </section>

      <section className="mb-12" aria-labelledby="colors-heading">
        <h2
          id="colors-heading"
          className="mb-4 text-xl font-bold text-ink-inverse"
        >
          Brand colors
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {brandColors.map((c) => (
            <li
              key={c.name}
              className={`${c.bg} ${c.fg} flex h-24 flex-col justify-between rounded-lg p-3 shadow-lg shadow-black/40`}
            >
              <span className="text-sm font-semibold">{c.name}</span>
              <span className="font-mono text-xs opacity-90">{c.hex}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="icons-heading">
        <h2
          id="icons-heading"
          className="mb-4 text-xl font-bold text-ink-inverse"
        >
          Icons{' '}
          <span className="font-normal text-ink-inverse-muted">
            · public/icons/
          </span>
        </h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {icons.map((icon) => {
            const isLogo = icon.file === 'cubo1.svg'
            return (
              <li
                key={icon.file}
                className={`flex flex-col items-center gap-3 rounded-xl border p-6 ${
                  isLogo
                    ? 'border-primary-light/50 bg-primary-dark/25 shadow-lg shadow-primary-dark/20'
                    : 'border-primary-light/15 bg-primary-dark/10'
                }`}
              >
                <img
                  src={`/icons/${icon.file}`}
                  alt={icon.label}
                  width={72}
                  height={72}
                  loading="lazy"
                  decoding="async"
                />
                <div className="text-center">
                  <p className="font-mono text-sm font-medium text-ink-inverse">
                    {icon.file}
                  </p>
                  {icon.note && (
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-primary-light">
                      {icon.note}
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
