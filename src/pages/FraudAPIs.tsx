import React from "react";
import {
  FaUserSecret,
  FaMobileAlt,
  FaBalanceScale,
  FaTicketAlt,
} from "react-icons/fa";

const FraudIndicatorsAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Crime Check – Individual (Real-Time)",
      icon: <FaUserSecret />,
      description:
        "Instantly verify if a person has any criminal history by scanning official databases—ideal for onboarding, finance, or hiring processes.",
    },
    {
      name: "Mobile Number Crime Check",
      icon: <FaMobileAlt />,
      description:
        "Identify fraud risks linked to a mobile number, including SIM misuse or suspicious registrations—perfect for fintech and telecom checks.",
    },
    {
      name: "Court Case Lookup",
      icon: <FaBalanceScale />,
      description:
        "Check whether an individual or business is involved in pending or past civil/criminal litigation before extending credit or service.",
    },
    {
      name: "Challan & Violation Scan",
      icon: <FaTicketAlt />,
      description:
        "Detect unpaid challans or traffic violations tied to users or vehicles—used by insurers, NBFCs, and background check platforms.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">Fraud Indicators</span>
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

export default FraudIndicatorsAPIs;
