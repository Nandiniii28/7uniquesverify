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
      description: "Validate passport details to ensure identity authenticity.",
    },
    {
      name: "Email Authentication Solutions",
      icon: <FaEnvelopeOpenText />,
      description: "Verify email addresses to reduce fraud and enhance communication trust.",
    },
    {
      name: "EPFO without OTP",
      icon: <FaIdBadge />,
      description: "Access EPFO details without requiring OTP for faster verification.",
    },
    {
      name: "Mobile to UAN",
      icon: <FaPhoneAlt />,
      description: "Link mobile numbers to Universal Account Numbers for employee validation.",
    },
    {
      name: "ITR Details Get",
      icon: <FaFileInvoiceDollar />,
      description: "Fetch Income Tax Return data to assess financial credibility.",
    },
    {
      name: "PAN to UAN",
      icon: <FaAddressCard />,
      description: "Map PAN details to UAN to streamline employment background checks.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">Employee Background </span> Checks
        </h2>
        <div className="grid grid-cols-2  md:grid-cols-3 md:gap-6 gap-3">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
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

export default EmployeeBGVAPIs;
