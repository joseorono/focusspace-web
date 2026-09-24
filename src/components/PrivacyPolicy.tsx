import { useState, useEffect } from 'react'
import { IconGitHub } from '@/components/icons'
import {
  GITHUB_URL,
  GITHUB_ISSUES_URL,
  CHROME_STORE_URL,
  EXOLOGIC_URL,
} from '@/constants/misc'

interface PrivacyPolicyProps {
  onNavigateHome?: () => void
}

type Language = 'en' | 'es'

export function PrivacyPolicy({ onNavigateHome }: PrivacyPolicyProps = {}) {
  const [lang, setLang] = useState<Language>('en')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title =
      lang === 'en'
        ? 'Privacy Policy — FocusSpace'
        : 'Política de Privacidad — FocusSpace'
  }, [lang])

  const handleHomeClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault()
      onNavigateHome()
    }
  }

  return (
    <div className="relative min-h-screen bg-night text-anti-flash-muted selection:bg-primary-light/20 selection:text-white">
      {/* Background decoration glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[450px] w-[750px] -translate-x-1/2 rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #60a5fa 0%, #8b5cf6 60%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-primary-light/10 bg-night/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <a
            href="/"
            onClick={handleHomeClick}
            className="group inline-flex items-center gap-2 text-sm font-medium text-anti-flash-muted transition-colors hover:text-white"
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
            <span>{lang === 'en' ? 'Back to Home' : 'Volver al Inicio'}</span>
          </a>

          {/* Language Toggle */}
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
          </div>
        </div>
      </header>

      {/* Main Document Content */}
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {/* Document Header */}
        <header className="mb-12 border-b border-primary-light/10 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/icons/cubo1.svg"
              alt="FocusSpace Logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="text-xl font-bold tracking-tight text-white">FocusSpace</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {lang === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-anti-flash-muted">
            <div>
              <span className="font-semibold text-white">{lang === 'en' ? 'Effective Date:' : 'Fecha de entrada en vigor:'}</span>{' '}
              September 17, 2026
            </div>
            <span className="hidden sm:inline">&middot;</span>
            <div>
              <span className="font-semibold text-white">{lang === 'en' ? 'Publisher:' : 'Desarrollador:'}</span>{' '}
              <a href={EXOLOGIC_URL} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors">
                Exologic LLC
              </a>
            </div>
            <span className="hidden sm:inline">&middot;</span>
            <div>
              <span className="font-semibold text-white">{lang === 'en' ? 'License:' : 'Licencia:'}</span>{' '}
              GNU GPLv3 (Open Source)
            </div>
          </div>
        </header>

        {/* Section: Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '1. Summary' : '1. Resumen'}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace does not collect, transmit, store on external servers, or sell any personal data. There is no backend server, no cloud database, no tracking cookies, no analytics, no telemetry, and no account or sign-up system.
                </>
              ) : (
                <>
                  FocusSpace no recopila, transmite, almacena en servidores externos ni comercializa ningún dato personal. No cuenta con servidores backend, bases de datos en la nube, cookies de rastreo, analíticas, telemetría ni sistemas de registro de cuentas.
                </>
              )}
            </p>
            <p>
              {lang === 'en' ? (
                <>
                  Everything the extension does happens <strong className="text-white">100% locally inside your browser</strong>. Your browsing habits and digital workspace remain entirely private to your device.
                </>
              ) : (
                <>
                  Todo lo que realiza la extensión ocurre <strong className="text-white">100% de forma local en tu navegador</strong>. Tus hábitos de navegación y tu espacio de trabajo digital permanecen de manera exclusiva en tu dispositivo.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: Single Purpose */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '2. Single Purpose' : '2. Propósito Único'}
          </h2>
          <div className="mt-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace is a productivity and digital wellbeing tool. It eliminates distractions by closing tabs that match user-selected distraction categories, clearing recent browsing history upon user request, and providing a local Pomodoro focus timer with task management.
                </>
              ) : (
                <>
                  FocusSpace es una herramienta de productividad y bienestar digital. Elimina distracciones cerrando pestañas que coincidan con categorías seleccionadas por el usuario, limpiando el historial reciente a solicitud del usuario y proporcionando un temporizador Pomodoro local con gestión de tareas.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: Permissions and Why They Are Needed */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '3. Permissions and Technical Justifications' : '3. Permisos y Justificaciones Técnicas'}
          </h2>
          <p className="mt-2 text-sm text-anti-flash-muted">
            {lang === 'en'
              ? 'FocusSpace follows the principle of minimal permissions. Below are the permissions declared in our extension manifest and the precise reason each is required:'
              : 'FocusSpace sigue el principio de permisos mínimos. A continuación se detallan los permisos declarados en el manifest de la extensión y el motivo exacto de cada uno:'}
          </p>

          <div className="mt-4 overflow-hidden rounded-xl border border-primary-light/15 bg-card/60">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-primary-light/15 bg-primary-light/5 text-xs font-semibold uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 w-32">
                    {lang === 'en' ? 'Permission' : 'Permiso'}
                  </th>
                  <th scope="col" className="px-4 py-3.5">
                    {lang === 'en' ? 'Why it is required' : 'Por qué es necesario'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary-light/10 text-anti-flash-muted">
                <tr>
                  <td className="px-4 py-3.5 font-mono font-medium text-primary-light align-top">
                    tabs
                  </td>
                  <td className="px-4 py-3.5 text-xs sm:text-sm leading-relaxed">
                    {lang === 'en' ? (
                      <>
                        Required to read open tab URLs to identify tabs matching user-selected distraction categories and close them when the user clicks &ldquo;Clean Session&rdquo;. Evaluated strictly in-memory at the moment of cleanup and immediately discarded. Whitelisted domains are always preserved.
                      </>
                    ) : (
                      <>
                        Requerido para leer las URLs de las pestañas abiertas con el fin de identificar pestañas que coincidan con categorías de distracción y cerrarlas al pulsar &ldquo;Clean Session&rdquo;. Se evalúan estrictamente en memoria al momento de la limpieza y se descartan de inmediato. Los dominios en lista blanca siempre se preservan.
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3.5 font-mono font-medium text-primary-light align-top">
                    history
                  </td>
                  <td className="px-4 py-3.5 text-xs sm:text-sm leading-relaxed">
                    {lang === 'en' ? (
                      <>
                        Required to clear browsing history within user-selected time ranges (via <code className="text-xs">chrome.history.deleteRange</code>) to remove recent distraction traces and address bar autocomplete suggestions. FocusSpace never searches, reads, or collects browsing history entries.
                      </>
                    ) : (
                      <>
                        Requerido para borrar el historial de navegación dentro de los rangos elegidos por el usuario (mediante <code className="text-xs">chrome.history.deleteRange</code>) para eliminar rastros de distracción y sugerencias de autocompletado en la barra de direcciones. FocusSpace nunca busca, lee ni recopila entradas del historial.
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3.5 font-mono font-medium text-primary-light align-top">
                    storage
                  </td>
                  <td className="px-4 py-3.5 text-xs sm:text-sm leading-relaxed">
                    {lang === 'en' ? (
                      <>
                        Required to save user preferences locally (enabled distraction categories, custom trigger keywords, whitelisted domains, active tasks, and Pomodoro settings) via <code className="text-xs">chrome.storage.local</code>. Never synced to external servers or the cloud.
                      </>
                    ) : (
                      <>
                        Requerido para guardar las preferencias del usuario localmente (categorías habilitadas, palabras clave personalizadas, dominios permitidos, tareas y tiempos de Pomodoro) mediante <code className="text-xs">chrome.storage.local</code>. Nunca se sincroniza con servidores externos ni con la nube.
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3.5 font-mono font-medium text-primary-light align-top">
                    alarms
                  </td>
                  <td className="px-4 py-3.5 text-xs sm:text-sm leading-relaxed">
                    {lang === 'en' ? (
                      <>
                        Required to schedule reliable background alarms (<code className="text-xs">chrome.alarms</code>) that notify the user when Pomodoro focus and break intervals expire, even when the extension popup is closed.
                      </>
                    ) : (
                      <>
                        Requerido para programar alarmas en segundo plano (<code className="text-xs">chrome.alarms</code>) que avisen al usuario cuando finalicen los intervalos de trabajo y descanso de Pomodoro, incluso si el popup de la extensión está cerrado.
                      </>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-3.5 font-mono font-medium text-primary-light align-top">
                    notifications
                  </td>
                  <td className="px-4 py-3.5 text-xs sm:text-sm leading-relaxed">
                    {lang === 'en' ? (
                      <>
                        Required to display system desktop notifications when a Pomodoro focus sprint or rest break completes.
                      </>
                    ) : (
                      <>
                        Requerido para mostrar notificaciones de escritorio del sistema cuando finaliza un sprint de enfoque o una pausa de Pomodoro.
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-anti-flash-muted sm:text-sm">
            {lang === 'en' ? (
              <>
                <strong className="text-white">No Host Permissions:</strong> FocusSpace does not request host permissions (<code className="text-xs">&lt;all_urls&gt;</code>) and cannot read, inspect, or modify the contents, text, form inputs, or cookies of any web page.
              </>
            ) : (
              <>
                <strong className="text-white">Sin permisos de host:</strong> FocusSpace no solicita permisos de host (<code className="text-xs">&lt;all_urls&gt;</code>) y no puede leer, inspeccionar ni modificar el contenido, texto, formularios o cookies de ninguna página web.
              </>
            )}
          </p>
        </section>

        {/* Section: Data Storage */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '4. What Data is Stored, and Where' : '4. Qué Datos se Almacenan y Dónde'}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace stores your preferences using your browser&apos;s sandboxed local extension storage (<code className="text-xs">chrome.storage.local</code>). That data never leaves your device. It consists exclusively of:
                </>
              ) : (
                <>
                  FocusSpace almacena tus preferencias utilizando el almacenamiento local aislado de extensiones del navegador (<code className="text-xs">chrome.storage.local</code>). Esos datos nunca salen de tu dispositivo y consisten únicamente en:
                </>
              )}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>{lang === 'en' ? 'Which distraction categories you have enabled' : 'Cuáles categorías de distracción tienes habilitadas'}</li>
              <li>{lang === 'en' ? 'Custom trigger keywords you have added' : 'Palabras clave personalizadas añadidas por ti'}</li>
              <li>{lang === 'en' ? 'Domains you have added to your whitelist' : 'Dominios que has agregado a tu lista blanca'}</li>
              <li>{lang === 'en' ? 'Your active task and up to 10 archived recent tasks' : 'Tu tarea activa actual y hasta 10 tareas archivadas'}</li>
              <li>{lang === 'en' ? 'Pomodoro timer durations (sprint and break minutes) and session counter' : 'Tiempos del temporizador Pomodoro y contador de sesiones'}</li>
            </ul>
            <p className="text-sm">
              {lang === 'en' ? (
                <>
                  You can erase all stored data at any time by removing the extension from your browser.
                </>
              ) : (
                <>
                  Puedes borrar todos los datos almacenados en cualquier momento simplemente desinstalando la extensión de tu navegador.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: What Data is NOT Collected */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '5. What Data is NOT Collected' : '5. Qué Datos NO se Recopilan'}
          </h2>
          <div className="mt-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">{lang === 'en' ? 'No browsing history records:' : 'Sin registros de historial de navegación:'}</strong>{' '}
                {lang === 'en'
                  ? 'Browsing history is never read, copied, logged, or uploaded. Deletion occurs directly via Chrome APIs without examining history contents.'
                  : 'El historial nunca es leído, copiado, registrado ni subido. El borrado ocurre directamente mediante la API de Chrome sin examinar su contenido.'}
              </li>
              <li>
                <strong className="text-white">{lang === 'en' ? 'No tab URLs retained:' : 'Sin retención de URLs de pestañas:'}</strong>{' '}
                {lang === 'en'
                  ? 'Tab URLs are evaluated against keywords in transient memory only when you click the cleaner, and then immediately discarded.'
                  : 'Las URLs de las pestañas se comparan contra palabras clave en la memoria volátil solo al hacer clic en limpiar y se descartan al instante.'}
              </li>
              <li>
                <strong className="text-white">{lang === 'en' ? 'No personal or account data:' : 'Sin datos personales ni de cuentas:'}</strong>{' '}
                {lang === 'en'
                  ? 'No names, email addresses, IP addresses, or account credentials are ever requested or collected.'
                  : 'Nunca se solicitan ni recopilan nombres, correos electrónicos, direcciones IP ni credenciales de acceso.'}
              </li>
              <li>
                <strong className="text-white">{lang === 'en' ? 'No analytics or telemetry:' : 'Sin analíticas ni telemetría:'}</strong>{' '}
                {lang === 'en'
                  ? 'No analytics packages, crash report trackers, advertising frameworks, or device fingerprinting.'
                  : 'No contiene paquetes de analíticas, rastreadores de errores, frameworks publicitarios ni huellas digitales del dispositivo.'}
              </li>
              <li>
                <strong className="text-white">{lang === 'en' ? 'No third-party data sharing:' : 'Sin transferencia de datos a terceros:'}</strong>{' '}
                {lang === 'en'
                  ? 'No data is ever transferred, shared, or sold to third parties for any purpose, including creditworthiness or advertising.'
                  : 'Ningún dato es transferido, compartido ni vendido a terceros bajo ningún concepto, incluyendo solvencia económica o publicidad.'}
              </li>
            </ul>
          </div>
        </section>

        {/* Section: Destructive Actions */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '6. Destructive Actions Are Always User-Initiated' : '6. Las Acciones Destructivas Siempre son Iniciadas por el Usuario'}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  Closing tabs and clearing browsing history are irreversible browser operations. They run <strong className="text-white">only when you explicitly click</strong> the corresponding button inside the extension popup.
                </>
              ) : (
                <>
                  Cerrar pestañas y borrar el historial son operaciones irreversibles. Se ejecutan <strong className="text-white">únicamente cuando haces clic explícito</strong> en el botón correspondiente dentro del popup de la extensión.
                </>
              )}
            </p>
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace never closes tabs or wipes history automatically in the background or on an automated schedule. In addition, domains included in your whitelist are strictly immune and will never be closed by the tab cleaner.
                </>
              ) : (
                <>
                  FocusSpace nunca cierra pestañas ni borra el historial de forma automática en segundo plano ni mediante temporizadores automáticos. Además, los dominios incluidos en tu lista blanca son inmunes y nunca serán cerrados por el limpiador.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: Network Activity */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '7. Network Activity' : '7. Actividad de Red'}
          </h2>
          <div className="mt-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace makes <strong className="text-white">no external network requests</strong>. The extension operates entirely client-side within the browser&apos;s service worker and popup.
                </>
              ) : (
                <>
                  FocusSpace <strong className="text-white">no realiza ninguna petición de red externa</strong>. La extensión opera completamente del lado del cliente dentro del service worker y el popup del navegador.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: Open Source */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '8. Open Source & Auditability' : '8. Código Abierto y Auditabilidad'}
          </h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  FocusSpace is licensed under the <strong className="text-white">GNU General Public License v3.0 (GPLv3)</strong>. The complete source code of the extension is publicly available for inspection, audit, or forking at{' '}
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light hover:underline font-mono text-xs sm:text-sm"
                  >
                    github.com/joseorono/focus-space
                  </a>.
                </>
              ) : (
                <>
                  FocusSpace está licenciado bajo la <strong className="text-white">Licencia Pública General de GNU v3.0 (GPLv3)</strong>. El código fuente completo de la extensión está disponible de forma pública para inspección, auditoría o desarrollo colaborativo en{' '}
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light hover:underline font-mono text-xs sm:text-sm"
                  >
                    github.com/joseorono/focus-space
                  </a>.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: Changes to this Policy */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '9. Changes to this Policy' : '9. Cambios a esta Política'}
          </h2>
          <div className="mt-3 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  Any updates to this policy will be committed directly to the public repository, and the effective date at the top of this document will be updated accordingly.
                </>
              ) : (
                <>
                  Cualquier actualización a esta política se publicará directamente en el repositorio público, y la fecha de vigencia al inicio de este documento se actualizará en consecuencia.
                </>
              )}
            </p>
          </div>
        </section>

        {/* Section: Contact */}
        <section className="mb-12 border-t border-primary-light/10 pt-8">
          <h2 className="text-xl font-semibold text-white">
            {lang === 'en' ? '10. Contact & Support' : '10. Contacto y Soporte'}
          </h2>
          <div className="mt-3 space-y-2 text-sm leading-relaxed sm:text-base text-anti-flash-muted">
            <p>
              {lang === 'en' ? (
                <>
                  If you have questions, feedback, or concerns regarding this privacy policy, you can reach out via:
                </>
              ) : (
                <>
                  Si tienes preguntas, comentarios o inquietudes respecto a esta política de privacidad, puedes contactarnos a través de:
                </>
              )}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <span className="text-white font-medium">GitHub Issues:</span>{' '}
                <a
                  href={GITHUB_ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light hover:underline"
                >
                  github.com/joseorono/focus-space/issues
                </a>
              </li>
              <li>
                <span className="text-white font-medium">Publisher:</span> Exologic LLC (
                <a href={EXOLOGIC_URL} target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">
                  exologic.agency
                </a>
                )
              </li>
            </ul>
          </div>
        </section>

        {/* Bottom Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-primary-light/15 bg-card/40 p-6">
          <a
            href="/"
            onClick={handleHomeClick}
            className="rounded-full border border-primary-light/20 bg-primary-light/5 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-light/15"
          >
            &larr; {lang === 'en' ? 'Return to FocusSpace' : 'Volver a FocusSpace'}
          </a>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            {lang === 'en' ? 'Install Chrome Extension' : 'Instalar Extensión de Chrome'}
          </a>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-primary-light/10 py-8 text-center text-xs text-anti-flash-muted">
        <div className="mx-auto max-w-4xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>FocusSpace &copy; 2026 Exologic LLC. GNU GPLv3 Licensed.</div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              onClick={handleHomeClick}
              className="hover:text-white transition-colors"
            >
              {lang === 'en' ? 'Home' : 'Inicio'}
            </a>
            <span>&middot;</span>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <IconGitHub className="h-3.5 w-3.5" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
