import type React from "react"
import { Link } from "react-router-dom"

const PANVerificationPage: React.FC = () => {
  return (
    <main className="w-full  pb-24">
     {/* Hero Section */}
<section
  className="w-full bg-cover bg-center min-h-screen flex items-center p-16"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">PAN Verification API – by 7Unique Verify</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Real-time PAN Card Authentication & Status Check
      </h2>
      <p className="text-lg mb-4 text-white">
        Instantly validate PAN card numbers, match names, and verify status with 7Unique Verify's secure and accurate API integration.
      </p>
      <p className="mb-4 text-white">
        Our PAN Verification API fetches real-time details from the Income Tax database, ensuring error-free KYC,
        fraud detection, and regulatory compliance across industries.
      </p>
      <p className="mb-6 text-white">
        Ideal for fintech platforms, NBFCs, e-commerce apps, loan providers, and any business requiring valid tax identification and customer onboarding.
      </p>
      <Link
        to="/pan-verification-api"
        className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
      >
        Get Started
      </Link>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/images/8.png"
        alt="PAN Verification"
        className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
      />
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-16 px-1 md:px-8 lg:px-15">
        <div className="max-w-full bg-[#f7f1ef]








 rounded-3xl py-6 px-4 sm:px-6x md:py-12 md:px-20 lg:mx-30 xl:mx-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#b7603d]">PAN Verification</span> Capabilities
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/10.png"
                alt="PAN Validation"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time PAN Validation</h3>
              <p className="text-gray-600">
                Instantly validate PAN numbers against the Income Tax Department database to ensure authenticity and
                active status of PAN cards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/11.png"
                alt="Name Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Name Verification</h3>
              <p className="text-gray-600">
                Verify the name associated with PAN numbers to ensure accurate identity matching and prevent fraudulent
                activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/12.png"
                alt="Tax Compliance"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tax Compliance Check</h3>
              <p className="text-gray-600">
                Ensure tax compliance by verifying PAN status and validity, helping businesses maintain regulatory
                compliance and avoid penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How <span className="text-[#b7603d]">PAN Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit PAN Number</h3>
              <p className="text-gray-600">Enter the PAN number you want to verify through our secure API endpoint.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Database Validation</h3>
              <p className="text-gray-600">Our system validates the PAN against official Income Tax Department records.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Name Matching</h3>
              <p className="text-gray-600">Verify the name associated with the PAN for complete identity validation.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">Receive comprehensive verification results in real-time with detailed status information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f7f1ef]








 px-24  md:px-8 lg:px-15">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Benefits of <span className="text-[#b7603d]">PAN Verification</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                    <p className="text-gray-600">Ensure compliance with tax regulations and KYC requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fraud Prevention</h3>
                    <p className="text-gray-600">Prevent identity fraud and fake PAN submissions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instant Verification</h3>
                    <p className="text-gray-600">Real-time verification with immediate results.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">High Accuracy</h3>
                    <p className="text-gray-600">99.9% accuracy with official government database integration.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="../img/images/9.png"
                alt="PAN Verification Benefits"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="p-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#b7603d]">Industry</span> Applications
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Banking & Finance</h3>
              <p className="text-gray-600">Account opening, loan processing, and KYC compliance for financial institutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
              <p className="text-gray-600">Seller verification and customer onboarding for online marketplaces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Insurance</h3>
              <p className="text-gray-600">Policy holder verification and claims processing automation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Fintech</h3>
              <p className="text-gray-600">Digital wallet setup and peer-to-peer payment verification.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
              <p className="text-gray-600">Property buyer verification and transaction compliance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Government</h3>
              <p className="text-gray-600">Citizen service delivery and subsidy distribution verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-[#f7f1ef]








 p-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Easy <span className="text-[#b7603d]">API Integration</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Integrate PAN verification into your application with just a few lines of code. Our RESTful API is designed for developers with comprehensive documentation and support.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">✓</span>
                  RESTful API with JSON responses
                </li>
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">✓</span>
                  Comprehensive API documentation
                </li>
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">✓</span>
                  Multiple programming language SDKs
                </li>
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">✓</span>
                  24/7 developer support
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
              >
                View API Documentation
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`curl -X POST https://api.sprintverify.com/v1/pan/verify \\
                      -H "Authorization: Bearer YOUR_API_KEY" \\
                      -H "Content-Type: application/json" \\
                      -d '{
                        "pan_number": "ABCDE1234F",
                        "name": "John Doe"
                      }'

                    Response:
                    {
                      "status": "success",
                      "data": {
                        "pan_number": "ABCDE1234F",
                        "name_match": true,
                        "is_valid": true,
                        "status": "ACTIVE"
                      }
                  }`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PANVerificationPage
