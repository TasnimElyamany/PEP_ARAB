"use client";

import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  GraduationCap,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const programs = [
  {
    id: 1,
    icon: Cpu,
    title: "PLC Programming & Automation",
    level: "Beginner → Advanced",
    duration: "40 Hours",
    mode: "In-Person / Online",
    color: "from-[#1565c0] to-[#1976d2]",
    description:
      "Comprehensive PLC training using PEP SMART2 and industry-standard IEC 61131-3 languages. Hands-on lab sessions with real industrial hardware.",
    modules: [
      "Introduction to Industrial Automation",
      "IEC 61131-3 Programming Languages (Ladder, FBD, ST)",
      "PEP SMART2 CPU Configuration",
      "I/O Module Wiring & Configuration",
      "Communication Protocols (Modbus, PROFIBUS)",
      "Troubleshooting & Diagnostics",
    ],
    outcomes: [
      "Program PLCs using multiple IEC 61131-3 languages",
      "Configure and wire digital and analog I/O modules",
      "Implement industrial communication protocols",
      "Troubleshoot PLC programs in real environments",
    ],
    partners: ["Delta University", "Mansoura University"],
  },
  {
    id: 2,
    icon: BarChart3,
    title: "SCADA & HMI Development",
    level: "Intermediate",
    duration: "32 Hours",
    mode: "In-Person / Online",
    color: "from-[#00b4d8] to-[#48cae4]",
    description:
      "Master Winlog SCADA platform for industrial monitoring. Create real-time dashboards, configure alarms, and build web-accessible HMI applications.",
    modules: [
      "SCADA Architecture & Design Principles",
      "Winlog Studio Environment Setup",
      "Tag Database Configuration",
      "Dynamic Graphics & Animation",
      "Alarm Management & Event Logging",
      "Web HMI and Remote Access Configuration",
    ],
    outcomes: [
      "Design and build complete SCADA applications",
      "Configure multi-driver communication",
      "Implement alarm management systems",
      "Deploy web-accessible HMI portals",
    ],
    partners: ["Delta University", "Mansoura University"],
  },
  {
    id: 3,
    icon: Shield,
    title: "Fire & Safety Systems",
    level: "Intermediate",
    duration: "24 Hours",
    mode: "In-Person",
    color: "from-[#dc2626] to-[#f87171]",
    description:
      "Practical training on SALMO series fire alarm systems, EN 54 standards, and life safety engineering. Includes real panel wiring and commissioning exercises.",
    modules: [
      "Fire Detection Principles & Standards (EN 54)",
      "SALMO Addressable Panel Configuration",
      "Detector and Call Point Installation",
      "Zone Planning & Loop Design",
      "Panel Commissioning & Testing",
      "Maintenance & Fault Finding",
    ],
    outcomes: [
      "Design fire detection systems to EN 54 standards",
      "Commission addressable and conventional fire panels",
      "Conduct system testing and handover",
      "Perform maintenance and fault diagnosis",
    ],
    partners: ["Delta University"],
  },
  {
    id: 4,
    icon: Zap,
    title: "Industrial Electrical Engineering",
    level: "Beginner → Intermediate",
    duration: "48 Hours",
    mode: "In-Person",
    color: "from-[#d97706] to-[#fbbf24]",
    description:
      "Covers LV panel design, motor control centers, power factor correction, and industrial wiring standards. Includes hands-on panel assembly exercises.",
    modules: [
      "LV Electrical Standards (IEC 61439)",
      "Motor Control Center Design",
      "Power Factor Correction Methods",
      "Cable Sizing & Routing",
      "Panel Assembly & Wiring Practice",
      "Electrical Safety & PPE",
    ],
    outcomes: [
      "Design LV motor control centers to IEC standards",
      "Size and select power factor correction equipment",
      "Assemble and wire industrial panels",
      "Apply electrical safety procedures",
    ],
    partners: ["Mansoura University"],
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "Marine Control Systems",
    level: "Advanced",
    duration: "20 Hours",
    mode: "In-Person",
    color: "from-[#0891b2] to-[#00b4d8]",
    description:
      "Specialized training on Bureau Veritas-certified marine alarm and monitoring systems, SOLAS regulations, and integrated bridge automation.",
    modules: [
      "Marine Automation & SOLAS Requirements",
      "Bureau Veritas Type Approval Process",
      "Marine Alarm & Monitoring System Design",
      "Engine Room Monitoring",
      "Bilge & Fire Detection at Sea",
      "Integrated Bridge Systems",
    ],
    outcomes: [
      "Understand SOLAS marine automation requirements",
      "Configure marine alarm and monitoring panels",
      "Commission engine room monitoring systems",
      "Navigate Bureau Veritas approval documentation",
    ],
    partners: ["Delta University"],
  },
];

