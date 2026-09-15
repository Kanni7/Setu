import { motion } from 'framer-motion';

const images = [
  'IMG_0845.webp', 'IMG_1280.webp', 'IMG_1318.webp', 
  'IMG_1319.webp', 'IMG_1342.webp', 'IMG_1371.webp', 
  'IMG_1378.webp', 'IMG_1380.webp'
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-darker relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Community & <span className="text-brand">Action</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
              className={`rounded-2xl overflow-hidden relative group ${i === 0 || i === 7 ? 'md:col-span-2' : ''} ${i === 3 || i === 4 ? 'row-span-2' : ''}`}
            >
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
              <img 
                src={`/images/gallery/${img}`} 
                alt="Community event" 
                className="w-full h-full object-cover aspect-video sm:aspect-square group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
