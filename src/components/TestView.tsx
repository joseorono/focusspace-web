const brandColors = [
  { name: 'primary', hex: '#1976d2', bg: 'bg-primary', fg: 'text-white' },
  { name: 'primary-light', hex: '#60a5fa', bg: 'bg-primary-light', fg: 'text-ink' },
  { name: 'primary-dark', hex: '#2563eb', bg: 'bg-primary-dark', fg: 'text-white' },
  { name: 'secondary', hex: '#8b5cf6', bg: 'bg-secondary', fg: 'text-white' },
  { name: 'secondary-light', hex: '#a78bfa', bg: 'bg-secondary-light', fg: 'text-ink' },
  { name: 'secondary-dark', hex: '#7c3aed', bg: 'bg-secondary-dark', fg: 'text-white' },
  { name: 'ink', hex: '#1f2937', bg: 'bg-ink', fg: 'text-white' },
  { name: 'ink-muted', hex: '#6b7280', bg: 'bg-ink-muted', fg: 'text-white' },
  { name: 'night', hex: '#030e18', bg: 'bg-night', fg: 'text-white' },
  { name: 'destructive', hex: '#d32f2f', bg: 'bg-destructive', fg: 'text-white' },
  { name: 'lilac', hex: '#c084fc', bg: 'bg-lilac', fg: 'text-ink' },
  { name: 'sky-pale', hex: '#bfdbfe', bg: 'bg-sky-pale', fg: 'text-ink' },
  { name: 'butter', hex: '#fef08a', bg: 'bg-butter', fg: 'text-ink' },
  { name: 'white', hex: '#f1f5f9', bg: 'bg-white', fg: 'text-ink' },
  { name: 'absolute-white', hex: '#ffffff', bg: 'bg-absolute-white', fg: 'text-ink' },
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
    <div className="text-left font-sans text-white">
      <header className="bg-primary px-6 py-8 shadow-lg shadow-primary-dark/40">
        <div className="mx-auto flex max-w-5xl items-center gap-5">
          <img
            src="/icons/cubo1.svg"
            alt="FocusSpace logo"
            width={72}
            height={72}
            fetchPriority="high"
            decoding="async"
            className="shrink-0"
          />
          <div>
            <h1 className="my-0 font-sans text-4xl font-bold leading-none text-white">
              FocusSpace
            </h1>
            <p className="mt-2 text-sm text-white/80">
              Brand theme test view — colors, icons, fonts
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="mb-12" aria-labelledby="typography-heading">
          <h2
            id="typography-heading"
            className="mb-4 text-xl font-bold text-white"
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
          <p className="mt-3 text-xs text-anti-flash-muted">
            If any of the above falls back to a generic sans-serif or Times-like
            serif, the Google Fonts stylesheet failed to load.
          </p>
        </section>

        <section className="mb-12" aria-labelledby="colors-heading">
          <h2
            id="colors-heading"
            className="mb-4 text-xl font-bold text-white"
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
            className="mb-4 text-xl font-bold text-white"
          >
            Icons{' '}
            <span className="font-normal text-anti-flash-muted">
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
                    <p className="font-mono text-sm font-medium text-white">
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
    </div>
  )
}
