import { Check, MapPin } from "lucide-react";
import Reveal from "../Reveal";
import { Eyebrow } from "../ui";
import VisitForm from "../VisitForm";
import { SITE } from "@/lib/site";
import { PHOTOS } from "@/lib/probashi";

export const VISIT_POINTS = [
  "পুকুর পাড়ের সবুজ পথে হাঁটা",
  "নৌকায় করে পুকুরে ঘুরে বেড়ানো",
  "হাঁস পালন ও মাছ চাষ নিজের চোখে দেখা",
  "পেঁপে, কলা, নারকেল আর আমের বাগান",
];

export default function VisitSection() {
  return (
    <section id="visit" className="relative isolate scroll-mt-20 overflow-hidden bg-night py-20 text-white sm:py-28">
      <img
        src={PHOTOS.boat.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-night via-night/90 to-forest-900/80" />
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow dark>{SITE.resortName}</Eyebrow>
          <h2 className="display mt-5 text-[36px] font-bold sm:text-5xl lg:text-[60px]">
            একদিন চলে আসুন — <span className="text-gradient">প্রজেক্ট ঘুরে দেখুন</span>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/65 sm:text-lg">
            শহরের ব্যস্ততা ছেড়ে খোলা আকাশ, পুকুরের বাতাস আর খামারের জীবন — পরিবার বা বন্ধুদের নিয়ে একটা দিন কাটান প্রকৃতির মাঝে।
          </p>
          <ul className="mt-9 grid gap-px overflow-hidden rounded-2xl bg-white/[0.08] ring-1 ring-white/[0.08]">
            {VISIT_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-4 bg-night/70 px-5 py-4 text-[16px] text-white/85 backdrop-blur">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-lime text-night">
                  <Check className="size-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              ["১ মিনিট", "ফর্ম পূরণে"],
              ["WhatsApp", "এ কনফার্মেশন"],
              ["হবিগঞ্জ", "বানিয়াচং–আজমিরীগঞ্জ"],
            ].map(([a, b]) => (
              <div key={b}>
                <p className="display text-[22px] font-bold text-white sm:text-[30px]">{a}</p>
                <p className="text-[13px] text-white/50">{b}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-px rounded-[30px] bg-gradient-to-b from-lime/40 via-white/10 to-transparent" aria-hidden="true" />
            <div className="relative rounded-[29px] bg-paper p-5 text-ink shadow-[0_40px_100px_-30px_rgb(0_0_0/0.8)] sm:p-8">
              <div className="mb-6 border-b border-line pb-5">
                <p className="display text-[24px] font-bold text-ink">প্রজেক্ট ভিজিট বুক করুন</p>
                <p className="mt-1 inline-flex items-center gap-1 text-[14px] text-muted">
                  <MapPin className="size-4" aria-hidden="true" /> {SITE.address}
                </p>
              </div>
              <VisitForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
