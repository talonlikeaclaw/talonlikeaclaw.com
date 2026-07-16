"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export interface AnimatedIconProps {
  size?: number;
  className?: string;
}

export function useParentInteractions(
  scope: RefObject<Element | null>,
  start: () => void,
  stop: () => void,
) {
  useEffect(() => {
    const parent = scope.current?.closest<HTMLElement>(
      "a, button, [data-icon-trigger]",
    );
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
