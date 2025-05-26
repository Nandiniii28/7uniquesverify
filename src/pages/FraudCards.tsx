import React from "react";

const FraudCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Unlock the Power of <span className="text-[#29a9c5]">SprintVerify's</span> Fraud
          Detection API
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://seon.io/wp-content/uploads/2020/05/Fraud-prevention-workflow-with-data-enrichment-1.svg"
              alt="Personalised Journey"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Effortless Fraud Prevention with Fraud Check APIs
            </h3>
            <p className="text-gray-600">
              Our suite of fraud prevention API simplifies the process of detecting and eliminating fraudulent activities. With a user-friendly interface and seamless integration, our APIs ensure accurate fraud detection, enhancing security measures for businesses and institutions.
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
              Enhanced Fraud Detection Solutions
            </h3>
            <p className="text-gray-600">
              Businesses can rely on our fraud detection API to identify and prevent fake identities effectively. Leveraging advanced algorithms and data analytics, our APIs empower institutions to detect and eliminate fraudulent attempts with confidence, enhancing overall security protocols.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Reliable KYC Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Trustworthy Fraud Risk Assessment
            </h3>
            <p className="text-gray-600">
              Our fraud risk assessment verifies individuals' identities by cross-referencing personal information with government agency records and transactional data. This meticulous process guarantees accurate, trustworthy, and legally valid results, providing peace of mind for institutions and users alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudCards;
