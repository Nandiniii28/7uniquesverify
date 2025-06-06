import React from "react";
import { FaShieldAlt, FaCheckCircle, FaLaptop } from "react-icons/fa";

const KybFeatures: React.FC = () => {
  const features = [
    {
      title: "Safeguard Your Business from Risk",
      description:
        "7Unique Verify’s KYB service helps verify the authenticity and legal standing of businesses—preventing fraud, financial risk, and regulatory issues before they occur. With our robust business verification process, your organization can onboard only trustworthy entities.",
      icon: <FaShieldAlt className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Compliance and Transparency Guaranteed",
      description:
        "Our KYB Check API enables seamless validation of ownership structures, registration numbers, and compliance histories. It helps ensure that your partners meet local laws and global compliance standards, reducing your legal exposure and enhancing business credibility.",
      icon: <FaCheckCircle className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Digital-First KYB for Faster Onboarding",
      description:
        "As a trusted eKYB provider, 7Unique Verify offers an API-first approach that integrates smoothly with your systems. From automated business document checks to real-time risk scoring, our platform simplifies KYB processes and accelerates business onboarding securely.",
      icon: <FaLaptop className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">

        <div className="w-full lg:w-1/2">
          <img
            src="/img/Data_security_05.jpg"
            alt="KYB Verification Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us:{" "}
            <span className="text-[#29a9c5]">
              Trusted KYB Verification by 7Unique Verify
            </span>
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

export default KybFeatures;
