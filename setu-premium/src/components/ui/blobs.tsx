import type React from "react";
import { cn } from "@/lib/utils";

const blobStyle = {
  "--border-radius": "115% 140% 145% 110% / 125% 140% 110% 125%",
  "--border-width": "5vmin",
  aspectRatio: "1",
  display: "block",
  gridArea: "stack",
  backgroundSize: "calc(100% + var(--border-width) * 2)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  border: "var(--border-width) solid transparent",
  borderRadius: "var(--border-radius)",
  maskImage: "linear-gradient(transparent, transparent), linear-gradient(black, white)",
  maskClip: "padding-box, border-box",
  maskComposite: "intersect",
  mixBlendMode: "screen" as const,
  height: "70vmin",
  filter: "blur(1vmin)",
} as React.CSSProperties;

const BLOBS = [
  {
    backgroundColor: "#7C6EAD",
    backgroundImage: "linear-gradient(#7C6EAD, #AB96D4, #7C6EAD)",
    transform: "rotate(30deg) scale(1.03)",
  },
  {
    backgroundColor: "#E06547",
    backgroundImage: "linear-gradient(#E06547, #F6BE51, #E06547)",
    transform: "rotate(60deg) scale(0.95)",
  },
  {
    backgroundColor: "#4D967A",
    backgroundImage: "linear-gradient(#4D967A, #7FB69F, #4D967A)",
    transform: "rotate(90deg) scale(0.97)",
  },
  {
    backgroundColor: "#3486D4",
    backgroundImage: "linear-gradient(#3486D4, #69ADE7, #3486D4)",
    transform: "rotate(120deg) scale(1.02)",
  },
];

export function AnimatedBlobs({
  text = "Setu\nThe Startup School",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full flex items-center justify-center overflow-hidden",
        className
      )}
    >
      <span className="absolute pointer-events-none z-10 px-6 text-center font-display font-bold tracking-tight text-white text-3xl sm:text-5xl md:text-6xl leading-tight whitespace-pre-line">
        {text}
      </span>
      <div className="grid" style={{ gridTemplateAreas: "'stack'" }}>
        <div
          className="grid relative animate-blob-spin"
          style={{ gridTemplateAreas: "'stack'", gridArea: "stack" }}
        >
          {BLOBS.map((blob, index) => (
            <span
              key={index}
              style={{
                ...blobStyle,
                ...blob,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
