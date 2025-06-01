import type React from "react"

const DrivingLicenseVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving License Verification API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Instant Driving License Validation
            </h2>
            <p className="text-lg mb-4 text-white">
              Verify driving license details instantly with our comprehensive Driving License Verification API. Ensure
              valid driver credentials and compliance with transportation regulations.
            </p>
            <p className="mb-4 text-white">
              Our API validates license numbers, verifies holder information, checks license status, and provides
              detailed information about driving privileges and restrictions.
            </p>
            <p className="mb-6 text-white">
              Perfect for ride-sharing platforms, vehicle rental services, insurance companies, and any business
              requiring driver verification and compliance.
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
              src="../img/images/21.png"
              alt="Driving License Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">Driving License</span> Verification Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/22.png"
                alt="License Validation"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time License Validation</h3>
              <p className="text-gray-600">
                Instantly validate driving license numbers against RTO databases to ensure authenticity and current
                validity status of driver credentials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/23.png"
                alt="Driver Details"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Driver Information</h3>
              <p className="text-gray-600">
                Access detailed driver information including name, address, license class, validity dates, and any
                endorsements or restrictions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/24.png"
                alt="Safety Compliance"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety & Compliance Check</h3>
              <p className="text-gray-600">
                Ensure road safety and regulatory compliance by verifying driver qualifications and license status for
                transportation services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How <span className="text-[#29a9c5]">License Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Enter License Details</h3>
              <p className="text-gray-600">Submit driving license number and personal information for verification.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">RTO Database Check</h3>
              <p className="text-gray-600">
                Validate against official Regional Transport Office databases across India.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Status Verification</h3>
              <p className="text-gray-600">
                Check license validity, endorsements, and any restrictions or suspensions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Report</h3>
              <p className="text-gray-600">
                Receive comprehensive verification results with driver qualification details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-24 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Benefits of <span className="text-[#29a9c5]">License Verification</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Road Safety</h3>
                    <p className="text-gray-600">
                      Ensure only qualified drivers operate vehicles, reducing accident risks and liability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                    <p className="text-gray-600">
                      Meet transportation regulations and insurance requirements for commercial operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fraud Prevention</h3>
                    <p className="text-gray-600">
                      Detect fake or expired licenses to prevent unauthorized vehicle operation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Validation</h3>
                    <p className="text-gray-600">
                      Instant verification with up-to-date license status and validity information.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="../img/images/25.png"
                alt="License Verification Benefits"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">Industry</span> Applications
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Ride-sharing Platforms</h3>
              <p className="text-gray-600">
                Driver onboarding and continuous verification for Uber, Ola, and other ride-sharing services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Vehicle Rental Services</h3>
              <p className="text-gray-600">
                Customer verification for car rentals, bike rentals, and commercial vehicle leasing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Insurance Companies</h3>
              <p className="text-gray-600">
                Policy underwriting and claims processing with verified driver credentials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Logistics & Delivery</h3>
              <p className="text-gray-600">
                Driver verification for delivery services, trucking companies, and logistics providers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Fleet Management</h3>
              <p className="text-gray-600">
                Corporate fleet driver verification and compliance monitoring for businesses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Employment Verification</h3>
              <p className="text-gray-600">
                Background checks for jobs requiring driving, including delivery and transportation roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Robust <span className="text-[#29a9c5]">License API</span> Integration
              </h2>
              <p className="text-gray-600 mb-6">
                Integrate driving license verification seamlessly into your platform. Our API supports all Indian states
                and provides comprehensive driver information.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  All-India RTO database coverage
                </li>
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Real-time license status updates
                </li>
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Detailed driver information
                </li>
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  High-speed API responses
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
              >
                View API Documentation
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`curl -X POST https://api.sprintverify.com/v1/dl/verify \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "license_number": "DL1420110012345",
    "date_of_birth": "1990-01-01"
  }'

Response:
{
  "status": "success",
  "data": {
    "license_number": "DL1420110012345",
    "name": "John Doe",
    "is_valid": true,
    "expiry_date": "2025-12-31",
    "license_class": "LMV",
    "issuing_rto": "Delhi"
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

export default DrivingLicenseVerificationPage
