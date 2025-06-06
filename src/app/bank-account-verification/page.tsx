import type React from "react"
import { Link } from "react-router-dom"

const BankAccountVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
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
        className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
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
      <section className="bg-gray-50 p-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Features of <span className="text-[#29a9c5]">Bank Account Verification</span>
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Account Validation"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Account Validation</h3>
              <p className="text-gray-600">
                Instantly verify bank account numbers and IFSC codes across all major Indian banks with real-time
                validation and accurate results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Name Matching"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Holder Name Verification</h3>
              <p className="text-gray-600">
                Verify account holder names to ensure transactions are processed to the correct beneficiary, reducing
                errors and fraud risks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="https://img.freepik.com/free-vector/banking-concept-illustration_114360-1373.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Multi-bank Support"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Multi-bank Coverage</h3>
              <p className="text-gray-600">
                Support for all major banks and financial institutions in India, ensuring comprehensive coverage for
                your verification needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white p-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#29a9c5]">Bank Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Details</h3>
              <p className="text-gray-600 text-sm">
                Provide bank account number, IFSC code, and account holder name for verification.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-600 text-sm">
                Our system connects to bank databases and processes verification in real-time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Validation Check</h3>
              <p className="text-gray-600 text-sm">
                Account details are validated against official bank records for accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600 text-sm">
                Receive comprehensive verification results with account status and holder information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 p-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Benefits of <span className="text-[#29a9c5]">Bank Account Verification</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Reduce Payment Failures</h4>
                  <p className="text-gray-600 text-sm">
                    Verify account details before processing payments to minimize failed transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Prevent Fraud</h4>
                  <p className="text-gray-600 text-sm">
                    Detect fraudulent accounts and protect your business from financial losses.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Improve Customer Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Ensure smooth payment processing and reduce customer friction during transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Regulatory Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Meet KYC and AML requirements with verified bank account information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="../img/images/5.png"
              alt="Bank Verification Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="bg-white p-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Industry <span className="text-[#29a9c5]">Applications</span>
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Banking & Finance</h3>
              <p className="text-gray-600 text-sm">
                Verify customer bank accounts for loan processing, account opening, and financial services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-2">E-commerce</h3>
              <p className="text-gray-600 text-sm">
                Validate seller and buyer bank accounts for secure marketplace transactions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="text-lg font-semibold mb-2">Fintech</h3>
              <p className="text-gray-600 text-sm">
                Integrate bank verification into digital wallets, payment apps, and financial platforms.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Corporate</h3>
              <p className="text-gray-600 text-sm">
                Verify vendor and employee bank accounts for payroll and payment processing.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Insurance</h3>
              <p className="text-gray-600 text-sm">
                Validate policyholder bank accounts for premium collection and claim settlements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Verify student and parent bank accounts for fee collection and scholarship disbursements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-gray-50 p-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple <span className="text-[#29a9c5]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Get started with our Bank Account Verification API in minutes. Our comprehensive documentation and SDKs
                make integration seamless across all platforms.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>SDKs for popular programming languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Comprehensive documentation and examples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Sandbox environment for testing</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div>POST /api/v1/bank-verification</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"account_number": "1234567890",</div>
                <div className="ml-4">"ifsc_code": "SBIN0001234",</div>
                <div className="ml-4">"account_holder_name": "John Doe"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"status": "verified",</div>
                <div className="ml-4">"account_exists": true,</div>
                <div className="ml-4">"name_match": "exact"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BankAccountVerificationPage
