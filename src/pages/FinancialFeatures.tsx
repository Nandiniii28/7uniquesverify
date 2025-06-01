import React from "react";
import { RiShieldKeyholeLine } from "react-icons/ri";  // Enhanced Security
import { FaBalanceScale } from "react-icons/fa";       // Compliance
import { FiSettings } from "react-icons/fi";           // Integration

const FinancialFeatures: React.FC = () => {
  const features = [
    {
      title: "Enhanced Security",
      description:
        "7Unique Verify’s APIs use bank-grade encryption and secure authentication to safeguard every transaction. Prevent unauthorized access and ensure data privacy throughout your financial workflows.",
      icon: <RiShieldKeyholeLine className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Built-in Compliance",
      description:
        "Stay audit-ready and compliant with RBI, SEBI, and income tax regulations. Our Financial Checks API includes automated checks and reporting to keep your business aligned with changing norms.",
      icon: <FaBalanceScale className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Effortless Integration",
      description:
        "Plug into your existing platforms in minutes. Our Fraud Indicators API is designed with a developer-first approach, ensuring smooth onboarding and low-code deployment across use cases.",
      icon: <FiSettings className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-cardano-illustration_23-2149214816.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
            alt="Financial API Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Unveiling the Power of Financial APIs:{" "}
            <span className="text-[#29a9c5]">Why 7Unique Verify for Fraud & Risk Checks</span>
          </h2>

          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                {feature.icon}
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialFeatures;
