import { ArrowUpRight } from 'lucide-react';

const BLOCK_COLORS = ['bg-sky-300', 'bg-honey-400', 'bg-violet-300', 'bg-sage-300'];

function MentorTile({ mentor, color }) {
  return (
    <a
      href={`#mentors`}
      className="group relative flex w-[270px] shrink-0 flex-col rounded-[28px] bg-white border border-ink-900/[0.06] p-4 shadow-pastel-md transition-transform duration-300 hover:-translate-y-1.5"
    >
      {/* Top row: domain pill + arrow button */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full bg-canvas-100 border border-ink-900/[0.06] text-[10px] font-mono font-semibold text-ink-500">
          {mentor.domain}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas-100 text-ink-700 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-violet-600 group-hover:text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Name + role */}
      <h3 className="font-display font-bold text-lg leading-snug text-ink-900 mb-1">
        {mentor.name}
      </h3>
      <p className="text-xs text-ink-500 mb-4 line-clamp-1">{mentor.role}</p>

      {/* Colored photo block */}
      <div className={`relative mt-auto aspect-[4/5] w-full overflow-hidden rounded-[20px] ${color}`}>
        <img
          src={mentor.img}
          alt={mentor.name}
          className="h-full w-full object-cover object-top grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </a>
  );
}

export default function MentorMarquee({ mentors }) {
  const featured = mentors.slice(0, 8);
  const loop = [...featured, ...featured];

  return (
    <div className="marquee-container relative -mx-6 mb-16 overflow-hidden px-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="marquee-content flex w-max gap-5 animate-marquee">
        {loop.map((mentor, i) => (
          <MentorTile
            key={`${mentor.name}-${i}`}
            mentor={mentor}
            color={BLOCK_COLORS[i % BLOCK_COLORS.length]}
          />
        ))}
      </div>
    </div>
  );
}
