"use client";

import { ArrowRight, Calendar, Tag, Newspaper, TrendingUp, Globe2, Award } from "lucide-react";

const featured = {
  title: "PEP ARAB Completes TouatGas Algeria Automation Project",
  category: "Project Milestone",
  date: "December 2023",
  excerpt:
    "PEP ARAB has successfully delivered the automation and control infrastructure for the TouatGas natural gas facility in Algeria — one of Africa's largest gas production sites with a capacity of 4.5 billion cubic meters per year. The project involved advanced PLC and SCADA integration over a 1,500 km deployment corridor.",
  tags: ["Oil & Gas", "Algeria", "SCADA", "PLC"],
};

const articles = [
  {
    id: 1,
    title: "TAHYA MASR Tugboats Equipped with PEP ARAB Marine Systems",
    category: "Marine",
    date: "October 2023",
    excerpt:
      "Red Sea Ports Authority has commissioned PEP ARAB to supply Bureau Veritas-certified alarm and monitoring systems for the TAHYA MASR 1 & 2 tugboats — 70-ton tensile strength vessels operating at 12 knots in the Red Sea.",
    icon: Globe2,
    color: "from-[#0891b2] to-[#00b4d8]",
  },
  {
    id: 2,
    title: "Partnership with Delta University Expands Industrial Training",
    category: "Education",
    date: "September 2023",
    excerpt:
      "PEP ARAB has deepened its academic collaboration with Delta University for Science & Technology, introducing three new lab-based certification tracks in PLC programming, SCADA development, and electrical engineering.",
    icon: Award,
    color: "from-[#7c3aed] to-[#1565c0]",
  },
  {
    id: 3,
    title: "Smart Greenhouse Automation: National Company for Protective Cultivations",
    category: "AgriTech",
    date: "July 2023",
    excerpt:
      "PEP ARAB delivered a fully automated PLC-driven greenhouse control system for the National Company for Protective Cultivations — optimizing irrigation, climate control, and nutrient management for precision agriculture.",
    icon: TrendingUp,
    color: "from-[#059669] to-[#00b4d8]",
  },
  {
    id: 4,
    title: "Aswan High Dam Monitoring System Upgrade",
    category: "Energy",
    date: "May 2023",
    excerpt:
      "PEP ARAB has completed a modernization project for the Aswan High Dam hydroelectric power plant — upgrading industrial control, SCADA monitoring, and safety systems to current IEC standards.",
    icon: Globe2,
    color: "from-[#d97706] to-[#fbbf24]",
  },
  {
    id: 5,
    title: "New SALMO Fire Alarm Line Achieves EN 54 Certification",
    category: "Product",
    date: "March 2023",
    excerpt:
      "The updated SALMO addressable fire panel series has received EN 54 certification, expanding its deployment eligibility across European and Gulf markets. The new system supports 4 loops with 150 addressable devices per loop.",
    icon: Award,
    color: "from-[#dc2626] to-[#f87171]",
  },
  {
    id: 6,
    title: "PEP ARAB Named Fastwel Authorized Partner for MENA",
    category: "Partnership",
    date: "January 2023",
    excerpt:
      "PEP ARAB has been officially designated as Fastwel's authorized partner for ruggedized industrial computers across the MENA region, expanding the company's product portfolio with military-grade embedded computing solutions.",
    icon: Globe2,
    color: "from-[#1565c0] to-[#00b4d8]",
  },
];

const pressHighlights = [
  { label: "Countries covered", value: "Algeria, Egypt, UAE, Saudi Arabia" },
  { label: "Key industry", value: "Oil & Gas, Marine, Energy, AgriTech" },
  { label: "Latest milestone", value: "TouatGas Algeria — Dec 2023" },
  { label: "Active partnerships", value: "6 international technology partners" },
];

export default function NewsroomPage() {
  return (
    <div className="overflow-hidden pt-18">
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
            <Newspaper className="w-3.5 h-3.5" />
            Newsroom
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 max-w-3xl leading-tight">
            Latest from{" "}
            <span className="gradient-text">PEP ARAB</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
            Project milestones, technology announcements, partnership news, and industry
            insights from Egypt's leading control systems provider.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-6">
            Featured Story
          </div>
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1565c0] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 p-10 lg:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#ffb300]/20 text-[#ffb300] text-xs font-semibold">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {featured.date}
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-5 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 bg-gradient-to-br from-[#00b4d8]/20 to-transparent flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="text-6xl font-black text-white/10 mb-2">2023</div>
                  <div className="text-[#00b4d8] font-bold text-2xl mb-1">4.5B m³/yr</div>
                  <div className="text-white/40 text-sm">Natural Gas Capacity</div>
                  <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-[#1565c0] to-[#00b4d8] mx-auto" />
                  <div className="text-white/60 text-sm mt-4">Algeria · TouatGas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Highlights */}
      <section className="py-10 bg-white border-y border-[#e8edf5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pressHighlights.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-[#0a1628] font-bold text-sm mb-1">{value}</div>
                <div className="text-[#0a1628]/40 text-xs uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#1565c0]/10 text-[#1565c0] text-xs font-semibold tracking-widest uppercase mb-3">
                All News
              </div>
              <h2 className="text-3xl font-black text-[#0a1628]">Recent Updates</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const Icon = article.icon;
              return (
                <div
                  key={article.id}
                  className="bg-white rounded-2xl border border-[#e8edf5] overflow-hidden hover:shadow-xl hover:shadow-[#1565c0]/10 hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  {/* Image placeholder */}
                  <div className={`h-40 bg-gradient-to-br ${article.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                    <Icon className="w-12 h-12 text-white/40 relative z-10" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f0f4ff] text-[#1565c0] text-xs font-semibold">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#0a1628]/40 text-xs">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>

                    <h3 className="text-[#0a1628] font-bold text-base mb-3 leading-snug group-hover:text-[#1565c0] transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-[#0a1628]/55 text-sm leading-relaxed flex-1">
                      {article.excerpt}
                    </p>

                    <div className="mt-5 flex items-center gap-1 text-[#1565c0] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#00b4d8] text-xs font-semibold tracking-widest uppercase mb-6">
            Stay Updated
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Subscribe to PEP ARAB News
          </h2>
          <p className="text-white/60 mb-8">
            Get project announcements, product launches, and industry insights directly
            in your inbox. No spam — only what matters.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#00b4d8] transition-colors"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#1565c0] to-[#00b4d8] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#00b4d8]/30 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/30 text-xs mt-4">
            Unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
