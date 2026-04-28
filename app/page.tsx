"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Cpu,
  Globe,
  Award,
  ChevronRight,
  Zap,
  BarChart3,
  Users,
  Calendar,
  CheckCircle,
  Layers,
  Radio,
} from "lucide-react";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, end);
            setCount(Math.floor(current));
            if (current >= end) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Calendar, value: 24, suffix: "+", label: "Years of Excellence" },
  { icon: Globe, value: 15, suffix: "+", label: "Countries Served" },
  { icon: BarChart3, value: 200, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 50, suffix: "+", label: "Industrial Partners" },
];

const offerings = [
  {
    icon: Cpu,
    title: "Smart PLC Systems",
    description:
      "High-performance modular PLCs with marine certification and multi-I/O support — built to withstand the harshest industrial environments.",
    href: "/marketplace",
    color: "from-[#1565c0] to-[#1976d2]",
  },
  {
    icon: BarChart3,
    title: "SCADA Platform",
    description:
      "Web-enabled HMI development with Winlog technology, supporting multiple communication protocols and real-time monitoring.",
    href: "/marketplace",
    color: "from-[#00b4d8] to-[#48cae4]",
  },
  {
    icon: Shield,
    title: "Fire & Safety Systems",
    description:
      "SALMO series addressable fire alarm panels — up to 4 loops with 150 sensors each, for critical infrastructure protection.",
    href: "/marketplace",
    color: "from-[#ffb300] to-[#ffd54f]",
  },
  {
    icon: Layers,
    title: "Industrial Computers",
    description:
      "PC/104 SBCs and VME/CPCI form factor industrial computers — authorized Fastwel partner delivering ruggedized computing.",
    href: "/marketplace",
    color: "from-[#7c3aed] to-[#9d5ff0]",
  },
  {
    icon: Radio,
    title: "Marine Control Systems",
    description:
      "Bureau Veritas-approved marine panel manufacturing — alarm and monitoring trusted by Egypt's Maritime Safety Authority.",
    href: "/marketplace",
    color: "from-[#059669] to-[#34d399]",
  },
  {
    icon: Zap,
    title: "Power Panel Design",
    description:
      "Low voltage MCC and power factor correction panels, designed to meet the most demanding utility specifications.",
    href: "/marketplace",
    color: "from-[#dc2626] to-[#f87171]",
  },
];

const featuredProjects = [
  {
    name: "TouatGas Algeria",
    category: "Oil & Gas",
    description:
      "Automation for Algeria's largest natural gas facility — 4.5 billion m³/year production, 1,500 km southwest of Algiers.",
    badge: "Flagship",
  },
  {
    name: "TAHYA MASR Tugboats",
    category: "Maritime",
    description:
      "Alarm and monitoring for Red Sea Ports Authority tugboats — 70-ton tensile strength, marine-certified control panels.",
    badge: "Marine",
  },
  {
    name: "Aswan High Dam",
    category: "Energy",
    description:
      "Industrial control and monitoring for Egypt's landmark hydroelectric power plant — safety and reliability assured.",
    badge: "Energy",
  },
  {
    name: "Smart Greenhouse",
    category: "AgriTech",
    description:
      "National Company for Protective Cultivations — PLC-driven greenhouse automation reducing resource usage by 40%.",
    badge: "Innovation",
  },
];

