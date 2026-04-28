import { ArrowRight, Globe2, Anchor, Flame, Leaf, Zap, Building2, CheckCircle, Quote } from "lucide-react";

const sectors = [
  { icon: Flame, label: "Oil & Gas", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: Anchor, label: "Maritime", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Zap, label: "Energy", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: Leaf, label: "AgriTech", color: "text-green-400", bg: "bg-green-400/10" },
  { icon: Building2, label: "Industrial", color: "text-purple-400", bg: "bg-purple-400/10" },
  { icon: Globe2, label: "Government", color: "text-cyan-400", bg: "bg-cyan-400/10" },
];

const projects = [
  {
    id: 1,
    client: "TouatGas",
    country: "Algeria",
    flag: "🇩🇿",
    sector: "Oil & Gas",
    sectorColor: "text-orange-400",
    sectorBg: "bg-orange-400/10",
    year: "2023",
    status: "Completed",
    description:
      "Algeria's largest natural gas production facility — 4.5 billion cubic meters per year capacity, located 1,500 km southwest of Algiers. PEP ARAB delivered comprehensive PLC and SCADA automation infrastructure.",
    deliverables: ["PLC Control Architecture", "SCADA Monitoring System", "Safety Interlocks", "Remote I/O Networks"],
    scale: "4.5B m³/yr production",
    highlight: true,
  },
  {
    id: 2,
    client: "Red Sea Ports Authority",
    country: "Egypt",
    flag: "🇪🇬",
    sector: "Maritime",
    sectorColor: "text-blue-400",
    sectorBg: "bg-blue-400/10",
    year: "2023",
    status: "Completed",
    description:
      "TAHYA MASR 1 & 2 tugboats for the Red Sea Ports Authority — Bureau Veritas-certified alarm and monitoring panels. 70-ton tensile strength vessels operating in the Red Sea.",
    deliverables: ["Marine Alarm System", "Engine Room Monitoring", "BV Type Approval", "SOLAS Compliance"],
    scale: "2 marine vessels",
    highlight: false,
  },
  {
    id: 3,
    client: "Egyptian Authority for Maritime Safety",
    country: "Egypt",
    flag: "🇪🇬",
    sector: "Maritime",
    sectorColor: "text-blue-400",
    sectorBg: "bg-blue-400/10",
    year: "2022",
    status: "Completed",
    description:
      "AIDA IV vessel — integrated marine control and alarm system for Egyptian Authority for Maritime Safety. Full Bureau Veritas type approval and SOLAS-compliant installation.",
    deliverables: ["Integrated Control System", "Alarm & Monitoring", "Bureau Veritas Approval", "Commissioning"],
    scale: "Government vessel",
    highlight: false,
  },
  {
    id: 4,
    client: "High Dam Hydroelectric Plant",
    country: "Egypt",
    flag: "🇪🇬",
    sector: "Energy",
    sectorColor: "text-yellow-400",
    sectorBg: "bg-yellow-400/10",
    year: "2022",
    status: "Completed",
    description:
      "Modernization of control and monitoring systems at the Aswan High Dam — Egypt's flagship hydroelectric facility. Updated PLC infrastructure, SCADA, and safety systems to current IEC standards.",
    deliverables: ["PLC Modernization", "SCADA Integration", "Safety System Upgrade", "Operator Training"],
    scale: "2,100 MW plant",
    highlight: false,
  },
  {
    id: 5,
    client: "National Co. for Protective Cultivations",
    country: "Egypt",
    flag: "🇪🇬",
    sector: "AgriTech",
    sectorColor: "text-green-400",
    sectorBg: "bg-green-400/10",
    year: "2023",
    status: "Completed",
    description:
      "Smart greenhouse automation system — PLC-driven climate control, automated irrigation, nutrient dosing, and real-time crop monitoring. Reduces water usage by up to 40% compared to conventional farming.",
    deliverables: ["Climate Control PLC", "Automated Irrigation", "Sensor Networks", "HMI Dashboard"],
    scale: "Multi-greenhouse complex",
    highlight: false,
  },
  {
    id: 6,
    client: "European Industrial Partners",
    country: "EU",
    flag: "🇪🇺",
    sector: "Industrial",
    sectorColor: "text-purple-400",
    sectorBg: "bg-purple-400/10",
    year: "Ongoing",
    status: "Active",
    description:
      "PEP ARAB serves as a technology and manufacturing supplier to several European companies through partnerships with Kontron, Wilke Technology, Sielcosistemi, and Diamondsystems.",
    deliverables: ["OEM Manufacturing", "Technology Supply", "Hardware Integration", "Technical Support"],
    scale: "Multiple European OEMs",
    highlight: false,
  },
];

const techPartners = [
  { name: "Kontron", region: "Germany", role: "Industrial Computing" },
  { name: "Wilke Technology", region: "Germany", role: "Embedded Systems" },
  { name: "Sielcosistemi", region: "Italy", role: "SCADA Software (Winlog)" },
  { name: "Diamondsystems", region: "USA", role: "Industrial SBCs" },
  { name: "Fastwel", region: "Russia/Global", role: "Rugged Computing" },
  { name: "Bureau Veritas", region: "Global", role: "Marine Certification" },
];

