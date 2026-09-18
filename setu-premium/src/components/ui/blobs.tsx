import type React from "react";
import { cn } from "@/lib/utils";

const BLOBS = [
  {
    backgroundColor: "#B84A3A",
    backgroundImage: "linear-gradient(#B84A3A, #E07A5F, #B84A3A)",
    transform: "rotate(30deg) scale(1.03)",
  },
  {
    backgroundColor: "#E07A5F",
    backgroundImage: "linear-gradient(#E07A5F, #F2C6A0, #E07A5F)",
    transform: "rotate(60deg) scale(0.95)",
  },
  {
    backgroundColor: "#7A332B",
    backgroundImage: "linear-gradient(#7A332B, #B84A3A, #7A332B)",
    transform: "rotate(90deg) scale(0.97)",
  },
  {
    backgroundColor: "#F2C6A0",
    backgroundImage: "linear-gradient(#F2C6A0, #B84A3A, #F2C6A0)",
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
          className="grid relative"
          style={{ gridTemplateAreas: "'stack'", gridArea: "stack", animation: "spin 5s linear infinite" }}
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