const certifications = [
  "Bureau Veritas Marine Approved",
  "Fastwel Authorized Partner",
  "ISO Industrial Standards",
  "Delta University Partner",
  "Mansoura University Partner",
  "Kontron Technology Partner",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center animated-gradient">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00b4d8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#1565c0]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00b4d8] text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
              Founded 2001 · Egypt & Arab Region
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              When Failure
              <br />
              <span className="gradient-text-gold">Is Not An</span>
              <br />
              Option.
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              PEP ARAB is the Arab region's premier automation and control technology
              provider — delivering industrial-grade PLC, SCADA, marine, and safety
              systems since 2001.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white font-bold hover:shadow-xl hover:shadow-[#00b4d8]/30 hover:scale-105 transition-all duration-200"
              >
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/clients"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Our Projects <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {["Bureau Veritas Certified", "Fastwel Partner", "ISO Standards"].map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 border border-white/10 glow-pulse">
              <div className="bg-[#020b18] rounded-xl p-6 font-mono text-xs space-y-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-white/30 ml-2 text-[10px]">PEP SMART PLC · SCADA Console</span>
                </div>
                <div className="text-[#00b4d8]">$ system.status --all</div>
                <div className="text-green-400">✓ PLC Online · All channels nominal</div>
                <div className="text-green-400">✓ SCADA Winlog · 247 tags active</div>
                <div className="text-green-400">✓ Marine Panel · Bureau Veritas OK</div>
                <div className="text-green-400">✓ Fire Safety · SALMO 4-loop armed</div>
                <div className="text-white/40">$ uptime</div>
                <div className="text-[#00b4d8]">99.97% · 24+ years operational</div>
                <div className="text-white/30 animate-pulse mt-2">▋</div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { label: "Uptime SLA", value: "99.97%" },
                  { label: "Active Installations", value: "200+" },
                  { label: "Countries", value: "15+" },
                  { label: "Years", value: "24+" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-[#00b4d8] font-bold text-lg">{s.value}</div>
                    <div className="text-white/40 text-[10px] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#ffb300] to-[#ffd54f] rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[#0a1628] font-black text-sm leading-none">From Egypt</div>
              <div className="text-[#0a1628]/70 text-[10px] tracking-wider">WITH GLOBAL STANDARD</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#0a1628] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, suffix, label }) => (
              <div key={label} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1565c0]/20 mb-4 group-hover:bg-[#1565c0]/40 transition-colors">
                  <Icon className="w-6 h-6 text-[#00b4d8]" />
                </div>
                <div className="text-4xl font-black text-white mb-1">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <div className="text-white/40 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-6">
            Our Philosophy
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0a1628] mb-6 max-w-4xl mx-auto leading-tight">
            The First Arab Leading-Edge Supplier of{" "}
            <span className="gradient-text">Control Systems</span>
          </h2>
          <p className="text-[#0a1628]/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Through product globalization, corporatism, and internationalization, PEP ARAB
            bridges Egyptian engineering excellence with global industrial standards — making
            critical operations safer, more reliable, and more efficient.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {["From Egypt with Global Standard", "Doing It Right, Just Once", "Partnership Cooperation"].map((v) => (
              <div key={v} className="flex items-center gap-2 text-[#0a1628]/60 text-sm">
                <CheckCircle className="w-4 h-4 text-[#1565c0]" />
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-6">
              What We Build
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0a1628] mb-4">
              Products & Solutions
            </h2>
            <p className="text-[#0a1628]/60 max-w-2xl mx-auto">
              End-to-end automation and control technology — from PLC hardware to safety
              systems and industrial training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map(({ icon: Icon, title, description, href, color }) => (
              <Link
                key={title}
                href={href}
                className="group bg-white rounded-2xl p-7 border border-[#e8edf5] hover:border-[#1565c0]/30 hover:shadow-xl hover:shadow-[#1565c0]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${color} items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#0a1628] font-bold text-lg mb-2">{title}</h3>
                <p className="text-[#0a1628]/55 text-sm leading-relaxed">{description}</p>
                <div className="mt-5 flex items-center gap-1 text-[#1565c0] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white font-bold hover:shadow-lg hover:shadow-[#00b4d8]/30 hover:scale-105 transition-all duration-200"
            >
              View Full Marketplace <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-4">
                Portfolio
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white">
                Landmark Projects
              </h2>
            </div>
            <Link
              href="/clients"
              className="flex items-center gap-2 text-[#00b4d8] font-semibold hover:gap-3 transition-all"
            >
              All references <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <div
                key={p.name}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-[#00b4d8]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1565c0]/30 text-[#00b4d8] text-xs font-semibold">
                    {p.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#ffb300]/20 text-[#ffb300] text-xs font-semibold">
                    {p.badge}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#00b4d8] transition-colors">
                  {p.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white border-y border-[#e8edf5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[#0a1628]/40 text-xs tracking-widest uppercase font-semibold mb-10">
            Trusted Certifications & Partnerships
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f0f4ff] border border-[#d0ddf5] text-[#1565c0] text-sm font-medium"
              >
                <Award className="w-3.5 h-3.5" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-24 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Innovation Hub",
                desc: "Explore our R&D vision and technology roadmap.",
                href: "/innovation",
                gradient: "from-[#1565c0] to-[#00b4d8]",
              },
              {
                label: "Training Portal",
                desc: "Industry-certified training programs for engineers and students.",
                href: "/training",
                gradient: "from-[#7c3aed] to-[#00b4d8]",
              },
              {
                label: "Newsroom",
                desc: "Latest updates, press releases, and industry insights.",
                href: "/newsroom",
                gradient: "from-[#ffb300] to-[#1565c0]",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-8 text-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300`}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
                <h3 className="text-xl font-bold mb-2 relative z-10">{item.label}</h3>
                <p className="text-white/70 text-sm relative z-10">{item.desc}</p>
                <div className="mt-6 flex items-center gap-2 font-semibold text-sm relative z-10 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
