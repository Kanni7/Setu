import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AnimatedBlobs } from './ui/blobs';

export default function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] isolate bg-ink-900 cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="h-full w-full"
          >
            <AnimatedBlobs />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="absolute inset-x-0 text-center px-6 font-display font-bold text-white text-lg sm:text-xl md:text-2xl tracking-tight uppercase"
            style={{ top: 'calc(50% + 36vmin)' }}
          >
            Hai Keeda? Hai Himmat? To Kar Startup!
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute bottom-10 inset-x-0 text-center text-[11px] font-mono uppercase tracking-widest text-white/60"
          >
            Click anywhere to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
