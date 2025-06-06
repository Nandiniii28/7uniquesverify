import React from "react";
import { FaIdCard, FaFingerprint, FaMapMarkerAlt } from "react-icons/fa";

const KycFeatures: React.FC = () => {
  const features = [
    {
      title: "Verify and authenticate customer identity documents",
      description:
        "Our document verification API securely validates IDs like passports, Aadhaar, PAN, and licenses using automated checks—ensuring trust and legal compliance.",
      icon: <FaIdCard className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Authenticate customers using biometric data",
      description:
        "Leverage fingerprint, facial recognition, and iris scans to verify users with unmatched accuracy. Our biometric solutions reduce fraud and enable fast onboarding.",
      icon: <FaFingerprint className="text-[#29a9c5] text-xl mr-2" />,
    },
    {
      title: "Validate customer addresses for accuracy",
      description:
        "Ensure address legitimacy by matching it with government and financial databases. Perfect for KYC, credit verification, and delivery-critical businesses.",
      icon: <FaMapMarkerAlt className="text-[#29a9c5] text-xl mr-2" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row items-start gap-12">
        
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
            <span className="text-[#29a9c5]">Features of 7Unique Verify's KYC API Suite</span>
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
