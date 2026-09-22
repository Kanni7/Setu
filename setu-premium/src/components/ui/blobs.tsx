import type React from "react";
import { cn } from "@/lib/utils";

const BLOBS = [
  { backgroundColor: "#FF2E2E", transform: "rotate(0deg)" },
  { backgroundColor: "#FFC700", transform: "rotate(20deg)" },
  { backgroundColor: "#00BFDE", transform: "rotate(40deg)" },
  { backgroundColor: "#FF1E9E", transform: "rotate(60deg)" },
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
      <span
        className="absolute pointer-events-none z-10 px-6 text-center font-display font-bold tracking-tight text-white text-3xl sm:text-5xl md:text-6xl leading-tight whitespace-pre-line"
        style={{ textShadow: '4px 4px 0px #0A0A0A' }}
      >
        {text}
      </span>
      <div className="grid" style={{ gridTemplateAreas: "'stack'" }}>
        <div
          className="grid relative w-[58vmin] h-[58vmin]"
          style={{ gridTemplateAreas: "'stack'", gridArea: "stack", animation: "spin 8s linear infinite" }}
        >
          {BLOBS.map((blob, index) => (
            <span
              key={index}
              className="blob-shape"
              style={blob}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
