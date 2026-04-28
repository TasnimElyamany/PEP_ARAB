import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Globe2,
  Lightbulb,
  Rocket,
  Shield,
  BarChart3,
  Network,
  CheckCircle,
  Target,
  TrendingUp,
  MapPin,
} from "lucide-react";

const pillars = [
  {
    icon: Globe2,
    title: "Product Globalization",
    description:
      "PEP ARAB engineers solutions built to international standards, enabling deployment from Egypt to Algeria, Germany, Italy, and beyond. Our hardware and software comply with Bureau Veritas, IEC, and ISO frameworks.",
    color: "from-[#1565c0] to-[#00b4d8]",
  },
  {
    icon: Network,
    title: "Corporatism & Partnerships",
    description:
      "Strategic alliances with Kontron (Germany), Wilke Technology (Germany), Sielcosistemi (Italy), and Diamondsystems (USA) ensure access to cutting-edge components and global best practices.",
    color: "from-[#7c3aed] to-[#1565c0]",
  },
  {
    icon: Rocket,
    title: "Internationalization",
    description:
      "From the Gamasa Industrial Zone, we export control expertise globally. PEP ARAB serves as a technology supplier to leading European companies — embodying 'From Egypt with Global Standard'.",
    color: "from-[#059669] to-[#00b4d8]",
  },
];

const techStack = [
  {
    category: "Control Hardware",
    icon: Cpu,
    items: ["PEP SMART2 CPU", "PEP SMART IO Modules", "PEP SMART2 BASE", "PC/104 SBCs (Fastwel)"],
  },
  {
    category: "Software Platforms",
    icon: BarChart3,
    items: ["Winlog SCADA (Sielcosistemi)", "IEC 61131-3 PLC Programming", "Web HMI Development", "Multi-protocol Communication"],
  },
  {
    category: "Safety Systems",
    icon: Shield,
    items: ["SALMO Addressable Fire Panels", "4-loop / 150 sensor capacity", "Conventional Fire Zones", "Marine Alarm Systems"],
  },
  {
    category: "Connectivity",
    icon: Network,
    items: ["Modbus RTU/TCP", "PROFIBUS", "CANopen", "Ethernet Industrial Protocols"],
  },
];

const roadmap = [
  { year: "2001", milestone: "Founded in Gamasa Industrial Zone as a joint stock company" },
  { year: "2005", milestone: "Launched PEP SMART PLC platform — first Arab-manufactured industrial controller" },
  { year: "2010", milestone: "Earned Bureau Veritas marine panel certification" },
  { year: "2015", milestone: "TAHYA MASR marine automation — Red Sea Ports Authority" },
  { year: "2020", milestone: "TouatGas Algeria flagship project — 4.5B m³/year gas facility" },
  { year: "2023", milestone: "Smart Greenhouse automation & university training partnerships" },
  { year: "2025+", milestone: "Expanding IoT-integrated SCADA and AI-driven predictive maintenance" },
];

const partners = [
  { name: "Kontron", country: "Germany", flag: "🇩🇪", role: "Industrial Computing Platforms", type: "Technology" },
  { name: "Wilke Technology", country: "Germany", flag: "🇩🇪", role: "Embedded Systems & BASIC Tiger", type: "Technology" },
  { name: "Sielcosistemi", country: "Italy", flag: "🇮🇹", role: "Winlog SCADA Platform", type: "Software" },
  { name: "Diamondsystems", country: "USA", flag: "🇺🇸", role: "Industrial Single-Board Computers", type: "Hardware" },
  { name: "Fastwel", country: "Global", flag: "🌐", role: "Rugged Embedded Computing", type: "Hardware" },
  { name: "Bureau Veritas", country: "Global", flag: "🌐", role: "Marine Type Approval & Certification", type: "Certification" },
];

const typeColors: Record<string, string> = {
  Technology: "from-[#1565c0]/20 to-[#00b4d8]/10 border-[#1565c0]/30 text-[#00b4d8]",
  Software:   "from-[#7c3aed]/20 to-[#1565c0]/10 border-[#7c3aed]/30 text-[#9d5ff0]",
  Hardware:   "from-[#059669]/20 to-[#00b4d8]/10 border-[#059669]/30 text-[#34d399]",
  Certification: "from-[#d97706]/20 to-[#fbbf24]/10 border-[#d97706]/30 text-[#fbbf24]",
};

