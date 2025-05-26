export default function HomeProcess() {
  return (
    <section className="bg-[#f6fafd] py-16 section our-process pb-16 section our-process">
      <section className="relative max-w-7xl mx-auto px-6  ">
        <div className="max-w-4xl mx-auto text-center"  data-aos="zoom-in-down">
          <p className="text-xs font-semibold text-[#0f172a] mb-2 tracking-widest">
            OUR PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f172a] leading-tight mb-4">
          Our Streamlined Process
<br className="hidden sm:block" />
for Seamless Verification.
          </h2>
          <p className="text-sm text-[#475569] max-w-xl mx-auto">
          The power of real-time identity verification and compliance APIs to deliver secure, paperless solutions for businesses of all sizes.
          </p>
        </div>
        <nav
          aria-label="Process steps"
          className="navborder max-w-5xl mx-auto mt-12 flex justify-between text-xs font-semibold text-[#0f172a]"
        >
          {/* <div className="our-process-border"></div> */}
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 01
            </span>
          </div>
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 02
            </span>
          </div>
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 03
            </span>
          </div>
          <div className="relative flex-1 flex justify-center">
            <span className="relative z-10 bg-[#f3f8fb] border border-dashed border-[#cbd5e1] rounded-full px-5 py-1">
              Step 04
            </span>
          </div>
        </nav>
        <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"  data-aos="zoom-out" >
          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#2dc1e3] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img
                alt="Icon showing a bar chart with a person figure representing consultation and analysis"
                className="w-6 h-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/7c0616f1-8fd3-4b26-5ae4-118f5f04b376.jpg"
                width="24"
              />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Consultation &amp; Analysis
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Begin by understanding your business and requirements,
              communication challenges, and future goals.
            </p>
          </article>
          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#2dc1e3] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img
                alt="Icon showing a hand holding a checkmark representing custom solution design"
                className="w-6 h-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/5f20976f-5215-4f72-d3d5-cdd03ebffbb2.jpg"
                width="24"
              />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Custom Solution Design
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Business communication with Unified Communications from ZaiVOIP.
              Our solution integrates voice, video.
            </p>
          </article>
          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#2dc1e3] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img
                alt="Icon showing a document with a checkmark representing testing and optimization"
                className="w-6 h-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/1ab88135-1438-489e-2f2d-f4de4c5975a3.jpg"
                width="24"
              />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Testing &amp; Optimization
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
            Simplify and streamline your business operations with 7UniqueVerify. Our solution makes identity verification fast, secure, and fully compliant.

            </p>
          </article>
          <article className="bg-white rounded-xl p-8 flex flex-col items-center text-center">
            <div className="bg-[#2dc1e3] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <img
                alt="Icon showing a gear representing ongoing support"
                className="w-6 h-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/9eccb7ed-b76e-4975-caf0-7479bdfc5c7c.jpg"
                width="24"
              />
            </div>
            <h3 className="font-semibold text-[#0f172a] mb-2 text-lg">
              Ongoing Support
            </h3>
            <p className="text-[#475569] text-sm leading-relaxed">
            Our solution integrates identity verification, document checks, and compliance workflows into a single, seamless API platform.

            </p>
          </article>
        </div>
      </section>
    </section>
  );
}
