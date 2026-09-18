import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight, UserCheck, Sparkles, ExternalLink, X } from 'lucide-react';
import MentorMarquee from './MentorMarquee';

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

import { Mail } from 'lucide-react';

const getDiff = (index, current, length) => {
  let diff = index - current;
  while (diff < -1) diff += length;
  while (diff > length - 2) diff -= length;
  return diff;
};

export default function MentorsGrid() {
  const [activeMentorModal, setActiveMentorModal] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mentorsList.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered]);

  // Mapping accents to specific premium solid colors inspired by the design
  const getCardBg = (accent) => {
    switch(accent) {
      case 'violet': return 'bg-[#9684A8]';
      case 'sage': return 'bg-[#AEB775]';
      case 'sky': return 'bg-[#8799B7]';
      case 'honey': return 'bg-[#E5B567]';
      case 'blush': return 'bg-[#C68585]';
      default: return 'bg-[#9684A8]';
    }
  };

  return (
    <section id="mentors" className="py-24 px-6 md:px-12 bg-canvas-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
        
        {/* Left Sticky Column */}
        <div className="lg:sticky lg:top-32 w-full lg:w-[35%] flex-shrink-0 z-10 pr-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-[3rem] sm:text-[4rem] font-display font-bold text-ink-900 leading-[1.05] tracking-tight">
                Get <br className="hidden sm:block" /> Mentored. <br className="hidden sm:block" /> By Titans.
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-ink-600 font-sans leading-relaxed mb-10 max-w-sm">
              A space where founders discover growth through execution, strategy, and network. Our active operators help you scale stronger, more confident, and faster — all in a brutal but supportive environment.
            </p>

            <div className="max-w-sm relative">
              <label htmlFor="email" className="block text-xs font-mono font-medium text-ink-500 mb-2">
                email address
              </label>
              <div className="flex items-center gap-2 border-b-2 border-ink-200 pb-2 mb-4 focus-within:border-ink-900 transition-colors">
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none w-full text-ink-900 placeholder:text-ink-300 font-sans text-sm"
                />
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-ink-900 hover:bg-ink-800 text-white font-sans font-semibold py-3 px-6 rounded-xl transition-colors">
                  Subscribe
                </button>
                <button className="bg-ink-200 hover:bg-ink-300 text-ink-900 p-3 rounded-xl transition-colors flex items-center justify-center aspect-square">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Stacking Carousel Column */}
        <div 
          className="w-full lg:w-[65%] relative overflow-hidden flex items-center py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[460px] w-full">
            {mentorsList.map((mentor, index) => {
              const diff = getDiff(index, currentIndex, mentorsList.length);
              const isVisible = diff >= -1 && diff <= 5;
              
              return (
                <motion.div
                  key={mentor.name}
                  initial={false}
                  animate={{
                    x: diff === -1 ? 0 : diff * 344, // Slide to 0 so it doesn't clip on the left edge
                    scale: diff === -1 ? 0.92 : 1, // Shrink slightly in place
                    opacity: diff === -1 ? 0 : diff >= 4 ? 0 : 1, // Fade out smoothly
                    zIndex: diff === -1 ? 0 : 10 - diff, // Ensure exiting card is BELOW incoming card
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 24, 
                    mass: 1 
                  }}
                  style={{ display: isVisible ? 'flex' : 'none' }}
                  className={`absolute left-0 top-0 w-[300px] sm:w-[320px] h-[460px] flex-col rounded-[32px] overflow-hidden cursor-pointer group shadow-pastel-sm ${getCardBg(mentor.accent)}`}
                  onClick={() => setActiveMentorModal(mentor)}
                >
                  {/* Top Text Section */}
                  <div className="p-6 pb-2 relative z-10 flex flex-col flex-shrink-0">
                    {/* Domain pill + arrow */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1.5 rounded-full bg-black/10 border border-black/5 text-[10px] font-mono font-bold text-ink-900 tracking-wide">
                        {mentor.tier}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-ink-900 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-45">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Name + role */}
                    <h3 className="font-display font-bold text-[26px] leading-tight text-ink-900 mb-2 tracking-tight drop-shadow-sm">
                      {mentor.name}
                    </h3>
                    <p className="text-sm text-ink-800 font-medium font-sans leading-snug line-clamp-3">
                      {mentor.bio}
                    </p>
                  </div>

                  {/* Bottom Image Section */}
                  <div className="relative w-full flex-grow mt-4 overflow-hidden rounded-t-[2rem]">
                    <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
              className="relative w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-ink-900/10 max-h-[90vh] overflow-y-auto scrollbar-none"
            >
              <button
                type="button"
                onClick={() => setActiveMentorModal(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-canvas-100 hover:bg-canvas-200 text-ink-500 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 mt-4 sm:mt-0 text-center sm:text-left">
                <img
                  src={activeMentorModal.img}
                  alt={activeMentorModal.name}
                  className={`w-24 h-24 rounded-2xl object-cover border-[3px] shadow-md border-white`}
                  style={{ backgroundColor: getCardBg(activeMentorModal.accent) }}
                />
                <div className="pt-2">
                  <h3 className="font-display font-bold text-2xl text-ink-900 mb-1">{activeMentorModal.name}</h3>
                  <p className="text-sm font-mono text-violet-700 font-semibold mb-3">{activeMentorModal.role}</p>
                  <span className={`inline-block px-3 py-1 rounded-lg text-xs font-mono font-bold ${activeMentorModal.tagBg}`}>
                    {activeMentorModal.tier}
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-ink-600 leading-relaxed mb-8 font-sans">
                <p>{activeMentorModal.bio}</p>
                <div className="p-5 rounded-2xl bg-canvas-100 border border-ink-900/[0.06]">
                  <div className="font-mono font-bold text-ink-900 text-xs mb-2 uppercase tracking-wide">Tactical Focus:</div>
                  <p className="text-ink-600 text-sm">Direct 1-on-1 sprint reviews, unit economics auditing, and simulated angel/enterprise pitch teardowns.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={activeMentorModal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-canvas-100 hover:bg-canvas-200 text-ink-800 text-sm font-mono font-semibold border border-ink-900/10 transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span>Verify on LinkedIn</span>
                </a>

                <a
                  href="#apply"
                  onClick={() => setActiveMentorModal(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink-900 hover:bg-ink-800 text-white text-sm font-mono font-bold shadow-md transition-all"
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
