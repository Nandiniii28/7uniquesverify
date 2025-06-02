import type React from "react"

const BuzzingForBharatPage: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pb-24">
      {/* Hero Section */}
      <section className="text-center all-banner-section mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight relative z-10">Buzzing for भारत</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed relative z-10">
          Empowering India's digital transformation with innovative verification solutions.
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

      {/* Content Section */}
      <section className="mt-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Digital India Initiative</h3>
            <p className="text-gray-700 mb-4">
              7Unique Verify is proud to be part of India's digital transformation journey. We are committed to supporting
              the Digital India initiative by providing cutting-edge verification and identity solutions that enable
              secure, efficient, and inclusive digital services for all Indians.
            </p>
            <p className="text-gray-700">
              Our technology empowers businesses, government agencies, and financial institutions to build trust in the
              digital ecosystem while ensuring compliance with Indian regulations and standards.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/image/indian-map-floating-smartwatch.png"
              alt="Digital India"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <img
              src="/img/image/robot-handshake-human-background-futuristic-digital-age.png"
              alt="Innovation"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold mb-6">Innovation for Bharat</h3>
            <p className="text-gray-700 mb-4">
              We believe in the power of innovation to solve real-world problems. Our solutions are designed
              specifically for the Indian market, understanding the unique challenges and opportunities in our diverse
              nation.
            </p>
            <p className="text-gray-700">
              From rural areas to metropolitan cities, our APIs and verification services are built to work seamlessly
              across India's varied technological landscape, ensuring that digital services reach every corner of
              Bharat.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Empowering Businesses</h3>
            <p className="text-gray-700 mb-4">
              We are committed to empowering Indian businesses of all sizes - from startups to large enterprises - with
              the tools they need to verify identities, prevent fraud, and ensure compliance in the digital age.
            </p>
            <p className="text-gray-700">
              Our mission is to make advanced verification technology accessible and affordable for every business in
              India, contributing to the growth of a secure and trustworthy digital economy.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/image/business-leader-standing-arrow-holding-flag-flat-vector-illustration-cartoon-people-training-doing-business-plan-leadership-victory-challenge-concept.png"
              alt="Business Growth"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#F4FAFF] rounded-xl p-8 mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Join the Digital Revolution</h3>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Be part of India's digital transformation. Partner with 7Unique Verify to build secure, efficient, and inclusive
          digital services that serve all of Bharat.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-[#2dc1e3] text-white font-semibold px-8 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
        >
          Get Started Today
        </a>
      </section>
    </main>
  )
}

export default BuzzingForBharatPage
