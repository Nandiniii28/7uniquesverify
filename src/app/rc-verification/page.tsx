import type React from "react"

const RCVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
     {/* Hero Section */}
<section
  className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">RC Verification API – by 7Unique Verify</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Real-Time Vehicle Registration Certificate Validation
      </h2>
      <p className="text-lg mb-4 text-white">
        Instantly verify vehicle registration details with 7Unique Verify's RC Verification API. Get access to
        real-time data directly from RTO databases for reliable and official vehicle authentication.
      </p>
      <p className="mb-4 text-white">
        This API delivers accurate vehicle information including owner name, registration status, fuel type,
        vehicle class, insurance validity, and more — directly sourced from regional transport offices.
      </p>
      <p className="mb-6 text-white">
        Trusted by insurance providers, used car platforms, banks, and fleet operators for fraud prevention,
        compliance checks, and transparent transactions.
      </p>
      <a
        href="/rc-verification-page-api"
        className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
      >
        Get Started
      </a>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/images/26.png"
        alt="RC Verification"
        className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
      />
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">RC Verification</span> Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/27.png"
                alt="Vehicle Information"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Vehicle Information</h3>
              <p className="text-gray-600">
                Access comprehensive vehicle details including registration number, chassis number, engine number, and vehicle specifications from official RTO records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/29.png"
                alt="Owner Information"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Owner & Registration Details</h3>
              <p className="text-gray-600">
                Verify owner information, registration date, validity period, and tax payment status for comprehensive vehicle due diligence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/30.png"
                alt="Compliance Status"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance & Status Check</h3>
              <p className="text-gray-600">
                Monitor vehicle compliance status, insurance validity, pollution certificate status, and current standing with regulatory authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx- px-16auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#29a9c5]">RC Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit RC Details</h3>
              <p className="text-gray-600 text-sm">
                Provide the vehicle registration number through our secure API interface.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">RTO Database Query</h3>
              <p className="text-gray-600 text-sm">
                Our system connects to official RTO databases and retrieves vehicle information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Verification</h3>
              <p className="text-gray-600 text-sm">
                Vehicle details are validated and cross-referenced for accuracy and completeness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Report</h3>
              <p className="text-gray-600 text-sm">
                Receive comprehensive vehicle information with registration status and owner details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto  px-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Benefits of <span className="text-[#29a9c5]">RC Verification</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Prevent Fraud</h4>
                  <p className="text-gray-600 text-sm">
                    Identify stolen or illegally modified vehicles before purchase or insurance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Risk Assessment</h4>
                  <p className="text-gray-600 text-sm">
                    Evaluate vehicle history and status for insurance and loan processing.
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
                    Ensure vehicles meet all regulatory requirements and tax obligations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Streamlined Processes</h4>
                  <p className="text-gray-600 text-sm">
                    Automate vehicle verification for faster service delivery and customer onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="../img/images/27.png"
              alt="RC Verification Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx- px-16auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#29a9c5]">RC Verification</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold mb-2">Used Car Marketplaces</h3>
              <p className="text-gray-600 text-sm">
                Verify vehicle details and ownership history for used car listings and transactions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Vehicle Financing</h3>
              <p className="text-gray-600 text-sm">
                Validate vehicle information for loan processing and collateral verification.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold mb-2">Insurance Companies</h3>
              <p className="text-gray-600 text-sm">
                Verify vehicle details for policy issuance and claim processing.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-lg font-semibold mb-2">Fleet Management</h3>
              <p className="text-gray-600 text-sm">
                Monitor compliance status and registration validity for fleet vehicles.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Corporate Transportation</h3>
              <p className="text-gray-600 text-sm">
                Verify vehicles used for employee transportation and corporate services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚓</div>
              <h3 className="text-lg font-semibold mb-2">Law Enforcement</h3>
              <p className="text-gray-600 text-sm">
                Quickly access vehicle information for traffic management and investigations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx- px-16auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple <span className="text-[#29a9c5]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate our RC Verification API seamlessly into your applications with comprehensive documentation and developer-friendly tools.
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
                <div>POST /api/v1/rc-verification</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"registration_number": "MH01AB1234"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"status": "verified",</div>
                <div className="ml-4">"vehicle_details": {"{"}</div>
                <div className="ml-8">"owner_name": "John Doe",</div>
                <div className="ml-8">"registration_date": "2020-01-15",</div>
                <div className="ml-8">"vehicle_class": "LMV",</div>
                <div className="ml-8">"fuel_type": "Petrol"</div>
                <div className="ml-4">{"}"},</div>
                <div className="ml-4">"validity": {"{"}</div>
                <div className="ml-8">"registration": "2035-01-14",</div>
                <div className="ml-8">"fitness": "2025-01-14",</div>
                <div className="ml-8">"insurance": "2023-12-31"</div>
                <div className="ml-4">{"}"}</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RCVerificationPage