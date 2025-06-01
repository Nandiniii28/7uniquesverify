import type React from "react"

const CKYCSearchPage: React.FC = () => {
  return (
    <main className="max-w-7xl pb-24">
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-center min-h-screen flex items-center"
        style={{ backgroundImage: "url('/img/bg (2).png')" }}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CKYC Search & Download API</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
              Central KYC Registry Search & Download
            </h2>
            <p className="text-lg mb-4 text-white">
              Access and download CKYC records instantly with our comprehensive CKYC Search & Download API. Streamline
              your KYC processes with centralized customer data from the official CKYC registry.
            </p>
            <p className="mb-4 text-white">
              Our API enables financial institutions to search, retrieve, and download CKYC records, reducing duplicate
              KYC processes and ensuring compliance with RBI regulations.
            </p>
            <p className="mb-6 text-white">
              Perfect for banks, NBFCs, and financial institutions looking to optimize their customer onboarding and KYC
              compliance processes.
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
              src="https://img.freepik.com/free-vector/database-concept-illustration_114360-1234.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
              alt="CKYC Search & Download"
              className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">CKYC</span> API Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/search-concept-illustration_114360-1110.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="CKYC Search"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive CKYC Search</h3>
              <p className="text-gray-600">
                Search CKYC records using multiple parameters including PAN, Aadhaar, mobile number, and other
                identifiers to find existing customer records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="https://img.freepik.com/free-vector/download-concept-illustration_114360-2299.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="Record Download"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Record Download</h3>
              <p className="text-gray-600">
                Download complete CKYC records with all customer information, documents, and verification status for
                seamless integration into your systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="https://img.freepik.com/free-vector/compliance-concept-illustration_114360-8062.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="RBI Compliance"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">RBI Compliant Process</h3>
              <p className="text-gray-600">
                Fully compliant with RBI guidelines and CKYC regulations, ensuring secure and authorized access to
                customer KYC information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How <span className="text-[#29a9c5]">CKYC Search</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Search Parameters</h3>
              <p className="text-gray-600">
                Enter customer identifiers like PAN, Aadhaar, or mobile number for CKYC search.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Registry Search</h3>
              <p className="text-gray-600">
                Our system searches the Central KYC Registry for matching customer records.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Record Retrieval</h3>
              <p className="text-gray-600">
                Retrieve complete CKYC records with all customer information and documents.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#2dc1e3] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Download</h3>
              <p className="text-gray-600">
                Download records securely with full compliance and audit trail maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Benefits of <span className="text-[#29a9c5]">CKYC Integration</span>
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Reduced KYC Time</h3>
                    <p className="text-gray-600">
                      Eliminate duplicate KYC processes and reduce onboarding time by 80%.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cost Efficiency</h3>
                    <p className="text-gray-600">Reduce operational costs with automated CKYC record retrieval.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">RBI Compliance</h3>
                    <p className="text-gray-600">Ensure full compliance with RBI CKYC guidelines and regulations.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#2dc1e3] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Enhanced Customer Experience</h3>
                    <p className="text-gray-600">Provide seamless onboarding with pre-verified customer information.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="https://img.freepik.com/free-vector/kyc-benefits-illustration_114360-5678.jpg?uid=R200786995&ga=GA1.1.1683687550.1747121644&semt=ais_hybrid&w=740"
                alt="CKYC Benefits"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            <span className="text-[#29a9c5]">CKYC</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Banking Sector</h3>
              <p className="text-gray-600">
                Account opening, loan processing, and customer onboarding for banks and NBFCs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Insurance Companies</h3>
              <p className="text-gray-600">Policy issuance and claims processing with pre-verified customer data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Mutual Funds</h3>
              <p className="text-gray-600">Investor onboarding and portfolio management with CKYC records.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Fintech Platforms</h3>
              <p className="text-gray-600">Digital lending and payment services with streamlined KYC processes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Wealth Management</h3>
              <p className="text-gray-600">High-net-worth client onboarding with comprehensive KYC data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Credit Bureaus</h3>
              <p className="text-gray-600">Credit assessment and risk evaluation with verified customer information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-15">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Simple <span className="text-[#29a9c5]">CKYC API</span> Integration
              </h2>
              <p className="text-gray-600 mb-6">
                Integrate CKYC search and download functionality with our robust API. Built for financial institutions
                with enterprise-grade security and compliance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  RBI compliant API endpoints
                </li>
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Secure data transmission with encryption
                </li>
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Real-time search and download
                </li>
                <li className="flex items-center">
                  <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3">
                    ✓
                  </span>
                  Complete audit trail and logging
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
              >
                Access API Documentation
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`curl -X POST https://api.sprintverify.com/v1/ckyc/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "search_type": "pan",
    "search_value": "ABCDE1234F"
  }'

Response:
{
  "status": "success",
  "data": {
    "ckyc_id": "CK123456789",
    "customer_name": "John Doe",
    "download_url": "https://api.../download/CK123456789",
    "last_updated": "2024-01-15"
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

export default CKYCSearchPage
