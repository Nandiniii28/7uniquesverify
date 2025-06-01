import type React from "react"

const AadhaarVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aadhaar Verification API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Secure Aadhaar Identity Verification
            </h2>
            <p className="text-lg mb-4 text-white">
              Verify Aadhaar identities instantly with our secure and compliant Aadhaar Verification API. Ensure
              authentic identity verification for your KYC processes with UIDAI-compliant solutions.
            </p>
            <p className="mb-4 text-white">
              Our API provides real-time Aadhaar verification with OTP-based authentication, demographic verification,
              and biometric validation options to meet your specific requirements.
            </p>
            <p className="mb-6 text-white">
              Perfect for banking, fintech, telecom, and any industry requiring secure identity verification with
              India's most trusted identity system.
            </p>
            <a
              href="#"
              className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
            >
              Get Started
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="../img/images/6.png"
              alt="Aadhaar Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 p-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">Aadhaar Verification</span> Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="OTP Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">OTP-based Verification</h3>
              <p className="text-gray-600">
                Secure OTP-based Aadhaar verification ensuring authentic identity validation with UIDAI-compliant
                processes and real-time verification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/personal-data-concept-illustration_114360-4887.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Demographic Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Demographic Verification</h3>
              <p className="text-gray-600">
                Verify demographic details including name, date of birth, gender, and address information against
                Aadhaar database records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Privacy Compliant"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Privacy & Compliance</h3>
              <p className="text-gray-600">
                Fully compliant with UIDAI guidelines and data protection regulations, ensuring secure handling of
                sensitive identity information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white p-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#29a9c5]">Aadhaar Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Enter Aadhaar Number</h3>
              <p className="text-gray-600 text-sm">
                Provide the 12-digit Aadhaar number for verification through our secure API.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">OTP Generation</h3>
              <p className="text-gray-600 text-sm">
                System generates and sends OTP to the registered mobile number for authentication.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">UIDAI Verification</h3>
              <p className="text-gray-600 text-sm">
                Details are verified against UIDAI database with complete privacy compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">
                Receive verified demographic information and authentication status instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="bg-gray-50 p-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-[#29a9c5]">UIDAI Compliant</span> & Secure
            </h2>
            <p className="text-gray-600">
              Our Aadhaar verification service is fully compliant with UIDAI guidelines and maintains the highest
              standards of data security and privacy protection.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">UIDAI Authorized</h4>
                  <p className="text-gray-600 text-sm">
                    Authorized Authentication User Agency (AUA) with official UIDAI approval.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Data Privacy</h4>
                  <p className="text-gray-600 text-sm">
                    No storage of Aadhaar data, ensuring complete privacy and compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Encrypted Transmission</h4>
                  <p className="text-gray-600 text-sm">
                    All data transmission is encrypted using industry-standard protocols.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Audit Trail</h4>
                  <p className="text-gray-600 text-sm">
                    Complete audit trail and logging for compliance and monitoring purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="../img/images/7.png"
              alt="UIDAI Compliance"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white p-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#29a9c5]">Aadhaar Verification</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Banking & Finance</h3>
              <p className="text-gray-600 text-sm">
                KYC compliance for account opening, loan processing, and financial services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Telecom</h3>
              <p className="text-gray-600 text-sm">
                SIM card activation and mobile number verification for telecom operators.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Patient registration and identity verification for healthcare services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold mb-2">Government</h3>
              <p className="text-gray-600 text-sm">Citizen verification for government schemes and digital services.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Corporate</h3>
              <p className="text-gray-600 text-sm">
                Employee onboarding and identity verification for corporate services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Student verification and admission processes for educational institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-gray-50 p-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Easy <span className="text-[#29a9c5]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate Aadhaar verification seamlessly into your applications with our developer-friendly API and
                comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Simple REST API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Multiple authentication methods</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Real-time webhook notifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Comprehensive error handling</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Aadhaar OTP Generation</div>
                <div>POST /api/v1/aadhaar/generate-otp</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"aadhaar_number": "123456789012"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// OTP Verification</div>
                <div>POST /api/v1/aadhaar/verify-otp</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"transaction_id": "abc123",</div>
                <div className="ml-4">"otp": "123456"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AadhaarVerificationPage
