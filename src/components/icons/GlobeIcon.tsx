// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function GlobeIcon({ size = 20, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (!reduced) animate(".its-hover-icon", { rotate: 360 }, { duration: 0.9, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".its-hover-icon", { scale: 1, rotate: 0 }, { duration: 0.2 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></m.g></m.svg>;
}
