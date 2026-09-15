import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  FileText,
  Shield,
  Calendar,
  Zap,
  CheckCircle2,
  Activity,
  PlusCircle,
  PlayCircle,
  CheckSquare,
  Square
} from 'lucide-react';

export default function FounderWarRoom() {
  const [activeTab, setActiveTab] = useState('arr'); // 'arr' | 'deck' | 'captable' | 'roadmap'
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Interactive ARR state
  const [customerCount, setCustomerCount] = useState(10);
  const [arrValue, setArrValue] = useState(120000);
  const [lastClosedDeal, setLastClosedDeal] = useState(null);

  // Interactive Deck state
  const [activeDeckKey, setActiveDeckKey] = useState('airbnb'); // 'airbnb' | 'uber' | 'spacex'

  // Interactive Sprint checklist state
  const [completedMilestones, setCompletedMilestones] = useState({
    m1: true,
    m2: true,
    m3: false,
    m4: false
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const simulateCustomerClose = () => {
    if (customerCount >= 25) return;
    const newCount = customerCount + 1;
    const addedARR = 12000;
    const newARR = arrValue + addedARR;
    setCustomerCount(newCount);
    setArrValue(newARR);
    setLastClosedDeal(`+ $1,000/mo Pilot (${newCount} Customers)`);
    setTimeout(() => setLastClosedDeal(null), 2500);
  };

  const toggleMilestone = (key) => {
    setCompletedMilestones(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const sprintProgressPercent = Math.round(
    (Object.values(completedMilestones).filter(Boolean).length / 4) * 100
  );

  const deckArchives = {
    airbnb: {
      name: "Airbnb Seed (2008)",
      raised: "$600K Seed • 14 Slides • $3.5M Valuation",
      domain: "airbnb.com",
      rule: "Never pitch total addressable market size before proving why users tolerate initial friction. Airbnb proved 3-click bookings before asking for $600K.",
      stat1: "17K Craigslist Posts Hijacked",
      stat2: "10% Flat Take Rate"
    },
    uber: {
      name: "Uber Cab Seed (2008)",
      raised: "$200K Seed • 25 Slides • $4M Valuation",
      domain: "uber.com",
      rule: "Target affluent early adopters willing to pay 2x premium for 10x certainty. Uber started with black cars at $8/mile before UberX.",
      stat1: "Sub-3 Min Downtown Hails",
      stat2: "100% Mobile Geo-Dispatch"
    },
    spacex: {
      name: "SpaceX Series G (2017)",
      raised: "$100M • 21 Slides • $21B Valuation",
      domain: "spacex.com",
      rule: "Cost moats built on raw physics beat software network effects. Vertical component integration reduced launch expense by 90%.",
      stat1: "Falcon 9 Booster Reusability",
      stat2: "NASA Commercial Contracts"
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
      }}
      className="relative w-full rounded-3xl bg-obsidian-900/90 border border-white/15 p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(59,130,246,0.2)] backdrop-blur-2xl transition-transform duration-200 ease-out"
    >
      {/* Background Blueprint Grid Underlay */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none rounded-3xl" />

      {/* Terminal Top Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08] mb-5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-steel-400 font-semibold tracking-wider uppercase ml-1">
            SETU FOUNDER MISSION CONTROL • 100-DAY SPRINT
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          LIVE WAR ROOM
        </div>
      </div>

      {/* Tab Switcher Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-obsidian-950/80 border border-white/[0.06] mb-5 relative z-10">
        <button
          type="button"
          onClick={() => setActiveTab('arr')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'arr'
              ? 'bg-brand-500 text-white shadow-lg'
              : 'text-steel-400 hover:text-white hover:bg-white/[0.03]'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>ARR Velocity</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('deck')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'deck'
              ? 'bg-brand-500 text-white shadow-lg'
              : 'text-steel-400 hover:text-white hover:bg-white/[0.03]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Deck Teardown</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('captable')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'captable'
              ? 'bg-brand-500 text-white shadow-lg'
              : 'text-steel-400 hover:text-white hover:bg-white/[0.03]'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>0% Dilution</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('roadmap')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-mono font-medium transition-all ${
            activeTab === 'roadmap'
              ? 'bg-brand-500 text-white shadow-lg'
              : 'text-steel-400 hover:text-white hover:bg-white/[0.03]'
          }`}
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Sprint ({sprintProgressPercent}%)</span>
        </button>
      </div>

      {/* Dynamic Tab Body */}
      <div className="relative z-10 min-h-[260px]">
        <AnimatePresence mode="wait">
          {/* TAB 1: ARR VELOCITY */}
          {activeTab === 'arr' && (
            <motion.div
              key="arr"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              {/* Top Stats Banner */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-steel-500 uppercase block">100-Day ARR Run-Rate</span>
                  <span className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    ${arrValue.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> +340% sprint target
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-steel-500 uppercase block">First Customers</span>
                  <span className="text-xl sm:text-2xl font-display font-extrabold text-brand-400">
                    {customerCount} / 25
                  </span>
                  <span className="text-[10px] font-mono text-steel-400 block mt-0.5">Paid B2B Pilots</span>
                </div>
                <div className="p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-steel-500 uppercase block">CAC Payback Period</span>
                  <span className="text-xl sm:text-2xl font-display font-extrabold text-emerald-400">22 Days</span>
                  <span className="text-[10px] font-mono text-steel-400 block mt-0.5">Profitable Unit Econ</span>
                </div>
              </div>

              {/* Interactive Visual Compounding Line Graph */}
              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/[0.06] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono text-steel-400 mb-2">
                  <span>Day 01 (Hypothesis)</span>
                  <span className="text-brand-400 font-bold">Day 50 (MVP + Revenue)</span>
                  <span className="text-emerald-400 font-bold">Day 100 (Seed Round Ready)</span>
                </div>

                {/* SVG Curve Chart */}
                <div className="relative h-24 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 95 Q 120 90, 200 65 T 320 30 T 400 5 L 400 100 L 0 100 Z"
                      fill="url(#chartGlow)"
                    />
                    <path
                      d="M 0 95 Q 120 90, 200 65 T 320 30 T 400 5"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="200" cy="65" r="4" fill="#38BDF8" />
                    <circle cx="400" cy="5" r="5" fill="#34D399" className="animate-pulse" />
                  </svg>
                </div>

                {/* Interactive Action to Simulate Deal Close */}
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-steel-400">
                    {lastClosedDeal ? (
                      <span className="text-emerald-400 font-bold animate-pulse">{lastClosedDeal}</span>
                    ) : (
                      "Tactical Outbound Simulator:"
                    )}
                  </span>
                  <button
                    type="button"
                    onClick={simulateCustomerClose}
                    className="px-3 py-1 rounded-lg bg-brand-500/20 hover:bg-brand-500/30 border border-brand-500/40 text-brand-300 font-mono text-[11px] flex items-center gap-1.5 transition-colors"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    <span>Close Next B2B Deal</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: DECK TEARDOWN */}
          {activeTab === 'deck' && (
            <motion.div
              key="deck"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {/* Quick Deck Switcher */}
              <div className="flex gap-2 pb-1">
                {['airbnb', 'uber', 'spacex'].map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveDeckKey(key)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono uppercase transition-colors ${
                      activeDeckKey === key
                        ? 'bg-brand-500 text-white font-bold'
                        : 'bg-white/[0.04] text-steel-400 hover:text-white'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950/70 border border-brand-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 p-1.5 flex items-center justify-center">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${deckArchives[activeDeckKey].domain}&sz=128`}
                      alt={deckArchives[activeDeckKey].name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {deckArchives[activeDeckKey].name}
                    </h4>
                    <p className="text-[11px] font-mono text-brand-300">
                      {deckArchives[activeDeckKey].raised}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-white/[0.06] text-xs font-sans text-steel-300 leading-relaxed">
                <div className="text-[10px] font-mono text-steel-500 uppercase mb-1 font-semibold">Setu Operator Teardown Rule:</div>
                "{deckArchives[activeDeckKey].rule}"
              </div>

              <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-steel-500 text-[10px] block">CRITICAL TRACTION WEDGE</span>
                  <span className="text-white font-bold">{deckArchives[activeDeckKey].stat1}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <span className="text-steel-500 text-[10px] block">UNIT MODEL</span>
                  <span className="text-emerald-400 font-bold">{deckArchives[activeDeckKey].stat2}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: CAP TABLE & 0% DILUTION */}
          {activeTab === 'captable' && (
            <motion.div
              key="captable"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">Institutional Guarantee</span>
                  <h4 className="font-display font-black text-2xl text-white">0.00% Equity Dilution</h4>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 font-bold text-xs font-mono">
                  100% OWNED
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-obsidian-950/70 border border-white/[0.06] space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center text-steel-300">
                  <span>Founders Common Equity:</span>
                  <span className="text-white font-bold">85.0%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                  <div className="bg-brand-500 h-full w-[85%]" />
                  <div className="bg-emerald-400 h-full w-[15%]" />
                </div>
                <div className="flex justify-between items-center text-steel-400 text-[11px] pt-1">
                  <span>Employee Stock Pool (ESOP): 15.0%</span>
                  <span className="text-emerald-400 font-bold">Setu Fee: 0% Equity</span>
                </div>
              </div>

              <p className="text-[11px] font-sans text-steel-400">
                Traditional incubators take 7%–10% of your company for basic talks. Setu takes zero equity, leaving your cap table pristine for Series A.
              </p>
            </motion.div>
          )}

          {/* TAB 4: 100-DAY ROADMAP (INTERACTIVE CHECKLIST) */}
          {activeTab === 'roadmap' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-2.5 font-mono text-xs"
            >
              <button
                type="button"
                onClick={() => toggleMilestone('m1')}
                className="w-full p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06] flex items-center justify-between text-left hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {completedMilestones.m1 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-steel-500 shrink-0" />
                  )}
                  <div>
                    <span className="text-white font-semibold block text-xs">Day 01–15 : Problem Surgery</span>
                    <span className="text-[10px] text-steel-400">Kill fatal blindspots & conduct 50 customer interviews</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${completedMilestones.m1 ? 'text-emerald-400' : 'text-steel-500'}`}>
                  {completedMilestones.m1 ? 'VERIFIED' : 'PENDING'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => toggleMilestone('m2')}
                className="w-full p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06] flex items-center justify-between text-left hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {completedMilestones.m2 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-steel-500 shrink-0" />
                  )}
                  <div>
                    <span className="text-white font-semibold block text-xs">Day 16–45 : Full MVP Deploy</span>
                    <span className="text-[10px] text-steel-400">Pair with resident architects to build production app</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${completedMilestones.m2 ? 'text-emerald-400' : 'text-steel-500'}`}>
                  {completedMilestones.m2 ? 'VERIFIED' : 'PENDING'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => toggleMilestone('m3')}
                className="w-full p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06] flex items-center justify-between text-left hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {completedMilestones.m3 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-steel-500 shrink-0" />
                  )}
                  <div>
                    <span className="text-white font-semibold block text-xs">Day 46–70 : First 10 Paid B2B Pilots</span>
                    <span className="text-[10px] text-steel-400">Close initial revenue contracts and lock unit economics</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${completedMilestones.m3 ? 'text-emerald-400' : 'text-steel-500'}`}>
                  {completedMilestones.m3 ? 'VERIFIED' : 'PENDING'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => toggleMilestone('m4')}
                className="w-full p-3 rounded-xl bg-obsidian-950/70 border border-white/[0.06] flex items-center justify-between text-left hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {completedMilestones.m4 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-steel-500 shrink-0" />
                  )}
                  <div>
                    <span className="text-white font-semibold block text-xs">Day 71–100 : VC Demo Day</span>
                    <span className="text-[10px] text-steel-400">20+ Seed Fund presentations with term sheet playbook</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${completedMilestones.m4 ? 'text-emerald-400' : 'text-steel-500'}`}>
                  {completedMilestones.m4 ? 'VERIFIED' : 'PENDING'}
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-steel-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-400" />
          <span className="text-steel-300">11 Titan Mentors Active</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-steel-500">IIT-M & IIM-R Accredited</span>
          <span className="text-emerald-400 font-semibold">99.4% CSAT</span>
        </div>
      </div>
    </motion.div>
  );
}
