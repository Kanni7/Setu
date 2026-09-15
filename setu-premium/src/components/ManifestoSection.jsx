import { motion } from 'framer-motion';
import { Quote, Award, Building, Sparkles, CheckCircle2, Heart, Shield, ArrowRight } from 'lucide-react';

export default function ManifestoSection() {
  const institutionalEngagements = [
    {
      institution: "E-Cell IIT Madras",
      type: "Invited Mentor & Panelist",
      session: "Startup Validation & Pitch Teardowns",
      detail: "Conducted deep forensic evaluations on early collegiate IP spin-outs, hardware prototypes, and unit economic scalability.",
      tag: "DeepTech Mentorship",
      accent: "violet",
      bgClass: "bg-violet-50/80 border-violet-200 text-violet-800",
    },
    {
      institution: "IIM Rohtak",
      type: "Venture Evaluator & Judge",
      session: "Annual Business Plan Competitions",
      detail: "Evaluated scalable business model economics, CAC-to-LTV reality frameworks, and investor narratives across 40+ finalist startup teams.",
      tag: "Venture Judging",
      accent: "sage",
      bgClass: "bg-sage-50/80 border-sage-200 text-sage-800",
    },
    {
      institution: "Doon Business School",
      type: "Keynote Masterclass",
      session: "How to Ideate, Build & Scale Hacks",
      detail: "Delivered tactical masterclass on navigating the critical first 100 days of founder survival, avoiding common early capitalization mistakes.",
      tag: "Keynote Session",
      accent: "honey",
      bgClass: "bg-honey-50/80 border-honey-200 text-honey-800",
    }
  ];

  return (
    <section id="manifesto" className="py-28 px-6 bg-canvas-200/50 relative border-t border-ink-900/[0.06]">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Founder's Manifesto Paper Card */}
        <div className="relative rounded-3xl bg-white border border-ink-900/[0.08] p-8 sm:p-12 lg:p-16 shadow-pastel-lg overflow-hidden mb-20">

          {/* Decorative subtle background quote watermark */}
          <Quote className="absolute -top-6 -left-6 w-48 h-48 text-violet-100/60 pointer-events-none -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            {/* Founder Avatar & Stamp Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-tr from-violet-300 via-honey-200 to-sage-300 mb-6 shadow-pastel-md">
                <img
                  src="/images/mentors/gaurav.webp"
                  alt="Gaurav Bansal"
                  className="w-full h-full object-cover rounded-full filter contrast-105"
                />
                <div className="absolute bottom-2 right-2 p-2 rounded-full bg-violet-600 text-white shadow-md">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              <h4 className="font-display font-extrabold text-2xl text-ink-900">Gaurav Bansal</h4>
              <p className="text-xs font-mono font-bold text-violet-700 mt-1 uppercase tracking-wider">
                Founder, Setu Startup School
              </p>
              <div className="mt-2 text-[11px] font-mono text-ink-400">
                RAMSETU ALTERNATE EDUCATION SOLUTIONS
              </div>

              <a
                href="https://www.linkedin.com/in/gaurav-bansal-setu/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 px-4 py-2 rounded-xl bg-canvas-100 hover:bg-violet-50 text-ink-700 hover:text-violet-800 text-xs font-mono font-semibold border border-ink-900/10 transition-colors flex items-center gap-2"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Manifesto Prose & Heartfelt Story */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-100 text-blush-800 text-xs font-mono font-bold mb-6 border border-blush-200 shadow-xs">
                <Heart className="w-3.5 h-3.5 text-blush-600" />
                <span>THE FOUNDER'S MANIFESTO</span>
              </div>

              {/* Iconic Hindi Poem */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-honey-50 via-blush-50 to-violet-50 border border-honey-200/80 mb-8 shadow-xs">
                <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-ink-900 font-medium leading-relaxed">
                  “दिल में हो आग तो जलती रहनी चाहिए, <br className="hidden sm:inline" />
                  तेरा हो चाहे मेरा, सपना ज़िंदा रहना चाहिए!”
                </p>
              </div>

              {/* Full Original Manifesto Essay */}
              <div className="space-y-4 text-sm font-sans text-ink-700 leading-relaxed">
                <p>
                  Startups in India aren't built in garages; they are built at <strong className="text-ink-900 font-semibold">kitchen tables</strong> amidst family debates, silent sacrifices, and financial anxiety. In a country like <strong className="text-ink-900 font-semibold">BHARAT</strong>, the “Opportunity Cost” isn't just a line on a spreadsheet — it is a weight on a founder’s soul.
                </p>

                <p>
                  For the middle-class dreamer, choosing a startup over a steady paycheck is an act of war against social security. A startup’s greatest enemy isn't competition — it’s the <strong className="text-violet-800 font-semibold">“Initial Days Vacuum”</strong>. We talk about “funding”, but we forget about “foundation”.
                </p>

                <p>
                  Many have the <strong className="text-ink-900 font-semibold">‘Keeda’</strong> (the itch) and the <strong className="text-ink-900 font-semibold">‘Himmat’</strong> (the courage), but courage without a compass is just a slow way to get lost. The ecosystem treats early-stage startups like athletes; in reality, they need to be treated like infants.
                </p>

                <p className="p-4 rounded-xl bg-violet-50/70 border-l-4 border-violet-500 text-ink-900 font-medium italic">
                  "If you don't hold the hand that is trying to build, that hand will eventually reach for a corporate cubicle just to survive. I believe tactical, hands-on support in the first 100 days is more valuable than a seed check in the first 300."
                </p>

                <p>
                  Outliers don’t die because they lack talent — they die because they lack a map. If we provide the right scaffolding to the aspiring founder, we won't just see more startups — we will unlock an era of <strong className="text-ink-900 font-semibold">unstoppable builders</strong>.
                </p>

                <p className="text-xs font-mono text-ink-500 pt-2">
                  — Gaurav Bansal, Founder
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Institutional Speaking & Masterclasses */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-violet-700 uppercase tracking-widest block mb-2">
                ACADEMIC & INCUBATOR VALIDATION
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-ink-900">
                Institutional Engagements & Masterclasses
              </h3>
            </div>
            <p className="text-xs font-mono text-ink-500">
              INVITED BY TOP PREMIER INSTITUTES ACROSS INDIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {institutionalEngagements.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-3xl p-7 border border-ink-900/[0.06] hover:border-violet-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold border ${item.bgClass}`}>
                      {item.tag}
                    </span>
                    <Building className="w-4 h-4 text-violet-600" />
                  </div>

                  <h4 className="font-display font-bold text-xl text-ink-900 mb-1.5">
                    {item.institution}
                  </h4>
                  <p className="text-xs font-mono font-semibold text-violet-700 mb-3 pb-3 border-b border-ink-900/[0.06]">
                    "{item.session}"
                  </p>
                  <p className="text-xs font-sans text-ink-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-ink-900/[0.06] flex items-center gap-2 text-[11px] font-mono text-sage-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-sage-600" />
                  <span>Verified Institutional Masterclass</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
