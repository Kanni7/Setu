import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Zap, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // Auto-dismiss smoothly after 1.4s
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1400);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] isolate bg-[#FFFBF0] flex flex-col items-center justify-center cursor-pointer select-none border-b-[5px] border-ink-900 shadow-2xl overflow-hidden px-4 sm:px-6"
        >
          {/* Subtle Crumpled Paper Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-45 mix-blend-multiply bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: `url('/images/crumpled-paper-texture.png')`,
              backgroundSize: '100% 100%',
            }}
          />

          {/* Large, Refined Brand Artifact Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -24 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-xl sm:max-w-2xl bg-white border-[3px] border-ink-900 rounded-3xl shadow-brutal-2xl p-6 sm:p-10"
          >
            {/* Authentic Dual Washi Tapes */}
            <div className="absolute -top-3.5 left-12 w-28 h-6 bg-honey-300/90 border-2 border-ink-900 -rotate-3 pointer-events-none shadow-xs" />
            <div className="absolute -top-3.5 right-12 w-28 h-6 bg-violet-200/90 border-2 border-ink-900 rotate-2 pointer-events-none shadow-xs" />

            {/* Inner Refined Border Frame */}
            <div className="relative border-2 border-dashed border-ink-900/20 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
              
              {/* Header Status Bar */}
              <div className="w-full flex items-center justify-between pb-4 mb-6 border-b-2 border-ink-900/15 text-[10px] sm:text-[11px] font-mono text-ink-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-ink-900 uppercase tracking-wider">SETU DOSSIER • BATCH 04</span>
                </div>
                <span className="font-bold text-violet-700 uppercase tracking-widest hidden sm:inline">
                  № STU-2026-B4
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 border border-ink-900 text-emerald-900 font-bold">
                  ADMISSIONS OPEN
                </span>
              </div>

              {/* Setu Brand Logo & Emblem */}
              <div className="relative mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-[3px] border-ink-900 p-1.5 shadow-brutal-md mx-auto flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="Setu Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Micro Sparkle Badge */}
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-honey-400 border-2 border-ink-900 flex items-center justify-center text-ink-900 shadow-brutal-xs">
                  <Zap className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Brand Title & Pill */}
              <div className="flex items-center gap-2.5 mb-1.5">
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink-900 tracking-tight">
                  SETU
                </h1>
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-honey-400 text-ink-900 border-2 border-ink-900 rounded-lg shadow-brutal-xs">
                  B-School
                </span>
              </div>

              <p className="text-xs sm:text-sm font-mono font-bold text-violet-800 uppercase tracking-widest mb-4">
                The Alternate B-School for Aspiring Founders
              </p>

              {/* Distressed Red Rubber Stamp Accent */}
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-50 border-2 border-red-600 text-red-600 font-mono font-extrabold text-xs uppercase tracking-wider rotate-[-2deg] shadow-xs">
                <span>0.00% EQUITY DILUTION</span>
                <span className="text-red-400">•</span>
                <span>PURE FOUNDER VALUE</span>
              </div>

              {/* Primary Callout Statement */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-ink-900 tracking-tight leading-none mb-6">
                Stop Ideating. <span className="text-violet-600">Start Building.</span>
              </h2>

              {/* 3 Pillars Trust Micro-Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg mb-6 text-[10px] sm:text-[11px] font-mono">
                <div className="p-2 sm:p-2.5 rounded-xl bg-canvas-100 border-2 border-ink-900">
                  <span className="font-bold text-ink-900 text-sm sm:text-base block">11+</span>
                  <span className="text-ink-600 font-medium">Unicorn Titans</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-violet-100 border-2 border-ink-900">
                  <span className="font-bold text-violet-900 text-sm sm:text-base block">35+</span>
                  <span className="text-violet-800 font-medium">Seed Decks</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-100 border-2 border-ink-900">
                  <span className="font-bold text-emerald-900 text-sm sm:text-base block">100 Days</span>
                  <span className="text-emerald-800 font-medium">Tactical Sprint</span>
                </div>
              </div>

              {/* Refined Precision Loading Meter */}
              <div className="w-full max-w-md space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-ink-700">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
                    INITIALIZING SPRINT ENVIRONMENT
                  </span>
                  <span className="text-violet-700 font-extrabold">{progress}%</span>
                </div>

                <div className="w-full h-3 bg-canvas-200 border-2 border-ink-900 rounded-full overflow-hidden p-[1px]">
                  <motion.div
                    className="h-full bg-violet-600 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'linear' }}
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* Bottom Prompt */}
          <span className="relative z-10 text-[11px] font-mono text-ink-400 uppercase tracking-widest mt-6 hover:text-ink-900 transition-colors">
            Click anywhere to enter immediately →
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
