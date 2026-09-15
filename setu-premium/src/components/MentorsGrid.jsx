import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, UserCheck, Sparkles, ExternalLink, X } from 'lucide-react';

const LinkedInIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

const mentorsList = [
  {
    name: "Vikram Anand Bhushan",
    role: "Co-Founder, Hypermine",
    domain: "Web3 & DeepTech",
    bio: "Founder with 11+ years of experience scaling blockchain ventures, currently building privacy-first digital trust infrastructure through Hypermine across MENA & Asia.",
    img: "/images/mentors/vikrambanand.webp",
    linkedin: "https://www.linkedin.com/in/vikrambanand/?originalSubdomain=ae",
    tier: "Identity & Cryptography",
    highlight: "11+ Yrs in Trust Protocols",
    accent: "violet",
    tagBg: "bg-violet-100 text-violet-800 border-violet-200",
  },
  {
    name: "Ashish Kulkarni",
    role: "Founder, Founders' Psyche",
    domain: "Product & Scaling",
    bio: "Ex-CoFounder at FundEnable, MBA-IE Business School Spain, Ex-Research Assistant at INSEAD France. Strong track record of building startups, founder psychology, and early fundraising.",
    img: "/images/mentors/Ashish_kulkarni.webp",
    linkedin: "https://www.linkedin.com/in/ashishkul/",
    tier: "Capital & Founder Mindset",
    highlight: "Ex-FundEnable Co-Founder",
    accent: "sage",
    tagBg: "bg-sage-100 text-sage-800 border-sage-200",
  },
  {
    name: "Vaibhav Bhargava",
    role: "Salesforce Architect, JLL",
    domain: "Enterprise & Cloud",
    bio: "Salesforce Architect at JLL with 15+ years of experience across JLL, PwC, PTC, and Amdocs, leading enterprise Salesforce architecture and global digital transformation initiatives.",
    img: "/images/mentors/vaibhav_bhargava.webp",
    linkedin: "https://www.linkedin.com/in/vaibhav-bhargava-0a1364a/",
    tier: "Enterprise Scale & CRM",
    highlight: "15+ Yrs Enterprise Arch",
    accent: "sky",
    tagBg: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    name: "Harsh Gupta",
    role: "PhD, Quantum Error Correction",
    domain: "Web3 & DeepTech",
    bio: "Ph.D. scholar at IISER Bhopal researching Quantum Error Correction in Measurement-Based Quantum Computing. M.Tech from NIT-Srinagar, prior industry experience at Infosys.",
    img: "/images/mentors/harsh_gupta.webp",
    linkedin: "https://www.linkedin.com/in/harsh-gupta-aa3bbb99/",
    tier: "Quantum & Physics R&D",
    highlight: "Quantum Computing at IISER",
    accent: "violet",
    tagBg: "bg-violet-100 text-violet-800 border-violet-200",
  },
  {
    name: "Pavan Agarwal",
    role: "Founder, DD Cinemas",
    domain: "Offline & Ops",
    bio: "'The Cinema Man of UP-East.' Founder of DD Cinema, operating 30+ multiplex screens with profitable unit economics and expanding to 50+ screens by end of 2026.",
    img: "/images/mentors/pavan_dd.webp",
    linkedin: "https://www.linkedin.com/in/pavan-agarwal-8353092/",
    tier: "Physical Retail & Scale",
    highlight: "30+ Multiplex Screens",
    accent: "honey",
    tagBg: "bg-honey-100 text-honey-800 border-honey-200",
  },
  {
    name: "CA Moon Goel",
    role: "CA, Co-Founder - Vitt Kushal",
    domain: "Finance & Valuations",
    bio: "20+ years of work experience in forensic accounting, internal audit, compliance, and tax advisory. Expertise in guiding startups for financial forecasting, valuation, and cap table management.",
    img: "/images/mentors/moongoel.webp",
    linkedin: "https://www.linkedin.com/in/moongoel/",
    tier: "Forensic Audit & Diligence",
    highlight: "20+ Yrs Valuation Forensics",
    accent: "sage",
    tagBg: "bg-sage-100 text-sage-800 border-sage-200",
  },
  {
    name: "CA Mahendra Tiwari",
    role: "CA, Managing Partner",
    domain: "Finance & Valuations",
    bio: "20+ years of work experience with expertise in startup valuation, small business tax preparation, bookkeeping, corporate restructuring, and statutory compliance.",
    img: "/images/mentors/mahendra.webp",
    linkedin: "https://www.linkedin.com/in/mahendra-tiwari-4a62b112/",
    tier: "Tax Structuring & Compliance",
    highlight: "20+ Yrs Corporate Structuring",
    accent: "blush",
    tagBg: "bg-blush-100 text-blush-800 border-blush-200",
  },
  {
    name: "Akash Kansal",
    role: "Product Leader & Author",
    domain: "Product & Scaling",
    bio: "FMS-Delhi passout with 12+ years of experience in product strategy at organisations like 99acres, Droom, Deloitte. His book 'The Class of 2006' was launched by R. Madhavan. Building B2B AI SaaS.",
    img: "/images/mentors/akash.webp",
    linkedin: "https://www.linkedin.com/in/akashkansal/",
    tier: "Product Strategy & AI",
    highlight: "Ex-99acres, Droom, Deloitte",
    accent: "violet",
    tagBg: "bg-violet-100 text-violet-800 border-violet-200",
  },
  {
    name: "Deric Karunesudas",
    role: "Cybersecurity Leader & Investor",
    domain: "Enterprise & Cloud",
    bio: "Cybersecurity Leader and seasoned Investor with an 18-year track record of driving profitable growth for global enterprises across the US, Europe, Middle East, and APAC.",
    img: "/images/mentors/deric.webp",
    linkedin: "https://www.linkedin.com/in/derickarunesudas/",
    tier: "Cyber Defense & Angel",
    highlight: "18+ Yrs Global Enterprise",
    accent: "sky",
    tagBg: "bg-sky-100 text-sky-800 border-sky-200",
  },
  {
    name: "Dr Debashis Bhattacharya",
    role: "Surgeon & Medical Advisor",
    domain: "Web3 & DeepTech",
    bio: "Seasoned Surgeon and MNC Medical Advisor blending clinical mastery with acumen for enterprise building. Translates deep healthcare expertise into actionable venture growth.",
    img: "/images/mentors/debashis.webp",
    linkedin: "https://www.linkedin.com/in/debashis-bhattacharya-0611a645/",
    tier: "Healthcare & MedTech VC",
    highlight: "Surgeon & MNC Advisor",
    accent: "sage",
    tagBg: "bg-sage-100 text-sage-800 border-sage-200",
  },
  {
    name: "Anant Sharma",
    role: "Ex-Founder @Tweek Labs",
    domain: "Web3 & DeepTech",
    bio: "Brings strong experience in building startups, bio-sensing devices and robust IoT systems. Understands full hardware spectrum from industrial design to electro-mechanical prototyping.",
    img: "/images/mentors/anant.webp",
    linkedin: "https://www.linkedin.com/in/anant3110/",
    tier: "Hardware & Biosensing",
    highlight: "Patented IoT Wearable Tech",
    accent: "honey",
    tagBg: "bg-honey-100 text-honey-800 border-honey-200",
  },
  {
    name: "Gaurav Bansal",
    role: "Founder, Ramsetu / Setu School",
    domain: "Product & Scaling",
    bio: "Founder of Setu Alternate Education. Dedicated to pressure-testing early-stage Indian founders through lived experience, brutal tactical teardowns, and zero equity dilution.",
    img: "/images/mentors/gaurav.webp",
    linkedin: "https://www.linkedin.com/in/gaurav-bansal-setu/",
    tier: "Venture Architecture",
    highlight: "Founder & Masterclass Lead",
    accent: "blush",
    tagBg: "bg-blush-100 text-blush-800 border-blush-200",
  }
];

