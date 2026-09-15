import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Camera, Sparkles, X, Eye } from 'lucide-react';

const galleryItems = [
  { img: 'IMG_0845.webp', title: 'Founder Teardown War Room', tag: 'Validation Sprint', span: 'col-span-1 md:col-span-2' },
  { img: 'IMG_1280.webp', title: 'Financial Modeling Workshop', tag: 'Unit Economics', span: 'col-span-1' },
  { img: 'IMG_1318.webp', title: '1-on-1 Mentor Diligence', tag: 'Operator Access', span: 'col-span-1' },
  { img: 'IMG_1319.webp', title: 'Pitch Deck Defense Session', tag: 'Demo Preparation', span: 'col-span-1' },
  { img: 'IMG_1342.webp', title: 'Late Night Prototyping Lab', tag: 'MVP Build', span: 'col-span-1 md:col-span-2' },
  { img: 'IMG_1371.webp', title: 'Closed Door VC Q&A', tag: 'Investor Circle', span: 'col-span-1' },
  { img: 'IMG_1378.webp', title: 'Cohort 03 Demo Day Finale', tag: 'Graduation', span: 'col-span-1' },
  { img: 'IMG_1380.webp', title: 'Alumni Mixer & Dinner', tag: 'Founding Network', span: 'col-span-1 md:col-span-2' },
];

export default function CommunityMatrix() {
  const containerRef = useRef(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yShift = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={containerRef} id="community" className="py-28 px-6 bg-canvas-200/40 relative border-t border-ink-900/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-mono font-bold mb-4 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-violet-600" />
              <span>THE ECOSYSTEM IN ACTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink-900 tracking-tight">
              Inside the Setu War Rooms.
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-500 max-w-md leading-relaxed">
            Real founders, real sweat, zero sterile lecture halls. Catch the intensity across our physical sprint locations in Mumbai and Delhi NCR.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <motion.div style={{ y: yShift }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.img}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              onClick={() => setSelectedPhoto(item)}
              className={`relative rounded-3xl overflow-hidden group bg-white border border-ink-900/[0.08] ${item.span} aspect-[4/3] sm:aspect-auto sm:min-h-[260px] shadow-pastel-sm hover:shadow-pastel-md cursor-pointer`}
            >
              <img
                src={`/images/gallery/${item.img}`}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />

              {/* Pastel Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag & Caption */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                <div className="self-start">
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md border border-ink-900/10 text-[10px] font-mono font-bold text-violet-800 uppercase tracking-wider shadow-xs">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <h4 className="font-display font-bold text-sm sm:text-base text-white">
                    {item.title}
                  </h4>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ink-900/60 text-white hover:bg-ink-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={`/images/gallery/${selectedPhoto.img}`}
                alt={selectedPhoto.title}
                className="w-full max-h-[75vh] object-cover"
              />

              <div className="p-6 bg-white flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-ink-900">{selectedPhoto.title}</h3>
                  <p className="text-xs font-mono text-violet-700 font-semibold">{selectedPhoto.tag} • Setu Founder War Room</p>
                </div>

                <a
                  href="#apply"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-mono text-xs font-bold shadow-pastel-sm transition-all"
                >
                  Join Next Cohort
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
