// সব তথ্য এক জায়গায় — এখানে বদলালে পুরো সাইটে বদলাবে।
export const SITE = {
  name: "Shafiqal Islam",
  slug: "shafiqalislam",
  tagline: "মাটির কাছে, মানুষের পাশে।",
  phone: "01916803293",
  phoneDisplay: "০১৯১৬-৮০৩২৯৩",
  // হোয়াটসঅ্যাপ নাম্বার আন্তর্জাতিক ফরম্যাটে (৮৮০ + ০ বাদে)
  whatsapp: "8801916803293",
  // প্রবাসী রিসোর্টের ফেসবুক পেজ
  facebook: "https://www.facebook.com/ProbashiResortAgro",
  resortName: "প্রবাসী এগ্রো রিসোর্ট",
  address: "বানিয়াচং, আজমিরীগঞ্জ, হবিগঞ্জ",
  // এই সাইট যে ডোমেইনে হোস্ট করবেন (SEO ও sitemap এর জন্য) — নিজের ডোমেইন দিয়ে বদলে দিন
  url: "https://shafiqalislam.com",
};

export function waLink(text = "") {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
