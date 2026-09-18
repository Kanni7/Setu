import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'TITANS & MENTORS', href: '#mentors' },
    { label: 'DECK VAULT', href: '#vault' },
    { label: 'EVENTS', href: '#events' },
    { label: 'TOOLS', href: '#tools' },
    { label: 'PROGRAMS', href: '#programs' },
    { label: 'MANIFESTO', href: '#manifesto' },
    { label: 'WAR ROOMS', href: '#community' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#FFF3E7]/90 backdrop-blur-xl border-b border-[#242A32]/[0.08] shadow-[0_10px_30px_-10px_rgba(184,74,58,0.08)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-white border border-[#242A32]/10 shadow-sm group-hover:border-violet-500/50 transition-colors">
              <img
                src="/images/logo.png"
                alt="Setu Logo"
                className="w-full h-full object-cover rounded-[9px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold tracking-wider text-base text-ink-900 group-hover:text-violet-600 transition-colors">
                  SETU
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-widest bg-violet-100 text-violet-700 border border-violet-200 rounded-full">
                  B-School
                </span>
              </div>
              <p className="text-[10px] font-mono text-ink-400 tracking-tight hidden sm:block">
                ALTERNATE EDUCATION FOR FOUNDERS
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono font-semibold text-ink-500 hover:text-ink-900 transition-colors relative py-1 group tracking-wider"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTA & Cohort Status */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            {/* Quick Cmd+K search trigger */}
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
              }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 hover:bg-white border border-ink-900/[0.08] text-ink-400 hover:text-ink-800 shadow-sm transition-all text-xs font-mono"
            >
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-ink-50 border border-ink-100 rounded text-ink-500 font-mono">
                ⌘K
              </kbd>
            </button>

            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-mono font-medium text-sage-700">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              Cohort 04 Admissions Open
            </div>

            <a
              href="#apply"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-[0_4px_16px_-2px_rgba(184,74,58,0.40)] transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-violet-200" />
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-violet-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border border-ink-900/10 text-ink-700 hover:text-ink-900 shadow-sm"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#FFF3E7]/98 backdrop-blur-2xl border-b border-ink-900/10 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-xs font-mono font-medium text-sage-700 w-fit mb-2">
                <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
                Cohort 04 Admissions Open
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono font-semibold text-ink-700 hover:text-violet-600 py-2.5 border-b border-ink-900/[0.05]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-mono text-xs font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-md"
              >
                <span>APPLY FOR COHORT</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
