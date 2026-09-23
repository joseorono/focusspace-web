import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { IconGitHub } from '@/components/icons'
import {
  GITHUB_URL,
  GITHUB_ISSUES_URL,
  CHROME_STORE_URL,
  EXOLOGIC_URL,
} from '@/constants/misc'

type Language = 'en' | 'es'

export function PrivacyPolicy() {
  const [lang, setLang] = useState<Language>('en')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title =
      lang === 'en'
        ? 'FocusSpace — Privacy Policy & Chrome Permissions'
        : 'FocusSpace — Política de Privacidad y Permisos de Chrome'
  }, [lang])

  return (
    <div className="relative min-h-screen bg-night text-anti-flash-muted selection:bg-primary-light/20 selection:text-white">
      {/* Background decoration glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #60a5fa 0%, #8b5cf6 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-primary-light/10 bg-night/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-sm font-medium text-anti-flash-muted transition-colors hover:text-white"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary-light/15 bg-primary-light/5 transition-colors group-hover:border-primary-light/30 group-hover:bg-primary-light/10">
              <svg
                className="h-4 w-4 text-primary-light transition-transform group-hover:-translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <span>{lang === 'en' ? 'Back to FocusSpace' : 'Volver a FocusSpace'}</span>
          </Link>

          {/* Language Toggle & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-primary-light/20 bg-primary-light/5 p-0.5 text-xs font-medium">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-full px-3 py-1 transition-all ${
                  lang === 'en'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-anti-flash-muted hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`rounded-full px-3 py-1 transition-all ${
                  lang === 'es'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-anti-flash-muted hover:text-white'
                }`}
              >
                Español
              </button>
            </div>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-anti-flash-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <IconGitHub className="h-3.5 w-3.5" />
              <span>GPLv3</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Title & Metadata */}
        <div className="mb-12 border-b border-primary-light/10 pb-8 text-center sm:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-light/20 bg-primary-light/10 px-3.5 py-1 text-xs font-semibold text-primary-light">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light animate-pulse" />
            {lang === 'en' ? 'Official Chrome Web Store Privacy Notice' : 'Aviso Oficial de Privacidad para Chrome Web Store'}
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-anti-flash-muted sm:text-lg">
            {lang === 'en'
              ? 'FocusSpace was engineered from day one with a strict Privacy by Design philosophy. We believe your digital focus and browsing habits belong solely to you.'
              : 'FocusSpace fue diseñado desde el primer día con una estricta filosofía de Privacidad por Diseño. Creemos que tu enfoque digital y tus hábitos de navegación te pertenecen únicamente a ti.'}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-anti-flash-muted">
            <div>
              <span className="font-semibold text-white">{lang === 'en' ? 'Effective Date:' : 'Fecha de vigencia:'}</span>{' '}
              September 17, 2026
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <div>
              <span className="font-semibold text-white">{lang === 'en' ? 'Publisher:' : 'Desarrollador:'}</span>{' '}
              <a href={EXOLOGIC_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light underline underline-offset-2">
                Exologic LLC
              </a>
            </div>
            <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <div>
              <span className="font-semibold text-white">{lang === 'en' ? 'Architecture:' : 'Arquitectura:'}</span>{' '}
              Chrome Extension Manifest V3 (100% Client-Side)
            </div>
          </div>
        </div>

        {/* Core Guarantees Banner */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-primary-light/15 bg-primary-light/5 p-4 text-center">
            <div className="text-xl font-bold text-white">0%</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-light">
              {lang === 'en' ? 'External Servers' : 'Servidores Externos'}
            </div>
            <p className="mt-1.5 text-xs text-anti-flash-muted">
              {lang === 'en' ? 'Zero outbound network requests made.' : 'Cero peticiones de red salientes.'}
            </p>
          </div>

          <div className="rounded-xl border border-primary-light/15 bg-primary-light/5 p-4 text-center">
            <div className="text-xl font-bold text-white">100%</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-light">
              {lang === 'en' ? 'Local Processing' : 'Procesamiento Local'}
            </div>
            <p className="mt-1.5 text-xs text-anti-flash-muted">
              {lang === 'en' ? 'Runs inside browser service worker & popup.' : 'Se ejecuta en el service worker y popup local.'}
            </p>
          </div>

          <div className="rounded-xl border border-primary-light/15 bg-primary-light/5 p-4 text-center">
            <div className="text-xl font-bold text-white">0</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-light">
              {lang === 'en' ? 'Trackers / Telemetry' : 'Rastreadores / Telemetría'}
            </div>
            <p className="mt-1.5 text-xs text-anti-flash-muted">
              {lang === 'en' ? 'No analytics, no cookies, no tracking.' : 'Sin analítica, sin cookies, sin rastreo.'}
            </p>
          </div>

          <div className="rounded-xl border border-primary-light/15 bg-primary-light/5 p-4 text-center">
            <div className="text-xl font-bold text-white">GPLv3</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-primary-light">
              {lang === 'en' ? 'Open Source' : 'Código Abierto'}
            </div>
            <p className="mt-1.5 text-xs text-anti-flash-muted">
              {lang === 'en' ? 'Full source code auditable on GitHub.' : 'Código fuente auditable en GitHub.'}
            </p>
          </div>
        </div>

        {/* Section 1: Executive Summary */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {lang === 'en' ? '1. Summary & Core Philosophy' : '1. Resumen y Filosofía Central'}
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed sm:text-base">
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace does <strong className="text-white">not</strong> collect, transmit, monetize, sell, or broker any personal data. There are no backend databases, no remote API endpoints, no third-party telemetry frameworks, no advertising SDKs, and no user account or login requirements.
                </>
              ) : (
                <>
                  FocusSpace <strong className="text-white">no</strong> recopila, transmite, monetiza, vende ni comercializa ningún dato personal. No existen bases de datos en la nube, ni servidores de backend, ni herramientas de telemetría de terceros, ni SDKs de publicidad, ni cuentas de usuario obligatorias.
                </>
              )}
            </p>
            <p>
              {lang === 'en' ? (
                <>
                  Every operation performed by FocusSpace—evaluating open distraction tabs, clearing browser history ranges, running Pomodoro focus cycles, and managing task lists—executes <strong className="text-white">100% locally</strong> inside your browser sandbox on your device.
                </>
              ) : (
                <>
                  Cada operación ejecutada por FocusSpace —evaluar pestañas distractoras, limpiar rangos de historial, ejecutar ciclos de Pomodoro y gestionar tareas— se ejecuta <strong className="text-white">100% localmente</strong> dentro del entorno seguro de tu navegador en tu propio dispositivo.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section 2: Single Purpose Statement */}
        <section className="mb-12 rounded-2xl border border-primary-light/15 bg-[#0b1628]/80 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{lang === 'en' ? 'Chrome Web Store Single Purpose Declaration' : 'Declaración de Propósito Único (Chrome Web Store)'}</span>
          </div>
          <blockquote className="mt-3 border-l-2 border-primary-light/40 pl-4 text-sm italic leading-relaxed text-white sm:text-base">
            &ldquo;FocusSpace is a productivity and digital wellbeing tool designed to eliminate distractions by closing tabs matching user-selected distraction categories, clearing recent browsing history upon explicit request, and providing a local Pomodoro focus timer with task management.&rdquo;
          </blockquote>
          <p className="mt-4 text-xs text-anti-flash-muted sm:text-sm">
            {lang === 'en'
              ? 'This declaration strictly adheres to the Chrome Web Store Minimum Permissions Policy. FocusSpace requests only the precise permissions indispensable for this single purpose.'
              : 'Esta declaración cumple estrictamente con la política de Permisos Mínimos de Chrome Web Store. FocusSpace solo solicita los permisos indispensables para cumplir con este propósito único.'}
          </p>
        </section>

        {/* Section 3: Browser Permissions & Technical Justifications */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {lang === 'en' ? '2. Browser Permissions & Technical Justifications' : '2. Permisos del Navegador y Justificaciones Técnicas'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed sm:text-base">
            {lang === 'en'
              ? 'In accordance with Google Chrome Developer Program Policies, here is the exhaustive breakdown of each browser permission requested in manifest.json, why it is required, and how data is handled:'
              : 'En cumplimiento con las Políticas del Programa de Desarrolladores de Google Chrome, a continuación se detalla exhaustivamente cada permiso solicitado en el manifest.json, por qué es necesario y cómo se manejan los datos:'}
          </p>

          {/* Permissions Table */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-primary-light/15 bg-card/60">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-primary-light/15 bg-primary-light/5 text-xs font-semibold uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 w-36">
                    {lang === 'en' ? 'Permission' : 'Permiso'}
                  </th>
                  <th scope="col" className="px-5 py-4 w-44">
                    {lang === 'en' ? 'API Method / Scope' : 'Método API / Alcance'}
                  </th>
                  <th scope="col" className="px-5 py-4">
                    {lang === 'en' ? 'Technical Justification & Data Handling' : 'Justificación Técnica y Manejo de Datos'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-light/10 text-anti-flash-muted">
                <tr>
                  <td className="px-5 py-4 font-mono font-semibold text-primary-light">tabs</td>
                  <td className="px-5 py-4 font-mono text-xs">
                    chrome.tabs.query<br />
                    chrome.tabs.remove
                  </td>
                  <td className="px-5 py-4 text-xs leading-relaxed sm:text-sm">
                    {lang === 'en' ? (
                      <>
                        <strong className="text-white">Required to identify and close distraction tabs.</strong> When you click &ldquo;Clean Session&rdquo;, FocusSpace reads the URLs of open tabs in-memory to check if they match active distraction categories or your custom keywords. Matching tabs are closed. Whitelisted domains are strictly preserved. <span className="text-white font-medium">URLs are never saved to storage, never logged, and never transmitted.</span>
                      </>
                    ) : (
                      <>
                        <strong className="text-white">Requerido para identificar y cerrar pestañas distractoras.</strong> Cuando pulsas &ldquo;Clean Session&rdquo;, FocusSpace lee en memoria las URLs de las pestañas abiertas para comprobar si coinciden con tus categorías o palabras clave. Las pestañas coincidentes se cierran y los dominios en lista blanca se preservan. <span className="text-white font-medium">Las URLs nunca se guardan, nunca se registran y nunca se transmiten.</span>
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono font-semibold text-primary-light">history</td>
                  <td className="px-5 py-4 font-mono text-xs">
                    chrome.history.deleteRange
                  </td>
                  <td className="px-5 py-4 text-xs leading-relaxed sm:text-sm">
                    {lang === 'en' ? (
                      <>
                        <strong className="text-white">Required to delete recent browsing history upon user request.</strong> Used to clear history across user-chosen time intervals (15m, 1h, 24h, 7d, 30d, 1y) so address bar autocomplete stops suggesting distracting websites. <span className="text-white font-medium">FocusSpace never reads, queries, searches, or views your browsing history.</span> Only the deletion API is invoked.
                      </>
                    ) : (
                      <>
                        <strong className="text-white">Requerido para borrar el historial reciente a solicitud del usuario.</strong> Permite purgar el historial según intervalos elegidos (15m, 1h, 24h, 7d, 30d, 1y) para evitar que el autocompletado sugiera distracciones. <span className="text-white font-medium">FocusSpace nunca lee, consulta ni examina tu historial de navegación.</span> Solo invoca la función de borrado.
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono font-semibold text-primary-light">storage</td>
                  <td className="px-5 py-4 font-mono text-xs">
                    chrome.storage.local
                  </td>
                  <td className="px-5 py-4 text-xs leading-relaxed sm:text-sm">
                    {lang === 'en' ? (
                      <>
                        <strong className="text-white">Required to save your preferences locally.</strong> Stores your enabled distraction categories, custom trigger keywords, whitelisted domains, active/archived tasks, and Pomodoro timer intervals. <span className="text-white font-medium">Data resides strictly in your local browser sandbox and is never synced to the cloud.</span>
                      </>
                    ) : (
                      <>
                        <strong className="text-white">Requerido para guardar tus preferencias localmente.</strong> Almacena categorías activadas, palabras clave personalizadas, dominios en lista blanca, tareas activas/archivadas y tiempos del Pomodoro. <span className="text-white font-medium">Los datos residen únicamente en tu dispositivo y nunca se sincronizan con la nube.</span>
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono font-semibold text-primary-light">alarms</td>
                  <td className="px-5 py-4 font-mono text-xs">
                    chrome.alarms.create<br />
                    chrome.alarms.clear
                  </td>
                  <td className="px-5 py-4 text-xs leading-relaxed sm:text-sm">
                    {lang === 'en' ? (
                      <>
                        <strong className="text-white">Required for reliable background Pomodoro timing.</strong> In Manifest V3, background service workers suspend when idle. The alarms API schedules an alarm for the session completion timestamp so the worker wakes up and completes the session even if the popup is closed. <span className="text-white font-medium">No user data is handled.</span>
                      </>
                    ) : (
                      <>
                        <strong className="text-white">Requerido para la sincronización del temporizador Pomodoro en segundo plano.</strong> En Manifest V3 los service workers se suspenden al estar inactivos. Esta API programa una alarma con la hora de finalización para despertar al worker y emitir la notificación, incluso con el popup cerrado. <span className="text-white font-medium">No maneja datos personales.</span>
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 font-mono font-semibold text-primary-light">notifications</td>
                  <td className="px-5 py-4 font-mono text-xs">
                    chrome.notifications.create
                  </td>
                  <td className="px-5 py-4 text-xs leading-relaxed sm:text-sm">
                    {lang === 'en' ? (
                      <>
                        <strong className="text-white">Required to alert you when a focus sprint or break finishes.</strong> Triggers standard OS/browser desktop notifications to signal that a work session or break has concluded. <span className="text-white font-medium">Operates completely offline.</span>
                      </>
                    ) : (
                      <>
                        <strong className="text-white">Requerido para avisarte cuando finaliza un sprint o descanso.</strong> Muestra notificaciones de escritorio estándar del navegador/sistema operativo para avisarte que un bloque de trabajo o pausa concluyó. <span className="text-white font-medium">Opera 100% fuera de línea.</span>
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Deep dive on permissions */}
          <div className="mt-8 space-y-6">
            {/* Tabs deep dive */}
            <div className="rounded-xl border border-primary-light/10 bg-card/40 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-white sm:text-lg flex items-center gap-2">
                <span className="font-mono text-primary-light">#1</span>
                {lang === 'en' ? 'How Open Tabs & URLs are Processed' : 'Cómo se Procesan las Pestañas y URLs Abiertas'}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-anti-flash-muted">
                {lang === 'en' ? (
                  <>
                    When you explicitly trigger <span className="text-white font-medium">&ldquo;Clean Session&rdquo;</span>, FocusSpace queries currently open tabs using <code className="text-xs">chrome.tabs.query(&#123;&#125;)</code>. Each tab&apos;s URL is checked against your enabled distraction categories (Social Media, NSFW, Games, Dating, Entertainment, Health, Shopping, Travel) and your custom keywords.
                  </>
                ) : (
                  <>
                    Cuando pulsas explícitamente <span className="text-white font-medium">&ldquo;Clean Session&rdquo;</span>, FocusSpace consulta las pestañas abiertas mediante <code className="text-xs">chrome.tabs.query(&#123;&#125;)</code>. La URL de cada pestaña se compara contra tus categorías activas y tus palabras clave personalizadas.
                  </>
                )}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-anti-flash-muted sm:text-sm">
                <li>
                  <strong className="text-white">{lang === 'en' ? 'Whitelisted domains are completely immune:' : 'Los dominios en lista blanca son inmunes:'}</strong>{' '}
                  {lang === 'en'
                    ? 'Sites like github.com, docs.google.com, or any domain you add to your whitelist are bypassed and never closed.'
                    : 'Sitios como github.com, docs.google.com o cualquier dominio en tu lista blanca quedan protegidos y nunca se cierran.'}
                </li>
                <li>
                  <strong className="text-white">{lang === 'en' ? 'No host permissions requested:' : 'Sin permisos de host (host_permissions):'}</strong>{' '}
                  {lang === 'en'
                    ? 'FocusSpace does NOT request <all_urls> or broad host permissions. It CANNOT inspect web page content, read DOM trees, intercept forms, capture passwords, or track user keystrokes.'
                    : 'FocusSpace NO solicita <all_urls> ni permisos de host. NO puede ver el contenido interno de las páginas, ni leer el DOM, ni acceder a formularios, contraseñas o pulsaciones de teclado.'}
                </li>
                <li>
                  <strong className="text-white">{lang === 'en' ? 'Ephemeral in-memory evaluation:' : 'Evaluación efímera en memoria:'}</strong>{' '}
                  {lang === 'en'
                    ? 'URLs are evaluated in transient memory during cleanup execution and immediately discarded. They are never written to disk or storage.'
                    : 'Las URLs se evalúan en la memoria volátil durante la limpieza y se descartan de inmediato. Jamás se guardan en disco ni en almacenamiento.'}
                </li>
              </ul>
            </div>

            {/* History deep dive */}
            <div className="rounded-xl border border-primary-light/10 bg-card/40 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-white sm:text-lg flex items-center gap-2">
                <span className="font-mono text-primary-light">#2</span>
                {lang === 'en' ? 'Browsing History: Deletion Only, Never Read' : 'Historial de Navegación: Solo Borrado, Nunca Lectura'}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-anti-flash-muted">
                {lang === 'en' ? (
                  <>
                    A common concern with browser extensions is whether they can spy on browsing history. With FocusSpace, the answer is an emphatic <strong className="text-white">NO</strong>. FocusSpace strictly uses Chrome&apos;s deletion method <code className="text-xs">chrome.history.deleteRange(&#123; startTime, endTime &#125;)</code>.
                  </>
                ) : (
                  <>
                    Una preocupación común con las extensiones es si pueden espiar el historial. Con FocusSpace, la respuesta es un rotundo <strong className="text-white">NO</strong>. FocusSpace utiliza únicamente el método de eliminación <code className="text-xs">chrome.history.deleteRange(&#123; startTime, endTime &#125;)</code>.
                  </>
                )}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-anti-flash-muted sm:text-sm">
                <li>
                  {lang === 'en'
                    ? 'FocusSpace never calls chrome.history.search or chrome.history.getVisits.'
                    : 'FocusSpace nunca llama a chrome.history.search ni a chrome.history.getVisits.'}
                </li>
                <li>
                  {lang === 'en'
                    ? 'We never know which websites you visited, when you visited them, or how frequently.'
                    : 'Nunca sabemos qué sitios web visitaste, cuándo los visitaste ni con qué frecuencia.'}
                </li>
                <li>
                  {lang === 'en'
                    ? 'History is purged across your selected time range (15 min, 1 hr, 24 hrs, 7 days, 30 days, 1 yr) solely to eliminate address bar autocomplete prompts.'
                    : 'El historial se purga según el rango elegido (15 min, 1 hora, 24 horas, 7 días, 30 días, 1 año) con el único fin de evitar sugerencias de autocompletado en la barra de direcciones.'}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: What Data is Stored vs NOT Collected */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {lang === 'en' ? '3. Data Storage & Zero-Collection Policy' : '3. Almacenamiento de Datos y Política de Cero Recopilación'}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* What is stored locally */}
            <div className="rounded-xl border border-primary-light/20 bg-primary-light/5 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <svg className="h-5 w-5 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
                <span>{lang === 'en' ? 'What IS Stored Locally on Your Machine' : 'Lo que SÍ se Guarda Localmente en tu Equipo'}</span>
              </div>
              <p className="mt-2 text-xs text-anti-flash-muted">
                {lang === 'en'
                  ? 'Stored in chrome.storage.local. Never leaves your browser sandbox:'
                  : 'Almacenado en chrome.storage.local. Nunca sale del entorno de tu navegador:'}
              </p>
              <ul className="mt-3 space-y-2 text-xs text-anti-flash-muted sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-light font-bold">✔</span>
                  <span>{lang === 'en' ? 'Toggled distraction categories (e.g., Games, Social Media)' : 'Categorías de distracción activadas (ej. Juegos, Redes Sociales)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-light font-bold">✔</span>
                  <span>{lang === 'en' ? 'Your personal custom trigger keywords' : 'Tus palabras clave personalizadas de bloqueo'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-light font-bold">✔</span>
                  <span>{lang === 'en' ? 'Whitelisted domains exempt from cleanup' : 'Dominios en lista blanca exentos de cierre'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-light font-bold">✔</span>
                  <span>{lang === 'en' ? 'Current active task and up to 10 archived tasks' : 'Tarea activa actual y hasta 10 tareas archivadas'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-light font-bold">✔</span>
                  <span>{lang === 'en' ? 'Pomodoro sprint preferences & session counts' : 'Preferencias de tiempo Pomodoro y contador de sesiones'}</span>
                </li>
              </ul>
              <div className="mt-4 rounded-lg bg-night/60 p-3 text-xs text-anti-flash-muted">
                💡 <span className="text-white font-medium">{lang === 'en' ? 'Instant deletion:' : 'Eliminación inmediata:'}</span>{' '}
                {lang === 'en'
                  ? 'Uninstalling FocusSpace from Chrome completely wipes all local storage data immediately.'
                  : 'Desinstalar FocusSpace de Chrome elimina automáticamente todos los datos del almacenamiento local.'}
              </div>
            </div>

            {/* What is NOT collected */}
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <span>{lang === 'en' ? 'What is NEVER Collected or Retained' : 'Lo que NUNCA se Recopila ni Retiene'}</span>
              </div>
              <p className="mt-2 text-xs text-anti-flash-muted">
                {lang === 'en' ? 'Strict zero-tolerance privacy rules:' : 'Reglas estrictas de cero recopilación:'}
              </p>
              <ul className="mt-3 space-y-2 text-xs text-anti-flash-muted sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{lang === 'en' ? 'No browsing history records or visited URLs' : 'Ningún registro de historial ni URLs visitadas'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{lang === 'en' ? 'No tab URLs stored or persisted' : 'Ninguna URL de pestañas almacenada o persistida'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{lang === 'en' ? 'No personal identifiers, emails, names, or accounts' : 'Ningún identificador personal, correo, nombre o cuenta'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{lang === 'en' ? 'No keystrokes, form inputs, passwords, or cookies' : 'Ninguna pulsación de teclas, formulario, clave o cookie'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{lang === 'en' ? 'No analytics, telemetry, or crash tracking' : 'Sin analítica de uso, telemetría ni reporte de caídas'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>{lang === 'en' ? 'No data sales, advertising, or creditworthiness evaluation' : 'Sin venta de datos, publicidad ni evaluación crediticia'}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Destructive Actions Are User-Initiated */}
        <section className="mb-12 rounded-xl border border-primary-light/10 bg-card/40 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {lang === 'en' ? '4. Destructive Actions Are Always User-Initiated' : '4. Las Acciones Destructivas Siempre las Inicia el Usuario'}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-anti-flash-muted sm:text-base">
            {lang === 'en' ? (
              <>
                Closing tabs and clearing browsing history are irreversible browser operations. FocusSpace implements strict safeguards to protect your work:
              </>
            ) : (
              <>
                Cerrar pestañas y borrar el historial de navegación son operaciones irreversibles. FocusSpace implementa estrictas salvaguardas para proteger tu trabajo:
              </>
            )}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-primary-light/10 bg-night/50 p-4">
              <h4 className="text-sm font-semibold text-white">
                {lang === 'en' ? 'Manual Triggering Only' : 'Activación Exclusivamente Manual'}
              </h4>
              <p className="mt-1 text-xs text-anti-flash-muted sm:text-sm">
                {lang === 'en'
                  ? 'Tabs are closed and history is cleared ONLY when you explicitly click the action button in the extension popup. FocusSpace never performs sweeps automatically or in the background.'
                  : 'Las pestañas solo se cierran y el historial solo se purga cuando haces clic explícitamente en el popup. FocusSpace nunca ejecuta barridos automáticos o programados en segundo plano.'}
              </p>
            </div>
            <div className="rounded-lg border border-primary-light/10 bg-night/50 p-4">
              <h4 className="text-sm font-semibold text-white">
                {lang === 'en' ? 'Whitelist Precedence' : 'Prioridad Absoluta de la Lista Blanca'}
              </h4>
              <p className="mt-1 text-xs text-anti-flash-muted sm:text-sm">
                {lang === 'en'
                  ? 'Whitelisted domains always override category rules. If a URL contains a whitelisted domain, it will never be closed, regardless of active keywords.'
                  : 'Los dominios en lista blanca siempre prevalecen sobre las categorías. Si una URL contiene un dominio permitido, jamás se cerrará, sin importar las palabras clave activas.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Chrome Web Store Official Compliance Questionnaire */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {lang === 'en' ? '5. Chrome Web Store Compliance Questionnaire' : '5. Respuestas al Cuestionario de la Chrome Web Store'}
          </h2>
          <p className="mt-2 text-sm text-anti-flash-muted">
            {lang === 'en'
              ? 'Official answers submitted to the Google Chrome Web Store Developer Console privacy declaration:'
              : 'Respuestas oficiales registradas en la consola de desarrollador de Google Chrome Web Store:'}
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-primary-light/10 bg-card/30 p-4 gap-2">
              <span className="text-sm font-medium text-white">
                {lang === 'en' ? 'Does this extension collect or transmit personal data?' : '¿Esta extensión recopila o transmite datos personales?'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                NO
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-primary-light/10 bg-card/30 p-4 gap-2">
              <span className="text-sm font-medium text-white">
                {lang === 'en' ? 'Does this extension transfer data to any third party?' : '¿Esta extensión transfiere datos a terceros?'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                NO
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-primary-light/10 bg-card/30 p-4 gap-2">
              <span className="text-sm font-medium text-white">
                {lang === 'en' ? 'Does this extension use data for creditworthiness or lending?' : '¿Usa datos para fines de solvencia crediticia o préstamos?'}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                NO
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-primary-light/10 bg-card/30 p-4 gap-2">
              <span className="text-sm font-medium text-white">
                {lang === 'en' ? 'Network Architecture / Hosting:' : 'Arquitectura de Red y Hospedaje:'}
              </span>
              <span className="text-xs font-mono text-primary-light sm:text-right">
                Client-Side Only / Zero Remote Calls
              </span>
            </div>
          </div>
        </section>

        {/* Section 7: Open Source & Code Auditability */}
        <section className="mb-12 rounded-xl border border-primary-light/15 bg-gradient-to-br from-primary-light/5 via-card/50 to-night p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-light/20 bg-primary-light/10 text-primary-light">
              <IconGitHub className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">
                {lang === 'en' ? '6. Open Source Transparency (GPLv3)' : '6. Transparencia y Código Abierto (GPLv3)'}
              </h2>
              <p className="text-xs text-anti-flash-muted">
                {lang === 'en' ? 'Don&apos;t just trust our words. Inspect the code.' : 'No confíes solo en nuestras palabras. Audita el código.'}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-anti-flash-muted">
            {lang === 'en' ? (
              <>
                FocusSpace is licensed under the <strong className="text-white">GNU General Public License v3.0 (GPL-3.0)</strong>. The complete source code of both the Chrome extension and this website is public and auditable on GitHub. You can verify every single line of code, build the extension locally, or fork the repository.
              </>
            ) : (
              <>
                FocusSpace está licenciado bajo la <strong className="text-white">Licencia Pública General de GNU v3.0 (GPL-3.0)</strong>. El código fuente completo tanto de la extensión como de este sitio web es público y auditable en GitHub. Puedes verificar cada línea de código, compilar la extensión localmente o realizar un fork.
              </>
            )}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
            >
              <IconGitHub className="h-4 w-4" />
              <span>{lang === 'en' ? 'Inspect Source Code on GitHub' : 'Revisar Código en GitHub'}</span>
            </a>
            <a
              href={GITHUB_ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-light/20 bg-primary-light/5 px-4 py-2 text-xs font-semibold text-anti-flash-muted transition-colors hover:text-white hover:bg-primary-light/10"
            >
              <span>{lang === 'en' ? 'Report a Concern or Audit Issue' : 'Reportar una Duda o Auditoría'}</span>
            </a>
          </div>
        </section>

        {/* Section 8: Changes & Contact */}
        <section className="mb-12 border-t border-primary-light/10 pt-8">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {lang === 'en' ? '7. Changes to this Policy & Contact' : '7. Modificaciones a esta Política y Contacto'}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-anti-flash-muted sm:text-base">
            <p>
              {lang === 'en'
                ? 'Any revisions to this privacy policy will be committed directly to the public GitHub repository, and the effective date at the top of this document will be updated accordingly.'
                : 'Cualquier modificación a esta política de privacidad será publicada directamente en el repositorio público de GitHub y la fecha de vigencia se actualizará en concordancia.'}
            </p>
            <p>
              {lang === 'en' ? (
                <>
                  If you have questions, feedback, or security inquiries regarding FocusSpace, please open an issue in our{' '}
                  <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer" className="text-primary-light underline hover:text-white">
                    GitHub Issues tracker
                  </a>{' '}
                  or reach out to the publisher at{' '}
                  <span className="font-mono text-white text-xs sm:text-sm">exologicagency@gmail.com</span>.
                </>
              ) : (
                <>
                  Si tienes preguntas, sugerencias o inquietudes de seguridad sobre FocusSpace, puedes abrir un issue en nuestro{' '}
                  <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer" className="text-primary-light underline hover:text-white">
                    rastreador de GitHub Issues
                  </a>{' '}
                  o comunicarte con el desarrollador en{' '}
                  <span className="font-mono text-white text-xs sm:text-sm">exologicagency@gmail.com</span>.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Bottom CTA / Return Button */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary-light/15 bg-card/60 p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-base font-semibold text-white sm:text-lg">
              {lang === 'en' ? 'Ready to focus without distractions?' : '¿Listo para enfocarte sin distracciones?'}
            </h3>
            <p className="mt-1 text-xs text-anti-flash-muted sm:text-sm">
              {lang === 'en'
                ? 'Clean distraction tabs, reset browsing history, and stay in deep work.'
                : 'Cierra pestañas distractoras, reinicia el historial y mantente en trabajo profundo.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-primary-light/20 bg-primary-light/5 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-light/15"
            >
              {lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}
            </Link>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-primary/25 transition-opacity hover:opacity-90"
            >
              {lang === 'en' ? 'Install Extension' : 'Instalar Extensión'}
            </a>
          </div>
        </div>
      </main>

      {/* Simplified Footer */}
      <footer className="border-t border-primary-light/10 py-8 text-center text-xs text-anti-flash-muted">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>FocusSpace &copy; 2026 Exologic LLC. GNU GPLv3 Licensed.</div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              {lang === 'en' ? 'Home' : 'Inicio'}
            </Link>
            <span>&middot;</span>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <span>&middot;</span>
            <a href={GITHUB_ISSUES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Support & Issues
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
