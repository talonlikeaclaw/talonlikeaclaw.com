"use client";

import dynamic from "next/dynamic";
import type { FaultyTerminalProps } from "@/components/reactbits/FaultyTerminal";

const FaultyTerminal = dynamic(
  () => import("@/components/reactbits/FaultyTerminal"),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function FaultyTerminalLazy(props: FaultyTerminalProps) {
  return <FaultyTerminal {...props} />;
}
