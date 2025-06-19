import React from "react";

const LookUpCards: React.FC = () => {
  return (
    <section className="py-16 px-1 md:px-8 lg:px-15">
      <div className="max-w-full bg-[#f7f1ef]








 rounded-3xl py-6 px-4 sm:px-6x md:py-12 md:px-20 lg:mx-30 xl:mx-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Why <span className="text-[#b7603d]">7Unique Verify’s</span> Mobile Number Lookup API is Trusted?
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-vector/two-steps-verification-illustration-flat-design-illustration_108061-441.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Two-Step Verification Illustration"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Seamless Identity Match in One API Call
            </h3>
            <p className="text-gray-600">
              Our phone number lookup API delivers accurate identity data via a developer-friendly interface. Get verified instantly—no manual input needed.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-photo/3d-illustration-data-phishing-concept-hacker-cyber-criminals-phishing-stealing-private-personal-data-password-email-credit-card-online-scam-malware-password-phishing_68971-1744.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Data Phishing Prevention"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Filter Out Fake Identities in Real-Time
            </h3>
            <p className="text-gray-600">
              Prevent fraud before it starts. Our lookup API flags suspicious mobile numbers linked with high-risk activity—perfect for digital platforms and lenders.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-document-protection_516790-2134.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Secure Document Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Government-Linked Cross-Verification
            </h3>
            <p className="text-gray-600">
              Validate user data using mobile-linked credentials cross-checked with government records—ideal for BFSI, HRMS, and onboarding workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookUpCards;
