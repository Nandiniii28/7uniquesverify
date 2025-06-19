import React from "react";

const UtilitiesCards: React.FC = () => {
  return (
    <section className="py-16 px-1 md:px-8 lg:px-15">
      <div className="max-w-full bg-[#f7f1ef]








 rounded-3xl py-6 px-4 sm:px-6x md:py-12 md:px-20 lg:mx-30 xl:mx-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Explore the Dynamic Capabilities of{" "}
          <span className="text-[#b7603d]">7Unique Verify's</span> Utilities API
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Block 1: Currency Exchange API */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-vector/insurance-concept-life-buoy-lifebelt-with-cash-money-dollar-stack-coins-isolated-white-background-vector-3d-isometric-business-finance-illustration-thin-line-design_570429-31457.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Currency Exchange"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Currency Exchange API
            </h3>
            <p className="text-gray-600">
              Access real-time and historical foreign exchange rates with 7Unique Verify’s Currency Exchange API. Ideal for global pricing, invoicing, and accounting — fast, secure, and accurate.
            </p>
          </div>

          {/* Block 2: Risk Assessment */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/premium-vector/vector-illustration-about-risk-assessment-concept-with-speedometer-risk-management_675567-8478.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Risk Assessment"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Comprehensive Risk Assessment
            </h3>
            <p className="text-gray-600">
              Make smarter, safer decisions with our integrated Risk Assessment module. Evaluate the credibility and compliance of customers, vendors, or partners before onboarding — reducing fraud and enhancing trust in every transaction.
            </p>
          </div>

          {/* Block 3: Data Validation */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
            <img
              src="https://img.freepik.com/free-vector/authentication-concept-illustration_114360-773.jpg?t=st=1716750116~exp=1716753716~hmac=aa0f5aa2f493b0cc2fcf62e1be8a419bce10e93dc1e627401304d7d585fb66e2&w=740"
              alt="Data Validation"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Smart Data Validation
            </h3>
            <p className="text-gray-600">
              Instantly verify critical data such as IMEI numbers, user identities, or transaction details. 7Unique Verify’s validation tools help reduce fraud and improve compliance across systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesCards;
