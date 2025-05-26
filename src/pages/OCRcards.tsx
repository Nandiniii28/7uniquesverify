import React from "react";

const OCRCards: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
      <div className="max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 px-3 sm:px-5 md:px-20">
          Exploring <span className="text-[#29a9c5]">AI-Driven OCR Software</span> Features
        </h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-vector/ocr-optical-character-recognition-technology-concept_23-2148649550.jpg?w=740"
              alt="Identity Verification"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Eliminating Manual Errors: The Power of AI-Driven OCR
            </h3>
            <p className="text-gray-600">
              With AI-powered OCR, human error in document verification becomes a thing of the past. Automate your process for enhanced accuracy and operational consistency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
            <img
              src="https://img.freepik.com/free-vector/identity-verification-concept-illustration_114360-4856.jpg?t=st=1716729836~exp=1716733436~hmac=74b47cfa56c7b1319a3586d1656dc3340559b88a58985e6de3b7859f01d75a01&w=740"
              alt="KYC Verification OCR"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Combat Fraud with KYC Verification
            </h3>
            <p className="text-gray-600">
              Leverage OCR to strengthen your KYC checks. Quickly extract and verify data from identity documents to prevent fraudulent entries with speed and confidence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
            <img
              src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7295.jpg?t=st=1716730023~exp=1716733623~hmac=9c5b3c8be2186c773cbca78a307a5dc012b16971c296df48b1408cf509b9f3cc&w=740"
              alt="Real-time Document Handling"
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Swift Document Handling with Real-time Processing
            </h3>
            <p className="text-gray-600">
              With real-time OCR capabilities, documents are processed and verified instantly—delivering results with speed and reliability for efficient decision-making.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OCRCards;
