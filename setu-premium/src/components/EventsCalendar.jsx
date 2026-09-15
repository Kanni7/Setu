import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Sparkles, ExternalLink, Download, Clock, Plus, Search } from 'lucide-react';

const startupEvents = [
  {
    id: "tie-2026",
    title: "TiE Global Summit / Rajasthan DigiFest 2026",
    location: "Jaipur",
    venue: "Jaipur Exhibition & Convention Centre",
    dates: "04-06 Jan 2026",
    month: "Jan",
    category: "Tech & Venture",
    accent: "violet",
    tagBg: "bg-violet-100 text-violet-800 border-violet-200",
    description: "One of the largest global angel gatherings featuring keynotes, institutional capital pitch pavilions, and state-backed startup initiatives."
  },
  {
    id: "ai-impact-2026",
    title: "India AI Impact Summit 2026",
    location: "New Delhi",
    venue: "Bharat Mandapam, Pragati Maidan",
    dates: "19-20 Feb 2026",
    month: "Feb",
    category: "Artificial Intelligence",
    accent: "sky",
    tagBg: "bg-sky-100 text-sky-800 border-sky-200",
    description: "National summit bringing together enterprise AI builders, foundation model researchers, and B2B SaaS founders deploying LLMs in production."
  },
  {
    id: "nasscom-confluence-2026",
    title: "Nasscom Global Confluence 2026",
    location: "New Delhi",
    venue: "Shangri-La, New Delhi",
    dates: "17 Mar 2026",
    month: "Mar",
    category: "Enterprise & Policy",
    accent: "sage",
    tagBg: "bg-sage-100 text-sage-800 border-sage-200",
    description: "Strategic leadership forum for enterprise IT leaders, digital transformation architects, and Indian SaaS unicorns expanding into US/EU markets."
  },
  {
    id: "indiasoft-2026",
    title: "Indiasoft 2026 – Global IT Fair",
    location: "New Delhi",
    venue: "India International Convention Expo Centre",
    dates: "23-25 Mar 2026",
    month: "Mar",
    category: "SaaS & Export",
    accent: "honey",
    tagBg: "bg-honey-100 text-honey-800 border-honey-200",
    description: "Global business networking conference hosting international buyers from 60+ countries seeking Indian tech partnerships."
  },
  {
    id: "nasscom-gcc-2026",
    title: "Nasscom GCC Summit 2026",
    location: "Mumbai",
    venue: "The Westin Mumbai, Powai Lake",
    dates: "06 May 2026",
    month: "May",
    category: "Enterprise Scale",
    accent: "violet",
    tagBg: "bg-violet-100 text-violet-800 border-violet-200",
    description: "Dedicated confluence on Global Capability Centers (GCCs), enterprise procurement channels, and deeptech startup integration."
  },
  {
    id: "bharat-startup-2026",
    title: "Bharat Startup Summit 2026",
    location: "New Delhi",
    venue: "Yashobhoomi, IICC Dwarka",
    dates: "16-17 May 2026",
    month: "May",
    category: "Founders & Angel",
    accent: "blush",
    tagBg: "bg-blush-100 text-blush-800 border-blush-200",
    description: "National grassroots venture summit celebrating tier-2/tier-3 founders, manufacturing innovations, and institutional angel networks."
  },
  {
    id: "bharat-tex-2026",
    title: "Bharat Tex 2026 – Global Textile Mega Expo",
    location: "New Delhi",
    venue: "Bharat Mandapam & India Expo Centre",
    dates: "14-17 Jul 2026",
    month: "Jul",
    category: "Manufacturing & D2C",
    accent: "honey",
    tagBg: "bg-honey-100 text-honey-800 border-honey-200",
    description: "India's largest textile and supply-chain expo hosting global apparel brands, sustainable material innovators, and e-commerce tech."
  },
  {
    id: "fintech-fest-2026",
    title: "Global Fintech Fest 2026",
    location: "Mumbai",
    venue: "Jio World Convention Centre, BKC",
    dates: "28-30 Aug 2026",
    month: "Aug",
    category: "Fintech & Banking",
    accent: "sage",
    tagBg: "bg-sage-100 text-sage-800 border-sage-200",
    description: "The world's premier fintech ecosystem summit covering payment rails, account aggregators, digital credit protocols, and RBI compliance."
  },
  {
    id: "imc-2026",
    title: "India Mobile Congress (IMC) 2026",
    location: "New Delhi",
    venue: "Bharat Mandapam, New Delhi",
    dates: "12-15 Oct 2026",
    month: "Oct",
    category: "5G & Telecom",
    accent: "sky",
    tagBg: "bg-sky-100 text-sky-800 border-sky-200",
    description: "Asia's premier digital technology platform hosted by DoT and COAI, showcasing 5G/6G advancements, IoT, and hardware startups."
  },
  {
    id: "bengaluru-tech-summit-2026",
    title: "Bengaluru Tech Summit 2026 (29th Edition)",
    location: "Bengaluru",
    venue: "BIEC, Bengaluru",
    dates: "17-19 Nov 2026",
    month: "Nov",
    category: "DeepTech & Biotech",
    accent: "violet",
    tagBg: "bg-violet-100 text-violet-800 border-violet-200",
    description: "Flagship technology festival bringing together global R&D chiefs, venture capitalists, biotech pioneers, and high-growth engineering founders."
  },
  {
    id: "iitf-2026",
    title: "IITF 2026 – India International Trade Fair",
    location: "New Delhi",
    venue: "Pragati Maidan, New Delhi",
    dates: "14-27 Nov 2026",
    month: "Nov",
    category: "B2B Trade & Commerce",
    accent: "honey",
    tagBg: "bg-honey-100 text-honey-800 border-honey-200",
    description: "Massive annual international multi-sector trade exhibition hosting enterprise suppliers, government delegations, and consumer brands."
  }
];

