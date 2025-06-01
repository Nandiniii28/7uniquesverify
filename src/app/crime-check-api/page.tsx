import type React from "react"

const CrimeCheckAPIPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crime Check API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Comprehensive Criminal Background Verification
            </h2>
            <p className="text-lg mb-4 text-white">
              Ensure safety and security with our advanced Crime Check API. Verify criminal records and background
              information instantly to make informed decisions about individuals and maintain a secure environment.
            </p>
            <p className="mb-4 text-white">
              Our Crime Check API provides real-time access to criminal databases, helping you identify potential risks
              and ensure compliance with safety regulations across various industries.
            </p>
            <p className="mb-6 text-white">
              From employee screening to tenant verification, our comprehensive crime check solution delivers accurate
              and reliable results to protect your business and stakeholders.
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
              src="/img/image/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection.png"
              alt="Crime Check API Illustration"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Key Features of <span className="text-[#29a9c5]">Crime Check API</span>
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="/img/image/10077.jpg"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Criminal Record Verification</h3>
              <p className="text-gray-600">
                Access comprehensive criminal databases instantly to verify background information and identify
                potential security risks with real-time data processing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="/img/image/databaseadmin_4.jpg"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Database Coverage</h3>
              <p className="text-gray-600">
                Our API covers multiple criminal databases including court records, police records, and other official
                sources to provide complete background verification.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="/img/image/20943399.jpg"
                alt="Compliance Ready"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance & Legal Standards</h3>
              <p className="text-gray-600">
                Ensure compliance with legal requirements and industry standards for background verification while
                maintaining data privacy and security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#29a9c5]">Crime Check</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Details</h3>
              <p className="text-gray-600 text-sm">
                Provide personal information including name, date of birth, and identification details for verification.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Database Search</h3>
              <p className="text-gray-600 text-sm">
                Our system searches multiple criminal databases and official records for any matching information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Record Analysis</h3>
              <p className="text-gray-600 text-sm">
                Advanced algorithms analyze and cross-reference data to ensure accuracy and completeness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Report</h3>
              <p className="text-gray-600 text-sm">
                Receive comprehensive background report with criminal history and risk assessment details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Why Choose Our <span className="text-[#29a9c5]">Crime Check API?</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Accurate & Reliable Results</h4>
                  <p className="text-gray-600 text-sm">
                    Get precise criminal background information with high accuracy rates for informed decision-making.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Fast Processing</h4>
                  <p className="text-gray-600 text-sm">
                    Receive instant results with optimized API infrastructure for time-sensitive applications.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Legal Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Maintain compliance with privacy regulations and legal requirements for background checks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Secure Data Handling</h4>
                  <p className="text-gray-600 text-sm">
                    Encrypted data transmission and secure storage with industry-standard security protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="/img/image/8058227.jpg"
              alt="Crime Check Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#29a9c5]">Crime Check API</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold mb-2">Employee Screening</h3>
              <p className="text-gray-600 text-sm">
                Verify potential employees' criminal backgrounds to ensure workplace safety and security.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Tenant Verification</h3>
              <p className="text-gray-600 text-sm">
                Screen potential tenants to protect property and ensure safe rental environments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-600 text-sm">
                Conduct due diligence for loan approvals and financial service applications.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Educational Institutions</h3>
              <p className="text-gray-600 text-sm">
                Verify staff and volunteers to maintain safe educational environments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Screen healthcare workers and volunteers for patient safety and compliance.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold mb-2">Transportation</h3>
              <p className="text-gray-600 text-sm">
                Verify drivers and transportation workers for passenger safety and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-gray-50 py-16 px-16 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Easy <span className="text-[#29a9c5]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate our Crime Check API seamlessly into your existing systems with comprehensive documentation and
                developer-friendly tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Simple REST API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Multiple response formats and webhooks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#29a9c5]">✓</span>
                  <span>Comprehensive SDKs and documentation</span>
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
                <div>curl -X POST \</div>
                <div className="ml-4">https://api.sprintverify.com/crime-check \</div>
                <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                <div className="ml-4">-H "Content-Type: application/json" \</div>
                {/* <div className="ml-4">-d '{"name" : "John Doe", "dob": \"1990-01-01"}'</div> */}
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"status": "verified",</div>
                <div className="ml-4">"criminal_records": false,</div>
                <div className="ml-4">"risk_level": "low"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CrimeCheckAPIPage
