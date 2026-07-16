// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function RouterIcon({ size = 20, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (reduced) return; animate(".signal-inner", { scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }, { duration: 0.6, ease: "easeInOut" }); animate(".signal-outer", { scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }, { duration: 0.7, ease: "easeInOut", delay: 0.1 }); animate(".indicator", { opacity: [1, 0.3, 1] }, { duration: 0.3, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".signal-inner, .signal-outer, .indicator", { scale: 1, opacity: 1 }, { duration: 0.2, ease: "easeInOut" }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}><rect width="20" height="8" x="2" y="14" rx="2" /><m.g className="indicator"><path d="M6.01 18H6M10.01 18H10" /></m.g><path d="M15 10v4" /><m.path className="signal-inner" d="M17.84 7.17a4 4 0 0 0-5.66 0" style={{ transformOrigin: "15px 7px" }} /><m.path className="signal-outer" d="M20.66 4.34a8 8 0 0 0-11.31 0" style={{ transformOrigin: "15px 4px" }} /></m.g></m.svg>;
}
