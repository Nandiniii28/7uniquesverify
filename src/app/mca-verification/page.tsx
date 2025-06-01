import type React from "react"

const MCAVerificationPage: React.FC = () => {
  return (
    <main className="max-w-7xl pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MCA Verification API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Ministry of Corporate Affairs Verification
            </h2>
            <p className="text-lg mb-4 text-white">
              Verify company details instantly with our comprehensive MCA Verification API. Access official corporate
              information from the Ministry of Corporate Affairs database for reliable business verification.
            </p>
            <p className="mb-4 text-white">
              Our API provides detailed company information including CIN verification, director details, financial
              status, and compliance records from official MCA databases.
            </p>
            <p className="mb-6 text-white">
              Essential for B2B transactions, vendor verification, due diligence processes, and any business requiring
              authentic corporate information and compliance verification.
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
              src="https://img.freepik.com/free-vector/corporate-concept-illustration_114360-1789.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="MCA Verification"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">MCA Verification</span> Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2345.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Company Verification"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Company Information</h3>
              <p className="text-gray-600">
                Access comprehensive company details including CIN, registration status, authorized capital, paid-up
                capital, and business activities from MCA records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/director-concept-illustration_114360-5678.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Director Information"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Director & Shareholder Details</h3>
              <p className="text-gray-600">
                Verify director information, shareholding patterns, and key management personnel details for
                comprehensive corporate due diligence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="https://img.freepik.com/free-vector/compliance-concept-illustration_114360-8062.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Compliance Status"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Compliance & Status Check</h3>
              <p className="text-gray-600">
                Monitor company compliance status, filing history, and current standing with regulatory authorities for
                risk assessment and due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#29a9c5]">MCA Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Company Details</h3>
              <p className="text-gray-600 text-sm">
                Provide CIN, company name, or registration number through our secure API interface.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">MCA Database Query</h3>
              <p className="text-gray-600 text-sm">
                Our system connects to official MCA databases and retrieves company information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Data Processing</h3>
              <p className="text-gray-600 text-sm">
                Company details are processed, structured, and validated for accuracy and completeness.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Report</h3>
              <p className="text-gray-600 text-sm">
                Receive detailed company information with registration status, director details, and compliance records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Benefits of <span className="text-[#29a9c5]">MCA Verification</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
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
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
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
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
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
                <div className="w-6 h-6 bg-[#29a9c5] rounded-full flex items-center justify-center text-white text-sm">
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
              src="https://img.freepik.com/free-vector/business-due-diligence-concept-illustration_114360-1534.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="MCA Verification Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#29a9c5]">MCA Verification</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Banking & Finance</h3>
              <p className="text-gray-600 text-sm">
                Verify company details for corporate account opening, loan processing, and financial services.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">B2B Partnerships</h3>
              <p className="text-gray-600 text-sm">
                Validate potential business partners and verify corporate credentials before collaboration.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2">Vendor Management</h3>
              <p className="text-gray-600 text-sm">
                Verify vendor company information for procurement processes and supply chain management.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Investment Due Diligence</h3>
              <p className="text-gray-600 text-sm">
                Conduct thorough company verification before making investment decisions and acquisitions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-lg font-semibold mb-2">Legal & Compliance</h3>
              <p className="text-gray-600 text-sm">
                Verify company status and compliance history for legal proceedings and regulatory requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
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
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Simple <span className="text-[#29a9c5]">API Integration</span>
              </h2>
              <p className="text-gray-600">
                Integrate our MCA Verification API seamlessly into your applications with comprehensive documentation
                and developer-friendly tools.
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
