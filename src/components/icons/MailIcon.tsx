// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useParentInteractions, type AnimatedIconProps } from "./types";

export default function MailIcon({ size = 20, className = "" }: AnimatedIconProps) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => { if (!reduced) animate(".mail-open", { rotateX: -60 }, { duration: 0.5, ease: "easeInOut" }); }, [animate, reduced]);
  const stop = useCallback(() => animate(".mail-open", { rotateX: 0 }, { duration: 0.5, ease: "easeInOut" }), [animate]);
  useParentInteractions(scope, start, stop);

  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`${className} perspective-distant`} style={{ overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /><m.path className="mail-open" d="m3 7 9 6 9-6" style={{ transformOrigin: "50% 0%" }} /></m.g></m.svg>;
}
