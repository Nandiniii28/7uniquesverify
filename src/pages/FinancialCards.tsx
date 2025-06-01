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
              alt="Fraud Detection"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Detect Financial Fraud Before It Hits
            </h3>
            <p className="text-gray-600">
              7Unique Verify’s Financial APIs help identify suspicious behavior through transaction pattern analysis and risk scoring—empowering businesses to prevent fraud and protect user trust.
            </p>
          </div>

          {/* Block 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-vector/bitcoin-crypto-currency-falling-graph-cracked-floor-with-frustrated-businessman-losing-money_251139-627.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Credit Risk Analysis"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Credit Risk Intelligence Made Easy
            </h3>
            <p className="text-gray-600">
              Assess the creditworthiness of individuals and businesses by analyzing ITRs, debt levels, and repayment behavior—making better lending and underwriting decisions.
            </p>
          </div>

          {/* Block 3 */}
          <div
            className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl
                          md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
          >
            <img
              src="https://img.freepik.com/premium-vector/vector-illustration-account-security-concept-with-person-signing-document_675567-2429.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Regulatory Compliance"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Simplify Compliance and Stay Audit-Ready
            </h3>
            <p className="text-gray-600">
              Our APIs help ensure financial data accuracy and compliance with RBI, SEBI, and tax norms—reducing legal exposure while improving governance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialCards;
