import type React from "react"
import { Link } from "react-router-dom"

const MobileVerificationAPIPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
    {/* Hero Section */}
<section
  className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">7Unique Verify – Mobile Verification API</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Instant & Reliable Mobile Number Authentication
      </h2>
      <p className="text-lg mb-4 text-white">
        Secure your platforms with real-time mobile number verification through our robust API. Whether you're onboarding users or implementing 2FA, our system ensures legitimate mobile access with minimal friction.
      </p>
      <p className="mb-4 text-white">
        Gain access to accurate telecom data, carrier detection, OTP generation & verification, and fraud prevention tools—all in one unified mobile verification service.
      </p>
      <p className="mb-6 text-white">
        Ideal for financial apps, eCommerce platforms, KYC processes, and login verifications. Power your trust layer with <strong>7Unique Verify</strong>.
      </p>
      <Link
        to="/mobile-verification-page-api"
        className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
      >
        Get Started
      </Link>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/images/7.png"
        alt="Mobile Verification API"
        className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
      />
    </div>
  </div>
</section>


      {/* Features Section */}
<section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
  <div className="max-w-full mx-auto text-center px-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      <span className="text-[#29a9c5]">7Unique Verify</span> – Mobile Verification API Features
    </h2>

    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
      {/* OTP Generation */}
      <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
        <img
          src="../img/images/39.png"
          alt="OTP Verification"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">OTP Generation & Verification</h3>
        <p className="text-gray-600">
          Generate and validate secure OTPs for mobile number verification. Ensure user authenticity with seamless
          integration and real-time response.
        </p>
      </div>

      {/* Carrier & Network Info */}
      <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
        <img
          src="../img/images/40.png"
          alt="Carrier Information"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Carrier & Network Intelligence</h3>
        <p className="text-gray-600">
          Instantly fetch telecom insights such as operator name, network circle, SIM type, and connectivity status to
          aid in verification and fraud analysis.
        </p>
      </div>

      {/* Fraud Protection */}
      <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
        <img
          src="../img/images/41.png"
          alt="Fraud Prevention"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Fraud Prevention & Risk Assessment</h3>
        <p className="text-gray-600">
          Identify suspicious activity and prevent fake registrations using advanced mobile validation and telecom-level
          risk scoring techniques.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* How It Works Section */}
<section className="py-16">
  <div className="max-w-full mx-auto px-16 md:px-8 lg:px-15">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        How <span className="text-[#29a9c5]">7Unique Verify</span> Mobile Verification Works
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto">
        The 7Unique Verify Mobile Verification API delivers a fast, reliable, and secure number authentication flow—perfectly suited for real-time onboarding and user validation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Step 1 */}
      <div className="text-center">
        <div className="bg-[#29a9c5] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold mb-4">Input Mobile Number</h3>
        <p className="text-gray-600">
          The user submits their mobile number. Our API checks format accuracy and identifies carrier metadata.
        </p>
      </div>

      {/* Step 2 */}
      <div className="text-center">
        <div className="bg-[#29a9c5] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold mb-4">OTP Triggered Instantly</h3>
        <p className="text-gray-600">
          A secure, time-sensitive OTP is generated and sent to the user’s number via SMS or preferred route.
        </p>
      </div>

      {/* Step 3 */}
      <div className="text-center">
        <div className="bg-[#29a9c5] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold mb-4">User Submits OTP</h3>
        <p className="text-gray-600">
          The user inputs the received OTP into your application. It’s validated instantly on our secure backend.
        </p>
      </div>

      {/* Step 4 */}
      <div className="text-center">
        <div className="bg-[#29a9c5] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          4
        </div>
        <h3 className="text-xl font-semibold mb-4">Verification Status</h3>
        <p className="text-gray-600">
          7Unique Verify confirms successful verification and shares detailed mobile and risk insights in the API response.
        </p>
      </div>
    </div>
  </div>
</section>
  {/* Benefits Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-full mx-auto px-16">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose <span className="text-[#29a9c5]">7Unique Verify</span> Mobile Verification
        </h2>
        <p className="text-gray-600 mb-8">
          7Unique Verify offers a robust, scalable, and globally trusted mobile number verification system—backed by secure infrastructure and intelligent delivery routing.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-[#29a9c5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">99.9% OTP Delivery Success</h3>
              <p className="text-gray-600">
                Partnered with top-tier global telecom carriers to ensure real-time and dependable OTP delivery worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#29a9c5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Global Reach, Local Precision</h3>
              <p className="text-gray-600">
                Seamless mobile number verification in over 200+ countries with intelligent routing for optimized delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#29a9c5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-600">
                Fully encrypted data pipelines, dynamic fraud protection, and compliance with global data regulations.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-[#29a9c5] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
              ✓
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Analytics Dashboard</h3>
              <p className="text-gray-600">
                Access detailed delivery insights, verification logs, and analytics to optimize user flows and KPIs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-1/2">
        <img
          src="../img/images/42.png"
          alt="7Unique Mobile Verification Benefits"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* Use Cases Section */}
      <section className="py-16">
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-15">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#29a9c5]">Use Cases</span> Across Industries
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our mobile verification API serves diverse industries with tailored solutions for various business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce & Retail</h3>
              <p className="text-gray-600">Secure customer registration, order confirmations, and account recovery for online shopping platforms.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600">Two-factor authentication for banking apps, payment verification, and secure transaction confirmations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
              <p className="text-gray-600">Patient registration, appointment confirmations, and secure access to medical records and telemedicine platforms.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Food Delivery</h3>
              <p className="text-gray-600">Order confirmations, delivery updates, and customer verification for food delivery and restaurant apps.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">Student registration, exam notifications, and secure access to online learning platforms and educational resources.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Travel & Hospitality</h3>
              <p className="text-gray-600">Booking confirmations, check-in notifications, and customer verification for hotels and travel booking platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-15">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Easy <span className="text-[#29a9c5]">API Integration</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Get started with our mobile verification API in minutes. Simple REST endpoints, comprehensive documentation, and multiple SDK options.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-[#29a9c5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-gray-700">RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#29a9c5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-gray-700">SDKs for popular programming languages</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#29a9c5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-gray-700">Webhook support for real-time updates</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#29a9c5] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">✓</div>
                  <span className="text-gray-700">Comprehensive API documentation</span>
                </div>
              </div>

              <a
                href="#"
                className="inline-block bg-[#29a9c5] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
              >
                View API Documentation
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-400 mb-2"># Send OTP</div>
                <div className="text-white">curl -X POST https://api.example.com/v1/mobile/send-otp \</div>
                <div className="text-white ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-white ml-4">-H "Content-Type: application/json" \</div>
                <div className="text-white ml-4">-d '</div>
                <div className="text-white ml-8">"mobile_number": "+1234567890",</div>
                <div className="text-white ml-8">"country_code": "US",</div>
                {/* <div className="text-white ml-8">"template": "Your OTP is: {otp}"</div> */}
                <div className="text-white ml-4">'</div>
                <br />
                <div className="text-gray-400 mb-2"># Verify OTP</div>
                <div className="text-white">curl -X POST https://api.example.com/v1/mobile/verify-otp \</div>
                <div className="text-white ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="text-white ml-4">-H "Content-Type: application/json" \</div>
                <div className="text-white ml-4">-d '</div>\
                <div className="text-white ml-8">"mobile_number": "+1234567890",</div>
                <div className="text-white ml-8">"otp": "123456"</div>
                <div className="text-white ml-4">'</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MobileVerificationAPIPage
