import type React from "react"
import { Link } from "react-router-dom"

const MCAVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
     {/* Hero Section */}
<section
  className="w-full bg-cover bg-center min-h-screen flex items-center p-16"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">MCA Verification API by 7Unique Verify</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Ministry of Corporate Affairs Verification – Instantly Reliable
      </h2>
      <p className="text-lg mb-4 text-white">
        Seamlessly verify company credentials with our MCA Verification API, powered by 7Unique Verify. Gain real-time access to official corporate data from the Ministry of Corporate Affairs (MCA) database.
      </p>
      <p className="mb-4 text-white">
        Instantly retrieve verified company CIN numbers, director and ROC details, incorporation status, and key compliance insights—all in one secure API.
      </p>
      <p className="mb-6 text-white">
        Ideal for B2B onboarding, vendor validation, KYC automation, fintech applications, and legal due diligence.
      </p>
      <Link
        to="/mca-verification-api"
        className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
      >
        Start Verifying with 7Unique
      </Link>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/images/35.png"
        alt="MCA Verification Illustration"
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
      <span className="text-[#b7603d]">7Unique Verify</span> MCA API Features
    </h2>
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
        <img
          src="../img/images/36.png"
          alt="Company Verification"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Company Information</h3>
        <p className="text-gray-600">
          Access CIN, incorporation date, capital structure, business classification, and more directly from MCA records.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
        <img
          src="../img/images/37.png"
          alt="Director Information"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Director & Management Insights</h3>
        <p className="text-gray-600">
          Get verified director identities, shareholder structure, and key personnel data for business clarity and compliance.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
        <img
          src="../img/images/30.png"
          alt="Compliance Status"
          className="w-full h-48 object-contain mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance & Legal Standing</h3>
        <p className="text-gray-600">
          Instantly check compliance history, annual filing status, and active/inactive status for accurate decision-making.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* How It Works Section */}
<section className="bg-white py-16 px-4 md:px-8 lg:px-20">
  <div className="w-full mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
      How <span className="text-[#b7603d]">7Unique Verify</span> MCA Verification Works
    </h2>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
          1
        </div>
        <h3 className="text-lg font-semibold mb-2">Input Company Identifiers</h3>
        <p className="text-gray-600 text-sm">
          Submit company CIN, name, or registration number securely through our API.
        </p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
          2
        </div>
        <h3 className="text-lg font-semibold mb-2">Connect to MCA Database</h3>
        <p className="text-gray-600 text-sm">
          Our engine queries MCA servers in real-time for official and verified information.
        </p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
          3
        </div>
        <h3 className="text-lg font-semibold mb-2">Data Validation</h3>
        <p className="text-gray-600 text-sm">
          The data is validated, formatted, and enriched before sharing in the response.
        </p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
          4
        </div>
        <h3 className="text-lg font-semibold mb-2">Get Complete Report</h3>
        <p className="text-gray-600 text-sm">
          Receive a structured company report including registration, directors, and compliance records.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Benefits Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Benefits of <span className="text-[#b7603d]">MCA Verification</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Enhanced Due Diligence</h4>
                  <p className="text-gray-600 text-sm">
                    Conduct thorough company verification for partnerships, investments, and business transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Risk Mitigation</h4>
                  <p className="text-gray-600 text-sm">
                    Identify potential risks by verifying company status, compliance history, and financial standing.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Vendor Verification</h4>
                  <p className="text-gray-600 text-sm">
                    Verify vendor credentials and corporate information before establishing business relationships.
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
                    Ensure compliance with KYB (Know Your Business) requirements and anti-money laundering regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="../img/images/38.png"
              alt="MCA Verification Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#b7603d]">MCA Verification</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Banking & Finance</h3>
              <p className="text-gray-600 text-sm">
                Verify company details for corporate account opening, loan processing, and financial services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">B2B Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Validate potential business partners and verify corporate credentials before collaboration.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2">Vendor Management</h3>
              <p className="text-gray-600 text-sm">
                Verify vendor company information for procurement processes and supply chain management.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Investment Due Diligence</h3>
              <p className="text-gray-600 text-sm">
                Conduct thorough company verification before making investment decisions and acquisitions.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold mb-2">Legal & Compliance</h3>
              <p className="text-gray-600 text-sm">
                Verify company status and compliance history for legal proceedings and regulatory requirements.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Market Research</h3>
              <p className="text-gray-600 text-sm">
                Access company information for market analysis, competitor research, and industry insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-[#f7f1ef]








 py-16 px-4 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple <span className="text-[#b7603d]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate our MCA Verification API seamlessly into your applications with comprehensive documentation
                and developer-friendly tools.
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
                <div>POST /api/v1/mca-verification</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"cin": "U72200MH2010PTC123456"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"status": "verified",</div>
                <div className="ml-4">"company_details": {"{"}</div>
                <div className="ml-8">"name": "ABC Technologies Private Limited",</div>
                <div className="ml-8">"registration_date": "2010-05-15",</div>
                <div className="ml-8">"status": "Active",</div>
                <div className="ml-8">"company_type": "Private Limited Company",</div>
                <div className="ml-8">"authorized_capital": "10000000",</div>
                <div className="ml-8">"paid_up_capital": "1000000"</div>
                <div className="ml-4">{"}"},</div>
                <div className="ml-4">"directors": [</div>
                <div className="ml-8">{"{"}</div>
                <div className="ml-12">"name": "John Doe",</div>
                <div className="ml-12">"din": "12345678",</div>
                <div className="ml-12">"designation": "Director"</div>
                <div className="ml-8">{"}"}</div>
                <div className="ml-4">]</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MCAVerificationPage
