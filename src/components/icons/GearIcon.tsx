// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function GearIcon({ size = 20, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (reduced) return; animate(".gear-body", { scale: [1, 1.02, 1] }, { duration: 0.6 }); animate(".gear-center", { scale: [1, 1.1, 1] }, { duration: 0.3, ease: "easeOut" }); animate(".gear-rotator", { rotate: [0, 360] }, { duration: 0.9, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".gear-rotator, .gear-center, .gear-body", { rotate: 0, scale: 1 }, { duration: 0.2 }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}><m.g className="gear-rotator" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}><m.circle className="gear-center" cx="16" cy="16" r="5" /><m.path className="gear-body" d="m30 17.5v-3l-3.388-1.355a13.85 13.85 0 0 0-1.089-2.633l1.436-3.351-2.121-2.121-3.351 1.436a13.85 13.85 0 0 0-2.633-1.089L17.5 2h-3l-1.355 3.388a13.85 13.85 0 0 0-2.633 1.089L7.161 5.04 5.04 7.161l1.436 3.351a13.85 13.85 0 0 0-1.089 2.633L2 14.5v3l3.388 1.355a13.85 13.85 0 0 0 1.089 2.633L5.04 24.839l2.121 2.121 3.351-1.436a13.85 13.85 0 0 0 2.633 1.089L14.5 30h3l1.355-3.388a13.85 13.85 0 0 0 2.633-1.089l3.351 1.436 2.121-2.121-1.436-3.351a13.85 13.85 0 0 0 1.089-2.633L30 17.5Z" /></m.g></m.g></m.svg>;
}
