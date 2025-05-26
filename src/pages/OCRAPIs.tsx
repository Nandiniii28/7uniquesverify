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
      description: "Extract data from passport images using OCR.",
    },
    {
      name: "PAN OCR",
      icon: <FaAddressCard />,
      description: "Read and digitize PAN card details from scanned copies.",
    },
    {
      name: "Driving License OCR",
      icon: <MdOutlineDriveEta />,
      description: "OCR solution to extract information from driving licenses.",
    },
    {
      name: "Bank Statement OCR",
      icon: <FaUniversity />,
      description: "Convert bank statements into structured digital data.",
    },
    {
      name: "Cheque OCR",
      icon: <FaMoneyCheckAlt />,
      description: "Digitally interpret cheque details for automated processing.",
    },
    {
      name: "Aadhaar OCR",
      icon: <FaIdCard />,
      description: "Extract Aadhaar card details with high accuracy.",
    },
    {
      name: "Bulk Aadhaar Masking",
      icon: <MdOutlineMarkEmailRead />,
      description: "Mask Aadhaar numbers in bulk documents for privacy.",
    },
    {
      name: "Bulk Account Verification",
      icon: <MdOutlineAccountBalanceWallet />,
      description: "Verify multiple accounts using OCR-enabled data inputs.",
    },
    {
      name: "Bulk PAN Verification Services",
      icon: <AiOutlineCheckCircle />,
      description: "OCR-powered validation of multiple PAN cards simultaneously.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">AI-Driven </span> OCR Software
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-3">
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

