import React from "react";

const FinancialCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Key Capabilities of <span className="text-[#29a9c5]">Financial Checks</span> API Solutions
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-vector/steal-data-illustrated-concept_23-2148544484.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Personalised Journey"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Safeguard Your Business: The Power of Fraud Detection
            </h3>
            <p className="text-gray-600">
              Financial Checks include features designed to identify suspicious activities and patterns hinting towards fraudulent behaviour. By analysing transaction data and conducting risk assessments, businesses may detect fraud while protecting themselves and their customers from financial losses.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-vector/bitcoin-crypto-currency-falling-graph-cracked-floor-with-frustrated-businessman-losing-money_251139-627.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Trustworthy Efficiency"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Crack Credit Risk: Gain Financial Edge
            </h3>
            <p className="text-gray-600">
              Being the best financial checks API Provider in India, we encourage businesses to evaluate the creditworthiness and financial stability of their businesses and individuals by analysing credit history, debt levels, and payment and behaviour to gauge the risk of default or non-payment.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="https://img.freepik.com/premium-vector/vector-illustration-account-security-concept-with-person-signing-document_675567-2429.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Reliable KYC Verification"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Compliance Checks: Ensuring Integrity
            </h3>
            <p className="text-gray-600">
              SprintVerify’s Financial Checks enable businesses to ensure compliance with regulatory requirements and industry standards. It is by verifying the accuracy and integrity of financial data, that businesses can mitigate the risk of non-compliance while avoiding any potential legal consequences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialCards;

