import { useState } from "react";

const faqs = [
  {
    q: "What is VOIP, and how does it work?",
    a: "VOIP offers several advantages over traditional phone systems, including cost-effectiveness, flexibility, and advanced features like video conferencing and call forwarding.",
  },
  {
    q: "How is VOIP better than traditional phone systems?",
    a: "VOIP offers several advantages over traditional phone systems, including cost-effectiveness, flexibility, and advanced features like video conferencing and call forwarding.",
  },
  {
    q: "Can I keep my existing phone number with ZaiVOIP?",
    a: "Yes! VOIP allows you to port your number for seamless transition and continuity.",
  },
  {
    q: "Is VOIP secure for business communication?",
    a: "VOIP uses encrypted channels and security protocols to keep your communication safe.",
  },
  {
    q: "What kind of support does ZaiVOIP provide?",
    a: "We offer 24/7 chat, phone, and email support to all customers.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-7xl mx-auto px-6 pt-16 sm:py-20 md:pt-24 lg:pt-28 flex flex-col md:flex-row gap-12 md:gap-24">
      <section className="md:w-1/3 flex flex-col gap-6">
        <p className="font-semibold text-sm leading-5">FAQ</p>
        <h1 className="font-semibold text-5xl leading-[3.5rem] -tracking-[0.02em]">
          Frequently Asked <br />
          Questions!
        </h1>
        <p className="text-gray-600 text-base leading-7 max-w-xs">
          Our clients’ satisfaction is at the heart of everything we do. We take
          pride delivering communication.
        </p>
        <button
          className="bg-[#2dc1e3] text-white font-semibold text-base leading-6 rounded-full px-8 py-3 w-max hover:bg-[#61e2ff] transition"
          type="button"
        >
          Know More
        </button>
      </section>
      <section className="md:w-2/3 flex flex-col gap-6">
        <div className="space-y-4 mb-10">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="">
              <button
                className="w-full flex justify-between items-center border border-gray-200 rounded-xl px-6 py-5 cursor-pointer"
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                {faq.q}
                <span className={open === idx ? 'rotate-180 transition' : 'transition'}>
                  ▼
                </span>
              </button>
              {open === idx && (
                <div className="px-6 py-4 bg-white text-[#595c5c] text-base">
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
