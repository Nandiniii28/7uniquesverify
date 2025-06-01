import React from "react";

const KybCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Unlocking the Benefits of <span className="text-[#29a9c5]">7Unique Verify's</span> KYB API
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/9930925_4270272.jpg"
              alt="Streamlined User Experience"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Streamlined Onboarding Experience
            </h3>
            <p className="text-gray-600">
              Our KYB API simplifies the business verification process, delivering smooth integration for developers and frictionless onboarding for users. It ensures high accuracy with minimal manual input, reducing delays and improving trust.
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
              Proactive Fraud Prevention
            </h3>
            <p className="text-gray-600">
              7Unique Verify’s KYB checks help businesses detect shell entities and fake registrations before onboarding. The system flags inconsistencies using real-time government data and reduces risk with minimal effort.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="/img/133748214_10221134.jpg"
              alt="Reliable Business Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Verified Accuracy You Can Trust
            </h3>
            <p className="text-gray-600">
              Each business verification request is matched against official government sources such as GST, MCA, and Udyam. Our API ensures validated, error-free, and legally credible results for confident decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KybCards;
