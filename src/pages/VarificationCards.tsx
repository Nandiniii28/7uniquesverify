import React from "react";

const VarificationCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Unlock Success: <span className="text-[#29a9c5]">7Unique Verify's</span> Employment BGV Verification API
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-vector/two-steps-verification-illustration-flat-design-illustration_108061-441.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Seamless Integration"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Seamless Integration
            </h3>
            <p className="text-gray-600">
              Our BGV Verification API integrates smoothly into your system. With just a few lines of code, start validating employee backgrounds instantly—no disruption, no delays.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-data-phishing-concept-hacker-cyber-criminals-phishing-stealing-private-personal-data-password-email-credit-card-online-scam-malware-password-phishing_68971-1744.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Accurate and Trusted"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Accurate and Trusted Data
            </h3>
            <p className="text-gray-600">
              At 7Unique Verify, we deliver BGV data directly from official and verified sources. Get up-to-date, reliable information to make faster, smarter hiring decisions.
            </p>
          </div>

          {/* Block 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
            <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-document-protection_516790-2134.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Fraud Prevention"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Prevent Employment Fraud
            </h3>
            <p className="text-gray-600">
              Eliminate false identities and fake resumes. 7Unique Verify’s Employment Check API protects your HR pipeline by flagging anomalies and ensuring credibility from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VarificationCards;
