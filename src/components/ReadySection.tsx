import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { SpotlightBackground } from '@/components/ui/spotlight'

export function ReadySection() {
  const { ref, isInView } = useScrollAnimation()
  return (
    <section id="install" className="relative overflow-hidden" ref={ref}>
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

      <div className="px-4 py-16 md:py-24">
        {/* Decorative persona */}
        <img
          src="/icons/persona.svg"
          alt=""
          width={180}
          height={174}
          className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-[0.08] select-none lg:block"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />

        <motion.div
          className="relative z-10 mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
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
              className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Install Free Now
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
