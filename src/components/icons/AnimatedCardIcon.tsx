// Uses the same parent-triggered animation approach as the adapted Its Hover icons.
"use client";

import type { LucideIcon } from "lucide-react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useCallback, useEffect } from "react";

export default function AnimatedCardIcon({ Icon }: { Icon: LucideIcon }) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (!reduced) animate(".card-icon", { scale: [1, 1.15, 1], rotate: [0, -6, 6, 0] }, { duration: 0.55, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".card-icon", { scale: 1, rotate: 0 }, { duration: 0.2 }), [animate]);
  useEffect(() => {
    const card = scope.current?.closest("[data-icon-trigger]") as HTMLElement | null | undefined;
    if (!card) return;
    card.addEventListener("mouseenter", start); card.addEventListener("mouseleave", stop);
    return () => { card.removeEventListener("mouseenter", start); card.removeEventListener("mouseleave", stop); };
  }, [scope, start, stop]);
  return <m.div ref={scope} className="card-icon"><Icon className="h-6 w-6 text-accent" /></m.div>;
}
