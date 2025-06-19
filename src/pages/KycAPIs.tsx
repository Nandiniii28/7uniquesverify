import React from "react";
import { motion } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-[#fdfaf9] to-[#fcf6f4] py-20 px-4 md:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            APIs Under{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b7603d] to-[#d88a6e]">
              KYC Verification
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#b7603d] to-[#d88a6e] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {apiServices.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f7f1ef] to-[#f0e4df] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              {/* Icon with animation */}
              <motion.div 
                className="flex justify-center mb-6 text-[#b7603d]  text-4xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#b7603d] transition-colors duration-300">
                {service.name}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-[#b7603d]/10 group-hover:bg-[#b7603d]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default APIsUnderKyc;