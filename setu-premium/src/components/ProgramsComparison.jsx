import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  ShieldCheck,
  Calendar,
  Flame
} from 'lucide-react';

export default function ProgramsComparison() {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'timeline'

  const programs = [
    {
      id: "spark",
      tag: "INTENSIVE 72-HOUR SPRINT",
      title: "The Spark: 3-Day Ignition Sprint",
      duration: "3 Full Days",
      timeframe: "Fri 09:00 — Sun 23:00",
      cohort: "Cohort 04 • October 2026",
      seats: "Strictly 25 Founders Max",
      locations: ["Mumbai (BKC)", "Delhi / NCR (Cyber City)"],
      description: "Validate your startup idea over one intense weekend with rigorous teardowns and expert mentorship before writing code.",
      stats: [
        { label: "SPRINT TIME", value: "72 Hours" },
        { label: "OPERATOR 1:1", value: "Guaranteed" },
        { label: "EQUITY TAKEN", value: "0% Dilution" },
        { label: "LOCATIONS", value: "Mumbai & NCR" }
      ],
      phases: [
        {
          phase: "DAY 01",
          name: "Hypothesis Surgery & Customer War Room",
          detail: "Deconstruct your initial value proposition with active founders. 4-hour live cold-outbound sprint targeting 50 real potential buyers."
        },
        {
          phase: "DAY 02",
          name: "Unit Economics & Moat Defense",
          detail: "Forensic unit contribution margin teardown, CAC-to-LTV reality check, and defensible distribution channel design."
        },
        {
          phase: "DAY 03",
          name: "Pitch Deck Stress Test & Firing Line",
          detail: "Live firing line presentation simulation in front of early-stage angels. Immediate brutal feedback on narrative gaps."
        }
      ],
      highlights: [
        "Direct 1-on-1 model critique by Series A/B founders",
        "Live cold customer acquisition sprint (real meetings booked)",
        "Financial modeling template & defensible TAM audit",
        "Lifetime access to Setu Alumni Operator Network"
      ],
      accent: "violet",
      bgClass: "bg-violet-50/70 border-violet-200 text-violet-900 shadow-pastel-md",
      badgeClass: "bg-violet-100 text-violet-800 border-violet-200",
      cta: "Show Interest for 3-Day Spark"
    },
    {
      id: "transformation",
      tag: "FLAGSHIP VENTURE RESIDENCY",
      title: "The Transformation: 30-Days Deep-Dive",
      duration: "30-Day Immersion",
      timeframe: "Full-Time Residential",
      cohort: "Batch Alpha • Winter 2026",
      seats: "Selective 15 Teams",
      locations: ["Mumbai Exclusive Campus"],
      description: "100-day acceleration packed into 30 days. Build your MVP, secure early customers, refine your pitch, and pitch to institutional seed funds.",
      stats: [
        { label: "IMMERSION", value: "30 Days" },
        { label: "SECTOR VCS", value: "20+ Funds" },
        { label: "MVP BUILD", value: "Production" },
        { label: "DEMO DAY", value: "Tier-1 Angels" }
      ],
      phases: [
        {
          phase: "WEEK 01",
          name: "System Architecture & Alpha Build",
          detail: "Pair with resident enterprise architects to build scalable, secure full-stack software and cloud infrastructure."
        },
        {
          phase: "WEEK 02",
          name: "High-Velocity Revenue Engine",
          detail: "Closed-room sales engineering to close your first 10 paying customers or verified pilot contracts."
        },
        {
          phase: "WEEK 03",
          name: "Cap Table, IP & Data Room Forensics",
          detail: "Structure clean cross-border capitalization tables, tax-exempt entities, ESOP pools, and institutional data rooms."
        },
        {
          phase: "WEEK 04",
          name: "Closed-Door VC Demo Day",
          detail: "Pitch directly to 20+ active seed funds and family offices with proven term sheet execution playbooks."
        }
      ],
      highlights: [
        "Dedicated full-stack engineering & design pairing",
        "Direct enterprise customer introductions & pilot scoping",
        "Clean legal entity setup & statutory compliance clearance",
        "Private Demo Day with leading Indian seed funds"
      ],
      accent: "sage",
      bgClass: "bg-sage-50/70 border-sage-200 text-sage-900 shadow-pastel-md",
      badgeClass: "bg-sage-100 text-sage-800 border-sage-200",
      cta: "Show Interest for 30-Day Immersion"
    }
  ];

  return (
    <section id="programs" className="py-28 px-6 bg-canvas-100 relative border-t border-ink-900/[0.06]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-100 border border-honey-200 text-honey-900 text-xs font-mono font-bold mb-4 shadow-xs">
              <Flame className="w-3.5 h-3.5 text-honey-700" />
              <span>FOR ALL THOSE WHO HAVE KEEDA AND HIMMAT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Programs Launching Soon.
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-xl bg-canvas-200 border border-ink-900/[0.06] self-start md:self-auto">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'cards'
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              Overview Cards
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                viewMode === 'timeline'
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              Curriculum Timeline
            </button>
          </div>
        </div>

        {/* View Mode 1: Detailed Cards */}
        {viewMode === 'cards' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((prog, index) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl p-8 sm:p-10 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${prog.bgClass}`}
              >
                <div>
                  {/* Tag & Seats Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-mono font-extrabold border ${prog.badgeClass}`}>
                      {prog.tag}
                    </span>
                    <span className="text-xs font-mono font-semibold text-ink-600 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-violet-600" />
                      {prog.seats}
                    </span>
                  </div>

                  {/* Title & Duration */}
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink-900 mb-3 leading-tight">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-600 font-sans leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Location Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {prog.locations.map((loc) => (
                      <span key={loc} className="px-3 py-1 rounded-full bg-white/90 border border-ink-900/10 text-xs font-mono font-medium text-ink-800 flex items-center gap-1.5 shadow-xs">
                        <MapPin className="w-3 h-3 text-violet-600" />
                        {loc}
                      </span>
                    ))}
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/90 border border-ink-900/[0.06] mb-8 shadow-xs">
                    {prog.stats.map((s) => (
                      <div key={s.label}>
                        <div className="text-[10px] font-mono text-ink-400 font-semibold uppercase">{s.label}</div>
                        <div className="font-display font-bold text-xs text-ink-900 mt-0.5">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Core Highlights */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-ink-400 mb-2">
                      Tactical Inclusions:
                    </div>
                    {prog.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2.5 text-xs text-ink-700 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#apply"
                  className="w-full py-4 rounded-2xl bg-white hover:bg-white/90 border border-ink-900/10 font-mono text-xs font-bold uppercase tracking-wider text-ink-900 flex items-center justify-center gap-2 shadow-sm hover:border-violet-400 transition-all active:scale-[0.98]"
                >
                  <span>{prog.cta}</span>
                  <ArrowRight className="w-4 h-4 text-violet-600" />
                </a>
              </motion.div>
            ))}
          </div>
        ) : (
          /* View Mode 2: Step-by-Step Curriculum Timeline */
          <div className="space-y-10">
            {programs.map((prog) => (
              <div key={prog.id} className={`rounded-3xl p-8 sm:p-10 border ${prog.bgClass}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-ink-900/[0.08] gap-3">
                  <div>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${prog.badgeClass}`}>
                      {prog.tag}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-ink-900 mt-2">
                      {prog.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-ink-500">
                    {prog.duration} • {prog.locations.join(', ')}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {prog.phases.map((ph, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white/95 border border-ink-900/[0.06] shadow-xs">
                      <span className="px-2 py-0.5 rounded-md bg-canvas-200 text-[10px] font-mono font-extrabold text-ink-800">
                        {ph.phase}
                      </span>
                      <h4 className="font-display font-bold text-sm text-ink-900 mt-3 mb-1.5">
                        {ph.name}
                      </h4>
                      <p className="text-xs text-ink-500 leading-relaxed font-sans">
                        {ph.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
