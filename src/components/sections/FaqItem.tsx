"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer items-center justify-between py-4 text-left font-mono text-base font-medium text-text transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <span>{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {reduced ? (
        open && <p className="pb-4 pr-8 leading-relaxed text-muted">{answer}</p>
      ) : (
        <div
          className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            opacity: open ? 1 : 0,
          }}
        >
          <div className="min-h-0">
            <p className="pb-4 pr-8 leading-relaxed text-muted">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
