import React from "react";
import {
  FaPassport,
  FaBroadcastTower,
  FaWallet,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const LookupAPIs: React.FC = () => {
  const apiServices = [
    {
      name: "Passport Verification",
      icon: <FaPassport className="w-8 h-8" />,
      description:
        "Cross-check passport details using mobile linkage—ideal for identity validation during onboarding.",
    },
    {
      name: "Telecom Details",
      icon: <FaBroadcastTower className="w-8 h-8" />,
      description:
        "Instantly retrieve SIM circle, operator type, and provider information linked to a number.",
    },
    {
      name: "Mobile to UPI/VPA",
      icon: <FaWallet className="w-8 h-8" />,
      description:
        "Fetch the UPI ID (VPA) tied to a mobile number—perfect for verifying transaction identities.",
    },
    {
      name: "Mobile to UAN",
      icon: <FaUserCircle className="w-8 h-8" />,
      description:
        "Identify the Universal Account Number (UAN) mapped with a mobile—useful in employee and PF-related verifications.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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
    <section className="bg-gradient-to-br from-[#fffefd] to-[#f0e6e1] py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lookup with Confidence via{" "}
            <span className="text-[#b7603d] bg-clip-text bg-gradient-to-r from-[#b7603d] to-[#d48b6a]">
              7Unique Verify
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful verification APIs to enhance your onboarding and KYC processes
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {apiServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center border border-[#f0e6e1] group-hover:border-[#d48b6a]/30">
                <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#f9f5f3] to-[#f0e6e1] text-[#b7603d] group-hover:from-[#f0e6e1] group-hover:to-[#d48b6a] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LookupAPIs;