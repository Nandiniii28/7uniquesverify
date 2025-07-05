import type React from "react"
import { Link } from "react-router-dom"

const VoterIDVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
      {/* Hero Section */}
<section
  className="w-full bg-cover bg-center min-h-screen flex items-center px-16"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">7Unique Verify – Voter ID Verification API</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Real-time Electoral Identity Check & Address Proof Validation
      </h2>
      <p className="text-lg mb-4 text-white">
        Instantly verify voter identity details using 7Unique Verify's powerful Voter ID Verification API. Ensure trusted onboarding with secure, real-time access to Election Commission records.
      </p>
      <p className="mb-4 text-white">
        The API matches voter IDs, cross-checks personal details, and fetches electoral roll information, helping your platform remain compliant and fraud-free.
      </p>
      <p className="mb-6 text-white">
        Ideal for financial services, digital platforms, KYC processes, and any application needing validated voter identity and residence data.
      </p>
      <Link
        to="/voter-id-verification-api"
        className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
      >
        Get Started
      </Link>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/images/31.png"
        alt="Voter ID Verification"
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
            <span className="text-[#b7603d]">Voter ID</span> Verification Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/32.png"
                alt="Electoral Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electoral Database Verification</h3>
              <p className="text-gray-600">
                Verify Voter ID details against official Election Commission databases to ensure authentic electoral
                identity and voter registration status.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/33.png"
                alt="Address Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Address Proof Validation</h3>
              <p className="text-gray-600">
                Validate address information from Voter ID cards to provide reliable address proof verification for
                various compliance requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/34.png"
                alt="Identity Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Identity Check</h3>
              <p className="text-gray-600">
                Perform comprehensive identity verification using Voter ID information including name, father's name,
                age, and constituency details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#b7603d]">Voter ID Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Voter ID</h3>
              <p className="text-gray-600 text-sm">
                Provide the Voter ID number or EPIC number through our secure API interface.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Electoral Database Query</h3>
              <p className="text-gray-600 text-sm">
                Our system connects to official Election Commission databases and retrieves voter information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Verification</h3>
              <p className="text-gray-600 text-sm">
                Voter details are validated and cross-referenced for accuracy and authenticity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Report</h3>
              <p className="text-gray-600 text-sm">
                Receive comprehensive voter information with registration status and address details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Benefits of <span className="text-[#b7603d]">Voter ID Verification</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Reliable Address Verification</h4>
                  <p className="text-gray-600 text-sm">
                    Use Voter ID as a trusted source for address verification in KYC processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Prevent Identity Fraud</h4>
                  <p className="text-gray-600 text-sm">
                    Verify authentic voter identities to prevent impersonation and identity theft.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Regulatory Compliance</h4>
                  <p className="text-gray-600 text-sm">
                    Meet KYC and identity verification requirements with government-issued ID verification.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Streamlined Onboarding</h4>
                  <p className="text-gray-600 text-sm">
                    Automate voter ID verification for faster customer onboarding and service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="../img/images/6.png"
              alt="Voter ID Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#b7603d]">Voter ID Verification</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Banking & Finance</h3>
              <p className="text-gray-600 text-sm">
                Verify customer identity and address for account opening and financial services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-semibold mb-2">Telecom</h3>
              <p className="text-gray-600 text-sm">
                Validate customer identity and address for SIM card activation and services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold mb-2">Government Services</h3>
              <p className="text-gray-600 text-sm">
                Verify citizen identity for government scheme enrollment and service delivery.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600 text-sm">
                Validate tenant identity and address for rental agreements and property transactions.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Verify patient identity and address for healthcare services and insurance claims.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Validate student and parent identity for admission processes and scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple <span className="text-[#b7603d]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate our Voter ID Verification API seamlessly into your applications with comprehensive
                documentation and developer-friendly tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>SDKs for popular programming languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Comprehensive documentation and examples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Sandbox environment for testing</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div>POST /api/v1/voter-id-verification</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"voter_id": "ABC1234567"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"status": "verified",</div>
                <div className="ml-4">"voter_details": {"{"}</div>
                <div className="ml-8">"name": "John Doe",</div>
                <div className="ml-8">"father_name": "Robert Doe",</div>
                <div className="ml-8">"age": 35,</div>
                <div className="ml-8">"gender": "Male"</div>
                <div className="ml-4">{"}"},</div>
                <div className="ml-4">"address": {"{"}</div>
                <div className="ml-8">"house_no": "123",</div>
                <div className="ml-8">"street": "Main Street",</div>
                <div className="ml-8">"locality": "Downtown",</div>
                <div className="ml-8">"district": "Central",</div>
                <div className="ml-8">"state": "Maharashtra"</div>
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

export default VoterIDVerificationPage
