import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles, BookOpen, Layers, Users, Calendar, Award } from 'lucide-react';

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const quickLinks = [
    { title: 'Titans & Mentors (11+ Operators)', icon: Users, href: '#mentors', category: 'Mentorship' },
    { title: 'Unicorn Pitch Deck Vault (Airbnb, Uber, SpaceX)', icon: BookOpen, href: '#vault', category: 'Resources' },
    { title: 'Startup Summits & Events Calendar 2026', icon: Calendar, href: '#events', category: 'Ecosystem' },
    { title: 'Cap Table Dilution & Runway Simulator', icon: Layers, href: '#tools', category: 'Tools' },
    { title: 'The Spark (3-Day Validation Sprint)', icon: Sparkles, href: '#programs', category: 'Curriculum' },
    { title: 'The Transformation (30-Day Residency)', icon: Sparkles, href: '#programs', category: 'Curriculum' },
    { title: "Founder's Manifesto & Story", icon: Award, href: '#manifesto', category: 'Institutional' },
    { title: 'Inside the Setu War Rooms (Photo Gallery)', icon: Layers, href: '#community', category: 'Community' },
  ];

  const filteredLinks = query === ''
    ? quickLinks
    : quickLinks.filter(l => l.title.toLowerCase().includes(query.toLowerCase()) || l.category.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-ink-900/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="w-full max-w-xl rounded-3xl bg-white border border-ink-900/10 shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="p-4 border-b border-ink-900/[0.06] flex items-center gap-3">
              <Search className="w-5 h-5 text-violet-600 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search mentors, pitch decks, events, tools, programs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm font-sans text-ink-900 placeholder-ink-400 focus:outline-none"
              />
              <kbd className="px-2 py-0.5 text-[10px] font-mono bg-canvas-200 border border-ink-900/10 rounded text-ink-500">
                ESC
              </kbd>
            </div>

            {/* List */}
            <div className="p-2 max-h-80 overflow-y-auto space-y-1">
              {filteredLinks.length > 0 ? (
                filteredLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-3 rounded-2xl hover:bg-canvas-100 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-display font-bold text-ink-900 group-hover:text-violet-700 transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[10px] font-mono text-ink-400">
                            {item.category}
                          </div>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-ink-300 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  );
                })
              ) : (
                <div className="p-6 text-center text-xs font-mono text-ink-400">
                  No matching resources found.
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-canvas-100 border-t border-ink-900/[0.06] flex items-center justify-between text-[11px] font-mono text-ink-400">
              <span>Setu Command Navigator</span>
              <span>Use ↑↓ to navigate, Enter to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
