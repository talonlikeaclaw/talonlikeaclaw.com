// Derived from Its Hover (https://github.com/itshover/itshover), Copyright 2026 itshover.
// Modified for this project. Licensed under Apache-2.0; see THIRD_PARTY_NOTICES.md.
"use client";

import { useCallback, useEffect } from "react";
import type { RefObject } from "react";
import { useAnimate, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

type IconName = "mail" | "globe" | "github" | "gitlab" | "linkedin" | "external" | "rocket" | "router" | "refresh" | "gear";
type Props = { name: IconName; size?: number; className?: string };

function useParentInteraction(scope: RefObject<Element | null>, start: () => void, stop: () => void) {
  useEffect(() => {
    const parent = scope.current?.closest("a, button, [data-icon-trigger]") as HTMLElement | null | undefined;
    if (!parent) return;
    parent.addEventListener("mouseenter", start);
    parent.addEventListener("mouseleave", stop);
    parent.addEventListener("focus", start);
    parent.addEventListener("blur", stop);
    return () => {
      parent.removeEventListener("mouseenter", start);
      parent.removeEventListener("mouseleave", stop);
      parent.removeEventListener("focus", start);
      parent.removeEventListener("blur", stop);
    };
  }, [scope, start, stop]);
}

export default function PortfolioIcon({ name, size = 20, className = "" }: Props) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const start = useCallback(() => {
    if (reduced) return;
    const target = ".its-hover-icon";
    if (name === "external") animate(target, { x: [0, 2, 0], y: [0, -2, 0] }, { duration: 0.45, ease: "easeOut" });
    else if (name === "globe") animate(target, { rotate: 360 }, { duration: 0.9, ease: "easeInOut" });
    else if (name === "mail") animate(".mail-open", { rotateX: -60, transformOrigin: "50% 0%" }, { duration: 0.5, ease: "easeInOut" });
    else if (name === "github") animate(".github-icon", { scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }, { duration: 0.5, ease: "easeInOut" });
    else if (name === "linkedin") {
      animate(".linkedin-border", { scale: [1, 1.05, 1] }, { duration: 0.4, ease: "easeInOut" });
      animate(".linkedin-lines", { pathLength: [0, 1] }, { duration: 0.5, ease: "easeOut" });
    }
    else if (name === "refresh") animate(scope.current, { rotate: [0, 180] }, { duration: 0.4, ease: "easeInOut" });
    else if (name === "gear") {
      animate(".gear-body", { scale: [1, 1.02, 1] }, { duration: 0.6 });
      animate(".gear-center", { scale: [1, 1.1, 1] }, { duration: 0.3, ease: "easeOut" });
      animate(".gear-rotator", { rotate: [0, 360] }, { duration: 0.9, ease: "easeInOut" });
    } else if (name === "rocket") {
      animate(".rocket-upper", { x: [0, 12, 0], y: [0, -12, 0] }, { duration: 0.8, ease: "easeInOut" });
      animate(".rocket-flame", { x: [0, 12, 0], y: [0, -12, 0], scale: [1, 1.2, 1] }, { duration: 0.8, ease: "easeInOut" });
    } else if (name === "router") {
      animate(".signal-inner", { scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }, { duration: 0.6, ease: "easeInOut" });
      animate(".signal-outer", { scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }, { duration: 0.7, ease: "easeInOut", delay: 0.1 });
      animate(".indicator", { opacity: [1, 0.3, 1] }, { duration: 0.3, ease: "easeInOut" });
    }
    else animate(target, { scale: [1, 1.12, 1], rotate: [0, -5, 5, 0] }, { duration: 0.5, ease: "easeInOut" });
  }, [animate, name, reduced, scope]);
  const stop = useCallback(() => {
    animate(".its-hover-icon", { x: 0, y: 0, scale: 1, rotate: 0 }, { duration: 0.2 });
    animate(".mail-open", { rotateX: 0, transformOrigin: "50% 0%" }, { duration: 0.5, ease: "easeInOut" });
    animate(".github-icon", { scale: 1, rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    animate(".linkedin-lines, .linkedin-border", { pathLength: 1, scale: 1 }, { duration: 0.2 });
    animate(scope.current, { rotate: 0 }, { duration: 0.4, ease: "easeInOut" });
    animate(".rocket-upper, .rocket-flame", { x: 0, y: 0, opacity: 1, scale: 1 }, { duration: 0.2 });
    animate(".signal-inner, .signal-outer, .indicator", { scale: 1, opacity: 1 }, { duration: 0.2, ease: "easeInOut" });
    animate(".gear-rotator, .gear-center, .gear-body", { rotate: 0, scale: 1 }, { duration: 0.2 });
  }, [animate, scope]);
  useParentInteraction(scope, start, stop);

  const path = name === "mail" ? <><m.path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" /><m.path className="mail-open" d="m3 7 9 6 9-6" /></>
    : name === "globe" ? <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>
    : name === "github" ? <m.g className="github-icon" style={{ transformOrigin: "center" }}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 12.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" /></m.g>
    : name === "rocket" ? <><m.path className="rocket-fin-left rocket-upper" d="m13.299 9h-3.891c-.892 0-1.738.397-2.308 1.083L2 16.222l6.31 1.51" /><m.path className="rocket-fin-bottom rocket-upper" d="M23 18.701v3.891c0 .892-.397 1.738-1.083 2.308L15.778 30l-1.51-6.31" /><m.path className="rocket-body rocket-upper" d="M14.268 23.69C22.254 21.496 28.91 14.675 30 2c-12.675 1.09-19.496 7.746-21.69 15.732l5.958 5.958Z" /><m.path className="rocket-trajectory rocket-upper" d="M19 5c4.111 1.389 6.778 4.056 8 8" /><m.circle className="rocket-window rocket-upper" cx="19" cy="13" r="2" fill="currentColor" /><m.path className="rocket-flame" d="M2 30s.707-4.95 2.121-6.364c1.172-1.172 3.071-1.172 4.243 0s1.172 3.071 0 4.243C6.95 29.293 2 30 2 30Z" /></>
    : name === "router" ? <><rect width="20" height="8" x="2" y="14" rx="2" /><m.g className="indicator"><path d="M6.01 18H6M10.01 18H10" /></m.g><path d="M15 10v4" /><m.path className="signal-inner" d="M17.84 7.17a4 4 0 0 0-5.66 0" style={{ transformOrigin: "15px 7px" }} /><m.path className="signal-outer" d="M20.66 4.34a8 8 0 0 0-11.31 0" style={{ transformOrigin: "15px 4px" }} /></>
    : name === "refresh" ? <><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 11a8.1 8.1 0 0 0-15.5-2M4 5v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2M20 19v-4h-4" /></>
    : name === "gear" ? <m.g className="gear-rotator" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}><m.circle className="gear-center" cx="16" cy="16" r="5" /><m.path className="gear-body" d="m30 17.5v-3l-3.388-1.355a13.85 13.85 0 0 0-1.089-2.633l1.436-3.351-2.121-2.121-3.351 1.436a13.85 13.85 0 0 0-2.633-1.089L17.5 2h-3l-1.355 3.388a13.85 13.85 0 0 0-2.633 1.089L7.161 5.04 5.04 7.161l1.436 3.351a13.85 13.85 0 0 0-1.089 2.633L2 14.5v3l3.388 1.355a13.85 13.85 0 0 0 1.089 2.633L5.04 24.839l2.121 2.121 3.351-1.436a13.85 13.85 0 0 0 2.633 1.089L14.5 30h3l1.355-3.388a13.85 13.85 0 0 0 2.633-1.089l3.351 1.436 2.121-2.121-1.436-3.351a13.85 13.85 0 0 0 1.089-2.633L30 17.5Z" /></m.g>
    : name === "gitlab" ? <path d="m21 14-9 7-9-7 3-11 3 7h6l3-7z" />
    : name === "linkedin" ? <><m.path className="linkedin-lines" d="M8 11v5" initial={{ pathLength: 1 }} /><m.path className="linkedin-lines" d="M8 8v.01" initial={{ pathLength: 1 }} /><m.path className="linkedin-lines" d="M12 16v-5" initial={{ pathLength: 1 }} /><m.path className="linkedin-lines" d="M16 16v-3a2 2 0 1 0-4 0" initial={{ pathLength: 1 }} /><m.path className="linkedin-border" d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" style={{ transformOrigin: "center" }} /></>
    : <><path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" /><path d="m11 13 9-9m-5 0h5v5" /></>;

  const isLargeIcon = name === "rocket" || name === "gear";
  return <m.svg ref={scope} aria-hidden="true" width={size} height={size} viewBox={isLargeIcon ? "0 0 32 32" : "0 0 24 24"} fill="none" stroke="currentColor" strokeWidth={isLargeIcon ? 1.5 : 2} strokeLinecap="round" strokeLinejoin="round" className={`${className}${name === "mail" ? " perspective-distant" : ""}`} style={name === "refresh" ? { transformOrigin: "50% 50%" } : { overflow: "visible" }}><m.g className="its-hover-icon" style={{ transformOrigin: "center" }}>{path}</m.g></m.svg>;
}

export const MailIcon = (props: Omit<Props, "name">) => <PortfolioIcon name="mail" {...props} />;
export const GlobeIcon = (props: Omit<Props, "name">) => <PortfolioIcon name="globe" {...props} />;
export const GithubIcon = (props: Omit<Props, "name">) => <PortfolioIcon name="github" {...props} />;
export const GitlabIcon = (props: Omit<Props, "name">) => <PortfolioIcon name="gitlab" {...props} />;
export const LinkedinIcon = (props: Omit<Props, "name">) => <PortfolioIcon name="linkedin" {...props} />;
export const ExternalLinkIcon = (props: Omit<Props, "name">) => <PortfolioIcon name="external" {...props} />;
