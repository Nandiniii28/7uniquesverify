import type React from "react";

const HomeFeatures: React.FC = () => {
  return (
    <section className="bg-[#f6fafd] py-16 section our-process">
      <div className="mx-auto pb-16 pt-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <p className="text-[20px] text-gray-600 mb-2 tracking-wide">ABOUT US</p>
          <p className="text-[30px] sm:text-[20px] leading-[1.3] text-black max-w-[600px] mx-auto">
            We at <span className="font-bold text-[#2dc1e3]">7Unique Verify</span> specialize
            in delivering innovative <strong>VOIP, telecom, and cloud</strong> solutions —
            designed to enhance the way businesses connect and communicate.
            <br />
            With a strong focus on <strong>reliability</strong> and{" "}
            <strong>scalability</strong>, we help teams transform their communication experience.
          </p>
        </div>

        {/* Features Section */}
        <div className="border-t border-dashed border-gray-300 pt-12 flex flex-col md:flex-row md:space-x-12 gap-[24px] px-5">
          {/* Left Column */}
          <div
            className="md:w-1/3 mb-10 md:mb-0"
            style={{ borderRight: "1px dashed #d1d5db" }}
            data-aos="fade-right"
          >
            <p className="text-[10px] text-gray-600 mb-2 tracking-wide">OUR FEATURES</p>
            <h2 className="text-[41px] sm:text-[22px] leading-tight">
              Features Designed to Elevate <br /> Your Communication Experience
            </h2>
            <button className="mt-6 bg-[#2dc1e3] text-white text-[16px] px-5 py-2 rounded-full hover:bg-yellow-300 transition ease-in-out duration-300">
              Explore More
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
                    "Facilitate fast and secure loan approvals using identity verification and financial data APIs.",
                },
                {
                  icon: "bi bi-bank",
                  title: "Banking",
                  desc:
                    "Enhance compliance and prevent fraud with KYC, account validation, and document checks.",
                },
                {
                  icon: "bi bi-emoji-laughing",
                  title: "Staffing & Recruitment",
                  desc:
                    "Improve hiring decisions with Employment BGV verification APIs and faster onboarding.",
                },
                {
                  icon: "bi bi-bounding-box",
                  title: "Logistics",
                  desc:
                    "Ensure package safety and agent accountability with real-time ID and location verification.",
                },
                {
                  icon: "bi bi-cart-check",
                  title: "FMCG / FMCD",
                  desc:
                    "Mitigate risks by verifying delivery agents, field staff, and onboarding contractors easily.",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center p-5"
                >
                  <div className="our-features-icon-box mb-3">
                    <i className={`${feature.icon} text-[#2dc1e3] text-xl`}></i>
                  </div>
                  <h3 className="heading mb-2 font-semibold text-gray-800">{feature.title}</h3>
                  <p className="our-features-icon-details text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
