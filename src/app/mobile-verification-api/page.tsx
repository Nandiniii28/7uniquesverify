import type React from "react"

const MobileVerificationAPIPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Verification API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Secure Mobile Number Verification Service
            </h2>
            <p className="text-lg mb-4 text-white">
              Verify mobile numbers instantly with our comprehensive Mobile Verification API. Ensure authentic user
              registration and reduce fraud with real-time mobile number validation and OTP verification.
            </p>
            <p className="mb-4 text-white">
              Our API provides mobile number validation, carrier information, OTP generation and verification, and
              detailed telecom data for reliable user authentication.
            </p>
            <p className="mb-6 text-white">
              Perfect for user onboarding, two-factor authentication, account security, and any application requiring
              mobile number verification and validation.
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
              src="https://img.freepik.com/free-vector/mobile-verification-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="Mobile Verification API"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">Mobile Verification</span> API Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/otp-concept-illustration_114360-5678.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="OTP Verification"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">OTP Generation & Verification</h3>
              <p className="text-gray-600">
                Generate and verify secure OTPs for mobile number authentication, ensuring reliable user verification
                and account security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/carrier-concept-illustration_114360-2345.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Carrier Information"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Carrier & Network Information</h3>
              <p className="text-gray-600">
                Access detailed carrier information including network operator, circle, connection type, and other
                telecom data for comprehensive verification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="https://img.freepik.com/free-vector/fraud-prevention-concept-illustration_114360-1789.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Fraud Prevention"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fraud Prevention & Security</h3>
              <p className="text-gray-600">
                Prevent fraudulent registrations and enhance security with advanced mobile number validation and risk
                assessment capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MobileVerificationAPIPage