const stats = [
  { icon: Users, value: "500+", label: "Engineers Trained" },
  { icon: Award, value: "2", label: "University Partners" },
  { icon: BookOpen, value: "5", label: "Certification Programs" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
];

export default function TrainingPortalPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#00b4d8] text-xs font-semibold tracking-wider uppercase mb-8">
              <GraduationCap className="w-3.5 h-3.5" />
              Training Portal
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05]">
              Build the Skills
              <br />
              <span className="gradient-text">Industry Demands</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              PEP ARAB delivers certified industrial training programs in partnership with
              Delta University and Mansoura University — empowering Egypt's next
              generation of automation engineers.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white font-bold hover:shadow-xl hover:shadow-[#00b4d8]/30 hover:scale-105 transition-all duration-200"
            >
              Explore Programs <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-2xl p-6 border border-white/10 text-center">
                <Icon className="w-8 h-8 text-[#00b4d8] mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">{value}</div>
                <div className="text-white/40 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Partners Banner */}
      <section className="bg-white py-10 border-b border-[#e8edf5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-8">
          <p className="text-[#0a1628]/40 text-xs tracking-widest uppercase font-semibold">
            Academic Partners
          </p>
          {["Delta University for Science & Technology", "Mansoura University"].map((u) => (
            <div
              key={u}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#f0f4ff] border border-[#d0ddf5]"
            >
              <GraduationCap className="w-4 h-4 text-[#1565c0]" />
              <span className="text-[#1565c0] font-semibold text-sm">{u}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-24 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-5">
              Certification Programs
            </div>
            <h2 className="text-4xl font-black text-[#0a1628] mb-4">Training Programs</h2>
            <p className="text-[#0a1628]/60 max-w-2xl mx-auto">
              Industry-designed curricula combining theoretical foundations with
              hands-on laboratory sessions using real PEP ARAB equipment.
            </p>
          </div>

          <div className="space-y-4">
            {programs.map((program) => {
              const Icon = program.icon;
              const isExpanded = expandedId === program.id;
              return (
                <div
                  key={program.id}
                  className="bg-white rounded-2xl border border-[#e8edf5] overflow-hidden hover:shadow-lg hover:shadow-[#1565c0]/10 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : program.id)}
                    className="w-full text-left p-6 flex items-center gap-5"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#0a1628] font-bold text-lg">{program.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-1">
                        <span className="flex items-center gap-1 text-[#0a1628]/50 text-xs">
                          <Star className="w-3 h-3" /> {program.level}
                        </span>
                        <span className="flex items-center gap-1 text-[#0a1628]/50 text-xs">
                          <Clock className="w-3 h-3" /> {program.duration}
                        </span>
                        <span className="flex items-center gap-1 text-[#0a1628]/50 text-xs">
                          <MapPin className="w-3 h-3" /> {program.mode}
                        </span>
                      </div>
                    </div>
                    <div className="text-[#1565c0] flex-shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-8 border-t border-[#f0f4ff]">
                      <p className="text-[#0a1628]/60 text-sm leading-relaxed mb-6 pt-5">
                        {program.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-[#0a1628] font-bold text-sm mb-3 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[#1565c0]" /> Course Modules
                          </h4>
                          <ul className="space-y-2">
                            {program.modules.map((m) => (
                              <li key={m} className="flex items-start gap-2 text-[#0a1628]/60 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1565c0] flex-shrink-0 mt-2" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-[#0a1628] font-bold text-sm mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#00b4d8]" /> Learning Outcomes
                          </h4>
                          <ul className="space-y-2 mb-5">
                            {program.outcomes.map((o) => (
                              <li key={o} className="flex items-start gap-2 text-[#0a1628]/60 text-sm">
                                <CheckCircle className="w-3.5 h-3.5 text-[#00b4d8] flex-shrink-0 mt-0.5" />
                                {o}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {program.partners.map((p) => (
                              <span key={p} className="px-3 py-1 rounded-full bg-[#f0f4ff] border border-[#d0ddf5] text-[#1565c0] text-xs font-medium">
                                {p}
                              </span>
                            ))}
                          </div>
                          <a
                            href="#register"
                            className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white text-sm font-bold hover:shadow-lg transition-all"
                          >
                            Enroll in This Program <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 bg-[#0a1628]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-5">
              Registration
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              Start Your Journey
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Fill in the form below and our training team will contact you within 48
              hours to confirm your enrollment and schedule.
            </p>
          </div>

          {submitted ? (
            <div className="glass rounded-2xl p-12 border border-white/10 text-center">
              <CheckCircle className="w-16 h-16 text-[#00b4d8] mx-auto mb-4" />
              <h3 className="text-white text-2xl font-bold mb-2">Registration Received!</h3>
              <p className="text-white/60">
                Our team will contact you at the provided email within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Mohamed Ahmed"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="engineer@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Program of Interest *
                </label>
                <select
                  required
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00b4d8] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0a1628]">Select a program...</option>
                  {programs.map((p) => (
                    <option key={p.id} value={p.title} className="bg-[#0a1628]">
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide">
                  Message / Questions
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your background and goals..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00b4d8] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white font-bold hover:shadow-xl hover:shadow-[#00b4d8]/30 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
              >
                Submit Registration <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-white/30 text-xs text-center">
                Your information is secure and will only be used for enrollment purposes.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
