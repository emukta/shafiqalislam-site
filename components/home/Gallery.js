"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { PHOTOS, GALLERY } from "@/lib/probashi";
import { toBn } from "@/lib/format";

const ITEMS = GALLERY.map((k) => PHOTOS[k]);

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;
  const close = useCallback(() => setIndex(-1), []);
  const step = useCallback((d) => setIndex((i) => (i + d + ITEMS.length) % ITEMS.length), []);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const cur = open ? ITEMS[index] : null;

  return (
    <>
      <div className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-3">
        {ITEMS.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-[20px] bg-cream text-left ring-1 ring-line sm:mb-4"
            aria-label={`বড় করে দেখুন: ${p.alt}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              loading="lazy"
              decoding="async"
              className="h-auto w-full transition-transform duration-700 ease-out-quint group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-[13px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4 sm:text-[14px]">
              <span className="line-clamp-2">{p.alt}</span>
              <Expand className="size-4 shrink-0" aria-hidden="true" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="ছবির গ্যালারি"
            className="fixed inset-0 z-[150] flex flex-col bg-night/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6" onClick={(e) => e.stopPropagation()}>
              <p className="text-[14px] font-semibold text-white/70">
                {toBn(index + 1)} / {toBn(ITEMS.length)}
              </p>
              <button
                type="button"
                onClick={close}
                className="grid size-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/15 transition hover:bg-white/20"
                aria-label="বন্ধ করুন"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16">
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={cur.src}
                  src={cur.src}
                  alt={cur.alt}
                  className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  onClick={(e) => e.stopPropagation()}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) step(1);
                    else if (info.offset.x > 60) step(-1);
                  }}
                />
              </AnimatePresence>
              {[
                [-1, ChevronLeft, "আগের ছবি", "left-2 sm:left-4"],
                [1, ChevronRight, "পরের ছবি", "right-2 sm:right-4"],
              ].map(([d, I, label, pos]) => (
                <button
                  key={d}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    step(d);
                  }}
                  className={`absolute top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition hover:bg-white/20 sm:grid ${pos}`}
                  aria-label={label}
                >
                  <I className="size-6" />
                </button>
              ))}
            </div>

            <p className="px-4 py-4 text-center text-[15px] text-white/80 sm:px-6" onClick={(e) => e.stopPropagation()}>
              {cur.alt}
              <span className="mt-1 block text-[12px] text-white/40 sm:hidden">বাম-ডানে সোয়াইপ করুন</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
