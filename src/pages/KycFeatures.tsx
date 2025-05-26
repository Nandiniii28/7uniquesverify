import React from "react";
import { FaIdCard, FaFingerprint, FaMapMarkerAlt } from "react-icons/fa";

const KycFeatures: React.FC = () => {
  const features = [
    {
      title: "Verify and authenticate customer identity documents",
      description:
        "Our Document Verification service ensures the accurate and secure verification of customer identity documents. Through advanced technologies and automated processes, we authenticate a wide range of documents, including passports, driver's licenses, national IDs, and more.",
      icon: <FaIdCard className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Authenticate customers using biometric data",
      description:
        "With Biometric Authentication, businesses can enhance security and streamline user ID Verification processes. Our advanced biometric solutions leverage unique physical characteristics such as fingerprints, facial recognition, voice patterns, and iris scans to verify customer identities accurately.",
      icon: <FaFingerprint className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Validate customer addresses for accuracy",
      description:
        "Our Address Verification service enables businesses to validate customer addresses with precision and efficiency. By cross-referencing customer-provided address details with authoritative databases and official records, we ensure the accuracy and legitimacy of address information.",
      icon: <FaMapMarkerAlt className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">
        
        <div className="w-full lg:w-1/2">
          <img
            src="/img/freepik_br_ad7a40c4-1811-4984-813f-920647999df1.png"
            alt="KYC Verification Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Choose Excellence:{" "}
            <span className="text-[#29a9c5]">Features of SprintVerify's KYC Verification API Solution</span>
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

export default KycFeatures;
