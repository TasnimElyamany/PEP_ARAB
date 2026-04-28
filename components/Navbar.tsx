"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home",           href: "/" },
  { label: "Innovation Hub", href: "/innovation" },
  { label: "Marketplace",    href: "/marketplace" },
  { label: "Training",       href: "/training" },
  { label: "Newsroom",       href: "/newsroom" },
  { label: "Our Clients",    href: "/clients" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || pathname !== "/";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
      solid ? "bg-[#050e1d]/96 backdrop-blur-xl border-b border-white/6 shadow-lg shadow-black/30" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <nav className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group -ml-3">
            <Image
              src="/pep_logo.svg"
              alt="PEP ARAB Logo"
              width={150}
              height={42}
              className="h-10 w-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-200"
              priority
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link href={href}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-colors duration-200 ${
                      active ? "text-white" : "text-white/50 hover:text-white/90 hover:bg-white/4"
                    }`}>
                    {label}
                    {active && (
                      <span className="absolute bottom-0.5 left-4 right-4 h-px bg-gradient-to-r from-[#1455a4] to-[#00b4d8] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="mailto:peparab@peparab.com"
              className="px-5 py-2.5 rounded-xl bg-[#1455a4] text-white text-[13px] font-semibold tracking-wide hover:bg-[#1a67c0] hover:shadow-lg hover:shadow-[#1455a4]/30 transition-all duration-200">
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(v => !v)}
            className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/8 rounded-lg transition-colors">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[400px]" : "max-h-0"}`}>
        <div className="bg-[#050e1d] border-t border-white/6 px-8 py-4 space-y-0.5">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href}
                className={`block px-3 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors ${
                  active ? "bg-[#1455a4]/20 text-[#00b4d8]" : "text-white/55 hover:bg-white/5 hover:text-white"
                }`}>
                {label}
              </Link>
            );
          })}
          <a href="mailto:peparab@peparab.com"
            className="block mt-3 px-3 py-3 rounded-xl bg-[#1455a4] text-white text-[13.5px] font-semibold text-center">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
