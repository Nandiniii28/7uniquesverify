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
      description: "Verify GST registration status of businesses.",
    },
    {
      name: "Company Name to CIN",
      icon: <FaBuilding />,
      description: "Lookup Company Identification Number using company name.",
    },
    {
      name: "TAN to Company Search",
      icon: <FaSearch />,
      description: "Find company details using TAN (Tax Deduction Account Number).",
    },
    {
      name: "TAN Lookup API",
      icon: <FaIdBadge />,
      description: "Lookup TAN information efficiently for compliance checks.",
    },
    {
      name: "PAN to GST",
      icon: <FaBarcode />,
      description: "Map PAN numbers to associated GST records for verification.",
    },
    {
      name: "LEI Verification",
      icon: <FaRegIdCard />,
      description: "Verify Legal Entity Identifier for financial institutions.",
    },
    {
      name: "Udhyam Aadhaar",
      icon: <FaClipboardCheck />,
      description: "Validate MSME registration via Udhyam Aadhaar.",
    },
   
    {
      name: "FSSAI Verification",
      icon: <FaUtensils />,
      description: "Verify Food Safety and Standards Authority of India registration.",
    },
   
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">KYB Verification</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-3 sm:gap-8">
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
