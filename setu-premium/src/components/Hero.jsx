import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Sparkles, CheckCircle2, Zap, Target, Users, Flame } from 'lucide-react';

function InteractiveFounderBoard() {
  const [activeTab, setActiveTab] = useState('sprint'); // 'sprint' | 'mentors' | 'metrics'

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Main War Room Board */}
      <div className="relative rounded-xl bg-white border-[3px] border-ink-900 p-6 sm:p-7 shadow-brutal-xl">

        {/* Board Top Bar */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-ink-900">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-violet-100 border-2 border-ink-900 flex items-center justify-center text-violet-700">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-ink-900 uppercase tracking-wider">
                Founder War Room • Live
              </div>
              <div className="text-[10px] font-mono text-sage-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
                Active Tactical Session (BKC Mumbai)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-xl bg-canvas-200 border-2 border-ink-900">
            {['sprint', 'mentors', 'metrics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-colors ${
                  activeTab === tab
                    ? 'bg-honey-400 text-ink-900 border-2 border-ink-900'
                    : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Sprint Roadmap */}
        {activeTab === 'sprint' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-violet-100 border-2 border-ink-900">
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded-md bg-violet-300 border border-ink-900 text-[10px] font-mono font-bold text-ink-900">
                  DAY 01 • SURGERY
                </span>
                <span className="text-[10px] font-mono text-violet-700 font-medium">9:00 AM — 11:00 PM</span>
              </div>
              <div className="text-xs font-display font-bold text-ink-900 mb-0.5">
                Value Hypothesis & Cold Customer Outbound
              </div>
              <p className="text-[11px] text-ink-600">
                Live 4-hour cold sprint targeting 50 enterprise buyers. Zero theory.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-sage-100 border-2 border-ink-900">
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded-md bg-sage-300 border border-ink-900 text-[10px] font-mono font-bold text-ink-900">
                  DAY 02 • UNIT MARGINS
                </span>
                <span className="text-[10px] font-mono text-sage-700 font-medium">10:00 AM — 9:00 PM</span>
              </div>
              <div className="text-xs font-display font-bold text-ink-900 mb-0.5">
                Forensic Unit Economics & Moat Stress-Test
              </div>
              <p className="text-[11px] text-ink-600">
                CAC-to-LTV reality check with active Series B CFOs.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-blush-100 border-2 border-ink-900">
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 rounded-md bg-blush-300 border border-ink-900 text-[10px] font-mono font-bold text-ink-900">
                  DAY 03 • FIRING LINE
                </span>
                <span className="text-[10px] font-mono text-blush-700 font-medium">11:00 AM — 8:00 PM</span>
              </div>
              <div className="text-xs font-display font-bold text-ink-900 mb-0.5">
                Angel Teardown & Term Sheet Defense
              </div>
              <p className="text-[11px] text-ink-600">
                Simulated venture pitches with tier-1 angel network.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Mentors Active */}
        {activeTab === 'mentors' && (
          <div className="space-y-2.5">
            {[
              { name: "Vikram Anand", role: "Hypermine", img: "/images/mentors/vikrambanand.webp", tag: "Web3 Trust Infra", color: "bg-violet-100 text-violet-800" },
              { name: "Ashish Kulkarni", role: "Founders' Psyche", img: "/images/mentors/Ashish_kulkarni.webp", tag: "Ex-FundEnable", color: "bg-sage-100 text-sage-800" },
              { name: "Gaurav Bansal", role: "Ramsetu", img: "/images/mentors/gaurav.webp", tag: "Founder & Mentor", color: "bg-honey-100 text-honey-800" },
              { name: "Deric Karunesudas", role: "Cyber Leader", img: "/images/mentors/deric.webp", tag: "18+ Yrs Enterprise", color: "bg-sky-100 text-sky-800" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between p-2.5 rounded-xl bg-canvas-100 border-2 border-ink-900 hover:bg-honey-50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <img src={m.img} alt={m.name} className="w-8 h-8 rounded-full object-cover border-2 border-ink-900" />
                  <div>
                    <div className="text-xs font-display font-bold text-ink-900">{m.name}</div>
                    <div className="text-[10px] text-ink-500 font-mono">{m.role}</div>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-md border border-ink-900 text-[10px] font-mono font-bold ${m.color}`}>
                  {m.tag}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Metrics & Moats */}
        {activeTab === 'metrics' && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-ink-700 font-medium">TAM Defensibility Score</span>
                <span className="text-violet-700 font-bold">96.4%</span>
              </div>
              <div className="h-2 w-full bg-violet-100 border border-ink-900 rounded-full overflow-hidden">
                <div className="h-full bg-violet-500 rounded-full w-[96%]" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-ink-700 font-medium">Customer Willingness-to-Pay</span>
                <span className="text-sage-700 font-bold">Validated ($1.4k ACV)</span>
              </div>
              <div className="h-2 w-full bg-sage-100 border border-ink-900 rounded-full overflow-hidden">
                <div className="h-full bg-sage-500 rounded-full w-[88%]" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-ink-700 font-medium">Equity Dilution in Setu</span>
                <span className="text-emerald-700 font-bold">0.0% (Zero)</span>
              </div>
              <div className="h-2 w-full bg-emerald-100 border border-ink-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-[100%]" />
              </div>
            </div>
          </div>
        )}

        {/* Board Bottom Micro-badge */}
        <div className="mt-4 pt-3 flex items-center justify-between border-t-2 border-ink-900 text-[10px] font-mono text-ink-500">
          <span className="flex items-center gap-1 text-sage-700 font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
            Verified Tactical Curriculum
          </span>
          <span className="text-ink-500">Next Batch: Oct 2026</span>
        </div>
      </div>

      {/* Floating Badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 p-3 rounded-xl bg-white border-2 border-ink-900 shadow-brutal-md flex items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-lg bg-violet-100 border-2 border-ink-900 text-violet-700 flex items-center justify-center font-bold text-xs">
          0%
        </div>
        <div>
          <div className="text-[11px] font-mono font-bold text-ink-900">Zero Equity</div>
          <div className="text-[9px] font-mono text-ink-500">Pure Founder Value</div>
        </div>
      </motion.div>

      {/* Floating Badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-5 -left-4 p-3 rounded-xl bg-white border-2 border-ink-900 shadow-brutal-md flex items-center gap-2.5 z-20"
      >
        <div className="w-7 h-7 rounded-lg bg-sage-100 border-2 border-ink-900 text-sage-700 flex items-center justify-center font-bold text-xs">
          11+
        </div>
        <div>
          <div className="text-[11px] font-mono font-bold text-ink-900">Unicorn Titans</div>
          <div className="text-[9px] font-mono text-ink-500">Direct 1:1 Mentorship</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-6 overflow-hidden flex flex-col justify-between">

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20 my-auto">

        {/* Left Column: Editorial Headline & Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-violet-100 border-2 border-ink-900 mb-6 shadow-brutal-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest text-violet-800 uppercase">
              The Alternate B-School for Aspiring Founders
            </span>
          </motion.div>

          {/* Primary Editorial Headline */}
          <div className="mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="text-5xl sm:text-7xl xl:text-[80px] font-display font-extrabold tracking-tight text-ink-900 leading-[1.04]"
            >
              Stop Ideating. <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
                className="font-display font-extrabold text-violet-600 inline-block"
              >
                Start Building.
              </motion.span>
            </motion.h1>
          </div>

          {/* Core Philosophy Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-lg text-ink-700 max-w-xl font-sans leading-relaxed mb-8"
          >
            Traditional MBA programs teach corporate management. <strong className="text-ink-900 font-semibold">Setu</strong> is the ruthless tactical sprint where active unicorn founders and enterprise architects pressure-test your idea in its critical first 100 days.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="#apply"
              className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-violet-600"
            >
              <span>Explore Programs & Apply</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="#vault"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-mono text-xs font-semibold tracking-wider text-ink-900 bg-white hover:bg-honey-100 transition-colors"
            >
              <span>Inspect Unicorn Decks</span>
            </a>
          </motion.div>

          {/* Micro Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 pt-6 border-t-2 border-ink-900 w-full max-w-lg"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-ink-900 tracking-tight">11+</div>
              <div className="text-[11px] font-mono text-ink-600 uppercase tracking-wider font-medium mt-0.5">Titans Mentoring</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-violet-600 tracking-tight">35+</div>
              <div className="text-[11px] font-mono text-ink-600 uppercase tracking-wider font-medium mt-0.5">Unicorn Decks</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-sage-600 tracking-tight">0%</div>
              <div className="text-[11px] font-mono text-ink-600 uppercase tracking-wider font-medium mt-0.5">Equity Dilution</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Interactive Founder War Room Board */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 relative flex items-center justify-center w-full"
        >
          <InteractiveFounderBoard />
        </motion.div>

      </div>

      {/* Institutional Strip Banner */}
      <div className="max-w-7xl mx-auto w-full pt-16 relative z-10">
        <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-ink-900 flex flex-wrap items-center justify-between gap-4 shadow-brutal-sm">
          <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-ink-700 tracking-wider uppercase">
            <Building2 className="w-4 h-4 text-violet-600" />
            <span>Invited Masterclasses & Evaluator at:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono font-bold">
            <span className="px-3.5 py-1.5 rounded-lg bg-violet-100 text-violet-800 border-2 border-ink-900">
              E-Cell IIT Madras
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-sage-100 text-sage-800 border-2 border-ink-900">
              IIM Rohtak
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-honey-100 text-honey-800 border-2 border-ink-900">
              Doon Business School
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
