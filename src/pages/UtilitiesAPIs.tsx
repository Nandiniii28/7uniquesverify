import React from "react";
import {
  FaMoneyCheckAlt,
  FaMobileAlt,
  FaGlobeAmericas,
  FaCheckDouble,
} from "react-icons/fa";

const UtilitiesAPISection: React.FC = () => {
  const utilitiesAPIs = [
    {
      name: "Currency Exchange API",
      icon: <FaMoneyCheckAlt />,
      description:
        "Fetch real-time currency conversion rates to enable global pricing, financial reporting, and forex transactions with precision.",
    },
    {
      name: "IMEI Validator API",
      icon: <FaMobileAlt />,
      description:
        "Verify the authenticity of mobile devices by checking their IMEI numbers — essential for telecom, security, and inventory systems.",
    },
    {
      name: "IEC Verification API",
      icon: <FaGlobeAmericas />,
      description:
        "Instantly validate Importer Exporter Codes (IEC) to ensure regulatory compliance and trust in cross-border business operations.",
    },
    {
      name: "LEI Verification API",
      icon: <FaCheckDouble />,
      description:
        "Authenticate Legal Entity Identifiers (LEIs) to ensure business legitimacy and enhance due diligence across financial networks.",
    },
  ];

  return (
    <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Empower Your Business with{" "}
          <span className="text-[#b7603d]">Next-Gen Utilities APIs</span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-6 gap-3">
          {utilitiesAPIs.map((api, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#b7603d] text-4xl">
                {api.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {api.name}
              </h3>
              <p className="text-gray-600 text-sm">{api.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilitiesAPISection;
