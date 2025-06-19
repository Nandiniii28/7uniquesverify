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
      icon: <FaIdBadge  />,
      description: "Get verified TAN details to meet tax-related regulatory requirements.",
    },
    {
      name: "PAN to GST Mapping",
      icon: <FaBarcode  />,
      description: "Fetch GST data mapped to PAN numbers to prevent identity misuse.",
    },
    {
      name: "LEI Verification",
      icon: <FaRegIdCard  />,
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
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            APIs Under <span className="text-[#b7603d]">KYB Verification</span>
          </h2>
          <div className="w-20 h-1 bg-[#b7603d] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive business verification solutions to streamline your compliance processes
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8f2f0] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg text-[#b7603d] hover:text-white bg-[#f8f2f0] flex items-center justify-center mb-6 group-hover:bg-[#b7603d] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                
                <div className="mt-auto">
                  
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f8f2f0] group-hover:bg-[#b7603d] transition-colors duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>
  );
};

export default APIsUnderKyb;