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
          transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
          onClick={() => setVisible(false)}
          className="fixed inset-0 z-[100] isolate bg-ink-900 cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(30px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full"
          >
            <AnimatedBlobs />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 inset-x-0 text-center text-[11px] font-mono uppercase tracking-widest text-white/50"
          >
            Click anywhere to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
