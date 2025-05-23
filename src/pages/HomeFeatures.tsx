export default function HomeFeatures() {
  return (
    <section className="bg-[#f6fafd] py-16 section our-process">
      <div className="mx-auto pb-16 pt-10">
        <div
          className="text-center max-w-3xl mx-auto mb-20 " data-aos="fade-up"
        >
          <p className="text-[20px]  text-gray-600 mb-2 tracking-wide">
            ABOUT US
          </p>
          <p className="text-[30px] sm:text-[20px] leading-[1.3] text-black max-w-[600px] mx-auto">
            We specialize
            <span className="font-bold">
              in delivering innovative VOIP, telecom, &amp; cloud
            </span>
            <span className="title-img mx-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            solutions designed enhance the way businesses connect and
            communicate.
            <br />
            With focus on reliability
            {/* <img alt="person with headset and laptop" className="inline-block mx-1 -mb-[3px] rounded-lg" height="20" src="https://storage.googleapis.com/a1aa/image/16a83f84-e160-48d4-6f54-a64faf163a17.jpg" width="50"/> */}
            <span className="title-img _2 mx-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            scalability.
          </p>
        </div>
        <div className="border-t border-dashed border-gray-300 pt-12 flex flex-col md:flex-row md:space-x-12 gap-[24px] px-5">
          <div
            className="md:w-1/3 mb-10 md:mb-0"
            style={{
             
              borderRight: "1px dashed #d1d5db",
            }}
            data-aos="fade-right"

          >
            <p className="text-[10px]  text-gray-600 mb-2 tracking-wide">
              OUR FEATURES
            </p>
            <h2 className="text-[36px]  leading-tight ">
              Features Designed to Elevate Communication Experience Success.
            </h2>
            <button
              className="mt-6 bg-[#2dc1e3] text-white text-[16px]  px-5 py-2 rounded-full hover:bg-yellow-300 transition"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 "
            data-aos="fade-left"
            style={{height:"calc(100vh - 176px)", overflowY:"auto",  scrollBehavior: "smooth"}}
            
          >
            <div className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center">
              <div className="our-features-icon-box">
                <i className="fas fa-headset text-white text-xl"></i>
              </div>
              <h3 className="heading">
                Lending
              </h3>
              <p className="our-features-icon-details">
                Facilitate quick and secure loan approvals by verifying applicant identities and financial information.
              </p>
            </div>
            <div className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center">
              <div className="our-features-icon-box">
                <i className="fas fa-desktop text-white text-xl"></i>
              </div>
              <h3 className="heading">
                Banking
              </h3>
              <p className="our-features-icon-details">
                Strengthen fraud prevention measures and comply with Know Your Customer (KYC) regulations through robust identity verification.
              </p>
            </div>
            <div className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center">
              <div className="our-features-icon-box">
                <i className="fas fa-briefcase text-white text-xl"></i>
              </div>
              <h3 className="heading">
               Staffing & Recruitment
              </h3>
              <p className="our-features-icon-details">
                Improves hiring decisions with candidate background verification and streamlines employee onboarding.
              </p>
            </div>
            <div className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center">
              <div className="our-features-icon-box">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="heading">
                Logistics
              </h3>
              <p className="our-features-icon-details">
                Enhance package delivery security by verifying user identities during login processes.
              </p>
            </div>
            <div className="bg-white rounded-lg our-features-single shadow-sm flex flex-col items-center text-center">
              <div className="our-features-icon-box">
                <i className="fas fa-shield-alt text-white text-xl"></i>
              </div>
              <h3 className="heading">
                FMCG/ FMCD
              </h3>
              <p className="our-features-icon-details">
               Enhance FMCG/FMCD security and compliance by verifying worker identities, screening for criminal records, and mitigating risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
