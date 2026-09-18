import type React from "react";
import { cn } from "@/lib/utils";

const BLOBS = [
  {
    backgroundColor: "#0074D9",
    backgroundImage: "linear-gradient(#0074D9, #39CCCC, #0074D9)",
    transform: "rotate(30deg) scale(1.03)",
  },
  {
    backgroundColor: "#FF4136",
    backgroundImage: "linear-gradient(#FF4136, #FF851B, #FF4136)",
    transform: "rotate(60deg) scale(0.95)",
  },
  {
    backgroundColor: "#3D9970",
    backgroundImage: "linear-gradient(#3D9970, #01FF70, #3D9970)",
    transform: "rotate(90deg) scale(0.97)",
  },
  {
    backgroundColor: "#B10DC9",
    backgroundImage: "linear-gradient(#B10DC9, #85144B, #B10DC9)",
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
