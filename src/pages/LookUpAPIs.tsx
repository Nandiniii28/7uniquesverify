import React from "react";
import {
  FaPassport,
  FaBroadcastTower,
  FaWallet,
  FaUserCircle,
} from "react-icons/fa";

const LookupAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport />,
      description:
        "Cross-check passport details using mobile linkage—ideal for identity validation during onboarding.",
    },
    {
      name: "Telecom Details",
      icon: <FaBroadcastTower />,
      description:
        "Instantly retrieve SIM circle, operator type, and provider information linked to a number.",
    },
    {
      name: "Mobile to UPI/VPA",
      icon: <FaWallet />,
      description:
        "Fetch the UPI ID (VPA) tied to a mobile number—perfect for verifying transaction identities.",
    },
    {
      name: "Mobile to UAN",
      icon: <FaUserCircle />,
      description:
        "Identify the Universal Account Number (UAN) mapped with a mobile—useful in employee and PF-related verifications.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Lookup with Confidence via <span className="text-[#29a9c5]">7Unique Verify</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#29a9c5] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookupAPIs;
