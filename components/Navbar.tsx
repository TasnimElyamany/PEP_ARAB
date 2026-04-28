"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Innovation Hub", href: "/innovation" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Training Portal", href: "/training" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Our Clients", href: "/clients" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-2xl shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1565c0] to-[#00b4d8] flex items-center justify-center shadow-lg group-hover:shadow-[#00b4d8]/40 transition-shadow duration-300">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg tracking-wide">PEP ARAB</span>
            <span className="text-[#00b4d8] text-[10px] font-medium tracking-[0.2em] uppercase">
              Control Systems
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    active
                      ? "text-[#00b4d8]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#1565c0] to-[#00b4d8] transition-all duration-300 ${
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:peparab@peparab.com"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:scale-105 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#1565c0]/20 text-[#00b4d8]"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:peparab@peparab.com"
            className="block mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white text-sm font-semibold text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
