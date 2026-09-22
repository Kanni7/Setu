import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sectionIds = ['mentors', 'vault', 'events', 'tools', 'programs', 'manifesto', 'community'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy for current section
      const scrollPos = window.scrollY + 180;
      let current = '';
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          current = sectionIds[i];
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'TITANS & MENTORS', href: '#mentors', id: 'mentors' },
    { label: 'DECK VAULT', href: '#vault', id: 'vault' },
    { label: 'EVENTS', href: '#events', id: 'events' },
    { label: 'TOOLS', href: '#tools', id: 'tools' },
    { label: 'PROGRAMS', href: '#programs', id: 'programs' },
    { label: 'MANIFESTO', href: '#manifesto', id: 'manifesto' },
    { label: 'WAR ROOMS', href: '#community', id: 'community' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 bg-white border-b-[3px] border-[#0A0A0A] shadow-brutal-sm transition-all duration-200 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo & Tag */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden p-0.5 bg-white border-2 border-[#0A0A0A] shadow-brutal-sm group-hover:border-violet-500 transition-colors">
              <img
                src="/images/logo.png"
                alt="Setu Logo"
                className="w-full h-full object-cover rounded-[7px]"
              />
            </div>
            <span className="font-display font-extrabold tracking-wider text-lg text-ink-900 group-hover:text-violet-600 transition-colors">
              SETU
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-mono transition-colors relative py-1 group tracking-wider ${
                    isActive
                      ? 'text-ink-900 font-bold'
                      : 'text-ink-500 hover:text-ink-900 font-semibold'
                  }`}
                >
                  {link.label}

                  {/* Active Indicator Line - Glides smoothly between active sections */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2.5px] bg-violet-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Hover line for inactive tabs */}
                  {!isActive && (
                    <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-ink-400/40 transition-all duration-300 group-hover:w-full rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Cohort Status */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0 mr-4 sm:mr-6 lg:mr-8">
            {/* Quick Cmd+K search trigger */}
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
              }}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-honey-100 border-2 border-ink-900 text-ink-700 hover:text-ink-900 shadow-brutal-sm transition-all text-xs font-mono"
            >
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[9px] bg-canvas-100 border border-ink-900 rounded text-ink-700 font-mono">
                ⌘K
              </kbd>
            </button>

            <div className="hidden xl:flex items-center px-3 py-1.5 rounded-md bg-sage-400 border-2 border-ink-900 text-[11px] font-mono font-bold text-ink-900">
              Cohort 04 Admissions Open
            </div>

            <a
              href="#apply"
              className="btn-primary relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-violet-600 hover:bg-violet-600 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-violet-200" />
              <span>APPLY NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-violet-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border-2 border-ink-900 text-ink-700 hover:text-ink-900 shadow-brutal-sm"
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
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#FFFBF0] border-b-[3px] border-ink-900 p-6 lg:hidden shadow-brutal-lg"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center px-3 py-1.5 rounded-md bg-sage-400 border-2 border-ink-900 text-xs font-mono font-bold text-ink-900 w-fit mb-2">
                Cohort 04 Admissions Open
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-mono py-2.5 flex items-center justify-between border-b-2 transition-colors ${
                      isActive
                        ? 'text-violet-600 border-violet-600 font-bold'
                        : 'text-ink-700 hover:text-violet-600 font-semibold border-ink-900/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                    )}
                  </a>
                );
              })}

              <a
                href="#apply"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-mono text-xs font-bold text-white bg-violet-600"
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
