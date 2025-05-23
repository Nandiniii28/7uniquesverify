export default function HomeCTA() {
  return (
    <section className="bg-[#f6fafd] py-16 mt-14 rounded-lg">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 flex flex-col items-start max-w-lg">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#373533] mb-4">Start Your Journey With our team.</h2>
          <p className="text-[#595c5c] text-lg mb-8">We are passionate about transforming the way businesses communicate. Specializing in VOIP, telecom, and cloud.</p>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 rounded-lg bg-[#2dc1e3] text-white font-bold shadow hover:bg-[#79d9ef] transition"
          >
            Get Started
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="https://ext.same-assets.com/1049470090/3005603202.jpeg" alt="Team collaboration" className="rounded-xl shadow w-[340px] lg:w-[400px]" />
        </div>
      </div>
    </section>
  );
}
