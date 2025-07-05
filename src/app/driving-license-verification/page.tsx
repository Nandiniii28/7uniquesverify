import type React from "react"
import { Link } from "react-router-dom"

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
              Real-time DL Authentication by 7Unique Verify
            </h2>
            <p className="text-lg mb-4 text-white">
              Instantly verify driving license details across India with 7Unique Verify’s secure and scalable API. Validate
              genuine drivers and stay compliant with transport norms effortlessly.
            </p>
            <p className="mb-4 text-white">
              Our DL API cross-verifies license numbers with official RTO data, checks license validity, class, holder info, and flags any disqualifications or restrictions.
            </p>
            <p className="mb-6 text-white">
              Ideal for fleet operators, ride-hailing apps, logistics, vehicle rentals, and any business needing trusted driver identity verification.
            </p>
            <Link
              to="/driving-license-verification-api"
              className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
            >
              Get Started
            </Link>
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
      <section className="py-16 px-1 md:px-8 lg:px-15">
        <div className="max-w-full bg-[#f7f1ef]








 rounded-3xl py-6 px-4 sm:px-6x md:py-12 md:px-20 lg:mx-30 xl:mx-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Powerful <span className="text-[#b7603d]">Driving License</span> Verification Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">

            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/22.png"
                alt="License Validation"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time DL Verification</h3>
              <p className="text-gray-600">
                Instantly validate Indian driving license numbers by connecting with authorized RTO databases. Prevent fraud and ensure active, up-to-date license status.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/23.png"
                alt="Driver Details"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Detailed Driver Profile</h3>
              <p className="text-gray-600">
                Fetch complete driver information including name, date of birth, license type, issue/expiry dates, and any RTO remarks or restrictions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/24.png"
                alt="Safety Compliance"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance & Safety Check</h3>
              <p className="text-gray-600">
                Ensure your business is aligned with transport regulatory standards. Ideal for companies in logistics, mobility, insurance, and financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How <span className="text-[#b7603d]">7Unique Verify's</span> License Verification Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit DL Details</h3>
              <p className="text-gray-600">
                Enter the driving license number along with name and date of birth on the 7Unique Verify platform.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Verify via RTO Databases</h3>
              <p className="text-gray-600">
                7Unique Verify connects securely with authorized RTO sources to validate the submitted license details.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Status Check & Validation</h3>
              <p className="text-gray-600">
                Automatically checks the license’s validity, issuance data, and any existing endorsements or blocks.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-[#b7603d] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Real-Time Report</h3>
              <p className="text-gray-600">
                Instantly receive a verified status report from 7Unique Verify with complete driver and license details.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-24 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto px-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Benefits of Using <span className="text-[#b7603d]">7Unique Verify</span> for License Verification
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Road Safety</h3>
                    <p className="text-gray-600">
                      7Unique Verify helps ensure that only certified drivers are allowed, reducing accidents and liabilities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                    <p className="text-gray-600">
                      Stay compliant with transport and insurance rules using verified license data through 7Unique Verify.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fraud Prevention</h3>
                    <p className="text-gray-600">
                      Avoid fraudulent or expired licenses by verifying every detail via 7Unique Verify's secure system.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#b7603d] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Real-time Validation</h3>
                    <p className="text-gray-600">
                      Instantly fetch valid status, expiry, and issuance details for faster onboarding and verification.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="../img/images/25.png"
                alt="7Unique Verify - License Verification Benefits"
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
            <span className="text-[#b7603d]">Industry</span> Applications
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
      <section className="bg-[#f7f1ef]








 py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Seamless <span className="text-[#b7603d]">7Unique Verify</span> API Integration
              </h2>
              <p className="text-gray-600 mb-6">
                Integrate 7Unique Verify’s Driving License Verification API into your platform effortlessly. Our solution
                supports license checks across all Indian states with rich and real-time driver data.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  PAN-India RTO database integration
                </li>
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Instant license status and validation
                </li>
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Full driver profile with license details
                </li>
                <li className="flex items-center">
                  <span className="bg-[#b7603d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  High-speed, secure JSON responses
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