const testimonial = {
  quote:
    "PEP ARAB delivered the TouatGas automation infrastructure on schedule and to the highest engineering standards. Their team demonstrated deep expertise in industrial control systems and an impressive ability to work in remote, high-pressure environments.",
  author: "Project Manager",
  company: "TouatGas, Algeria",
};

export default function ClientsPage() {
  return (
    <div className="overflow-hidden pt-18">
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
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-[#1565c0]/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00b4d8] text-xs font-semibold tracking-wider uppercase mb-8">
            <Globe2 className="w-3.5 h-3.5" />
            Our Clients & Partners
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 max-w-4xl leading-[1.05]">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>{" "}
            Across the Region
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed mb-12">
            From Algeria's largest gas facility to Egypt's national maritime authority —
            PEP ARAB's control systems power the Arab world's most critical infrastructure.
          </p>

          {/* Sector pills */}
          <div className="flex flex-wrap gap-3">
            {sectors.map(({ icon: Icon, label, color, bg }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${bg} border border-white/10`}
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-white/70 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-5">
              Project References
            </div>
            <h2 className="text-4xl font-black text-[#0a1628] mb-4">
              Our Project Portfolio
            </h2>
            <p className="text-[#0a1628]/60 max-w-xl mx-auto">
              A track record spanning oil & gas, maritime, energy, and agriculture across
              multiple countries in the Arab region and beyond.
            </p>
          </div>

          {/* Featured project */}
          {projects.filter((p) => p.highlight).map((p) => (
            <div
              key={p.id}
              className="mb-8 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#1565c0] border border-white/10"
            >
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 p-10 lg:p-14">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-3 py-1 rounded-full ${p.sectorBg} ${p.sectorColor} text-xs font-semibold`}>
                      {p.sector}
                    </span>
                    <span className="text-white/40 text-xs">{p.flag} {p.country}</span>
                    <span className="px-3 py-1 rounded-full bg-[#ffb300]/20 text-[#ffb300] text-xs font-semibold">
                      Flagship Project
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">{p.client}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{p.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {p.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-white/60 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#00b4d8] flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:border-l border-white/10 flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-5xl mb-2">{p.flag}</div>
                    <div className="text-[#00b4d8] font-black text-2xl">{p.scale}</div>
                    <div className="text-white/40 text-sm mt-1">{p.year}</div>
                    <div className="mt-4 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
                      {p.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Other projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((p) => !p.highlight).map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl border border-[#e8edf5] overflow-hidden hover:shadow-xl hover:shadow-[#1565c0]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${p.sectorBg} ${p.sectorColor} mb-2`}>
                        {p.sector}
                      </span>
                      <h3 className="text-[#0a1628] font-bold text-base leading-snug">{p.client}</h3>
                      <div className="text-[#0a1628]/40 text-xs mt-0.5">{p.flag} {p.country} · {p.year}</div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                        p.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-[#f0f4ff] text-[#1565c0]"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <p className="text-[#0a1628]/55 text-sm leading-relaxed mb-4">{p.description}</p>

                  <ul className="space-y-1.5">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[#0a1628]/50 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-[#1565c0] flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-6 py-4 bg-[#f8faff] border-t border-[#e8edf5] flex items-center justify-between">
                  <span className="text-[#0a1628]/50 text-xs">{p.scale}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-[#1565c0] mx-auto mb-8" />
          <blockquote className="text-2xl lg:text-3xl font-semibold text-white leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-[#00b4d8] font-bold">{testimonial.author}</div>
          <div className="text-white/40 text-sm mt-1">{testimonial.company}</div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-5">
              Global Network
            </div>
            <h2 className="text-4xl font-black text-[#0a1628] mb-4">
              Technology Partners
            </h2>
            <p className="text-[#0a1628]/60 max-w-xl mx-auto">
              Strategic alliances with world-class technology companies enabling PEP ARAB
              to deliver cutting-edge solutions across every sector.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {techPartners.map(({ name, region, role }) => (
              <div
                key={name}
                className="p-6 rounded-2xl bg-[#f8faff] border border-[#e8edf5] hover:border-[#1565c0]/30 hover:shadow-lg hover:shadow-[#1565c0]/10 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#0a1628] font-bold group-hover:text-[#1565c0] transition-colors">{name}</h3>
                  <span className="text-[#0a1628]/40 text-xs">{region}</span>
                </div>
                <p className="text-[#0a1628]/55 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0a1628] via-[#1565c0] to-[#00b4d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black text-white mb-2">
              Join Our Client Portfolio
            </h3>
            <p className="text-white/70">
              Let PEP ARAB's engineering team solve your toughest control challenges.
            </p>
          </div>
          <a
            href="mailto:peparab@peparab.com?subject=Project Inquiry"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1565c0] font-bold hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Start a Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
