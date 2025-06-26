import * as React from "react";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number; // Lower = faster
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className = "",
  ...props
}: MarqueeProps) {
  const animationStyle: React.CSSProperties = {
    animationDuration: `${speed}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationName: direction === "left" ? "marquee-left" : "marquee-right",
    animationPlayState: "running",
  };

  return (
    <div
      className={`w-full overflow-hidden z-10 ${className} ${
        pauseOnHover ? "marquee-hover" : ""
      }`}
      {...props}
    >
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0%); }
          to { transform: translateX(-100%); }
        }

        @keyframes marquee-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0%); }
        }

        .marquee-hover:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative flex overflow-hidden py-5 w-full">
        <div className="flex w-max">
          <div className="flex marquee-content" style={animationStyle}>
            {children}
            {children} {/* Duplicate for seamless loop */}
          </div>
        </div>
      </div>
    </div>
  );
}
