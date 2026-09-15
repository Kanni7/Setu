import { motion } from 'framer-motion';

export default function TextReveal({
  children,
  text,
  className = "",
  delay = 0,
  as = "div",
  highlightWords = [],
  highlightClass = "text-brand-400 font-serif italic font-normal"
}) {
  const content = text || (typeof children === 'string' ? children : '');
  const words = content.split(" ");
  const Component = motion[as] || motion.div;

  if (!content) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={`inline-block ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const isHighlight = highlightWords.some(hw => hw.toLowerCase() === cleanWord);

        return (
          <span key={i} className="inline-block overflow-hidden mr-[0.22em] align-top py-0.5">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: delay + i * 0.04,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`inline-block ${isHighlight ? highlightClass : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
