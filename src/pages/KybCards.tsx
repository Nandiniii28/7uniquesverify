import React from "react";

const KybCards: React.FC = () => {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with decorative elements */}
        <div className="text-center mb-16 relative">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10">
              Unlocking the Benefits of{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">7Unique Verify's</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#f0d9d0] -z-1"></span>
              </span>{' '}
              KYB API
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful business verification solutions designed for modern enterprises
          </p>
        </div>

        {/* Cards with modern layout */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Card 1 - Minimal with accent border */}
          <div className="group relative bg-white rounded-xl p-6 border-l-4 border-[#b7603d] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute top-6 -left-2 w-4 h-4 bg-[#b7603d] rounded-full"></div>
            <div className="mb-6 h-40 overflow-hidden rounded-lg">
              <img
                src="/img/9930925_4270272.jpg"
                alt="Streamlined User Experience"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
              <span className="w-4 h-4 bg-[#b7603d] rounded-full mr-3"></span>
              Streamlined Onboarding
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our KYB API simplifies business verification with smooth integration and frictionless onboarding. 
              Ensures high accuracy with minimal manual input, reducing delays and improving trust.
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
              <span className="text-sm font-medium text-[#b7603d]">Learn more →</span>
            </div>
          </div>

          {/* Card 2 - With floating label */}
          <div className="group relative bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="absolute -top-3 right-6 bg-[#b7603d] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              Most Popular
            </div>
            <div className="mb-6 h-40 overflow-hidden rounded-lg relative">
              <img
                src="/img/8268971_3833777.jpg"
                alt="Fraud Prevention"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Proactive Fraud Prevention</h3>
            <p className="text-gray-600 leading-relaxed">
              Detect shell entities and fake registrations before onboarding. Flags inconsistencies using 
              real-time government data to reduce risk with minimal effort.
            </p>
            <div className="mt-6">
              <button className="w-full py-2 bg-[#b7603d]/10 text-[#b7603d] font-medium rounded-lg hover:bg-[#b7603d]/20 transition-colors">
                See case study
              </button>
            </div>
          </div>

          {/* Card 3 - With stats highlight */}
          <div className="group relative bg-gradient-to-br from-[#f9f3f0] to-white rounded-xl p-6 border border-[#f0d9d0] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="mb-6 h-40 overflow-hidden rounded-lg relative">
              <img
                src="/img/133748214_10221134.jpg"
                alt="Reliable Business Verification"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">Verified Accuracy</h3>
              <span className="bg-[#b7603d] text-white text-sm px-2 py-1 rounded">99.8%</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Matched against official government sources (GST, MCA, Udyam) for validated, 
              error-free results you can trust for confident decision-making.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-time verification
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Legal compliance
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#b7603d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Audit-ready documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KybCards;