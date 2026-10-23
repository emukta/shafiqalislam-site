"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PartyPopper, RotateCcw, ArrowRight } from "lucide-react";
import { Button } from "./ui";
import { WhatsAppGlyph } from "./Icon";
import { useToast } from "./Providers";
import { SITE, waLink } from "@/lib/site";
import { toEnDigits } from "@/lib/format";

const PEOPLE = ["১–২ জন", "৩–৫ জন", "৬–১০ জন", "১০+ জন"];
const TIMES = ["সকাল", "দুপুর", "বিকেল"];

function normalizePhone(raw) {
  const d = toEnDigits(raw).replace(/\D/g, "");
  if (/^01[3-9]\d{8}$/.test(d)) return d;
  if (/^8801[3-9]\d{8}$/.test(d)) return "0" + d.slice(3);
  return null;
}

function today() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function bnDate(iso) {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("bn-BD", { day: "numeric", month: "long", year: "numeric", weekday: "long" });
  } catch {
    return iso;
  }
}

function Chips({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="label">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(on ? "" : o)}
              className={`min-h-11 rounded-full px-4 text-[15px] font-semibold ring-1 ring-inset transition-all active:scale-95 ${
                on ? "bg-forest-700 text-white ring-forest-700" : "bg-paper text-forest-800 ring-line-strong hover:ring-forest-600"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function VisitForm() {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", phone: "", date: "", people: "", time: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const setVal = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const set = (k) => (e) => setVal(k, e.target.value);

  function validate() {
    const er = {};
    if (!form.name.trim()) er.name = "আপনার নাম লিখুন";
    if (!normalizePhone(form.phone)) er.phone = "সঠিক নাম্বার দিন (যেমন: 01XXXXXXXXX)";
    if (!form.date) er.date = "কবে আসতে চান, তারিখ দিন";
    setErrors(er);
    if (Object.keys(er).length) {
      toast("লাল চিহ্নিত ঘরগুলো পূরণ করুন", "error");
      document.getElementById(`visit-${Object.keys(er)[0]}`)?.focus();
      return false;
    }
    return true;
  }

  function buildMessage() {
    const lines = [
      `*প্রজেক্ট ভিজিট বুকিং — ${SITE.resortName}*`,
      "",
      `👤 নাম: ${form.name.trim()}`,
      `📱 মোবাইল: ${normalizePhone(form.phone)}`,
      `📅 তারিখ: ${bnDate(form.date)}`,
    ];
    if (form.time) lines.push(`🕒 সময়: ${form.time}`);
    if (form.people) lines.push(`👥 কতজন: ${form.people}`);
    lines.push("", "প্রজেক্ট ঘুরে দেখতে চাই, অনুগ্রহ করে কনফার্ম করবেন।");
    return lines.join("\n");
  }

  function send(e) {
    e?.preventDefault();
    if (!validate()) return;
    window.open(waLink(buildMessage()), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center py-8 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
            className="grid size-20 place-items-center rounded-full bg-sun-soft text-sun-deep"
          >
            <PartyPopper className="size-9" />
          </motion.div>
          <h3 className="mt-5 font-display text-2xl font-bold text-forest-900">প্রায় শেষ!</h3>
          <p className="mt-2 max-w-sm text-[15px] text-muted">
            হোয়াটসঅ্যাপে আপনার বুকিং মেসেজ রেডি। শুধু <b className="text-forest-800">Send</b> চাপুন — আমরা দ্রুত কনফার্ম করে জানাব।
          </p>
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <Button variant="wa" onClick={send}>
              <WhatsAppGlyph /> আবার হোয়াটসঅ্যাপ খুলুন
            </Button>
            <Button variant="outline" onClick={() => setSent(false)}>
              <RotateCcw className="size-4" /> তথ্য এডিট করুন
            </Button>
          </div>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={send} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="visit-name" label="আপনার নাম" error={errors.name}>
              <input id="visit-name" className="field" value={form.name} onChange={set("name")} placeholder="যেমন: রহিম উদ্দিন" autoComplete="name" aria-invalid={!!errors.name} />
            </Field>
            <Field id="visit-phone" label="মোবাইল / হোয়াটসঅ্যাপ" error={errors.phone}>
              <input id="visit-phone" className="field" value={form.phone} onChange={set("phone")} placeholder="01XXXXXXXXX" inputMode="tel" autoComplete="tel" aria-invalid={!!errors.phone} />
            </Field>
          </div>

          <Field id="visit-date" label="কবে আসতে চান?" error={errors.date}>
            <input id="visit-date" type="date" min={today()} className="field" value={form.date} onChange={set("date")} aria-invalid={!!errors.date} />
          </Field>

          <Chips label="কোন সময়ে? (ঐচ্ছিক)" options={TIMES} value={form.time} onChange={(v) => setVal("time", v)} />
          <Chips label="কতজন আসবেন? (ঐচ্ছিক)" options={PEOPLE} value={form.people} onChange={(v) => setVal("people", v)} />

          <Button type="submit" variant="wa" size="lg" className="mt-1 w-full">
            <WhatsAppGlyph /> ভিজিট বুক করুন
          </Button>
          <a
            href={waLink("আসসালামু আলাইকুম, প্রবাসী এগ্রো রিসোর্ট প্রজেক্ট ভিজিট করতে চাই।")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-1.5 text-[15px] font-semibold text-forest-700 hover:underline"
          >
            সরাসরি হোয়াটসঅ্যাপ ({SITE.phoneDisplay})
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label} <span className="text-danger">*</span>
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-1.5 text-[13px] font-medium text-danger"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