export default function EventsCalendar() {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const months = ["All", "Jan", "Feb", "Mar", "May", "Jul", "Aug", "Oct", "Nov"];

  const filteredEvents = startupEvents.filter((ev) => {
    const matchesMonth = selectedMonth === "All" || ev.month === selectedMonth;
    const matchesSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMonth && matchesSearch;
  });

  const generateGoogleCalendarUrl = (ev) => {
    const title = encodeURIComponent(ev.title);
    const details = encodeURIComponent(`${ev.description}\n\nVenue: ${ev.venue}, ${ev.location}\nCurated by Setu Startup School.`);
    const location = encodeURIComponent(`${ev.venue}, ${ev.location}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="py-28 px-6 bg-canvas-200/40 relative border-t border-ink-900/[0.06]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-100 border border-honey-200 text-honey-900 text-xs font-mono font-bold mb-4 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-honey-700" />
              <span>ECOSYSTEM CALENDAR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Top B2B & Startup Summits across India.
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-500 max-w-md leading-relaxed">
            Curated national conferences where enterprise buyers, early-stage angels, and venture funds congregate. Add directly to your calendar.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {months.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  selectedMonth === m
                    ? "bg-violet-600 text-white shadow-pastel-sm"
                    : "bg-white text-ink-600 hover:bg-canvas-100 border border-ink-900/[0.06]"
                }`}
              >
                {m === "All" ? "All Months" : m}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search summit, city, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-ink-900/10 text-xs font-sans text-ink-900 placeholder-ink-400 focus:outline-none focus:border-violet-500 shadow-xs"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="glass-card rounded-3xl p-6 border border-ink-900/[0.06] flex flex-col justify-between hover:border-violet-300"
            >
              <div>
                {/* Date & Category Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-xl bg-violet-100 text-violet-800 font-mono font-extrabold text-xs flex flex-col items-center justify-center leading-none border border-violet-200">
                      <span>{ev.dates.split(' ')[0]}</span>
                      <span className="text-[9px] uppercase font-bold text-violet-600">{ev.month}</span>
                    </span>
                    <span className="text-xs font-mono font-semibold text-ink-800">
                      {ev.dates}
                    </span>
                  </div>

                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border ${ev.tagBg}`}>
                    {ev.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-display font-bold text-lg text-ink-900 mb-2 leading-snug">
                  {ev.title}
                </h3>

                {/* Venue & City */}
                <div className="flex items-start gap-1.5 text-xs text-ink-500 mb-3 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />
                  <span>{ev.venue}, <strong className="text-ink-700">{ev.location}</strong></span>
                </div>

                <p className="text-xs text-ink-500 leading-relaxed font-sans mb-6">
                  {ev.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-ink-900/[0.06] flex items-center gap-3">
                <a
                  href={generateGoogleCalendarUrl(ev)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-canvas-100 hover:bg-violet-50 hover:text-violet-800 text-ink-700 border border-ink-900/[0.06] text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 text-violet-600" />
                  <span>Google Calendar</span>
                </a>

                <a
                  href="#apply"
                  className="px-3.5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono font-bold flex items-center justify-center gap-1 shadow-xs transition-colors"
                  title="Prepare Pitch Deck for this Summit"
                >
                  <span>Prep Pitch</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
