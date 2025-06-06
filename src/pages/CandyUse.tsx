import React from "react";

const CandyUseCases: React.FC = () => {
  return (
    <section className="bg-white pb-10 pt-8 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">

        <div className="w-full lg:w-1/2 order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transforming Verification Across Industries
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-[#29a9c5]">CANDY</strong>, a smart solution by 7Unique Verify, helps streamline identity verification for diverse business needs—whether it's user onboarding, workforce validation, or secure customer engagement.
          </p>
          <p className="text-gray-600 mb-4">
            Designed to meet sector-specific challenges, CANDY is widely used across:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
            <li><strong>Banking & Finance:</strong> Simplify KYC, reduce fraud risk, and speed up regulatory checks.</li>
            <li><strong>HR & Staffing:</strong> Digitize background verification and accelerate candidate onboarding.</li>
            <li><strong>E-Commerce:</strong> Protect accounts and verify customers during sign-up and payment flows.</li>
          </ul>
          <p className="text-gray-600">
            With fast APIs, intuitive flows, and built-in compliance, CANDY empowers growing teams to scale securely—without adding complexity.
          </p>
        </div>

        <div className="w-full lg:w-1/2 order-2 flex justify-center">
          <img
            src="/img/20943595.jpg" 
            alt="CANDY Use Cases"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CandyUseCases;
