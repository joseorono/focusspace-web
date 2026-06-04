import { useState, useEffect } from "react";
import { IconGitHub } from "@/components/icons";
import PlugConnectedIcon from "@/components/ui/plug-connected-icon";
import { GITHUB_URL, CHROME_STORE_URL } from "@/constants/misc";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-night/95 backdrop-blur-md border-b border-primary-light/10 shadow-lg shadow-black/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 items-center justify-between px-6 md:px-20">
          {/* Logo */}
          <a href="#" className="inline-flex items-center gap-2.5 leading-none">
            <img
              src="/icons/cubo1.svg"
              alt="FocusSpace logo"
              width={60}
              height={60}
              className="block h-10 w-10 shrink-0 md:h-12 md:w-12"
              fetchPriority="high"
            />
            <span className="text-2xl font-bold tracking-tight leading-none text-white md:text-3xl 2xl:text-4xl">
              FocusSpace
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-anti-flash-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-anti-flash-muted transition-colors hover:text-white"
            >
              <IconGitHub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <PlugConnectedIcon size={18} strokeWidth={2} />
              Install Extension
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded-md p-3 text-anti-flash-muted transition-colors hover:text-white md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Page backdrop — blurs the rest of the site, click to close */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-55 bg-black/60 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Mobile slide panel — enters from the right */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-60 flex h-auto w-70 flex-col rounded-l-2xl bg-night shadow-2xl transition-transform duration-500 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header with close button */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <span className="text-sm font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="rounded-md p-1.5 text-anti-flash-muted transition-colors hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav links — centered */}
        <nav className="flex flex-col items-center gap-1 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full py-3 text-center text-sm text-anti-flash-muted transition-colors hover:text-white"
              onClick={close}
            >
              {link.label}
            </a>
          ))}

          {/* Bottom actions — centered */}
          <div className="flex flex-col items-center gap-4 border-t border-white/10 px-6 pb-6 pt-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-anti-flash-muted transition-colors hover:text-white"
            >
              <IconGitHub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              onClick={close}
            >
              <PlugConnectedIcon size={18} strokeWidth={2} />
              Install Extension
            </a>
          </div>

          {/* Footer branding */}
          <div className="border-t border-white/10 px-6 py-5 text-center">
            <span className="text-lg font-bold tracking-widest text-white">
              FocusSpace
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}
