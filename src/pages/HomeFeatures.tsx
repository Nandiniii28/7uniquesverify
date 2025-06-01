export default function HomeFeatures() {
  return (
    <section className="bg-[#f6fafd] py-16 section our-process">
      <div className="mx-auto pb-16 pt-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <p className="text-[20px] text-gray-600 mb-2 tracking-wide">ABOUT US</p>
          <p className="text-[30px] sm:text-[20px] leading-[1.3] text-black max-w-[600px] mx-auto">
            We specialize
            <span className="font-bold">
              in delivering innovative VOIP, telecom, &amp; cloud
            </span>
            <span className="title-img mx-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            solutions designed enhance the way businesses connect and communicate.
            <br />
            With focus on reliability
            <span className="title-img _2 mx-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            scalability.
          </p>
        </div>

        {/* Features Section */}
        <div className="border-t border-dashed border-gray-300 pt-12 flex flex-col md:flex-row md:space-x-12 gap-[24px] px-5">
          {/* Left Column */}
          <div
            className="md:w-1/3 mb-10 md:mb-0"
            style={{
              borderRight: "1px dashed #d1d5db",
            }}
            data-aos="fade-right"
          >
            <p className="text-[10px] text-gray-600 mb-2 tracking-wide">OUR FEATURES</p>
            <h2 className="text-[41px] sm:text-[22px] leading-tight">
              Features Designed to Elevate Communication Experience Success.
            </h2>
            <button className="mt-6 bg-[#2dc1e3] text-white text-[16px] px-5 py-2 rounded-full hover:bg-yellow-300 transition">
              Get Started
            </button>
          </div>

          {/* Scrollable Card Grid */}
          <div
            className="md:w-2/3"
            data-aos="fade-left"
            style={{
              height: "calc(100vh - 176px)",
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {[
                {
                  icon: "bi bi-cash-coin",
                  title: "Lending",
                  desc:
                    "Facilitate quick and secure loan approvals by verifying applicant identities and financial information.",
                },
                {
                  icon: "bi bi-bank",
                  title: "Banking",
                  desc:
                    "Strengthen fraud prevention measures and comply with KYC regulations through robust identity verification.",
                },
                {
                  icon: "bi bi-emoji-laughing",
                  title: "Staffing & Recruitment",
                  desc:
                    "Improves hiring decisions with background verification and streamlines onboarding.",
                },
                {
                  icon: "bi bi-bounding-box",
                  title: "Logistics",
                  desc:
                    "Enhance package delivery security by verifying user identities during login.",
                },
                {
                  icon: "bi bi-cart-check",
                  title: "FMCG/ FMCD",
                  desc:
                    "Enhance security and compliance by verifying worker identities and mitigating risks.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center p-5"
                >
                  <div className="our-features-icon-box mb-3">
                    <i className={`${feature.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="heading mb-2">{feature.title}</h3>
                  <p className="our-features-icon-details text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
