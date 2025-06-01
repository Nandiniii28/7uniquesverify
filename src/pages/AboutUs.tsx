export default function AboutUs() {
  return (
    <>
      <main>
        {/* Hero Title */}
        <section className="bg-[#f9fbfb] py-20 px-6 section our-process">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#373533] mb-5">About Us</h1>
            <p className="text-lg md:text-xl text-[#9c9e99] mb-8">
              At 7Unique Verify, we build intelligent API-based identity solutions that help businesses simplify customer verification, KYC, and onboarding—securely and efficiently.
            </p>
            <a href="/contact-us" className="inline-block px-8 py-3 bg-[#2dc1e3] text-[#373533] font-bold rounded-lg shadow hover:bg-[#79d9ef] transition">Contact Us</a>
          </div>
        </section>

        {/* Company Offerings/Highlights */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#373533] mb-5">Simplifying Digital Identity for India</h2>
              <p className="text-[#595c5c] mb-7">
                7Unique Verify empowers businesses with secure, scalable identity verification tools—from PAN, Aadhaar, and bank verification to enterprise onboarding APIs. Built for startups, banks, fintechs, and enterprise use cases.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#2dc1e3]" /> Real-time identity verification with 99.9% accuracy</li>
                <li className="flex items-center"><span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#2dc1e3]" /> Modular APIs built for scale, compliance, and ease</li>
                <li className="flex items-center"><span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#2dc1e3]" /> Responsive support, fast deployment, and plug-and-play setup</li>
              </ul>
            </div>
            {/* Right image */}
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=450&q=80" alt="Digital KYC platform" className="rounded-xl shadow-md w-[360px]" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[#f9fbfb] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#373533] text-center mb-10">Why Choose 7Unique Verify?</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
                <img src="https://ext.same-assets.com/1049470090/451744652.svg" alt="Secure" className="mb-5 h-10" />
                <h3 className="font-bold text-lg mb-2 text-[#373533]">Secure & Compliant</h3>
                <p className="text-[#595c5c]">We follow strict data protection standards to ensure your verifications are secure and compliant.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
                <img src="https://ext.same-assets.com/1049470090/60733936.svg" alt="Innovative" className="mb-5 h-10" />
                <h3 className="font-bold text-lg mb-2 text-[#373533]">Fast & Future-Ready</h3>
                <p className="text-[#595c5c]">Our no-code-ready APIs and modern infrastructure help you go live faster with confidence.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
                <img src="https://ext.same-assets.com/1049470090/2604988885.svg" alt="Support" className="mb-5 h-10" />
                <h3 className="font-bold text-lg mb-2 text-[#373533]">Expert Support</h3>
                <p className="text-[#595c5c]">From integration to scaling, our dedicated support team is available 24/7 to guide you every step.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
