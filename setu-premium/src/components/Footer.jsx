import { ArrowUpRight, Sparkles } from 'lucide-react';

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const links = {
    navigation: [
      { name: 'Home', href: '#' },
      { name: 'Titans & Mentors', href: '#mentors' },
      { name: 'Pitch Deck Vault', href: '#vault' },
      { name: 'Startup Events', href: '#events' },
      { name: 'Tools Hub', href: '#tools' },
      { name: 'Programs', href: '#programs' },
      { name: 'Founder Manifesto', href: '#manifesto' },
      { name: 'Community Gallery', href: '#community' },
    ],
    programs: [
      { name: 'The Spark: 3-Day Sprint', href: '#programs' },
      { name: 'The Transformation Residency', href: '#programs' },
      { name: 'Fundraising Workshop', href: '#apply' },
      { name: 'Pitch Teardown Clinics', href: '#vault' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Cookie Preferences', href: '#' },
      { name: 'Grievance Officer', href: '#' },
    ]
  };

  return (
    <footer className="bg-canvas-200 text-ink-500 font-sans border-t-[3px] border-ink-900 relative z-10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Branding & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b-[3px] border-ink-900">

          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden p-0.5 bg-white border-2 border-ink-900 shadow-brutal-sm">
                <img
                  src="/images/logo.png"
                  alt="Setu Logo"
                  className="w-full h-full object-cover rounded-[9px]"
                />
              </div>
              <div>
                <span className="font-display font-extrabold tracking-wider text-lg text-ink-900">
                  SETU STARTUP SCHOOL
                </span>
                <p className="text-[10px] font-mono font-bold text-violet-700">
                  RAMSETU ALTERNATE EDUCATION SOLUTIONS
                </p>
              </div>
            </div>

            <p className="text-xs text-ink-500 max-w-sm leading-relaxed">
              The premier alternate business school engineered for early-stage founders. Real unicorn operators, zero theoretical fluff, fast-tracking your first 100 days of venture survival.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border-2 border-ink-900 flex items-center justify-center text-ink-700 hover:text-white hover:bg-violet-600 shadow-brutal-sm transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border-2 border-ink-900 flex items-center justify-center text-ink-700 hover:text-white hover:bg-violet-600 shadow-brutal-sm transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white border-2 border-ink-900 flex items-center justify-center text-ink-700 hover:text-white hover:bg-violet-600 shadow-brutal-sm transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-mono text-xs font-bold text-ink-900 uppercase tracking-wider mb-5">
              Ecosystem Map
            </h4>
            <ul className="space-y-3 text-xs">
              {links.navigation.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-violet-600 font-medium transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sprints & Programs */}
          <div>
            <h4 className="font-mono text-xs font-bold text-ink-900 uppercase tracking-wider mb-5">
              Sprints & Tracks
            </h4>
            <ul className="space-y-3 text-xs">
              {links.programs.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-violet-600 font-medium transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institutional & Legal */}
          <div>
            <h4 className="font-mono text-xs font-bold text-ink-900 uppercase tracking-wider mb-5">
              Institutional
            </h4>
            <ul className="space-y-3 text-xs">
              {links.legal.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-violet-600 font-medium transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Status Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-500">
          <div>
            © 2026 RAMSETU ALTERNATE EDUCATION SOLUTIONS PVT LTD. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sage-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-sage-500 animate-pulse"></span>
              All Systems Operational
            </span>
            <span>CIN: U85499MH2024PTC428120</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
