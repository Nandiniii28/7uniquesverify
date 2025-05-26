import React from "react";
import {
  FaFileInvoiceDollar,
  FaRegFileAlt,
  FaUserCheck,
  FaChartLine,
  FaQuestionCircle,
} from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

const FinancialChecksAPIs: React.FC = () => {
  const financialAPIs = [
    {
      name: "ITR Compliance Check",
      icon: <FaUserCheck />,
      description: "Verify the compliance status of filed ITRs for individuals or businesses.",
    },
    {
      name: "ITR Details Retrieval API",
      icon: <FaRegFileAlt />,
      description: "Retrieve detailed ITR information for financial history analysis.",
    },
    {
      name: "ITR Profile Retrieval",
      icon: <MdOutlineAnalytics />,
      description: "Access summarized ITR profiles to assist in creditworthiness checks.",
    },
    {
      name: "Credit Report Equifax",
      icon: <FaFileInvoiceDollar />,
      description: "Get comprehensive credit reports directly from Equifax.",
    },
    {
      name: "Credit Score",
      icon: <FaChartLine />,
      description: "Access credit score data to assess financial credibility.",
    },
    {
      name: "Frequently Asked",
      icon: <FaQuestionCircle />,
      description: "Access common queries and their resolutions related to APIs.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          APIs Under <span className="text-[#29a9c5]">Financial Checks</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {financialAPIs.map((api, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-[#29a9c5] text-4xl">
                {api.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {api.name}
              </h3>
              <p className="text-gray-600 text-sm">{api.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialChecksAPIs;
