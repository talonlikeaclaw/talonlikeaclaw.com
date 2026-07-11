"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorCharacter?: string;
  startOnVisible?: boolean;
  className?: string;
  cursorClassName?: string;
}

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Typewriter({
  text,
  speed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  showCursor = true,
  cursorCharacter = "▊",
  startOnVisible = true,
  className,
  cursorClassName,
}: TypewriterProps) {
  const reduced = useReducedMotion();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const ref = useRef<HTMLSpanElement>(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text],
  );

  useEffect(() => {
    if (!startOnVisible || !ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible || reduced) return;

    let timeout: ReturnType<typeof setTimeout>;
    let strIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    const run = () => {
      const currentStr = textArray[strIdx];

      if (!isDeleting) {
        charIdx++;
        setDisplayedText(currentStr.slice(0, charIdx));

        if (charIdx === currentStr.length) {
          if (!loop && strIdx === textArray.length - 1) return;
          isDeleting = true;
          timeout = setTimeout(run, pauseDuration);
          return;
        }
        timeout = setTimeout(run, speed);
      } else {
        charIdx--;
        setDisplayedText(currentStr.slice(0, charIdx));

        if (charIdx === 0) {
          isDeleting = false;
          strIdx = (strIdx + 1) % textArray.length;
          timeout = setTimeout(run, speed);
          return;
        }
        timeout = setTimeout(run, deletingSpeed);
      }
    };

    timeout = setTimeout(run, initialDelay);
    return () => clearTimeout(timeout);
  }, [
    isVisible,
    reduced,
    textArray,
    speed,
    initialDelay,
    pauseDuration,
    deletingSpeed,
    loop,
  ]);

  const showFullText = !mounted || reduced;
  const textToShow = showFullText ? textArray[0] : displayedText;

  return (
    <span
      ref={ref}
      className={cn("inline-block whitespace-pre-wrap", className)}
    >
      {textToShow}
      {showCursor && (
        <span
          className={cn("cursor-blink ml-0.5 inline-block", cursorClassName)}
          aria-hidden="true"
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
