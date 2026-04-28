"use client";

import { useState } from "react";
import {
  Cpu,
  BarChart3,
  Shield,
  Layers,
  Radio,
  Zap,
  Monitor,
  Package,
  ArrowRight,
  CheckCircle,
  Filter,
} from "lucide-react";

const categories = ["All", "PLC & Control", "SCADA & HMI", "Safety", "Computers", "Marine", "Power"];

const products = [
  {
    id: 1,
    name: "PEP SMART2 CPU",
    category: "PLC & Control",
    icon: Cpu,
    badge: "Flagship",
    badgeColor: "bg-[#1565c0]/20 text-[#00b4d8]",
    description:
      "High-performance modular PLC CPU with support for multiple I/O types. Bureau Veritas marine-certified. Ideal for oil & gas, marine, and industrial applications.",
    features: [
      "Modular I/O architecture",
      "Marine certification (Bureau Veritas)",
      "IEC 61131-3 programming",
      "Multiple communication protocols",
      "Hot-swap capable modules",
    ],
    specs: { CPU: "32-bit ARM", Memory: "128MB RAM", "I/O": "Up to 512 points", Temp: "-20°C to +70°C" },
    color: "from-[#1565c0] to-[#1976d2]",
  },
  {
    id: 2,
    name: "PEP SMART IO",
    category: "PLC & Control",
    icon: Layers,
    badge: "Modular",
    badgeColor: "bg-[#7c3aed]/20 text-[#9d5ff0]",
    description:
      "Flexible I/O expansion modules for the SMART2 platform. Digital, analog, and specialized modules for any industrial requirement.",
    features: [
      "Digital I/O modules (8-32 ch)",
      "Analog I/O with 16-bit resolution",
      "Thermocouple and RTD inputs",
      "Pulse counter modules",
      "DIN-rail mountable",
    ],
    specs: { Channels: "8-32 per module", Resolution: "16-bit analog", Isolation: "1500V galvanic", Protection: "IP20" },
    color: "from-[#7c3aed] to-[#9d5ff0]",
  },
  {
    id: 3,
    name: "Winlog SCADA Platform",
    category: "SCADA & HMI",
    icon: BarChart3,
    badge: "Web-Enabled",
    badgeColor: "bg-[#00b4d8]/20 text-[#00b4d8]",
    description:
      "Full-featured web-enabled SCADA and HMI development environment by Sielcosistemi. Supports unlimited tags, trending, alarming, and remote access.",
    features: [
      "Web-enabled remote monitoring",
      "Unlimited tag support",
      "Advanced trending and reporting",
      "Multi-driver communication",
      "OPC server/client built-in",
    ],
    specs: { Tags: "Unlimited", Drivers: "250+ protocols", Platforms: "Windows 10/11", License: "Perpetual" },
    color: "from-[#00b4d8] to-[#48cae4]",
  },
  {
    id: 4,
    name: "Panel PC Series",
    category: "SCADA & HMI",
    icon: Monitor,
    badge: "HMI Ready",
    badgeColor: "bg-green-500/20 text-green-400",
    description:
      "Industrial panel PCs from 8\" to 19\" with resistive and capacitive touchscreen options. Windows-based for seamless SCADA integration.",
    features: [
      "8\" to 19\" display options",
      "Resistive and capacitive touch",
      "Windows 10 IoT LTSC",
      "Fanless design variants",
      "IP65 front panel protection",
    ],
    specs: { Display: "8\"–19\" TFT LCD", OS: "Windows 10 IoT", CPU: "Intel Atom / Core i", Protection: "IP65 front" },
    color: "from-[#059669] to-[#34d399]",
  },
  {
    id: 5,
    name: "SALMO Addressable Fire Panel",
    category: "Safety",
    icon: Shield,
    badge: "Life Safety",
    badgeColor: "bg-red-500/20 text-red-400",
    description:
      "SALMO series addressable fire detection and alarm system — up to 4 loops with 150 devices per loop. Designed for critical infrastructure protection.",
    features: [
      "4 loops × 150 devices capacity",
      "Full addressable detection",
      "Graphic LCD display",
      "Zone isolation capability",
      "EN 54 compliant",
    ],
    specs: { Loops: "Up to 4", Devices: "150 per loop", Display: "Graphic LCD", Standards: "EN 54" },
    color: "from-[#dc2626] to-[#f87171]",
  },
  {
    id: 6,
    name: "SALMO Conventional Panel",
    category: "Safety",
    icon: Shield,
    badge: "Conventional",
    badgeColor: "bg-orange-500/20 text-orange-400",
    description:
      "Cost-effective conventional fire alarm panel supporting up to 16 independent zones. Suitable for medium-scale commercial and industrial facilities.",
    features: [
      "Up to 16 zones",
      "Independent zone control",
      "Built-in power supply",
      "Battery backup 72h",
      "Relay outputs for integration",
    ],
    specs: { Zones: "Up to 16", Battery: "72h backup", Output: "Relay + sounder", Standards: "EN 54" },
    color: "from-[#ea580c] to-[#fb923c]",
  },
  {
    id: 7,
    name: "Fastwel PC/104 SBC",
    category: "Computers",
    icon: Package,
    badge: "Ruggedized",
    badgeColor: "bg-[#7c3aed]/20 text-[#9d5ff0]",
    description:
      "Authorized Fastwel partner — industrial single-board computers in PC/104 form factor for embedded and harsh-environment applications.",
    features: [
      "PC/104 and PC/104-Plus form factor",
      "Extended temperature range",
      "Shock and vibration rated",
      "Linux and Windows CE support",
      "Wide input voltage range",
    ],
    specs: { Form: "PC/104 / PC/104+", Temp: "-40°C to +85°C", OS: "Linux / WinCE", Power: "5V / 12V" },
    color: "from-[#0d2040] to-[#1565c0]",
  },
  {
    id: 8,
    name: "VME / CPCI Systems",
    category: "Computers",
    icon: Package,
    badge: "Standard Form",
    badgeColor: "bg-blue-500/20 text-blue-400",
    description:
      "VMEbus and CompactPCI standard form factor industrial computers for defense, aerospace, and high-reliability industrial computing needs.",
    features: [
      "VME 6U and 3U format",
      "CompactPCI 3U and 6U",
      "Deterministic real-time OS",
      "High-speed backplane",
      "Long-life product availability",
    ],
    specs: { Format: "VME 6U/3U, CPCI", Backplane: "Up to 160MB/s", OS: "VxWorks / Linux RT", MTBF: ">100,000h" },
    color: "from-[#1e3a5f] to-[#1565c0]",
  },
  {
    id: 9,
    name: "Marine Alarm & Monitoring",
    category: "Marine",
    icon: Radio,
    badge: "BV Certified",
    badgeColor: "bg-teal-500/20 text-teal-400",
    description:
      "Bureau Veritas-approved marine alarm, monitoring, and control systems — deployed on TAHYA MASR tugboats and Egyptian Authority for Maritime Safety vessels.",
    features: [
      "Bureau Veritas type approved",
      "Engine room monitoring",
      "Bilge alarm system",
      "Fire and gas detection",
      "Integrated bridge systems",
    ],
    specs: { Approval: "Bureau Veritas", Standards: "SOLAS / DNV", Channels: "Up to 1000", Temp: "-25°C to +55°C" },
    color: "from-[#0891b2] to-[#00b4d8]",
  },
  {
    id: 10,
    name: "MCC Power Panels",
    category: "Power",
    icon: Zap,
    badge: "LV Panels",
    badgeColor: "bg-yellow-500/20 text-yellow-400",
    description:
      "Custom-designed low voltage motor control centers (MCC) and distribution panels. Engineered to IEC standards for industrial and utility customers.",
    features: [
      "Motor control center (MCC)",
      "Power factor correction",
      "LV distribution panels",
      "Custom engineering design",
      "IEC 61439 compliant",
    ],
    specs: { Voltage: "Up to 690V AC", Current: "Up to 6300A", Standards: "IEC 61439", Protection: "IP31–IP55" },
    color: "from-[#d97706] to-[#fbbf24]",
  },
];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="overflow-hidden pt-16">
      {/* Hero */}
      <section className="relative bg-[#0a1628] py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,180,216,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00b4d8] text-xs font-semibold tracking-wider uppercase mb-8">
            <Package className="w-3.5 h-3.5" />
            Marketplace
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 max-w-3xl leading-tight">
            Industrial-Grade{" "}
            <span className="gradient-text">Products & Solutions</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            From proprietary PLCs to SCADA platforms, fire safety systems, and marine
            control — the complete PEP ARAB product portfolio built for mission-critical
            environments.
          </p>

          <div className="flex gap-6 mt-10">
            {[
              { label: "Products", value: "10+" },
              { label: "Market Sectors", value: "6+" },
              { label: "Global Partners", value: "5+" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-white/40 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-18 z-40 bg-white/95 backdrop-blur-md border-b border-[#e8edf5] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center gap-3 overflow-x-auto">
          <Filter className="w-4 h-4 text-[#0a1628]/40 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white shadow-md"
                  : "bg-[#f0f4ff] text-[#0a1628]/60 hover:bg-[#e0e8ff] hover:text-[#1565c0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-[#e8edf5] overflow-hidden hover:shadow-xl hover:shadow-[#1565c0]/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Card header */}
                  <div className={`bg-gradient-to-br ${product.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="flex items-start justify-between relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.badgeColor} backdrop-blur-sm`}>
                        {product.badge}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mt-5 relative z-10">{product.name}</h3>
                    <p className="text-white/60 text-xs mt-1 relative z-10">{product.category}</p>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[#0a1628]/60 text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-5">
                      {product.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[#0a1628]/70 text-xs">
                          <CheckCircle className="w-3.5 h-3.5 text-[#1565c0] flex-shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-2 mb-5 p-4 bg-[#f8faff] rounded-xl border border-[#e8edf5]">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key}>
                          <div className="text-[#0a1628]/40 text-[10px] uppercase tracking-wide">{key}</div>
                          <div className="text-[#0a1628] font-semibold text-xs">{val}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <a
                        href="mailto:peparab@peparab.com?subject=Product Inquiry"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#00b4d8]/30 transition-all duration-200"
                      >
                        Request Quote <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#0a1628]/40">
              No products in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-5">
              Engineering Services
            </div>
            <h2 className="text-4xl font-black text-white mb-4">Beyond Products</h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Full-lifecycle engineering services from concept to commissioning and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cpu, title: "System Integration", desc: "PLC, DCS, and SCADA integration tailored to your process requirements." },
              { icon: Shield, title: "Safety Engineering", desc: "Fire & gas system design, HAZOP analysis, and SIL assessment." },
              { icon: Zap, title: "Panel Fabrication", desc: "Custom MCC, power distribution, and control panel manufacturing." },
              { icon: BarChart3, title: "Commissioning", desc: "On-site installation, testing, and handover with full documentation." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6 border border-white/10 hover:border-[#00b4d8]/30 transition-all">
                <Icon className="w-8 h-8 text-[#00b4d8] mb-4" />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1565c0] to-[#00b4d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our engineers can design a tailored automation solution for your specific
            industrial application. Contact us for a technical consultation.
          </p>
          <a
            href="mailto:peparab@peparab.com?subject=Custom Solution Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1565c0] font-bold hover:bg-blue-50 transition-colors"
          >
            Talk to an Engineer <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
