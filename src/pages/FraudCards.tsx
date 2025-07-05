import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const FraudCards: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f9f3f0] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#f0d9d0] opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#f0d9d0] opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock the Power of{' '}
            <span className="relative inline-block">
              <span className="relative z-10">7Unique Verify's</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#f0d9d0] -z-10"></span>
            </span>{' '}
            Fraud Detection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced protection against sophisticated fraud with seamless API integration
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b7603d] to-[#e07a4d] rounded-t-xl"></div>
            <div className="relative h-56 overflow-hidden rounded-lg mb-6">
              <img
                src="https://seon.io/wp-content/uploads/2020/05/Fraud-prevention-workflow-with-data-enrichment-1.svg"
                alt="Fraud Prevention Workflow"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#b7603d] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Effortless Fraud Detection</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              7Unique Verify's fraud prevention APIs streamline the process of identifying fake users and suspicious activities. With quick integration and smart insights, businesses can stay protected without heavy infrastructure.
            </p>
            <button className="w-full py-3 bg-[#f0d9d0] text-[#b7603d] font-medium rounded-lg hover:bg-[#b7603d] hover:text-white transition-colors flex items-center justify-center">
              Explore integration
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>

          {/* Card 2 - Featured */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#b7603d]"
          >
            <div className="absolute -top-3 right-6 bg-[#b7603d] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
              MOST POPULAR
            </div>
            <div className="relative h-56 overflow-hidden rounded-lg mb-6">
              <img
                src="/img/8268971_3833777.jpg"
                alt="Fraud Detection API"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#b7603d] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">AI-Powered Identification</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our APIs use data analytics and pattern recognition to detect fraud attempts in real-time. Prevent impersonation, duplicate entries, and synthetic ID fraud with confidence.
            </p>
            <button className="w-full py-3 bg-[#dfa188] text-white font-medium rounded-lg hover:bg-[#9a4f32] transition-colors flex items-center justify-center">
              See live demo
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-56 overflow-hidden rounded-lg mb-6">
              <img
                src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37373.jpg"
                alt="Fraud Risk Assessment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#b7603d] flex items-center justify-center text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Trusted Risk Scoring</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our API cross-verifies identity with official data and transaction behavior, delivering highly accurate fraud risk scores—ideal for financial institutions, NBFCs, and HR platforms.
            </p>
            <button className="w-full py-3 border border-[#b7603d] text-[#b7603d] font-medium rounded-lg hover:bg-[#b7603d] hover:text-white transition-colors flex items-center justify-center">
              View documentation
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FraudCards;