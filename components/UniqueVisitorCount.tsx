"use client";

import { useEffect, useState } from "react";
import { dmMono } from "@/app/fonts";

type Props = { className?: string };

export function UniqueVisitorCount({ className = "" }: Props) {
  const [count, setCount] = useState<number | null | "loading">("loading");

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          credentials: "same-origin",
        });
        const data = (await res.json()) as { ok: boolean; count: number | null };
        if (cancelled) return;
        if (data.ok && typeof data.count === "number") {
          setCount(data.count);
        } else {
          setCount(null);
        }
      } catch {
        if (!cancelled) setCount(null);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === "loading") {
    return (
      <p
        className={`text-hex-muted/50 ${dmMono.className} text-xs tabular-nums ${className}`}
        aria-hidden
      >
        …
      </p>
    );
  }

  if (count === null) {
    return null;
  }

  return (
    <p
      className={`text-hex-muted/90 ${className} text-xs`}
      aria-live="polite"
    >
      <span className="text-hex-muted/70">Visitors</span>{" "}
      <span className={`${dmMono.className} text-hex-foreground/90 tabular-nums`}>
        {count.toLocaleString("en-IN")}
      </span>
    </p>
  );
}
