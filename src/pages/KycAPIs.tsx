import React from "react";
import {
  FaPassport,
  FaIdCard,
  FaCar,
  FaUniversity, 
  FaMapMarkerAlt,
  FaQrcode,
  FaFingerprint,
  FaSearch,
  FaRegCreditCard,
  FaDownload,
  FaMapSigns,
  FaInfoCircle,
} from "react-icons/fa";

const APIsUnderKyc: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport />,
      description: "Verify the authenticity of passports for identity validation.",
    },
    {
      name: "PAN Verification",
      icon: <FaIdCard />,
      description: "Authenticate PAN cards to ensure accurate tax records.",
    },
    {
      name: "Driving Licence Verification",
      icon: <FaCar />,
      description: "Confirm the validity of driving licenses for legal compliance.",
    },
    {
      name: "Bank Account Verification",
      icon: <FaUniversity />,
      description: "Validate bank account details to prevent fraud.",
    },
    {
      name: "Aadhaar Verification",
      icon: <FaMapMarkerAlt />,
      description: "Authenticate Aadhaar cards for secure identity verification.",
    },
    {
      name: "Aadhar QR Search",
      icon: <FaQrcode />,
      description: "Scan and verify Aadhaar QR codes for quick validation.",
    },
    {
      name: "Aadhaar Without OTP",
      icon: <FaFingerprint />,
      description: "Verify Aadhaar details without requiring OTP.",
    },
    {
      name: "EKYC Search",
      icon: <FaSearch />,
      description: "Perform electronic KYC searches for compliance.",
    },
    {
      name: "UPI / VPA Verification",
      icon: <FaRegCreditCard />,
      description: "Authenticate UPI IDs and Virtual Payment Addresses.",
    },
    {
      name: "CKYC Download",
      icon: <FaDownload />,
      description: "Download CKYC records for customer due diligence.",
    },
    {
      name: "RC Verification",
      icon: <FaMapSigns />,
      description: "Verify Registration Certificates for vehicles.",
    },
    {
      name: "UPI Info API",
      icon: <FaInfoCircle />,
      description: "Retrieve UPI-related information for transactions.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">KYC Verification</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-8">
          {apiServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#29a9c5] text-4xl ">
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

export default APIsUnderKyc;
