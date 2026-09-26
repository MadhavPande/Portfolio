"use client";

import { Check } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { EMAIL } from "@/lib/site";

// mailto: does nothing for visitors without a desktop mail app (most Gmail users),
// so every email link also copies the address and confirms it with a toast.
export function EmailLink({ className, children }: { className?: string; children: ReactNode }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return; // Clipboard blocked: the mailto link still does its job where it can.
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2600);
  };

  return (
    <>
      <a href={`mailto:${EMAIL}`} onClick={copy} className={className}>
        {children}
      </a>
      <AnimatePresence>
        {copied && (
          <motion.div
            role="status"
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg shadow-[0_12px_32px_-12px_rgb(17_18_21/0.45)]"
            style={{ x: "-50%" }}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : 12 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Check size={16} weight="bold" />
            Email copied: {EMAIL}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
