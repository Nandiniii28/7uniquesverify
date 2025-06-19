import React from "react";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

const FinancialFeatures: React.FC = () => {
  const features = [
    {
      title: "Enhanced Security",
      description:
        "7Unique Verify's APIs use bank-grade encryption and secure authentication to safeguard every transaction. Prevent unauthorized access and ensure data privacy throughout your financial workflows.",
      icon: <RiShieldKeyholeLine className="text-[#b7603d] text-2xl" />,
    },
    {
      title: "Built-in Compliance",
      description:
        "Stay audit-ready and compliant with RBI, SEBI, and income tax regulations. Our Financial Checks API includes automated checks and reporting to keep your business aligned with changing norms.",
      icon: <FaBalanceScale className="text-[#b7603d] text-2xl" />,
    },
    {
      title: "Effortless Integration",
      description:
        "Plug into your existing platforms in minutes. Our Fraud Indicators API is designed with a developer-first approach, ensuring smooth onboarding and low-code deployment across use cases.",
      icon: <FiSettings className="text-[#b7603d] text-2xl" />,
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
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <div className="relative">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-cardano-illustration_23-2149214816.jpg"
                alt="Financial API Illustration"
                className="w-full h-auto object-contain rounded-xl "
              />
              <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-[#b7603d] to-amber-200 rounded-xl blur-md opacity-20"></div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2 space-y-10"
            variants={itemVariants}
          >
            <div>
              <span className="text-sm font-semibold text-[#b7603d] uppercase tracking-wider">
                Financial APIs
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
                Unveiling the Power of{" "}
                <span className="text-[#b7603d]">7Unique Verify</span> for Fraud & Risk Checks
              </h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group flex gap-4 p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-3 bg-amber-50 rounded-full group-hover:bg-[#b7603d] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialFeatures;