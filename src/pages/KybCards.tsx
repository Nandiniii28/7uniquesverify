import React from "react";

const KybCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Unlocking the Benefits of <span className="text-[#29a9c5]">SprintVerify's</span> KYB API
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/9930925_4270272.jpg"
              alt="Personalised Journey"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Streamlined User Experience
            </h3>
            <p className="text-gray-600">
              Our Business verification API is engineered to simplify identity verification, providing an effortless process for developers and end-users. With an intuitive interface and easy integration, our solution ensures accurate verification and an unparalleled user experience.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/8268971_3833777.jpg"
              alt="Trustworthy Efficiency"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              KYB Verification's Fraud Prevention
            </h3>
            <p className="text-gray-600">
              Institutions can rely on our KYB Verification process to swiftly detect and thwart fraudulent attempts. Powered by a robust API, our solution empowers institutions to combat fake identities effectively, supporting security measures.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="/img/133748214_10221134.jpg"
              alt="Reliable KYC Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Business Verification's Accuracy Guarantee
            </h3>
            <p className="text-gray-600">
              Our KYB verification process meticulously cross-references personal information with government agency records, delivering precise, reliable, and legally valid results. This stringent process ensures credibility, contributing to a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KybCards;
