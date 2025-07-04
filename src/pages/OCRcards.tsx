import React from "react";

const OCRCards: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f9f5f3] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlocking the Power of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c6693c] to-[#d88c6b]">
              AI-Driven OCR
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your document processing with cutting-edge optical character recognition powered by AI
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden h-60">
              <img
                src="https://img.freepik.com/free-vector/ocr-optical-character-recognition-technology-concept_23-2148649550.jpg"
                alt="AI-based OCR reduces manual errors"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#b7603d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-md z-10">
                Precision
              </div>
            </div>
            <div className="p-6 pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Eliminate Manual Errors
              </h3>
              <p className="text-gray-600 mb-4">
                Our AI-powered OCR ensures 99.9% accuracy in document verification, eliminating human errors with consistent, automated processing.
              </p>
             
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden h-60">
              <img
                src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-4856.jpg"
                alt="OCR for KYC fraud prevention"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#b7603d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-md z-10">
                Security
              </div>
            </div>
            <div className="p-6 pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                KYC Fraud Prevention
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced document analysis detects forged IDs with 95% accuracy, strengthening your compliance while reducing fraud risks.
              </p>
            
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="relative overflow-hidden h-60">
              <img
                src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7295.jpg"
                alt="Real-time OCR document processing"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-[#b7603d] text-white text-xs font-bold px-3 py-2 rounded-full shadow-md z-10">
                Speed
              </div>
            </div>
            <div className="p-6 pt-5">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Instant Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Process documents in real-time with sub-second response times, accelerating workflows while maintaining enterprise-grade accuracy.
              </p>
             
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-[#b7603d] to-[#d88c6b] text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default OCRCards;