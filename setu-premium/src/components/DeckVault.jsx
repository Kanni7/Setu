import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter, X, ChevronRight, Eye, Download, CheckCircle, AlertOctagon, Search } from 'lucide-react';

const pitchDecks = [
  {
    company: "Airbnb",
    domain: "airbnb.com",
    stage: "Seed Round",
    year: "2008",
    raised: "$600K",
    valuation: "$3.5M",
    slides: 14,
    category: "Marketplace",
    hook: "Solved 'stranger danger' friction through 2-sided review mechanics and 3-click booking workflow.",
    tags: ["Marketplace", "Travel", "Iconic Seed"],
    accent: "blush",
    bgClass: "bg-blush-100 text-blush-900",
    badgeClass: "bg-blush-200 text-blush-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 01: Problem Definition",
        takeaway: "Direct & brutal: 'Price is the #1 concern for travelers online. Hotels leave you disconnected from the city.'",
        vcVerdict: "Validated pain point without speculative market fluff.",
        status: "APPROVED"
      },
      {
        title: "Slide 04: Market Validation (Craigslist Wedge)",
        takeaway: "Proved 17,000 temporary housing listings already active on Craigslist without booking security.",
        vcVerdict: "Hijacked existing demand rather than trying to educate a new customer habit.",
        status: "LETHAL WEDGE"
      },
      {
        title: "Slide 08: Business Model (10% Commission)",
        takeaway: "Flat 10% commission on every transaction. Simple unit economics that needed no complex spreadsheets.",
        vcVerdict: "Uncapped transactional take-rate with zero inventory liability.",
        status: "APPROVED"
      }
    ]
  },
  {
    company: "Uber",
    domain: "uber.com",
    stage: "Seed Round",
    year: "2008",
    raised: "$200K",
    valuation: "$4M",
    slides: 25,
    category: "Mobility",
    hook: "Positioned as 'Next-Gen Car Service' for tech elite before unlocking mass market ride-sharing economics.",
    tags: ["On-Demand", "Network Effects", "Mobility"],
    accent: "honey",
    bgClass: "bg-honey-100 text-honey-900",
    badgeClass: "bg-honey-200 text-honey-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 02: Core Inefficiencies in Taxi System",
        takeaway: "Medallion monopolies, 45-minute dispatch lag, zero hailing predictability in rain.",
        vcVerdict: "Identified an artificially protected monopoly ready for regulatory disruption.",
        status: "APPROVED"
      },
      {
        title: "Slide 07: 1-Click Dispatch Technology",
        takeaway: "GPS-enabled fleet positioning with sub-3 minute response times in downtown SF.",
        vcVerdict: "10x product experience over traditional dispatch radio.",
        status: "APPROVED"
      },
      {
        title: "Slide 12: High-Margin Black Car Wedge",
        takeaway: "Targeted affluent business travelers at $8/mile before expanding down-market to UberX.",
        vcVerdict: "Financed geographic expansion on high gross margins.",
        status: "LETHAL WEDGE"
      }
    ]
  },
  {
    company: "SpaceX",
    domain: "spacex.com",
    stage: "Series G",
    year: "2017",
    raised: "$100M",
    valuation: "$21B",
    slides: 21,
    category: "DeepTech",
    hook: "Demonstrated reusable booster unit economics and locked-in NASA commercial resupply contracts.",
    tags: ["DeepTech", "Aerospace", "Late-Stage"],
    accent: "sky",
    bgClass: "bg-sky-100 text-sky-900",
    badgeClass: "bg-sky-200 text-sky-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 03: First Principles Manufacturing Cost",
        takeaway: "Raw metal represents only 2% of rocket cost. Vertical integration reduces launch expense by 90%.",
        vcVerdict: "Unmatched cost moat created through internal component manufacturing.",
        status: "LETHAL WEDGE"
      },
      {
        title: "Slide 09: Reusable Orbital Booster Telemetry",
        takeaway: "Proven Falcon 9 sea-platform landings converting Capex into reusable operating assets.",
        vcVerdict: "Physics-level technical defensibility impossible for legacy contractors to match.",
        status: "APPROVED"
      }
    ]
  },
  {
    company: "Facebook",
    domain: "facebook.com",
    stage: "Early Media Kit",
    year: "2004",
    raised: "$500K",
    valuation: "$5M",
    slides: 16,
    category: "Social",
    hook: "Leveraged .edu scarcity and 89% daily active engagement rates to prove viral compounding loops.",
    tags: ["Social Media", "Consumer", "Seed"],
    accent: "violet",
    bgClass: "bg-violet-100 text-violet-900",
    badgeClass: "bg-violet-200 text-violet-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 02: Harvard & Ivy League Engagement",
        takeaway: "60% of students logged in daily; users checked profiles 6+ times per day.",
        vcVerdict: "Unprecedented daily retention cohorts exceeding any consumer software metric.",
        status: "APPROVED"
      },
      {
        title: "Slide 06: Campus-by-Campus Viral Expansion",
        takeaway: "Zero ad spend. Campus unlock required 20% petition threshold from undergraduate bodies.",
        vcVerdict: "Manufactured artificial scarcity to drive organic waitlist pull.",
        status: "LETHAL WEDGE"
      }
    ]
  },
  {
    company: "LinkedIn",
    domain: "linkedin.com",
    stage: "Series B",
    year: "2004",
    raised: "$10M",
    valuation: "$50M",
    slides: 18,
    category: "Social",
    hook: "Relationships matter. Professional networking monetization model combining premium search & enterprise hiring.",
    tags: ["Social Network", "Enterprise", "Series B"],
    accent: "sky",
    bgClass: "bg-sky-100 text-sky-900",
    badgeClass: "bg-sky-200 text-sky-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 04: The 2.0 Web Monetization",
        takeaway: "Connecting businesses with talent directly, bypassing third-party headhunters.",
        vcVerdict: "High willingness-to-pay from enterprise HR budgets.",
        status: "APPROVED"
      }
    ]
  },
  {
    company: "Dropbox",
    domain: "dropbox.com",
    stage: "Seed Round",
    year: "2007",
    raised: "$1.2M",
    valuation: "$4M",
    slides: 15,
    category: "SaaS",
    hook: "Drew Houston's 3-minute video demo proving pent-up demand without spending a single dollar on paid acquisition.",
    tags: ["SaaS", "Cloud Storage", "Product-Led"],
    accent: "sage",
    bgClass: "bg-sage-100 text-sage-900",
    badgeClass: "bg-sage-200 text-sage-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 01: Why Sync Is Broken Across USBs",
        takeaway: "Emailing files to yourself and carrying flash drives creates constant version collision.",
        vcVerdict: "Universal consumer frustration experienced daily by every knowledge worker.",
        status: "APPROVED"
      },
      {
        title: "Slide 05: The Invisible Magic Folder",
        takeaway: "No new UI to learn. Just a native OS folder that syncs instantaneously in the background.",
        vcVerdict: "Zero learning curve meant 100% adoption velocity.",
        status: "LETHAL WEDGE"
      }
    ]
  },
  {
    company: "YouTube",
    domain: "youtube.com",
    stage: "Series A",
    year: "2005",
    raised: "$3.5M",
    valuation: "$15M",
    slides: 10,
    category: "Social",
    hook: "Broadcast yourself. Flash video player embedding on MySpace creating viral video syndication loops.",
    tags: ["Consumer", "Video", "Series A"],
    accent: "blush",
    bgClass: "bg-blush-100 text-blush-900",
    badgeClass: "bg-blush-200 text-blush-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 03: Embed Anywhere Protocol",
        takeaway: "1-line HTML snippet allowed any blog or social profile to stream hosted video for free.",
        vcVerdict: "Zero cost distribution weapon.",
        status: "LETHAL WEDGE"
      }
    ]
  },
  {
    company: "DoorDash",
    domain: "doordash.com",
    stage: "Seed Round",
    year: "2013",
    raised: "$2.4M",
    valuation: "$12M",
    slides: 19,
    category: "Marketplace",
    hook: "Empowering local economies through suburban restaurant delivery logistics networks.",
    tags: ["Marketplace", "Delivery", "Seed"],
    accent: "blush",
    bgClass: "bg-blush-100 text-blush-900",
    badgeClass: "bg-blush-200 text-blush-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 04: Suburban Logistics Wedge",
        takeaway: "Ignored congested dense metros to capture under-served suburban family basket sizes.",
        vcVerdict: "Higher average order value and lower driver turnover.",
        status: "APPROVED"
      }
    ]
  },
  {
    company: "ElevenLabs",
    domain: "elevenlabs.com",
    stage: "Pre-Seed",
    year: "2022",
    raised: "$2M",
    valuation: "$10M",
    slides: 12,
    category: "AI",
    hook: "Revolutionary zero-shot voice synthesis model delivering human emotional cadence with minimal latency.",
    tags: ["AI", "Voice", "SaaS"],
    accent: "violet",
    bgClass: "bg-violet-100 text-violet-900",
    badgeClass: "bg-violet-200 text-violet-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 03: Audio Latency Barrier",
        takeaway: "Legacy TTS sounded robotic and required hours of dataset fine-tuning.",
        vcVerdict: "Identified the fundamental breakthrough required for adoption.",
        status: "LETHAL WEDGE"
      }
    ]
  },
  {
    company: "Tinder",
    domain: "tinder.com",
    stage: "Seed (Matchbox)",
    year: "2012",
    raised: "N/A",
    valuation: "Seed",
    slides: 14,
    category: "Social",
    hook: "Match. Chat. Date. The double-opt-in swipe mechanic eliminating social rejection risk.",
    tags: ["Consumer", "Dating", "Mobile"],
    accent: "blush",
    bgClass: "bg-blush-100 text-blush-900",
    badgeClass: "bg-blush-200 text-blush-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 02: Double Opt-in Protection",
        takeaway: "Neither party knows unless there is mutual consent, unlocking psychological safety.",
        vcVerdict: "10x conversion in initial interaction initiation.",
        status: "APPROVED"
      }
    ]
  },
  {
    company: "Candidate.fyi",
    domain: "candidate.fyi",
    stage: "Pre-Seed",
    year: "2022",
    raised: "$1.3M",
    valuation: "$6M",
    slides: 16,
    category: "SaaS",
    hook: "The missing candidate experience layer integrating seamlessly with existing enterprise ATS tools.",
    tags: ["HRTech", "SaaS", "Pre-Seed"],
    accent: "sage",
    bgClass: "bg-sage-100 text-sage-900",
    badgeClass: "bg-sage-200 text-sage-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 05: Native ATS Synchronization",
        takeaway: "Layered on top of Greenhouse & Lever with zero workflow disruption.",
        vcVerdict: "Frictionless enterprise trial deployment.",
        status: "APPROVED"
      }
    ]
  },
  {
    company: "Crosby Health",
    domain: "crosbyhealth.com",
    stage: "Pre-Seed",
    year: "2022",
    raised: "Undisclosed",
    valuation: "Pre-Seed",
    slides: 15,
    category: "AI",
    hook: "Automated medical coding and billing using specialized clinical language models.",
    tags: ["HealthTech", "AI", "Pre-Seed"],
    accent: "sky",
    bgClass: "bg-sky-100 text-sky-900",
    badgeClass: "bg-sky-200 text-sky-900 border-ink-900",
    slidesBreakdown: [
      {
        title: "Slide 04: 98% Billing Accuracy",
        takeaway: "Reduces rejected insurance claims by 40% in hospital revenue cycles.",
        vcVerdict: "Clear measurable ROI for healthcare CFOs.",
        status: "APPROVED"
      }
    ]
  }
];