export default function InnovationHubPage() {
  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative bg-[#0a1628] py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1565c0]/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00b4d8] text-xs font-semibold tracking-wider uppercase mb-8">
            <Lightbulb className="w-3.5 h-3.5" />
            Innovation Hub
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 max-w-4xl leading-[1.05]">
            Engineering the{" "}
            <span className="gradient-text">Future</span> of Arab
            Industrial Control
          </h1>
          <p className="text-white/60 text-xl max-w-3xl leading-relaxed mb-10">
            At PEP ARAB, innovation is not a department — it&apos;s our founding principle.
            We design proprietary control systems that bridge Egyptian manufacturing
            excellence with the world&apos;s most demanding industrial standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white font-bold hover:shadow-xl hover:shadow-[#00b4d8]/30 hover:scale-105 transition-all duration-200"
            >
              See Our Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Wave down */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,80 L0,80 Z" fill="#f8faff" />
          </svg>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="relative py-24 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-5">
              Strategic Pillars
            </div>
            <h2 className="text-4xl font-black text-[#0a1628] mb-4">
              Our Innovation Strategy
            </h2>
            <p className="text-[#0a1628]/60 max-w-2xl mx-auto">
              Three interconnected pillars that drive PEP ARAB&apos;s vision to become the
              Arab world&apos;s leading control system provider.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map(({ icon: Icon, title, description, color }, i) => (
              <div
                key={title}
                data-reveal
                data-delay={String(i + 1)}
                className="bg-white rounded-2xl p-8 border border-[#e8edf5] hover:shadow-xl hover:shadow-[#1565c0]/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#0a1628] font-bold text-xl mb-3">{title}</h3>
                <p className="text-[#0a1628]/60 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal to dark */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L1200,80 L1200,80 L0,80 Z" fill="#0a1628" />
          </svg>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="glass rounded-2xl p-10 border border-white/10" data-reveal data-delay="1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#1565c0]/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <h3 className="text-white font-bold text-2xl">Our Vision</h3>
              </div>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                To establish PEP ARAB as the{" "}
                <span className="text-[#00b4d8] font-semibold">
                  &quot;First Arab Leading-Edge Supplier of Control Systems&quot;
                </span>{" "}
                — achieving top market satisfaction through partnership cooperation with
                international clients across the Arab region and beyond.
              </p>
              <div className="space-y-3">
                {[
                  "Top market satisfaction in the Arab region",
                  "International partnership network",
                  "Global-standard products made in Egypt",
                ].map((v) => (
                  <div key={v} className="flex items-start gap-3 text-white/50 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00b4d8] flex-shrink-0 mt-0.5" />
                    {v}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-10 border border-white/10" data-reveal data-delay="2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00b4d8]/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#00b4d8]" />
                </div>
                <h3 className="text-white font-bold text-2xl">Our Mission</h3>
              </div>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                To function as a{" "}
                <span className="text-[#00b4d8] font-semibold">
                  &quot;product platform provider with solution and services capabilities&quot;
                </span>{" "}
                — designing and manufacturing control solutions using proprietary system
                products and technological expertise for multiple market segments.
              </p>
              <div className="space-y-3">
                {[
                  "Design and manufacturing of proprietary systems",
                  "Multi-market segment coverage",
                  "Solution + services integrated approach",
                ].map((v) => (
                  <div key={v} className="flex items-start gap-3 text-white/50 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#ffb300] flex-shrink-0 mt-0.5" />
                    {v}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: "From Egypt with Global Standard", icon: Globe2 },
              { label: "Doing It Right, Just Once", icon: CheckCircle },
              { label: "When Failure Is Not An Option", icon: Shield },
            ].map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                data-reveal
                data-delay={String(i + 3)}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1565c0]/20 to-[#00b4d8]/10 border border-white/10"
              >
                <Icon className="w-8 h-8 text-[#00b4d8] mx-auto mb-3" />
                <p className="text-white font-semibold text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wave to white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,80 C300,0 900,80 1200,0 L1200,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-5">
              Technology
            </div>
            <h2 className="text-4xl font-black text-[#0a1628] mb-4">
              Technology Stack
            </h2>
            <p className="text-[#0a1628]/60 max-w-xl mx-auto">
              Proprietary hardware, best-in-class software, and global protocol support
              powering industrial operations from Algeria to Egypt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map(({ category, icon: Icon, items }, i) => (
              <div
                key={category}
                data-reveal
                data-delay={String(i + 1)}
                className="bg-[#f8faff] rounded-2xl p-6 border border-[#e8edf5] hover:shadow-lg hover:border-[#1565c0]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#1565c0]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#1565c0]" />
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-sm">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#0a1628]/60 text-xs">
                      <span className="w-1 h-1 rounded-full bg-[#00b4d8] flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal to light */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,80 L1200,0 L1200,80 L0,80 Z" fill="#f8faff" />
          </svg>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 bg-[#f8faff]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-5">
              Timeline
            </div>
            <h2 className="text-4xl font-black text-[#0a1628]">
              Innovation Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1565c0] via-[#00b4d8] to-transparent" />
            <div className="space-y-8">
              {roadmap.map(({ year, milestone }, i) => (
                <div key={year} data-reveal data-delay={String(i + 1)} className="flex gap-6 items-start group">
                  <div className="relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1565c0] to-[#00b4d8] flex items-center justify-center shadow-lg shadow-[#1565c0]/20 group-hover:scale-110 transition-transform">
                    <span className="text-white font-black text-xs">{year}</span>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-5 border border-[#e8edf5] group-hover:border-[#1565c0]/30 group-hover:shadow-md transition-all duration-200 mt-2">
                    <p className="text-[#0a1628] text-sm font-medium leading-relaxed">{milestone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal to partners dark */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L1200,80 L1200,80 L0,80 Z" fill="#050e1d" />
          </svg>
        </div>
      </section>

      {/* ── GLOBAL PARTNERS ── */}
      <section className="relative py-28 bg-[#050e1d] overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Ambient glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1565c0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00b4d8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20" data-reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/20 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Global Technology Network
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              World-Class{" "}
              <span className="gradient-text">Strategic Partners</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              PEP ARAB&apos;s global reach is powered by exclusive alliances with the world&apos;s
              foremost industrial technology companies — bringing their expertise directly
              to Arab region industries.
            </p>
          </div>

          {/* Partner cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map(({ name, country, flag, role, type }, i) => {
              const colorClass = typeColors[type] ?? typeColors.Technology;
              return (
                <div
                  key={name}
                  data-reveal
                  data-delay={String(i + 1)}
                  className="relative group rounded-2xl overflow-hidden border border-white/8 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-[#1455a4]/20 transition-all duration-500 cursor-default"
                >
                  {/* Glow on hover */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#1565c0]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />

                  {/* Type badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r border text-[10px] font-bold tracking-widest uppercase mb-5 ${colorClass}`}>
                    {type}
                  </div>

                  {/* Country */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{flag}</span>
                    <span className="text-white/40 text-xs font-medium">{country}</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-black text-2xl leading-tight mb-3 group-hover:text-[#00b4d8] transition-colors duration-300">
                    {name}
                  </h3>

                  {/* Role */}
                  <p className="text-white/50 text-sm leading-relaxed">{role}</p>

                  {/* Active indicator */}
                  <div className="mt-6 flex items-center gap-2 pt-6 border-t border-white/8">
                    <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse" />
                    <span className="text-white/30 text-xs font-medium">Active Partnership</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-16 text-center" data-reveal>
            <p className="text-white/40 text-sm mb-6">
              Interested in becoming a technology or distribution partner?
            </p>
            <a
              href="mailto:peparab@peparab.com?subject=Partnership Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/80 text-sm font-semibold hover:border-[#00b4d8]/50 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              Explore Partnership Opportunities <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
