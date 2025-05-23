
export default function AboutUs() {
  return (
    <>
      <main>
        {/* Hero Title */}
        <section className="bg-[#f9fbfb] py-20 px-6 section our-process">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#373533] mb-5">About Us</h1>
            <p className="text-lg md:text-xl text-[#9c9e99] mb-8">
              We specialize in delivering innovative VOIP, telecom, and cloud solutions designed to enhance the way businesses connect and communicate. <br />With a focus on reliability, scalability, and technology.
            </p>
            <a href="/contact-us" className="inline-block px-8 py-3 bg-[#2dc1e3] text-[#373533] font-bold rounded-lg shadow hover:bg-[#79d9ef] transition">Contact Us</a>
          </div>
        </section>
        {/* Company Offerings/Highlights */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#373533] mb-5">Empowering Global Communication</h2>
              <p className="text-[#595c5c] mb-7">ZaiVOIP enables businesses to scale and modernize their communication with best-in-class VoIP, telecom, and modern cloud solutions. Our dedicated team leverages advanced technology to develop scalable, secure, and effective solutions for diverse organizations worldwide.</p>
              <ul className="space-y-3">
                <li className="flex items-center"><span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#2dc1e3]" /> Reliable global VOIP backed by secure cloud infrastructure</li>
                <li className="flex items-center"><span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#2dc1e3]" /> Custom communication solutions for businesses of any size</li>
                <li className="flex items-center"><span className="inline-block w-3 h-3 mr-3 rounded-full bg-[#2dc1e3]" /> Responsive support, innovative features, and seamless integration</li>
              </ul>
            </div>
            {/* Right image (use a representative business/technology image) */}
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=450&q=80" alt="Modern telecom office" className="rounded-xl shadow-md w-[360px]" />
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="bg-[#f9fbfb] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#373533] text-center mb-10">Why Choose ZaiVOIP?</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
                <img src="https://ext.same-assets.com/1049470090/451744652.svg" alt="Secure" className="mb-5 h-10" />
                <h3 className="font-bold text-lg mb-2 text-[#373533]">Technological Excellence</h3>
                <p className="text-[#595c5c]">Our services are built around reliability, using leading-edge tech for connectivity.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
                <img src="https://ext.same-assets.com/1049470090/60733936.svg" alt="Innovative" className="mb-5 h-10" />
                <h3 className="font-bold text-lg mb-2 text-[#373533]">Innovative Solutions</h3>
                <p className="text-[#595c5c]">We’re committed to introducing scalable, future-ready, and tailored solutions.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center text-center border border-[#e7e7eb]">
                <img src="https://ext.same-assets.com/1049470090/2604988885.svg" alt="Support" className="mb-5 h-10" />
                <h3 className="font-bold text-lg mb-2 text-[#373533]">Dedicated Support</h3>
                <p className="text-[#595c5c]">Our experts are available 24/7—your business is never alone through your digital transformation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
