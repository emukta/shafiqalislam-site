import Link from "next/link";
import { Phone, MapPin, ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import Logo from "./Logo";
import { WhatsAppGlyph, FacebookGlyph } from "./Icon";
import { TOOLS } from "@/lib/tools";
import { SITE, waLink } from "@/lib/site";
import { toBn } from "@/lib/format";

const linkCls = "text-[15px] text-white/60 transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative isolate overflow-hidden bg-night text-white">
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,#000,transparent_60%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[-200px] -z-10 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(180_242_92/0.14),transparent)]" />

      {/* Closing CTA */}
      <div className="container-x border-b border-white/[0.08] py-16 text-center sm:py-24">
        <h2 className="display mx-auto max-w-3xl text-[36px] font-bold sm:text-6xl">
          কাজ শুরু করুন — <span className="text-gradient">এখনই, একদম ফ্রি।</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[17px] text-white/55">কোনো অ্যাকাউন্ট নেই, কোনো আপলোড নেই। টুল খুলুন আর কাজ সারুন।</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/#tools"
            className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-lime px-7 text-[16px] font-semibold text-night shadow-glow transition hover:bg-lime-deep"
          >
            সব টুল দেখুন <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/visit/"
            className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full px-7 text-[16px] font-semibold ring-1 ring-inset ring-white/20 transition hover:bg-white/[0.06]"
          >
            প্রজেক্ট ভিজিট বুক করুন
          </Link>
        </div>
      </div>

      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 py-14 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="col-span-2 lg:col-span-1">
          <Logo dark />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/55">
            সাধারণ মানুষের প্রতিদিনের কাজ সহজ করতে ফ্রি টুলস, আর প্রকৃতি, কৃষি ও অর্গানিক খাবারের ঠিকানা — প্রবাসী এগ্রো রিসোর্ট।{" "}
            <span className="text-lime">{SITE.tagline}</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={waLink("আসসালামু আলাইকুম, প্রবাসী এগ্রো রিসোর্ট সম্পর্কে জানতে চাই।")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-wa px-5 text-[15px] font-semibold text-white transition hover:brightness-95"
            >
              <WhatsAppGlyph className="size-5" /> হোয়াটসঅ্যাপ
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white/[0.06] px-5 text-[15px] font-semibold ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Phone className="size-4" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-white/40">টুলস</h3>
          <ul className="mt-5 grid gap-3">
            {TOOLS.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link href={`/tools/${t.slug}/`} className={linkCls}>
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold text-white/40">আরও</h3>
          <ul className="mt-5 grid gap-3">
            {TOOLS.slice(6).map((t) => (
              <li key={t.slug}>
                <Link href={`/tools/${t.slug}/`} className={linkCls}>
                  {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/visit/" className="text-[15px] font-semibold text-lime transition hover:text-white">
                প্রজেক্ট ভিজিট বুক করুন
              </Link>
            </li>
            <li>
              <Link href="/#why" className={linkCls}>
                প্রবাসী এগ্রো রিসোর্ট
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className={linkCls}>
                ছবির গ্যালারি
              </Link>
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 ${linkCls}`}>
                <FacebookGlyph className="size-4" /> প্রবাসী রিসোর্ট ফেসবুক <ArrowUpRight className="size-3.5" />
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-1.5 text-[15px] text-white/60">
                <MapPin className="size-4" /> {SITE.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="container-x select-none overflow-hidden" aria-hidden="true">
        <p className="bg-gradient-to-b from-white/[0.14] to-white/0 bg-clip-text text-center font-display text-[17vw] font-bold leading-[0.85] tracking-[-0.04em] text-transparent [font-stretch:88%] xl:text-[208px]">
          ShafiqalIslam
        </p>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-[13px] text-white/45 sm:flex-row sm:text-left">
          <p>© {toBn(year)} {SITE.name} — সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="inline-flex items-center gap-1.5">
            <Lock className="size-3.5 text-lime" /> সব টুল আপনার ব্রাউজারেই চলে — কোনো ফাইল সার্ভারে যায় না
          </p>
        </div>
      </div>
    </footer>
  );
}
