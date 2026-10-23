"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/probashi";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-line">
      {FAQS.map(({ q, a }, i) => {
        const on = open === i;
        return (
          <div key={q} className="border-b border-line">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(on ? -1 : i)}
                aria-expanded={on}
                aria-controls={`faq-${i}`}
                className="display flex w-full items-center justify-between gap-6 py-6 text-left text-[20px] font-semibold text-ink transition-colors hover:text-forest-700 sm:text-[22px]"
              >
                {q}
                <motion.span
                  animate={{ rotate: on ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 26 }}
                  className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors ${on ? "bg-forest-900 text-lime" : "bg-paper text-ink ring-1 ring-line"}`}
                >
                  <Plus className="size-5" />
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="max-w-2xl pb-6 pr-14 text-[16px] leading-relaxed text-muted sm:text-[17px]">{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
