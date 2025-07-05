import React from "react";
import {
  FaFileInvoiceDollar,
  FaRegFileAlt,
  FaUserCheck,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { motion } from "framer-motion";

const FinancialChecksAPIs: React.FC = () => {
  const financialAPIs = [
    {
      name: "ITR Compliance Check",
      icon: <FaUserCheck className="text-3xl" />,
      description: "Verify ITR filing compliance for individuals or businesses via PAN-based lookups.",
    },
    {
      name: "ITR Details Retrieval",
      icon: <FaRegFileAlt className="text-3xl" />,
      description: "Fetch complete ITR documents to assess income trends and historical filings.",
    },
    {
      name: "ITR Profile Summary",
      icon: <MdOutlineAnalytics className="text-3xl" />,
      description: "Access structured financial summaries from ITR data to support credit decisions.",
    },
    {
      name: "Credit Report (Equifax)",
      icon: <FaFileInvoiceDollar className="text-3xl" />,
      description: "Get detailed credit bureau reports from Equifax for lending and underwriting workflows.",
    },
    {
      name: "Credit Score API",
      icon: <FaChartLine className="text-3xl" />,
      description: "Retrieve real-time credit scores to evaluate financial reliability and eligibility.",
    },
    {
      name: "FAQs & API Guidance",
      icon: <FaQuestionCircle className="text-3xl" />,
      description: "Browse frequently asked questions and integration support for all financial APIs.",
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
    <section className="bg-gradient-to-b from-[#f9f5f3] to-white py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-[#b7603d] uppercase tracking-wider">
            Financial Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            APIs Under <span className="text-[#b7603d]">Financial Checks</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-[#b7603d] rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {financialAPIs.map((api, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#b7603d]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b7603d] to-[#fcd3c2]"></div>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-amber-50 rounded-full text-[#b7603d] group-hover:bg-[#b7603d] group-hover:text-white transition-colors duration-300">
                    {api.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {api.name}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {api.description}
                </p>
                <div className="mt-6 flex justify-center">
                 
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialChecksAPIs;