import React from "react";

const UtilitiesOverview: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-[#f8e8e1] py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powering Operations with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b7603d] to-[#e07a4d]">
              Smart Utility APIs
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#b7603d] to-[#e07a4d] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-[#f0d9d0]">
                7Unique Verify's Utility APIs are built for performance and flexibility, helping businesses in finance, e-commerce, telecom, logistics, and public services streamline verification, compliance, and data accuracy.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-xl shadow-sm border border-[#f0d9d0]">
                From validating customer identities to automating bulk data processes—our APIs support real-time integration and scale effortlessly to meet mission-critical needs across departments and industries.
              </p>
            </div>

            <div className="bg-[#f8e8e1] border border-[#e5c4b5] rounded-xl p-6 shadow-inner">
              <p className="text-gray-700 italic">
                Whether you're launching a fintech app, managing bulk account validations, or improving service delivery—our Utility API suite enhances your backend with speed, security, and simplicity.
              </p>
            </div>
          </div>

          {/* Right: Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <img
                src="https://img.freepik.com/free-vector/flat-design-api-illustration_23-2149392285.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Utilities API Illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#b7603d]/20 to-[#e07a4d]/10"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e5c4b5] rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d9a992] rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesOverview;