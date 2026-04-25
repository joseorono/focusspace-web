import { SpotlightBackground } from "@/components/ui/spotlight";

export function ReadySection() {
  return (
    <section id="install" className="relative  overflow-hidden">
      {/* Spotlight background overlay */}
      <SpotlightBackground
        colors={["rgba(25, 118, 210, 0.3)"]}
        size={300}
        blur={100}
        smoothing={0.95}
        ambient={true}
        opacity={1}
        className="pointer-events-none"
      />

      <div className="px-4 py-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <img
            src="/icons/persona.svg"
            alt=""
            width={72}
            height={70}
            className="mx-auto mb-4 block opacity-80"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to Reclaim Your Focus?
          </h2>
          <p className="mx-auto mt-6 text-base leading-relaxed text-anti-flash-muted">
            Join thousands of professionals who&rsquo;ve transformed their
            productivity with FocusSpace.
          </p>
          <div className="mt-10">
            <a
              href="https://chromewebstore.google.com/search/FocusSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-border inline-flex items-center gap-2 rounded-full px-10 py-3.5 text-sm font-semibold text-primary-light transition-all duration-200 hover:scale-110 hover:bg-primary-light/10 hover:text-white"
            >
              Install Free Now
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