export default function DeckVault() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDeck, setSelectedDeck] = useState(null);

  const categories = ["All", "Marketplace", "Mobility", "Social", "SaaS", "AI", "DeepTech"];

  const filteredDecks = pitchDecks.filter((deck) => {
    const matchesCategory = activeCategory === "All" || deck.category === activeCategory;
    const matchesSearch =
      deck.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      deck.hook.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="vault" className="py-28 px-6 bg-canvas-100 relative border-t-[3px] border-ink-900">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border-2 border-ink-900 text-violet-800 text-xs font-mono font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>PREMIUM OPEN-SOURCE RESOURCE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Unicorn Pitch Deck Vault.
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-500 max-w-md leading-relaxed">
            Study original seed & growth pitch decks that built generational companies. Dissect their wedge strategy, unit economic arguments, and narrative framing.
          </p>
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all border-2 border-ink-900 ${
                  activeCategory === cat
                    ? "bg-violet-600 text-white shadow-brutal-sm"
                    : "bg-white text-ink-700 hover:bg-honey-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by company or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border-2 border-ink-900 text-xs font-sans text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500"
            />
          </div>
        </div>

        {/* Pitch Decks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDecks.map((deck, i) => (
            <motion.div
              key={deck.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className={`rounded-xl p-6 border-[3px] border-ink-900 flex flex-col justify-between transition-all duration-150 shadow-brutal-sm hover:shadow-brutal-md hover:-translate-y-0.5 ${deck.bgClass}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-extrabold text-xl text-ink-900">
                        {deck.company}
                      </h3>
                      <span className="text-[10px] font-mono text-ink-400 font-medium">
                        • {deck.year}
                      </span>
                    </div>
                    <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border-2 ${deck.badgeClass}`}>
                      {deck.stage}
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="font-display font-bold text-sm text-ink-900">{deck.raised}</div>
                    <div className="text-[10px] font-mono text-ink-400">Raised</div>
                  </div>
                </div>

                {/* Hook */}
                <p className="text-xs text-ink-600 leading-relaxed font-sans mb-5">
                  "{deck.hook}"
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {deck.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white border border-ink-900 text-[10px] font-mono text-ink-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  type="button"
                  onClick={() => setSelectedDeck(deck)}
                  className="btn-primary w-full py-2.5 rounded-xl bg-white hover:bg-honey-100 text-xs font-mono font-bold text-ink-800 flex items-center justify-center gap-2 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-violet-600" />
                  <span>View Slide Breakdown</span>
                  <ChevronRight className="w-3.5 h-3.5 text-ink-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Slide Breakdown Teardown Modal */}
      <AnimatePresence>
        {selectedDeck && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/70">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl bg-white p-7 sm:p-9 shadow-brutal-xl border-[3px] border-ink-900"
            >
              <button
                type="button"
                onClick={() => setSelectedDeck(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-canvas-100 hover:bg-honey-100 border-2 border-ink-900 text-ink-700"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-display font-extrabold text-2xl text-ink-900">
                  {selectedDeck.company}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold border-2 ${selectedDeck.badgeClass}`}>
                  {selectedDeck.stage} • {selectedDeck.year}
                </span>
              </div>

              <p className="text-xs font-sans text-ink-500 mb-6 max-w-lg">
                Tactical breakdown of key slides, valuation dynamics, and the psychological wedge used to close this round.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-canvas-100 border-2 border-ink-900 mb-6 text-center">
                <div>
                  <div className="text-xs font-mono text-ink-400 uppercase">Capital Raised</div>
                  <div className="font-display font-extrabold text-base text-ink-900">{selectedDeck.raised}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-ink-400 uppercase">Round Valuation</div>
                  <div className="font-display font-extrabold text-base text-violet-700">{selectedDeck.valuation}</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-ink-400 uppercase">Slide Count</div>
                  <div className="font-display font-extrabold text-base text-ink-900">{selectedDeck.slides} Slides</div>
                </div>
              </div>

              {/* Slides Breakdown */}
              <div className="space-y-4 mb-8">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-400">
                  Critical Slide Analyses & VC Teardowns
                </h4>

                {selectedDeck.slidesBreakdown.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-canvas-100 border-2 border-ink-900 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="font-display font-bold text-sm text-ink-900">{s.title}</div>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold border-2 ${
                        s.status === 'LETHAL WEDGE'
                          ? 'bg-blush-200 text-blush-900 border-ink-900'
                          : 'bg-sage-200 text-sage-900 border-ink-900'
                      }`}>
                        {s.status}
                      </span>
                    </div>
                    <p className="text-xs text-ink-600 font-sans">
                      <strong className="text-ink-800">Slide Content:</strong> {s.takeaway}
                    </p>
                    <div className="text-[11px] font-mono text-violet-700 bg-violet-100 p-2 rounded-lg border-2 border-ink-900">
                      <strong>Operator Note:</strong> {s.vcVerdict}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t-[3px] border-ink-900">
                <a
                  href="#apply"
                  onClick={() => setSelectedDeck(null)}
                  className="btn-primary px-6 py-3 rounded-xl bg-violet-600 text-white font-mono text-xs font-bold transition-colors"
                >
                  Pressure-Test Your Deck in Setu War Room
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
