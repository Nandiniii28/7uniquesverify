import React from "react";

const KycCards: React.FC = () => {
  return (
    <section className="py-16 px-1 md:px-8 lg:px-15">
      <div className="max-w-full bg-[#f7f1ef] rounded-3xl py-6 px-4 sm:px-6x md:py-12 md:px-20 lg:mx-30 xl:mx-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          <span className="text-[#b7603d]">7Unique Verify's</span> KYC APIs: The Smarter Way to Authenticate Identities
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/11669264_20945843.jpg"
              alt="Simplifying Identity Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Simplifying Identity Verification
            </h3>
            <p className="text-gray-600">
              Our KYC APIs are designed for fast integration and high accuracy—making it easy for developers and businesses to validate users in real time with a seamless experience.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/8268971_3833777.jpg"
              alt="Fraud Prevention"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Strengthen Fraud Prevention
            </h3>
            <p className="text-gray-600">
              Built to combat fake identities, our KYC suite empowers banks, fintechs, and marketplaces to detect fraud before it enters the system—boosting trust and compliance.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="/img/20289398_6272280.jpg"
              alt="Reliable KYC Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Accurate and Compliant KYC
            </h3>
            <p className="text-gray-600">
              Our KYC APIs validate user identity by matching official records—ensuring the process is accurate, compliant with Indian norms, and recognized for legal onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KycCards;
