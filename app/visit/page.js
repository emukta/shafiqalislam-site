import { ClipboardCheck, MessageCircle, MapPin, Phone } from "lucide-react";
import VisitForm from "@/components/VisitForm";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/ui";
import { SITE } from "@/lib/site";
import { PHOTOS } from "@/lib/probashi";

export const metadata = {
  title: "প্রজেক্ট ভিজিট বুক করুন",
  description: "প্রবাসী এগ্রো রিসোর্ট (বানিয়াচং, আজমিরীগঞ্জ, হবিগঞ্জ) ঘুরে দেখতে ১ মিনিটে ভিজিট বুক করুন — কনফার্মেশন হোয়াটসঅ্যাপে।",
  alternates: { canonical: "/visit/" },
};

const STEPS = [
  { icon: ClipboardCheck, title: "তথ্য দিন", desc: "নাম, মোবাইল আর কবে আসবেন — ব্যস।" },
  { icon: MessageCircle, title: "হোয়াটসঅ্যাপে কনফার্ম", desc: "আমরা সময় ও লোকেশন জানিয়ে দেব।" },
  { icon: MapPin, title: "চলে আসুন", desc: "প্রকৃতির মাঝে কাটান একটা সুন্দর দিন।" },
];

export default function VisitPage() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-8 sm:pt-14">
      <div className="grid-lines-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_70%_at_20%_0%,#000_30%,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-40 -top-60 -z-10 h-[520px] w-[820px] rounded-full bg-[radial-gradient(closest-side,rgb(180_242_92/0.3),transparent)]" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <Reveal>
            <Eyebrow>{SITE.resortName}</Eyebrow>
            <h1 className="display mt-5 text-[40px] font-bold text-ink sm:text-6xl">
              প্রজেক্ট{" "}
              <span className="whitespace-nowrap text-forest-600 underline decoration-lime decoration-[8px] underline-offset-[12px]">ভিজিট</span>{" "}
              বুক করুন
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted sm:text-lg">
              পুকুর, নৌকা, হাঁসের খামার আর ফলের বাগান — নিজের চোখে দেখতে আজই ভিজিট বুক করুন।
            </p>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 overflow-hidden rounded-[24px] ring-1 ring-line">
            <img src={PHOTOS.teamPondBank.src} alt={PHOTOS.teamPondBank.alt} width={PHOTOS.teamPondBank.w} height={PHOTOS.teamPondBank.h} className="aspect-[16/9] w-full object-cover" />
          </Reveal>
          <ol className="mt-4 grid gap-px overflow-hidden rounded-[24px] bg-line ring-1 ring-line sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.1 + i * 0.06} className="flex gap-3 bg-paper p-4 sm:flex-col">
                <span className="relative grid size-11 shrink-0 place-items-center rounded-full bg-forest-900 text-lime">
                  <s.icon className="size-5" aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-lime text-[11px] font-bold text-night ring-2 ring-paper">
                    {["১", "২", "৩"][i]}
                  </span>
                </span>
                <div>
                  <h2 className="display text-[18px] font-bold text-ink">{s.title}</h2>
                  <p className="text-[14px] text-muted">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <a href={`tel:${SITE.phone}`} className="mt-6 inline-flex h-12 items-center gap-2 rounded-full px-5 font-semibold text-ink ring-1 ring-inset ring-line-strong transition hover:bg-paper">
            <Phone className="size-4" /> কল করুন: {SITE.phoneDisplay}
          </a>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[28px] bg-paper p-5 ring-1 ring-line shadow-lift sm:p-8">
            <p className="display text-[24px] font-bold text-ink">ভিজিটের তথ্য দিন</p>
            <p className="mb-6 mt-1 border-b border-line pb-5 text-[14px] text-muted">সাবমিট করলে হোয়াটসঅ্যাপ খুলবে, শুধু Send চাপুন।</p>
            <VisitForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
