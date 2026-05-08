"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

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
    { href: "/#experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#0a0a0a]/80 backdrop-blur-sm"
        } border-b border-white/5`}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="text-sm font-bold tracking-widest text-teal-400 hover:text-teal-300 transition-colors duration-200 font-mono"
          >
            Dhruv Patel
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wide rounded transition-all duration-200 group ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className="absolute inset-0 bg-white/5 rounded border border-white/10" />
                )}
                {/* Hover indicator */}
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded transition-all duration-200" />
                <span className="relative">
                  {isActive(link.href) && (
                    <span className="text-teal-400 mr-1">›</span>
                  )}
                  {link.label}
                </span>
              </a>
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

        {/* MOBILE MENU */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } border-t border-white/5 bg-[#0a0a0a]`}
        >
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 text-xs font-mono tracking-wide rounded transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white bg-white/5 border border-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive(link.href) && (
                  <span className="text-teal-400 mr-2">›</span>
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-14" />
    </>
  );
}