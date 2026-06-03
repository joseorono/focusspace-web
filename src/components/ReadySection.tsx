import { motion } from 'motion/react'
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

      <div className="px-4 py-12 md:py-16">
        <motion.div
          className="relative z-10 mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
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
              className="shimmer-border inline-flex items-center gap-2 rounded-full px-10 py-3.5 text-sm font-semibold text-primary-light transition-all duration-300 ease-out hover:scale-105 hover:bg-primary-light/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:scale-100"
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
