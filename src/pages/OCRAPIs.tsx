import React from "react";
import {
  FaPassport,
  FaAddressCard,
  FaIdCard,
  FaUniversity,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import {
  MdOutlineDriveEta,
  MdOutlineMarkEmailRead,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const OCRAPIs: React.FC = () => {
  const ocrServices = [
    {
      name: "Passport OCR",
      icon: <FaPassport className="text-3xl" />,
      description: "Automatically extract personal and travel data from passport images using advanced OCR.",
      gradient: "from-[#b7603d] to-[#e8915e]"
    },
    {
      name: "PAN OCR",
      icon: <FaAddressCard className="text-3xl" />,
      description: "Digitize and extract key information from PAN card scans for streamlined KYC.",
      gradient: "from-[#9c4d2f] to-[#b7603d]"
    },
    {
      name: "Driving License OCR",
      icon: <MdOutlineDriveEta className="text-3xl" />,
      description: "Capture license number, name, and validity from driving license images.",
      gradient: "from-[#d47a4a] to-[#f0a87a]"
    },
    {
      name: "Bank Statement OCR",
      icon: <FaUniversity className="text-3xl" />,
      description: "Convert unstructured bank statement PDFs into structured, usable financial data.",
      gradient: "from-[#b7603d] to-[#e8915e]"
    },
    {
      name: "Cheque OCR",
      icon: <FaMoneyCheckAlt className="text-3xl" />,
      description: "Read cheque numbers, account info, and signatures for automated cheque processing.",
      gradient: "from-[#9c4d2f] to-[#b7603d]"
    },
    {
      name: "Aadhaar OCR",
      icon: <FaIdCard className="text-3xl" />,
      description: "Extract UIDAI Aadhaar details including name, DOB, and Aadhaar number with high accuracy.",
      gradient: "from-[#d47a4a] to-[#f0a87a]"
    },
    {
      name: "Bulk Aadhaar Masking",
      icon: <MdOutlineMarkEmailRead className="text-3xl" />,
      description: "Automatically redact Aadhaar numbers in bulk documents for compliance and privacy.",
      gradient: "from-[#b7603d] to-[#e8915e]"
    },
    {
      name: "Bulk Account Verification",
      icon: <MdOutlineAccountBalanceWallet className="text-3xl" />,
      description: "OCR-powered bulk account verification using scanned or uploaded documents.",
      gradient: "from-[#9c4d2f] to-[#b7603d]"
    },
    {
      name: "Bulk PAN Verification",
      icon: <AiOutlineCheckCircle className="text-3xl" />,
      description: "Validate multiple PAN cards simultaneously using intelligent OCR processing.",
      gradient: "from-[#d47a4a] to-[#f0a87a]"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f7f1ef] to-[#f0e6e2] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b7603d] to-[#e8915e]">AI-Powered OCR</span> Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced document scanning and data extraction APIs for seamless digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ocrServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8 h-full">
                <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mt-auto">
                 
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default OCRAPIs;