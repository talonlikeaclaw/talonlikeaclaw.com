// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function GitlabIcon({ size = 20, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (!reduced) animate(".its-hover-icon", { scale: [1, 1.12, 1], rotate: [0, -5, 5, 0] }, { duration: 0.5, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".its-hover-icon", { scale: 1, rotate: 0 }, { duration: 0.2 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}><path d="m21 14-9 7-9-7 3-11 3 7h6l3-7z" /></m.g></m.svg>;
}
