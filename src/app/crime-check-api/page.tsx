import type React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaShieldAlt,
  FaDatabase,
  FaLock,
  FaUserTie,
  FaHome,
  FaUniversity,
  FaBriefcaseMedical,
  FaCar,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaClock,
  FaBalanceScale,
  FaServer
} from "react-icons/fa";

const CrimeCheckAPIPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
        {/* Enhanced Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">7Unique Verify – Bank Account Verification API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Secure & Instant Bank Account Validation
            </h2>
            <p className="text-lg mb-4 text-white">
              Validate bank account details in real time using the trusted 7Unique Verify Bank Account Verification API. Ensure error-free transactions, compliance, and fraud prevention with our advanced verification engine.
            </p>
            <p className="mb-4 text-white">
              Our system confirms account number validity, verifies IFSC codes, and cross-checks account holder names across all major Indian banks, offering seamless API integration for your business.
            </p>
            <p className="mb-6 text-white">
              Ideal for payment gateways, lending platforms, e-commerce stores, salary disbursals, and any process where reliable bank verification is crucial.
            </p>
            <Link
              to="/api-catalog"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/images/4.png"
              alt="7Unique Verify – Bank Account Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f1ef]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#f3e8e3] text-[#b7603d] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              KEY FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-[#b7603d]">7Unique Verify</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful criminal background verification with unmatched accuracy and speed
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Real-time Criminal Record Verification",
                description: "Instantly verify individuals using live access to national and regional criminal databases. Reduce risk and ensure safe onboarding with actionable results in seconds.",
                image: "/img/image/10077.jpg"
              },
              {
                title: "Pan-India Court & Police Record Access",
                description: "Get unmatched coverage across police FIRs, court judgments, charge sheets, and public legal notices with our expansive database network powered by 7Unique Verify.",
                image: "/img/image/databaseadmin_4.jpg"
              },
              {
                title: "Compliant & Secure Verification",
                description: "Stay aligned with legal mandates and ensure privacy standards. 7Unique Verify is built with strong data protection layers and audit-ready reporting for compliance-driven sectors.",
                image: "/img/image/20943399.jpg"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#f3e8e3] text-[#b7603d] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How <span className="text-[#b7603d]">Crime Check</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps for comprehensive criminal background verification
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Submit Details",
                description: "Provide personal information including name, date of birth, and identification details for verification."
              },
              {
                step: "2",
                title: "Database Search",
                description: "Our system searches multiple criminal databases and official records for any matching information."
              },
              {
                step: "3",
                title: "Record Analysis",
                description: "Advanced algorithms analyze and cross-reference data to ensure accuracy and completeness."
              },
              {
                step: "4",
                title: "Detailed Report",
                description: "Receive comprehensive background report with criminal history and risk assessment details."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f7f1ef] rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f1ef]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div>
                <span className="inline-block bg-[#f3e8e3] text-[#b7603d] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  BENEFITS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Why Trust <span className="text-[#b7603d]">7Unique Verify?</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Accurate & Reliable Results",
                    description: "Backed by verified sources, 7Unique Verify delivers high-accuracy criminal background data to help you make informed decisions confidently."
                  },
                  {
                    title: "Blazing-Fast Response Time",
                    description: "Our Crime Check API is optimized for speed—get actionable insights within seconds, ideal for real-time verifications."
                  },
                  {
                    title: "Compliant & Audit-Ready",
                    description: "Fully aligned with legal norms, including DPDP and GDPR principles, making it safe for HR, NBFCs, and onboarding processes."
                  },
                  {
                    title: "Bank-Grade Data Security",
                    description: "All communication is secured with enterprise-grade encryption, ensuring complete confidentiality of sensitive data."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-[#b7603d] rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img
                src="/img/image/8058227.jpg"
                alt="Crime Check Benefits"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#f3e8e3] text-[#b7603d] px-4 py-1 rounded-full text-sm font-semibold mb-4">
              APPLICATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#b7603d]">Crime Check API</span> Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful verification for multiple industries and scenarios
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaUserTie className="text-4xl text-[#b7603d] " />,
                title: "Employee Screening",
                description: "Verify potential employees' criminal backgrounds to ensure workplace safety and security."
              },
              {
                icon: <FaHome className="text-4xl text-[#b7603d] " />,
                title: "Tenant Verification",
                description: "Screen potential tenants to protect property and ensure safe rental environments."
              },
              {
                icon: <FaUniversity className="text-4xl text-[#b7603d] " />,
                title: "Financial Services",
                description: "Conduct due diligence for loan approvals and financial service applications."
              },
              {
                icon: <FaUsers className="text-4xl text-[#b7603d] " />,
                title: "Educational Institutions",
                description: "Verify staff and volunteers to maintain safe educational environments."
              },
              {
                icon: <FaBriefcaseMedical className="text-4xl text-[#b7603d] " />,
                title: "Healthcare",
                description: "Screen healthcare workers and volunteers for patient safety and compliance."
              },
              {
                icon: <FaCar className="text-4xl text-[#b7603d] " />,
                title: "Transportation",
                description: "Verify drivers and transportation workers for passenger safety and security."
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f7f1ef] hover:bg-white p-8 rounded-lg text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f7f1ef]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div>
                <span className="inline-block bg-[#f3e8e3] text-[#b7603d] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  INTEGRATION
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Easy <span className="text-[#b7603d]">API Integration</span>
                </h2>
              </div>
              
              <p className="text-gray-600 text-lg">
                Seamlessly integrate the 7Unique Verify Crime Check API into your platform with clear documentation and developer-first tools. Designed for scalability and ease of use.
              </p>
              
              <div className="space-y-4">
                {[
                  "RESTful API with secure JSON responses",
                  "Supports custom webhooks & multiple output formats",
                  "Complete SDKs and API documentation for dev teams",
                  "Dedicated sandbox environment for testing & staging"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                    </div>
                    <p className="text-gray-800">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                <div className="px-6 py-4 bg-gray-800 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">api-integration.js</div>
                </div>
                <div className="p-6 font-mono text-sm text-green-400 overflow-x-auto">
                  <div className="text-gray-500">// Sample API Request</div>
                  <div className="mb-2">fetch('https://api.7uniqueverify.com/crime-check', {'{'}</div>
                  <div className="ml-4">method: 'POST',</div>
                  <div className="ml-4">headers: {'{'}</div>
                  <div className="ml-8">'Authorization': 'Bearer YOUR_API_KEY',</div>
                  <div className="ml-8">'Content-Type': 'application/json'</div>
                  <div className="ml-4">{'}'},</div>
                  <div className="ml-4">body: JSON.stringify({'{'}</div>
                  <div className="ml-8">name: 'John Doe',</div>
                  <div className="ml-8">dob: '1990-01-01'</div>
                  <div className="ml-4">{'}'})</div>
                  <div className="mt-4 text-gray-500">// Sample Response</div>
                  <div>{'{'}</div>
                  <div className="ml-4 text-blue-400">"status": <span className="text-green-400">"verified"</span>,</div>
                  <div className="ml-4 text-blue-400">"criminal_records": <span className="text-yellow-400">false</span>,</div>
                  <div className="ml-4 text-blue-400">"risk_level": <span className="text-green-400">"low"</span></div>
                  <div>{'}'}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CrimeCheckAPIPage; 