import type React from "react"

const ProductsPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24">
      {/* Hero Section */}
      <section className="text-center all-banner-section mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight relative z-10">Our Products</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed relative z-10">
          Comprehensive verification and identity solutions for modern businesses.
        </p>
        <div
          aria-hidden="true"
          className="absolute inset-0 flex justify-center items-center pointer-events-none"
          style={{
            top: "0",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg
            aria-hidden="true"
            className="opacity-10"
            fill="none"
            height="160"
            width="160"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 0v160M80 0v160M120 0v160M0 40h160M0 80h160M0 120h160" stroke="#D1D5DB" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[
          {
            title: "CANDY - Identity as a Service",
            description:
              "AI-powered identity verification platform with customizable workflows and 100+ identity checks.",
            link: "/candy",
          },
          {
            title: "KYC Verification",
            description: "Comprehensive KYC solutions for identity verification and compliance requirements.",
            link: "/kyc",
          },
          {
            title: "KYB Verification",
            description: "Business verification and due diligence for enhanced risk management.",
            link: "/kyb",
          },
          {
            title: "Fraud Detection",
            description: "Advanced fraud detection and prevention using AI-powered risk assessment.",
            link: "/fraud-detection",
          },
          {
            title: "Phone Number Lookup",
            description: "Comprehensive mobile number verification and carrier information lookup.",
            link: "/phone-number-lookup",
          },
          {
            title: "Financial Checks",
            description: "Financial verification and credit assessment for secure transactions.",
            link: "/financial-checks",
          },
          {
            title: "Employee Background Verification",
            description: "Comprehensive background checks for secure hiring and onboarding.",
            link: "/employee-verification",
          },
          {
            title: "AI-Driven OCR Software",
            description: "Intelligent document processing and text extraction with AI technology.",
            link: "/ocr",
          },
          {
            title: "Utilities",
            description: "Essential utility APIs for currency exchange, IMEI validation, and more.",
            link: "/utilities",
          },
        ].map((product, index) => (
          <article key={index} className="bg-[#F5F9FA] rounded-xl overflow-hidden shadow-sm p-6">
            <h3 className="font-semibold text-lg leading-snug mb-3">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <a href={product.link} className="text-xs font-semibold flex items-center space-x-1 text-black">
              <span>Learn More</span>
              <span className="bg-[#2dc1e3] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold leading-none">
                ›
              </span>
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ProductsPage
