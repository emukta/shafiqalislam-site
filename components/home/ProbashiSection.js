import { MapPin, Leaf, Fish, ArrowUpRight, Sun, CalendarCheck } from "lucide-react";
import Reveal from "../Reveal";
import { SectionHeading, Eyebrow } from "../ui";
import { WhatsAppGlyph, FacebookGlyph } from "../Icon";
import Gallery from "./Gallery";
import { SITE, waLink } from "@/lib/site";
import { PHOTOS, POND_FACTS, HIGHLIGHTS } from "@/lib/probashi";

const BN = ["০১", "০২", "০৩", "০৪", "০৫", "০৬", "০৭", "০৮"];

function Photo({ p, className = "", sizes, priority = false }) {
  return (
    <img
      src={p.src}
      alt={p.alt}
      width={p.w}
      height={p.h}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      className={`size-full object-cover ${className}`}
    />
  );
}

export default function ProbashiSection() {
  return (
    <>
      {/* Intro — photo mosaic */}
      <section id="why" className="scroll-mt-20 overflow-hidden border-t border-line bg-cream py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Eyebrow>{SITE.resortName}</Eyebrow>
              <h2 className="display mt-5 text-[34px] font-bold text-ink sm:text-5xl lg:text-[56px]">
                প্রকৃতির কোলে কৃষি, মাছ আর <span className="text-forest-600">অর্গানিক খাবারের</span> ঠিকানা
              </h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-lg text-[17px] leading-relaxed text-muted">
                হবিগঞ্জের হাওর অঞ্চলে বিশাল পুকুর, হাঁসের খামার, ফলের বাগান আর খোলা আকাশ — প্রবাসী রিসোর্ট এন্ড এগ্রো ইন্ডাস্ট্রি
                গড়ে উঠছে মাটি ও মানুষের কাছাকাছি থেকে।
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-paper px-3.5 py-1.5 text-[14px] font-semibold text-forest-700 ring-1 ring-line">
                <MapPin className="size-4" aria-hidden="true" /> {SITE.address}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-[260px_260px] lg:grid-rows-[300px_300px]">
            <Reveal className="relative overflow-hidden rounded-[28px] md:col-span-7 md:row-span-2">
              <div className="aspect-[4/3] md:aspect-auto md:h-full">
                <Photo p={PHOTOS.teamPondBank} sizes="(min-width:768px) 58vw, 100vw" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/80 via-night/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                <p className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[13px] font-semibold backdrop-blur">
                  <Leaf className="size-4 text-lime" aria-hidden="true" /> সবুজ, খোলা, প্রাকৃতিক
                </p>
                <p className="display mt-3 max-w-md text-[24px] font-bold leading-snug sm:text-[30px]">
                  শহরের কোলাহল থেকে দূরে, পুকুর পাড়ের শান্ত বাতাসে।
                </p>
              </div>
            </Reveal>

            {/* Pond facts card */}
            <Reveal delay={0.06} className="md:col-span-5">
              <div className="relative isolate flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-forest-900 p-6 text-white sm:p-7">
                <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_90%_10%,#000,transparent_70%)]" />
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[13px] font-semibold text-lime">পুকুর নং ৪</p>
                    <p className="display text-[26px] font-bold">রজনী গন্ধা</p>
                  </div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-lime text-night">
                    <Fish className="size-6" aria-hidden="true" />
                  </span>
                </div>
                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                  {POND_FACTS.map((f) => (
                    <div key={f.label}>
                      <dt className="sr-only">{f.label}</dt>
                      <dd className="display text-[22px] font-bold leading-tight sm:text-[26px]">{f.value}</dd>
                      <dd className="mt-1 text-[12px] leading-snug text-white/55 sm:text-[13px]">{f.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="grid grid-cols-2 gap-3 sm:gap-4 md:col-span-5">
              <div className="relative aspect-square overflow-hidden rounded-[24px] md:aspect-auto">
                <Photo p={PHOTOS.duck} sizes="(min-width:768px) 20vw, 50vw" />
                <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-[13px] font-semibold text-ink backdrop-blur">
                  হাঁস পালন প্রকল্প
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[24px] md:aspect-auto">
                <Photo p={PHOTOS.sunsetField} sizes="(min-width:768px) 20vw, 50vw" className="object-[50%_35%]" />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-paper/90 px-3 py-1 text-[13px] font-semibold text-ink backdrop-blur">
                  <Sun className="size-3.5 text-sun-deep" aria-hidden="true" /> সূর্যাস্ত
                </span>
              </div>
            </Reveal>
          </div>

          {/* Highlights */}
          <div className="mt-20 sm:mt-28">
            <SectionHeading eyebrow="কী কী আছে" title="এক জায়গায় খামার, প্রকৃতি আর অভিজ্ঞতা" size="md" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HIGHLIGHTS.map((h, i) => {
                const p = PHOTOS[h.photo];
                return (
                  <Reveal key={h.title} delay={(i % 3) * 0.07}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-paper ring-1 ring-line shadow-card">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Photo
                          p={p}
                          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                          className="transition-transform duration-700 ease-out-quint group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-night/70 px-3 py-1 text-[12px] font-semibold text-lime backdrop-blur">
                          {h.tag}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <span className="display text-[14px] font-semibold text-forest-600">{BN[i]}</span>
                        <h3 className="display mt-1 text-[22px] font-bold text-ink">{h.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted">{h.desc}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-20 bg-paper py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>ছবিতে প্রবাসী রিসোর্ট</Eyebrow>
              <h2 className="display mt-5 text-[34px] font-bold text-ink sm:text-5xl">খামার থেকে সরাসরি কিছু মুহূর্ত</h2>
            </div>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-fit items-center gap-2 rounded-full px-5 text-[15px] font-semibold text-ink ring-1 ring-inset ring-line-strong transition hover:bg-cream"
            >
              <FacebookGlyph className="size-5 text-[#1877f2]" /> ফেসবুকে আরও ছবি <ArrowUpRight className="size-4" />
            </a>
          </div>
          <Gallery />

          {/* Visit CTA */}
          <Reveal className="mt-20 sm:mt-28">
            <div className="relative isolate overflow-hidden rounded-[32px] bg-night text-white">
              <img
                src={PHOTOS.lake.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 -z-20 size-full object-cover opacity-40"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/30" />
              <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:p-16">
                <div>
                  <h2 className="display text-[32px] font-bold sm:text-5xl">
                    প্রবাসী রিসোর্টে আসুন — <span className="text-gradient">প্রকৃতিকে কাছ থেকে দেখুন</span>
                  </h2>
                  <p className="mt-4 max-w-xl text-[17px] text-white/70">
                    ভিজিট, অর্গানিক মাছ-হাঁস-ফল বা এগ্রো প্রকল্প নিয়ে যেকোনো প্রশ্ন — সরাসরি হোয়াটসঅ্যাপে জানতে চান।
                  </p>
                  <p className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] px-3 py-1.5 text-[14px] text-white/85 ring-1 ring-white/10">
                    <MapPin className="size-4 text-lime" /> {SITE.address}
                  </p>
                </div>
                <div className="grid gap-2.5">
                  <a
                    href="#visit"
                    className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-lime px-6 text-[17px] font-semibold text-night shadow-glow transition hover:bg-lime-deep active:scale-[0.98]"
                  >
                    <CalendarCheck className="size-5" /> প্রজেক্ট ভিজিট বুক করুন
                  </a>
                  <a
                    href={waLink("আসসালামু আলাইকুম, আমি প্রবাসী এগ্রো রিসোর্ট সম্পর্কে জানতে চাই।")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-wa px-4 font-semibold text-white transition hover:brightness-95"
                  >
                    <WhatsAppGlyph className="size-5" /> হোয়াটসঅ্যাপে কথা বলুন
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-4 font-semibold ring-1 ring-inset ring-white/25 transition hover:bg-white/[0.08]"
                  >
                    <FacebookGlyph className="size-5" /> ফেসবুক পেজ দেখুন
                  </a>
                  <a href={`tel:${SITE.phone}`} className="text-center text-[15px] font-semibold text-white/70 transition hover:text-white">
                    কল করুন: {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
