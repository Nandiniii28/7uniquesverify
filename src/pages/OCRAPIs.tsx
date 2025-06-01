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
      icon: <FaPassport />,
      description: "Automatically extract personal and travel data from passport images using advanced OCR.",
    },
    {
      name: "PAN OCR",
      icon: <FaAddressCard />,
      description: "Digitize and extract key information from PAN card scans for streamlined KYC.",
    },
    {
      name: "Driving License OCR",
      icon: <MdOutlineDriveEta />,
      description: "Capture license number, name, and validity from driving license images.",
    },
    {
      name: "Bank Statement OCR",
      icon: <FaUniversity />,
      description: "Convert unstructured bank statement PDFs into structured, usable financial data.",
    },
    {
      name: "Cheque OCR",
      icon: <FaMoneyCheckAlt />,
      description: "Read cheque numbers, account info, and signatures for automated cheque processing.",
    },
    {
      name: "Aadhaar OCR",
      icon: <FaIdCard />,
      description: "Extract UIDAI Aadhaar details including name, DOB, and Aadhaar number with high accuracy.",
    },
    {
      name: "Bulk Aadhaar Masking",
      icon: <MdOutlineMarkEmailRead />,
      description: "Automatically redact Aadhaar numbers in bulk documents for compliance and privacy.",
    },
    {
      name: "Bulk Account Verification",
      icon: <MdOutlineAccountBalanceWallet />,
      description: "OCR-powered bulk account verification using scanned or uploaded documents.",
    },
    {
      name: "Bulk PAN Verification",
      icon: <AiOutlineCheckCircle />,
      description: "Validate multiple PAN cards simultaneously using intelligent OCR processing.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">AI-Powered OCR Suite</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {ocrServices.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${
                index === 8 ? "hidden md:block" : ""
              }`}
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

export default OCRAPIs;
