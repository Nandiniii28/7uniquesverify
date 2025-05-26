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
        "Access real-time currency exchange rates to power global transactions and pricing models.",
    },
    {
      name: "IMEI Validator API",
      icon: <FaMobileAlt />,
      description:
        "Validate the authenticity of mobile devices by checking their IMEI numbers.",
    },
    {
      name: "IEC Verification",
      icon: <FaGlobeAmericas />,
      description:
        "Verify Importer Exporter Codes (IEC) to ensure compliance in international trade.",
    },
    {
      name: "LEI Verification",
      icon: <FaCheckDouble />,
      description:
        "Confirm the validity of Legal Entity Identifiers (LEIs) for trusted business verification.",
    },
    
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Empower Your Business with Our{" "}
          <span className="text-[#29a9c5]">Advanced Utilities APIs</span>
        </h2>
        <div className="grid grid-cols-2  lg:grid-cols-4 md:gap-6 gap-3">
          {utilitiesAPIs.map((api, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#29a9c5] text-4xl">
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
