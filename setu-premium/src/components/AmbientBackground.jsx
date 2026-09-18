import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Warm Sunset Base Layer */}
      <div className="absolute inset-0 bg-[#FFF3E7]" />

      {/* Very Fine Linen Grid Texture */}
      <div className="absolute inset-0 bg-linen-grid opacity-60" />

      {/* Subtle Dot Matrix Accent */}
      <div className="absolute inset-0 bg-dot-matrix opacity-30" />

      {/* Floating Pastel Gradient Atmosphere Orbs */}
      {/* 1. Soft Violet / Lavender Glow - Top Left */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blob-violet"
      />

      {/* 2. Soft Mint / Sage Glow - Top Right */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 -right-40 w-[600px] h-[600px] rounded-full blob-sage"
      />

      {/* 3. Soft Blush / Peach Glow - Mid Page */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[45%] -left-40 w-[550px] h-[550px] rounded-full blob-blush"
      />

      {/* 4. Soft Honey / Butter Glow - Mid Right */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[65%] -right-32 w-[550px] h-[550px] rounded-full blob-honey"
      />

      {/* 5. Soft Violet / Lavender Glow - Bottom */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full blob-violet"
      />
    </div>
  );
}