export default function MentorsGrid() {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [activeMentorModal, setActiveMentorModal] = useState(null);

  const domains = [
    "All",
    "Product & Scaling",
    "Finance & Valuations",
    "Web3 & DeepTech",
    "Enterprise & Cloud",
    "Offline & Ops"
  ];

  const filteredMentors = selectedDomain === "All"
    ? mentorsList
    : mentorsList.filter(m => m.domain === selectedDomain);

  return (
    <section id="mentors" className="py-28 px-6 bg-canvas-200/50 relative border-t border-ink-900/[0.06]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-sage-800 text-xs font-mono font-bold mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sage-600" />
              <span>LEARN FROM ACTIVE OPERATORS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Get Mentored by Industry Titans.
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-500 max-w-md leading-relaxed">
            No retired theorists. Only active founders, chief architects, and seasoned venture builders who dissect your execution in confidential 1:1 war rooms.
          </p>
        </div>

        {/* Domain Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setSelectedDomain(domain)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all ${
                selectedDomain === domain
                  ? "bg-violet-600 text-white shadow-pastel-sm"
                  : "bg-white text-ink-600 hover:bg-canvas-100 border border-ink-900/[0.06]"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass-card rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group border border-ink-900/[0.06] hover:border-violet-300"
            >
              <div>
                {/* Avatar & Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-violet-200 to-sage-200 shadow-sm">
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-xl bg-canvas-100 hover:bg-violet-100 text-ink-400 hover:text-violet-700 border border-ink-900/[0.06] flex items-center justify-center transition-all"
                    aria-label={`LinkedIn for ${mentor.name}`}
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>

                {/* Name & Role */}
                <h3 className="font-display font-bold text-lg text-ink-900 group-hover:text-violet-700 transition-colors mb-0.5">
                  {mentor.name}
                </h3>
                <p className="text-xs font-mono font-medium text-violet-700 mb-3">
                  {mentor.role}
                </p>

                {/* Bio */}
                <p className="text-xs text-ink-500 leading-relaxed line-clamp-3 mb-4 font-sans">
                  {mentor.bio}
                </p>
              </div>

              {/* Card Footer Tag & Details */}
              <div className="pt-4 border-t border-ink-900/[0.06] flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold border ${mentor.tagBg}`}>
                  {mentor.highlight}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveMentorModal(mentor)}
                  className="text-xs font-mono text-ink-400 hover:text-violet-700 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Mentor Profile Modal */}
      <AnimatePresence>
        {activeMentorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-ink-900/10"
            >
              <button
                type="button"
                onClick={() => setActiveMentorModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-canvas-100 hover:bg-canvas-200 text-ink-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={activeMentorModal.img}
                  alt={activeMentorModal.name}
                  className="w-18 h-18 rounded-2xl object-cover border-2 border-violet-200 shadow-md"
                />
                <div>
                  <h3 className="font-display font-bold text-xl text-ink-900">{activeMentorModal.name}</h3>
                  <p className="text-xs font-mono text-violet-700 font-semibold">{activeMentorModal.role}</p>
                  <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-md text-[10px] font-mono border ${activeMentorModal.tagBg}`}>
                    {activeMentorModal.tier}
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs text-ink-600 leading-relaxed mb-6 font-sans">
                <p>{activeMentorModal.bio}</p>
                <div className="p-4 rounded-2xl bg-canvas-100 border border-ink-900/[0.06]">
                  <div className="font-mono font-bold text-ink-900 text-xs mb-1">Tactical Focus in Cohort:</div>
                  <p className="text-ink-500 text-[11px]">Direct 1-on-1 sprint reviews, unit economics auditing, and simulated angel/enterprise pitch teardowns.</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={activeMentorModal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-canvas-100 hover:bg-canvas-200 text-ink-800 text-xs font-mono font-semibold border border-ink-900/10 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-violet-700" />
                  <span>Verify on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-ink-400" />
                </a>

                <a
                  href="#apply"
                  onClick={() => setActiveMentorModal(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono font-bold shadow-pastel-sm transition-all"
                >
                  <span>Request 1:1 War Room</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
