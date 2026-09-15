import { motion } from 'framer-motion';

export default function Manifesto() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <img src="/images/mentors/gaurav.webp" alt="Gaurav Bansal" className="w-24 h-24 rounded-full mx-auto mb-8 border-2 border-accent/50 object-cover" />
          <h2 className="text-3xl font-bold mb-8">The Founder's Manifesto</h2>
          <blockquote className="text-2xl md:text-4xl font-medium leading-tight text-white/80 mb-8">
            "Indian founders face unique social and familial pressures. Early practical guidance in the first 100 days isn't just helpful—<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-brand">it's crucial for survival.</span>"
          </blockquote>
          <p className="text-accent font-semibold tracking-wide uppercase text-sm">Gaurav Bansal</p>
          <p className="text-white/40 text-sm mt-1">Founder, Ramsetu Alternate Education</p>
        </motion.div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-32">
        <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Programs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="text-8xl font-black">I</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">The Spark Sprint</h3>
            <p className="text-brand font-medium mb-6">3-Day Ignition</p>
            <p className="text-white/60 mb-8 leading-relaxed">Weekend validation sprint featuring intensive teardowns and mentorship to see if your idea has actual legs.</p>
            <div className="flex items-center gap-3 text-sm text-white/40 bg-darker/50 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Launching in Mumbai & NCR
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-gradient-to-bl from-brand/20 to-dark border border-brand/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="text-8xl font-black">II</div>
            </div>
            <h3 className="text-2xl font-bold mb-2">The Transformation</h3>
            <p className="text-accent font-medium mb-6">30-Days Deep-Dive</p>
            <p className="text-white/60 mb-8 leading-relaxed">Accelerated 30-day program to create your MVP, lock in early users, and refine investor pitches for Seed level.</p>
            <div className="flex items-center gap-3 text-sm text-white/40 bg-darker/50 px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              Mumbai Exclusive
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
