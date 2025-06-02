import { useState } from "react";

const faqs = [
  {
    q: "What is VOIP and how can it benefit my business?",
    a: "VOIP (Voice over Internet Protocol) lets you make calls using the internet instead of traditional phone lines. It's cost-effective, offers better call quality, and works perfectly with 7Unique Verify’s cloud telephony solutions.",
  },
  {
    q: "Can VOIP integrate with 7Unique Verify’s APIs and dashboards?",
    a: "Yes, 7Unique Verify’s systems are designed to support seamless VOIP integration — whether it's for lead verification, number masking, or CRM syncing.",
  },
  {
    q: "Can I port my existing number while switching to VOIP with 7Unique Verify?",
    a: "Bilkul. Aap apna purana mobile ya landline number easily 7Unique Verify ke VOIP solution mein port kara sakte ho bina kisi rukawat ke.",
  },
  {
    q: "Is communication secure on VOIP networks?",
    a: "Yes, 7Unique Verify uses encrypted connections and secure infrastructure to protect your business calls and client data from any unauthorized access.",
  },
  {
    q: "What kind of support do I get with 7Unique Verify VOIP services?",
    a: "You get 24x7 support via chat, email, and call from our dedicated technical team. We also help you with setup, integration, and usage training.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 sm:py-20 md:pt-24 lg:pt-28 flex flex-col md:flex-row gap-12 md:gap-24">
      {/* Left Section */}
      <section className="md:w-1/3 flex flex-col gap-6">
        <p className="font-semibold text-sm text-[#2dc1e3] uppercase">FAQ</p>
        <h1 className="font-semibold text-5xl leading-[3.5rem] text-[#373533]">
          Frequently Asked <br /> Questions
        </h1>
        <p className="text-gray-600 text-base leading-7 max-w-xs">
          We’ve answered some common doubts to help you understand how 7Unique Verify's VOIP & telecom services can simplify communication for your business.
        </p>
        <button
          className="bg-[#2dc1e3] text-white font-semibold text-base rounded-full px-8 py-3 w-max hover:bg-[#61e2ff] transition"
          type="button"
        >
          Know More
        </button>
      </section>

      {/* Right Section - FAQ Accordion */}
      <section className="md:w-2/3 flex flex-col gap-6">
        <div className="space-y-4 mb-10">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-[#373533] text-lg cursor-pointer focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                {faq.q}
                <span className={`text-sm transition-transform ${open === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-[#595c5c] text-base bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
