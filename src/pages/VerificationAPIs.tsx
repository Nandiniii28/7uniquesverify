import React from "react";
import {
  FaPassport,
  FaEnvelopeOpenText,
  FaIdBadge,
  FaPhoneAlt,
  FaFileInvoiceDollar,
  FaAddressCard,
} from "react-icons/fa";

const EmployeeBGVAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport />,
      description: "Instantly verify passport data to confirm employee identity for global onboarding.",
    },
    {
      name: "Email Authentication Solutions",
      icon: <FaEnvelopeOpenText />,
      description: "Validate email ownership to reduce fraud and improve hiring communication reliability.",
    },
    {
      name: "EPFO without OTP",
      icon: <FaIdBadge />,
      description: "Retrieve EPFO details directly without OTP for faster background validation.",
    },
    {
      name: "Mobile to UAN",
      icon: <FaPhoneAlt />,
      description: "Map mobile numbers to UAN records to validate employee work history securely.",
    },
    {
      name: "ITR Details Get",
      icon: <FaFileInvoiceDollar />,
      description: "Fetch Income Tax Return insights to assess candidate's financial stability.",
    },
    {
      name: "PAN to UAN",
      icon: <FaAddressCard />,
      description: "Connect PAN with UAN to ensure consistent identity mapping across systems.",
    },
  ];

  return (
    <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#b7603d]">Employee Background</span> Checks
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-3">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#b7603d] text-4xl">
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

export default EmployeeBGVAPIs;
