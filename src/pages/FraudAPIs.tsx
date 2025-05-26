import React from "react";
import {
  FaPassport,
  FaUserSecret,
  FaBuilding,
  FaMobileAlt,
  FaBalanceScale,
  FaTicketAlt,
} from "react-icons/fa";

const FraudIndicatorsAPIs: React.FC = () => {
  const apiServices = [
    
    {
      name: "Crime Check - Individual (Real-time)",
      icon: <FaUserSecret />,
      description: "Check individual background in real-time for any criminal records.",
    },
    
    {
      name: "Crime Check on Mobile Number",
      icon: <FaMobileAlt />,
      description: "Identify fraud or suspicious activity linked to mobile numbers.",
    },
    {
      name: "Court Case Check",
      icon: <FaBalanceScale />,
      description: "Verify if the individual or company has any pending or past court cases.",
    },
    {
      name: "Challan Check",
      icon: <FaTicketAlt />,
      description: "Detect unpaid challans or violations linked to individuals or vehicles.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">Fraud Indicators</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-3 sm:gap-8">
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

export default FraudIndicatorsAPIs;
