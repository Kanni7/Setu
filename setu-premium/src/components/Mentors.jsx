import { motion } from 'framer-motion';

const mentors = [
  { name: 'Vikram Anand Bhushan', role: 'Co-Founder, Hypermine', img: '/images/mentors/vikrambanand.webp' },
  { name: 'Ashish Kulkarni', role: 'Founder, Founders Psyche', img: '/images/mentors/Ashish_kulkarni.webp' },
  { name: 'Vaibhav Bhargava', role: 'Enterprise Architect, JLL', img: '/images/mentors/vaibhav_bhargava.webp' },
  { name: 'Harsh Gupta', role: 'Ph.D Researcher, IISER', img: '/images/mentors/harsh_gupta.webp' },
  { name: 'Pavan Agarwal', role: 'Founder, DD Cinemas', img: '/images/mentors/pavan_dd.webp' },
  { name: 'CA Moon Goel', role: 'Co-Founder, Vitt Kushal', img: '/images/mentors/moongoel.webp' },
  { name: 'CA Mahendra Tiwari', role: 'Managing Partner', img: '/images/mentors/mahendra.webp' },
  { name: 'Akash Kansal', role: 'Product Builder, Ex-Deloitte', img: '/images/mentors/akash.webp' },
  { name: 'Deric Karunesudas', role: 'Cybersecurity Executive', img: '/images/mentors/deric.webp' },
  { name: 'Dr Debashis Bhattacharya', role: 'Healthcare Investor', img: '/images/mentors/debashis.webp' },
  { name: 'Anant Sharma', role: 'Founder, Tweek Labs', img: '/images/mentors/anant.webp' }
];

export default function Mentors() {
  return (
    <section id="mentors" className="py-32 px-6 relative max-w-7xl mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand/5 blur-[120px] rounded-[100%] pointer-events-none"></div>
      
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-accent text-glow">Masters</span></h2>
        <p className="text-white/60 text-lg">Get mentored directly by industry titans.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {mentors.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/5] custom-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/40 to-transparent z-10"></div>
            <img src={m.img} alt={m.name} className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-lg font-bold text-white mb-1">{m.name}</h3>
              <p className="text-sm font-medium text-brand">{m.role}</p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand/30 rounded-2xl transition-colors duration-500 z-30 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
