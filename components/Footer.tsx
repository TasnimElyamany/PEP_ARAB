import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/innovation" },
    { label: "Innovation Hub", href: "/innovation" },
    { label: "Our Clients", href: "/clients" },
    { label: "Newsroom", href: "/newsroom" },
  ],
  Products: [
    { label: "Smart PLC", href: "/marketplace" },
    { label: "SCADA Platform", href: "/marketplace" },
    { label: "Panel PC", href: "/marketplace" },
    { label: "Fire Alarm Systems", href: "/marketplace" },
  ],
  Services: [
    { label: "Training Portal", href: "/training" },
    { label: "Industrial Control", href: "/marketplace" },
    { label: "Marine Systems", href: "/marketplace" },
    { label: "Power Panels", href: "/marketplace" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#020b18] border-t border-white/5">
      {/* CTA band */}
      <div className="bg-gradient-to-r from-[#1565c0] via-[#0d2040] to-[#00b4d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Ready to power your operations?
            </h3>
            <p className="text-blue-100 text-sm">
              Partner with Egypt's leading control systems provider since 2001.
            </p>
          </div>
          <a
            href="mailto:peparab@peparab.com"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#1565c0] font-bold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/pep_logo.svg"
                alt="PEP ARAB Logo"
                width={160}
                height={46}
                className="h-11 w-auto object-contain rounded-md opacity-90 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Egypt's premier automation and control technology provider, delivering
              world-class PLC, SCADA, and industrial solutions across the Arab region
              since 2001.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:peparab@peparab.com"
                className="flex items-center gap-3 text-white/50 hover:text-[#00b4d8] text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                peparab@peparab.com
              </a>
              <a
                href="tel:+20109448468"
                className="flex items-center gap-3 text-white/50 hover:text-[#00b4d8] text-sm transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                (+20) 109 448 8468
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Gamasa Industrial Zone, North Egypt
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-[#00b4d8] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} PEP ARAB Control Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs italic">
              "When Failure Is Not An Option"
            </span>
            <a
              href="https://peparab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#00b4d8] transition-colors"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
