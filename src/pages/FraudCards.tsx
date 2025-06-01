import React from "react";

const FraudCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Unlock the Power of <span className="text-[#29a9c5]">7Unique Verify’s</span> Fraud Detection APIs
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://seon.io/wp-content/uploads/2020/05/Fraud-prevention-workflow-with-data-enrichment-1.svg"
              alt="Fraud Prevention Workflow"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Effortless Fraud Detection with API Integration
            </h3>
            <p className="text-gray-600">
              7Unique Verify’s fraud prevention APIs streamline the process of identifying fake users and suspicious activities. With quick integration and smart insights, businesses can stay protected without heavy infrastructure.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="/img/8268971_3833777.jpg"
              alt="Fraud Detection API"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              AI-Powered Fraud Identification
            </h3>
            <p className="text-gray-600">
              Our APIs use data analytics and pattern recognition to detect fraud attempts in real-time. Prevent impersonation, duplicate entries, and synthetic ID fraud with confidence.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                        md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Fraud Risk Assessment"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Trusted Fraud Risk Scoring
            </h3>
            <p className="text-gray-600">
              Our API cross-verifies identity with official data and transaction behavior, delivering highly accurate fraud risk scores—ideal for financial institutions, NBFCs, and HR platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudCards;
