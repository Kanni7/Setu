import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Sparkles, CheckCircle2, Zap, Target, Users, Flame } from 'lucide-react';

const cohortImages = [
  {
    src: '/images/hero-bg/slide-2.webp',
    caption: '"10 paid B2B pilots locked in 48 hours. Real enterprise buyers on the line, zero pitch fluff."',
    log: 'WAR ROOM LOG #04',
    time: '2:15 AM SPRINT',
  },
  {
    src: '/images/gallery/IMG_1280.webp',
    caption: '"25 high-conviction founders selected from 400+ applicant teams. 100% focused on execution."',
    log: 'COHORT ALLIANCE',
    time: 'TACTICAL FORUM',
  },
  {
    src: '/images/gallery/IMG_0845.webp',
    caption: '"Problem Surgery & Moat Stress-Test. Dissecting customer acquisition bottlenecks live."',
    log: 'TITAN SURGERY',
    time: 'OFFLINE SPRINT',
  },
];

function InteractiveFounderBoard() {
  const [activeCard, setActiveCard] = useState(1); // 1: War Room (middle) opened by default
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Auto-rotate images every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % cohortImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const cards = [
    {
      id: 0,
      title: 'ADMISSION PASS',
      badge: '0% EQUITY',
    },
    {
      id: 1,
      title: 'WAR ROOM',
      badge: 'LIVE SPRINT',
    },
    {
      id: 2,
      title: 'PITCH PLAYBOOK',
      badge: 'AIRBNB SEED',
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto select-none pt-0 pb-2 sm:py-1">
      {/* Quick Interactive Switcher Bar */}
      <div className="flex items-center justify-between gap-1.5 p-1.5 mb-3 rounded-2xl bg-white border-2 border-ink-900 shadow-brutal-sm">
        {cards.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setActiveCard(idx)}
            className={`flex-1 py-1.5 px-2 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeCard === idx
                ? 'bg-violet-600 text-white border-2 border-ink-900 shadow-brutal-xs'
                : 'text-ink-600 hover:text-ink-900 hover:bg-canvas-100'
            }`}
          >
            <span>{c.title}</span>
            <span className={`text-[9px] px-1 py-0.2 rounded font-normal ${
              activeCard === idx ? 'bg-violet-800 text-violet-100' : 'bg-canvas-200 text-ink-500'
            }`}>
              {c.badge}
            </span>
          </button>
        ))}
      </div>

      {/* Layered Card Stack Stage */}
      <div className="relative h-[365px] sm:h-[385px] w-full flex items-center justify-center">

        {/* ========================================================
            CARD 0: OFFICIAL FOUNDER ADMISSION PASS / TICKET
        ======================================================== */}
        <motion.div
          onClick={() => setActiveCard(0)}
          animate={{
            zIndex: activeCard === 0 ? 30 : activeCard === 1 ? 10 : 20,
            rotate: activeCard === 0 ? 0 : -3,
            scale: activeCard === 0 ? 1 : 0.94,
            y: activeCard === 0 ? 0 : 12,
            x: activeCard === 0 ? 0 : -14,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className={`absolute inset-0 rounded-2xl bg-[#FFFDF7] border-[3px] border-ink-900 p-5 sm:p-6 shadow-brutal-xl cursor-pointer flex flex-col justify-between overflow-hidden transition-shadow ${
            activeCard === 0 ? 'ring-0' : 'hover:shadow-brutal-2xl'
          }`}
        >
          {/* Top Washi Tape Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-honey-300/80 border-2 border-ink-900 -rotate-2 z-10 pointer-events-none" />

          {/* Ticket Header Strip */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-ink-900">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-violet-600 border-2 border-ink-900 flex items-center justify-center text-white">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold text-ink-900 tracking-wider">
                  SETU // FELLOWSHIP PASS
                </div>
                <div className="text-[9px] font-mono text-ink-500">
                  № STU-2026-B4-019
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 border border-ink-900 text-[10px] font-mono font-bold text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>COHORT 04 ACTIVE</span>
            </div>
          </div>

          {/* Ticket Body Content */}
          <div className="my-auto py-2 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-500 font-bold block">
                  ADMIT ONE FOUNDER
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink-900 leading-tight">
                  Tactical B-School Sprint
                </h3>
              </div>

              {/* Distressed Red/Violet Rubber Stamp */}
              <div className="rotate-[-10deg] px-2.5 py-1 rounded-lg border-2 border-red-600 bg-red-50 text-red-600 font-mono font-extrabold text-[10px] tracking-wider uppercase shadow-xs">
                0% DILUTION
              </div>
            </div>

            {/* Credential Specs Grid */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
              <div className="p-2.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
                <span className="text-ink-500 text-[8px] font-bold uppercase block">CURRICULUM</span>
                <span className="font-bold text-ink-900 text-[11px] block mt-0.5">100-Day Sprint</span>
                <span className="text-violet-700 font-medium text-[9px]">Zero Corporate Theory</span>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
                <span className="text-ink-500 text-[8px] font-bold uppercase block">FORMAT</span>
                <span className="font-bold text-ink-900 text-[11px] block mt-0.5">In-Person & Live</span>
                <span className="text-emerald-700 font-medium text-[9px]">Tactical Sprint Hub</span>
              </div>
              <div className="p-2.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
                <span className="text-ink-500 text-[8px] font-bold uppercase block">MENTOR RATIO</span>
                <span className="font-bold text-ink-900 text-[11px] block mt-0.5">11+ Unicorn Titans</span>
                <span className="text-ink-600 font-medium text-[9px]">1:1 Dedicated Hours</span>
              </div>
              <div className="p-2.5 rounded-xl bg-honey-100 border-2 border-ink-900">
                <span className="text-honey-800 text-[8px] font-bold uppercase block">ADMISSIONS</span>
                <span className="font-bold text-ink-900 text-[11px] block mt-0.5">4 Seats Left</span>
                <span className="text-red-600 font-bold text-[9px]">Closing Soon</span>
              </div>
            </div>
          </div>

          {/* Perforated Barcode Ticket Footer */}
          <div className="pt-3 border-t-2 border-dashed border-ink-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Fake Brutalist Barcode */}
              <div className="h-6 flex items-center gap-[2px]">
                {[4, 2, 6, 2, 4, 8, 2, 6, 3, 5, 2, 7, 3, 2, 5, 4].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h * 2.5}px` }}
                    className="w-[2px] bg-ink-900 inline-block"
                  />
                ))}
              </div>
              <span className="text-[9px] font-mono text-ink-500 hidden sm:inline">
                VERIFIED CREDENTIAL
              </span>
            </div>

            <span className="px-2.5 py-1 rounded-md bg-ink-900 text-white font-mono font-bold text-[9px] uppercase tracking-wider">
              CLAIM SEAT →
            </span>
          </div>
        </motion.div>

        {/* ========================================================
            CARD 1: LIVE WAR ROOM COHORT POLAROID (MIDDLE / DEFAULT)
        ======================================================== */}
        <motion.div
          onClick={() => setActiveCard(1)}
          animate={{
            zIndex: activeCard === 1 ? 30 : activeCard === 0 ? 20 : 10,
            rotate: activeCard === 1 ? 0 : 3.5,
            scale: activeCard === 1 ? 1 : 0.94,
            y: activeCard === 1 ? 0 : 14,
            x: activeCard === 1 ? 0 : 14,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className={`absolute inset-0 rounded-2xl bg-white border-[3px] border-ink-900 p-4 sm:p-5 shadow-brutal-xl cursor-pointer flex flex-col justify-between overflow-hidden transition-shadow ${
            activeCard === 1 ? 'ring-0' : 'hover:shadow-brutal-2xl'
          }`}
        >
          {/* Top Washi Tape Corner */}
          <div className="absolute -top-3 right-8 w-24 h-6 bg-violet-200/80 border-2 border-ink-900 rotate-6 z-10 pointer-events-none" />

          {/* Photo Frame Container with Auto-Changing Images */}
          <div className="relative rounded-xl border-2 border-ink-900 overflow-hidden bg-ink-900 flex-1 min-h-[190px] sm:min-h-[210px] group">
            <AnimatePresence mode="wait">
              <motion.img
                key={cohortImages[currentImgIndex].src}
                src={cohortImages[currentImgIndex].src}
                alt="Setu Founders War Room"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </AnimatePresence>

            {/* Pagination Dots on Photo */}
            <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 bg-ink-900/80 border border-white/20 px-2 py-1 rounded-full backdrop-blur-xs z-10">
              {cohortImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(dotIdx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImgIndex === dotIdx
                      ? 'bg-honey-400 w-4'
                      : 'bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Polaroid Note Area */}
          <div className="pt-3 pb-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-ink-500 mb-1">
              <span className="font-bold text-ink-900 uppercase">
                {cohortImages[currentImgIndex].log}
              </span>
              <span>{cohortImages[currentImgIndex].time}</span>
            </div>
            <p className="text-xs font-sans text-ink-800 italic leading-snug min-h-[34px]">
              {cohortImages[currentImgIndex].caption}
            </p>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-ink-900/10 text-[9px] font-mono text-ink-600">
              <span className="px-1.5 py-0.5 rounded bg-canvas-200 border border-ink-900 font-bold">WAR ROOM SPRINT</span>
              <span>Tactical Execution</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            CARD 2: UNICORN SEED PITCH PLAYBOOK
        ======================================================== */}
        <motion.div
          onClick={() => setActiveCard(2)}
          animate={{
            zIndex: activeCard === 2 ? 30 : activeCard === 0 ? 10 : 20,
            rotate: activeCard === 2 ? 0 : -4.5,
            scale: activeCard === 2 ? 1 : 0.93,
            y: activeCard === 2 ? 0 : 18,
            x: activeCard === 2 ? 0 : -10,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className={`absolute inset-0 rounded-2xl bg-[#FEF3C7] border-[3px] border-ink-900 p-5 sm:p-6 shadow-brutal-xl cursor-pointer flex flex-col justify-between overflow-hidden transition-shadow ${
            activeCard === 2 ? 'ring-0' : 'hover:shadow-brutal-2xl'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b-2 border-ink-900">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white border-2 border-ink-900 p-1 flex items-center justify-center">
                <img
                  src="https://www.google.com/s2/favicons?domain=airbnb.com&sz=128"
                  alt="Airbnb"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] font-mono font-bold text-ink-900">
                  AIRBNB SEED TEARDOWN
                </div>
                <div className="text-[9px] font-mono text-ink-600">
                  $600K Raised • 14 Slides • 2008
                </div>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded-md bg-white border-2 border-ink-900 text-[9px] font-mono font-bold text-ink-900 shadow-brutal-xs">
              VAULT #01
            </span>
          </div>

          {/* Rule Breakdown Box */}
          <div className="my-auto py-2 space-y-2.5">
            <div className="p-3 rounded-xl bg-white border-2 border-ink-900">
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-violet-700 block mb-1">
                Lethal Operator Takeaway:
              </span>
              <p className="text-[11px] font-sans text-ink-900 font-medium leading-relaxed">
                "Never pitch speculative total addressable market size before proving why users tolerate initial friction. Airbnb proved 3-click bookings before asking for $600K."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono font-bold">
              <div className="p-2 rounded-lg bg-white border-2 border-ink-900">
                17K Craigslist Posts
              </div>
              <div className="p-2 rounded-lg bg-emerald-200 text-emerald-950 border-2 border-ink-900">
                10% Direct Take-Rate
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2.5 border-t-2 border-ink-900 flex items-center justify-between text-[10px] font-mono font-bold">
            <span className="text-ink-700">35+ Unicorn Decks in Vault</span>
            <span className="text-violet-800 flex items-center gap-1">
              Inspect Deck <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </motion.div>

      </div>

      {/* Floating Titan Mentors Avatar Pill */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-3 -right-3 sm:-right-5 p-2 rounded-xl bg-white border-2 border-ink-900 shadow-brutal-md flex items-center gap-2 z-40"
      >
        <div className="flex -space-x-2">
          <img src="/images/mentors/vikrambanand.webp" alt="Vikram" className="w-6 h-6 rounded-full object-cover border-2 border-ink-900" />
          <img src="/images/mentors/Ashish_kulkarni.webp" alt="Ashish" className="w-6 h-6 rounded-full object-cover border-2 border-ink-900" />
          <img src="/images/mentors/deric.webp" alt="Deric" className="w-6 h-6 rounded-full object-cover border-2 border-ink-900" />
        </div>
        <div className="text-left">
          <div className="text-[10px] font-mono font-bold text-ink-900 leading-tight">11+ Titans</div>
          <div className="text-[8px] font-mono text-emerald-700 font-bold">1:1 Mentorship</div>
        </div>
      </motion.div>

      {/* Floating Zero Equity Guarantee Stamp */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-3 -left-3 sm:-left-5 p-2 rounded-xl bg-white border-2 border-ink-900 shadow-brutal-md flex items-center gap-2 z-40"
      >
        <div className="w-6 h-6 rounded-lg bg-violet-600 border border-ink-900 text-white flex items-center justify-center font-bold text-[10px] font-mono">
          0%
        </div>
        <div className="text-left">
          <div className="text-[10px] font-mono font-bold text-ink-900 leading-tight">Zero Equity</div>
          <div className="text-[8px] font-mono text-ink-500">100% Founder Retained</div>
        </div>
      </motion.div>
    </div>
  );
}

const ROTATING_WORDS = ['Building.', 'Shipping.', 'Validating.', 'Scaling.'];

function KineticRotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-grid grid-cols-1 grid-rows-1 overflow-hidden align-baseline h-[1.16em] pb-1.5 -mb-1.5">
      <AnimatePresence initial={false}>
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.42,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="col-start-1 row-start-1 inline-block text-violet-600 whitespace-nowrap"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-30 lg:pt-32 pb-8 sm:pb-10 px-6 overflow-hidden flex flex-col justify-between">

      {/* Crumpled Paper Ambient Background Effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Subtle Crumpled Paper Texture */}
        <div 
          className="absolute inset-0 opacity-45 mix-blend-multiply bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('/images/crumpled-paper-texture.png')`,
            backgroundSize: '100% 100%',
            filter: 'contrast(1.08) brightness(1.01)',
            maskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 100%)',
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-20 my-auto">

        {/* Left Column: Editorial Headline & Pitch */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-violet-100 border-2 border-ink-900 mb-4 sm:mb-5 shadow-brutal-sm"
          >
            <span className="text-[11px] font-mono font-bold tracking-widest text-violet-800 uppercase">
              The Alternate B-School for Aspiring Founders
            </span>
          </motion.div>

          {/* Primary Editorial Headline */}
          <div className="mb-4 sm:mb-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="text-5xl sm:text-6xl xl:text-[76px] font-display font-extrabold tracking-tight text-ink-900 leading-[1.04]"
            >
              Stop Ideating. <br />
              <span className="font-display font-extrabold text-violet-600 inline-flex items-baseline flex-wrap">
                <span>Start&nbsp;</span>
                <KineticRotatingWord />
              </span>
            </motion.h1>
          </div>

          {/* Core Philosophy Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base sm:text-lg text-ink-700 max-w-xl font-sans leading-relaxed mb-6 sm:mb-8"
          >
            Traditional MBA programs teach corporate management. <strong className="text-ink-900 font-semibold">Setu</strong> is the ruthless tactical sprint where active unicorn founders and enterprise architects pressure-test your idea in its critical first 100 days.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6 sm:mb-8"
          >
            <a
              href="#apply"
              className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-white bg-violet-600"
            >
              <span>Explore Programs & Apply</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="#vault"
              className="btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-xs font-semibold tracking-wider text-ink-900 bg-white hover:bg-honey-100 transition-colors"
            >
              <span>Inspect Unicorn Decks</span>
            </a>
          </motion.div>

          {/* Micro Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 pt-4 sm:pt-5 border-t-2 border-ink-900 w-full max-w-lg"
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
      <div className="max-w-7xl mx-auto w-full pt-6 sm:pt-8 relative z-10">
        <div className="p-3.5 sm:p-4 rounded-xl bg-white border-2 border-ink-900 flex flex-wrap items-center justify-between gap-3 sm:gap-4 shadow-brutal-sm">
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
