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
      description: "Instantly validate Indian and international passports for identity checks.",
    },
    {
      name: "PAN Verification",
      icon: <FaIdCard />,
      description: "Verify PAN details in real-time to ensure legal and tax compliance.",
    },
    {
      name: "Driving Licence Verification",
      icon: <FaCar />,
      description: "Authenticate DL records via government databases for secure user validation.",
    },
    {
      name: "Bank Account Verification",
      icon: <FaUniversity />,
      description: "Confirm beneficiary bank accounts using penny-drop or penny-less methods.",
    },
    {
      name: "Aadhaar Verification",
      icon: <FaMapMarkerAlt />,
      description: "Verify Aadhaar number with consent-based checks through UIDAI gateway.",
    },
    {
      name: "Aadhaar QR Search",
      icon: <FaQrcode />,
      description: "Scan Aadhaar QR codes and extract demographic info for fast onboarding.",
    },
    {
      name: "Aadhaar Without OTP",
      icon: <FaFingerprint />,
      description: "Enable biometric or offline Aadhaar verification without user OTP.",
    },
    {
      name: "EKYC Search",
      icon: <FaSearch />,
      description: "Fetch electronic KYC data using Digilocker consent and secure APIs.",
    },
    {
      name: "UPI / VPA Verification",
      icon: <FaRegCreditCard />,
      description: "Validate UPI IDs and VPA handles to ensure ownership and accuracy.",
    },
    {
      name: "CKYC Download",
      icon: <FaDownload />,
      description: "Download Central KYC (CKYC) data from the registry for due diligence.",
    },
    {
      name: "RC Verification",
      icon: <FaMapSigns />,
      description: "Check vehicle ownership and RC status with RTO-integrated APIs.",
    },
    {
      name: "UPI Info API",
      icon: <FaInfoCircle />,
      description: "Access UPI-linked details including bank names and VPA meta info.",
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
              <div className="flex justify-center mb-4 text-[#29a9c5] text-4xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIsUnderKyc;
