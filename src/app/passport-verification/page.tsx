import type React from "react"
import { Link } from "react-router-dom"

const PassportVerificationPage: React.FC = () => {
  return (
    <main className="w-full pb-24">
    {/* Hero Section */}
<section
  className="w-full bg-cover bg-center min-h-screen flex items-center"
  style={{ backgroundImage: "url('/img/bg (2).png')" }}
>
  <div className="container mx-auto px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="w-full md:w-2/3 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Passport Verification API – by 7Unique Verify</h1>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
        Real-time Passport Validation for Identity Authentication
      </h2>
      <p className="text-lg mb-4 text-white">
        Instantly verify passport details using 7Unique Verify’s secure API. Authenticate identity and confirm document legitimacy within seconds.
      </p>
      <p className="mb-4 text-white">
        Our API checks passport number validity, verifies holder data, and cross-checks authenticity with official sources—helping prevent fraud and ensuring compliance.
      </p>
      <p className="mb-6 text-white">
        Ideal for immigration services, travel agencies, NBFCs, KYC platforms, and any system that needs verified government-issued identity documentation.
      </p>
      <Link
        to="/passport-verification-page-api"
        className="inline-block bg-[#b7603d] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#d19983] transition-colors"
      >
        Get Started
      </Link>
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src="../img/images/18.png"
        alt="Passport Verification"
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
            <span className="text-[#b7603d]">Passport Verification</span> Features
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/2.png"
                alt="Document Authentication"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Authentication</h3>
              <p className="text-gray-600">
                Verify passport authenticity and validate document security features to prevent fraud and ensure genuine
                travel documents.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl">
              <img
                src="../img/images/11.png"
                alt="Identity Verification"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Identity Verification</h3>
              <p className="text-gray-600">
                Validate passport holder information including name, date of birth, nationality, and other personal
                details against official records.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl text-center transition duration-300 hover:shadow-2xl md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0">
              <img
                src="../img/images/19.png"
                alt="International Coverage"
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Coverage</h3>
              <p className="text-gray-600">
                Support for multiple countries and passport formats with comprehensive international database coverage
                for global verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            How <span className="text-[#b7603d]">Passport Verification</span> Works
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Submit Passport Details</h3>
              <p className="text-gray-600 text-sm">
                Provide passport number, holder name, and other required details for verification.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Database Validation</h3>
              <p className="text-gray-600 text-sm">
                System validates passport details against official government and international databases.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Check</h3>
              <p className="text-gray-600 text-sm">
                Verify document security features and check for any fraud indicators or blacklist status.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Verification Results</h3>
              <p className="text-gray-600 text-sm">
                Receive comprehensive verification results with passport status and validity information.
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
              Benefits of <span className="text-[#b7603d]">Passport Verification</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Fraud Prevention</h4>
                  <p className="text-gray-600 text-sm">
                    Detect fake or tampered passports to prevent identity fraud and document forgery.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Compliance Assurance</h4>
                  <p className="text-gray-600 text-sm">
                    Ensure compliance with immigration laws and international travel regulations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Enhanced Security</h4>
                  <p className="text-gray-600 text-sm">
                    Strengthen security measures with verified passport information and identity validation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[#b7603d] rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold">Global Coverage</h4>
                  <p className="text-gray-600 text-sm">
                    Verify passports from multiple countries with comprehensive international database access.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="../img/images/20.png"
              alt="Passport Verification Benefits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16 px-16 md:px-8 lg:px-20">
        <div className="w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            <span className="text-[#b7603d]">Passport Verification</span> Use Cases
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">✈️</div>
              <h3 className="text-lg font-semibold mb-2">Travel & Tourism</h3>
              <p className="text-gray-600 text-sm">
                Verify customer passports for travel bookings, visa applications, and tourism services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-lg font-semibold mb-2">Hospitality</h3>
              <p className="text-gray-600 text-sm">
                Validate guest passports for hotel check-ins and international visitor registration.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Banking</h3>
              <p className="text-gray-600 text-sm">
                Verify international customer identities for account opening and financial services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-lg font-semibold mb-2">Immigration</h3>
              <p className="text-gray-600 text-sm">
                Authenticate passport documents for visa processing and immigration services.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold mb-2">Corporate</h3>
              <p className="text-gray-600 text-sm">
                Verify employee passports for international assignments and business travel.
              </p>
            </div>
            <div className="bg-[#f7f1ef]








 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-gray-600 text-sm">
                Validate international student passports for admissions and visa documentation.
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
                Integrate passport verification seamlessly into your applications with our developer-friendly API and
                comprehensive documentation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>RESTful API with JSON responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>International passport support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Real-time verification results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#b7603d]">✓</span>
                  <span>Comprehensive error handling</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-400">// Sample API Request</div>
                <div>POST /api/v1/passport-verification</div>
                <div className="text-yellow-400 mt-2">{"{"}</div>
                <div className="ml-4">"passport_number": "A1234567",</div>
                <div className="ml-4">"holder_name": "John Doe",</div>
                <div className="ml-4">"country": "IND"</div>
                <div className="text-yellow-400">{"}"}</div>
                <div className="mt-4 text-gray-400">// Response</div>
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">"status": "verified",</div>
                <div className="ml-4">"valid": true,</div>
                <div className="ml-4">"expiry_date": "2030-12-31"</div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PassportVerificationPage
