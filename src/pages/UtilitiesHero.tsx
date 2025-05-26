import React from "react";

const UtilitiesHero: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/img/bg (2).png')" }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-2/3 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Utility Verification API
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#f6fbfc]">
            Streamline Operations with Our Comprehensive Utilities API
          </h2>
          <p className="text-lg mb-4 text-white">
            Optimise risk management and enhance operational efficiency with our Utilities API suite. Seamlessly integrate reliable tools to verify and validate crucial identifiers that support smarter, faster decision-making.
          </p>
          <p className="mb-4 text-white">
            From LEI (Legal Entity Identifier) checks to IMEI (International Mobile Equipment Identity) validation, our APIs are designed to provide essential data at your fingertips. Whether you're assessing business partners or onboarding customers, accurate verification is key.
          </p>
          <p className="mb-6 text-white">
            Take control of compliance and verification workflows with ease. Our Utilities Verification APIs ensure that your systems remain secure, efficient, and trustworthy — giving your business the foundation it needs to grow confidently.
          </p>
          <a
            href="#"
            className="inline-block bg-[#2dc1e3] text-white font-semibold px-6 py-3 rounded shadow hover:bg-[#79d9ef] transition-colors"
          >
            Explore APIs
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/settings-concept-illustration_114360-2051.jpg?t=st=1716747691~exp=1716751291~hmac=816228d9bb61668f315ad7d6e16cd5ad720763cbb3aa64f09ed94f1875c7c0f7&w=740"
            alt="Utilities API Illustration"
            className="w-full h-auto object-contain max-w-[500px] md:max-w-[600px] lg:max-w-[700px]"
          />
        </div>

      </div>
    </section>
  );
};

export default UtilitiesHero;
