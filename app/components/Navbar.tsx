"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const glassNav =
  "bg-white/[0.07] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_32px_-8px_rgba(0,0,0,0.5)]";

const glassNavScrolled =
  "bg-white/[0.1] backdrop-blur-2xl backdrop-saturate-150 border border-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_40px_-8px_rgba(0,0,0,0.6)]";

const glassPanel =
  "bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_16px_48px_-8px_rgba(0,0,0,0.55)]";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
        <nav
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 ${
            scrolled ? glassNavScrolled : glassNav
          }`}
        >
          <div className="px-6 h-14 flex items-center justify-between">
            {/* LOGO */}
            <Link
              href="/"
              className="text-sm font-bold tracking-widest text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono"
            >
              Dhruv Patel
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-white bg-white/10 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {isActive(link.href) && <span className="text-blue-400 mr-1">›</span>}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-gray-400 group-hover:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-px bg-gray-400 group-hover:bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-gray-400 group-hover:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>

        {/* MOBILE MENU — floating glass panel */}
        <div
          className={`md:hidden max-w-5xl mx-auto transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className={`rounded-2xl px-4 py-4 flex flex-col gap-1 ${glassPanel}`}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white bg-white/10 border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {isActive(link.href) && <span className="text-blue-400 mr-2">›</span>}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}