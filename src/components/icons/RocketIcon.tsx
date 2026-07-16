// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function RocketIcon({ size = 20, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (reduced) return; animate(".rocket-upper", { x: [0, 12, 0], y: [0, -12, 0] }, { duration: 0.8, ease: "easeInOut" }); animate(".rocket-flame", { x: [0, 12, 0], y: [0, -12, 0], scale: [1, 1.2, 1] }, { duration: 0.8, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".rocket-upper, .rocket-flame", { x: 0, y: 0, opacity: 1, scale: 1 }, { duration: 0.2 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}><m.path className="rocket-fin-left rocket-upper" d="m13.299 9h-3.891c-.892 0-1.738.397-2.308 1.083L2 16.222l6.31 1.51" /><m.path className="rocket-fin-bottom rocket-upper" d="M23 18.701v3.891c0 .892-.397 1.738-1.083 2.308L15.778 30l-1.51-6.31" /><m.path className="rocket-body rocket-upper" d="M14.268 23.69C22.254 21.496 28.91 14.675 30 2c-12.675 1.09-19.496 7.746-21.69 15.732l5.958 5.958Z" /><m.path className="rocket-trajectory rocket-upper" d="M19 5c4.111 1.389 6.778 4.056 8 8" /><m.circle className="rocket-window rocket-upper" cx="19" cy="13" r="2" fill="currentColor" /><m.path className="rocket-flame" d="M2 30s.707-4.95 2.121-6.364c1.172-1.172 3.071-1.172 4.243 0s1.172 3.071 0 4.243C6.95 29.293 2 30 2 30Z" /></m.g></m.svg>;
}
