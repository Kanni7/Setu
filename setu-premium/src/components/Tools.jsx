import { motion } from 'framer-motion';
import { FileText, Calendar, Building, Users, Coins, Calculator, PieChart } from 'lucide-react';

const tools = [
  { icon: <FileText size={24}/>, name: "Pitch Deck Library", detail: "35+ Unicorn Decks", active: true },
  { icon: <Calendar size={24}/>, name: "Events Calendar", detail: "Top startup summits", active: true },
  { icon: <Building size={24}/>, name: "Incubators & Accelerators", detail: "Coming Soon", active: false },
  { icon: <Users size={24}/>, name: "Investor Database", detail: "250+ active angels", active: false },
  { icon: <Coins size={24}/>, name: "Grants & Schemes", detail: "0% equity hubs", active: false },
  { icon: <Calculator size={24}/>, name: "Financial Modeler", detail: "Predict runway", active: false },
  { icon: <PieChart size={24}/>, name: "Cap Table Simulator", detail: "Equity math", active: false },
];

export default function Tools() {
  return (
    <section id="tools" className="py-32 px-6 bg-dark/50 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Founder <span className="text-accent text-glow">Arsenal</span></h2>
            <p className="text-white/60 mb-8 text-lg leading-relaxed">
              Study the exact pitch decks from global unicorns that raised millions, and access the tools you need to build your startup empire.
            </p>
            <button className="px-6 py-3 bg-white/10 text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all">
              Access Full Library
            </button>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-xl border ${t.active ? 'bg-brand/10 border-brand/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] cursor-pointer' : 'bg-white/5 border-white/5 opacity-60'} backdrop-blur-sm transition-all`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${t.active ? 'bg-brand/20 text-brand' : 'bg-white/10 text-white/50'}`}>
                  {t.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{t.name}</h3>
                <p className={`text-sm ${t.active ? 'text-brand/80' : 'text-white/40'}`}>{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
