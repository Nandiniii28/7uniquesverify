import React from "react";

const OCRCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Unlocking the Benefits of <span className="text-[#29a9c5]">AI-Driven OCR Technology</span>
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-vector/ocr-optical-character-recognition-technology-concept_23-2148649550.jpg?w=740"
              alt="AI-based OCR reduces manual errors"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eliminate Manual Errors with AI-Powered OCR
            </h3>
            <p className="text-gray-600">
              Reduce human error in document verification. Our AI-based OCR ensures precision, consistency, and fast automation across operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-4856.jpg?w=740"
              alt="OCR for KYC fraud prevention"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Enhance KYC with Automated Fraud Detection
            </h3>
            <p className="text-gray-600">
              Strengthen your KYC workflow by extracting data from official IDs. Verify user identity instantly and eliminate fake document risks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
            <img
              src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7295.jpg?w=740"
              alt="Real-time OCR document processing"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Real-Time Document Processing for Speed & Accuracy
            </h3>
            <p className="text-gray-600">
              Process identity documents instantly with real-time OCR. Boost efficiency and get verified outputs within seconds for smarter workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OCRCards;
