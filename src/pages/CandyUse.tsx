import React from "react";

const CandyUseCases: React.FC = () => {
  return (
    <section className="bg-white pb-10 pt-8 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    
        <div className="w-full lg:w-1/2 order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transforming Verification Across Industries
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-[#29a9c5]">CANDY</strong> is engineered to simplify identity verification and compliance across a wide range of sectors. Whether you're onboarding customers, verifying employees, or securing transactions, CANDY ensures accuracy, speed, and security at scale.
          </p>
          <p className="text-gray-600 mb-4">
            Trusted by forward-thinking organizations, CANDY is perfectly suited for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-1">
            <li><strong>Banking & Finance:</strong> Fast-track KYC and AML compliance while reducing fraud.</li>
            <li><strong>HR & Staffing:</strong> Seamless background checks and digital onboarding for employees.</li>
            <li><strong>E-Commerce:</strong> Protect customer accounts with secure identity checks during sign-up or checkout.</li>
          </ul>
          <p className="text-gray-600">
            With automated workflows, real-time validation, and a user-friendly experience, CANDY empowers your business to scale operations without compromising security or compliance.
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
