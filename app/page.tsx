"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Shield, Cpu, Globe, Award,
  Zap, BarChart3, Users, Calendar, CheckCircle,
  Layers, Radio, ChevronRight,
} from "lucide-react";

/* ── Counter ── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const el = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        let n = 0; const step = end / 80;
        const t = setInterval(() => { n = Math.min(n + step, end); setVal(Math.floor(n)); if (n >= end) clearInterval(t); }, 20);
      }
    }, { threshold: 0.4 });
    if (el.current) io.observe(el.current);
    return () => io.disconnect();
  }, [end]);
  return <span ref={el}>{val}{suffix}</span>;
}

const stats = [
  { icon: Calendar,  v: 24,  s: "+", l: "Years Active"       },
  { icon: Globe,     v: 15,  s: "+", l: "Countries Served"   },
  { icon: BarChart3, v: 200, s: "+", l: "Projects Delivered" },
  { icon: Users,     v: 50,  s: "+", l: "Global Partners"    },
];

const services = [
  { icon: Cpu,      title: "Smart PLC Systems",     desc: "Modular, marine-certified programmable controllers for the harshest industrial environments.",       href: "/marketplace", accent: "#1455a4" },
  { icon: BarChart3,title: "SCADA & HMI",           desc: "Web-enabled Winlog platform — real-time monitoring, 250+ drivers, unlimited tags.",                  href: "/marketplace", accent: "#00b4d8" },
  { icon: Shield,   title: "Fire & Safety",         desc: "SALMO EN-54 addressable panels — 4 loops × 150 sensors — built for critical infrastructure.",        href: "/marketplace", accent: "#e8a000" },
  { icon: Radio,    title: "Marine Systems",        desc: "Bureau Veritas-approved alarm and monitoring panels trusted by Egypt's Maritime Safety Authority.",   href: "/marketplace", accent: "#059669" },
  { icon: Layers,   title: "Industrial Computers",  desc: "Authorized Fastwel partner — ruggedized PC/104 and VME/CPCI embedded computing.",                   href: "/marketplace", accent: "#7c3aed" },
  { icon: Zap,      title: "Power Panels",          desc: "Custom LV motor control centres and power factor correction panels to IEC 61439.",                  href: "/marketplace", accent: "#c2410c" },
];

const projects = [
  { name: "TouatGas",            loc: "Algeria",      cat: "Oil & Gas",  kpi: "4.5B m³/yr",  desc: "Largest natural gas facility in Algeria — full PLC and SCADA automation delivered on schedule." },
  { name: "TAHYA MASR Tugboats", loc: "Red Sea, EG",  cat: "Maritime",   kpi: "BV Certified", desc: "Alarm and monitoring for Red Sea Ports Authority — 70-ton marine vessels, Bureau Veritas approved." },
  { name: "Aswan High Dam",      loc: "Egypt",        cat: "Energy",     kpi: "2,100 MW",     desc: "Control and monitoring modernisation for Egypt's flagship hydroelectric power plant." },
  { name: "Smart Greenhouse",    loc: "Egypt",        cat: "AgriTech",   kpi: "−40% water",   desc: "PLC-driven climate, irrigation, and nutrient automation — National Co. for Protective Cultivations." },
];

const certs = [
  "Bureau Veritas Marine", "Fastwel Authorized Partner",
  "EN 54 Fire Safety", "Kontron — Germany",
  "Sielcosistemi — Italy", "Diamondsystems — USA",
];

export default function Home() {
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0, gx: 50, gy: 50 });
  const [cardHover, setCardHover] = useState(false);

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    setCardTilt({ x: (ny - 0.5) * -16, y: (nx - 0.5) * 22, gx: nx * 100, gy: ny * 100 });
    setCardHover(true);
  };
  const onCardLeave = () => {
    setCardHover(false);
    setCardTilt({ x: 0, y: 0, gx: 50, gy: 50 });
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">

      {/* HERO*/}
      <section className="relative bg-[#050e1d] overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        {/* Glows */}
        <div className="absolute -top-32 -left-32 w-[560px] h-[560px] bg-[#1455a4]/20 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#00b4d8]/10 rounded-full blur-[90px] pointer-events-none" />
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1455a4]/60 to-transparent" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 min-h-screen flex items-center pt-24 pb-20">
          <div className="w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* ── LEFT: Copy (7 cols) ── */}
            <div className="lg:col-span-7">

              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1455a4]/50 bg-[#1455a4]/10 mb-9">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] animate-pulse" />
                <span className="text-[#00b4d8] text-[11px] font-semibold tracking-[0.18em] uppercase">
                  Founded 2001 · Egypt & Arab Region
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-black text-white leading-[1.04] tracking-[-0.02em] mb-6">
                <span className="block text-[clamp(2.4rem,5.2vw,4.5rem)]">When Failure</span>
                <span className="block text-[clamp(2.4rem,5.2vw,4.5rem)] grad-text">Is Not An</span>
                <span className="block text-[clamp(2.4rem,5.2vw,4.5rem)]">Option.</span>
              </h1>

              {/* Sub */}
              <p className="text-white/50 text-[15px] sm:text-base leading-relaxed mb-9 max-w-[480px]">
                The Arab region's premier automation and control technology provider —
                industrial-grade PLC, SCADA, marine, and safety systems. From Egypt with
                global standard since 2001.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-9">
                <Link href="/marketplace"
                  className="btn-sparkle group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-white text-[14px] font-bold tracking-wide hover:-translate-y-1 transition-transform duration-200">
                  <span className="sparkle-dot text-yellow-200/95 text-[11px]" style={{"--sp-dur":"2.2s","--sp-delay":"0s",top:"7px",right:"20px"} as React.CSSProperties}>✦</span>
                  <span className="sparkle-dot text-white/55 text-[7px]"        style={{"--sp-dur":"2.8s","--sp-delay":"0.9s",bottom:"8px",right:"38px"} as React.CSSProperties}>✦</span>
                  <span className="sparkle-dot text-[#7de8ff]/80 text-[10px]"  style={{"--sp-dur":"2.5s","--sp-delay":"1.6s",top:"8px",left:"48px"} as React.CSSProperties}>✦</span>
                  <Cpu className="w-4 h-4 relative z-10 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                  <span className="relative z-10">Explore Products</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link href="/clients"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/12 text-white/75 text-[13.5px] font-semibold hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-200">
                  Our Projects <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust tags */}
              <div className="flex flex-wrap gap-2">
                {["Bureau Veritas Certified", "Fastwel Partner", "EN 54 / IEC Standards"].map(t => (
                  <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-white/40 text-[11.5px]">
                    <CheckCircle className="w-3 h-3 text-[#00b4d8]" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Status card (5 cols) ── */}
            <div className="hidden lg:block lg:col-span-5 relative">

              {/* Submarine decoration */}
              <div className="submarine-float absolute inset-y-0 -right-20 w-[600px] flex items-center pointer-events-none select-none" style={{zIndex:0}}>
                <svg viewBox="0 0 560 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">

                  {/* Sonar rings from nose */}
                  {([0,1,2] as const).map(i => (
                    <circle key={i} cx="515" cy="130" r="24" stroke="#00b4d8" strokeWidth={1.6 - i*0.4} fill="none">
                      <animate attributeName="r"       from="24"  to="130" dur="3.8s" begin={`${i*1.25}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.55" to="0"  dur="3.8s" begin={`${i*1.25}s`} repeatCount="indefinite" />
                    </circle>
                  ))}

                  {/* ── HULL ── */}
                  <path d="M118 86 L408 86 Q472 86 478 130 Q472 174 408 174 L118 174 Q60 174 52 130 Q60 86 118 86Z"
                    fill="#0d3b6a" opacity="0.82" />
                  {/* Nose cap */}
                  <path d="M478 94 Q524 102 530 130 Q524 158 478 166Z" fill="#092848" opacity="0.85" />
                  {/* Highlight stripe */}
                  <path d="M118 93 L408 93 Q460 93 472 112 Q460 95 408 94 L118 94 Q76 94 68 112 Q68 95 118 93Z"
                    fill="white" opacity="0.04" />

                  {/* ── CONNING TOWER ── */}
                  <path d="M228 86 L228 44 Q228 30 242 30 L304 30 Q318 30 318 44 L318 86Z"
                    fill="#0b3260" opacity="0.88" />
                  {/* Tower window */}
                  <rect x="248" y="50" width="42" height="26" rx="6" fill="#071828" opacity="0.9"/>
                  <rect x="248" y="50" width="42" height="26" rx="6" stroke="#1a6bc4" strokeWidth="1.5" fill="none" opacity="0.55"/>
                  <rect x="250" y="52" width="18" height="22" rx="3" fill="#00b4d8" opacity="0.07"/>

                  {/* ── PERISCOPE ── */}
                  <rect x="296" y="6"  width="10" height="28" rx="5" fill="#092848" opacity="0.9"/>
                  <rect x="296" y="6"  width="32" height="10" rx="5" fill="#092848" opacity="0.9"/>
                  <circle cx="327"   cy="11"   r="5.5"          fill="#00b4d8"  opacity="0.3"/>

                  {/* ── TAIL FINS ── */}
                  <path d="M98 86  L62 48  L106 80Z"  fill="#092848" opacity="0.78"/>
                  <path d="M98 174 L62 212 L106 180Z" fill="#092848" opacity="0.78"/>
                  {/* Rear stabiliser */}
                  <path d="M76 130 L38 110 L38 150Z" fill="#092848" opacity="0.72"/>

                  {/* ── PORTHOLES ── */}
                  {[178,248,318,390].map((cx,i) => (
                    <g key={i}>
                      <circle cx={cx} cy="130" r="16" fill="#071828" opacity="0.92"/>
                      <circle cx={cx} cy="130" r="16" stroke="#1a6bc4" strokeWidth="2" fill="none" opacity="0.5"/>
                      <circle cx={cx} cy="130" r="9"  fill="#00b4d8"  opacity="0.18"/>
                      <circle cx={cx} cy="130" r="5"  fill="#00b4d8"  opacity="0.55"/>
                    </g>
                  ))}

                  {/* ── HULL DETAILS (hatches / vents) ── */}
                  <ellipse cx="178" cy="86" rx="22" ry="5.5" fill="#0b3260" opacity="0.55"/>
                  <ellipse cx="340" cy="86" rx="22" ry="5.5" fill="#0b3260" opacity="0.55"/>
                  {[132,162,192,358,388,418].map(x => (
                    <rect key={x} x={x} y="161" width="9" height="13" rx="2.5" fill="#092848" opacity="0.45"/>
                  ))}

                  {/* ── PROPELLER ── */}
                  <g opacity="0.72">
                    <ellipse cx="45" cy="112" rx="6"  ry="17" fill="#1455a4"/>
                    <ellipse cx="45" cy="148" rx="6"  ry="17" fill="#1455a4"/>
                    <ellipse cx="28" cy="130" rx="17" ry="6"  fill="#1455a4"/>
                    <ellipse cx="62" cy="130" rx="17" ry="6"  fill="#1455a4"/>
                    <animateTransform attributeName="transform" type="rotate"
                      from="0 45 130" to="360 45 130" dur="1.6s" repeatCount="indefinite"/>
                  </g>
                  <circle cx="45" cy="130" r="8" fill="#092848" opacity="0.95"/>
                  <circle cx="45" cy="130" r="4" fill="#1455a4" opacity="0.85"/>
                </svg>
              </div>

              <div className="relative max-w-[480px] ml-auto pb-16" style={{zIndex:1}}>

                {/* 3-D tilt wrapper */}
                <div
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  style={{
                    transform: cardHover
                      ? `perspective(900px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg) scale3d(1.025,1.025,1.025)`
                      : undefined,
                    transition: cardHover ? 'transform 0.1s ease-out' : 'transform 0.7s cubic-bezier(.23,1,.32,1)',
                    animation: cardHover ? 'none' : 'card-3d-idle 14s ease-in-out infinite',
                    willChange: 'transform',
                  }}
                >
                  {/* Glow ring behind card */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-[#1455a4]/30 to-[#00b4d8]/20 rounded-3xl blur-xl opacity-60" />

                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a1628]/90 backdrop-blur-xl shadow-2xl shadow-black/50">

                    {/* Glare — follows cursor */}
                    <div
                      className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
                      style={{
                        opacity: cardHover ? 1 : 0,
                        background: `radial-gradient(circle at ${cardTilt.gx}% ${cardTilt.gy}%, rgba(255,255,255,0.10) 0%, transparent 62%)`,
                        transition: 'opacity 0.25s ease',
                      }}
                    />

                  {/* Title bar */}
                  <div className="flex items-center justify-between px-6 py-4 bg-white/4 border-b border-white/6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <span className="text-white/35 text-[12px] font-mono tracking-wide">SCADA · status</span>
                    <span className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
                  </div>

                  {/* Terminal */}
                  <div className="px-6 pt-6 pb-5 font-mono text-[13px] space-y-2">
                    <div className="text-[#00b4d8]">$ check --all-nodes</div>
                    {[
                      ["PLC Online",   "I/O nominal"],
                      ["SCADA Winlog", "247 tags · 0 alarms"],
                      ["Marine Panel", "Bureau Veritas OK"],
                      ["SALMO Fire",   "4 loops armed"],
                      ["Fastwel SBC",  "Compute nominal"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center gap-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-white/55 w-28">{k}</span>
                        <span className="text-white/35">{v}</span>
                      </div>
                    ))}
                    <div className="pt-2 text-white/20">$ uptime</div>
                    <div className="text-[#00b4d8]">99.97% · 24 yrs operational</div>
                    <span className="text-white/25 animate-pulse">▋</span>
                  </div>

                  {/* Metric strip */}
                  <div className="grid grid-cols-4 border-t border-white/6">
                    {[["99.97%","Uptime"],["200+","Installs"],["15+","Countries"],["24+","Years"]].map(([v,l]) => (
                      <div key={l} className="py-4 text-center border-r border-white/6 last:border-0">
                        <div className="text-[#00b4d8] font-bold text-[14px]">{v}</div>
                        <div className="text-white/35 text-[10px] mt-0.5 tracking-wide">{l}</div>
                      </div>
                    ))}
                  </div>
                  </div>
                </div>

                {/* Floating accent chip */}
                <div className="absolute bottom-0 -left-4 px-5 py-4 rounded-2xl bg-[#e8a000] shadow-2xl shadow-[#e8a000]/40">
                  <div className="text-[#050e1d] font-black text-[16px] leading-none tracking-tight">From Egypt</div>
                  <div className="text-[#050e1d]/70 text-[11px] tracking-[0.22em] uppercase mt-1.5 font-bold">Global Standard</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050e1d] to-transparent pointer-events-none" />
      </section>

      {/* STATS BAR*/}
      <section className="bg-[#07111f] border-t border-white/5 relative pb-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/6">
            {stats.map(({ icon: Icon, v, s, l }, i) => (
              <div key={l} data-reveal data-delay={String(i + 1)} className="flex items-center gap-4 py-8 px-6 group">
                <div className="w-10 h-10 rounded-xl bg-[#1455a4]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1455a4]/30 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tight leading-none">
                    <Counter end={v} suffix={s} />
                  </div>
                  <div className="text-white/35 text-xs mt-1 font-medium tracking-wide">{l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Wave → Vision (white) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{height:70}}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 70 L0 50 C480 5 960 5 1440 50 L1440 70 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* VISION*/}
      <section className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <div data-reveal className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1455a4]/8 border border-[#1455a4]/15 text-[#1455a4] text-[11px] font-semibold tracking-[0.18em] uppercase mb-7">
              Our Philosophy
            </div>
            <h2 data-reveal data-delay="1" className="text-[clamp(1.9rem,4vw,3rem)] font-black text-[#050e1d] leading-tight mb-5">
              The First Arab Leading-Edge{" "}
              <span className="grad-text">Supplier of Control Systems</span>
            </h2>
            <p data-reveal data-delay="2" className="text-[#050e1d]/50 text-lg leading-relaxed mb-8">
              Through product globalisation, corporatism, and internationalisation — PEP ARAB
              bridges Egyptian engineering excellence with the world's most demanding industrial
              standards. Our goal: make critical operations safer, more reliable, more efficient.
            </p>
            <div data-reveal data-delay="3" className="flex flex-wrap gap-x-8 gap-y-3">
              {["From Egypt with Global Standard", "Doing It Right, Just Once", "Partnership Cooperation"].map(v => (
                <div key={v} className="flex items-center gap-2 text-[#050e1d]/50 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#1455a4] flex-shrink-0" /> {v}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Diagonal → Services (#f4f6fb) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{height:70}}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 0 L1440 55 L1440 70 L0 70 Z" fill="#f4f6fb" />
          </svg>
        </div>
      </section>

      {/*SERVICES*/}
      <section className="bg-[#f4f6fb] py-24 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

          <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1455a4]/8 border border-[#1455a4]/15 text-[#1455a4] text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
                Products & Solutions
              </div>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-[#050e1d] leading-tight">
                What We Build
              </h2>
            </div>
            <Link href="/marketplace" className="inline-flex items-center gap-2 text-[#1455a4] text-sm font-semibold hover:gap-3 transition-all flex-shrink-0">
              Full catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, desc, href, accent }, i) => (
              <Link key={title} href={href} data-reveal data-delay={String(i + 1)}
                className="group bg-white rounded-2xl p-7 border border-[#dde3f0] hover:border-[#1455a4]/30 hover:shadow-xl hover:shadow-[#1455a4]/8 hover:-translate-y-0.5 transition-all duration-250">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-250 group-hover:scale-105"
                  style={{ background: `${accent}12` }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="text-[#050e1d] font-bold text-[15px] mb-2">{title}</h3>
                <p className="text-[#050e1d]/45 text-[13.5px] leading-relaxed">{desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: accent }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Diagonal → Projects (#050e1d) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{height:70}}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 55 L1440 0 L1440 70 L0 70 Z" fill="#050e1d" />
          </svg>
        </div>
      </section>

      {/* PROJECTS*/}
      <section className="bg-[#050e1d] py-24 relative">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

          <div data-reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/6 border border-white/10 text-[#00b4d8] text-[11px] font-semibold tracking-[0.18em] uppercase mb-5">
                Portfolio
              </div>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-white leading-tight">
                Landmark Projects
              </h2>
            </div>
            <Link href="/clients" className="inline-flex items-center gap-2 text-[#00b4d8] text-sm font-semibold hover:gap-3 transition-all flex-shrink-0">
              All references <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <div key={p.name} data-reveal data-delay={String(i + 1)}
                className="group rounded-2xl border border-white/6 bg-white/[0.025] hover:bg-white/[0.05] hover:border-white/12 p-7 transition-all duration-250">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#1455a4]/25 text-[#00b4d8] text-[11px] font-semibold">{p.cat}</span>
                    <span className="text-white/25 text-xs">{p.loc}</span>
                  </div>
                  <span className="text-[#e8a000] font-bold text-sm font-mono">{p.kpi}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2.5 group-hover:text-[#00b4d8] transition-colors duration-200">{p.name}</h3>
                <p className="text-white/40 text-[13.5px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Wave → Certs (white) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{height:70}}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 70 L0 50 C480 5 960 5 1440 50 L1440 70 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* CERTS*/}
      <section className="bg-white py-14 relative pb-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <p data-reveal className="text-[#050e1d]/25 text-[10px] tracking-[0.35em] uppercase font-semibold text-center mb-8">
            Certifications & Global Partners
          </p>
          <div data-reveal data-delay="1" className="flex flex-wrap justify-center gap-2.5">
            {certs.map(c => (
              <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4f6fb] border border-[#dde3f0] text-[#050e1d]/55 text-[12.5px] font-medium">
                <Award className="w-3.5 h-3.5 text-[#1455a4]" /> {c}
              </span>
            ))}
          </div>
        </div>
        {/* Diagonal → Explore (#07111f) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{height:70}}>
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 0 L1440 55 L1440 70 L0 70 Z" fill="#07111f" />
          </svg>
        </div>
      </section>

      {/* EXPLORE More*/}
      <section className="bg-[#07111f] py-24 border-t border-white/5 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-[#1455a4]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] bg-[#00b4d8]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1455a4]/15 border border-[#1455a4]/30 text-[#00b4d8] text-[11px] font-semibold tracking-[0.22em] uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] animate-pulse" />
              Discover More
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-tight">
              <span className="text-white">Explore </span>
              <span className="grad-text">PEP ARAB</span>
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-lg mx-auto leading-relaxed">
              Dive deeper into our innovation ecosystem, training programmes, and latest industry insights.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Zap,   label: "Innovation Hub",  desc: "Vision, tech roadmap and our R&D strategy for the next decade.", href: "/innovation", accent: "#1455a4", glow: "#1455a4", iconColor: "#60b8ff", tag: "R&D Strategy" },
              { icon: Users, label: "Training Portal", desc: "Certified programmes for engineers, technicians and students.",   href: "/training",   accent: "#7c3aed", glow: "#7c3aed", iconColor: "#c4b5fd", tag: "Certified Courses" },
              { icon: Radio, label: "Newsroom",        desc: "Latest projects, announcements and industry insights.",          href: "/newsroom",   accent: "#0891b2", glow: "#0891b2", iconColor: "#67e8f9", tag: "Industry News" },
            ].map(item => (
              <Link key={item.label} href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0a1628]/70 backdrop-blur-sm p-8 text-white hover:-translate-y-1.5 hover:border-white/15 hover:shadow-2xl transition-all duration-300"
                style={{ boxShadow: `0 0 0 0 ${item.glow}00` }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 40px -8px ${item.glow}55`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}>
                <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
                {/* Top accent glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }} />
                {/* Icon */}
                <div className="w-13 h-13 w-12 h-12 rounded-xl mb-5 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.accent}22`, border: `1px solid ${item.accent}44` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.iconColor }} />
                </div>
                {/* Tag */}
                <div className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase mb-3 relative z-10"
                  style={{ background: `${item.accent}20`, color: item.iconColor }}>
                  {item.tag}
                </div>
                <h3 className="font-black text-[18px] mb-2 relative z-10">{item.label}</h3>
                <p className="text-white/45 text-[13.5px] leading-relaxed relative z-10">{item.desc}</p>
                <div className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold relative z-10 transition-all duration-200 group-hover:gap-3"
                  style={{ color: item.iconColor }}>
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
