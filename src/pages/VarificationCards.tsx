import React from "react";
import { motion } from "framer-motion";

const VerificationCards: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#f9f5f3] to-[#f0e4dd] rounded-3xl py-12 px-6 md:px-12 lg:px-16 xl:px-20 text-center shadow-lg">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 px-4 sm:px-6 md:px-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Unlock Success:{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#b7603d] to-[#d48a6c]">
            7Unique Verify's
          </span>{" "}
          Employment BGV Verification API
        </motion.h2>

        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Block 1 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#f0e4dd] overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative overflow-hidden rounded-lg h-48 mb-6">
              <img
                src="https://img.freepik.com/premium-vector/two-steps-verification-illustration-flat-design-illustration_108061-441.jpg"
                alt="Seamless Integration"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-[#b7603d] rounded-full mr-2"></span>
                Seamless Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our BGV Verification API integrates smoothly into your system. With just a few lines of code, start validating employee backgrounds instantly—no disruption, no delays.
              </p>
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#f0e4dd] overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative overflow-hidden rounded-lg h-48 mb-6">
              <img
                src="https://img.freepik.com/premium-photo/3d-illustration-data-phishing-concept-hacker-cyber-criminals-phishing-stealing-private-personal-data-password-email-credit-card-online-scam-malware-password-phishing_68971-1744.jpg"
                alt="Accurate and Trusted"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-[#b7603d] rounded-full mr-2"></span>
                Accurate and Trusted Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At 7Unique Verify, we deliver BGV data directly from official and verified sources. Get up-to-date, reliable information to make faster, smarter hiring decisions.
              </p>
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#f0e4dd] overflow-hidden md:col-span-2 lg:col-span-1"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative overflow-hidden rounded-lg h-48 mb-6">
              <img
                src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-document-protection_516790-2134.jpg"
                alt="Fraud Prevention"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="px-2">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-[#b7603d] rounded-full mr-2"></span>
                Prevent Employment Fraud
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eliminate false identities and fake resumes. 7Unique Verify's Employment Check API protects your HR pipeline by flagging anomalies and ensuring credibility from day one.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VerificationCards;