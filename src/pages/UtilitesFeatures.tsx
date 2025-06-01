import React from "react";

const UtilitiesOverview: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149392285.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="Utilities API Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Powering Operations with{" "}
            <span className="text-[#4a90e2]">Smart Utility APIs</span>
          </h2>

          <p className="text-gray-600 text-lg">
            7Unique Verify’s Utility APIs are built for performance and flexibility, helping businesses in finance, e-commerce, telecom, logistics, and public services streamline verification, compliance, and data accuracy.
          </p>

          <p className="text-gray-600 text-lg">
            From validating customer identities to automating bulk data processes—our APIs support real-time integration and scale effortlessly to meet mission-critical needs across departments and industries.
          </p>

          <p className="text-gray-600">
            Whether you're launching a fintech app, managing bulk account validations, or improving service delivery—our Utility API suite enhances your backend with speed, security, and simplicity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesOverview;
