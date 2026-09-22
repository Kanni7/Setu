import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  Database,
  Gift,
  FileText,
  Calculator,
  PieChart,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Sliders
} from 'lucide-react';

export default function ToolsEcosystem() {
  const [activeSimulator, setActiveSimulator] = useState('captable'); // 'captable' | 'runway'
  // Cap table simulator state
  const [valuation, setValuation] = useState(5); // in Crores INR
  const [investment, setInvestment] = useState(1); // in Crores INR
  const [optionPool, setOptionPool] = useState(10); // %

  // Calculated equity
  const postMoneyVal = valuation + investment;
  const investorDilution = ((investment / postMoneyVal) * 100).toFixed(1);
  const founderEquity = (100 - investorDilution - optionPool).toFixed(1);

  // Runway simulator state
  const [monthlyBurn, setMonthlyBurn] = useState(4.5); // Lakhs INR
  const [cashInBank, setCashInBank] = useState(60); // Lakhs INR
  const calculatedRunwayMonths = (cashInBank / monthlyBurn).toFixed(1);

  const tools = [
    {
      id: "incubators",
      title: "Incubators & Accelerators Map",
      desc: "Intelligent mapping tool to discover subsidized government coworking spaces, state STPI centers, and deeptech university hubs across India.",
      status: "OPEN RESOURCE",
      icon: Compass,
      tag: "Spatial Directory",
      accent: "violet",
      bgClass: "bg-violet-100 text-violet-900",
      badgeClass: "bg-violet-200 text-violet-900 border-ink-900",
      metrics: "180+ Physical Hubs Mapped"
    },
    {
      id: "investors",
      title: "Investor & Angel Database",
      desc: "Verified directory of 250+ active angels, family offices, and micro-VC funds with check sizes, sweet spots, and lead partner handles.",
      status: "COHORT EXCLUSIVE",
      icon: Database,
      tag: "Capital Pipeline",
      accent: "sage",
      bgClass: "bg-sage-100 text-sage-900",
      badgeClass: "bg-sage-200 text-sage-900 border-ink-900",
      metrics: "250+ Active Check Writers"
    },
    {
      id: "grants",
      title: "Grants & Non-Dilutive Schemes",
      desc: "Explore BIRAC, NIDHI-PRAYAS, SISFS, MeitY, and university incubators offering 0% equity non-dilutive government grants up to ₹50 Lakhs.",
      status: "0% EQUITY",
      icon: Gift,
      tag: "Govt Grants",
      accent: "blush",
      bgClass: "bg-blush-100 text-blush-900",
      badgeClass: "bg-blush-200 text-blush-900 border-ink-900",
      metrics: "₹120Cr+ Total Grant Pool"
    },
    {
      id: "decks",
      title: "Pitch Deck Vault & Teardowns",
      desc: "Dissect 35+ funded seed and growth decks from global and Indian unicorns with VC teardown annotations and killer wedge breakdowns.",
      status: "OPEN RESOURCE",
      icon: FileText,
      tag: "Narrative Strategy",
      accent: "honey",
      bgClass: "bg-honey-100 text-honey-900",
      badgeClass: "bg-honey-200 text-honey-900 border-ink-900",
      metrics: "35+ Teardown Decks"
    },
    {
      id: "financial",
      title: "Financial Runway Modeler",
      desc: "Simulate cash burn, hiring ramp, revenue milestone thresholds, and default-alive runway trajectories without complex Excel formulas.",
      status: "INTERACTIVE WIDGET",
      icon: Calculator,
      tag: "Unit Economics",
      accent: "sky",
      bgClass: "bg-sky-100 text-sky-900",
      badgeClass: "bg-sky-200 text-sky-900 border-ink-900",
      metrics: "Real-Time Sensitivity Analysis"
    },
    {
      id: "captable",
      title: "Cap Table Dilution Simulator",
      desc: "Visualize convertible notes, SAFE notes, ESOP pools, and multi-round venture dilution to ensure founders retain board control.",
      status: "INTERACTIVE WIDGET",
      icon: PieChart,
      tag: "Cap Table",
      accent: "violet",
      bgClass: "bg-violet-100 text-violet-900",
      badgeClass: "bg-violet-200 text-violet-900 border-ink-900",
      metrics: "Multi-Round Modeling"
    }
  ];

  return (
    <section id="tools" className="py-28 px-6 bg-canvas-100 relative border-t-[3px] border-ink-900">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border-2 border-ink-900 text-violet-800 text-xs font-mono font-bold mb-4">
              <Layers className="w-3.5 h-3.5 text-violet-600" />
              <span>FOUNDER ARSENAL & TOOLKIT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Tools & Resources Built for Founders.
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-500 max-w-md leading-relaxed">
            Free high-precision tools to calculate dilution, model burn runway, discover non-dilutive grants, and target seed investors across India.
          </p>
        </div>

        {/* Interactive Simulator Highlight Widget */}
        <div className="rounded-xl bg-white border-[3px] border-ink-900 p-6 sm:p-10 shadow-brutal-md mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b-2 border-ink-900 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-100 border-2 border-ink-900 text-violet-700 flex items-center justify-center font-bold">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-ink-900">
                  Live Venture Simulator
                </h3>
                <p className="text-xs font-mono text-ink-400">
                  Interactive real-time sensitivity calculator
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-canvas-200 border-2 border-ink-900 self-start sm:self-auto">
              <button
                onClick={() => setActiveSimulator('captable')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeSimulator === 'captable'
                    ? 'bg-honey-400 text-ink-900 border-2 border-ink-900'
                    : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                Cap Table Dilution
              </button>
              <button
                onClick={() => setActiveSimulator('runway')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeSimulator === 'runway'
                    ? 'bg-honey-400 text-ink-900 border-2 border-ink-900'
                    : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                Runway & Burn
              </button>
            </div>
          </div>

          {/* Simulator Content */}
          {activeSimulator === 'captable' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-ink-600 font-semibold">Pre-Money Valuation (₹ Crores):</span>
                    <span className="font-bold text-violet-700">₹{valuation} Cr</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={valuation}
                    onChange={(e) => setValuation(parseFloat(e.target.value))}
                    className="w-full h-2 bg-violet-100 rounded-lg appearance-none cursor-pointer accent-violet-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-ink-600 font-semibold">Target Round Size (₹ Crores):</span>
                    <span className="font-bold text-violet-700">₹{investment} Cr</span>
                  </div>
                  <input
                    type="range"
                    min="0.25"
                    max="10"
                    step="0.25"
                    value={investment}
                    onChange={(e) => setInvestment(parseFloat(e.target.value))}
                    className="w-full h-2 bg-sage-100 rounded-lg appearance-none cursor-pointer accent-sage-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-ink-600 font-semibold">Unallocated ESOP Pool (%):</span>
                    <span className="font-bold text-violet-700">{optionPool}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="1"
                    value={optionPool}
                    onChange={(e) => setOptionPool(parseInt(e.target.value))}
                    className="w-full h-2 bg-honey-100 rounded-lg appearance-none cursor-pointer accent-honey-600"
                  />
                </div>
              </div>

              {/* Live Output Card */}
              <div className="lg:col-span-5 p-6 rounded-xl bg-canvas-100 border-2 border-ink-900 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold">
                  Post-Round Cap Table Ownership
                </div>

                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-md bg-violet-600"></span>
                      <span>Founders & Core Team</span>
                    </span>
                    <span className="font-bold text-violet-800 text-sm">{founderEquity}%</span>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-md bg-sage-500"></span>
                      <span>Seed Investors</span>
                    </span>
                    <span className="font-bold text-sage-800 text-sm">{investorDilution}%</span>
                  </div>

                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-md bg-honey-400"></span>
                      <span>Employee Option Pool</span>
                    </span>
                    <span className="font-bold text-honey-800 text-sm">{optionPool}%</span>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-ink-900 flex items-center justify-between text-xs font-mono">
                  <span className="text-ink-500">Post-Money Valuation:</span>
                  <span className="font-extrabold text-ink-900">₹{postMoneyVal.toFixed(2)} Cr</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-ink-600 font-semibold">Current Bank Balance (₹ Lakhs):</span>
                    <span className="font-bold text-violet-700">₹{cashInBank} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={cashInBank}
                    onChange={(e) => setCashInBank(parseFloat(e.target.value))}
                    className="w-full h-2 bg-violet-100 rounded-lg appearance-none cursor-pointer accent-violet-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-ink-600 font-semibold">Net Monthly Burn Rate (₹ Lakhs):</span>
                    <span className="font-bold text-violet-700">₹{monthlyBurn} Lakhs / mo</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={monthlyBurn}
                    onChange={(e) => setMonthlyBurn(parseFloat(e.target.value))}
                    className="w-full h-2 bg-blush-100 rounded-lg appearance-none cursor-pointer accent-blush-600"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-xl bg-canvas-100 border-2 border-ink-900 text-center space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-ink-400 font-bold">
                  Effective Operational Runway
                </div>
                <div className="text-4xl font-display font-extrabold text-violet-700">
                  {calculatedRunwayMonths} <span className="text-lg font-sans font-normal text-ink-500">Months</span>
                </div>
                <p className="text-[11px] font-mono text-ink-500">
                  {calculatedRunwayMonths < 9 ? (
                    <span className="text-blush-600 font-bold">⚠️ Warning: Under 9 months runway. Immediate monetization or sprint required.</span>
                  ) : (
                    <span className="text-sage-700 font-bold">✓ Healthy Default-Alive Runway window.</span>
                  )}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 6 Core Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className={`rounded-xl p-6 border-[3px] border-ink-900 flex flex-col justify-between transition-all duration-150 shadow-brutal-sm hover:shadow-brutal-md hover:-translate-y-0.5 ${tool.bgClass}`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border-2 border-ink-900 flex items-center justify-center text-ink-900">
                      <Icon className="w-5 h-5 text-violet-700" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold border-2 ${tool.badgeClass}`}>
                      {tool.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-ink-900 mb-2">
                    {tool.title}
                  </h3>

                  <p className="text-xs text-ink-600 leading-relaxed font-sans mb-5">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-ink-900 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-ink-700">
                    {tool.metrics}
                  </span>

                  <a
                    href="#apply"
                    className="text-xs font-mono font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1 group"
                  >
                    <span>Access Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
