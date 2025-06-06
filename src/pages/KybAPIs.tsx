import React from "react";
import {
  FaFileInvoiceDollar,
  FaBuilding,
  FaSearch,
  FaIdBadge,
  FaBarcode,
  FaRegIdCard,
  FaClipboardCheck,
  FaUtensils,
} from "react-icons/fa";

const APIsUnderKyb: React.FC = () => {
  const apiServices = [
    {
      name: "GST Verification",
      icon: <FaFileInvoiceDollar />,
      description: "Instantly verify business GST registration and compliance status.",
    },
    {
      name: "Company Name to CIN",
      icon: <FaBuilding />,
      description: "Retrieve Company Identification Number (CIN) using registered business name.",
    },
    {
      name: "TAN to Company Search",
      icon: <FaSearch />,
      description: "Find detailed company records via TAN for due diligence or onboarding.",
    },
    {
      name: "TAN Lookup API",
      icon: <FaIdBadge />,
      description: "Get verified TAN details to meet tax-related regulatory requirements.",
    },
    {
      name: "PAN to GST Mapping",
      icon: <FaBarcode />,
      description: "Fetch GST data mapped to PAN numbers to prevent identity misuse.",
    },
    {
      name: "LEI Verification",
      icon: <FaRegIdCard />,
      description: "Validate Legal Entity Identifiers for financial or investment institutions.",
    },
    {
      name: "Udhyam Aadhaar Check",
      icon: <FaClipboardCheck />,
      description: "Verify MSME businesses through their official Udhyam Aadhaar registration.",
    },
    {
      name: "FSSAI License Validation",
      icon: <FaUtensils />,
      description: "Check authenticity of FSSAI registration for food-related enterprises.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="w-full mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">KYB (Know Your Business)</span> Verification
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#29a9c5] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIsUnderKyb;
