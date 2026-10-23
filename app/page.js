import Link from "next/link";
import { Lock, Zap, Smartphone, Monitor, Tablet, ArrowUpRight, Check, ShieldCheck, MessageCircle } from "lucide-react";
import Hero from "@/components/home/Hero";
import ToolsGrid from "@/components/home/ToolsGrid";
import Faq from "@/components/home/Faq";
import ProbashiSection from "@/components/home/ProbashiSection";
import VisitSection from "@/components/home/VisitSection";
import Reveal from "@/components/Reveal";
import { SectionHeading, Eyebrow } from "@/components/ui";
import { WhatsAppGlyph } from "@/components/Icon";
import { SITE, waLink } from "@/lib/site";

function Bento() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="কেন এই টুলস"
          title="দ্রুত, প্রাইভেট আর চিরকাল ফ্রি"
          desc="অন্য সাইটে ছবি আপলোড করতে হয়, অপেক্ষা করতে হয়, লিমিট থাকে। এখানে কোনোটাই নেই।"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6 lg:grid-rows-[auto_auto]">
          {/* Privacy — hero tile */}
          <Reveal className="md:col-span-6 lg:col-span-3 lg:row-span-2">
            <div className="relative isolate flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] bg-forest-900 p-7 text-white sm:p-9">
              <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_70%_40%,#000,transparent_70%)]" />
              <div className="pointer-events-none absolute right-[-60px] top-[-40px] -z-10 grid size-[360px] place-items-center" aria-hidden="true">
                {[1, 0.78, 0.56].map((s, i) => (
                  <span
                    key={i}
                    className="absolute rounded-full ring-1 ring-lime/20"
                    style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
                  />
                ))}
                <span className="grid size-24 place-items-center rounded-[28px] bg-lime text-night shadow-glow">
                  <Lock className="size-10" strokeWidth={2.2} />
                </span>
              </div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.07] px-3 py-1 text-[13px] font-semibold text-lime ring-1 ring-white/10">
                <ShieldCheck className="size-4" aria-hidden="true" /> সম্পূর্ণ প্রাইভেট
              </p>
              <div className="mt-36 sm:mt-48">
                <h3 className="display text-[30px] font-bold sm:text-[40px]">আপনার ফাইল, আপনার ডিভাইসেই থাকে।</h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-white/60">
                  ফাইল কোনো সার্ভারে যায় না। সব প্রসেসিং আপনার ব্রাউজারেই হয় — তাই ব্যক্তিগত ছবিও সম্পূর্ণ নিরাপদ।
                </p>
              </div>
            </div>
          </Reveal>

          {/* Free */}
          <Reveal delay={0.06} className="md:col-span-3 lg:col-span-1">
            <div className="flex h-full flex-col justify-between rounded-[28px] bg-lime p-7 text-night">
              <p className="text-[14px] font-semibold text-night/70">চিরকাল ফ্রি</p>
              <div>
                <p className="display text-[72px] font-bold leading-none sm:text-[84px]">৳০</p>
                <p className="mt-3 text-[15px] leading-relaxed text-night/75">কোনো লুকানো চার্জ, লিমিট বা সাবস্ক্রিপশন নেই।</p>
              </div>
            </div>
          </Reveal>

          {/* Speed */}
          <Reveal delay={0.1} className="md:col-span-3 lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-8 rounded-[28px] bg-paper p-7 ring-1 ring-line shadow-card">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-semibold text-muted">চোখের পলকে</p>
                <span className="grid size-11 place-items-center rounded-full bg-sun-soft text-sun-deep">
                  <Zap className="size-5" fill="currentColor" aria-hidden="true" />
                </span>
              </div>
              <div>
                <div className="flex items-end gap-2">
                  <p className="display text-[56px] font-bold leading-none text-ink">০</p>
                  <p className="pb-1.5 text-[17px] font-semibold text-ink">সেকেন্ড আপলোড</p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">আপলোড-ডাউনলোডের ঝামেলা নেই, তাই কাজ হয় মুহূর্তেই।</p>
              </div>
            </div>
          </Reveal>

          {/* Devices */}
          <Reveal delay={0.14} className="md:col-span-6 lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-8 overflow-hidden rounded-[28px] bg-paper p-7 ring-1 ring-line shadow-card sm:flex-row sm:items-end">
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-muted">যেকোনো ডিভাইসে</p>
                <h3 className="display mt-3 text-[28px] font-bold text-ink">মোবাইল থেকে কম্পিউটার — সব জায়গায় সমান সহজ।</h3>
              </div>
              <div className="flex shrink-0 items-end gap-2" aria-hidden="true">
                {[
                  [Smartphone, "h-24 w-14"],
                  [Tablet, "h-28 w-20"],
                  [Monitor, "h-32 w-28"],
                ].map(([I, sz], i) => (
                  <span
                    key={i}
                    className={`grid ${sz} place-items-center rounded-2xl ${i === 0 ? "bg-forest-900 text-lime" : "bg-cream text-forest-700 ring-1 ring-line"}`}
                  >
                    <I className="size-6" />
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Bento />
      <ToolsGrid />

      <ProbashiSection />

      <VisitSection />

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading align="left" size="md" eyebrow="প্রশ্নোত্তর" title="প্রবাসী রিসোর্ট, এগ্রো ফার্ম ও অর্গানিক খাবার" desc="রিসোর্ট, খামার আর অর্গানিক খাবার নিয়ে সাধারণ জিজ্ঞাসার উত্তর।" />
            <div className="mt-8 rounded-[24px] bg-paper p-6 ring-1 ring-line shadow-card">
              <span className="grid size-11 place-items-center rounded-full bg-forest-900 text-lime">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <p className="display mt-4 text-[20px] font-bold text-ink">আরও প্রশ্ন আছে?</p>
              <p className="mt-1 text-[15px] text-muted">সরাসরি আমাদের সাথে কথা বলুন — দ্রুত উত্তর পাবেন।</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={waLink("আসসালামু আলাইকুম, প্রবাসী এগ্রো রিসোর্ট নিয়ে একটা প্রশ্ন ছিল।")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-wa px-5 text-[15px] font-semibold text-white transition hover:brightness-95"
                >
                  <WhatsAppGlyph className="size-5" /> হোয়াটসঅ্যাপ
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-1.5 rounded-full px-5 text-[15px] font-semibold text-ink ring-1 ring-inset ring-line-strong transition hover:bg-cream"
                >
                  ফেসবুক পেজ <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}
